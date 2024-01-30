* npm init -y
* npm i json-server
* npm run start


* GET request
http://localhost:4000/products/1 (vietoj skaiciaus gale id)

* POST request (id geriausiai naudoti uuid del unikalaus id, tada galime nenurodyti id ir sugeneruos pats)
http://localhost:4000/products ->
schema:    {
            "id": 3,
            "title": "Product 3",
            "category": "fitness",
            "price": 1200,
            "description": "This is description about product 3"
        }

http://localhost:4000/reviews ->

schema: {
            "id": 2,
            "rating": 4,
            "comment": "Review 2 for product id 1",
            "productId": 1
        }

* PUT request (keičia viską išskyrus id)
http://localhost:4000/products/3 ->
schema:    {
            "title": "Product 3",
            "category": "fitness",
            "price": 1200,
            "description": "This is description about product 3"
        }
        
* PATCH request (keičia tik tam tikrus parametrus (pvz, title, category, price, deskription))
http://localhost:4000/products/3 ->
schema:    {
            "title": "Product 3",
            "category": "fitness",
            "price": 1200,
            "description": "This is description about product 3"
        }

* DELETE request

http://localhost:4000/products/3
