import React from 'react'
import '../sections/FooterTwo.css';
import imageTwo from '../assets/img/logo.png';
import Modal from 'react-bootstrap/Modal';
import { Divider, Button } from '@material-ui/core';

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



export default function FooterTwo() {
    const [gizlilikModalShow, gizlilikSetModalShow] = React.useState(false);
    const [cerezModalShow, cerezSetModalShow] = React.useState(false);
    const [sozlesmeModalShow, sozlesmeSetModalShow] = React.useState(false);
    return (
        <footer class="footer-area footer--light">
            <div class="footer-big">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-12">
                            <div class="footer-widget">
                                <div class="widget-about">
                                    <img src={imageTwo} alt="" class="img-fluid" />
                                    <p>Lorem Ipsum Dolor sit amet.....</p>
                                    <ul class="contact-details">
                                        <li>
                                            <span class="icon-earphones"></span> Bize Ulaşın :
                  &nbsp;&nbsp;<a href="tel:344-755-111">(0248) 325 89 92</a>
                                        </li>
                                        <li>
                                            <span class="icon-envelope-open"></span>
                                            <a href="mailto:info@kodartyazilim.com">info@kodartyazilim.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-4">
                            <div class="footer-widget">
                                <div class="footer-menu footer-menu--1">
                                    <h4 class="footer-widget-title">İşlem Rehberi</h4>
                                    <ul>
                                        <li>
                                            <a href="#">Nasıl Ürün Alırım ?</a>
                                        </li>
                                        <br/>
                                        <li>
                                            <a href="#">Ödeme Seçenekleri</a>
                                        </li>
                                        <br/>
                                        <li>
                                            <a href="#">Alış Sonrası İşlemler</a>
                                        </li>
                                        <br/>
                                        <li>
                                            <a href="#">Nasıl Satış Yapılır ?</a>
                                        </li>
                                        <br/>
                                        <li>
                                            <a href="#">Avukat İlanı Ver</a>
                                        </li>
                                        <br/>
                                        <li>
                                            <a href="#">Avukatlık Onay Başvuruları Hakkında</a>
                                        </li>
                                        <br/>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-4">
                            <div class="footer-widget">
                                <div class="footer-menu">
                                    <h4 class="footer-widget-title">Çeşitler</h4>
                                    <ul>
                                        <li>
                                            <a href="#">Gıda</a>
                                        </li>
                                        <br/>
                                        <li>
                                            <a href="#">Elektronik</a>
                                        </li>
                                        <br/>
                                        <li>
                                            <a href="#">Kargo/Taşımacılık</a>
                                        </li>
                                        <br/>
                                        <li>
                                            <a href="#">Bilişim</a>
                                        </li>
                                        <br/>
                                        <li>
                                            <a href="#">Diğer</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-4">
                            <div class="footer-widget">
                                <div class="footer-menu no-padding">
                                    <h4 class="footer-widget-title">Freelancer</h4>
                                    <ul>
                                        <li>
                                            <a href="#">Seo</a>
                                        </li>
                                        <br/>
                                        <li>
                                            <a href="#">Grafik Tasarım</a>
                                        </li>
                                        <br/>
                                        <li>
                                            <a href="#">Mobil</a>
                                        </li>
                                        <br/>
                                        <li>
                                            <a href="#">Web Tasarım</a>
                                        </li>
                                        <br/>
                                        <li>
                                            <a href="#">Çevirmenlik</a>
                                        </li>
                                        <br/>
                                        <li>
                                            <a href="#">Sosyal Medya Yönetimi</a>
                                        </li>
                                        <br/>
                                        <li>
                                            <a href="#">UI/UX Tasarımı</a>
                                        </li>
                                        <br/>
                                        <li>
                                            <a href="#">Reklam ve Banner Tasarımı</a>
                                        </li>
                                        <br/>
                                        <li>
                                            <a href="#">Danışmanlıklar</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mini-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="copyright-text">
                                <p>&copy;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="#">Kodart Yazılım</a>&nbsp;&nbsp;Tüm Hakları Saklıdır.
              
                                </p>
                               
                                <Button onClick={() => gizlilikSetModalShow(true)} style={{ color: 'white',fontSize:12 }}>Gizlilik Politikası</Button>&nbsp;&nbsp;&nbsp;
                                <Button onClick={() => cerezSetModalShow(true)} style={{ color: 'white',fontSize:12 }}>Çerez Politikası</Button>
                                <Button onClick={() => sozlesmeSetModalShow(true)} style={{ color: 'white',fontSize:12}}>Kullanıcı Sözleşmesi</Button>
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
                    </div>
                </div>
            </div>
        </footer >
    )
}
