// modules/user_settings/native/privacy_and_safety/SettingsPrivacyAndSafetyGuildSelectActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.GUILD_SELECT_ALL_SERVERS_OPTION_ID;
    var _closure1_slot7 = var6;
    var6 = var3.setSelectedGuildId;
    var _closure1_slot8 = var6;
    var3 = var3.useUserSafetySettingsSelectedGuildStore;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 7;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_12;
    var8.marginRight = var9;
    var3.iconContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = function() {
        var0 = {};
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 8;
        var2 = var7[var2];
        var5 = undefined;
        var2 = var6.bind(var5)(var2);
        var2 = var2.SelectOptionType;
        var2 = var2.GUILD;
        var0.type = var2;
        var2 = 9;
        var2 = var7[var2];
        var8 = var6.bind(var5)(var2);
        var4 = var8.dangerouslyConstructGuildRecordFromUntypedObject;
        var3 = {};
        var1 = _closure1_slot7;
        var3.id = var1;
        var2 = 10;
        var9 = var7[var2];
        var9 = var6.bind(var5)(var9);
        var11 = var9.intl;
        var10 = var11.string;
        var9 = var7[var2];
        var9 = var6.bind(var5)(var9);
        var9 = var9.t;
        var9 = var9["32u1Dx"];
        var9 = var10.bind(var11)(var9);
        var3.name = var9;
        var3 = var4.bind(var8)(var3);
        var0.guild = var3;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var4 = var3.intl;
        var3 = var4.string;
        var2 = var7[var2];
        var2 = var6.bind(var5)(var2);
        var2 = var2.t;
        var2 = var2["32u1Dx"];
        var2 = var3.bind(var4)(var2);
        var0.label = var2;
        var0.value = var1;
        return var0;
    };
    var _closure1_slot12 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/privacy_and_safety/SettingsPrivacyAndSafetyGuildSelectActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun89318: for (var _fun89318_ip = 0;;) switch (_fun89318_ip) {
            case 0:
                var1 = _closure1_slot11;
                var3 = undefined;
                var11 = var1.bind(var3)();
                var5 = _closure1_slot4;
                var2 = var5.useState;
                var1 = '';
                var5 = var2.bind(var5)(var1);
                var2 = _closure1_slot3;
                var1 = 2;
                var1 = var2.bind(var3)(var5, var1);
                var2 = 0;
                var13 = var1[var2];
                var _closure2_slot1 = var13;
                var7 = 1;
                var5 = var1[var7];
                var1 = _closure1_slot9;
                var1 = var1.bind(var3)();
                var6 = var1.selectedGuildId;
                var _closure2_slot0 = var6;
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 11;
                var1 = var8[var1];
                var9 = var2.bind(var3)(var1);
                var8 = var9.useStateFromStores;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var4
                    var2 = _closure1_slot5;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var8.bind(var9)(var2, var1);
                var2 = _closure1_slot7;
                if (!(var6 !== var2)) {
                    _fun89318_ip = 207;
                    continue _fun89318
                }
            case 139:
                var2 = null;
                if (!(var2 != var1)) {
                    _fun89318_ip = 207;
                    continue _fun89318
                }
            case 145:
                var8 = {};
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 8;
                var2 = var9[var2];
                var2 = var6.bind(var3)(var2);
                var2 = var2.SelectOptionType;
                var2 = var2.GUILD;
                var8.type = var2;
                var8.guild = var1;
                var2 = var1.name;
                var8.label = var2;
                var1 = var1.id;
                var8.value = var1;
                _fun89318_ip = 215;
                continue _fun89318;
            case 207:
                var1 = _closure1_slot12;
                var8 = var1.bind(var3)();
            case 215:
                var _closure2_slot2 = var8;
                var10 = {
                    'maxValues': 1,
                    'minValues': 1
                };
                var9 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 10;
                var2 = var12[var1];
                var2 = var9.bind(var3)(var2);
                var6 = var2.intl;
                var2 = var6.string;
                var1 = var12[var1];
                var1 = var9.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1["ZImm/x"];
                var1 = var2.bind(var6)(var1);
                var10.placeholder = var1;
                var9 = _closure1_slot4;
                var6 = var9.useCallback;
                var2 = function(arg0) { // Environment: var4
                    var2 = function arg0() {
                        _fun89321: for (var _fun89321_ip = 0;;) switch (_fun89321_ip) {
                            case 0:
                                var6 = arg0;
                                var1 = function arg0() {
                                    var1 = arg0;
                                    var0 = {};
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var2 = 8;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var2 = var4.bind(var2)(var3);
                                    var2 = var2.SelectOptionType;
                                    var2 = var2.GUILD;
                                    var0.type = var2;
                                    var2 = var1.id;
                                    var0.value = var2;
                                    var2 = var1.name;
                                    var0.label = var2;
                                    var0.guild = var1;
                                    return var0;
                                };
                                var _closure4_slot0 = var1;
                                var2 = _closure1_slot12;
                                var5 = undefined;
                                var2 = var2.bind(var5)();
                                var3 = new Array(1);
                                var3[0] = var2;
                                var4 = var6.length;
                                var2 = 0;
                                if (!(var2 !== var4)) {
                                    _fun89321_ip = 105;
                                    continue _fun89321
                                }
                            case 48:
                                var4 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var2 = 16;
                                var2 = var7[var2];
                                var5 = var4.bind(var5)(var2);
                                var4 = var5.queryGuilds;
                                var2 = {};
                                var2.query = var6;
                                var5 = var4.bind(var5)(var2);
                                var4 = var5.map;
                                var2 = function(arg0) { // Environment: var0
                                    var0 = arg0;
                                    var2 = var0.record;
                                    var1 = _closure4_slot0;
                                    var0 = undefined;
                                    var0 = var1.bind(var0)(var2);
                                    return var0;
                                };
                                var2 = var4.bind(var5)(var2);
                                return var2;
                            case 105:
                                var2 = _closure1_slot6;
                                var1 = var2.getFlattenedGuildIds;
                                var2 = var1.bind(var2)();
                                var1 = var2.reduce;
                                var0 = function(arg0, arg1) { // Environment: var0
                                    _fun89323: for (var _fun89323_ip = 0;;) switch (_fun89323_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var3 = _closure1_slot5;
                                            var2 = var3.getGuild;
                                            var1 = arg1;
                                            var4 = var2.bind(var3)(var1);
                                            var1 = null;
                                            if (!(var1 != var4)) {
                                                _fun89323_ip = 53;
                                                continue _fun89323
                                            }
                                        case 29:
                                            var2 = var0.push;
                                            var3 = _closure4_slot0;
                                            var1 = undefined;
                                            var1 = var3.bind(var1)(var4);
                                            var1 = var2.bind(var0)(var1);
                                        case 53:
                                            return var0;
                                    }
                                };
                                var0 = var1.bind(var2)(var0, var3);
                                return var0;
                        }
                    };
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var1 = new Array(0);
                var1 = var6.bind(var9)(var2, var1);
                var _closure2_slot3 = var1;
                var6 = var9.useMemo;
                var2 = new Array(2);
                var2[0] = var13;
                var2[1] = var1;
                var1 = function() { // Environment: var4
                    var2 = _closure2_slot3;
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var9 = var6.bind(var9)(var1, var2);
                var6 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.hideActionSheet;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var _closure2_slot4 = var6;
                var2 = _closure1_slot10;
                var1 = _closure1_slot1;
                var0 = 13;
                var0 = var12[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var12 = function arg0, arg1() {
                    var2 = _closure1_slot8;
                    var0 = arg1;
                    var0 = var0.guild;
                    var1 = var0.id;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var1 = _closure2_slot4;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var0.onPressOptionItem = var12;
                var12 = function arg0() {
                    _fun89328: for (var _fun89328_ip = 0;;) switch (_fun89328_ip) {
                        case 0:
                            var6 = arg0;
                            var2 = var6.value;
                            var0 = _closure1_slot7;
                            if (!(var2 !== var0)) {
                                _fun89328_ip = 93;
                                continue _fun89328
                            }
                        case 19:
                            var4 = _closure1_slot10;
                            var2 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var5 = 15;
                            var0 = var7[var5];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var0);
                            var0 = {};
                            var6 = var6.guild;
                            var0.guild = var6;
                            var6 = _closure1_slot0;
                            var5 = var7[var5];
                            var5 = var6.bind(var3)(var5);
                            var5 = var5.GuildIconSizes;
                            var5 = var5.XSMALL;
                            var0.size = var5;
                            var0 = var4.bind(var3)(var2, var0);
                            _fun89328_ip = 141;
                            continue _fun89328;
                        case 93:
                            var4 = _closure1_slot10;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 14;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.GuildSelectDefaultIcon;
                            var1 = {};
                            var5 = 'xs';
                            var1.size = var5;
                            var0 = var4.bind(var3)(var2, var1);
                        case 141:
                            return var0;
                    }
                };
                var0.renderHeaderIcon = var12;
                var12 = function arg0() {
                    _fun89329: for (var _fun89329_ip = 0;;) switch (_fun89329_ip) {
                        case 0:
                            var6 = arg0;
                            var2 = var6.value;
                            var0 = _closure1_slot7;
                            if (!(var2 !== var0)) {
                                _fun89329_ip = 93;
                                continue _fun89329
                            }
                        case 19:
                            var4 = _closure1_slot10;
                            var2 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var5 = 15;
                            var0 = var7[var5];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var0);
                            var0 = {};
                            var6 = var6.guild;
                            var0.guild = var6;
                            var6 = _closure1_slot0;
                            var5 = var7[var5];
                            var5 = var6.bind(var3)(var5);
                            var5 = var5.GuildIconSizes;
                            var5 = var5.SMALL_32;
                            var0.size = var5;
                            var0 = var4.bind(var3)(var2, var0);
                            _fun89329_ip = 133;
                            continue _fun89329;
                        case 93:
                            var4 = _closure1_slot10;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 14;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.GuildSelectDefaultIcon;
                            var1 = {};
                            var0 = var4.bind(var3)(var2, var1);
                        case 133:
                            return var0;
                    }
                };
                var0.renderIcon = var12;
                var11 = var11.iconContainer;
                var0.iconContainerStyle = var11;
                var0.selectionActionComponent = var10;
                var0.options = var9;
                var0.selectedCount = var7;
                var7 = new Array(1);
                var7[0] = var8;
                var0.selectedOptions = var7;
                var7 = function arg0() {
                    var0 = arg0;
                    var1 = var0.value;
                    var0 = _closure2_slot2;
                    var0 = var0.value;
                    var0 = var1 === var0;
                    return var0;
                };
                var0.isSelected = var7;
                var0.submitSelection = var6;
                var0.onQueryChange = var5;
                var4 = function arg0() {
                    var0 = arg0;
                    var0 = var0.label;
                    return var0;
                };
                var0.itemAccessibilityLabel = var4;
                var4 = true;
                var0.expanded = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1410, 4376, 11586, 33, 1297, 671, 3977, 1598, 1234, 566, 3279, 10163, 10264, 7464, 5642, 2]);