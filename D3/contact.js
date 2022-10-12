function showdata() {
    let showName = document.getElementById ('input-name').value;
    let showEmail = document.getElementById ('input-Email').value;
    let showPhone = document.getElementById ('input-Phone').value;
    let showSubject = document.getElementById ('input-Subject').value;
    let showMessage = document.getElementById ('input-message').value;

    console.log(showName);
    console.log(showEmail);
    console.log(showPhone);

    if(showName == '') {
        return alert ('Nama harus diisi')
    }else if (showEmail == '') {
        return alert ('Email harus diisi')
    }else if (showPhone == ''){
        return alert ('Nomor telfon harus diisi')
    }else if (showSubject == ''){
        return alert ('Subject harus diisi')
    }

 let emailReceiver = 'syahrulww3@gmail.com'

 let a = document.createElement('a')
 a.href = `mailto:${showEmail}?subject:${showSubject}&body=Hello,my name is ${showName},${showMessage}`
 a.click()
 
}