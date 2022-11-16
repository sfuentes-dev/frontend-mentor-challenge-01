const Alert = ({ children }) => {
  return (
    <div className='text-red-500 italic mt-2' style={{ marginRight: 350 }}>
      {children}
    </div>
  )
}

export default Alert
