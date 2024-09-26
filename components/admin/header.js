import Link from "next/link";
import { removeCookies } from "cookies-next";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  const onLogout = () => {
    removeCookies("login");
    removeCookies("token");
    router.push("/hidden/login");
  };
  return (
    <>
      {/* Header Start */}
      <header className="w-full">
        <div className="container mx-auto  flex justify-between py-3">
          <Link legacyBehavior href="/" replace>
            <a  className="font-normal text-lg">Kusena Dev</a>
          </Link>

          <nav>
            <ul className="flex">
              <li>
                <Link legacyBehavior  href={{
                  pathname: '/hidden/',
                }} replace>
                  <a className="text-sm px-3 font-normal">Home</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior   
                href={{
                  pathname: '/hidden/portofolio/',
                }}>
                  <a className="text-sm px-3 font-normal">Portofolio</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior  href={{
                  pathname: '/hidden/blog/',
                }} replace>
                  <a className="text-sm px-3 font-normal">Blogs</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior  href={{
                  pathname: '/hidden/category/',
                }} replace>
                  <a className="text-sm px-3 font-normal">Category</a>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    onLogout();
                  }}
                  className="text-sm px-3 font-normal"
                >
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* Header End */}
    </>
  );
};
export default Header;
