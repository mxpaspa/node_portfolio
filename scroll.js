window.onload = function() {
  const c=document.getElementById("videoCanvas");
  const ctx=c.getContext("2d");
  const imgArray1 = [];
  const maxFrames1 = 546;
  const loaderInner = document.getElementsByClassName("loader-inner")[0];

  let imagesLoaded = 0;
  let videoFrame = 0;

  var objDiv = document.getElementById("max");
  objDiv.scrollTop = objDiv.scrollHeight;

  //grab frames from directory for first vid
  for(let x = 0; x < maxFrames1; x++) {
    const img=new Image();
    img.src = `/video_frames_jpg/File ${x + 1}.jpeg`;
    imgArray1.push(img);

    img.onload = () => {
      let progress = ++imagesLoaded/150;

      if(progress == 1) {
        // setInterval(function(){
          // document.getElementById("scrollDown").classList.add("visible");
          document.getElementsByClassName("loader-wrapper")[0].classList.add("hidden");
          function createText (){

            let scrollText;
            scrollText= document.createElement("div");
            scrollText.id = "scrollDown";
            scrollText.innerHTML = "Scroll Down";
            scrollText.classList.add("visible");
            document.getElementById("main").appendChild(scrollText);
            console.log("force scroll");
            window.scroll(0,300);
          }

          setTimeout(createText, 300);
          // scrollDown();


        }
        // , 1000);
      init(videoFrame);
      if(x <= 150){
        setProgress(progress)
      }

    }

      const setProgress = progress => {
        loaderInner.style.width = progress*100 + "%";
      };

    }


  const init = imageIndex => {
    let img = imgArray1[imageIndex];
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    console.log("initializing.")
    const { width, height } = screen;
    const ratioHeight = ((img.height / img.width) * c.width);
    console.log("ration height:" + ratioHeight);
    let imgWidth = ctx.canvas.width;
    let imgHeight = img.height * (ctx.canvas.width/img.width);

    if(imgHeight < window.innerHeight) {
      imgWidth = img.width * (ctx.canvas.height/img.height);
      imgHeight = ctx.canvas.height;
    }

    console.log(imgWidth, imgHeight);
    let x = (window.innerWidth - imgWidth)/2;
    let y = (window.innerHeight - imgHeight)/2;
    console.log(x,y);
    ctx.drawImage(img,x,y, imgWidth, imgHeight);
  }

  window.onresize = () => init(videoFrame);
  // window.onresize(function() {
  //   init(videoFrame)
  // });

  //get scroll progress
  window.onscroll = e => {


    const target = e.target.scrollingElement;
    let element = target.id;
    const maxHeight = target.scrollHeight;
    const { scrollTop } = target;
    const percent = scrollTop / maxHeight;
    console.log("scroll percent" + percent)
    console.log("scrolling element:" + element)
    var maxPageYOffset = 48175;

    //change the video frame depending on scroll percent
    videoFrame = Math.round(percent * imgArray1.length);
    init(videoFrame);

    max1 = document.getElementById('max1');
    max2 = document.getElementById('max2');

    ba1 = document.getElementById('business-analyst-1');
    ba2 = document.getElementById('business-analyst-2');
    ba3 = document.getElementById('business-analyst-3');
    ba4 = document.getElementById('business-analyst-4');

    mba1 = document.getElementById('mba-1');
    mba2 = document.getElementById('mba-2');
    mba3 = document.getElementById('mba-3');

    dev1a = document.getElementById('dev-1a');
    dev1 = document.getElementById('dev-1');
    dev2 = document.getElementById('dev-2');
    dev2a = document.getElementById('dev-2a');
    dev3 = document.getElementById('dev-3');
    dev4 = document.getElementById('dev-4');
    dev5 = document.getElementById('dev-5');
    dev6 = document.getElementById('dev-6');
    dev7 = document.getElementById('dev-7');

    if (percent > 0){
      // document.getElementById("scrollDown").classList.remove("visible");
      // document.getElementById("scrollDown").classList.add("invisible");
      $("#scrollDown").remove();

    }
    //'max' section
    if (percent > 0.228 && percent < 0.27){
      max1.classList.remove("section-inactive")
      max1.classList.add("section-active");
    }else if(percent < 0.273){
      max1.classList.remove("section-active");
      max1.classList.add("section-inactive");
    }
    if (percent > 0.258) {
      max2.classList.remove("section-inactive")
      max2.classList.add("section-active");
    }else if(percent < 0.273){
      max2.classList.remove("section-active");
      max2.classList.add("section-inactive");
    }
    if (percent < 0.228 || percent > 0.273){
      max1.classList.remove("section-active")
      max1.classList.add("section-inactive");
      max2.classList.remove("section-active")
      max2.classList.add("section-inactive");
    }

    //business analyst section
    if (percent > 0.358){
      ba1.classList.remove("section-inactive")
      ba1.classList.add("section-active");
    }else if(percent < 0.368){
      ba1.classList.remove("section-active");
      ba1.classList.add("section-inactive");
    }
    if (percent > 0.368){
      ba2.classList.remove("section-inactive");
      ba2.classList.add("section-active");
    }else if(percent < 0.39){
      ba2.classList.remove("section-active");
      ba2.classList.add("section-inactive");
    }
    if (percent > 0.39){
      ba3.classList.remove("section-inactive");
      ba3.classList.add("section-active");
    }else if(percent < 0.425){
      ba3.classList.remove("section-active");
      ba3.classList.add("section-inactive");
    }
    if (percent > 0.40){
      ba4.classList.remove("section-inactive");
      ba4.classList.add("section-active");
    }else if(percent < 0.435){
      ba4.classList.remove("section-active");
      ba4.classList.add("section-inactive");
    }

    if (percent < 0.358 || percent > 0.435 ) {
      ba1.classList.remove("section-active");
      ba1.classList.add("section-inactive");
      ba2.classList.remove("section-active")
      ba2.classList.add("section-inactive");
      ba3.classList.remove("section-active")
      ba3.classList.add("section-inactive");
      ba4.classList.remove("section-active")
      ba4.classList.add("section-inactive");
    }

    //mba section
    if (percent > 0.47){
      mba1.classList.remove("section-inactive")
      mba1.classList.add("section-active");
    }else if(percent < 0.63){
      mba1.classList.remove("section-active");
      mba1.classList.add("section-inactive");
    }
    if (percent > 0.51){
      mba2.classList.remove("section-inactive");
      mba2.classList.add("section-active");
    }else if(percent < 0.63){
      mba2.classList.remove("section-active");
      mba2.classList.add("section-inactive");
    }
    if (percent > 0.52){
      mba3.classList.remove("section-inactive");
      mba3.classList.add("section-active");
    }else if(percent < 0.63){
      mba3.classList.remove("section-active");
      mba3.classList.add("section-inactive");
    }
    if (percent < 0.47 || percent > 0.63 ) {
      mba1.classList.remove("section-active");
      mba1.classList.add("section-inactive");
      mba2.classList.remove("section-active")
      mba2.classList.add("section-inactive");
      mba3.classList.remove("section-active")
      mba3.classList.add("section-inactive");
    }


    //dev section
    if (percent > 0.75){
      dev1a.classList.remove("section-inactive")
      dev1a.classList.add("section-active");
    }else if(percent < 0.98){
      dev1a.classList.remove("section-active");
      dev1a.classList.add("section-inactive");
    }
    if (percent > 0.77){
      dev1.classList.remove("section-inactive")
      dev1.classList.add("section-active");
    }else if(percent < 0.98){
      dev1.classList.remove("section-active");
      dev1.classList.add("section-inactive");
    }
    if (percent > 0.84){
      dev2a.classList.remove("section-inactive");
      dev2a.classList.add("section-active");
    }else if(percent < 0.98){
      dev2a.classList.remove("section-active");
      dev2a.classList.add("section-inactive");
    }
    if (percent > 0.86){
      dev2.classList.remove("section-inactive");
      dev2.classList.add("section-active");
    }else if(percent < 0.98){
      dev2.classList.remove("section-active");
      dev2.classList.add("section-inactive");
    }
    if (percent > 0.87){
      dev3.classList.remove("section-inactive");
      dev3.classList.add("section-active");
    }else if(percent < 0.98){
      dev3.classList.remove("section-active");
      dev3.classList.add("section-inactive");
    }
    if (percent > 0.88){
      dev4.classList.remove("section-inactive");
      dev4.classList.add("section-active");
    }else if(percent < 0.98){
      dev4.classList.remove("section-active");
      dev4.classList.add("section-inactive");
    }
    if (percent > 0.89){
      dev5.classList.remove("section-inactive");
      dev5.classList.add("section-active");
    }else if(percent < 0.98){
      dev5.classList.remove("section-active");
      dev5.classList.add("section-inactive");
    }
    if (percent > 0.90){
      dev6.classList.remove("section-inactive");
      dev6.classList.add("section-active");
    }else if(percent < 0.98){
      dev6.classList.remove("section-active");
      dev6.classList.add("section-inactive");
    }
    if (percent > 0.97){
      dev7.classList.remove("section-inactive");
      dev7.classList.add("section-active");
      dev1a.classList.remove("section-active");
      dev1a.classList.add("section-inactive");
      dev1.classList.remove("section-active");
      dev1.classList.add("section-inactive");
      dev2.classList.remove("section-active")
      dev2.classList.add("section-inactive");
      dev2a.classList.remove("section-active")
      dev2a.classList.add("section-inactive");
      dev3.classList.remove("section-active")
      dev3.classList.add("section-inactive");
      dev4.classList.remove("section-active")
      dev4.classList.add("section-inactive");
      dev5.classList.remove("section-active")
      dev5.classList.add("section-inactive");
      dev6.classList.remove("section-active")
      dev6.classList.add("section-inactive");
    }else if(percent < 0.98){
      dev7.classList.remove("section-active");
      dev7.classList.add("section-inactive");
    }
    if (percent < 0.75) {
      dev1a.classList.remove("section-active");
      dev1a.classList.add("section-inactive");
      dev1.classList.remove("section-active");
      dev1.classList.add("section-inactive");
      dev2.classList.remove("section-active")
      dev2.classList.add("section-inactive");
      dev3.classList.remove("section-active")
      dev3.classList.add("section-inactive");
      dev4.classList.remove("section-active")
      dev4.classList.add("section-inactive");
      dev5.classList.remove("section-active")
      dev5.classList.add("section-inactive");
      dev6.classList.remove("section-active")
      dev6.classList.add("section-inactive");
      dev7.classList.remove("section-active")
      dev7.classList.add("section-inactive");

    }


    section1_0 = document.getElementById("section1-0");
    section2_136 = document.getElementById("section2-136");
    section3_218 = document.getElementById("section3-218");
    section4_327 = document.getElementById("section4-327");
    section5_530 = document.getElementById("section5-530")

    if (videoFrame < 0){
      console.log("BEFORE");
      section1_0.classList.remove("active");
    }else{
      console.log("AFTER")
      // .css('background-color', 'blue');
      section1_0.classList.add("active");
    }

    if (videoFrame < 139){
      console.log("BEFORE");
      section2_136.classList.remove("active");
      section2_136.classList.add("reverse");
    }else{
      console.log("AFTER")
      // .css('background-color', 'blue');
      section2_136.classList.remove("reverse");
      section2_136.classList.add("active");
    }

    if (videoFrame < 218){
      console.log("BEFORE");
      section3_218.classList.remove("active");
      section3_218.classList.add("reverse");
    }else{
      console.log("AFTER")
      // .css('background-color', 'blue');
      section3_218.classList.remove("reverse");
      section3_218.classList.add("active");
    }

    if (videoFrame < 327){
      console.log("BEFORE");
      section4_327.classList.remove("active");
      section4_327.classList.add("reverse");
    }else{
      console.log("AFTER")
      // .css('background-color', 'blue');
      section4_327.classList.remove("reverse");
      section4_327.classList.add("active");
    }

    if (videoFrame < 530){
      console.log("BEFORE");
      section5_530.classList.remove("active");
      section5_530.classList.add("reverse");
    }else{
      console.log("AFTER")
      // .css('background-color', 'blue');
      section5_530.classList.remove("reverse");
      section5_530.classList.add("active");
    }

    //adjust indicator on scroll
    var maxPageYOffset = 48175;
    var theCurrentPos = percent * maxPageYOffset;
    var indicatorProgress = (theCurrentPos / maxPageYOffset) * 100;
    position = 100 - indicatorProgress;
    $( "#indicator" ).css( "bottom", position + "%");
    console.log("scroll top:" + $(document).scrollTop());

    console.log("video frame:" + videoFrame);


    $("")

  }
}
