import { Link, Outlet } from "react-router-dom";

export default function Root() {
    return (
      <>
        <div className="container w-screen h-screen">
            <div className="grid h-screen grid-cols-12" id="sidebar">
                <div className="lg:col-span-3 md:col-span-4 bg-gray-100 h-full w-full">
                    <div className="grid grid-rows-8 h-full divide-y">
                        <div className="flex justify-center items-center space-x-2">
                            <form id="search-form" role="search">
                            <input
                                id="q"
                                className="px-4 py-2 rounded-lg border border-gray-300"
                                aria-label="Search contacts"
                                placeholder="Search"
                                type="search"
                                name="q"
                            />
                            <div
                                id="search-spinner"
                                aria-hidden
                                hidden={true}
                            />
                            <div
                                className="sr-only"
                                aria-live="polite"
                            ></div>
                            </form>
                            <form method="post">
                            <button className="px-4 py-2 bg-white rounded-lg border border-gray-300 text-blue-700" type="submit">New</button>
                            </form>
                        </div>
                        <div className="row-span-12">
                            <nav>
                                <ul className="">
                                    <li className="py-2 px-2 hover:bg-blue-300 hover:rounded-md">
                                        <Link to={`/`}>Home</Link>
                                        
                                    </li>
                                    <li className="py-2 px-2 hover:bg-blue-300 hover:rounded-md">
                                        <Link to={`contacts/1`}>Contact</Link>
                                    </li>
                                    <li className="py-2 px-2 hover:bg-blue-300 hover:rounded-md">
                                        <a href={`/posts/2`} className="block "> Post</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="px-6 py-4 justify-center items-center" >
                            <h1 className="text-xl text-violet-950 font-bold">React Router Contacts</h1>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-9 md:col-span-8" id="detail">
                    <Outlet />
                </div>
            </div>
        </div>
      </>
    );
  }