// modules/guild_identity/native/EditGuildIdentityAvatar.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.UPLOAD_MEDIUM_SIZE;
    var _closure1_slot9 = var6;
    var6 = var3.AnalyticsSections;
    var _closure1_slot10 = var6;
    var6 = var3.AnalyticsObjects;
    var _closure1_slot11 = var6;
    var3 = var3.UpsellTypes;
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PremiumUpsellTypes;
    var _closure1_slot13 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot14 = var6;
    var3 = var3.jsxs;
    var _closure1_slot15 = var3;
    var3 = 9;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'position': 'absolute',
        'right': 0
    };
    var3.editAvatarIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot16 = var3;
    var3 = function arg0() {
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 10;
        var3 = var2[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var3);
        var4 = var5.openLazy;
        var7 = _closure1_slot0;
        var3 = 12;
        var3 = var2[var3];
        var7 = var7.bind(var0)(var3);
        var3 = 11;
        var3 = var2[var3];
        var2 = var2.paths;
        var3 = var7.bind(var0)(var3, var2);
        var2 = {};
        var7 = _closure1_slot4;
        var6 = function*() { // Environment: var1
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun80726: for (var _fun80726_ip = 0;;) switch (_fun80726_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun80726_ip = 197;
                            continue _fun80726
                        }
                    case 10:
                        var4 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 13;
                        var1 = var2[var1];
                        var2 = undefined;
                        var5 = var4.bind(var2)(var1);
                        var4 = var5.openImagePicker;
                        var1 = {};
                        var6 = _closure1_slot9;
                        var1.size = var6;
                        var1 = var4.bind(var5)(var1);
                        SaveGenerator(address = 60);
                    case 58:
                        return var1;
                    case 60:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun80726_ip = 194;
                            continue _fun80726
                        }
                    case 69:
                        var10 = var1.base64;
                        var4 = null;
                        if (!(var4 != var10)) {
                            _fun80726_ip = 191;
                            continue _fun80726
                        }
                    case 81:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var9 = 14;
                        var4 = var5[var9];
                        var8 = var6.bind(var2)(var4);
                        var7 = var8.createPendingImage;
                        var4 = {};
                        var4.imageUri = var10;
                        var9 = var5[var9];
                        var10 = var6.bind(var2)(var9);
                        var9 = var10.generateAvatarDescription;
                        var9 = var9.bind(var10)();
                        var4.description = var9;
                        var7 = var7.bind(var8)(var4);
                        var4 = 15;
                        var4 = var5[var4];
                        var6 = var6.bind(var2)(var4);
                        var4 = var6.setPendingAvatar;
                        var4 = var4.bind(var6)(var7);
                        var4 = _closure1_slot1;
                        var3 = 10;
                        var3 = var5[var3];
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.hideActionSheet;
                        var3 = var3.bind(var4)();
                    case 191:
                        return var2;
                    case 194:
                        return var1;
                    case 197:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var0)(var6);
        var _closure2_slot0 = var6;
        var6 = function() { // Environment: var1
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var2.handleUploadAvatarSelect = var6;
        var1 = function() {
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var0 = 15;
            var2 = var3[var0];
            var0 = undefined;
            var5 = var4.bind(var0)(var2);
            var4 = var5.setPendingAvatar;
            var2 = null;
            var2 = var4.bind(var5)(var2);
            var2 = _closure1_slot1;
            var1 = 10;
            var1 = var3[var1];
            var2 = var2.bind(var0)(var1);
            var1 = var2.hideActionSheet;
            var1 = var1.bind(var2)();
            return var0;
        };
        var2.handleRemoveAvatarSelect = var1;
        var1 = false;
        var2.showAnimatedAvatarUpsell = var1;
        var1 = arg0;
        var2.showRemoveAvatar = var1;
        var1 = 'Change Avatar';
        var1 = var4.bind(var5)(var3, var1, var2);
        return var0;
    };
    var _closure1_slot17 = var3;
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_identity/native/EditGuildIdentityAvatar.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun80729: for (var _fun80729_ip = 0;;) switch (_fun80729_ip) {
            case 0:
                var1 = arg0;
                var15 = var1.userId;
                var18 = var1.guildId;
                var _closure2_slot0 = var18;
                var6 = var1.disabled;
                var12 = var1.disableStatus;
                var4 = undefined;
                if (!(var12 === var4)) {
                    _fun80729_ip = 38;
                    continue _fun80729
                }
            case 36:
                var12 = true;
            case 38:
                var8 = var1.style;
                var13 = var1.statusStyle;
                var11 = var1.avatarStyle;
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var1 = _closure1_slot16;
                var10 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 16;
                var5 = var3[var1];
                var16 = var2.bind(var4)(var5);
                var14 = var16.useStateFromStores;
                var5 = _closure1_slot7;
                var9 = new Array(1);
                var9[0] = var5;
                var5 = function() { // Environment: var0
                    var1 = _closure1_slot7;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var19 = var14.bind(var16)(var9, var5);
                _closure2_slot1 = var19;
                var5 = var3[var1];
                var16 = var2.bind(var4)(var5);
                var14 = var16.useStateFromStoresArray;
                var5 = _closure1_slot8;
                var9 = new Array(1);
                var9[0] = var5;
                var5 = function() { // Environment: var0
                    var2 = _closure1_slot8;
                    var0 = var2.getPendingAvatar;
                    var1 = var0.bind(var2)();
                    var0 = new Array(2);
                    var0[0] = var1;
                    var1 = var2.getPendingAvatarDecoration;
                    var1 = var1.bind(var2)();
                    var0[1] = var1;
                    return var0;
                };
                var14 = var14.bind(var16)(var9, var5);
                var9 = _closure1_slot3;
                var5 = 2;
                var9 = var9.bind(var4)(var14, var5);
                var5 = 0;
                var17 = var9[var5];
                var5 = 1;
                var14 = var9[var5];
                var1 = var3[var1];
                var16 = var2.bind(var4)(var1);
                var9 = var16.useStateFromStores;
                var1 = _closure1_slot6;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var0
                    _fun80732: for (var _fun80732_ip = 0;;) switch (_fun80732_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var6 = null;
                            var1 = var6 != var0;
                            var0 = null;
                            if (!var1) {
                                _fun80732_ip = 63;
                                continue _fun80732
                            }
                        case 18:
                            var4 = _closure1_slot6;
                            var3 = var4.getMember;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var6 = var6 == var1;
                            var1 = undefined;
                            if (var6) {
                                _fun80732_ip = 57;
                                continue _fun80732
                            }
                        case 48:
                            var5 = _closure2_slot1;
                            var1 = var5.id;
                        case 57:
                            var0 = var3.bind(var4)(var2, var1);
                        case 63:
                            return var0;
                    }
                };
                var21 = var9.bind(var16)(var5, var1);
                _closure2_slot2 = var21;
                var1 = 14;
                var1 = var3[var1];
                var9 = var2.bind(var4)(var1);
                var5 = var9.getPendingAvatarSrc;
                var1 = {};
                var1.userId = var15;
                var1.image = var17;
                var16 = var5.bind(var9)(var1);
                var5 = _closure1_slot1;
                var1 = 17;
                var1 = var3[var1];
                var5 = var5.bind(var4)(var1);
                var1 = var5.canUsePremiumGuildMemberProfile;
                var20 = var1.bind(var5)(var19);
                _closure2_slot3 = var20;
                var1 = 18;
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.showRemoveAvatar;
                var15 = null;
                var5 = var15 == var21;
                var1 = undefined;
                if (var5) {
                    _fun80729_ip = 349;
                    continue _fun80729
                }
            case 343:
                var1 = var21.avatar;
            case 349:
                var9 = var2.bind(var3)(var17, var1);
                _closure2_slot4 = var9;
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 19;
                var1 = var5[var1];
                var2 = var3.bind(var4)(var1);
                var1 = 20;
                var1 = var5[var1];
                var1 = var3.bind(var4)(var1);
                var1 = var1.EDIT_AVATAR;
                var1 = var2.bind(var4)(var1);
                var5 = var1.analyticsLocations;
                _closure2_slot5 = var5;
                var3 = _closure1_slot5;
                var2 = var3.useCallback;
                var1 = new Array(5);
                var1[0] = var21;
                var1[1] = var19;
                var1[2] = var20;
                var1[3] = var9;
                var1[4] = var5;
                var0 = function() { // Environment: var0
                    _fun80733: for (var _fun80733_ip = 0;;) switch (_fun80733_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var3 = null;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun80733_ip = 24;
                                continue _fun80733
                            }
                        case 16:
                            var2 = _closure2_slot1;
                            var1 = var3 != var2;
                        case 24:
                            if (!var1) {
                                _fun80733_ip = 173;
                                continue _fun80733
                            }
                        case 30:
                            var2 = _closure2_slot3;
                            if (var2) {
                                _fun80733_ip = 158;
                                continue _fun80733
                            }
                        case 40:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 21;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.handleShowUpsellAlert;
                            var2 = {};
                            var5 = _closure1_slot12;
                            var5 = var5.PREMIUM_GUILD_PROFILE;
                            var2.initialUpsellKey = var5;
                            var5 = {};
                            var6 = _closure1_slot10;
                            var6 = var6.PREMIUM_GUILD_MEMBER_PROFILE;
                            var5.section = var6;
                            var6 = _closure1_slot11;
                            var6 = var6.EDIT_GUILD_PROFILE_AVATAR;
                            var5.object = var6;
                            var2.analyticsLocation = var5;
                            var5 = _closure2_slot5;
                            var2.analyticsLocations = var5;
                            var5 = {};
                            var6 = _closure1_slot13;
                            var6 = var6.PREMIUM_GUILD_IDENTITY_MODAL;
                            var5.type = var6;
                            var2.analyticsProperties = var5;
                            var2 = var3.bind(var4)(var2);
                            _fun80733_ip = 173;
                            continue _fun80733;
                        case 158:
                            var2 = _closure1_slot17;
                            var1 = _closure2_slot4;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 173:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var2.bind(var3)(var0, var1);
                var1 = var15 == var19;
                var0 = null;
                if (var1) {
                    _fun80729_ip = 723;
                    continue _fun80729
                }
            case 470:
                var3 = _closure1_slot15;
                var21 = _closure1_slot0;
                var20 = _closure1_slot2;
                var1 = 22;
                var1 = var20[var1];
                var1 = var21.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var1.style = var8;
                var1.disabled = var6;
                var1.onPress = var5;
                var5 = 'button';
                var1.accessibilityRole = var5;
                var5 = 23;
                var8 = var20[var5];
                var8 = var21.bind(var4)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var5 = var20[var5];
                var5 = var21.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5["70lEQe"];
                var5 = var8.bind(var9)(var5);
                var1.accessibilityLabel = var5;
                var9 = _closure1_slot14;
                var8 = _closure1_slot1;
                var5 = 24;
                var5 = var20[var5];
                var8 = var8.bind(var4)(var5);
                var5 = {};
                var5.user = var19;
                var17 = var15 === var17;
                var15 = undefined;
                if (var17) {
                    _fun80729_ip = 611;
                    continue _fun80729
                }
            case 608:
                var15 = var18;
            case 611:
                var5.guildId = var15;
                var15 = undefined;
                if (var17) {
                    _fun80729_ip = 623;
                    continue _fun80729
                }
            case 620:
                var15 = var16;
            case 623:
                var5.pendingAvatarSrc = var15;
                var5.pendingAvatarDecoration = var14;
                var5.statusStyle = var13;
                var5.disableStatus = var12;
                var5.style = var11;
                var8 = var9.bind(var4)(var8, var5);
                var5 = new Array(2);
                var5[0] = var8;
                var6 = !var6;
                if (!var6) {
                    _fun80729_ip = 709;
                    continue _fun80729
                }
            case 667:
                var9 = _closure1_slot14;
                var8 = _closure1_slot1;
                var11 = _closure1_slot2;
                var7 = 25;
                var7 = var11[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var10 = var10.editAvatarIcon;
                var7.style = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 709:
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 723:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 31, 1672, 1613, 5544, 660, 1615, 33, 1297, 3237, 10118, 1307, 3972, 5685, 5684, 566, 3068, 5547, 5688, 5541, 7572, 4865, 1234, 5696, 10120, 2]);