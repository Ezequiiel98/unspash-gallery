# Documentacion unsplash-gallery-api
---
# Endpoints
* ### [Auth Routes](#auth-routes)
* ### [Image Routes](#image-routes)

<a name="auth-routes"></a>
## Auth routes

* [/sign-up](#sign-up)

* [/login](#login)
#### Request headers:
```json
{
  "Content-Type": "application/json",
  "Accept": "application/json"
}
``` 
<a name="sign-up"></a>
# /sign-up
* ### Method:  
  POST
* ### URL Params 
  none
* ### Body Parameters:
    ```json
        {
          "username": "juan21",
          "email": "juan@gmail.com",
          "password": "juan123!?"
        } 
    ```
* ### Success Response:
  * ***Code:*** `201 Created`
  *  ***Content:***
  
        ```json
            {
                "username": "juan21",
                "email": "juan@gmail.com",
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0b3B0YWwuY29tIiwiZXhwIjoxNDI2NDIwODAwLCJodHRwOi8vdG9wdGFsLmNvbS9qd3RfY2xhaW1zL2lzX2FkbWluIjp0cnVlLCJjb21wYW55IjoiVG9wdGFsIiwiYXdlc29tZSI6dHJ1ZX0.yRQYnWzskCZUxPwaQupWkiUzKELZ49eM7oWxAQK_ZXw"
           } 
      ```
* ### Error Response:
 * ***Code:*** `409 Conflict`
  *  ***Content:***
        ```json
            {
               "path": "username",
               "name": "ValidatorError",
               "message": "username already exists"
           } 
        ```
        #### OR 
        
        ```json 
         {
               "path": "email",
               "name": "ValidatorError",
               "message": "email already exists"
           } 
        ```
<a name="login"></a>
# /login
* ### Method:  
  POST
* ### URL Params 
  none
* ### Body Parameters:
    ```json
        {
          "email": "juan@gmail.com",
          "password": "juan123!?"
        } 
    ```
* ### Success Response:
  * ***Code:*** `200 OK`
  *  ***Content:***
  
        ```json
            {
                "username": "juan21",
                "email": "juan@gmail.com",
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0b3B0YWwuY29tIiwiZXhwIjoxNDI2NDIwODAwLCJodHRwOi8vdG9wdGFsLmNvbS9qd3RfY2xhaW1zL2lzX2FkbWluIjp0cnVlLCJjb21wYW55IjoiVG9wdGFsIiwiYXdlc29tZSI6dHJ1ZX0.yRQYnWzskCZUxPwaQupWkiUzKELZ49eM7oWxAQK_ZXw"
           } 
      ```
* ### Error Response:
 * ***Code:*** `401 Unauthorized`
  *  ***Content:***
        ```json
            {
               "message":"Email or password is incorrect"
            } 
        ```
       
