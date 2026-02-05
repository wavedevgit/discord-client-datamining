// modules/activities/panel/native/ActivityInviteSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun110496: for (var _fun110496_ip = 0;;) switch (_fun110496_ip) {
            case 0:
                var0 = _closure1_slot17;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var5 = new Array(0);
                var1 = 11;
                var0 = 10;
                var2 = 0;
            case 25:
                var7 = var5.push;
                var10 = _closure1_slot14;
                var8 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var1];
                var8 = var8.bind(var3)(var4);
                var4 = {};
                var4.row = var2;
                var4 = var10.bind(var3)(var8, var4, var2);
                var4 = var7.bind(var5)(var4);
                var2 = var2 + 1;
                if (var2 < var0) {
                    _fun110496_ip = 25;
                    continue _fun110496
                }
            case 77:
                var2 = _closure1_slot16;
                var1 = _closure1_slot15;
                var0 = {};
                var8 = _closure1_slot14;
                var7 = _closure1_slot5;
                var4 = {};
                var10 = var9.placeholderHeader;
                var4.style = var10;
                var7 = var8.bind(var3)(var7, var4);
                var4 = new Array(3);
                var4[0] = var7;
                var8 = _closure1_slot14;
                var7 = _closure1_slot5;
                var6 = {};
                var9 = var9.placeholderLabel;
                var6.style = var9;
                var6 = var8.bind(var3)(var7, var6);
                var4[1] = var6;
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var9 = 0;
    var3 = var5[var9];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var12 = 1;
    var6 = var5[var12];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.setSendState;
    var _closure1_slot7 = var6;
    var3 = var3.useInstantInviteSendStates;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityActionTypes;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.InviteSendStates;
    var _closure1_slot11 = var6;
    var3 = var3.InviteTargetTypes;
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NOOP_NULL;
    var _closure1_slot13 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot14 = var6;
    var6 = var3.Fragment;
    var _closure1_slot15 = var6;
    var3 = var3.jsxs;
    var _closure1_slot16 = var3;
    var3 = 9;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'height': 16,
        'width': '80%',
        'margin': 16,
        'marginBottom': 8
    };
    var10 = 10;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var8.borderRadius = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_MUTED;
    var8.backgroundColor = var13;
    var3.placeholderHeader = var8;
    var8 = {
        'height': 16,
        'width': '40%',
        'margin': 16
    };
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var8.borderRadius = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_MUTED;
    var8.backgroundColor = var13;
    var3.placeholderLabel = var8;
    var8 = {};
    var13 = 'transparent';
    var8.backgroundColor = var13;
    var3.errorEmptyState = var8;
    var8 = {};
    var8.borderTopWidth = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var8.borderColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.marginTop = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.paddingVertical = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var8.paddingHorizontal = var12;
    var12 = 'column';
    var8.flexDirection = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var8.gap = var12;
    var3.searchAndShareContainer = var8;
    var8 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.paddingBottom = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_4;
    var8.paddingHorizontal = var10;
    var3.inviteAgeText = var8;
    var8 = {};
    var8.paddingVertical = var9;
    var3.shareApps = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot17 = var3;
    var3 = 29;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/panel/native/ActivityInviteSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun110497: for (var _fun110497_ip = 0;;) switch (_fun110497_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.activity;
                var _closure2_slot0 = var1;
                var0 = _closure1_slot17;
                var3 = undefined;
                var13 = var0.bind(var3)();
                var5 = _closure1_slot1;
                var10 = _closure1_slot2;
                var0 = 12;
                var0 = var10[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var16 = var0.bottom;
                var0 = 13;
                var2 = var10[var0];
                var4 = var5.bind(var3)(var2);
                var2 = 14;
                var2 = var10[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.ACTIVITY_INVITE_SHEET;
                var2 = var4.bind(var3)(var2);
                var4 = var2.analyticsLocations;
                var _closure2_slot1 = var4;
                var8 = _closure1_slot4;
                var2 = var8.useState;
                var18 = null;
                var5 = var2.bind(var8)(var18);
                var7 = _closure1_slot3;
                var2 = 2;
                var9 = var7.bind(var3)(var5, var2);
                var5 = 0;
                var11 = var9[var5];
                var6 = 1;
                var9 = var9[var6];
                var _closure2_slot2 = var9;
                var14 = _closure1_slot8;
                var9 = function(arg0) { // Environment: var17
                    var0 = arg0;
                    return var0;
                };
                var9 = var14.bind(var3)(var9);
                var _closure2_slot3 = var9;
                var15 = var8.useCallback;
                var14 = new Array(2);
                var14[0] = var1;
                var14[1] = var9;
                var9 = function(arg0) { // Environment: var17
                    _fun110499: for (var _fun110499_ip = 0;;) switch (_fun110499_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var0 = var0.party;
                            var4 = null;
                            var3 = var4 == var0;
                            var5 = undefined;
                            if (var3) {
                                _fun110499_ip = 29;
                                continue _fun110499
                            }
                        case 24:
                            var5 = var0.id;
                        case 29:
                            var0 = arg0;
                            var0 = var0.item;
                            var3 = var0.id;
                            var6 = var4 != var5;
                            var0 = null;
                            if (!var6) {
                                _fun110499_ip = 75;
                                continue _fun110499
                            }
                        case 51:
                            var2 = _closure2_slot3;
                            var2 = var2[var5];
                            var4 = var4 == var2;
                            var1 = undefined;
                            if (var4) {
                                _fun110499_ip = 72;
                                continue _fun110499
                            }
                        case 68:
                            var1 = var2[var3];
                        case 72:
                            var0 = var1;
                        case 75:
                            return var0;
                    }
                };
                var22 = var15.bind(var8)(var9, var14);
                var15 = var8.useCallback;
                var14 = new Array(1);
                var14[0] = var4;
                var9 = function(arg0) { // Environment: var17
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 15;
                    var1 = var3[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var1 = var4.hideActionSheet;
                    var1 = var1.bind(var4)();
                    var1 = 16;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var3 = arg0;
                    var1.userId = var3;
                    var3 = _closure2_slot1;
                    var1.sourceAnalyticsLocations = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var20 = var15.bind(var8)(var9, var14);
                var14 = var8.useCallback;
                var9 = new Array(1);
                var9[0] = var1;
                var1 = function(arg0) { // Environment: var17
                    _fun110501: for (var _fun110501_ip = 0;;) switch (_fun110501_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = var0;
                            var _closure3_slot0 = var0;
                            var0 = undefined;
                            var10 = undefined;
                            var9 = undefined;
                            var3 = function() {
                                _fun110502: for (var _fun110502_ip = 0;;) switch (_fun110502_ip) {
                                    case 0:
                                        var2 = _closure3_slot1;
                                        var0 = null;
                                        if (!(var0 != var2)) {
                                            _fun110502_ip = 57;
                                            continue _fun110502
                                        }
                                    case 13:
                                        var4 = _closure1_slot7;
                                        var3 = _closure3_slot1;
                                        var1 = _closure3_slot0;
                                        var1 = var1.item;
                                        var2 = var1.id;
                                        var0 = _closure1_slot11;
                                        var1 = var0.SENT;
                                        var0 = undefined;
                                        var0 = var4.bind(var0)(var3, var2, var1);
                                    case 57:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var6 = _closure2_slot0;
                            var5 = null;
                            if (!(var5 != var6)) {
                                _fun110501_ip = 548;
                                continue _fun110501
                            }
                        case 41:
                            var6 = _closure2_slot0;
                            var6 = var6.party;
                            var7 = var5 == var6;
                            var12 = undefined;
                            if (var7) {
                                _fun110501_ip = 65;
                                continue _fun110501
                            }
                        case 60:
                            var12 = var6.id;
                        case 65:
                            var _closure3_slot1 = var12;
                            if (!(var5 != var12)) {
                                _fun110501_ip = 548;
                                continue _fun110501
                            }
                        case 76:
                            var11 = _closure1_slot7;
                            var5 = var4;
                            var6 = var5.item;
                            var8 = var6.id;
                            var6 = _closure1_slot11;
                            var6 = var6.SENDING;
                            var6 = var11.bind(var0)(var12, var8, var6);
                            var6 = var5.type;
                            var8 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var11 = 17;
                            var5 = var5[var11];
                            var5 = var8.bind(var0)(var5);
                            var5 = var5.RowTypes;
                            var5 = var5.CHANNEL;
                            if (!(var6 !== var5)) {
                                _fun110501_ip = 402;
                                continue _fun110501
                            }
                        case 157:
                            var5 = var4;
                            var6 = var5.type;
                            var8 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var5 = var5[var11];
                            var5 = var8.bind(var0)(var5);
                            var5 = var5.RowTypes;
                            var5 = var5.DM;
                            if (!(var6 !== var5)) {
                                _fun110501_ip = 242;
                                continue _fun110501
                            }
                        case 198:
                            var5 = var4;
                            var6 = var5.type;
                            var8 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var5 = var5[var11];
                            var5 = var8.bind(var0)(var5);
                            var5 = var5.RowTypes;
                            var5 = var5.FRIEND;
                            if (!(var6 === var5)) {
                                _fun110501_ip = 548;
                                continue _fun110501
                            }
                        case 242:
                            var5 = var4;
                            var5 = var5.item;
                            var9 = var5.id;
                        case 255: // try_start_0
                            var11 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var5 = 18;
                            var5 = var12[var5];
                            var8 = var11.bind(var0)(var5);
                            var6 = var8.sendActivityInviteUser;
                            var5 = {};
                            var5.userId = var9;
                            var9 = _closure1_slot10;
                            var9 = var9.JOIN;
                            var5.type = var9;
                            var9 = _closure2_slot0;
                            var5.activity = var9;
                            var9 = 14;
                            var9 = var12[var9];
                            var9 = var11.bind(var0)(var9);
                            var9 = var9.ACTIVITY_INVITE_SHEET;
                            var5.location = var9;
                            var8 = var6.bind(var8)(var5);
                            var6 = var8.then;
                            var5 = var3;
                            var8 = var6.bind(var8)(var5);
                            var6 = var8.catch;
                            var5 = function(arg0) { // Environment: var2
                                var2 = _closure2_slot2;
                                var0 = global;
                                var3 = var0.String;
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var3.bind(var1)(var0);
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            var5 = var6.bind(var8)(var5);
                        case 368: // try_end0
                            _fun110501_ip = 548;
                            continue _fun110501;
                        case 373: // catch_target0
                            CatchBlockStart(arg_register = 8);
                            var6 = _closure2_slot2;
                            var5 = global;
                            var5 = var5.String;
                            var5 = var5.bind(var0)(var8);
                            var5 = var6.bind(var0)(var5);
                            _fun110501_ip = 548;
                            continue _fun110501;
                        case 402:
                            var4 = var4.item;
                            var10 = var4.id;
                        case 412: // try_start_1
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var4 = 18;
                            var4 = var9[var4];
                            var6 = var8.bind(var0)(var4);
                            var5 = var6.sendActivityInvite;
                            var4 = {};
                            var4.channelId = var10;
                            var7 = _closure1_slot10;
                            var7 = var7.JOIN;
                            var4.type = var7;
                            var7 = _closure2_slot0;
                            var4.activity = var7;
                            var7 = 14;
                            var7 = var9[var7];
                            var7 = var8.bind(var0)(var7);
                            var7 = var7.ACTIVITY_INVITE_SHEET;
                            var4.location = var7;
                            var5 = var5.bind(var6)(var4);
                            var4 = var5.then;
                            var4 = var4.bind(var5)(var3);
                            var3 = var4.catch;
                            var2 = function(arg0) { // Environment: var2
                                var2 = _closure2_slot2;
                                var0 = global;
                                var3 = var0.String;
                                var0 = undefined;
                                var1 = arg0;
                                var1 = var3.bind(var0)(var1);
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var2 = var3.bind(var4)(var2);
                        case 522: // try_end1
                            _fun110501_ip = 548;
                            continue _fun110501;
                        case 524: // catch_target1
                            CatchBlockStart(arg_register = 3);
                            var2 = _closure2_slot2;
                            var1 = global;
                            var1 = var1.String;
                            var1 = var1.bind(var0)(var3);
                            var1 = var2.bind(var0)(var1);
                        case 548:
                            return var0;
                    }
                };
                var21 = var14.bind(var8)(var1, var9);
                var9 = _closure1_slot0;
                var1 = 19;
                var1 = var10[var1];
                var14 = var9.bind(var3)(var1);
                var10 = var14.useStateFromStores;
                var1 = _closure1_slot9;
                var9 = new Array(1);
                var9[0] = var1;
                var1 = function() { // Environment: var17
                    var1 = _closure1_slot9;
                    var0 = var1.getInviteSuggestionRows;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var23 = var10.bind(var14)(var9, var1);
                var9 = var8.useState;
                var1 = false;
                var1 = var9.bind(var8)(var1);
                var2 = var7.bind(var3)(var1, var2);
                var1 = var2[var5];
                var2 = var2[var6];
                var _closure2_slot4 = var2;
                var7 = var8.useEffect;
                var6 = function() { // Environment: var17
                    var2 = _closure2_slot4;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 20;
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.loadInviteSuggestions;
                    var2 = {};
                    var5 = global;
                    var5 = var5.Set;
                    var6 = var5.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var5
                        }
                    });
                    var8 = var6;
                    var5 = new var8[var5](var7);
                    var5 = var5 instanceof Object ? var5 : var6;
                    var2.omitUserIds = var5;
                    var5 = _closure1_slot12;
                    var5 = var5.EMBEDDED_APPLICATION;
                    var2.inviteTargetType = var5;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.catch;
                    var1 = _closure1_slot13;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.finally;
                    var1 = function() { // Environment: var1
                        var2 = _closure2_slot4;
                        var0 = undefined;
                        var1 = false;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2 = new Array(0);
                var2 = var7.bind(var8)(var6, var2);
                var2 = var23.length;
                var8 = var5 === var2;
                if (!var8) {
                    _fun110497_ip = 363;
                    continue _fun110497
                }
            case 360:
                var8 = var1;
            case 363:
                var2 = var23.length;
                var7 = var5 === var2;
                if (!var7) {
                    _fun110497_ip = 378;
                    continue _fun110497
                }
            case 375:
                var7 = !var1;
            case 378:
                var2 = _closure1_slot14;
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = var9[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.AnalyticsLocationProvider;
                var0 = {};
                var0.value = var4;
                var6 = _closure1_slot14;
                var4 = 21;
                var4 = var9[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.BottomSheet;
                var4 = {
                    'showGradient': null,
                    'scrollable': true,
                    'startExpanded': true
                };
                var9 = var18 != var11;
                if (var9) {
                    _fun110497_ip = 457;
                    continue _fun110497
                }
            case 454:
                var9 = !var8;
            case 457:
                if (var9) {
                    _fun110497_ip = 463;
                    continue _fun110497
                }
            case 460:
                var9 = !var7;
            case 463:
                var4.showGradient = var9;
                var14 = _closure1_slot14;
                var25 = _closure1_slot0;
                var15 = _closure1_slot2;
                var9 = 22;
                var9 = var15[var9];
                var9 = var25.bind(var3)(var9);
                var10 = var9.BottomSheetTitleHeader;
                var9 = {};
                var28 = 23;
                var19 = var15[var28];
                var19 = var25.bind(var3)(var19);
                var24 = var19.intl;
                var19 = var24.string;
                var15 = var15[var28];
                var15 = var25.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15["OzOM/q"];
                var15 = var19.bind(var24)(var15);
                var9.title = var15;
                var9 = var14.bind(var3)(var10, var9);
                var4.header = var9;
                if (!(var18 == var11)) {
                    _fun110497_ip = 962;
                    continue _fun110497
                }
            case 569:
                if (var8) {
                    _fun110497_ip = 944;
                    continue _fun110497
                }
            case 575:
                if (var7) {
                    _fun110497_ip = 830;
                    continue _fun110497
                }
            case 581:
                var9 = _closure1_slot16;
                var8 = _closure1_slot15;
                var7 = {};
                var15 = _closure1_slot14;
                var14 = _closure1_slot5;
                var10 = {};
                var19 = {};
                var24 = var13.searchAndShareContainer;
                var19.style = var24;
                var27 = _closure1_slot14;
                var31 = _closure1_slot0;
                var24 = _closure1_slot2;
                var25 = 27;
                var25 = var24[var25];
                var25 = var31.bind(var3)(var25);
                var26 = var25.SearchField;
                var25 = {
                    'size': 'md',
                    'isRound': true
                };
                var29 = 20;
                var29 = var24[var29];
                var29 = var31.bind(var3)(var29);
                var29 = var29.searchInviteSuggestions;
                var25.onChange = var29;
                var29 = var24[var28];
                var29 = var31.bind(var3)(var29);
                var30 = var29.intl;
                var29 = var30.string;
                var28 = var24[var28];
                var28 = var31.bind(var3)(var28);
                var28 = var28.t;
                var28 = var28.iI1gMg;
                var28 = var29.bind(var30)(var28);
                var25.placeholder = var28;
                var25 = var27.bind(var3)(var26, var25);
                var19.children = var25;
                var19 = var15.bind(var3)(var14, var19);
                var10.children = var19;
                var14 = var15.bind(var3)(var14, var10);
                var10 = new Array(2);
                var10[0] = var14;
                var19 = _closure1_slot14;
                var15 = _closure1_slot1;
                var14 = 28;
                var14 = var24[var14];
                var15 = var15.bind(var3)(var14);
                var14 = {};
                var14.data = var23;
                var14.error = var11;
                var14.getSendState = var22;
                var14.onInviteSent = var21;
                var14.onPressAvatar = var20;
                var14 = var19.bind(var3)(var15, var14);
                var10[1] = var14;
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                _fun110497_ip = 942;
                continue _fun110497;
            case 830:
                var10 = _closure1_slot14;
                var9 = _closure1_slot6;
                var8 = {};
                var14 = {};
                var15 = 16;
                var15 = var16 + var15;
                var14.paddingBottom = var15;
                var8.contentContainerStyle = var14;
                var16 = _closure1_slot14;
                var15 = _closure1_slot1;
                var19 = _closure1_slot2;
                var14 = 26;
                var14 = var19[var14];
                var15 = var15.bind(var3)(var14);
                var14 = {};
                var14.link = var18;
                var18 = function() {
                    var0 = undefined;
                    return var0;
                };
                var14.onCopy = var18;
                var18 = function() {
                    var0 = undefined;
                    return var0;
                };
                var14.onShare = var18;
                var17 = function() {
                    var0 = undefined;
                    return var0;
                };
                var14.onPressSettings = var17;
                var14 = var16.bind(var3)(var15, var14);
                var8.children = var14;
                var7 = var10.bind(var3)(var9, var8);
            case 942:
                _fun110497_ip = 960;
                continue _fun110497;
            case 944:
                var10 = _closure1_slot14;
                var9 = _closure1_slot18;
                var8 = {};
                var7 = var10.bind(var3)(var9, var8);
            case 960:
                _fun110497_ip = 1035;
                continue _fun110497;
            case 962:
                var10 = _closure1_slot14;
                var9 = _closure1_slot1;
                var14 = _closure1_slot2;
                var8 = 24;
                var8 = var14[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var13 = var13.errorEmptyState;
                var8.style = var13;
                var13 = _closure1_slot0;
                var12 = 25;
                var12 = var14[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.AppCrash;
                var8.Illustration = var12;
                var8.title = var11;
                var7 = var10.bind(var3)(var9, var8);
            case 1035:
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 8417, 8368, 660, 3335, 483, 33, 1297, 671, 8364, 1568, 5730, 5583, 3278, 7372, 8352, 9879, 566, 8369, 4933, 5213, 1234, 7380, 8372, 8376, 7032, 14241, 2]);