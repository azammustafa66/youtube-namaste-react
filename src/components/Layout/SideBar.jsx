import { useSelector } from "react-redux";
import { sideBarCategories } from "../../utils/constants";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <section className="flex flex-col gap-4 cursor-pointer">
      {sideBarCategories.map((category) => (
        <div key={category.name} className="flex items-center">
          {category.icon}
          <p className="ml-2">{category.name}</p>
        </div>
      ))}
    </section>
  );
};

export default SideBar;
