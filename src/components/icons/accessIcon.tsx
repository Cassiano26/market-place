interface SvgProps {
  color: string;
  width?: number;
  height?: number;
}

export default function AccessIcon({ color, width = 24, height = 24 }: SvgProps) {
  
  return (
    <svg className={`group-focus-within:fill-[#F24D0D] fill-[#${color}]`} width={width} height={height} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.33335 3.66675C6.20374 3.66675 3.66669 6.2038 3.66669 9.33341C3.66669 11.4296 4.80437 13.2613 6.50075 14.2426L7.00002 14.5314V23.7909C7.00002 24.9625 7.01772 25.2698 7.12689 25.5333C7.23605 25.7969 7.44078 26.0266 8.26922 26.8551L9.33335 27.9192L11.4372 25.8154C11.5054 25.7471 11.5435 25.7089 11.5718 25.6792C11.5959 25.6538 11.6001 25.6477 11.5983 25.65C11.6335 25.6039 11.6561 25.5495 11.6637 25.492C11.664 25.4892 11.6649 25.4785 11.6656 25.4528C11.6666 25.4118 11.6667 25.3579 11.6667 25.2613C11.6667 25.1831 11.6666 25.1397 11.6659 25.1066C11.6653 25.0779 11.6647 25.075 11.6647 25.075C11.6596 25.0278 11.6444 24.9822 11.6201 24.9413C11.6201 24.9413 11.6189 24.9387 11.6021 24.9153C11.5829 24.8884 11.5569 24.8537 11.51 24.7911L9.86669 22.6001C9.60002 22.2445 9.60002 21.7556 9.86669 21.4001L10.8 20.1556C11.3674 19.3991 11.5075 19.1927 11.5812 18.9716C11.6549 18.7505 11.6667 18.5013 11.6667 17.5556V14.5314L12.166 14.2426C13.8623 13.2613 15 11.4296 15 9.33341C15 6.2038 12.463 3.66675 9.33335 3.66675ZM1.66669 9.33341C1.66669 5.09923 5.09917 1.66675 9.33335 1.66675C13.5675 1.66675 17 5.09923 17 9.33341C17 11.9607 15.678 14.2783 13.6667 15.6587V17.5556C13.6667 17.5993 13.6667 17.6425 13.6668 17.6852C13.6673 18.4397 13.6678 19.0362 13.4785 19.604C13.2892 20.1719 12.931 20.6488 12.4778 21.2521C12.4522 21.2862 12.4262 21.3207 12.4 21.3556L11.9167 22.0001L13.11 23.5911C13.1157 23.5988 13.1216 23.6066 13.1274 23.6144C13.1988 23.7094 13.2751 23.811 13.3408 23.9219C13.5104 24.2081 13.6168 24.5274 13.6529 24.8582C13.6669 24.9863 13.6668 25.1133 13.6667 25.2322C13.6667 25.2419 13.6667 25.2516 13.6667 25.2613C13.6667 25.2733 13.6667 25.2853 13.6667 25.2974C13.6669 25.444 13.667 25.6003 13.6462 25.7563C13.5924 26.1596 13.4341 26.5418 13.1869 26.8651C13.0914 26.9901 12.9807 27.1005 12.8769 27.2041C12.8684 27.2126 12.8598 27.2211 12.8514 27.2296L10.0405 30.0405C9.64994 30.431 9.01677 30.431 8.62625 30.0405L6.85501 28.2693C6.81657 28.2308 6.77856 28.1929 6.74099 28.1554C6.08171 27.4974 5.55994 26.9766 5.27913 26.2987C4.99832 25.6207 4.99903 24.8835 4.99992 23.9521C4.99997 23.899 5.00002 23.8453 5.00002 23.7909V15.6587C2.98871 14.2783 1.66669 11.9607 1.66669 9.33341ZM26.7244 7.6898C26.3944 7.66729 25.9683 7.66675 25.3334 7.66675H20C19.4477 7.66675 19 7.21903 19 6.66675C19 6.11446 19.4477 5.66675 20 5.66675L25.367 5.66675C25.9596 5.66674 26.4544 5.66673 26.8605 5.69444C27.2833 5.72329 27.6827 5.78548 28.0699 5.94586C28.9683 6.318 29.6821 7.03181 30.0542 7.93024C30.2146 8.31743 30.2768 8.71679 30.3057 9.13959C30.3334 9.54574 30.3334 10.0405 30.3334 10.6331V10.7004C30.3334 11.293 30.3334 11.7878 30.3057 12.1939C30.2768 12.6167 30.2146 13.0161 30.0542 13.4033C29.6821 14.3017 28.9683 15.0155 28.0699 15.3876C27.6827 15.548 27.2833 15.6102 26.8605 15.6391C26.4544 15.6668 25.9596 15.6668 25.367 15.6667H20C19.4477 15.6667 19 15.219 19 14.6667C19 14.1145 19.4477 13.6667 20 13.6667H25.3334C25.9683 13.6667 26.3944 13.6662 26.7244 13.6437C27.0453 13.6218 27.2016 13.5825 27.3045 13.5399C27.7129 13.3707 28.0373 13.0463 28.2065 12.6379C28.2491 12.535 28.2884 12.3787 28.3103 12.0578C28.3328 11.7278 28.3334 11.3017 28.3334 10.6667C28.3334 10.0318 28.3328 9.60569 28.3103 9.27574C28.2884 8.95477 28.2491 8.79848 28.2065 8.69561C28.0373 8.28723 27.7129 7.96277 27.3045 7.79362C27.2016 7.75101 27.0453 7.7117 26.7244 7.6898ZM8.33335 9.33341C8.33335 8.78113 8.78107 8.33341 9.33335 8.33341H9.34533C9.89761 8.33341 10.3453 8.78113 10.3453 9.33341C10.3453 9.8857 9.89761 10.3334 9.34533 10.3334H9.33335C8.78107 10.3334 8.33335 9.8857 8.33335 9.33341ZM16.3334 18.6667C16.3334 18.1145 16.7811 17.6667 17.3334 17.6667H25.367C25.9596 17.6667 26.4544 17.6667 26.8605 17.6944C27.2833 17.7233 27.6827 17.7855 28.0699 17.9459C28.9683 18.318 29.6821 19.0318 30.0542 19.9302C30.2146 20.3174 30.2768 20.7168 30.3057 21.1396C30.3334 21.5457 30.3334 22.0405 30.3334 22.6331V22.7004C30.3334 23.293 30.3334 23.7878 30.3057 24.1939C30.2768 24.6167 30.2146 25.0161 30.0542 25.4033C29.6821 26.3017 28.9683 27.0155 28.0699 27.3876C27.6827 27.548 27.2833 27.6102 26.8605 27.6391C26.4544 27.6668 25.9596 27.6668 25.367 27.6667H17.3334C16.7811 27.6667 16.3334 27.219 16.3334 26.6667C16.3334 26.1145 16.7811 25.6667 17.3334 25.6667H25.3334C25.9683 25.6667 26.3944 25.6662 26.7244 25.6437C27.0453 25.6218 27.2016 25.5825 27.3045 25.5399C27.7129 25.3707 28.0373 25.0463 28.2065 24.6379C28.2491 24.535 28.2884 24.3787 28.3103 24.0578C28.3328 23.7278 28.3334 23.3017 28.3334 22.6667C28.3334 22.0318 28.3328 21.6057 28.3103 21.2757C28.2884 20.9548 28.2491 20.7985 28.2065 20.6956C28.0373 20.2872 27.7129 19.9628 27.3045 19.7936C27.2016 19.751 27.0453 19.7117 26.7244 19.6898C26.3944 19.6673 25.9683 19.6667 25.3334 19.6667H17.3334C16.7811 19.6667 16.3334 19.219 16.3334 18.6667Z"/>
    </svg>

  )
}