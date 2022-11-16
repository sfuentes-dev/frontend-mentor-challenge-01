const Alert = ({ children }) => {
  return (
    <div
      className='text-red-500 italic mt-2  text-start'
      style={{ marginLeft: 470 }}
    >
      {children}
    </div>
  )
}

export default Alert
