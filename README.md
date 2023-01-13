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
