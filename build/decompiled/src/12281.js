// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function() { // Original name: TreeBase, environment: var0
        var0 = undefined;
        return var0;
    };
    var2 = function(arg0) { // Original name: Iterator, environment: var0
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
        _fun94393: for (var _fun94393_ip = 0;;) switch (_fun94393_ip) {
            case 0:
                var5 = arg0;
                var4 = this;
                var3 = var4._root;
                var2 = 0;
                var1 = null;
                if (!(var1 !== var3)) {
                    _fun94393_ip = 62;
                    continue _fun94393
                }
            case 19:
                var6 = var4._comparator;
                var0 = var3.data;
                var6 = var6.bind(var4)(var5, var0);
                var0 = var3;
                if (!(var2 !== var6)) {
                    _fun94393_ip = 64;
                    continue _fun94393
                }
            case 43:
                var7 = var0.get_child;
                var6 = var6 > var2;
                var3 = var7.bind(var0)(var6);
                if (var1 !== var3) {
                    _fun94393_ip = 19;
                    continue _fun94393
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
        _fun94394: for (var _fun94394_ip = 0;;) switch (_fun94394_ip) {
            case 0:
                var6 = arg0;
                var5 = this;
                var4 = var5._root;
                var0 = var5.iterator;
                var0 = var0.bind(var5)();
                var3 = 0;
                var2 = null;
                if (!(var2 !== var4)) {
                    _fun94394_ip = 87;
                    continue _fun94394
                }
            case 28:
                var7 = var5._comparator;
                var1 = var4.data;
                var7 = var7.bind(var5)(var6, var1);
                var1 = var4;
                if (!(var3 !== var7)) {
                    _fun94394_ip = 89;
                    continue _fun94394
                }
            case 52:
                var9 = var0._ancestors;
                var8 = var9.push;
                var8 = var8.bind(var9)(var1);
                var8 = var1.get_child;
                var7 = var7 > var3;
                var4 = var8.bind(var1)(var7);
                if (var2 !== var4) {
                    _fun94394_ip = 28;
                    continue _fun94394
                }
            case 87:
                return var2;
            case 89:
                var0._cursor = var1;
                return var0;
        }
    };
    var4.findIter = var3;
    var4 = var1.prototype;
    var3 = function(arg0) { // Environment: var0
        _fun94395: for (var _fun94395_ip = 0;;) switch (_fun94395_ip) {
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
                    _fun94395_ip = 92;
                    continue _fun94395
                }
            case 36:
                var1 = var3.data;
                var4 = var7.bind(var6)(var8, var1);
                var1 = var3;
                if (!(var5 !== var4)) {
                    _fun94395_ip = 183;
                    continue _fun94395
                }
            case 57:
                var10 = var0._ancestors;
                var9 = var10.push;
                var9 = var9.bind(var10)(var1);
                var9 = var1.get_child;
                var4 = var4 > var5;
                var3 = var9.bind(var1)(var4);
                if (var2 !== var3) {
                    _fun94395_ip = 36;
                    continue _fun94395
                }
            case 92:
                var2 = var0._ancestors;
                var3 = var2.length;
                var2 = 1;
                var4 = var3 - var2;
                if (!(var4 >= var5)) {
                    _fun94395_ip = 149;
                    continue _fun94395
                }
            case 114:
                var2 = var0._ancestors;
                var2 = var2[var4];
                var3 = var2.data;
                var9 = var7.bind(var6)(var8, var3);
                var3 = var4;
                if (!(!(var9 < var5))) {
                    _fun94395_ip = 163;
                    continue _fun94395
                }
            case 142:
                var4 = var3 - 1;
                if (var4 >= var5) {
                    _fun94395_ip = 114;
                    continue _fun94395
                }
            case 149:
                var4 = var0._ancestors;
                var4.length = var5;
                return var0;
            case 163:
                var0._cursor = var2;
                var2 = var0._ancestors;
                var2.length = var3;
                return var0;
            case 183:
                var0._cursor = var1;
                return var0;
        }
    };
    var4.lowerBound = var3;
    var4 = var1.prototype;
    var3 = function(arg0) { // Environment: var0
        _fun94396: for (var _fun94396_ip = 0;;) switch (_fun94396_ip) {
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
                    _fun94396_ip = 101;
                    continue _fun94396
                }
            case 37:
                var1 = var0.data;
                var1 = var1.bind(var0)();
                var3 = undefined;
                var1 = var5.bind(var3)(var1, var6);
                var2 = 0;
                if (!(var2 === var1)) {
                    _fun94396_ip = 101;
                    continue _fun94396
                }
            case 60:
                var1 = var0.next;
                var1 = var1.bind(var0)();
                var1 = var0.data;
                var1 = var1.bind(var0)();
                if (!(var4 !== var1)) {
                    _fun94396_ip = 101;
                    continue _fun94396
                }
            case 82:
                var1 = var0.data;
                var1 = var1.bind(var0)();
                var1 = var5.bind(var3)(var1, var6);
                if (var2 === var1) {
                    _fun94396_ip = 60;
                    continue _fun94396
                }
            case 101:
                return var0;
        }
    };
    var4.upperBound = var3;
    var4 = var1.prototype;
    var3 = function() { // Environment: var0
        _fun94397: for (var _fun94397_ip = 0;;) switch (_fun94397_ip) {
            case 0:
                var0 = this;
                var1 = var0._root;
                var0 = null;
                if (!(var0 !== var1)) {
                    _fun94397_ip = 56;
                    continue _fun94397
                }
            case 14:
                var2 = var1.left;
                var3 = var1;
                var1 = var3;
                if (!(var0 !== var2)) {
                    _fun94397_ip = 49;
                    continue _fun94397
                }
            case 29:
                var4 = var3.left;
                var2 = var4.left;
                var3 = var4;
                var1 = var3;
                if (var0 !== var2) {
                    _fun94397_ip = 29;
                    continue _fun94397
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
        _fun94398: for (var _fun94398_ip = 0;;) switch (_fun94398_ip) {
            case 0:
                var0 = this;
                var1 = var0._root;
                var0 = null;
                if (!(var0 !== var1)) {
                    _fun94398_ip = 56;
                    continue _fun94398
                }
            case 14:
                var2 = var1.right;
                var3 = var1;
                var1 = var3;
                if (!(var0 !== var2)) {
                    _fun94398_ip = 49;
                    continue _fun94398
                }
            case 29:
                var4 = var3.right;
                var2 = var4.right;
                var3 = var4;
                var1 = var3;
                if (var0 !== var2) {
                    _fun94398_ip = 29;
                    continue _fun94398
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
        _fun94400: for (var _fun94400_ip = 0;;) switch (_fun94400_ip) {
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
                    _fun94400_ip = 49;
                    continue _fun94400
                }
            case 31:
                var5 = var4.bind(var0)(var1);
                var5 = var3.next;
                var1 = var5.bind(var3)();
                if (var2 !== var1) {
                    _fun94400_ip = 31;
                    continue _fun94400
                }
            case 49:
                return var0;
        }
    };
    var4.each = var3;
    var4 = var1.prototype;
    var3 = function(arg0) { // Environment: var0
        _fun94401: for (var _fun94401_ip = 0;;) switch (_fun94401_ip) {
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
                    _fun94401_ip = 51;
                    continue _fun94401
                }
            case 32:
                var5 = var4.bind(var0)(var1);
                var5 = var3.prev;
                var1 = var5.bind(var3)();
                if (var2 !== var1) {
                    _fun94401_ip = 32;
                    continue _fun94401
                }
            case 51:
                return var0;
        }
    };
    var4.reach = var3;
    var4 = var2.prototype;
    var3 = function() { // Environment: var0
        _fun94402: for (var _fun94402_ip = 0;;) switch (_fun94402_ip) {
            case 0:
                var1 = this;
                var2 = var1._cursor;
                var0 = null;
                if (!(var0 !== var2)) {
                    _fun94402_ip = 25;
                    continue _fun94402
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
        _fun94403: for (var _fun94403_ip = 0;;) switch (_fun94403_ip) {
            case 0:
                var1 = this;
                var2 = var1._cursor;
                var0 = null;
                if (!(var0 !== var2)) {
                    _fun94403_ip = 145;
                    continue _fun94403
                }
            case 17:
                var2 = var1._cursor;
                var2 = var2.right;
                if (!(var0 !== var2)) {
                    _fun94403_ip = 78;
                    continue _fun94403
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
                _fun94403_ip = 172;
                continue _fun94403;
            case 78:
                var3 = var1._cursor;
                var2 = var1._ancestors;
                var2 = var2.length;
                if (var2) {
                    _fun94403_ip = 106;
                    continue _fun94403
                }
            case 98:
                var1._cursor = var0;
                _fun94403_ip = 172;
                continue _fun94403;
            case 106:
                var4 = var1._ancestors;
                var2 = var4.pop;
                var2 = var2.bind(var4)();
                var1._cursor = var2;
                var2 = var1._cursor;
                var2 = var2.right;
                if (var2 === var3) {
                    _fun94403_ip = 78;
                    continue _fun94403
                }
            case 143:
                _fun94403_ip = 172;
                continue _fun94403;
            case 145:
                var2 = var1._tree;
                var3 = var2._root;
                if (!(var0 !== var3)) {
                    _fun94403_ip = 172;
                    continue _fun94403
                }
            case 161:
                var2 = var1._minNode;
                var2 = var2.bind(var1)(var3);
            case 172:
                var2 = var1._cursor;
                var0 = null;
                if (!(var0 !== var2)) {
                    _fun94403_ip = 195;
                    continue _fun94403
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
        _fun94404: for (var _fun94404_ip = 0;;) switch (_fun94404_ip) {
            case 0:
                var1 = this;
                var2 = var1._cursor;
                var0 = null;
                if (!(var0 !== var2)) {
                    _fun94404_ip = 145;
                    continue _fun94404
                }
            case 17:
                var2 = var1._cursor;
                var2 = var2.left;
                if (!(var0 !== var2)) {
                    _fun94404_ip = 78;
                    continue _fun94404
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
                _fun94404_ip = 172;
                continue _fun94404;
            case 78:
                var3 = var1._cursor;
                var2 = var1._ancestors;
                var2 = var2.length;
                if (var2) {
                    _fun94404_ip = 106;
                    continue _fun94404
                }
            case 98:
                var1._cursor = var0;
                _fun94404_ip = 172;
                continue _fun94404;
            case 106:
                var4 = var1._ancestors;
                var2 = var4.pop;
                var2 = var2.bind(var4)();
                var1._cursor = var2;
                var2 = var1._cursor;
                var2 = var2.left;
                if (var2 === var3) {
                    _fun94404_ip = 78;
                    continue _fun94404
                }
            case 143:
                _fun94404_ip = 172;
                continue _fun94404;
            case 145:
                var2 = var1._tree;
                var3 = var2._root;
                if (!(var0 !== var3)) {
                    _fun94404_ip = 172;
                    continue _fun94404
                }
            case 161:
                var2 = var1._maxNode;
                var2 = var2.bind(var1)(var3);
            case 172:
                var2 = var1._cursor;
                var0 = null;
                if (!(var0 !== var2)) {
                    _fun94404_ip = 195;
                    continue _fun94404
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
        _fun94405: for (var _fun94405_ip = 0;;) switch (_fun94405_ip) {
            case 0:
                var0 = arg0;
                var1 = this;
                var2 = var0.left;
                var4 = null;
                var3 = var0;
                var0 = var3;
                if (!(var4 !== var2)) {
                    _fun94405_ip = 58;
                    continue _fun94405
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
                    _fun94405_ip = 22;
                    continue _fun94405
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
        _fun94406: for (var _fun94406_ip = 0;;) switch (_fun94406_ip) {
            case 0:
                var0 = arg0;
                var1 = this;
                var2 = var0.right;
                var4 = null;
                var3 = var0;
                var0 = var3;
                if (!(var4 !== var2)) {
                    _fun94406_ip = 58;
                    continue _fun94406
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
                    _fun94406_ip = 22;
                    continue _fun94406
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