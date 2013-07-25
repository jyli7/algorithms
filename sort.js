// Helpers
var swapItems = function (items, i, j) {
	var temp = items[i];
	items[i] = items[j];
	items[j] = temp;
	return items;
}


// Selection sort
	// Pick out the smallest number, place it at beginning of loop, find second smallest, place it at 1st index, etc.

var selectionSort = function (items) {
	for (var i = 0; i < items.length; i++) {
		var minPlace = i;
		for (var j = i + 1; j < items.length; j++) {
			if (items[j] < items[minPlace]) {
				minPlace = j;
			}
		}
		items = swapItems(items, i, minPlace);
	}
	return items;
}

// Insertion sort
	// Take the leftmost number, put it in the right spot in a sorted sub-array

var insertionSort = function (items) {
	// Loop through other items
	for (var i = 1; i < items.length; i++) {
		var item = items[i];
		for (var j = i; j > 0; j--) {
			if (item > items[j - 1]) {
				break;
			}
			items[j] = items[j - 1];
		}
		items[j] = item;
	}
	return items;
}

// Bubble sort

var bubbleSort = function (items) {
	for (var i = 0; i < items.length; i++) {
		for (var j = 0; j < items.length - i; j++) {
			if (items[j] > items[j + 1]) {
				items = swapItems(items, j, j + 1);
			}
		}
	}
	return items;
}