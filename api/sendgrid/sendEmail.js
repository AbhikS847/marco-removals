const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API);

const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

const sendMail = async(booking) => {

    const html =`
    <div style="padding:8px;margin:8px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">

    <div style="text-align:center;border:1px solid #eaeaea;padding:16px;background-color: #d1e7dd;color:#0f5132;font-family:Arial, Helvetica, sans-serif">
        <p style="font-size:25px; font-weight:700;">Booking confirmed!</p>
        <p style="font-size:16px; font-weight:700;">Booking ID: ${booking._id}</p>
        <p style="font-size:16px; font-weight:700;">Date: ${booking.date} </p>
    </div>
    <div>
        <p style="font-size:23px; font-weight: 600;">Booking Details</p>
        <hr style="color:#eaeaea">
    </div>
    <div style="display: flex; font-family:Arial, Helvetica, sans-serif;padding:4px">
        <div style="padding: 6px; margin: 4px;">
            <svg style="color:#929292" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-muted" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"></path></svg></div>
        <div style="align-items: center; padding:5px;">
        <div style="color:#929292">Name</div>
        <div>${booking.name}</div>
        </div>
    </div>
    <div style="display: flex; font-family:Arial, Helvetica, sans-serif;padding:4px">
        <div style="padding: 6px; margin: 4px;">
            <svg style="color:#929292" stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" class="text-muted" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 0c-2.761 0-5 2.239-5 5 0 5 5 11 5 11s5-6 5-11c0-2.761-2.239-5-5-5zM8 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path></svg></div>
        <div style="align-items: center; padding:5px;">
        <div style="color:#929292">Location</div>
        <div>${booking.location}</div>
        </div>
    </div>
    <div style="display: flex; font-family:Arial, Helvetica, sans-serif;padding:4px">
        <div style="padding: 6px; margin: 4px;">
            <svg style="color:#929292" stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" class="text-muted" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 6h2v2h-2zM8 6h2v2h-2zM11 6h2v2h-2zM2 12h2v2h-2zM5 12h2v2h-2zM8 12h2v2h-2zM5 9h2v2h-2zM8 9h2v2h-2zM11 9h2v2h-2zM2 9h2v2h-2zM13 0v1h-2v-1h-7v1h-2v-1h-2v16h15v-16h-2zM14 15h-13v-11h13v11z"></path></svg></div>
        <div style="align-items: center; padding:5px;">
        <div style="color:#929292">Date</div>
        <div>${booking.date.slice(0,2)} ${monthNames[booking.date.slice(3,4) - 1]} ${booking.date.slice(5,10)}</div>
        </div>
    </div>
    <div style="display: flex; font-family:Arial, Helvetica, sans-serif;padding:4px">
        <div style="padding: 6px; margin: 4px;">
            <svg style="color:#929292" stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" class="text-muted" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 11.707l-3.293-3.293v-4.414h2v3.586l2.707 2.707zM8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14c-3.314 0-6-2.686-6-6s2.686-6 6-6c3.314 0 6 2.686 6 6s-2.686 6-6 6z"></path></svg></div>
        <div style="align-items: center; padding:5px;">
        <div style="color:#929292">Time</div>
        <div>${booking.time} ${booking.time.slice(0,2) > 12 ? "PM" : "AM" }</div>
        </div>
    </div>
    <div style="display: flex; font-family:Arial, Helvetica, sans-serif;padding:4px">
        <div style="padding: 6px; margin: 4px;">
            <svg style="color:#929292" stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" class="text-muted" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.333 0h-10.666c-1.467 0-2.667 1.2-2.667 2.667v10.666c0 1.468 1.2 2.667 2.667 2.667h10.666c1.467 0 2.667-1.199 2.667-2.667v-10.666c0-1.467-1.2-2.667-2.667-2.667zM13.333 2c0.125 0 0.243 0.036 0.344 0.099l-5.678 4.694-5.677-4.694c0.101-0.063 0.219-0.099 0.344-0.099h10.666zM2.667 14c-0.030 0-0.060-0.002-0.089-0.006l3.525-4.89-0.457-0.457-3.646 3.646v-9.549l6 7.256 6-7.256v9.549l-3.646-3.646-0.457 0.457 3.525 4.89c-0.029 0.004-0.059 0.006-0.088 0.006h-10.666z"></path></svg></div>
        <div style="align-items: center; padding:5px;">
        <div style="color:#929292">Email</div>
        <div>${booking.email}</div>
        </div>
    </div>
    <div style="display: flex; font-family:Arial, Helvetica, sans-serif;padding:4px">
        <div style="padding: 6px; margin: 4px;">
            <svg style="color:#929292" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-muted" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M312 320h136V56c0-13.3-10.7-24-24-24H24C10.7 32 0 42.7 0 56v400c0 13.3 10.7 24 24 24h264V344c0-13.2 10.8-24 24-24zm129 55l-98 98c-4.5 4.5-10.6 7-17 7h-6V352h128v6.1c0 6.3-2.5 12.4-7 16.9z"></path></svg></div>
        <div style="align-items: center; padding:5px;">
        <div style="color:#929292">Description</div>
        <div>${booking.desc}</div>
        </div>
    </div>
    </div>
    `;

    const msg = {
        to: 'abhikshrestha@gmail.com',
        from: 'theabhikshrestha@gmail.com',
        subject: `RE - Booking confirmation(${booking._id})`,
        html:html
    }

    try{
        const mailer = await sgMail.send(msg);
        console.log(mailer);
    }
    catch(err){
        console.log(err);
    }
}

module.exports = sendMail;