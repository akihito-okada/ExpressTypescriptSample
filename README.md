# ExpressTypescriptSample

## Run Local App

```
$ yarn run dev
```

## Test

```
$ yarn run test
```

## Lint

```
$ yarn run lint
```

## Format

```
$ yarn run format
```

## Curl test

```
Get All
curl localhost:3000/v1/users

Get
curl localhost:3000/v1/users/1

Create
curl -X POST -H "Content-Type: application/json" -d '{"name":"hanako"}' localhost:3000/v1/users

Update
curl -X PATCH -H "Content-Type: application/json" -d '{"name":"hanao"}' localhost:3000/v1/users/3

Delete
curl -X DELETE localhost:3000/v1/users/1
```

## Reference

https://github.com/sadnessOjisan/ts-clean
