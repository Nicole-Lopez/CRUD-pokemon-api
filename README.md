# POKÉMON CRUD - REST API

Backend of a pokémon CRUD app.

+ Shows 72 original pokémons from the RESTful API https://pokeapi.co/api/v2/pokemon
+ Allows you to create, edit and delete new pokémons.
+ Every pokémon can have a hall of fame, memorable pokémon moments.

<div align="center">
  <h3>
    <a href="https://crud-pokemon.onrender.com">
      Deploy
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->
## Table of Contents
- [Built With](#built-with)
- [Endpoints](#endpoints)
  - [Types of pokémons](#get-all-types-of-pokémons)
      - [GET types](#get-all-types-of-pokémons)
  - [Pokémons](#get-all-pokémons)
      - [GET all pokémons](#get-all-pokémons)
      - [GET a pokémon by name](#get-a-pokémon-by-name)
      - [POST a pokémon](#create-a-pokémon)	  
      - [PUT a pokémon](#edit-a-pokémon)
      - [DELETE a pokémon](#delete-a-pokémon)  
  - [Hall of fame](#get-all-items-in-hall-of-fame)
      - [GET all items in hall of fame](#get-all-items-in-hall-of-fame)
      - [POST a item in hall of fame](#create-a-item-in-hall-of-fame)
      - [DELETE a item from the hall of fame](#delete-item-from-the-hall-of-fame)
- [Contact](#contact)

## Built With
<div align="center">  
<span style="margin: 10px; display:inline-block">
<img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="50" />  
<p>JavaScript</p>
</span>

<span style="margin: 10px; display:inline-block">
<img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="50" />  
<p>Node.js</p>
</span>

<span style="margin: 10px; display:inline-block">
<img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="Express.js" height="50" />  
<p>Express.js</p>
</span>

<span style="margin: 10px; display:inline-block">
<img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg" alt="PostgreSQL" height="50" />  
<p>PostgreSQL</p>
</span>

<span style="margin: 10px; display:inline-block">
<img style="margin: 10px" src="https://seeklogo.com/images/S/sequelize-logo-9A5075DB9F-seeklogo.com.png" alt="Sequelize" height="50" />  
<p>Sequelize</p>
</span>
</div>

## Endpoints

### Get all types of pokémons

```http
  GET /types
```

### Get all pokémons

```http
  GET /pokemons
```
Original and created Pokémons.

### Get a pokémon by name

```http
  GET /pokemons?name=${pokémon name}
```
The name must be complete. It is not case sensitive, "piKaCHu" will not work.\
**Example:**
* /pokemons?name=Pikachu
* /pokemons?name=Bulbasaur

### Create a pokémon

```http
  POST /pokemons
```
| Data name | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Pokémon name. Up to 10 characters. |
| `types`      | `array` | **Required**. YOU CAN ONLY CHOOSE 2: normal, fighting, flying, poison, ground, rock, bug, ghost, steel, fire, water, grass, electric, psychic, ice, dragon, dark, fairy. |
| `hp`      | `number` | *Default value:* 5 |
| `experience`      | `number` | *Default value:* 5 |
| `img`      | `string` | URL *Default value:* https://res.cloudinary.com/du7lmw4vm/image/upload/v1669690910/CRUD%20pokemon%20NO%20DELETE/silhouette_ylta04.png |
| `attack`      | `number` | *Default value:* 5 |
| `defense`      | `number` | *Default value:* 5 |
| `speed`      | `number` | *Default value:* 5 |
| `height`      | `number` | *Default value:* 1 |
| `weight`      | `number` | *Default value:* 1 |

**Example:**
```jsx
{
	"name": "pou",
	"types": [
		"grass",
		"poison"
	],
	"hp": 45,
	"experience":150,	
	"img" : "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12df0740-88bb-4c8e-8494-5b30eeefadb9/d65m9e7-19f765af-b7ad-4f22-8a20-0688b915d6c9.png/v1/fill/w_338,h_301,strp/pou_png_by_maiiracat_d65m9e7-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzAxIiwicGF0aCI6IlwvZlwvMTJkZjA3NDAtODhiYi00YzhlLTg0OTQtNWIzMGVlZWZhZGI5XC9kNjVtOWU3LTE5Zjc2NWFmLWI3YWQtNGYyMi04YTIwLTA2ODhiOTE1ZDZjOS5wbmciLCJ3aWR0aCI6Ijw9MzM4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.2jGSfSbY9PSSl5XVNw696qqpTv92XvCUlmuIzIExmZ0",
	"attack": 49,
	"defense": 49,
	"speed": 45,
	"height": 7,
	"weight": 69
}
```
### Edit a pokémon

```http
  PUT /pokemons/${pokémon name}
```
**Example:**
```jsx
{
	"name": "pouu",
	"types": [
		"fire"
	],
	"hp": 45,
	"experience":895,
	"img" : "https://i.pinimg.com/originals/0f/03/9c/0f039c558f2e9b8f468797c68105dd9a.jpg",
	"attack": 49,
	"defense": 489,
	"speed": 45,
	"height": 7,
	"weight": 10
}
```

### Delete a pokémon

```http
  DELETE /pokemons/${pokémon name}
```
Original pokemons cannot be deleted, only created pokemons.\
**Example:**
* /pokemons/pouu
* /pokemons/miku

### Get all items in hall of fame

```http
  GET /hall/${pokémon name}
```
**Example:**
* /hall/pouu
* /hall/bulbasaur

### Create a item in hall of fame

```http
  POST /hall/${pokémon name}
```
| Data name | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. Up to 500 characters. |
| `image`      | `string` |  **Required**. URL |

**Example:**
```jsx
{
	"title": "Bulbasaur is angry with Squirtle.",
	"image": "https://i.pinimg.com/originals/70/3a/7c/703a7c305fb049ca0f790da383fc9908.jpg"
}
```

### Delete item from the hall of fame

```http
  DELETE /hall?id=${itemId}
```
**Example:**
* /hall?id=661d7861-1b74-46d9-8a91-9c6277d7793b


## Contact
- Linkedin [www.linkedin.com/in/nicole-lopez-877878212/](https://www.linkedin.com/in/nicole-lopez-877878212/)
- GitHub [@Nicole-Lopez](https://github.com/Nicole-Lopez)
