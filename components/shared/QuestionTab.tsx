import { getUserQuestions } from '@/lib/actions/user.action';
import { SearchParamsProps } from '@/types'
import React from 'react'
import QuestionCard from '../cards/QuestionCard';
import Pagination from './Pagination';

interface Props extends SearchParamsProps {
  userId: string;
  clerkId?: string | null;
}

const QuestionTab = async ({ userId }: userId) => {


  const answers = await getUserQuestions({userId, 1});








// const QuestionTab = async ({ searchParams, userId, clerkId }: Props) => {
//   const result = await getUserQuestions({
//     userId,
//     page: searchParams.page ? +searchParams.page : 1,
//   })

  return <div>{JSON.stringify(userId)}</div>;
};

export default QuestionTab;
