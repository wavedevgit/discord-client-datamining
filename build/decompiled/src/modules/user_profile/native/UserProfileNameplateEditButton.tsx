// modules/user_profile/native/UserProfileNameplateEditButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
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
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ActivityIndicator;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NOOP;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = 5;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var8 = var9.createStyles;
    var3 = {};
    var10 = {
        'height': 50,
        'width': 50,
        'borderRadius': null,
        'overflow': 'hidden'
    };
    var11 = 6;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var10.borderRadius = var13;
    var3.previewContainer = var10;
    var10 = {};
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_SUBTLE;
    var10.tintColor = var11;
    var3.noneIcon = var10;
    var3 = var8.bind(var9)(var3);
    var _closure1_slot8 = var3;
    var3 = {
        'animating': true,
        'size': 'large'
    };
    var3 = var6.bind(var0)(var7, var3);
    var _closure1_slot9 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileNameplateEditButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun80483: for (var _fun80483_ip = 0;;) switch (_fun80483_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.user;
                var _closure2_slot0 = var12;
                var7 = var1.pendingNameplate;
                var2 = var1.guildId;
                var _closure2_slot1 = var2;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var1 = _closure1_slot8;
                var10 = var1.bind(var3)();
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var1 = var6[var1];
                var11 = var5.bind(var3)(var1);
                var9 = var11.useStateFromStores;
                var1 = _closure1_slot5;
                var8 = new Array(1);
                var8[0] = var1;
                var1 = function() { // Environment: var0
                    _fun80484: for (var _fun80484_ip = 0;;) switch (_fun80484_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var3 = null;
                            var2 = var3 != var0;
                            var0 = null;
                            if (!var2) {
                                _fun80484_ip = 63;
                                continue _fun80484
                            }
                        case 18:
                            var2 = _closure2_slot0;
                            var2 = var3 != var2;
                            var0 = null;
                            if (!var2) {
                                _fun80484_ip = 63;
                                continue _fun80484
                            }
                        case 31:
                            var4 = _closure1_slot5;
                            var3 = var4.getMember;
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var3.bind(var4)(var2, var1);
                        case 63:
                            return var0;
                    }
                };
                var9 = var9.bind(var11)(var8, var1);
                var1 = 8;
                var1 = var6[var1];
                var6 = var5.bind(var3)(var1);
                var5 = var6.getProfilePreviewValue;
                var1 = {};
                var1.pendingValue = var7;
                var11 = var12.collectibles;
                var7 = null;
                var13 = var7 == var11;
                var8 = undefined;
                if (var13) {
                    _fun80483_ip = 152;
                    continue _fun80483
                }
            case 146:
                var8 = var11.nameplate;
            case 152:
                var1.userValue = var8;
                var11 = var7 == var9;
                var8 = undefined;
                if (var11) {
                    _fun80483_ip = 187;
                    continue _fun80483
                }
            case 166:
                var9 = var9.collectibles;
                var11 = var7 == var9;
                var8 = undefined;
                if (var11) {
                    _fun80483_ip = 187;
                    continue _fun80483
                }
            case 181:
                var8 = var9.nameplate;
            case 187:
                var1.guildValue = var8;
                var1.guildId = var2;
                var8 = var5.bind(var6)(var1);
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 9;
                var1 = var6[var1];
                var6 = var5.bind(var3)(var1);
                var5 = var6.useFetchNameplate;
                var9 = var7 == var8;
                var1 = undefined;
                if (var9) {
                    _fun80483_ip = 242;
                    continue _fun80483
                }
            case 236:
                var1 = var8.skuId;
            case 242:
                var1 = var5.bind(var6)(var1);
                var6 = var1.nameplateProduct;
                _closure2_slot2 = var6;
                var11 = var1.nameplateRecord;
                _closure2_slot3 = var11;
                var8 = var1.nameplateData;
                var1 = var1.isFetching;
                var5 = var7 != var8;
                if (!var5) {
                    _fun80483_ip = 290;
                    continue _fun80483
                }
            case 286:
                var5 = var7 != var11;
            case 290:
                if (!var5) {
                    _fun80483_ip = 297;
                    continue _fun80483
                }
            case 293:
                var5 = var7 != var6;
            case 297:
                _closure2_slot4 = var5;
                var9 = _closure1_slot3;
                var7 = var9.useCallback;
                var6 = new Array(3);
                var6[0] = var12;
                var6[1] = var11;
                var6[2] = var2;
                var2 = function() { // Environment: var0
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var3 = var1[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 12;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 11;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var2 = {};
                    var6 = _closure2_slot0;
                    var2.user = var6;
                    var6 = _closure2_slot3;
                    var2.currentNameplate = var6;
                    var1 = _closure2_slot1;
                    var2.guildId = var1;
                    var1 = 'Edit Nameplate';
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var0;
                };
                var6 = var7.bind(var9)(var2, var6);
                var2 = _closure1_slot7;
                if (var1) {
                    _fun80483_ip = 651;
                    continue _fun80483
                }
            case 349:
                var7 = _closure1_slot1;
                var13 = _closure1_slot2;
                var1 = 15;
                var1 = var13[var1];
                var7 = var7.bind(var3)(var1);
                var1 = {
                    'nameplate': null,
                    'fullOpacity': true,
                    'isSquarePreview': true
                };
                var1.nameplate = var8;
                var9 = var2.bind(var3)(var7, var1);
                var8 = function() {
                    _fun80486: for (var _fun80486_ip = 0;;) switch (_fun80486_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var3 = null;
                            var0 = var3 == var0;
                            var6 = undefined;
                            var1 = undefined;
                            if (var0) {
                                _fun80486_ip = 30;
                                continue _fun80486
                            }
                        case 20:
                            var0 = _closure2_slot3;
                            var1 = var0.skuId;
                        case 30:
                            var0 = _closure2_slot0;
                            var4 = var0.collectibles;
                            var5 = var3 == var4;
                            var0 = undefined;
                            if (var5) {
                                _fun80486_ip = 70;
                                continue _fun80486
                            }
                        case 49:
                            var4 = var4.nameplate;
                            var5 = var3 == var4;
                            var0 = undefined;
                            if (var5) {
                                _fun80486_ip = 70;
                                continue _fun80486
                            }
                        case 64:
                            var0 = var4.skuId;
                        case 70:
                            var4 = _closure2_slot1;
                            if (!(var3 != var4)) {
                                _fun80486_ip = 103;
                                continue _fun80486
                            }
                        case 78:
                            var4 = _closure2_slot4;
                            if (!var4) {
                                _fun80486_ip = 103;
                                continue _fun80486
                            }
                        case 85:
                            if (!(var1 !== var0)) {
                                _fun80486_ip = 103;
                                continue _fun80486
                            }
                        case 89:
                            var0 = _closure2_slot2;
                            var0 = var0.name;
                            _fun80486_ip = 250;
                            continue _fun80486;
                        case 103:
                            var1 = _closure2_slot1;
                            if (!(var3 == var1)) {
                                _fun80486_ip = 189;
                                continue _fun80486
                            }
                        case 111:
                            var1 = _closure2_slot4;
                            if (var1) {
                                _fun80486_ip = 178;
                                continue _fun80486
                            }
                        case 118:
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 14;
                            var3 = var7[var1];
                            var3 = var5.bind(var6)(var3);
                            var4 = var3.intl;
                            var3 = var4.string;
                            var1 = var7[var1];
                            var1 = var5.bind(var6)(var1);
                            var1 = var1.t;
                            var1 = var1.PoWNfe;
                            var1 = var3.bind(var4)(var1);
                            _fun80486_ip = 187;
                            continue _fun80486;
                        case 178:
                            var2 = _closure2_slot2;
                            var1 = var2.name;
                        case 187:
                            _fun80486_ip = 247;
                            continue _fun80486;
                        case 189:
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 14;
                            var3 = var7[var2];
                            var3 = var5.bind(var6)(var3);
                            var4 = var3.intl;
                            var3 = var4.string;
                            var2 = var7[var2];
                            var2 = var5.bind(var6)(var2);
                            var2 = var2.t;
                            var2 = var2.CHf9iJ;
                            var1 = var3.bind(var4)(var2);
                        case 247:
                            var0 = var1;
                        case 250:
                            return var0;
                    }
                };
                var12 = _closure1_slot0;
                var0 = 13;
                var0 = var13[var0];
                var0 = var12.bind(var3)(var0);
                var1 = var0.UserProfileEditFormButton;
                var0 = {};
                var7 = 14;
                var11 = var13[var7];
                var11 = var12.bind(var3)(var11);
                var15 = var11.intl;
                var14 = var15.string;
                var11 = var13[var7];
                var11 = var12.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.x5CoXR;
                var11 = var14.bind(var15)(var11);
                var0.label = var11;
                var11 = var8.bind(var3)();
                var0.buttonText = var11;
                var8 = var8.bind(var3)();
                var0.accessibilityLabel = var8;
                var8 = var13[var7];
                var8 = var12.bind(var3)(var8);
                var11 = var8.intl;
                var8 = var11.string;
                var7 = var13[var7];
                var7 = var12.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.RJxLnS;
                var7 = var8.bind(var11)(var7);
                var0.accessibilityHint = var7;
                var0.onPress = var6;
                var8 = _closure1_slot7;
                if (var5) {
                    _fun80483_ip = 612;
                    continue _fun80483
                }
            case 556:
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var5 = 16;
                var5 = var12[var5];
                var6 = var11.bind(var3)(var5);
                var5 = {};
                var7 = 17;
                var7 = var12[var7];
                var7 = var11.bind(var3)(var7);
                var5.source = var7;
                var7 = var10.noneIcon;
                var5.style = var7;
                var5 = var8.bind(var3)(var6, var5);
                _fun80483_ip = 638;
                continue _fun80483;
            case 612:
                var7 = _closure1_slot4;
                var6 = {};
                var10 = var10.previewContainer;
                var6.style = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 638:
                var0.leading = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 651:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 13;
                var0 = var9[var0];
                var0 = var8.bind(var3)(var0);
                var1 = var0.UserProfileEditFormButton;
                var0 = {};
                var5 = 14;
                var6 = var9[var5];
                var6 = var8.bind(var3)(var6);
                var10 = var6.intl;
                var7 = var10.string;
                var6 = var9[var5];
                var6 = var8.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.x5CoXR;
                var6 = var7.bind(var10)(var6);
                var0.label = var6;
                var6 = var9[var5];
                var6 = var8.bind(var3)(var6);
                var10 = var6.intl;
                var7 = var10.string;
                var6 = var9[var5];
                var6 = var8.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.MKDeyL;
                var6 = var7.bind(var10)(var6);
                var0.buttonText = var6;
                var6 = var9[var5];
                var6 = var8.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.ZTNur7;
                var5 = var6.bind(var7)(var5);
                var0.accessibilityLabel = var5;
                var0.accessibilityHint = var3;
                var5 = _closure1_slot6;
                var0.onPress = var5;
                var4 = _closure1_slot9;
                var0.leading = var4;
                var4 = true;
                var0.disabled = var4;
                var0.hideArrow = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1683, 483, 33, 1297, 671, 566, 5644, 10164, 3279, 10165, 1307, 10158, 1234, 7006, 4092, 5804, 2]);