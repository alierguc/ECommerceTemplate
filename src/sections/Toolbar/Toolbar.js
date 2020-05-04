import React, { Component } from 'react'
import '../Toolbar/Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton.js';
import { Typography, makeStyles, Divider, Button, Badge } from '@material-ui/core';

import '../../styles/LastTooltip.css';
import Popup from "reactjs-popup";
import GidaTopTumblr from '../TopMenuTumblr/GidaTopTumblr';


import Tooltip from '@material-ui/core/Tooltip';
import CheckIcon from '@material-ui/icons/Check';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import CodeIcon from '@material-ui/icons/Code';
import GavelIcon from '@material-ui/icons/Gavel';
import { MdLocalPizza } from "react-icons/md";
import { FaRobot } from "react-icons/fa"; /* Elektronik */
import { FaBusAlt } from "react-icons/fa"; /* Kargo/taşımacılık */
import { FaAssistiveListeningSystems } from "react-icons/fa"; /* Diğer */
import { TiChartLine } from "react-icons/ti"; /* Seo */
import { MdBrush } from "react-icons/md"; /* Grafik Tasarım */
import { GoDeviceMobile } from "react-icons/go"; /* Mobile */
import { DiWebplatform } from "react-icons/di"; /*Web */
import { FaLanguage } from "react-icons/fa"; /* Çevirmenlik */
import { FaMedapps } from "react-icons/fa"; /* Sosyal medya Yönetimi */
import { FaMagic } from "react-icons/fa"; /* UI UX Tasarımı */
import { FaBraille } from "react-icons/fa"; /* Reklam ve Banner Tasarımı */
import { TiCodeOutline } from "react-icons/ti";
import { FaUserCheck } from "react-icons/fa"; /* Danışmanlıklar */
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import { MdSearch } from "react-icons/md"; /* Avukat Ara */
import { GoSignIn } from "react-icons/go";

import Modal from 'react-bootstrap/Modal';

import { FaCoins } from "react-icons/fa";
import SignUpPage from '../Login/SignUpPage';
import LoginPage from '../Login/SignInPage';
import ResetPassword from '../Login/ResetPassword';
import { GrCluster } from "react-icons/gr";


function SignUpModal(props) {
    return (
        <Modal
            {...props}
            size="lm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Button onClick={props.onHide}>Kapat</Button>
            <SignUpPage />
        </Modal>
    );
}


const ModalA = (props, kayitSetModalShow, sifremiUnuttum, setSifremiUnuttum) => {

    return (
        <div>
            {
                sifremiUnuttum ? ModalC(props, setSifremiUnuttum) :
                    ModalB(props, kayitSetModalShow, setSifremiUnuttum)
            }
        </div>
    )
}

const ModalB = (props, kayitSetModalShow, setSifremiUnuttum, title) => {

    return (
        <div>
            <Button onClick={props.onHideSign} fullWidth>Kapat</Button>
            <LoginPage signIn={() => console.log(title)} sifremiUnuttumClick={() => setSifremiUnuttum(true)} signIn={() => kayitSetModalShow(true)} />
        </div>
    )
}

function hide(props) {
    return (
        props.onHideSign
    )
}

const ModalC = (props, setSifremiUnuttum) => {
    return (
        <div>
            <Button onClick={hide(props), () => setSifremiUnuttum(false)} fullWidth>Kapat</Button>
            <ResetPassword />
        </div>
    )
}



function SignInModal(props) {
    const [kayitModalShow, kayitSetModalShow] = React.useState(false);
    const [sifremiUnuttum, setSifremiUnuttum] = React.useState(false);
    return (
        <Modal

            {...props}
            size="lm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {
                kayitModalShow ?
                    <SignUpModal show={kayitModalShow} onHide={() => kayitSetModalShow(false)} />
                    : ModalA(props, kayitSetModalShow, sifremiUnuttum, setSifremiUnuttum)
            }
        </Modal>
    );
}


