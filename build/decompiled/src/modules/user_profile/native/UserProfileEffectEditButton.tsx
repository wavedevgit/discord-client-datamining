// modules/user_profile/native/UserProfileEffectEditButton.tsx
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
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
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
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.xs;
    var8.borderRadius = var11;
    var3.profileEffectPreviewContainer = var8;
    var8 = {
        'width': '100%',
        'height': '100%'
    };
    var3.sampleProfile = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_SUBTLE;
    var8.tintColor = var9;
    var3.noneIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileEffectEditButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun79899: for (var _fun79899_ip = 0;;) switch (_fun79899_ip) {
            case 0:
                var2 = arg0;
                var5 = var2.displayProfile;
                var _closure2_slot0 = var5;
                var11 = var2.user;
                var _closure2_slot1 = var11;
                var1 = var2.pendingProfileEffect;
                var _closure2_slot2 = var1;
                var13 = var2.guildId;
                var _closure2_slot3 = var13;
                var10 = var2.isTryItOut;
                var _closure2_slot4 = var10;
                var3 = undefined;
                var _closure2_slot8 = var3;
                var2 = _closure1_slot7;
                var14 = var2.bind(var3)();
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 5;
                var2 = var6[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var11.id;
                var6 = var4.bind(var3)(var2);
                var _closure2_slot5 = var6;
                var4 = null;
                var2 = var4 != var13;
                var _closure2_slot6 = var2;
                var12 = var3 !== var1;
                var _closure2_slot7 = var12;
                var9 = _closure1_slot3;
                var7 = var9.useMemo;
                var16 = var4 == var5;
                var15 = undefined;
                if (var16) {
                    _fun79899_ip = 146;
                    continue _fun79899
                }
            case 140:
                var15 = var5.profileEffect;
            case 146:
                var5 = new Array(5);
                var5[0] = var15;
                var5[1] = var12;
                var5[2] = var2;
                var5[3] = var1;
                var12 = var4 == var6;
                var1 = undefined;
                if (var12) {
                    _fun79899_ip = 181;
                    continue _fun79899
                }
            case 175:
                var1 = var6.profileEffect;
            case 181:
                var5[4] = var1;
                var1 = function() { // Environment: var0
                    _fun79900: for (var _fun79900_ip = 0;;) switch (_fun79900_ip) {
                        case 0:
                            var0 = _closure2_slot7;
                            if (var0) {
                                _fun79900_ip = 37;
                                continue _fun79900
                            }
                        case 10:
                            var1 = _closure2_slot0;
                            var0 = null;
                            var1 = var0 == var1;
                            var0 = undefined;
                            if (var1) {
                                _fun79900_ip = 35;
                                continue _fun79900
                            }
                        case 25:
                            var1 = _closure2_slot0;
                            var0 = var1.profileEffect;
                        case 35:
                            _fun79900_ip = 89;
                            continue _fun79900;
                        case 37:
                            var1 = _closure2_slot6;
                            if (!var1) {
                                _fun79900_ip = 54;
                                continue _fun79900
                            }
                        case 44:
                            var1 = _closure2_slot2;
                            var4 = null;
                            if (!(var4 !== var1)) {
                                _fun79900_ip = 60;
                                continue _fun79900
                            }
                        case 54:
                            var1 = _closure2_slot2;
                            _fun79900_ip = 86;
                            continue _fun79900;
                        case 60:
                            var2 = _closure2_slot5;
                            var4 = var4 == var2;
                            var2 = undefined;
                            if (var4) {
                                _fun79900_ip = 83;
                                continue _fun79900
                            }
                        case 73:
                            var3 = _closure2_slot5;
                            var2 = var3.profileEffect;
                        case 83:
                            var1 = var2;
                        case 86:
                            var0 = var1;
                        case 89:
                            return var0;
                    }
                };
                var12 = var7.bind(var9)(var1, var5);
                _closure2_slot8 = var12;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 6;
                var1 = var7[var1];
                var7 = var5.bind(var3)(var1);
                var5 = var7.useProfileEffectPreset;
                var9 = var4 == var12;
                var1 = undefined;
                if (var9) {
                    _fun79899_ip = 243;
                    continue _fun79899
                }
            case 237:
                var1 = var12.skuId;
            case 243:
                var1 = var5.bind(var7)(var1);
                var9 = _closure1_slot3;
                var7 = var9.useCallback;
                var5 = new Array(4);
                var5[0] = var12;
                var5[1] = var13;
                var5[2] = var11;
                var5[3] = var10;
                var0 = function() { // Environment: var0
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var3 = var1[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 9;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 8;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var2 = {};
                    var6 = _closure2_slot1;
                    var2.user = var6;
                    var6 = _closure2_slot8;
                    var2.currentProfileEffect = var6;
                    var6 = _closure2_slot3;
                    var2.guildId = var6;
                    var1 = _closure2_slot4;
                    var2.isTryItOut = var1;
                    var1 = 'Profile Effect';
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var0;
                };
                var5 = var7.bind(var9)(var0, var5);
                var7 = var4 == var1;
                var0 = undefined;
                if (var7) {
                    _fun79899_ip = 309;
                    continue _fun79899
                }
            case 299:
                var7 = var1.config;
                var0 = var7.title;
            case 309:
                if (var2) {
                    _fun79899_ip = 376;
                    continue _fun79899
                }
            case 312:
                var7 = var0;
                if (!(var4 == var0)) {
                    _fun79899_ip = 374;
                    continue _fun79899
                }
            case 319:
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var2 = 10;
                var9 = var13[var2];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var2 = var13[var2];
                var2 = var11.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.PoWNfe;
                var7 = var9.bind(var10)(var2);
            case 374:
                _fun79899_ip = 487;
                continue _fun79899;
            case 376:
                var9 = var4 == var1;
                var2 = undefined;
                if (var9) {
                    _fun79899_ip = 391;
                    continue _fun79899
                }
            case 385:
                var2 = var1.skuId;
            case 391:
                var9 = var4 == var6;
                var1 = undefined;
                if (var9) {
                    _fun79899_ip = 421;
                    continue _fun79899
                }
            case 400:
                var6 = var6.profileEffect;
                var9 = var4 == var6;
                var1 = undefined;
                if (var9) {
                    _fun79899_ip = 421;
                    continue _fun79899
                }
            case 415:
                var1 = var6.skuId;
            case 421:
                if (!(var2 !== var1)) {
                    _fun79899_ip = 429;
                    continue _fun79899
                }
            case 425:
                if (!(var4 == var0)) {
                    _fun79899_ip = 484;
                    continue _fun79899
                }
            case 429:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 10;
                var2 = var10[var1];
                var2 = var9.bind(var3)(var2);
                var6 = var2.intl;
                var2 = var6.string;
                var1 = var10[var1];
                var1 = var9.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.CHf9iJ;
                var0 = var2.bind(var6)(var1);
            case 484:
                var7 = var0;
            case 487:
                var2 = _closure1_slot5;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 11;
                var0 = var11[var0];
                var0 = var10.bind(var3)(var0);
                var1 = var0.UserProfileEditFormButton;
                var0 = {};
                var6 = 10;
                var9 = var11[var6];
                var9 = var10.bind(var3)(var9);
                var15 = var9.intl;
                var13 = var15.string;
                var9 = var11[var6];
                var9 = var10.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.wR5wOo;
                var9 = var13.bind(var15)(var9);
                var0.label = var9;
                var0.buttonText = var7;
                var0.accessibilityLabel = var7;
                var7 = var11[var6];
                var7 = var10.bind(var3)(var7);
                var9 = var7.intl;
                var7 = var9.string;
                var6 = var11[var6];
                var6 = var10.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.Xz9c91;
                var6 = var7.bind(var9)(var6);
                var0.accessibilityHint = var6;
                var0.onPress = var5;
                if (!(var4 == var12)) {
                    _fun79899_ip = 699;
                    continue _fun79899
                }
            case 636:
                var6 = _closure1_slot5;
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var4 = 12;
                var4 = var10[var4];
                var5 = var9.bind(var3)(var4);
                var4 = {};
                var7 = 15;
                var7 = var10[var7];
                var7 = var9.bind(var3)(var7);
                var4.source = var7;
                var7 = var14.noneIcon;
                var4.style = var7;
                var4 = var6.bind(var3)(var5, var4);
                _fun79899_ip = 850;
                continue _fun79899;
            case 699:
                var7 = _closure1_slot6;
                var6 = _closure1_slot4;
                var5 = {};
                var9 = var14.profileEffectPreviewContainer;
                var5.style = var9;
                var11 = _closure1_slot5;
                var10 = _closure1_slot1;
                var13 = _closure1_slot2;
                var8 = 12;
                var8 = var13[var8];
                var9 = var10.bind(var3)(var8);
                var8 = {};
                var15 = 13;
                var15 = var13[var15];
                var15 = var10.bind(var3)(var15);
                var8.source = var15;
                var14 = var14.sampleProfile;
                var8.style = var14;
                var14 = true;
                var8.disableColor = var14;
                var9 = var11.bind(var3)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var9 = 14;
                var9 = var13[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {
                    'skuId': null,
                    'bannerAdjustment': 0,
                    'useThumbnail': true
                };
                var12 = var12.skuId;
                var9.skuId = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 850:
                var0.leading = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 6915, 6873, 3239, 6914, 1307, 1234, 10127, 4047, 10132, 6865, 5709, 2]);