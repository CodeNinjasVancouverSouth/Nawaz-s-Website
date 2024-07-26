

async function getAvailableTourDates() {
    let req = fetch(`https://live.childcarecrm.com/form?formId=b42a0ab3-0e2f-443b-ba55-bed7e2c55200&customerId=f1e0c921c46684f267d2eb52aa13f518&centerId=${ccrmId}`)
    let res = await req;
    return res.json()
}

const leadReq = await fetch(`https://live.childcarecrm.com/portal/index/forms/tour-booking?customerId=f1e0c921c46684f267d2eb52aa13f518&formId=b42a0ab3-0e2f-443b-ba55-bed7e2c55200&cid=${centerInfo.ccrmId}`, {
    "headers": {
      "accept": "*/*",
      "content-type": "multipart/form-data; boundary=----WebKitFormBoundarydmFkf657BtDEwxnx",
    },
    "body": `------WebKitFormBoundarydmFkf657BtDEwxnx\r\nContent-Disposition: form-data; name=\"tour_booking_dynamic_form[tourTime][time]\"\r\n\r\n${form.data.selectedTourDate}\r\n------WebKitFormBoundarydmFkf657BtDEwxnx\r\nContent-Disposition: form-data; name=\"tour_booking_dynamic_form[lead][firstName]\"\r\n\r\n${form.data.parentFirstName}\r\n------WebKitFormBoundarydmFkf657BtDEwxnx\r\nContent-Disposition: form-data; name=\"tour_booking_dynamic_form[lead][lastName]\"\r\n\r\n${form.data.parentLastName}\r\n------WebKitFormBoundarydmFkf657BtDEwxnx\r\nContent-Disposition: form-data; name=\"tour_booking_dynamic_form[lead][phone]\"\r\n\r\n${form.data.parentPhone}\r\n------WebKitFormBoundarydmFkf657BtDEwxnx\r\nContent-Disposition: form-data; name=\"tour_booking_dynamic_form[lead][email]\"\r\n\r\n${form.data.parentEmail}\r\n------WebKitFormBoundarydmFkf657BtDEwxnx\r\nContent-Disposition: form-data; name=\"tour_booking_dynamic_form[lead][custom-value-1][]\"\r\n\r\n1\r\n------WebKitFormBoundarydmFkf657BtDEwxnx\r\nContent-Disposition: form-data; name=\"tour_booking_dynamic_form[lead][childInfo1][childFirstName]\"\r\n\r\n${form.data.childFirstName}\\r\n------WebKitFormBoundarydmFkf657BtDEwxnx\r\nContent-Disposition: form-data; name=\"tour_booking_dynamic_form[lead][childInfo1][childLastName]\"\r\n\r\n${form.data.childLastName}\r\n------WebKitFormBoundarydmFkf657BtDEwxnx\r\nContent-Disposition: form-data; name=\"tour_booking_dynamic_form[lead][childInfo1][childDob][year]\"\r\n\r\n${form.data.childBirthYear}\r\n------WebKitFormBoundarydmFkf657BtDEwxnx\r\nContent-Disposition: form-data; name=\"tour_booking_dynamic_form[lead][childInfo1][childDob][month]\"\r\n\r\n${form.data.childBirthMonth}\r\n------WebKitFormBoundarydmFkf657BtDEwxnx\r\nContent-Disposition: form-data; name=\"tour_booking_dynamic_form[lead][childInfo1][childDob][day]\"\r\n\r\n${form.data.childBirthDay}\r\n------WebKitFormBoundarydmFkf657BtDEwxnx\r\nContent-Disposition: form-data; name=\"tour_booking_dynamic_form[lead][comments]\"\r\n\r\n${form.data.comments}\r\n`,
    method: "POST"
  });