// records/AppliedGuildBoostRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun55605: for (var _fun55605_ip = 0;;) switch (_fun55605_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun55605_ip = 74;
                continue _fun55605;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot5 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var4 = function(arg0) { // Original name: AppliedGuildBoostRecord, environment: var1
            _fun55609: for (var _fun55609_ip = 0;;) switch (_fun55609_ip) {
                case 0:
                    var2 = arg0;
                    var4 = this;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var1);
                    var0 = _closure1_slot3;
                    var9 = var0.bind(var3)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot5;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun55609_ip = 65;
                        continue _fun55609
                    }
                case 52:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var4, var3);
                    _fun55609_ip = 103;
                    continue _fun55609;
                case 65:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var3)(var4);
                    var6 = var5.constructor;
                    var5 = new Array(0);
                    var0 = var7.bind(var8)(var9, var5, var6);
                case 103:
                    var0 = var1.bind(var3)(var4, var0);
                    var1 = var2.id;
                    var0.id = var1;
                    var1 = var2.guildId;
                    var0.guildId = var1;
                    var1 = var2.userId;
                    var0.userId = var1;
                    var1 = var2.user;
                    var0.user = var1;
                    var1 = var2.ended;
                    var0.ended = var1;
                    var3 = var2.endsAt;
                    var1 = null;
                    var3 = var1 != var3;
                    if (!var3) {
                        _fun55609_ip = 186;
                        continue _fun55609
                    }
                case 180:
                    var1 = var2.endsAt;
                case 186:
                    var0.endsAt = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var0 = {};
        var5 = 'createFromServer';
        var0.key = var5;
        var1 = function(arg0) { // Original name: value, environment: var1
            _fun55610: for (var _fun55610_ip = 0;;) switch (_fun55610_ip) {
                case 0:
                    var3 = arg0;
                    var2 = _closure2_slot0;
                    var0 = {};
                    var1 = var3.id;
                    var0.id = var1;
                    var1 = var3.guild_id;
                    var0.guildId = var1;
                    var1 = var3.user;
                    var6 = null;
                    if (!(var6 == var1)) {
                        _fun55610_ip = 49;
                        continue _fun55610
                    }
                case 41:
                    var1 = var3.user_id;
                    _fun55610_ip = 59;
                    continue _fun55610;
                case 49:
                    var4 = var3.user;
                    var1 = var4.id;
                case 59:
                    var0.userId = var1;
                    var1 = var3.user;
                    var0.user = var1;
                    var1 = var3.ended;
                    var0.ended = var1;
                    var1 = var3.ends_at;
                    var4 = var6 != var1;
                    var1 = null;
                    if (!var4) {
                        _fun55610_ip = 148;
                        continue _fun55610
                    }
                case 98:
                    var5 = var3.ends_at;
                    var4 = '';
                    var1 = null;
                    if (!(var4 !== var5)) {
                        _fun55610_ip = 148;
                        continue _fun55610
                    }
                case 114:
                    var4 = global;
                    var5 = var4.Date;
                    var7 = var3.ends_at;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var5
                        }
                    });
                    var8 = var4;
                    var3 = new var8[var5](var7, var6);
                    var1 = var3 instanceof Object ? var3 : var4;
                case 148:
                    var0.endsAt = var1;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var8 = var1;
                    var7 = var0;
                    var0 = new var8[var2](var7, var6);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = null;
        var0 = var2.bind(var3)(var4, var0, var1);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 6;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'records/AppliedGuildBoostRecord.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1621, 2]);