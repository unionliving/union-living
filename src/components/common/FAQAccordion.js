"use client"
import React, { useState } from "react"

const AnswerRenderer = ({ a }) => {
  if (!a) return null
  if (typeof a === "string") {
    return <p className="mb-3">{a}</p>
  }
  if (Array.isArray(a)) {
    return (
      <div>
        {a.map((block, idx) => {
          if (!block) return null
          if (block.type === "p") {
            return (
              <p key={idx} className="mb-3">
                {block.text}
              </p>
            )
          }
          if (block.type === "ul" && Array.isArray(block.items)) {
            return (
              <ul key={idx} className="list-disc pl-5 mb-3 space-y-1">
                {block.items.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            )
          }
          if (block.type === "ol" && Array.isArray(block.items)) {
            return (
              <ol key={idx} className="list-decimal pl-5 mb-3 space-y-1">
                {block.items.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ol>
            )
          }
          return null
        })}
      </div>
    )
  }
  return null
}

const FAQItem = ({ q, a, isOpen, onToggle }) => (
  <div className="border-b border-gray-200">
    <button
      type="button"
      onClick={onToggle}
      className="w-full flex items-center justify-between py-4 text-left"
      aria-expanded={isOpen}
    >
      <span className="font-[NeueBold] text-base lg:text-lg">{q}</span>
      <span
        className={`ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-transform ${
          isOpen ? "rotate-45" : "rotate-0"
        }`}
        aria-hidden
      >
        +
      </span>
    </button>
    {isOpen && (
      <div className="pb-4 text-sm lg:text-base text-gray-700 leading-relaxed">
        <AnswerRenderer a={a} />
      </div>
    )}
  </div>
)

const FAQAccordion = ({ title = "FAQs", faqs = [] }) => {
  const [openIndex, setOpenIndex] = useState(null)

  const onToggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx))
  }

  return (
    <section className="lg:mx-16 mx-4 pt-12  pb-4">
      <h2 className="font-[NeueBold] text-[1.4rem] lg:text-[2.2rem] mb-4">{title}</h2>
      <div className="bg-white rounded-lg divide-y divide-gray-200">
        {faqs.map((item, idx) => (
          <FAQItem
            key={idx}
            q={item.q}
            a={item.a}
            isOpen={openIndex === idx}
            onToggle={() => onToggle(idx)}
          />
        ))}
      </div>
    </section>
  )
}

export default FAQAccordion
