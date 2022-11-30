# Identifying some "Gotchas"
1. Gitpod urls not PUBLIC
2. Backend servers not running on gitpod side.
3. Gitpod URL actually changing. Occasionally the url will update from one day to the next due to gitpod's servers changing addresses. If something isn't working double check the constants file. 

# Porting these services over for your project:
1. Copy over the `services/` and `context/` directories to your project's `src/` folder.
1. Wrap the App.js component in the `<GlobalProvider />` that you import from the `context/` folder.
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

// No need to include you API Base URL, just the end point. 
// Remember your URL is in a 
async function getConnections() {
  let options = {
    url: `/connections/?dog_target__user_id=${state.currentUser.user_id}`,
    method: 'GET', // sets the method
  } 
  let resp = await request(options)
  setSomeState(resp.data)
}
```
