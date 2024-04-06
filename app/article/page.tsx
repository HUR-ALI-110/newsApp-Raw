import { notFound } from "next/navigation";
import LiveTimeStamp from "../_compoenents/LiveTimeStamp";


type Props = {
    searchParams?:NewsData;
}
function ArticlePage({searchParams}:Props) {
    if((searchParams && Object.entries(searchParams).length ===0)||!searchParams){
        return notFound();
    }

    const item:NewsData = searchParams;
  return (
    <article>
        <section className='flex flex-col lg:flex-row pb-24 px-0 lg:px-10 mt-6'>
                {item.urlToImage && (
                    <img
                        className='h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md'
                        src={item.urlToImage}
                        alt={item.title}
                    />
                )}

                <div className='px-10'>
                    <h1 className='text-4xl font-serif capitalize px-10 pt-5 mb-6 underline-offset-4 decoration-double pb-2'>
                        {item.title}
                    </h1>

                    <div className='flex divide-x-2 space-x-4'>
                        <h2 className='font-bold'>By: {item.author}</h2>
                        <h2 className='font-bold pl-4'>Source: {item.source.name}</h2>
                        <p className='pl-4'>

                            <LiveTimeStamp time={item.publishedAt} /></p>
                    </div>

                    <p className='pt-4'>{item.description}</p>
                </div>
            </section>
    </article>
  )
}

export default ArticlePage