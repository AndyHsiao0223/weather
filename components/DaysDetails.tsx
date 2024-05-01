import Image from "next/image";

interface Props {
  date: string;
  desc: string;
  rain: string;
  dayFeel: string;
  eveFeel: string;
}

const DaysDetails: React.FC<Props> = (props: Props) => {
  return (
    <div className="flex h-[4.5rem] w-[23rem] items-center justify-between bg-[#D9D9D9] px-3">
      <div>
        <p>{`${props.date} ${props.desc}`}</p>
      </div>

      <div className="flex space-x-3">
        <div className="flex items-center">
          <Image
            src="./rain.svg"
            alt="rain"
            width={17}
            height={24}
            className="m-1"
          />
          <p>{props.rain}</p>
        </div>

        <div>
          <div className="flex items-center">
            <Image
              src="./day.svg"
              alt="day"
              width={25}
              height={25}
              className="m-1"
            />
            <p>{props.dayFeel}</p>
          </div>
          <div className="flex items-center">
            <Image
              src="./eve.svg"
              alt="eve"
              width={24}
              height={24}
              className="m-[0.313rem]"
            />
            <p>{props.eveFeel}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaysDetails;
