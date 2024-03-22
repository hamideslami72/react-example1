import { Link } from "react-router-dom"
import { PostContext } from "../context/PostContext"
import PostList from "./PostList"

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
    category: { title: 'React', href: '#' },
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
    {
      id: 4,
      title: 'بهینه سازی در React ',
      description:
        'دوره بهینه سازی در React یک دوره ویژه برای React کارهاست تا کدبهتری با سرعت بالاتری در React بنویسند، در قالب این دوره به React کار بهتری تبدیل خواهید شد',
      imageUrl:
      '/src/assets/images/react4.jpg',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'React', href: '#' },
      
    },
    {
      id: 5,
      title: 'آموزش تایپ اسکریپت در React ',
      description:
        'در طول دوره آموزش تایپ اسکریپت در React سعی داریم روش استفاده درست از تایپ اسکریپت در فریمورک React.js را قدم به قدم به شما آموزش دهیم. یادگیری این مهارت در نهایت کمک می‌کند اپلیکیشن‌های بسیار قدرتمند‌تری در React.js ایجاد کنید.',
      imageUrl:
      '/src/assets/images/react5.jpg',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'React', href: '#' },
      
    },
    {
      id: 6,
      title: 'کتابخانه‌های پرکاربرد React',
      description:
        'هدف اصلی که دوره آموزشی کتابخانه‌های پر کاربرد React دنبال می‌کند آشنا کردن شما با کتابخانه‌هایی محبوب و پر استفاده React.js است. کتابخانه‌هایی که اگر در کنار React مورد استفاده قرار بگیرد می‌تواند سطح کاربری React را افزایش داده و در فرایند ساخت پروژه‌های بزرگ استفاده شود.',
      imageUrl:
      '/src/assets/images/react6.jpg',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'React', href: '#' },
      
    },
    
]
  
  export default function Posts() {
    return (
      <div className="bg-gray-800 py-15 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl">
                آرشیو مقالات
            </h2>
          </div>
          <PostContext.Provider value={posts}>
            <PostList />
          </PostContext.Provider>
          
        </div>
      </div>
    )
  }
  