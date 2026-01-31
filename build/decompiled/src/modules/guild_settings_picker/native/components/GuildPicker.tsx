// modules/guild_settings_picker/native/components/GuildPicker.tsx
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
    var3 = 'modules/guild_settings_picker/native/components/GuildPicker.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun96344: for (var _fun96344_ip = 0;;) switch (_fun96344_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.guildId;
                var _closure2_slot0 = var7;
                var1 = var0.onChange;
                var _closure2_slot1 = var1;
                var8 = var0.isGuildIncluded;
                var1 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 2;
                var0 = var6[var0];
                var3 = undefined;
                var2 = var1.bind(var3)(var0);
                var0 = {};
                var0.isGuildIncluded = var8;
                var0.selectedGuildId = var7;
                var0 = var2.bind(var3)(var0);
                var2 = var0.options;
                var _closure2_slot2 = var2;
                var7 = var0.selectedGuild;
                var2 = _closure1_slot3;
                var0 = 3;
                var0 = var6[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var6 = null;
                var8 = var6 == var7;
                var6 = undefined;
                if (var8) {
                    _fun96344_ip = 121;
                    continue _fun96344
                }
            case 116:
                var6 = var7.name;
            case 121:
                var0.label = var6;
                var5 = function() {
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var0 = 4;
                    var2 = var9[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var2);
                    var4 = var5.openLazy;
                    var8 = _closure1_slot0;
                    var1 = 6;
                    var1 = var9[var1];
                    var3 = var8.bind(var0)(var1);
                    var1 = 5;
                    var2 = var9[var1];
                    var1 = var9.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var2 = {};
                    var1 = 7;
                    var6 = var9[var1];
                    var6 = var8.bind(var0)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var1 = var9[var1];
                    var1 = var8.bind(var0)(var1);
                    var1 = var1.t;
                    var1 = var1.etZ9tX;
                    var1 = var6.bind(var7)(var1);
                    var2.title = var1;
                    var6 = _closure2_slot2;
                    var2.items = var6;
                    var6 = function arg0() {
                        _fun96346: for (var _fun96346_ip = 0;;) switch (_fun96346_ip) {
                            case 0:
                                var2 = arg0;
                                var3 = null;
                                if (!(var3 != var2)) {
                                    _fun96346_ip = 31;
                                    continue _fun96346
                                }
                            case 9:
                                var1 = _closure2_slot1;
                                if (!(var3 != var1)) {
                                    _fun96346_ip = 31;
                                    continue _fun96346
                                }
                            case 20:
                                var1 = _closure2_slot1;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var2);
                            case 31:
                                var0 = global;
                                var2 = var0.setImmediate;
                                var0 = undefined;
                                var1 = function() { // Environment: var1
                                    var2 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var0 = 4;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.hideActionSheet;
                                    var1 = 'GuildPicker';
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                                };
                                var1 = var2.bind(var0)(var1);
                                return var0;
                        }
                    };
                    var2.onItemSelect = var6;
                    var1 = _closure2_slot0;
                    var2.selectedItem = var1;
                    var1 = 'GuildPicker';
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var0;
                };
                var0.onPress = var5;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 7;
                var5 = var8[var4];
                var5 = var7.bind(var3)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var8[var4];
                var4 = var7.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4.etZ9tX;
                var4 = var5.bind(var6)(var4);
                var0.placeholder = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 12515, 12516, 3237, 5339, 1307, 1234, 2]);