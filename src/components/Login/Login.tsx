import { useState } from "react"
import Header from "../Header/Header"
import BigInput from "../Shared/BigInput";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleClickHandler = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className="flex justify-center h-[100vh] items-center">
        <img className="absolute" 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_small.jpg" srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_large.jpg 1800w" alt="bg-image" />
        <div className="bg-black/80 p-11 rounded-md z-50 w-[calc(100%-50px)] md-w-1/3">
          <form >
            <h1 className="text-4xl mb-10 font-bold text-white">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
            
            {!isSignInForm && <BigInput type='text' placeholder='Name'/>}
            <BigInput type='emil' placeholder='Email'/>
            <BigInput type='password' placeholder='Placeholder'/>

            <button type="submit" className="w-full bg-red-500 text-xl h-12 rounded-md text-white mb-4">Sign In</button>
            <div className="text-white text-center mb-10">Forgot password?</div>
            <div className="text-white">
              {isSignInForm ? 'New to Netflix?' : 'Already a member?'} <span className="font-bold cursor-pointer" onClick={toggleClickHandler}>{isSignInForm ? 'Sign Up now.' : 'Sign In.'}</span></div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Login