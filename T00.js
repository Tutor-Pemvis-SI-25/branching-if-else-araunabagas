function main() {
    var a, b, c, d;

    a = Number(window.prompt('Enter a value for a'));
    b = Number(window.prompt('Enter a value for b'));
    if (a % 2 == 0) {
        window.alert("Bilangan pertama: Genap");
    } else {
        window.alert("Bilangan pertama: Ganjil ");
    }
    if (b % 2 == 0) {
        window.alert("Bilangan kedua: Genap");
    } else {
        window.alert("Bilangan kedua: Ganjil");
    }
    if (a == b) {
        window.alert("Kedua bilangan sama besar");
    } else {
        if (a < b) {
            window.alert("Bilangan kedua lebih besar");
        } else {
            window.alert("Bilangan pertama lebih besar");
        }
    }
    if (a % 2 == 0 && b % 2 == 0) {
        c = a + b;
        window.alert("Hasil penjumlahan: " + c);
    } else {
        if (a % 2 != 0 && b % 2 != 0) {
            c = a * b;
            window.alert("Hasil perkalian: " + c);
        } else {
            window.alert("Berbeda jenis");
        }
    }
}
