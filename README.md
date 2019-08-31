 **Install Node**
	https://nodejs.org/en/

**Download Atom (OPTIONAL)**
	https://atom.io/

 **Install all the node packages** 
On the root of this project run on your terminal (if you want you can do this with yarn but thats optional)
We updated to version 4.0 of gulp so you should have no problems
```bash
    npm install
    npm install gulp-cli -g
    npm install gulp 
    npm install webpack@4.25.1 -g
    npm install webpack-cli@3.1.2 -g
```

**make sure versions of gulp is 4.0**
```bash
    gulp -v 
```

**Start the dev server**
```bash
  npm run watch
```

**Start the dev server with proxy**
```bash
  npm run proxy
```

**Build files for production**
```bash
  npm run build
```

**Optimize Your Images**
```bash
  npm run imgs
```

**Static Site Generator Development**
```bash
  npm run static:dev
```

**Static Site Generator Production**
```bash
  npm run static:build
```
