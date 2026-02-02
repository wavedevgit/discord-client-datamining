// modules/guild_role_subscriptions/native/components/ChannelSelectorActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun116834: for (var _fun116834_ip = 0;;) switch (_fun116834_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun116834_ip = 46;
                    continue _fun116834
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun116834_ip = 55;
                    continue _fun116834
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun116834_ip = 345;
                    continue _fun116834
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun116834_ip = 323;
                    continue _fun116834
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun116834_ip = 283;
                    continue _fun116834
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun116834_ip = 270;
                    continue _fun116834
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun116834_ip = 163;
                    continue _fun116834
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun116834_ip = 179;
                    continue _fun116834
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun116834_ip = 249;
                    continue _fun116834
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun116834_ip = 249;
                    continue _fun116834
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun116834_ip = 234;
                    continue _fun116834
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun116834_ip = 247;
                    continue _fun116834
                }
            case 234:
                var8 = _closure1_slot16;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun116834_ip = 265;
                continue _fun116834;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun116834_ip = 283;
                continue _fun116834;
            case 270:
                var6 = _closure1_slot16;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun116834_ip = 323;
                    continue _fun116834
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun116834_ip = 330;
                    continue _fun116834
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun116835: for (var _fun116835_ip = 0;;) switch (_fun116835_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun116835_ip = 56;
                                continue _fun116835
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun116835_ip = 67;
                            continue _fun116835;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0, arg1() {
        _fun116836: for (var _fun116836_ip = 0;;) switch (_fun116836_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun116836_ip = 23;
                    continue _fun116836
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun116836_ip = 33;
                    continue _fun116836
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun116836_ip = 70;
                    continue _fun116836
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun116836_ip = 55;
                    continue _fun116836
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        _fun116837: for (var _fun116837_ip = 0;;) switch (_fun116837_ip) {
            case 0:
                var1 = arg0;
                var11 = var1.channel;
                var _closure2_slot0 = var11;
                var7 = var1.onChannelSelected;
                var _closure2_slot1 = var7;
                var5 = var1.selected;
                var1 = _closure1_slot14;
                var3 = undefined;
                var9 = var1.bind(var3)();
                var4 = _closure1_slot4;
                var2 = var4.useCallback;
                var1 = new Array(2);
                var1[0] = var7;
                var1[1] = var11;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var10 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot13;
                var1 = _closure1_slot12;
                var0 = {};
                var8 = _closure1_slot11;
                var7 = _closure1_slot1;
                var12 = _closure1_slot2;
                var4 = 13;
                var4 = var12[var4];
                var7 = var7.bind(var3)(var4);
                var4 = {};
                var12 = var9.channelRow;
                var4.style = var12;
                var4.onPress = var10;
                var10 = true;
                var4.accessible = var10;
                var12 = var11.name;
                var4.accessibilityLabel = var12;
                var4.channel = var11;
                var4.selected = var5;
                var4.disableHighlightOnPress = var10;
                var10 = _closure1_slot10;
                var10 = var10.ONLY_MENTIONS;
                var4.resolvedUnreadSetting = var10;
                var7 = var8.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                if (!var5) {
                    _fun116837_ip = 246;
                    continue _fun116837
                }
            case 188:
                var8 = _closure1_slot11;
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 14;
                var6 = var11[var6];
                var7 = var10.bind(var3)(var6);
                var6 = {};
                var9 = var9.selectedIcon;
                var6.style = var9;
                var9 = 15;
                var9 = var11[var9];
                var9 = var10.bind(var3)(var9);
                var6.source = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 246:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
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
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Permissions;
    var _closure1_slot9 = var6;
    var11 = var3.Fonts;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UnreadSetting;
    var _closure1_slot10 = var3;
    var12 = 8;
    var3 = var5[var12];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot11 = var6;
    var6 = var3.Fragment;
    var _closure1_slot12 = var6;
    var3 = var3.jsxs;
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'backgroundColor': null,
        'padding': 16,
        'width': '100%'
    };
    var9 = 10;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var13;
    var15 = 16;
    var3.titleContainer = var8;
    var8 = {
        'backgroundColor': null,
        'padding': 16,
        'width': '100%'
    };
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var13;
    var3.searchContainer = var8;
    var8 = {
        'alignItems': 'center',
        'backgroundColor': null,
        'flexDirection': 'row',
        'padding': 16
    };
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var13;
    var3.createChannelButton = var8;
    var8 = {};
    var13 = 11;
    var13 = var5[var13];
    var14 = var10.bind(var0)(var13);
    var13 = var11.PRIMARY_MEDIUM;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_LINK;
    var17 = var14.bind(var0)(var13, var11, var15);
    var18 = var8;
    var11 = copyDataProperties(var18, var17);
    var11 = 'marginStart';
    var8[var11] = var12;
    var3.createChannelLabel = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var9;
    var3.bodyContainer = var8;
    var8 = {
        'paddingHorizontal': 8,
        'paddingVertical': 4
    };
    var3.channelRow = var8;
    var8 = {
        'end': 16,
        'top': 10,
        'position': 'absolute'
    };
    var3.selectedIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var3 = 30;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/components/ChannelSelectorActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun116839: for (var _fun116839_ip = 0;;) switch (_fun116839_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.guildId;
                var _closure2_slot0 = var10;
                var1 = var0.onChannelSelected;
                var _closure2_slot1 = var1;
                var1 = var0.selectedChannelId;
                var _closure2_slot2 = var1;
                var19 = var0.title;
                var12 = var0.hideCreateChannel;
                var3 = undefined;
                if (!(var12 === var3)) {
                    _fun116839_ip = 55;
                    continue _fun116839
                }
            case 53:
                var12 = false;
            case 55:
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var0 = _closure1_slot14;
                var9 = var0.bind(var3)();
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var0 = '';
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot3;
                var0 = 2;
                var2 = var1.bind(var3)(var2, var0);
                var0 = 0;
                var0 = var2[var0];
                _closure2_slot3 = var0;
                var1 = 1;
                var21 = var2[var1];
                var2 = _closure1_slot4;
                var1 = var2.useRef;
                var20 = null;
                var5 = var1.bind(var2)(var20);
                _closure2_slot4 = var5;
                var16 = _closure1_slot0;
                var15 = _closure1_slot2;
                var1 = 16;
                var1 = var15[var1];
                var8 = var16.bind(var3)(var1);
                var6 = var8.useStateFromStoresArray;
                var1 = _closure1_slot7;
                var2 = new Array(2);
                var2[0] = var1;
                var1 = _closure1_slot8;
                var2[1] = var1;
                var1 = new Array(2);
                var1[0] = var10;
                var1[1] = var0;
                var0 = function() { // Environment: var7
                    _fun116840: for (var _fun116840_ip = 0;;) switch (_fun116840_ip) {
                        case 0:
                            var0 = new Array(0);
                            var3 = _closure1_slot7;
                            var2 = var3.getCategories;
                            var1 = _closure2_slot0;
                            var7 = var2.bind(var3)(var1);
                            var2 = _closure1_slot15;
                            var1 = var7._categories;
                            var6 = undefined;
                            var5 = var2.bind(var6)(var1);
                            var2 = var5.bind(var6)();
                            var1 = var2.done;
                            var4 = '';
                            var3 = var2;
                            var2 = undefined;
                            if (var1) {
                                _fun116840_ip = 241;
                                continue _fun116840
                            }
                        case 70:
                            var10 = _closure1_slot15;
                            var1 = var3.value;
                            var1 = var1.channel;
                            var1 = var1.id;
                            var1 = var7[var1];
                            var11 = var10.bind(var6)(var1);
                            var10 = var11.bind(var6)();
                            var1 = var10.done;
                            if (var1) {
                                _fun116840_ip = 223;
                                continue _fun116840
                            }
                        case 110:
                            var12 = var10.value;
                            var15 = _closure1_slot8;
                            var14 = var15.can;
                            var1 = _closure1_slot9;
                            var13 = var1.VIEW_CHANNEL;
                            var1 = var12.channel;
                            var1 = var14.bind(var15)(var13, var1);
                            if (!var1) {
                                _fun116840_ip = 187;
                                continue _fun116840
                            }
                        case 149:
                            var13 = _closure2_slot3;
                            var13 = var4 === var13;
                            if (var13) {
                                _fun116840_ip = 184;
                                continue _fun116840
                            }
                        case 160:
                            var14 = var12.channel;
                            var16 = var14.name;
                            var15 = var16.includes;
                            var14 = _closure2_slot3;
                            var13 = var15.bind(var16)(var14);
                        case 184:
                            var1 = var13;
                        case 187:
                            if (!var1) {
                                _fun116840_ip = 205;
                                continue _fun116840
                            }
                        case 190:
                            var13 = var0.push;
                            var1 = var12.channel;
                            var1 = var13.bind(var0)(var1);
                        case 205:
                            var13 = var11.bind(var6)();
                            var1 = var13.done;
                            var10 = var13;
                            var2 = var12;
                            if (!var1) {
                                _fun116840_ip = 110;
                                continue _fun116840
                            }
                        case 223:
                            var10 = var5.bind(var6)();
                            var1 = var10.done;
                            var3 = var10;
                            if (!var1) {
                                _fun116840_ip = 70;
                                continue _fun116840
                            }
                        case 241:
                            return var0;
                    }
                };
                var8 = var6.bind(var8)(var2, var0, var1);
                var2 = _closure1_slot11;
                var0 = 17;
                var0 = var15[var0];
                var0 = var16.bind(var3)(var0);
                var1 = var0.ActionSheet;
                var0 = {};
                var6 = true;
                var0.scrollable = var6;
                var0.ref = var5;
                var10 = _closure1_slot13;
                var6 = _closure1_slot12;
                var5 = {};
                var14 = _closure1_slot11;
                var13 = _closure1_slot5;
                var11 = {};
                var17 = var9.titleContainer;
                var11.style = var17;
                var18 = _closure1_slot11;
                var17 = 18;
                var15 = var15[var17];
                var15 = var16.bind(var3)(var15);
                var16 = var15.Text;
                var15 = {
                    'accessibilityRole': 'header',
                    'variant': 'text-md/bold',
                    'color': 'mobile-text-heading-primary'
                };
                if (!(var20 == var19)) {
                    _fun116839_ip = 373;
                    continue _fun116839
                }
            case 318:
                var25 = _closure1_slot0;
                var26 = _closure1_slot2;
                var22 = 19;
                var23 = var26[var22];
                var23 = var25.bind(var3)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var22 = var26[var22];
                var22 = var25.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22.PDn2fR;
                var19 = var23.bind(var24)(var22);
            case 373:
                var15.children = var19;
                var15 = var18.bind(var3)(var16, var15);
                var11.children = var15;
                var13 = var14.bind(var3)(var13, var11);
                var11 = new Array(3);
                var11[0] = var13;
                var15 = _closure1_slot11;
                var14 = _closure1_slot5;
                var13 = {};
                var16 = var9.searchContainer;
                var13.style = var16;
                var19 = _closure1_slot11;
                var26 = _closure1_slot0;
                var22 = _closure1_slot2;
                var16 = 20;
                var16 = var22[var16];
                var16 = var26.bind(var3)(var16);
                var18 = var16.SearchField;
                var16 = {};
                var23 = 'md';
                var16.size = var23;
                var24 = 19;
                var23 = var22[var24];
                var23 = var26.bind(var3)(var23);
                var25 = var23.intl;
                var23 = var25.string;
                var22 = var22[var24];
                var22 = var26.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22.UTYBjS;
                var22 = var23.bind(var25)(var22);
                var16.placeholder = var22;
                var16.onChange = var21;
                var21 = function() {
                    _fun116841: for (var _fun116841_ip = 0;;) switch (_fun116841_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            var2 = var0.current;
                            var0 = null;
                            var1 = var0 == var2;
                            var0 = undefined;
                            if (var1) {
                                _fun116841_ip = 33;
                                continue _fun116841
                            }
                        case 23:
                            var1 = var2.expandActionSheet;
                            var0 = var1.bind(var2)();
                        case 33:
                            return var0;
                    }
                };
                var16.onFocus = var21;
                var16 = var19.bind(var3)(var18, var16);
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var11[1] = var13;
                var12 = !var12;
                if (!var12) {
                    _fun116839_ip = 833;
                    continue _fun116839
                }
            case 561:
                var15 = _closure1_slot13;
                var14 = _closure1_slot0;
                var21 = _closure1_slot2;
                var13 = 21;
                var13 = var21[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.PressableOpacity;
                var13 = {};
                var16 = var9.createChannelButton;
                var13.style = var16;
                var16 = 'button';
                var13.accessibilityRole = var16;
                var16 = function() {
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var0 = 12;
                    var2 = var7[var0];
                    var0 = undefined;
                    var3 = var6.bind(var0)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    var2 = 22;
                    var2 = var7[var2];
                    var5 = var6.bind(var0)(var2);
                    var4 = var5.pushLazy;
                    var8 = _closure1_slot0;
                    var1 = 24;
                    var1 = var7[var1];
                    var3 = var8.bind(var0)(var1);
                    var1 = 23;
                    var2 = var7[var1];
                    var1 = var7.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var2 = {};
                    var1 = _closure2_slot0;
                    var2.guildId = var1;
                    var1 = 25;
                    var1 = var7[var1];
                    var1 = var8.bind(var0)(var1);
                    var1 = var1.CreateChannelMode;
                    var1 = var1.PREMIUM_CHANNEL;
                    var2.createMode = var1;
                    var1 = function arg0() {
                        _fun116843: for (var _fun116843_ip = 0;;) switch (_fun116843_ip) {
                            case 0:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 26;
                                var2 = var2[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.close;
                                var2 = var2.bind(var3)();
                                var3 = _closure1_slot6;
                                var2 = var3.getChannel;
                                var1 = arg0;
                                var2 = var2.bind(var3)(var1);
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun116843_ip = 70;
                                    continue _fun116843
                                }
                            case 58:
                                var1 = _closure2_slot1;
                                var1 = var1.bind(var0)(var2);
                            case 70:
                                return var0;
                        }
                    };
                    var2.onChannelCreated = var1;
                    var1 = 26;
                    var1 = var7[var1];
                    var1 = var6.bind(var0)(var1);
                    var1 = var1.CREATE_CHANNEL_MODAL_KEY;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var13.onPress = var16;
                var19 = _closure1_slot11;
                var18 = _closure1_slot1;
                var16 = 27;
                var16 = var21[var16];
                var18 = var18.bind(var3)(var16);
                var16 = {};
                var21 = var9.createChannelLabel;
                var22 = var21.color;
                var21 = var20 == var22;
                var20 = undefined;
                if (var21) {
                    _fun116839_ip = 673;
                    continue _fun116839
                }
            case 664:
                var21 = var22.toString;
                var20 = var21.bind(var22)();
            case 673:
                var16.color = var20;
                var22 = _closure1_slot1;
                var20 = _closure1_slot2;
                var21 = 28;
                var21 = var20[var21];
                var21 = var22.bind(var3)(var21);
                var16.source = var21;
                var18 = var19.bind(var3)(var18, var16);
                var16 = new Array(2);
                var16[0] = var18;
                var19 = _closure1_slot11;
                var23 = _closure1_slot0;
                var17 = var20[var17];
                var17 = var23.bind(var3)(var17);
                var18 = var17.Text;
                var17 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'text-link'
                };
                var21 = var9.createChannelLabel;
                var17.style = var21;
                var21 = var20[var24];
                var21 = var23.bind(var3)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var20 = var20[var24];
                var20 = var23.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.d7AN7W;
                var20 = var21.bind(var22)(var20);
                var17.children = var20;
                var17 = var19.bind(var3)(var18, var17);
                var16[1] = var17;
                var13.children = var16;
                var12 = var15.bind(var3)(var14, var13);
            case 833:
                var11[2] = var12;
                var5.children = var11;
                var5 = var10.bind(var3)(var6, var5);
                var0.header = var5;
                var6 = _closure1_slot11;
                var5 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 29;
                var4 = var10[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.BottomSheetFlatList;
                var4 = {};
                var9 = var9.bodyContainer;
                var4.style = var9;
                var4.data = var8;
                var8 = function arg0() {
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var4.keyExtractor = var8;
                var7 = function arg0() {
                    var0 = arg0;
                    var4 = var0.item;
                    var3 = _closure1_slot11;
                    var2 = _closure1_slot17;
                    var1 = {};
                    var1.channel = var4;
                    var5 = _closure2_slot1;
                    var1.onChannelSelected = var5;
                    var4 = var4.id;
                    var0 = _closure2_slot2;
                    var0 = var4 === var0;
                    var1.selected = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var4.renderItem = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1372, 4541, 3052, 660, 4270, 33, 1297, 671, 4647, 3239, 13257, 4669, 14794, 566, 5173, 3902, 1234, 6973, 4867, 4527, 8092, 1307, 8094, 8096, 4047, 9917, 4898, 2]);