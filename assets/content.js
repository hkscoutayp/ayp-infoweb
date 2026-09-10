const LINKS={
  circular952026:'https://scout.org.hk/uploads/tc/circulars/25989/p095-26.pdf',
  userUnitList:'https://scout.org.hk/uploads/editor/department_page/uul_list.pdf',
  application:'https://www.scout.org.hk/uploads/tc/forms/7015/form01.pdf',
  serviceAssessment:'https://www.scout.org.hk/uploads/tc/forms/7016/form02.pdf',
  journeyAssessment:'https://www.scout.org.hk/uploads/tc/forms/7017/form03.pdf',
  skillsAssessment:'https://www.scout.org.hk/uploads/tc/forms/7018/form04.pdf',
  physicalAssessment:'https://www.scout.org.hk/uploads/tc/forms/7019/form05.pdf',
  residentialAssessment:'https://www.scout.org.hk/uploads/tc/forms/7020/form06.pdf',
  silverGoldCompletion:'https://www.scout.org.hk/uploads/tc/forms/7021/form07.pdf',
  transferUnit:'https://www.scout.org.hk/uploads/tc/forms/7022/form08.pdf',
  applicationEform:'https://docs.google.com/forms/d/e/1FAIpQLSduWqLcIRrmPahGCjh1Rj74Y_tjbNxz4Kfu2c5rPdTBZ2wSxw/viewform?usp=header',
  transferExecutive:'https://www.scout.org.hk/uploads/tc/forms/7023/form09.pdf',
  awardCompletion:'https://www.scout.org.hk/uploads/tc/forms/7026/form12.pdf',
  unitApplication:'https://www.scout.org.hk/uploads/tc/forms/7024/form10.pdf',
  uulApplication:'https://www.scout.org.hk/uploads/tc/forms/7028/form14.pdf',
  unitUulEform:'https://docs.google.com/forms/d/e/1FAIpQLSeQuyImP81kGNSGImdafaFU7eU9HDUWKAFKJHg3pxfVMkPxuA/viewform?usp=header',
  syncInterestEform:'https://docs.google.com/forms/d/e/1FAIpQLScvAVc-otJsKUv7xdMroTNaQqAWp_Igyk-3Fud45Wx2Z8xiPw/viewform?usp=sharing&ouid=107671158074138069832',
  ayp:'https://ayp.org.hk/',
  aypJoin:'https://ayp.org.hk/join/',
  journeyHandbook:'https://ayp.org.hk/wp-content/uploads/2024/05/Award-Handbook-Adventurous-Journey-Section_Chi_20240516-1.pdf',
  uulGuide:'https://ayp.org.hk/wp-content/uploads/2024/06/4.-%E6%94%AF%E9%83%A8%E7%B5%84%E9%95%B7%E5%B7%A5%E4%BD%9C%E9%A0%88%E7%9F%A5.pdf',
  scoutAyp:'https://www.scout.org.hk/hkayp'
};

const participantFaq=[
  ['13歲可以參加銅章嗎？','可以按特別安排申請。年滿13歲的童軍成員須完成參加者迎新講座，與適齡朋友一同以小組形式進行活動，並由執行處按個別情況酌情批准。'],
  ['是否一定要由銅章開始？','不是。只要符合最低年齡，可以直接參加銀章或金章。不過，直接銀章及直接金章所需的持續期和時數較長。'],
  ['我已完成銅章或銀章，可以參加漸進章級嗎？','可以。完成銅章後可參加漸進銀章；完成銀章後可參加漸進金章。登記時應向所屬執行處提供已完成章級的資料。'],
  ['是否所有童軍活動都可以計算為AYP活動？','不是。活動必須符合相關科目的宗旨、持續期、時數、個人目標、紀錄和評核要求，並在開始前取得批准。'],
  ['一般旅團集會可以計算嗎？','視乎實際內容。單純出席集會通常不足以符合要求。如參加者在集會中持續進行一項已獲批准的服務、技能或康體活動，並有清晰目標、時數、進度及評核，該部分活動才可能獲得計算。'],
  ['取得紀錄簿前完成的活動可以追認嗎？','原則上不可以。參加者須先完成迎新講座及申請，正式獲接納並取得紀錄簿後，才開始獎勵計劃活動。'],
  ['以前已經學習某項技能，可以繼續用作AYP嗎？','可以考慮，但必須訂立與現有水平相符的新目標，並在章級活動期間展示進一步提升。不能只以過往經驗或已取得的資格代替章級活動。'],
  ['同一項活動可以計入兩個科目嗎？','不可以。同一段活動及時數不可重複計入不同科目。例如，同一次獨木舟活動不可同時計入康樂體育科及野外鍛鍊科。'],
  ['同一項活動可以在不同章級繼續進行嗎？','可以，但較高章級必須展示更高水平、較深入的學習或新的個人目標。不能在不同章級重複完全相同的要求。'],
  ['完成所需時數後，是否可以立即完成該科？','不一定。參加者必須同時符合最低時數及最低持續期。例如，要求持續26星期的活動，即使提早累積足夠時數，仍須持續至所需星期數。'],
  ['活動是否必須每星期進行？','活動應保持合理而持續的參與。個別星期因假期、疾病或實際安排而未能進行，不一定令整項活動失效，但參加者須保存完整紀錄，並確保整體安排符合持續參與的原則。'],
  ['誰可以擔任導師或評核員？','導師及評核員應具備相關知識、經驗或資格，並獲所屬執行處或支部接納。參加者應在活動開始前確認人選，不應在完成活動後才邀請他人補簽。'],
  ['童軍領袖可以擔任評核員嗎？','可以，但須視乎領袖是否具備相關活動的知識或資格，以及是否獲所屬執行處或支部批准。野外鍛鍊科及金章級另有特定要求。'],
  ['我可以在進行期間更改活動嗎？','如有合理原因，可以向所屬支部提出更改申請。參加者應先取得批准，並確認已完成的活動能否計算，不應自行更改後才補辦手續。'],
  ['可以更改導師或評核員嗎？','可以，但應盡快通知所屬支部，交代更改原因和活動進度，並安排新導師或評核員接續跟進及確認紀錄。'],
  ['學校、體育會或其他機構的活動可以計算嗎？','可以考慮。活動不一定要由童軍單位主辦，但必須符合AYP要求，並在開始前獲所屬執行處或支部批准。'],
  ['一次性服務可以計入服務科嗎？','一般不足以完成服務科。服務科強調持續投入及對他人或社群帶來實際裨益。一次性服務可作為整個持續服務計劃的一部分，但不能取代所需的持續期和時數。'],
  ['參加童軍露營是否等同完成野外鍛鍊科？','不是。野外鍛鍊科包含指定訓練、旅程策劃、實習旅程及評核旅程，並須由合資格導師和評核員按規定進行。一般露營不能自動代替相關要求。'],
  ['金章團體生活科可以用一般童軍露營完成嗎？','不一定。團體生活科要求參加者離開日常生活環境，與平日不熟悉的青年人連續共同生活五日四夜，並完成一項有意義的活動。計劃必須事先獲得批准。'],
  ['活動紀錄應包括甚麼？','建議記錄活動日期、時數、內容、進度、成果、困難、個人反思及導師意見。參加者亦可保存相片、證書、活動表、作品或其他證明。'],
  ['如果活動中斷了，應怎樣處理？','應盡快通知導師及所屬支部，說明中斷原因和預計恢復日期。支部會按實際情況判斷活動能否繼續計算，以及是否需要延長持續期或重新提交計劃。'],
  ['轉校、轉旅團或搬遷後，可以繼續嗎？','一般可以，但應先聯絡原有及新的支部或執行處，安排轉移紀錄及確認後續的導師、評核員和活動安排。'],
  ['所有科目是否需要同時開始？','不需要。各科可以在不同時間開始，但每一科均須在開始前獲得批准，並符合本身的持續期和時數要求。參加者亦須確保能在25歲生日前完成所有科目。'],
  ['參加AYP是否需要收費？','由2026年4月1日起，紀錄簿申請費為港幣45元。訓練、旅程、營舍、交通或個別活動亦可能涉及其他費用，請向所屬支部或童軍執行處查詢。'],
  ['完成全部活動後是否自動取得獎章？','不是。參加者須完成紀錄、取得導師及評核員簽署，並把紀錄簿及所需文件交予所屬支部或執行處審核。完成所有審核程序後，才會獲確認完成章級。'],
  ['如果仍然不確定活動是否符合要求，應怎樣做？','請在開始活動前向所屬旅團、支部或童軍執行處查詢，並提供活動內容、個人目標、預計時數、持續期及導師資料。預先確認可避免活動完成後不獲接納。']
];

