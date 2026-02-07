// modules/interaction_components/native/components/GuildSelectComponentActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var10 = 4;
    var3 = var5[var10];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var3 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var6.guildIdentity = var3;
    var9 = {};
    var3 = 16;
    var9.marginRight = var3;
    var6.iconContainer = var9;
    var9 = {};
    var9.marginRight = var10;
    var6.avatar = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot10 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/interaction_components/native/components/GuildSelectComponentActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun81678: for (var _fun81678_ip = 0;;) switch (_fun81678_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.selectedGuild;
                var2 = var0.onSelectGuild;
                var _closure2_slot0 = var2;
                var0 = var0.user;
                var _closure2_slot1 = var0;
                var3 = undefined;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var2 = _closure1_slot10;
                var10 = var2.bind(var3)();
                var _closure2_slot2 = var10;
                var11 = _closure1_slot4;
                var5 = var11.useState;
                var2 = '';
                var2 = var5.bind(var11)(var2);
                var8 = _closure1_slot3;
                var7 = 2;
                var5 = var8.bind(var3)(var2, var7);
                var2 = 0;
                var12 = var5[var2];
                var _closure2_slot3 = var12;
                var6 = 1;
                var5 = var5[var6];
                var9 = {};
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var13 = 7;
                var13 = var15[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.SelectOptionType;
                var13 = var13.GUILD;
                var9.type = var13;
                var13 = var1.id;
                var9.value = var13;
                var13 = var1.name;
                var9.label = var13;
                var9.guild = var1;
                var1 = var11.useState;
                var1 = var1.bind(var11)(var9);
                var1 = var8.bind(var3)(var1, var7);
                var2 = var1[var2];
                var _closure2_slot4 = var2;
                var1 = var1[var6];
                var _closure2_slot5 = var1;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun81678_ip = 207;
                    continue _fun81678
                }
            case 201:
                var7 = new Array(0);
                _fun81678_ip = 218;
                continue _fun81678;
            case 207:
                var1 = new Array(1);
                var1[0] = var2;
                var7 = var1;
            case 218:
                var9 = {
                    'maxValues': 1,
                    'minValues': 1
                };
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 8;
                var2 = var11[var1];
                var2 = var8.bind(var3)(var2);
                var6 = var2.intl;
                var2 = var6.string;
                var1 = var11[var1];
                var1 = var8.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1["ZImm/x"];
                var1 = var2.bind(var6)(var1);
                var9.placeholder = var1;
                var8 = _closure1_slot4;
                var6 = var8.useCallback;
                var2 = function(arg0) { // Environment: var4
                    var2 = function arg0() {
                        _fun81680: for (var _fun81680_ip = 0;;) switch (_fun81680_ip) {
                            case 0:
                                var4 = arg0;
                                var1 = function arg0() {
                                    var1 = arg0;
                                    var0 = {};
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var2 = 7;
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
                                var2 = var4.length;
                                var1 = 0;
                                if (!(var1 !== var2)) {
                                    _fun81680_ip = 89;
                                    continue _fun81680
                                }
                            case 27:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 15;
                                var2 = var2[var1];
                                var1 = undefined;
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.queryGuilds;
                                var1 = {};
                                var1.query = var4;
                                var3 = var2.bind(var3)(var1);
                                var2 = var3.map;
                                var1 = function(arg0) { // Environment: var0
                                    var0 = arg0;
                                    var2 = var0.record;
                                    var1 = _closure4_slot0;
                                    var0 = undefined;
                                    var0 = var1.bind(var0)(var2);
                                    return var0;
                                };
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            case 89:
                                var2 = _closure1_slot7;
                                var1 = var2.getFlattenedGuildIds;
                                var3 = var1.bind(var2)();
                                var2 = var3.reduce;
                                var1 = global;
                                var1 = var1.Array;
                                var4 = var1.prototype;
                                var4 = Object.create(var4, {
                                    constructor: {
                                        value: var1
                                    }
                                });
                                var7 = var4;
                                var1 = new var7[var1](var6);
                                var1 = var1 instanceof Object ? var1 : var4;
                                var0 = function(arg0, arg1) { // Environment: var0
                                    _fun81682: for (var _fun81682_ip = 0;;) switch (_fun81682_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var3 = _closure1_slot6;
                                            var2 = var3.getGuild;
                                            var1 = arg1;
                                            var4 = var2.bind(var3)(var1);
                                            var1 = null;
                                            if (!(var1 != var4)) {
                                                _fun81682_ip = 53;
                                                continue _fun81682
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
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                        }
                    };
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var1 = new Array(0);
                var1 = var6.bind(var8)(var2, var1);
                _closure2_slot6 = var1;
                var6 = var8.useMemo;
                var2 = new Array(2);
                var2[0] = var12;
                var2[1] = var1;
                var1 = function() { // Environment: var4
                    var2 = _closure2_slot6;
                    var1 = _closure2_slot3;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var8 = var6.bind(var8)(var1, var2);
                var6 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.hideActionSheet;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                _closure2_slot7 = var6;
                var2 = _closure1_slot8;
                var1 = _closure1_slot1;
                var0 = 10;
                var0 = var11[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var11 = function arg0, arg1() {
                    var3 = arg1;
                    var4 = _closure2_slot0;
                    var2 = var3.guild;
                    var0 = undefined;
                    var2 = var4.bind(var0)(var2);
                    var2 = _closure2_slot5;
                    var2 = var2.bind(var0)(var3);
                    var1 = _closure2_slot7;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var0.onPressOptionItem = var11;
                var11 = function() {
                    var2 = _closure2_slot5;
                    var0 = undefined;
                    var1 = null;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.onRemoveOptionItem = var11;
                var11 = function arg0() {
                    var3 = _closure1_slot8;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 11;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var4 = arg0;
                    var4 = var4.guild;
                    var0.guild = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var0.renderIcon = var11;
                var11 = function arg0() {
                    var3 = _closure1_slot8;
                    var1 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 11;
                    var0 = var6[var4];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var5 = _closure1_slot0;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var4 = var4.GuildIconSizes;
                    var4 = var4.XSMALL;
                    var0.size = var4;
                    var4 = arg0;
                    var4 = var4.guild;
                    var0.guild = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var0.renderHeaderIcon = var11;
                var10 = var10.iconContainer;
                var0.iconContainerStyle = var10;
                var10 = function arg0() {
                    _fun81690: for (var _fun81690_ip = 0;;) switch (_fun81690_ip) {
                        case 0:
                            var11 = arg0;
                            var6 = _closure2_slot1;
                            var1 = var6.hasAvatarForGuild;
                            var0 = var11.guild;
                            var0 = var0.id;
                            var4 = var1.bind(var6)(var0);
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 12;
                            var0 = var2[var0];
                            var3 = undefined;
                            var2 = var1.bind(var3)(var0);
                            var1 = var2.getNickname;
                            var0 = var11.guild;
                            var0 = var0.id;
                            var8 = var1.bind(var2)(var0, var3, var6);
                            if (var4) {
                                _fun81690_ip = 90;
                                continue _fun81690
                            }
                        case 82:
                            var0 = null;
                            if (!(var0 == var8)) {
                                _fun81690_ip = 90;
                                continue _fun81690
                            }
                        case 88:
                            return var3;
                        case 90:
                            var2 = _closure1_slot9;
                            var1 = _closure1_slot5;
                            var0 = {};
                            var6 = _closure2_slot2;
                            var6 = var6.guildIdentity;
                            var0.style = var6;
                            var6 = var4;
                            if (!var6) {
                                _fun81690_ip = 224;
                                continue _fun81690
                            }
                        case 120:
                            var10 = _closure1_slot8;
                            var7 = _closure1_slot1;
                            var14 = _closure1_slot2;
                            var12 = 13;
                            var4 = var14[var12];
                            var7 = var7.bind(var3)(var4);
                            var4 = {};
                            var13 = _closure1_slot0;
                            var12 = var14[var12];
                            var12 = var13.bind(var3)(var12);
                            var12 = var12.AvatarSizes;
                            var12 = var12.SIZE_16;
                            var4.size = var12;
                            var12 = _closure2_slot2;
                            var12 = var12.avatar;
                            var4.style = var12;
                            var12 = _closure2_slot1;
                            var4.user = var12;
                            var11 = var11.guild;
                            var11 = var11.id;
                            var4.guildId = var11;
                            var11 = true;
                            var4.animate = var11;
                            var6 = var10.bind(var3)(var7, var4);
                        case 224:
                            var4 = new Array(2);
                            var4[0] = var6;
                            var7 = _closure1_slot8;
                            var6 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var5 = 14;
                            var5 = var10[var5];
                            var5 = var6.bind(var3)(var5);
                            var6 = var5.Text;
                            var5 = {
                                'variant': 'text-sm/medium',
                                'color': 'text-default'
                            };
                            var10 = null;
                            if (!(var10 == var8)) {
                                _fun81690_ip = 290;
                                continue _fun81690
                            }
                        case 281:
                            var9 = _closure2_slot1;
                            var8 = var9.username;
                        case 290:
                            var5.children = var8;
                            var5 = var7.bind(var3)(var6, var5);
                            var4[1] = var5;
                            var0.children = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var0.renderDescription = var10;
                var0.selectionActionComponent = var9;
                var0.options = var8;
                var8 = var7.length;
                var0.selectedCount = var8;
                var0.selectedOptions = var7;
                var7 = function arg0() {
                    _fun81691: for (var _fun81691_ip = 0;;) switch (_fun81691_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.value;
                            var3 = _closure2_slot4;
                            var0 = null;
                            var3 = var0 == var3;
                            var0 = undefined;
                            if (var3) {
                                _fun81691_ip = 35;
                                continue _fun81691
                            }
                        case 26:
                            var2 = _closure2_slot4;
                            var0 = var2.value;
                        case 35:
                            var0 = var1 === var0;
                            return var0;
                    }
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1410, 4376, 33, 1297, 3977, 1234, 3279, 10163, 7464, 3960, 5504, 3942, 5642, 2]);