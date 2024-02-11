import {
    UilEstate,
    UilClipboardAlt,
    UilUser,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilUsdSquare
} from "@iconscout/react-unicons"
import img1 from "../imgs/img1.jpg";
import img2 from "../imgs/img2.jpg";
import img3 from "../imgs/img3.jpg";

export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard"
    },
    {
        icon: UilClipboardAlt,
        heading: "Orders"
    },
    {
        icon: UilUser,
        heading: "Customers"
    },
    {
        icon: UilPackage,
        heading: "Products"
    },
    {
        icon: UilChart,
        heading: "Analytics"
    }
]

export const CardsData = [
    {
        title: "Sales",
        color: {
            background: "linear-gradient(180deg, #bb67ff 0%, #c484fc 100%)",
            boxShadow: "8px 10px 20px 8px #e0c6f5"
        },
        barValue: 70,
        value: "25,978",
        png: UilUsdSquare,
        series: [
            {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 109, 100]
            }
        ]
    },
    {
        title: "Sales",
        color: {
            background: "linear-gradient(180deg, #bb67ff 0%, #c484fc 100%)",
            boxShadow: "8px 10px 20px 8px #e0c6f5"
        },
        barValue: 70,
        value: "25,978",
        png: UilUsdSquare,
        series: [
            {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 109, 100]
            }
        ]
    },{
        title: "Sales",
        color: {
            background: "linear-gradient(180deg, #bb67ff 0%, #c484fc 100%)",
            boxShadow: "8px 10px 20px 8px #e0c6f5"
        },
        barValue: 70,
        value: "25,978",
        png: UilUsdSquare,
        series: [
            {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 109, 100]
            }
        ]
    }
]

export const UpdateCardsData = [
    {
        img : img1,
        name : "Andrew Tate",
        noti : "Has ordered Matrix 101",
        time : "25 seconds ago"
    },
    {
        img : img2,
        name : "Justin Waller",
        noti : "Has received war room access",
        time : "2 minutes ago" 
    },
    {
        img : img3,
        name : "Tristan Tate",
        noti : "Has ordered Another Beer",
        time : "5 minutes ago"
    }
]