const syncFaq=[
  ['哪些成員最適合參加同步完成方案試行？','試行主要為由新《童軍訓練綱要》的童軍探索獎章開始進行進度性訓練的成員而設。最理想是由探索獎章開始同步規劃。較高年資成員如已完成標準獎章、高級獎章或部分相關項目，一般可繼續按原有安排完成童軍及AYP進度。個別情況可向青少年活動署查詢。'],
  ['領袖是否需要為AYP另外設計一套訓練、考驗或紀錄？','一般毋須。領袖可繼續按照《童軍訓練綱要》進行團集會、訓練、活動及獎章考驗，只需確認成員已完成AYP登記、活動符合指定對接項目，以及所需時數、持續期和紀錄均已完成。'],
  ['童軍獎章主考已確認項目完成，是否需要另行安排AYP評核？','一般毋須為同一內容安排另一次評核。只要項目按《童軍訓練綱要》完成並符合對接要求，原有考驗及確認可沿用。野外鍛鍊科涉及指定旅程及人員安排，須按專項指引預先籌備。'],
  ['童軍考驗已完成，但AYP持續期尚未完成，應怎樣處理？','不影響已完成的童軍獎章進度。成員只需繼續參與相關活動，直至同時達到AYP所需時數及持續期。'],
  ['同一個童軍活動包含不同內容，可以分別計入不同AYP科目嗎？','可以，但不同活動部分的內容及時間必須清楚區分。同一段活動時間不可重複計入兩個科目。'],
  ['技能科項目是否必須全部在團集會內完成？','不需要。團集會、專題訓練、個人練習、作品製作、工程準備及正式考驗均可組成持續的技能學習歷程。'],
  ['學校或體育會的康樂體育活動可否用作同步完成？','可以。學校、校隊、體育會或其他合適環境中的持續運動，只要符合活動性質、時數和持續期，並有足夠紀錄，均可納入。'],
  ['一般童軍遠足或露營可以直接用作AYP野外鍛鍊科嗎？','不能自動計算。旅程須配合指定訓練、實習及評核旅程、旅程目的、小隊策劃、活動時間、人員安排及紀錄。'],
  ['完成童軍高級獎章後，部分AYP要求尚未完成，會否影響童軍獎章？','不會。童軍進度性獎章與AYP是兩套獨立制度。成員可在取得童軍獎章後繼續完成AYP尚欠的持續期、紀錄或其他要求。'],
  ['旅團推行同步完成方案最需要留意甚麼？','三個重點是：盡早完成AYP登記；照常按童軍訓練及考驗程序進行；及早籌劃涉及指定人員和旅程安排的野外鍛鍊科。']
];

const forms=[
  {code:'AYP/01',category:'參加及轉換',title:'香港青年獎勵計劃參加申請表格',purpose:'完成迎新講座後，申請參加AYP及紀錄簿。',url:LINKS.application,direct:true},
  {code:'AYP/02',category:'訓練及評核',title:'訓練及評核申請表（服務科）',purpose:'按相關章級及安排申請服務科訓練或評核。',url:LINKS.serviceAssessment,direct:true},
  {code:'AYP/03',category:'訓練及評核',title:'訓練及評核申請表（野外鍛鍊科）',purpose:'按相關章級及安排申請野外鍛鍊科訓練或評核。',url:LINKS.journeyAssessment,direct:true},
  {code:'AYP/04',category:'訓練及評核',title:'訓練及評核申請表（技能科）',purpose:'按相關章級及安排申請技能科訓練或評核。',url:LINKS.skillsAssessment,direct:true},
  {code:'AYP/05',category:'訓練及評核',title:'訓練及評核申請表（康樂體育科）',purpose:'按相關章級及安排申請康樂體育科訓練或評核。',url:LINKS.physicalAssessment,direct:true},
  {code:'AYP/06',category:'訓練及評核',title:'訓練及評核申請表（團體生活科）',purpose:'供金章級參加者按相關安排申請。',url:LINKS.residentialAssessment,direct:true},
  {code:'AYP/07',category:'章級完成',title:'銀章／金章完成通知書',purpose:'按現行安排辦理銀章或金章完成確認。',url:LINKS.silverGoldCompletion,direct:true},
  {code:'AYP/08',category:'參加及轉換',title:'轉換執行處支部申請表',purpose:'在香港童軍總會執行處內轉換所屬執行處支部。',url:LINKS.transferUnit,direct:true},
  {code:'AYP/09',category:'參加及轉換',title:'轉換執行處申請表',purpose:'由其他AYP執行處轉往香港童軍總會執行處。',url:LINKS.transferExecutive,direct:true},
  {code:'AYP/10',category:'支部及行政',title:'成立執行處支部申請表',purpose:'童軍旅、童軍區、地域或其他合資格單位申請成立支部。',url:LINKS.unitApplication,direct:true},
  {code:'AYP/12',category:'章級完成',title:'獎章完成通知書',purpose:'按適用程序辦理獎章完成確認。',url:LINKS.awardCompletion,direct:true},
  {code:'AYP/14',category:'支部及行政',title:'執行處支部組長註冊或更改申請表',purpose:'首次註冊、新增或更改執行處支部組長。',url:LINKS.uulApplication,direct:true}
];

const awardPaths={
  bronze:{title:'銅章',body:'從服務科、技能科及康樂體育科中選擇一科為主項。',items:['主項：最少26小時，持續不少於26星期','兩個副項：每科最少13小時，持續不少於13星期']},
  directSilver:{title:'直接銀章',body:'未完成銅章而直接參加銀章；三科中選擇一科為主項。',items:['主項：最少52小時，持續不少於52星期','兩個副項：每科最少26小時，持續不少於26星期']},
  progressiveSilver:{title:'漸進銀章',body:'完成銅章後參加銀章；三科不分主項和副項。',items:['服務、技能及康樂體育科：每科最少26小時','每科持續不少於26星期']},
  directGold:{title:'直接金章',body:'未完成銀章而直接參加金章；三科中選擇一科為主項。',items:['主項：最少78小時，持續不少於78星期','兩個副項：每科最少52小時，持續不少於52星期']},
  progressiveGold:{title:'漸進金章',body:'完成銀章後參加金章；三科不分主項和副項。',items:['服務、技能及康樂體育科：每科最少52小時','每科持續不少於52星期']}
};

