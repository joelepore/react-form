const Button = ({ text, className }) => {
  return (
    <button className={`${className} bg-blue-500 text-white py-1 rounded-2xl`}>{text}</button>
  )
}

export default Button