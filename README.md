
# Book Management App

## [Deployed URL](https://6541375d6562233dc3c2ea94--visionary-salmiakki-dce795.netlify.app/)


## Table of Contents
- [API Endpoints](#api-endpoints)
- [Local Setup](#local-setup)
- [Decisions and Assumptions](#decisions-and-assumptions)


## Access the API at 
   https://clean-crown-duck.cyclic.app/.
## API Endpoints

### POST /book/add
- **Description:** Create a new book.
- **Request Body:** JSON object representing the book.
- **Response:** The newly created book as JSON.

### GET /book
- **Description:** Get a list of all books.
- **Response:** List of books as JSON.

### GET /book/:bookId
- **Description:** Get a specific book by ID.
- **Response:** The book as JSON.

### PATCH /book/:bookId
- **Description:** Update a specific book by ID.
- **Request Body:** JSON object with book updates.
- **Response:** The updated book as JSON.

### DELETE /book/:bookId
- **Description:** Delete a specific book by ID.
- **Response:** A success message.

## Local Setup

1. **Clone the repository:**

   ```shell
   git clone <repository-url>

2. **Clone the repository:**

   npm install
3. **Set up your environment variables...:**

 **Decisions and Assumptions**  
We assume that books are represented as JSON objects with properties like title, author, and summary.
We use MongoDB as the database for storing book data. The connection string is specified in the .env file.
We allow cross-origin requests from the specific origin 'https://6541375d6562233dc3c2ea94--visionary-salmiakki-dce795.netlify.app' in the CORS configuration.
The application listens on port 6100.


## Home Page:
![home page](<img width="1419" alt="Screenshot 2023-10-31 at 23 25 19" src="https://github.com/ankitatra/pokimon/assets/61157473/1d105305-b920-4583-87b3-c4b09a22ea3b">



<br/>

## View Page:
![List page](<img width="998" alt="Screenshot 2023-10-31 at 23 26 23" src="https://github.com/ankitatra/pokimon/assets/61157473/20400505-056f-4533-80a0-1e39b6c6acf3">



<br/>

## Update Page:
![image](<img width="1000" alt="Screenshot 2023-10-31 at 23 27 14" src="https://github.com/ankitatra/pokimon/assets/61157473/9e478bc9-ff58-4b24-8fd9-2114364fd7b4">

<br/>

## Delete Page:
![image](<img width="1002" alt="Screenshot 2023-10-31 at 23 28 20" src="https://github.com/ankitatra/pokimon/assets/61157473/375e61ec-fa6d-4642-8021-918b6de75af1">





<br/>
<h4 align="center">💻 Tech Stack</h4>
 <div align="center">
 <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" align="center" alt="html5">
 <img src = "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" align="center" alt="css3">
 <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"  align="center" alt="javascript" />
 <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"  align="center" alt="reactjs" />
  
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"  align="center" alt="react-router" />
</div>
<br/>



<div align="center"><h3 align="center">Tools</h3> 
   <img src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7" align="center" alt="git"/>
  <img src = "https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white" align="center" alt="npm">
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"  align="center" alt="github"/>
   <img src="https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white"  align="center" alt="vscode"/>
    
      
</div>







## Tech Stack 
- *React*


- *JavaScript*
- *HTML5*
- *CSS3*

-*Node.js*
-*Express.js*
-*Mongodb*







## Developers

- **[Ankita Thakur](https://github.com/ankitatra)**

    
