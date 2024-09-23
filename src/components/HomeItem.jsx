import React from 'react';
import { BsPencil } from 'react-icons/bs';
// import { BsPencilFill } from 'react-icons/bs';
import { HiOutlineTrash } from 'react-icons/hi2';
// import { HiTrash } from 'react-icons/hi2';

const HomeItem = ({ data, onDelete, onEdit }) => {
  const handleDelete = () => {
    console.log('🚀 ~ handleDelete ~ data:', data);
    const ok = window.confirm('정말 삭제하시겠습니까?');
    if (ok) onDelete(data);
    console.log('🚀 ~ handleDelete ~ ok:', ok);
    console.log('item_delete');
  };

  const handleEdit = () => {
    onEdit(data);
  };

  const handleClick = (type) => {
    type === 'edit' ? handleEdit() : handleDelete();
  };

  const iconList = [
    {
      id: 1,
      type: 'edit',
      icon: <BsPencil size={'16px'} />,
      // actionIcon: <BsPencilFill size={'16px'} />,
    },
    {
      id: 2,
      type: 'delete',
      icon: <HiOutlineTrash size={'18px'} />,
      // actionIcon: <HiTrash size={'18px'} />,
      // handleClick: handleDelete,
    },
  ];

  return (
    // {/* 중앙 post 게시글 */}
    <div className="flex flex-col ">
      <div className="p-3 flex items-start ">
        <div className="rounded-full overflow-hidden w-10">
          <img src={data.userProfileImage} alt="profile" />
        </div>
        <div className="block  pl-3">
          <div className="flex justify-between pr-2">
            <h4>{data.userName}</h4>
            <ul className="flex  justify-end">
              {iconList.map((icon, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleClick(icon.type)}
                    type="button"
                    className="pr-2"
                  >
                    {icon.icon}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-left">{data.churead}</p>
          <div className="text-left mt-3">{data.likeCount}</div>
        </div>
      </div>
      <hr className="1" />
    </div>
  );
};

export default HomeItem;
