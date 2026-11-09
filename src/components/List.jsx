
import { useState } from 'react'

export default function List() {

  const [items, setItems] = useState(["coffee", "bread", "eggs"])
  const [input, setInput] = useState("")

  const add = (item) => {
    setItems([...items, item])
  }

  const remove = (index) => {
    setItems(items.filter((_, i) => i !== index))
  }

  return (
    <>
      <h1>List</h1>

      <form onSubmit={(e) => {
        e.preventDefault()
        // Add the new item to the list
        add(input)
        // Clear the input field
        setInput('')
      }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>

      <Items items={items} onRemove={remove} />
    </>
  )
}

function Items({ items, onRemove }) {
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <Item
            key={index}
            value={item}
            onRemove={() => onRemove(index)}
          />
        )
      })}
    </ul>
  )
}

function Item({ value, onRemove }) {
  return (
    <li>
      {value} <button onClick={onRemove}>x</button>
    </li>
  )
}
