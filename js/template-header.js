document.write(`

<section class="navbar custom-navbar navbar-fixed-top" role="navigation">
        <div class="container">

            <div class="navbar-header">
                <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                         <span class="icon icon-bar"></span>
                         <span class="icon icon-bar"></span>
                         <span class="icon icon-bar"></span>
                    </button>

                <!-- lOGO TEXT HERE -->
                <a href="https://balandcompany.com/" onclick="document.location.href = 'index.html'; return false;" class="navbar-brand">Baland Designs</a>
                
            </div>

            <!-- MENU LINKS -->
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li><a href="https://balandcompany.com/" onclick="document.location.href = 'index.html'; return false;" class="smoothScroll">Home</a></li>
                    <li><a href="https://balandcompany.com/portafolio" onclick="document.location.href = 'portafolio.html'; return false;" class="smoothScroll">Portafolio</a></li>
                    <li><a href="https://balandcompany.com/#contact" class="smoothScroll">Contact</a></li>
                    <li><a href="https://balandcompany.com/FAQ" onclick="document.location.href = 'FAQ.html'; return false;" class="smoothScroll">FAQ</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">


                    <ul class="social-icon">
                        <li>
                            <a href="https://www.instagram.com/thebalandart/" target="_blank" class="fa fa-instagram"></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/thebalandart" target="_blank" class="fa fa-facebook-square" attr="facebook icon"></a>
                        </li>
                        <li>
                            <a href="https://api.whatsapp.com/send?phone=+573506266968" target="_blank" class="fa fa-whatsapp"></a>
                        </li>
                        <li>
                            <a href="#soon" target="_blank" class="fa fa-twitter"></a>
                        </li>
                    </ul>
                </ul>
            </div>

        </div>
    </section>

`);