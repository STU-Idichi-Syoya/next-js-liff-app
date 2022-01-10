import Head from "next/head";
import { useQRCode } from "next-qrcode";
import { useEffect, useState } from "react";
import packageJson from "../../package.json";
import Link from 'next/link'
export default function MyID(props) {
    /** You can access to liff and liffError object through the props.
     *  const { liff, liffError } = props;
     *  console.log(liff.getVersion());
     *
     *  Learn more about LIFF API documentation (https://developers.line.biz/en/reference/liff)
     **/
    const [loading, setLoading] = useState(true, []);
    const [id, setId] = useState('null', []);
    const [err, setErr] = useState(false, []);
    // const [inputRef, setQRcode] = useState(null, []);

    useEffect(
        () => {
            console.log(props);
            if (props.liff) {
                console.group('token');
                props.liff.getProfile().then((profile) => {
                    setId(profile.userId);
                   
                }).catch(err => {console.log(err);setErr(err);}).finally(() => setLoading(false))
                console.log()
                console.groupEnd()
            } else {
                setErr(new Error('login err'))
            }

        }
        , []
    )

    const{inputRef}=useQRCode({
            text:id,
    })
        



    return (
        <>
            <Head>

                <title>HIRAKATA BOT</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.9.3/dist/css/uikit.min.css" />

                <script src="https://cdn.jsdelivr.net/npm/uikit@3.9.3/dist/js/uikit.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/uikit@3.9.3/dist/js/uikit-icons.min.js"></script>

                <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.js" integrity="sha512-is1ls2rgwpFZyixqKFEExPHVUUL+pPkBEPw47s/6NDQ4n1m6T/ySeDW3p54jp45z2EJ0RSOgilqee1WhtelXfA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
            </Head>
            <nav></nav>
            <style>

            </style>
            <nav className="uk-navbar-container" uk-navbar="true" style={{ color: '#F44336', background_color: "#F44336" }}>
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                        <li>
                            <Link href="/"><a style={{ color: "black" }} >{'<'} メニューにもどる</a></Link>
                        </li>

                    </ul>
                </div>
            </nav>



            <div className="container" >
                {
                    loading ? (
                        <div className="center">ロード中です</div>
                    ) :
                        !err ? (
                            <><div className="center">あなたの会員番号は{id}です</div>
                                <canvas ref={inputRef}/>
                            </>
                        ) : <div className="center">ログイン状態エラー</div>
                }


            </div>

        </>
    );
}
