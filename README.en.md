# Dreams: Proto Sharing

Package with the gRPC contracts (`.proto` files) used by the Dreams microservices. It is published to npm as `dreams-proto-sharing` and keeps client and server on the same types and methods.

Part of my Bachelor's thesis [Microservices Architecture: Projects, Patterns and Principles](https://github.com/christiancesar/dreams-origins/blob/main/docs/TCC-Christian-Cesar-2022-Arquitetura-de-Microsservicos.pdf) (UFR, 2022, in Portuguese). The microservices that consume this package are in [dreams-project-microservices](https://github.com/christiancesar/dreams-project-microservices).

Portuguese version: [README.md](README.md)

## Why a separate package

In the thesis, the contracts were centralized to avoid diverging copies across services. The trade-off is that a change has to be agreed with the teams that consume the contract. So changes go through this repository first, and only then are published.

## Contracts

Each domain has a `.proto` file and the files generated from it:

```
src/contracts/
├── flight/   flight.proto, flight_pb.js/.d.ts, flight_grpc_pb.js/.d.ts
├── hotel/    hotel.proto, hotel_pb.js/.d.ts, hotel_grpc_pb.js/.d.ts
├── package/  package.proto, package_pb.js/.d.ts, package_grpc_pb.js/.d.ts
└── user/     user.proto, user_pb.js/.d.ts, user_grpc_pb.js/.d.ts
```

The `*_pb` files contain the messages, and the `*_grpc_pb` files contain the services (`UsersService`, `FlightsService` and so on), along with the TypeScript typings.

## Usage

Install the package in the service that will consume the contracts:

```bash
yarn add dreams-proto-sharing
```

Import the file for the domain you need. For example, the flights client:

```ts
import { FlightsClient } from 'dreams-proto-sharing/src/contracts/flight/flight_grpc_pb';
import { FlightOffersRequest } from 'dreams-proto-sharing/src/contracts/flight/flight_pb';
```

The `main` field in `package.json` points to `index.js`, which does not exist in the repository. Always import by file path, as above.

## Recompiling

Only needed if you change a `.proto` file:

```bash
yarn install
yarn compile
```

The `compile` script runs `grpc_tools_node_protoc` twice: once to generate the JavaScript and the gRPC stubs, and once with the `protoc-gen-ts` plugin to generate the typings. It uses the glob `./src/contracts/**/*.proto`. In shells without `globstar`, `**` may not reach subfolders, so check that every domain was generated.

## Publishing

The repository does not document the publishing process. The current version is `1.0.5-a`. After changing a contract, bump the version in `package.json`, recompile, and publish to npm with the project's account.

## Note

The generated files are versioned together with the `.proto` files. That way the package works for anyone who installs it, without requiring `grpc-tools` in the consumer.
