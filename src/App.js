import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import User from './features/users/User'
function App() {
  return (
    <div className="container">
      <div className="d-flex border-bottom pt-2 pb-2 mb-5">
        <div className="p-2 flex-grow-1 text-center">
          <strong>RTK Query Get</strong>
        </div>
      </div>

      <div className="row">
        <User />
      </div>
    </div>
  )
}
export default App
