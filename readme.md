# REST Server
1. `cd server/`
2. `npm install` to download dependencies
3. `npm run start` to serve REST API. Default port is 8080.
#### `GET localhost:8080/search/drugs?q=<searchTerm>`
returns list of drug info using name or disease search term.

#### `GET localhost:8080/rest/drugs/<id>`
returns a drug info using unique ID

# Web Page
1. Open new terminal and `cd server/`
2. `npm install` to download dependencies
3. `npm run serve` to serve on localhost
