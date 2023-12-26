import { categories } from '../utils/constants';
import { useContext } from 'react';
import { YoutubeContext } from '../context/youtubeContext';

const SideNav = () => {
  const { selectedCategory, setSelectedCategory } =
    useContext(YoutubeContext);

  return (
    <nav className="flex flex-col p-4">
      {categories.map((item, i) => (
        <div
          onClick={() => setSelectedCategory(item)}
          key={i}
        >
          <div
            className={`
          ${selectedCategory.name === item.name && 'bg-[#2d2d2d]'}
          flex items-center gap-2 p-2 py-4 text-lg cursor-pointer rounded-md transition hover:bg-[#2d2d2d]`}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
          {item.divider && <hr />}
        </div>
      ))}
    </nav>
  );
};

export default SideNav;