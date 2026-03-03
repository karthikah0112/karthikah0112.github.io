import React, { useEffect } from 'react'
import './styles.css'
import content from './content.html?raw'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'none'
          }
        })
      },
      { threshold: 0.05 },
    )

    const elements = document.querySelectorAll('.fade-in')
    elements.forEach((el) => {
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return <div dangerouslySetInnerHTML={{ __html: content }} />
}

export default App

