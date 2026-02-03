// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.useMemo;
    var _closure1_slot2 = var3;
    var3 = {};
    var4 = 'function pnpm_usePanGestureProxyTs1(e){const{userDefinedConflictGestures}=this.__closure;if(userDefinedConflictGestures.onBegin)userDefinedConflictGestures.onBegin(e);}';
    var3.code = var4;
    var _closure1_slot3 = var3;
    var3 = {};
    var4 = 'function pnpm_usePanGestureProxyTs2(e){const{onGestureStart,userDefinedConflictGestures}=this.__closure;onGestureStart(e);if(userDefinedConflictGestures.onStart)userDefinedConflictGestures.onStart(e);}';
    var3.code = var4;
    var _closure1_slot4 = var3;
    var3 = {};
    var4 = 'function pnpm_usePanGestureProxyTs3(e){const{onGestureUpdate,userDefinedConflictGestures}=this.__closure;onGestureUpdate(e);if(userDefinedConflictGestures.onUpdate)userDefinedConflictGestures.onUpdate(e);}';
    var3.code = var4;
    var _closure1_slot5 = var3;
    var3 = {};
    var4 = 'function pnpm_usePanGestureProxyTs4(e,success){const{onGestureEnd,userDefinedConflictGestures}=this.__closure;onGestureEnd(e,success);if(userDefinedConflictGestures.onEnd)userDefinedConflictGestures.onEnd(e,success);}';
    var3.code = var4;
    var _closure1_slot6 = var3;
    var3 = {};
    var4 = 'function pnpm_usePanGestureProxyTs5(e,success){const{userDefinedConflictGestures}=this.__closure;if(userDefinedConflictGestures.onFinalize)userDefinedConflictGestures.onFinalize(e,success);}';
    var3.code = var4;
    var _closure1_slot7 = var3;
    var1 = function arg0() {
        _fun75060: for (var _fun75060_ip = 0;;) switch (_fun75060_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.onConfigurePanGesture;
                var _closure2_slot0 = var6;
                var9 = var1.onGestureStart;
                var _closure2_slot1 = var9;
                var8 = var1.onGestureUpdate;
                var _closure2_slot2 = var8;
                var7 = var1.onGestureEnd;
                var _closure2_slot3 = var7;
                var3 = var1.options;
                var4 = undefined;
                if (!(var4 === var3)) {
                    _fun75060_ip = 58;
                    continue _fun75060
                }
            case 56:
                var3 = {};
            case 58:
                var5 = _closure1_slot2;
                var2 = new Array(4);
                var2[0] = var9;
                var2[1] = var8;
                var2[2] = var7;
                var2[3] = var6;
                var0 = function() { // Environment: var0
                    _fun75061: for (var _fun75061_ip = 0;;) switch (_fun75061_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var0 = 1;
                            var0 = var3[var0];
                            var5 = undefined;
                            var0 = var2.bind(var5)(var0);
                            var2 = var0.Gesture;
                            var0 = var2.Pan;
                            var3 = var0.bind(var2)();
                            var2 = var3.withTestId;
                            var0 = 'rnrc-gesture-handler';
                            var0 = var2.bind(var3)(var0);
                            var _closure3_slot0 = var0;
                            var2 = {};
                            var3 = var0.onBegin;
                            var2.onBegin = var3;
                            var3 = var0.onStart;
                            var2.onStart = var3;
                            var3 = var0.onUpdate;
                            var2.onUpdate = var3;
                            var3 = var0.onEnd;
                            var2.onEnd = var3;
                            var3 = var0.onFinalize;
                            var2.onFinalize = var3;
                            var6 = {};
                            var6.onBegin = var5;
                            var6.onStart = var5;
                            var6.onUpdate = var5;
                            var6.onEnd = var5;
                            var6.onFinalize = var5;
                            var _closure3_slot1 = var6;
                            var3 = function arg0() {
                                var2 = _closure3_slot1;
                                var1 = arg0;
                                var2.onBegin = var1;
                                var0 = _closure3_slot0;
                                return var0;
                            };
                            var0.onBegin = var3;
                            var3 = function arg0() {
                                var2 = _closure3_slot1;
                                var1 = arg0;
                                var2.onStart = var1;
                                var0 = _closure3_slot0;
                                return var0;
                            };
                            var0.onStart = var3;
                            var3 = function arg0() {
                                var2 = _closure3_slot1;
                                var1 = arg0;
                                var2.onUpdate = var1;
                                var0 = _closure3_slot0;
                                return var0;
                            };
                            var0.onUpdate = var3;
                            var3 = function arg0() {
                                var2 = _closure3_slot1;
                                var1 = arg0;
                                var2.onEnd = var1;
                                var0 = _closure3_slot0;
                                return var0;
                            };
                            var0.onEnd = var3;
                            var3 = function arg0() {
                                var2 = _closure3_slot1;
                                var1 = arg0;
                                var2.onFinalize = var1;
                                var0 = _closure3_slot0;
                                return var0;
                            };
                            var0.onFinalize = var3;
                            var3 = _closure2_slot0;
                            if (!var3) {
                                _fun75061_ip = 238;
                                continue _fun75061
                            }
                        case 229:
                            var3 = _closure2_slot0;
                            var3 = var3.bind(var5)(var0);
                        case 238:
                            var3 = var2.onBegin;
                            var0.onBegin = var3;
                            var3 = var2.onStart;
                            var0.onStart = var3;
                            var3 = var2.onUpdate;
                            var0.onUpdate = var3;
                            var3 = var2.onEnd;
                            var0.onEnd = var3;
                            var2 = var2.onFinalize;
                            var0.onFinalize = var2;
                            var3 = var0.onBegin;
                            var2 = function arg0() {
                                _fun75067: for (var _fun75067_ip = 0;;) switch (_fun75067_ip) {
                                    case 0:
                                        var1 = _closure3_slot1;
                                        var1 = var1.onBegin;
                                        if (!var1) {
                                            _fun75067_ip = 34;
                                            continue _fun75067
                                        }
                                    case 16:
                                        var2 = _closure3_slot1;
                                        var1 = var2.onBegin;
                                        var0 = arg0;
                                        var0 = var1.bind(var2)(var0);
                                    case 34:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var5 = {};
                            var5.userDefinedConflictGestures = var6;
                            var2.__closure = var5;
                            var5 = 7286111968229.0;
                            var2.__workletHash = var5;
                            var5 = _closure1_slot3;
                            var2.__initData = var5;
                            var5 = var3.bind(var0)(var2);
                            var3 = var5.onStart;
                            var2 = function arg0() {
                                _fun75068: for (var _fun75068_ip = 0;;) switch (_fun75068_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var1 = _closure2_slot1;
                                        var0 = undefined;
                                        var1 = var1.bind(var0)(var3);
                                        var2 = _closure3_slot1;
                                        var2 = var2.onStart;
                                        if (!var2) {
                                            _fun75068_ip = 48;
                                            continue _fun75068
                                        }
                                    case 33:
                                        var2 = _closure3_slot1;
                                        var1 = var2.onStart;
                                        var1 = var1.bind(var2)(var3);
                                    case 48:
                                        return var0;
                                }
                            };
                            var7 = {};
                            var9 = _closure2_slot1;
                            var7.onGestureStart = var9;
                            var7.userDefinedConflictGestures = var6;
                            var2.__closure = var7;
                            var7 = 2969501037173.0;
                            var2.__workletHash = var7;
                            var7 = _closure1_slot4;
                            var2.__initData = var7;
                            var5 = var3.bind(var5)(var2);
                            var3 = var5.onUpdate;
                            var2 = function arg0() {
                                _fun75069: for (var _fun75069_ip = 0;;) switch (_fun75069_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var1 = _closure2_slot2;
                                        var0 = undefined;
                                        var1 = var1.bind(var0)(var3);
                                        var2 = _closure3_slot1;
                                        var2 = var2.onUpdate;
                                        if (!var2) {
                                            _fun75069_ip = 48;
                                            continue _fun75069
                                        }
                                    case 33:
                                        var2 = _closure3_slot1;
                                        var1 = var2.onUpdate;
                                        var1 = var1.bind(var2)(var3);
                                    case 48:
                                        return var0;
                                }
                            };
                            var7 = {};
                            var9 = _closure2_slot2;
                            var7.onGestureUpdate = var9;
                            var7.userDefinedConflictGestures = var6;
                            var2.__closure = var7;
                            var7 = 14406733755860.0;
                            var2.__workletHash = var7;
                            var7 = _closure1_slot5;
                            var2.__initData = var7;
                            var5 = var3.bind(var5)(var2);
                            var3 = var5.onEnd;
                            var2 = function arg0, arg1() {
                                _fun75070: for (var _fun75070_ip = 0;;) switch (_fun75070_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var3 = arg1;
                                        var1 = _closure2_slot3;
                                        var0 = undefined;
                                        var1 = var1.bind(var0)(var4, var3);
                                        var2 = _closure3_slot1;
                                        var2 = var2.onEnd;
                                        if (!var2) {
                                            _fun75070_ip = 53;
                                            continue _fun75070
                                        }
                                    case 37:
                                        var2 = _closure3_slot1;
                                        var1 = var2.onEnd;
                                        var1 = var1.bind(var2)(var4, var3);
                                    case 53:
                                        return var0;
                                }
                            };
                            var7 = {};
                            var8 = _closure2_slot3;
                            var7.onGestureEnd = var8;
                            var7.userDefinedConflictGestures = var6;
                            var2.__closure = var7;
                            var7 = 3800149117372.0;
                            var2.__workletHash = var7;
                            var7 = _closure1_slot6;
                            var2.__initData = var7;
                            var3 = var3.bind(var5)(var2);
                            var2 = var3.onFinalize;
                            var1 = function arg0, arg1() {
                                _fun75071: for (var _fun75071_ip = 0;;) switch (_fun75071_ip) {
                                    case 0:
                                        var1 = _closure3_slot1;
                                        var1 = var1.onFinalize;
                                        if (!var1) {
                                            _fun75071_ip = 38;
                                            continue _fun75071
                                        }
                                    case 16:
                                        var3 = _closure3_slot1;
                                        var2 = var3.onFinalize;
                                        var1 = arg0;
                                        var0 = arg1;
                                        var0 = var2.bind(var3)(var1, var0);
                                    case 38:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var5 = {};
                            var5.userDefinedConflictGestures = var6;
                            var1.__closure = var5;
                            var5 = 16525776198753.0;
                            var1.__workletHash = var5;
                            var4 = _closure1_slot7;
                            var1.__initData = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var0 = var5.bind(var4)(var0, var2);
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 2;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useUpdateGestureConfig;
                var1 = var1.bind(var2)(var0, var3);
                return var0;
        }
    };
    var2.usePanGestureProxy = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4956, 9455]);