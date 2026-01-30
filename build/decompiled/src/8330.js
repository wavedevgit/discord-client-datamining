// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function(arg0, arg1) { // Original name: QRCode, environment: var0
        var1 = this;
        var0 = arg0;
        var1.typeNumber = var0;
        var0 = arg1;
        var1.errorCorrectLevel = var0;
        var0 = null;
        var1.modules = var0;
        var2 = 0;
        var1.moduleCount = var2;
        var1.dataCache = var0;
        var0 = new Array(0);
        var1.dataList = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot2 = var1;
    var3 = var1.prototype;
    var2 = function(arg0) { // Environment: var0
        var2 = this;
        var3 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var1);
        var1 = var4.prototype;
        var3 = Object.create(var1, {
            constructor: {
                value: var4
            }
        });
        var5 = arg0;
        var6 = var3;
        var1 = new var6[var4](var5, var4);
        var4 = var1 instanceof Object ? var1 : var3;
        var3 = var2.dataList;
        var1 = var3.push;
        var1 = var1.bind(var3)(var4);
        var1 = null;
        var2.dataCache = var1;
        return var0;
    };
    var3.addData = var2;
    var2 = function(arg0, arg1) { // Environment: var0
        _fun67426: for (var _fun67426_ip = 0;;) switch (_fun67426_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var0 = this;
                var2 = 0;
                if (!(!(var3 < var2))) {
                    _fun67426_ip = 54;
                    continue _fun67426
                }
            case 14:
                var4 = var0.moduleCount;
                if (!(!(var4 <= var3))) {
                    _fun67426_ip = 54;
                    continue _fun67426
                }
            case 24:
                if (!(!(var1 < var2))) {
                    _fun67426_ip = 54;
                    continue _fun67426
                }
            case 28:
                var2 = var0.moduleCount;
                if (!(!(var2 <= var1))) {
                    _fun67426_ip = 54;
                    continue _fun67426
                }
            case 38:
                var0 = var0.modules;
                var0 = var0[var3];
                var0 = var0[var1];
                return var0;
            case 54:
                var0 = global;
                var2 = var0.Error;
                var0 = ',';
                var0 = var3 + var0;
                var5 = var0 + var1;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var6 = var1;
                var0 = new var6[var2](var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var3.isDark = var2;
    var2 = function() { // Environment: var0
        var0 = this;
        var0 = var0.moduleCount;
        return var0;
    };
    var3.getModuleCount = var2;
    var2 = function() { // Environment: var0
        _fun67428: for (var _fun67428_ip = 0;;) switch (_fun67428_ip) {
            case 0:
                var4 = this;
                var0 = var4.typeNumber;
                var11 = 1;
                var1 = var0 < var11;
                var10 = 40;
                var9 = 8;
                var8 = 0;
                var7 = 4;
                var5 = 3;
                var0 = undefined;
                var3 = 2;
                var2 = var11;
                if (!var1) {
                    _fun67428_ip = 332;
                    continue _fun67428
                }
            case 46:
                var12 = _closure1_slot0;
                var1 = _closure1_slot1;
                var13 = var1[var11];
                var15 = var12.bind(var0)(var13);
                var14 = var15.getRSBlocks;
                var13 = var4.errorCorrectLevel;
                var17 = var14.bind(var15)(var2, var13);
                var1 = var1[var3];
                var1 = var12.bind(var0)(var1);
                var12 = var1.prototype;
                var12 = Object.create(var12, {
                    constructor: {
                        value: var1
                    }
                });
                var23 = var12;
                var1 = new var23[var1](var22);
                var14 = var1 instanceof Object ? var1 : var12;
                var1 = var17.length;
                var13 = var8 < var1;
                var12 = var2;
                var16 = 0;
                var15 = 0;
                var1 = 0;
                if (!var13) {
                    _fun67428_ip = 160;
                    continue _fun67428
                }
            case 131:
                var13 = var17[var15];
                var13 = var13.dataCount;
                var16 = var16 + var13;
                var15 = var15 + 1;
                var13 = var17.length;
                var1 = var16;
                if (var15 < var13) {
                    _fun67428_ip = 131;
                    continue _fun67428
                }
            case 160:
                var13 = var4.dataList;
                var13 = var13.length;
                var13 = var8 < var13;
                var15 = 0;
                if (!var13) {
                    _fun67428_ip = 292;
                    continue _fun67428
                }
            case 180:
                var13 = var4.dataList;
                var16 = var13[var15];
                var17 = var14.put;
                var13 = var16.mode;
                var13 = var17.bind(var14)(var13, var7);
                var18 = var14.put;
                var13 = var16.getLength;
                var17 = var13.bind(var16)();
                var19 = _closure1_slot0;
                var13 = _closure1_slot1;
                var13 = var13[var5];
                var20 = var19.bind(var0)(var13);
                var19 = var20.getLengthInBits;
                var13 = var16.mode;
                var13 = var19.bind(var20)(var13, var12);
                var13 = var18.bind(var14)(var17, var13);
                var13 = var16.write;
                var13 = var13.bind(var16)(var14);
                var15 = var15 + 1;
                var13 = var4.dataList;
                var13 = var13.length;
                if (var15 < var13) {
                    _fun67428_ip = 180;
                    continue _fun67428
                }
            case 292:
                var13 = var14.getLengthInBits;
                var14 = var13.bind(var14)();
                var13 = var9 * var1;
                var1 = var12;
                if (!(!(var14 <= var13))) {
                    _fun67428_ip = 326;
                    continue _fun67428
                }
            case 313:
                var2 = var12 + 1;
                var1 = var2;
                if (var1 < var10) {
                    _fun67428_ip = 46;
                    continue _fun67428
                }
            case 326:
                var4.typeNumber = var1;
            case 332:
                var3 = var4.makeImpl;
                var1 = var4.getBestMaskPattern;
                var2 = var1.bind(var4)();
                var1 = false;
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var3.make = var2;
    var2 = function(arg0, arg1) { // Environment: var0
        _fun67429: for (var _fun67429_ip = 0;;) switch (_fun67429_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var2 = this;
                var1 = var2.typeNumber;
                var0 = 4;
                var1 = var0 * var1;
                var0 = 17;
                var0 = var1 + var0;
                var2.moduleCount = var0;
                var6 = global;
                var5 = var6.Array;
                var13 = var2.moduleCount;
                var1 = var5.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = var1;
                var0 = new var14[var5](var13, var12);
                var0 = var0 instanceof Object ? var0 : var1;
                var2.modules = var0;
                var0 = var2.moduleCount;
                var7 = 0;
                var0 = var7 < var0;
                var1 = null;
                var5 = 0;
                if (!var0) {
                    _fun67429_ip = 190;
                    continue _fun67429
                }
            case 93:
                var8 = var2.modules;
                var10 = var6.Array;
                var13 = var2.moduleCount;
                var9 = var10.prototype;
                var9 = Object.create(var9, {
                    constructor: {
                        value: var10
                    }
                });
                var14 = var9;
                var0 = new var14[var10](var13, var12);
                var0 = var0 instanceof Object ? var0 : var9;
                var8[var5] = var0;
                var0 = var2.moduleCount;
                var0 = var7 < var0;
                var8 = 0;
                if (!var0) {
                    _fun67429_ip = 177;
                    continue _fun67429
                }
            case 150:
                var0 = var2.modules;
                var0 = var0[var5];
                var0[var8] = var1;
                var8 = var8 + 1;
                var0 = var2.moduleCount;
                if (var8 < var0) {
                    _fun67429_ip = 150;
                    continue _fun67429
                }
            case 177:
                var5 = var5 + 1;
                var0 = var2.moduleCount;
                if (var5 < var0) {
                    _fun67429_ip = 93;
                    continue _fun67429
                }
            case 190:
                var0 = var2.setupPositionProbePattern;
                var0 = var0.bind(var2)(var7, var7);
                var6 = var2.setupPositionProbePattern;
                var0 = var2.moduleCount;
                var5 = 7;
                var0 = var0 - var5;
                var0 = var6.bind(var2)(var0, var7);
                var6 = var2.setupPositionProbePattern;
                var0 = var2.moduleCount;
                var0 = var0 - var5;
                var0 = var6.bind(var2)(var7, var0);
                var0 = var2.setupPositionAdjustPattern;
                var0 = var0.bind(var2)();
                var0 = var2.setupTimingPattern;
                var0 = var0.bind(var2)();
                var0 = var2.setupTypeInfo;
                var0 = var0.bind(var2)(var4, var3);
                var0 = var2.typeNumber;
                if (!(var0 >= var5)) {
                    _fun67429_ip = 302;
                    continue _fun67429
                }
            case 291:
                var0 = var2.setupTypeNumber;
                var0 = var0.bind(var2)(var4);
            case 302:
                var0 = var2.dataCache;
                if (!(var1 == var0)) {
                    _fun67429_ip = 356;
                    continue _fun67429
                }
            case 312:
                var6 = _closure1_slot2;
                var5 = var6.createData;
                var4 = var2.typeNumber;
                var1 = var2.errorCorrectLevel;
                var0 = var2.dataList;
                var0 = var5.bind(var6)(var4, var1, var0);
                var2.dataCache = var0;
            case 356:
                var1 = var2.mapData;
                var0 = var2.dataCache;
                var0 = var1.bind(var2)(var0, var3);
                var0 = undefined;
                return var0;
        }
    };
    var3.makeImpl = var2;
    var2 = function(arg0, arg1) { // Environment: var0
        _fun67430: for (var _fun67430_ip = 0;;) switch (_fun67430_ip) {
            case 0:
                var11 = arg0;
                var10 = arg1;
                var9 = this;
                var8 = -1;
                var0 = undefined;
                var7 = 7;
                var6 = 4;
                var5 = 2;
                var4 = 6;
                var3 = 0;
                var2 = var8;
                var1 = undefined;
            case 35:
                var13 = var11 + var2;
                var12 = var1;
                if (!(!(var13 <= var8))) {
                    _fun67430_ip = 249;
                    continue _fun67430
                }
            case 49:
                var14 = var9.moduleCount;
                var13 = var11 + var2;
                var20 = var14 <= var13;
                var19 = var2 <= var6;
                var18 = var5 <= var2;
                var17 = var4 == var2;
                var16 = var3 == var2;
                var15 = var2 <= var4;
                var14 = var3 <= var2;
                var13 = var8;
                var12 = var1;
                if (var20) {
                    _fun67430_ip = 249;
                    continue _fun67430
                }
            case 99:
                var20 = var10 + var13;
                var20 = var20 <= var8;
                if (var20) {
                    _fun67430_ip = 124;
                    continue _fun67430
                }
            case 110:
                var22 = var9.moduleCount;
                var21 = var10 + var13;
                var20 = var22 <= var21;
            case 124:
                if (var20) {
                    _fun67430_ip = 236;
                    continue _fun67430
                }
            case 127:
                var21 = var9.modules;
                var20 = var11 + var2;
                var22 = var21[var20];
                var21 = var10 + var13;
                var20 = var14;
                if (!var20) {
                    _fun67430_ip = 154;
                    continue _fun67430
                }
            case 151:
                var20 = var15;
            case 154:
                if (!var20) {
                    _fun67430_ip = 171;
                    continue _fun67430
                }
            case 157:
                var23 = var3 == var13;
                if (var23) {
                    _fun67430_ip = 168;
                    continue _fun67430
                }
            case 164:
                var23 = var4 == var13;
            case 168:
                var20 = var23;
            case 171:
                if (var20) {
                    _fun67430_ip = 203;
                    continue _fun67430
                }
            case 174:
                var23 = var3 <= var13;
                if (!var23) {
                    _fun67430_ip = 185;
                    continue _fun67430
                }
            case 181:
                var23 = var13 <= var4;
            case 185:
                if (!var23) {
                    _fun67430_ip = 200;
                    continue _fun67430
                }
            case 188:
                var24 = var16;
                if (var24) {
                    _fun67430_ip = 197;
                    continue _fun67430
                }
            case 194:
                var24 = var17;
            case 197:
                var23 = var24;
            case 200:
                var20 = var23;
            case 203:
                if (var20) {
                    _fun67430_ip = 232;
                    continue _fun67430
                }
            case 206:
                var23 = var18;
                if (!var23) {
                    _fun67430_ip = 215;
                    continue _fun67430
                }
            case 212:
                var23 = var19;
            case 215:
                if (!var23) {
                    _fun67430_ip = 222;
                    continue _fun67430
                }
            case 218:
                var23 = var5 <= var13;
            case 222:
                if (!var23) {
                    _fun67430_ip = 229;
                    continue _fun67430
                }
            case 225:
                var23 = var13 <= var6;
            case 229:
                var20 = var23;
            case 232:
                var22[var21] = var20;
            case 236:
                var13 = var13 + 1;
                var12 = var13;
                if (var12 <= var7) {
                    _fun67430_ip = 99;
                    continue _fun67430
                }
            case 249:
                var2 = var2 + 1;
                var1 = var12;
                if (var2 <= var7) {
                    _fun67430_ip = 35;
                    continue _fun67430
                }
            case 262:
                return var0;
        }
    };
    var3.setupPositionProbePattern = var2;
    var2 = function() { // Environment: var0
        _fun67431: for (var _fun67431_ip = 0;;) switch (_fun67431_ip) {
            case 0:
                var10 = this;
                var9 = 0;
                var8 = 8;
                var7 = true;
                var5 = 3;
                var4 = undefined;
                var3 = 0;
                var2 = 0;
                var1 = 0;
            case 23:
                var0 = var10.makeImpl;
                var0 = var0.bind(var10)(var7, var1);
                var11 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var5];
                var11 = var11.bind(var4)(var0);
                var0 = var11.getLostPoint;
                var11 = var0.bind(var11)(var10);
                var12 = var9 == var1;
                var0 = var1;
                if (var12) {
                    _fun67431_ip = 77;
                    continue _fun67431
                }
            case 73:
                var12 = var3 > var11;
            case 77:
                if (!var12) {
                    _fun67431_ip = 86;
                    continue _fun67431
                }
            case 80:
                var3 = var11;
                var2 = var0;
            case 86:
                var1 = var0 + 1;
                var0 = var2;
                var2 = var0;
                if (var1 < var8) {
                    _fun67431_ip = 23;
                    continue _fun67431
                }
            case 99:
                return var0;
        }
    };
    var3.getBestMaskPattern = var2;
    var2 = function(arg0, arg1, arg2) { // Environment: var0
        _fun67432: for (var _fun67432_ip = 0;;) switch (_fun67432_ip) {
            case 0:
                var3 = arg0;
                var7 = this;
                var2 = var3.createEmptyMovieClip;
                var1 = arg1;
                var0 = arg2;
                var0 = var2.bind(var3)(var1, var0);
                var1 = var7.make;
                var1 = var1.bind(var7)();
                var1 = var7.modules;
                var1 = var1.length;
                var6 = 0;
                var1 = var6 < var1;
                var4 = 1;
                var3 = 100;
                var2 = 0;
                var5 = undefined;
                if (!var1) {
                    _fun67432_ip = 250;
                    continue _fun67432
                }
            case 68:
                var10 = var4 * var2;
                var1 = var7.modules;
                var1 = var1[var2];
                var1 = var1.length;
                var1 = var6 < var1;
                var9 = var10 + var4;
                var8 = 0;
                if (!var1) {
                    _fun67432_ip = 229;
                    continue _fun67432
                }
            case 103:
                var11 = var4 * var8;
                var1 = var7.modules;
                var1 = var1[var2];
                var1 = var1[var8];
                if (!var1) {
                    _fun67432_ip = 204;
                    continue _fun67432
                }
            case 124:
                var1 = var0.beginFill;
                var1 = var1.bind(var0)(var6, var3);
                var1 = var0.moveTo;
                var1 = var1.bind(var0)(var11, var10);
                var1 = var0.lineTo;
                var12 = var11 + var4;
                var1 = var1.bind(var0)(var12, var10);
                var1 = var0.lineTo;
                var1 = var1.bind(var0)(var12, var9);
                var1 = var0.lineTo;
                var1 = var1.bind(var0)(var11, var9);
                var1 = var0.endFill;
                var1 = var1.bind(var0)();
            case 204:
                var8 = var8 + 1;
                var1 = var7.modules;
                var1 = var1[var2];
                var1 = var1.length;
                var5 = var11;
                if (var8 < var1) {
                    _fun67432_ip = 103;
                    continue _fun67432
                }
            case 229:
                var2 = var2 + 1;
                var1 = var7.modules;
                var1 = var1.length;
                if (var2 < var1) {
                    _fun67432_ip = 68;
                    continue _fun67432
                }
            case 250:
                return var0;
        }
    };
    var3.createMovieClip = var2;
    var2 = function() { // Environment: var0
        _fun67433: for (var _fun67433_ip = 0;;) switch (_fun67433_ip) {
            case 0:
                var7 = this;
                var0 = var7.moduleCount;
                var6 = 8;
                var0 = var0 - var6;
                var5 = 2;
                var4 = 0;
                var3 = 6;
                var2 = null;
                var1 = var6;
                if (!(var6 < var0)) {
                    _fun67433_ip = 89;
                    continue _fun67433
                }
            case 32:
                var0 = var7.modules;
                var0 = var0[var1];
                var0 = var0[var3];
                if (!(var2 == var0)) {
                    _fun67433_ip = 72;
                    continue _fun67433
                }
            case 50:
                var0 = var7.modules;
                var8 = var0[var1];
                var0 = var1 % var5;
                var0 = var0 === var4;
                var8[var3] = var0;
            case 72:
                var1 = var1 + 1;
                var0 = var7.moduleCount;
                var0 = var0 - var6;
                if (var1 < var0) {
                    _fun67433_ip = 32;
                    continue _fun67433
                }
            case 89:
                var0 = var7.moduleCount;
                var0 = var0 - var6;
                var1 = var6;
                if (!(var1 < var0)) {
                    _fun67433_ip = 163;
                    continue _fun67433
                }
            case 106:
                var0 = var7.modules;
                var0 = var0[var3];
                var0 = var0[var1];
                if (!(var2 == var0)) {
                    _fun67433_ip = 146;
                    continue _fun67433
                }
            case 124:
                var0 = var7.modules;
                var8 = var0[var3];
                var0 = var1 % var5;
                var0 = var0 === var4;
                var8[var1] = var0;
            case 146:
                var1 = var1 + 1;
                var0 = var7.moduleCount;
                var0 = var0 - var6;
                if (var1 < var0) {
                    _fun67433_ip = 106;
                    continue _fun67433
                }
            case 163:
                var0 = undefined;
                return var0;
        }
    };
    var3.setupTimingPattern = var2;
    var2 = function() { // Environment: var0
        _fun67434: for (var _fun67434_ip = 0;;) switch (_fun67434_ip) {
            case 0:
                var12 = this;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.getPatternPosition;
                var1 = var12.typeNumber;
                var11 = var2.bind(var3)(var1);
                var1 = var11.length;
                var10 = 0;
                var1 = var10 < var1;
                var9 = null;
                var8 = -2;
                var7 = 2;
                var6 = 0;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                var2 = undefined;
                if (!var1) {
                    _fun67434_ip = 284;
                    continue _fun67434
                }
            case 82:
                var1 = var11.length;
                var1 = var10 < var1;
                var14 = var3;
                var13 = var2;
                var15 = 0;
                var3 = var14;
                var2 = var13;
                if (!var1) {
                    _fun67434_ip = 269;
                    continue _fun67434
                }
            case 111:
                var19 = var11[var6];
                var18 = var11[var15];
                var1 = var12.modules;
                var1 = var1[var19];
                var1 = var1[var18];
                var16 = var9 == var1;
                var1 = var8;
                if (!var16) {
                    _fun67434_ip = 242;
                    continue _fun67434
                }
            case 143:
                var22 = var10 == var1;
                var21 = var7 == var1;
                var20 = var8 == var1;
                var16 = var8;
            case 158:
                var23 = var12.modules;
                var17 = var19 + var1;
                var24 = var23[var17];
                var23 = var18 + var16;
                var17 = var20;
                if (var17) {
                    _fun67434_ip = 185;
                    continue _fun67434
                }
            case 182:
                var17 = var21;
            case 185:
                if (var17) {
                    _fun67434_ip = 192;
                    continue _fun67434
                }
            case 188:
                var17 = var8 == var16;
            case 192:
                if (var17) {
                    _fun67434_ip = 199;
                    continue _fun67434
                }
            case 195:
                var17 = var7 == var16;
            case 199:
                if (var17) {
                    _fun67434_ip = 215;
                    continue _fun67434
                }
            case 202:
                var25 = var22;
                if (!var25) {
                    _fun67434_ip = 212;
                    continue _fun67434
                }
            case 208:
                var25 = var10 == var16;
            case 212:
                var17 = var25;
            case 215:
                var24[var23] = var17;
                var17 = var16 + 1;
                var16 = var17;
                if (var17 <= var7) {
                    _fun67434_ip = 158;
                    continue _fun67434
                }
            case 229:
                var1 = var1 + 1;
                var13 = var17;
                var14 = var1;
                if (var14 <= var7) {
                    _fun67434_ip = 143;
                    continue _fun67434
                }
            case 242:
                var15 = var15 + 1;
                var1 = var11.length;
                var5 = var19;
                var4 = var18;
                var3 = var14;
                var2 = var13;
                if (var15 < var1) {
                    _fun67434_ip = 111;
                    continue _fun67434
                }
            case 269:
                var6 = var6 + 1;
                var1 = var11.length;
                if (var6 < var1) {
                    _fun67434_ip = 82;
                    continue _fun67434
                }
            case 284:
                return var0;
        }
    };
    var3.setupPositionAdjustPattern = var2;
    var2 = function(arg0) { // Environment: var0
        _fun67435: for (var _fun67435_ip = 0;;) switch (_fun67435_ip) {
            case 0:
                var9 = arg0;
                var8 = this;
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var7 = 3;
                var1 = var0[var7];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.getBCHTypeNumber;
                var1 = var8.typeNumber;
                var6 = var2.bind(var3)(var1);
                var5 = global;
                var4 = 8;
                var3 = 18;
                var2 = 1;
                var10 = 0;
            case 60:
                var13 = !var9;
                if (!var13) {
                    _fun67435_ip = 78;
                    continue _fun67435
                }
            case 66:
                var1 = var6 >> var10;
                var1 = var1 & var2;
                var13 = var2 === var1;
            case 78:
                var12 = var8.modules;
                var15 = var5.Math;
                var14 = var15.floor;
                var1 = var10 / var7;
                var1 = var14.bind(var15)(var1);
                var12 = var12[var1];
                var14 = var10 % var7;
                var1 = var8.moduleCount;
                var1 = var14 + var1;
                var1 = var1 - var4;
                var1 = var1 - var7;
                var12[var1] = var13;
                var10 = var10 + 1;
                var1 = 0;
                if (var10 < var3) {
                    _fun67435_ip = 60;
                    continue _fun67435
                }
            case 144:
                var12 = !var9;
                if (!var12) {
                    _fun67435_ip = 162;
                    continue _fun67435
                }
            case 150:
                var10 = var6 >> var1;
                var10 = var10 & var2;
                var12 = var2 === var10;
            case 162:
                var11 = var8.modules;
                var13 = var1 % var7;
                var10 = var8.moduleCount;
                var10 = var13 + var10;
                var10 = var10 - var4;
                var10 = var10 - var7;
                var11 = var11[var10];
                var14 = var5.Math;
                var13 = var14.floor;
                var10 = var1 / var7;
                var10 = var13.bind(var14)(var10);
                var11[var10] = var12;
                var1 = var1 + 1;
                if (var1 < var3) {
                    _fun67435_ip = 144;
                    continue _fun67435
                }
            case 226:
                return var0;
        }
    };
    var3.setupTypeNumber = var2;
    var2 = function(arg0, arg1) { // Environment: var0
        _fun67436: for (var _fun67436_ip = 0;;) switch (_fun67436_ip) {
            case 0:
                var1 = arg0;
                var2 = this;
                var0 = var2.errorCorrectLevel;
                var3 = 3;
                var4 = var0 << var3;
                var0 = arg1;
                var5 = var4 | var0;
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var3 = var0[var3];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var3 = var4.getBCHTypeInfo;
                var8 = var3.bind(var4)(var5);
                var7 = 15;
                var3 = 8;
                var6 = 1;
                var5 = 9;
                var10 = 6;
                var9 = 0;
            case 75:
                var12 = !var1;
                if (!var12) {
                    _fun67436_ip = 93;
                    continue _fun67436
                }
            case 81:
                var4 = var8 >> var9;
                var4 = var4 & var6;
                var12 = var6 === var4;
            case 93:
                if (!(!(var9 < var10))) {
                    _fun67436_ip = 151;
                    continue _fun67436
                }
            case 97:
                if (!(!(var9 < var3))) {
                    _fun67436_ip = 131;
                    continue _fun67436
                }
            case 101:
                var13 = var2.modules;
                var4 = var2.moduleCount;
                var4 = var4 - var7;
                var4 = var4 + var9;
                var4 = var13[var4];
                var4[var3] = var12;
                _fun67436_ip = 165;
                continue _fun67436;
            case 131:
                var13 = var2.modules;
                var4 = var9 + var6;
                var4 = var13[var4];
                var4[var3] = var12;
                _fun67436_ip = 165;
                continue _fun67436;
            case 151:
                var4 = var2.modules;
                var4 = var4[var9];
                var4[var3] = var12;
            case 165:
                var9 = var9 + 1;
                var4 = 0;
                if (var9 < var7) {
                    _fun67436_ip = 75;
                    continue _fun67436
                }
            case 174:
                var11 = !var1;
                if (!var11) {
                    _fun67436_ip = 192;
                    continue _fun67436
                }
            case 180:
                var9 = var8 >> var4;
                var9 = var9 & var6;
                var11 = var6 === var9;
            case 192:
                if (!(!(var4 < var3))) {
                    _fun67436_ip = 252;
                    continue _fun67436
                }
            case 196:
                if (!(!(var4 < var5))) {
                    _fun67436_ip = 224;
                    continue _fun67436
                }
            case 200:
                var9 = var2.modules;
                var10 = var9[var3];
                var9 = var7 - var4;
                var9 = var9 - var6;
                var10[var9] = var11;
                _fun67436_ip = 280;
                continue _fun67436;
            case 224:
                var9 = var2.modules;
                var10 = var9[var3];
                var9 = var7 - var4;
                var9 = var9 - var6;
                var9 = var9 + var6;
                var10[var9] = var11;
                _fun67436_ip = 280;
                continue _fun67436;
            case 252:
                var9 = var2.modules;
                var10 = var9[var3];
                var9 = var2.moduleCount;
                var9 = var9 - var4;
                var9 = var9 - var6;
                var10[var9] = var11;
            case 280:
                var4 = var4 + 1;
                if (var4 < var7) {
                    _fun67436_ip = 174;
                    continue _fun67436
                }
            case 287:
                var4 = var2.modules;
                var2 = var2.moduleCount;
                var2 = var2 - var3;
                var2 = var4[var2];
                var1 = !var1;
                var2[var3] = var1;
                return var0;
        }
    };
    var3.setupTypeInfo = var2;
    var2 = function(arg0, arg1) { // Environment: var0
        _fun67437: for (var _fun67437_ip = 0;;) switch (_fun67437_ip) {
            case 0:
                var19 = arg0;
                var18 = arg1;
                var17 = this;
                var0 = var17.moduleCount;
                var16 = 1;
                var15 = var0 - var16;
                var0 = var17.moduleCount;
                var14 = var0 - var16;
                var13 = -1;
                var12 = 7;
                var11 = 0;
                var0 = undefined;
                var10 = 2;
                var8 = 3;
                var6 = null;
                var5 = 6;
                var4 = var13;
                var3 = var12;
                var2 = 0;
                var1 = undefined;
                if (!(var14 > var11)) {
                    _fun67437_ip = 331;
                    continue _fun67437
                }
            case 75:
                var27 = var15;
                var26 = var3;
                var25 = var2;
                var24 = var1;
                var23 = var14;
                if (!(var5 === var23)) {
                    _fun67437_ip = 109;
                    continue _fun67437
                }
            case 94:
                var23 = var14 - 1;
                var27 = var15;
                var26 = var3;
                var25 = var2;
                var24 = var1;
            case 109:
                var20 = var23;
                var21 = 0;
            case 114:
                var22 = var17.modules;
                var28 = var22[var27];
                var22 = var20 - var21;
                var22 = var28[var22];
                var3 = var26;
                var2 = var25;
                if (!(var6 == var22)) {
                    _fun67437_ip = 255;
                    continue _fun67437
                }
            case 142:
                var22 = var19.length;
                var22 = var25 < var22;
                var28 = false;
                if (!var22) {
                    _fun67437_ip = 172;
                    continue _fun67437
                }
            case 156:
                var22 = var19[var25];
                var22 = var22 >>> var26;
                var22 = var22 & var16;
                var28 = var16 === var22;
            case 172:
                var29 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var8];
                var30 = var29.bind(var0)(var22);
                var29 = var30.getMask;
                var22 = var20 - var21;
                var29 = var29.bind(var30)(var18, var27, var22);
                var22 = var28;
                if (!var29) {
                    _fun67437_ip = 215;
                    continue _fun67437
                }
            case 212:
                var22 = !var28;
            case 215:
                var28 = var17.modules;
                var29 = var28[var27];
                var28 = var20 - var21;
                var29[var28] = var22;
                var3 = var26 - 1;
                var2 = var25;
                var24 = var22;
                if (!(var13 == var3)) {
                    _fun67437_ip = 255;
                    continue _fun67437
                }
            case 246:
                var2 = var25 + 1;
                var3 = var12;
                var24 = var22;
            case 255:
                var21 = var21 + 1;
                var1 = var24;
                var26 = var3;
                var25 = var2;
                var24 = var1;
                if (var21 < var10) {
                    _fun67437_ip = 114;
                    continue _fun67437
                }
            case 277:
                var21 = var27 + var4;
                if (!(!(var21 < var11))) {
                    _fun67437_ip = 313;
                    continue _fun67437
                }
            case 285:
                var22 = var17.moduleCount;
                var26 = var3;
                var25 = var2;
                var23 = var20;
                var24 = var1;
                var27 = var21;
                if (!(var22 <= var27)) {
                    _fun67437_ip = 109;
                    continue _fun67437
                }
            case 313:
                var15 = var21 - var4;
                var4 = -var4;
                var14 = var20 - var10;
                if (var14 > var11) {
                    _fun67437_ip = 75;
                    continue _fun67437
                }
            case 331:
                return var0;
        }
    };
    var3.mapData = var2;
    var2 = 236;
    var1.PAD0 = var2;
    var2 = 17;
    var1.PAD1 = var2;
    var2 = function(arg0, arg1, arg2) { // Environment: var0
        _fun67438: for (var _fun67438_ip = 0;;) switch (_fun67438_ip) {
            case 0:
                var10 = arg0;
                var9 = arg2;
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 1;
                var0 = var3[var0];
                var8 = undefined;
                var5 = var1.bind(var8)(var0);
                var4 = var5.getRSBlocks;
                var0 = arg1;
                var5 = var4.bind(var5)(var10, var0);
                var0 = 2;
                var0 = var3[var0];
                var0 = var1.bind(var8)(var0);
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var18 = var1;
                var0 = new var18[var0](var17);
                var4 = var0 instanceof Object ? var0 : var1;
                var0 = var9.length;
                var7 = 0;
                var0 = var7 < var0;
                var6 = 4;
                var3 = 3;
                var1 = 0;
                if (!var0) {
                    _fun67438_ip = 200;
                    continue _fun67438
                }
            case 100:
                var11 = var9[var1];
                var12 = var4.put;
                var0 = var11.mode;
                var0 = var12.bind(var4)(var0, var6);
                var13 = var4.put;
                var0 = var11.getLength;
                var12 = var0.bind(var11)();
                var14 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var3];
                var15 = var14.bind(var8)(var0);
                var14 = var15.getLengthInBits;
                var0 = var11.mode;
                var0 = var14.bind(var15)(var0, var10);
                var0 = var13.bind(var4)(var12, var0);
                var0 = var11.write;
                var0 = var0.bind(var11)(var4);
                var1 = var1 + 1;
                var0 = var9.length;
                if (var1 < var0) {
                    _fun67438_ip = 100;
                    continue _fun67438
                }
            case 200:
                var0 = var5.length;
                var0 = var7 < var0;
                var8 = 0;
                var3 = 0;
                var1 = 0;
                if (!var0) {
                    _fun67438_ip = 247;
                    continue _fun67438
                }
            case 218:
                var0 = var5[var8];
                var0 = var0.dataCount;
                var3 = var3 + var0;
                var8 = var8 + 1;
                var0 = var5.length;
                var1 = var3;
                if (var8 < var0) {
                    _fun67438_ip = 218;
                    continue _fun67438
                }
            case 247:
                var0 = var4.getLengthInBits;
                var8 = var0.bind(var4)();
                var0 = 8;
                var3 = var0 * var1;
                if (!(!(var8 > var3))) {
                    _fun67438_ip = 510;
                    continue _fun67438
                }
            case 271:
                var3 = var4.getLengthInBits;
                var3 = var3.bind(var4)();
                var8 = var3 + var6;
                var3 = var0 * var1;
                if (!(var8 <= var3)) {
                    _fun67438_ip = 305;
                    continue _fun67438
                }
            case 293:
                var3 = var4.put;
                var3 = var3.bind(var4)(var7, var6);
            case 305:
                var3 = var4.getLengthInBits;
                var3 = var3.bind(var4)();
                var3 = var3 % var0;
                var6 = false;
                if (!(var3 !== var7)) {
                    _fun67438_ip = 354;
                    continue _fun67438
                }
            case 325:
                var3 = var4.putBit;
                var3 = var3.bind(var4)(var6);
                var3 = var4.getLengthInBits;
                var3 = var3.bind(var4)();
                var3 = var3 % var0;
                if (var3 !== var7) {
                    _fun67438_ip = 325;
                    continue _fun67438
                }
            case 354:
                var3 = var4.getLengthInBits;
                var6 = var3.bind(var4)();
                var3 = var0 * var1;
                if (!(!(var6 >= var3))) {
                    _fun67438_ip = 492;
                    continue _fun67438
                }
            case 372:
                var6 = var4.put;
                var3 = _closure1_slot2;
                var3 = var3.PAD0;
                var3 = var6.bind(var4)(var3, var0);
                var3 = var4.getLengthInBits;
                var6 = var3.bind(var4)();
                var3 = var0 * var1;
                if (!(!(var6 >= var3))) {
                    _fun67438_ip = 492;
                    continue _fun67438
                }
            case 412:
                var6 = var4.put;
                var3 = _closure1_slot2;
                var3 = var3.PAD1;
                var3 = var6.bind(var4)(var3, var0);
                var3 = var4.getLengthInBits;
                var6 = var3.bind(var4)();
                var3 = var0 * var1;
                if (!(!(var6 >= var3))) {
                    _fun67438_ip = 492;
                    continue _fun67438
                }
            case 452:
                var6 = var4.put;
                var3 = _closure1_slot2;
                var3 = var3.PAD0;
                var3 = var6.bind(var4)(var3, var0);
                var3 = var4.getLengthInBits;
                var6 = var3.bind(var4)();
                var3 = var0 * var1;
                if (!(var6 >= var3)) {
                    _fun67438_ip = 412;
                    continue _fun67438
                }
            case 492:
                var3 = _closure1_slot2;
                var2 = var3.createBytes;
                var2 = var2.bind(var3)(var4, var5);
                return var2;
            case 510:
                var2 = global;
                var2 = var2.Error;
                var3 = var4.getLengthInBits;
                var4 = var3.bind(var4)();
                var3 = 'code length overflow. (';
                var4 = var3 + var4;
                var3 = var0 * var1;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var0 = '>';
                var0 = var4 + var0;
                var3 = var0 + var3;
                var0 = ')';
                var17 = var3 + var0;
                var18 = var1;
                var0 = new var18[var2](var17, var16);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var1.createData = var2;
    var0 = function(arg0, arg1) { // Environment: var0
        _fun67439: for (var _fun67439_ip = 0;;) switch (_fun67439_ip) {
            case 0:
                var19 = arg0;
                var6 = arg1;
                var0 = global;
                var3 = var0.Array;
                var28 = var6.length;
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var29 = var2;
                var1 = new var29[var3](var28, var27);
                var9 = var1 instanceof Object ? var1 : var2;
                var3 = var0.Array;
                var28 = var6.length;
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var29 = var2;
                var1 = new var29[var3](var28, var27);
                var5 = var1 instanceof Object ? var1 : var2;
                var1 = var6.length;
                var4 = 0;
                var1 = var4 < var1;
                var18 = undefined;
                var16 = 3;
                var15 = 4;
                var14 = 1;
                var13 = 255;
                var12 = 0;
                var11 = 0;
                var10 = 0;
                var7 = 0;
                var2 = undefined;
                var8 = 0;
                var3 = 0;
                if (!var1) {
                    _fun67439_ip = 518;
                    continue _fun67439
                }
            case 118:
                var1 = var6[var7];
                var1 = var1.dataCount;
                var20 = var6[var7];
                var20 = var20.totalCount;
                var25 = var20 - var1;
                var21 = var0.Math;
                var20 = var21.max;
                var21 = var20.bind(var21)(var11, var1);
                var22 = var0.Math;
                var20 = var22.max;
                var20 = var20.bind(var22)(var10, var25);
                var22 = var0.Array;
                var23 = var22.prototype;
                var23 = Object.create(var23, {
                    constructor: {
                        value: var22
                    }
                });
                var29 = var23;
                var28 = var1;
                var22 = new var29[var22](var28, var27);
                var22 = var22 instanceof Object ? var22 : var23;
                var9[var7] = var22;
                var22 = var9[var7];
                var22 = var22.length;
                var22 = var4 < var22;
                var23 = 0;
                if (!var22) {
                    _fun67439_ip = 269;
                    continue _fun67439
                }
            case 227:
                var24 = var9[var7];
                var26 = var19.buffer;
                var22 = var23 + var12;
                var22 = var26[var22];
                var22 = var13 & var22;
                var24[var23] = var22;
                var23 = var23 + 1;
                var22 = var9[var7];
                var22 = var22.length;
                if (var23 < var22) {
                    _fun67439_ip = 227;
                    continue _fun67439
                }
            case 269:
                var12 = var12 + var1;
                var23 = _closure1_slot0;
                var1 = _closure1_slot1;
                var22 = var1[var16];
                var24 = var23.bind(var18)(var22);
                var22 = var24.getErrorCorrectPolynomial;
                var22 = var22.bind(var24)(var25);
                var1 = var1[var15];
                var25 = var23.bind(var18)(var1);
                var28 = var9[var7];
                var1 = var22.getLength;
                var1 = var1.bind(var22)();
                var27 = var1 - var14;
                var23 = var25.prototype;
                var23 = Object.create(var23, {
                    constructor: {
                        value: var25
                    }
                });
                var29 = var23;
                var1 = new var29[var25](var28, var27, var26);
                var23 = var1 instanceof Object ? var1 : var23;
                var1 = var23.mod;
                var23 = var1.bind(var23)(var22);
                var24 = var0.Array;
                var1 = var22.getLength;
                var1 = var1.bind(var22)();
                var28 = var1 - var14;
                var22 = var24.prototype;
                var22 = Object.create(var22, {
                    constructor: {
                        value: var24
                    }
                });
                var29 = var22;
                var1 = new var29[var24](var28, var27);
                var1 = var1 instanceof Object ? var1 : var22;
                var5[var7] = var1;
                var1 = var5[var7];
                var1 = var1.length;
                var1 = var4 < var1;
                var22 = 0;
                if (!var1) {
                    _fun67439_ip = 491;
                    continue _fun67439
                }
            case 421:
                var1 = var23.getLength;
                var1 = var1.bind(var23)();
                var24 = var22 + var1;
                var1 = var5[var7];
                var1 = var1.length;
                var24 = var24 - var1;
                var25 = var5[var7];
                var1 = 0;
                if (!(var24 >= var4)) {
                    _fun67439_ip = 468;
                    continue _fun67439
                }
            case 458:
                var26 = var23.get;
                var1 = var26.bind(var23)(var24);
            case 468:
                var25[var22] = var1;
                var22 = var22 + 1;
                var1 = var5[var7];
                var1 = var1.length;
                var2 = var24;
                if (var22 < var1) {
                    _fun67439_ip = 421;
                    continue _fun67439
                }
            case 491:
                var7 = var7 + 1;
                var1 = var6.length;
                var11 = var21;
                var10 = var20;
                var8 = var11;
                var3 = var10;
                if (var7 < var1) {
                    _fun67439_ip = 118;
                    continue _fun67439
                }
            case 518:
                var1 = var6.length;
                var1 = var4 < var1;
                var10 = 0;
                var7 = 0;
                var2 = 0;
                if (!var1) {
                    _fun67439_ip = 565;
                    continue _fun67439
                }
            case 536:
                var1 = var6[var10];
                var1 = var1.totalCount;
                var7 = var7 + var1;
                var10 = var10 + 1;
                var1 = var6.length;
                var2 = var7;
                if (var10 < var1) {
                    _fun67439_ip = 536;
                    continue _fun67439
                }
            case 565:
                var0 = var0.Array;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var29 = var1;
                var28 = var2;
                var0 = new var29[var0](var28, var27);
                var0 = var0 instanceof Object ? var0 : var1;
                var10 = var4 < var8;
                var7 = 0;
                var1 = 0;
                var2 = 0;
                if (!var10) {
                    _fun67439_ip = 692;
                    continue _fun67439
                }
            case 607:
                var10 = var6.length;
                var11 = var4 < var10;
                var12 = var1;
                var13 = 0;
                var10 = var12;
                if (!var11) {
                    _fun67439_ip = 679;
                    continue _fun67439
                }
            case 627:
                var11 = var9[var13];
                var11 = var11.length;
                var14 = var12;
                if (!(var7 < var11)) {
                    _fun67439_ip = 661;
                    continue _fun67439
                }
            case 643:
                var16 = parseFloat(var12);
                var14 = var16 + 1;
                var15 = var9[var13];
                var15 = var15[var7];
                var0[var16] = var15;
            case 661:
                var13 = var13 + 1;
                var11 = var6.length;
                var12 = var14;
                var10 = var12;
                if (var13 < var11) {
                    _fun67439_ip = 627;
                    continue _fun67439
                }
            case 679:
                var7 = var7 + 1;
                var1 = var10;
                var2 = var1;
                if (var7 < var8) {
                    _fun67439_ip = 607;
                    continue _fun67439
                }
            case 692:
                var7 = var4 < var3;
                var1 = 0;
                if (!var7) {
                    _fun67439_ip = 780;
                    continue _fun67439
                }
            case 701:
                var7 = var6.length;
                var7 = var4 < var7;
                var8 = var2;
                var9 = 0;
                var2 = var8;
                if (!var7) {
                    _fun67439_ip = 773;
                    continue _fun67439
                }
            case 721:
                var7 = var5[var9];
                var7 = var7.length;
                var10 = var8;
                if (!(var1 < var7)) {
                    _fun67439_ip = 755;
                    continue _fun67439
                }
            case 737:
                var12 = parseFloat(var8);
                var10 = var12 + 1;
                var11 = var5[var9];
                var11 = var11[var1];
                var0[var12] = var11;
            case 755:
                var9 = var9 + 1;
                var7 = var6.length;
                var8 = var10;
                var2 = var8;
                if (var9 < var7) {
                    _fun67439_ip = 721;
                    continue _fun67439
                }
            case 773:
                var1 = var1 + 1;
                if (var1 < var3) {
                    _fun67439_ip = 701;
                    continue _fun67439
                }
            case 780:
                return var0;
        }
    };
    var1.createBytes = var0;
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8331, 8333, 8335, 8336, 8337]);