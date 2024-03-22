import { useState } from 'react'
import { ArrowLongLeftIcon } from '@heroicons/react/20/solid'
import { Link } from "react-router-dom";
import { PostContext } from "../context/PostContext"
import PostList from './PostList';

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
              

              <PostContext.Provider value={posts}>
                 <PostList />
              </PostContext.Provider>
          

            </div>
          </div>
        </div>
      </main>
    </>
  )
}
