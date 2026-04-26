import React, { useContext } from 'react';
import { BookContext } from '../../BookProvider/BookProvider';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  Label,
  ResponsiveContainer,
} from 'recharts';
import { useNavigate } from 'react-router';

const colors = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  'red',
  'pink',
  'black',
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { x, y, width, height, index } = props;
  const color = colors[index % colors.length];
  return (
    <path
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke={color}
      fill={color}
      style={{ transition: 'stroke-width 0.3s ease-out' }}
    />
  );
};

const CustomColorLabel = (props) => {
  const fill = colors[(props.index ?? 0) % colors.length];
  return <Label {...props} fill={fill} />;
};

const PageToReadChart = () => {
  const { storeBook } = useContext(BookContext);

  // ✅ dynamic data
  const chartData = storeBook.map((book) => ({
    name: book.bookName,
    pages: book.totalPages,
    rating: book.rating,
  }));

  // ✅ empty state
  if (storeBook.length === 0) {
      const navigate = useNavigate();
    return (
      <div className="container mx-auto flex flex-col items-center justify-center py-5 sm:py-7 md:py-10  mt-25 text-center shadow border border-gray-100 rounded-xl">
        <h3 className="text-xl sm:text-2xl font-bold  text-black font-secondary">
          Nothing in Read List
        </h3>
        <p className="text-sm text-gray-500 mt-2 font-secondary">
          Add some books to see your reading stats here.
        </p>
        <button
          onClick={() => navigate('/')}
          className="inline-flex btn shadow-none hover:bg-amber-400 items-center border px-3 py-2 bg-amber-500 rounded-lg transition-all duration-150 active:scale-95 mt-5"
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M7.5 2v11M2 7.5h11"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          Add to reading list
        </button>
      </div>
    );
  }

  return (
    <div className="mt-30 container mx-auto mb-20 md:mb-30 ">
      <div style={{ width: '100%', height: 350 }}>
        <h2 className="text-xl md:text-2xl font-bold text-center mb-4">
          Pages Read Overview
        </h2>
        <ResponsiveContainer width="100%" height="100%" >
          <BarChart
            data={chartData} // ✅ dynamic data
            margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip cursor={{ fillOpacity: 0.5 }} />
            <XAxis dataKey="name" /> {/* book.bookName */}
            <YAxis />
            <Bar dataKey="pages" fill="#8884d8" shape={<TriangleBar />}>
              {' '}
              {/* book.totalPages */}
              <LabelList content={CustomColorLabel} position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PageToReadChart;
