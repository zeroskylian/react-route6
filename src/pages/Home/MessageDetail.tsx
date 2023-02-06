import React from 'react';
import {
  useLocation,
  useParams,
  useSearchParams,
  useMatch,
  useNavigationType
} from 'react-router-dom';

type Message = { id: string; content: string };

export default function MessageDetail() {
  const params = useParams<Message>();
  const match = useMatch('/home/message/detailParams/:id/:content');
  console.log(match);
  console.log(useNavigationType())
  return (
    <div>
      <h4>params</h4>
      <ul>
        <li>{params.id}</li>
        <li>{params.content}</li>
      </ul>
    </div>
  );
}

export function MessageDetailUseSearch() {
  const [search, setSearch] = useSearchParams();
  return (
    <div>
      <h4>search</h4>
      <ul>
        <li>{search.get('id')}</li>
        <li>{search.get('content')}</li>
      </ul>
      <button
        onClick={() => {
          // 仅用于修改 search 参数, 用得少
          setSearch('id=11&content=test');
        }}>
        {' '}
        修改参数
      </button>
    </div>
  );
}

export function MessageDetailUseState() {
  const state = useLocation().state as Message;
  const { id, content } = state;
  return (
    <div>
      <h4>state</h4>
      <ul>
        <li>{id}</li>
        <li>{content}</li>
      </ul>
    </div>
  );
}
