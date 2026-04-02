    :root{
      --bg:#000000;
      --card:#0f0f10;
      --soft:#171719;
      --text:#ffffff;
      --muted:#c9c9cf;
      --pink:#ff3f93;
      --pink-soft:#ff8fbe;
      --white:#ffffff;
      --border:rgba(255,255,255,.09);
      --shadow:0 18px 50px rgba(0,0,0,.35);
      --radius:20px;
      --radius-sm:14px;
      --max:1260px;
    }

    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{
      margin:0;
      font-family:Arial, Helvetica, sans-serif;
      background:
        radial-gradient(circle at 10% 10%, rgba(255,63,147,.14), transparent 18%),
        radial-gradient(circle at 90% 20%, rgba(255,63,147,.12), transparent 16%),
        radial-gradient(circle at 30% 80%, rgba(255,63,147,.08), transparent 14%),
        #000;
      color:var(--text);
    }

    a{text-decoration:none;color:inherit}
    button,input,select{font:inherit}

    .container{
      width:min(var(--max), calc(100% - 32px));
      margin:auto;
    }

    .announce-bar{
      background:#ff3f93;
      color:#fff;
      font-size:13px;
      font-weight:700;
      letter-spacing:.04em;
      position:sticky;
      top:0;
      z-index:60;
    }

    .announce-inner{
      min-height:40px;
      display:flex;
      align-items:center;
      justify-content:center;
      gap:14px;
      flex-wrap:wrap;
      text-align:center;
    }

    .announce-inner a{color:#fff}

    .gate{
      position:fixed;
      inset:0;
      background:rgba(0,0,0,.82);
      backdrop-filter:blur(8px);
      display:flex;
      align-items:center;
      justify-content:center;
      z-index:9999;
      padding:20px;
    }

    .gate-card{
      width:min(620px, 100%);
      background:linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.01));
      border:1px solid var(--border);
      box-shadow:var(--shadow);
      border-radius:28px;
      overflow:hidden;
    }

    .gate-top{
      padding:18px 20px;
      border-bottom:1px solid var(--border);
      display:flex;
      justify-content:space-between;
      align-items:center;
      background:rgba(255,255,255,.02);
    }

    .gate-body{
      padding:28px 24px 24px;
      text-align:center;
    }

    .mini-logo,
    .brand,
    .footer-brand{
      display:flex;
      align-items:center;
      gap:10px;
      font-weight:900;
      letter-spacing:.08em;
    }

    .brand .text,
    .footer-brand span,
    .poster-word{
      color:#ffffff;
      text-transform:uppercase;
    }

    .mark,
    .butterfly{
      width:34px;
      height:34px;
      flex:none;
      filter:drop-shadow(0 0 10px rgba(255,63,147,.28));
    }

    .gate h1{
      margin:14px 0 10px;
      font-size:34px;
      line-height:1.05;
    }

    .gate p{
      margin:0 auto 20px;
      color:var(--muted);
      max-width:480px;
      line-height:1.7;
      font-size:15px;
    }

    .gate-form,
    .newsletter form{
      display:flex;
      gap:10px;
      justify-content:center;
      flex-wrap:wrap;
      margin-top:10px;
    }

    .gate-form input,
    .newsletter input,
    .search-box input{
      background:#fff;
      color:#111;
      border:none;
      outline:none;
    }

    .gate-form input,
    .newsletter input{
      width:min(390px, 100%);
      border-radius:999px;
      padding:15px 18px;
    }

    .btn{
      border:none;
      outline:none;
      cursor:pointer;
      border-radius:999px;
      padding:14px 20px;
      transition:.2s ease;
    }

    .btn-primary{
      background:var(--pink);
      color:#fff;
      font-weight:700;
    }

    .btn-primary:hover{transform:translateY(-1px)}
    .btn-ghost{
      background:transparent;
      color:#fff;
      border:1px solid var(--border);
    }

    .gate-note{
      margin-top:14px;
      color:#bcbcc3;
      font-size:13px;
    }

    .float-butterfly{
      position:fixed;
      opacity:.18;
      z-index:0;
      pointer-events:none;
      filter:drop-shadow(0 0 8px rgba(255,63,147,.35));
      animation:floaty 7s ease-in-out infinite;
    }

    .fb1{top:120px;left:18px;width:44px;animation-delay:0s}
    .fb2{top:300px;right:26px;width:34px;animation-delay:1.2s}
    .fb3{bottom:180px;left:50px;width:32px;animation-delay:.6s}
    .fb4{bottom:80px;right:40px;width:46px;animation-delay:1.8s}

    @keyframes floaty{
      0%,100%{transform:translateY(0px) rotate(0deg)}
      50%{transform:translateY(-10px) rotate(4deg)}
    }

    .topbar{
      position:sticky;
      top:40px;
      z-index:50;
      background:rgba(0,0,0,.76);
      backdrop-filter:blur(10px);
      border-bottom:1px solid var(--border);
    }

    .topbar-inner{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:18px;
      min-height:78px;
    }

    .brand{
      font-size:30px;
      white-space:nowrap;
    }

    .nav{
      display:flex;
      align-items:center;
      gap:18px;
      flex-wrap:wrap;
      justify-content:center;
    }

    .nav a{
      color:#fff;
      opacity:.92;
      font-weight:700;
      font-size:14px;
    }

    .nav a:hover{color:var(--pink-soft)}

    .actions{
      display:flex;
      align-items:center;
      gap:10px;
    }

    .lang-select,
    .sort-select{
      background:#111;
      color:#fff;
      border:1px solid var(--border);
      border-radius:999px;
      padding:10px 14px;
      outline:none;
    }

    .cart-btn{
      position:relative;
      display:inline-flex;
      align-items:center;
      justify-content:center;
      gap:8px;
      background:#fff;
      color:#000;
      border-radius:999px;
      padding:12px 18px;
      font-weight:800;
      border:none;
      cursor:pointer;
      min-width:110px;
      overflow:visible;
    }

    .cart-btn #cartCount{
      position:absolute;
      top:-9px;
      inset-inline-end:-8px;
      min-width:26px;
      height:26px;
      padding:0 8px;
      border-radius:999px;
      display:inline-flex;
      align-items:center;
      justify-content:center;
      background:var(--pink);
      color:#fff;
      font-size:12px;
      font-weight:900;
      line-height:1;
      box-shadow:0 8px 18px rgba(255,63,147,.32), 0 0 0 3px #000;
    }

    .hero{
      position:relative;
      padding:50px 0 24px;
      overflow:hidden;
    }

    .hero-grid{
      display:grid;
      grid-template-columns:1.1fr .9fr;
      gap:24px;
      align-items:stretch;
    }

    .hero-copy,
    .hero-card,
    .filter-card,
    .mini-info,
    .newsletter,
    .footer-card,
    .accessory-wrap{
      border:1px solid var(--border);
      background:linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.01));
      border-radius:30px;
      box-shadow:var(--shadow);
    }

    .hero-copy{
      padding:44px 32px;
      min-height:500px;
      display:flex;
      flex-direction:column;
      justify-content:center;
      position:relative;
      overflow:hidden;
    }

    .hero-copy::after{
      content:"";
      position:absolute;
      inset:auto -100px -80px auto;
      width:300px;
      height:300px;
      background:radial-gradient(circle, rgba(255,63,147,.22), transparent 65%);
      pointer-events:none;
    }

    .eyebrow{
      color:var(--pink-soft);
      font-weight:800;
      letter-spacing:.16em;
      font-size:12px;
      text-transform:uppercase;
      margin-bottom:14px;
    }

    .hero h1{
      font-size:60px;
      line-height:.98;
      margin:0 0 14px;
      letter-spacing:-.04em;
    }

    .hero p{
      color:var(--muted);
      line-height:1.75;
      font-size:16px;
      max-width:600px;
      margin:0 0 24px;
    }

    .hero-cta,
    .quick-links,
    .trust-line,
    .feature-grid,
    .accessory-grid,
    .sizes,
    .card-actions,
    .filter-list,
    .size-list,
    .special-list,
    .active-filters{
      display:flex;
      gap:10px;
      flex-wrap:wrap;
    }

    .btn-dark{
      background:#111;
      color:#fff;
      border:1px solid var(--border);
    }

    .trust-line{
      margin-top:18px;
      color:#d8d8de;
      font-size:14px;
      font-weight:600;
    }

    .pill,
    .quick-chip,
    .active-chip,
    .size,
    .filter-btn,
    .size-chip,
    .special-chip,
    .accessory-tab{
      border:1px solid var(--border);
      border-radius:999px;
      color:#fff;
      padding:10px 14px;
      background:rgba(255,255,255,.02);
      font-size:14px;
    }

    .quick-links{margin-top:8px}

    .hero-card{
      overflow:hidden;
      min-height:500px;
      display:grid;
      grid-template-rows:1fr auto;
    }

    .hero-visual{
      position:relative;
      min-height:340px;
      background:
        linear-gradient(180deg, rgba(0,0,0,.16), rgba(0,0,0,.32)),
        url("https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80") center/cover no-repeat;
    }

    .hero-panel{
      padding:20px;
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:12px;
      background:#0b0b0d;
    }

    .stat{
      border:1px solid var(--border);
      border-radius:18px;
      padding:16px;
      background:rgba(255,255,255,.02);
    }

    .stat .label{
      color:var(--muted);
      font-size:12px;
      margin-bottom:8px;
    }

    .stat .value{
      font-weight:800;
      font-size:18px;
    }

    .feature-strip{
      padding:12px 0 2px;
    }

    .feature-grid{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:16px;
    }

    .mini-info{
      padding:18px;
      border-radius:24px;
    }

    .mini-info strong{
      display:block;
      font-size:16px;
      margin-bottom:8px;
    }

    .mini-info p{
      margin:0;
      color:var(--muted);
      line-height:1.65;
      font-size:14px;
    }

    .section{
      padding:24px 0 8px;
      position:relative;
      z-index:1;
    }

    .section-head{
      display:flex;
      justify-content:space-between;
      align-items:end;
      gap:16px;
      margin-bottom:18px;
    }

    .section h2{
      margin:0;
      font-size:32px;
      letter-spacing:-.03em;
    }

    .section .sub{
      color:var(--muted);
      line-height:1.7;
      max-width:760px;
    }

    .shop-layout{
      display:grid;
      grid-template-columns:290px 1fr;
      gap:20px;
      align-items:start;
    }

    .shop-sidebar{
      position:sticky;
      top:132px;
      display:grid;
      gap:16px;
    }

    .filter-card{
      padding:18px;
      border-radius:24px;
    }

    .filter-title{
      font-size:13px;
      font-weight:800;
      letter-spacing:.14em;
      text-transform:uppercase;
      color:var(--pink-soft);
      margin-bottom:14px;
    }

    .filter-btn,
    .size-chip,
    .special-chip,
    .accessory-tab,
    .sub-btn{
      background:#0e0e10;
      color:#ffffff;
      border:1px solid var(--border);
      border-radius:999px;
      padding:11px 15px;
      cursor:pointer;
      font-weight:700;
      transition:.2s ease;
      -webkit-tap-highlight-color:transparent;
    }

    .filter-btn.active,
    .size-chip.active,
    .special-chip.active,
    .accessory-tab.active,
    .sub-btn.active,
    .filter-btn:hover,
    .size-chip:hover,
    .special-chip:hover,
    .accessory-tab:hover,
    .sub-btn:hover{
      background:var(--pink);
      border-color:transparent;
    }

    .main-filter-list{
      margin-bottom:12px;
      display:flex;
      flex-wrap:wrap;
      gap:12px;
      align-items:flex-start;
    }

    .main-filter-list > .filter-btn{
      min-height:48px;
      padding:14px 18px;
      font-size:15px;
    }

    .sub-filter-label{
      color:var(--muted);
      font-size:13px;
      margin:4px 0 8px;
      display:none;
    }

    .sub-filter-wrap{
      display:flex;
      flex-wrap:wrap;
      gap:10px;
      align-items:center;
      flex:0 0 100%;
      width:100%;
      margin:2px 0 6px;
      padding:10px 0 2px;
    }

    .sub-filter-wrap:empty{
      display:none;
    }

    .policy-row{
      display:flex;
      flex-wrap:wrap;
      gap:10px;
      margin:0 0 18px;
    }

    .policy-pill,
    .cart-note{
      background:rgba(255,255,255,.03);
      border:1px solid var(--border);
      border-radius:16px;
      padding:12px 14px;
      color:#f2f2f6;
    }

    .policy-pill{
      font-weight:700;
    }

    .season-note{
      color:var(--muted);
      margin:12px 0 0;
      font-size:14px;
      line-height:1.7;
    }

    .shop-main{min-width:0}

    .toolbar,
    .results-bar{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:12px;
      flex-wrap:wrap;
      margin:0 0 16px;
    }

    .search-box{
      min-width:260px;
      flex:1;
      max-width:400px;
    }

    .search-box input{
      width:100%;
      border-radius:999px;
      padding:12px 16px;
      border:1px solid var(--border);
      background:#0e0e10;
      color:#fff;
    }

    .toolbar-right{display:flex;align-items:center;gap:10px;flex-wrap:wrap}

    .results-actions{
      display:flex;
      align-items:center;
      gap:10px;
      flex-wrap:wrap;
      flex:1;
      justify-content:flex-end;
    }

    .clear-filters-btn{
      display:none;
      align-items:center;
      justify-content:center;
      gap:8px;
      min-height:44px;
      padding:11px 16px;
      background:#111;
      color:#fff;
      border:1px solid var(--border);
      border-radius:999px;
      font-weight:800;
      cursor:pointer;
      transition:.2s ease;
      white-space:nowrap;
    }

    .clear-filters-btn:hover{
      border-color:rgba(255,255,255,.18);
      transform:translateY(-1px);
    }

    .clear-filters-btn .clear-icon{
      width:20px;
      height:20px;
      border-radius:999px;
      border:1px solid rgba(255,255,255,.18);
      display:inline-flex;
      align-items:center;
      justify-content:center;
      font-size:12px;
      line-height:1;
      flex:none;
    }

    .results-count{
      color:#d8d8de;
      font-weight:700;
    }

    .active-chip{
      background:#111;
      padding:8px 12px;
      font-size:13px;
    }

    .products,
    .accessory-grid{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:18px;
    }

    .card,
    .accessory-card{
      background:linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.01));
      border:1px solid var(--border);
      border-radius:24px;
      overflow:hidden;
      box-shadow:var(--shadow);
      transition:.2s ease;
    }

    .card:hover,
    .accessory-card:hover{transform:translateY(-4px)}

    .card-media,
    .accessory-media{
      aspect-ratio:3/4;
      background:#111 center/cover no-repeat;
      position:relative;
    }

    .card-media::after,
    .accessory-media::after{
      content:"";
      position:absolute;
      inset:0;
      background:linear-gradient(180deg, transparent 56%, rgba(0,0,0,.18));
      pointer-events:none;
    }

    .badge{
      position:absolute;
      top:12px;
      left:12px;
      background:#ff3f93;
      color:#fff;
      font-weight:800;
      font-size:12px;
      padding:8px 10px;
      border-radius:999px;
      z-index:1;
    }

    .new-badge{background:#ffffff;color:#000000}

    .card-body,
    .accessory-body{padding:16px}

    .category{
      color:var(--pink-soft);
      font-size:12px;
      font-weight:800;
      letter-spacing:.14em;
      text-transform:uppercase;
      margin-bottom:8px;
    }

    .card h3,
    .accessory-card h3{
      margin:0 0 8px;
      font-size:20px;
      min-height:48px;
    }

    .card p,
    .accessory-card p{
      margin:0 0 14px;
      color:var(--muted);
      line-height:1.6;
      min-height:44px;
      font-size:14px;
    }

    .price-row{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:10px;
      margin-bottom:14px;
    }

    .price{
      font-size:22px;
      font-weight:800;
    }

    .old-price{
      color:#9e9ea6;
      text-decoration:line-through;
      font-size:14px;
      margin-inline-start:6px;
    }

    .size{
      padding:6px 10px;
      font-size:12px;
      background:#0f0f12;
    }

    .card-actions .btn,
    .accessory-card .btn{
      flex:1;
      border-radius:14px;
      padding:12px 14px;
    }

    .accessory-wrap{
      margin-top:26px;
      padding:22px;
      border-radius:28px;
    }

    .accessory-head{
      display:flex;
      justify-content:space-between;
      gap:16px;
      align-items:end;
      flex-wrap:wrap;
      margin-bottom:18px;
    }

    .newsletter{
      margin:28px 0 10px;
      background:
        radial-gradient(circle at 20% 20%, rgba(255,63,147,.18), transparent 28%),
        linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.015));
      padding:32px 24px;
      text-align:center;
    }

    .newsletter h3{
      font-size:34px;
      margin:0 0 10px;
    }

    .newsletter p{
      color:var(--muted);
      max-width:640px;
      margin:0 auto 18px;
      line-height:1.8;
    }

    footer{padding:24px 0 40px}

    .footer-card{
      padding:28px 24px;
      display:grid;
      grid-template-columns:1.2fr .8fr;
      gap:18px;
    }

    .footer-brand{font-size:30px;margin-bottom:12px}

    .footer-left p{
      margin:0;
      color:var(--muted);
      line-height:1.8;
      max-width:700px;
    }

    .contact-list{display:grid;gap:10px}

    .contact-item{
      background:#0d0d0f;
      border:1px solid var(--border);
      padding:14px 16px;
      border-radius:16px;
      font-weight:700;
    }

    .contact-item a{color:#fff}

    .contact-item span{
      color:var(--pink-soft);
      display:block;
      font-size:12px;
      letter-spacing:.12em;
      text-transform:uppercase;
      margin-bottom:6px;
    }


    .deal-box{
      margin:0 0 18px;
      border:1px solid rgba(255,63,147,.24);
      background:linear-gradient(180deg, rgba(255,63,147,.10), rgba(255,255,255,.02));
      border-radius:24px;
      box-shadow:var(--shadow);
      padding:18px;
      display:grid;
      gap:14px;
    }
    .deal-box-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;flex-wrap:wrap;}
    .deal-box-copy h3{margin:0 0 6px;font-size:22px;}
    .deal-box-copy p{margin:0;color:var(--muted);line-height:1.7;}
    .deal-box-tag{display:inline-flex;align-items:center;gap:8px;border-radius:999px;border:1px solid rgba(255,63,147,.28);background:rgba(255,63,147,.12);padding:10px 14px;font-size:13px;font-weight:800;color:#ffd9e9;white-space:nowrap;}
    .deal-box-grid{display:grid;grid-template-columns:repeat(3, minmax(0,1fr));gap:12px;}
    .deal-cta{display:grid;gap:10px;padding:16px;border-radius:18px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.03);text-align:start;}
    .deal-cta strong{font-size:16px;line-height:1.4;}
    .deal-cta small{color:var(--muted);line-height:1.6;}
    .deal-cta .btn{width:100%;justify-content:center;display:inline-flex;align-items:center;}
    .deal-cta .deal-hint{font-size:12px;color:#ffd4e6;font-weight:700;}
    .deal-mini{border:1px solid var(--border);border-radius:18px;overflow:hidden;background:#0d0d10;cursor:pointer;transition:.2s ease;text-align:inherit;padding:0;color:inherit;}
    .deal-mini:hover{transform:translateY(-2px)}
    .deal-mini-media{aspect-ratio:1/1;background:#111 center/cover no-repeat;}
    .deal-mini-body{padding:12px;display:grid;gap:8px;}
    .deal-mini-body strong{font-size:14px;line-height:1.4;}
    .deal-mini-body small{color:var(--muted);line-height:1.5;}
    .deal-mini-body .mini-open{width:100%;justify-content:center;padding:10px 12px;border-radius:12px;}

    .cart-drawer{
      position:fixed;
      top:0;
      right:-980px;
      width:min(980px, 100%);
      max-width:100%;
      height:100vh;
      background:#09090b;
      border-left:1px solid var(--border);
      z-index:20001;
      box-shadow:-20px 0 60px rgba(0,0,0,.45);
      transition:right .28s ease;
      display:flex;
      flex-direction:column;
      visibility:hidden;
    }

    .cart-drawer.open{right:0;visibility:visible}

    .cart-body{
      flex:1;
      min-height:0;
      display:grid;
      grid-template-columns:minmax(0,1.2fr) 340px;
      grid-template-areas:"items summary";
      gap:0;
      overflow:hidden;
    }

    .cart-head{
      padding:18px 18px 14px;
      border-bottom:1px solid var(--border);
      display:flex;
      justify-content:space-between;
      align-items:center;
      position:sticky;
      top:0;
      background:#09090b;
      z-index:2;
    }

    .cart-head h3{margin:0;font-size:24px}

    .cart-close,
    .remove-btn{
      background:#111;
      color:#fff;
      border:1px solid var(--border);
      cursor:pointer;
    }

    .cart-close{
      border-radius:12px;
      padding:8px 10px;
    }

    .cart-items{
      grid-area:items;
      padding:18px;
      display:grid;
      align-content:start;
      gap:12px;
      overflow:auto;
      min-height:0;
      background:linear-gradient(180deg,#0e0e11 0%, #09090b 100%);
      position:relative;
    }

    .cart-stream{
      display:grid;
      gap:12px;
      align-content:start;
    }

    .cart-item{
      border:1px solid var(--border);
      border-radius:18px;
      padding:12px;
      background:linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.015));
      display:flex;
      align-items:flex-start;
      justify-content:space-between;
      gap:12px;
      box-shadow:0 10px 26px rgba(0,0,0,.22);
    }

    .cart-item strong{display:block;margin:0}
    .cart-item small{color:var(--muted)}
    .cart-item-main{display:flex;align-items:flex-start;gap:12px;min-width:0;flex:1;}
    .cart-thumb{width:86px;height:106px;border-radius:16px;background:#111 center/cover no-repeat;flex:none;border:1px solid var(--border);box-shadow:0 10px 24px rgba(0,0,0,.28);}
    .cart-copy{min-width:0;display:grid;gap:6px;text-align:start;}
    .cart-copy strong{display:block;line-height:1.35;font-size:16px;}
    .cart-copy small{display:block;line-height:1.5;font-size:13px;}
    .cart-qty-badge{display:inline-flex;align-items:center;justify-content:center;min-width:28px;height:28px;border-radius:999px;background:rgba(255,63,147,.16);border:1px solid rgba(255,63,147,.3);color:#fff;font-size:12px;font-weight:800;padding:0 8px;}

    .cart-deal-note{display:inline-flex;align-items:center;width:fit-content;max-width:100%;padding:5px 9px;border-radius:999px;background:rgba(255,63,147,.12);border:1px solid rgba(255,63,147,.24);color:#ffd4e6;font-size:12px;font-weight:700;}

    .cart-intro{
      position:sticky;
      top:0;
      display:inline-flex;
      align-items:center;
      gap:8px;
      align-self:start;
      justify-self:start;
      background:linear-gradient(180deg, #ff4fa0, #ff2f8c);
      color:#111;
      border:1px solid rgba(255,255,255,.16);
      box-shadow:0 14px 30px rgba(255,63,147,.34), 0 6px 16px rgba(0,0,0,.34);
      border-radius:999px;
      padding:8px 13px;
      font-weight:800;
      font-size:12px;
      z-index:5;
      width:auto;
      max-width:100%;
      white-space:nowrap;
      margin-bottom:2px;
    }
    .cart-intro strong{color:#111;font-size:13px;line-height:1.2;margin:0;font-weight:900;}
    .cart-intro span{min-width:20px;height:20px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;background:#111;color:#fff;padding:0 6px;font-size:11px;line-height:1;box-shadow:inset 0 0 0 1px rgba(255,255,255,.08);}

    .cart-primary{display:grid;gap:14px;}
    .cart-tools{display:grid;gap:10px;}
    .cart-toggle{display:none;}
    .cart-toggle small{display:block;color:var(--muted);font-weight:600;font-size:12px;}
    .cart-extra{display:grid;gap:12px;}
    .cart-extra.open{display:grid;}

    .cart-summary{
      display:grid;
      gap:10px;
      background:linear-gradient(180deg,#111217 0%, #0c0c10 100%);
      border:1px solid var(--border);
      border-radius:20px;
      padding:16px;
      box-shadow:0 12px 30px rgba(0,0,0,.22);
    }
    .compact-cart-summary{gap:8px;}

    .cart-note{
      font-size:14px;
      line-height:1.6;
      color:#dcdce3;
      background:#0d0d10;
      border:1px solid var(--border);
      border-radius:18px;
      padding:14px;
    }

    .payment-methods{display:grid;gap:10px;}
    .checkout-actions{display:grid;grid-template-columns:1fr;gap:10px;}
    .checkout-actions .btn,
    .checkout-actions a{width:100%;justify-content:center;text-align:center;}

    .cart-primary,
    .cart-tools,
    .cart-extra,
    .payment-methods{
      width:100%;
    }

    .remove-btn{
      border-radius:12px;
      padding:9px 12px;
      font-size:12px;
      white-space:nowrap;
      flex:none;
    }

    .cart-foot{
      grid-area:summary;
      border-inline-start:1px solid var(--border);
      padding:18px;
      display:grid;
      align-content:start;
      gap:12px;
      background:#09090b;
      overflow:auto;
      min-height:0;
    }

    .summary-line,
    .total{
      display:flex;
      justify-content:space-between;
      gap:12px;
    }

    .summary-line{
      color:#d8d8de;
      font-weight:700;
    }

    .total{
      font-size:20px;
      font-weight:800;
    }

    .empty{
      color:var(--muted);
      text-align:center;
      padding:40px 12px;
    }

    .overlay{
      position:fixed;
      inset:0;
      background:rgba(0,0,0,.55);
      z-index:20000;
      display:none;
    }

    .overlay.show{display:block}

    .pagination-wrap{
      display:flex;
      align-items:center;
      justify-content:center;
      gap:8px;
      flex-wrap:wrap;
      margin:18px 0 6px;
    }

    .page-btn{
      min-width:44px;
      min-height:44px;
      padding:10px 14px;
      border-radius:999px;
      border:1px solid var(--border);
      background:#101014;
      color:#fff;
      font-weight:800;
      cursor:pointer;
      transition:.2s ease;
    }

    .page-btn:hover,
    .page-btn.active{
      background:var(--pink);
      border-color:transparent;
    }

    .page-btn[disabled]{
      opacity:.4;
      cursor:not-allowed;
    }

    .cart-selected-strip{
      display:grid;
      gap:10px;
      margin-bottom:4px;
      padding:14px;
      border-radius:18px;
      background:linear-gradient(180deg, rgba(255,63,147,.10), rgba(255,255,255,.02));
      border:1px solid rgba(255,63,147,.18);
    }

    .cart-selected-title{
      color:var(--pink-soft);
      font-size:12px;
      font-weight:800;
      letter-spacing:.12em;
      text-transform:uppercase;
    }

    .cart-selected-list{
      display:flex;
      gap:8px;
      flex-wrap:wrap;
    }

    .cart-selected-chip{
      display:inline-flex;
      align-items:center;
      gap:8px;
      max-width:100%;
      background:rgba(255,255,255,.04);
      border:1px solid var(--border);
      border-radius:999px;
      padding:7px 12px;
      font-size:12px;
      font-weight:700;
      color:#fff;
    }

    .cart-selected-chip img{
      width:24px;
      height:24px;
      border-radius:999px;
      object-fit:cover;
      flex:none;
      border:1px solid rgba(255,255,255,.08);
    }

    @media (max-width: 860px){
      .cart-body{
        grid-template-columns:1fr;
        grid-template-areas:
          "items"
          "summary";
      }

      .cart-items{
        border-inline-start:none;
        border-bottom:1px solid var(--border);
      }

      .cart-foot{
        border-inline-start:none;
      }
    }

    .product-modal{
      position:fixed;
      inset:0;
      z-index:1200;
      display:none;
      align-items:center;
      justify-content:center;
      padding:20px;
    }

    .product-modal.open{display:flex}

    .product-modal-backdrop{
      position:absolute;
      inset:0;
      background:rgba(0,0,0,.72);
      backdrop-filter:blur(8px);
    }

    .product-modal-card{
      position:relative;
      z-index:1;
      width:min(1040px,100%);
      max-height:min(92vh,920px);
      overflow:auto;
      background:#09090b;
      border:1px solid var(--border);
      border-radius:28px;
      box-shadow:var(--shadow);
      padding:22px;
    }

    .product-modal-close{
      position:absolute;
      top:14px;
      right:14px;
      width:42px;
      height:42px;
      border-radius:999px;
      border:1px solid var(--border);
      background:#111;
      color:#fff;
      cursor:pointer;
      font-size:18px;
      z-index:2;
    }

    .product-modal-grid{
      display:grid;
      grid-template-columns:1.05fr .95fr;
      gap:20px;
      align-items:start;
    }

    .quick-gallery-main{
      aspect-ratio:4/5;
      border-radius:24px;
      background:#111 center/cover no-repeat;
      border:1px solid var(--border);
      overflow:hidden;
    }

    .quick-gallery-thumbs{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:10px;
      margin-top:12px;
    }

    .quick-thumb{
      aspect-ratio:1/1;
      border-radius:18px;
      border:1px solid var(--border);
      background:#111 center/cover no-repeat;
      cursor:pointer;
      opacity:.84;
      transition:.2s ease;
    }

    .quick-thumb.active{
      opacity:1;
      border-color:rgba(255,63,147,.7);
      box-shadow:0 0 0 1px rgba(255,63,147,.2) inset;
    }

    .quick-info{
      display:grid;
      gap:14px;
      padding-top:6px;
    }

    .quick-info h3{
      margin:0;
      font-size:34px;
      line-height:1.05;
    }

    .quick-info p{
      margin:0;
      color:var(--muted);
      line-height:1.75;
      font-size:15px;
    }

    .quick-pill-row,
    .quick-size-wrap{
      display:flex;
      flex-wrap:wrap;
      gap:10px;
    }

    .quick-hint{
      color:#d8d8de;
      font-size:13px;
      font-weight:700;
    }

    .quick-section-label{
      font-size:13px;
      letter-spacing:.12em;
      text-transform:uppercase;
      color:var(--pink-soft);
      font-weight:800;
      margin-bottom:4px;
    }

    .quick-open-btn{
      width:100%;
      min-height:46px;
    }

    .quick-stock-note{
      color:#d8d8de;
      font-size:13px;
      font-weight:700;
    }
    .quick-size-message{
      margin-top:8px;
      color:#ffb9d8;
      font-size:13px;
      font-weight:700;
    }
    .quick-size-wrap .size{cursor:pointer;transition:.2s ease;border:1px solid var(--border);}
    .quick-size-wrap .size.active{background:var(--pink);border-color:transparent;color:#fff;}
    .quick-size-wrap .size.sold{opacity:.45;text-decoration:line-through;cursor:not-allowed;}
    .quick-open-btn[disabled], .disabled-add{opacity:.55;cursor:not-allowed;}
    .deal-note{margin-top:10px;color:#ffd4e6;font-size:13px;font-weight:700;}
    .quick-color-wrap{display:flex;flex-wrap:wrap;gap:10px;}
    .color-chip{
      border:1px solid var(--border);
      background:#111;
      color:#fff;
      border-radius:999px;
      padding:10px 14px;
      cursor:pointer;
      font-weight:700;
      display:inline-flex;
      align-items:center;
      gap:10px;
      transition:.2s ease;
    }
    .color-chip.active{background:var(--pink);border-color:transparent;}
    .color-dot{
      width:12px;height:12px;border-radius:999px;display:inline-block;flex:none;
      border:1px solid rgba(255,255,255,.35);box-shadow:0 0 0 1px rgba(0,0,0,.22) inset;
    }

    .quick-actions{
      display:grid;
      grid-template-columns:1fr auto;
      gap:10px;
      align-items:center;
      margin-top:4px;
    }

    .quick-price-box{
      display:grid;
      gap:6px;
    }

    .quick-secondary{
      background:#101014;
      color:#fff;
      border:1px solid var(--border);
    }

    .quick-card-click{cursor:pointer}

    @media (max-width: 760px){
      .product-modal{padding:0}
      .product-modal-card{
        width:100%;
        max-height:100vh;
        height:100vh;
        border-radius:0;
        padding:16px;
      }
      .product-modal-grid{grid-template-columns:1fr;gap:14px}
      .product-modal-close{top:10px;right:10px}
      .quick-info h3{font-size:26px;padding-inline-end:42px}
      .quick-gallery-thumbs{grid-template-columns:repeat(3, minmax(0,1fr))}
      .quick-actions{grid-template-columns:1fr}
      .quick-open-btn{min-height:48px}
      .cart-item{align-items:flex-start;}
      .cart-thumb{width:54px;height:68px;}
    }

    .floating-wa{
      position:fixed;
      right:18px;
      bottom:18px;
      z-index:120;
      background:#ff3f93;
      color:#fff;
      padding:14px 18px;
      border-radius:999px;
      font-weight:800;
      box-shadow:0 14px 30px rgba(0,0,0,.35);
      text-decoration:none;
    }


.payment-methods{
  display:grid;
  gap:10px;
}

.pay-option{
  position:relative;
  display:grid;
  gap:4px;
  background:#0d0d10;
  border:1px solid var(--border);
  border-radius:16px;
  padding:14px 14px 14px 48px;
  cursor:pointer;
  transition:.2s ease;
  min-height:78px;
  align-content:center;
}

.pay-option::before{
  content:"";
  position:absolute;
  left:16px;
  top:50%;
  transform:translateY(-50%);
  width:18px;
  height:18px;
  border-radius:50%;
  border:2px solid rgba(255,255,255,.55);
  background:transparent;
}

.pay-option.active{
  border-color:rgba(255,63,147,.65);
  box-shadow:0 0 0 1px rgba(255,63,147,.25) inset;
  background:linear-gradient(180deg, rgba(255,63,147,.08), rgba(255,255,255,.02));
}

.pay-option.active::before{
  border-color:var(--pink);
  background:radial-gradient(circle at center, var(--pink) 0 45%, transparent 46% 100%);
}

.pay-option input{
  display:none;
}

.pay-title{
  font-weight:800;
  color:#fff;
}

.pay-option small{
  color:var(--muted);
  line-height:1.5;
}

.checkout-actions{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:10px;
}

.checkout-help{
  color:#bdbdc5;
  font-size:12px;
  line-height:1.5;
  text-align:center;
}

.compact-top{
  padding-top:18px;
}


@media (max-width: 760px){
  .cart-drawer{width:100%;right:-100%;}
  .cart-body{grid-template-columns:1fr;grid-template-areas:"items" "summary";}
  .cart-items{padding:12px;gap:10px;border-inline-start:none;border-top:1px solid var(--border);}
  .cart-item{padding:10px;gap:10px;}
  .cart-thumb{width:72px;height:88px;}
  .cart-foot{padding:12px;gap:10px;overflow:visible;}
  .cart-summary,.cart-note,.pay-option{padding:12px;}
  .cart-toggle{padding:12px 13px;}
}

@media (max-width: 760px){
  .checkout-actions{
    grid-template-columns:1fr;
  }
  .pay-option{
    padding:16px;
  }
}

    @media (max-width: 1100px){
      .hero-grid,
      .footer-card{grid-template-columns:1fr}
      .feature-grid{grid-template-columns:1fr 1fr}
      .products,
      .accessory-grid{grid-template-columns:repeat(2,1fr)}
      .hero h1{font-size:52px}
      .shop-layout{grid-template-columns:1fr}
      .shop-sidebar{position:static}
    }

    @media (max-width: 760px){
      .deal-box-grid{grid-template-columns:1fr;}
      .announce-bar{position:relative;top:auto}
      .topbar{top:0}
      .topbar-inner{
        min-height:auto;
        padding:12px 0;
        flex-wrap:wrap;
        justify-content:center;
      }
      .brand{font-size:24px}
      .nav{gap:12px}
      .hero{padding-top:28px}
      .hero-copy,
      .hero-card{min-height:auto}
      .hero-copy{padding:32px 22px}
      .hero h1{font-size:38px}
      .hero-panel,
      .feature-grid{grid-template-columns:1fr}
      .section h2{font-size:28px}
      .products,
      .accessory-grid{grid-template-columns:1fr}
      .newsletter h3{font-size:28px}
      .gate h1{font-size:28px}
      .gate-top{padding:14px 16px}
      .gate-body{padding:22px 16px 20px}
      .floating-wa{
        right:12px;
        bottom:12px;
        padding:12px 15px;
      }
      .toolbar{flex-direction:column;align-items:stretch}
      .toolbar-right{width:100%;justify-content:space-between}
      .search-box{max-width:none}
      .sort-select{width:100%}
      .main-filter-list,
      .sub-filter-wrap,
      .size-list,
      .special-list,
      .accessory-tabs{
        display:flex;
        flex-wrap:nowrap;
        overflow-x:auto;
        padding-bottom:4px;
        scrollbar-width:none;
      }
      .main-filter-list::-webkit-scrollbar,
      .sub-filter-wrap::-webkit-scrollbar,
      .size-list::-webkit-scrollbar,
      .special-list::-webkit-scrollbar,
      .accessory-tabs::-webkit-scrollbar{
        display:none;
      }
      .filter-btn,
      .sub-btn,
      .size-chip,
      .special-chip,
      .accessory-tab{
        white-space:nowrap;
        min-height:44px;
        flex:0 0 auto;
      }
      .results-bar{align-items:flex-start}
      .active-filters{overflow-x:auto;flex-wrap:nowrap;max-width:100%;padding-bottom:4px;scrollbar-width:none}
      .active-filters::-webkit-scrollbar{display:none}
      .cart-drawer{width:100%}
      .accessory-wrap{padding:18px}
    }

/* ==================== POSTER STABLE FINAL MOBILE + DESKTOP FIX ==================== */

/* Mobile: 2 cards per row + floating bottom bar */
@media (max-width: 900px) {
  .products,
  .accessory-grid {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 16px !important;
  }

  body {
    padding-bottom: 102px !important;
  }

  .actions {
    position: fixed !important;
    left: 10px !important;
    right: 10px !important;
    bottom: 10px !important;
    z-index: 999999 !important;

    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 12px !important;

    padding: 14px !important;
    border-radius: 24px !important;
    background: rgba(15,15,18,0.97) !important;
    border: 1px solid rgba(255,255,255,0.18) !important;
    box-shadow: 0 20px 60px rgba(0,0,0,0.80) !important;
    backdrop-filter: blur(20px) !important;
  }

  .actions .lang-select,
  .actions .cart-btn {
    width: 100% !important;
    min-height: 58px !important;
    border-radius: 18px !important;
    font-size: 15px !important;
    font-weight: 700 !important;
    padding: 0 16px !important;
  }

  .actions .cart-btn {
    background: linear-gradient(135deg, #ff3f93, #ff6faf) !important;
    color: #fff !important;
    box-shadow: 0 6px 18px rgba(255,63,147,0.35) !important;
  }

  .topbar-inner {
    display: grid !important;
    grid-template-columns: 1fr auto !important;
    gap: 12px !important;
    align-items: center !important;
  }

  .nav {
    grid-column: 1 / -1 !important;
    order: 3 !important;
    display: flex !important;
    flex-wrap: nowrap !important;
    overflow-x: auto !important;
    justify-content: flex-start !important;
    scrollbar-width: none !important;
  }

  .nav::-webkit-scrollbar {
    display: none !important;
  }

  .shop-layout {
    grid-template-columns: 1fr !important;
    gap: 14px !important;
  }

  .shop-sidebar {
    position: static !important;
    top: auto !important;
    max-height: none !important;
    overflow: visible !important;
  }
}

/* Small phones */
@media (max-width: 480px) {
  body {
    padding-bottom: 90px !important;
  }

  .actions {
    left: 8px !important;
    right: 8px !important;
    bottom: 8px !important;
    padding: 12px !important;
    border-radius: 20px !important;
  }

  .actions .lang-select,
  .actions .cart-btn {
    min-height: 54px !important;
    font-size: 14px !important;
  }

  .products,
  .accessory-grid {
    gap: 12px !important;
  }

  .card,
  .accessory-card {
    min-width: 0 !important;
  }

  .card h3,
  .accessory-card h3 {
    font-size: 16px !important;
    min-height: auto !important;
  }

  .card p,
  .accessory-card p {
    font-size: 12px !important;
    min-height: auto !important;
  }
}

/* Desktop: 4 cards per row + sticky filters */
@media (min-width: 901px) {
  .products,
  .accessory-grid {
    display: grid !important;
    grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
    gap: 20px !important;
  }

  .shop-layout,
  .shop-main,
  .section,
  .container {
    overflow: visible !important;
  }

  .shop-sidebar {
    position: sticky !important;
    top: 110px !important;
    align-self: start !important;
    z-index: 35 !important;
    max-height: calc(100dvh - 130px) !important;
    overflow-y: auto !important;
  }
}

/* Prevent jump when clicking filters */
.filter-btn,
.size-chip,
.special-chip,
.sub-btn,
.accessory-tab {
  scroll-margin-top: 170px !important;
}
