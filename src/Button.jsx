export default function Button({ title, bgColor, textColor, onClick }) {
  return (
    <div
      className={`flex justify-center items-center rounded-full px-6 py-2 font-bold cursor-pointer`}
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {title}
    </div>
  );
}
