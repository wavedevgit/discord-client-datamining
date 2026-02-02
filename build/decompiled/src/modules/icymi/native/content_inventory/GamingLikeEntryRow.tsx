// modules/icymi/native/content_inventory/GamingLikeEntryRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var8 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var5;
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var8.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var6 = var3.Fragment;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var6 = {};
    var7 = 4;
    var3 = var5[var7];
    var3 = var8.bind(var0)(var3);
    var3 = var3.NewGameBadge;
    var6.Badge = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isEntryNew;
    var6.predicate = var3;
    var3 = new Array(5);
    var3[0] = var6;
    var6 = {};
    var9 = var5[var7];
    var9 = var8.bind(var0)(var9);
    var9 = var9.StreakBadge;
    var6.Badge = var9;
    var9 = function arg0() {
        _fun104121: for (var _fun104121_ip = 0;;) switch (_fun104121_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.getStreakCount;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var1 = null;
                var2 = var1 != var0;
                var1 = 0;
                if (!var2) {
                    _fun104121_ip = 53;
                    continue _fun104121
                }
            case 50:
                var1 = var0;
            case 53:
                var0 = 2;
                var0 = var1 >= var0;
                return var0;
        }
    };
    var6.predicate = var9;
    var3[1] = var6;
    var6 = {};
    var9 = var5[var7];
    var9 = var8.bind(var0)(var9);
    var9 = var9.TrendingBadge;
    var6.Badge = var9;
    var9 = function arg0() {
        _fun104122: for (var _fun104122_ip = 0;;) switch (_fun104122_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var0 = 5;
                var0 = var3[var0];
                var4 = undefined;
                var3 = var2.bind(var4)(var0);
                var2 = var3.getTrendingType;
                var0 = arg0;
                var2 = var2.bind(var3)(var0);
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun104122_ip = 84;
                    continue _fun104122
                }
            case 48:
                var3 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 6;
                var1 = var5[var1];
                var1 = var3.bind(var4)(var1);
                var1 = var1.TrendingType;
                var1 = var1.TRENDING_TYPE_UNSPECIFIED;
                var0 = var2 !== var1;
            case 84:
                return var0;
        }
    };
    var6.predicate = var9;
    var3[2] = var6;
    var6 = {};
    var9 = var5[var7];
    var9 = var8.bind(var0)(var9);
    var9 = var9.ResurrectedBadge;
    var6.Badge = var9;
    var9 = function() {
        var0 = true;
        return var0;
    };
    var6.predicate = var9;
    var3[3] = var6;
    var6 = {};
    var7 = var5[var7];
    var7 = var8.bind(var0)(var7);
    var7 = var7.MarathonBadge;
    var6.Badge = var7;
    var7 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot3;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.isEntryMarathon;
        var0 = arg0;
        var1 = var1.bind(var2)(var0);
        var0 = true;
        var0 = var0 === var1;
        return var0;
    };
    var6.predicate = var7;
    var3[4] = var6;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createICYMIStyles;
    var3 = function(arg0) { // Environment: var1
        var2 = arg0;
        var0 = {};
        var1 = {
            'flexDirection': 'row',
            'gap': null,
            'alignItems': 'center'
        };
        var3 = var2.margin;
        var1.gap = var3;
        var3 = var2.margin;
        var1.padding = var3;
        var2 = var2.inset;
        var1.marginLeft = var2;
        var4 = _closure1_slot1;
        var5 = _closure1_slot3;
        var2 = 8;
        var6 = var5[var2];
        var3 = undefined;
        var6 = var4.bind(var3)(var6);
        var6 = var6.radii;
        var6 = var6.lg;
        var1.borderRadius = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.BACKGROUND_SURFACE_HIGH;
        var1.backgroundColor = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.shadows;
        var7 = var6.SHADOW_HIGH;
        var8 = var1;
        var6 = copyDataProperties(var8, var7);
        var0.card = var1;
        var1 = {
            'overflow': 'hidden',
            'flex': 1
        };
        var0.cardInnerContainer = var1;
        var1 = {
            'width': 72,
            'height': 72
        };
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.radii;
        var6 = var6.sm;
        var1.borderRadius = var6;
        var0.image = var1;
        var1 = {};
        var6 = 275;
        var1.maxWidth = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY;
        var1.color = var6;
        var0.gameName = var1;
        var1 = {
            'display': 'flex',
            'flexDirection': 'row',
            'gap': null,
            'flexWrap': 'wrap',
            'alignItems': 'center',
            'marginTop': 6
        };
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.spacing;
        var2 = var2.PX_8;
        var1.gap = var2;
        var0.badges = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 29;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/icymi/native/content_inventory/GamingLikeEntryRow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun104126: for (var _fun104126_ip = 0;;) switch (_fun104126_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.content;
                var _closure2_slot0 = var12;
                var10 = var0.renderForScreenshot;
                var4 = undefined;
                var _closure2_slot2 = var4;
                var0 = _closure1_slot11;
                var26 = var0.bind(var4)();
                var0 = var12.extra;
                var3 = var0.application_id;
                var7 = var12.author_id;
                var _closure2_slot1 = var7;
                var2 = _closure1_slot0;
                var5 = _closure1_slot3;
                var0 = 9;
                var0 = var5[var0];
                var9 = var2.bind(var4)(var0);
                var8 = var9.useStateFromStores;
                var0 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var0;
                var0 = function() { // Environment: var1
                    var2 = _closure1_slot6;
                    var1 = var2.getUser;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var21 = var8.bind(var9)(var6, var0);
                var6 = _closure1_slot1;
                var0 = 10;
                var0 = var5[var0];
                var6 = var6.bind(var4)(var0);
                var0 = {};
                var0.userId = var7;
                var8 = var6.bind(var4)(var0);
                var0 = 11;
                var0 = var5[var0];
                var7 = var2.bind(var4)(var0);
                var6 = var7.useDisplayNameStylesFont;
                var0 = {};
                var0.displayNameStyles = var8;
                var28 = var6.bind(var7)(var0);
                var0 = 12;
                var0 = var5[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.useGetOrFetchApplication;
                var23 = var0.bind(var2)(var3);
                var0 = null;
                var2 = var0 == var23;
                var3 = undefined;
                if (var2) {
                    _fun104126_ip = 214;
                    continue _fun104126
                }
            case 200:
                var5 = var23.getIconURL;
                var2 = 72;
                var3 = var5.bind(var23)(var2);
            case 214:
                var5 = _closure1_slot1;
                var6 = _closure1_slot3;
                var2 = 13;
                var2 = var6[var2];
                var2 = var5.bind(var4)(var2);
                var2 = var2.bind(var4)(var3);
                var18 = var2.primaryColor;
                var2 = var0 == var23;
                var16 = undefined;
                if (var2) {
                    _fun104126_ip = 268;
                    continue _fun104126
                }
            case 254:
                var3 = var23.getIconURL;
                var2 = 240;
                var16 = var3.bind(var23)(var2);
            case 268:
                var5 = _closure1_slot4;
                var6 = var5.useMemo;
                var3 = new Array(1);
                var3[0] = var12;
                var2 = function() { // Environment: var1
                    _fun104128: for (var _fun104128_ip = 0;;) switch (_fun104128_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var3 = var0.content_type;
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var0 = 14;
                            var0 = var5[var0];
                            var5 = undefined;
                            var0 = var4.bind(var5)(var0);
                            var0 = var0.ContentInventoryEntryType;
                            var0 = var0.TOP_GAME;
                            if (!(var3 !== var0)) {
                                _fun104128_ip = 97;
                                continue _fun104128
                            }
                        case 54:
                            var4 = _closure1_slot10;
                            var3 = var4.map;
                            var0 = function(arg0) { // Environment: var0
                                _fun104129: for (var _fun104129_ip = 0;;) switch (_fun104129_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var5 = var0.Badge;
                                        var2 = var0.predicate;
                                        var0 = _closure2_slot0;
                                        var4 = undefined;
                                        var2 = var2.bind(var4)(var0);
                                        var0 = null;
                                        if (!var2) {
                                            _fun104129_ip = 64;
                                            continue _fun104129
                                        }
                                    case 34:
                                        var3 = _closure1_slot7;
                                        var2 = {};
                                        var1 = _closure2_slot0;
                                        var2.entry = var1;
                                        var1 = var5.name;
                                        var0 = var3.bind(var4)(var5, var2, var1);
                                    case 64:
                                        return var0;
                                }
                            };
                            var4 = var3.bind(var4)(var0);
                            var3 = var4.filter;
                            var0 = global;
                            var0 = var0.Boolean;
                            var0 = var3.bind(var4)(var0);
                            _fun104128_ip = 162;
                            continue _fun104128;
                        case 97:
                            var4 = _closure1_slot7;
                            var3 = _closure1_slot2;
                            var6 = _closure1_slot3;
                            var2 = 4;
                            var2 = var6[var2];
                            var2 = var3.bind(var5)(var2);
                            var3 = var2.TopGameBadge;
                            var2 = {};
                            var1 = _closure2_slot0;
                            var2.entry = var1;
                            var1 = 'topgame';
                            var2 = var4.bind(var5)(var3, var2, var1);
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0 = var1;
                        case 162:
                            return var0;
                    }
                };
                var25 = var6.bind(var5)(var2, var3);
                var6 = var5.useCallback;
                var3 = new Array(1);
                var3[0] = var12;
                var2 = function() { // Environment: var1
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 16;
                    var2 = var1[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = 15;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var2 = var3.then;
                    var1 = function(arg0) { // Environment: var1
                        _fun104131: for (var _fun104131_ip = 0;;) switch (_fun104131_ip) {
                            case 0:
                                var1 = arg0;
                                var2 = var1.GameShareModal;
                                var _closure4_slot0 = var2;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun104131_ip = 201;
                                    continue _fun104131
                                }
                            case 24:
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot3;
                                var2 = 17;
                                var1 = var5[var2];
                                var3 = undefined;
                                var10 = var4.bind(var3)(var1);
                                var9 = var10.itemInteracted;
                                var1 = _closure2_slot0;
                                var7 = var1.id;
                                var8 = 'hotwheels_gaming_activity';
                                var6 = 'press_forward';
                                var6 = var9.bind(var10)(var7, var8, var6);
                                var2 = var5[var2];
                                var7 = var4.bind(var3)(var2);
                                var6 = var7.feedItemActioned;
                                var2 = {};
                                var9 = var1.id;
                                var2.itemId = var9;
                                var2.itemType = var8;
                                var8 = {
                                    'actionGestureType': 'press',
                                    'actionTargetElement': 'forward_button',
                                    'actionIntentType': 'share',
                                    'actionDestinationType': null
                                };
                                var2.actionParameters = var8;
                                var2 = var6.bind(var7)(var2);
                                var2 = 18;
                                var2 = var5[var2];
                                var5 = var4.bind(var3)(var2);
                                var4 = var5.pushLazy;
                                var3 = {};
                                var3.content = var1;
                                var2 = {};
                                var1 = 'modal';
                                var2.presentation = var1;
                                var14 = function() { // Environment: var0
                                    var0 = global;
                                    var2 = var0.Promise;
                                    var1 = var2.resolve;
                                    var0 = _closure4_slot0;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var12 = 'GameShareModal';
                                var15 = var5;
                                var13 = var3;
                                var11 = var2;
                                var0 = var15[var4](var14, var13, var12, var11, var10);
                            case 201:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var13 = var6.bind(var5)(var2, var3);
                var3 = _closure1_slot0;
                var6 = _closure1_slot3;
                var2 = 19;
                var2 = var6[var2];
                var6 = var3.bind(var4)(var2);
                var3 = var6.useReplyActions;
                var2 = {};
                var2.content = var12;
                var2 = var3.bind(var6)(var2);
                var14 = var2.openReplyActionSheet;
                _closure2_slot2 = var14;
                var3 = var5.useCallback;
                var2 = new Array(2);
                var2[0] = var12;
                var2[1] = var14;
                var1 = function() { // Environment: var1
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 17;
                    var1 = var4[var2];
                    var0 = undefined;
                    var10 = var3.bind(var0)(var1);
                    var9 = var10.itemInteracted;
                    var6 = _closure2_slot0;
                    var8 = var6.id;
                    var5 = 'hotwheels_gaming_activity';
                    var7 = 'press';
                    var7 = var9.bind(var10)(var8, var5, var7);
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.feedItemActioned;
                    var2 = {};
                    var6 = var6.id;
                    var2.itemId = var6;
                    var2.itemType = var5;
                    var5 = {
                        'actionGestureType': 'press',
                        'actionTargetElement': 'item_container',
                        'actionIntentType': 'open',
                        'actionDestinationType': null
                    };
                    var2.actionParameters = var5;
                    var2 = var3.bind(var4)(var2);
                    var1 = _closure2_slot2;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var5 = var3.bind(var5)(var1, var2);
                if (!(var0 != var23)) {
                    _fun104126_ip = 1409;
                    continue _fun104126
                }
            case 408:
                if (!(var0 != var21)) {
                    _fun104126_ip = 1409;
                    continue _fun104126
                }
            case 415:
                if (!(var0 != var16)) {
                    _fun104126_ip = 1409;
                    continue _fun104126
                }
            case 422:
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var17 = 5;
                var1 = var1[var17];
                var2 = var2.bind(var4)(var1);
                var1 = var2.isEntryActive;
                var6 = var1.bind(var2)(var12);
                var7 = _closure1_slot0;
                var1 = _closure1_slot3;
                var15 = 20;
                var2 = var1[var15];
                var2 = var7.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var1[var15];
                var1 = var7.bind(var4)(var1);
                var1 = var1.t;
                if (var6) {
                    _fun104126_ip = 515;
                    continue _fun104126
                }
            case 500:
                var6 = var1.ktOTRQ;
                var8 = var2.bind(var3)(var6);
                _fun104126_ip = 528;
                continue _fun104126;
            case 515:
                var1 = var1.Gk1P8Z;
                var8 = var2.bind(var3)(var1);
            case 528:
                var3 = _closure1_slot7;
                var2 = _closure1_slot1;
                var7 = _closure1_slot3;
                var1 = 21;
                var1 = var7[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var6 = var12.id;
                var1.contentId = var6;
                var6 = var12.author_id;
                var1.userId = var6;
                var6 = 'hotwheels_gaming_activity';
                var1.type = var6;
                var1.renderForScreenshot = var10;
                var1.onPress = var5;
                var19 = _closure1_slot9;
                var6 = _closure1_slot8;
                var5 = {};
                var9 = _closure1_slot0;
                var27 = 22;
                var7 = var7[var27];
                var7 = var9.bind(var4)(var7);
                var11 = var7.Text;
                var7 = {
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var24 = 'text-md/semibold';
                var22 = var0 != var28;
                var9 = undefined;
                if (!var22) {
                    _fun104126_ip = 661;
                    continue _fun104126
                }
            case 651:
                var22 = {};
                var22.fontFamily = var28;
                var9 = var22;
            case 661:
                var7.style = var9;
                var34 = _closure1_slot1;
                var9 = _closure1_slot3;
                var22 = 23;
                var28 = var9[var22];
                var29 = var34.bind(var4)(var28);
                var28 = var29.getName;
                var28 = var28.bind(var29)(var21);
                var7.children = var28;
                var7 = var3.bind(var4)(var11, var7);
                var28 = new Array(2);
                var28[0] = var7;
                var7 = _closure1_slot7;
                var11 = _closure1_slot0;
                var29 = var9[var27];
                var29 = var11.bind(var4)(var29);
                var30 = var29.Text;
                var29 = {
                    'lineClamp': 1,
                    'variant': 'text-xs/normal',
                    'color': 'text-muted'
                };
                var31 = 24;
                var31 = var9[var31];
                var33 = var11.bind(var4)(var31);
                var32 = var33.getRelativeTimestamp;
                var31 = 25;
                var31 = var9[var31];
                var35 = var34.bind(var4)(var31);
                var34 = var35.extractTimestamp;
                var31 = var12.id;
                var31 = var34.bind(var35)(var31);
                var31 = var32.bind(var33)(var31);
                var29.children = var31;
                var29 = var7.bind(var4)(var30, var29);
                var28[1] = var29;
                var5.children = var28;
                var5 = var19.bind(var4)(var6, var5);
                var1.title = var5;
                var5 = var9[var27];
                var5 = var11.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-sm/normal',
                    'lineClamp': 1
                };
                var9 = var9[var17];
                var11 = var11.bind(var4)(var9);
                var9 = var11.isEntryActive;
                var11 = var9.bind(var11)(var12);
                var9 = 'text-default';
                if (!var11) {
                    _fun104126_ip = 892;
                    continue _fun104126
                }
            case 886:
                var9 = 'status-positive';
            case 892:
                var5.color = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.subtitle = var5;
                var7 = _closure1_slot9;
                var6 = _closure1_slot5;
                var5 = {};
                var8 = {};
                var11 = var26.card;
                var9 = new Array(2);
                var9[0] = var11;
                var12 = var0 != var18;
                var11 = null;
                if (!var12) {
                    _fun104126_ip = 1011;
                    continue _fun104126
                }
            case 946:
                var12 = {};
                var19 = _closure1_slot1;
                var28 = _closure1_slot3;
                var17 = 26;
                var17 = var28[var17];
                var17 = var19.bind(var4)(var17);
                var19 = var17.bind(var4)(var18);
                var18 = var19.alpha;
                var17 = 0.5;
                var18 = var18.bind(var19)(var17);
                var17 = var18.hex;
                var17 = var17.bind(var18)();
                var12.backgroundColor = var17;
                var11 = var12;
            case 1011:
                var9[1] = var11;
                var8.style = var9;
                var19 = _closure1_slot7;
                var11 = _closure1_slot1;
                var17 = _closure1_slot3;
                var9 = 27;
                var9 = var17[var9];
                var11 = var11.bind(var4)(var9);
                var9 = {};
                var12 = {};
                var12.uri = var16;
                var9.source = var12;
                var12 = var26.image;
                var9.style = var12;
                var11 = var19.bind(var4)(var11, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var16 = _closure1_slot9;
                var12 = _closure1_slot5;
                var11 = {};
                var18 = var26.cardInnerContainer;
                var11.style = var18;
                var18 = _closure1_slot0;
                var17 = var17[var27];
                var17 = var18.bind(var4)(var17);
                var18 = var17.Text;
                var17 = {};
                var17.variant = var24;
                var24 = var26.gameName;
                var17.style = var24;
                var23 = var23.name;
                var17.children = var23;
                var18 = var19.bind(var4)(var18, var17);
                var17 = new Array(2);
                var17[0] = var18;
                var18 = var0 != var25;
                if (!var18) {
                    _fun104126_ip = 1174;
                    continue _fun104126
                }
            case 1163:
                var23 = var25.length;
                var19 = 0;
                var18 = var23 > var19;
            case 1174:
                if (!var18) {
                    _fun104126_ip = 1207;
                    continue _fun104126
                }
            case 1177:
                var24 = _closure1_slot7;
                var23 = _closure1_slot5;
                var19 = {};
                var26 = var26.badges;
                var19.style = var26;
                var19.children = var25;
                var18 = var24.bind(var4)(var23, var19);
            case 1207:
                var17[1] = var18;
                var11.children = var17;
                var11 = var16.bind(var4)(var12, var11);
                var9[1] = var11;
                var8.children = var9;
                var9 = var7.bind(var4)(var6, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var9 = null;
                if (var10) {
                    _fun104126_ip = 1383;
                    continue _fun104126
                }
            case 1251:
                var12 = _closure1_slot7;
                var16 = _closure1_slot0;
                var19 = _closure1_slot3;
                var10 = 28;
                var10 = var19[var10];
                var10 = var16.bind(var4)(var10);
                var11 = var10.ContentInventoryReplyRow;
                var10 = {};
                var17 = var19[var15];
                var17 = var16.bind(var4)(var17);
                var18 = var17.intl;
                var17 = var18.formatToPlainString;
                var15 = var19[var15];
                var15 = var16.bind(var4)(var15);
                var15 = var15.t;
                var16 = var15.ghWi8V;
                var15 = {};
                var20 = _closure1_slot1;
                var19 = var19[var22];
                var20 = var20.bind(var4)(var19);
                var19 = var20.getName;
                var19 = var19.bind(var20)(var21);
                var15.username = var19;
                var15 = var17.bind(var18)(var16, var15);
                var10.reactText = var15;
                var10.onReply = var14;
                var10.onForward = var13;
                var9 = var12.bind(var4)(var11, var10);
            case 1383:
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 1409:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1613, 33, 7815, 6804, 7822, 13489, 671, 566, 3945, 6884, 6843, 6802, 6799, 13540, 1307, 8834, 4527, 13551, 1234, 13553, 3902, 3197, 4188, 21, 669, 4669, 13544, 2]);