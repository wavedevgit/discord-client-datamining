// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportAll;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var4 = var6[var3];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot7 = var3;
    var3 = 'nativeID';
    var3 = var4.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 'onEnd';
    var3 = var4.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 'useNativeDriver';
    var3 = var4.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot5;
        var2 = function(arg0) { // Original name: Animation, environment: var4
            _fun5518: for (var _fun5518_ip = 0;;) switch (_fun5518_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var4 = _closure1_slot4;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var4.bind(var0)(var2, var1);
                    var1 = global;
                    var9 = var1.Object;
                    var7 = var9.defineProperty;
                    var5 = _closure1_slot8;
                    var4 = {};
                    var8 = true;
                    var4.writable = var8;
                    var4.value = var0;
                    var4 = var7.bind(var9)(var2, var5, var4);
                    var9 = var1.Object;
                    var7 = var9.defineProperty;
                    var5 = _closure1_slot9;
                    var4 = {};
                    var4.writable = var8;
                    var4.value = var0;
                    var4 = var7.bind(var9)(var2, var5, var4);
                    var7 = var1.Object;
                    var4 = var7.defineProperty;
                    var5 = _closure1_slot10;
                    var1 = {};
                    var1.writable = var8;
                    var1.value = var0;
                    var1 = var4.bind(var7)(var2, var5, var1);
                    var1 = _closure1_slot6;
                    var4 = var1.bind(var0)(var2, var5);
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 5;
                    var1 = var8[var1];
                    var7 = var7.bind(var0)(var1);
                    var1 = var7.shouldUseNativeDriver;
                    var1 = var1.bind(var7)(var3);
                    var4[var5] = var1;
                    var1 = false;
                    var2.__active = var1;
                    var4 = var3.isInteraction;
                    var1 = null;
                    if (!(var1 == var4)) {
                        _fun5518_ip = 217;
                        continue _fun5518
                    }
                case 196:
                    var5 = _closure1_slot6;
                    var6 = _closure1_slot10;
                    var5 = var5.bind(var0)(var2, var6);
                    var5 = var5[var6];
                    var4 = !var5;
                case 217:
                    var2.__isInteraction = var4;
                    var4 = var3.isLooping;
                    var2.__isLooping = var4;
                    var3 = var3.iterations;
                    var4 = var1 != var3;
                    var1 = 1;
                    if (!var4) {
                        _fun5518_ip = 254;
                        continue _fun5518
                    }
                case 251:
                    var1 = var3;
                case 254:
                    var2.__iterations = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'start';
        var0.key = var1;
        var1 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: start, environment: var4
            _fun5519: for (var _fun5519_ip = 0;;) switch (_fun5519_ip) {
                case 0:
                    var2 = this;
                    var1 = _closure1_slot6;
                    var4 = _closure1_slot10;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var2, var4);
                    var1 = var1[var4];
                    if (var1) {
                        _fun5519_ip = 80;
                        continue _fun5519
                    }
                case 29:
                    var1 = arg4;
                    var4 = var1.__isNative;
                    var1 = true;
                    if (!(var1 === var4)) {
                        _fun5519_ip = 80;
                        continue _fun5519
                    }
                case 44:
                    var1 = global;
                    var5 = var1.Error;
                    var1 = var5.prototype;
                    var4 = Object.create(var1, {
                        constructor: {
                            value: var5
                        }
                    });
                    var7 = 'Attempting to run JS driven animation on animated node that has been moved to "native" earlier by starting an animation with `useNativeDriver: true`';
                    var8 = var4;
                    var1 = new var8[var5](var7, var6);
                    var1 = var1 instanceof Object ? var1 : var4;
                    throw var1;
                case 80:
                    var1 = _closure1_slot6;
                    var4 = _closure1_slot9;
                    var3 = var1.bind(var0)(var2, var4);
                    var1 = arg2;
                    var3[var4] = var1;
                    var1 = true;
                    var2.__active = var1;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(7);
        var1[0] = var0;
        var0 = {};
        var5 = 'stop';
        var0.key = var5;
        var5 = function() { // Original name: stop, environment: var4
            _fun5520: for (var _fun5520_ip = 0;;) switch (_fun5520_ip) {
                case 0:
                    var3 = this;
                    var4 = undefined;
                    var0 = undefined;
                    var1 = undefined;
                    var5 = _closure1_slot6;
                    var6 = _closure1_slot8;
                    var5 = var5.bind(var4)(var3, var6);
                    var6 = var5[var6];
                    var5 = null;
                    if (!(var5 != var6)) {
                        _fun5520_ip = 192;
                        continue _fun5520
                    }
                case 39:
                    var5 = _closure1_slot6;
                    var6 = _closure1_slot8;
                    var5 = var5.bind(var4)(var3, var6);
                    var8 = var5[var6];
                    var0 = var8;
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var7 = var5.concat;
                    var6 = '';
                    var5 = ':stopAnimation';
                    var1 = var7.bind(var6)(var8, var5);
                case 89: // try_start_0
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var6 = 5;
                    var8 = var5[var6];
                    var8 = var7.bind(var4)(var8);
                    var10 = var8.API;
                    var9 = var10.setWaitingForIdentifier;
                    var8 = var1;
                    var8 = var9.bind(var10)(var8);
                    var5 = var5[var6];
                    var5 = var7.bind(var4)(var5);
                    var7 = var5.API;
                    var5 = var7.stopAnimation;
                    var0 = var5.bind(var7)(var0);
                case 155: // try_end0
                    var5 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var0 = var0[var6];
                    var0 = var5.bind(var4)(var0);
                    var6 = var0.API;
                    var5 = var6.unsetWaitingForIdentifier;
                    var0 = var1;
                    var0 = var5.bind(var6)(var0);
                case 192:
                    var0 = false;
                    var3.__active = var0;
                    return var4;
                case 202: // catch_target0
                    CatchBlockStart(arg_register = 0);
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 5;
                    var2 = var5[var2];
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.API;
                    var2 = var3.unsetWaitingForIdentifier;
                    var1 = var2.bind(var3)(var1);
                    throw var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = '__getNativeAnimationConfig';
        var0.key = var5;
        var5 = function() { // Original name: __getNativeAnimationConfig, environment: var4
            var0 = global;
            var2 = var0.Error;
            var0 = var2.prototype;
            var1 = Object.create(var0, {
                constructor: {
                    value: var2
                }
            });
            var3 = 'This animation type cannot be offloaded to native';
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            throw var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = '__findAnimatedPropsNodes';
        var0.key = var5;
        var5 = function(arg0) { // Original name: __findAnimatedPropsNodes, environment: var4
            _fun5522: for (var _fun5522_ip = 0;;) switch (_fun5522_ip) {
                case 0:
                    var2 = arg0;
                    var6 = this;
                    var0 = new Array(0);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 6;
                    var1 = var4[var1];
                    var4 = undefined;
                    var1 = var3.bind(var4)(var1);
                    var1 = var2 instanceof var1;
                    if (var1) {
                        _fun5522_ip = 122;
                        continue _fun5522
                    }
                case 42:
                    var1 = var2.__getChildren;
                    var7 = var1.bind(var2)();
                    var1 = var7;
                    var3 = var1[Symbol.iterator];
                    var1 = var3().next;
                case 58:
                    var12 = var1().value;
                    var7 = var3;
                    if (!(var7 !== var4)) {
                        _fun5522_ip = 117;
                        continue _fun5522
                    }
                case 69: // try_start_0
                    var10 = var0;
                    var9 = var10.push;
                    var8 = var9.apply;
                    var11 = _closure1_slot3;
                    var7 = var6.__findAnimatedPropsNodes;
                    var7 = var7.bind(var6)(var12);
                    var7 = var11.bind(var4)(var7);
                    var7 = var8.bind(var9)(var10, var7);
                case 108: // try_end0
                    _fun5522_ip = 58;
                    continue _fun5522;
                case 110: // catch_target0
                    CatchBlockStart(arg_register = 1);
                    var3.return();
                    throw var1;
                case 117:
                    var1 = var0;
                    return var1;
                case 122:
                    var1 = var0.push;
                    var1 = var1.bind(var0)(var2);
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = '__startAnimationIfNative';
        var0.key = var5;
        var5 = function(arg0) { // Original name: __startAnimationIfNative, environment: var4
            _fun5523: for (var _fun5523_ip = 0;;) switch (_fun5523_ip) {
                case 0:
                    var2 = arg0;
                    var11 = this;
                    var3 = var2;
                    var _closure3_slot0 = var2;
                    var4 = undefined;
                    var1 = undefined;
                    var _closure3_slot1 = var11;
                    var5 = _closure1_slot6;
                    var6 = _closure1_slot10;
                    var5 = var5.bind(var4)(var11, var6);
                    var5 = var5[var6];
                    if (var5) {
                        _fun5523_ip = 51;
                        continue _fun5523
                    }
                case 47:
                    var5 = false;
                    return var5;
                case 51:
                    var8 = _closure1_slot7;
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var7 = var5.concat;
                    var6 = '';
                    var5 = ':startAnimation';
                    var8 = var7.bind(var6)(var8, var5);
                    var1 = var8;
                    var6 = _closure1_slot7;
                    var5 = 1;
                    var5 = var6 + var5;
                    _closure1_slot7 = var5;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 5;
                    var6 = var6[var5];
                    var6 = var7.bind(var4)(var6);
                    var7 = var6.API;
                    var6 = var7.setWaitingForIdentifier;
                    var6 = var6.bind(var7)(var8);
                case 139: // try_start_0 // try_start_1
                    var6 = var11.__getNativeAnimationConfig;
                    var9 = var6.bind(var11)();
                    var10 = var3;
                    var6 = var10.__makeNative;
                    var3 = var9.platformConfig;
                    var3 = var6.bind(var10)(var3);
                    var3 = _closure1_slot6;
                    var6 = _closure1_slot8;
                    var13 = var3.bind(var4)(var11, var6);
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var12 = var7[var5];
                    var14 = var8.bind(var4)(var12);
                    var12 = var14.generateNewAnimationId;
                    var12 = var12.bind(var14)();
                    var13[var6] = var12;
                    var7 = var7[var5];
                    var7 = var8.bind(var4)(var7);
                    var8 = var7.API;
                    var7 = var8.startAnimatingNode;
                    var3 = var3.bind(var4)(var11, var6);
                    var18 = var3[var6];
                    var3 = var10.__getNativeTag;
                    var17 = var3.bind(var10)();
                    var15 = function(arg0) { // Environment: var0
                        _fun5524: for (var _fun5524_ip = 0;;) switch (_fun5524_ip) {
                            case 0:
                                var1 = arg0;
                                var3 = _closure3_slot1;
                                var2 = var3.__notifyAnimationEnd;
                                var2 = var2.bind(var3)(var1);
                                var4 = var1.value;
                                var3 = var1.offset;
                                var1 = null;
                                if (!(var1 != var4)) {
                                    _fun5524_ip = 179;
                                    continue _fun5524
                                }
                            case 41:
                                var2 = _closure3_slot0;
                                var1 = var2.__onAnimatedValueUpdateReceived;
                                var1 = var1.bind(var2)(var4, var3);
                                var5 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var4 = 7;
                                var3 = var1[var4];
                                var1 = undefined;
                                var5 = var5.bind(var1)(var3);
                                var3 = var5.cxxNativeAnimatedEnabled;
                                var3 = var3.bind(var5)();
                                if (!var3) {
                                    _fun5524_ip = 125;
                                    continue _fun5524
                                }
                            case 95:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var2 = var2[var4];
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.cxxNativeAnimatedRemoveJsSync;
                                var2 = var2.bind(var3)();
                                if (var2) {
                                    _fun5524_ip = 143;
                                    continue _fun5524
                                }
                            case 125:
                                var2 = _closure3_slot1;
                                var3 = var2.__isLooping;
                                var2 = true;
                                if (!(var2 === var3)) {
                                    _fun5524_ip = 143;
                                    continue _fun5524
                                }
                            case 141:
                                return var1;
                            case 143:
                                var2 = _closure3_slot1;
                                var1 = var2.__findAnimatedPropsNodes;
                                var0 = _closure3_slot0;
                                var2 = var1.bind(var2)(var0);
                                var1 = var2.forEach;
                                var0 = function(arg0) { // Environment: var0
                                    var1 = arg0;
                                    var0 = var1.update;
                                    var0 = var0.bind(var1)();
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                            case 179:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var19 = var8;
                    var16 = var9;
                    var0 = var19[var7](var18, var17, var16, var15, var14);
                case 270: // try_end0 // try_end1
                    var3 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var0 = var0[var5];
                    var0 = var3.bind(var4)(var0);
                    var6 = var0.API;
                    var3 = var6.unsetWaitingForIdentifier;
                    var0 = var1;
                    var0 = var3.bind(var6)(var0);
                    var0 = true;
                    return var0;
                case 311: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register = 0);
                    throw var0;
                case 315: // try_end2 // catch_target1 // catch_target2
                    CatchBlockStart(arg_register = 0);
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.API;
                    var2 = var3.unsetWaitingForIdentifier;
                    var1 = var2.bind(var3)(var1);
                    throw var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = '__notifyAnimationEnd';
        var0.key = var5;
        var5 = function(arg0) { // Original name: __notifyAnimationEnd, environment: var4
            _fun5526: for (var _fun5526_ip = 0;;) switch (_fun5526_ip) {
                case 0:
                    var5 = this;
                    var1 = _closure1_slot6;
                    var2 = _closure1_slot9;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var5, var2);
                    var2 = var1[var2];
                    var4 = null;
                    if (!(var4 != var2)) {
                        _fun5526_ip = 58;
                        continue _fun5526
                    }
                case 32:
                    var1 = _closure1_slot6;
                    var3 = _closure1_slot9;
                    var1 = var1.bind(var0)(var5, var3);
                    var1[var3] = var4;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                case 58:
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = '__getDebugID';
        var0.key = var5;
        var4 = function() { // Original name: __getDebugID, environment: var4
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[6] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 6, 7, 99, 100, 349, 374, 79]);