class Animal{
    constructor(name,sound){
        this.name = name
        this.sound = sound
    }

    action(){
        console.log("rawr"+this.sound);
    }
}  
/*
    1. git init
        -> menginisialisasi project git baru
    2. git add namafile.extension
        -> memindahkan file kedalam staging area
    3. git commit -m "commit message"
        -> menambahkan berita acara
        -> memindahkan perubahan kedalam local repository
    4. git status
        -> untuk melihat status perubahan
    5. git remote add origin link github
        -> menambahkan link remote repository
    6. git remote -v
        -> melihat remote yang ada
    7. git push -u origin master(master tergantung dari branch)
        -> upload dari local repository ke remote repository
    8. git pull
        -> download dari remote repository ke local repository
    9. git branch
        -> untuk melihat daftar branch yang tersedia

 */