// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 0;
    var4 = var3[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot2 = var3;
    var1 = function arg0() {
        _fun75057: for (var _fun75057_ip = 0;;) switch (_fun75057_ip) {
            case 0:
                var4 = arg0;
                var0 = var4.defaultIndex;
                var17 = 0;
                var3 = undefined;
                var19 = 0;
                if (!(var3 !== var0)) {
                    _fun75057_ip = 24;
                    continue _fun75057
                }
            case 21:
                var19 = var0;
            case 24:
                var15 = var4.data;
                if (!(var3 === var15)) {
                    _fun75057_ip = 37;
                    continue _fun75057
                }
            case 33:
                var15 = new Array(0);
            case 37:
                var _closure2_slot0 = var15;
                var0 = var4.loop;
                var13 = var3 === var0;
                if (var13) {
                    _fun75057_ip = 57;
                    continue _fun75057
                }
            case 54:
                var13 = var0;
            case 57:
                var _closure2_slot1 = var13;
                var0 = var4.autoPlayInterval;
                var16 = 1000;
                if (!(var3 !== var0)) {
                    _fun75057_ip = 80;
                    continue _fun75057
                }
            case 77:
                var16 = var0;
            case 80:
                var0 = var4.scrollAnimationDuration;
                var10 = 500;
                if (!(var3 !== var0)) {
                    _fun75057_ip = 99;
                    continue _fun75057
                }
            case 96:
                var10 = var0;
            case 99:
                var9 = var4.style;
                if (!(var3 === var9)) {
                    _fun75057_ip = 110;
                    continue _fun75057
                }
            case 108:
                var9 = {};
            case 110:
                var0 = var4.autoFillData;
                var18 = var3 === var0;
                if (var18) {
                    _fun75057_ip = 126;
                    continue _fun75057
                }
            case 123:
                var18 = var0;
            case 126:
                var _closure2_slot2 = var18;
                var0 = var4.enabled;
                var12 = var3 === var0;
                if (var12) {
                    _fun75057_ip = 145;
                    continue _fun75057
                }
            case 142:
                var12 = var0;
            case 145:
                var0 = var4.pagingEnabled;
                var8 = var3 === var0;
                if (var8) {
                    _fun75057_ip = 161;
                    continue _fun75057
                }
            case 158:
                var8 = var0;
            case 161:
                var0 = var4.overscrollEnabled;
                var6 = var3 === var0;
                if (var6) {
                    _fun75057_ip = 177;
                    continue _fun75057
                }
            case 174:
                var6 = var0;
            case 177:
                var7 = var4.snapEnabled;
                if (!(var3 === var7)) {
                    _fun75057_ip = 208;
                    continue _fun75057
                }
            case 187:
                var1 = var4.enableSnap;
                var0 = null;
                var0 = var0 == var1;
                if (var0) {
                    _fun75057_ip = 205;
                    continue _fun75057
                }
            case 202:
                var0 = var1;
            case 205:
                var7 = var0;
            case 208:
                var11 = var4.width;
                var14 = var4.height;
                var1 = global;
                var5 = var1.Math;
                var0 = var5.round;
                if (var11) {
                    _fun75057_ip = 236;
                    continue _fun75057
                }
            case 234:
                var11 = 0;
            case 236:
                var5 = var0.bind(var5)(var11);
                var11 = var1.Math;
                var0 = var11.round;
                if (var14) {
                    _fun75057_ip = 257;
                    continue _fun75057
                }
            case 255:
                var14 = 0;
            case 257:
                var0 = var0.bind(var11)(var14);
                var14 = var1.Math;
                var11 = var14.max;
                var11 = var11.bind(var14)(var16, var17);
                var17 = _closure1_slot2;
                var16 = var17.useMemo;
                var14 = new Array(3);
                var14[0] = var15;
                var14[1] = var13;
                var14[2] = var18;
                var2 = function() { // Environment: var2
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 1;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.computedFillDataWithAutoFillData;
                    var0 = {};
                    var4 = _closure2_slot1;
                    var0.loop = var4;
                    var4 = _closure2_slot2;
                    var0.autoFillData = var4;
                    var4 = _closure2_slot0;
                    var0.data = var4;
                    var3 = _closure2_slot0;
                    var3 = var3.length;
                    var0.dataLength = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var17 = var16.bind(var17)(var2, var14);
                var16 = var17.length;
                var14 = var15.length;
                var20 = var4.mode;
                var2 = 'vertical-stack';
                var2 = var2 !== var20;
                if (!var2) {
                    _fun75057_ip = 363;
                    continue _fun75057
                }
            case 348:
                var21 = var4.mode;
                var20 = 'horizontal-stack';
                var2 = var20 !== var21;
            case 363:
                if (var2) {
                    _fun75057_ip = 429;
                    continue _fun75057
                }
            case 366:
                var2 = var4.modeConfig;
                if (var2) {
                    _fun75057_ip = 383;
                    continue _fun75057
                }
            case 375:
                var2 = {};
                var4.modeConfig = var2;
            case 383:
                var2 = var4.modeConfig;
                var21 = var4.modeConfig;
                var20 = null;
                var22 = var20 == var21;
                var3 = undefined;
                if (var22) {
                    _fun75057_ip = 412;
                    continue _fun75057
                }
            case 406:
                var3 = var21.showLength;
            case 412:
                if (!(var20 == var3)) {
                    _fun75057_ip = 423;
                    continue _fun75057
                }
            case 416:
                var20 = 1;
                var3 = var16 - var20;
            case 423:
                var2.showLength = var3;
            case 429:
                var3 = var1.Object;
                var2 = var3.assign;
                var1 = {};
                var1.defaultIndex = var19;
                var1.autoFillData = var18;
                var1.data = var17;
                var1.dataLength = var16;
                var1.rawData = var15;
                var1.rawDataLength = var14;
                var1.loop = var13;
                var1.enabled = var12;
                var1.autoPlayInterval = var11;
                var1.scrollAnimationDuration = var10;
                var1.style = var9;
                var1.pagingEnabled = var8;
                var1.snapEnabled = var7;
                var1.overscrollEnabled = var6;
                var1.width = var5;
                var1.height = var0;
                var0 = {};
                var0 = var2.bind(var3)(var0, var4, var1);
                return var0;
        }
    };
    var2.useInitProps = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 9456]);