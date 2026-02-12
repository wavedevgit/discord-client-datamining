// modules/parent_tools/native/FamilyCenterActivityCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var3 = function() {
        _fun81576: for (var _fun81576_ip = 0;;) switch (_fun81576_ip) {
            case 0:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 8;
                var0 = var6[var0];
                var5 = undefined;
                var1 = var4.bind(var5)(var0);
                var0 = var1.useActiveLinkUserIds;
                var1 = var0.bind(var1)();
                var3 = _closure1_slot1;
                var0 = 7;
                var0 = var6[var0];
                var0 = var3.bind(var5)(var0);
                var3 = var0.bind(var5)();
                var0 = 24;
                var0 = var6[var0];
                var4 = var4.bind(var5)(var0);
                var0 = var4.useSelectedTeenUser;
                var8 = var0.bind(var4)();
                var0 = null;
                if (!(var5 !== var8)) {
                    _fun81576_ip = 143;
                    continue _fun81576
                }
            case 83:
                if (!var3) {
                    _fun81576_ip = 98;
                    continue _fun81576
                }
            case 86:
                var3 = var1.length;
                var1 = 1;
                if (!(var1 === var3)) {
                    _fun81576_ip = 136;
                    continue _fun81576
                }
            case 98:
                var4 = _closure1_slot7;
                var3 = _closure1_slot4;
                var1 = {};
                var7 = _closure1_slot13;
                var6 = {};
                var6.user = var8;
                var6 = var4.bind(var5)(var7, var6);
                var1.children = var6;
                var1 = var4.bind(var5)(var3, var1);
                _fun81576_ip = 140;
                continue _fun81576;
            case 136:
                var1 = _closure1_slot15;
            case 140:
                var0 = var1;
            case 143:
                return var0;
        }
    };
    var1 = function() {
        _fun81577: for (var _fun81577_ip = 0;;) switch (_fun81577_ip) {
            case 0:
                var0 = _closure1_slot14;
                var4 = undefined;
                var15 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 8;
                var0 = var3[var0];
                var1 = var2.bind(var4)(var0);
                var0 = var1.useActiveLinkUsers;
                var0 = var0.bind(var1)();
                var _closure2_slot0 = var0;
                var1 = 24;
                var1 = var3[var1];
                var5 = var2.bind(var4)(var1);
                var1 = var5.useSelectedTeenUser;
                var12 = var1.bind(var5)();
                var _closure2_slot1 = var12;
                var1 = 25;
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.useFamilyCenterActions;
                var1 = {};
                var5 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 26;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.hideActionSheet;
                    var0 = _closure1_slot9;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1.onSuccess = var5;
                var5 = function() {
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 27;
                    var1 = var7[var1];
                    var6 = undefined;
                    var2 = var4.bind(var6)(var1);
                    var1 = var2.presentFailedToast;
                    var3 = 11;
                    var3 = var7[var3];
                    var3 = var4.bind(var6)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var5 = _closure1_slot1;
                    var0 = 12;
                    var0 = var7[var0];
                    var0 = var5.bind(var6)(var0);
                    var0 = var0.Wu8BK2;
                    var0 = var3.bind(var4)(var0);
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1.onError = var5;
                var1 = var2.bind(var3)(var1);
                var1 = var1.selectTeenUser;
                var _closure2_slot2 = var1;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var8
                    var2 = _closure2_slot0;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var0 = {};
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 28;
                        var6 = var5[var2];
                        var3 = undefined;
                        var7 = var4.bind(var3)(var6);
                        var6 = var7.getName;
                        var7 = var6.bind(var7)(var1);
                        var2 = var5[var2];
                        var3 = var4.bind(var3)(var2);
                        var2 = var3.getUserTag;
                        var9 = var2.bind(var3)(var1);
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var5 = var2.concat;
                        var12 = '';
                        var10 = ' (';
                        var8 = ')';
                        var11 = var7;
                        var2 = var12[var5](var11, var10, var9, var8, var7);
                        var0.label = var2;
                        var1 = var1.id;
                        var0.value = var1;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var2.bind(var3)(var0, var1);
                var _closure2_slot3 = var0;
                var0 = null;
                if (!(var4 !== var12)) {
                    _fun81577_ip = 377;
                    continue _fun81577
                }
            case 177:
                var3 = _closure1_slot7;
                var2 = _closure1_slot4;
                var1 = {};
                var7 = _closure1_slot8;
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var5 = 16;
                var5 = var14[var5];
                var6 = var13.bind(var4)(var5);
                var5 = {};
                var10 = var15.touch;
                var5.style = var10;
                var10 = 'spinbutton';
                var5.accessibilityRole = var10;
                var8 = function() {
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var0 = 26;
                    var2 = var10[var0];
                    var0 = undefined;
                    var5 = var9.bind(var0)(var2);
                    var4 = var5.openLazy;
                    var7 = _closure1_slot0;
                    var2 = 19;
                    var2 = var10[var2];
                    var6 = var7.bind(var0)(var2);
                    var2 = 29;
                    var3 = var10[var2];
                    var2 = var10.paths;
                    var3 = var6.bind(var0)(var3, var2);
                    var2 = _closure1_slot9;
                    var1 = {};
                    var6 = 11;
                    var6 = var10[var6];
                    var6 = var7.bind(var0)(var6);
                    var8 = var6.intl;
                    var7 = var8.string;
                    var6 = 12;
                    var6 = var10[var6];
                    var6 = var9.bind(var0)(var6);
                    var6 = var6.vORl9Q;
                    var6 = var7.bind(var8)(var6);
                    var1.title = var6;
                    var7 = _closure2_slot3;
                    var1.items = var7;
                    var7 = function arg0() {
                        _fun81583: for (var _fun81583_ip = 0;;) switch (_fun81583_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = null;
                                var0 = var0 != var1;
                                if (!var0) {
                                    _fun81583_ip = 28;
                                    continue _fun81583
                                }
                            case 12:
                                var2 = _closure2_slot1;
                                var2 = var2.id;
                                var0 = var1 !== var2;
                            case 28:
                                if (!var0) {
                                    _fun81583_ip = 105;
                                    continue _fun81583
                                }
                            case 31:
                                var0 = _closure2_slot2;
                                var2 = undefined;
                                var0 = var0.bind(var2)(var1);
                                var1 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var0 = 30;
                                var0 = var3[var0];
                                var3 = var1.bind(var2)(var0);
                                var2 = var3.track;
                                var0 = _closure1_slot6;
                                var1 = var0.FAMILY_CENTER_ACTION;
                                var0 = {};
                                var4 = _closure1_slot5;
                                var4 = var4.SelectTeen;
                                var0.action = var4;
                                var0 = var2.bind(var3)(var1, var0);
                            case 105:
                                var0 = global;
                                var2 = var0.setImmediate;
                                var0 = undefined;
                                var1 = function() { // Environment: var1
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var0 = 26;
                                    var2 = var2[var0];
                                    var0 = undefined;
                                    var3 = var3.bind(var0)(var2);
                                    var2 = var3.hideActionSheet;
                                    var1 = _closure1_slot9;
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                                };
                                var1 = var2.bind(var0)(var1);
                                return var0;
                        }
                    };
                    var1.onItemSelect = var7;
                    var6 = _closure2_slot1;
                    var6 = var6.id;
                    var1.selectedItem = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var5.onPress = var8;
                var11 = _closure1_slot7;
                var10 = _closure1_slot13;
                var8 = {};
                var8.user = var12;
                var12 = true;
                var8.inSelector = var12;
                var10 = var11.bind(var4)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var11 = _closure1_slot7;
                var12 = 13;
                var9 = var14[var12];
                var10 = var13.bind(var4)(var9);
                var9 = {};
                var15 = var15.icon;
                var9.style = var15;
                var12 = var14[var12];
                var12 = var13.bind(var4)(var12);
                var12 = var12.Sizes;
                var12 = var12.MEDIUM;
                var9.size = var12;
                var12 = 31;
                var12 = var14[var12];
                var12 = var13.bind(var4)(var12);
                var9.source = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 377:
                return var0;
        }
    };
    var0 = global;
    var10 = var0.Object;
    var6 = var10.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var10)(var2, var0, var4);
    var0 = 0;
    var6 = var8[var0];
    var4 = arg3;
    var0 = undefined;
    var12 = var4.bind(var0)(var6);
    var _closure1_slot3 = var12;
    var18 = 1;
    var4 = var8[var18];
    var4 = var7.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var19 = 2;
    var4 = var8[var19];
    var4 = var7.bind(var0)(var4);
    var4 = var4.FamilyCenterAction;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var8[var4];
    var4 = var7.bind(var0)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var8[var4];
    var4 = var7.bind(var0)(var4);
    var10 = var4.jsx;
    var _closure1_slot7 = var10;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 'FamilyCenterTeenAccountSelect';
    var _closure1_slot9 = var4;
    var6 = 5;
    var4 = var8[var6];
    var13 = var7.bind(var0)(var4);
    var11 = var13.createStyles;
    var4 = {};
    var16 = 'flex';
    var14 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var4.container = var14;
    var15 = {};
    var14 = 6;
    var17 = var8[var14];
    var17 = var9.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.ICON_SUBTLE;
    var15.color = var17;
    var17 = var8[var14];
    var17 = var9.bind(var0)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_16;
    var15.width = var17;
    var17 = var8[var14];
    var17 = var9.bind(var0)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_16;
    var15.height = var17;
    var4.icon = var15;
    var15 = {};
    var17 = var8[var14];
    var17 = var9.bind(var0)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_4;
    var15.marginHorizontal = var17;
    var4.text = var15;
    var4 = var11.bind(var13)(var4);
    var _closure1_slot10 = var4;
    var4 = var8[var6];
    var13 = var7.bind(var0)(var4);
    var11 = var13.createStyles;
    var4 = {};
    var15 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'padding': null,
        'flex': 1
    };
    var17 = var8[var14];
    var17 = var9.bind(var0)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_12;
    var15.padding = var17;
    var17 = var8[var14];
    var17 = var9.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_SURFACE_HIGHEST;
    var15.backgroundColor = var17;
    var17 = var8[var14];
    var17 = var9.bind(var0)(var17);
    var17 = var17.radii;
    var17 = var17.md;
    var15.borderTopLeftRadius = var17;
    var17 = var8[var14];
    var17 = var9.bind(var0)(var17);
    var17 = var17.radii;
    var17 = var17.md;
    var15.borderTopRightRadius = var17;
    var4.header = var15;
    var15 = {};
    var17 = 21;
    var17 = var8[var17];
    var17 = var7.bind(var0)(var17);
    var20 = var17.AVATAR_SIZE_MAP;
    var17 = 22;
    var17 = var8[var17];
    var17 = var7.bind(var0)(var17);
    var17 = var17.AvatarSizes;
    var17 = var17.NORMAL;
    var17 = var20[var17];
    var17 = var17 / var19;
    var15.borderRadius = var17;
    var17 = var8[var14];
    var17 = var9.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_SURFACE_HIGH;
    var15.backgroundColor = var17;
    var4.avatar = var15;
    var15 = {};
    var17 = var8[var14];
    var17 = var9.bind(var0)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_12;
    var15.marginRight = var17;
    var17 = 'flex-start';
    var15.alignItems = var17;
    var4.avatarContainer = var15;
    var17 = {
        'display': 'flex',
        'flexDirection': 'column',
        'width': '100%'
    };
    var15 = '100%';
    var19 = var8[var14];
    var19 = var9.bind(var0)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_16;
    var17.paddingRight = var19;
    var4.userHeader = var17;
    var17 = {};
    var17.flex = var18;
    var18 = var8[var14];
    var18 = var9.bind(var0)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_16;
    var17.paddingRight = var18;
    var4.nonSelectorHeader = var17;
    var4 = var11.bind(var13)(var4);
    var _closure1_slot11 = var4;
    var11 = function() {
        _fun81575: for (var _fun81575_ip = 0;;) switch (_fun81575_ip) {
            case 0:
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 7;
                var0 = var7[var0];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var2 = var0.bind(var4)();
                var5 = _closure1_slot0;
                var3 = 8;
                var0 = var7[var3];
                var6 = var5.bind(var4)(var0);
                var0 = var6.useActiveLinkUserIds;
                var0 = var0.bind(var6)();
                var6 = 9;
                var6 = var7[var6];
                var9 = var5.bind(var4)(var6);
                var8 = var9.getActivityWindowTimestampFormatter;
                var6 = !var2;
                var6 = !var6;
                var6 = var8.bind(var9)(var6);
                var3 = var7[var3];
                var5 = var5.bind(var4)(var3);
                var3 = var5.useActivityWindowTimeStamp;
                var5 = var3.bind(var5)(var6);
                if (!var2) {
                    _fun81575_ip = 124;
                    continue _fun81575
                }
            case 107:
                var2 = var0.length;
                var0 = 1;
                var2 = var2 > var0;
                var0 = null;
                if (var2) {
                    _fun81575_ip = 177;
                    continue _fun81575
                }
            case 124:
                var3 = _closure1_slot7;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 15;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-muted'
                };
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 177:
                return var0;
        }
    };
    var4 = {};
    var4 = var10.bind(var0)(var11, var4);
    var _closure1_slot12 = var4;
    var11 = var12.memo;
    var4 = function(arg0) { // Environment: var5
        _fun81585: for (var _fun81585_ip = 0;;) switch (_fun81585_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.user;
                var13 = var0.inSelector;
                var0 = _closure1_slot11;
                var3 = undefined;
                var11 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var15 = 22;
                var0 = var0[var15];
                var0 = var1.bind(var3)(var0);
                var0 = var0.AvatarSizes;
                if (var13) {
                    _fun81585_ip = 64;
                    continue _fun81585
                }
            case 56:
                var14 = var0.NORMAL;
                _fun81585_ip = 70;
                continue _fun81585;
            case 64:
                var14 = var0.SMALL;
            case 70:
                var2 = _closure1_slot8;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var11.header;
                var0.style = var4;
                var6 = _closure1_slot7;
                var5 = _closure1_slot4;
                var4 = {};
                var7 = var11.avatarContainer;
                var4.style = var7;
                var10 = _closure1_slot7;
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var7 = var7[var15];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var15 = var11.avatar;
                var7.avatarStyle = var15;
                var7.user = var12;
                var7.guildId = var3;
                var15 = true;
                var7.disablePlaceholder = var15;
                var15 = var12.avatarDecoration;
                var7.avatarDecoration = var15;
                var7.size = var14;
                var7 = var10.bind(var3)(var8, var7);
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot8;
                var6 = _closure1_slot4;
                var5 = {};
                var10 = var11.userHeader;
                var8 = new Array(2);
                var8[0] = var10;
                var10 = undefined;
                if (var13) {
                    _fun81585_ip = 232;
                    continue _fun81585
                }
            case 226:
                var10 = var11.nonSelectorHeader;
            case 232:
                var8[1] = var10;
                var5.style = var8;
                var11 = _closure1_slot7;
                var10 = _closure1_slot1;
                var13 = _closure1_slot2;
                var8 = 23;
                var8 = var13[var8];
                var10 = var10.bind(var3)(var8);
                var8 = {};
                var8.user = var12;
                var10 = var11.bind(var3)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var9 = _closure1_slot12;
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var4 = var11.bind(var12)(var4);
    var _closure1_slot13 = var4;
    var11 = 'FamilyCenterActivityCardAccount';
    var4.displayName = var11;
    var11 = var8[var6];
    var13 = var7.bind(var0)(var11);
    var12 = var13.createStyles;
    var11 = {};
    var17 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'flex-start'
    };
    var18 = var8[var14];
    var18 = var9.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.BACKGROUND_SURFACE_HIGHEST;
    var17.backgroundColor = var18;
    var18 = var8[var14];
    var18 = var9.bind(var0)(var18);
    var18 = var18.shadows;
    var22 = var18.SHADOW_LOW;
    var23 = var17;
    var18 = copyDataProperties(var23, var22);
    var11.touch = var17;
    var17 = {};
    var18 = var8[var14];
    var18 = var9.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.INTERACTIVE_TEXT_DEFAULT;
    var17.color = var18;
    var18 = var8[var14];
    var18 = var9.bind(var0)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_24;
    var17.width = var18;
    var18 = var8[var14];
    var18 = var9.bind(var0)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_24;
    var17.height = var18;
    var19 = {};
    var18 = '90deg';
    var19.rotate = var18;
    var18 = new Array(1);
    var18[0] = var19;
    var17.transform = var18;
    var18 = var8[var14];
    var18 = var9.bind(var0)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_8;
    var17.marginHorizontal = var18;
    var11.icon = var17;
    var11 = var12.bind(var13)(var11);
    var _closure1_slot14 = var11;
    var11 = {};
    var11 = var10.bind(var0)(var1, var11);
    var _closure1_slot15 = var11;
    var6 = var8[var6];
    var12 = var7.bind(var0)(var6);
    var11 = var12.createStyles;
    var6 = {};
    var13 = {};
    var17 = var8[var14];
    var17 = var9.bind(var0)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_16;
    var13.marginTop = var17;
    var6.card = var13;
    var13 = {};
    var13.display = var16;
    var16 = var8[var14];
    var16 = var9.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_12;
    var13.marginBottom = var16;
    var6.preface = var13;
    var13 = {};
    var16 = var8[var14];
    var16 = var9.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_SURFACE_HIGH;
    var13.backgroundColor = var16;
    var16 = var8[var14];
    var16 = var9.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.md;
    var13.borderRadius = var16;
    var6.container = var13;
    var13 = {
        'padding': null,
        'display': 'flex',
        'flexDirection': 'column'
    };
    var16 = var8[var14];
    var16 = var9.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_16;
    var13.padding = var16;
    var16 = var8[var14];
    var16 = var9.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_32;
    var13.gap = var16;
    var6.content = var13;
    var13 = {
        'display': 'flex',
        'flexDirection': 'row',
        'flexWrap': 'wrap',
        'justifyContent': 'space-between'
    };
    var16 = var8[var14];
    var16 = var9.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_8;
    var13.gap = var16;
    var6.totals = var13;
    var13 = {};
    var13.width = var15;
    var6.first = var13;
    var13 = {};
    var15 = '48.5%';
    var13.width = var15;
    var6.other = var13;
    var13 = {
        'display': 'flex',
        'flexDirection': 'column'
    };
    var14 = var8[var14];
    var14 = var9.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_32;
    var13.gap = var14;
    var6.activities = var13;
    var6 = var11.bind(var12)(var6);
    var _closure1_slot16 = var6;
    var11 = function() {
        _fun81573: for (var _fun81573_ip = 0;;) switch (_fun81573_ip) {
            case 0:
                var0 = _closure1_slot10;
                var3 = undefined;
                var11 = var0.bind(var3)();
                var7 = _closure1_slot1;
                var13 = _closure1_slot2;
                var0 = 7;
                var0 = var13[var0];
                var0 = var7.bind(var3)(var0);
                var12 = var0.bind(var3)();
                var6 = _closure1_slot0;
                var0 = 8;
                var1 = var13[var0];
                var2 = var6.bind(var3)(var1);
                var1 = var2.useActiveLinkUserIds;
                var9 = var1.bind(var2)();
                var1 = 9;
                var1 = var13[var1];
                var4 = var6.bind(var3)(var1);
                var2 = var4.getActivityWindowTimestampFormatter;
                var1 = !var12;
                var1 = !var1;
                var2 = var2.bind(var4)(var1);
                var0 = var13[var0];
                var1 = var6.bind(var3)(var0);
                var0 = var1.useActivityWindowTimeStamp;
                var10 = var0.bind(var1)(var2);
                var0 = 10;
                var0 = var13[var0];
                var4 = var6.bind(var3)(var0);
                var2 = var4.useAgeSpecificText;
                var5 = 11;
                var0 = var13[var5];
                var0 = var6.bind(var3)(var0);
                var16 = var0.intl;
                var15 = var16.formatToPlainString;
                var0 = 12;
                var1 = var13[var0];
                var1 = var7.bind(var3)(var1);
                var14 = var1.tazvHQ;
                var1 = {};
                var17 = var9.length;
                var1.activeLinks = var17;
                var1 = var15.bind(var16)(var14, var1);
                var5 = var13[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var0 = var13[var0];
                var0 = var7.bind(var3)(var0);
                var0 = var0.KrLnkE;
                var0 = var5.bind(var6)(var0);
                var13 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot8;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var11.container;
                var0.style = var4;
                var5 = null;
                if (var12) {
                    _fun81573_ip = 334;
                    continue _fun81573
                }
            case 263:
                var7 = _closure1_slot7;
                var15 = _closure1_slot1;
                var16 = _closure1_slot2;
                var4 = 13;
                var4 = var16[var4];
                var6 = var15.bind(var3)(var4);
                var4 = {};
                var14 = var11.icon;
                var14 = var14.color;
                var4.color = var14;
                var14 = 14;
                var14 = var16[var14];
                var14 = var15.bind(var3)(var14);
                var4.source = var14;
                var14 = var11.icon;
                var4.style = var14;
                var5 = var7.bind(var3)(var6, var4);
            case 334:
                var4 = new Array(3);
                var4[0] = var5;
                var7 = _closure1_slot7;
                var6 = _closure1_slot0;
                var14 = _closure1_slot2;
                var5 = 15;
                var5 = var14[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'style': null,
                    'variant': 'text-xs/semibold',
                    'color': 'text-subtle'
                };
                var14 = var11.text;
                var5.style = var14;
                var15 = var9.length;
                var14 = 1;
                var9 = var13;
                if (!(var15 > var14)) {
                    _fun81573_ip = 420;
                    continue _fun81573
                }
            case 411:
                var9 = var13;
                if (!var12) {
                    _fun81573_ip = 420;
                    continue _fun81573
                }
            case 417:
                var9 = var10;
            case 420:
                var5.children = var9;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var7 = _closure1_slot7;
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var5 = 16;
                var5 = var14[var5];
                var6 = var13.bind(var3)(var5);
                var5 = {};
                var9 = function() {
                    var3 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 17;
                    var2 = var1[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.pushLazy;
                    var5 = _closure1_slot0;
                    var4 = 19;
                    var4 = var1[var4];
                    var5 = var5.bind(var0)(var4);
                    var4 = 18;
                    var4 = var1[var4];
                    var1 = var1.paths;
                    var1 = var5.bind(var0)(var4, var1);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var5.onPress = var9;
                var10 = _closure1_slot7;
                var12 = 13;
                var8 = var14[var12];
                var9 = var13.bind(var3)(var8);
                var8 = {};
                var15 = var11.icon;
                var15 = var15.color;
                var8.color = var15;
                var15 = 20;
                var15 = var14[var15];
                var15 = var13.bind(var3)(var15);
                var8.source = var15;
                var12 = var14[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.Sizes;
                var12 = var12.EXTRA_SMALL;
                var8.size = var12;
                var11 = var11.icon;
                var8.style = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var6 = {};
    var6 = var10.bind(var0)(var11, var6);
    var _closure1_slot17 = var6;
    var6 = {};
    var6 = var10.bind(var0)(var3, var6);
    var _closure1_slot18 = var6;
    var6 = 32;
    var6 = var8[var6];
    var11 = var9.bind(var0)(var6);
    var6 = {};
    var6 = var10.bind(var0)(var11, var6);
    var _closure1_slot19 = var6;
    var6 = 33;
    var6 = var8[var6];
    var9 = var9.bind(var0)(var6);
    var6 = {};
    var6 = var10.bind(var0)(var9, var6);
    var _closure1_slot20 = var6;
    var6 = 37;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/parent_tools/native/FamilyCenterActivityCard.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function() {
        _fun81586: for (var _fun81586_ip = 0;;) switch (_fun81586_ip) {
            case 0:
                var0 = _closure1_slot16;
                var3 = undefined;
                var19 = var0.bind(var3)();
                var _closure2_slot0 = var19;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 24;
                var0 = var4[var0];
                var1 = var2.bind(var3)(var0);
                var0 = var1.useSelectedTeenUser;
                var0 = var0.bind(var1)();
                var1 = 34;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useHasActionForAnyDisplayType;
                var15 = var1.bind(var2)();
                if (!(var3 !== var0)) {
                    _fun81586_ip = 387;
                    continue _fun81586
                }
            case 78:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 9;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.getSortedActivityTypeConfigs;
                var20 = var0.bind(var1)();
                var2 = _closure1_slot8;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var19.card;
                var0.style = var4;
                var6 = _closure1_slot7;
                var5 = _closure1_slot4;
                var4 = {};
                var7 = var19.preface;
                var4.style = var7;
                var7 = _closure1_slot17;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot8;
                var6 = _closure1_slot4;
                var5 = {};
                var8 = var19.container;
                var5.style = var8;
                var9 = _closure1_slot18;
                var8 = new Array(2);
                var8[0] = var9;
                var11 = _closure1_slot8;
                var10 = _closure1_slot4;
                var9 = {};
                var12 = var19.content;
                var9.style = var12;
                var16 = _closure1_slot7;
                var14 = _closure1_slot4;
                var12 = {};
                var17 = var19.totals;
                var12.style = var17;
                var21 = var20.map;
                var17 = function(arg0, arg1) { // Environment: var18
                    _fun81587: for (var _fun81587_ip = 0;;) switch (_fun81587_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = var2[Symbol.iterator];
                            var2 = var0().next;
                            var3 = var2().value;
                            var1 = var0;
                            var4 = undefined;
                            var1 = var1 === var4;
                            var6 = undefined;
                            if (var1) {
                                _fun81587_ip = 27;
                                continue _fun81587
                            }
                        case 24:
                            var6 = var3;
                        case 27:
                            if (var1) {
                                _fun81587_ip = 41;
                                continue _fun81587
                            }
                        case 30:
                            var2 = var2().value;
                            var2 = var0;
                            var1 = var2 === var4;
                        case 41:
                            if (var1) {
                                _fun81587_ip = 47;
                                continue _fun81587
                            }
                        case 44:
                            var0.return();
                        case 47:
                            var3 = _closure1_slot7;
                            var2 = _closure1_slot4;
                            var1 = {};
                            var7 = 0;
                            var5 = arg1;
                            if (!(var7 !== var5)) {
                                _fun81587_ip = 84;
                                continue _fun81587
                            }
                        case 69:
                            var5 = _closure2_slot0;
                            var5 = var5.other;
                            _fun81587_ip = 97;
                            continue _fun81587;
                        case 84:
                            var7 = _closure2_slot0;
                            var5 = var7.first;
                        case 97:
                            var1.style = var5;
                            var7 = _closure1_slot7;
                            var5 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var0 = 35;
                            var0 = var8[var0];
                            var5 = var5.bind(var4)(var0);
                            var0 = {};
                            var0.displayType = var6;
                            var0 = var7.bind(var4)(var5, var0);
                            var1.children = var0;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var5 = var0.concat;
                            var0 = 'total-';
                            var0 = var5.bind(var0)(var6);
                            var0 = var3.bind(var4)(var2, var1, var0);
                            return var0;
                    }
                };
                var17 = var21.bind(var20)(var17);
                var12.children = var17;
                var14 = var16.bind(var3)(var14, var12);
                var12 = new Array(4);
                var12[0] = var14;
                var14 = _closure1_slot19;
                var12[1] = var14;
                var14 = null;
                if (!var15) {
                    _fun81586_ip = 335;
                    continue _fun81586
                }
            case 288:
                var17 = _closure1_slot7;
                var16 = _closure1_slot4;
                var15 = {};
                var19 = var19.activities;
                var15.style = var19;
                var19 = var20.map;
                var18 = function(arg0) { // Environment: var18
                    _fun81588: for (var _fun81588_ip = 0;;) switch (_fun81588_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = var2[Symbol.iterator];
                            var2 = var0().next;
                            var3 = var2().value;
                            var1 = var0;
                            var4 = undefined;
                            var1 = var1 === var4;
                            var6 = undefined;
                            if (var1) {
                                _fun81588_ip = 27;
                                continue _fun81588
                            }
                        case 24:
                            var6 = var3;
                        case 27:
                            if (var1) {
                                _fun81588_ip = 41;
                                continue _fun81588
                            }
                        case 30:
                            var2 = var2().value;
                            var2 = var0;
                            var1 = var2 === var4;
                        case 41:
                            if (var1) {
                                _fun81588_ip = 47;
                                continue _fun81588
                            }
                        case 44:
                            var0.return();
                        case 47:
                            var3 = _closure1_slot7;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 36;
                            var0 = var2[var0];
                            var2 = var1.bind(var4)(var0);
                            var1 = {};
                            var1.displayType = var6;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var5 = var0.concat;
                            var0 = 'section-';
                            var0 = var5.bind(var0)(var6);
                            var0 = var3.bind(var4)(var2, var1, var0);
                            return var0;
                    }
                };
                var18 = var19.bind(var20)(var18);
                var15.children = var18;
                var14 = var17.bind(var3)(var16, var15);
            case 335:
                var12[2] = var14;
                var13 = _closure1_slot20;
                var12[3] = var13;
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 387:
                var0 = null;
                return var0;
        }
    };
    var2.default = var5;
    var2.FamilyCenterActivityCardAccount = var4;
    var2.FamilyCenterActivityCardHeader = var3;
    var2.FamilyCenterActivityCardAccountSelect = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4600, 660, 33, 1297, 671, 6603, 6602, 4665, 10322, 1234, 1860, 4092, 10347, 3938, 6879, 4567, 10348, 1307, 7242, 5514, 5512, 10351, 10352, 10316, 3279, 3149, 3237, 5496, 795, 10353, 10354, 10357, 10359, 10360, 10361, 2]);