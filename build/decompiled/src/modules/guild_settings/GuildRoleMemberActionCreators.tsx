// modules/guild_settings/GuildRoleMemberActionCreators.tsx
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
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun77571: for (var _fun77571_ip = 0;;) switch (_fun77571_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun77571_ip = 254;
                            continue _fun77571
                        }
                    case 10:
                        var4 = arg0;
                    case 13: // try_start_0
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var7 = 3;
                        var1 = var6[var7];
                        var5 = undefined;
                        var8 = var3.bind(var5)(var1);
                        var3 = var8.dispatch;
                        var1 = {};
                        var9 = 'GUILD_ROLE_MEMBER_COUNT_FETCH_START';
                        var1.type = var9;
                        var10 = var4;
                        var1.guildId = var10;
                        var1 = var3.bind(var8)(var1);
                        var3 = _closure1_slot0;
                        var1 = 4;
                        var1 = var6[var1];
                        var1 = var3.bind(var5)(var1);
                        var6 = var1.HTTP;
                        var3 = var6.get;
                        var1 = {};
                        var9 = _closure1_slot5;
                        var8 = var9.GUILD_ROLE_MEMBER_COUNTS;
                        var8 = var8.bind(var9)(var10);
                        var1.url = var8;
                        var8 = true;
                        var1.rejectWithError = var8;
                        var1 = var3.bind(var6)(var1);
                        SaveGenerator(address = 129);
                    case 127:
                        return var1;
                    case 129:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun77571_ip = 193;
                            continue _fun77571
                        }
                    case 135:
                        var6 = var1.body;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var7];
                        var5 = var3.bind(var5)(var2);
                        var3 = var5.dispatch;
                        var2 = {};
                        var7 = 'GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS';
                        var2.type = var7;
                        var7 = var4;
                        var2.guildId = var7;
                        var2.roleMemberCount = var6;
                        var2 = var3.bind(var5)(var2);
                    case 191: // try_end0
                        _fun77571_ip = 249;
                        continue _fun77571;
                    case 193:
                        return var1;
                    case 196: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 3;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.dispatch;
                        var1 = {};
                        var5 = 'GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE';
                        var1.type = var5;
                        var1.guildId = var4;
                        var1 = var2.bind(var3)(var1);
                    case 249:
                        var1 = undefined;
                        return var1;
                    case 254:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot7 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun77574: for (var _fun77574_ip = 0;;) switch (_fun77574_ip) {
                    case 0:
                        StartGenerator();
                        var3 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun77574_ip = 65;
                            continue _fun77574
                        }
                    case 10:
                        var2 = _closure1_slot4;
                        var1 = var2.shouldFetch;
                        var1 = var1.bind(var2)(var3);
                        if (!var1) {
                            _fun77574_ip = 57;
                            continue _fun77574
                        }
                    case 31:
                        var2 = function() {
                            var0 = undefined;
                            var3 = _closure1_slot7;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
                        SaveGenerator(address = 51);
                    case 49:
                        return var1;
                    case 51:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun77574_ip = 62;
                            continue _fun77574
                        }
                    case 57:
                        var2 = undefined;
                        return var2;
                    case 62:
                        return var1;
                    case 65:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot8 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot8 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var3 = {};
    var6 = 10000;
    var3.maxAge = var6;
    var6 = var7.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var7
        }
    });
    var12 = var6;
    var11 = var3;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/GuildRoleMemberActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchMemberCounts = var3;
    var1 = function arg0, arg1() {
        _fun77577: for (var _fun77577_ip = 0;;) switch (_fun77577_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var0 = arguments[2];
                var2 = undefined;
                if (!(var0 === var2)) {
                    _fun77577_ip = 17;
                    continue _fun77577
                }
            case 15:
                var0 = true;
            case 17:
                var1 = global;
                var3 = var1.HermesInternal;
                var7 = var3.concat;
                var6 = '';
                var3 = '-';
                var8 = var7.bind(var6)(var5, var3, var4);
                if (!var0) {
                    _fun77577_ip = 71;
                    continue _fun77577
                }
            case 48:
                var3 = _closure1_slot6;
                var0 = var3.get;
                var0 = var0.bind(var3)(var8);
                var3 = null;
                if (!(var3 == var0)) {
                    _fun77577_ip = 108;
                    continue _fun77577
                }
            case 71:
                var7 = _closure1_slot6;
                var6 = var7.set;
                var0 = true;
                var0 = var6.bind(var7)(var8, var0);
                var0 = function arg0, arg1() {
                    var7 = arg0;
                    var _closure3_slot0 = var7;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.HTTP;
                    var2 = var3.get;
                    var1 = {};
                    var6 = _closure1_slot5;
                    var5 = var6.GUILD_ROLE_MEMBER_IDS;
                    var4 = arg1;
                    var4 = var5.bind(var6)(var7, var4);
                    var1.url = var4;
                    var4 = false;
                    var1.rejectWithError = var4;
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.then;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 6;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.requestMembersById;
                        var3 = _closure3_slot0;
                        var2 = var0.body;
                        var1 = false;
                        var1 = var4.bind(var5)(var3, var2, var1);
                        var0 = var0.body;
                        var0 = var0.length;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var0.bind(var2)(var5, var4);
                _fun77577_ip = 125;
                continue _fun77577;
            case 108:
                var2 = var1.Promise;
                var1 = var2.resolve;
                var0 = var1.bind(var2)(var3);
            case 125:
                return var0;
        }
    };
    var2.requestMembersForRole = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 9803, 660, 806, 507, 1386, 4644, 2]);