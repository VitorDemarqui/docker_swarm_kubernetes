#imagem de base para a aplicacao
#iremos utilizar node
#depois dos dois pontos vem a versao
FROM node:14

#diretorio utilizado para execular aplicacao no container
WORKDIR /src

#copia o arquivo package.js e package-lock.json para 
#o diretorio raiz(src) pode ser substituido por .
COPY package*.json .

#instalando pacotes do projeto
RUN npm install

#copia todos arquivos para pasta home do container
COPY . .

#expondo porta 3000 da imagem
EXPOSE 3000

#rodando comando em array para startar a aplicacao
CMD ["node", "app.js"]