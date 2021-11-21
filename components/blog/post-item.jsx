import Link from 'next/link';

const PostItem = ({ slug, title, excerpt }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <a>
        <div className="py-6 border-b border-gray-800 hover:border-gray-700 transition-all">
          <div className="flex items-start pb-1">
            <h3 className="flex-1 text-xl font-semibold">{title}</h3>
            <div className="text-gray-400">--- views</div>
          </div>
          <p className="text-gray-400">{excerpt}</p>
        </div>
      </a>
    </Link>
  );
};

export default PostItem;
