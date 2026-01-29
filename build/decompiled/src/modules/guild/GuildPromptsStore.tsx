// modules/guild/GuildPromptsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun91492: for (var _fun91492_ip = 0;;) switch (_fun91492_ip) {
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
            case 72: // try_end0
                _fun91492_ip = 76;
                continue _fun91492;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot6 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = {};
    var _closure1_slot5 = var1;
    var1 = 5;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: GuildPromptsStore, environment: var5
            _fun91496: for (var _fun91496_ip = 0;;) switch (_fun91496_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot6;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun91496_ip = 69;
                        continue _fun91496
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun91496_ip = 105;
                    continue _fun91496;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun91497: for (var _fun91497_ip = 0;;) switch (_fun91497_ip) {
                case 0:
                    var7 = arg0;
                    var5 = var7;
                    var0 = global;
                    for (var2 in var5)
                        case 19: {
                            case 28: var10 = var2;
                            var13 = var7[var10];
                            var9 = _closure1_slot5;
                            var8 = var0.Set;
                            var11 = var8.prototype;
                            var11 = Object.create(var11, {
                                constructor: {
                                    value: var8
                                }
                            });
                            var14 = var11;
                            var8 = new var14[var8](var13, var12);
                            var8 = var8 instanceof Object ? var8 : var11;
                            var9[var10] = var8;
                            _fun91497_ip = 19;
                            continue _fun91497;
                        }
                case 71:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'hasViewedPrompt';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun91498: for (var _fun91498_ip = 0;;) switch (_fun91498_ip) {
                case 0:
                    var1 = _closure1_slot5;
                    var0 = arg1;
                    var3 = var1[var0];
                    var0 = null;
                    var0 = var0 != var3;
                    if (!var0) {
                        _fun91498_ip = 42;
                        continue _fun91498
                    }
                case 23:
                    var2 = var3.has;
                    var1 = arg0;
                    var1 = var2.bind(var3)(var1);
                    var1 = !var1;
                    var0 = !var1;
                case 42:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot5;
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'GuildPromptsStore';
    var6.displayName = var1;
    var6.persistKey = var1;
    var1 = 6;
    var1 = var4[var1];
    var10 = var5.bind(var0)(var1);
    var1 = {};
    var7 = function(arg0) { // Original name: handleGuildPromptViewed, environment: var3
        _fun91500: for (var _fun91500_ip = 0;;) switch (_fun91500_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.prompt;
                var2 = var0.guildId;
                var0 = _closure1_slot5;
                var5 = var0[var2];
                var0 = null;
                if (!(var0 != var5)) {
                    _fun91500_ip = 61;
                    continue _fun91500
                }
            case 31:
                var0 = var5.has;
                var0 = var0.bind(var5)(var3);
                var0 = !var0;
                if (!var0) {
                    _fun91500_ip = 59;
                    continue _fun91500
                }
            case 47:
                var4 = var5.add;
                var4 = var4.bind(var5)(var3);
                var0 = true;
            case 59:
                _fun91500_ip = 113;
                continue _fun91500;
            case 61:
                var1 = _closure1_slot5;
                var4 = global;
                var4 = var4.Set;
                var5 = var4.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var4
                    }
                });
                var7 = var5;
                var4 = new var7[var4](var6);
                var4 = var4 instanceof Object ? var4 : var5;
                var1[var2] = var4;
                var2 = var1[var2];
                var1 = var2.add;
                var1 = var1.bind(var2)(var3);
                var0 = true;
            case 113:
                return var0;
        }
    };
    var1.GUILD_PROMPT_VIEWED = var7;
    var3 = function(arg0) { // Original name: handleGuildDelete, environment: var3
        _fun91501: for (var _fun91501_ip = 0;;) switch (_fun91501_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guild;
                var3 = _closure1_slot5;
                var0 = var1.id;
                var3 = var3[var0];
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun91501_ip = 42;
                    continue _fun91501
                }
            case 33:
                var3 = var1.unavailable;
                var0 = !var3;
            case 42:
                if (!var0) {
                    _fun91501_ip = 60;
                    continue _fun91501
                }
            case 45:
                var2 = _closure1_slot5;
                var1 = var1.id;
                var1 = delete var2[var1];
                var0 = true;
            case 60:
                return var0;
        }
    };
    var1.GUILD_DELETE = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var11 = var3;
    var9 = var1;
    var1 = new var11[var6](var10, var9, var8);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 7;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild/GuildPromptsStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 566, 806, 2]);