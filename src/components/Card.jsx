const Card = ({ children, className }) => {
  return (
    <div className={`${className} border border-neutral-300 rounded-2xl`}>
      {children}
    </div>
  )
}

export default Card