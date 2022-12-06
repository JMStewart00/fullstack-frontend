# Identifying some "Gotchas"
"gotchas" are things that seem like bugs but are really just missteps that we take along the way. 
1. Gitpod urls not PUBLIC (either frontend or backend or both)
2. Backend servers not running on gitpod side. (guilty!)
3. Gitpod URL actually changing. Occasionally the url will update from one day to the next due to gitpod's servers changing addresses. If something isn't working double check the constants file. 
4. Installing the packages in the wrong spot in your project. Need to `npm install` next to your package.json. 

# Porting these services over for your project:
1. `npm install axios jwt-decode`. You can choose to use install `react-router-dom` as well for URL specific routes on your front-end pages.
1. Copy over the `services/` and `context/` directories to your project's `src/` folder.
1. Wrap the App.js component in the `<GlobalProvider />` that you will import from the `context/` folder.
1. Use the GlobalContext provider like a useState hook. Example below:
1. To use the axios request method create for you also refer to the example below.

## GlobalContext hook usage after installing in your app in your component to get the currentUser
```javascript
import { useGlobalState } from "../context/GlobalState";

function NavBar() {
  const [ state, dispatch ] = useGlobalState();
  return <h1>{state.currentUser}</h1>
}
```

## API Request Service Usage
```javascript
import request from 'path/to/services/api.request'

// No need to include your API Base URL, just the end point. 
// Remember your URL is in the api.constants file.
// Also extra documentation for this object can be found https://axios-http.com/docs/req_config
async function getSomeDataFromBackend() {
  let options = {
    url: `/my-api-endpoint/, // just the endpoint
    method: 'GET', // sets the method
    data: { // gets sent in the body of the request
       key: value,
       otherKey: otherValue,
    }
  } 
  let resp = await request(options) // await the response and pass in this fancy object of request options
  setSomeState(resp.data) // set the response 
}
```
