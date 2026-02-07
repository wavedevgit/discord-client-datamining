// design/components/Tooltip/native/useTooltip.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function arg0, arg1, arg2() {
        var5 = arg0;
        var9 = arg1;
        var0 = arg2;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var9;
        var _closure2_slot2 = var0;
        var3 = _closure1_slot5;
        var10 = undefined;
        var6 = var3.bind(var10)();
        var _closure2_slot3 = var6;
        var4 = _closure1_slot4;
        var3 = var4.useRef;
        var3 = var3.bind(var4)(var6);
        var _closure2_slot4 = var3;
        var7 = _closure1_slot4;
        var4 = var7.useContext;
        var8 = _closure1_slot0;
        var11 = _closure1_slot1;
        var3 = 7;
        var3 = var11[var3];
        var3 = var8.bind(var10)(var3);
        var3 = var3.LayerContext;
        var7 = var4.bind(var7)(var3);
        var _closure2_slot5 = var7;
        var8 = _closure1_slot4;
        var4 = var8.useRef;
        var3 = null;
        var3 = var4.bind(var8)(var3);
        var _closure2_slot6 = var3;
        var10 = _closure1_slot4;
        var8 = var10.useEffect;
        var4 = new Array(2);
        var4[0] = var7;
        var4[1] = var5;
        var3 = function() { // Environment: var1
            var1 = _closure2_slot0;
            var1 = var1.current;
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                _fun58018: for (var _fun58018_ip = 0;;) switch (_fun58018_ip) {
                    case 0:
                        var2 = _closure3_slot0;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun58018_ip = 35;
                            continue _fun58018
                        }
                    case 13:
                        var3 = _closure2_slot5;
                        var2 = var3.remove;
                        var0 = _closure3_slot0;
                        var0 = var2.bind(var3)(var0);
                    case 35:
                        var0 = _closure2_slot0;
                        var0.current = var1;
                        var0 = undefined;
                        return var0;
                }
            };
            return var0;
        };
        var3 = var8.bind(var10)(var3, var4);
        var8 = _closure1_slot4;
        var4 = var8.useCallback;
        var10 = var7.surfaceRef;
        var3 = new Array(4);
        var3[0] = var10;
        var3[1] = var9;
        var3[2] = var5;
        var3[3] = var0;
        var0 = function(arg0) { // Environment: var1
            var1 = arg0;
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var3 = _closure1_slot3;
                var2 = undefined;
                var1 = function*(arg0) { // Environment: var0
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun58022: for (var _fun58022_ip = 0;;) switch (_fun58022_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun58022_ip = 233;
                                    continue _fun58022
                                }
                            case 10:
                                var7 = arg0;
                                var1 = undefined;
                                var3 = undefined;
                                var4 = undefined;
                            case 19: // try_start_0
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot1;
                                var2 = 9;
                                var5 = var9[var2];
                                var13 = var8.bind(var1)(var5);
                                var12 = var13.getMeasurements;
                                var10 = _closure2_slot5;
                                var11 = var10.surfaceRef;
                                var10 = _closure3_slot0;
                                var11 = var12.bind(var13)(var11, var10);
                                var2 = var9[var2];
                                var9 = var8.bind(var1)(var2);
                                var8 = var9.getMeasurements;
                                var2 = _closure2_slot1;
                                var10 = var8.bind(var9)(var2, var10);
                                var2 = global;
                                var9 = var2.Promise;
                                var8 = var9.all;
                                var2 = new Array(2);
                                var2[0] = var11;
                                var2[1] = var10;
                                var2 = var8.bind(var9)(var2);
                                SaveGenerator(address = 134);
                            case 132:
                                return var2;
                            case 134:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 8);
                                if (var8) {
                                    _fun58022_ip = 225;
                                    continue _fun58022
                                }
                            case 140:
                                var8 = _closure1_slot2;
                                var6 = 2;
                                var8 = var8.bind(var1)(var2, var6);
                                var6 = 0;
                                var3 = var8[var6];
                                var6 = 1;
                                var4 = var8[var6];
                                var8 = _closure2_slot0;
                                var9 = var8.current;
                                var8 = null;
                                var8 = var8 != var9;
                                var6 = var8;
                                if (!var8) {
                                    _fun58022_ip = 200;
                                    continue _fun58022
                                }
                            case 187:
                                var8 = _closure2_slot6;
                                var8 = var8.current;
                                var6 = var8 === var7;
                            case 200:
                                if (!var6) {
                                    _fun58022_ip = 223;
                                    continue _fun58022
                                }
                            case 203:
                                var6 = _closure2_slot2;
                                var5 = _closure2_slot0;
                                var5 = var5.current;
                                var3 = var6.bind(var1)(var5, var4, var3);
                            case 223: // try_end0
                                _fun58022_ip = 230;
                                continue _fun58022;
                            case 225:
                                return var2;
                            case 228: // catch_target0
                                CatchBlockStart(arg_register = 2);
                            case 230:
                                return var1;
                            case 233:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var3.bind(var2)(var1);
                var _closure4_slot0 = var1;
                var0 = function() { // Environment: var0
                    var0 = undefined;
                    var3 = _closure4_slot0;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                return var0;
            };
            var2 = undefined;
            var1 = var0.bind(var2)();
            var0 = _closure2_slot6;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 6;
            var3 = var5[var3];
            var4 = var4.bind(var2)(var3);
            var3 = var4.v4;
            var3 = var3.bind(var4)();
            var0.current = var3;
            var0 = var0.current;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var4.bind(var8)(var0, var3);
        var _closure2_slot7 = var0;
        var4 = _closure1_slot4;
        var3 = var4.useEffect;
        var2 = new Array(4);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var0;
        var2[3] = var5;
        var1 = function() { // Environment: var1
            _fun58024: for (var _fun58024_ip = 0;;) switch (_fun58024_ip) {
                case 0:
                    var1 = _closure2_slot4;
                    var2 = var1.current;
                    var1 = _closure2_slot3;
                    var2 = var2 !== var1;
                    if (!var2) {
                        _fun58024_ip = 76;
                        continue _fun58024
                    }
                case 23:
                    var1 = _closure2_slot0;
                    var3 = var1.current;
                    var1 = null;
                    if (!(var1 != var3)) {
                        _fun58024_ip = 62;
                        continue _fun58024
                    }
                case 38:
                    var4 = _closure2_slot5;
                    var3 = var4.remove;
                    var1 = _closure2_slot0;
                    var1 = var1.current;
                    var1 = var3.bind(var4)(var1);
                case 62:
                    var3 = _closure2_slot4;
                    var1 = _closure2_slot3;
                    var3.current = var1;
                case 76:
                    var1 = _closure2_slot7;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var2);
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var _closure1_slot8 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var8 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.useWindowDimensions;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var7.bind(var0)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var12 = 'useTooltip.native';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot7 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Tooltip/native/useTooltip.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0, arg1) { // Environment: var3
        var3 = _closure1_slot4;
        var2 = var3.useRef;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 6;
        var1 = var4[var1];
        var4 = undefined;
        var5 = var5.bind(var4)(var1);
        var1 = var5.v4;
        var1 = var1.bind(var5)();
        var3 = var2.bind(var3)(var1);
        var2 = function arg0() {
            _fun58026: for (var _fun58026_ip = 0;;) switch (_fun58026_ip) {
                case 0:
                    var4 = arg0;
                    var _closure3_slot0 = var4;
                    var5 = _closure1_slot4;
                    var3 = var5.useContext;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 7;
                    var6 = var6[var2];
                    var2 = undefined;
                    var2 = var7.bind(var2)(var6);
                    var2 = var2.LayerContext;
                    var5 = var3.bind(var5)(var2);
                    var _closure3_slot1 = var5;
                    var2 = null;
                    if (!(var2 == var5)) {
                        _fun58026_ip = 85;
                        continue _fun58026
                    }
                case 65:
                    var6 = _closure1_slot7;
                    var3 = var6.warn;
                    var2 = 'Tooltip called with no layer context. It will not show without a LayerScope.';
                    var2 = var3.bind(var6)(var2);
                case 85:
                    var3 = _closure1_slot4;
                    var2 = var3.useCallback;
                    var1 = new Array(2);
                    var1[0] = var5;
                    var1[1] = var4;
                    var0 = function(arg0, arg1, arg2) { // Environment: var0
                        var4 = _closure1_slot6;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 8;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var3 = var1.AnimatedTooltip;
                        var2 = {};
                        var7 = _closure3_slot0;
                        var8 = var2;
                        var5 = copyDataProperties(var8, var7);
                        var6 = arg1;
                        var5 = 'targetMeasurements';
                        var2[var5] = var6;
                        var6 = arg2;
                        var5 = 'surfaceMeasurements';
                        var2[var5] = var6;
                        var4 = var4.bind(var0)(var3, var2);
                        var3 = _closure3_slot1;
                        var2 = var3.add;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1, var4);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
            }
        };
        var1 = arg1;
        var2 = var2.bind(var4)(var1);
        var1 = _closure1_slot8;
        var0 = arg0;
        var0 = var1.bind(var4)(var3, var0, var2);
        return var0;
    };
    var2.useTooltip = var3;
    var2.useTooltipHelper = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 31, 27, 33, 3, 491, 5256, 7090, 7094, 2]);