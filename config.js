const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94721986225";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_54_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNixcbiAgICAgICAgMTAwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTczLFxuICAgICAgICA0OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMixcbiAgICAgICAgNDAsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICAxODEsXG4gICAgICAgIDM2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTQsXG4gICAgICAgIDY1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjI4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgODYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExMixcbiAgICAgICAgNzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0LFxuICAgICAgICAzNixcbiAgICAgICAgMTExLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjksXG4gICAgICAgIDQwLFxuICAgICAgICAxNjksXG4gICAgICAgIDU0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY3LFxuICAgICAgICA0MixcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU4LFxuICAgICAgICA2MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgxLFxuICAgICAgICA4MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODgsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTcxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODUsXG4gICAgICAgIDMzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY1LFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA4LFxuICAgICAgICA5MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDMwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjksXG4gICAgICAgIDYzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjMsXG4gICAgICAgIDY3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMixcbiAgICAgICAgMTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODgsXG4gICAgICAgIDkwLFxuICAgICAgICA1NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDMxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDY4LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJKa2xMVEdtVjFKZkVTdzc4cEsrRHdqMjhUNDJuc29LZDJoRHNxLzNOdUJ3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJNNWw0cEVsZFRwT2tyV3NMLVFrSjBRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjIxNjYzODliLWUxYTItNGJmMS04MGIzLTNiNGI4ZmIwOGM5NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzIsXG4gICAgICA1NyxcbiAgICAgIDQ3LFxuICAgICAgMTg0LFxuICAgICAgMTUsXG4gICAgICAyMCxcbiAgICAgIDEyMixcbiAgICAgIDYzLFxuICAgICAgMixcbiAgICAgIDMzLFxuICAgICAgMTAyLFxuICAgICAgOTcsXG4gICAgICAyMTAsXG4gICAgICAyMzksXG4gICAgICAxODUsXG4gICAgICA5MyxcbiAgICAgIDI1MyxcbiAgICAgIDk5LFxuICAgICAgMjA3LFxuICAgICAgNjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDAsXG4gICAgICA5NyxcbiAgICAgIDE1OSxcbiAgICAgIDU4LFxuICAgICAgMjQ2LFxuICAgICAgMTYsXG4gICAgICAxNSxcbiAgICAgIDI1MCxcbiAgICAgIDIsXG4gICAgICAxOSxcbiAgICAgIDQwLFxuICAgICAgMzEsXG4gICAgICA5NSxcbiAgICAgIDkyLFxuICAgICAgOTAsXG4gICAgICAyMzAsXG4gICAgICAxNDAsXG4gICAgICAyNDMsXG4gICAgICAxMzgsXG4gICAgICAyMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMjI3QUY4N0pcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzIxOTg2MjI1OjMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjQ4NTM3Mjk3NTUzMjU6MzNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDdHdG9jQkVQemh5N01HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQUUllOGZmTm9xeHpwNDlva0FyeU00M05qVTlHNUlNYThTbVpCUjl2N3lvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm1NNWdHbW83K2RBU1cwS0J4L1I2d3lsVERZSkNSa28xNzBvYU5HMUFtUlhWZkI0ZmdYYStqa1o5NDZic2dJQTk5QjZTS1FVK3hkVUNaY29pdEovUENnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInZ0bHUwUmVWLzN6UG9jRmd3VFFSTHVRV1UzaXlWMFdkZTdTVzRzUHRiQkxrb1dMRkx2MW1KVFRTTXJ6djVVb3ZidHRrVXdVa0JDYnpROHhNL1duSUR3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzIxOTg2MjI1OjMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODgwODgzMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURvc1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRG9zLmpzb24iOiAie1wia2V5RGF0YVwiOlwiKzdoMXQ4YzF6VXBYMXo0K3NWZzZPcmlzbitRd3VrUTVvZG82QWRMMGQrVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyODQwMDkyNzgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODgwODgzODgxMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
