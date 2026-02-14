// modules/collectibles/native/FeaturedFirstCardCoachmarkAnchor.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        var0 = arg0;
        var3 = var0.anchorRef;
        var7 = var0.config;
        var _closure2_slot0 = var7;
        var6 = var0.markAsDismissed;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot4;
        var4 = var5.useMemo;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() { // Environment: var1
            _fun89132: for (var _fun89132_ip = 0;;) switch (_fun89132_ip) {
                case 0:
                    var0 = {};
                    var2 = _closure2_slot0;
                    var7 = var0;
                    var6 = var2;
                    var3 = copyDataProperties(var7, var6);
                    var2 = var2.title;
                    var3 = 'function';
                    var2 = typeof var2;
                    if (!(var3 !== var2)) {
                        _fun89132_ip = 46;
                        continue _fun89132
                    }
                case 35:
                    var2 = _closure2_slot0;
                    var4 = var2.title;
                    _fun89132_ip = 59;
                    continue _fun89132;
                case 46:
                    var5 = _closure2_slot0;
                    var2 = var5.title;
                    var4 = var2.bind(var5)();
                case 59:
                    var2 = 'title';
                    var0[var2] = var4;
                    var2 = _closure2_slot0;
                    var2 = var2.description;
                    var2 = typeof var2;
                    if (!(var3 !== var2)) {
                        _fun89132_ip = 95;
                        continue _fun89132
                    }
                case 84:
                    var2 = _closure2_slot0;
                    var2 = var2.description;
                    _fun89132_ip = 108;
                    continue _fun89132;
                case 95:
                    var3 = _closure2_slot0;
                    var1 = var3.description;
                    var2 = var1.bind(var3)();
                case 108:
                    var1 = 'description';
                    var0[var1] = var2;
                    var2 = true;
                    var1 = 'visible';
                    var0[var1] = var2;
                    var2 = function() {
                        var2 = _closure2_slot1;
                        var0 = _closure1_slot6;
                        var1 = var0.USER_DISMISS;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = 'onDismiss';
                    var0[var1] = var2;
                    return var0;
            }
        };
        var2 = var4.bind(var5)(var1, var2);
        var4 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var4.bind(var0)(var1);
        var0 = var1.useCoachmark;
        var0 = var0.bind(var1)(var3, var2);
        var0 = null;
        return var0;
    };
    var _closure1_slot10 = var0;
    var1 = function arg0() {
        _fun89134: for (var _fun89134_ip = 0;;) switch (_fun89134_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.anchorRef;
                var4 = undefined;
                var _closure2_slot1 = var4;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 8;
                var2 = var5[var2];
                var6 = var3.bind(var4)(var2);
                var2 = var6.useHasNeverWishlisted;
                var8 = var2.bind(var6)();
                var _closure2_slot0 = var8;
                var2 = 9;
                var2 = var5[var2];
                var5 = var3.bind(var4)(var2);
                var3 = var5.useMobileWishlistOwnerExperiment;
                var2 = 'FeaturedFirstCardCoachmark';
                var3 = var3.bind(var5)(var2);
                var2 = var3.showWishlistButtonInProductCard;
                var6 = var3.showWishlistButtonInPDP;
                if (!var6) {
                    _fun89134_ip = 101;
                    continue _fun89134
                }
            case 98:
                var6 = !var2;
            case 101:
                _closure2_slot1 = var6;
                var5 = _closure1_slot4;
                var3 = var5.useMemo;
                var2 = new Array(2);
                var2[0] = var8;
                var2[1] = var6;
                var0 = function() { // Environment: var0
                    _fun89135: for (var _fun89135_ip = 0;;) switch (_fun89135_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            if (!var1) {
                                _fun89135_ip = 17;
                                continue _fun89135
                            }
                        case 10:
                            var0 = _closure2_slot1;
                            if (var0) {
                                _fun89135_ip = 23;
                                continue _fun89135
                            }
                        case 17:
                            var0 = new Array(0);
                            _fun89135_ip = 71;
                            continue _fun89135;
                        case 23:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 5;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var1 = var1.DismissibleContent;
                            var2 = var1.WISHLIST_MOBILE_NUX_PRODUCT_CARD_COACHMARK;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0 = var1;
                        case 71:
                            return var0;
                    }
                };
                var3 = var3.bind(var5)(var0, var2);
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 10;
                var0 = var5[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.useSelectedDismissibleContent;
                var3 = var0.bind(var2)(var3);
                var2 = _closure1_slot3;
                var0 = 2;
                var2 = var2.bind(var4)(var3, var0);
                var0 = 0;
                var3 = var2[var0];
                var0 = 1;
                var5 = var2[var0];
                var0 = null;
                var2 = var0 != var3;
                var6 = null;
                if (!var2) {
                    _fun89134_ip = 215;
                    continue _fun89134
                }
            case 207:
                var2 = _closure1_slot9;
                var6 = var2[var3];
            case 215:
                var2 = var0 == var6;
                var0 = null;
                if (var2) {
                    _fun89134_ip = 254;
                    continue _fun89134
                }
            case 224:
                var3 = _closure1_slot7;
                var2 = _closure1_slot10;
                var1 = {};
                var1.anchorRef = var7;
                var1.config = var6;
                var1.markAsDismissed = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 254:
                return var0;
        }
    };
    var _closure1_slot11 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = {};
    var7 = 5;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var7 = var7.DismissibleContent;
    var8 = var7.WISHLIST_MOBILE_NUX_PRODUCT_CARD_COACHMARK;
    var7 = {};
    var9 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 6;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["47Rhc3"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var7.title = var9;
    var9 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 6;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.hbuKNU;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var7.description = var9;
    var9 = 'bottom';
    var7.position = var9;
    var4[var8] = var7;
    var _closure1_slot9 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/FeaturedFirstCardCoachmarkAnchor.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        var0 = arg0;
        var6 = var0.children;
        var1 = _closure1_slot4;
        var0 = var1.useRef;
        var2 = null;
        var10 = var0.bind(var1)(var2);
        var1 = _closure1_slot4;
        var0 = var1.useRef;
        var8 = var0.bind(var1)(var2);
        var3 = _closure1_slot8;
        var2 = _closure1_slot5;
        var1 = {};
        var1.ref = var10;
        var0 = false;
        var1.collapsable = var0;
        var7 = _closure1_slot7;
        var4 = {};
        var4.ref = var8;
        var9 = {
            'position': 'absolute',
            'top': 0,
            'right': 6,
            'width': 32,
            'height': 32
        };
        var4.style = var9;
        var4.collapsable = var0;
        var0 = undefined;
        var7 = var7.bind(var0)(var2, var4);
        var4 = new Array(4);
        var4[0] = var7;
        var4[1] = var6;
        var9 = _closure1_slot7;
        var7 = _closure1_slot11;
        var6 = {};
        var6.anchorRef = var10;
        var6 = var9.bind(var0)(var7, var6);
        var4[2] = var6;
        var7 = _closure1_slot7;
        var6 = _closure1_slot1;
        var9 = _closure1_slot2;
        var5 = 11;
        var5 = var9[var5];
        var6 = var6.bind(var0)(var5);
        var5 = {};
        var5.anchorRef = var8;
        var5 = var7.bind(var0)(var6, var5);
        var4[3] = var5;
        var1.children = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.default = var3;
    var2.FeaturedFirstCardCoachmark = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1369, 33, 1358, 1235, 7106, 11336, 11334, 6018, 11535, 2]);