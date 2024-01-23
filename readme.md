## Projeto CRUD - WORKLAB

Esse projeto foi desenvolvido utilizando as tecnologias Express.js e o banco de dados MySql.




## Clonando a aplicação

Para iniciar, é necessário fazer um clone do repositório em sua máquina. Caso ainda não tenha clonado o repositório, utilize o seguinte comando:

` git clone https://github.com/Rodriguessz/ChallengeWorkLab.git` 


## Instalando as dependências 


Para iniciar o projeto na sua máquina, será necessário fazer a instalação das dependências contidas no arquivo package.json. Não precise se preocupar, para fazer isso basta inserir o seguinte código no seu terminal:

` npm i` 

Esse comando fará com que o gerenciador de pacotes instale as depenências necessárias para rodar o projeto em sua máquina.

## Configurando as variaveis de ambiente

O projeto utiliza como banco de dados o MySql. Será necessário entrar no arquivo .env e alterar a string de conexão de acordo com o seu Mysql.

` CONNECTION_STRING=mysql://SEU_USER:SUA_SENHA@localhost:3306/SUA_DATABASE` 

SEU_USER: Usuário root do seu banco de dados | SUA_SENHA: Senha cadastrada na instalação do seu MySql | SUA_DATABASE: Nome da sua database.

## Rodando o projeto na sua máquina

Para iniciarmos o nosso projeto em localhost, será necessário iniacia-lo. Para fazer isso, basta digitar o seguinte comando em seu terminal:

` npm start` 

Assim que rodar comando, o servidor será iniciado e uma mensagem será exibida no seu terminal : http://localhost:3000/

## Utilizando a Aplicação

Agora que o servidor está rodando em sua máquina local, acesse a página de login no seu navegador. Na página de login, você encontrará um formulário para entrar na aplicação.

### Credenciais de Exemplo

Preencha os campos do formulário com qualquer informação, pois não há validação no banco de dados. Use as seguintes credenciais de exemplo:

- **Usuário:** [Seu usuário aqui]
- **Senha:** [Sua senha aqui]

Lembre-se, essas informações são apenas exemplos, pois a aplicação não realiza uma verificação real no banco de dados neste momento.

Após preencher os campos, clique no botão de login. Isso permitirá que você explore as funcionalidades da aplicação.

## Imagens representativas da aplicação

<img src="./ProjectImage.png"/>
<img src="./projectImage02.png"/>




