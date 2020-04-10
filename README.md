# Pagination in React.js

## Running project

```bash
npm i
npm start
```

## Default pagination

![Default pagination](https://user-images.githubusercontent.com/32642944/78912978-990b0a80-7a88-11ea-8314-e731d8ec0023.PNG)

## Custom pagination

![Custom pagination 1](https://user-images.githubusercontent.com/32642944/78917003-94495500-7a8e-11ea-8bae-4f126a4ea61c.PNG)

![Custom pagination 2](https://user-images.githubusercontent.com/32642944/78916840-5d733f00-7a8e-11ea-8308-9b8da4e94322.PNG)

![Custom pagination 3](https://user-images.githubusercontent.com/32642944/78913230-fdc66500-7a88-11ea-859e-c98b1c4bdf20.PNG)

## Use in your app

**Import component**

```javascript
import DefaultPagination from './DefaultPagination';
```

__Add a pagination component in the App__

```javascript
<DefaultPagination pageCount={pageCount} page={page} setPage={setPage} />
```
or
```javascript
<CustomPagination pageCount={pageCount} page={page} setPage={setPage} />
```

The __CustomPagination__ component with 
`pageCount={pageCount} page={page} setPage={setPage}` as the props.

__Where:__
- `pageCount` - all page count
- `page` - current page
- `setPage` - is function that sets the current page