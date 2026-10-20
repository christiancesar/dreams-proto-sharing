# dreams-proto-sharing

Pacote com os contratos gRPC (arquivos `.proto`) e o código gerado a partir deles, usados pelos microsserviços do projeto Dreams. Ele é publicado no npm como `dreams-proto-sharing` e mantém cliente e servidor com os mesmos tipos e métodos.

Faz parte do TCC [Arquitetura de Microsserviços: Projetos, Padrões e Princípios](https://github.com/christiancesar/dreams-origins/blob/main/docs/TCC-Christian-Cesar-2022-Arquitetura-de-Microsservicos.pdf) (UFR, 2022). Os microsserviços que consomem o pacote estão em [dreams-project-microservices](https://github.com/christiancesar/dreams-project-microservices).

Versão em inglês: [README.en.md](README.en.md)

## Contratos

```
src/contracts/
├── flight/   flight.proto, flight_pb.js/.d.ts, flight_grpc_pb.js/.d.ts
├── hotel/    hotel.proto, hotel_pb.js/.d.ts, hotel_grpc_pb.js/.d.ts
├── package/  package.proto, package_pb.js/.d.ts, package_grpc_pb.js/.d.ts
└── user/     user.proto, user_pb.js/.d.ts, user_grpc_pb.js/.d.ts
```

- `*_pb`: mensagens (classes com getters e setters, `toObject`, serialização).
- `*_grpc_pb`: stubs de cliente (`UsersClient`, `FlightsClient`...) e definição dos serviços (`UsersService`...), com as interfaces `IUsersServer` etc.

## Instalação

```bash
npm install dreams-proto-sharing
```

O código gerado precisa de dois pacotes no projeto que consome. Eles são dependências do pacote, então o npm já os instala, mas o projeto deve usar a mesma versão do runtime:

- `google-protobuf` 4.x (runtime do código gerado)
- `@grpc/grpc-js` 1.x (cliente e servidor gRPC)

Importe sempre pelo caminho do arquivo. O campo `main` do `package.json` aponta para um `index.js` que não existe no pacote:

```ts
import { UsersClient } from 'dreams-proto-sharing/src/contracts/user/user_grpc_pb';
import { UserRequest, User } from 'dreams-proto-sharing/src/contracts/user/user_pb';
```

## Versões

O pacote segue semver:

- **Major** (`2.0.0`): mudança que quebra quem consome. A versão 2 exige `google-protobuf` 4.x. Código gerado pela versão 1 continua rodando em `google-protobuf` 4, mas código gerado pela versão 2 não roda em 3.x.
- **Minor**: campo ou método novo, compatível com quem já consome.
- **Patch**: correção sem mudança de API.

Projetos que usam `^1.x` continuam na linha 1 até migrarem explicitamente.

## Desenvolvimento

Pré-requisitos: Node.js LTS e npm.

```bash
npm install
npm run compile   # gera os arquivos em src/contracts a partir dos .proto
npm run lint      # buf lint, com as exceções documentadas em buf.yaml
npm run breaking  # compara os contratos com a branch main e falha se houver quebra
```

Os arquivos são gerados por `buf generate`, configurado em `buf.gen.yaml`:

- JavaScript das mensagens: plugin oficial `protocolbuffers/js` (remoto).
- Stubs gRPC: plugin oficial `grpc/node` com `grpc_js` (remoto).
- Tipagens `.d.ts`: `protoc-gen-ts` do `grpc_tools_node_protoc_ts`. Esse é o único componente sem substituto mantido, e o projeto ainda o usa por causa do formato de classes que os consumidores dependem.

Os plugins remotos precisam de acesso à internet.

## Publicação

1. Altere o `.proto` e rode `npm run compile`, `npm run lint` e `npm run breaking`.
2. Escolha a versão pelas regras de semver acima e ajuste o `package.json` (`npm version <versão> --no-git-tag-version`).
3. Confira o conteúdo com `npm pack --dry-run`. Só `src/contracts` e os READMEs entram no pacote.
4. Confirme o login com `npm whoami` e publique com `npm publish`.
5. Crie a tag no git (`git tag v<versão>`) e registre a mudança neste README.

O npm não permite sobrescrever uma versão publicada. Se algo estiver errado, publique uma versão nova.

## Histórico de versões

| Versão | Mudança |
|---|---|
| 2.0.0 | Código gerado com `buf` e plugins oficiais. Exige `google-protobuf` 4.x. `files` restringe o pacote a `src/contracts` e READMEs. |
| 1.0.33 | Última versão 1.x publicada. Não tem histórico correspondente neste repositório. |
| 1.0.5-a | Versão do repositório antes da migração para `buf`. |

## Licença

MIT
