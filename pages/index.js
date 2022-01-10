import Head from "next/head";
import packageJson from "../package.json";
import Link from 'next/link'

export default function Home(props) {
  /** You can access to liff and liffError object through the props.
   *  const { liff, liffError } = props;
   *  console.log(liff.getVersion());
   *
   *  Learn more about LIFF API documentation (https://developers.line.biz/en/reference/liff)
   **/
  return (
    <div>
      <Head>
        <title>LIFF Starter</title>
      </Head>
      <style jsx>{`
        .container{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .menu-btn{
            
            width: calc(100%/2);
            color: white;
            height: calc(100vh/2);
            line-height: calc(100vh/2);
            text-align: center;
        }
        .menu-btn>p{
            display:inline-block;
            vertical-align: middle;
            line-height: normal;

            text-align: center;
            font-size: 2em;
        }
        *{
            font-family: Helvetica Neue,Arial,Hiragino Sans,Hiragino Kaku Gothic ProN,BIZ UDPGothic,Meiryo,sans-serif;
        }
      `}
    </style>

    <div className="container" >
        <Link href='/id'><div className="menu-btn" style={{backgroundColor: "#F44336"}}><p>会員証</p></div></Link>
        <Link href='/coupon'><div className="menu-btn" style={{backgroundColor: "#FFAB00"}}><p>クーポンをみる</p></div></Link>
        <Link href='/store'><div className="menu-btn" style={{backgroundColor: "#64B5F6"}}><p>あなたが通った<br/>店</p></div></Link>
    </div>

     </div>
  );
}
