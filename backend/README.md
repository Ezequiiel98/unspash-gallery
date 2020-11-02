# Documentacion unsplash-gallery-api
---
# Endpoints
* ### [Auth Routes](#auth-routes)
* ### [Images Routes](#image-routes)

<a name="auth-routes"></a>
# Auth routes `/api/auth`

* [/api/auth/sign-up](#sign-up)
* [/login](#login)

#### Request headers:
```json
{
  "Content-Type": "application/json",
  "Accept": "application/json"
}
``` 
<a name="sign-up"></a>
## /sign-up
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
## /login
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

<a name="image-routes"></a>
# Images routes `/api/images`
#### Request headers:
```json
{
  "Content-Type": "application/json",
  "Accept": "application/json",
  "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0b3B0YWwuY29tIiwiZXhwIjoxNDI2NDIwODAwLCJodHRwOi8vdG9wdGFsLmNvbS9qd3RfY2xhaW1zL2lzX2FkbWluIjp0cnVlLCJjb21wYW55IjoiVG9wdGFsIiwiYXdlc29tZSI6dHJ1ZX0.yRQYnWzskCZUxPwaQupWkiUzKELZ49eM7oWxAQK_ZXw"
}
``` 
* [/api/images](#images)
* [/api/images/:imageId](#images-with-id)
* [/api/images/my-images](#my-images)
* [/api/images/like/:imageId](#like-image)

<a name="images"></a>
## /api/images
* [Without x-access-token](#without-token)
* [With x-access-token](#with-token)

<a name="without-token"></a>

### Without x-access-token
* ### Method:  
  GET
* ### URL Params 
  none
* ### Body Parameters:
  none
* ### Success Response:
  * ***Code:*** `200 OK`
  *  ***Content:***
 
        ```json
            [
              {
                "_id": "5f87d24e5c163e3b8cbeec9a",
                "url": "https://www.url-img.com/",
                "label": "Dog image",
                "author": "juan123",
                "likes": 3
              },
              {
                "_id": "5f87da2234dec849387ae628",
                "url": "https://www.url-img.com/",
                "label": "Cat image"",
                "author": "carla",
                "likes": 0
              }
            ]
      ```
* ### Error Response:
    none

<a name="with-token"></a>

### With x-access-token
* ### Method:  
  [GET](#get-images-token) | [POST](#post-images-token)
* ### URL Params 
  none

<a name="get-images-token"></a>
## GET
* ### Body Parameters:
  none
* ### Success Response:
  * ***Code:*** `200 OK`
  *  ***Content:***
 
        ```json
           [
             {
                "_id": "5f87d24e5c163e3b8cbeec9a",
                "url": "https://www.url-img.com/",
                "label": "Dog image",
                "author": "juan123",
                "likes": 3,
                "iLike": true
             },
             {
               "_id": "5f87da2234dec849387ae628",
               "url": "https://www.url-img.com/",
               "label": "Cat image",
               "author": "carla",
               "likes": 0,
               "iLike": false
              }
            ]
      ```
* ### Error Response:
     * ***Code:*** `401 Unauthorized`
    *  ***Content:***
        ```json
           {
            "message": "Invalid token"
           } 
        ```
    ### OR 
    * ***Code:*** `404 Not Found`
    * ***Content:***
        ```json 
           {
            "message": "User not found"
           } 
        ```

<a name="post-images-token"></a>
## POST
* ### Body Parameters:
  ```json 
  {
    "url": "https://your-url-img.com",
    "label": "cat image"
  } 
  ```
* ### Success Response:
  * ***Code:*** `200 OK`
  *  ***Content:***
 
        ```json
          {
            "message": "new image"
          }
      ```
* ### Error Response:
     * ***Code:*** `401 Unauthorized`
    *  ***Content:***
        ```json
           {
             "message": "Invalid token"
           } 
        ```
    ### OR 
    * ***Code:*** `403 Forbidden`
    * ***Content:***
        ```json 
           {
            "message": "You must send a token"
           } 
        ```
<a name="images-with-id"></a>
## /api/images/:imageId
* ### Method:  
  [PUT](#put-image) | [DELETE](#delete-image)
* ### URL Params 
  * ### Required
     imageId

<a name="put-image"></a>
## PUT
* ### Body Parameters:
  ```json 
   {
     "label": "dog image 2",
     "url": "https://www.your-url.com"
   }
  ```
* ### Success Response:
  * ***Code:*** `200 OK`
  *  ***Content:***
 
        ```json
           {
               "message": "Image updated"
           }
      ```
* ### Error Response:
     * ***Code:*** `401 Unauthorized`
    *  ***Content:***
        ```json
           {
            "message": "Invalid token"
           } 
        ```
    ### OR 
    * ***Code:*** `403 Forbidden`
    * ***Content:***
        ```json 
           {
            "message": "You don't have permission"
          } 
        ```
    
    ### OR 
    * ***Code:*** `403 Forbidden`
    * ***Content:***
        ```json 
           {
              "message": "You must send a token"
           } 
        ```
    ### OR 
    * ***Code:*** `404 Not Found`
    * ***Content:***
        ```json 
           {
            "message": "User not found"
           } 
        ```
     ### OR 
    * ***Code:*** `404 Not Found`
    * ***Content:***
        ```json 
           {
            "message": "Image not found"
           } 
        ```

<a name="delete-image"></a>
## DELETE
* ### Body Parameters:
  ```json 
  {
    "password": "juan123!1"
  } 
  ```
* ### Success Response:
  * ***Code:*** `200 OK`
  *  ***Content:***
 
        ```json
          {
            "message": "Image deleted"
          }
      ```
* ### Error Response:
     * ***Code:*** `401 Unauthorized`
    *  ***Content:***
        ```json
           {
            "message": "Invalid token"
           } 
        ```
    ### OR 
     * ***Code:*** `401 Unauthorized`
    *  ***Content:***
        ```json
           {
            "message": "Incorrect password"
           } 
        ```
    ## OR
    * ***Code:*** `403 Forbidden`
    * ***Content:***
        ```json 
           {
            "message": "You don't have permission"
          } 
        ```
    
    ### OR 
    * ***Code:*** `403 Forbidden`
    * ***Content:***
        ```json 
           {
              "message": "You must send a token"
           } 
        ```
    ### OR 
    * ***Code:*** `404 Not Found`
    * ***Content:***
        ```json 
           {
            "message": "User not found"
           } 
        ```
     ### OR 
    * ***Code:*** `404 Not Found`
    * ***Content:***
        ```json 
           {
            "message": "Image not found"
           } 
        ```

<a name="my-images"></a>
## /api/images/my-images
* ### Method:  
  GET
* ### URL Params 
 none
* ### Body Parameters:
   none
  
* ### Success Response:
  * ***Code:*** `200 OK`
  *  ***Content:***
 
        ```json
           [
             {
                "_id": "5f87d24e5c163e3b8cbeec9a",
                "url": "https://www.url-img.com/",
                "label": "Dog image",
                "author": "juan123",
                "likes": 3,
                "iLike": true
             },
             {
               "_id": "5f87da2234dec849387ae628",
               "url": "https://www.url-img.com/",
               "label": "Cat image",
               "author": "carla",
               "likes": 0,
               "iLike": false
              }
            ]
      ```
* ### Error Response:
     * ***Code:*** `401 Unauthorized`
    *  ***Content:***
        ```json
           {
            "message": "Invalid token"
           } 
        ```
    ### OR 
    * ***Code:*** `404 Not Found`
    * ***Content:***
        ```json 
           {
            "message": "User not found"
           } 
        ```

<a name="like-image"></a>
## /api/like/:imageId
* ### Method:  
  POST
* ### URL Params 
 * #### Required
    imageId
* ### Body Parameters:
   none

* ### Success Response:
  * ***Code:*** `200 OK`
  *  ***Content:***
        ```json
          {
            "message": "Like"
          }
      ```
    ### OR 
    
     ```json
          {
            "message": "Dislike"
          }
     ```
      
* ### Error Response:
     * ***Code:*** `401 Unauthorized`
    *  ***Content:***
        ```json
           {
            "message": "Invalid token"
           } 
        ```
    ### OR 
    * ***Code:*** `404 Not Found`
    * ***Content:***
        ```json 
           {
            "message": "User not found"
           } 
        ```
    ### OR 
    * ***Code:*** `404 Not Found`
    * ***Content:***
        ```json 
           {
            "message": "Image not found"
           } 
        ```
    

