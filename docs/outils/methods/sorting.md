
#  常见排序算法：

## 1. 二分查找

- 二分法查找，也称折半查找，是一种在有序数组中查找特定元素的搜索算法。查找过程可以分为以下步骤：
    1. （1）首先，从有序数组的中间的元素开始搜索，如果该元素正好是目标元素（即要查找的元素），则搜索过程结束，否则进行下一步。

    2. （2）如果目标元素大于或者小于中间元素，则在数组大于或小于中间元素的那一半区域查找，然后重复第一步的操作。
    3. （3）如果某一步数组为空，则表示找不到目标元素。


```js
<!--非递归算法-->
function binary_search(arr,key){
  var low=0,
  high=arr.length-1;
  while(low<=high){
     var mid=parseInt((high+low)/2);
     if(key==arr[mid]){
        return mid;
     }else if(key>arr[mid]){
        low=mid+1;
     }else if(key<arr[mid]){
        high=mid-1;
    }else{
      return -1;
    }
  }
};
var arr=[1,2,3,4,5,6,7,8,9,10,11,23,44,86];
var result=binary_search(arr,10);
alert(result); // 9 返回目标元素的索引值
```


```js
<!--递归算法-->
function binary_search(arr,low,high,key){
  if(low>high){
    return -1;   
  }
  var mid=parseInt((high+low)/2);
  if(arr[mid]==key){
    return mid;
  }else if(arr[mid]>key){
    high=mid-1;
    return binary_search(arr,low,high,key);
  }else if(arr[mid]<key){
    low=mid+1;
    return binary_search(arr,low,high,key);
  }
};
var arr=[1,2,3,4,5,6,7,8,9,10,11,23,44,86];
var result=binary_search(arr,0,13,10);
alert(result); // 9 返回目标元素的索引值
```


## 2. 排序

### 2.1 冒泡排序

1. 比较相邻的两个元素，如果前一个比后一个大，则交换位置。

2. 第一轮的时候最后一个元素应该是最大的一个。

3. 按照步骤一的方法进行相邻两个元素的比较，这个时候由于最后一个元素已经是最大的了，所以最后一个元素不用比较。


```js
function bubble_sort(arr){
  for(var i=0;i<arr.length-1;i++){
    for(var j=0;j<arr.length-i-1;j++){
      if(arr[j]>arr[j+1]){
        var swap=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=swap;
      }
    }
  }
}

var arr=[3,1,5,7,2,4,9,6,10,8];
bubble_sort(arr);
console.log(arr);
```

### 2.2 快速排序

- 快速排序是对冒泡排序的一种改进，第一趟排序时将数据分成两部分，一部分比另一部分的所有数据都要小。然后递归调用，在两边都实行快速排序。

```js
function quick_sort(arr){
  if(arr.length<=1){
    return arr;
  }
  var pivotIndex=Math.floor(arr.length/2);
  var pivot=arr.splice(pivotIndex,1)[0];

  var left=[];
  var right=[];
  for(var i=0;i<arr.length;i++){
    if(arr[i]<pivot){
      left.push(arr[i]);
    }else{
      right.push(arr[i]);
    }
  }

  return quick_sort(left).concat([pivot],quick_sort(right));
}

var arr=[5,6,2,1,3,8,7,1,2,3,4,7];
console.log(quick_sort(arr));
```

### 2.3 插入排序
1. 从第一个元素开始，该元素可以认为已经被排序

2. 取出下一个元素，在已经排序的元素序列中从后向前扫描
3. 如果该元素（已排序）大于新元素，将该元素移到下一位置
4. 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置
5. 将新元素插入到下一位置中
6. 重复步骤2

```js
function insert_sort(arr){
  var i=1,
  j,key,len=arr.length;
  for(;i<len;i++){
    var j=i;
    var key=arr[j];
    while(--j>-1){
      if(arr[j]>key){
        arr[j+1]=arr[j];
      }else{
        break;
      }
    }

    arr[j+1]=key;
  }

  return arr;
}

insert_sort([2,34,54,2,5,1,7]);
```
