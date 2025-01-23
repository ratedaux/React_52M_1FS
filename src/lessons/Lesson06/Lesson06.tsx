import './styles.css'

function Lesson06(){
     // Типы переменных указываются после названия через двоеточие
  // 1. Типизация строк - string
  let userName: string = "Tom";
  userName = 'Mary';
  // userName = true;
  userName = '';
  userName = 'John';
  let fullName: string = `${userName} Smith`;
  let result: string = 1 + 2 + '3';
  console.log(result);

  // 2. Типизация чисел - number
  let luckyNumber: number = 23;
  // luckyNumber = '2';
  luckyNumber = Infinity;
  luckyNumber = 98.3;
  luckyNumber = -10;
  luckyNumber = NaN;
  // luckyNumber = 23 - '4';

  // 3. Типизация логического типа - boolean
  let isAdmin: boolean = true;
  isAdmin = 2 > 1;
  isAdmin = !1;
  console.log(isAdmin);
  isAdmin = userName === 'John';

   // 4. Типизация null - null
  let emptyValue: null = null;
  // emptyValue = 0;
  // emptyValue = undefined;

  // 5. Типизация undefined - undefined
  let data: undefined = undefined;
  // data = null;
  // data = 0;

   // 6. Типизация BigInt - bigint
  let bigN: bigint = 123778889002n;
  bigN = 1233333333333333333333333333333n;
  // bigN = 123;

   // 7. Типизация Symbol - symbol
  let uniq: symbol = Symbol('description');
  // uniq = 23;
  // {
  //   [uniq]: 123
  // }

   // 8. Типизация массива - указываем тип данных, которые будет содержать массив, затем квадратные скобки
  const colors: string[] = ['red', 'black', '123'];
  // colors.push(true);
  // colors[0] = 0001;
  colors[2] = 'green';
  console.log(colors);

   // 9. Кортеж (tupel) - указываем в квадратных скобках структуру массива, а вместо элементов подставляем типы
  const fruits: [string, number] = ['apple', 4];
  fruits.push('cherry');
  console.log(fruits);

   // 10. Типизация возвращаемого функцией значения - тип подставляется после круглых скобок
  // - если функция ничего не возвращает - типизируем возврат как void
  const showMessage = (): void => {
    console.log('Hello');
    colors[1] = 'pink'
  }
  // - если функция возвращает значение, то после двоеточия мы указываем нужный тип
  const getSum = (): number => {
    // const sum: string = '2' + '4';
    const sum: number = 2 + 4;
    return sum
  }

  // 11. Типизация параметров функции - тип подставляется после каждого параметра через :
  const getUserData = (firstName: string, age: number = 18): string => {
    return `${firstName} - ${age}`
  }
  console.log(getUserData('Nick', 23));
  getUserData('Tom', 34)
  console.log(getUserData('Mary'));

  // 12. Автоматическое определение типов, происходит только при задании значения, так как тип может быть сразу определен
  let name = 'Bob';
  // name = true;

  const numbers = [2, 3, 54, 9];
  numbers.push(23);
  // numbers.push('34');

  const getNumber = (num = 2) => {
    return num
  }

  // 13. Union типы, позволяет указывать несколько типов - типы указываются через знак |
  let color: string | number = 'red';
  color = 2341;
  // color = true;
  const example: (string | boolean)[] = ['fruit', true]

    return(
        <div className='lesson06-wrapper'>
            Lesson06-Typescript Introduction
            {fullName}
        </div>
    )
}

export default Lesson06;