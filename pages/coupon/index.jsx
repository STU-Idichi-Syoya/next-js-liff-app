import Head from "next/head";
import { useQRCode } from "next-qrcode";
import packageJson from "../../package.json";
import Link from 'next/link'

const ModalPortal = props => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('uk-modal', 'bg-close: false');
    modalRoot.id = 'modal-save';
  
    useEffect(() => {
      document.body.appendChild(modalRoot);
      return () => {
        document.body.removeChild(modalRoot);
      }
    });
  
    return ReactDOM.createPortal(props.children, modalRoot);
  } 
  

export default function MyID(props) {
    /** You can access to liff and liffError object through the props.
     *  const { liff, liffError } = props;
     *  console.log(liff.getVersion());
     *
     *  Learn more about LIFF API documentation (https://developers.line.biz/en/reference/liff)
     **/
    console.log(props);

    return (
        <>
            <Head>

                <title>HIRAKATA BOT</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.9.3/dist/css/uikit.min.css" />

                <script src="https://cdn.jsdelivr.net/npm/uikit@3.9.3/dist/js/uikit.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/uikit@3.9.3/dist/js/uikit-icons.min.js"></script>

            </Head>
            <nav className="uk-navbar-container" uk-navbar='true' style={{color: 'white',backgroundColor: '#64B5F6'}}>
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                        <li>
                            <a style={{color: 'white'}} href="/"> {'<'} メニューにもどる</a>
                        </li>

                    </ul>
                </div>
            </nav>
            <p className=".uk-text-lead">💡クーポンは買い物や通ったお店によって自動で追加されます</p>
            <div className="container">
                <div className="uk-card uk-card-default uk-width-1-2@m">
                    <div className="uk-card-header">
                        <div className="uk-grid-small uk-flex-middle" uk-grid='true'>
                            <div className="uk-width-auto">
                                <img className="uk-border-circle" width="40" height="40" src="images/wine.png" />
                            </div>
                            <div className="uk-width-expand">
                                <h3 className="uk-card-title uk-margin-remove-bottom">Bar Goco 枚方店</h3>


                            </div>
                        </div>
                    </div>
                    <div className="uk-card-body">
                        <p>お会計 30％OFFクーポン</p>
                    </div>
                    <div className="uk-card-footer">
                        <button className="uk-button-primary uk-button"><a href="#modal" style={{color: 'white'}} uk-toggle='true'>クーポンをつかう</a></button>

                    </div>
                </div>

                <div className="uk-card uk-card-default uk-width-1-2@m">
                    <div className="uk-card-header">
                        <div className="uk-grid-small uk-flex-middle" uk-grid='true'>
                            <div className="uk-width-auto">
                                <img className="uk-border-circle" width="40" height="40" src="images/wine.png" />
                            </div>
                            <div className="uk-width-expand">
                                <h3 className="uk-card-title uk-margin-remove-bottom">Cafe Tanaka</h3>
                                
                            </div>
                        </div>
                    </div>
                    <div className="uk-card-body">
                        <p>お会計 30％OFFクーポン</p>
                    </div>
                    <div className="uk-card-footer">
                        <button className="uk-button-primary uk-button"><a href="#modal" style={{color: 'white'}} uk-toggle='true'>クーポンをつかう</a></button>
                    </div>
                </div>

                <div id="modal" className="uk-flex-top" uk-modal='true'>
                    <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">

                        <button className="uk-modal-close-default" type="button" uk-close='true'></button>

                        <p>クーポンを使いますか？</p>
                        <button className="uk-button-default uk-button-primary">つかう</button>
                        <button className="uk-button uk-modal-close" uk-close='true'>やめる</button>

                    </div>
                </div>

            </div>
            </>
            );
}
