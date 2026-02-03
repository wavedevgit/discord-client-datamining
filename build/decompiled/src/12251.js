// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function() {
        var0 = undefined;
        return var0;
    };
    var2 = function arg0() {
        var1 = this;
        var0 = arg0;
        var1._tree = var0;
        var0 = new Array(0);
        var1._ancestors = var0;
        var0 = null;
        var1._cursor = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot0 = var2;
    var4 = var1.prototype;
    var3 = function() { // Environment: var0
        var1 = this;
        var0 = null;
        var1._root = var0;
        var0 = 0;
        var1.size = var0;
        var0 = undefined;
        return var0;
    };
    var4.clear = var3;
    var4 = var1.prototype;
    var3 = function(arg0) { // Environment: var0
        _fun93730: for (var _fun93730_ip = 0;;) switch (_fun93730_ip) {
            case 0:
                var5 = arg0;
                var4 = this;
                var3 = var4._root;
                var2 = 0;
                var1 = null;
                if (!(var1 !== var3)) {
                    _fun93730_ip = 62;
                    continue _fun93730
                }
            case 19:
                var6 = var4._comparator;
                var0 = var3.data;
                var6 = var6.bind(var4)(var5, var0);
                var0 = var3;
                if (!(var2 !== var6)) {
                    _fun93730_ip = 64;
                    continue _fun93730
                }
            case 43:
                var7 = var0.get_child;
                var6 = var6 > var2;
                var3 = var7.bind(var0)(var6);
                if (var1 !== var3) {
                    _fun93730_ip = 19;
                    continue _fun93730
                }
            case 62:
                return var1;
            case 64:
                var0 = var0.data;
                return var0;
        }
    };
    var4.find = var3;
    var4 = var1.prototype;
    var3 = function(arg0) { // Environment: var0
        _fun93731: for (var _fun93731_ip = 0;;) switch (_fun93731_ip) {
            case 0:
                var6 = arg0;
                var5 = this;
                var4 = var5._root;
                var0 = var5.iterator;
                var0 = var0.bind(var5)();
                var3 = 0;
                var2 = null;
                if (!(var2 !== var4)) {
                    _fun93731_ip = 88;
                    continue _fun93731
                }
            case 29:
                var7 = var5._comparator;
                var1 = var4.data;
                var7 = var7.bind(var5)(var6, var1);
                var1 = var4;
                if (!(var3 !== var7)) {
                    _fun93731_ip = 90;
                    continue _fun93731
                }
            case 53:
                var9 = var0._ancestors;
                var8 = var9.push;
                var8 = var8.bind(var9)(var1);
                var8 = var1.get_child;
                var7 = var7 > var3;
                var4 = var8.bind(var1)(var7);
                if (var2 !== var4) {
                    _fun93731_ip = 29;
                    continue _fun93731
                }
            case 88:
                return var2;
            case 90:
                var0._cursor = var1;
                return var0;
        }
    };
    var4.findIter = var3;
    var4 = var1.prototype;
    var3 = function(arg0) { // Environment: var0
        _fun93732: for (var _fun93732_ip = 0;;) switch (_fun93732_ip) {
            case 0:
                var8 = arg0;
                var1 = this;
                var3 = var1._root;
                var0 = var1.iterator;
                var0 = var0.bind(var1)();
                var7 = var1._comparator;
                var5 = 0;
                var2 = null;
                var6 = undefined;
                if (!(var2 !== var3)) {
                    _fun93732_ip = 93;
                    continue _fun93732
                }
            case 37:
                var1 = var3.data;
                var4 = var7.bind(var6)(var8, var1);
                var1 = var3;
                if (!(var5 !== var4)) {
                    _fun93732_ip = 184;
                    continue _fun93732
                }
            case 58:
                var10 = var0._ancestors;
                var9 = var10.push;
                var9 = var9.bind(var10)(var1);
                var9 = var1.get_child;
                var4 = var4 > var5;
                var3 = var9.bind(var1)(var4);
                if (var2 !== var3) {
                    _fun93732_ip = 37;
                    continue _fun93732
                }
            case 93:
                var2 = var0._ancestors;
                var3 = var2.length;
                var2 = 1;
                var4 = var3 - var2;
                if (!(var4 >= var5)) {
                    _fun93732_ip = 150;
                    continue _fun93732
                }
            case 115:
                var2 = var0._ancestors;
                var2 = var2[var4];
                var3 = var2.data;
                var9 = var7.bind(var6)(var8, var3);
                var3 = var4;
                if (!(!(var9 < var5))) {
                    _fun93732_ip = 164;
                    continue _fun93732
                }
            case 143:
                var4 = var3 - 1;
                if (var4 >= var5) {
                    _fun93732_ip = 115;
                    continue _fun93732
                }
            case 150:
                var4 = var0._ancestors;
                var4.length = var5;
                return var0;
            case 164:
                var0._cursor = var2;
                var2 = var0._ancestors;
                var2.length = var3;
                return var0;
            case 184:
                var0._cursor = var1;
                return var0;
        }
    };
    var4.lowerBound = var3;
    var4 = var1.prototype;
    var3 = function(arg0) { // Environment: var0
        _fun93733: for (var _fun93733_ip = 0;;) switch (_fun93733_ip) {
            case 0:
                var6 = arg0;
                var1 = this;
                var0 = var1.lowerBound;
                var0 = var0.bind(var1)(var6);
                var5 = var1._comparator;
                var1 = var0.data;
                var1 = var1.bind(var0)();
                var4 = null;
                if (!(var4 !== var1)) {
                    _fun93733_ip = 101;
                    continue _fun93733
                }
            case 37:
                var1 = var0.data;
                var1 = var1.bind(var0)();
                var3 = undefined;
                var1 = var5.bind(var3)(var1, var6);
                var2 = 0;
                if (!(var2 === var1)) {
                    _fun93733_ip = 101;
                    continue _fun93733
                }
            case 60:
                var1 = var0.next;
                var1 = var1.bind(var0)();
                var1 = var0.data;
                var1 = var1.bind(var0)();
                if (!(var4 !== var1)) {
                    _fun93733_ip = 101;
                    continue _fun93733
                }
            case 82:
                var1 = var0.data;
                var1 = var1.bind(var0)();
                var1 = var5.bind(var3)(var1, var6);
                if (var2 === var1) {
                    _fun93733_ip = 60;
                    continue _fun93733
                }
            case 101:
                return var0;
        }
    };
    var4.upperBound = var3;
    var4 = var1.prototype;
    var3 = function() { // Environment: var0
        _fun93734: for (var _fun93734_ip = 0;;) switch (_fun93734_ip) {
            case 0:
                var0 = this;
                var1 = var0._root;
                var0 = null;
                if (!(var0 !== var1)) {
                    _fun93734_ip = 56;
                    continue _fun93734
                }
            case 14:
                var2 = var1.left;
                var3 = var1;
                var1 = var3;
                if (!(var0 !== var2)) {
                    _fun93734_ip = 49;
                    continue _fun93734
                }
            case 29:
                var4 = var3.left;
                var2 = var4.left;
                var3 = var4;
                var1 = var3;
                if (var0 !== var2) {
                    _fun93734_ip = 29;
                    continue _fun93734
                }
            case 49:
                var1 = var1.data;
                return var1;
            case 56:
                return var0;
        }
    };
    var4.min = var3;
    var4 = var1.prototype;
    var3 = function() { // Environment: var0
        _fun93735: for (var _fun93735_ip = 0;;) switch (_fun93735_ip) {
            case 0:
                var0 = this;
                var1 = var0._root;
                var0 = null;
                if (!(var0 !== var1)) {
                    _fun93735_ip = 56;
                    continue _fun93735
                }
            case 14:
                var2 = var1.right;
                var3 = var1;
                var1 = var3;
                if (!(var0 !== var2)) {
                    _fun93735_ip = 49;
                    continue _fun93735
                }
            case 29:
                var4 = var3.right;
                var2 = var4.right;
                var3 = var4;
                var1 = var3;
                if (var0 !== var2) {
                    _fun93735_ip = 29;
                    continue _fun93735
                }
            case 49:
                var1 = var1.data;
                return var1;
            case 56:
                return var0;
        }
    };
    var4.max = var3;
    var4 = var1.prototype;
    var3 = function() { // Environment: var0
        var2 = _closure1_slot0;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = this;
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var4.iterator = var3;
    var4 = var1.prototype;
    var3 = function(arg0) { // Environment: var0
        _fun93737: for (var _fun93737_ip = 0;;) switch (_fun93737_ip) {
            case 0:
                var4 = arg0;
                var1 = this;
                var0 = var1.iterator;
                var3 = var0.bind(var1)();
                var0 = var3.next;
                var1 = var0.bind(var3)();
                var0 = undefined;
                var2 = null;
                if (!(var2 !== var1)) {
                    _fun93737_ip = 50;
                    continue _fun93737
                }
            case 32:
                var5 = var4.bind(var0)(var1);
                var5 = var3.next;
                var1 = var5.bind(var3)();
                if (var2 !== var1) {
                    _fun93737_ip = 32;
                    continue _fun93737
                }
            case 50:
                return var0;
        }
    };
    var4.each = var3;
    var4 = var1.prototype;
    var3 = function(arg0) { // Environment: var0
        _fun93738: for (var _fun93738_ip = 0;;) switch (_fun93738_ip) {
            case 0:
                var4 = arg0;
                var1 = this;
                var0 = var1.iterator;
                var3 = var0.bind(var1)();
                var0 = var3.prev;
                var1 = var0.bind(var3)();
                var0 = undefined;
                var2 = null;
                if (!(var2 !== var1)) {
                    _fun93738_ip = 52;
                    continue _fun93738
                }
            case 33:
                var5 = var4.bind(var0)(var1);
                var5 = var3.prev;
                var1 = var5.bind(var3)();
                if (var2 !== var1) {
                    _fun93738_ip = 33;
                    continue _fun93738
                }
            case 52:
                return var0;
        }
    };
    var4.reach = var3;
    var4 = var2.prototype;
    var3 = function() { // Environment: var0
        _fun93739: for (var _fun93739_ip = 0;;) switch (_fun93739_ip) {
            case 0:
                var1 = this;
                var2 = var1._cursor;
                var0 = null;
                if (!(var0 !== var2)) {
                    _fun93739_ip = 25;
                    continue _fun93739
                }
            case 14:
                var1 = var1._cursor;
                var0 = var1.data;
            case 25:
                return var0;
        }
    };
    var4.data = var3;
    var4 = var2.prototype;
    var3 = function() { // Environment: var0
        _fun93740: for (var _fun93740_ip = 0;;) switch (_fun93740_ip) {
            case 0:
                var1 = this;
                var2 = var1._cursor;
                var0 = null;
                if (!(var0 !== var2)) {
                    _fun93740_ip = 145;
                    continue _fun93740
                }
            case 17:
                var2 = var1._cursor;
                var2 = var2.right;
                if (!(var0 !== var2)) {
                    _fun93740_ip = 78;
                    continue _fun93740
                }
            case 32:
                var4 = var1._ancestors;
                var3 = var4.push;
                var2 = var1._cursor;
                var2 = var3.bind(var4)(var2);
                var3 = var1._minNode;
                var2 = var1._cursor;
                var2 = var2.right;
                var2 = var3.bind(var1)(var2);
                _fun93740_ip = 172;
                continue _fun93740;
            case 78:
                var3 = var1._cursor;
                var2 = var1._ancestors;
                var2 = var2.length;
                if (var2) {
                    _fun93740_ip = 106;
                    continue _fun93740
                }
            case 98:
                var1._cursor = var0;
                _fun93740_ip = 172;
                continue _fun93740;
            case 106:
                var4 = var1._ancestors;
                var2 = var4.pop;
                var2 = var2.bind(var4)();
                var1._cursor = var2;
                var2 = var1._cursor;
                var2 = var2.right;
                if (var2 === var3) {
                    _fun93740_ip = 78;
                    continue _fun93740
                }
            case 143:
                _fun93740_ip = 172;
                continue _fun93740;
            case 145:
                var2 = var1._tree;
                var3 = var2._root;
                if (!(var0 !== var3)) {
                    _fun93740_ip = 172;
                    continue _fun93740
                }
            case 161:
                var2 = var1._minNode;
                var2 = var2.bind(var1)(var3);
            case 172:
                var2 = var1._cursor;
                var0 = null;
                if (!(var0 !== var2)) {
                    _fun93740_ip = 195;
                    continue _fun93740
                }
            case 184:
                var1 = var1._cursor;
                var0 = var1.data;
            case 195:
                return var0;
        }
    };
    var4.next = var3;
    var4 = var2.prototype;
    var3 = function() { // Environment: var0
        _fun93741: for (var _fun93741_ip = 0;;) switch (_fun93741_ip) {
            case 0:
                var1 = this;
                var2 = var1._cursor;
                var0 = null;
                if (!(var0 !== var2)) {
                    _fun93741_ip = 145;
                    continue _fun93741
                }
            case 17:
                var2 = var1._cursor;
                var2 = var2.left;
                if (!(var0 !== var2)) {
                    _fun93741_ip = 78;
                    continue _fun93741
                }
            case 32:
                var4 = var1._ancestors;
                var3 = var4.push;
                var2 = var1._cursor;
                var2 = var3.bind(var4)(var2);
                var3 = var1._maxNode;
                var2 = var1._cursor;
                var2 = var2.left;
                var2 = var3.bind(var1)(var2);
                _fun93741_ip = 172;
                continue _fun93741;
            case 78:
                var3 = var1._cursor;
                var2 = var1._ancestors;
                var2 = var2.length;
                if (var2) {
                    _fun93741_ip = 106;
                    continue _fun93741
                }
            case 98:
                var1._cursor = var0;
                _fun93741_ip = 172;
                continue _fun93741;
            case 106:
                var4 = var1._ancestors;
                var2 = var4.pop;
                var2 = var2.bind(var4)();
                var1._cursor = var2;
                var2 = var1._cursor;
                var2 = var2.left;
                if (var2 === var3) {
                    _fun93741_ip = 78;
                    continue _fun93741
                }
            case 143:
                _fun93741_ip = 172;
                continue _fun93741;
            case 145:
                var2 = var1._tree;
                var3 = var2._root;
                if (!(var0 !== var3)) {
                    _fun93741_ip = 172;
                    continue _fun93741
                }
            case 161:
                var2 = var1._maxNode;
                var2 = var2.bind(var1)(var3);
            case 172:
                var2 = var1._cursor;
                var0 = null;
                if (!(var0 !== var2)) {
                    _fun93741_ip = 195;
                    continue _fun93741
                }
            case 184:
                var1 = var1._cursor;
                var0 = var1.data;
            case 195:
                return var0;
        }
    };
    var4.prev = var3;
    var4 = var2.prototype;
    var3 = function(arg0) { // Environment: var0
        _fun93742: for (var _fun93742_ip = 0;;) switch (_fun93742_ip) {
            case 0:
                var0 = arg0;
                var1 = this;
                var2 = var0.left;
                var4 = null;
                var3 = var0;
                var0 = var3;
                if (!(var4 !== var2)) {
                    _fun93742_ip = 58;
                    continue _fun93742
                }
            case 22:
                var5 = var1._ancestors;
                var2 = var5.push;
                var2 = var2.bind(var5)(var3);
                var5 = var3.left;
                var2 = var5.left;
                var3 = var5;
                var0 = var3;
                if (var4 !== var2) {
                    _fun93742_ip = 22;
                    continue _fun93742
                }
            case 58:
                var1._cursor = var0;
                var0 = undefined;
                return var0;
        }
    };
    var4._minNode = var3;
    var2 = var2.prototype;
    var0 = function(arg0) { // Environment: var0
        _fun93743: for (var _fun93743_ip = 0;;) switch (_fun93743_ip) {
            case 0:
                var0 = arg0;
                var1 = this;
                var2 = var0.right;
                var4 = null;
                var3 = var0;
                var0 = var3;
                if (!(var4 !== var2)) {
                    _fun93743_ip = 58;
                    continue _fun93743
                }
            case 22:
                var5 = var1._ancestors;
                var2 = var5.push;
                var2 = var2.bind(var5)(var3);
                var5 = var3.right;
                var2 = var5.right;
                var3 = var5;
                var0 = var3;
                if (var4 !== var2) {
                    _fun93743_ip = 22;
                    continue _fun93743
                }
            case 58:
                var1._cursor = var0;
                var0 = undefined;
                return var0;
        }
    };
    var2._maxNode = var0;
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);