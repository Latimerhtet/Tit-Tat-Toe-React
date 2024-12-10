type propsType = {
  val: string;
  onSquareClick: () => any;
};

const Square = ({ val, onSquareClick }: propsType) => {
  return (
    <button
      className="border-2 w-12 h-12 font-bold text-slate-400"
      onClick={onSquareClick}
    >
      {val}
    </button>
  );
};

export default Square;
