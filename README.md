

<p align="center">
  <a href="https://github.com/ClubPetro/backend-challenge" target="blank"><img src="https://raw.githubusercontent.com/ClubPetro/backend-challenge/master/img/logo-clubpetro.png" width="320" alt="Logo CP" /></a>
</p>

  <p align="center">Backend Challenge.</p>

## Description

Backend criado com NodeJs + Framework [Nest](https://github.com/nestjs/nest), com o intuito de suprir as necessidades do Front-End abaixo:
<p align="center">
  <a href="https://github.com/ClubPetro/backend-challenge" target="blank"><img src="https://raw.githubusercontent.com/YMdv/backend-challenge/master/img/challenge.png" width="720" alt="FrontEnd" /></a>
</p>


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run dev

# production mode
$ npm run start:prod
```

## Test

```bash
TESTES DESABILITADOS NO MOMENTO
```

## Support

Entre em contato com [YMdv](https://github.com/YMdv) para mais suporte.

## Documentation

```bash
Todos os endpoist estão documentados via Swagger e a collection esta na pasta (collection).
Para rodar o swagger utilize o a seguinte url no seu navegador com a aplicação rodando:
```
[http://localhost:3000/api/#/]([http://localhost:3000/api/#/]())
```bash
**OBSERVAÇÕES:** 

- Banco de dados utilizado: Postgres
	- Antes de rodar a aplicação, crie o banco com o nome abaixo no pgAdmin:
		- Nome do banco: backend-challenge

- Para o relacionamento entre as entidades, foi utilizado TypeORM, com o synchronize `ATIVO`. Não foi utilizado migrations.
	- Country <=> Local `(@OneToMany) - (@ManyToOne)` 
	- Local <=> Goal `(@OneToMany) - (@ManyToOne)`

- Abaixo segue a modelagem do banco: 
```
<p align="center">
  <a href="https://github.com/ClubPetro/backend-challenge" target="blank"><img src="https://raw.githubusercontent.com/YMdv/backend-challenge/master/img/banco.png" /></a>
</p>

## License

UNLICENSED.