function CerezPolitikasi(props) {
    return (
        <Modal
            {...props}
            size="lm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <div>
                <h4 style={{ textAlign: 'center', marginTop: 30 }}>Çerez Politikası</h4>
                <p style={{ marginLeft: 20, marginRight: 20, marginTop: 30 }}>"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.""On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains." "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>
            </div>
            <Button onClick={props.onHide}>Tamam</Button>
        </Modal>
    );
}
function GizlilikPolitikasi(props) {
    return (
        <Modal
            {...props}
            size="lm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div>
                <h4 style={{ textAlign: 'center', marginTop: 30 }}>Gizlilik Politikası</h4>
                <p style={{ marginLeft: 20, marginRight: 20, marginTop: 30 }}>"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.""On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains." "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>
            </div>
            <Button onClick={props.onHide}>Tamam</Button>
        </Modal>
    );
}
function KullanıciSozlesmesi(props) {
    return (
        <Modal
            {...props}
            size="lm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div>
                <h4 style={{ textAlign: 'center', marginTop: 30 }}>Kullanıcı Sözleşmesi</h4>
                <p style={{ marginLeft: 20, marginRight: 20, marginTop: 30 }}>"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.""On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains." "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>
            </div>
            <Button onClick={props.onHide}>Tamam</Button>
        </Modal>
    );
}




