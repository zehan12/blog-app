# 📝  Blog App

A  Blog App where user can create, delete, edit articles and much more. This App is created by React.js and backend API is develop using Express.js. Backend API is RESTful and is made in according to RealWorld API specs.

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

[![React.js](https://img.shields.io/badge/Frontend-React.js-blue)](https://reactjs.org/)

[![Express](https://img.shields.io/badge/Backend-Express.js-red)](https://reactjs.org/)

## Features

- Add, edit and delete articles.
- Add, edit and delete User Info.
- Add comments in articles and delete own comments.
- List All Articles

## Screenshots

**Home Page**
[![Workflow-Step-2-1.jpg](https://i.postimg.cc/QM5K9vzf/Workflow-Step-2-1.jpg)](https://postimg.cc/sBjgbHsW)



**Create And Update Page**
[![Workflow-Step-4.jpg](https://i.postimg.cc/7h7qmygR/Workflow-Step-4.jpg)](https://postimg.cc/WqNR1CYm)



**List of Article Page**


[![Screenshot-1.png](https://i.postimg.cc/Pq4pQ1tD/Screenshot-1.png)](https://postimg.cc/d7hVqkZQ)

**Post Page**

[![Screenshot-5.png](https://i.postimg.cc/GmjgGSsx/Screenshot-5.png)](https://postimg.cc/CRz4V77R)

**Comment and List of Comments**

[![Screenshot-6.png](https://i.postimg.cc/DwYs9rVK/Screenshot-6.png)](https://postimg.cc/WdghrJb9)

## Run Locally

Clone the project

```bash
  git clone https://github.com/zehan12/blog-app.git
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Demo

https://blog-app-zehan12.vercel.app/

# Endpoints


### create article:

`POST /api/article/`

### get article

`GET /api/article`

### delete article
 
 `DELETE /api/article/:slug`

### update article

`PUT /api/article/:slug`

### create comment

`POST /api/article/:slug/comment`

### delete comment

`GET /api/article/:slug/comment/:comment_id`


## Authors

- [@zehan12](https://www.github.com/zehan12)

## Feedback

If you have any feedback, please reach out to me at zehan9211@gmail.com

## License

[MIT](https://choosealicense.com/licenses/mit/)