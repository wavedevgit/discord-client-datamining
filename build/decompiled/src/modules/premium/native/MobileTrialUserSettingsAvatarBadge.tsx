// modules/premium/native/MobileTrialUserSettingsAvatarBadge.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PremiumSubscriptionSKUs;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var6 = var3.Fragment;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 'absolute';
    var8.position = var9;
    var3.sparkleContainer = var8;
    var8 = {
        'width': 12,
        'height': 12
    };
    var3.sparkle = var8;
    var8 = {
        'width': 4,
        'height': 4
    };
    var9 = 6;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.MOBILE_TEXT_HEADING_PRIMARY;
    var8.tintColor = var9;
    var3.sparkle2 = var8;
    var8 = {
        'width': 8,
        'height': 8
    };
    var3.star = var8;
    var8 = {
        'bottom': 4294967290,
        'left': 4294967288
    };
    var3.defaultSparklePosition = var8;
    var8 = {
        'bottom': 16,
        'left': 4294967294
    };
    var3.defaultSparkle2Position = var8;
    var8 = {
        'top': 4294967292,
        'right': 4294967288
    };
    var3.defaultStarPosition = var8;
    var8 = {
        'bottom': 4294967288,
        'left': 4294967286
    };
    var3.avatarSparklePosition = var8;
    var8 = {
        'bottom': 16,
        'left': 4294967294
    };
    var3.avatarSparkle2Position = var8;
    var8 = {
        'top': 4294967292,
        'right': 4294967286
    };
    var3.avatarStarPosition = var8;
    var8 = {};
    var10 = {};
    var9 = '20deg';
    var10.rotate = var9;
    var9 = new Array(1);
    var9[0] = var10;
    var8.transform = var9;
    var3.sparkle2Transform = var8;
    var8 = {};
    var10 = {};
    var9 = '-165deg';
    var10.rotate = var9;
    var9 = new Array(1);
    var9[0] = var10;
    var8.transform = var9;
    var3.starTransform = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/MobileTrialUserSettingsAvatarBadge.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun104686: for (var _fun104686_ip = 0;;) switch (_fun104686_ip) {
            case 0:
                var0 = _closure1_slot9;
                var3 = undefined;
                var6 = var0.bind(var3)();
                var _closure2_slot0 = var6;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 7;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.usePremiumTrialOffer;
                var2 = var0.bind(var1)();
                var1 = null;
                var7 = var1 == var2;
                var0 = undefined;
                if (var7) {
                    _fun104686_ip = 66;
                    continue _fun104686
                }
            case 60:
                var0 = var2.subscription_trial;
            case 66:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 8;
                var2 = var9[var2];
                var7 = var8.bind(var3)(var2);
                var2 = var7.useShouldShowPremiumTrialUserSettingsAvatarBadge;
                var2 = var2.bind(var7)();
                var7 = 9;
                var7 = var9[var7];
                var10 = var8.bind(var3)(var7);
                var9 = var10.useStateFromStores;
                var7 = _closure1_slot4;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = function() { // Environment: var4
                    var1 = _closure1_slot4;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var7 = var9.bind(var10)(var8, var7);
                if (var2) {
                    _fun104686_ip = 143;
                    continue _fun104686
                }
            case 141:
                return var1;
            case 143:
                var8 = var1 == var7;
                var2 = undefined;
                if (var8) {
                    _fun104686_ip = 158;
                    continue _fun104686
                }
            case 152:
                var2 = var7.avatar;
            case 158:
                var2 = var1 != var2;
                if (var2) {
                    _fun104686_ip = 173;
                    continue _fun104686
                }
            case 165:
                var7 = var6.defaultSparklePosition;
                _fun104686_ip = 179;
                continue _fun104686;
            case 173:
                var7 = var6.avatarSparklePosition;
            case 179:
                var _closure2_slot1 = var7;
                if (var2) {
                    _fun104686_ip = 194;
                    continue _fun104686
                }
            case 186:
                var7 = var6.defaultSparkle2Position;
                _fun104686_ip = 200;
                continue _fun104686;
            case 194:
                var7 = var6.avatarSparkle2Position;
            case 200:
                var _closure2_slot2 = var7;
                if (var2) {
                    _fun104686_ip = 215;
                    continue _fun104686
                }
            case 207:
                var2 = var6.defaultStarPosition;
                _fun104686_ip = 221;
                continue _fun104686;
            case 215:
                var2 = var6.avatarStarPosition;
            case 221:
                var _closure2_slot3 = var2;
                var2 = var1 == var0;
                var6 = undefined;
                if (var2) {
                    _fun104686_ip = 240;
                    continue _fun104686
                }
            case 234:
                var6 = var0.sku_id;
            case 240:
                var2 = _closure1_slot5;
                var2 = var2.TIER_0;
                if (!(var6 !== var2)) {
                    _fun104686_ip = 276;
                    continue _fun104686
                }
            case 254:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 11;
                var2 = var7[var2];
                var2 = var6.bind(var3)(var2);
                _fun104686_ip = 296;
                continue _fun104686;
            case 276:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 10;
                var6 = var8[var6];
                var2 = var7.bind(var3)(var6);
            case 296:
                var _closure2_slot4 = var2;
                var2 = var1 == var0;
                var1 = undefined;
                if (var2) {
                    _fun104686_ip = 315;
                    continue _fun104686
                }
            case 309:
                var1 = var0.sku_id;
            case 315:
                var0 = _closure1_slot5;
                var0 = var0.TIER_0;
                if (!(var1 !== var0)) {
                    _fun104686_ip = 351;
                    continue _fun104686
                }
            case 329:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 13;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                _fun104686_ip = 371;
                continue _fun104686;
            case 351:
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 12;
                var1 = var6[var1];
                var0 = var2.bind(var3)(var1);
            case 371:
                var _closure2_slot5 = var0;
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 14;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var6 = _closure1_slot0;
                var5 = 15;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.DismissibleContent;
                var6 = var5.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE;
                var5 = new Array(1);
                var5[0] = var6;
                var0.contentTypes = var5;
                var4 = function arg0() {
                    _fun104688: for (var _fun104688_ip = 0;;) switch (_fun104688_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.visibleContent;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 15;
                            var0 = var3[var0];
                            var3 = undefined;
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.DismissibleContent;
                            var0 = var0.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE;
                            if (!(var1 !== var0)) {
                                _fun104688_ip = 52;
                                continue _fun104688
                            }
                        case 50:
                            return var3;
                        case 52:
                            var2 = _closure1_slot8;
                            var1 = _closure1_slot7;
                            var0 = {};
                            var7 = _closure1_slot6;
                            var6 = _closure1_slot3;
                            var4 = {};
                            var11 = _closure2_slot0;
                            var9 = var11.sparkleContainer;
                            var8 = new Array(2);
                            var8[0] = var9;
                            var9 = _closure2_slot1;
                            var8[1] = var9;
                            var4.style = var8;
                            var13 = _closure1_slot1;
                            var14 = _closure1_slot2;
                            var8 = 16;
                            var5 = var14[var8];
                            var9 = var13.bind(var3)(var5);
                            var5 = {};
                            var10 = _closure2_slot4;
                            var5.source = var10;
                            var10 = var11.sparkle;
                            var5.style = var10;
                            var10 = true;
                            var5.disableColor = var10;
                            var5 = var7.bind(var3)(var9, var5);
                            var4.children = var5;
                            var5 = var7.bind(var3)(var6, var4);
                            var4 = new Array(3);
                            var4[0] = var5;
                            var5 = {};
                            var15 = var11.sparkleContainer;
                            var9 = new Array(3);
                            var9[0] = var15;
                            var15 = var11.starTransform;
                            var9[1] = var15;
                            var15 = _closure2_slot3;
                            var9[2] = var15;
                            var5.style = var9;
                            var9 = var14[var8];
                            var15 = var13.bind(var3)(var9);
                            var9 = {};
                            var16 = _closure2_slot5;
                            var9.source = var16;
                            var16 = var11.star;
                            var9.style = var16;
                            var9.disableColor = var10;
                            var9 = var7.bind(var3)(var15, var9);
                            var5.children = var9;
                            var5 = var7.bind(var3)(var6, var5);
                            var4[1] = var5;
                            var5 = {};
                            var15 = var11.sparkleContainer;
                            var9 = new Array(3);
                            var9[0] = var15;
                            var15 = var11.sparkle2Transform;
                            var9[1] = var15;
                            var12 = _closure2_slot2;
                            var9[2] = var12;
                            var5.style = var9;
                            var8 = var14[var8];
                            var9 = var13.bind(var3)(var8);
                            var8 = {};
                            var12 = 17;
                            var12 = var14[var12];
                            var12 = var13.bind(var3)(var12);
                            var8.source = var12;
                            var11 = var11.sparkle2;
                            var8.style = var11;
                            var8.disableColor = var10;
                            var8 = var7.bind(var3)(var9, var8);
                            var5.children = var8;
                            var5 = var7.bind(var3)(var6, var5);
                            var4[2] = var5;
                            var0.children = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.MobileTrialUserSettingsAvatarBadge = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1621, 1623, 33, 1297, 671, 6677, 7094, 566, 13655, 13656, 13657, 13658, 5965, 1358, 4087, 8531, 2]);