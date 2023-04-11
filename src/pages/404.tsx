import { css } from '@emotion/react';
import { Link } from 'gatsby';

// markup
const NotFoundPage = () => {
  return (
    <div css={notFoundPageBox}>
      <div className="not-found">404</div>
      <div className="not-found-title">찾을 수 없는 페이지입니다.</div>
      <div>입력하신 주소를 다시 한 번 확인해 주시기 바랍니다.</div>
      <div className="bottom-box">
        <Link to="/">메인으로</Link>
      </div>
    </div>
  );
};

const notFoundPageBox = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: #828282;

  .not-found {
    font-size: 50px;
    color: #ddd;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .not-found-title {
    font-size: 18px;
    margin-bottom: 10px;
    color: #535353;
  }

  .bottom-box {
    margin-top: 20px;
  }
`;

export default NotFoundPage;
