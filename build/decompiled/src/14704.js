// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 0;
    var4 = var3[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot2 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function*(arg0, arg1) { // Environment: var0
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun114710: for (var _fun114710_ip = 0;;) switch (_fun114710_ip) {
                    case 0:
                        StartGenerator();
                        var2 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun114710_ip = 62;
                            continue _fun114710
                        }
                    case 10:
                        var1 = var2.isEligible;
                        var1 = !var1;
                        if (var1) {
                            _fun114710_ip = 59;
                            continue _fun114710
                        }
                    case 22:
                        var3 = global;
                        var4 = var3.Boolean;
                        var3 = var2.lowerBound;
                        if (!var3) {
                            _fun114710_ip = 52;
                            continue _fun114710
                        }
                    case 39:
                        var5 = var2.lowerBound;
                        var2 = arg1;
                        var3 = var5 >= var2;
                    case 52:
                        var2 = undefined;
                        var1 = var4.bind(var2)(var3);
                    case 59:
                        return var1;
                    case 62:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function arg0, arg1() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var3 = var3.bind(var0)();
    var1 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function*(arg0, arg1) { // Environment: var0
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun114714: for (var _fun114714_ip = 0;;) switch (_fun114714_ip) {
                    case 0:
                        StartGenerator();
                        var4 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun114714_ip = 253;
                            continue _fun114714
                        }
                    case 13:
                        var1 = var4.isEligible;
                        if (var1) {
                            _fun114714_ip = 27;
                            continue _fun114714
                        }
                    case 22:
                        var1 = true;
                        return var1;
                    case 27:
                        var6 = var4.userStatus;
                        var7 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var5 = 1;
                        var2 = var2[var5];
                        var3 = undefined;
                        var2 = var7.bind(var3)(var2);
                        var2 = var2.PlayAgeRangeDeclarationUserStatus;
                        var2 = var2.VERIFIED;
                        if (!(var2 !== var6)) {
                            _fun114714_ip = 248;
                            continue _fun114714
                        }
                    case 77:
                        var7 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var2 = var2[var5];
                        var2 = var7.bind(var3)(var2);
                        var2 = var2.PlayAgeRangeDeclarationUserStatus;
                        var2 = var2.SUPERVISED;
                        if (!(var2 !== var6)) {
                            _fun114714_ip = 210;
                            continue _fun114714
                        }
                    case 110:
                        var7 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var2 = var2[var5];
                        var2 = var7.bind(var3)(var2);
                        var2 = var2.PlayAgeRangeDeclarationUserStatus;
                        var2 = var2.SUPERVISED_APPROVAL_PENDING;
                        if (!(var2 !== var6)) {
                            _fun114714_ip = 210;
                            continue _fun114714
                        }
                    case 143:
                        var7 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var2 = var2[var5];
                        var2 = var7.bind(var3)(var2);
                        var2 = var2.PlayAgeRangeDeclarationUserStatus;
                        var2 = var2.SUPERVISED_APPROVAL_DENIED;
                        if (!(var2 !== var6)) {
                            _fun114714_ip = 210;
                            continue _fun114714
                        }
                    case 176:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var1 = var1[var5];
                        var1 = var2.bind(var3)(var1);
                        var1 = var1.PlayAgeRangeDeclarationUserStatus;
                        var1 = var1.UNKNOWN;
                        var1 = false;
                        return var1;
                    case 210:
                        var1 = global;
                        var2 = var1.Boolean;
                        var1 = var4.ageLower;
                        if (!var1) {
                            _fun114714_ip = 240;
                            continue _fun114714
                        }
                    case 227:
                        var5 = var4.ageLower;
                        var4 = arg1;
                        var1 = var5 >= var4;
                    case 240:
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    case 248:
                        var1 = true;
                        return var1;
                    case 253:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function arg0, arg1() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.getIsConsideredOlderThaniOS = var3;
    var2.getIsConsideredOlderThanAndroid = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 14705]);