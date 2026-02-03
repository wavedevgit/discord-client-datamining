// modules/forums/native/ForumDisplaySettingsActionSheet.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.useForumChannelStoreApi;
    var _closure1_slot6 = var6;
    var3 = var3.useForumChannelStore;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/ForumDisplaySettingsActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun91407: for (var _fun91407_ip = 0;;) switch (_fun91407_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channelId;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 9;
                var0 = var5[var0];
                var4 = undefined;
                var7 = var3.bind(var4)(var0);
                var6 = var7.useStateFromStores;
                var0 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var15
                    var2 = _closure1_slot5;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var19 = var6.bind(var7)(var2, var0);
                var _closure2_slot1 = var19;
                var0 = _closure1_slot7;
                var0 = var0.bind(var4)(var1);
                var20 = var0.sortOrder;
                var _closure2_slot2 = var20;
                var23 = var0.layoutType;
                var _closure2_slot3 = var23;
                var16 = var0.tagSetting;
                var0 = _closure1_slot6;
                var0 = var0.bind(var4)();
                var _closure2_slot4 = var0;
                var6 = _closure1_slot4;
                var0 = var6.useState;
                var0 = var0.bind(var6)(var20);
                var8 = _closure1_slot3;
                var7 = 2;
                var0 = var8.bind(var4)(var0, var7);
                var2 = 0;
                var1 = var0[var2];
                var _closure2_slot5 = var1;
                var1 = 1;
                var0 = var0[var1];
                var _closure2_slot6 = var0;
                var0 = var6.useState;
                var0 = var0.bind(var6)(var23);
                var0 = var8.bind(var4)(var0, var7);
                var9 = var0[var2];
                var _closure2_slot7 = var9;
                var0 = var0[var1];
                var _closure2_slot8 = var0;
                var0 = var6.useState;
                var0 = var0.bind(var6)(var16);
                var0 = var8.bind(var4)(var0, var7);
                var7 = var0[var2];
                var _closure2_slot9 = var7;
                var0 = var0[var1];
                var _closure2_slot10 = var0;
                var1 = var6.useRef;
                var0 = null;
                var17 = var1.bind(var6)(var0);
                var _closure2_slot11 = var17;
                var1 = var6.useRef;
                var24 = var1.bind(var6)(var0);
                var _closure2_slot12 = var24;
                var1 = var6.useRef;
                var18 = var1.bind(var6)(var0);
                var _closure2_slot13 = var18;
                var1 = 10;
                var1 = var5[var1];
                var5 = var3.bind(var4)(var1);
                var3 = var5.useUnmountEffect;
                var1 = function() { // Environment: var15
                    _fun91409: for (var _fun91409_ip = 0;;) switch (_fun91409_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun91409_ip = 264;
                                continue _fun91409
                            }
                        case 16:
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot5;
                            if (!(var2 !== var1)) {
                                _fun91409_ip = 97;
                                continue _fun91409
                            }
                        case 28:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 11;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.trackForumSortOrderUpdated;
                            var1 = {};
                            var4 = _closure2_slot1;
                            var5 = var4.guild_id;
                            var1.guildId = var5;
                            var4 = var4.id;
                            var1.channelId = var4;
                            var4 = _closure2_slot5;
                            var1.sortOrder = var4;
                            var1 = var2.bind(var3)(var1);
                        case 97:
                            var2 = _closure2_slot3;
                            var1 = _closure2_slot7;
                            if (!(var2 !== var1)) {
                                _fun91409_ip = 178;
                                continue _fun91409
                            }
                        case 109:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 11;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.trackForumLayoutUpdated;
                            var1 = {};
                            var4 = _closure2_slot1;
                            var5 = var4.guild_id;
                            var1.guildId = var5;
                            var4 = var4.id;
                            var1.channelId = var4;
                            var4 = _closure2_slot7;
                            var1.forumLayout = var4;
                            var1 = var2.bind(var3)(var1);
                        case 178:
                            var2 = _closure2_slot4;
                            var1 = var2.getState;
                            var5 = var1.bind(var2)();
                            var4 = var5.setLayoutType;
                            var3 = _closure2_slot0;
                            var1 = _closure2_slot7;
                            var1 = var4.bind(var5)(var3, var1);
                            var1 = var2.getState;
                            var5 = var1.bind(var2)();
                            var4 = var5.setSortOrder;
                            var1 = _closure2_slot5;
                            var1 = var4.bind(var5)(var3, var1);
                            var1 = var2.getState;
                            var2 = var1.bind(var2)();
                            var1 = var2.setTagSetting;
                            var0 = _closure2_slot9;
                            var0 = var1.bind(var2)(var3, var0);
                        case 264:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var5)(var1);
                var5 = var6.useCallback;
                var3 = new Array(1);
                var3[0] = var19;
                var1 = function() { // Environment: var15
                    _fun91410: for (var _fun91410_ip = 0;;) switch (_fun91410_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun91410_ip = 127;
                                continue _fun91410
                            }
                        case 13:
                            var2 = _closure2_slot11;
                            var4 = var2.current;
                            if (!(var1 != var4)) {
                                _fun91410_ip = 51;
                                continue _fun91410
                            }
                        case 26:
                            var3 = var4.setValue;
                            var5 = _closure2_slot1;
                            var2 = var5.getDefaultSortOrder;
                            var2 = var2.bind(var5)();
                            var2 = var3.bind(var4)(var2);
                        case 51:
                            var2 = _closure2_slot12;
                            var4 = var2.current;
                            if (!(var1 != var4)) {
                                _fun91410_ip = 89;
                                continue _fun91410
                            }
                        case 64:
                            var3 = var4.setValue;
                            var5 = _closure2_slot1;
                            var2 = var5.getDefaultLayout;
                            var2 = var2.bind(var5)();
                            var2 = var3.bind(var4)(var2);
                        case 89:
                            var2 = _closure2_slot13;
                            var2 = var2.current;
                            if (!(var1 != var2)) {
                                _fun91410_ip = 127;
                                continue _fun91410
                            }
                        case 102:
                            var1 = var2.setValue;
                            var3 = _closure2_slot1;
                            var0 = var3.getDefaultTagSetting;
                            var0 = var0.bind(var3)();
                            var0 = var1.bind(var2)(var0);
                        case 127:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9 = var5.bind(var6)(var1, var3);
                if (!(var0 != var19)) {
                    _fun91407_ip = 1760;
                    continue _fun91407
                }
            case 339:
                var1 = var19.availableTags;
                var14 = var0 != var1;
                if (!var14) {
                    _fun91407_ip = 367;
                    continue _fun91407
                }
            case 352:
                var1 = var19.availableTags;
                var1 = var1.length;
                var14 = var1 > var2;
            case 367:
                var3 = _closure1_slot8;
                var26 = _closure1_slot0;
                var27 = _closure1_slot2;
                var1 = 12;
                var1 = var27[var1];
                var1 = var26.bind(var4)(var1);
                var2 = var1.ActionSheet;
                var1 = {};
                var5 = true;
                var1.scrollable = var5;
                var5 = 13;
                var5 = var27[var5];
                var5 = var26.bind(var4)(var5);
                var6 = var5.BottomSheetTitleHeader;
                var5 = {};
                var21 = 5;
                var7 = var27[var21];
                var7 = var26.bind(var4)(var7);
                var10 = var7.intl;
                var8 = var10.string;
                var7 = var27[var21];
                var7 = var26.bind(var4)(var7);
                var7 = var7.t;
                var7 = var7.xyYt8A;
                var7 = var8.bind(var10)(var7);
                var5.title = var7;
                var7 = 14;
                var7 = var27[var7];
                var7 = var26.bind(var4)(var7);
                var8 = var7.ActionSheetHeaderPressableText;
                var7 = {};
                var7.onPress = var9;
                var9 = var27[var21];
                var9 = var26.bind(var4)(var9);
                var11 = var9.intl;
                var10 = var11.string;
                var9 = var27[var21];
                var9 = var26.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9.yBZMsQ;
                var9 = var10.bind(var11)(var9);
                var7.label = var9;
                var7 = var3.bind(var4)(var8, var7);
                var5.leading = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.header = var5;
                var5 = 15;
                var5 = var27[var5];
                var5 = var26.bind(var4)(var5);
                var6 = var5.BottomSheetScrollView;
                var5 = {};
                var9 = _closure1_slot9;
                var7 = 16;
                var7 = var27[var7];
                var7 = var26.bind(var4)(var7);
                var8 = var7.Stack;
                var7 = {};
                var10 = 'vertical';
                var7.direction = var10;
                var11 = _closure1_slot1;
                var10 = 17;
                var10 = var27[var10];
                var10 = var11.bind(var4)(var10);
                var10 = var10.spacing;
                var10 = var10.PX_16;
                var7.spacing = var10;
                var12 = 18;
                var10 = var27[var12];
                var10 = var26.bind(var4)(var10);
                var11 = var10.TableRadioGroup;
                var10 = {};
                var10.groupRef = var17;
                var17 = false;
                var10.hasIcons = var17;
                var10.defaultValue = var20;
                var20 = function arg0() {
                    var2 = _closure2_slot6;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var10.onChange = var20;
                var20 = var27[var21];
                var20 = var26.bind(var4)(var20);
                var25 = var20.intl;
                var22 = var25.string;
                var20 = var27[var21];
                var20 = var26.bind(var4)(var20);
                var20 = var20.t;
                var20 = var20.f8wNDl;
                var20 = var22.bind(var25)(var20);
                var10.title = var20;
                var20 = var27[var21];
                var20 = var26.bind(var4)(var20);
                var25 = var20.intl;
                var22 = var25.string;
                var20 = var27[var21];
                var20 = var26.bind(var4)(var20);
                var20 = var20.t;
                var20 = var20.f8wNDl;
                var20 = var22.bind(var25)(var20);
                var10.accessibilityLabel = var20;
                var20 = {};
                var22 = var27[var21];
                var22 = var26.bind(var4)(var22);
                var28 = var22.intl;
                var25 = var28.string;
                var22 = var27[var21];
                var22 = var26.bind(var4)(var22);
                var22 = var22.t;
                var22 = var22.jOPmcI;
                var22 = var25.bind(var28)(var22);
                var20.label = var22;
                var22 = 6;
                var25 = var27[var22];
                var25 = var26.bind(var4)(var25);
                var25 = var25.ThreadSortOrder;
                var25 = var25.LATEST_ACTIVITY;
                var20.value = var25;
                var25 = new Array(2);
                var25[0] = var20;
                var20 = {};
                var28 = var27[var21];
                var28 = var26.bind(var4)(var28);
                var30 = var28.intl;
                var29 = var30.string;
                var28 = var27[var21];
                var28 = var26.bind(var4)(var28);
                var28 = var28.t;
                var28 = var28.UIltXd;
                var28 = var29.bind(var30)(var28);
                var20.label = var28;
                var22 = var27[var22];
                var22 = var26.bind(var4)(var22);
                var22 = var22.ThreadSortOrder;
                var22 = var22.CREATION_DATE;
                var20.value = var22;
                var25[1] = var20;
                var22 = var25.map;
                var20 = function(arg0) { // Environment: var15
                    var0 = arg0;
                    var5 = var0.label;
                    var4 = var0.value;
                    var3 = _closure1_slot8;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 19;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.TableRadioRow;
                    var0 = {};
                    var0.label = var5;
                    var0.value = var4;
                    var0 = var3.bind(var2)(var1, var0, var4);
                    return var0;
                };
                var20 = var22.bind(var25)(var20);
                var10.children = var20;
                var11 = var3.bind(var4)(var11, var10);
                var10 = new Array(3);
                var10[0] = var11;
                var11 = var19.isForumChannel;
                var19 = var11.bind(var19)();
                var11 = null;
                if (!var19) {
                    _fun91407_ip = 1368;
                    continue _fun91407
                }
            case 1020:
                var22 = _closure1_slot8;
                var26 = _closure1_slot0;
                var27 = _closure1_slot2;
                var19 = var27[var12];
                var19 = var26.bind(var4)(var19);
                var20 = var19.TableRadioGroup;
                var19 = {};
                var19.groupRef = var24;
                var19.hasIcons = var17;
                var19.defaultValue = var23;
                var23 = function arg0() {
                    var2 = _closure2_slot8;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var19.onChange = var23;
                var23 = var27[var21];
                var23 = var26.bind(var4)(var23);
                var25 = var23.intl;
                var24 = var25.string;
                var23 = var27[var21];
                var23 = var26.bind(var4)(var23);
                var23 = var23.t;
                var23 = var23.mFMDSq;
                var23 = var24.bind(var25)(var23);
                var19.title = var23;
                var23 = var27[var21];
                var23 = var26.bind(var4)(var23);
                var25 = var23.intl;
                var24 = var25.string;
                var23 = var27[var21];
                var23 = var26.bind(var4)(var23);
                var23 = var23.t;
                var23 = var23.h850Ss;
                var23 = var24.bind(var25)(var23);
                var19.accessibilityLabel = var23;
                var23 = {};
                var24 = var27[var21];
                var24 = var26.bind(var4)(var24);
                var28 = var24.intl;
                var25 = var28.string;
                var24 = var27[var21];
                var24 = var26.bind(var4)(var24);
                var24 = var24.t;
                var24 = var24["NJFr+g"];
                var24 = var25.bind(var28)(var24);
                var23.label = var24;
                var24 = 7;
                var25 = var27[var24];
                var25 = var26.bind(var4)(var25);
                var25 = var25.ForumLayout;
                var25 = var25.LIST;
                var23.value = var25;
                var25 = new Array(2);
                var25[0] = var23;
                var23 = {};
                var28 = var27[var21];
                var28 = var26.bind(var4)(var28);
                var30 = var28.intl;
                var29 = var30.string;
                var28 = var27[var21];
                var28 = var26.bind(var4)(var28);
                var28 = var28.t;
                var28 = var28.wKeggb;
                var28 = var29.bind(var30)(var28);
                var23.label = var28;
                var24 = var27[var24];
                var24 = var26.bind(var4)(var24);
                var24 = var24.ForumLayout;
                var24 = var24.GRID;
                var23.value = var24;
                var25[1] = var23;
                var24 = var25.map;
                var23 = function(arg0) { // Environment: var15
                    var0 = arg0;
                    var5 = var0.label;
                    var4 = var0.value;
                    var3 = _closure1_slot8;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 19;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.TableRadioRow;
                    var0 = {};
                    var0.label = var5;
                    var0.value = var4;
                    var0 = var3.bind(var2)(var1, var0, var4);
                    return var0;
                };
                var23 = var24.bind(var25)(var23);
                var19.children = var23;
                var11 = var22.bind(var4)(var20, var19);
            case 1368:
                var10[1] = var11;
                var11 = null;
                if (!var14) {
                    _fun91407_ip = 1724;
                    continue _fun91407
                }
            case 1380:
                var14 = _closure1_slot8;
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var12 = var20[var12];
                var12 = var19.bind(var4)(var12);
                var13 = var12.TableRadioGroup;
                var12 = {};
                var12.groupRef = var18;
                var12.hasIcons = var17;
                var12.defaultValue = var16;
                var16 = function arg0() {
                    var2 = _closure2_slot10;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var12.onChange = var16;
                var16 = var20[var21];
                var16 = var19.bind(var4)(var16);
                var18 = var16.intl;
                var17 = var18.string;
                var16 = var20[var21];
                var16 = var19.bind(var4)(var16);
                var16 = var16.t;
                var16 = var16.Paxaug;
                var16 = var17.bind(var18)(var16);
                var12.title = var16;
                var16 = var20[var21];
                var16 = var19.bind(var4)(var16);
                var18 = var16.intl;
                var17 = var18.string;
                var16 = var20[var21];
                var16 = var19.bind(var4)(var16);
                var16 = var16.t;
                var16 = var16.f8wNDl;
                var16 = var17.bind(var18)(var16);
                var12.accessibilityLabel = var16;
                var16 = {};
                var17 = var20[var21];
                var17 = var19.bind(var4)(var17);
                var22 = var17.intl;
                var18 = var22.string;
                var17 = var20[var21];
                var17 = var19.bind(var4)(var17);
                var17 = var17.t;
                var17 = var17.rQ0ctQ;
                var17 = var18.bind(var22)(var17);
                var16.label = var17;
                var18 = 8;
                var17 = var20[var18];
                var17 = var19.bind(var4)(var17);
                var17 = var17.ThreadSearchTagSetting;
                var17 = var17.MATCH_SOME;
                var16.value = var17;
                var17 = new Array(2);
                var17[0] = var16;
                var16 = {};
                var22 = var20[var21];
                var22 = var19.bind(var4)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var20[var21];
                var21 = var19.bind(var4)(var21);
                var21 = var21.t;
                var21 = var21.FCXUu0;
                var21 = var22.bind(var23)(var21);
                var16.label = var21;
                var18 = var20[var18];
                var18 = var19.bind(var4)(var18);
                var18 = var18.ThreadSearchTagSetting;
                var18 = var18.MATCH_ALL;
                var16.value = var18;
                var17[1] = var16;
                var16 = var17.map;
                var15 = function(arg0) { // Environment: var15
                    var0 = arg0;
                    var5 = var0.label;
                    var4 = var0.value;
                    var3 = _closure1_slot8;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 19;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.TableRadioRow;
                    var0 = {};
                    var0.label = var5;
                    var0.value = var4;
                    var0 = var3.bind(var2)(var1, var0, var4);
                    return var0;
                };
                var15 = var16.bind(var17)(var15);
                var12.children = var15;
                var11 = var14.bind(var4)(var13, var12);
            case 1724:
                var10[2] = var11;
                var7.children = var10;
                var7 = var9.bind(var4)(var8, var7);
                var5.children = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 1760:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1372, 11617, 33, 1234, 1381, 1382, 1383, 566, 4103, 6469, 5208, 5211, 5210, 4933, 4080, 671, 5422, 5421, 2]);