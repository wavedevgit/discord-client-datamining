// modules/local_app_detection/native/LocalAppDetectionUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun96197: for (var _fun96197_ip = 0;;) switch (_fun96197_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun96197_ip = 45;
                    continue _fun96197
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun96197_ip = 54;
                    continue _fun96197
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun96197_ip = 344;
                    continue _fun96197
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun96197_ip = 322;
                    continue _fun96197
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun96197_ip = 282;
                    continue _fun96197
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun96197_ip = 269;
                    continue _fun96197
                }
            case 109:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun96197_ip = 162;
                    continue _fun96197
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun96197_ip = 178;
                    continue _fun96197
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun96197_ip = 248;
                    continue _fun96197
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun96197_ip = 248;
                    continue _fun96197
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun96197_ip = 233;
                    continue _fun96197
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun96197_ip = 246;
                    continue _fun96197
                }
            case 233:
                var8 = _closure1_slot8;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun96197_ip = 264;
                continue _fun96197;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun96197_ip = 282;
                continue _fun96197;
            case 269:
                var6 = _closure1_slot8;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun96197_ip = 322;
                    continue _fun96197
                }
            case 288:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 322:
                if (!var3) {
                    _fun96197_ip = 329;
                    continue _fun96197
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun96198: for (var _fun96198_ip = 0;;) switch (_fun96198_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun96198_ip = 56;
                                continue _fun96198
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun96198_ip = 67;
                            continue _fun96198;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 344:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun96199: for (var _fun96199_ip = 0;;) switch (_fun96199_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun96199_ip = 23;
                    continue _fun96199
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun96199_ip = 33;
                    continue _fun96199
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun96199_ip = 70;
                    continue _fun96199
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun96199_ip = 55;
                    continue _fun96199
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var3 = function(arg0) { // Original name: getDetectableAppScheme, environment: var1
        _fun96200: for (var _fun96200_ip = 0;;) switch (_fun96200_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var1 = var1.DetectableAppNames;
                var2 = var1.ROBLOX;
                var1 = arg0;
                if (!(var1 !== var2)) {
                    _fun96200_ip = 46;
                    continue _fun96200
                }
            case 44:
                return var0;
            case 46:
                var0 = 'roblox';
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var0 = function() { // Original name: _detectLocalApps, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun96203: for (var _fun96203_ip = 0;;) switch (_fun96203_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun96203_ip = 262;
                            continue _fun96203
                        }
                    case 10:
                        var5 = {};
                        var4 = _closure1_slot4;
                        var3 = var4.hasConsented;
                        var2 = _closure1_slot6;
                        var2 = var2.PERSONALIZATION;
                        var2 = var3.bind(var4)(var2);
                        if (!var2) {
                            _fun96203_ip = 210;
                            continue _fun96203
                        }
                    case 46:
                        var3 = _closure1_slot7;
                        var9 = undefined;
                        var2 = arg0;
                        var8 = var3.bind(var9)(var2);
                        var3 = var8.bind(var9)();
                        var2 = var3.done;
                        var7 = 5;
                        var6 = 4;
                        var4 = var3;
                        if (var2) {
                            _fun96203_ip = 210;
                            continue _fun96203
                        }
                    case 84:
                        var3 = var4.value;
                        var2 = _closure1_slot9;
                        var13 = var2.bind(var9)(var3);
                        var10 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var6];
                        var10 = var10.bind(var9)(var2);
                        var2 = var10.canOpenUrlScheme;
                        var2 = var2.bind(var10)(var13);
                        SaveGenerator(address = 130);
                    case 128:
                        return var2;
                    case 130:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 10);
                        if (var10) {
                            _fun96203_ip = 207;
                            continue _fun96203
                        }
                    case 136:
                        var5[var3] = var2;
                        var10 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var7];
                        var12 = var10.bind(var9)(var3);
                        var11 = var12.track;
                        var3 = _closure1_slot5;
                        var10 = var3.CAN_OPEN_URL_REQUESTED;
                        var3 = {};
                        var3.scheme = var13;
                        var3.result = var2;
                        var3 = var11.bind(var12)(var10, var3);
                        var10 = var8.bind(var9)();
                        var3 = var10.done;
                        var4 = var10;
                        if (var3) {
                            _fun96203_ip = 210;
                            continue _fun96203
                        }
                    case 205:
                        _fun96203_ip = 84;
                        continue _fun96203;
                    case 207:
                        return var2;
                    case 210:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 6;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'LOCAL_APP_DETECTION_COMPLETE';
                        var2.type = var6;
                        var2.result = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 262:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot10 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot5 = var7;
    var4 = var4.Consents;
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/local_app_detection/native/LocalAppDetectionUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.getDetectableAppScheme = var3;
    var1 = function() { // Original name: detectLocalApps, environment: var1
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.detectLocalApps = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 4522, 660, 12495, 3579, 795, 806, 2]);