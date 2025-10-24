import { useState } from 'react'
import './List.module.css'

type Item = {
  id: number
  task: string
  icon?: React.ReactNode
  isCompleted: boolean
}

export const List = () => {
  const [items, setItems] = useState<Item[]>([
    {
      id: 1,
      task: 'Выучить React',
      icon: '🍏',
      isCompleted: false,
    },
    {
      id: 2,
      task: 'Закрепить JavaScript',
      icon: '🍏',
      isCompleted: true,
    },
    {
      id: 3,
      task: 'Не забивать на английский',
      icon: '🍏',
      isCompleted: false,
    },
  ])

  const handleToggle = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item,
      ),
    )
  }

  return (
    <ul>
      { items.map((item) => (
        <li key={ item.id }>
          <div style={ { display: 'flex', alignItems: 'center', gap: '8px' } }>
            { item.icon && <div>{ item.icon }</div> }
            <span>{ item.task }</span>
          </div>
          <input
            type="checkbox"
            checked={ item.isCompleted }
            onChange={ () => handleToggle(item.id) }
          />
        </li>
      )) }
    </ul>
  )
}
