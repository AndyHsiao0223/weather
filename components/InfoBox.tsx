interface Props {
  date?: string;
  time?: string;
  label?: string;
  content: string;
}

const DateTimeDescription: React.FC<Props> = (props: Props) => {
  return (
    <div className="flex h-[10.5rem] w-[10.5rem] flex-col items-center justify-evenly rounded-[1.875rem] bg-[#1AA0EB] py-4">
      <p className="text-xl">
        {props.hasOwnProperty("label")
          ? props.label
          : `${props.date} ${props.time}`}
      </p>
      <p className="text-4xl">{props.content}</p>
    </div>
  );
};

export default DateTimeDescription;
