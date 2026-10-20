# Changelog

Todas as mudanças notáveis deste pacote. As versões seguem [SemVer](https://semver.org/lang/pt-BR/) e o conteúdo é gerado pelo semantic-release a partir das mensagens de commit. Versões anteriores à 2.0.0 não foram registradas.

## 2.0.0

### Mudanças
- Código gerado com `buf` (plugins oficiais protocolbuffers/js e grpc/node) e protoc-gen-ts para as tipagens.
- Código gerado exige `google-protobuf` 4.x (breaking).
- Scripts `compile` (buf generate), `lint` (buf lint) e `breaking` (buf breaking).
- Gerenciador de pacotes passa a ser npm; `yarn.lock` removido.
- `files` restringe o pacote a `src/contracts` e READMEs.
