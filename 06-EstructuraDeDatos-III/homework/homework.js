'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus letiantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

////////////////////////// size

BinarySearchTree.prototype.size = function () {
  if (!this.left && !this.right) return 1;
  if (!this.left && this.right) return 1 + this.right.size();
  if (this.left && !this.right) return 1 + this.left.size();
  return 1 + this.left.size() + this.right.size();
};
////////////////////////// insert

BinarySearchTree.prototype.insert = function (value) {
  let nuevo = new BinarySearchTree(value);
  if (value > this.value) {
    if (!this.right) {
      this.right = nuevo;
    } else {
      this.right.insert(value);
    }
  } else {
    if (!this.left) {
      this.left = nuevo;
    } else {
      this.left.insert(value);
    }
  }
};

////////////////////////// contains

BinarySearchTree.prototype.contains = function (x) {
  if (this.value === null) {
    return false;
  } else if (this.value === x) {
    return true;
  }
  if (x < this.value) {
    if (this.left !== null) {
      if (this.left.value === x) {
        return true;
      } else {
        return this.left.contains(x);
      }
    } else {
      return false;
    }
  } else if (x > this.value) {
    if (this.right !== null) {
      if (this.right.value === x) {
        return true;
      } else {
        return this.right.contains(x);
      }
    } else {
      return false;
    }
  }
};

///////////////////// breadthFirstForEach

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  if (order === 'in-order' || order === undefined) {
    if (this.left && this.left.depthFirstForEach(cb, order));
    cb(this.value);
    if (this.right && this.right.depthFirstForEach(cb, order));
  }
  if (order === 'pre-order') {
    if (this.left && this.left.depthFirstForEach(cb, order));
    if (this.right && this.right.depthFirstForEach(cb, order));
    cb(this.value);
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, value = []) {
  if (this.left) value.push(this.left);

  if (this.right) value.push(this.righ);

  cb (this.value);
  
  if (value.length > 0) {
    value.shift().breadthFirstForEach(cb, value);
  }
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
