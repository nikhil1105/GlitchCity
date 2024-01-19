
const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    props.onAuth({ username: value, secret: value });
  };

  return (
    <div className="flex items-center justify-center bg-[#222020] w-[100vw] h-[100vh] "  >
      <form onSubmit={onSubmit} className="border p-20 bg-[#8bd9da] rounded-xl">
        <div className="text-[30px] font-bold text-gray-200 ">Welcome <span className="">👋</span></div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;