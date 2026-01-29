// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var4 = function(arg0) { // Original name: createVirtualView, environment: var1
        var3 = arg0;
        var _closure2_slot0 = var3;
        var2 = _closure1_slot7;
        var2 = var3 !== var2;
        var _closure2_slot1 = var2;
        var2 = _closure1_slot3;
        var1 = var2.forwardRef;
        var0 = function(arg0, arg1) { // Original name: VirtualView_withRef, environment: var0
            _fun5943: for (var _fun5943_ip = 0;;) switch (_fun5943_ip) {
                case 0:
                    var0 = arg0;
                    var5 = var0.children;
                    var7 = var0.nativeID;
                    var11 = var0.style;
                    var0 = var0.onModeChange;
                    var _closure3_slot0 = var0;
                    var1 = _closure1_slot5;
                    var0 = _closure2_slot0;
                    var3 = undefined;
                    var2 = var1.bind(var3)(var0);
                    var1 = _closure1_slot2;
                    var0 = 2;
                    var1 = var1.bind(var3)(var2, var0);
                    var0 = 0;
                    var15 = var1[var0];
                    var0 = 1;
                    var0 = var1[var0];
                    var _closure3_slot1 = var0;
                    var0 = _closure1_slot7;
                    var6 = var15 !== var0;
                    var2 = _closure1_slot6;
                    var1 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var0 = 4;
                    var0 = var10[var0];
                    var1 = var1.bind(var3)(var0);
                    var0 = {};
                    var9 = _closure2_slot1;
                    var0.initialHidden = var9;
                    var0.nativeID = var7;
                    var7 = arg1;
                    var0.ref = var7;
                    var12 = global;
                    var9 = var12.VirtualViewRenderState;
                    if (var6) {
                        _fun5943_ip = 156;
                        continue _fun5943
                    }
                case 148:
                    var7 = var9.Rendered;
                    _fun5943_ip = 162;
                    continue _fun5943;
                case 156:
                    var7 = var9.None;
                case 162:
                    var0.renderState = var7;
                    var7 = var11;
                    if (!var6) {
                        _fun5943_ip = 245;
                        continue _fun5943
                    }
                case 173:
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot1;
                    var8 = 5;
                    var8 = var17[var8];
                    var10 = var16.bind(var3)(var8);
                    var9 = var10.compose;
                    var8 = {};
                    var14 = var12.Math;
                    var13 = var14.abs;
                    var12 = 3;
                    var12 = var17[var12];
                    var12 = var16.bind(var3)(var12);
                    var12 = var12.bind(var3)(var15);
                    var12 = var13.bind(var14)(var12);
                    var8.height = var12;
                    var7 = var9.bind(var10)(var11, var8);
                case 245:
                    var0.style = var7;
                    var4 = function(arg0) { // Original name: handleModeChange, environment: var4
                        _fun5944: for (var _fun5944_ip = 0;;) switch (_fun5944_ip) {
                            case 0:
                                var5 = arg0;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var0 = 3;
                                var0 = var2[var0];
                                var2 = undefined;
                                var6 = var3.bind(var2)(var0);
                                var0 = global;
                                var8 = var0.VirtualViewMode;
                                var7 = var8.cast;
                                var3 = var5.nativeEvent;
                                var3 = var3.mode;
                                var3 = var7.bind(var8)(var3);
                                var3 = var6.bind(var2)(var3);
                                var6 = _closure3_slot0;
                                var7 = null;
                                var9 = var7 == var6;
                                var6 = null;
                                if (var9) {
                                    _fun5944_ip = 149;
                                    continue _fun5944
                                }
                            case 83:
                                var11 = _closure3_slot0;
                                var10 = var11.bind;
                                var9 = {};
                                var9.mode = var3;
                                var12 = var5.currentTarget;
                                var9.target = var12;
                                var12 = var5.nativeEvent;
                                var12 = var12.targetRect;
                                var9.targetRect = var12;
                                var12 = var5.nativeEvent;
                                var12 = var12.thresholdRect;
                                var9.thresholdRect = var12;
                                var6 = var10.bind(var11)(var7, var9);
                            case 149:
                                var _closure4_slot0 = var6;
                                var9 = var0.VirtualViewMode;
                                var9 = var9.Visible;
                                if (!(var3 === var9)) {
                                    _fun5944_ip = 192;
                                    continue _fun5944
                                }
                            case 169:
                                var9 = _closure3_slot1;
                                var8 = _closure1_slot7;
                                var8 = var9.bind(var2)(var8);
                                if (!(var7 != var6)) {
                                    _fun5944_ip = 275;
                                    continue _fun5944
                                }
                            case 186:
                                var6 = var6.bind(var2)();
                                _fun5944_ip = 275;
                                continue _fun5944;
                            case 192:
                                var6 = var0.VirtualViewMode;
                                var6 = var6.Prerender;
                                if (!(var3 === var6)) {
                                    _fun5944_ip = 224;
                                    continue _fun5944
                                }
                            case 208:
                                var7 = _closure1_slot4;
                                var6 = function() { // Environment: var1
                                    _fun5946: for (var _fun5946_ip = 0;;) switch (_fun5946_ip) {
                                        case 0:
                                            var2 = _closure3_slot1;
                                            var1 = _closure1_slot7;
                                            var0 = undefined;
                                            var1 = var2.bind(var0)(var1);
                                            var3 = _closure4_slot0;
                                            var2 = null;
                                            if (!(var2 != var3)) {
                                                _fun5946_ip = 42;
                                                continue _fun5946
                                            }
                                        case 34:
                                            var1 = _closure4_slot0;
                                            var1 = var1.bind(var0)();
                                        case 42:
                                            return var0;
                                    }
                                };
                                var6 = var7.bind(var2)(var6);
                                _fun5944_ip = 275;
                                continue _fun5944;
                            case 224:
                                var6 = var0.VirtualViewMode;
                                var6 = var6.Hidden;
                                if (!(var3 === var6)) {
                                    _fun5944_ip = 277;
                                    continue _fun5944
                                }
                            case 240:
                                var5 = var5.nativeEvent;
                                var5 = var5.targetRect;
                                var5 = var5.height;
                                var _closure4_slot1 = var5;
                                var4 = _closure1_slot4;
                                var1 = function() { // Environment: var1
                                    _fun5945: for (var _fun5945_ip = 0;;) switch (_fun5945_ip) {
                                        case 0:
                                            var3 = _closure3_slot1;
                                            var2 = _closure4_slot1;
                                            var0 = undefined;
                                            var2 = var3.bind(var0)(var2);
                                            var3 = _closure4_slot0;
                                            var2 = null;
                                            if (!(var2 != var3)) {
                                                _fun5945_ip = 39;
                                                continue _fun5945
                                            }
                                        case 31:
                                            var1 = _closure4_slot0;
                                            var1 = var1.bind(var0)();
                                        case 39:
                                            return var0;
                                    }
                                };
                                var1 = var4.bind(var2)(var1);
                            case 275:
                                return var2;
                            case 277:
                                var1 = var0.Error;
                                var0 = "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ";
                                var0 = var0 + var3;
                                var0 = var1.bind(var2)(var0);
                                throw var0;
                        }
                    };
                    var0.onModeChange = var4;
                    var4 = null;
                    if (var6) {
                        _fun5943_ip = 267;
                        continue _fun5943
                    }
                case 264:
                    var4 = var5;
                case 267:
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot8 = var4;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var8 = var6[var3];
    var7 = arg3;
    var7 = var7.bind(var0)(var8);
    var _closure1_slot3 = var7;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var7 = var3.startTransition;
    var _closure1_slot4 = var7;
    var3 = var3.useState;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = null;
    var _closure1_slot7 = var3;
    var3 = var4.bind(var0)(var3);
    var2.default = var3;
    var1 = function(arg0) { // Original name: createHiddenVirtualView, environment: var1
        var2 = _closure1_slot8;
        var1 = undefined;
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.createHiddenVirtualView = var1;
    var1 = {};
    var2._logs = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 33, 48, 428, 253]);