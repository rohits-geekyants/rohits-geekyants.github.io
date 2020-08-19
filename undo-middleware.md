# Undo Middleware

- Undo / Redo stack is local
- Performing any Undo or Redo is a new patch on the document
- Undo / Redo

```tsx
import { syncstateHistory, undoable, enableUndoCheckpoint } from "syncstate-history";

const doc = createDoc(
  { todos: [], filter: 'all' },
  applyMiddleware(syncstateHistory)
);

enableUndoCheckpoint()

undoable((patch) => {
	if(patch.path.startsWith("/todos") {
		return true;
	}
});

// Undo action
doc.dispatch({
	type: "UNDO"
})

// Redo action
doc.dispatch({
	type: "REDO"
})

// Undo action
doc.dispatch({
	type: "UNDO_TILL_BREAKPOINT"
})

// Redo action
doc.dispatch({
	type: "REDO_TILL_BREAKPOINT"
})

doc.dispatch({
	type: "INSERT_UNDO_BREAKPOINT"
})

// Checkpoint patch
dispatch({
  type: 'PATCH',
  payload: {
	  op: 'add',
	  path: todoPath + '/-',
	  value: {
	    caption: todoItem,
	    completed: false,
	  },
	},
});
```

# Differences with redux-undo

- It doesn't replace with the entire snapshot of the app. Instead it applies a patch on the document from the Undo / Redo stack.

```tsx
add todo
checkpoint
add todo
checkpoint
check todo
```
