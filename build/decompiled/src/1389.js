// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function(arg0) { // Original name: Yallist, environment: var0
        _fun16260: for (var _fun16260_ip = 0;;) switch (_fun16260_ip) {
            case 0:
                var3 = arg0;
                var0 = this;
                var5 = undefined;
                var _closure2_slot0 = var0;
                var4 = _closure1_slot0;
                var4 = var0 instanceof var4;
                if (var4) {
                    _fun16260_ip = 58;
                    continue _fun16260
                }
            case 27:
                var2 = _closure1_slot0;
                var4 = var2.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var2
                    }
                });
                var9 = var4;
                var2 = new var9[var2](var8);
                var2 = var2 instanceof Object ? var2 : var4;
                _closure2_slot0 = var2;
                var0 = var2;
            case 58:
                var2 = null;
                var0.tail = var2;
                var0.head = var2;
                var4 = 0;
                var0.length = var4;
                if (!var3) {
                    _fun16260_ip = 99;
                    continue _fun16260
                }
            case 83:
                var2 = var3.forEach;
                var6 = 'function';
                var2 = typeof var2;
                if (!(var6 !== var2)) {
                    _fun16260_ip = 141;
                    continue _fun16260
                }
            case 99:
                var2 = arguments.length;
                if (!(var2 > var4)) {
                    _fun16260_ip = 156;
                    continue _fun16260
                }
            case 106:
                var2 = arguments.length;
                var6 = var4 < var2;
                var4 = 0;
                if (!var6) {
                    _fun16260_ip = 156;
                    continue _fun16260
                }
            case 118:
                var7 = var0.push;
                var6 = arguments[var4];
                var6 = var7.bind(var0)(var6);
                var4 = var4 + 1;
                if (var4 < var2) {
                    _fun16260_ip = 118;
                    continue _fun16260
                }
            case 139:
                _fun16260_ip = 156;
                continue _fun16260;
            case 141:
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure2_slot0;
                    var1 = var2.push;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
            case 156:
                return var0;
        }
    };
    var _closure1_slot0 = var1;
    var2 = function(arg0, arg1) { // Original name: push, environment: var0
        _fun16262: for (var _fun16262_ip = 0;;) switch (_fun16262_ip) {
            case 0:
                var1 = arg0;
                var5 = _closure1_slot3;
                var8 = var1.tail;
                var0 = var5.prototype;
                var2 = Object.create(var0, {
                    constructor: {
                        value: var5
                    }
                });
                var9 = arg1;
                var7 = null;
                var10 = var2;
                var6 = var1;
                var0 = new var10[var5](var9, var8, var7, var6, var5);
                var0 = var0 instanceof Object ? var0 : var2;
                var1.tail = var0;
                var0 = var1.head;
                if (var0) {
                    _fun16262_ip = 71;
                    continue _fun16262
                }
            case 59:
                var0 = var1.tail;
                var1.head = var0;
            case 71:
                var0 = var1.length;
                var0 = var0 + 1;
                var1.length = var0;
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot1 = var2;
    var2 = function(arg0, arg1) { // Original name: unshift, environment: var0
        _fun16263: for (var _fun16263_ip = 0;;) switch (_fun16263_ip) {
            case 0:
                var1 = arg0;
                var5 = _closure1_slot3;
                var7 = var1.head;
                var0 = var5.prototype;
                var2 = Object.create(var0, {
                    constructor: {
                        value: var5
                    }
                });
                var9 = arg1;
                var8 = null;
                var10 = var2;
                var6 = var1;
                var0 = new var10[var5](var9, var8, var7, var6, var5);
                var0 = var0 instanceof Object ? var0 : var2;
                var1.head = var0;
                var0 = var1.tail;
                if (var0) {
                    _fun16263_ip = 71;
                    continue _fun16263
                }
            case 59:
                var0 = var1.head;
                var1.tail = var0;
            case 71:
                var0 = var1.length;
                var0 = var0 + 1;
                var1.length = var0;
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot2 = var2;
    var2 = function(arg0, arg1, arg2, arg3) { // Original name: Node, environment: var0
        _fun16264: for (var _fun16264_ip = 0;;) switch (_fun16264_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var1 = arg2;
                var4 = arg3;
                var0 = this;
                var6 = _closure1_slot3;
                var6 = var0 instanceof var6;
                if (var6) {
                    _fun16264_ip = 66;
                    continue _fun16264
                }
            case 28:
                var5 = _closure1_slot3;
                var6 = var5.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var5
                    }
                });
                var11 = var6;
                var10 = var3;
                var9 = var2;
                var8 = var1;
                var7 = var4;
                var5 = new var11[var5](var10, var9, var8, var7, var6);
                var5 = var5 instanceof Object ? var5 : var6;
                return var5;
            case 66:
                var0.list = var4;
                var0.value = var3;
                if (var2) {
                    _fun16264_ip = 91;
                    continue _fun16264
                }
            case 81:
                var3 = null;
                var0.prev = var3;
                _fun16264_ip = 103;
                continue _fun16264;
            case 91:
                var2.next = var0;
                var0.prev = var2;
            case 103:
                if (var1) {
                    _fun16264_ip = 116;
                    continue _fun16264
                }
            case 106:
                var2 = null;
                var0.next = var2;
                _fun16264_ip = 128;
                continue _fun16264;
            case 116:
                var1.prev = var0;
                var0.next = var1;
            case 128:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot3 = var2;
    var3 = arg4;
    var3.exports = var1;
    var1.Node = var2;
    var1.create = var1;
    var3 = var1.prototype;
    var2 = function(arg0) { // Environment: var0
        _fun16265: for (var _fun16265_ip = 0;;) switch (_fun16265_ip) {
            case 0:
                var1 = arg0;
                var2 = this;
                var0 = var1.list;
                if (!(var0 === var2)) {
                    _fun16265_ip = 120;
                    continue _fun16265
                }
            case 15:
                var3 = var1.next;
                var0 = var1.prev;
                if (!var3) {
                    _fun16265_ip = 35;
                    continue _fun16265
                }
            case 29:
                var3.prev = var0;
            case 35:
                if (!var0) {
                    _fun16265_ip = 44;
                    continue _fun16265
                }
            case 38:
                var0.next = var3;
            case 44:
                var4 = var2.head;
                if (!(var1 === var4)) {
                    _fun16265_ip = 60;
                    continue _fun16265
                }
            case 54:
                var2.head = var3;
            case 60:
                var3 = var2.tail;
                if (!(var1 === var3)) {
                    _fun16265_ip = 76;
                    continue _fun16265
                }
            case 70:
                var2.tail = var0;
            case 76:
                var2 = var1.list;
                var0 = var2.length;
                var0 = var0 - 1;
                var2.length = var0;
                var0 = null;
                var1.next = var0;
                var1.prev = var0;
                var1.list = var0;
                var0 = undefined;
                return var0;
            case 120:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = 'removing node which does not belong to this list';
                var6 = var1;
                var0 = new var6[var2](var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var3.removeNode = var2;
    var3 = var1.prototype;
    var2 = function(arg0) { // Environment: var0
        _fun16266: for (var _fun16266_ip = 0;;) switch (_fun16266_ip) {
            case 0:
                var0 = arg0;
                var1 = this;
                var2 = var1.head;
                if (!(var0 !== var2)) {
                    _fun16266_ip = 103;
                    continue _fun16266
                }
            case 15:
                var2 = var0.list;
                if (!var2) {
                    _fun16266_ip = 41;
                    continue _fun16266
                }
            case 24:
                var3 = var0.list;
                var2 = var3.removeNode;
                var2 = var2.bind(var3)(var0);
            case 41:
                var2 = var1.head;
                var0.list = var1;
                var0.next = var2;
                if (!var2) {
                    _fun16266_ip = 68;
                    continue _fun16266
                }
            case 62:
                var2.prev = var0;
            case 68:
                var1.head = var0;
                var2 = var1.tail;
                if (var2) {
                    _fun16266_ip = 89;
                    continue _fun16266
                }
            case 83:
                var1.tail = var0;
            case 89:
                var0 = var1.length;
                var0 = var0 + 1;
                var1.length = var0;
            case 103:
                var0 = undefined;
                return var0;
        }
    };
    var3.unshiftNode = var2;
    var3 = var1.prototype;
    var2 = function(arg0) { // Environment: var0
        _fun16267: for (var _fun16267_ip = 0;;) switch (_fun16267_ip) {
            case 0:
                var0 = arg0;
                var1 = this;
                var2 = var1.tail;
                if (!(var0 !== var2)) {
                    _fun16267_ip = 103;
                    continue _fun16267
                }
            case 15:
                var2 = var0.list;
                if (!var2) {
                    _fun16267_ip = 41;
                    continue _fun16267
                }
            case 24:
                var3 = var0.list;
                var2 = var3.removeNode;
                var2 = var2.bind(var3)(var0);
            case 41:
                var2 = var1.tail;
                var0.list = var1;
                var0.prev = var2;
                if (!var2) {
                    _fun16267_ip = 68;
                    continue _fun16267
                }
            case 62:
                var2.next = var0;
            case 68:
                var1.tail = var0;
                var2 = var1.head;
                if (var2) {
                    _fun16267_ip = 89;
                    continue _fun16267
                }
            case 83:
                var1.head = var0;
            case 89:
                var0 = var1.length;
                var0 = var0 + 1;
                var1.length = var0;
            case 103:
                var0 = undefined;
                return var0;
        }
    };
    var3.pushNode = var2;
    var3 = var1.prototype;
    var2 = function() { // Environment: var0
        _fun16268: for (var _fun16268_ip = 0;;) switch (_fun16268_ip) {
            case 0:
                var0 = this;
                var4 = undefined;
                var5 = undefined;
                var3 = arguments.length;
                var2 = 0;
                var6 = var2 < var3;
                if (!var6) {
                    _fun16268_ip = 42;
                    continue _fun16268
                }
            case 21:
                var7 = _closure1_slot1;
                var6 = arguments[var2];
                var6 = var7.bind(var4)(var0, var6);
                var2 = var2 + 1;
                if (var2 < var3) {
                    _fun16268_ip = 21;
                    continue _fun16268
                }
            case 42:
                var0 = var0.length;
                return var0;
        }
    };
    var3.push = var2;
    var3 = var1.prototype;
    var2 = function() { // Environment: var0
        _fun16269: for (var _fun16269_ip = 0;;) switch (_fun16269_ip) {
            case 0:
                var0 = this;
                var4 = undefined;
                var5 = undefined;
                var3 = arguments.length;
                var2 = 0;
                var6 = var2 < var3;
                if (!var6) {
                    _fun16269_ip = 42;
                    continue _fun16269
                }
            case 21:
                var7 = _closure1_slot2;
                var6 = arguments[var2];
                var6 = var7.bind(var4)(var0, var6);
                var2 = var2 + 1;
                if (var2 < var3) {
                    _fun16269_ip = 21;
                    continue _fun16269
                }
            case 42:
                var0 = var0.length;
                return var0;
        }
    };
    var3.unshift = var2;
    var3 = var1.prototype;
    var2 = function() { // Environment: var0
        _fun16270: for (var _fun16270_ip = 0;;) switch (_fun16270_ip) {
            case 0:
                var2 = this;
                var0 = var2.tail;
                if (var0) {
                    _fun16270_ip = 15;
                    continue _fun16270
                }
            case 11:
                var0 = undefined;
                return var0;
            case 15:
                var0 = var2.tail;
                var0 = var0.value;
                var1 = var2.tail;
                var1 = var1.prev;
                var2.tail = var1;
                var1 = var2.tail;
                var3 = null;
                if (var1) {
                    _fun16270_ip = 63;
                    continue _fun16270
                }
            case 55:
                var2.head = var3;
                _fun16270_ip = 75;
                continue _fun16270;
            case 63:
                var1 = var2.tail;
                var1.next = var3;
            case 75:
                var1 = var2.length;
                var1 = var1 - 1;
                var2.length = var1;
                return var0;
        }
    };
    var3.pop = var2;
    var3 = var1.prototype;
    var2 = function() { // Environment: var0
        _fun16271: for (var _fun16271_ip = 0;;) switch (_fun16271_ip) {
            case 0:
                var2 = this;
                var0 = var2.head;
                if (var0) {
                    _fun16271_ip = 15;
                    continue _fun16271
                }
            case 11:
                var0 = undefined;
                return var0;
            case 15:
                var0 = var2.head;
                var0 = var0.value;
                var1 = var2.head;
                var1 = var1.next;
                var2.head = var1;
                var1 = var2.head;
                var3 = null;
                if (var1) {
                    _fun16271_ip = 62;
                    continue _fun16271
                }
            case 54:
                var2.tail = var3;
                _fun16271_ip = 74;
                continue _fun16271;
            case 62:
                var1 = var2.head;
                var1.prev = var3;
            case 74:
                var1 = var2.length;
                var1 = var1 - 1;
                var2.length = var1;
                return var0;
        }
    };
    var3.shift = var2;
    var3 = var1.prototype;
    var2 = function(arg0, arg1) { // Environment: var0
        _fun16272: for (var _fun16272_ip = 0;;) switch (_fun16272_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var3 = this;
                if (var4) {
                    _fun16272_ip = 14;
                    continue _fun16272
                }
            case 11:
                var4 = var3;
            case 14:
                var2 = var3.head;
                var0 = null;
                var1 = 0;
                if (!(var0 !== var2)) {
                    _fun16272_ip = 66;
                    continue _fun16272
                }
            case 28:
                var7 = var5.call;
                var10 = var2.value;
                var12 = var5;
                var11 = var4;
                var9 = var1;
                var8 = var3;
                var6 = var12[var7](var11, var10, var9, var8, var7);
                var2 = var2.next;
                var1 = var1 + 1;
                if (var0 !== var2) {
                    _fun16272_ip = 28;
                    continue _fun16272
                }
            case 66:
                var0 = undefined;
                return var0;
        }
    };
    var3.forEach = var2;
    var3 = var1.prototype;
    var2 = function(arg0, arg1) { // Environment: var0
        _fun16273: for (var _fun16273_ip = 0;;) switch (_fun16273_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var3 = this;
                if (var4) {
                    _fun16273_ip = 14;
                    continue _fun16273
                }
            case 11:
                var4 = var3;
            case 14:
                var2 = var3.tail;
                var1 = var3.length;
                var0 = 1;
                var1 = var1 - var0;
                var0 = null;
                if (!(var0 !== var2)) {
                    _fun16273_ip = 77;
                    continue _fun16273
                }
            case 38:
                var7 = var5.call;
                var10 = var2.value;
                var12 = var5;
                var11 = var4;
                var9 = var1;
                var8 = var3;
                var6 = var12[var7](var11, var10, var9, var8, var7);
                var2 = var2.prev;
                var1 = var1 - 1;
                if (var0 !== var2) {
                    _fun16273_ip = 38;
                    continue _fun16273
                }
            case 77:
                var0 = undefined;
                return var0;
        }
    };
    var3.forEachReverse = var2;
    var3 = var1.prototype;
    var2 = function(arg0) { // Environment: var0
        _fun16274: for (var _fun16274_ip = 0;;) switch (_fun16274_ip) {
            case 0:
                var3 = arg0;
                var0 = this;
                var7 = var0.head;
                var8 = 0;
                var1 = null;
                var2 = 0;
                var0 = var7;
                if (!(var1 !== var7)) {
                    _fun16274_ip = 75;
                    continue _fun16274
                }
            case 24:
                var6 = var8 < var3;
                var5 = 0;
                var4 = var7;
                var2 = 0;
                var0 = var4;
                if (!var6) {
                    _fun16274_ip = 75;
                    continue _fun16274
                }
            case 41:
                var7 = var4.next;
                var6 = var5 + 1;
                var2 = var6;
                var0 = var7;
                if (!(var1 !== var7)) {
                    _fun16274_ip = 75;
                    continue _fun16274
                }
            case 59:
                var5 = var6;
                var4 = var7;
                var0 = var4;
                var2 = var5;
                if (var2 < var3) {
                    _fun16274_ip = 41;
                    continue _fun16274
                }
            case 75:
                if (!(var2 === var3)) {
                    _fun16274_ip = 83;
                    continue _fun16274
                }
            case 79:
                if (!(var1 === var0)) {
                    _fun16274_ip = 87;
                    continue _fun16274
                }
            case 83:
                var1 = undefined;
                return var1;
            case 87:
                var0 = var0.value;
                return var0;
        }
    };
    var3.get = var2;
    var3 = var1.prototype;
    var2 = function(arg0) { // Environment: var0
        _fun16275: for (var _fun16275_ip = 0;;) switch (_fun16275_ip) {
            case 0:
                var3 = arg0;
                var0 = this;
                var7 = var0.tail;
                var8 = 0;
                var1 = null;
                var2 = 0;
                var0 = var7;
                if (!(var1 !== var7)) {
                    _fun16275_ip = 76;
                    continue _fun16275
                }
            case 24:
                var6 = var8 < var3;
                var5 = 0;
                var4 = var7;
                var2 = 0;
                var0 = var4;
                if (!var6) {
                    _fun16275_ip = 76;
                    continue _fun16275
                }
            case 41:
                var7 = var4.prev;
                var6 = var5 + 1;
                var2 = var6;
                var0 = var7;
                if (!(var1 !== var7)) {
                    _fun16275_ip = 76;
                    continue _fun16275
                }
            case 60:
                var5 = var6;
                var4 = var7;
                var0 = var4;
                var2 = var5;
                if (var2 < var3) {
                    _fun16275_ip = 41;
                    continue _fun16275
                }
            case 76:
                if (!(var2 === var3)) {
                    _fun16275_ip = 84;
                    continue _fun16275
                }
            case 80:
                if (!(var1 === var0)) {
                    _fun16275_ip = 88;
                    continue _fun16275
                }
            case 84:
                var1 = undefined;
                return var1;
            case 88:
                var0 = var0.value;
                return var0;
        }
    };
    var3.getReverse = var2;
    var3 = var1.prototype;
    var2 = function(arg0, arg1) { // Environment: var0
        _fun16276: for (var _fun16276_ip = 0;;) switch (_fun16276_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var3 = this;
                if (var4) {
                    _fun16276_ip = 14;
                    continue _fun16276
                }
            case 11:
                var4 = var3;
            case 14:
                var0 = _closure1_slot0;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var12 = var1;
                var0 = new var12[var0](var11);
                var0 = var0 instanceof Object ? var0 : var1;
                var2 = var3.head;
                var1 = null;
                if (!(var1 !== var2)) {
                    _fun16276_ip = 89;
                    continue _fun16276
                }
            case 53:
                var7 = var0.push;
                var8 = var5.call;
                var6 = var2.value;
                var6 = var8.bind(var5)(var4, var6, var3);
                var6 = var7.bind(var0)(var6);
                var2 = var2.next;
                if (var1 !== var2) {
                    _fun16276_ip = 53;
                    continue _fun16276
                }
            case 89:
                return var0;
        }
    };
    var3.map = var2;
    var3 = var1.prototype;
    var2 = function(arg0, arg1) { // Environment: var0
        _fun16277: for (var _fun16277_ip = 0;;) switch (_fun16277_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var3 = this;
                if (var4) {
                    _fun16277_ip = 14;
                    continue _fun16277
                }
            case 11:
                var4 = var3;
            case 14:
                var0 = _closure1_slot0;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var12 = var1;
                var0 = new var12[var0](var11);
                var0 = var0 instanceof Object ? var0 : var1;
                var2 = var3.tail;
                var1 = null;
                if (!(var1 !== var2)) {
                    _fun16277_ip = 90;
                    continue _fun16277
                }
            case 53:
                var7 = var0.push;
                var8 = var5.call;
                var6 = var2.value;
                var6 = var8.bind(var5)(var4, var6, var3);
                var6 = var7.bind(var0)(var6);
                var2 = var2.prev;
                if (var1 !== var2) {
                    _fun16277_ip = 53;
                    continue _fun16277
                }
            case 90:
                return var0;
        }
    };
    var3.mapReverse = var2;
    var3 = var1.prototype;
    var2 = function(arg0, arg1) { // Environment: var0
        _fun16278: for (var _fun16278_ip = 0;;) switch (_fun16278_ip) {
            case 0:
                var6 = arg0;
                var0 = arg1;
                var2 = this;
                var5 = undefined;
                var1 = undefined;
                var4 = var2.head;
                var3 = arguments.length;
                var1 = 1;
                if (!(!(var3 > var1))) {
                    _fun16278_ip = 95;
                    continue _fun16278
                }
            case 28:
                var1 = var2.head;
                if (var1) {
                    _fun16278_ip = 73;
                    continue _fun16278
                }
            case 37:
                var1 = global;
                var7 = var1.TypeError;
                var1 = var7.prototype;
                var3 = Object.create(var1, {
                    constructor: {
                        value: var7
                    }
                });
                var10 = 'Reduce of empty list with no initial value';
                var11 = var3;
                var1 = new var11[var7](var10, var9);
                var1 = var1 instanceof Object ? var1 : var3;
                throw var1;
            case 73:
                var1 = var2.head;
                var4 = var1.next;
                var2 = var2.head;
                var0 = var2.value;
            case 95:
                var2 = null;
                var1 = var0;
                var3 = 0;
                var0 = var1;
                if (!(var2 !== var4)) {
                    _fun16278_ip = 136;
                    continue _fun16278
                }
            case 109:
                var7 = var4.value;
                var1 = var6.bind(var5)(var1, var7, var3);
                var4 = var4.next;
                var3 = var3 + 1;
                var0 = var1;
                if (var2 !== var4) {
                    _fun16278_ip = 109;
                    continue _fun16278
                }
            case 136:
                return var0;
        }
    };
    var3.reduce = var2;
    var3 = var1.prototype;
    var2 = function(arg0, arg1) { // Environment: var0
        _fun16279: for (var _fun16279_ip = 0;;) switch (_fun16279_ip) {
            case 0:
                var6 = arg0;
                var0 = arg1;
                var1 = this;
                var5 = undefined;
                var2 = undefined;
                var4 = var1.tail;
                var3 = arguments.length;
                var2 = 1;
                if (!(!(var3 > var2))) {
                    _fun16279_ip = 96;
                    continue _fun16279
                }
            case 28:
                var3 = var1.tail;
                if (var3) {
                    _fun16279_ip = 73;
                    continue _fun16279
                }
            case 37:
                var3 = global;
                var8 = var3.TypeError;
                var3 = var8.prototype;
                var7 = Object.create(var3, {
                    constructor: {
                        value: var8
                    }
                });
                var11 = 'Reduce of empty list with no initial value';
                var12 = var7;
                var3 = new var12[var8](var11, var10);
                var3 = var3 instanceof Object ? var3 : var7;
                throw var3;
            case 73:
                var3 = var1.tail;
                var4 = var3.prev;
                var7 = var1.tail;
                var0 = var7.value;
            case 96:
                var1 = var1.length;
                var3 = var1 - var2;
                var2 = null;
                var1 = var0;
                var0 = var1;
                if (!(var2 !== var4)) {
                    _fun16279_ip = 145;
                    continue _fun16279
                }
            case 117:
                var7 = var4.value;
                var1 = var6.bind(var5)(var1, var7, var3);
                var4 = var4.prev;
                var3 = var3 - 1;
                var0 = var1;
                if (var2 !== var4) {
                    _fun16279_ip = 117;
                    continue _fun16279
                }
            case 145:
                return var0;
        }
    };
    var3.reduceReverse = var2;
    var3 = var1.prototype;
    var2 = function() { // Environment: var0
        _fun16280: for (var _fun16280_ip = 0;;) switch (_fun16280_ip) {
            case 0:
                var1 = this;
                var0 = global;
                var3 = var0.Array;
                var5 = var1.length;
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var6 = var2;
                var0 = new var6[var3](var5, var4);
                var0 = var0 instanceof Object ? var0 : var2;
                var3 = var1.head;
                var1 = null;
                var2 = 0;
                if (!(var1 !== var3)) {
                    _fun16280_ip = 70;
                    continue _fun16280
                }
            case 49:
                var4 = var3.value;
                var0[var2] = var4;
                var3 = var3.next;
                var2 = var2 + 1;
                if (var1 !== var3) {
                    _fun16280_ip = 49;
                    continue _fun16280
                }
            case 70:
                return var0;
        }
    };
    var3.toArray = var2;
    var3 = var1.prototype;
    var2 = function() { // Environment: var0
        _fun16281: for (var _fun16281_ip = 0;;) switch (_fun16281_ip) {
            case 0:
                var1 = this;
                var0 = global;
                var3 = var0.Array;
                var5 = var1.length;
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var6 = var2;
                var0 = new var6[var3](var5, var4);
                var0 = var0 instanceof Object ? var0 : var2;
                var3 = var1.tail;
                var1 = null;
                var2 = 0;
                if (!(var1 !== var3)) {
                    _fun16281_ip = 71;
                    continue _fun16281
                }
            case 49:
                var4 = var3.value;
                var0[var2] = var4;
                var3 = var3.prev;
                var2 = var2 + 1;
                if (var1 !== var3) {
                    _fun16281_ip = 49;
                    continue _fun16281
                }
            case 71:
                return var0;
        }
    };
    var3.toArrayReverse = var2;
    var3 = var1.prototype;
    var2 = function(arg0, arg1) { // Environment: var0
        _fun16282: for (var _fun16282_ip = 0;;) switch (_fun16282_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var1 = this;
                if (var3) {
                    _fun16282_ip = 16;
                    continue _fun16282
                }
            case 11:
                var3 = var1.length;
            case 16:
                var10 = 0;
                var4 = var3;
                if (!(var4 < var10)) {
                    _fun16282_ip = 34;
                    continue _fun16282
                }
            case 25:
                var0 = var1.length;
                var4 = var3 + var0;
            case 34:
                if (var2) {
                    _fun16282_ip = 39;
                    continue _fun16282
                }
            case 37:
                var2 = 0;
            case 39:
                var8 = var2;
                if (!(var8 < var10)) {
                    _fun16282_ip = 55;
                    continue _fun16282
                }
            case 46:
                var0 = var1.length;
                var8 = var2 + var0;
            case 55:
                var0 = _closure1_slot0;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var12 = var2;
                var0 = new var12[var0](var11);
                var0 = var0 instanceof Object ? var0 : var2;
                if (!(!(var4 < var8))) {
                    _fun16282_ip = 225;
                    continue _fun16282
                }
            case 89:
                if (!(!(var4 < var10))) {
                    _fun16282_ip = 225;
                    continue _fun16282
                }
            case 96:
                if (!(var8 < var10)) {
                    _fun16282_ip = 102;
                    continue _fun16282
                }
            case 100:
                var8 = 0;
            case 102:
                var2 = var1.length;
                if (!(var4 > var2)) {
                    _fun16282_ip = 116;
                    continue _fun16282
                }
            case 111:
                var4 = var1.length;
            case 116:
                var9 = var1.head;
                var3 = null;
                var2 = 0;
                var1 = var9;
                if (!(var3 !== var9)) {
                    _fun16282_ip = 184;
                    continue _fun16282
                }
            case 133:
                var5 = var10 < var8;
                var7 = 0;
                var6 = var9;
                var2 = 0;
                var1 = var6;
                if (!var5) {
                    _fun16282_ip = 184;
                    continue _fun16282
                }
            case 150:
                var9 = var6.next;
                var5 = var7 + 1;
                var2 = var5;
                var1 = var9;
                if (!(var3 !== var1)) {
                    _fun16282_ip = 184;
                    continue _fun16282
                }
            case 168:
                var7 = var5;
                var6 = var9;
                var2 = var7;
                var1 = var6;
                if (var5 < var8) {
                    _fun16282_ip = 150;
                    continue _fun16282
                }
            case 184:
                if (!(var3 !== var1)) {
                    _fun16282_ip = 223;
                    continue _fun16282
                }
            case 188:
                if (!(var2 < var4)) {
                    _fun16282_ip = 223;
                    continue _fun16282
                }
            case 192:
                var6 = var0.push;
                var5 = var1.value;
                var5 = var6.bind(var0)(var5);
                var2 = var2 + 1;
                var1 = var1.next;
                if (!(var3 !== var1)) {
                    _fun16282_ip = 223;
                    continue _fun16282
                }
            case 219:
                if (var2 < var4) {
                    _fun16282_ip = 192;
                    continue _fun16282
                }
            case 223:
                return var0;
            case 225:
                return var0;
        }
    };
    var3.slice = var2;
    var3 = var1.prototype;
    var2 = function(arg0, arg1) { // Environment: var0
        _fun16283: for (var _fun16283_ip = 0;;) switch (_fun16283_ip) {
            case 0:
                var3 = arg0;
                var4 = arg1;
                var1 = this;
                if (var4) {
                    _fun16283_ip = 16;
                    continue _fun16283
                }
            case 11:
                var4 = var1.length;
            case 16:
                var2 = 0;
                var8 = var4;
                if (!(var8 < var2)) {
                    _fun16283_ip = 34;
                    continue _fun16283
                }
            case 25:
                var0 = var1.length;
                var8 = var4 + var0;
            case 34:
                if (var3) {
                    _fun16283_ip = 39;
                    continue _fun16283
                }
            case 37:
                var3 = 0;
            case 39:
                var4 = var3;
                if (!(var4 < var2)) {
                    _fun16283_ip = 55;
                    continue _fun16283
                }
            case 46:
                var0 = var1.length;
                var4 = var3 + var0;
            case 55:
                var0 = _closure1_slot0;
                var3 = var0.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var0
                    }
                });
                var12 = var3;
                var0 = new var12[var0](var11);
                var0 = var0 instanceof Object ? var0 : var3;
                if (!(!(var8 < var4))) {
                    _fun16283_ip = 232;
                    continue _fun16283
                }
            case 89:
                if (!(!(var8 < var2))) {
                    _fun16283_ip = 232;
                    continue _fun16283
                }
            case 96:
                if (!(var4 < var2)) {
                    _fun16283_ip = 102;
                    continue _fun16283
                }
            case 100:
                var4 = 0;
            case 102:
                var2 = var1.length;
                if (!(var8 > var2)) {
                    _fun16283_ip = 116;
                    continue _fun16283
                }
            case 111:
                var8 = var1.length;
            case 116:
                var5 = var1.length;
                var9 = var1.tail;
                var3 = null;
                var2 = var5;
                var1 = var9;
                if (!(var3 !== var9)) {
                    _fun16283_ip = 190;
                    continue _fun16283
                }
            case 139:
                var7 = var5;
                var6 = var9;
                var1 = var6;
                var2 = var7;
                if (!(var2 > var8)) {
                    _fun16283_ip = 190;
                    continue _fun16283
                }
            case 155:
                var9 = var6.prev;
                var5 = var7 - 1;
                var2 = var5;
                var1 = var9;
                if (!(var3 !== var1)) {
                    _fun16283_ip = 190;
                    continue _fun16283
                }
            case 174:
                var7 = var5;
                var6 = var9;
                var2 = var7;
                var1 = var6;
                if (var5 > var8) {
                    _fun16283_ip = 155;
                    continue _fun16283
                }
            case 190:
                if (!(var3 !== var1)) {
                    _fun16283_ip = 230;
                    continue _fun16283
                }
            case 194:
                if (!(var2 > var4)) {
                    _fun16283_ip = 230;
                    continue _fun16283
                }
            case 198:
                var6 = var0.push;
                var5 = var1.value;
                var5 = var6.bind(var0)(var5);
                var2 = var2 - 1;
                var1 = var1.prev;
                if (!(var3 !== var1)) {
                    _fun16283_ip = 230;
                    continue _fun16283
                }
            case 226:
                if (var2 > var4) {
                    _fun16283_ip = 198;
                    continue _fun16283
                }
            case 230:
                return var0;
            case 232:
                return var0;
        }
    };
    var3.sliceReverse = var2;
    var1 = var1.prototype;
    var0 = function() { // Environment: var0
        _fun16284: for (var _fun16284_ip = 0;;) switch (_fun16284_ip) {
            case 0:
                var0 = this;
                var1 = var0.head;
                var2 = var0.tail;
                var4 = null;
                var3 = var1;
                if (!(var4 !== var3)) {
                    _fun16284_ip = 56;
                    continue _fun16284
                }
            case 23:
                var5 = var3.prev;
                var6 = var3.next;
                var3.prev = var6;
                var3.next = var5;
                var3 = var3.prev;
                if (var4 !== var3) {
                    _fun16284_ip = 23;
                    continue _fun16284
                }
            case 56:
                var0.head = var2;
                var0.tail = var1;
                return var0;
        }
    };
    var1.reverse = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);