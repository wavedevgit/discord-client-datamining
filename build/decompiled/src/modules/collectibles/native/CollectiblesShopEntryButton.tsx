// modules/collectibles/native/CollectiblesShopEntryButton.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = {};
    var6 = 5;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.CutoutShape;
    var6 = var6.Circle;
    var3.shape = var6;
    var6 = 6;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.ICON_SIZE;
    var7 = var6.sm;
    var6 = 9;
    var6 = var7 - var6;
    var3.x = var6;
    var6 = -1;
    var3.y = var6;
    var6 = 10;
    var3.size = var6;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'backgroundColor': null,
        'height': 32,
        'width': 32,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var9 = 8;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.lg;
    var8.borderRadius = var11;
    var3.iconContainer = var8;
    var8 = {
        'position': 'absolute',
        'height': 6.5,
        'width': 6.5,
        'backgroundColor': null,
        'borderRadius': null,
        'top': 7.5,
        'right': 7.5
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_FEEDBACK_NOTIFICATION;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.lg;
    var8.borderRadius = var11;
    var3.dot = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.WHITE;
    var8.color = var9;
    var3.icon = var8;
    var8 = {
        'marginVertical': 8,
        'marginHorizontal': 4
    };
    var3.shopPressable = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = function(arg0) { // Original name: ShopIconButton, environment: var1
        _fun103416: for (var _fun103416_ip = 0;;) switch (_fun103416_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.shopButtonRef;
                var4 = var1.handlePress;
                var8 = var1.showRedDot;
                var3 = undefined;
                if (!(var8 === var3)) {
                    _fun103416_ip = 31;
                    continue _fun103416
                }
            case 29:
                var8 = true;
            case 31:
                var _closure2_slot0 = var8;
                var _closure2_slot1 = var3;
                var1 = _closure1_slot10;
                var12 = var1.bind(var3)();
                _closure2_slot1 = var12;
                var6 = _closure1_slot3;
                var2 = var6.useMemo;
                var1 = new Array(2);
                var1[0] = var12;
                var1[1] = var8;
                var0 = function() { // Environment: var0
                    _fun103417: for (var _fun103417_ip = 0;;) switch (_fun103417_ip) {
                        case 0:
                            var3 = _closure1_slot7;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 9;
                            var0 = var2[var0];
                            var4 = undefined;
                            var0 = var1.bind(var4)(var0);
                            var2 = var0.ShopIcon;
                            var1 = {};
                            var0 = 'sm';
                            var1.size = var0;
                            var5 = _closure2_slot1;
                            var5 = var5.icon;
                            var5 = var5.color;
                            var1.color = var5;
                            var5 = var3.bind(var4)(var2, var1);
                            var1 = _closure2_slot0;
                            var0 = var5;
                            if (!var1) {
                                _fun103417_ip = 135;
                                continue _fun103417
                            }
                        case 82:
                            var3 = _closure1_slot7;
                            var2 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var1 = 5;
                            var1 = var7[var1];
                            var2 = var2.bind(var4)(var1);
                            var1 = {};
                            var7 = _closure1_slot9;
                            var6 = new Array(1);
                            var6[0] = var7;
                            var1.cutouts = var6;
                            var1.children = var5;
                            var0 = var3.bind(var4)(var2, var1);
                        case 135:
                            return var0;
                    }
                };
                var10 = var2.bind(var6)(var0, var1);
                var2 = _closure1_slot7;
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = 10;
                var0 = var13[var0];
                var0 = var11.bind(var3)(var0);
                var1 = var0.PressableScale;
                var0 = {};
                var6 = var12.shopPressable;
                var0.style = var6;
                var0.ref = var5;
                var5 = 'button';
                var0.accessibilityRole = var5;
                var5 = 11;
                var6 = var13[var5];
                var6 = var11.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var13[var5];
                var5 = var11.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.pWG4ze;
                var5 = var6.bind(var7)(var5);
                var0.accessibilityLabel = var5;
                var0.onPress = var4;
                var4 = 8;
                var0.hitSlop = var4;
                var6 = _closure1_slot8;
                var5 = _closure1_slot4;
                var4 = {};
                var7 = var12.iconContainer;
                var4.style = var7;
                var7 = new Array(2);
                var7[0] = var10;
                if (!var8) {
                    _fun103416_ip = 262;
                    continue _fun103416
                }
            case 236:
                var11 = _closure1_slot7;
                var10 = _closure1_slot4;
                var9 = {};
                var12 = var12.dot;
                var9.style = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 262:
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/CollectiblesShopEntryButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: CollectiblesShopEntryButton, environment: var1
        _fun103418: for (var _fun103418_ip = 0;;) switch (_fun103418_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.navigateToShop;
                var _closure2_slot0 = var1;
                var0 = var0.shopButtonRef;
                var _closure2_slot1 = var0;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 12;
                var0 = var2[var0];
                var4 = undefined;
                var3 = var1.bind(var4)(var0);
                var2 = var3.useStateFromStores;
                var0 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var5
                    var2 = _closure1_slot5;
                    var1 = var2.getMarketingBySurface;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 13;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var0 = var0.CollectiblesMarketingSurface;
                    var0 = var0.MOBILE_SHOP_BUTTON;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var2.bind(var3)(var1, var0);
                var6 = null;
                var0 = var6 == var8;
                var1 = undefined;
                if (var0) {
                    _fun103418_ip = 97;
                    continue _fun103418
                }
            case 91:
                var1 = var8.dismissibleContent;
            case 97:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var11 = 14;
                var0 = var0[var11];
                var0 = var2.bind(var4)(var0);
                var0 = var0.DismissibleContent;
                var0 = var0.COLLECTIBLES_SHOP_ENTRY_MARKETING;
                var3 = new Array(0);
                var2 = var6 == var8;
                var7 = undefined;
                if (var2) {
                    _fun103418_ip = 147;
                    continue _fun103418
                }
            case 142:
                var7 = var8.type;
            case 147:
                var10 = _closure1_slot0;
                var2 = _closure1_slot2;
                var13 = 15;
                var2 = var2[var13];
                var2 = var10.bind(var4)(var2);
                var2 = var2.CollectiblesMarketingType;
                var2 = var2.BADGE;
                var2 = var7 === var2;
                if (!var2) {
                    _fun103418_ip = 205;
                    continue _fun103418
                }
            case 186:
                var10 = var6 == var8;
                var7 = undefined;
                if (var10) {
                    _fun103418_ip = 201;
                    continue _fun103418
                }
            case 195:
                var7 = var8.dismissibleContent;
            case 201:
                var2 = var6 != var7;
            case 205:
                if (!var2) {
                    _fun103418_ip = 224;
                    continue _fun103418
                }
            case 208:
                var7 = var3.push;
                var2 = var8.dismissibleContent;
                var2 = var7.bind(var3)(var2);
            case 224:
                if (!(var1 !== var0)) {
                    _fun103418_ip = 281;
                    continue _fun103418
                }
            case 228:
                var2 = _closure1_slot7;
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 16;
                var0 = var7[var0];
                var1 = var1.bind(var4)(var0);
                var0 = {};
                var0.contentTypes = var3;
                var3 = function(arg0) { // Original name: children, environment: var5
                    var1 = arg0;
                    var4 = var1.visibleContent;
                    var _closure3_slot0 = var4;
                    var1 = var1.markAsDismissed;
                    var _closure3_slot1 = var1;
                    var3 = _closure1_slot7;
                    var2 = _closure1_slot11;
                    var1 = {};
                    var5 = _closure2_slot1;
                    var1.shopButtonRef = var5;
                    var0 = function() { // Original name: handlePress, environment: var0
                        _fun103423: for (var _fun103423_ip = 0;;) switch (_fun103423_ip) {
                            case 0:
                                var1 = _closure2_slot0;
                                var0 = undefined;
                                var1 = var1.bind(var0)();
                                var3 = _closure3_slot0;
                                var2 = null;
                                if (!(var2 != var3)) {
                                    _fun103423_ip = 48;
                                    continue _fun103423
                                }
                            case 26:
                                var2 = _closure3_slot1;
                                var1 = _closure1_slot6;
                                var1 = var1.PRIMARY;
                                var1 = var2.bind(var0)(var1);
                            case 48:
                                return var0;
                        }
                    };
                    var1.handlePress = var0;
                    var0 = null;
                    var0 = var0 != var4;
                    var1.showRedDot = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var0.children = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun103418_ip = 445;
                continue _fun103418;
            case 281:
                var3 = _closure1_slot7;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 16;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.SelectedVersionedDismissibleContent;
                var1 = {};
                var7 = var6 == var8;
                var12 = undefined;
                if (var7) {
                    _fun103418_ip = 327;
                    continue _fun103418
                }
            case 322:
                var12 = var8.type;
            case 327:
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var13];
                var7 = var10.bind(var4)(var7);
                var7 = var7.CollectiblesMarketingType;
                var10 = var7.BADGE;
                var7 = null;
                if (!(var12 === var10)) {
                    _fun103418_ip = 391;
                    continue _fun103418
                }
            case 362:
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var11];
                var9 = var10.bind(var4)(var9);
                var9 = var9.DismissibleContent;
                var7 = var9.COLLECTIBLES_SHOP_ENTRY_MARKETING;
            case 391:
                var1.contentType = var7;
                var9 = var6 == var8;
                var7 = undefined;
                if (var9) {
                    _fun103418_ip = 411;
                    continue _fun103418
                }
            case 405:
                var7 = var8.version;
            case 411:
                var8 = var6 != var7;
                var6 = 0;
                if (!var8) {
                    _fun103418_ip = 423;
                    continue _fun103418
                }
            case 420:
                var6 = var7;
            case 423:
                var1.latestVersion = var6;
                var5 = function(arg0) { // Original name: children, environment: var5
                    var1 = arg0;
                    var4 = var1.visibleContent;
                    var _closure3_slot0 = var4;
                    var1 = var1.markAsDismissed;
                    var _closure3_slot1 = var1;
                    var3 = _closure1_slot7;
                    var2 = _closure1_slot11;
                    var1 = {};
                    var5 = _closure2_slot1;
                    var1.shopButtonRef = var5;
                    var0 = function() { // Original name: handlePress, environment: var0
                        _fun103421: for (var _fun103421_ip = 0;;) switch (_fun103421_ip) {
                            case 0:
                                var1 = _closure2_slot0;
                                var0 = undefined;
                                var1 = var1.bind(var0)();
                                var3 = _closure3_slot0;
                                var2 = null;
                                if (!(var2 != var3)) {
                                    _fun103421_ip = 48;
                                    continue _fun103421
                                }
                            case 26:
                                var2 = _closure3_slot1;
                                var1 = _closure1_slot6;
                                var1 = var1.PRIMARY;
                                var1 = var2.bind(var0)(var1);
                            case 48:
                                return var0;
                        }
                    };
                    var1.handlePress = var0;
                    var0 = null;
                    var0 = var0 != var4;
                    var1.showRedDot = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 445:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4609, 1369, 33, 5419, 13424, 1297, 671, 10438, 6987, 1234, 632, 12561, 1358, 4592, 5919, 2]);