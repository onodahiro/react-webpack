// Необходимо реализовать класс Categories c 3мя методами: getChildren(), getParent() и getPath().

// В конструктор этого класса передается описание иерархичной структуры категорий в виде массива из элементов, описывающих id категории и id его родительской категории. То есть элемент массива выглядит так {id: 14, parent: 3}.

// Поля id и parent строго целочисленные
// В поле parent указывается id родительской категории
// Самого корневого узла с id 0 в массиве нет
// Например, в конструктор может быть передан следующий массив: [{id:2, parent:0}, {id: 3, parent:2}, {id: 4, parent:3}, {id: 5, parent:3}]

// метод getChildren() должен по переданной в параметры id категории вернуть упорядоченный массив, состоящий из id дочерних категорий.
// Например: вызов метода obj.getChildren(3) на массиве выше, должен вернуть [4, 5]
// метод getParent() должен по переданной в параметры id категории вернуть id родительской категории или undefined если переданная категория не имеет родительской.
// Например: вызов метода obj.getParent(2) на массиве выше, должен вернуть 1
// метод getPath() должен по переданной в параметры категории вернуть путь от корня дерева категорий, до текущей переданной, включая ее. Путь представляет из себя массив из id узлов начиная от корня.
// Например: вызов метода obj.getPath(4) на массиве выше, должен вернуть [0, 2, 3, 4]

// Напишите свой код тут >>>

// class Categories  {
//    constructor(arr) {
//     this.arr = arr;
//   	}
  
// 	getChildren(e) {
//     	return this.arr.filter(el => el.parent === e).map(el => el.id);
// 	}

// 	getParent() {
//     	return this.arr.find((el) => el.id === e)?.parent;
// 	}

// 	getPath() {
//     return 'dddd';
// 	}

// }
// // <<<

// // Не меняйте код в этом блоке >>>
// const main = async (conf, test) => {
//      const categories = new Categories(conf);

//      const children = categories.getChildren(test.parent);
//      process.stdout.write(children + '\n');

//      const parent = categories.getParent(test.category);
//      process.stdout.write(parent + '\n');

//      const path = categories.getPath(test.category);
//      process.stdout.write(path + '\n');
// }


// let cnt, res;
// process.stdin.on('data', data => {
//      data = JSON.parse(data.slice(1, -1));

//      main(data.conf, data.test);
// });

// export default Categories;