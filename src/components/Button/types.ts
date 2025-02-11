export interface ButtonProps {
    name?: string;
    type?: "submit" | "button" | "reset";
    onClick?: () => void; // типизация функции кот ничего не возвращает
    disabled?: boolean;
  }