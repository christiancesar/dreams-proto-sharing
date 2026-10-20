# [2.2.0](https://github.com/christiancesar/dreams-proto-sharing/compare/v2.1.0...v2.2.0) (2026-10-20)


### Features

* **health:** adiciona contrato Health com relatório de saúde ([cad1b9a](https://github.com/christiancesar/dreams-proto-sharing/commit/cad1b9a6fb49611054b17dfb417a1d4549b24c27))

# [2.1.0](https://github.com/christiancesar/dreams-proto-sharing/compare/v2.0.0...v2.1.0) (2026-10-20)


### Bug Fixes

* **ci:** remove registry-url do setup-node no release ([b5b1cae](https://github.com/christiancesar/dreams-proto-sharing/commit/b5b1caeb50c3bd5b489c82c120cb6c9bdc5d65a7))


### Features

* gera camada ESM junto com o CJS ([9a19fe0](https://github.com/christiancesar/dreams-proto-sharing/commit/9a19fe059ab83d4b575f2d9020d3ce3047899438))

# Changelog

Todas as mudanças notáveis deste pacote. As versões seguem [SemVer](https://semver.org/lang/pt-BR/) e o conteúdo é gerado pelo semantic-release a partir das mensagens de commit. Versões anteriores à 2.0.0 não foram registradas.

## 2.0.0

### Mudanças
- Código gerado com `buf` (plugins oficiais protocolbuffers/js e grpc/node) e protoc-gen-ts para as tipagens.
- Código gerado exige `google-protobuf` 4.x (breaking).
- Scripts `compile` (buf generate), `lint` (buf lint) e `breaking` (buf breaking).
- Gerenciador de pacotes passa a ser npm; `yarn.lock` removido.
- `files` restringe o pacote a `src/contracts` e READMEs.
