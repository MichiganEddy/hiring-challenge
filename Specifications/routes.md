# Application Routes Specification
Overview of the routes the application will need to respond to, and how it should respond to each of them. 

## ** Main Page **
shows the latest articles posted. 

** handles get requests for **
` "/", "/index", "/home"`

** maps to**
`/articles`

## ** Article Pages **
### /article/:article_id 
** ACCEPTS METHODS: **

** GET ** 
Returns the article specified by article_id as well as the comments and subcomments on that article.

** POST ** Updates or creates the article specified by article_id with the parameters accomanying the request. 

** DELETE ** Deltes the article specified by article_id.

### /articles 
** ACCEPTS METHODS: **

** GET ** 
Shows a listing of all the articles.


### /article/new
** ACCEPTS METHODS: **

** GET ** 
Returns the create/edit article form. 


### /article/edit/:ariticle_id
** ACCEPTS METHODS: **

** GET ** Returns the create/edit article form with field values set to the values specified by the accompanying article object. (As specified by article_id).

## ** User Pages **
### /user/:user_id

** ACCEPTS METHODS: **

** GET ** 
Returns the user specified by user_id.

** POST ** Updates or creates the user specified by user_id with the parameters accomanying the request. 

** DELETE ** Deltes the user specified by user_id.

### /users 
** ACCEPTS METHODS: **

** GET ** 
Shows a listing of all the users.


### /user/new
** ACCEPTS METHODS: **

** GET ** 
Returns the create/edit user form. 


### /user/edit/:ariticle_id
** ACCEPTS METHODS: **

** GET ** Returns the create/edit user form with field values set to the values specified by the accompanying user object. (As specified by user_id).


## ** Comment Pages **
### /comment/:comment_id

** ACCEPTS METHODS: **

** GET ** 
Returns the comment specified by comment_id as well as the comments and subcomments on that comment.

** POST ** Updates or creates the comment specified by comment_id with the parameters accomanying the request. 

** DELETE ** Deltes the comment specified by comment_id.

### /comments 
** ACCEPTS METHODS: **

** GET ** 
Shows a listing of all the comments.


### /comment/new
** ACCEPTS METHODS: **

** GET ** 
Returns the create/edit comment form. 


### /comment/edit/:ariticle_id
** ACCEPTS METHODS: **

** GET ** Returns the create/edit comment form with field values set to the values specified by the accompanying comment object. (As specified by comment_id).


## ** Additional Pages **

### /login
** ACCEPTS METHODS: **

** GET ** 
Returns the User-Login-Form page.

** POST **
Authenticates the user based on the parameters of login form. 
- On Success: it creates a session object for the user, and redirects to the main page. Optionally flashing a success message.
- On Failure: it redirects to /login and flashes an error message. 

### /logout 
** ACCEPTS METHODS: **

** GET **
Redirects to site home page, /articles. If a session object exists for the current user, that session object is destroyed and a success message is flashed. 
