// 格式化时间
export const dateFormat = {
    objToDate: function (date = new Date(), ch = '/') {
        if (!this._isDateObj(date)) return date

        let formatNumber = n => {
            n = n.toString()
            return n[1] ? n : '0' + n
        }
        let year = date.getFullYear(), month = date.getMonth() + 1, day = date.getDate(), hour = date.getHours(), minute = date.getMinutes(), second = date.getSeconds()
        return [[year, month, day].map(formatNumber).join(ch), [hour, minute, second].map(formatNumber).join(':')]
    },
    stampToDate: function (stamp = new Date().getTime(), ch = '/', showAll = false) {
        if (!this._isDateStamp(stamp)) return stamp

        let res = this.objToDate(new Date(Number(stamp)), ch)
        // 显示部分时间
        if (!showAll)
            return res[1]
        // 超过一天显示全部时间，否则显示部分时间
        else if (showAll == 'day') {
            if (this.stampToUnit(new Date().getTime() - Number(stamp)).d > 1) return res[0] + ' ' + res[1]
            else return res[1]
        }
    },
    stampToUnit: function (stamp = new Date().getTime()) {
        if (!this._isDateStamp(stamp)) return stamp

        return {
            s: stamp / 1000,
            m: stamp / 1000 / 60,
            h: stamp / 1000 / 60 / 60,
            d: stamp / 1000 / 60 / 60 / 24
        }
    },
    _isDateObj(date) {
        return date instanceof Date
    },
    _isDateStamp(stamp) {
        return !!(Number(stamp))
    }
}

// 封装操作localstorage本地存储的方法  模块化
export const storage = {
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value || ''));
        // localStorage.key = value;
        // localStorage[key] = value;
    },
    get(key) {
        return JSON.parse(localStorage.getItem(key));
    },
    getForIndex(index) {
        return localStorage.key(index);
    },
    getKeys() {
        let items = this.getAll();
        let keys = [];
        for (let index = 0; index < items.length; index++) {
            keys.push(items[index].key);
        }
        return keys;
    },
    getLength() {
        return localStorage.length;
    },
    getSupport() {
        return (typeof (Storage) !== "undefined") ? true : false;
    },
    remove(key) {
        localStorage.removeItem(key);
    },
    removeAll() {
        localStorage.clear();
    },
    getAll() {
        let len = localStorage.length;  // 获取长度
        let arr = new Array(); // 定义数据集
        for (var i = 0; i < len; i++) {
            // 获取key 索引从0开始
            var getKey = localStorage.key(i);
            // 获取key对应的值
            var getVal = localStorage.getItem(getKey);
            // 放进数组
            arr[i] = {
                'key': getKey,
                'val': getVal,
            }
        }
        return arr;
    }
}

// 获取具体的某个元素targetRef的滑动方向，默认是全局; 更改vue对象（this）的 scrolling 变量和 direction 变量
export const scrollDirection = (targetEl = document, operateRef = null) => {
    let startx, starty;
    //获得角度
    function getAngle(angx, angy) {
        return (Math.atan2(angy, angx) * 180) / Math.PI;
    }

    //根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
    function getDirection(startx, starty, endx, endy) {
        let angx = endx - startx;
        let angy = endy - starty;
        let result = false;

        //如果滑动距离太短
        if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
            return result;
        }

        var angle = getAngle(angx, angy);
        if (angle >= -135 && angle <= -45) {
            result = "up";
        } else if (angle > 45 && angle < 135) {
            result = "down";
        } else if (
            (angle >= 135 && angle <= 180) ||
            (angle >= -180 && angle < -135)
        ) {
            result = "left";
        } else if (angle >= -45 && angle <= 45) {
            result = "right";
        }
        console.log("滑动结果：", result)
        operateRef ? operateRef.direction = result : ""
    }
    //手指接触屏幕
    targetEl.addEventListener(
        "touchstart",
        function (e) {
            startx = e.touches[0].pageX;
            starty = e.touches[0].pageY;
        },
        false
    );
    // 手指移动
    targetEl.addEventListener(
        "touchmove",
        function () {
            operateRef ? operateRef.scrolling = true : "";
        },
        false
    );
    //手指离开屏幕
    targetEl.addEventListener(
        "touchend",
        function (e) {
            var endx, endy;
            endx = e.changedTouches[0].pageX;
            endy = e.changedTouches[0].pageY;

            setTimeout(() => {
                operateRef ? operateRef.scrolling = false : "";
            }, 300);

            getDirection(startx, starty, endx, endy);
        },
        false
    );
}