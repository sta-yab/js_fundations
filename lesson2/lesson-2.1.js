var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 // '++' перед переменной увеличивает значение на единицу и обьявляет новую переменную что в результате дает 2
d = b++; alert(d);           // 1 // '++' после переменной обьявляет переменную d c текущим значением 1, после чего увеличивает на единицу
c = (2 + ++a); alert(c);      // 5 // '++a' добавляет единицу, поэтому а будет равняться 3 и добавляет 2, что дает в результате 5
d = (2 + b++); alert(d);      // 4 // 'b++' сначала реализует операцию суммирования 2+2 = 4. Результат обьявляется в переменной, после чего b увеличивает на 1
alert(a);                    // 3 
alert(b);                    // 3 // a и b равняются 3 так как увеличивались два раза на единице каждая

