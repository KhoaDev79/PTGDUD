
import './App.css'
import ProductCard from './components/ProductCard'
import Button from './components/Button'

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', padding: '40px 20px' }}>
      <h1 style={{ margin: 0 }}>Bài 1 – Product Card</h1>
      <ProductCard />

      <h1 style={{ margin: 0 }}>Bài 2 – Button Component</h1>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Button type="primary">Primary</Button>
        <Button type="danger">Danger</Button>
        <Button type="success">Success</Button>
      </div>
    </div>
  )
}

export default App
