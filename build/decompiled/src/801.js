// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun8582: for (var _fun8582_ip = 0;;) switch (_fun8582_ip) {
        case 0:
            var0 = function arg0() {
                _fun8583: for (var _fun8583_ip = 0;;) switch (_fun8583_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = var2;
                        var3 = undefined;
                        var1 = undefined;
                        var1 = var2.getSnapshot;
                        var0 = var2.value;
                    case 21: // try_start_0
                        var2 = var1.bind(var3)();
                        var1 = _closure1_slot0;
                        var0 = var1.bind(var3)(var0, var2);
                        var0 = !var0;
                    case 41: // try_end0
                        return var0;
                    case 43: // catch_target0
                        CatchBlockStart(arg_register = 0);
                        var0 = true;
                        return var0;
                }
            };
            var _closure1_slot5 = var0;
            var1 = arg6;
            var0 = 0;
            var3 = var1[var0];
            var1 = arg1;
            var0 = undefined;
            var1 = var1.bind(var0)(var3);
            var4 = global;
            var3 = var4.Object;
            var3 = var3.is;
            var5 = 'function';
            var3 = typeof var3;
            if (!(var5 !== var3)) {
                _fun8582_ip = 62;
                continue _fun8582
            }
        case 55:
            var3 = function arg0, arg1() {
                _fun8584: for (var _fun8584_ip = 0;;) switch (_fun8584_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = arg1;
                        var0 = var1 === var2;
                        if (!var0) {
                            _fun8584_ip = 40;
                            continue _fun8584
                        }
                    case 13:
                        var3 = 0;
                        var3 = var3 !== var1;
                        if (var3) {
                            _fun8584_ip = 37;
                            continue _fun8584
                        }
                    case 22:
                        var4 = 1;
                        var5 = var4 / var1;
                        var4 = var4 / var2;
                        var3 = var5 === var4;
                    case 37:
                        var0 = var3;
                    case 40:
                        if (var0) {
                            _fun8584_ip = 57;
                            continue _fun8584
                        }
                    case 43:
                        var1 = var1 != var1;
                        if (!var1) {
                            _fun8584_ip = 54;
                            continue _fun8584
                        }
                    case 50:
                        var1 = var2 != var2;
                    case 54:
                        var0 = var1;
                    case 57:
                        return var0;
                }
            };
            _fun8582_ip = 74;
            continue _fun8582;
        case 62:
            var4 = var4.Object;
            var3 = var4.is;
        case 74:
            var _closure1_slot0 = var3;
            var3 = var1.useState;
            var _closure1_slot1 = var3;
            var3 = var1.useEffect;
            var _closure1_slot2 = var3;
            var3 = var1.useLayoutEffect;
            var _closure1_slot3 = var3;
            var3 = var1.useDebugValue;
            var _closure1_slot4 = var3;
            var3 = var1.useSyncExternalStore;
            if (!(var0 === var3)) {
                _fun8582_ip = 133;
                continue _fun8582
            }
        case 126:
            var2 = function arg0, arg1() {
                var6 = arg0;
                var4 = arg1;
                var _closure2_slot0 = var6;
                var _closure2_slot1 = var4;
                var2 = undefined;
                var0 = var4.bind(var2)();
                var _closure2_slot2 = var0;
                var7 = _closure1_slot1;
                var5 = {};
                var8 = {};
                var8.value = var0;
                var8.getSnapshot = var4;
                var5.inst = var8;
                var7 = var7.bind(var2)(var5);
                var5 = 0;
                var5 = var7[var5];
                var5 = var5.inst;
                var _closure2_slot3 = var5;
                var5 = 1;
                var5 = var7[var5];
                var _closure2_slot4 = var5;
                var7 = _closure1_slot3;
                var5 = new Array(3);
                var5[0] = var6;
                var5[1] = var0;
                var5[2] = var4;
                var4 = function() { // Environment: var3
                    _fun8586: for (var _fun8586_ip = 0;;) switch (_fun8586_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var0 = _closure2_slot2;
                            var2.value = var0;
                            var0 = _closure2_slot1;
                            var2.getSnapshot = var0;
                            var1 = _closure1_slot5;
                            var0 = undefined;
                            var1 = var1.bind(var0)(var2);
                            if (!var1) {
                                _fun8586_ip = 64;
                                continue _fun8586
                            }
                        case 44:
                            var2 = _closure2_slot4;
                            var1 = {};
                            var3 = _closure2_slot3;
                            var1.inst = var3;
                            var1 = var2.bind(var0)(var1);
                        case 64:
                            return var0;
                    }
                };
                var4 = var7.bind(var2)(var4, var5);
                var5 = _closure1_slot2;
                var4 = new Array(1);
                var4[0] = var6;
                var3 = function() { // Environment: var3
                    _fun8587: for (var _fun8587_ip = 0;;) switch (_fun8587_ip) {
                        case 0:
                            var3 = _closure1_slot5;
                            var1 = _closure2_slot3;
                            var2 = undefined;
                            var1 = var3.bind(var2)(var1);
                            if (!var1) {
                                _fun8587_ip = 44;
                                continue _fun8587
                            }
                        case 24:
                            var3 = _closure2_slot4;
                            var1 = {};
                            var4 = _closure2_slot3;
                            var1.inst = var4;
                            var1 = var3.bind(var2)(var1);
                        case 44:
                            var1 = _closure2_slot0;
                            var0 = function() { // Environment: var0
                                _fun8588: for (var _fun8588_ip = 0;;) switch (_fun8588_ip) {
                                    case 0:
                                        var2 = _closure1_slot5;
                                        var1 = _closure2_slot3;
                                        var0 = undefined;
                                        var1 = var2.bind(var0)(var1);
                                        if (!var1) {
                                            _fun8588_ip = 44;
                                            continue _fun8588
                                        }
                                    case 24:
                                        var2 = _closure2_slot4;
                                        var1 = {};
                                        var3 = _closure2_slot3;
                                        var1.inst = var3;
                                        var1 = var2.bind(var0)(var1);
                                    case 44:
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var3 = var5.bind(var2)(var3, var4);
                var1 = _closure1_slot4;
                var1 = var1.bind(var2)(var0);
                return var0;
            };
            _fun8582_ip = 139;
            continue _fun8582;
        case 133:
            var2 = var1.useSyncExternalStore;
        case 139:
            var1 = arg5;
            var1.useSyncExternalStore = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31]);