export default function LoginPage() {
  return (

      <div className="w-full h-full bg-[url('/bg.jpg')] bg-cover flex items-center justify-center">
        <div className="w-[400px] h-[500px] backdrop-blur-md shadow-2xl rounded-lg p-2 flex flex-col items-center">
          <img src="image.png" className="w-[150px] h-[70px] object-cover bg-accent rounded-lg" />
          <h1 className="text-3xl font-bold text-secondary mt-5">Login</h1>
        </div>

      </div> 

  )
}