Desafio - Backend e Frontend

Este repositório contém a aplicação desenvolvida para um desafio técnico. A aplicação consiste em um backend desenvolvido em Java 17 com Spring Boot e um frontend desenvolvido com React 19 e Next.js 15.2.

Tecnologias Utilizadas

Backend:

Java 17

Spring Boot

Spring Security (para controle de autenticação e autorização)

Banco de dados H2 (em memória)

JUnit e Mockito (para testes)

JaCoCo (para verificação da cobertura dos testes)

Docker e Docker Compose (para containerização da aplicação)

Frontend:

React 19

Next.js 15.2

Estrutura do Repositório

desafio/ - Contém os arquivos do backend

frontend/ - Contém os arquivos do frontend

Executando a Aplicação com Docker

Para rodar a aplicação utilizando Docker, certifique-se de que o Docker está instalado em sua máquina e execute o seguinte comando:

 docker run -p 3000:3000 -p 8080:8080 heldertosta/desafio:1.0

Os parâmetros -p 3000:3000 e -p 8080:8080 fazem o mapeamento das portas do container para o seu computador. Para mais informações, consulte a documentação do Docker.

Após a execução do comando, a aplicação estará disponível no seguinte endereço:

http://localhost:3000/login

Usuários Padrão

A aplicação possui dois usuários padrão para acesso:

Administrador:

Usuário: admin

Senha: admin

Usuário Básico:

Usuário: basic

Senha: basic

O usuário administrador possui permissão para todas as operações, enquanto o usuário básico pode apenas listar, pesquisar e cadastrar novos clientes.

Carga Inicial de Dados

Os dados iniciais são carregados automaticamente através do arquivo desafio/src/main/resources/data.sql.

Executando Testes

Os testes foram criados utilizando JUnit e Mockito. Para executá-los, utilize o seguinte comando:

mvn test

Para verificar a cobertura dos testes, utilize o comando:

mvn clean verify package

Em seguida, abra no navegador o seguinte arquivo para visualizar o relatório de cobertura de testes gerado pelo JaCoCo:

desafio/target/jacoco-reports/index.html

Aviso Importante

Esta aplicação foi desenvolvida para um desafio técnico e, por esse motivo, arquivos de chaves e variáveis de ambiente foram deixados fora do .gitignore de propósito.

Link do repositório da imagem docker criada com a aplicação: https://hub.docker.com/repository/docker/heldertosta/desafio/general