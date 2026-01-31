// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var3);
    var0 = {};
    var3 = function arg0, arg1, arg2, arg3() {
        _fun6069: for (var _fun6069_ip = 0;;) switch (_fun6069_ip) {
            case 0:
                var1 = arg0;
                var8 = arg1;
                var6 = arg2;
                var7 = arg3;
                var12 = var1.touchBank;
                var2 = var1.numberActiveTouches;
                var11 = null;
                var0 = 1;
                var5 = null;
                if (!(var0 === var2)) {
                    _fun6069_ip = 51;
                    continue _fun6069
                }
            case 35:
                var2 = var1.touchBank;
                var1 = var1.indexOfSingleActiveTouch;
                var5 = var2[var1];
            case 51:
                if (!(var11 === var5)) {
                    _fun6069_ip = 212;
                    continue _fun6069
                }
            case 58:
                var2 = var12.length;
                var1 = 0;
                var3 = var1 < var2;
                var10 = 0;
                var9 = 0;
                var4 = 0;
                var2 = 0;
                if (!var3) {
                    _fun6069_ip = 298;
                    continue _fun6069
                }
            case 83:
                var15 = var12[var4];
                var14 = var10;
                var13 = var9;
                if (!(var11 != var15)) {
                    _fun6069_ip = 186;
                    continue _fun6069
                }
            case 97:
                var3 = var15.touchActive;
                var14 = var10;
                var13 = var9;
                if (!var3) {
                    _fun6069_ip = 186;
                    continue _fun6069
                }
            case 112:
                var3 = var15.currentTimeStamp;
                var14 = var10;
                var13 = var9;
                if (!(var3 >= var8)) {
                    _fun6069_ip = 186;
                    continue _fun6069
                }
            case 128:
                if (!var7) {
                    _fun6069_ip = 134;
                    continue _fun6069
                }
            case 131:
                if (var6) {
                    _fun6069_ip = 173;
                    continue _fun6069
                }
            case 134:
                if (!var7) {
                    _fun6069_ip = 148;
                    continue _fun6069
                }
            case 137:
                if (var6) {
                    _fun6069_ip = 148;
                    continue _fun6069
                }
            case 140:
                var3 = var15.currentPageY;
                _fun6069_ip = 171;
                continue _fun6069;
            case 148:
                if (var7) {
                    _fun6069_ip = 162;
                    continue _fun6069
                }
            case 151:
                if (!var6) {
                    _fun6069_ip = 162;
                    continue _fun6069
                }
            case 154:
                var16 = var15.previousPageX;
                _fun6069_ip = 168;
                continue _fun6069;
            case 162:
                var16 = var15.previousPageY;
            case 168:
                var3 = var16;
            case 171:
                _fun6069_ip = 179;
                continue _fun6069;
            case 173:
                var3 = var15.currentPageX;
            case 179:
                var14 = var10 + var3;
                var13 = var9 + 1;
            case 186:
                var4 = var4 + 1;
                var3 = var12.length;
                var10 = var14;
                var9 = var13;
                var2 = var10;
                var1 = var9;
                if (var4 < var3) {
                    _fun6069_ip = 83;
                    continue _fun6069
                }
            case 210:
                _fun6069_ip = 298;
                continue _fun6069;
            case 212:
                var3 = var5.touchActive;
                if (!var3) {
                    _fun6069_ip = 231;
                    continue _fun6069
                }
            case 221:
                var4 = var5.currentTimeStamp;
                var3 = var4 > var8;
            case 231:
                var4 = 0;
                var2 = 0;
                var1 = 0;
                if (!var3) {
                    _fun6069_ip = 298;
                    continue _fun6069
                }
            case 240:
                if (!var7) {
                    _fun6069_ip = 246;
                    continue _fun6069
                }
            case 243:
                if (var6) {
                    _fun6069_ip = 285;
                    continue _fun6069
                }
            case 246:
                if (!var7) {
                    _fun6069_ip = 260;
                    continue _fun6069
                }
            case 249:
                if (var6) {
                    _fun6069_ip = 260;
                    continue _fun6069
                }
            case 252:
                var3 = var5.currentPageY;
                _fun6069_ip = 283;
                continue _fun6069;
            case 260:
                if (var7) {
                    _fun6069_ip = 274;
                    continue _fun6069
                }
            case 263:
                if (!var6) {
                    _fun6069_ip = 274;
                    continue _fun6069
                }
            case 266:
                var6 = var5.previousPageX;
                _fun6069_ip = 280;
                continue _fun6069;
            case 274:
                var6 = var5.previousPageY;
            case 280:
                var3 = var6;
            case 283:
                _fun6069_ip = 291;
                continue _fun6069;
            case 285:
                var3 = var5.currentPageX;
            case 291:
                var2 = var4 + var3;
                var1 = var0;
            case 298:
                var0 = 0;
                if (!(!(var1 > var0))) {
                    _fun6069_ip = 319;
                    continue _fun6069
                }
            case 304:
                var0 = _closure1_slot0;
                var0 = var0.noCentroid;
                _fun6069_ip = 323;
                continue _fun6069;
            case 319:
                var0 = var2 / var1;
            case 323:
                return var0;
        }
    };
    var0.centroidDimension = var3;
    var3 = function arg0, arg1() {
        var4 = _closure1_slot0;
        var3 = var4.centroidDimension;
        var8 = arg0;
        var7 = arg1;
        var9 = var4;
        var6 = true;
        var5 = true;
        var0 = var9[var3](var8, var7, var6, var5, var4);
        return var0;
    };
    var0.currentCentroidXOfTouchesChangedAfter = var3;
    var3 = function arg0, arg1() {
        var5 = _closure1_slot0;
        var4 = var5.centroidDimension;
        var9 = arg0;
        var8 = arg1;
        var7 = false;
        var6 = true;
        var10 = var5;
        var0 = var10[var4](var9, var8, var7, var6, var5);
        return var0;
    };
    var0.currentCentroidYOfTouchesChangedAfter = var3;
    var3 = function arg0, arg1() {
        var5 = _closure1_slot0;
        var4 = var5.centroidDimension;
        var9 = arg0;
        var8 = arg1;
        var7 = true;
        var6 = false;
        var10 = var5;
        var0 = var10[var4](var9, var8, var7, var6, var5);
        return var0;
    };
    var0.previousCentroidXOfTouchesChangedAfter = var3;
    var3 = function arg0, arg1() {
        var4 = _closure1_slot0;
        var3 = var4.centroidDimension;
        var8 = arg0;
        var7 = arg1;
        var9 = var4;
        var6 = false;
        var5 = false;
        var0 = var9[var3](var8, var7, var6, var5, var4);
        return var0;
    };
    var0.previousCentroidYOfTouchesChangedAfter = var3;
    var3 = function arg0() {
        var4 = _closure1_slot0;
        var3 = var4.centroidDimension;
        var8 = arg0;
        var7 = 0;
        var9 = var4;
        var6 = true;
        var5 = true;
        var0 = var9[var3](var8, var7, var6, var5, var4);
        return var0;
    };
    var0.currentCentroidX = var3;
    var3 = function arg0() {
        var5 = _closure1_slot0;
        var4 = var5.centroidDimension;
        var9 = arg0;
        var8 = 0;
        var7 = false;
        var6 = true;
        var10 = var5;
        var0 = var10[var4](var9, var8, var7, var6, var5);
        return var0;
    };
    var0.currentCentroidY = var3;
    var3 = -1;
    var0.noCentroid = var3;
    var _closure1_slot0 = var0;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);