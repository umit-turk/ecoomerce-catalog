import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { hideToastr } from '@/features/toastrSlice';
import { ToastrContainer } from './Toastr.styles';

const Toastr: FC = () => {
  const dispatch = useDispatch();
  const { message, show, type } = useSelector((state: RootState) => state.toastr);

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        dispatch(hideToastr());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, dispatch]);

  return <ToastrContainer show={show} type={type}>{message}</ToastrContainer>;
};

export default Toastr;
