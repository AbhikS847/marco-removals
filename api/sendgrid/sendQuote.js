const nodemailer = require('nodemailer');

const sendQuote = async(quote) => {

    console.log(quote);
    const html =`
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Archivo+Narrow&family=Roboto&display=swap" rel="stylesheet">
    <div style="font-size:1em;padding:8px;margin:8px;font-family:'Archivo Narrow', sans-serif; text-align: center; background-color: #24dba4;color:#fff"><h1>Marco Removals</h1></div>
    <div style="padding:8px;margin:8px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">

    <div style="text-align:center;border:1px solid #eaeaea;padding:16px;background-color: #d1e7dd;color:#0f5132;font-family:Arial, Helvetica, sans-serif">
        <p style="font-size:25px; font-weight:700;">Quote received</p>
        <p style="font-size:16px; font-weight:700;">Quote reference: ${quote._id}</p>
    </div>
    <div>
        <p style="font-size:23px; font-weight: 600; font-family:Roboto, sans-serif">Quote details</p>
        <hr style="color:#eaeaea">
    </div>
    <div style="display: flex; font-family:Arial, Helvetica, sans-serif;padding:4px">
        <div style="padding: 6px; margin: 4px;">
            <svg style="color:#929292" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-muted" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"></path></svg></div>
        <div style="align-items: center; padding:5px;">
        <div style="color:#929292">Name</div>
        <div>${quote.name}</div>
        </div>
    </div>
    <div style="display: flex; font-family:Arial, Helvetica, sans-serif;padding:4px">
        <div style="padding: 6px; margin: 4px;">
            <svg style="color:#929292" stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" class="text-muted" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 0c-2.761 0-5 2.239-5 5 0 5 5 11 5 11s5-6 5-11c0-2.761-2.239-5-5-5zM8 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path></svg></div>
        <div style="align-items: center; padding:5px;">
        <div style="color:#929292">Number</div>
        <div>${quote.number}</div>
        </div>
    </div>
    <div style="display: flex; font-family:Arial, Helvetica, sans-serif;padding:4px">
        <div style="padding: 6px; margin: 4px;">
            <svg style="color:#929292" stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" class="text-muted" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.333 0h-10.666c-1.467 0-2.667 1.2-2.667 2.667v10.666c0 1.468 1.2 2.667 2.667 2.667h10.666c1.467 0 2.667-1.199 2.667-2.667v-10.666c0-1.467-1.2-2.667-2.667-2.667zM13.333 2c0.125 0 0.243 0.036 0.344 0.099l-5.678 4.694-5.677-4.694c0.101-0.063 0.219-0.099 0.344-0.099h10.666zM2.667 14c-0.030 0-0.060-0.002-0.089-0.006l3.525-4.89-0.457-0.457-3.646 3.646v-9.549l6 7.256 6-7.256v9.549l-3.646-3.646-0.457 0.457 3.525 4.89c-0.029 0.004-0.059 0.006-0.088 0.006h-10.666z"></path></svg></div>
        <div style="align-items: center; padding:5px;">
        <div style="color:#929292">Email</div>
        <div>${quote.email}</div>
        </div>
    </div>
    <div style="display: flex; font-family:Arial, Helvetica, sans-serif;padding:4px">
        <div style="padding: 6px; margin: 4px;">
            <svg style="color:#929292" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-muted" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M312 320h136V56c0-13.3-10.7-24-24-24H24C10.7 32 0 42.7 0 56v400c0 13.3 10.7 24 24 24h264V344c0-13.2 10.8-24 24-24zm129 55l-98 98c-4.5 4.5-10.6 7-17 7h-6V352h128v6.1c0 6.3-2.5 12.4-7 16.9z"></path></svg></div>
        <div style="align-items: center; padding:5px;">
        <div style="color:#929292">Description</div>
        <div>${quote.desc}</div>
        </div>
    </div>
    </div>
    <hr />
    `;

    const transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port:587,
        secure:false,
        auth:{
            user:process.env.BUSINESS_USER,
            pass:process.env.BUSINESS_PASSWORD,
        },
        from:'abhikshrestha847@outlook.com',
        tls:{rejectUnauthorized:false}
    })
    
    const options = {
        from: "abhikshrestha847@outlook.com",
        to: [quote.email, "abhikshrestha847@outlook.com"],
        subject: `RE - Quote reference(${quote._id})`,
        html:html
    };
    
    transporter.sendMail(options, (err, info) => {
        if(err){
            console.log(err);
        }
        else{
            console.log("Email sent");
            //console.log(info);
        }
    })

}

module.exports = sendQuote;