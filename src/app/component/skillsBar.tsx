export default function Bar(props:{name:string,percentage:number}){
    return(
        <div>
         <div className="flex justify-between mb-1">
        <span className="text-xl font-bold text-rose-900">
          {props.name}
        </span>
        <span className="text-md font-bold text-rose-900">
          {props.percentage}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 ">
        <div className={`bg-violet-700 h-2.5 rounded-full w-56 bar-${props.percentage}`}></div>
      </div>
      </div>
    )
}