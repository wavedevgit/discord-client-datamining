// modules/main_tabs_v2/native/shared_components/user_list/NewMessagesTagListInput.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun106362: for (var _fun106362_ip = 0;;) switch (_fun106362_ip) {
        case 0:
            var4 = require;
            var12 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var12;
            var _closure1_slot2 = var5;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var3);
            var13 = 0;
            var6 = var5[var13];
            var3 = metroImportAll;
            var0 = undefined;
            var6 = var3.bind(var0)(var6);
            var _closure1_slot3 = var6;
            var3 = 1;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.View;
            var _closure1_slot4 = var3;
            var14 = 2;
            var3 = var5[var14];
            var3 = var12.bind(var0)(var3);
            var _closure1_slot5 = var3;
            var3 = 3;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var8 = var3.jsx;
            var _closure1_slot6 = var8;
            var3 = 4;
            var3 = var5[var3];
            var9 = var4.bind(var0)(var3);
            var7 = var9.createStyles;
            var3 = {};
            var10 = {};
            var11 = 5;
            var15 = var5[var11];
            var15 = var12.bind(var0)(var15);
            var15 = var15.spacing;
            var15 = var15.PX_16;
            var10.paddingHorizontal = var15;
            var15 = var5[var11];
            var15 = var12.bind(var0)(var15);
            var15 = var15.spacing;
            var15 = var15.PX_8;
            var10.paddingBottom = var15;
            var15 = var5[var11];
            var15 = var12.bind(var0)(var15);
            var15 = var15.colors;
            var15 = var15.BACKGROUND_BASE_LOWER;
            var10.backgroundColor = var15;
            var3.searchBarContainer = var10;
            var10 = {};
            var15 = var5[var11];
            var15 = var12.bind(var0)(var15);
            var15 = var15.spacing;
            var15 = var15.PX_12;
            var10.marginLeft = var15;
            var15 = 6;
            var15 = var5[var15];
            var16 = var4.bind(var0)(var15);
            var15 = var16.isAndroid;
            var15 = var15.bind(var16)();
            if (!var15) {
                _fun106362_ip = 292;
                continue _fun106362
            }
        case 289:
            var13 = var14;
        case 292:
            var10.marginBottom = var13;
            var3.header = var10;
            var10 = {};
            var11 = var5[var11];
            var11 = var12.bind(var0)(var11);
            var11 = var11.spacing;
            var11 = var11.PX_12;
            var10.marginHorizontal = var11;
            var3.showSearchButton = var10;
            var3 = var7.bind(var9)(var3);
            var _closure1_slot7 = var3;
            var3 = 7;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var7 = var3.ChevronLargeRightIcon;
            var3 = {};
            var9 = 'xs';
            var3.size = var9;
            var3 = var8.bind(var0)(var7, var3);
            var _closure1_slot8 = var3;
            var3 = 8;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var7 = var3.CirclePlusIcon;
            var3 = {};
            var3.size = var9;
            var3 = var8.bind(var0)(var7, var3);
            var _closure1_slot9 = var3;
            var3 = var6.memo;
            var1 = function arg0() {
                _fun106363: for (var _fun106363_ip = 0;;) switch (_fun106363_ip) {
                    case 0:
                        var1 = arg0;
                        var11 = var1.autoFocus;
                        var13 = var1.onChangeText;
                        var10 = var1.onFocus;
                        var0 = var1.onSelectUser;
                        var _closure2_slot0 = var0;
                        var0 = var1.selectedUserIds;
                        var _closure2_slot1 = var0;
                        var14 = var1.hasQuery;
                        var18 = var1.onForceSearchResults;
                        var17 = var1.forceSearchResults;
                        var6 = var1.tagListInputRef;
                        var1 = _closure1_slot7;
                        var3 = undefined;
                        var8 = var1.bind(var3)();
                        var4 = _closure1_slot3;
                        var2 = var4.useMemo;
                        var1 = new Array(1);
                        var1[0] = var0;
                        var0 = function() { // Environment: var9
                            _fun106364: for (var _fun106364_ip = 0;;) switch (_fun106364_ip) {
                                case 0:
                                    var2 = _closure2_slot1;
                                    var1 = null;
                                    if (!(var1 == var2)) {
                                        _fun106364_ip = 19;
                                        continue _fun106364
                                    }
                                case 13:
                                    var3 = new Array(0);
                                    _fun106364_ip = 23;
                                    continue _fun106364;
                                case 19:
                                    var3 = _closure2_slot1;
                                case 23:
                                    var2 = var3.map;
                                    var1 = _closure1_slot5;
                                    var1 = var1.getUser;
                                    var3 = var2.bind(var3)(var1);
                                    var2 = var3.filter;
                                    var6 = _closure1_slot0;
                                    var5 = _closure1_slot2;
                                    var1 = 9;
                                    var1 = var5[var1];
                                    var4 = undefined;
                                    var1 = var6.bind(var4)(var1);
                                    var1 = var1.isNotNullish;
                                    var2 = var2.bind(var3)(var1);
                                    var1 = var2.map;
                                    var3 = _closure1_slot1;
                                    var0 = 10;
                                    var0 = var5[var0];
                                    var0 = var3.bind(var4)(var0);
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var7 = var2.bind(var4)(var0, var1);
                        var _closure2_slot2 = var7;
                        var2 = _closure1_slot6;
                        var1 = _closure1_slot4;
                        var0 = {};
                        var4 = var8.searchBarContainer;
                        var0.style = var4;
                        var5 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var4 = 11;
                        var4 = var15[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = {};
                        var4.autoFocus = var11;
                        var11 = true;
                        var4.focusOnAdd = var11;
                        var11 = null;
                        if (var14) {
                            _fun106363_ip = 351;
                            continue _fun106363
                        }
                    case 176:
                        var16 = var7.length;
                        var14 = 0;
                        var14 = var16 > var14;
                        var11 = null;
                        if (!var14) {
                            _fun106363_ip = 351;
                            continue _fun106363
                        }
                    case 195:
                        var16 = _closure1_slot6;
                        var15 = _closure1_slot0;
                        var19 = _closure1_slot2;
                        var14 = 12;
                        var14 = var19[var14];
                        var14 = var15.bind(var3)(var14);
                        var15 = var14.PressableOpacity;
                        var14 = {};
                        var19 = 'button';
                        var14.accessibilityRole = var19;
                        var20 = _closure1_slot0;
                        var23 = _closure1_slot2;
                        var19 = 13;
                        var21 = var23[var19];
                        var21 = var20.bind(var3)(var21);
                        var22 = var21.intl;
                        var21 = var22.string;
                        var19 = var23[var19];
                        var19 = var20.bind(var3)(var19);
                        var20 = var19.t;
                        if (var17) {
                            _fun106363_ip = 297;
                            continue _fun106363
                        }
                    case 282:
                        var19 = var20.fTcQm2;
                        var19 = var21.bind(var22)(var19);
                        _fun106363_ip = 310;
                        continue _fun106363;
                    case 297:
                        var20 = var20["4wv+DE"];
                        var19 = var21.bind(var22)(var20);
                    case 310:
                        var14.accessibilityLabel = var19;
                        var14.onPress = var18;
                        var18 = var8.showSearchButton;
                        var14.style = var18;
                        if (var17) {
                            _fun106363_ip = 337;
                            continue _fun106363
                        }
                    case 331:
                        var17 = _closure1_slot9;
                        _fun106363_ip = 341;
                        continue _fun106363;
                    case 337:
                        var17 = _closure1_slot8;
                    case 341:
                        var14.children = var17;
                        var11 = var16.bind(var3)(var15, var14);
                    case 351:
                        var4.footer = var11;
                        var16 = _closure1_slot6;
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var14 = 14;
                        var14 = var12[var14];
                        var14 = var11.bind(var3)(var14);
                        var15 = var14.Text;
                        var14 = {
                            'style': null,
                            'variant': 'text-sm/medium',
                            'color': 'text-muted',
                            'accessible': false
                        };
                        var8 = var8.header;
                        var14.style = var8;
                        var8 = 13;
                        var17 = var12[var8];
                        var17 = var11.bind(var3)(var17);
                        var19 = var17.intl;
                        var18 = var19.string;
                        var17 = var12[var8];
                        var17 = var11.bind(var3)(var17);
                        var17 = var17.t;
                        var17 = var17.kHyiXs;
                        var17 = var18.bind(var19)(var17);
                        var14.children = var17;
                        var14 = var16.bind(var3)(var15, var14);
                        var4.icon = var14;
                        var4.onChangeText = var13;
                        var4.onFocus = var10;
                        var9 = function arg0() {
                            _fun106365: for (var _fun106365_ip = 0;;) switch (_fun106365_ip) {
                                case 0:
                                    var2 = _closure2_slot2;
                                    var0 = arg0;
                                    var6 = var2[var0];
                                    var4 = _closure1_slot5;
                                    var3 = var4.getUser;
                                    var2 = var6.id;
                                    var2 = var3.bind(var4)(var2);
                                    var3 = null;
                                    if (!(var3 != var2)) {
                                        _fun106365_ip = 150;
                                        continue _fun106365
                                    }
                                case 43:
                                    var1 = _closure2_slot0;
                                    var7 = undefined;
                                    var1 = var1.bind(var7)(var2);
                                    var3 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var0 = 15;
                                    var0 = var8[var0];
                                    var0 = var3.bind(var7)(var0);
                                    var2 = var0.AccessibilityAnnouncer;
                                    var1 = var2.announce;
                                    var0 = 13;
                                    var4 = var8[var0];
                                    var4 = var3.bind(var7)(var4);
                                    var5 = var4.intl;
                                    var4 = var5.formatToPlainString;
                                    var0 = var8[var0];
                                    var0 = var3.bind(var7)(var0);
                                    var0 = var0.t;
                                    var3 = var0.srlxB8;
                                    var0 = {};
                                    var6 = var6.text;
                                    var0.text = var6;
                                    var0 = var4.bind(var5)(var3, var0);
                                    var0 = var1.bind(var2)(var0);
                                case 150:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var4.onRemove = var9;
                        var9 = var12[var8];
                        var9 = var11.bind(var3)(var9);
                        var10 = var9.intl;
                        var9 = var10.string;
                        var8 = var12[var8];
                        var8 = var11.bind(var3)(var8);
                        var8 = var8.t;
                        var8 = var8.CaEER6;
                        var8 = var9.bind(var10)(var8);
                        var4.placeholder = var8;
                        var4.tags = var7;
                        var4.ref = var6;
                        var4 = var2.bind(var3)(var5, var4);
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var1 = var3.bind(var6)(var1);
            var3 = 16;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/main_tabs_v2/native/shared_components/user_list/NewMessagesTagListInput.tsx';
            var3 = var4.bind(var5)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1621, 33, 1297, 671, 478, 13836, 10771, 1304, 8906, 8274, 4880, 1234, 3938, 3162, 2]);