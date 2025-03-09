# Lista de Funcionários - Projeto Responsivo

## 📋 Sobre o Projeto

Este projeto é uma aplicação web que consome uma API mock criada com 'json-server' para exibir uma lista de funcionários de forma responsiva. A interface foi desenvolvida para se adaptar a diferentes tamanhos de tela, exibindo a lista em formato de tabela no desktop e em um layout colapsável no mobile, com detalhes expandidos (como cargo, data de admissão e telefone) ao clicar em cada funcionário.

A aplicação foi construída com React e TypeScript, utilizando 'pnpm' como gerenciador de pacotes, e segue boas práticas de desenvolvimento front-end para garantir uma experiência de usuário fluida e acessível.

---

⚙️ Pré-requisitos

Antes de rodar a aplicação, certifique-se de que você tem os seguintes requisitos instalados na sua máquina:

- **Node.js**: Versão 16.x ou superior. Você pode baixar e instalar a partir do [site oficial](https://nodejs.org/).
- **pnpm**: Este projeto utiliza pnpm como gerenciador de pacotes. Para instalar, execute:

npm install -g pnpm

- **Nota**: Embora o projeto tenha sido configurado com pnpm, é possível usar npm ou yarn, mas você precisará ajustar os comandos de instalação e execução conforme o gerenciador escolhido.
- **json-server**: Usado para criar a API mock que fornece os dados dos funcionários. Instale globalmente com:

```
npm install -g json-server
```

---

🚀 Instruções para Rodar a Aplicação

Siga os passos abaixo para configurar e rodar o projeto localmente:

### 1\. Clone o Repositório

Clone este repositório para sua máquina local

```
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2\. Instale as Dependências

Com 'pnpm', instale as dependências do projeto:

```
pnpm install
```

Se você preferir usar 'npm' ou 'yarn', substitua por

```
npm install
# ou
yarn install
```

### 3\. Inicie o 'json-server'

O projeto depende de uma API mock fornecida pelo json-server. Certifique-se de que o arquivo db.json (que contém os dados dos funcionários) está presente na raiz do projeto. Inicie o servidor com o comando:

```
npx json-server db.json
```

Por padrão, o 'json-server' rodará na porta '3000' (ex.: http://localhost:3000/funcionarios). Caso a porta esteja ocupada, você pode especificar outra porta com:

```
npx json-server db.json --port 3001
```

### 4\. Inicie a Aplicação

Com o json-server rodando, abra um novo terminal e inicie o projeto React:

```
pnpm start
```

Se estiver usando 'npm' ou 'yarn', use:

```
npm start
# ou
yarn start
```

A aplicação será iniciada e estará acessível em http://localhost:3000 (ou outra porta, se especificada).

### 5\. Teste a Aplicação

- Abra o navegador e acesse http://localhost:3000.
- Você verá a lista de funcionários exibida em uma tabela responsiva.
- No desktop, a tabela mostrará todas as colunas (foto, nome, cargo, data de admissão, telefone).
- No mobile (telas menores que 740px), a tabela colapsará para mostrar apenas foto e nome, com um ícone para expandir os detalhes.

---

🛠️ Estrutura do Projeto

- **src/api**: Contém as configurações gerais de chamada da api.
- **src/components**: Contém os componentes React organizados em átomos e moléculas, segundo o padrão de Atomic Desing.
- **src/repository**: Contém a lógica de acesso aos dados, como o EmployeeRepository, que gerencia requisições à API para buscar a lista de funcionários.
- **src/service**: Inclui serviços como o JsonServerService, responsável por configurar e executar chamadas à API mock do json-server.
- **src/styles**: Contém o css global
- **src/utils**: Definições de tipos TypeScript, como a interface Employee e funções uteis que vão ajudar no desenvolvimento.
- **db.json**: Arquivo que contém os dados mock dos funcionários, consumidos pelo json-server.
