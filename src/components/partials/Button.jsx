const Button = ({ text, className, onClick }) => {
  return (
    <button
      className={`${className} bg-blue-500 text-white py-1 rounded-2xl`}
      onClick={onClick}
    >{text}</button>
  )
}

export default Button