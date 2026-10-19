# Dreams: Proto Sharing

Pacote com os contratos gRPC (arquivos `.proto`) usados pelos microsserviços do projeto Dreams. Ele é publicado no npm como `dreams-proto-sharing` e é o que mantém cliente e servidor com os mesmos tipos e métodos.

Faz parte do TCC [Arquitetura de Microsserviços: Projetos, Padrões e Princípios](https://github.com/christiancesar/dreams-origins/blob/main/docs/TCC-Christian-Cesar-2022-Arquitetura-de-Microsservicos.pdf) (UFR, 2022). Os microsserviços que consomem este pacote estão em [dreams-project-microservices](https://github.com/christiancesar/dreams-project-microservices).

Versão em inglês: [README.en.md](README.en.md)

## Por que um pacote separado

No TCC, os contratos foram centralizados para evitar cópias divergentes entre serviços. A contrapartida é que uma mudança precisa ser combinada com as equipes que consomem o contrato. Por isso, a alteração passa por este repositório e só depois é publicada.

## Contratos

Cada domínio tem um `.proto` e os arquivos gerados a partir dele:

```
src/contracts/
├── flight/   flight.proto, flight_pb.js/.d.ts, flight_grpc_pb.js/.d.ts
├── hotel/    hotel.proto, hotel_pb.js/.d.ts, hotel_grpc_pb.js/.d.ts
├── package/  package.proto, package_pb.js/.d.ts, package_grpc_pb.js/.d.ts
└── user/     user.proto, user_pb.js/.d.ts, user_grpc_pb.js/.d.ts
```

Os arquivos `*_pb` contêm as mensagens e os `*_grpc_pb` contêm os serviços (`UsersService`, `FlightsService` e assim por diante), incluindo as tipagens TypeScript.

## Como usar

Instale o pacote no serviço que vai consumir os contratos:

```bash
yarn add dreams-proto-sharing
```

Importe o arquivo do domínio que precisa. Por exemplo, para o cliente de voos:

```ts
import { FlightsClient } from 'dreams-proto-sharing/src/contracts/flight/flight_grpc_pb';
import { FlightOffersRequest } from 'dreams-proto-sharing/src/contracts/flight/flight_pb';
```

O campo `main` do `package.json` aponta para `index.js`, que não existe no repositório. Importe sempre pelo caminho do arquivo, como acima.

## Como recompilar

Só é preciso se você alterar um `.proto`:

```bash
yarn install
yarn compile
```

O script `compile` roda o `grpc_tools_node_protoc` duas vezes: uma para gerar o JavaScript e os stubs gRPC, outra com o plugin `protoc-gen-ts` para gerar as tipagens. Ele usa o glob `./src/contracts/**/*.proto`. Em shells sem `globstar`, o padrão `**` pode não varrer subpastas, então confira se todos os domínios foram gerados.

## Publicação

O repositório não documenta o processo de publicação. A versão atual é `1.0.5-a`. Depois de alterar um contrato, atualize a versão no `package.json`, recompile, e publique no npm com a conta do projeto.

## Observação

Os arquivos gerados estão versionados junto com os `.proto`. Assim o pacote funciona para quem o instala, sem exigir o `grpc-tools` no consumidor.
