import React from "react";

type Props = {};

const Login = (props: Props) => {
  const CLIENT_ID = import.meta.env.VITE_KAKAO_APP_KEY;
  const REDIRECT_URI = import.meta.env.VITE_KAKAO_CALLBACK;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <div>
      <h2>Login</h2>
      <a href={KAKAO_AUTH_URL}>
        <span>카카오계정 로그인</span>
      </a>
    </div>
  );
};

export default Login;
