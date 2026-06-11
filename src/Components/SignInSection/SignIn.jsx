import GoogleLogo from "../../assets/SignIn/GoogleLogo.png";
import GitHubLogo from "../../assets/SignIn/GitHubLogo.png";

const handleGoogle = () => {
  alert(
    "😅 Google Sign In is currently on a coffee break.\n\nThis button is just for display.",
  );
};

const handleGitHub = () => {
  alert(
    "👨‍💻 GitHub Sign In is busy reviewing pull requests.\n\nThis button is just for display.",
  );
};

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const username = e.target.username.value.trim();
    const password = e.target.password.value.trim();

    if (!name || !username || !password) {
      alert("⚠️ Please fill in all fields to continue.");
      return;
    }

    if (password.length < 6) {
      alert("⚠️ Password must be at least 6 characters.");
      return;
    }

    alert("😊 Welcome to Maison Café, " + name + "!");
  };

  return (
    <div className="min-h-screen bg-[#E6F1FB] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-6 sm:p-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#2D6CCF]">
            Welcome
          </h1>
          <p className="text-gray-500 mt-3 text-sm sm:text-base">
            Sign in to continue your Maison Café experience
          </p>
        </div>

        {/* Google */}
        <div
          onClick={handleGoogle}
          className="flex items-center justify-center gap-4 w-full mt-8 py-3 bg-gray-800 text-white rounded-xl font-medium hover:bg-black active:scale-95 transition cursor-pointer"
        >
          <img src={GoogleLogo} alt="Google" className="h-5 object-contain" />
          <span className="text-sm sm:text-base">Continue with Google</span>
        </div>

        {/* GitHub */}
        <div
          onClick={handleGitHub}
          className="flex items-center justify-center gap-4 w-full mt-4 h-12 bg-gray-800 text-white rounded-xl font-medium hover:bg-black active:scale-95 transition cursor-pointer"
        >
          <img src={GitHubLogo} alt="GitHub" className="h-7 object-contain" />
          <span className="text-sm sm:text-base">Continue with GitHub</span>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="h-px bg-gray-300 flex-1"></div>
          <span className="text-gray-500 text-sm">OR</span>
          <div className="h-px bg-gray-300 flex-1"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="border rounded-xl px-4 py-3 text-sm sm:text-base outline-none focus:border-[#2D6CCF]"
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="border rounded-xl px-4 py-3 text-sm sm:text-base outline-none focus:border-[#2D6CCF]"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border rounded-xl px-4 py-3 text-sm sm:text-base outline-none focus:border-[#2D6CCF]"
          />
          <button
            type="submit"
            className="mt-2 bg-[#2D6CCF] text-white py-3 rounded-xl font-semibold text-sm sm:text-base hover:bg-[#2459aa] cursor-pointer active:scale-95 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
