// modules/guild_progress/native/components/GuildProgressItem.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_progress/native/components/GuildProgressItem.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: GuildProgressItem, environment: var1
        _fun91190: for (var _fun91190_ip = 0;;) switch (_fun91190_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guild;
                var _closure2_slot0 = var4;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 2;
                var1 = var12[var1];
                var3 = undefined;
                var2 = var11.bind(var3)(var1);
                var1 = var2.useIOSCompletionStates;
                var1 = var1.bind(var2)(var4);
                var7 = var1.numFinished;
                var _closure2_slot1 = var7;
                var4 = var1.completed;
                var _closure2_slot2 = var4;
                var6 = var1.totalSteps;
                var2 = _closure1_slot3;
                var9 = _closure1_slot1;
                var0 = 3;
                var0 = var12[var0];
                var1 = var9.bind(var3)(var0);
                var0 = {};
                var8 = function() { // Original name: onPress, environment: var5
                    _fun91191: for (var _fun91191_ip = 0;;) switch (_fun91191_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            if (var0) {
                                _fun91191_ip = 55;
                                continue _fun91191
                            }
                        case 10:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 4;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.createProgress;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var0 = var2.bind(var3)(var0);
                        case 55:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 2;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.openActionSheet;
                            var1 = _closure2_slot0;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var0.onPress = var8;
                var8 = 5;
                var8 = var12[var8];
                var8 = var9.bind(var3)(var8);
                var0.source = var8;
                var8 = 6;
                var9 = var12[var8];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["J2+var16"];
                var8 = var9.bind(var10)(var8);
                var0.title = var8;
                var0.isCompleted = var4;
                var4 = 0;
                var8 = var7 > var4;
                var4 = undefined;
                if (!var8) {
                    _fun91190_ip = 210;
                    continue _fun91190
                }
            case 194:
                var6 = var7 < var6;
                var4 = undefined;
                if (!var6) {
                    _fun91190_ip = 210;
                    continue _fun91190
                }
            case 203:
                var4 = function() { // Environment: var5
                    var3 = _closure1_slot3;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 7;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var5 = _closure2_slot1;
                    var4 = 100;
                    var5 = var4 * var5;
                    var4 = 3;
                    var4 = var5 / var4;
                    var0.percent = var4;
                    var4 = 32;
                    var0.size = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
            case 210:
                var0.renderEndComponent = var4;
                var4 = true;
                var0.fullWidth = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 10142, 10147, 10146, 11794, 1234, 10151, 2]);