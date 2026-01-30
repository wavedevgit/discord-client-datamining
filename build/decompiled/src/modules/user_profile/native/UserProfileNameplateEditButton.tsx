// modules/user_profile/native/UserProfileNameplateEditButton.tsx
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
    var6 = var3.ActivityIndicator;
    var _closure1_slot4 = var6;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NOOP;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'height': 50,
        'width': 50,
        'borderRadius': null,
        'overflow': 'hidden'
    };
    var9 = 6;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.xs;
    var8.borderRadius = var11;
    var3.previewContainer = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_SUBTLE;
    var8.tintColor = var9;
    var3.noneIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileNameplateEditButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: UserProfileNameplateEditButton, environment: var1
        _fun79870: for (var _fun79870_ip = 0;;) switch (_fun79870_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.user;
                var _closure2_slot0 = var10;
                var6 = var1.pendingNameplate;
                var1 = var1.guildId;
                var _closure2_slot1 = var1;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var2 = _closure1_slot9;
                var11 = var2.bind(var3)();
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 7;
                var2 = var7[var2];
                var12 = var5.bind(var3)(var2);
                var9 = var12.useStateFromStores;
                var2 = _closure1_slot6;
                var8 = new Array(1);
                var8[0] = var2;
                var2 = function() { // Environment: var0
                    _fun79871: for (var _fun79871_ip = 0;;) switch (_fun79871_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var3 = null;
                            var2 = var3 != var0;
                            var0 = null;
                            if (!var2) {
                                _fun79871_ip = 63;
                                continue _fun79871
                            }
                        case 18:
                            var2 = _closure2_slot0;
                            var2 = var3 != var2;
                            var0 = null;
                            if (!var2) {
                                _fun79871_ip = 63;
                                continue _fun79871
                            }
                        case 31:
                            var4 = _closure1_slot6;
                            var3 = var4.getMember;
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var3.bind(var4)(var2, var1);
                        case 63:
                            return var0;
                    }
                };
                var9 = var9.bind(var12)(var8, var2);
                var2 = 8;
                var2 = var7[var2];
                var7 = var5.bind(var3)(var2);
                var5 = var7.getProfilePreviewValue;
                var2 = {};
                var2.pendingValue = var6;
                var12 = var10.collectibles;
                var6 = null;
                var13 = var6 == var12;
                var8 = undefined;
                if (var13) {
                    _fun79870_ip = 152;
                    continue _fun79870
                }
            case 146:
                var8 = var12.nameplate;
            case 152:
                var2.userValue = var8;
                var12 = var6 == var9;
                var8 = undefined;
                if (var12) {
                    _fun79870_ip = 187;
                    continue _fun79870
                }
            case 166:
                var9 = var9.collectibles;
                var12 = var6 == var9;
                var8 = undefined;
                if (var12) {
                    _fun79870_ip = 187;
                    continue _fun79870
                }
            case 181:
                var8 = var9.nameplate;
            case 187:
                var2.guildValue = var8;
                var2.guildId = var1;
                var8 = var5.bind(var7)(var2);
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 9;
                var2 = var7[var2];
                var7 = var5.bind(var3)(var2);
                var5 = var7.useFetchNameplate;
                var9 = var6 == var8;
                var2 = undefined;
                if (var9) {
                    _fun79870_ip = 242;
                    continue _fun79870
                }
            case 236:
                var2 = var8.skuId;
            case 242:
                var5 = var5.bind(var7)(var2);
                var2 = var5.nameplateProduct;
                _closure2_slot2 = var2;
                var9 = var5.nameplateRecord;
                _closure2_slot3 = var9;
                var13 = var5.nameplateData;
                var7 = var5.isFetching;
                var5 = var6 != var13;
                if (!var5) {
                    _fun79870_ip = 290;
                    continue _fun79870
                }
            case 286:
                var5 = var6 != var9;
            case 290:
                if (!var5) {
                    _fun79870_ip = 297;
                    continue _fun79870
                }
            case 293:
                var5 = var6 != var2;
            case 297:
                _closure2_slot4 = var5;
                var8 = _closure1_slot3;
                var6 = var8.useCallback;
                var2 = new Array(3);
                var2[0] = var10;
                var2[1] = var9;
                var2[2] = var1;
                var1 = function() { // Environment: var0
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
                var6 = var6.bind(var8)(var1, var2);
                var2 = _closure1_slot8;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 13;
                var1 = var9[var1];
                var1 = var8.bind(var3)(var1);
                var1 = var1.UserProfileEditFormButton;
                if (var7) {
                    _fun79870_ip = 655;
                    continue _fun79870
                }
            case 375:
                var10 = function() { // Original name: renderSectionLabel, environment: var0
                    _fun79873: for (var _fun79873_ip = 0;;) switch (_fun79873_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var3 = null;
                            var0 = var3 == var0;
                            var6 = undefined;
                            var1 = undefined;
                            if (var0) {
                                _fun79873_ip = 30;
                                continue _fun79873
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
                                _fun79873_ip = 70;
                                continue _fun79873
                            }
                        case 49:
                            var4 = var4.nameplate;
                            var5 = var3 == var4;
                            var0 = undefined;
                            if (var5) {
                                _fun79873_ip = 70;
                                continue _fun79873
                            }
                        case 64:
                            var0 = var4.skuId;
                        case 70:
                            var4 = _closure2_slot1;
                            if (!(var3 != var4)) {
                                _fun79873_ip = 103;
                                continue _fun79873
                            }
                        case 78:
                            var4 = _closure2_slot4;
                            if (!var4) {
                                _fun79873_ip = 103;
                                continue _fun79873
                            }
                        case 85:
                            if (!(var1 !== var0)) {
                                _fun79873_ip = 103;
                                continue _fun79873
                            }
                        case 89:
                            var0 = _closure2_slot2;
                            var0 = var0.name;
                            _fun79873_ip = 250;
                            continue _fun79873;
                        case 103:
                            var1 = _closure2_slot1;
                            if (!(var3 == var1)) {
                                _fun79873_ip = 189;
                                continue _fun79873
                            }
                        case 111:
                            var1 = _closure2_slot4;
                            if (var1) {
                                _fun79873_ip = 178;
                                continue _fun79873
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
                            _fun79873_ip = 187;
                            continue _fun79873;
                        case 178:
                            var2 = _closure2_slot2;
                            var1 = var2.name;
                        case 187:
                            _fun79873_ip = 247;
                            continue _fun79873;
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
                var0 = {};
                var7 = 14;
                var12 = var9[var7];
                var12 = var8.bind(var3)(var12);
                var15 = var12.intl;
                var14 = var15.string;
                var12 = var9[var7];
                var12 = var8.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.x5CoXR;
                var12 = var14.bind(var15)(var12);
                var0.label = var12;
                var12 = var10.bind(var3)();
                var0.buttonText = var12;
                var10 = var10.bind(var3)();
                var0.accessibilityLabel = var10;
                var10 = var9[var7];
                var10 = var8.bind(var3)(var10);
                var12 = var10.intl;
                var10 = var12.string;
                var7 = var9[var7];
                var7 = var8.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.RJxLnS;
                var7 = var10.bind(var12)(var7);
                var0.accessibilityHint = var7;
                var0.onPress = var6;
                var10 = _closure1_slot8;
                if (var5) {
                    _fun79870_ip = 570;
                    continue _fun79870
                }
            case 514:
                var12 = _closure1_slot1;
                var14 = _closure1_slot2;
                var5 = 16;
                var5 = var14[var5];
                var6 = var12.bind(var3)(var5);
                var5 = {};
                var7 = 17;
                var7 = var14[var7];
                var7 = var12.bind(var3)(var7);
                var5.source = var7;
                var7 = var11.noneIcon;
                var5.style = var7;
                var5 = var10.bind(var3)(var6, var5);
                _fun79870_ip = 642;
                continue _fun79870;
            case 570:
                var7 = _closure1_slot5;
                var6 = {};
                var11 = var11.previewContainer;
                var6.style = var11;
                var12 = _closure1_slot1;
                var14 = _closure1_slot2;
                var11 = 15;
                var11 = var14[var11];
                var12 = var12.bind(var3)(var11);
                var11 = {
                    'nameplate': null,
                    'fullOpacity': true,
                    'isSquarePreview': true
                };
                var11.nameplate = var13;
                var11 = var10.bind(var3)(var12, var11);
                var6.children = var11;
                var5 = var10.bind(var3)(var7, var6);
            case 642:
                var0.leading = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 655:
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
                var5 = _closure1_slot7;
                var0.onPress = var5;
                var6 = _closure1_slot4;
                var4 = true;
                var5 = {
                    'animating': true,
                    'size': 'large'
                };
                var5 = var2.bind(var3)(var6, var5);
                var0.leading = var5;
                var0.disabled = var4;
                var0.hideArrow = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1672, 483, 33, 1297, 671, 566, 5546, 10130, 3237, 10131, 1307, 10123, 1234, 6876, 4045, 5706, 2]);