// modules/auth/native/components/utils/usePasswordScore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var7 = 2;
    var4 = var6[var7];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot4 = var3;
    var3 = {};
    var3.WEAK = var7;
    var4 = 'WEAK';
    var3[var7] = var4;
    var7 = 3;
    var3.MEDIUM = var7;
    var4 = 'MEDIUM';
    var3[var7] = var4;
    var7 = 4;
    var3.STRONG = var7;
    var4 = 'STRONG';
    var3[var7] = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/native/components/utils/usePasswordScore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.PasswordScore = var3;
    var1 = function arg0() {
        var6 = arg0;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot4;
        var1 = var5.useState;
        var4 = null;
        var1 = var1.bind(var5)(var4);
        var10 = _closure1_slot3;
        var9 = undefined;
        var8 = 2;
        var3 = var10.bind(var9)(var1, var8);
        var1 = 0;
        var2 = var3[var1];
        var7 = 1;
        var3 = var3[var7];
        var _closure2_slot1 = var3;
        var3 = var5.useState;
        var3 = var3.bind(var5)(var4);
        var3 = var10.bind(var9)(var3, var8);
        var1 = var3[var1];
        var3 = var3[var7];
        var _closure2_slot2 = var3;
        var3 = var5.useRef;
        var3 = var3.bind(var5)(var4);
        var _closure2_slot3 = var3;
        var7 = var5.useEffect;
        var4 = function() { // Environment: var0
            var2 = _closure2_slot3;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 3;
            var1 = var3[var1];
            var3 = undefined;
            var5 = var4.bind(var3)(var1);
            var4 = var5.throttle;
            var1 = function() { // Environment: var0
                var3 = _closure1_slot2;
                var2 = undefined;
                var1 = function*(arg0) { // Environment: var0
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun100389: for (var _fun100389_ip = 0;;) switch (_fun100389_ip) {
                            case 0:
                                StartGenerator();
                                var2 = arg0;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun100389_ip = 155;
                                    continue _fun100389
                                }
                            case 13:
                                var1 = var2;
                                var3 = null;
                                if (!(var3 != var2)) {
                                    _fun100389_ip = 150;
                                    continue _fun100389
                                }
                            case 25:
                                var2 = var1;
                                var4 = var2.length;
                                var2 = 0;
                                if (!(var4 > var2)) {
                                    _fun100389_ip = 150;
                                    continue _fun100389
                                }
                            case 39: // try_start_0
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var2 = 4;
                                var2 = var5[var2];
                                var5 = undefined;
                                var4 = var4.bind(var5)(var2);
                                var2 = var4.scorePassword;
                                var1 = var2.bind(var4)(var1);
                                SaveGenerator(address = 79);
                            case 77:
                                return var1;
                            case 79:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun100389_ip = 122;
                                    continue _fun100389
                                }
                            case 85:
                                var6 = _closure2_slot1;
                                var4 = var1.password_strength;
                                var4 = var6.bind(var5)(var4);
                                var4 = _closure2_slot2;
                                var2 = var1.valid;
                                var2 = var4.bind(var5)(var2);
                            case 120: // try_end0
                                _fun100389_ip = 150;
                                continue _fun100389;
                            case 122:
                                return var1;
                            case 125: // catch_target0
                                CatchBlockStart(arg_register = 1);
                                var4 = _closure2_slot1;
                                var2 = undefined;
                                var4 = var4.bind(var2)(var3);
                                var1 = _closure2_slot2;
                                var1 = var1.bind(var2)(var3);
                            case 150:
                                var1 = undefined;
                                return var1;
                            case 155:
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
            var3 = var1.bind(var3)();
            var1 = 250;
            var1 = var4.bind(var5)(var3, var1);
            var2.current = var1;
            var0 = function() { // Environment: var0
                _fun100391: for (var _fun100391_ip = 0;;) switch (_fun100391_ip) {
                    case 0:
                        var0 = _closure2_slot3;
                        var4 = var0.current;
                        var3 = null;
                        var5 = var3 == var4;
                        var0 = undefined;
                        var2 = undefined;
                        if (var5) {
                            _fun100391_ip = 31;
                            continue _fun100391
                        }
                    case 25:
                        var2 = var4.cancel;
                    case 31:
                        if (!(var3 != var2)) {
                            _fun100391_ip = 54;
                            continue _fun100391
                        }
                    case 35:
                        var1 = _closure2_slot3;
                        var2 = var1.current;
                        var1 = var2.cancel;
                        var1 = var1.bind(var2)();
                    case 54:
                        return var0;
                }
            };
            return var0;
        };
        var3 = new Array(0);
        var3 = var7.bind(var5)(var4, var3);
        var4 = var5.useEffect;
        var3 = new Array(1);
        var3[0] = var6;
        var0 = function() { // Environment: var0
            _fun100392: for (var _fun100392_ip = 0;;) switch (_fun100392_ip) {
                case 0:
                    var1 = _closure2_slot3;
                    var2 = var1.current;
                    var1 = null;
                    var1 = var1 != var2;
                    if (!var1) {
                        _fun100392_ip = 36;
                        continue _fun100392
                    }
                case 21:
                    var2 = _closure2_slot0;
                    var3 = var2.length;
                    var2 = 0;
                    var1 = var3 > var2;
                case 36:
                    if (!var1) {
                        _fun100392_ip = 57;
                        continue _fun100392
                    }
                case 39:
                    var2 = _closure2_slot3;
                    var1 = var2.current;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                case 57:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var4.bind(var5)(var0, var3);
        var0 = {};
        var0.passwordScore = var2;
        var0.passwordValid = var1;
        return var0;
    };
    var2.usePasswordScore = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 22, 13018, 2]);