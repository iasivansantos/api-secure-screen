# API Tela Segura

API para controle de bloqueio e desbloqueio de uma tela. Deve garantir que apenas uma pessoa acesse a tela por vez.

## Documentação

[Documentação](http://localhost:3001/docs)

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env. Há o arquivo .env.example que pode ser copiado e renomeado.

`APP_PORT`

`DB_HOST`

`DB_USERNAME`

`DB_PASSWORD`

`DB_DATABASE`

`DB_PORT`

`DB_LOGGING`

## Funcionalidades

-   Bloquear tela
-   Desbloquear tela

## Rodando localmente

Criar arquivo .env com as variáveis de ambiente necessárias.

Instalar dependências

```bash
  yarn install
```

Criar banco de dados Postgres

```bash
  docker-compose up -d
```

Executar migrações do banco de dados

```bash
  yarn migration:run
```

Iniciar o servidor

```bash
  yarn start:dev
```

## Stack utilizada

Nestjs, Typeorm, PostgreSQL
