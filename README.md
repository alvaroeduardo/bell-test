# Bell Test
Esta aplicação é uma aplicação MVP (mínimo viável produto).
Link para prototipação do projeto completo: [Figma](https://www.figma.com/proto/DSSjc7SrtR9MudyI6Ettb5/Bell-Test?node-id=1:2&scaling=scale-down&page-id=0:1&starting-point-node-id=1:2)

A refatoração do código é feita após a aprovação do MVP.

### Como iniciar a aplicação?
1. Para primeira iniciação precisamos clonar o projeto:

    `git clone https://github.com/alvaroeduardo/bell-test.git`

2. Após a clonagem do projeto vamos instalar as dependências necessárias utilizando o NPM ou Yarn:

	`yarn start`
	`npm install`

3. Após a instalação das dependências vamos iniciar o projeto na máquina local utilizando o comando:
	npm start ou yarn start

### Como buildar a aplicação para deploy:
Vamos utilizar o comando:
	
	yarn build
	npm build

Para subirmos a aplicação para um servidor precisamos apenas da pasta "Dist".

## ![robot](https://github.githubassets.com/images/icons/emoji/unicode/1f916.png)  Tecnologias utilizadas

-   NodeJS v16.14.0
-   Yarn v1.22.18
-   ReactJS v18.0.0
-   Styled Components v5.3.5
-   Axios v0.26.1
-   Typescript v4.6.3
-   React Hook Form v7.29.0
-   React Modal v3.14.4

## ![crossed_swords](https://github.githubassets.com/images/icons/emoji/unicode/2694.png)  Desafios

1. Pela pouca prática em importações de imagens via Axios, obtive uma certa dificuldade em gerar as imagens para a lista e profile, a requisição ficava me retornando apenas a Promise e não o valor cru;
2. Por motivos os quais ainda desconheço não consegui fazer a edição de dados via Modal direto da lista pelo qual na importação do ID ele persistia apenas um único valor, sendo assim resolvi criar uma página profile que puxa dados via parâmetros query.
3.  Responsividade: por mais que não foi solicitado uma prototipagem mobile para a tela, como boas práticas é interessante que a tela seja responsiva. Apresentei dificuldades nesse quesito já que não consegui criar um algorítimo onde fizesse os componentes ficassem responsivos. Isso é um desafio interessante ao futuro, se eu criasse a tela em HTML5, CSS3 e Javascript, esse quesito não seria um problema, o qual acho mais fácil trabalhar, porém como se tratava de um styled components com vários componentes interligados não consegui desenvolver essa parte.
4.  A componentização dos input's, como utilizei o React Hooks Forms, não consegui consegui criar uma solução para componentizar e retornar os dados do hook.
