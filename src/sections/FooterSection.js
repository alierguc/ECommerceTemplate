import React, { Component } from 'react';
import '../styles/footer.css';

import Container from '@material-ui/core/Container';
import ExampleLogo from '../assets/img/logo.png';
import { Divider, Button } from '@material-ui/core';
import { FaStar } from "react-icons/fa";

import Modal from 'react-bootstrap/Modal';
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

export default function Footers(props) {


    const [gizlilikModalShow, gizlilikSetModalShow] = React.useState(false);
    const [cerezModalShow, cerezSetModalShow] = React.useState(false);
    const [sozlesmeModalShow, sozlesmeSetModalShow] = React.useState(false);
    return (

        <div class="footer-wrap">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-6">
                        <h3>E-Commerce Hakkında</h3>
                        <div class="footer-logo"><img src={ExampleLogo} style={{ width: 250, height: 100 }} alt=""></img></div>
                        <p>Integer ac lorem sit amet est rhoncus dapi bus don cad pede acus morbi elit nunc molestie at ultrices eu eleifen lorem ut dictum erat masa... <a href="about-us.html">Devamı...</a></p>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <h3>İşlem Rehberi</h3>
                        <ul class="footer-links">
                            <li><a href="#.">Nasıl Ürün Alırım ?</a></li>
                            <li><a href="#.">Ödeme Seçenekleri</a></li>
                            <li><a href="#.">Alış Sonrası İşlemler</a></li>
                            <li><a href="#.">Nasıl Satış Yapılır ?</a></li>
                            <li><a href="#.">Avukat İlanı Ver</a></li>
                            <li><a href="#.">Avukatlık Onay Başvuruları Hakkında</a></li>
                        </ul>
                    </div>
                    <div class="col-md-2 col-sm-6">
                        <h3>Çeşitler</h3>
                        <ul class="footer-category">
                            <li><a href="#.">Gıda</a></li>
                            <li><a href="#.">Elektronik</a></li>
                            <li><a href="#.">Kargo/Taşımacılık</a></li>
                            <li><a href="#.">Bilişim</a></li>
                            <li><a href="#.">Diğer</a></li>

                        </ul>
                        <div class="clearfix"></div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <h3>Freelancer</h3>
                        <ul class="footer-category">
                            <li type="square"><a href="#.">Seo</a></li>
                            <li type="a"><a href="#.">Grafik Tasarım</a></li>
                            <li><a href="#.">Mobil</a></li>
                            <li><a href="#.">Web Tasarım</a></li>
                            <li><a href="#.">Çevirmenlik</a></li>
                            <li><a href="#.">Sosyal Medya Yönetimi</a></li>
                            <li><a href="#.">UI/UX Tasarımı</a></li>
                            <li><a href="#.">Reklam ve Banner Tasarımı</a></li>
                            <li><a href="#.">Danışmanlıklar</a></li>
                        </ul>
                        <div class="clearfix"></div>
                    </div>
                </div>
                <div class="copyright" style={{color:'white',marginBottom:30}}>© 2020 Tüm Hakları Saklıdır. <Button onClick={() => gizlilikSetModalShow(true)} style={{ color: 'white',fontSize:12 }}>Gizlilik Politikası</Button>&nbsp;&nbsp;&nbsp;
                <Button onClick={() => cerezSetModalShow(true)} style={{ color: 'white',fontSize:12 }}>Çerez Politikası</Button>
                    &nbsp;&nbsp;&nbsp;<Button onClick={() => sozlesmeSetModalShow(true)} style={{ color: 'white',fontSize:12}}>Kullanıcı Sözleşmesi</Button></div>
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
            </div>
        </div>
    );

}