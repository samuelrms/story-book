# Story-book

## Projeto criado para acelerar o desenvolvimento de projetos

### Esse projeto possui os seguintes componentes até o momento:

### `Icons` --- Componente que conta com três icons até o momento, facebook, instagram e twitter.

### `Button` --- Componente com props para criação de botões genéricos o mesmo é uma `button`.

### `Container` --- Componente com props para criação de containers genéricos o mesmo é uma `div`.

### `Content` --- Componente com props para criação de conteudos genéricos o mesmo é uma `div`.

### `Description` --- Componente com props para criação de descrições genéricas o mesmo é um `h2`.

### `SubTitle` --- Componente com props para criação de sub titulos genéricos o mesmo é um `h2`.

### `Title` --- Componente com props para criação de titulos genéricos o mesmo é um `h1`.

### `Text` --- Componente com props para criação de textos genéricos o mesmo é um `p`.

### `Img` --- Componente com props para criação de imagens genéricas o mesmo é um `img`.

### `Footer` --- Componente para criação de footer o mesmo é um `Footer`.

### `Header` --- Componente para criação de header o mesmo é um `Header`.

### `mocks` --- Componente para implementação de textos e images, utilizado quando não se possui um vinculo com API o mesmo é uma `array`.

### `colors` --- Arquivo para implementação de cores, utilizado para criar uma reutilização de cores e manter um padrão no projeto onde será necessario alterar a cor somente em um local o mesmo é uma `array`.

### `GlobalStyle` --- Arquivo para implementação de estilos globais, utilizado para setar um estilo global no projeto o mesmo é uma `array`.

### `screens` --- Pasta indicada para armazenar todas as telas do projeto.

### `size` --- Pasta onde contém o arquivo de `device` que possui alguns tamanhos de dispositivos para otmizar a implementação de responsividade com alguns @ media.

### `services` --- Pasta com arquivo `.env` e `api`, onde passaremos a api a ser utilizada e todas as funções que faremos com ela.

---

# Instalando o projeto

### Para clonar o projeto basta apenas utilizar o comando

`git clone https://github.com/samuelrms/story-book.git`

---

### Em sequencia utilize o instalador que desejar

`npm install` ou `yarn`

---

# Implementações

### Esse projeto já conta com

`react-router-dom`, `styled-components` e `axios`

### Conta com local para implementação de homepage em seu `package.json`

### Também possui dois scripts proprios:

### `git-env-repo` --- Comando que builda o projeto e sobe fas um push para seu repositório no GitHub

e

### `git-env-gh` --- Comando que solicita uma atualização para sua page online através do GitHub pages

## Caso utilize npm será necessária a troca dos comandos acima no arquivo `package.json`

### `git-env-repo` --- Altere o conteudo para `npm run build && git push origin main`

e

### `git-env-gh` --- Altere o conteudo para `gh-pages -d build`

## Ordem de execução para subida ao gh-pages:

### Primeiro execute `yarn git-env-repo` em caso de utilização do yarn

### Utilização de npm `npm run git-env-repo`

### Após utilize `yarn git-env-gh` em caso de utilização do yarn

### Utilização de npm `npm run git-env-gh`

---

# Criado por `Samuel Ramos`
