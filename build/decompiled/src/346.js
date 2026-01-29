// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var3 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var8)(var2, var0, var1);
    var0 = function(arg0, arg1) { // Original name: _combineCallbacks, environment: var6
        _fun5058: for (var _fun5058_ip = 0;;) switch (_fun5058_ip) {
            case 0:
                var0 = arg0;
                var2 = arg1;
                var _closure2_slot0 = var0;
                var _closure2_slot1 = var2;
                if (!var0) {
                    _fun5058_ip = 28;
                    continue _fun5058
                }
            case 19:
                var3 = var2.onComplete;
                if (var3) {
                    _fun5058_ip = 39;
                    continue _fun5058
                }
            case 28:
                if (var0) {
                    _fun5058_ip = 37;
                    continue _fun5058
                }
            case 31:
                var0 = var2.onComplete;
            case 37:
                _fun5058_ip = 44;
                continue _fun5058;
            case 39:
                var0 = function() { // Environment: var1
                    _fun5059: for (var _fun5059_ip = 0;;) switch (_fun5059_ip) {
                        case 0:
                            var0 = undefined;
                            var1 = undefined;
                            var3 = _closure2_slot1;
                            var3 = var3.onComplete;
                            if (!var3) {
                                _fun5059_ip = 46;
                                continue _fun5059
                            }
                        case 20:
                            var6 = _closure2_slot1;
                            var5 = var6.onComplete;
                            var4 = var5.apply;
                            var1 = arguments;
                            var3 = var1;
                            var3 = var4.bind(var5)(var6, var3);
                        case 46:
                            var3 = _closure2_slot0;
                            if (!var3) {
                                _fun5059_ip = 70;
                                continue _fun5059
                            }
                        case 53:
                            var3 = _closure2_slot0;
                            var2 = var3.apply;
                            var1 = arguments;
                            var1 = var2.bind(var3)(var0, var1);
                        case 70:
                            return var0;
                    }
                };
            case 44:
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: maybeVectorAnim, environment: var6
        _fun5060: for (var _fun5060_ip = 0;;) switch (_fun5060_ip) {
            case 0:
                var0 = arg0;
                var11 = arg1;
                var5 = arg2;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 6;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var4.bind(var3)(var2);
                var2 = var0 instanceof var2;
                if (var2) {
                    _fun5060_ip = 333;
                    continue _fun5060
                }
            case 44:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 7;
                var2 = var6[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var0 instanceof var2;
                if (var2) {
                    _fun5060_ip = 75;
                    continue _fun5060
                }
            case 71:
                var2 = null;
                return var2;
            case 75:
                var2 = global;
                var7 = var2.Object;
                var6 = var7.assign;
                var4 = {};
                var8 = var6.bind(var7)(var4, var11);
                var7 = var2.Object;
                var6 = var7.assign;
                var4 = {};
                var7 = var6.bind(var7)(var4, var11);
                var9 = var2.Object;
                var6 = var9.assign;
                var4 = {};
                var6 = var6.bind(var9)(var4, var11);
                var9 = var2.Object;
                var4 = var9.assign;
                var2 = {};
                var4 = var4.bind(var9)(var2, var11);
                var12 = var11;
                for (var2 in var12)
                    case 164: {
                        case 173: var15 = var2;
                        var14 = var11[var15];
                        var18 = var14.r;
                        var17 = var14.g;
                        var16 = var14.b;
                        var14 = var14.a;
                        var19 = var3 !== var18;
                        if (!var19) {
                            _fun5060_ip = 212;
                            continue _fun5060
                        }
                        case 208: var19 = var3 !== var17;
                        case 212: if (!var19) {
                            _fun5060_ip = 219;
                            continue _fun5060
                        }
                        case 215: var19 = var3 !== var16;
                        case 219: if (!var19) {
                            _fun5060_ip = 226;
                            continue _fun5060
                        }
                        case 222: var19 = var3 !== var14;
                        case 226: if (!var19) {
                            _fun5060_ip = 164;
                            continue _fun5060
                        }
                        case 229: var8[var15] = var18;
                        var7[var15] = var17;
                        var6[var15] = var16;
                        var4[var15] = var14;
                        _fun5060_ip = 164;
                        continue _fun5060;
                    }
            case 247:
                var2 = var0.r;
                var9 = var5.bind(var3)(var2, var8);
                var2 = var0.g;
                var8 = var5.bind(var3)(var2, var7);
                var2 = var0.b;
                var7 = var5.bind(var3)(var2, var6);
                var2 = var0.a;
                var2 = var5.bind(var3)(var2, var4);
                var6 = _closure1_slot9;
                var4 = new Array(4);
                var4[0] = var9;
                var4[1] = var8;
                var4[2] = var7;
                var4[3] = var2;
                var2 = {};
                var7 = false;
                var2.stopTogether = var7;
                var2 = var6.bind(var3)(var4, var2);
                return var2;
            case 333:
                var2 = global;
                var7 = var2.Object;
                var6 = var7.assign;
                var4 = {};
                var6 = var6.bind(var7)(var4, var11);
                var7 = var2.Object;
                var4 = var7.assign;
                var2 = {};
                var2 = var4.bind(var7)(var2, var11);
                var9 = var11;
                for (var4 in var9)
                    case 384: {
                        case 393: var13 = var4;
                        var12 = var11[var13];
                        var14 = var12.x;
                        var12 = var12.y;
                        var15 = var3 !== var14;
                        if (!var15) {
                            _fun5060_ip = 421;
                            continue _fun5060
                        }
                        case 417: var15 = var3 !== var12;
                        case 421: if (!var15) {
                            _fun5060_ip = 384;
                            continue _fun5060
                        }
                        case 424: var6[var13] = var14;
                        var2[var13] = var12;
                        _fun5060_ip = 384;
                        continue _fun5060;
                    }
            case 434:
                var4 = var0.x;
                var4 = var5.bind(var3)(var4, var6);
                var0 = var0.y;
                var0 = var5.bind(var3)(var0, var2);
                var2 = _closure1_slot9;
                var1 = new Array(2);
                var1[0] = var4;
                var1[1] = var0;
                var0 = {};
                var4 = false;
                var0.stopTogether = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var10 = function(arg0, arg1) { // Original name: springImpl, environment: var6
        _fun5061: for (var _fun5061_ip = 0;;) switch (_fun5061_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var4;
                var0 = function(arg0, arg1, arg2) { // Original name: start, environment: var2
                    _fun5062: for (var _fun5062_ip = 0;;) switch (_fun5062_ip) {
                        case 0:
                            var3 = arg0;
                            var8 = arg1;
                            var4 = _closure1_slot3;
                            var0 = undefined;
                            var2 = arg2;
                            var7 = var4.bind(var0)(var2, var8);
                            var2 = var3.stopTracking;
                            var2 = var2.bind(var3)();
                            var4 = var8.toValue;
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var2 = 8;
                            var2 = var6[var2];
                            var2 = var5.bind(var0)(var2);
                            var2 = var4 instanceof var2;
                            if (var2) {
                                _fun5062_ip = 124;
                                continue _fun5062
                            }
                        case 67:
                            var4 = var3.animate;
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var2 = 10;
                            var2 = var6[var2];
                            var2 = var5.bind(var0)(var2);
                            var5 = var2.prototype;
                            var5 = Object.create(var5, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var15 = var5;
                            var14 = var8;
                            var2 = new var15[var2](var14, var13);
                            var2 = var2 instanceof Object ? var2 : var5;
                            var2 = var4.bind(var3)(var2, var7);
                            _fun5062_ip = 201;
                            continue _fun5062;
                        case 124:
                            var2 = var3.track;
                            var4 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var1 = 9;
                            var1 = var9[var1];
                            var6 = var4.bind(var0)(var1);
                            var13 = var8.toValue;
                            var1 = 10;
                            var1 = var9[var1];
                            var12 = var4.bind(var0)(var1);
                            var4 = var6.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var6
                                }
                            });
                            var15 = var4;
                            var14 = var3;
                            var11 = var8;
                            var10 = var7;
                            var1 = new var15[var6](var14, var13, var12, var11, var10, var9);
                            var1 = var1 instanceof Object ? var1 : var4;
                            var1 = var2.bind(var3)(var1);
                        case 201:
                            return var0;
                    }
                };
                var _closure2_slot2 = var0;
                var3 = _closure1_slot4;
                var1 = _closure1_slot5;
                var0 = undefined;
                var0 = var3.bind(var0)(var5, var4, var1);
                if (var0) {
                    _fun5061_ip = 102;
                    continue _fun5061
                }
            case 48:
                var1 = {};
                var3 = function(arg0) { // Original name: start, environment: var2
                    var4 = _closure2_slot2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var1.start = var3;
                var3 = function() { // Original name: stop, environment: var2
                    var1 = _closure2_slot0;
                    var0 = var1.stopAnimation;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
                };
                var1.stop = var3;
                var3 = function() { // Original name: reset, environment: var2
                    var1 = _closure2_slot0;
                    var0 = var1.resetAnimation;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
                };
                var1.reset = var3;
                var3 = function(arg0) { // Original name: _startNativeLoop, environment: var2
                    var0 = global;
                    var5 = var0.Object;
                    var4 = var5.assign;
                    var3 = _closure2_slot1;
                    var2 = {};
                    var1 = arg0;
                    var2.iterations = var1;
                    var1 = {};
                    var3 = var4.bind(var5)(var1, var3, var2);
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1, var3);
                    return var0;
                };
                var1._startNativeLoop = var3;
                var2 = function() { // Original name: _isUsingNativeDriver, environment: var2
                    _fun5067: for (var _fun5067_ip = 0;;) switch (_fun5067_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var0 = var0.useNativeDriver;
                            if (var0) {
                                _fun5067_ip = 18;
                                continue _fun5067
                            }
                        case 16:
                            var0 = false;
                        case 18:
                            return var0;
                    }
                };
                var1._isUsingNativeDriver = var2;
                var0 = var1;
            case 102:
                return var0;
        }
    };
    var _closure1_slot5 = var10;
    var11 = function(arg0, arg1) { // Original name: timingImpl, environment: var6
        _fun5068: for (var _fun5068_ip = 0;;) switch (_fun5068_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var4;
                var0 = function(arg0, arg1, arg2) { // Original name: start, environment: var2
                    _fun5069: for (var _fun5069_ip = 0;;) switch (_fun5069_ip) {
                        case 0:
                            var3 = arg0;
                            var8 = arg1;
                            var4 = _closure1_slot3;
                            var0 = undefined;
                            var2 = arg2;
                            var7 = var4.bind(var0)(var2, var8);
                            var2 = var3.stopTracking;
                            var2 = var2.bind(var3)();
                            var4 = var8.toValue;
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var2 = 8;
                            var2 = var6[var2];
                            var2 = var5.bind(var0)(var2);
                            var2 = var4 instanceof var2;
                            if (var2) {
                                _fun5069_ip = 124;
                                continue _fun5069
                            }
                        case 67:
                            var4 = var3.animate;
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var2 = 11;
                            var2 = var6[var2];
                            var2 = var5.bind(var0)(var2);
                            var5 = var2.prototype;
                            var5 = Object.create(var5, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var15 = var5;
                            var14 = var8;
                            var2 = new var15[var2](var14, var13);
                            var2 = var2 instanceof Object ? var2 : var5;
                            var2 = var4.bind(var3)(var2, var7);
                            _fun5069_ip = 201;
                            continue _fun5069;
                        case 124:
                            var2 = var3.track;
                            var4 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var1 = 9;
                            var1 = var9[var1];
                            var6 = var4.bind(var0)(var1);
                            var13 = var8.toValue;
                            var1 = 11;
                            var1 = var9[var1];
                            var12 = var4.bind(var0)(var1);
                            var4 = var6.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var6
                                }
                            });
                            var15 = var4;
                            var14 = var3;
                            var11 = var8;
                            var10 = var7;
                            var1 = new var15[var6](var14, var13, var12, var11, var10, var9);
                            var1 = var1 instanceof Object ? var1 : var4;
                            var1 = var2.bind(var3)(var1);
                        case 201:
                            return var0;
                    }
                };
                var _closure2_slot2 = var0;
                var3 = _closure1_slot4;
                var1 = _closure1_slot6;
                var0 = undefined;
                var0 = var3.bind(var0)(var5, var4, var1);
                if (var0) {
                    _fun5068_ip = 102;
                    continue _fun5068
                }
            case 48:
                var1 = {};
                var3 = function(arg0, arg1) { // Original name: start, environment: var2
                    var4 = _closure2_slot2;
                    var3 = _closure2_slot0;
                    var1 = global;
                    var6 = var1.Object;
                    var5 = var6.assign;
                    var2 = _closure2_slot1;
                    var1 = {};
                    var0 = arg1;
                    var1.isLooping = var0;
                    var0 = {};
                    var2 = var5.bind(var6)(var0, var2, var1);
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var1.start = var3;
                var3 = function() { // Original name: stop, environment: var2
                    var1 = _closure2_slot0;
                    var0 = var1.stopAnimation;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
                };
                var1.stop = var3;
                var3 = function() { // Original name: reset, environment: var2
                    var1 = _closure2_slot0;
                    var0 = var1.resetAnimation;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
                };
                var1.reset = var3;
                var3 = function(arg0) { // Original name: _startNativeLoop, environment: var2
                    var0 = global;
                    var5 = var0.Object;
                    var4 = var5.assign;
                    var3 = _closure2_slot1;
                    var2 = {};
                    var1 = arg0;
                    var2.iterations = var1;
                    var1 = {};
                    var3 = var4.bind(var5)(var1, var3, var2);
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1, var3);
                    return var0;
                };
                var1._startNativeLoop = var3;
                var2 = function() { // Original name: _isUsingNativeDriver, environment: var2
                    _fun5074: for (var _fun5074_ip = 0;;) switch (_fun5074_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var0 = var0.useNativeDriver;
                            if (var0) {
                                _fun5074_ip = 18;
                                continue _fun5074
                            }
                        case 16:
                            var0 = false;
                        case 18:
                            return var0;
                    }
                };
                var1._isUsingNativeDriver = var2;
                var0 = var1;
            case 102:
                return var0;
        }
    };
    var _closure1_slot6 = var11;
    var12 = function(arg0, arg1) { // Original name: decayImpl, environment: var6
        _fun5075: for (var _fun5075_ip = 0;;) switch (_fun5075_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var4;
                var0 = function(arg0, arg1, arg2) { // Original name: start, environment: var2
                    var4 = arg0;
                    var6 = arg1;
                    var3 = _closure1_slot3;
                    var0 = undefined;
                    var2 = arg2;
                    var3 = var3.bind(var0)(var2, var6);
                    var2 = var4.stopTracking;
                    var2 = var2.bind(var4)();
                    var2 = var4.animate;
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 12;
                    var1 = var7[var1];
                    var1 = var5.bind(var0)(var1);
                    var5 = var1.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var1
                        }
                    });
                    var10 = var5;
                    var9 = var6;
                    var1 = new var10[var1](var9, var8);
                    var1 = var1 instanceof Object ? var1 : var5;
                    var1 = var2.bind(var4)(var1, var3);
                    return var0;
                };
                var _closure2_slot2 = var0;
                var3 = _closure1_slot4;
                var1 = _closure1_slot7;
                var0 = undefined;
                var0 = var3.bind(var0)(var5, var4, var1);
                if (var0) {
                    _fun5075_ip = 102;
                    continue _fun5075
                }
            case 48:
                var1 = {};
                var3 = function(arg0) { // Original name: start, environment: var2
                    var4 = _closure2_slot2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var1.start = var3;
                var3 = function() { // Original name: stop, environment: var2
                    var1 = _closure2_slot0;
                    var0 = var1.stopAnimation;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
                };
                var1.stop = var3;
                var3 = function() { // Original name: reset, environment: var2
                    var1 = _closure2_slot0;
                    var0 = var1.resetAnimation;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
                };
                var1.reset = var3;
                var3 = function(arg0) { // Original name: _startNativeLoop, environment: var2
                    var0 = global;
                    var5 = var0.Object;
                    var4 = var5.assign;
                    var3 = _closure2_slot1;
                    var2 = {};
                    var1 = arg0;
                    var2.iterations = var1;
                    var1 = {};
                    var3 = var4.bind(var5)(var1, var3, var2);
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1, var3);
                    return var0;
                };
                var1._startNativeLoop = var3;
                var2 = function() { // Original name: _isUsingNativeDriver, environment: var2
                    _fun5081: for (var _fun5081_ip = 0;;) switch (_fun5081_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var0 = var0.useNativeDriver;
                            if (var0) {
                                _fun5081_ip = 18;
                                continue _fun5081
                            }
                        case 16:
                            var0 = false;
                        case 18:
                            return var0;
                    }
                };
                var1._isUsingNativeDriver = var2;
                var0 = var1;
            case 102:
                return var0;
        }
    };
    var _closure1_slot7 = var12;
    var8 = function(arg0) { // Original name: sequenceImpl, environment: var6
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = 0;
        var _closure2_slot1 = var0;
        var0 = {};
        var2 = function(arg0, arg1) { // Original name: start, environment: var1
            _fun5083: for (var _fun5083_ip = 0;;) switch (_fun5083_ip) {
                case 0:
                    var2 = arg0;
                    var4 = arg1;
                    var _closure3_slot0 = var2;
                    var _closure3_slot1 = var4;
                    var3 = function(arg0) { // Original name: onComplete, environment: var0
                        _fun5084: for (var _fun5084_ip = 0;;) switch (_fun5084_ip) {
                            case 0:
                                var3 = arg0;
                                var0 = var3.finished;
                                if (var0) {
                                    _fun5084_ip = 35;
                                    continue _fun5084
                                }
                            case 12:
                                var1 = _closure3_slot0;
                                if (!var1) {
                                    _fun5084_ip = 96;
                                    continue _fun5084
                                }
                            case 22:
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var3);
                                _fun5084_ip = 96;
                                continue _fun5084;
                            case 35:
                                var0 = _closure2_slot1;
                                var2 = var0 + 1;
                                _closure2_slot1 = var2;
                                var0 = _closure2_slot0;
                                var0 = var0.length;
                                if (!(var2 !== var0)) {
                                    _fun5084_ip = 100;
                                    continue _fun5084
                                }
                            case 62:
                                var2 = _closure2_slot0;
                                var0 = _closure2_slot1;
                                var5 = var2[var0];
                                var4 = var5.start;
                                var2 = _closure3_slot2;
                                var0 = _closure3_slot1;
                                var0 = var4.bind(var5)(var2, var0);
                            case 96:
                                var0 = undefined;
                                return var0;
                            case 100:
                                var0 = 0;
                                _closure2_slot1 = var0;
                                var0 = _closure3_slot0;
                                if (!var0) {
                                    _fun5084_ip = 127;
                                    continue _fun5084
                                }
                            case 116:
                                var2 = _closure3_slot0;
                                var1 = undefined;
                                var0 = var2.bind(var1)(var3);
                            case 127:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var _closure3_slot2 = var3;
                    var1 = _closure2_slot0;
                    var5 = var1.length;
                    var1 = 0;
                    if (!(var1 !== var5)) {
                        _fun5083_ip = 68;
                        continue _fun5083
                    }
                case 43:
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var1 = var1[var0];
                    var0 = var1.start;
                    var0 = var0.bind(var1)(var3, var4);
                    _fun5083_ip = 87;
                    continue _fun5083;
                case 68:
                    if (!var2) {
                        _fun5083_ip = 87;
                        continue _fun5083
                    }
                case 71:
                    var1 = {};
                    var0 = true;
                    var1.finished = var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                case 87:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.start = var2;
        var2 = function() { // Original name: stop, environment: var1
            _fun5085: for (var _fun5085_ip = 0;;) switch (_fun5085_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if (!(var2 < var1)) {
                        _fun5085_ip = 42;
                        continue _fun5085
                    }
                case 20:
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var1 = var1[var0];
                    var0 = var1.stop;
                    var0 = var0.bind(var1)();
                case 42:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.stop = var2;
        var2 = function() { // Original name: reset, environment: var1
            var3 = _closure2_slot0;
            var2 = var3.forEach;
            var0 = function(arg0, arg1) { // Environment: var0
                _fun5087: for (var _fun5087_ip = 0;;) switch (_fun5087_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = _closure2_slot1;
                        var0 = arg1;
                        if (!(var0 <= var2)) {
                            _fun5087_ip = 27;
                            continue _fun5087
                        }
                    case 17:
                        var0 = var1.reset;
                        var0 = var0.bind(var1)();
                    case 27:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = var2.bind(var3)(var0);
            var0 = 0;
            _closure2_slot1 = var0;
            var0 = undefined;
            return var0;
        };
        var0.reset = var2;
        var2 = function() { // Original name: _startNativeLoop, environment: var1
            var0 = global;
            var2 = var0.Error;
            var0 = var2.prototype;
            var1 = Object.create(var0, {
                constructor: {
                    value: var2
                }
            });
            var3 = 'Loops run using the native driver cannot contain Animated.sequence animations';
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            throw var0;
        };
        var0._startNativeLoop = var2;
        var1 = function() { // Original name: _isUsingNativeDriver, environment: var1
            var0 = false;
            return var0;
        };
        var0._isUsingNativeDriver = var1;
        return var0;
    };
    var _closure1_slot8 = var8;
    var3 = function(arg0, arg1) { // Original name: parallelImpl, environment: var6
        _fun5090: for (var _fun5090_ip = 0;;) switch (_fun5090_ip) {
            case 0:
                var2 = arg1;
                var0 = arg0;
                var _closure2_slot0 = var0;
                var0 = 0;
                var _closure2_slot1 = var0;
                var0 = {};
                var _closure2_slot2 = var0;
                var0 = var2;
                if (!var0) {
                    _fun5090_ip = 42;
                    continue _fun5090
                }
            case 30:
                var3 = var2.stopTogether;
                var2 = false;
                var0 = var2 === var3;
            case 42:
                var0 = !var0;
                var _closure2_slot3 = var0;
                var0 = {};
                var2 = function(arg0, arg1) { // Original name: start, environment: var1
                    _fun5091: for (var _fun5091_ip = 0;;) switch (_fun5091_ip) {
                        case 0:
                            var4 = arg0;
                            var _closure3_slot0 = var4;
                            var1 = arg1;
                            var _closure3_slot1 = var1;
                            var3 = _closure2_slot1;
                            var2 = _closure2_slot0;
                            var2 = var2.length;
                            if (!(var3 === var2)) {
                                _fun5091_ip = 57;
                                continue _fun5091
                            }
                        case 36:
                            if (!var4) {
                                _fun5091_ip = 76;
                                continue _fun5091
                            }
                        case 39:
                            var3 = {};
                            var2 = true;
                            var3.finished = var2;
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
                            _fun5091_ip = 76;
                            continue _fun5091;
                        case 57:
                            var2 = _closure2_slot0;
                            var1 = var2.forEach;
                            var0 = function(arg0, arg1) { // Environment: var0
                                _fun5092: for (var _fun5092_ip = 0;;) switch (_fun5092_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var1 = arg1;
                                        var _closure4_slot0 = var1;
                                        var2 = function(arg0) { // Original name: cb, environment: var0
                                            _fun5093: for (var _fun5093_ip = 0;;) switch (_fun5093_ip) {
                                                case 0:
                                                    var3 = arg0;
                                                    var4 = _closure2_slot2;
                                                    var2 = _closure4_slot0;
                                                    var0 = true;
                                                    var4[var2] = var0;
                                                    var0 = _closure2_slot1;
                                                    var2 = var0 + 1;
                                                    _closure2_slot1 = var2;
                                                    var0 = _closure2_slot0;
                                                    var0 = var0.length;
                                                    if (!(var2 !== var0)) {
                                                        _fun5093_ip = 84;
                                                        continue _fun5093
                                                    }
                                                case 47:
                                                    var0 = var3.finished;
                                                    var0 = !var0;
                                                    if (!var0) {
                                                        _fun5093_ip = 63;
                                                        continue _fun5093
                                                    }
                                                case 59:
                                                    var0 = _closure2_slot3;
                                                case 63:
                                                    if (!var0) {
                                                        _fun5093_ip = 80;
                                                        continue _fun5093
                                                    }
                                                case 66:
                                                    var2 = _closure2_slot4;
                                                    var0 = var2.stop;
                                                    var0 = var0.bind(var2)();
                                                case 80:
                                                    var0 = undefined;
                                                    return var0;
                                                case 84:
                                                    var0 = 0;
                                                    _closure2_slot1 = var0;
                                                    var0 = _closure3_slot0;
                                                    if (!var0) {
                                                        _fun5093_ip = 111;
                                                        continue _fun5093
                                                    }
                                                case 100:
                                                    var2 = _closure3_slot0;
                                                    var1 = undefined;
                                                    var0 = var2.bind(var1)(var3);
                                                case 111:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        if (var3) {
                                            _fun5092_ip = 38;
                                            continue _fun5092
                                        }
                                    case 20:
                                        var1 = {};
                                        var0 = true;
                                        var1.finished = var0;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                        _fun5092_ip = 56;
                                        continue _fun5092;
                                    case 38:
                                        var1 = var3.start;
                                        var0 = _closure3_slot1;
                                        var0 = var1.bind(var3)(var2, var0);
                                    case 56:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                        case 76:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.start = var2;
                var2 = function() { // Original name: stop, environment: var1
                    var2 = _closure2_slot0;
                    var1 = var2.forEach;
                    var0 = function(arg0, arg1) { // Environment: var0
                        _fun5095: for (var _fun5095_ip = 0;;) switch (_fun5095_ip) {
                            case 0:
                                var3 = arg0;
                                var2 = arg1;
                                var1 = _closure2_slot2;
                                var1 = var1[var2];
                                var1 = !var1;
                                if (!var1) {
                                    _fun5095_ip = 33;
                                    continue _fun5095
                                }
                            case 23:
                                var1 = var3.stop;
                                var1 = var1.bind(var3)();
                            case 33:
                                var1 = _closure2_slot2;
                                var0 = true;
                                var1[var2] = var0;
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0.stop = var2;
                var2 = function() { // Original name: reset, environment: var1
                    var2 = _closure2_slot0;
                    var1 = var2.forEach;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var1 = arg0;
                        var0 = var1.reset;
                        var0 = var0.bind(var1)();
                        var3 = _closure2_slot2;
                        var2 = false;
                        var0 = arg1;
                        var3[var0] = var2;
                        var0 = 0;
                        _closure2_slot1 = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0.reset = var2;
                var2 = function() { // Original name: _startNativeLoop, environment: var1
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = 'Loops run using the native driver cannot contain Animated.parallel animations';
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                };
                var0._startNativeLoop = var2;
                var2 = function() { // Original name: _isUsingNativeDriver, environment: var1
                    var0 = false;
                    return var0;
                };
                var0._isUsingNativeDriver = var2;
                var _closure2_slot4 = var0;
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var9 = function(arg0) { // Original name: delayImpl, environment: var6
        var3 = _closure1_slot6;
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 13;
        var0 = var2[var0];
        var2 = undefined;
        var4 = var1.bind(var2)(var0);
        var0 = var4.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var4
            }
        });
        var6 = 0;
        var7 = var1;
        var0 = new var7[var4](var6, var5);
        var1 = var0 instanceof Object ? var0 : var1;
        var0 = {
            'toValue': 0,
            'delay': null,
            'duration': 0,
            'useNativeDriver': false
        };
        var4 = arg0;
        var0.delay = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot10 = var9;
    var1 = {};
    var0 = 13;
    var13 = var5[var0];
    var0 = undefined;
    var13 = var7.bind(var0)(var13);
    var1.Value = var13;
    var13 = 6;
    var13 = var5[var13];
    var13 = var7.bind(var0)(var13);
    var1.ValueXY = var13;
    var13 = 7;
    var13 = var5[var13];
    var13 = var7.bind(var0)(var13);
    var1.Color = var13;
    var13 = 15;
    var13 = var5[var13];
    var13 = var7.bind(var0)(var13);
    var1.Interpolation = var13;
    var13 = 8;
    var13 = var5[var13];
    var13 = var7.bind(var0)(var13);
    var1.Node = var13;
    var1.decay = var12;
    var1.timing = var11;
    var1.spring = var10;
    var10 = function(arg0, arg1) { // Original name: addImpl, environment: var6
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var0 = var3.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var3
            }
        });
        var5 = arg0;
        var4 = arg1;
        var6 = var1;
        var0 = new var6[var3](var5, var4, var3);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var1.add = var10;
    var10 = function(arg0, arg1) { // Original name: subtractImpl, environment: var6
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var0 = var3.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var3
            }
        });
        var5 = arg0;
        var4 = arg1;
        var6 = var1;
        var0 = new var6[var3](var5, var4, var3);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var1.subtract = var10;
    var10 = function(arg0, arg1) { // Original name: divideImpl, environment: var6
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var0 = var3.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var3
            }
        });
        var5 = arg0;
        var4 = arg1;
        var6 = var1;
        var0 = new var6[var3](var5, var4, var3);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var1.divide = var10;
    var10 = function(arg0, arg1) { // Original name: multiplyImpl, environment: var6
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var0 = var3.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var3
            }
        });
        var5 = arg0;
        var4 = arg1;
        var6 = var1;
        var0 = new var6[var3](var5, var4, var3);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var1.multiply = var10;
    var10 = function(arg0, arg1) { // Original name: moduloImpl, environment: var6
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var0 = var3.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var3
            }
        });
        var5 = arg0;
        var4 = arg1;
        var6 = var1;
        var0 = new var6[var3](var5, var4, var3);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var1.modulo = var10;
    var10 = function(arg0, arg1, arg2) { // Original name: diffClampImpl, environment: var6
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var0 = var4.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var4
            }
        });
        var7 = arg0;
        var6 = arg1;
        var5 = arg2;
        var8 = var1;
        var0 = new var8[var4](var7, var6, var5, var4);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var1.diffClamp = var10;
    var1.delay = var9;
    var1.sequence = var8;
    var1.parallel = var3;
    var3 = function(arg0, arg1) { // Original name: staggerImpl, environment: var6
        var3 = arg1;
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot9;
        var1 = var3.map;
        var0 = function(arg0, arg1) { // Environment: var0
            var2 = _closure1_slot8;
            var3 = _closure1_slot10;
            var1 = _closure2_slot0;
            var0 = arg1;
            var0 = var1 * var0;
            var1 = undefined;
            var3 = var3.bind(var1)(var0);
            var0 = new Array(2);
            var0[0] = var3;
            var3 = arg0;
            var0[1] = var3;
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var1 = var1.bind(var3)(var0);
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var1.stagger = var3;
    var3 = function(arg0) { // Original name: loopImpl, environment: var6
        _fun5109: for (var _fun5109_ip = 0;;) switch (_fun5109_ip) {
            case 0:
                var0 = undefined;
                var4 = undefined;
                var2 = arg0;
                var _closure2_slot0 = var2;
                var2 = arguments.length;
                var3 = 1;
                if (!(var2 > var3)) {
                    _fun5109_ip = 31;
                    continue _fun5109
                }
            case 23:
                var2 = arguments[var3];
                if (!(var0 === var2)) {
                    _fun5109_ip = 35;
                    continue _fun5109
                }
            case 31:
                var2 = {};
                _fun5109_ip = 39;
                continue _fun5109;
            case 35:
                var2 = arguments[var3];
            case 39:
                var4 = var2.iterations;
                var3 = -1;
                if (!(var0 !== var4)) {
                    _fun5109_ip = 58;
                    continue _fun5109
                }
            case 55:
                var3 = var4;
            case 58:
                var _closure2_slot1 = var3;
                var2 = var2.resetBeforeIteration;
                var0 = var0 === var2;
                if (var0) {
                    _fun5109_ip = 78;
                    continue _fun5109
                }
            case 75:
                var0 = var2;
            case 78:
                var _closure2_slot2 = var0;
                var0 = false;
                var _closure2_slot3 = var0;
                var0 = 0;
                var _closure2_slot4 = var0;
                var0 = {};
                var2 = function(arg0) { // Original name: start, environment: var1
                    _fun5110: for (var _fun5110_ip = 0;;) switch (_fun5110_ip) {
                        case 0:
                            var4 = arg0;
                            var _closure3_slot0 = var4;
                            var2 = function() { // Original name: restart, environment: var0
                                _fun5111: for (var _fun5111_ip = 0;;) switch (_fun5111_ip) {
                                    case 0:
                                        var0 = undefined;
                                        var3 = undefined;
                                        var2 = arguments.length;
                                        var1 = 0;
                                        if (!(var2 > var1)) {
                                            _fun5111_ip = 21;
                                            continue _fun5111
                                        }
                                    case 13:
                                        var2 = arguments[var1];
                                        if (!(var0 === var2)) {
                                            _fun5111_ip = 32;
                                            continue _fun5111
                                        }
                                    case 21:
                                        var2 = {};
                                        var4 = true;
                                        var2.finished = var4;
                                        _fun5111_ip = 36;
                                        continue _fun5111;
                                    case 32:
                                        var2 = arguments[var1];
                                    case 36:
                                        var3 = _closure2_slot3;
                                        if (var3) {
                                            _fun5111_ip = 140;
                                            continue _fun5111
                                        }
                                    case 46:
                                        var4 = _closure2_slot4;
                                        var3 = _closure2_slot1;
                                        if (!(var4 !== var3)) {
                                            _fun5111_ip = 140;
                                            continue _fun5111
                                        }
                                    case 58:
                                        var4 = var2.finished;
                                        var3 = false;
                                        if (!(var3 !== var4)) {
                                            _fun5111_ip = 140;
                                            continue _fun5111
                                        }
                                    case 70:
                                        var3 = _closure2_slot4;
                                        var3 = var3 + 1;
                                        _closure2_slot4 = var3;
                                        var3 = _closure2_slot2;
                                        if (!var3) {
                                            _fun5111_ip = 102;
                                            continue _fun5111
                                        }
                                    case 88:
                                        var4 = _closure2_slot0;
                                        var3 = var4.reset;
                                        var3 = var3.bind(var4)();
                                    case 102:
                                        var5 = _closure2_slot0;
                                        var4 = var5.start;
                                        var3 = _closure3_slot1;
                                        var6 = _closure2_slot1;
                                        var1 = -1;
                                        var1 = var1 === var6;
                                        var1 = var4.bind(var5)(var3, var1);
                                        _fun5111_ip = 159;
                                        continue _fun5111;
                                    case 140:
                                        var3 = _closure3_slot0;
                                        if (!var3) {
                                            _fun5111_ip = 159;
                                            continue _fun5111
                                        }
                                    case 150:
                                        var1 = _closure3_slot0;
                                        var1 = var1.bind(var0)(var2);
                                    case 159:
                                        return var0;
                                }
                            };
                            var _closure3_slot1 = var2;
                            var1 = _closure2_slot0;
                            if (!var1) {
                                _fun5110_ip = 38;
                                continue _fun5110
                            }
                        case 28:
                            var3 = _closure2_slot1;
                            var1 = 0;
                            if (!(var1 === var3)) {
                                _fun5110_ip = 59;
                                continue _fun5110
                            }
                        case 38:
                            if (!var4) {
                                _fun5110_ip = 103;
                                continue _fun5110
                            }
                        case 41:
                            var3 = {};
                            var1 = true;
                            var3.finished = var1;
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3);
                            _fun5110_ip = 103;
                            continue _fun5110;
                        case 59:
                            var3 = _closure2_slot0;
                            var1 = var3._isUsingNativeDriver;
                            var1 = var1.bind(var3)();
                            if (var1) {
                                _fun5110_ip = 84;
                                continue _fun5110
                            }
                        case 76:
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                            _fun5110_ip = 103;
                            continue _fun5110;
                        case 84:
                            var2 = _closure2_slot0;
                            var1 = var2._startNativeLoop;
                            var0 = _closure2_slot1;
                            var0 = var1.bind(var2)(var0);
                        case 103:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.start = var2;
                var2 = function() { // Original name: stop, environment: var1
                    var1 = true;
                    _closure2_slot3 = var1;
                    var1 = _closure2_slot0;
                    var0 = var1.stop;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
                };
                var0.stop = var2;
                var2 = function() { // Original name: reset, environment: var1
                    var1 = 0;
                    _closure2_slot4 = var1;
                    var1 = false;
                    _closure2_slot3 = var1;
                    var1 = _closure2_slot0;
                    var0 = var1.reset;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
                };
                var0.reset = var2;
                var2 = function() { // Original name: _startNativeLoop, environment: var1
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = 'Loops run using the native driver cannot contain Animated.loop animations';
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                };
                var0._startNativeLoop = var2;
                var1 = function() { // Original name: _isUsingNativeDriver, environment: var1
                    var1 = _closure2_slot0;
                    var0 = var1._isUsingNativeDriver;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0._isUsingNativeDriver = var1;
                return var0;
        }
    };
    var1.loop = var3;
    var3 = function(arg0, arg1) { // Original name: eventImpl, environment: var6
        _fun5116: for (var _fun5116_ip = 0;;) switch (_fun5116_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 14;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var3 = var0.AnimatedEvent;
                var0 = var3.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var5 = arg0;
                var4 = arg1;
                var6 = var1;
                var0 = new var6[var3](var5, var4, var3);
                var2 = var0 instanceof Object ? var0 : var1;
                var1 = var2.__isNative;
                var0 = var2;
                if (var1) {
                    _fun5116_ip = 79;
                    continue _fun5116
                }
            case 69:
                var1 = var2.__getHandler;
                var0 = var1.bind(var2)();
            case 79:
                return var0;
        }
    };
    var1.event = var3;
    var3 = 16;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var1.createAnimatedComponent = var3;
    var3 = 14;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var7 = var7.attachNativeEventImpl;
    var1.attachNativeEvent = var7;
    var7 = function(arg0, arg1) { // Original name: forkEventImpl, environment: var6
        _fun5117: for (var _fun5117_ip = 0;;) switch (_fun5117_ip) {
            case 0:
                var2 = arg0;
                var4 = arg1;
                var _closure2_slot0 = var2;
                var _closure2_slot1 = var4;
                var0 = var4;
                if (!var2) {
                    _fun5117_ip = 84;
                    continue _fun5117
                }
            case 22:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 14;
                var5 = var5[var3];
                var3 = undefined;
                var3 = var6.bind(var3)(var5);
                var3 = var3.AnimatedEvent;
                var3 = var2 instanceof var3;
                if (var3) {
                    _fun5117_ip = 67;
                    continue _fun5117
                }
            case 60:
                var1 = function() { // Environment: var1
                    _fun5118: for (var _fun5118_ip = 0;;) switch (_fun5118_ip) {
                        case 0:
                            var0 = undefined;
                            var1 = undefined;
                            var3 = _closure2_slot0;
                            var4 = 'function';
                            var3 = typeof var3;
                            if (!(var4 === var3)) {
                                _fun5118_ip = 42;
                                continue _fun5118
                            }
                        case 22:
                            var5 = _closure2_slot0;
                            var4 = var5.apply;
                            var1 = arguments;
                            var3 = var1;
                            var3 = var4.bind(var5)(var0, var3);
                        case 42:
                            var3 = _closure2_slot1;
                            var2 = var3.apply;
                            var1 = arguments;
                            var1 = var2.bind(var3)(var0, var1);
                            return var0;
                    }
                };
                _fun5117_ip = 81;
                continue _fun5117;
            case 67:
                var3 = var2.__addListener;
                var3 = var3.bind(var2)(var4);
                var1 = var2;
            case 81:
                var0 = var1;
            case 84:
                return var0;
        }
    };
    var1.forkEvent = var7;
    var6 = function(arg0, arg1) { // Original name: unforkEventImpl, environment: var6
        _fun5119: for (var _fun5119_ip = 0;;) switch (_fun5119_ip) {
            case 0:
                var2 = arg0;
                var0 = var2;
                if (!var0) {
                    _fun5119_ip = 44;
                    continue _fun5119
                }
            case 9:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 14;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.AnimatedEvent;
                var0 = var2 instanceof var1;
            case 44:
                if (!var0) {
                    _fun5119_ip = 61;
                    continue _fun5119
                }
            case 47:
                var1 = var2.__removeListener;
                var0 = arg1;
                var0 = var1.bind(var2)(var0);
            case 61:
                var0 = undefined;
                return var0;
        }
    };
    var1.unforkEvent = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnimatedEvent;
    var1.Event = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [347, 363, 364, 365, 366, 367, 368, 369, 359, 370, 371, 379, 380, 348, 378, 355, 381]);