import { FormEvent, useRef, useState } from "react";
import Header from "../Header/Header";
import BigInput from "../Shared/BigInput";
import utils from "../../utils/form-validations";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";
import Constants from "../../utils/contants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const toggleClickHandler = () => {
    setIsSignInForm(!isSignInForm);
  };
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSubmitClickHandler = (e: FormEvent) => {
    e.preventDefault();
    let email = emailRef.current?.value ?? "";
    let password = passwordRef.current?.value ?? "";
    const result = utils.signInFormValidator(email, password);
    setErrorMsg(result);
    if (result) return;

    // Sign in / Sign Up Logic
    if (!isSignInForm) {
      let displayName = nameRef.current?.value ?? "User";
      let photoURL = Constants.PHOTO_URL_DEFAULT;
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName,
            photoURL,
          })
            .then(() => {
              // Profile updated!
              let currentUser = auth.currentUser!;
              dispatch(
                addUser({
                  uid: currentUser.uid,
                  email: currentUser.email,
                  displayName: currentUser.displayName,
                  photoURL: currentUser.photoURL,
                })
              );
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMsg(`${errorCode} : ${errorMessage}`);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(`${errorCode} : ${errorMessage}`);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user signed in");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(`${errorCode} : ${errorMessage}`);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="flex justify-center h-[100vh] items-center">
        <img
          className="absolute"
          src={Constants.LOGIN_BG_IMG}
          srcSet={Constants.LOGIN_BG_SRCSET}
          alt="bg-image"
        />
        <div className="bg-black/80 p-11 rounded-md z-50 w-[calc(100%-50px)] md:w-1/3">
          <form>
            <h1 className="text-4xl mb-10 font-bold text-white">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>

            {!isSignInForm && (
              <BigInput type="text" placeholder="Name" ref={nameRef} />
            )}
            <BigInput type="emil" placeholder="Email" ref={emailRef} />
            <BigInput
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />

            <div className="text-lg pb-6 text-red-500">{errorMsg}</div>

            <button
              type="submit"
              className="w-full bg-red-500 text-xl h-12 rounded-md text-white mb-4"
              onClick={onSubmitClickHandler}
            >
              Sign In
            </button>
            <div className="text-white text-center mb-10">Forgot password?</div>
            <div className="text-white">
              {isSignInForm ? "New to Netflix?" : "Already a member?"}{" "}
              <span
                className="font-bold cursor-pointer"
                onClick={toggleClickHandler}
              >
                {isSignInForm ? "Sign Up now." : "Sign In."}
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
