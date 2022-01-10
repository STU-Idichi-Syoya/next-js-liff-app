import Head from "next/head";
import { useQRCode } from "next-qrcode";
import packageJson from "../../package.json";
import Link from 'next/link'
import Script from 'next/script'
export default function MyID(props) {
  /** You can access to liff and liffError object through the props.
   *  const { liff, liffError } = props;
   *  console.log(liff.getVersion());
   *
   *  Learn more about LIFF API documentation (https://developers.line.biz/en/reference/liff)
   **/

  return (
    <>
      <Head>

        <title>HIRAKATA BOT</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.9.3/dist/css/uikit.min.css" />

        <Script src="https://cdn.jsdelivr.net/npm/uikit@3.9.3/dist/js/uikit.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/uikit@3.9.3/dist/js/uikit-icons.min.js"></Script>

        <Script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.js" integrity="sha512-is1ls2rgwpFZyixqKFEExPHVUUL+pPkBEPw47s/6NDQ4n1m6T/ySeDW3p54jp45z2EJ0RSOgilqee1WhtelXfA==" crossorigin="anonymous" referrerpolicy="no-referrer"></Script>
      </Head>
      <nav className="uk-navbar-container" uk-navbar='true' style={{ color: 'white', backgroundColor: '#FFAB00' }}>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link href="/"><a style={{ color: 'white', backgroundColor: '#FFAB00' }} > {'<'} メニューにもどる</a></Link>
            </li>
            <li>
              <Link href='/'><a style={{ color: 'white', backgroundColor: '#FFAB00' }}> 通ったお店</a></Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container" >
        <div>通ったお店</div>

        <table className="uk-table uk-table-divider">
          <thead>
            <tr>
              <th>日時</th>
              <th>お店の名前</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2022/01/02 16：30</td>
              <td>〇〇酒店</td>
            </tr>
            <tr>
              <td>2022/01/04 15：30</td>
              <td>Buttons come in two basic</td>
            </tr>
            <tr>
              <td>2022/01/04 15：35</td>
              <td>家具工房 みつお</td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  );
}
