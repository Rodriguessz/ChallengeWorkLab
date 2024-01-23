## Projeto CRUD - WORKLAB

Esse projeto foi desenvolvido utilizando as tecnologias Express.js e o banco de dados MySql.




## Clonando a aplicação

Para iniciar, é necessário fazer um clone do repositório em sua máquina. Caso ainda não tenha clonado o repositório, utilize o seguinte comando:

` git clone https://github.com/seu-usuario/nome-do-repo.git` 


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

## Aplicação Rodando

Agora que a aplicação já está rodando em sua máquina, a página de login será exibida. Nessa página é necessário adicionar algumas informações nos campos do formulário para logar  (Pode ser qualquer informação, não tem validação no BD).


## Imagem representativa da aplicação

<img src="./ProjectImage.png"/>


