// modules/directory_channels/native/GuildDirectoryUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun71653: for (var _fun71653_ip = 0;;) switch (_fun71653_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun71653_ip = 187;
                            continue _fun71653
                        }
                    case 15:
                        var11 = var1.directoryChannelId;
                        var2 = var1.directoryGuildName;
                        var _closure4_slot0 = var2;
                        var2 = var1.guild;
                        var _closure4_slot1 = var2;
                        var10 = var1.description;
                        var9 = var1.category;
                        var5 = var1.onClose;
                        var3 = undefined;
                        SaveGenerator(address = 63);
                    case 61:
                        return var3;
                    case 63:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun71653_ip = 184;
                            continue _fun71653
                        }
                    case 69:
                        var8 = _closure1_slot2;
                        var12 = _closure1_slot3;
                        var6 = 3;
                        var6 = var12[var6];
                        var8 = var8.bind(var3)(var6);
                        var6 = var8.addDirectoryGuildEntry;
                        var15 = var2.id;
                        var17 = var8;
                        var16 = var11;
                        var14 = var10;
                        var13 = var9;
                        var2 = var17[var6](var16, var15, var14, var13, var12);
                        SaveGenerator(address = 123);
                    case 121:
                        return var2;
                    case 123:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                        if (var6) {
                            _fun71653_ip = 181;
                            continue _fun71653
                        }
                    case 129:
                        var5 = var5.bind(var3)();
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var4 = 4;
                        var4 = var6[var4];
                        var6 = var5.bind(var3)(var4);
                        var5 = var6.openLazy;
                        var4 = {};
                        var7 = function() {
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot3;
                            var1 = 6;
                            var1 = var0[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = 5;
                            var1 = var0[var1];
                            var0 = var0.paths;
                            var2 = var2.bind(var3)(var1, var0);
                            var1 = var2.then;
                            var0 = function(arg0) { // Environment: var0
                                var1 = arg0;
                                var1 = var1.default;
                                var _closure6_slot0 = var1;
                                var0 = function(arg0) { // Environment: var0
                                    var3 = _closure1_slot5;
                                    var2 = _closure6_slot0;
                                    var1 = {};
                                    var6 = arg0;
                                    var7 = var1;
                                    var0 = copyDataProperties(var7, var6);
                                    var5 = _closure4_slot1;
                                    var4 = 'guild';
                                    var1[var4] = var5;
                                    var4 = _closure4_slot0;
                                    var0 = 'directoryGuildName';
                                    var1[var0] = var4;
                                    var0 = undefined;
                                    var0 = var3.bind(var0)(var2, var1);
                                    return var0;
                                };
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var4.importer = var7;
                        var4 = var5.bind(var6)(var4);
                        return var3;
                    case 181:
                        return var2;
                    case 184:
                        return var1;
                    case 187:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
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
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/directory_channels/native/GuildDirectoryUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var2.onAddDirectoryGuildEntry = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 33, 8941, 3936, 8951, 1307, 2]);