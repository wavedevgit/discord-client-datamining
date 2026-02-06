// modules/keyboard/native/PortalKeyboardRenderer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = new Array(0);
    var _closure1_slot6 = var3;
    var3 = function arg0() {
        var0 = arg0;
        var0 = var0.id;
        return var0;
    };
    var _closure1_slot7 = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun107321: for (var _fun107321_ip = 0;;) switch (_fun107321_ip) {
            case 0:
                var1 = arg2;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 3;
                var0 = var4[var0];
                var5 = undefined;
                var0 = var3.bind(var5)(var0);
                var0 = var0.TransitionStates;
                var0 = var0.YEETED;
                var3 = var1 === var0;
                if (!var3) {
                    _fun107321_ip = 105;
                    continue _fun107321
                }
            case 47:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 4;
                var0 = var7[var0];
                var4 = var6.bind(var5)(var0);
                var0 = var4.getKeyboardType;
                var4 = var0.bind(var4)();
                var0 = 5;
                var0 = var7[var0];
                var0 = var6.bind(var5)(var0);
                var0 = var0.KeyboardTypes;
                var0 = var0.SYSTEM;
                var3 = var4 === var0;
            case 105:
                if (!var3) {
                    _fun107321_ip = 138;
                    continue _fun107321
                }
            case 108:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 6;
                var0 = var6[var0];
                var4 = var4.bind(var5)(var0);
                var0 = var4.isAndroid;
                var3 = var0.bind(var4)();
            case 138:
                var0 = null;
                if (var3) {
                    _fun107321_ip = 198;
                    continue _fun107321
                }
            case 143:
                var4 = _closure1_slot5;
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 7;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = {};
                var6 = arg1;
                var2.item = var6;
                var2.state = var1;
                var1 = arg3;
                var2.cleanUp = var1;
                var1 = arg0;
                var0 = var4.bind(var5)(var3, var2, var1);
            case 198:
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/keyboard/native/PortalKeyboardRenderer.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun107322: for (var _fun107322_ip = 0;;) switch (_fun107322_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.portal;
                var3 = undefined;
                if (!(var0 === var3)) {
                    _fun107322_ip = 19;
                    continue _fun107322
                }
            case 17:
                var0 = true;
            case 19:
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var8 = _closure1_slot3;
                var2 = var8.useId;
                var4 = var2.bind(var8)();
                _closure2_slot0 = var4;
                var7 = var8.useLayoutEffect;
                var5 = new Array(1);
                var5[0] = var4;
                var2 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.registerPortalKeyboardRenderer;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var7.bind(var8)(var2, var5);
                var7 = var8.useLayoutEffect;
                var5 = function() { // Environment: var1
                    var3 = _closure1_slot4;
                    var2 = undefined;
                    var1 = function() { // Environment: var0
                        _fun107325: for (var _fun107325_ip = 0;;) switch (_fun107325_ip) {
                            case 0:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var3 = 8;
                                var2 = var6[var3];
                                var0 = undefined;
                                var2 = var5.bind(var0)(var2);
                                var7 = var2.PortalKeyboardUIStore;
                                var4 = var7.getField;
                                var2 = 'keyboard';
                                var4 = var4.bind(var7)(var2);
                                var2 = 4;
                                var2 = var6[var2];
                                var5 = var5.bind(var0)(var2);
                                var2 = var5.getKeyboardType;
                                var5 = var2.bind(var5)();
                                var2 = null;
                                var2 = var2 != var4;
                                if (!var2) {
                                    _fun107325_ip = 86;
                                    continue _fun107325
                                }
                            case 77:
                                var4 = var4.type;
                                var2 = var5 !== var4;
                            case 86:
                                if (!var2) {
                                    _fun107325_ip = 116;
                                    continue _fun107325
                                }
                            case 89:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var1 = var1[var3];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.closePortalKeyboardIfUnhandled;
                                var1 = var1.bind(var2)();
                            case 116:
                                return var0;
                        }
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 8;
                        var1 = var3[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.closePortalKeyboardIfUnhandled;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    return var0;
                };
                var2 = new Array(0);
                var2 = var7.bind(var8)(var5, var2);
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 8;
                var7 = var8[var2];
                var7 = var5.bind(var3)(var7);
                var10 = var7.PortalKeyboardUIStore;
                var9 = var10.useField;
                var7 = 'keyboard';
                var7 = var9.bind(var10)(var7);
                _closure2_slot1 = var7;
                var2 = var8[var2];
                var2 = var5.bind(var3)(var2);
                var8 = var2.PortalKeyboardUIStore;
                var5 = var8.useField;
                var2 = 'renderers';
                var5 = var5.bind(var8)(var2);
                var8 = var5.length;
                var2 = 0;
                var8 = var2 === var8;
                if (var8) {
                    _fun107322_ip = 211;
                    continue _fun107322
                }
            case 191:
                var9 = var5.length;
                var2 = 1;
                var2 = var9 - var2;
                var2 = var5[var2];
                var8 = var2 === var4;
            case 211:
                _closure2_slot2 = var8;
                var5 = _closure1_slot3;
                var4 = var5.useMemo;
                var2 = new Array(2);
                var2[0] = var8;
                var2[1] = var7;
                var1 = function() { // Environment: var1
                    _fun107327: for (var _fun107327_ip = 0;;) switch (_fun107327_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun107327_ip = 20;
                                continue _fun107327
                            }
                        case 13:
                            var0 = _closure2_slot2;
                            if (var0) {
                                _fun107327_ip = 29;
                                continue _fun107327
                            }
                        case 20:
                            var0 = _closure1_slot6;
                            _fun107327_ip = 44;
                            continue _fun107327;
                        case 29:
                            var2 = _closure2_slot1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0 = var1;
                        case 44:
                            return var0;
                    }
                };
                var7 = var4.bind(var5)(var1, var2);
                if (var0) {
                    _fun107322_ip = 264;
                    continue _fun107322
                }
            case 252:
                var0 = _closure1_slot3;
                var2 = var0.Fragment;
                _fun107322_ip = 290;
                continue _fun107322;
            case 264:
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 9;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var2 = var0.PortalKeyboard;
            case 290:
                var1 = _closure1_slot5;
                var0 = {};
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 3;
                var4 = var8[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.TransitionGroup;
                var4 = {};
                var4.items = var7;
                var7 = _closure1_slot7;
                var4.getItemKey = var7;
                var6 = _closure1_slot8;
                var4.renderItem = var6;
                var4 = var1.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var1.bind(var3)(var2, var0);
                return var0;
        }
    };
    var2.PortalKeyboardRenderer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1466, 33, 4028, 3916, 1567, 478, 13877, 3917, 3920, 2]);