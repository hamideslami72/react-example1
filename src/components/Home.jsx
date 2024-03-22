import { useState } from 'react'
import { ArrowLongLeftIcon } from '@heroicons/react/20/solid'
import { Link } from "react-router-dom";

const statuses = {
  Paid: 'text-green-700 bg-green-50 ring-green-600/20',
  Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
  Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
}

const posts = [
    {
      id: 1,
      title: 'آموزش ری اکت (React JS)',
      description:
        'آموزش رایگان React سعی دارد تا تمام مفاهیم اساسی و اولیه React را به صورت رایگان در اختیار همگان قرار دهد. این آموزش مانند دیگر آموزش‌های ما به صورت پروژه-محور خواهد بود.',
      imageUrl:
        '/src/assets/images/react.jpg',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
    },
    {
        id: 2,
        title: 'آموزش پیشرفته React',
        description:
          'آموزش پیشرفته React دوره‌ای است که در آن شما به صورت عمیق‌تر و حرفه‌ای‌تر با ویژگی React آشنا می‌شوید و از آن‌ها به صورت عملی در پروژه‌های خود استفاده می‌کنید.',
        imageUrl:
            '/src/assets/images/react-pro.jpg',  
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'React', href: '#' },
      },
      {
        id: 3,
        title: 'آموزش Redux',
        description:
          'در طول دوره آموزش redux (ریداکس) سعی می‌کنیم به شکل کامل و کاربردی روش استفاده از کتابخانه redux برای حل مشکل مدیریت stateها را به شما آموزش دهیم.',
        imageUrl:
        '/src/assets/images/redux.jpg',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'React', href: '#' },
        
      },
      
  ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <main className='bg-gray-800'>
        <div className="space-y-16 xl:space-y-20 py-15 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">

              <div className="flex items-center justify-between">
                <h2 className="text-3xl sm:text-4xl font-bold leading-7 text-gray-50"> آخرین مقالات</h2>
                <Link 
                    to={`/posts`} 
                    className="flex justify-center leading-2 justify-items-center content-center text-sm font-semibold leading-10 text-blue-400 hover:text-blue-300"
                >
                         مشاهده همه مقالات
                        <ArrowLongLeftIcon className="h-6 w-6" aria-hidden="true" />
                </Link>
              </div>
              
              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex flex-col items-start bg-gray-900 p-6 rounded-xl">
                <div className="relative w-full">
                <Link to={`/posts/`+post.id} className="font-semibold leading-6">
                  <img
                    src={post.imageUrl}
                    alt=""
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  </Link>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-50">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-800 px-3 py-1.5 font-medium text-gray-50 hover:bg-gray-700"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-50 group-hover:text-blue-400">
                    <Link to={`/posts/`+post.id} className="font-semibold leading-6">
                        {post.title}    
                    </Link> 
                    </h3>
                  </div>
                </div>
              </article>
            ))}
          </div>

            </div>
          </div>
        </div>
      </main>
    </>
  )
}
