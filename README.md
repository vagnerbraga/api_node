# api_node
Mongo DB
1. Docker 
  - docker pull mongo (mongo a imagem)
  - docker run --name mongodb -p 27017:27017 -d mongo
    - --name {nome da imagem docker}
    - -p redirecionamentos de portas (porta minha maquina : porta imagem docker)
    - -d nome da imagem que vamos criar uma instancia
    - docker ps -- lista todas as imagens
  
  Acessar localhost:27017, tem que mostrar mensagem "Its look like you are...." deu certo
  Acessar banco de dados mongo utilizando ferramenta robo 3t
  
2. Start - npm run dev
