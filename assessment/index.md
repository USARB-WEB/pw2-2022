# Practical tasks:
1. Create ToR(Term of reference) for final project
2. Create UML structural diagram for entities (https://diagrams.net/)
3. Create database according to ToR
4. Create CRUD according to ToR(min: 3 linked entities)
5. Create custom endpoints acording to ToR (min: 10 endpoints)
6. User authentification
7. Working with files
8. Using Docker
9. Endpoints documentation(Postman/Swagger)
10. Endpoints testing coverage

# Example of ToR:
## Project name: Locations manager

## Entities:

### Country
```
{
  id: number(PK, autoincrement),
  name: string(required, min: 5: max: 50),
  code: string(required, min: 2, max: 2),
  flag: string(optional, path to file),
  area: float(optional),
  population: int(optional)
}
```
### Region
```
{
  id: number(PK, autoincrement),
  name: string(required, min: 5: max: 50),
  code: string(required, min: 2, max: 2),
  country_id: int(required, FK to countries.id)
}
```

### Location
```
{
  id: number(PK, autoincrement),
  name: string(required, min: 5: max: 50),
  region_id: int(required, FK to regions.id)
}
```

## CRUD methods
+ Create
+ Read all entities
+ Read one entity by id
+ Update entity
+ Delete entity

> CRUD methods must be implemented for each entity

## Custom endpoints
+ Get all country regions
+ Get all region locations
+ Get all country regions that have at least 2 locations
+ Find countries by part of name. Example: If user will input ``mo`` then endpoint will return ``Mo``ldova, ``Mo``ngolia, etc.
+ Show the countries list and the number of locations in this country(count).

## User authentification

Can be implemented any method. For example, classical Username and Password method.

API will use Token based authentification for requests.
https://auth0.com/learn/token-based-authentication-made-easy/

## Working with files

At least one of entities will contain 1 or more files associated to.
Example: Country entity will contain Flag.

Must be implemented the following functionalities>
+ Upload file
+ Delete file
+ Show file
  

## Using docker

The application must be encapsulated in the Docker container in order to be run on any computer

## Endpoints documentation

Postman or Swagger must be used to create the documentation for all endpoints.

## Endpoints testing coverage

All enpoints must be tested. 
1. Create test cases
2. Testing
3. Create report about testing

Example:

Endpoint: Create country

Test cases:
1. All fields are valid
2. Field ``name`` is not valid
3. Field ``code`` is not valid
