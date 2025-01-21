# Imposto de Renda

Este projeto é uma API para gerenciamento de usuários e declarações de imposto de renda.

## Tecnologias Utilizadas

- **NestJS**: Framework para construção de aplicações Node.js escaláveis.
- **Prisma**: ORM utilizado para interagir com o banco de dados.
- **PostgreSQL**: Banco de dados utilizado.
- **Zod**: Biblioteca para validação de esquemas.
- **JWT**: Utilizado para autenticação.

## Como Baixar o Projeto

1. Clone o repositório:

   ```bash
   git clone git@github.com:oliveiratullio/imposto-de-renda.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd imposto-de-renda
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

## Como Rodar o Projeto

1. Configure as variáveis de ambiente criando um arquivo `.env` na raiz do projeto. Exemplo:

   Neste caso o arquivo .env já está no projeto para facilitar o acesso.

2. Execute o projeto:

   ```bash
   npm run start:dev
   ```

## Migração e Geração do Prisma
 Caso queira utilizar um banco de dados próprio, você pode substituir o DATABASE_URL no .env.
1. Para criar as migrações, execute:

   ```bash
   npx prisma migrate dev
   ```

2. Para gerar o cliente Prisma, execute:

   ```bash
   npx prisma generate
   ```

## Rotas do Projeto

- **/users/signup** (POST): Cria um novo usuário.
	+ Espera receber um JSON com `name`, `email` e `password`.
- **/users/login** (POST): Faz login de um usuário existente.
	+ Espera receber um JSON com `email` e `password`.
- **/tax-declarations** (POST): Cria uma nova declaração de imposto.
	+ Espera receber um JSON com `taxYear`, `taxpayerCPF`, `annualIncome`, `taxDue`, `taxPaid`, `numberOfDependents`, `pensionContribution`, `educationExpenses` e `healthExpenses`.
- **/tax-declarations/:id** (GET): Retorna todas as declarações de imposto de um usuário específico.
  + Espera receber o id do usuário cujas declarações são requisitadas.
- **/tax-declarations/declaration/:id** (GET): Retorna uma declaração de imposto específica.
  + Espera receber o id da declaração requisitada.
- **/tax-declarations/:id** (PATCH): Atualiza uma declaração de imposto específica.
	+ Espera receber um JSON com os campos que devem ser atualizados.
- **/tax-declarations/:id** (DELETE): Remove uma declaração de imposto específica.

Certifique-se de que o servidor do banco de dados PostgreSQL esteja rodando localmente antes de iniciar o aplicativo.


