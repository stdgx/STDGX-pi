# Storage Tool Data Graphics
<img src="https://github.com/stdgx/STDGX-pi/assets/127058626/7d0f5875-07ea-4786-9248-cb6ad3c2f3a5" />

## Inicialização
Para executar o projeto, utilize as ferramentas descritas na sessão *Ferramentas*.

## Ferramentas
* [IntelliJ](https://www.jetbrains.com/idea/) - IDE para desenvolvimento.

# Storage Tool Data Graphics

## Introdução

> Aplicação web que permite aos usuários alocarem dados através de uploads de arquivos .XLSX e gerar interfaces gráficas, além de prover um banco de dados SQL.  

Este projeto possui o objetivo principal **simplificar a organização de dados e salvar horas de trabalho**.  
Com os objetivos gerais de realizar a inserção de **dados e planilhas** e gerar **dashboards e banco de dados SQL**. 

## Análise técnica

### Descrição do ambiente técnico

O sistema é composto por um banco de dados, uma interface web e um sistema embarcado. Funcionalidades principais:
* **F1** - Login e Registrar.
* **F2** - Upload de Arquivos .XLSX.
* **F3** - Formulário dos dados.
* **F4** - Gerar script SQL.
* **F5** - Gerar dashboards.

As ferramentas utilizadas para o desenvolvimento incluem **Java** que é uma linguagem de programação utilizada para o Back-end, para front-end foi utilizado **HTML, CSS e Angular**. **MYSQL** atuando como sistema gerenciador de banco de dados relacional.

### Requisitos Funcionais
Respeitando a proposta, o sistema deverá atender os seguintes requisitos:

* **RF1** - A aplicação deve permitir que os usuários subam arquivos .XLSX. 
* **RF2** - A aplicação deve permitir que os usuários insiram os dados diretamente na interface do sistema. 
* **RF3** - A aplicação deve ser capaz de ler, interpretar e processar as informações fornecidas pelo usuário. 
* **RF4** - A aplicação deve criar um banco de dados utilizando as informações fornecidas pelo usuário. 
* **RF5** - A aplicação deve apresentar um dashboard com a visualização gráfica das informações. 
* **RF6** - A aplicação deve permitir que os usuários realizem o cadastro no sistema a partir de um endereço de email e senha. 
* **RF7** - Os usuários devem ser capazes de baixar o script .SQL. 
* **RF8** - A aplicação deve permitir que o usuário realize o login no sistema. 
* **RF9** - A aplicação deve permitir que o usuário recupere a senha registrada. 

## Regras de Negócio

* **RN1** - Os usuários devem inserir dados para o funcionamento do software. 
* **RN2** - Os usuários devem realizar um cadastro no sistema. 
* **RN3** - Cada usuário deve fornecer um endereço de e-mail válido para o cadastro. 
* **RN4** - Todo documento deve estar dentro das normas do software para a criação do banco de dados. 
* **RN5** - Apenas arquivos com extensão .XLSX são permitidos. 
* **RN6** - O dashboard gerado será baseado nos dados carregados pelo usuário. 
* **RN7** - Depois do processamento das informações, o sistema deve gerar de forma automática um script .SQL baseado no banco de dados e disponibilizá-lo para download. 
* **RN8** - Depois do processamento das informações, o sistema deve gerar de forma automática um script .SQL baseado no banco de dados e disponibilizá-lo para download. 

## Casos de Uso

<img src="https://github.com/stdgx/STDGX-pi/assets/127058626/46110f2a-1213-42d3-99bb-66653ff7be83">
