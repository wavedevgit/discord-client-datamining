// modules/feedback/native/requestReviewModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun86925: for (var _fun86925_ip = 0;;) switch (_fun86925_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun86925_ip = 138;
                            continue _fun86925
                        }
                    case 10: // try_start_0
                        var3 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var5 = 3;
                        var1 = var1[var5];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var1);
                        var1 = null;
                        var3 = var1 == var3;
                        var1 = undefined;
                        if (var3) {
                            _fun86925_ip = 75;
                            continue _fun86925
                        }
                    case 46:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var5];
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.requestRating;
                        var1 = var2.bind(var3)();
                    case 75:
                        SaveGenerator(address = 79);
                    case 77:
                        return var1;
                    case 79:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun86925_ip = 87;
                            continue _fun86925
                        }
                    case 85: // try_end0
                        _fun86925_ip = 133;
                        continue _fun86925;
                    case 87:
                        return var1;
                    case 90: // catch_target0
                        CatchBlockStart(arg_register = 5);
                        var3 = _closure1_slot5;
                        var2 = var3.error;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var4 = var1.concat;
                        var1 = 'Failed to show Android rating request: ';
                        var1 = var4.bind(var1)(var5);
                        var1 = var2.bind(var3)(var1);
                    case 133:
                        var1 = undefined;
                        return var1;
                    case 138:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot6 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var0;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NativeModules;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'requestReviewModal';
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/feedback/native/requestReviewModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun86926: for (var _fun86926_ip = 0;;) switch (_fun86926_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 4;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isAndroid;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun86926_ip = 62;
                    continue _fun86926
                }
            case 38:
                var1 = _closure1_slot4;
                var2 = var1.AppStoreManager;
                var1 = var2.requestReview;
                var1 = var1.bind(var2)();
                _fun86926_ip = 75;
                continue _fun86926;
            case 62:
                var1 = function() {
                    var0 = undefined;
                    var3 = _closure1_slot6;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var1 = var1.bind(var0)();
            case 75:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 27, 3, 11238, 478, 2]);