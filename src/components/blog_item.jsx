
import { PropTypes } from 'prop-types';
import {FormatDate} from './format_Date';

const BlogItem = ({ blog, handleClick }) => {
    return (
        <div className='w-full flex group  my-2 items-center justify-between p-3 px-5 rounded-md border border-slate-400/30 hover:shadow-md transition-shadow duration-300 cursor-pointer' onClick={() => handleClick(blog.id)} >
            {/* create icon of first letter of title */}
            <div className='flex items-center gap-4'>
                <div className='w-12 h-12 rounded-md border font-serif border-slate-800/40 flex items-center justify-center text-slate-800/40 uppercase text-xl font-bold'>
                    {blog.title[0]}
                </div>

                <div >
                    <h1 className='text-md md:text-xl font-medium'>{blog.title}</h1>
                   
                    <p className='text-xs md:text-sm text-slate-600'>Published {"."} {
                        FormatDate(blog.published_at)
                   }</p>
                </div>
            </div>

            {/* eye icon */}
            <div className='hidden w-12 h-12 group-hover:flex items-center justify-center text-slate-800/40 uppercase text-xl font-bold' >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4C6 4 1 12 1 12s5 8 11 8 11-8 11-8-5-8-11-8z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6s2 2.5 2 6-2 6-2 6" /></svg>
            </div>

        </div>
    )
}

BlogItem.propTypes = {
    blog: PropTypes.object,
    handleClick: PropTypes.func
}

export default BlogItem