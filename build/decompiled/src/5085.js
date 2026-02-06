// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var3 = 0;
    var6 = var5[var3];
    var0 = undefined;
    var6 = var4.bind(var0)(var6);
    var7 = var6.useCallback;
    var _closure1_slot2 = var7;
    var7 = var6.useMemo;
    var _closure1_slot3 = var7;
    var6 = var6.useRef;
    var _closure1_slot4 = var6;
    var6 = var5[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot5 = var4;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var1 = function arg0() {
        var1 = arg0;
        var10 = var1.children;
        var9 = _closure1_slot0;
        var12 = _closure1_slot1;
        var2 = 2;
        var1 = var12[var2];
        var3 = undefined;
        var7 = var9.bind(var3)(var1);
        var6 = var7.useSharedValue;
        var1 = 3;
        var4 = var12[var1];
        var4 = var9.bind(var3)(var4);
        var4 = var4.INITIAL_CONTAINER_HEIGHT;
        var13 = var6.bind(var7)(var4);
        var _closure2_slot0 = var13;
        var2 = var12[var2];
        var4 = var9.bind(var3)(var2);
        var2 = var4.useSharedValue;
        var1 = var12[var1];
        var1 = var9.bind(var3)(var1);
        var1 = var1.INITIAL_CONTAINER_OFFSET;
        var14 = var2.bind(var4)(var1);
        var _closure2_slot1 = var14;
        var2 = _closure1_slot3;
        var4 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 4;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var0 = var1.id;
            var2 = var0.bind(var1)();
            var0 = global;
            var0 = var0.HermesInternal;
            var1 = var0.concat;
            var0 = 'bottom-sheet-portal-';
            var0 = var1.bind(var0)(var2);
            return var0;
        };
        var1 = new Array(0);
        var11 = var2.bind(var3)(var4, var1);
        var _closure2_slot2 = var11;
        var4 = _closure1_slot4;
        var1 = new Array(0);
        var1 = var4.bind(var3)(var1);
        var _closure2_slot3 = var1;
        var16 = _closure1_slot2;
        var4 = function(arg0, arg1, arg2) { // Environment: var0
            _fun45544: for (var _fun45544_ip = 0;;) switch (_fun45544_ip) {
                case 0:
                    var5 = arg0;
                    var4 = arg1;
                    var9 = arg2;
                    var _closure3_slot0 = var5;
                    var1 = _closure2_slot3;
                    var3 = var1.current;
                    var1 = var3.slice;
                    var1 = var1.bind(var3)();
                    var3 = var1.findIndex;
                    var2 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var1 = var0.key;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var6 = var3.bind(var1)(var2);
                    var2 = var1.length;
                    var3 = 1;
                    var7 = var2 - var3;
                    var2 = -1;
                    if (!(var2 !== var6)) {
                        _fun45544_ip = 81;
                        continue _fun45544
                    }
                case 74:
                    if (!(var6 !== var7)) {
                        _fun45544_ip = 360;
                        continue _fun45544
                    }
                case 81:
                    var7 = var1.length;
                    var7 = var7 - var3;
                    var7 = var1[var7];
                    if (!var7) {
                        _fun45544_ip = 271;
                        continue _fun45544
                    }
                case 100:
                    var8 = var7.willUnmount;
                    if (var8) {
                        _fun45544_ip = 271;
                        continue _fun45544
                    }
                case 112:
                    var13 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var12 = 5;
                    var10 = var10[var12];
                    var11 = undefined;
                    var10 = var13.bind(var11)(var10);
                    var10 = var10.MODAL_STACK_BEHAVIOR;
                    var10 = var10.replace;
                    if (!(var9 !== var10)) {
                        _fun45544_ip = 229;
                        continue _fun45544
                    }
                case 152:
                    var10 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var8 = var8[var12];
                    var8 = var10.bind(var11)(var8);
                    var8 = var8.MODAL_STACK_BEHAVIOR;
                    var8 = var8.switch;
                    if (!(var9 === var8)) {
                        _fun45544_ip = 271;
                        continue _fun45544
                    }
                case 185:
                    var10 = var7.ref;
                    var11 = null;
                    var8 = var11 == var10;
                    var9 = var10;
                    if (var8) {
                        _fun45544_ip = 214;
                        continue _fun45544
                    }
                case 202:
                    var10 = var10.current;
                    var8 = var11 == var10;
                    var9 = var10;
                case 214:
                    if (var8) {
                        _fun45544_ip = 271;
                        continue _fun45544
                    }
                case 217:
                    var8 = var9.minimize;
                    var8 = var8.bind(var9)();
                    _fun45544_ip = 271;
                    continue _fun45544;
                case 229:
                    var9 = var7.ref;
                    var10 = null;
                    var7 = var10 == var9;
                    var8 = var9;
                    if (var7) {
                        _fun45544_ip = 258;
                        continue _fun45544
                    }
                case 246:
                    var9 = var9.current;
                    var7 = var10 == var9;
                    var8 = var9;
                case 258:
                    if (var7) {
                        _fun45544_ip = 271;
                        continue _fun45544
                    }
                case 261:
                    var7 = var8.dismiss;
                    var7 = var7.bind(var8)();
                case 271:
                    if (!(var2 !== var6)) {
                        _fun45544_ip = 323;
                        continue _fun45544
                    }
                case 275:
                    var2 = var1.splice;
                    var2 = var2.bind(var1)(var6, var3);
                    var7 = null;
                    var2 = var7 == var4;
                    var3 = undefined;
                    if (var2) {
                        _fun45544_ip = 310;
                        continue _fun45544
                    }
                case 298:
                    var6 = var4.current;
                    var2 = var7 == var6;
                    var3 = var6;
                case 310:
                    if (var2) {
                        _fun45544_ip = 323;
                        continue _fun45544
                    }
                case 313:
                    var2 = var3.restore;
                    var2 = var2.bind(var3)();
                case 323:
                    var3 = var1.push;
                    var2 = {};
                    var2.key = var5;
                    var2.ref = var4;
                    var4 = false;
                    var2.willUnmount = var4;
                    var2 = var3.bind(var1)(var2);
                    var0 = _closure2_slot3;
                    var0.current = var1;
                case 360:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = new Array(0);
        var8 = var16.bind(var3)(var4, var1);
        var _closure2_slot4 = var8;
        var4 = function(arg0) { // Environment: var0
            _fun45546: for (var _fun45546_ip = 0;;) switch (_fun45546_ip) {
                case 0:
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var3 = _closure2_slot3;
                    var4 = var3.current;
                    var2 = var4.slice;
                    var4 = var2.bind(var4)();
                    var2 = var4.findIndex;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.key;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var6 = var2.bind(var4)(var1);
                    var1 = var4.length;
                    var2 = 1;
                    var1 = var1 - var2;
                    var1 = var6 === var1;
                    var5 = var4.splice;
                    var5 = var5.bind(var4)(var6, var2);
                    var3.current = var4;
                    var4 = var3.current;
                    var5 = var4.length;
                    var4 = 0;
                    var4 = var5 > var4;
                    var5 = var3.current;
                    var3 = var3.current;
                    var3 = var3.length;
                    var3 = var3 - var2;
                    var3 = var5[var3];
                    if (!var1) {
                        _fun45546_ip = 125;
                        continue _fun45546
                    }
                case 122:
                    var1 = var4;
                case 125:
                    if (!var1) {
                        _fun45546_ip = 131;
                        continue _fun45546
                    }
                case 128:
                    var1 = var3;
                case 131:
                    if (!var1) {
                        _fun45546_ip = 143;
                        continue _fun45546
                    }
                case 134:
                    var3 = var3.willUnmount;
                    var1 = !var3;
                case 143:
                    if (!var1) {
                        _fun45546_ip = 215;
                        continue _fun45546
                    }
                case 146:
                    var0 = _closure2_slot3;
                    var1 = var0.current;
                    var0 = var0.current;
                    var0 = var0.length;
                    var0 = var0 - var2;
                    var0 = var1[var0];
                    var2 = var0.ref;
                    var3 = null;
                    var0 = var3 == var2;
                    var1 = var2;
                    if (var0) {
                        _fun45546_ip = 202;
                        continue _fun45546
                    }
                case 190:
                    var2 = var2.current;
                    var0 = var3 == var2;
                    var1 = var2;
                case 202:
                    if (var0) {
                        _fun45546_ip = 215;
                        continue _fun45546
                    }
                case 205:
                    var0 = var1.restore;
                    var0 = var0.bind(var1)();
                case 215:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = new Array(0);
        var7 = var16.bind(var3)(var4, var1);
        var _closure2_slot5 = var7;
        var4 = function(arg0) { // Environment: var0
            _fun45548: for (var _fun45548_ip = 0;;) switch (_fun45548_ip) {
                case 0:
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var1 = _closure2_slot3;
                    var3 = var1.current;
                    var1 = var3.slice;
                    var1 = var1.bind(var3)();
                    var3 = var1.findIndex;
                    var2 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var1 = var0.key;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var3 = var3.bind(var1)(var2);
                    var2 = var1.length;
                    var4 = 1;
                    var2 = var2 - var4;
                    var2 = var3 === var2;
                    var5 = -1;
                    if (!(var5 !== var3)) {
                        _fun45548_ip = 84;
                        continue _fun45548
                    }
                case 72:
                    var5 = var1[var3];
                    var3 = true;
                    var5.willUnmount = var3;
                case 84:
                    var3 = var1.length;
                    var3 = var3 > var4;
                    if (!var2) {
                        _fun45548_ip = 99;
                        continue _fun45548
                    }
                case 96:
                    var2 = var3;
                case 99:
                    if (!var2) {
                        _fun45548_ip = 160;
                        continue _fun45548
                    }
                case 102:
                    var3 = var1.length;
                    var2 = 2;
                    var2 = var3 - var2;
                    var2 = var1[var2];
                    var4 = var2.ref;
                    var5 = null;
                    var2 = var5 == var4;
                    var3 = var4;
                    if (var2) {
                        _fun45548_ip = 147;
                        continue _fun45548
                    }
                case 135:
                    var4 = var4.current;
                    var2 = var5 == var4;
                    var3 = var4;
                case 147:
                    if (var2) {
                        _fun45548_ip = 160;
                        continue _fun45548
                    }
                case 150:
                    var2 = var3.restore;
                    var2 = var2.bind(var3)();
                case 160:
                    var0 = _closure2_slot3;
                    var0.current = var1;
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = new Array(0);
        var4 = var16.bind(var3)(var4, var1);
        var _closure2_slot6 = var4;
        var6 = function(arg0) { // Environment: var0
            _fun45550: for (var _fun45550_ip = 0;;) switch (_fun45550_ip) {
                case 0:
                    var2 = arg0;
                    var _closure3_slot0 = var2;
                    var1 = _closure2_slot3;
                    var3 = var1.current;
                    if (var2) {
                        _fun45550_ip = 47;
                        continue _fun45550
                    }
                case 24:
                    var1 = var1.current;
                    var2 = var1.length;
                    var1 = 1;
                    var1 = var2 - var1;
                    var1 = var3[var1];
                    _fun45550_ip = 62;
                    continue _fun45550;
                case 47:
                    var2 = var3.find;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.key;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var1 = var2.bind(var3)(var0);
                case 62:
                    var2 = !var1;
                    var0 = !var2;
                    if (var2) {
                        _fun45550_ip = 117;
                        continue _fun45550
                    }
                case 71:
                    var1 = var1.ref;
                    var4 = null;
                    var2 = var4 == var1;
                    var3 = var1;
                    if (var2) {
                        _fun45550_ip = 100;
                        continue _fun45550
                    }
                case 88:
                    var1 = var1.current;
                    var2 = var4 == var1;
                    var3 = var1;
                case 100:
                    var0 = true;
                    if (var2) {
                        _fun45550_ip = 117;
                        continue _fun45550
                    }
                case 105:
                    var2 = var3.dismiss;
                    var2 = var2.bind(var3)();
                    var0 = true;
                case 117:
                    return var0;
            }
        };
        var1 = new Array(0);
        var15 = var16.bind(var3)(var6, var1);
        var _closure2_slot7 = var15;
        var6 = function() { // Environment: var0
            var0 = _closure2_slot3;
            var2 = var0.current;
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                _fun45553: for (var _fun45553_ip = 0;;) switch (_fun45553_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.ref;
                        var3 = null;
                        var0 = var3 == var2;
                        var1 = var2;
                        if (var0) {
                            _fun45553_ip = 32;
                            continue _fun45553
                        }
                    case 20:
                        var2 = var2.current;
                        var0 = var3 == var2;
                        var1 = var2;
                    case 32:
                        if (var0) {
                            _fun45553_ip = 45;
                            continue _fun45553
                        }
                    case 35:
                        var0 = var1.dismiss;
                        var0 = var0.bind(var1)();
                    case 45:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = new Array(0);
        var1 = var16.bind(var3)(var6, var1);
        var _closure2_slot8 = var1;
        var6 = new Array(2);
        var6[0] = var15;
        var6[1] = var1;
        var1 = function() { // Environment: var0
            var0 = {};
            var2 = _closure2_slot7;
            var0.dismiss = var2;
            var1 = _closure2_slot8;
            var0.dismissAll = var1;
            return var0;
        };
        var6 = var2.bind(var3)(var1, var6);
        var1 = new Array(6);
        var1[0] = var11;
        var1[1] = var13;
        var1[2] = var14;
        var1[3] = var8;
        var1[4] = var7;
        var1[5] = var4;
        var0 = function() { // Environment: var0
            var0 = {};
            var2 = _closure2_slot2;
            var0.hostName = var2;
            var2 = _closure2_slot0;
            var0.containerHeight = var2;
            var2 = _closure2_slot1;
            var0.containerOffset = var2;
            var2 = _closure2_slot4;
            var0.mountSheet = var2;
            var2 = _closure2_slot5;
            var0.unmountSheet = var2;
            var1 = _closure2_slot6;
            var0.willUnmountSheet = var1;
            return var0;
        };
        var7 = var2.bind(var3)(var0, var1);
        var2 = _closure1_slot5;
        var4 = 6;
        var0 = var12[var4];
        var0 = var9.bind(var3)(var0);
        var1 = var0.BottomSheetModalProvider;
        var0 = {};
        var0.value = var6;
        var6 = _closure1_slot6;
        var4 = var12[var4];
        var4 = var9.bind(var3)(var4);
        var5 = var4.BottomSheetModalInternalProvider;
        var4 = {};
        var4.value = var7;
        var7 = 7;
        var7 = var12[var7];
        var7 = var9.bind(var3)(var7);
        var8 = var7.BottomSheetHostingContainer;
        var7 = {};
        var7.containerOffset = var14;
        var7.containerHeight = var13;
        var8 = var2.bind(var3)(var8, var7);
        var7 = new Array(2);
        var7[0] = var8;
        var8 = 8;
        var8 = var12[var8];
        var8 = var9.bind(var3)(var8);
        var9 = var8.PortalProvider;
        var8 = {};
        var8.rootHostName = var11;
        var8.children = var10;
        var8 = var2.bind(var3)(var9, var8);
        var7[1] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 3723, 4940, 5083, 4937, 4947, 5059, 3928]);