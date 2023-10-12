# React JS Masterclass: Zero To Job Ready With 10 Projects

## Course Link
https://www.udemy.com/course/complete-reactjs-masterclass/

## Course Notes
https://unwiredlearning.notion.site/unwiredlearning/React-Resources-4fdd421a603747b18f6c8824326c8a2b

## Course Github
https://github.com/ShubhamSarda/react-ul


## Notes
* ### Create app
```
PS C:\Users\theofilo\Desktop\Coding\React\Udemy_Course\general> npx create-react-app my-app

Success! Created my-app at C:\Users\theofilo\Desktop\Coding\React\Udemy_Course\general\my-app
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd my-app
  npm start

Happy hacking!
```

## Json server

### https://www.npmjs.com/package/json-server

* ### Start server
```
json-server --watch <path to json data> --port <port different than the app>
```

* Sort
```
http://localhost:8000/products?_sort=price&_order=desc
```

* Filter
```
http://localhost:8000/products?name_like=react
```