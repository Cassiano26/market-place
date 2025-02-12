interface SvgProps {
  color: string;
  width?: number;
  height?: number;
  
}

export default function PackageIcon({ color, width = 24, height = 24 }: SvgProps) {
  
  return (
    <svg className="group-hover:fill-[#F24D0D]" width={width} height={height} viewBox="0 0 32 32" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4 8.33341C4.55228 8.33341 5 8.78113 5 9.33341V22.8818C5 23.2313 5.20731 23.7074 6.46018 24.4592C7.6817 25.1922 9.54661 25.9826 12.1717 27.0916C13.5307 27.6656 14.3615 28.0086 15 28.1843V15.1398C15 14.5875 15.4477 14.1398 16 14.1398C16.5523 14.1398 17 14.5875 17 15.1398V28.1843C17.6385 28.0086 18.4693 27.6656 19.8283 27.0916C22.4534 25.9826 24.3183 25.1922 25.5398 24.4592C26.7927 23.7074 27 23.2313 27 22.8818V9.33341C27 8.78113 27.4477 8.33341 28 8.33341C28.5523 8.33341 29 8.78113 29 9.33341V22.8818C29 24.3757 27.9102 25.3692 26.5689 26.1741C25.2111 26.9889 23.2135 27.8327 20.6893 28.899L20.6066 28.9339C20.5392 28.9624 20.4726 28.9905 20.4069 29.0183C18.5154 29.8179 17.2959 30.3334 16 30.3334C14.7041 30.3334 13.4846 29.8179 11.5931 29.0183C11.5273 28.9905 11.4608 28.9624 11.3935 28.9339L11.3106 28.8989C8.78646 27.8327 6.78895 26.9889 5.4311 26.1741C4.08978 25.3692 3 24.3757 3 22.8818V9.33341C3 8.78113 3.44772 8.33341 4 8.33341Z" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16 3.66675C14.9899 3.66675 14.0272 4.10663 11.5368 5.31172L7.64187 7.19643C7.64187 7.19643 7.64187 7.19643 7.64187 7.19643C6.5428 7.72826 5.82138 8.08018 5.36131 8.39095C5.16345 8.52459 5.06786 8.61515 5.02362 8.66675C5.06786 8.71835 5.16345 8.80891 5.36131 8.94255C5.82138 9.25331 6.54279 9.60523 7.64187 10.1371L11.5368 12.0218C14.0272 13.2269 14.9899 13.6667 16 13.6667C17.0101 13.6667 17.9728 13.2269 20.4632 12.0218L24.3582 10.1371C25.4572 9.60523 26.1786 9.25332 26.6387 8.94255C26.8365 8.80891 26.9321 8.71835 26.9764 8.66675C26.9321 8.61514 26.8365 8.52459 26.6387 8.39095C26.1786 8.08018 25.4572 7.72827 24.3582 7.19644C24.3582 7.19643 24.3582 7.19644 24.3582 7.19644L20.4632 5.31173C17.9728 4.10662 17.0101 3.66675 16 3.66675ZM27.0114 8.71928C27.0105 8.71921 27.0073 8.71409 27.0046 8.70414C27.0109 8.71438 27.0122 8.71936 27.0114 8.71928ZM27.0046 8.62935C27.0073 8.6194 27.0105 8.61429 27.0114 8.61421C27.0122 8.61414 27.0109 8.61912 27.0046 8.62935ZM4.98865 8.61422C4.98953 8.61429 4.99269 8.61941 4.99545 8.62936C4.98914 8.61912 4.98776 8.61415 4.98865 8.61422ZM4.99545 8.70413C4.99269 8.71409 4.98953 8.7192 4.98865 8.71928C4.98776 8.71935 4.98914 8.71437 4.99545 8.70413ZM10.8867 3.40441C13.0758 2.34428 14.475 1.66675 16 1.66675C17.5251 1.66675 18.9242 2.34429 21.1134 3.40446C21.1862 3.43969 21.2598 3.47535 21.3344 3.51142C21.3344 3.51142 21.3344 3.51142 21.3344 3.51142L25.3018 5.43118C26.3087 5.91841 27.1637 6.33206 27.7582 6.7336C28.3534 7.13568 29 7.73067 29 8.66675C29 9.60283 28.3534 10.1978 27.7582 10.5999C27.1637 11.0014 26.3087 11.4151 25.3017 11.9023L21.3344 13.8221C21.3344 13.8221 21.3344 13.8221 21.3344 13.8221C21.2598 13.8581 21.1862 13.8938 21.1134 13.929C18.9242 14.9892 17.5251 15.6667 16 15.6667C14.4749 15.6667 13.0758 14.9892 10.8865 13.929C10.8138 13.8938 10.7402 13.8581 10.6657 13.8221C10.6657 13.8221 10.6657 13.8221 10.6657 13.8221L6.77072 11.9374L6.6985 11.9024C5.69139 11.4152 4.83636 11.0015 4.24184 10.5999C3.64656 10.1978 3 9.60282 3 8.66675C3 7.73068 3.64656 7.13569 4.24184 6.7336C4.83636 6.33202 5.69138 5.91834 6.6985 5.43107C6.72249 5.41947 6.74656 5.40782 6.77072 5.39613L10.6656 3.51143C10.6656 3.51143 10.6656 3.51142 10.6656 3.51143C10.7402 3.47534 10.8139 3.43966 10.8867 3.40441Z" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.10557 15.5529C7.35256 15.0589 7.95323 14.8587 8.44721 15.1057L11.1139 16.439C11.6079 16.686 11.8081 17.2867 11.5611 17.7806C11.3141 18.2746 10.7134 18.4748 10.2195 18.2278L7.55279 16.8945C7.05881 16.6475 6.85858 16.0468 7.10557 15.5529Z" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M23.5611 4.8862C23.8081 5.38018 23.6079 5.98085 23.1139 6.22784L9.78055 12.8945C9.28657 13.1415 8.68589 12.9413 8.43891 12.4473C8.19192 11.9533 8.39214 11.3526 8.88612 11.1057L22.2195 4.43899C22.7134 4.192 23.3141 4.39222 23.5611 4.8862Z" />
    </svg>
  )
}