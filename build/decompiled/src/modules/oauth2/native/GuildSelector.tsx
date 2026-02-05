// modules/oauth2/native/GuildSelector.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var10 = metroImportDefault;
    var4 = metroImportAll;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var10;
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
    var4 = var1.jsx;
    var _closure1_slot7 = var4;
    var1 = var1.jsxs;
    var _closure1_slot8 = var1;
    var1 = 4;
    var1 = var6[var1];
    var7 = var5.bind(var0)(var1);
    var4 = var7.createStyles;
    var1 = {};
    var8 = {
        'display': 'flex',
        'flexDirection': 'column',
        'gap': 8
    };
    var1.selectorGroup = var8;
    var8 = {};
    var9 = 5;
    var11 = var6[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var11;
    var11 = var6[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.xs;
    var8.borderRadius = var11;
    var1.select = var8;
    var8 = {};
    var11 = var6[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_SUBTLE;
    var8.color = var11;
    var11 = '500';
    var8.fontWeight = var11;
    var1.label = var8;
    var8 = {};
    var9 = var6[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.unsafe_rawColors;
    var9 = var9.RED_400;
    var8.color = var9;
    var1.error = var8;
    var1 = var4.bind(var7)(var1);
    var _closure1_slot9 = var1;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/oauth2/native/GuildSelector.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun48034: for (var _fun48034_ip = 0;;) switch (_fun48034_ip) {
            case 0:
                var3 = arg0;
                var14 = var3.error;
                var1 = var3.selectedGuildId;
                var _closure2_slot0 = var1;
                var9 = var3.onGuildChange;
                var _closure2_slot1 = var9;
                var2 = var3.guilds;
                var _closure2_slot2 = var2;
                var7 = var3.disabled;
                var4 = _closure1_slot9;
                var3 = undefined;
                var10 = var4.bind(var3)();
                var6 = _closure1_slot4;
                var5 = var6.useCallback;
                var4 = new Array(3);
                var4[0] = var2;
                var4[1] = var9;
                var4[2] = var1;
                var1 = function() { // Environment: var0
                    _fun48035: for (var _fun48035_ip = 0;;) switch (_fun48035_ip) {
                        case 0:
                            var4 = _closure1_slot1;
                            var10 = _closure1_slot3;
                            var0 = 6;
                            var3 = var10[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.openLazy;
                            var9 = _closure1_slot0;
                            var2 = 8;
                            var2 = var10[var2];
                            var6 = var9.bind(var0)(var2);
                            var2 = 7;
                            var3 = var10[var2];
                            var2 = var10.paths;
                            var3 = var6.bind(var0)(var3, var2);
                            var2 = {};
                            var6 = 9;
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
                                var1 = 10;
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
                                var1 = 6;
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
                                _fun48035_ip = 190;
                                continue _fun48035
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
                var13 = var5.bind(var6)(var1, var4);
                var1 = var2.find;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var16 = var1.bind(var2)(var0);
                var2 = _closure1_slot8;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var10.selectorGroup;
                var0.style = var4;
                var6 = _closure1_slot7;
                var17 = _closure1_slot0;
                var9 = _closure1_slot3;
                var4 = 11;
                var4 = var9[var4];
                var4 = var17.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {
                    'variant': 'eyebrow',
                    'color': 'text-default'
                };
                var12 = 9;
                var11 = var9[var12];
                var11 = var17.bind(var3)(var11);
                var15 = var11.intl;
                var11 = var15.string;
                var9 = var9[var12];
                var9 = var17.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9["1DXFFd"];
                var9 = var11.bind(var15)(var9);
                var4.children = var9;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(4);
                var4[0] = var5;
                var15 = null;
                var6 = var15 != var14;
                var5 = null;
                if (!var6) {
                    _fun48034_ip = 311;
                    continue _fun48034
                }
            case 250:
                var6 = '';
                var5 = null;
                if (!(var6 !== var14)) {
                    _fun48034_ip = 311;
                    continue _fun48034
                }
            case 260:
                var11 = _closure1_slot7;
                var9 = _closure1_slot0;
                var17 = _closure1_slot3;
                var6 = 12;
                var6 = var17[var6];
                var6 = var9.bind(var3)(var6);
                var9 = var6.LegacyText;
                var6 = {};
                var17 = var10.error;
                var6.style = var17;
                var6.children = var14;
                var5 = var11.bind(var3)(var9, var6);
            case 311:
                var4[1] = var5;
                var11 = _closure1_slot7;
                var6 = _closure1_slot0;
                var5 = _closure1_slot3;
                var14 = 13;
                var5 = var5[var14];
                var5 = var6.bind(var3)(var5);
                var6 = var5.FormRow;
                var5 = {};
                var17 = var15 == var16;
                var9 = undefined;
                if (var17) {
                    _fun48034_ip = 361;
                    continue _fun48034
                }
            case 356:
                var9 = var16.name;
            case 361:
                if (!(var15 == var9)) {
                    _fun48034_ip = 417;
                    continue _fun48034
                }
            case 365:
                var18 = _closure1_slot0;
                var15 = _closure1_slot3;
                var16 = var15[var12];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var15[var12];
                var15 = var18.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.oM4E1A;
                var9 = var16.bind(var17)(var15);
            case 417:
                var5.label = var9;
                var5.disabled = var7;
                var7 = _closure1_slot7;
                var9 = _closure1_slot0;
                var8 = _closure1_slot3;
                var14 = var8[var14];
                var14 = var9.bind(var3)(var14);
                var14 = var14.FormRow;
                var15 = var14.Arrow;
                var14 = {};
                var14 = var7.bind(var3)(var15, var14);
                var5.trailing = var14;
                var14 = var10.select;
                var5.DEPRECATED_style = var14;
                var5.onPress = var13;
                var5 = var11.bind(var3)(var6, var5);
                var4[2] = var5;
                var5 = 12;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 3278, 5381, 1307, 1234, 484, 3941, 4878, 5382, 2]);