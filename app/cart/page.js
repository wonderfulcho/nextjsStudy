import Link from "next/link";

export default function Cart() {
  return (
    <div>
      <h1 className="title">장바구니입니다.</h1>
      <Link href="/cart/payment">결제</Link>
    </div >
  );
}