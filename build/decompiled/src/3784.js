// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: dummyListener, environment: var1
        var0 = undefined;
        return var0;
    };
    var _closure1_slot4 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function() { // Original name: PropsFilter, environment: var1
            var2 = this;
            var3 = _closure1_slot2;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = global;
            var1 = var1.Map;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var6 = var3;
            var1 = new var6[var1](var5);
            var1 = var1 instanceof Object ? var1 : var3;
            var2._initialPropsMap = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var4 = 'filterNonAnimatedProps';
        var0.key = var4;
        var1 = function(arg0) { // Original name: filterNonAnimatedProps, environment: var1
            _fun33978: for (var _fun33978_ip = 0;;) switch (_fun33978_ip) {
                case 0:
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var1 = this;
                    var _closure3_slot1 = var1;
                    var1 = var0.props;
                    var _closure3_slot2 = var1;
                    var0 = {};
                    var _closure3_slot3 = var0;
                    var7 = function() { // Original name: _loop, environment: var8
                        _fun33979: for (var _fun33979_ip = 0;;) switch (_fun33979_ip) {
                            case 0:
                                var3 = _closure3_slot2;
                                var2 = _closure3_slot4;
                                var2 = var3[var2];
                                var _closure4_slot0 = var2;
                                var4 = _closure3_slot4;
                                var3 = 'style';
                                if (!(var3 !== var4)) {
                                    _fun33979_ip = 427;
                                    continue _fun33979
                                }
                            case 36:
                                var4 = _closure3_slot4;
                                var3 = 'animatedProps';
                                if (!(var3 !== var4)) {
                                    _fun33979_ip = 352;
                                    continue _fun33979
                                }
                            case 51:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot1;
                                var4 = 2;
                                var4 = var6[var4];
                                var7 = undefined;
                                var6 = var5.bind(var7)(var4);
                                var5 = var6.has;
                                var4 = 'workletEventHandler';
                                var4 = var5.bind(var6)(var4, var2);
                                if (!var4) {
                                    _fun33979_ip = 136;
                                    continue _fun33979
                                }
                            case 94:
                                var5 = var2.workletEventHandler;
                                var6 = _closure1_slot0;
                                var8 = _closure1_slot1;
                                var4 = 5;
                                var4 = var8[var4];
                                var4 = var6.bind(var7)(var4);
                                var4 = var4.WorkletEventHandler;
                                var4 = var5 instanceof var4;
                                if (var4) {
                                    _fun33979_ip = 276;
                                    continue _fun33979
                                }
                            case 136:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot1;
                                var4 = 6;
                                var4 = var6[var4];
                                var5 = var5.bind(var7)(var4);
                                var4 = var5.isSharedValue;
                                var4 = var4.bind(var5)(var2);
                                if (var4) {
                                    _fun33979_ip = 238;
                                    continue _fun33979
                                }
                            case 170:
                                var5 = _closure3_slot4;
                                var4 = 'onGestureHandlerStateChange';
                                var4 = var4 === var5;
                                if (!var4) {
                                    _fun33979_ip = 215;
                                    continue _fun33979
                                }
                            case 185:
                                var6 = _closure1_slot0;
                                var8 = _closure1_slot1;
                                var5 = 7;
                                var5 = var8[var5];
                                var6 = var6.bind(var7)(var5);
                                var5 = var6.isChromeDebugger;
                                var4 = var5.bind(var6)();
                            case 215:
                                if (var4) {
                                    _fun33979_ip = 509;
                                    continue _fun33979
                                }
                            case 221:
                                var5 = _closure3_slot3;
                                var4 = _closure3_slot4;
                                var5[var4] = var2;
                                _fun33979_ip = 509;
                                continue _fun33979;
                            case 238:
                                var4 = _closure3_slot0;
                                var4 = var4._isFirstRender;
                                if (!var4) {
                                    _fun33979_ip = 509;
                                    continue _fun33979
                                }
                            case 254:
                                var6 = _closure3_slot3;
                                var5 = _closure3_slot4;
                                var4 = var2.value;
                                var6[var5] = var4;
                                _fun33979_ip = 509;
                                continue _fun33979;
                            case 276:
                                var4 = var2.workletEventHandler;
                                var4 = var4.eventNames;
                                var5 = var4.length;
                                var4 = 0;
                                if (!(!(var5 > var4))) {
                                    _fun33979_ip = 320;
                                    continue _fun33979
                                }
                            case 299:
                                var5 = _closure3_slot3;
                                var4 = _closure3_slot4;
                                var3 = _closure1_slot4;
                                var5[var4] = var3;
                                _fun33979_ip = 509;
                                continue _fun33979;
                            case 320:
                                var2 = var2.workletEventHandler;
                                var4 = var2.eventNames;
                                var3 = var4.forEach;
                                var2 = function(arg0) { // Environment: var1
                                    _fun33982: for (var _fun33982_ip = 0;;) switch (_fun33982_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var2 = _closure3_slot3;
                                            var5 = _closure1_slot0;
                                            var4 = _closure1_slot1;
                                            var0 = 2;
                                            var4 = var4[var0];
                                            var0 = undefined;
                                            var8 = var5.bind(var0)(var4);
                                            var7 = var8.has;
                                            var5 = _closure4_slot0;
                                            var6 = var5.workletEventHandler;
                                            var5 = 'listeners';
                                            var5 = var7.bind(var8)(var5, var6);
                                            if (var5) {
                                                _fun33982_ip = 72;
                                                continue _fun33982
                                            }
                                        case 66:
                                            var1 = _closure1_slot4;
                                            _fun33982_ip = 92;
                                            continue _fun33982;
                                        case 72:
                                            var4 = _closure4_slot0;
                                            var4 = var4.workletEventHandler;
                                            var4 = var4.listeners;
                                            var1 = var4[var3];
                                        case 92:
                                            var2[var3] = var1;
                                            return var0;
                                    }
                                };
                                var2 = var3.bind(var4)(var2);
                                _fun33979_ip = 509;
                                continue _fun33979;
                            case 352:
                                var2 = _closure3_slot2;
                                var2 = var2.animatedProps;
                                var _closure4_slot1 = var2;
                                var4 = var2.initial;
                                var3 = undefined;
                                if (!(var3 !== var4)) {
                                    _fun33979_ip = 509;
                                    continue _fun33979
                                }
                            case 381:
                                var3 = global;
                                var4 = var3.Object;
                                var3 = var4.keys;
                                var2 = var2.initial;
                                var2 = var2.value;
                                var4 = var3.bind(var4)(var2);
                                var3 = var4.forEach;
                                var2 = function(arg0) { // Environment: var1
                                    _fun33981: for (var _fun33981_ip = 0;;) switch (_fun33981_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var2 = _closure3_slot3;
                                            var0 = _closure4_slot1;
                                            var4 = var0.initial;
                                            var0 = null;
                                            var5 = var0 == var4;
                                            var0 = undefined;
                                            var1 = undefined;
                                            if (var5) {
                                                _fun33981_ip = 45;
                                                continue _fun33981
                                            }
                                        case 36:
                                            var4 = var4.value;
                                            var1 = var4[var3];
                                        case 45:
                                            var2[var3] = var1;
                                            return var0;
                                    }
                                };
                                var2 = var3.bind(var4)(var2);
                                _fun33979_ip = 509;
                                continue _fun33979;
                            case 427:
                                var2 = _closure3_slot2;
                                var4 = var2.style;
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var2 = 2;
                                var3 = var3[var2];
                                var2 = undefined;
                                var3 = var5.bind(var2)(var3);
                                var2 = var3.flattenArray;
                                var5 = null;
                                if (!(var5 == var4)) {
                                    _fun33979_ip = 477;
                                    continue _fun33979
                                }
                            case 473:
                                var4 = new Array(0);
                            case 477:
                                var3 = var2.bind(var3)(var4);
                                var2 = var3.map;
                                var1 = function(arg0) { // Environment: var1
                                    _fun33980: for (var _fun33980_ip = 0;;) switch (_fun33980_ip) {
                                        case 0:
                                            var2 = arg0;
                                            if (!var2) {
                                                _fun33980_ip = 15;
                                                continue _fun33980
                                            }
                                        case 6:
                                            var0 = var2.viewDescriptors;
                                            if (var0) {
                                                _fun33980_ip = 101;
                                                continue _fun33980
                                            }
                                        case 15:
                                            var3 = _closure1_slot0;
                                            var0 = _closure1_slot1;
                                            var5 = 4;
                                            var0 = var0[var5];
                                            var4 = undefined;
                                            var3 = var3.bind(var4)(var0);
                                            var0 = var3.hasInlineStyles;
                                            var3 = var0.bind(var3)(var2);
                                            var0 = var2;
                                            if (!var3) {
                                                _fun33980_ip = 99;
                                                continue _fun33980
                                            }
                                        case 57:
                                            var3 = _closure1_slot0;
                                            var1 = _closure1_slot1;
                                            var1 = var1[var5];
                                            var4 = var3.bind(var4)(var1);
                                            var3 = var4.getInlineStyle;
                                            var1 = _closure3_slot0;
                                            var1 = var1._isFirstRender;
                                            var0 = var3.bind(var4)(var2, var1);
                                        case 99:
                                            return var0;
                                        case 101:
                                            var1 = _closure3_slot0;
                                            var1 = var1._isFirstRender;
                                            if (!var1) {
                                                _fun33980_ip = 219;
                                                continue _fun33980
                                            }
                                        case 117:
                                            var1 = _closure3_slot1;
                                            var4 = var1._initialPropsMap;
                                            var3 = var4.set;
                                            var1 = global;
                                            var8 = var1.Object;
                                            var7 = var8.assign;
                                            var1 = var2.initial;
                                            var6 = var1.value;
                                            var9 = _closure1_slot0;
                                            var5 = _closure1_slot1;
                                            var1 = 3;
                                            var5 = var5[var1];
                                            var1 = undefined;
                                            var9 = var9.bind(var1)(var5);
                                            var5 = var9.initialUpdaterRun;
                                            var1 = var2.initial;
                                            var1 = var1.updater;
                                            var5 = var5.bind(var9)(var1);
                                            var1 = {};
                                            var1 = var7.bind(var8)(var1, var6, var5);
                                            var1 = var3.bind(var4)(var2, var1);
                                        case 219:
                                            var0 = _closure3_slot1;
                                            var1 = var0._initialPropsMap;
                                            var0 = var1.get;
                                            var0 = var0.bind(var1)(var2);
                                            var1 = null;
                                            if (!(var1 == var0)) {
                                                _fun33980_ip = 247;
                                                continue _fun33980
                                            }
                                        case 245:
                                            var0 = {};
                                        case 247:
                                            return var0;
                                    }
                                };
                                var2 = var2.bind(var3)(var1);
                                var1 = _closure3_slot3;
                                var0 = _closure3_slot4;
                                var1[var0] = var2;
                            case 509:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var5 = var1;
                    var1 = undefined;
                    for (var2 in var5)
                        case 49: {
                            case 58: var9 = var2;
                            var _closure3_slot4 = var9;
                            var9 = var7.bind(var1)();
                            _fun33978_ip = 49;
                            continue _fun33978;
                        }
                case 71:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.PropsFilter = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 3778, 3752, 3777, 3785, 3729, 3683]);