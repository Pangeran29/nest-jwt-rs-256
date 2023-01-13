## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev
```

## Generating public and private key 

```bash
# private ke
$ openssl rsa -in private.pem -pubout -out public.pem

# public key
$ openssl rsa -in private.pem -pubout -out public.pem
```

## Protect route using guard (middleware) 
use: 
```
@UseGuards(JwtGuard)
```
JwtGuard implements strategy from JwtStrategy 
don't forget to register your guard as providers in module

## RBAC (Roles Based Access Control) 
use: 
```
@Roles(ROLES.ADMIN)
@UseGuards(JwtGuard, RolesGuard)
```
implement access control user in API
