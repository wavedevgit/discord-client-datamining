// modules/freeze/native/SuspenseVisibleView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun105262: for (var _fun105262_ip = 0;;) switch (_fun105262_ip) {
        case 0:
            var4 = require;
            var6 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var6;
            var _closure1_slot1 = var5;
            var0 = function arg0() {
                var4 = arg0;
                var8 = var4.forwardedRef;
                var6 = null;
                var3 = Object.create(var6);
                var2 = 0;
                var3.forwardedRef = var2;
                var12 = {};
                var11 = var4;
                var10 = var3;
                var4 = copyDataProperties(var12, var11, var10);
                var5 = _closure1_slot3;
                var3 = var5.useState;
                var7 = var3.bind(var5)(var6);
                var6 = _closure1_slot2;
                var3 = undefined;
                var5 = 2;
                var5 = var6.bind(var3)(var7, var5);
                var9 = var5[var2];
                var _closure2_slot0 = var9;
                var2 = 1;
                var2 = var5[var2];
                var _closure2_slot1 = var2;
                var7 = _closure1_slot3;
                var6 = var7.useCallback;
                var5 = function(arg0) { // Environment: var1
                    _fun105264: for (var _fun105264_ip = 0;;) switch (_fun105264_ip) {
                        case 0:
                            var2 = arg0;
                            var5 = null;
                            var3 = var5 == var2;
                            var0 = undefined;
                            var1 = undefined;
                            if (var3) {
                                _fun105264_ip = 51;
                                continue _fun105264
                            }
                        case 16:
                            var3 = var2.viewConfig;
                            var4 = var5 == var3;
                            var1 = undefined;
                            if (var4) {
                                _fun105264_ip = 51;
                                continue _fun105264
                            }
                        case 31:
                            var3 = var3.validAttributes;
                            var4 = var5 == var3;
                            var1 = undefined;
                            if (var4) {
                                _fun105264_ip = 51;
                                continue _fun105264
                            }
                        case 46:
                            var1 = var3.style;
                        case 51:
                            if (!(var5 == var1)) {
                                _fun105264_ip = 267;
                                continue _fun105264
                            }
                        case 58:
                            var3 = var5 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun105264_ip = 102;
                                continue _fun105264
                            }
                        case 67:
                            var3 = var2._viewConfig;
                            var4 = var5 == var3;
                            var1 = undefined;
                            if (var4) {
                                _fun105264_ip = 102;
                                continue _fun105264
                            }
                        case 82:
                            var3 = var3.validAttributes;
                            var4 = var5 == var3;
                            var1 = undefined;
                            if (var4) {
                                _fun105264_ip = 102;
                                continue _fun105264
                            }
                        case 97:
                            var1 = var3.style;
                        case 102:
                            if (!(var5 == var1)) {
                                _fun105264_ip = 212;
                                continue _fun105264
                            }
                        case 106:
                            var3 = var5 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun105264_ip = 150;
                                continue _fun105264
                            }
                        case 115:
                            var3 = var2.__viewConfig;
                            var4 = var5 == var3;
                            var1 = undefined;
                            if (var4) {
                                _fun105264_ip = 150;
                                continue _fun105264
                            }
                        case 130:
                            var3 = var3.validAttributes;
                            var4 = var5 == var3;
                            var1 = undefined;
                            if (var4) {
                                _fun105264_ip = 150;
                                continue _fun105264
                            }
                        case 145:
                            var1 = var3.style;
                        case 150:
                            if (!(var5 != var1)) {
                                _fun105264_ip = 320;
                                continue _fun105264
                            }
                        case 157:
                            var1 = var2.__viewConfig;
                            var3 = var1.validAttributes;
                            var1 = {};
                            var4 = var2.__viewConfig;
                            var4 = var4.validAttributes;
                            var6 = var4.style;
                            var7 = var1;
                            var4 = copyDataProperties(var7, var6);
                            var4 = 'display';
                            var1[var4] = var5;
                            var3.style = var1;
                            _fun105264_ip = 320;
                            continue _fun105264;
                        case 212:
                            var1 = var2._viewConfig;
                            var3 = var1.validAttributes;
                            var1 = {};
                            var4 = var2._viewConfig;
                            var4 = var4.validAttributes;
                            var6 = var4.style;
                            var7 = var1;
                            var4 = copyDataProperties(var7, var6);
                            var4 = 'display';
                            var1[var4] = var5;
                            var3.style = var1;
                            _fun105264_ip = 320;
                            continue _fun105264;
                        case 267:
                            var1 = var2.viewConfig;
                            var3 = var1.validAttributes;
                            var1 = {};
                            var4 = var2.viewConfig;
                            var4 = var4.validAttributes;
                            var6 = var4.style;
                            var7 = var1;
                            var4 = copyDataProperties(var7, var6);
                            var4 = 'display';
                            var1[var4] = var5;
                            var3.style = var1;
                        case 320:
                            var1 = _closure2_slot1;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                    }
                };
                var2 = new Array(0);
                var5 = var6.bind(var7)(var5, var2);
                var7 = _closure1_slot3;
                var6 = var7.useImperativeHandle;
                var2 = new Array(1);
                var2[0] = var9;
                var1 = function() { // Environment: var1
                    var0 = _closure2_slot0;
                    return var0;
                };
                var1 = var6.bind(var7)(var8, var1, var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 6;
                var0 = var6[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.ref = var5;
                var12 = var0;
                var11 = var4;
                var4 = copyDataProperties(var12, var11);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var _closure1_slot7 = var0;
            var0 = global;
            var8 = var0.Object;
            var7 = var8.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var8)(var2, var0, var3);
            var0 = 0;
            var3 = var5[var0];
            var0 = undefined;
            var3 = var6.bind(var0)(var3);
            var _closure1_slot2 = var3;
            var3 = 1;
            var6 = var5[var3];
            var3 = arg3;
            var6 = var3.bind(var0)(var6);
            var _closure1_slot3 = var6;
            var3 = 2;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.View;
            var _closure1_slot4 = var3;
            var3 = 3;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.jsx;
            var _closure1_slot5 = var3;
            var3 = 4;
            var3 = var5[var3];
            var7 = var4.bind(var0)(var3);
            var3 = var7.isIOS;
            var3 = var3.bind(var7)();
            if (!var3) {
                _fun105262_ip = 193;
                continue _fun105262
            }
        case 168:
            var7 = 5;
            var7 = var5[var7];
            var8 = var4.bind(var0)(var7);
            var7 = var8.isFabric;
            var7 = var7.bind(var8)();
            var3 = !var7;
        case 193:
            var _closure1_slot6 = var3;
            var3 = var6.forwardRef;
            var1 = function(arg0, arg1) { // Environment: var1
                _fun105266: for (var _fun105266_ip = 0;;) switch (_fun105266_ip) {
                    case 0:
                        var1 = arg0;
                        var5 = arg1;
                        var0 = _closure1_slot6;
                        var4 = _closure1_slot5;
                        if (var0) {
                            _fun105266_ip = 51;
                            continue _fun105266
                        }
                    case 20:
                        var6 = _closure1_slot7;
                        var3 = {};
                        var3.forwardedRef = var5;
                        var8 = var3;
                        var7 = var1;
                        var0 = copyDataProperties(var8, var7);
                        var0 = undefined;
                        var0 = var4.bind(var0)(var6, var3);
                        _fun105266_ip = 79;
                        continue _fun105266;
                    case 51:
                        var3 = _closure1_slot4;
                        var2 = {};
                        var2.ref = var5;
                        var8 = var2;
                        var7 = var1;
                        var1 = copyDataProperties(var8, var7);
                        var1 = undefined;
                        var0 = var4.bind(var1)(var3, var2);
                    case 79:
                        return var0;
                }
            };
            var1 = var3.bind(var6)(var1);
            var3 = 7;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/freeze/native/SuspenseVisibleView.tsx';
            var3 = var4.bind(var5)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 479, 3908, 13693, 2]);