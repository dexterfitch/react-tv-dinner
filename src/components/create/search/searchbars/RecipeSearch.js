import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';

export default function RecipeSearch() {
  return (
    <div className="grid grid-cols-6 gap-2">
      <div className="col-span-5">
        <input type="text" placeholder="Search Recipes" className="p-3 placeholder-indigo-500 text-indigo-800 relative bg-white rounded border border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-300 focus:outline-none w-full"/>
      </div>
      <div>
        <button className="bg-indigo-500 text-white hover:bg-indigo-600 active:bg-indigo-300 py-3 border border-indigo-600 rounded w-full">
          <ArrowRightIcon className="h-6 w-6 mx-auto" />
        </button>
      </div>
    </div>
  )
}