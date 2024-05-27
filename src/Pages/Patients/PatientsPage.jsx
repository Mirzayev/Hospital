

import {useEffect, useState} from "react";



   export default function PatientsPage(){
    const [patient, setPatient] = useState([])

    // console.log(patient)
    useEffect(() => {
        fetch('http://localhost:3000/patientPage')
            .then((res) => res.json())
            .then((data) => setPatient(data))

    }, []);

    return (

        <div className='max-w-[1440px] m-9 p-6 bg-white drop-shadow-md shadow-black mb-[55px]  overflow-x-scroll'>
            <p className=' text-[20px] leading-[26px] font-bold'> Bemorlar</p>

            <div className='grid grid-cols-9 text-[14px] gap-5 font-bold pt-9 w-full  w-[800px]'>
                <p className='col-span-2'>Ism-sharifi</p>
                <p className='col-span-2'>Email</p>
                <p className='col-span-1'>Sana</p>
                <p className='col-span-1'>Qabul vaqti</p>
                <p className='col-span-1'>Shifokor</p>
                <p className='col-span-1'>Sabab</p>
            </div>
            <hr className='my-[15px]'/>
            <div>
                {patient.map((event) => {
                    return (
                        <div   className='grid grid-cols-9 gap-5  text-[14px] text-[#52575C] py-[12px] font-semibold'
                             key={event.id}>
                            <div className='col-span-2 start-0 flex items-center gap-3'>
                                <img className='w-8 h-8  object-cover rounded-full' src={event.image} alt=""/>
                                <p>{event.name}</p>
                            </div>
                            <p className='col-span-2'>{event.email}</p>
                            <p className='col-span-1'>{event.dateT}</p>
                            <p className='col-span-1'>{event.receptionTime}</p>
                            <p className='col-span-1'>{event.doctor}</p>
                            <p className='col-span-1'>{event.reason}</p>

                            <p className='col-span-1 flex items-center gap-3 ml-4'>
                                <svg  className='cursor-pointer' width="16" height="16" viewBox="0 0 16 16" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0 15.3663C0.4448 13.8399 0.888 12.3135 1.3328 10.7871C1.368 10.6655 1.4048 10.5439 1.4368 10.4223C1.488 10.2383 1.584 10.0895 1.7312 9.96631C1.8688 9.85271 1.9904 9.71671 2.1168 9.59031C4.2016 7.52471 6.2864 5.45912 8.3696 3.39192C8.4176 3.34392 8.4592 3.28952 8.4928 3.24792C8.776 3.53272 9.0416 3.79992 9.3376 4.09752C9.3056 4.11992 9.2432 4.15192 9.1952 4.19992C7.0352 6.35512 4.8768 8.51031 2.7216 10.6703C2.6448 10.7487 2.5808 10.8559 2.5504 10.9615C2.2912 11.8175 2.0448 12.6783 1.7888 13.5375C1.7568 13.6447 1.7728 13.7119 1.8544 13.7855C1.9872 13.9055 2.104 14.0431 2.2384 14.1615C2.2848 14.2015 2.3728 14.2319 2.4288 14.2175C3.2896 13.9711 4.1488 13.7199 5.0064 13.4607C5.08 13.4383 5.1488 13.3759 5.2064 13.3167C7.3968 11.1327 9.584 8.94551 11.7712 6.75991C11.8128 6.71831 11.848 6.67191 11.872 6.64471C12.1824 6.95511 12.4832 7.25591 12.8128 7.58551C12.7984 7.59511 12.7408 7.61911 12.7008 7.65911C10.544 9.79511 8.384 11.9263 6.2384 14.0735C5.9392 14.3743 5.6144 14.5599 5.2128 14.6735C3.7888 15.0767 2.3712 15.5023 0.9504 15.9199C0.856 15.9471 0.76 15.9727 0.6656 15.9999H0.5376C0.4688 15.9695 0.3984 15.9423 0.3296 15.9103C0.1376 15.8207 0.072 15.6383 0 15.4607V15.3663ZM4.3024 12.7151C4.2608 12.4495 4.216 12.2063 4.1872 11.9631C4.1728 11.8479 4.1264 11.8015 4.0144 11.7807C3.7408 11.7279 3.4704 11.6591 3.2176 11.6031C5.4864 9.32951 7.7552 7.05431 10.0096 4.79352C10.3696 5.15352 10.7456 5.52792 11.1088 5.88952C8.8624 8.14231 6.5952 10.4159 4.3024 12.7151ZM10.8368 1.02553C11.0416 0.825529 11.2464 0.61273 11.4656 0.41433C12.0944 -0.152068 12.9136 -0.139268 13.5264 0.45913C14.2032 1.11833 14.8704 1.78553 15.5296 2.46233C16.1536 3.10072 16.144 3.95512 15.5216 4.59192C15.3344 4.78392 15.1408 4.97112 14.9616 5.14712C13.592 3.77912 12.224 2.41273 10.8368 1.02553ZM9.168 2.53592C9.4784 2.24473 9.7968 1.94553 10.0992 1.66073C11.5328 3.09432 12.9584 4.52152 14.3968 5.95992C14.0976 6.23992 13.776 6.54232 13.4656 6.83351L9.168 2.53592Z"
                                        fill="#A0A4A8"/>
                                </svg>
                                <svg className='cursor-pointer' width="12" height="14" viewBox="0 0 12 14" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.00957 13.3248C2.02557 13.7024 2.33597 14 2.71357 14H9.29117C9.66877 14 9.98077 13.7024 9.99517 13.3248L10.4656 3.408H1.53917L2.00957 13.3248ZM7.48957 5.872C7.48957 5.7136 7.61757 5.5856 7.77597 5.5856H8.23357C8.39197 5.5856 8.51997 5.7152 8.51997 5.872V11.5376C8.51997 11.696 8.39037 11.824 8.23357 11.824H7.77597C7.61757 11.824 7.48957 11.696 7.48957 11.5376V5.872ZM5.48797 5.872C5.48797 5.7136 5.61597 5.5856 5.77437 5.5856H6.23197C6.39037 5.5856 6.51837 5.7152 6.51837 5.872V11.5376C6.51837 11.696 6.39037 11.824 6.23197 11.824H5.77437C5.61597 11.824 5.48797 11.696 5.48797 11.5376V5.872ZM3.48477 5.872C3.48477 5.7136 3.61277 5.5856 3.76957 5.5856H4.22717C4.38557 5.5856 4.51357 5.7152 4.51357 5.872V11.5376C4.51357 11.696 4.38397 11.824 4.22717 11.824H3.76957C3.61117 11.824 3.48477 11.696 3.48477 11.5376V5.872ZM10.7776 0.7216H7.74397V0.1472C7.74397 0.0656 7.67837 0 7.59677 0H4.40957C4.32797 0 4.26237 0.0656 4.26237 0.1472V0.7216H1.22717C0.983968 0.7216 0.785568 0.9184 0.785568 1.1632V2.552H11.2192V1.1632C11.2192 0.92 11.0224 0.7216 10.7776 0.7216Z"
                                        fill="#FF6760"/>
                                </svg>
                            </p>

                        </div>
                    )
                })}

            </div>
        </div>







    )
   }
