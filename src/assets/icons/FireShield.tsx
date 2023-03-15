import React from 'react';

interface Props {
  className?: string;
}

const FireShield = (props: Props) => {
  return (
    <svg
      height='24'
      width='24'
      fill='none'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      className={props.className}
    >
      <path
        d='M20.1368 3.45347C20.3003 3.48809 20.453 3.55486 20.5837 3.64887C20.7143 3.74302 20.8194 3.86197 20.8914 3.997C20.9635 4.13202 21.0006 4.27967 21 4.42912V11.8814C21.001 13.3156 20.6166 14.7293 19.8789 16.0047C19.1412 17.2801 18.0714 18.3803 16.7587 19.2137L12.6525 21.8146C12.462 21.9352 12.2339 22 12 22C11.7661 22 11.538 21.9352 11.3475 21.8146L7.24125 19.2137C5.92858 18.3803 4.85884 17.2801 4.12111 16.0047C3.38338 14.7293 2.99901 13.3156 3.00001 11.8814V4.42912C2.99944 4.27967 3.03653 4.13202 3.10856 3.997C3.18059 3.86197 3.28573 3.74302 3.41626 3.64887C3.54695 3.55486 3.69968 3.48809 3.86322 3.45347C4.02675 3.41885 4.19694 3.41726 4.36125 3.44881C5.56339 3.67282 6.80437 3.67568 8.00779 3.45719C9.21121 3.23871 10.3516 2.80352 11.3587 2.17841C11.5471 2.06225 11.7708 2 12 2C12.2292 2 12.4529 2.06225 12.6412 2.17841C13.6484 2.80352 14.7888 3.23871 15.9922 3.45719C17.1956 3.67568 18.4366 3.67282 19.6387 3.44881C19.8031 3.41726 19.9732 3.41885 20.1368 3.45347ZM17.8788 15.0875C18.4522 14.0957 18.7508 12.9966 18.75 11.8814V5.57948C16.3915 5.75896 14.0294 5.2724 12 4.18904C9.97054 5.2724 7.60848 5.75896 5.25 5.57948V11.8814C5.24914 12.9966 5.54781 14.0957 6.12115 15.0875C6.69448 16.0792 7.52592 16.9349 8.54625 17.5832L12 19.7739L15.4537 17.5832C16.4741 16.9349 17.3055 16.0792 17.8788 15.0875ZM12.2744 7.78564C12.2744 7.78564 11.3629 6.8044 11.0986 7.03514C10.7839 7.30973 10.8218 8.18918 10.8218 8.18918C10.8079 8.24737 10.7954 8.30039 10.7839 8.3491C10.7098 8.66402 10.6782 8.79858 10.5634 8.98092C10.4246 9.20131 10.136 9.51852 9.40217 10.079C8.32163 10.9044 7.88929 12.3286 8.0238 13.5118C8.09258 14.1167 8.31571 14.7298 8.75286 15.2053C9.20665 15.6988 9.78776 16 10.2424 16C10.697 16 10.8563 15.7533 10.8563 15.7533L11.3879 15.0404C11.3763 15.0051 11.3681 14.97 11.3629 14.9347C11.3816 14.9609 11.4002 14.9866 11.4185 15.0116C11.5741 15.2236 11.7368 15.4197 11.8839 15.5707C11.9557 15.6444 12.0382 15.7224 12.1252 15.7881C12.1681 15.8205 12.2286 15.8626 12.3024 15.9C12.3599 15.9291 12.744 16 12.9457 16C14.1851 16 15.0679 15.1193 15.5418 14.0782C16.0413 12.9809 16.2549 11.8332 15.5418 10.2757C15.5418 10.2757 14.9454 9.35305 14.5035 9.35305C14.0439 9.35305 13.6659 10.3903 13.6659 10.3903C13.529 9.50738 13.2208 8.69784 12.2744 7.78564ZM10.3786 11.2323C11.1133 10.6712 11.5695 10.2368 11.8568 9.80793C12.142 10.3361 12.1938 10.8859 12.1321 11.3253C12.0705 11.7648 12.321 11.9656 12.5363 12.0752C12.8021 12.2106 13.0959 12.3031 13.4108 12.2974C13.7245 12.2917 13.9903 12.19 14.2062 12.0473C14.2787 12.4999 14.1979 12.9641 14.0069 13.3836C13.7222 14.0089 13.2868 14.3611 12.9457 14.4769C12.9138 14.4408 12.8491 14.4075 12.7787 14.3713C12.6876 14.3245 12.5869 14.2727 12.5363 14.2037C12.4488 14.0845 12.3684 13.9883 12.2952 13.9007C12.1461 13.7225 12.0271 13.5802 11.9403 13.3529L11.3757 12.3001L10.8277 12.8368C10.8174 12.8473 10.8049 12.8597 10.7906 12.8741C10.6572 13.0073 10.3587 13.3054 10.1326 13.6918C10.0447 13.8418 9.96254 14.0138 9.90157 14.2037C9.73888 14.0125 9.61491 13.7222 9.57292 13.3529C9.48167 12.5502 9.80275 11.6722 10.3786 11.2323Z'
        fill='#333333'
        fillRule='evenodd'
      />
    </svg>
  );
};

export default FireShield;