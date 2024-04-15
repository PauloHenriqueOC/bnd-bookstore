Pequeno projeto feito para integração entre um sistema web front e
um sistema backend Java Spring Boot.

O sistema front apresente uma tela para exibição de livros e categorias
cadastrados. Já o sistema Back End foi feito com Java Spring Boot e 
possui 2 tabelas representando cada entidade exibida no sistema.

--------------------------------------------------------------------------

Sobre a arquitetura:

Para o front foi usada algo semelhante ao clean architecture, tendo
como base 3 camadas: Data, Domain e View.
- Data:
	Contem a responsabilidade unica de comunicação com BE.

- Domain:
	Contem a responsabilidade para regras de negócios.

- View:
	Apenas arquivos HTML e scripts para interação entre as paginas 
	HTML e Domain.

(Pelo menos essa foi a intenção)

Para o Back end não foi usado nenhuma arquitetura em especifico. Apenas
separei algumas responsabilidades em pastas separadas para facilitar
a visualização e manutenção de código.
As pastas/camadas são: Controller, Service, Repository e Entity

- Controller:
	Responsavel por disponibilizar as rotas

- Service:
	Camada de comunicação com o banco de dados.

- Repository:
	Interfaces para que o Spring Boot gere os objetos necessários
	usados na comunicação com BD. Esses objetos são gerados de acordo com o 
	response esperado e são injetados em cada Classe Service para a comunicação
	com o BD.

--------------------------------------------------------------------------

Por fim, a pasta bnd_admin contém o projeto front e a pasta bnd_database
contém o projeto BackEnd.

--------------------------------------------------------------------------