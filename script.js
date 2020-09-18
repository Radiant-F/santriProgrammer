function santriProgrammer(nama, status, asal) {
    console.log(nama, asal)
    status();
}

function status() {
    alert('Status nya adalah santri')
}
santriProgrammer('Rahmat', status, "Medan")