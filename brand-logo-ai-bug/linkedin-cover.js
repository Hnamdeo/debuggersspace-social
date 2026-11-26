const { chromium } = require('playwright'); const fs=require('fs');
const src=fs.readFileSync('gen.js','utf8');
eval(src.split('const names')[0].replace("const { chromium } = require('playwright');",'').replace("const fs = require('fs');",'').replace(/^const /gm,'var ').replace('let uid','var uid'));
const mark=s=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="${s}" height="${s}">${icons.I(P.dark)}</svg>`;
const html=`<div style="width:1128px;height:191px;position:relative;overflow:hidden;background:#0b1428;font-family:Inter;color:#fff">
<div style="position:absolute;inset:0;background:radial-gradient(380px 260px at 25% 55%,rgba(109,74,255,.5),transparent 70%),radial-gradient(380px 260px at 80% 40%,rgba(0,209,255,.3),transparent 70%)"></div>
<div style="position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px);background-size:24px 24px"></div>
<div style="position:absolute;left:0;right:0;top:34px;display:flex;justify-content:center;padding-left:160px;align-items:center;gap:22px">${mark(100)}
<div><div style="font:800 46px Inter;letter-spacing:-1.4px;line-height:1">Debuggers <span style="background:linear-gradient(90deg,#00d1ff,#8b5cf6);-webkit-background-clip:text;color:transparent">Space</span></div>
<div style="font:600 13px Inter;letter-spacing:5px;color:#9fb8e0;margin-top:8px">AI-POWERED SOLUTIONS</div>
<div style="display:flex;gap:7px;margin-top:14px">${['AI Apps &amp; Chatbots','Websites','Clinic &amp; Hospital System','School LMS'].map(c=>`<span style="font:600 11.5px Inter;padding:5px 11px;border-radius:99px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.18)">${c}</span>`).join('')}</div></div></div>
<div style="position:absolute;left:0;right:0;bottom:14px;text-align:center;padding-left:160px;font:600 12px Inter;color:#5ce1ff">solutions.debuggersspace.com · +91 97555 61311</div></div>`;
(async()=>{const b=await chromium.launch();const pg=await b.newPage({deviceScaleFactor:2,viewport:{width:1128,height:191}});
await pg.setContent(`<body style="margin:0">${html}</body>`);await pg.screenshot({path:'/mnt/project-files/branding/logo-final/linkedin-cover-2256x382.png'});await b.close();})();
