import GrandChildComponent from './GrandChildComponent'
function ChildComponent() {
  return (
    <div>
      <h3>ChildComponent</h3>
      <GrandChildComponent />
    </div>
  )
}

export default ChildComponent
