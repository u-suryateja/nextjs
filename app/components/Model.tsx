

type ModelProps = {
  title: string
  children: React.ReactNode
  close: () => void
}

export default function Model({ title, children, close }: ModelProps) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
            <div className="flex flex-col w-[350px] bg-amber-600 p-3 rounded" >
                <div className="flex justify-between" style={{ borderBottom:"2px solid black" }}>{title}
                    <button className="cursor-pointer"onClick={close}>Close</button>
                </div>
                <div className="flex-1 ">
                    {children}
                </div>
            </div>
        </div>
    )
}