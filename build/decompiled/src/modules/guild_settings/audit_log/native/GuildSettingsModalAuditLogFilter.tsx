// modules/guild_settings/audit_log/native/GuildSettingsModalAuditLogFilter.tsx
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
    var9 = 1;
    var6 = var5[var9];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var7 = var3.StyleSheet;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.AuditLogFilterTypes;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var6 = var3.Fragment;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var6 = var7.create;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var3.container = var8;
    var8 = {};
    var9 = 7;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var8.paddingHorizontal = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.paddingVertical = var9;
    var3.searchBar = var8;
    var8 = {
        'height': 30,
        'width': 30,
        'alignItems': 'center'
    };
    var3.allUsersIconContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/audit_log/native/GuildSettingsModalAuditLogFilter.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: GuildSettingsModalAuditLogFilter, environment: var1
        _fun115506: for (var _fun115506_ip = 0;;) switch (_fun115506_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.data;
                var _closure2_slot0 = var2;
                var17 = var1.filterType;
                var _closure2_slot1 = var17;
                var7 = var1.guildId;
                var _closure2_slot2 = var7;
                var4 = _closure1_slot1;
                var15 = _closure1_slot2;
                var1 = 11;
                var1 = var15[var1];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var10 = var1.bottom;
                var13 = _closure1_slot0;
                var1 = 12;
                var1 = var15[var1];
                var4 = var13.bind(var3)(var1);
                var1 = var4.useNavigation;
                var1 = var1.bind(var4)();
                var _closure2_slot3 = var1;
                var4 = _closure1_slot4;
                var8 = var4.useState;
                var6 = '';
                var9 = var8.bind(var4)(var6);
                var8 = _closure1_slot3;
                var6 = 2;
                var8 = var8.bind(var3)(var9, var6);
                var16 = 0;
                var9 = var8[var16];
                var _closure2_slot4 = var9;
                var6 = 1;
                var14 = var8[var6];
                var8 = var4.useMemo;
                var6 = new Array(2);
                var6[0] = var9;
                var6[1] = var2;
                var2 = function() { // Environment: var0
                    var0 = {};
                    var4 = _closure2_slot0;
                    var3 = var4.filter;
                    var2 = function(arg0) { // Environment: var1
                        var1 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 13;
                        var0 = var2[var0];
                        var3 = undefined;
                        var2 = var1.bind(var3)(var0);
                        var1 = _closure2_slot4;
                        var0 = var1.toLowerCase;
                        var1 = var0.bind(var1)();
                        var0 = arg0;
                        var4 = var0.label;
                        var0 = var4.toLowerCase;
                        var0 = var0.bind(var4)();
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var0.data = var2;
                    var1 = function(arg0) { // Original name: keyExtractor, environment: var1
                        _fun115509: for (var _fun115509_ip = 0;;) switch (_fun115509_ip) {
                            case 0:
                                var1 = arg0;
                                var2 = var1.value;
                                var0 = null;
                                if (!(var0 == var2)) {
                                    _fun115509_ip = 30;
                                    continue _fun115509
                                }
                            case 14:
                                var2 = var1.index;
                                var0 = var2.toString;
                                var0 = var0.bind(var2)();
                                _fun115509_ip = 44;
                                continue _fun115509;
                            case 30:
                                var2 = var1.value;
                                var1 = var2.toString;
                                var0 = var1.bind(var2)();
                            case 44:
                                return var0;
                        }
                    };
                    var0.keyExtractor = var1;
                    return var0;
                };
                var2 = var8.bind(var4)(var2, var6);
                var9 = var2.data;
                var _closure2_slot5 = var9;
                var12 = var2.keyExtractor;
                var8 = var4.useEffect;
                var6 = new Array(2);
                var6[0] = var17;
                var6[1] = var1;
                var2 = function() { // Environment: var0
                    _fun115510: for (var _fun115510_ip = 0;;) switch (_fun115510_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var1 = var2.setOptions;
                            var0 = {};
                            var5 = _closure2_slot1;
                            var3 = _closure1_slot8;
                            var3 = var3.USER;
                            if (!(var3 !== var5)) {
                                _fun115510_ip = 171;
                                continue _fun115510
                            }
                        case 39:
                            var3 = _closure1_slot8;
                            var3 = var3.ACTION;
                            if (!(var3 !== var5)) {
                                _fun115510_ip = 112;
                                continue _fun115510
                            }
                        case 53:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var3 = 8;
                            var5 = var9[var3];
                            var7 = undefined;
                            var5 = var8.bind(var7)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var3 = var9[var3];
                            var3 = var8.bind(var7)(var3);
                            var3 = var3.t;
                            var3 = var3.pEasFX;
                            var3 = var5.bind(var6)(var3);
                            _fun115510_ip = 228;
                            continue _fun115510;
                        case 112:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var5 = 8;
                            var6 = var10[var5];
                            var8 = undefined;
                            var6 = var9.bind(var8)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var10[var5];
                            var5 = var9.bind(var8)(var5);
                            var5 = var5.t;
                            var5 = var5.rautds;
                            var3 = var6.bind(var7)(var5);
                            _fun115510_ip = 228;
                            continue _fun115510;
                        case 171:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var4 = 8;
                            var5 = var9[var4];
                            var7 = undefined;
                            var5 = var8.bind(var7)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var4 = var9[var4];
                            var4 = var8.bind(var7)(var4);
                            var4 = var4.t;
                            var4 = var4["hxnY/q"];
                            var3 = var5.bind(var6)(var4);
                        case 228:
                            var0.headerTitle = var3;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var8.bind(var4)(var2, var6);
                var6 = var4.useCallback;
                var2 = new Array(3);
                var2[0] = var17;
                var2[1] = var7;
                var2[2] = var1;
                var1 = function(arg0, arg1) { // Environment: var0
                    _fun115511: for (var _fun115511_ip = 0;;) switch (_fun115511_ip) {
                        case 0:
                            var1 = arg1;
                            var0 = arg0;
                            if (!var0) {
                                _fun115511_ip = 160;
                                continue _fun115511
                            }
                        case 12:
                            var4 = _closure2_slot1;
                            var3 = _closure1_slot8;
                            var3 = var3.USER;
                            if (!(var4 !== var3)) {
                                _fun115511_ip = 94;
                                continue _fun115511
                            }
                        case 36:
                            var4 = _closure2_slot1;
                            var3 = _closure1_slot8;
                            var3 = var3.ACTION;
                            if (!(var4 === var3)) {
                                _fun115511_ip = 146;
                                continue _fun115511
                            }
                        case 54:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 14;
                            var4 = var4[var3];
                            var3 = undefined;
                            var5 = var5.bind(var3)(var4);
                            var4 = var5.filterByAction;
                            var3 = _closure2_slot2;
                            var3 = var4.bind(var5)(var1, var3);
                            _fun115511_ip = 146;
                            continue _fun115511;
                        case 94:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 14;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.filterByUserId;
                            var2 = null;
                            var5 = var2 != var1;
                            if (!var5) {
                                _fun115511_ip = 136;
                                continue _fun115511
                            }
                        case 131:
                            var2 = var1.id;
                        case 136:
                            var1 = _closure2_slot2;
                            var1 = var3.bind(var4)(var2, var1);
                        case 146:
                            var1 = _closure2_slot3;
                            var0 = var1.pop;
                            var0 = var0.bind(var1)();
                        case 160:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var6.bind(var4)(var1, var2);
                var _closure2_slot6 = var6;
                var2 = var4.useCallback;
                var1 = new Array(4);
                var1[0] = var17;
                var1[1] = var7;
                var1[2] = var6;
                var6 = var9.length;
                var1[3] = var6;
                var0 = function(arg0) { // Environment: var0
                    _fun115512: for (var _fun115512_ip = 0;;) switch (_fun115512_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.item;
                            var10 = var1.value;
                            var _closure3_slot0 = var10;
                            var7 = var1.selected;
                            var _closure3_slot1 = var7;
                            var4 = var1.label;
                            var12 = var0.index;
                            var1 = _closure2_slot1;
                            var0 = _closure1_slot8;
                            var0 = var0.USER;
                            if (!(var1 === var0)) {
                                _fun115512_ip = 72;
                                continue _fun115512
                            }
                        case 63:
                            var0 = null;
                            if (!(var0 === var10)) {
                                _fun115512_ip = 377;
                                continue _fun115512
                            }
                        case 72:
                            var3 = _closure1_slot9;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 17;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.TableRow;
                            var0 = {};
                            var8 = 0;
                            var8 = var8 === var12;
                            var0.start = var8;
                            var8 = _closure2_slot5;
                            var11 = var8.length;
                            var8 = 1;
                            var8 = var11 - var8;
                            var8 = var12 === var8;
                            var0.end = var8;
                            var11 = _closure2_slot1;
                            var8 = _closure1_slot8;
                            var8 = var8.USER;
                            if (!(var11 !== var8)) {
                                _fun115512_ip = 196;
                                continue _fun115512
                            }
                        case 158:
                            var13 = _closure1_slot9;
                            var11 = _closure1_slot1;
                            var14 = _closure1_slot2;
                            var8 = 20;
                            var8 = var14[var8];
                            var11 = var11.bind(var2)(var8);
                            var8 = {};
                            var8.action = var10;
                            var8 = var13.bind(var2)(var11, var8);
                            _fun115512_ip = 299;
                            continue _fun115512;
                        case 196:
                            var14 = _closure1_slot9;
                            var13 = _closure1_slot5;
                            var11 = {};
                            var15 = _closure1_slot12;
                            var15 = var15.allUsersIconContainer;
                            var11.style = var15;
                            var18 = _closure1_slot1;
                            var19 = _closure1_slot2;
                            var17 = 18;
                            var15 = var19[var17];
                            var16 = var18.bind(var2)(var15);
                            var15 = {};
                            var17 = var19[var17];
                            var17 = var18.bind(var2)(var17);
                            var17 = var17.Sizes;
                            var17 = var17.MEDIUM;
                            var15.size = var17;
                            var17 = 19;
                            var17 = var19[var17];
                            var17 = var18.bind(var2)(var17);
                            var15.source = var17;
                            var15 = var14.bind(var2)(var16, var15);
                            var11.children = var15;
                            var8 = var14.bind(var2)(var13, var11);
                        case 299:
                            var0.icon = var8;
                            var0.label = var4;
                            var4 = function() { // Original name: onPress, environment: var6
                                var3 = _closure2_slot6;
                                var1 = _closure3_slot1;
                                var2 = !var1;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var3.bind(var0)(var2, var1);
                                return var0;
                            };
                            var0.onPress = var4;
                            var11 = _closure1_slot9;
                            var8 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var4 = 16;
                            var4 = var13[var4];
                            var4 = var8.bind(var2)(var4);
                            var8 = var4.FormRadio;
                            var4 = {};
                            var4.selected = var7;
                            var4 = var11.bind(var2)(var8, var4);
                            var0.trailing = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            _fun115512_ip = 513;
                            continue _fun115512;
                        case 377:
                            var4 = _closure1_slot9;
                            var2 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var1 = 15;
                            var1 = var8[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var11 = 0;
                            var11 = var11 === var12;
                            var1.start = var11;
                            var11 = _closure2_slot5;
                            var13 = var11.length;
                            var11 = 1;
                            var11 = var13 - var11;
                            var11 = var12 === var11;
                            var1.end = var11;
                            var10 = var10.id;
                            var1.userId = var10;
                            var9 = _closure2_slot2;
                            var1.guildId = var9;
                            var6 = function() { // Original name: onPress, environment: var6
                                var3 = _closure2_slot6;
                                var1 = _closure3_slot1;
                                var2 = !var1;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var3.bind(var0)(var2, var1);
                                return var0;
                            };
                            var1.onPress = var6;
                            var6 = _closure1_slot0;
                            var5 = 16;
                            var5 = var8[var5];
                            var5 = var6.bind(var3)(var5);
                            var6 = var5.FormRadio;
                            var5 = {};
                            var5.selected = var7;
                            var5 = var4.bind(var3)(var6, var5);
                            var1.trailing = var5;
                            var0 = var4.bind(var3)(var2, var1);
                        case 513:
                            return var0;
                    }
                };
                var11 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot11;
                var1 = _closure1_slot10;
                var0 = {};
                var7 = _closure1_slot9;
                var6 = _closure1_slot5;
                var4 = {};
                var8 = _closure1_slot12;
                var8 = var8.searchBar;
                var4.style = var8;
                var8 = 21;
                var8 = var15[var8];
                var8 = var13.bind(var3)(var8);
                var13 = var8.SearchField;
                var8 = {};
                var15 = 'md';
                var8.size = var15;
                var15 = _closure1_slot8;
                var15 = var15.USER;
                if (!(var17 !== var15)) {
                    _fun115506_ip = 510;
                    continue _fun115506
                }
            case 380:
                var15 = _closure1_slot8;
                var15 = var15.ACTION;
                if (!(var17 !== var15)) {
                    _fun115506_ip = 451;
                    continue _fun115506
                }
            case 394:
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var15 = 8;
                var17 = var20[var15];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var15 = var20[var15];
                var15 = var19.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15["5h0QOP"];
                var15 = var17.bind(var18)(var15);
                _fun115506_ip = 508;
                continue _fun115506;
            case 451:
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var17 = 8;
                var18 = var21[var17];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var21[var17];
                var17 = var20.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.I288Zx;
                var15 = var18.bind(var19)(var17);
            case 508:
                _fun115506_ip = 565;
                continue _fun115506;
            case 510:
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var17 = 8;
                var18 = var21[var17];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var21[var17];
                var17 = var20.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.pYHobK;
                var15 = var18.bind(var19)(var17);
            case 565:
                var8.placeholder = var15;
                var8.onChange = var14;
                var8 = var7.bind(var3)(var13, var8);
                var4.children = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(3);
                var4[0] = var6;
                var6 = var9.length;
                if (!(var16 !== var6)) {
                    _fun115506_ip = 716;
                    continue _fun115506
                }
            case 608:
                var8 = _closure1_slot9;
                var7 = _closure1_slot0;
                var13 = _closure1_slot2;
                var6 = 24;
                var6 = var13[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.FlashList;
                var6 = {};
                var6.keyExtractor = var12;
                var6.renderItem = var11;
                var11 = 50;
                var6.estimatedItemSize = var11;
                var6.data = var9;
                var9 = {};
                var12 = _closure1_slot1;
                var11 = 7;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.spacing;
                var11 = var11.PX_12;
                var9.paddingHorizontal = var11;
                var9.paddingBottom = var10;
                var6.contentContainerStyle = var9;
                var6 = var8.bind(var3)(var7, var6);
                _fun115506_ip = 882;
                continue _fun115506;
            case 716:
                var9 = _closure1_slot9;
                var8 = _closure1_slot1;
                var12 = _closure1_slot2;
                var7 = 22;
                var7 = var12[var7];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var11 = _closure1_slot0;
                var10 = 8;
                var13 = var12[var10];
                var13 = var11.bind(var3)(var13);
                var15 = var13.intl;
                var14 = var15.string;
                var13 = var12[var10];
                var13 = var11.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.V6nAfF;
                var13 = var14.bind(var15)(var13);
                var7.body = var13;
                var13 = var12[var10];
                var13 = var11.bind(var3)(var13);
                var15 = var13.intl;
                var14 = var15.formatToPlainString;
                var10 = var12[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.t;
                var13 = var10.ZGVL3g;
                var10 = {};
                var10.count = var16;
                var10 = var14.bind(var15)(var13, var10);
                var7.title = var10;
                var10 = 23;
                var10 = var12[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.NoResults;
                var7.Illustration = var10;
                var6 = var9.bind(var3)(var8, var7);
            case 882:
                var4[1] = var6;
                var7 = _closure1_slot9;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 25;
                var5 = var8[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.NavScrim;
                var5 = {};
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var3 = function(arg0) { // Original name: createAuditLogFilterUserData, environment: var1
        var6 = arg0;
        var _closure2_slot0 = var6;
        var0 = new Array(0);
        var _closure2_slot1 = var0;
        var4 = var0.push;
        var3 = {};
        var10 = _closure1_slot0;
        var11 = _closure1_slot2;
        var5 = 8;
        var7 = var11[var5];
        var9 = undefined;
        var7 = var10.bind(var9)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var5 = var11[var5];
        var5 = var10.bind(var9)(var5);
        var5 = var5.t;
        var5 = var5.ZRFdsL;
        var5 = var7.bind(var8)(var5);
        var3.label = var5;
        var5 = null;
        var3.value = var5;
        var5 = var5 == var6;
        var3.selected = var5;
        var5 = 0;
        var3.index = var5;
        var3 = var4.bind(var0)(var3);
        var3 = global;
        var3 = var3.Set;
        var4 = var3.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var3
            }
        });
        var13 = var4;
        var3 = new var13[var3](var12);
        var3 = var3 instanceof Object ? var3 : var4;
        var _closure2_slot2 = var3;
        var3 = function(arg0) { // Original name: userIdResolver, environment: var1
            _fun115516: for (var _fun115516_ip = 0;;) switch (_fun115516_ip) {
                case 0:
                    var2 = arg0;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun115516_ip = 155;
                        continue _fun115516
                    }
                case 12:
                    var3 = _closure1_slot6;
                    var0 = var3.getUser;
                    var4 = var0.bind(var3)(var2);
                    var6 = _closure2_slot2;
                    var0 = var6.has;
                    var0 = var0.bind(var6)(var2);
                    if (var0) {
                        _fun115516_ip = 54;
                        continue _fun115516
                    }
                case 50:
                    var0 = var1 == var4;
                case 54:
                    if (var0) {
                        _fun115516_ip = 155;
                        continue _fun115516
                    }
                case 57:
                    var1 = _closure2_slot2;
                    var0 = var1.add;
                    var0 = var0.bind(var1)(var2);
                    var2 = _closure2_slot1;
                    var1 = var2.push;
                    var0 = {};
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var5 = 9;
                    var6 = var6[var5];
                    var5 = undefined;
                    var6 = var7.bind(var5)(var6);
                    var5 = var6.getUserTag;
                    var5 = var5.bind(var6)(var4);
                    var0.label = var5;
                    var0.value = var4;
                    var4 = var4.id;
                    var3 = _closure2_slot0;
                    var3 = var4 === var3;
                    var0.selected = var3;
                    var3 = var2.length;
                    var0.index = var3;
                    var0 = var1.bind(var2)(var0);
                case 155:
                    var0 = undefined;
                    return var0;
            }
        };
        var _closure2_slot3 = var3;
        var2 = _closure1_slot7;
        var5 = var2.logs;
        var4 = var5.forEach;
        var3 = function(arg0) { // Environment: var1
            var0 = arg0;
            var2 = var0.userId;
            var1 = _closure2_slot3;
            var0 = undefined;
            var1 = var1.bind(var0)(var2);
            return var0;
        };
        var3 = var4.bind(var5)(var3);
        var4 = var2.userIds;
        var3 = var4.forEach;
        var2 = function(arg0) { // Environment: var1
            var2 = _closure2_slot3;
            var0 = undefined;
            var1 = arg0;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var2 = var3.bind(var4)(var2);
        var2 = var0.sort;
        var1 = function(arg0, arg1) { // Environment: var1
            _fun115519: for (var _fun115519_ip = 0;;) switch (_fun115519_ip) {
                case 0:
                    var3 = arg0;
                    var2 = arg1;
                    var1 = var3.selected;
                    var0 = -1;
                    if (var1) {
                        _fun115519_ip = 50;
                        continue _fun115519
                    }
                case 21:
                    var4 = var2.selected;
                    var1 = 1;
                    if (var4) {
                        _fun115519_ip = 47;
                        continue _fun115519
                    }
                case 33:
                    var3 = var3.index;
                    var2 = var2.index;
                    var1 = var3 - var2;
                case 47:
                    var0 = var1;
                case 50:
                    return var0;
            }
        };
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var2.createAuditLogFilterUserData = var3;
    var1 = function(arg0) { // Original name: createAuditLogFilterActionData, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.ACTION_FILTER_ITEMS;
        var3 = var1.bind(var2)();
        var2 = var3.map;
        var1 = function(arg0, arg1) { // Environment: var0
            var1 = arg0;
            var0 = {};
            var2 = var1.label;
            var0.label = var2;
            var2 = var1.value;
            var0.value = var2;
            var2 = _closure2_slot0;
            var1 = var1.value;
            var1 = var2 === var1;
            var0.selected = var1;
            var1 = arg1;
            var0.index = var1;
            return var0;
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.sort;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun115522: for (var _fun115522_ip = 0;;) switch (_fun115522_ip) {
                case 0:
                    var3 = arg0;
                    var2 = arg1;
                    var1 = var3.selected;
                    var0 = -1;
                    if (var1) {
                        _fun115522_ip = 50;
                        continue _fun115522
                    }
                case 21:
                    var4 = var2.selected;
                    var1 = 1;
                    if (var4) {
                        _fun115522_ip = 47;
                        continue _fun115522
                    }
                case 33:
                    var3 = var3.index;
                    var2 = var2.index;
                    var1 = var3 - var2;
                case 47:
                    var0 = var1;
                case 50:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.createAuditLogFilterActionData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1613, 14684, 660, 33, 671, 1234, 3195, 14686, 1568, 1469, 5560, 14696, 9088, 5380, 4854, 4039, 8588, 14697, 6969, 7318, 7319, 5711, 5160, 2]);