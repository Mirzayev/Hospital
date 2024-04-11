import Admin from '../../../icons/bigAdmin.jpg'
import {useState} from "react";

export default function Topbar() {

    const [profil, setProfil] = useState(false)
    const [notifications, setNotifications] = useState(false)

    function showProfil() {
        setProfil(true)
    }

    function showNotification(){
        setNotifications(true)
    }


    return (
        <div className='relative bg-[#F6F8FB] flex justify-between px-9 py-6 '>
            <div className='flex items-center bg-white lg:w-[350px] h-10 gap-3 px-4 rounded-xl'>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11.2028 9.8518C11.1006 9.7496 11.0866 9.5732 11.165 9.4514C11.781 8.5036 12.1422 7.3752 12.1422 6.1628C12.1422 2.814 9.4178 0.0910034 6.0718 0.0910034C2.723 0.0910034 0 2.814 0 6.1628C0 9.5102 2.723 12.2332 6.0718 12.2332C7.3752 12.2332 8.582 11.8146 9.5732 11.1118C9.6894 11.0278 9.8644 11.039 9.9666 11.1398L12.1366 13.3098C12.1506 13.3238 12.166 13.3378 12.1814 13.349C12.2066 13.37 12.3116 13.468 12.4124 13.5702L12.67 13.8264C12.7722 13.9272 12.9374 13.9272 13.0382 13.8264L13.923 12.9416C14.0252 12.8394 14.0252 12.6742 13.9244 12.572L11.2028 9.8518ZM9.744 8.9908C9.5438 9.2512 9.3184 9.4892 9.0692 9.7006C8.26 10.388 7.2142 10.8052 6.0718 10.8052C3.5112 10.8052 1.428 8.722 1.428 6.1628C1.428 3.6036 3.5112 1.519 6.0718 1.519C8.631 1.519 10.7142 3.6022 10.7142 6.1628C10.7142 7.2268 10.3488 8.2068 9.744 8.9908Z"
                        fill="#CACCCF"/>
                </svg>

                <input className='w-full h-full outline-none ' type="text" placeholder='Qidiruv'/>
            </div>

            <div className='flex items-center gap-[26px]'>
                <div className='relative hover:cursor-pointer '>
                    <svg onClick={showNotification} width="30" height="30" viewBox="0 0 22 22" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19.2223 17.3815C19.1479 17.2135 19.1311 16.9687 19.1935 16.7959C19.6759 15.4279 20.1703 14.0671 20.6839 12.7087C21.2311 11.2663 21.6559 9.8143 21.4423 8.2375C21.1999 6.4471 20.4655 4.8967 19.1431 3.6727C18.4975 3.0775 17.7415 2.6095 16.9927 2.0527C17.0503 1.8943 17.1439 1.6471 17.2351 1.3999C17.3839 0.991901 17.2687 0.672701 16.9255 0.545501C16.5727 0.415901 16.2775 0.562301 16.1119 0.958301C16.0039 1.2127 15.9079 1.4695 15.8023 1.7335C14.8039 1.4887 13.8175 1.3903 12.8167 1.5343C9.83348 1.9615 7.68068 3.5263 6.51668 6.3175C5.80388 8.0335 5.21588 9.8023 4.58228 11.5495C4.50548 11.7655 4.38308 11.8927 4.17428 11.9863C3.11348 12.4615 2.05988 12.9511 0.999082 13.4335C0.715882 13.5607 0.504682 13.7407 0.511882 14.0767C0.519082 14.4247 0.763882 14.5639 1.05188 14.6671C3.03188 15.3775 5.00708 16.0951 6.99188 16.7911C7.28948 16.8967 7.39268 17.0143 7.37588 17.3431C7.27508 19.5463 9.34148 21.1879 11.4799 20.6287C12.3463 20.4031 13.0063 19.8967 13.5031 19.1431C13.6063 19.1791 13.6999 19.2127 13.7935 19.2439C15.8047 19.9639 17.8159 20.6839 19.8271 21.4087C20.1295 21.5167 20.4079 21.5623 20.6575 21.3055C20.9167 21.0367 20.8087 20.7607 20.6743 20.4775C20.1799 19.4527 19.6879 18.4231 19.2223 17.3815ZM10.1191 19.4599C9.16148 19.1839 8.52788 18.3247 8.59508 17.3455C9.84788 17.7919 11.0743 18.2311 12.3055 18.6703C11.9551 19.3423 10.9495 19.6999 10.1191 19.4599Z"
                            fill="#CACCCF"/>
                    </svg>
                    <div
                        className='absolute w-4 h-4 rounded-full bg-red-500 right-[-10px] top-[-5px] text-[10px] flex justify-center text-white items-center'>9
                    </div>
                    {/*{ notifications && <div className='absolute bg-black w-full h-screen top-0 left-0'></div>}*/}
                    {notifications && <div className='absolute z-30 top-10 right-[-40px]'>

                        <div className='w-[250px] bg-white px-3 py-3 relative'>
                            <i onClick={() => setNotifications()}
                               className="fa-solid fa-xmark absolute top-3  right-4"></i>
                            <div className=' py-[5px] mt-4'>
                                <p className='flex items-center gap-3'><i className="fa-solid fa-bell "></i> <span>Aka pulingiz tugayapti</span>
                                </p>
                            </div>
                            <div className='py-[5px]  '>
                                <p className='flex items-center gap-3'><i className="fa-solid fa-bell"></i> <span>Aka pulingiz tugayapti</span>
                                </p>
                            </div>
                            <div className=' py-[5px] '>
                                <p className='flex items-center gap-3'><i className="fa-solid fa-bell"></i> <span>Aka pulingiz tugayapti</span>
                                </p>
                            </div>
                            <div className=' py-[5px] '>
                                <p className='flex items-center gap-3'><i className="fa-solid fa-bell"></i> <span>Aka pulingiz tugayapti</span>
                                </p>
                            </div>
                            <div className=' py-[5px] '>
                                <p className='flex items-center gap-3'><i className="fa-solid fa-bell"></i> <span>Aka pulingiz tugayapti</span>
                                </p>
                            </div>
                            <div className='py-[5px]  '>
                                <p className='flex items-center gap-3'><i className="fa-solid fa-bell"></i> <span>Aka pulingiz tugayapti</span>
                                </p>
                            </div>
                            <div className='py-[5px]  '>
                                <p className='flex items-center gap-3'><i className="fa-solid fa-bell"></i> <span>Aka pulingiz tugayapti</span>
                                </p>
                            </div>
                            <div className='py-[5px]  '>
                                <p className='flex items-center gap-3'><i className="fa-solid fa-bell"></i> <span>Aka pulingiz tugayapti</span>
                                </p>
                            </div>
                            <div className='py-[5px]  '>
                                <p className='flex items-center gap-3'><i className="fa-solid fa-bell"></i> <span>Aka pulingiz tugayapti</span>
                                </p>
                            </div>


                        </div>
                    </div>}

                </div>

                <img onClick={showProfil} className='hover:cursor-pointer' src={Admin} alt=""/>
            </div>


            {profil && <div className='absolute   right-0 top-2 z-30 '>
                <div className='bg-white  py-5 px-4'>
                    <div className='flex items-center gap-[100px] '>
                        <div className='flex gap-4 items-center'><img src={Admin} alt=""/>
                            <p>Mirzayev Temurbek</p>
                        </div>
                        <i onClick={() => setProfil(false)} className="fa-solid fa-xmark cursor-pointer"></i>
                    </div>
                    <div
                        className='flex items-center gap-4 mt-5 py-3 px-3 hover:bg-slate-300 duration-300 cursor-pointer'>
                        <i className="fa-solid fa-user-nurse"></i>
                        <p>Doctor qo'shish</p>
                    </div>
                    <div className='flex items-center gap-4 py-3 px-3 hover:bg-slate-300 duration-300 cursor-pointer'>
                        <i className="fa-solid fa-bed-pulse"></i>
                        <p>Bemor qo'shish</p>
                    </div>
                    <div className='flex items-center gap-4 py-3 px-3 hover:bg-slate-300 duration-300 cursor-pointer'>
                        <i className="fa-regular fa-hospital"></i>
                        <p>Kasalxona haqida</p>
                    </div>
                    <div className='flex items-center gap-4 py-3 px-3 hover:bg-slate-300 duration-300 cursor-pointer'>
                        <i className="fa-solid fa-money-check-dollar"></i>
                        <p>Xarajatlar</p>
                    </div>
                    <div className='flex items-center gap-4 py-3 px-3 hover:bg-slate-300 duration-300 cursor-pointer'>
                        <i className="fa-solid fa-earth-americas"></i>
                        <p>Boshqa kasalxonalar</p>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

