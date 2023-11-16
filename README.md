# ****7-6 Installing express, typescript****

how to create express server using typescript and run the server 

1 step 1   : https://expressjs.com/en/starter/installing.html   but not create index.js file 

2  step2️⃣ :   type Script dev dependency install : `npm install -D typescript`

3 step 3:  install type Script compiler : tsc —init

4  step 4:  create file folder :

 step 1 : create source folder : src —→ folder name 

step 2:  src under create app folder .

step 3:  src folder under create app.ts file and server.ts file 

step 4:  go to the tsconfig.json  —→ search the rootDic and rootDic added : rootDic;’./src/’

step5: go to the tsconfig.json  —→ search the outDir and rootDic added : outDic;’./dist

5 step 6: express js doc code execute in app.js file 

6 step 7:  npm install --save @types/node 

1. step 8:  import express from ‘express’
2. step 9:  npm install --save @types/express
3. step 10:  runtime : needed 2 ternimal 

first terminal  code : tsc -w

second termenatl:  nodemon dist/server.js