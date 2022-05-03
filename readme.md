# Steps
Just `npm install` to install dependencies

# REST Server
`cd server/ && npm run dev` to serve REST API. Default port is 8080.
### `GET localhost:8080/search/drugs?q=<searchTerm>`
returns list of drug info using name or disease search term.

### `GET localhost:8080/rest/drugs/<id>`
returns a drug info using unique ID

# Web Page
On a new terminal, from the project root `cd frontend/drugs-lookup/ && npm run serve`