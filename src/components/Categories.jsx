import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { buttonCategories } from "../utils/constants";

const Categories = ({ setSelectedCategory }) => {
  const [selected, setSelected] = useState("Popular");

  const handleSelection = (categoryName) => {
    setSelected(categoryName === selected ? null : categoryName);
    setSelectedCategory(categoryName);
  };

  return (
    <Section>
      {buttonCategories.map((category) => (
        <Button
          key={category.name}
          isSelected={category.name === selected}
          onClick={() => handleSelection(category.name)}
        >
          {category.name}
        </Button>
      ))}
    </Section>
  );
};

Categories.propTypes = {
  setSelectedCategory: PropTypes.func.isRequired,
};

export default Categories;

const Button = styled.button`
  min-width: fit-content;
  margin: 16px 8px;
  background-color: ${({ isSelected }) => (isSelected ? "#111" : "#c5c6d0")};
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#111")};
  padding: 5px 8px;
  border-radius: 8px;
  cursor: pointer;
`;

const Section = styled.section`
  display: flex;
  overflow-x: scroll;
  align-items: center;

  ::-webkit-scrollbar {
    display: none;
  }
`;