function pageIntro(kicker,title,description){
  return `<header class="page-intro"><p class="eyebrow">${kicker}</p><h1>${title}</h1><p>${description}</p></header>`;
}
function faqMarkup(items){
  return `<div class="faq-list">${items.map(([q,a],i)=>`<details><summary>${i+1}. ${q}</summary><p>${a}</p></details>`).join('')}</div>`;
}
function sourceNote(){
  return `<p class="source-note">本網站提供一般資料及工作指引；所有安排均以香港青年獎勵計劃、香港童軍總會及童軍執行處最新公布的通告、表格及正式指引為準。</p>`;
}

const pages={
  home:()=>`
    <section class="hero"><p class="eyebrow">香港青年獎勵計劃</p><h1>由童軍活動出發，開展你的獎勵計劃旅程</h1><p>查閱參加方法、章級要求、童軍同步完成安排，以及領袖所需的工作指引與表格。</p><div class="hero-actions"><a class="button primary" href="#join">參加AYP</a><a class="button secondary" href="#scout-path">了解童軍同步完成</a></div></section>
    <section class="quick-links"><div class="section-heading"><p class="eyebrow">快速開始</p><h2>你想完成甚麼？</h2></div><div class="card-grid">
      <a class="action-card" href="#join"><span class="action-icon" aria-hidden="true">🧭</span><strong>我是參加者</strong><span>查看資格、章級及申請流程</span></a>
      <a class="action-card" href="#leaders"><span class="action-icon" aria-hidden="true">🏕️</span><strong>我是領袖或UUL</strong><span>處理登記、紀錄、評核及完成申請</span></a>
      <a class="action-card" href="#scout-path"><span class="action-icon" aria-hidden="true">🔗</span><strong>我要同步完成</strong><span>查找童軍獎章與AYP的對接要求</span></a>
      <a class="action-card" href="#support"><span class="action-icon" aria-hidden="true">📋</span><strong>我要找表格</strong><span>按用途或表格編號迅速搜尋</span></a>
    </div></section>
    <section class="page-shell"><div class="notice"><p><strong>2026年更新安排：</strong>除另有註明外，新安排由2026年8月15日起生效。「童軍高級獎章 → AYP銅章」及「總領袖獎章 → AYP漸進銀章」同步完成方案亦由同日起試行。</p></div>
      <section class="content-section"><div class="section-heading"><p class="eyebrow">計劃概覽</p><h2>自發參與、持續挑戰、發展潛能</h2></div><p>香港青年獎勵計劃（AYP）是一項讓青年人自發參與、自我挑戰和發展潛能的國際性青年發展計劃。參加者可按自己的興趣、能力和目標，選擇合適的服務、技能、康樂體育及野外鍛鍊活動；金章級另須完成團體生活科。</p>
        <div class="three-col"><article class="info-card"><span class="label">共同理念</span><h3>從實踐中成長</h3><p>童軍活動與AYP同樣重視體驗學習、循序漸進及個人挑戰，透過服務、技能、體能和戶外歷程，培養責任感、自立、合作與領導能力。</p></article><article class="info-card"><span class="label">互相補足</span><h3>讓學習更有方向</h3><p>童軍訓練提供真實而多元的學習場景；AYP則鼓勵成員按個人起點訂立目標、持續參與、記錄進度和反思成果，令成長歷程更清晰。</p></article><article class="info-card"><span class="label">同步完成</span><h3>一段歷程，兩項肯定</h3><p>在分別符合童軍獎章及AYP要求的前提下，同一段有意義的活動歷程可獲兩套計劃肯定，減少不必要的重複，並鼓勵成員持續接受更高層次挑戰。</p></article></div>
      </section>
    </section>`,

  news:()=>`<div class="page-shell">${pageIntro('最新資料','最新消息','查閱童軍執行處的重要安排及更新。')}
    <div class="news-list">
      <article class="news-item"><time datetime="2026-09-01">2026年9月1日</time><div><span class="chip">第95/2026號通告</span><h2>香港青年獎勵計劃更新安排</h2><p>整合參加資格、13歲銅章特別安排、迎新講座、紀錄簿費用、支部及組長註冊、行政電子化與同步完成方案。除另有註明外，由2026年8月15日起生效。</p><a href="${LINKS.circular952026}" target="_blank" rel="noopener">開啟第95/2026號通告 PDF</a></div></article>
      <article class="news-item"><time datetime="2026-08-15">2026年8月15日</time><div><span class="chip">試行安排</span><h2>童軍進度性獎章與AYP同步完成方案</h2><p>「童軍高級獎章」可按指定安排同步完成AYP銅章；已完成AYP銅章的成員可透過「總領袖獎章」同步完成AYP漸進銀章。</p><a href="#scout-path">查看同步完成安排</a></div></article>
      <article class="news-item"><time>分階段推行</time><div><span class="chip">行政電子化</span><h2>網上與紙本申請設一年過渡期</h2><p>參加者申請、成立支部及支部組長註冊／更改將分階段電子化；自網上系統正式啟用起一年內，可選用網上或紙本方式提交。</p><a href="#support">前往表格與支援</a></div></article>
    </div>${sourceNote()}</div>`,

  join:()=>`<div class="page-shell">${pageIntro('參加者指南','參加AYP','先完成迎新講座及申請，正式獲接納並取得紀錄簿後，才開始進行AYP活動。')}
    <div class="summary-strip"><div><strong>14至24歲</strong><span>一般參加年齡；銅章設13歲特別安排</span></div><div><strong>23歲生日當天</strong><span>提交參加申請的最後限期</span></div><div><strong>25歲生日前</strong><span>原則上完成所有AYP活動</span></div></div>
    <section class="content-section"><h2>童軍成員參加資格</h2><p>已宣誓的童軍、深資童軍及樂行童軍成員，可按年齡與所屬單位安排參加。活動可結合日常童軍服務、技能、體適能及戶外訓練，但必須符合AYP的目標、時數、持續期、紀錄及評核要求。</p>
      <div class="three-col"><article class="info-card award-card"><img class="award-logo" src="assets/ayp-bronze.png" alt="AYP銅章標誌"><span class="label">通常年滿14歲</span><h3>銅章</h3><p>不少於13歲者可按個別情況申請特別安排，並須與適齡朋友以小組形式參加。</p></article><article class="info-card award-card"><img class="award-logo" src="assets/ayp-silver.png" alt="AYP銀章標誌"><span class="label">年滿15歲</span><h3>銀章</h3><p>可直接參加，或完成銅章後循漸進路徑參加。</p></article><article class="info-card award-card"><img class="award-logo" src="assets/ayp-gold.png" alt="AYP金章標誌"><span class="label">年滿16歲</span><h3>金章</h3><p>可直接參加，或完成銀章後循漸進路徑參加。</p></article></div>
      <div class="notice info"><p><strong>13歲銅章特別安排：</strong>年滿13歲的童軍成員可完成迎新講座及申請紀錄簿，由執行處按個別情況酌情批准；獲批後須與適齡朋友一同以小組形式進行活動。</p></div>
      <div class="notice"><p>參加者在正式獲接納前進行的活動，原則上不得用作完成AYP。如因疾病、意外或其他不能避免的原因未能在25歲前完成，須按規定提交個案考慮。</p></div>
    </section>
    <section class="content-section"><h2>誰可經童軍執行處參加</h2><div class="two-col"><article class="info-card"><h3>青少年成員</h3><p>已宣誓的童軍、深資童軍及樂行童軍成員，可按年齡及所屬單位安排參加。原則上須隸屬已獲批准的執行處支部；旅團未設支部時，可經已設支部的直屬童軍區或地域參加。</p></article><article class="info-card"><h3>青年領袖</h3><p>年滿18歲而未滿23歲，並持有效領袖委任書或教練員委任證者，可參加金章級訓練及考驗，並直接經青少年活動署辦理。</p></article></div></section>
    <section class="content-section"><span class="label">執行處支部資料</span><h2>查閱執行處支部名單</h2><p>童軍成員可查閱最新的香港童軍總會香港青年獎勵計劃執行處支部名單，確認所屬童軍旅、童軍區或地域是否已成立執行處支部。如所屬旅團未在名單內，可向直屬童軍區、地域或地域辦事處查詢參加安排。</p><div class="link-row"><a class="button dark" href="${LINKS.userUnitList}" target="_blank" rel="noopener">開啟執行處支部名單 PDF</a></div></section>
    <section class="content-section"><h2>參加者迎新講座</h2><p>所有參加者均須先完成迎新講座，了解計劃目的、章級與科目、個人目標、導師和評核員、活動紀錄及參加者責任，方可辦理參加申請及紀錄簿手續。</p><div class="two-col"><article class="info-card"><h3>網上形式</h3><p><strong>迎新講座影片即將推出。</strong>推出日期及完成方式將於網站公布。</p></article><article class="info-card"><h3>實體形式</h3><p>實體迎新講座會繼續舉行，參加者可按需要參加。</p></article></div></section>
    <section class="content-section"><h2>一般參加流程</h2><div class="step-list">
      <article class="step"><h3>了解AYP</h3><p>了解三個章級、五個科目、活動要求及評核方式。</p></article>
      <article class="step"><h3>完成迎新講座</h3><p>完成實體迎新講座後才辦理申請；網上迎新講座影片即將推出。</p></article>
      <article class="step"><h3>選擇章級及聯絡所屬支部</h3><p>按年齡及已完成章級選擇路徑；青少年成員由所屬支部組長確認，青年領袖則直接聯絡青少年活動署。</p></article>
      <article class="step"><h3>提交AYP/01及費用</h3><p>提交申請表、所需文件及紀錄簿申請費；由2026年4月1日起費用為港幣45元。</p></article>
      <article class="step"><h3>獲接納並取得紀錄簿</h3><p>按規定記錄各科活動，並由合適的導師或評核員確認。</p></article>
      <article class="step"><h3>選擇各科活動</h3><p>選擇符合科目宗旨、可以持續進行並有合適導師及評核員的活動。</p></article>
      <article class="step"><h3>訂立個人目標</h3><p>目標應按個人起步水平訂立，並且具體、可行及可以檢視。</p></article>
      <article class="step"><h3>安排導師及評核員</h3><p>人選應具備相關知識、經驗或資格，並獲所屬執行處或支部接納。</p></article>
      <article class="step"><h3>提交計劃並取得批准</h3><p>說明活動、目標、開始日期、持續期、時數、進度及紀錄方法。</p></article>
      <article class="step"><h3>持續進行並保存紀錄</h3><p>記錄日期、時數、內容、成果、困難、反思及導師意見。</p></article>
      <article class="step"><h3>定期檢討進度</h3><p>如需更改活動、目標、導師或評核員，應先聯絡支部。</p></article>
      <article class="step"><h3>完成評核</h3><p>整理紀錄及證明，交由導師及評核員審閱和簽署。</p></article>
      <article class="step"><h3>申請完成章級</h3><p>完成所有科目後，把紀錄簿及相關文件交予支部或執行處審核。</p></article>
    </div></section>
    <section class="content-section"><h2>直接及漸進路徑</h2><div class="two-col"><article class="info-card"><h3>直接路徑</h3><p>未完成上一個章級而直接參加較高章級。直接參加者須投入較長時間建立所需經驗和能力。</p></article><article class="info-card"><h3>漸進路徑</h3><p>完成上一個章級後參加較高章級。部分活動要求較直接參加者為少。</p></article></div><div class="link-row"><a class="button outline" href="#awards">查看各路徑的時數及旅程要求</a><a class="button dark" href="${LINKS.applicationEform}" target="_blank" rel="noopener">填寫AYP/01電子表格</a><a class="button outline" href="${LINKS.application}" target="_blank" rel="noopener">下載AYP/01紙本表格</a></div></section>
    <section class="content-section" id="participant-faq"><h2>參加者常見問題</h2>${faqMarkup(participantFaq)}</section>${sourceNote()}</div>`,

  awards:()=>`<div class="page-shell">${pageIntro('童軍成員要求一覽','章級與科目','了解如何把合適的童軍服務、技能、康體及戶外歷程，按AYP要求完成銅章、銀章或金章。')}
    <section class="content-section"><h2>三個章級</h2><div class="three-col"><article class="info-card award-card"><img class="award-logo" src="assets/ayp-bronze.png" alt="AYP銅章標誌"><span class="label">銅</span><h3>銅章</h3><p>建立恆常參與、自我管理及保存活動紀錄的習慣。</p></article><article class="info-card award-card"><img class="award-logo" src="assets/ayp-silver.png" alt="AYP銀章標誌"><span class="label">銀</span><h3>銀章</h3><p>要求較長和更深入的持續參與。</p></article><article class="info-card award-card"><img class="award-logo" src="assets/ayp-gold.png" alt="AYP金章標誌"><span class="label">金</span><h3>金章</h3><p>展現主動策劃、服務精神、自我管理及團隊協作。</p></article></div></section>
    <section class="content-section"><h2>服務、技能及康樂體育科要求</h2><p>銅章、直接銀章及直接金章須從三科中選擇一科為主項。野外鍛鍊科及團體生活科不會被選作主項。</p>
      <div class="filter-bar"><label>選擇章級及路徑<select id="award-path"><option value="bronze">銅章</option><option value="directSilver">直接銀章</option><option value="progressiveSilver">漸進銀章</option><option value="directGold">直接金章</option><option value="progressiveGold">漸進金章</option></select></label></div>
      <div id="award-path-result" class="info-card" aria-live="polite"></div>
    </section>
    <section class="content-section"><h2>五個科目</h2><div class="three-col">
      <article class="info-card"><h3>🤝 服務科</h3><p>🤝 透過不受薪而對他人或社群有實際裨益的服務，培養關懷、責任感和公民意識。</p></article>
      <article class="info-card"><h3>🛠️ 技能科</h3><p>🛠️ 按個人興趣學習一項非純體能活動，以可觀察的成果或水平提升為目標。</p></article>
      <article class="info-card"><h3>🏃 康樂體育科</h3><p>🏃 恆常練習一項具體康體活動，以改善體適能、技術水平及健康習慣。</p></article>
      <article class="info-card"><h3>🧭 野外鍛鍊科</h3><p>🧭 由隊員共同策劃及完成具明確目的的旅程，並完成指定訓練、實習及評核。</p></article>
      <article class="info-card"><h3>🏕️ 團體生活科</h3><p>🏕️ 只適用於金章。參加者須離開日常生活環境，與平日不熟悉的青年人連續外宿五日四夜，共同參與一項有意義的活動，並按規定提交計劃、紀錄及評核。</p></article>
    </div><div class="notice"><p>一般旅團集會、職務、露營或獎章訓練不一定符合AYP要求。同一活動亦不可重複計入多個科目。</p></div></section>
    <section class="content-section"><h2>活動例子及規劃提示</h2><p>參加者不一定要另行參加一套全新的活動。童軍訓練、學校課外活動、興趣班、體育訓練及社區服務，只要符合相關科目的宗旨、個人目標、最低時數、持續期、紀錄及評核要求，均可考慮用作完成AYP。請在活動開始前與所屬執行處支部組長確認安排。</p>
      <details class="fold-section"><summary>🤝 服務科活動例子</summary><div class="fold-body"><p>服務科著重持續服務他人或社群，培養責任感、關懷和投入精神。</p><ul class="checklist"><li>持續協助幼童軍、小童軍或其他較年幼成員進行活動</li><li>擔任小隊職務，協助策劃及帶領活動</li><li>為學弟妹提供功課輔導或朋輩支援</li><li>參與長者服務、社區探訪或傷健共融活動</li><li>持續參與環境保護、回收、海岸清潔或社區種植計劃</li><li>協助慈善機構、圖書館、醫院或動物福利機構</li><li>參與急救服務、活動支援或社區安全推廣</li><li>運用設計、翻譯、攝影或資訊科技技能支援非牟利機構</li></ul><p>應記錄服務對象、個人職責、每次服務內容與時數、遇到的困難及服務帶來的影響。單純出席或一次性服務通常不足以完成本科。</p></div></details>
      <details class="fold-section"><summary>🛠️ 技能科活動例子</summary><div class="fold-body"><p>技能科著重持續學習或提升一項非體育類技能，並按個人起步水平展示進步。</p><ul class="checklist"><li>繩結、編結及先鋒工程</li><li>地圖閱讀、指南針運用及導航知識</li><li>戶外煮食、膳食設計及爐具安全</li><li>急救、無線電通訊或訊號傳遞</li><li>攝影、錄像、影片剪輯或平面設計</li><li>自然觀察、氣象、天文或環境研究</li><li>木工、模型製作、手工藝、烹飪、烘焙、縫紉或園藝</li><li>編程、機械人、網頁設計或數碼創作</li><li>樂器、歌唱、戲劇、繪畫、書法或寫作</li><li>外語、手語、演說、辯論、棋藝、活動策劃或司儀技巧</li><li>符合技能科要求的專科徽章訓練</li></ul><p>一般課堂、日常功課或只為應付考試的溫習未必適合直接計算；課堂以外的持續學習須有個人目標、練習紀錄及合適評核。</p></div></details>
      <details class="fold-section"><summary>🏃 康樂體育科活動例子</summary><div class="fold-body"><p>康樂體育科著重持續參與及個人進步，不一定以比賽名次為目標。</p><ul class="checklist"><li>跑步、游泳、遠足體能或定向訓練</li><li>足球、籃球、排球、羽毛球、乒乓球或網球</li><li>田徑、單車、體操、健體或瑜伽</li><li>武術、跆拳道、柔道或劍擊</li><li>獨木舟、划艇、帆船或滑浪風帆</li><li>攀石或以體能和動作技巧為主的舞蹈訓練</li><li>學校運動隊、體育學會或旅團安排的定期訓練</li><li>符合要求的體適能專科徽章或個人體能改善計劃</li></ul><p>一般體育課、旅行、偶爾參與的比賽或單次體驗通常不足以完成本科；須持續記錄訓練內容、時間、表現及進步。</p></div></details>
      <details class="fold-section"><summary>🧭 野外鍛鍊科活動例子</summary><div class="fold-body"><p>野外鍛鍊科並非一般遠足或露營。參加者須以小組形式策劃具明確目的的旅程，完成所需訓練、實習旅程及評核旅程。</p><ul class="checklist"><li>地圖閱讀、指南針運用、導航及路線設計</li><li>旅程時間表、小組分工、食物及食水管理</li><li>戶外煮食、帳幕搭建、裝備選擇及保養</li><li>急救、天氣判斷、風險評估及緊急應變</li><li>環境保護及無痕山林原則</li><li>以環境、生態、歷史、文化或社區觀察為目的的旅程</li><li>童軍進度性獎章內符合指定對接要求的訓練及旅程</li></ul><p>學校遠足、宿營、交流團或戶外教育活動，只有在旅程目的、小組策劃、活動時間、住宿、訓練及評核均符合要求時才可考慮，並須事前確認。</p></div></details>
      <details class="fold-section"><summary>🏕️ 金章團體生活科活動例子</summary><div class="fold-body"><p>金章參加者須離開日常生活環境，與平日不熟悉的青年人共同生活，並在指定期間內完成有意義的共同活動。</p><ul class="checklist"><li>跨地區或跨機構的青年訓練營</li><li>社區服務營或環境保育計劃</li><li>青年領袖訓練或文化交流計劃</li><li>住宿式義工、技能學習或專題研習計劃</li><li>與不熟悉的參加者共同進行的戶外或社區項目</li></ul><p>一般旅團露營、學校宿營、家庭旅行，或主要與熟悉同學及隊員參加的活動，未必符合要求；活動須在開始前提交計劃並取得批准。</p></div></details>
      <div class="notice"><p><strong>重要提醒：</strong>活動不會因由童軍、學校或認可機構舉辦而自動符合AYP要求；同一段活動及時數不可重複計入兩個科目。已有經驗可作為起點，但仍須訂立新目標並展示進步。</p></div>
    </section>
    <section class="content-section"><h2>開始活動前的審批安排</h2><p>所有參加者均應先擬定活動計劃，並在活動開始前完成適用的商討、同意及申請程序；未經確認便開始的活動，可能不獲接納為AYP活動。</p><div class="two-col">
      <article class="info-card"><span class="label">銅章及銀章</span><h3>先取得支部組長同意</h3><p>參加者須在活動開始前，與所屬執行處支部組長商討活動計劃，包括活動內容、個人目標、時數、持續期、導師、評核員及紀錄方式。取得支部組長同意後，方可開始活動。</p></article>
      <article class="info-card"><span class="label">金章</span><h3>最少提前兩個月提交</h3><p>參加者與所屬執行處支部組長商討後，須按擬進行的科目填妥相應的「訓練及評核申請表」（AYP/02–AYP/06），並按照表格附頁要求擬備一份活動計劃。表格及活動計劃須由支部組長簽署確認，並於活動開始最少兩個月前交予所屬地域辦事處，以轉交總會青少年活動署確認及安排約見。</p></article>
    </div><div class="notice info"><p><strong>金章參加者請預留時間：</strong>兩個月是遞交文件的最少提前期，應把支部討論、修訂計劃及取得簽署所需時間一併計算。</p></div><div class="link-row"><a class="button outline" href="${LINKS.serviceAssessment}" target="_blank" rel="noopener">AYP/02 服務科</a><a class="button outline" href="${LINKS.journeyAssessment}" target="_blank" rel="noopener">AYP/03 野外鍛鍊科</a><a class="button outline" href="${LINKS.skillsAssessment}" target="_blank" rel="noopener">AYP/04 技能科</a><a class="button outline" href="${LINKS.physicalAssessment}" target="_blank" rel="noopener">AYP/05 康樂體育科</a><a class="button outline" href="${LINKS.residentialAssessment}" target="_blank" rel="noopener">AYP/06 團體生活科</a></div></section>
    <section class="content-section"><h2>🧭 野外鍛鍊科的一般旅程要求</h2><div class="table-wrap"><table><thead><tr><th>路徑</th><th>訓練</th><th>實習旅程</th><th>評核旅程</th></tr></thead><tbody>
      <tr><td>銅章</td><td>一日基本訓練</td><td>一日</td><td>兩日一夜；不少於12小時計劃活動</td></tr>
      <tr><td>直接銀章</td><td>一日基本訓練</td><td>兩次兩日一夜</td><td>三日兩夜；不少於21小時計劃活動</td></tr>
      <tr><td>漸進銀章</td><td>一日進階訓練</td><td>一次兩日一夜</td><td>三日兩夜；不少於21小時計劃活動</td></tr>
      <tr><td>直接金章</td><td>一日基本訓練</td><td>兩次兩日一夜及一次三日兩夜</td><td>四日三夜；不少於32小時計劃活動</td></tr>
      <tr><td>漸進金章</td><td>兩日進階訓練</td><td>一次兩日一夜</td><td>四日三夜；不少於32小時計劃活動</td></tr>
    </tbody></table></div></section>
    <section class="content-section"><h2>把童軍活動規劃成AYP活動</h2><div class="step-list"><article class="step"><h3>選定一個科目</h3><p>避免把同一活動重複計算。</p></article><article class="step"><h3>訂立個人目標</h3><p>目標須配合參加者的起步水平。</p></article><article class="step"><h3>開始前先確認</h3><p>確認活動、導師、評核員、進度及紀錄方法。</p></article><article class="step"><h3>持續記錄及檢討</h3><p>保存日期、時數、內容、成果及反思。</p></article></div><div class="link-row"><a class="button outline" href="${LINKS.aypJoin}" target="_blank" rel="noopener">AYP官方詳細要求</a></div></section>${sourceNote()}</div>`,

  'scout-path':()=>`<div class="page-shell">${pageIntro('2026年試行','童軍同步完成','使用同一段童軍訓練及活動歷程，同步完成相應的AYP章級；兩套獎章仍須分別完成所需審批。')}
    <div class="route-arrow"><div class="award-block sync-block"><img class="sync-logo" src="assets/scout-senior-award.png" alt="童軍高級獎章標誌"><div><span class="chip">童軍進度性獎章</span><h2>童軍高級獎章</h2></div></div><span>→</span><div class="award-block sync-block ayp-block bronze"><img class="sync-logo" src="assets/ayp-bronze.png" alt="AYP銅章標誌"><div><span class="chip">AYP</span><h2>銅章</h2></div></div></div>
    <div class="route-arrow"><div class="award-block sync-block"><img class="sync-logo" src="assets/chief-scout-award.png" alt="總領袖獎章標誌"><div><span class="chip">童軍進度性獎章</span><h2>總領袖獎章</h2></div></div><span>→</span><div class="award-block sync-block ayp-block silver"><img class="sync-logo" src="assets/ayp-silver.png" alt="AYP銀章標誌"><div><span class="chip">AYP</span><h2>漸進銀章</h2></div></div></div>
    <div class="notice"><p><strong>試行安排：</strong>本方案由2026年8月15日起試行。成員仍可選擇按AYP原有方法完成各科，毋須使用同步完成方案；詳細對接、紀錄及評核指引以童軍執行處最新公布為準。</p></div>
    <section class="content-section"><span class="label">試行計劃 e-Form</span><h2>參與意向登記</h2><p>有意參與「童軍活動與香港青年獎勵計劃同步計劃（試行）」的童軍單位及領袖，可透過以下電子表格提交參與意向，以便童軍執行處了解推行情況及作後續聯絡。</p><div class="notice info"><p><strong>請注意：</strong>此表格只供登記參與試行的意向，不會取代參加者迎新講座、AYP參加申請、紀錄簿申請，以及童軍獎章與AYP各自所需的紀錄、評核和審批程序。</p></div><div class="link-row"><a class="button dark" href="${LINKS.syncInterestEform}" target="_blank" rel="noopener">填寫同步計劃參與意向登記表</a></div></section>
    <section class="content-section"><h2>同步完成並非自動換領</h2><p>成員須同意參加同步完成方案，完成AYP登記，並由探索獎章開始使用2026年新版《童軍訓練綱要》。活動仍須符合AYP的內容、時數、持續期、個人目標、紀錄及評核要求。</p><ul class="checklist"><li>活動開始前完成AYP登記</li><li>按童軍程序進行訓練及考驗</li><li>保存日期、時數、持續期及進度</li><li>由合適人員完成AYP確認</li><li>分別完成童軍獎章及AYP審批</li></ul></section>
    <section class="content-section" id="bronze-sync"><h2>童軍高級獎章 → AYP銅章</h2><p>AYP銅章以服務科為主項，技能科及康樂體育科為副項。</p><div class="two-col">
      <article class="info-card"><h3>服務科主項</h3><p>童軍標準獎章及高級獎章的持續服務項目。</p></article>
      <article class="info-card"><h3>技能科副項</h3><p>高級獎章B.2.a所選的一項與科學、科技、工程、藝術或數學有關的合資格專科徽章。</p></article>
      <article class="info-card"><h3>康樂體育科副項</h3><p>體適能相關專科徽章，或不少於13小時並持續不少於13星期的體適能訓練。</p></article>
      <article class="info-card"><h3>野外鍛鍊科</h3><p>探索獎章A.2.c、標準獎章A.2.e，以及高級獎章A.2.f.I或A.2.f.II。</p></article>
    </div></section>
    <section class="content-section" id="silver-sync"><h2>總領袖獎章 → AYP漸進銀章</h2><p>參加者須已完成AYP銅章，並符合銀章開始年齡。服務、技能及康樂體育科不設主項或副項。</p><div class="two-col">
      <article class="info-card"><h3>服務科</h3><p>總領袖獎章D.1.c的持續服務項目。</p></article>
      <article class="info-card"><h3>技能科</h3><p>總領袖獎章A.3「先鋒工程」，包括繩結及編結、設計、器材準備、建造、教授技巧及帶領小隊。</p></article>
      <article class="info-card"><h3>康樂體育科</h3><p>體適能相關專科徽章，或不少於26小時並持續不少於26星期的體適能訓練。</p></article>
      <article class="info-card"><h3>野外鍛鍊科</h3><p>總領袖獎章歷險選項II。</p></article>
    </div></section>
    <section class="content-section" id="sync-journey"><h2>試行期野外鍛鍊安排</h2><h3>同步完成AYP銅章</h3><p>旅團應在正式訓練及考驗開始前聯絡具相關資格的EA或JEA，審視前期訓練，並按需要進行補充訓練、旅程考驗及評核。未能自行聯絡時，可由區會協助；仍未能安排者，可由AYP「遠足導師註冊制度」（CRS）下具相應資格並同時為童軍領袖的遠足導師進行。</p><h3>同步完成AYP漸進銀章</h3><p>歷險選項II包括進階基本訓練、一日訓練旅程、兩日一夜實習旅程及三日兩夜評核旅程。成員應完成中階遠足訓練班及中階遠足考驗；如未能參加，旅團須在開始前聯絡合適EA，或按上述安排尋求協助。</p><p>旅團須記錄考驗人員姓名、身分、資格、所屬單位、聯絡方法、考驗項目、日期及結果。</p></section>
    <section class="content-section"><h2>領袖的五個步驟</h2><div class="step-list"><article class="step"><h3>先參加試行</h3><p>單位完成試行登記，參加成員亦須按指定程序完成AYP登記。</p></article><article class="step"><h3>照常進行童軍訓練</h3><p>按新《童軍訓練綱要》進行探索、標準、高級及總領袖獎章活動。</p></article><article class="step"><h3>照常記錄進度</h3><p>按童軍獎章考驗程序記錄及確認完成項目。</p></article><article class="step"><h3>安排合適評核</h3><p>一般項目沿用合適主考；野外鍛鍊科按指定人員及評核安排辦理。</p></article><article class="step"><h3>完成章級後申請AYP</h3><p>完成相關童軍獎章及AYP要求後，按指定程序提出AYP完成申請。</p></article></div></section>
    <section class="content-section"><h2>同步完成常見問題</h2>${faqMarkup(syncFaq)}</section>${sourceNote()}</div>`,

  leaders:()=>`<div class="page-shell">${pageIntro('領袖及UUL','領袖專區','協助參加者選擇活動、訂立目標、持續參與及完成紀錄和審批。')}
    <nav class="subnav" aria-label="領袖專區內容"><a href="#leaders/uul">支部及組長</a><a href="#leaders/registration">組長註冊</a><a href="#leaders/records">登記與紀錄</a><a href="#leaders/assessment">指導及評核</a><a href="#leaders/journey">野外鍛鍊</a><a href="#leaders/completion">完成申請</a></nav>
    <section class="content-section"><h2>領袖工作流程</h2><ol class="checklist"><li>確認資格、年齡、章級及路徑</li><li>完成AYP登記及建立紀錄</li><li>協助選擇各科活動</li><li>訂立具體而可評核的目標</li><li>確認導師及評核員</li><li>活動開始前完成批核</li><li>定期檢查日期、時數及進度</li><li>安排野外鍛鍊訓練及旅程</li><li>完成各科評核及簽署</li><li>提交章級完成申請</li></ol><button class="print-button" type="button">列印本頁核對資料</button></section>
    <section class="content-section" id="uul"><h2>支部及執行處支部組長安排</h2><p>執行處支部是參加者與童軍執行處之間的主要聯繫單位。童軍旅、童軍區、地域或其他合資格單位可使用AYP/10申請成立，並須提名最少一名合資格領袖或總監擔任執行處支部組長（UUL）。</p>
      <div class="notice info"><p>童軍旅的成立申請須經旅長確認；童軍區或地域的申請須經有關區總監或地域總監確認。獲批核前，單位不應自行以AYP執行處支部名義辦理相關工作。</p></div>
      <div class="two-col"><article class="info-card"><h3>推廣及登記</h3><p>介紹AYP、安排迎新、核對年齡和路徑、辦理申請、家長同意及紀錄。</p></article><article class="info-card"><h3>活動及人員</h3><p>協助選擇活動和目標，核對時數、持續期，並確認導師及評核員。</p></article><article class="info-card"><h3>進度及野外鍛鍊</h3><p>定期檢查紀錄，處理中斷或更改，安排訓練、實習和評核旅程。</p></article><article class="info-card"><h3>完成及行政</h3><p>核對簽署、提交完成通知、處理統計、轉換和支部資料更新。</p></article></div>
      <h3>支部年度核對</h3><ul class="checklist"><li>支部及UUL註冊有效</li><li>聯絡人和參加者資料已更新</li><li>家長同意、導師及評核員資料齊備</li><li>野外鍛鍊科人手足夠</li><li>銅章及銀章各科紀錄已核對</li><li>完成申請及指定統計資料已處理</li></ul><div class="link-row"><a class="button dark" href="${LINKS.unitUulEform}" target="_blank" rel="noopener">填寫AYP/10及AYP/14電子表格</a><a class="button outline" href="${LINKS.unitApplication}" target="_blank" rel="noopener">下載AYP/10紙本表格</a><a class="button outline" href="${LINKS.uulApplication}" target="_blank" rel="noopener">下載AYP/14紙本表格</a><a class="button outline" href="${LINKS.uulGuide}" target="_blank" rel="noopener">UUL工作須知</a></div>
    </section>
    <section class="content-section" id="registration"><h2>執行處支部組長註冊</h2><div class="notice"><p><strong>現行註冊期：</strong>2024年4月1日至2027年3月31日。下一註冊期及申請安排由青少年活動署另行公布。</p></div><div class="two-col"><article class="info-card"><h3>首次註冊</h3><p>申請人須年滿18歲而未滿65歲，持有有效領袖、總監或其他獲接納的委任，完成支部組長座談會，並隸屬已成立的執行處支部；支部尚未成立者須一併提交AYP/10。</p></article><article class="info-card"><h3>再次註冊</h3><p>須繼續符合首次註冊資格，並在註冊期內最少出席一次總會舉辦的支部組長工作坊。首次註冊不足兩年便遇上註冊期屆滿者，只可獲豁免首次續任的工作坊要求。</p></article></div><h3>座談會及資格延續</h3><p><strong>支部組長座談會的網上影片即將推出。</strong>實體座談會亦會繼續舉行。申請人完成座談會、提交AYP/14並經所屬單位確認及執行處處理後，方可正式擔任組長。如相關委任失效或離開原屬單位，組長註冊資格亦告終止；轉往其他單位繼續擔任時須重新辦理註冊。</p></section>
    <section class="content-section" id="records"><h2>登記與紀錄流程</h2><div class="step-list"><article class="step"><h3>登記前核對</h3><p>確認已完成迎新講座，並核對年齡、章級、直接或漸進路徑及支部資料。</p></article><article class="step"><h3>活動開始前</h3><p>參加者須正式獲接納及取得紀錄簿，再確認活動目的、個人目標、時數、持續期、導師、評核員、紀錄和評核方法。</p></article><article class="step"><h3>活動進行期間</h3><p>持續記錄日期、實際時數、內容、成果、困難、反思及導師意見。</p></article><article class="step"><h3>更改或轉換</h3><p>由其他執行處轉入香港童軍總會須提交AYP/09及相關紀錄；只在本會內轉換支部，須通知原屬及新屬支部組長，並按指定程序更新單位資料。</p></article></div>
      <h3>紀錄應包括</h3><ul class="checklist"><li>活動日期及實際時數</li><li>開始和完成日期</li><li>個人目標及活動內容</li><li>進度、成果及反思</li><li>導師和評核員資料</li><li>資格、評語、簽署及日期</li></ul>
      <div class="notice"><p>同步完成紀錄應在活動進行期間按實際情況填寫，不應預先簽署或一次過補填。如童軍主考並非AYP認可評核員，須由合適評核員檢視及確認AYP部分。</p></div>
    </section>
    <section class="content-section" id="assessment"><h2>各科指導及評核</h2><p>評核重點是參加者有沒有按個人起步水平訂立目標、持續參與、克服困難並取得實際進步。導師在活動期間提供指導；評核員負責檢視計劃、了解進度、核對紀錄、給予具體評語和確認完成。</p>
      <div class="three-col"><article class="info-card"><h3>服務科</h3><p>留意出席、可靠程度、服務態度、責任感、合作及對服務意義的理解。</p></article><article class="info-card"><h3>技能科</h3><p>檢視知識和技巧提升、練習持續性、作品成果、解難及主動學習。</p></article><article class="info-card"><h3>康樂體育科</h3><p>按個人起步水平評核體能或技巧改善、持續訓練、安全意識及毅力。</p></article><article class="info-card"><h3>野外鍛鍊科</h3><p>評核旅程目的、共同策劃、導航、戶外煮食、帳幕搭建、裝備運用、團隊合作、安全、環境及匯報。</p></article><article class="info-card"><h3>團體生活科</h3><p>只適用於金章，評核投入、共同生活、合作、適應、責任及學習成果。</p></article></div>
      <h3>評核員評語</h3><p>評語應具體說明參加者完成了甚麼、如何持續參與、取得甚麼進步、如何面對困難，以及是否達到目標。不建議只寫「完成」、「合格」或「表現良好」。</p>
    </section>
    <section class="content-section" id="journey"><h2>野外鍛鍊科考驗安排</h2><p>野外鍛鍊科是由參加者共同策劃、以明確目的為核心的小組旅程。一般遠足、露營或訓練營不會自動等同完成野外鍛鍊科。</p>
      <h3>基本組成</h3><ul class="checklist"><li>課堂及基本訓練</li><li>戶外訓練</li><li>實習旅程</li><li>評核旅程計劃</li><li>評核旅程</li><li>旅程紀錄、報告或匯報</li><li>評核員評語及簽署</li></ul>
      <h3>人員安排</h3><div class="two-col"><article class="info-card"><h3>課程／實習導師</h3><p>教授所需知識和技巧，協助參加者把訓練應用於旅程。</p></article><article class="info-card"><h3>督導員</h3><p>核對訓練、旅程計劃、裝備及緊急安排，並跟進旅程安全。</p></article><article class="info-card"><h3>評核員</h3><p>評定參加者在評核旅程中的表現。金章須按AYP要求安排獨立及獲批准的評核員。</p></article><article class="info-card"><h3>參加者小組</h3><p>共同策劃目的、路線、分工、餐單、風險、撤退及匯報，不應由領袖代辦。</p></article></div>
      <h3>旅程計劃重點</h3><ul class="checklist"><li>目的、路線、日期、時間及小組分工</li><li>距離、住宿、糧食、裝備及交通</li><li>天氣、風險評估及急救用品</li><li>緊急聯絡、撤退路線及後備計劃</li><li>旅程後的報告或匯報方法</li></ul>
      <div class="link-row"><a class="button outline" href="${LINKS.journeyHandbook}" target="_blank" rel="noopener">AYP野外鍛鍊科手冊</a><a class="button outline" href="#awards">查看各章級旅程要求</a></div>
    </section>
    <section class="content-section" id="completion"><h2>完成申請及審批</h2><p>完成活動不等同自動取得獎章。參加者仍須完成紀錄、評核、支部核對及章級審批。</p><div class="step-list"><article class="step"><h3>參加者整理紀錄</h3><p>按科目整理目標、日期、時數、日誌、反思、證明及簽署。</p></article><article class="step"><h3>導師及評核員確認</h3><p>核對持續參與、個人進步、目標及科目要求，並給予具體評語。</p></article><article class="step"><h3>UUL初步核對</h3><p>核對身份資料、章級路徑、活動日期、時數、持續期、人員和附件。</p></article><article class="step"><h3>填寫完成通知書</h3><p>按現行安排使用AYP/07或AYP/12，並核對所有欄目和附件。</p></article><article class="step"><h3>支部提交及保存副本</h3><p>記錄提交日期、方法、附件、收件確認、補充資料和最終結果。</p></article><article class="step"><h3>地域及執行處審核</h3><p>資料不足時由UUL聯絡參加者、導師或評核員補充，不應代填評語或簽署。</p></article></div>
      <h3>提交前核對</h3><ul class="checklist"><li>活動在登記後開始</li><li>時數及持續期符合要求</li><li>沒有重複計算活動</li><li>評核員評語、簽署及日期齊備</li><li>野外鍛鍊科文件完整</li><li>使用最新表格並保存完整副本</li></ul><div class="link-row"><a class="button dark" href="#support">尋找完成通知書</a></div>
    </section>${sourceNote()}</div>`,

  support:()=>`<div class="page-shell">${pageIntro('集中搜尋','表格與支援','電子表格與紙本表格分開列出，方便童軍成員、青年領袖及執行處支部選用正確方式。')}
    <section class="content-section"><h2>申請電子表格（e-Form）</h2><div class="two-col"><article class="info-card"><span class="label">AYP/01 e-Form</span><h3>香港童軍總會香港青年獎勵計劃參加申請電子表格</h3><p>供有意透過香港童軍總會參加AYP的童軍成員及合資格青年領袖使用。參加者須先完成迎新講座；童軍成員一般經所屬執行處支部辦理，青年領袖則按指定安排直接經青少年活動署辦理。</p><div class="link-row"><a class="button dark" href="${LINKS.applicationEform}" target="_blank" rel="noopener">填寫AYP/01電子表格</a><a class="button outline" href="${LINKS.application}" target="_blank" rel="noopener">下載AYP/01紙本表格</a></div></article><article class="info-card"><span class="label">AYP/10及AYP/14 e-Form</span><h3>執行處支部／支部組長申請電子表格</h3><p>供成立執行處支部、首次註冊支部組長，以及新增或更改支部組長使用。首次申請擔任組長者須完成組長座談會；旅團尚未成立支部時，可用同一電子表格一併辦理成立支部及組長註冊。</p><div class="link-row"><a class="button dark" href="${LINKS.unitUulEform}" target="_blank" rel="noopener">填寫AYP/10及AYP/14電子表格</a><a class="button outline" href="${LINKS.unitApplication}" target="_blank" rel="noopener">下載AYP/10紙本表格</a><a class="button outline" href="${LINKS.uulApplication}" target="_blank" rel="noopener">下載AYP/14紙本表格</a></div></article></div>
      <div class="notice"><p><strong>電子化過渡：</strong>首階段包括AYP/01、AYP/10及AYP/14。自網上系統正式啟用日起一年內，可選用網上或紙本方式提交，同一宗申請只需選擇一種方式。首次參加者仍須完成迎新講座；首次申請擔任組長者仍須完成組長座談會。</p></div></section>
    <section class="content-section"><h2>紙本及其他表格搜尋</h2><p>以下目錄列出紙本申請表、訓練及評核表格、章級完成文件與其他行政表格。</p><div class="filter-bar"><input id="form-search" type="search" placeholder="輸入表格編號或用途" aria-label="搜尋表格"><select id="form-category" aria-label="表格類別"><option value="">所有類別</option><option>參加及轉換</option><option>訓練及評核</option><option>章級完成</option><option>支部及行政</option></select></div><div id="form-list" class="form-list"></div></section>
    <section class="content-section"><h2>官方指引</h2><div class="three-col"><article class="info-card"><h3>童軍執行處網頁</h3><p>網上系統、最新表格、同步完成方案及相關指引。迎新講座及支部組長座談會影片即將推出。</p><a href="${LINKS.scoutAyp}" target="_blank" rel="noopener">前往網站</a></article><article class="info-card"><h3>AYP官方網站</h3><p>計劃、章級、活動及最新資訊。</p><a href="${LINKS.ayp}" target="_blank" rel="noopener">前往網站</a></article><article class="info-card"><h3>野外鍛鍊科手冊</h3><p>訓練、實習、評核旅程及安全要求。</p><a href="${LINKS.journeyHandbook}" target="_blank" rel="noopener">開啟手冊</a></article></div></section>
    <section class="content-section" id="contacts"><h2>查詢及支援</h2><p>童軍成員可先聯絡所屬支部組長；如旅團未設支部，可向所屬童軍區、地域或地域辦事處查詢。</p><div class="contact-grid"><div class="contact-card"><strong>港島地域</strong><span>2574 4296</span></div><div class="contact-card"><strong>九龍地域</strong><span>2957 6488</span></div><div class="contact-card"><strong>東九龍地域</strong><span>2957 6466</span></div><div class="contact-card"><strong>新界地域</strong><span>2425 5999</span></div><div class="contact-card"><strong>新界東地域</strong><span>2667 9100</span></div><div class="contact-card"><strong>青少年活動署</strong><span>2957 6411／2957 6417</span></div><div class="contact-card"><strong>電郵</strong><a href="mailto:prog@scout.org.hk">prog@scout.org.hk</a></div><div class="contact-card"><strong>傳真</strong><span>3011 3183</span></div></div></section>
    <section class="content-section"><h2>提交表格前</h2><ul class="checklist"><li>先完成適用的迎新講座或組長座談會</li><li>使用最新版本並填妥所有適用欄目</li><li>取得所需確認及簽署</li><li>附上表格所列文件及適用費用</li><li>網上與紙本方式只選其一</li><li>保存完整申請副本及提交紀錄</li></ul></section>${sourceNote()}</div>`
};
