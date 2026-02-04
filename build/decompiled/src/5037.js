// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = function arg0, arg1, arg2() {
        var1 = arg0;
        var0 = {};
        var2 = var1.id;
        var0.identifier = var2;
        var2 = var1.x;
        var0.locationX = var2;
        var2 = var1.y;
        var0.locationY = var2;
        var2 = var1.absoluteX;
        var0.pageX = var2;
        var1 = var1.absoluteY;
        var0.pageY = var1;
        var1 = 0;
        var0.target = var1;
        var1 = arg1;
        var0.timestamp = var1;
        var1 = new Array(0);
        var0.touches = var1;
        var1 = new Array(0);
        var0.changedTouches = var1;
        return var0;
    };
    var _closure1_slot0 = var2;
    var2 = function arg0() {
        var1 = arg0;
        var0 = {};
        var0.left = var1;
        var0.right = var1;
        var0.top = var1;
        var0.bottom = var1;
        return var0;
    };
    var1.numberAsInset = var2;
    var2 = function arg0, arg1() {
        _fun45346: for (var _fun45346_ip = 0;;) switch (_fun45346_ip) {
            case 0:
                var1 = arg0;
                var3 = arg1;
                var0 = {};
                var5 = var1.left;
                var4 = null;
                var7 = var4 != var5;
                var6 = 0;
                if (!var7) {
                    _fun45346_ip = 27;
                    continue _fun45346
                }
            case 24:
                var6 = var5;
            case 27:
                var7 = var3.left;
                var8 = var4 != var7;
                var5 = 0;
                if (!var8) {
                    _fun45346_ip = 44;
                    continue _fun45346
                }
            case 41:
                var5 = var7;
            case 44:
                var5 = var6 + var5;
                var0.left = var5;
                var5 = var1.right;
                var7 = var4 != var5;
                var6 = 0;
                if (!var7) {
                    _fun45346_ip = 69;
                    continue _fun45346
                }
            case 66:
                var6 = var5;
            case 69:
                var7 = var3.right;
                var8 = var4 != var7;
                var5 = 0;
                if (!var8) {
                    _fun45346_ip = 86;
                    continue _fun45346
                }
            case 83:
                var5 = var7;
            case 86:
                var5 = var6 + var5;
                var0.right = var5;
                var5 = var1.top;
                var7 = var4 != var5;
                var6 = 0;
                if (!var7) {
                    _fun45346_ip = 111;
                    continue _fun45346
                }
            case 108:
                var6 = var5;
            case 111:
                var7 = var3.top;
                var8 = var4 != var7;
                var5 = 0;
                if (!var8) {
                    _fun45346_ip = 128;
                    continue _fun45346
                }
            case 125:
                var5 = var7;
            case 128:
                var5 = var6 + var5;
                var0.top = var5;
                var5 = var1.bottom;
                var6 = var4 != var5;
                var1 = 0;
                if (!var6) {
                    _fun45346_ip = 153;
                    continue _fun45346
                }
            case 150:
                var1 = var5;
            case 153:
                var3 = var3.bottom;
                var4 = var4 != var3;
                var2 = 0;
                if (!var4) {
                    _fun45346_ip = 170;
                    continue _fun45346
                }
            case 167:
                var2 = var3;
            case 170:
                var1 = var1 + var2;
                var0.bottom = var1;
                return var0;
        }
    };
    var1.addInsets = var2;
    var2 = function arg0, arg1, arg2() {
        _fun45347: for (var _fun45347_ip = 0;;) switch (_fun45347_ip) {
            case 0:
                var6 = arg0;
                var3 = arg1;
                var2 = arg2;
                var4 = null;
                var1 = var4 == var2;
                var0 = undefined;
                if (var1) {
                    _fun45347_ip = 26;
                    continue _fun45347
                }
            case 20:
                var0 = var2.locationX;
            case 26:
                var8 = var4 != var0;
                var7 = 0;
                if (!var8) {
                    _fun45347_ip = 38;
                    continue _fun45347
                }
            case 35:
                var7 = var0;
            case 38:
                var0 = var3.right;
                var9 = var4 != var0;
                var8 = 0;
                if (!var9) {
                    _fun45347_ip = 55;
                    continue _fun45347
                }
            case 52:
                var8 = var0;
            case 55:
                var0 = var6.width;
                var0 = var8 + var0;
                var0 = var7 < var0;
                if (!var0) {
                    _fun45347_ip = 128;
                    continue _fun45347
                }
            case 71:
                var7 = var4 == var2;
                var8 = undefined;
                if (var7) {
                    _fun45347_ip = 86;
                    continue _fun45347
                }
            case 80:
                var8 = var2.locationY;
            case 86:
                var9 = var4 != var8;
                var7 = 0;
                if (!var9) {
                    _fun45347_ip = 98;
                    continue _fun45347
                }
            case 95:
                var7 = var8;
            case 98:
                var9 = var3.bottom;
                var10 = var4 != var9;
                var8 = 0;
                if (!var10) {
                    _fun45347_ip = 115;
                    continue _fun45347
                }
            case 112:
                var8 = var9;
            case 115:
                var6 = var6.height;
                var6 = var8 + var6;
                var0 = var7 < var6;
            case 128:
                if (!var0) {
                    _fun45347_ip = 182;
                    continue _fun45347
                }
            case 131:
                var7 = var4 == var2;
                var6 = undefined;
                if (var7) {
                    _fun45347_ip = 146;
                    continue _fun45347
                }
            case 140:
                var6 = var2.locationX;
            case 146:
                var8 = var4 != var6;
                var7 = 0;
                if (!var8) {
                    _fun45347_ip = 158;
                    continue _fun45347
                }
            case 155:
                var7 = var6;
            case 158:
                var8 = var3.left;
                var9 = var4 != var8;
                var6 = 0;
                if (!var9) {
                    _fun45347_ip = 175;
                    continue _fun45347
                }
            case 172:
                var6 = var8;
            case 175:
                var6 = -var6;
                var0 = var7 > var6;
            case 182:
                if (!var0) {
                    _fun45347_ip = 236;
                    continue _fun45347
                }
            case 185:
                var6 = var4 == var2;
                var5 = undefined;
                if (var6) {
                    _fun45347_ip = 200;
                    continue _fun45347
                }
            case 194:
                var5 = var2.locationY;
            case 200:
                var6 = var4 != var5;
                var2 = 0;
                if (!var6) {
                    _fun45347_ip = 212;
                    continue _fun45347
                }
            case 209:
                var2 = var5;
            case 212:
                var3 = var3.top;
                var4 = var4 != var3;
                var1 = 0;
                if (!var4) {
                    _fun45347_ip = 229;
                    continue _fun45347
                }
            case 226:
                var1 = var3;
            case 229:
                var1 = -var1;
                var0 = var2 > var1;
            case 236:
                return var0;
        }
    };
    var1.isTouchWithinInset = var2;
    var2 = function arg0() {
        var4 = arg0;
        var0 = global;
        var1 = var0.Date;
        var0 = var1.now;
        var2 = var0.bind(var1)();
        var5 = {};
        var0 = var4.handlerTag;
        var5.identifier = var0;
        var0 = var4.x;
        var5.locationX = var0;
        var0 = var4.y;
        var5.locationY = var0;
        var0 = var4.absoluteX;
        var5.pageX = var0;
        var0 = var4.absoluteY;
        var5.pageY = var0;
        var3 = 0;
        var5.target = var3;
        var5.timestamp = var2;
        var0 = new Array(0);
        var5.touches = var0;
        var0 = new Array(0);
        var5.changedTouches = var0;
        var0 = {};
        var1 = {};
        var6 = new Array(1);
        var6[0] = var5;
        var1.touches = var6;
        var6 = new Array(1);
        var6[0] = var5;
        var1.changedTouches = var6;
        var5 = var5.identifier;
        var1.identifier = var5;
        var5 = var4.x;
        var1.locationX = var5;
        var5 = var4.y;
        var1.locationY = var5;
        var5 = var4.absoluteX;
        var1.pageX = var5;
        var4 = var4.absoluteY;
        var1.pageY = var4;
        var1.target = var3;
        var1.timestamp = var2;
        var2 = undefined;
        var1.force = var2;
        var0.nativeEvent = var1;
        return var0;
    };
    var1.gestureToPressableEvent = var2;
    var0 = function arg0() {
        _fun45349: for (var _fun45349_ip = 0;;) switch (_fun45349_ip) {
            case 0:
                var6 = arg0;
                var0 = global;
                var1 = var0.Date;
                var0 = var1.now;
                var3 = var0.bind(var1)();
                var _closure2_slot0 = var3;
                var0 = {};
                var1 = {};
                var7 = var6.allTouches;
                var5 = var7.map;
                var4 = function(arg0) { // Environment: var2
                    var4 = _closure1_slot0;
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var1 = arg0;
                    var0 = 0;
                    var0 = var4.bind(var2)(var1, var3, var0);
                    return var0;
                };
                var4 = var5.bind(var7)(var4);
                var1.touches = var4;
                var5 = var6.changedTouches;
                var4 = var5.map;
                var2 = function(arg0) { // Environment: var2
                    var4 = _closure1_slot0;
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var1 = arg0;
                    var0 = 0;
                    var0 = var4.bind(var2)(var1, var3, var0);
                    return var0;
                };
                var2 = var4.bind(var5)(var2);
                var1.changedTouches = var2;
                var2 = var6.handlerTag;
                var1.identifier = var2;
                var5 = var6.allTouches;
                var2 = var5.at;
                var4 = 0;
                var5 = var2.bind(var5)(var4);
                var7 = null;
                var8 = var7 == var5;
                var2 = undefined;
                var9 = undefined;
                if (var8) {
                    _fun45349_ip = 130;
                    continue _fun45349
                }
            case 125:
                var9 = var5.x;
            case 130:
                var10 = var7 != var9;
                var5 = -1;
                var8 = var5;
                if (!var10) {
                    _fun45349_ip = 149;
                    continue _fun45349
                }
            case 146:
                var8 = var9;
            case 149:
                var1.locationX = var8;
                var9 = var6.allTouches;
                var8 = var9.at;
                var8 = var8.bind(var9)(var4);
                var10 = var7 == var8;
                var9 = undefined;
                if (var10) {
                    _fun45349_ip = 185;
                    continue _fun45349
                }
            case 180:
                var9 = var8.y;
            case 185:
                var10 = var7 != var9;
                var8 = var5;
                if (!var10) {
                    _fun45349_ip = 198;
                    continue _fun45349
                }
            case 195:
                var8 = var9;
            case 198:
                var1.locationY = var8;
                var9 = var6.allTouches;
                var8 = var9.at;
                var8 = var8.bind(var9)(var4);
                var10 = var7 == var8;
                var9 = undefined;
                if (var10) {
                    _fun45349_ip = 235;
                    continue _fun45349
                }
            case 229:
                var9 = var8.absoluteX;
            case 235:
                var10 = var7 != var9;
                var8 = var5;
                if (!var10) {
                    _fun45349_ip = 248;
                    continue _fun45349
                }
            case 245:
                var8 = var9;
            case 248:
                var1.pageX = var8;
                var8 = var6.allTouches;
                var6 = var8.at;
                var8 = var6.bind(var8)(var4);
                var9 = var7 == var8;
                var6 = undefined;
                if (var9) {
                    _fun45349_ip = 285;
                    continue _fun45349
                }
            case 279:
                var6 = var8.absoluteY;
            case 285:
                var7 = var7 != var6;
                if (!var7) {
                    _fun45349_ip = 295;
                    continue _fun45349
                }
            case 292:
                var5 = var6;
            case 295:
                var1.pageY = var5;
                var1.target = var4;
                var1.timestamp = var3;
                var1.force = var2;
                var0.nativeEvent = var1;
                return var0;
        }
    };
    var1.gestureTouchToPressableEvent = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);