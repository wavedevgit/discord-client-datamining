// modules/oauth2/native/GuildSelector.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var4 = metroImportAll;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var4;
    var _closure1_slot3 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.View;
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.Permissions;
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var8 = var1.jsx;
    var _closure1_slot7 = var8;
    var1 = var1.jsxs;
    var _closure1_slot8 = var1;
    var1 = 4;
    var1 = var6[var1];
    var7 = var5.bind(var0)(var1);
    var4 = var7.createStyles;
    var1 = {};
    var9 = {
        'display': 'flex',
        'flexDirection': 'column',
        'gap': 8
    };
    var1.selectorGroup = var9;
    var9 = {};
    var10 = 5;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var9.borderRadius = var12;
    var1.select = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_SUBTLE;
    var9.color = var12;
    var12 = '500';
    var9.fontWeight = var12;
    var1.label = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.RED_400;
    var9.color = var10;
    var1.error = var9;
    var1 = var4.bind(var7)(var1);
    var _closure1_slot9 = var1;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.FormRow;
    var7 = var4.Arrow;
    var4 = {};
    var4 = var8.bind(var0)(var7, var4);
    var _closure1_slot10 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/oauth2/native/GuildSelector.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun48558: for (var _fun48558_ip = 0;;) switch (_fun48558_ip) {
            case 0:
                var3 = arg0;
                var16 = var3.error;
                var1 = var3.selectedGuildId;
                var _closure2_slot0 = var1;
                var8 = var3.onGuildChange;
                var _closure2_slot1 = var8;
                var2 = var3.guilds;
                var _closure2_slot2 = var2;
                var11 = var3.disabled;
                var4 = _closure1_slot9;
                var3 = undefined;
                var10 = var4.bind(var3)();
                var7 = _closure1_slot4;
                var6 = var7.useCallback;
                var4 = new Array(3);
                var4[0] = var2;
                var4[1] = var8;
                var4[2] = var1;
                var1 = function() { // Environment: var0
                    _fun48559: for (var _fun48559_ip = 0;;) switch (_fun48559_ip) {
                        case 0:
                            var4 = _closure1_slot1;
                            var10 = _closure1_slot3;
                            var0 = 7;
                            var3 = var10[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.openLazy;
                            var9 = _closure1_slot0;
                            var2 = 9;
                            var2 = var10[var2];
                            var6 = var9.bind(var0)(var2);
                            var2 = 8;
                            var3 = var10[var2];
                            var2 = var10.paths;
                            var3 = var6.bind(var0)(var3, var2);
                            var2 = {};
                            var6 = 10;
                            var7 = var10[var6];
                            var7 = var9.bind(var0)(var7);
                            var8 = var7.intl;
                            var7 = var8.string;
                            var6 = var10[var6];
                            var6 = var9.bind(var0)(var6);
                            var6 = var6.t;
                            var6 = var6.oM4E1A;
                            var6 = var7.bind(var8)(var6);
                            var2.title = var6;
                            var9 = _closure2_slot2;
                            var8 = var9.filter;
                            var7 = function(arg0) { // Environment: var1
                                var3 = _closure1_slot2;
                                var2 = _closure1_slot3;
                                var1 = 11;
                                var2 = var2[var1];
                                var1 = undefined;
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.has;
                                var1 = arg0;
                                var1 = var1.permissions;
                                var0 = _closure1_slot6;
                                var0 = var0.MANAGE_GUILD;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var9 = var8.bind(var9)(var7);
                            var8 = var9.map;
                            var7 = function(arg0) { // Environment: var1
                                var1 = arg0;
                                var0 = {};
                                var2 = var1.name;
                                var0.label = var2;
                                var1 = var1.id;
                                var0.value = var1;
                                return var0;
                            };
                            var7 = var8.bind(var9)(var7);
                            var2.items = var7;
                            var1 = function arg0() {
                                var2 = _closure2_slot1;
                                var0 = undefined;
                                var1 = arg0;
                                var1 = var2.bind(var0)(var1);
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot3;
                                var1 = 7;
                                var1 = var3[var1];
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.hideActionSheet;
                                var1 = 'GuildSelector';
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var2.onItemSelect = var1;
                            var7 = _closure2_slot0;
                            var1 = null;
                            var7 = var1 != var7;
                            var1 = undefined;
                            if (!var7) {
                                _fun48559_ip = 190;
                                continue _fun48559
                            }
                        case 186:
                            var1 = _closure2_slot0;
                        case 190:
                            var2.selectedItem = var1;
                            var1 = 'GuildSelector';
                            var1 = var4.bind(var5)(var3, var1, var2);
                            return var0;
                    }
                };
                var9 = var6.bind(var7)(var1, var4);
                var1 = var2.find;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var15 = var1.bind(var2)(var0);
                var2 = _closure1_slot8;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var10.selectorGroup;
                var0.style = var4;
                var7 = _closure1_slot7;
                var17 = _closure1_slot0;
                var8 = _closure1_slot3;
                var4 = 12;
                var4 = var8[var4];
                var4 = var17.bind(var3)(var4);
                var6 = var4.Text;
                var4 = {
                    'variant': 'eyebrow',
                    'color': 'text-default'
                };
                var12 = 10;
                var13 = var8[var12];
                var13 = var17.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var8 = var8[var12];
                var8 = var17.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["1DXFFd"];
                var8 = var13.bind(var14)(var8);
                var4.children = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(4);
                var4[0] = var6;
                var14 = null;
                var7 = var14 != var16;
                var6 = null;
                if (!var7) {
                    _fun48558_ip = 311;
                    continue _fun48558
                }
            case 250:
                var7 = '';
                var6 = null;
                if (!(var7 !== var16)) {
                    _fun48558_ip = 311;
                    continue _fun48558
                }
            case 260:
                var13 = _closure1_slot7;
                var8 = _closure1_slot0;
                var17 = _closure1_slot3;
                var7 = 13;
                var7 = var17[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.LegacyText;
                var7 = {};
                var17 = var10.error;
                var7.style = var17;
                var7.children = var16;
                var6 = var13.bind(var3)(var8, var7);
            case 311:
                var4[1] = var6;
                var8 = _closure1_slot7;
                var7 = _closure1_slot0;
                var13 = _closure1_slot3;
                var6 = 6;
                var6 = var13[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.FormRow;
                var6 = {};
                var16 = var14 == var15;
                var13 = undefined;
                if (var16) {
                    _fun48558_ip = 361;
                    continue _fun48558
                }
            case 356:
                var13 = var15.name;
            case 361:
                if (!(var14 == var13)) {
                    _fun48558_ip = 417;
                    continue _fun48558
                }
            case 365:
                var17 = _closure1_slot0;
                var14 = _closure1_slot3;
                var15 = var14[var12];
                var15 = var17.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var14[var12];
                var14 = var17.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.oM4E1A;
                var13 = var15.bind(var16)(var14);
            case 417:
                var6.label = var13;
                var6.disabled = var11;
                var11 = _closure1_slot10;
                var6.trailing = var11;
                var11 = var10.select;
                var6.DEPRECATED_style = var11;
                var6.onPress = var9;
                var6 = var8.bind(var3)(var7, var6);
                var4[2] = var6;
                var7 = _closure1_slot7;
                var9 = _closure1_slot0;
                var8 = _closure1_slot3;
                var5 = 13;
                var5 = var8[var5];
                var5 = var9.bind(var3)(var5);
                var6 = var5.LegacyText;
                var5 = {};
                var10 = var10.label;
                var5.style = var10;
                var10 = var8[var12];
                var10 = var9.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.format;
                var8 = var8[var12];
                var8 = var9.bind(var3)(var8);
                var8 = var8.t;
                var9 = var8.t9Jm9o;
                var8 = {};
                var8 = var10.bind(var11)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.useStyles = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 5441, 3279, 5496, 1307, 1234, 484, 3938, 4852, 2]);