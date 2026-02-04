// components_native/common/SafeAreaView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/common/SafeAreaView.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun43726: for (var _fun43726_ip = 0;;) switch (_fun43726_ip) {
            case 0:
                var6 = arg0;
                var13 = var6.top;
                var3 = undefined;
                if (!(var13 === var3)) {
                    _fun43726_ip = 18;
                    continue _fun43726
                }
            case 16:
                var13 = false;
            case 18:
                var11 = var6.bottom;
                if (!(var11 === var3)) {
                    _fun43726_ip = 29;
                    continue _fun43726
                }
            case 27:
                var11 = false;
            case 29:
                var10 = var6.left;
                if (!(var10 === var3)) {
                    _fun43726_ip = 40;
                    continue _fun43726
                }
            case 38:
                var10 = false;
            case 40:
                var7 = var6.right;
                if (!(var7 === var3)) {
                    _fun43726_ip = 51;
                    continue _fun43726
                }
            case 49:
                var7 = false;
            case 51:
                var2 = var6.style;
                var4 = {
                    'top': 0,
                    'bottom': 0,
                    'left': 0,
                    'right': 0,
                    'style': 0
                };
                var9 = null;
                var19 = var4;
                var18 = null;
                var0 = silentSetPrototypeOf(var19, var18);
                var19 = {};
                var18 = var6;
                var17 = var4;
                var4 = copyDataProperties(var19, var18, var17);
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var8 = _closure1_slot0;
                var12 = _closure1_slot1;
                var6 = 3;
                var6 = var12[var6];
                var6 = var8.bind(var3)(var6);
                var8 = var6.bind(var3)();
                var12 = _closure1_slot2;
                var6 = var12.useRef;
                var6 = var6.bind(var12)(var9);
                _closure2_slot0 = var6;
                if (!(var9 == var2)) {
                    _fun43726_ip = 156;
                    continue _fun43726
                }
            case 154:
                var2 = {};
            case 156:
                var16 = var2.paddingTop;
                if (var16) {
                    _fun43726_ip = 171;
                    continue _fun43726
                }
            case 165:
                var16 = var2.paddingVertical;
            case 171:
                if (var16) {
                    _fun43726_ip = 176;
                    continue _fun43726
                }
            case 174:
                var16 = 0;
            case 176:
                var14 = var2.paddingBottom;
                if (var14) {
                    _fun43726_ip = 191;
                    continue _fun43726
                }
            case 185:
                var14 = var2.paddingVertical;
            case 191:
                if (var14) {
                    _fun43726_ip = 196;
                    continue _fun43726
                }
            case 194:
                var14 = 0;
            case 196:
                var12 = var2.paddingLeft;
                if (var12) {
                    _fun43726_ip = 210;
                    continue _fun43726
                }
            case 205:
                var12 = var2.paddingHorizontal;
            case 210:
                if (var12) {
                    _fun43726_ip = 215;
                    continue _fun43726
                }
            case 213:
                var12 = 0;
            case 215:
                var9 = var2.paddingRight;
                if (var9) {
                    _fun43726_ip = 229;
                    continue _fun43726
                }
            case 224:
                var9 = var2.paddingHorizontal;
            case 229:
                if (var9) {
                    _fun43726_ip = 234;
                    continue _fun43726
                }
            case 232:
                var9 = 0;
            case 234:
                var5 = new Array(5);
                var5[0] = var2;
                var2 = undefined;
                if (!var13) {
                    _fun43726_ip = 266;
                    continue _fun43726
                }
            case 247:
                var13 = {};
                var15 = var8.top;
                var15 = var15 + var16;
                var13.paddingTop = var15;
                var2 = var13;
            case 266:
                var5[1] = var2;
                var2 = undefined;
                if (!var11) {
                    _fun43726_ip = 294;
                    continue _fun43726
                }
            case 275:
                var11 = {};
                var13 = var8.bottom;
                var13 = var13 + var14;
                var11.paddingBottom = var13;
                var2 = var11;
            case 294:
                var5[2] = var2;
                var2 = undefined;
                if (!var10) {
                    _fun43726_ip = 322;
                    continue _fun43726
                }
            case 303:
                var10 = {};
                var11 = var8.left;
                var11 = var11 + var12;
                var10.paddingLeft = var11;
                var2 = var10;
            case 322:
                var5[3] = var2;
                var2 = undefined;
                if (!var7) {
                    _fun43726_ip = 350;
                    continue _fun43726
                }
            case 331:
                var7 = {};
                var8 = var8.right;
                var8 = var8 + var9;
                var7.paddingRight = var8;
                var2 = var7;
            case 350:
                var5[4] = var2;
                _closure2_slot1 = var5;
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 4;
                var2 = var8[var2];
                var2 = var7.bind(var3)(var2);
                var2 = var2.bind(var3)(var6);
                var6 = 5;
                var6 = var8[var6];
                var6 = var7.bind(var3)(var6);
                var6 = var6.bind(var3)(var5, var2);
                _closure2_slot2 = var6;
                if (!var6) {
                    _fun43726_ip = 415;
                    continue _fun43726
                }
            case 408:
                _closure2_slot1 = var2;
                var5 = var2;
            case 415:
                var6 = _closure1_slot2;
                var2 = var6.useInsertionEffect;
                var1 = function() { // Environment: var1
                    _fun43727: for (var _fun43727_ip = 0;;) switch (_fun43727_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (var1) {
                                _fun43727_ip = 24;
                                continue _fun43727
                            }
                        case 10:
                            var1 = _closure2_slot0;
                            var0 = _closure2_slot1;
                            var1.current = var0;
                        case 24:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var6)(var1);
                var2 = _closure1_slot4;
                var1 = _closure1_slot3;
                var0 = {};
                var0.style = var5;
                var19 = var0;
                var18 = var4;
                var4 = copyDataProperties(var19, var18);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.SafeAreaPaddingView = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1568, 4735, 644, 2]);