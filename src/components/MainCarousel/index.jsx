import { useState } from "react";

import StyledButtonOrLink from "../../components/controls/StyledButtonOrLink";

// набор данных о слайдах подключается из внешнего файла
import slidesData from "./slides_data.js";

import "./index.css";

// Функциональный компонент, реализующий карусель
const MainCarousel = (props) => {
  const { className = "" } = props;
  // задание начального состояния — по умолчанию активен слайд 0 (первый)
  const [selectedSlide, setSelectedSlide] = useState(0);

  // Функция, выполняющая обработку переключения слайдов
  const handleSwitchChange = (event) => {
    const newIndex = Number(event.target.dataset.index);
    // установка выбранного слайда в качестве активного
    setSelectedSlide(newIndex);
  };

  // преобразование данных о слайдах в элементы списка
  const carouselSlides = slidesData.map((item, index) => {
    // класс-признак видимости  слайда
    const visibilityModifier =
      selectedSlide === index ? "main-carousel__slide--visible" : "";
    const className = `main-carousel__slide slide${
      index + 1
    } ${visibilityModifier}`;

    return (
      <li className={className} key={index}>
        <div className="main-carousel__slide-info">
          <p className="main-carousel__collection-description">
            {item.description}
          </p>
          <StyledButtonOrLink
            className="main-carousel__slide-catalog-link"
            caption="Каталог"
            to={item.link}
          />
        </div>
      </li>
    );
  });

  // формирование элементов списка переключателей видимости слайдов на основе данных о них
  const switchButtons = slidesData.map((item, index) => {
    const labelId = `radio${index}`;

    return (
      <li className="main-carousel__swicth-button" key={index}>
        <input
          type="radio"
          className="main-carousel__radio"
          id={labelId}
          name="main-carousel"
          data-index={index}
          onChange={handleSwitchChange}
          checked={selectedSlide === index}
        />
        <label className="main-carousel__label" htmlFor={labelId}></label>
      </li>
    );
  });

  return (
    <div className={`main-carousel ${className}`}>
      <ul className="main-carousel__slides-container">{carouselSlides}</ul>

      <ul className="main-carousel__swicth">{switchButtons}</ul>
    </div>
  );
};

export default MainCarousel;
