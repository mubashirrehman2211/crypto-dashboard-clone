import {MdDashboard} from "react-icons/md";
import {TbArrowsDoubleSwNe} from "react-icons/tb";
import {PiHandDepositDuotone} from "react-icons/pi";
import {PiHandWithdrawDuotone} from "react-icons/pi";
import {IoMdAddCircle} from "react-icons/io";
import {FaCircleMinus} from "react-icons/fa6";
import {CiDollar} from "react-icons/ci";
import {RiBtcLine} from "react-icons/ri";

export const navLinks = [
    {
        id: 1,
        text: 'Dashboard',
        link: '/',
        icon: MdDashboard,
    },
    {
        id: 2,
        text: 'Transactions',
        link: '/transaction',
        icon: TbArrowsDoubleSwNe,
    }
]

export const values = [
    {
        id: 1,
        title: 'Total Portfolio Value',
        val: '₹ 112,312.24',
    },
    {
        id: 2,
        title: 'Wallet Balances',
        val: '22.39401000 BTC',
    },
    {
        id: 3,
        title: '',
        val: '₹ 112,312.24 INR',
    }
]

export const withdraw = [
    {
        id: 1,
        text: 'Deposit',
        icon: PiHandDepositDuotone
    },
    {
        id: 2,
        text: 'Withdraw',
        icon: PiHandWithdrawDuotone
    }
]

export const sellingButton = [
    {
        id: 1,
        text: 'Sell',
        icon: FaCircleMinus
    },
    {
        id: 2,
        text: 'Buy',
        icon: IoMdAddCircle
    },
]

export const times = ['1H', '1D', '1W', '1M']

export const graphTimes = ['7:15 PM', '12:55 AM', '6:35 AM', '12:15 PM', '5:55 PM']

export const transactions = [
    {
        id: 1,
        text: 'INR Deposit',
        icon: CiDollar,
        date: '2022-06-09 7:06 PM',
        money: '+ ₹81,123.10'
    },
    {
        id: 2,
        text: 'BTC Sell',
        icon: RiBtcLine,
        date: '2022-05-27 12:36 PM',
        money: '- 12.48512291 BTC'
    },
    {
        id: 3,
        text: 'INR Deposit',
        icon: CiDollar,
        date: '2022-06-10 5:45 PM',
        money: '+ ₹81,123.10'
    },
]