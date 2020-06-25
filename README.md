# SmartMEI teste


## Introdução
Primeiramente gostaria de agradecer a toda equipe pela oportunidade de realizar esse processo seletivo com vc6.
É sempre bom para minha evolução continua. Obrigado! 


## A1
#### Sobre o teste
A principio confesso q estava um pouco enferrujado com GraphQL, mas algumas leituras rapidas e a pratica no playground tirei um bucado desse ferrugem e comecei a estruturar meu codigo. 
Tirando isso o resto do projeto era bem simples de se fazer. 

#### Estrutura e estilo
Eu utilizei o: ```npx create-react-app --template=typescript``` Para criar a estrutura basica de um projeto React. Eu elimino diversos arquivos da estrutura padrao e defino estilos globais no styled-components.

Para estilizar eu utilizei o pacote do _Styled-Components_, prefiro deixar todos os estilos do component na sua folha, se o componente começar a ficar muito verboso eu separo ele numa pasta e jogo seus styleds-components para um arquivo separado, que não foi o caso nesse mini projeto.

Sobre o layout eu sinceramente gosto de coisas bem simples nao me apeguei muito nele. Me atentei em deixar ele funcional e responsivo.

#### Mecanica
Na parte mecanica do projeto prezei por tentar deixar cada component o mais auto-responsavel pelas suas funcionalidades. Criando um contexto com um hook para manipular o modal q era o component responsavel pela maior parte das interações.

#### GraphQL
Para fazer as query eu utilizei o _graphql-tags_ e para manipula-las e fazer as requisições http utilizei o _Apollo_ sendo o ``` '@apollo/react-hooks' ``` responsavel por manipular os eventos com o hook ```useQuery()``` e o ```useMutation()```. 

Lendo o teste vi q eu deveria fazer uma _mutation_ para se candidatar a vaga, tal mutation q solicitava nome e email do usuario, nas especificações dizia q nao precisava da pagina de login. Entao criei somente um Obj BD com user.name e user.email para simular. Essas variaveis viriam atraves do login do usuario.