export default function ToolbarComp(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShowTwo, setModalShowTwo] = React.useState(false);

    const [gizlilikModalShow, gizlilikSetModalShow] = React.useState(false);
    const [cerezModalShow, cerezSetModalShow] = React.useState(false);
    const [sozlesmeModalShow, sozlesmeSetModalShow] = React.useState(false);


    return (


        <header className='toolbar'>

            <nav className='toolbar__navigation'>

                <div className='toolbar__toggle-button'>
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>

                <div>
                    <Button href="#text-buttons" href="/app" style={{ color: 'white' }}>Example Commerce</Button>
                </div>
                <div className='toolbar__toggle-button'>
                    <div >
                        <Button onClick={() => setModalShow(true)} href="#text-buttons" style={{ fontSize: 12, color: 'white' }} color="primary">
                            <GoSignIn style={{ width: 30, height: 30, color: 'white' }} />&nbsp;&nbsp;Giriş Yap veya Kayıt Ol
                </Button>
                    </div>
                </div>

                <div className='spacer'></div>
                <div className='toolbar_navigation_items'>

                    <ul>
                        <div style={{ paddingRight: 20, marginTop: 5 }}>
                           
                            <Button onClick={() => cerezSetModalShow(true)} href="#text-buttons" style={{ fontSize: 12 }} color="primary">
                                Çerez Politikası
                </Button>
                          
                        </div>
                        <Button onClick={() => sozlesmeSetModalShow(true)} href="#text-buttons" style={{ fontSize: 12 }} color="primary">
                            <FaCoins style={{ height: 30, width: 30, color: '#F3D371' }} />&nbsp;&nbsp;EC Satın Al
                             </Button>
                        <Button onClick={() => setModalShow(true)} href="#text-buttons" style={{ fontSize: 12 }} color="primary">
                            <GoSignIn style={{ width: 30, height: 30 }} />&nbsp;&nbsp;Giriş Yap veya Kayıt Ol
                </Button>

                        <SignUpModal
                            show={modalShowTwo}
                            onHide={() => setModalShowTwo(false)}
                        />

                        <SignInModal
                            show={modalShow}
                            onHideSign={() => setModalShow(false)}
                        />

                        <CerezPolitikasi
                            show={cerezModalShow}
                            onHide={() => cerezSetModalShow(false)}
                        />

                        <KullanıciSozlesmesi
                            show={sozlesmeModalShow}
                            onHide={() => sozlesmeSetModalShow(false)}
                        />

                        <GizlilikPolitikasi
                            show={gizlilikModalShow}
                            onHide={() => gizlilikSetModalShow(false)}
                        />

                    </ul>
                </div>
            </nav>

            <div className='toolbar_navigation_items toolbar__navigation_menu' style={{ background: '#F4F5F7' }}>

                <div className='container d-flex justify-content-center'>

                    <ul>

                        <div className='row'>
                            <div className='col-2-lg dropdown'>
                                <li className='menu_link dropbtn'><ShoppingCartIcon /> &nbsp;&nbsp;E-Ticaret</li>
                                <div className="dropdown-content">
                                    <Popup

                                        contentStyle={{ width: 400 }}
                                        trigger={<ListItem button><Badge badgeContent={4} color="primary"><MdLocalPizza style={{ width: 30, height: 30, color: '#cb397a' }} /></Badge>&nbsp;&nbsp;&nbsp;<ListItemText primary="Gıda" /></ListItem>}
                                        position="right top"
                                        on="hover"

                                    >
                                        <h5 style={{ textAlign: 'center', marginBottom: 10, marginTop: 10 }}>Son Verilen İlan</h5>
                                        <GidaTopTumblr />

                                    </Popup>
                                    <Popup

                                        contentStyle={{ width: 400 }}
                                        trigger={<ListItem button><Badge badgeContent={4} color="primary"><FaRobot style={{ width: 30, height: 30, color: '#cb397a' }} /></Badge>&nbsp;&nbsp;&nbsp; <ListItemText primary="Elektronik" /></ListItem>}
                                        position="right top"
                                        on="hover"

                                    >
                                        <h5 style={{ textAlign: 'center', marginBottom: 10, marginTop: 10 }}>Son Verilen İlan</h5>
                                        <GidaTopTumblr />

                                    </Popup>
                                    <Popup

                                        contentStyle={{ width: 400 }}
                                        trigger={<ListItem button><Badge badgeContent={4} color="primary"> <FaBusAlt style={{ width: 30, height: 30, color: '#cb397a' }} /></Badge>&nbsp;&nbsp;&nbsp;<ListItemText primary="Kargo/Taşımacılık" /></ListItem>}
                                        position="right top"
                                        on="hover"

                                    >
                                        <h5 style={{ textAlign: 'center', marginBottom: 10, marginTop: 10 }}>Son Verilen İlan</h5>
                                        <GidaTopTumblr />

                                    </Popup>
                                    <Popup

                                        contentStyle={{ width: 400 }}
                                        trigger={<ListItem button> <Badge badgeContent={4} color="primary"><TiCodeOutline style={{ width: 30, height: 30, color: '#cb397a' }} /></Badge>&nbsp;&nbsp;&nbsp;<ListItemText primary="Bilişim" /></ListItem>}
                                        position="right top"
                                        on="hover"

                                    >
                                        <h5 style={{ textAlign: 'center', marginBottom: 10, marginTop: 10 }}>Son Verilen İlan</h5>
                                        <GidaTopTumblr />

                                    </Popup>
                                    <Popup

                                        contentStyle={{ width: 400 }}
                                        trigger={<ListItem button><Badge badgeContent={4} color="primary"><FaAssistiveListeningSystems style={{ width: 30, height: 30, color: '#cb397a' }} /></Badge> &nbsp;&nbsp;&nbsp;<ListItemText primary="Diğer" /></ListItem>}
                                        position="right top"
                                        on="hover"

                                    >
                                        <h5 style={{ textAlign: 'center', marginBottom: 10, marginTop: 10 }}>Son Verilen İlan</h5>
                                        <GidaTopTumblr />

                                    </Popup>

                                </div>
                            </div>

                            <Divider orientation="vertical" flexItem style={{ marginRight: '2rem', marginLeft: '2rem' }} />

                            <div className='col-2-lg dropdown'>
                                <li className='menu_link dropbtn'><CodeIcon /> &nbsp;&nbsp;Freelancer</li>
                                <div className="dropdown-content">
                                    <List component="nav" aria-label="main mailbox folders" style={{ overflow: 'auto' }}>

                                        <ListItem button><TiChartLine style={{ width: 30, height: 30, color: '#cb397a' }} />&nbsp;&nbsp;&nbsp;<ListItemText primary="Seo" /></ListItem>
                                        <ListItem button> <MdBrush style={{ width: 30, height: 30, color: '#cb397a' }} />&nbsp;&nbsp;&nbsp;<ListItemText primary="Grafik Tasarım" /></ListItem>
                                        <ListItem button><GoDeviceMobile style={{ width: 30, height: 30, color: '#cb397a' }} />&nbsp;&nbsp;&nbsp;<ListItemText primary="Mobil" /></ListItem>
                                        <ListItem button> <DiWebplatform style={{ width: 30, height: 30, color: '#cb397a' }} />&nbsp;&nbsp;&nbsp;<ListItemText primary="Web" /></ListItem>
                                        <ListItem button> <FaLanguage style={{ width: 30, height: 30, color: '#cb397a' }} />&nbsp;&nbsp;&nbsp;<ListItemText primary="Çevirmenlik" /></ListItem>
                                        <ListItem button><FaMedapps style={{ width: 30, height: 30, color: '#cb397a' }} />&nbsp;&nbsp;&nbsp;<ListItemText primary="Sosyal Medya Yönetimi" /></ListItem>
                                        <ListItem button><FaMagic style={{ width: 30, height: 30, color: '#cb397a' }} />&nbsp;&nbsp;&nbsp;<ListItemText primary="UI/UX Tasarımı" /></ListItem>
                                        <ListItem button><FaBraille style={{ width: 30, height: 30, color: '#cb397a' }} />&nbsp;&nbsp;&nbsp;<ListItemText primary="Reklam ve Banner Tasarımı" /></ListItem>
                                        <ListItem button> <FaUserCheck style={{ width: 30, height: 30, color: '#cb397a' }} />&nbsp;&nbsp;&nbsp;<ListItemText primary="Danışmanlıklar" /></ListItem>
                                    </List>

                                </div>
                            </div>
                            <Divider orientation="vertical" flexItem style={{ marginRight: '2rem', marginLeft: '2rem' }} />
                            <div className='col-2-lg dropdown'>
                                <li className='menu_link dropbtn'><GavelIcon />&nbsp;&nbsp;Avukatlar</li>
                                <div className="dropdown-content">
                                    <List component="nav" aria-label="main mailbox folders" style={{ overflow: 'auto' }}>

                                        <ListItem button><MdSearch style={{ width: 30, height: 30, color: '#cb397a' }} />&nbsp;&nbsp;&nbsp;<ListItemText primary="Avukat Ara" /></ListItem>
                                        <Tooltip title="Eğer Avukatsanız, avukatlık başvurusu yapabilirsiniz. Başvurunuz onaylandıktan sonra ilan verebilirsiniz." placement="right-start">
                                            <ListItem button> <GavelIcon style={{ width: 30, height: 30, color: '#cb397a' }} />&nbsp;&nbsp;&nbsp;<ListItemText primary="Avukatlık Başvurusu" /></ListItem>
                                        </Tooltip>


                                    </List>

                                </div>
                            </div>
                            <Divider orientation="vertical" flexItem style={{ marginRight: '2rem', marginLeft: '2rem' }} />
                            <div className='col-2-md'>
                                <li className='menu_link'><CheckIcon />&nbsp;&nbsp;  İlan ver</li>
                            </div>
                            <Divider orientation="vertical" flexItem style={{ marginRight: '2rem', marginLeft: '2rem' }} />

                            <div className='col-2-lg dropdown'>
                                <li className='menu_link dropbtn'><DevicesOtherIcon style={{color:'#8B95A1'}}/> &nbsp;&nbsp;Diğer</li>
                                <div className="dropdown-content">
                                    <List component="nav" aria-label="main mailbox folders" style={{ overflow: 'auto' }}>

                                        <ListItem button><TiChartLine style={{ width: 30, height: 30, color: '#cb397a' }} />&nbsp;&nbsp;&nbsp;<ListItemText primary="Tesisatçı" /></ListItem>
                                        <ListItem button> <MdBrush style={{ width: 30, height: 30, color: '#cb397a' }} />&nbsp;&nbsp;&nbsp;<ListItemText primary="Kiralık Ofis" /></ListItem>
                                        <ListItem button><GoDeviceMobile style={{ width: 30, height: 30, color: '#cb397a' }} />&nbsp;&nbsp;&nbsp;<ListItemText primary="İç Mimar" /></ListItem>
                                        <ListItem button> <DiWebplatform style={{ width: 30, height: 30, color: '#cb397a' }} />&nbsp;&nbsp;&nbsp;<ListItemText primary="Çocuk Bakıcısı" /></ListItem>

                                    </List>

                                </div>
                            </div>



                        </div>
                    </ul>
                </div>
            </div>





        </header>


    );

};
