let userpasword = 2011
let balance = 50000

let lang = prompt("1) ozbek, 2) rus")

// 🇺🇿 O'ZBEK
if(lang == 1){
    let password = +prompt("Kodingizni kiriting")

    if(password == userpasword){

        let servis = prompt("1) pul yechish  2) balansni ko‘rish")

      
        if(servis == 1){
            let manevalue = +prompt("Qancha pul yechamiz?")

            if(balance >= manevalue){
                let komissiya = manevalue * 0.01
                balance = balance - manevalue - komissiya

                alert("Siz " + manevalue + " so'm yechdingiz.\nKomissiya: " + komissiya + "\nQolgan balans: " + balance)
            }
            else{
                alert("Balansda pul yetarli emas")
            }
        }

   
        else if(servis == 2){
            alert("Sizning balansingiz: " + balance + " so'm")
        }

    } else{
        alert("Parol noto‘g‘ri")
    }
}


// 🇷🇺 RUS
else if(lang == 2){
    let password = +prompt("Введите ваш код")

    if(password == userpasword){

        let servis = prompt("1) снять деньги  2) посмотреть баланс")


        if(servis == 1){
            let manevalue = +prompt("Сколько денег снять?")

            if(balance >= manevalue){
                let komissiya = manevalue * 0.01
                balance = balance - manevalue - komissiya

                alert("Вы сняли " + manevalue + " сум.\nКомиссия: " + komissiya + "\nОстаток: " + balance)
            }
            else{
                alert("Недостаточно средств")
            }
        }

  
        else if(servis == 2){
            alert("Ваш баланс: " + balance + " сум")
        }

    } else{
        alert("Неверный пароль")
    }
}
