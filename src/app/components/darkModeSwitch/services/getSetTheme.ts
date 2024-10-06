export const toggleTheme = (
  theme: "dark" | "light",
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>
) => {
  const newTheme = theme === "light" ? "dark" : "light";
  setTheme(newTheme);
  document.documentElement.classList.remove(theme);
  document.documentElement.classList.add(newTheme);
  localStorage.setItem("theme", newTheme);
};

export const getTheme = (
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>
) => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme as "light" | "dark");
    document.documentElement.classList.add(savedTheme);
  }
};
