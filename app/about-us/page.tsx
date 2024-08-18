// metadata only server component
export const metadata = {
  title: 'About',
};
export default function AboutUs() {
  return (
    <div>
      <h1>About Us!</h1>
    </div>
  );

  // 모든 컴포넌트 SSRdla
  // 하이드레이션이 일어나는 것은 "use client"파일만 일어남.
  // use client는 클라이언트 렌더링을 의미하는 것이 아님. 하이드레이션이 일어나는 것.
}
