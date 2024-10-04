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
/* 
1)32
2)20
3)18
4)12
5)3.5
6)10
7)25/2
8)25/2
9)8
10)10


*/
