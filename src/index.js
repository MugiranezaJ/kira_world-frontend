import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import { Provider } from "./state"
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  // <Provider>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>,
  // </Provider>,
  document.getElementById("root")
)
