# Identifying some "Gotchas"
"gotchas" are things that seem like bugs but are really just missteps that we take along the way. 
1. Gitpod urls not PUBLIC (either frontend or backend or both)
2. Backend servers not running on gitpod side. (guilty!)
3. Gitpod URL actually changing. Occasionally the url will update from one day to the next due to gitpod's servers changing addresses. If something isn't working double check the constants file. 

# Porting these services over for your project:
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

// No need to include your API Base URL, just the end point. 
// Remember your URL is in a 
async function getSomeDataFromBackend() {
  let options = {
    url: `/my-api-endpoint/?some_model__user_id=${state.currentUser.user_id}`, // just the endpoint
    method: 'GET', // sets the method
  } 
  let resp = await request(options) // await the response and pass in this fancy object of request options
  setSomeState(resp.data) // set the response 
}
```
