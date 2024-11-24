# Web app boilerplate code

Tech Stack:

- Frontend:
   - React.js
   - Vite
   - Tailwind CSS
 
- Backend:
   - Express.js
 
- Database:
   - MongoDB
 
Both the frontend and backend are set up for TypeScript and include `tsconfig.json` files.

# 1. Clone the repository

```
git clone https://github.com/raj-pulapakura/vite-react-tailwind-express-boilerplate.git
```

# 2. Install packages

```
cd spa
npm i

cd server
npm i
```

# 3. Add .env files

**/spa/.env**
```
VITE_API_URL=http://localhost:3000
```

**/server/.env**
```
MONGO_URI=mongodb://localhost:27017/my-database
```

# 4. Set up MongoDB

If you do not already have MongoDB installed, follow the instructions on this web-page to install it: https://www.mongodb.com/docs/manual/installation/

After installing MongoDB, if you wish to change the **name** of the database that will be used in the app, modify the ``MONGO_URI`` environment variable in the `/server/.env` file.

```
MONGO_URI=mongodb://localhost:27017/{DATABASE_NAME}
```

# 5. Start projects

Start the Single Page Application and the web server in two separate terminals:

```
cd spa
npm run dev
```

```
cd server
npm run dev
```

After starting the Single Page Application, you should see the following terminal output (or something similar):
```
  VITE v5.4.10  ready in 213 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

And after starting the web server, you should see the following terminal output (or something similar):
```
> server@1.0.0 dev
> nodemon src/index.ts

[nodemon] 3.1.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: ts,json
[nodemon] starting `ts-node src/index.ts`
[server] Server is running at http://localhost:3000
[database] MongoDB connected successfully
```

# 5. Code away!
