import Image from "next/image";

export default function DayState({day} : { day: boolean | undefined } ) {
    let image: [string, string, number?] = [
        "images/circle.svg",
        "Dia não preenchido",
        24,
    ];

    if(day === true) image = ["images/check.svg", "Dia concluído", 24];
    if(day === false) image = ["images/uncheck.svg", "Dia não concluído", 24];

    const [src, alt, size] = image

    return (
        <div className="flex items-center justify-center h-9">
            <Image src= { src }
            height= { size }
            width= { size }
            alt= { alt }/>
        </div>
    );
}