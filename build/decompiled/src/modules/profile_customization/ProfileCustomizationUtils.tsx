// modules/profile_customization/ProfileCustomizationUtils.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/profile_customization/ProfileCustomizationUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun49730: for (var _fun49730_ip = 0;;) switch (_fun49730_ip) {
                case 0:
                    var1 = _closure1_slot6;
                    var0 = var1.getMutableAllGuildsAndMembers;
                    var9 = var0.bind(var1)();
                    var2 = {};
                    var7 = var9;
                    var3 = null;
                    for (var4 in var7)
                        case 35: {
                            case 44: var12 = var4;
                            var11 = var9[var12];
                            var10 = _closure2_slot0;
                            var11 = var11[var10];
                            var13 = var3 == var11;
                            var10 = undefined;
                            if (var13) {
                                _fun49730_ip = 74;
                                continue _fun49730
                            }
                            case 68: var10 = var11.avatar;
                            case 74: if (var3 == var10) {
                                _fun49730_ip = 35;
                                continue _fun49730
                            }
                            case 78: var11 = var2[var10];
                            if (!(var3 == var11)) {
                                _fun49730_ip = 94;
                                continue _fun49730
                            }
                            case 86: var11 = new Array(0);
                            var2[var10] = var11;
                            case 94: var11 = var2[var10];
                            var10 = var11.push;
                            var10 = var10.bind(var11)(var12);
                            _fun49730_ip = 35;
                            continue _fun49730;
                        }
                case 110:
                    var0 = global;
                    var1 = var0.Object;
                    var0 = var1.entries;
                    var2 = var0.bind(var1)(var2);
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var0 = 1;
                        var1 = var1[var0];
                        var0 = 0;
                        var0 = var1[var0];
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useAvatarsWithGuilds = var3;
    var3 = function arg0, arg1() {
        _fun49732: for (var _fun49732_ip = 0;;) switch (_fun49732_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 5;
                var4 = var7[var2];
                var6 = undefined;
                var10 = var5.bind(var6)(var4);
                var9 = var10.useStateFromStores;
                var4 = _closure1_slot6;
                var8 = new Array(1);
                var8[0] = var4;
                var4 = function() { // Environment: var0
                    _fun49733: for (var _fun49733_ip = 0;;) switch (_fun49733_ip) {
                        case 0:
                            var3 = _closure2_slot1;
                            var2 = undefined;
                            var0 = null;
                            if (!(var2 !== var3)) {
                                _fun49733_ip = 47;
                                continue _fun49733
                            }
                        case 15:
                            var4 = _closure1_slot6;
                            var3 = var4.getMember;
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var3.bind(var4)(var2, var1);
                        case 47:
                            return var0;
                    }
                };
                var4 = var9.bind(var10)(var8, var4);
                var2 = var7[var2];
                var5 = var5.bind(var6)(var2);
                var2 = var5.useStateFromStoresObject;
                var7 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var7;
                var0 = function() { // Environment: var0
                    var0 = {};
                    var3 = _closure1_slot4;
                    var1 = var3.getPendingChanges;
                    var2 = _closure2_slot1;
                    var1 = var1.bind(var3)(var2);
                    var1 = var1.pendingNameplate;
                    var0.pendingNameplate = var1;
                    var1 = var3.getErrors;
                    var1 = var1.bind(var3)(var2);
                    var1 = var1.nameplate;
                    var0.pendingErrors = var1;
                    return var0;
                };
                var0 = var2.bind(var5)(var1, var0);
                var2 = var0.pendingNameplate;
                var1 = var0.pendingErrors;
                var0 = {};
                var3 = var3.nameplate;
                var0.userNameplate = var3;
                var5 = null;
                var7 = var5 == var4;
                var3 = undefined;
                if (var7) {
                    _fun49732_ip = 164;
                    continue _fun49732
                }
            case 143:
                var4 = var4.collectibles;
                var5 = var5 == var4;
                var3 = undefined;
                if (var5) {
                    _fun49732_ip = 164;
                    continue _fun49732
                }
            case 158:
                var3 = var4.nameplate;
            case 164:
                var0.guildNameplate = var3;
                var0.pendingNameplate = var2;
                var0.pendingErrors = var1;
                return var0;
        }
    };
    var2.useGuildMemberAndUserPendingNameplate = var3;
    var3 = function arg0, arg1() {
        _fun49735: for (var _fun49735_ip = 0;;) switch (_fun49735_ip) {
            case 0:
                var8 = arg0;
                var _closure2_slot0 = var8;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 5;
                var5 = var6[var2];
                var4 = undefined;
                var10 = var3.bind(var4)(var5);
                var9 = var10.useStateFromStores;
                var5 = _closure1_slot6;
                var7 = new Array(1);
                var7[0] = var5;
                var5 = function() { // Environment: var0
                    _fun49736: for (var _fun49736_ip = 0;;) switch (_fun49736_ip) {
                        case 0:
                            var4 = _closure2_slot1;
                            var3 = null;
                            var2 = undefined;
                            var0 = null;
                            if (!(var2 !== var4)) {
                                _fun49736_ip = 62;
                                continue _fun49736
                            }
                        case 17:
                            var2 = _closure2_slot0;
                            var2 = var3 == var2;
                            var0 = null;
                            if (var2) {
                                _fun49736_ip = 62;
                                continue _fun49736
                            }
                        case 30:
                            var4 = _closure1_slot6;
                            var3 = var4.getMember;
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var3.bind(var4)(var2, var1);
                        case 62:
                            return var0;
                    }
                };
                var5 = var9.bind(var10)(var7, var5);
                var2 = var6[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useStateFromStoresObject;
                var6 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var6;
                var0 = function() { // Environment: var0
                    var0 = {};
                    var3 = _closure1_slot4;
                    var1 = var3.getPendingChanges;
                    var2 = _closure2_slot1;
                    var1 = var1.bind(var3)(var2);
                    var1 = var1.pendingDisplayNameStyles;
                    var0.pendingDisplayNameStyles = var1;
                    var1 = var3.getTryItOutChanges;
                    var1 = var1.bind(var3)();
                    var1 = var1.tryItOutDisplayNameStyles;
                    var0.tryItOutDisplayNameStyles = var1;
                    var1 = var3.getErrors;
                    var1 = var1.bind(var3)(var2);
                    var1 = var1.displayNameStyles;
                    var0.pendingErrors = var1;
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                var3 = var0.pendingDisplayNameStyles;
                var2 = var0.tryItOutDisplayNameStyles;
                var1 = var0.pendingErrors;
                var0 = {};
                var6 = null;
                var9 = var6 == var8;
                var7 = undefined;
                if (var9) {
                    _fun49735_ip = 144;
                    continue _fun49735
                }
            case 138:
                var7 = var8.displayNameStyles;
            case 144:
                var0.userDisplayNameStyles = var7;
                var6 = var6 == var5;
                var4 = undefined;
                if (var6) {
                    _fun49735_ip = 166;
                    continue _fun49735
                }
            case 160:
                var4 = var5.displayNameStyles;
            case 166:
                var0.guildDisplayNameStyles = var4;
                var0.pendingDisplayNameStyles = var3;
                var0.tryItOutDisplayNameStyles = var2;
                var0.pendingErrors = var1;
                return var0;
        }
    };
    var2.useGuildMemberOrUserPendingDisplayNameStyles = var3;
    var3 = function arg0() {
        _fun49738: for (var _fun49738_ip = 0;;) switch (_fun49738_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.user;
                var _closure2_slot0 = var0;
                var4 = var1.guildId;
                var _closure2_slot1 = var4;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 5;
                var5 = var5[var1];
                var1 = undefined;
                var6 = var6.bind(var1)(var5);
                var5 = var6.useStateFromStores;
                var7 = _closure1_slot6;
                var3 = new Array(1);
                var3[0] = var7;
                var2 = function() { // Environment: var2
                    _fun49739: for (var _fun49739_ip = 0;;) switch (_fun49739_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun49739_ip = 48;
                                continue _fun49739
                            }
                        case 16:
                            var4 = _closure1_slot6;
                            var3 = var4.getMember;
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var3.bind(var4)(var2, var1);
                        case 48:
                            return var0;
                    }
                };
                var2 = var5.bind(var6)(var3, var2);
                var3 = null;
                if (!(var3 == var4)) {
                    _fun49738_ip = 90;
                    continue _fun49738
                }
            case 82:
                var0 = var0.avatarDecoration;
                _fun49738_ip = 108;
                continue _fun49738;
            case 90:
                var3 = var3 == var2;
                var1 = undefined;
                if (var3) {
                    _fun49738_ip = 105;
                    continue _fun49738
                }
            case 99:
                var1 = var2.avatarDecoration;
            case 105:
                var0 = var1;
            case 108:
                return var0;
        }
    };
    var2.useUserAvatarDecoration = var3;
    var3 = function arg0() {
        var1 = arg0;
        var2 = var1.user;
        var _closure2_slot0 = var2;
        var1 = var1.guildId;
        var _closure2_slot1 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot5;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun49741: for (var _fun49741_ip = 0;;) switch (_fun49741_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun49741_ip = 62;
                        continue _fun49741
                    }
                case 13:
                    var5 = _closure1_slot5;
                    var4 = var5.getGuildMemberProfile;
                    var0 = _closure2_slot0;
                    var3 = var0.id;
                    var0 = _closure2_slot1;
                    var3 = var4.bind(var5)(var3, var0);
                    var4 = var1 == var3;
                    var0 = undefined;
                    if (var4) {
                        _fun49741_ip = 60;
                        continue _fun49741
                    }
                case 54:
                    var0 = var3.profileEffect;
                case 60:
                    _fun49741_ip = 107;
                    continue _fun49741;
                case 62:
                    var4 = _closure1_slot5;
                    var3 = var4.getUserProfile;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    var3 = var1 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun49741_ip = 104;
                        continue _fun49741
                    }
                case 98:
                    var1 = var2.profileEffect;
                case 104:
                    var0 = var1;
                case 107:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useUserProfileEffect = var3;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStoresObject;
        var4 = _closure1_slot4;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var0 = {};
            var3 = _closure1_slot4;
            var1 = var3.getPendingChanges;
            var2 = _closure2_slot0;
            var1 = var1.bind(var3)(var2);
            var1 = var1.pendingAvatarDecoration;
            var0.pendingAvatarDecoration = var1;
            var1 = var3.getErrors;
            var1 = var1.bind(var3)(var2);
            var1 = var1.avatarDecoration;
            var0.errors = var1;
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useAvatarDecorationSettings = var3;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStoresObject;
        var4 = _closure1_slot4;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var0 = {};
            var3 = _closure1_slot4;
            var1 = var3.getPendingChanges;
            var2 = _closure2_slot0;
            var1 = var1.bind(var3)(var2);
            var1 = var1.pendingProfileEffect;
            var0.pendingProfileEffect = var1;
            var1 = var3.getErrors;
            var1 = var1.bind(var3)(var2);
            var1 = var1.profileEffect;
            var0.errors = var1;
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useProfileEffectSettings = var3;
    var3 = function arg0, arg1() {
        _fun49746: for (var _fun49746_ip = 0;;) switch (_fun49746_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.setPendingBio;
                var5 = arg1;
                var1 = undefined;
                if (!(var4 !== var5)) {
                    _fun49746_ip = 46;
                    continue _fun49746
                }
            case 43:
                var1 = var4;
            case 46:
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.setNewPendingUserBio = var3;
    var3 = function arg0, arg1() {
        _fun49747: for (var _fun49747_ip = 0;;) switch (_fun49747_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.setPendingPronouns;
                var5 = arg1;
                var1 = undefined;
                if (!(var4 !== var5)) {
                    _fun49747_ip = 46;
                    continue _fun49747
                }
            case 43:
                var1 = var4;
            case 46:
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.setNewPendingUserPronouns = var3;
    var3 = function arg0, arg1() {
        _fun49748: for (var _fun49748_ip = 0;;) switch (_fun49748_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.setPendingAvatar;
                var1 = null;
                var1 = var1 == var4;
                var6 = undefined;
                if (var1) {
                    _fun49748_ip = 51;
                    continue _fun49748
                }
            case 45:
                var6 = var4.imageUri;
            case 51:
                var5 = arg1;
                var1 = undefined;
                if (!(var6 !== var5)) {
                    _fun49748_ip = 63;
                    continue _fun49748
                }
            case 60:
                var1 = var4;
            case 63:
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.setNewPendingAvatar = var3;
    var3 = function arg0, arg1() {
        _fun49749: for (var _fun49749_ip = 0;;) switch (_fun49749_ip) {
            case 0:
                var5 = arg0;
                var8 = arg1;
                var2 = _closure1_slot7;
                var0 = var2.getCurrentUser;
                var2 = var0.bind(var2)();
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 8;
                var3 = var3[var0];
                var0 = undefined;
                var7 = var4.bind(var0)(var3);
                var6 = null;
                var4 = var6 != var2;
                var3 = 'user cannot be null';
                var3 = var7.bind(var0)(var4, var3);
                if (!(var6 != var8)) {
                    _fun49749_ip = 211;
                    continue _fun49749
                }
            case 69:
                var7 = _closure1_slot6;
                var4 = var7.getMember;
                var3 = var2.id;
                var3 = var4.bind(var7)(var8, var3);
                var4 = var6 == var3;
                var8 = undefined;
                if (var4) {
                    _fun49749_ip = 105;
                    continue _fun49749
                }
            case 99:
                var8 = var3.avatarDecoration;
            case 105:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var3 = 10;
                var3 = var11[var3];
                var7 = var10.bind(var0)(var3);
                var4 = var7.setPendingCollectiblesItem;
                var3 = {};
                var9 = 9;
                var9 = var11[var9];
                var9 = var10.bind(var0)(var9);
                var9 = var9.CollectiblesItemType;
                var9 = var9.AVATAR_DECORATION;
                var3.type = var9;
                var9 = var6 == var5;
                var10 = undefined;
                if (var9) {
                    _fun49749_ip = 176;
                    continue _fun49749
                }
            case 170:
                var10 = var5.skuId;
            case 176:
                var11 = var6 == var8;
                var9 = undefined;
                if (var11) {
                    _fun49749_ip = 191;
                    continue _fun49749
                }
            case 185:
                var9 = var8.skuId;
            case 191:
                var8 = undefined;
                if (!(var10 !== var9)) {
                    _fun49749_ip = 200;
                    continue _fun49749
                }
            case 197:
                var8 = var5;
            case 200:
                var3.value = var8;
                var3 = var4.bind(var7)(var3);
                _fun49749_ip = 321;
                continue _fun49749;
            case 211:
                var4 = var2.avatarDecoration;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 7;
                var1 = var9[var1];
                var3 = var8.bind(var0)(var1);
                var2 = var3.setPendingCollectiblesItem;
                var1 = {};
                var7 = 9;
                var7 = var9[var7];
                var7 = var8.bind(var0)(var7);
                var7 = var7.CollectiblesItemType;
                var7 = var7.AVATAR_DECORATION;
                var1.type = var7;
                var8 = var6 == var5;
                var7 = undefined;
                if (var8) {
                    _fun49749_ip = 288;
                    continue _fun49749
                }
            case 282:
                var7 = var5.skuId;
            case 288:
                var8 = var6 == var4;
                var6 = undefined;
                if (var8) {
                    _fun49749_ip = 303;
                    continue _fun49749
                }
            case 297:
                var6 = var4.skuId;
            case 303:
                var4 = undefined;
                if (!(var7 !== var6)) {
                    _fun49749_ip = 312;
                    continue _fun49749
                }
            case 309:
                var4 = var5;
            case 312:
                var1.value = var4;
                var1 = var2.bind(var3)(var1);
            case 321:
                return var0;
        }
    };
    var2.setNewPendingAvatarDecoration = var3;
    var3 = function arg0, arg1() {
        _fun49750: for (var _fun49750_ip = 0;;) switch (_fun49750_ip) {
            case 0:
                var5 = arg0;
                var8 = arg1;
                var2 = _closure1_slot7;
                var0 = var2.getCurrentUser;
                var2 = var0.bind(var2)();
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 8;
                var3 = var3[var0];
                var0 = undefined;
                var7 = var4.bind(var0)(var3);
                var6 = null;
                var4 = var6 != var2;
                var3 = 'user cannot be null';
                var3 = var7.bind(var0)(var4, var3);
                if (!(var6 != var8)) {
                    _fun49750_ip = 214;
                    continue _fun49750
                }
            case 69:
                var7 = _closure1_slot5;
                var4 = var7.getGuildMemberProfile;
                var3 = var2.id;
                var3 = var4.bind(var7)(var3, var8);
                var4 = var6 == var3;
                var8 = undefined;
                if (var4) {
                    _fun49750_ip = 105;
                    continue _fun49750
                }
            case 99:
                var8 = var3.profileEffect;
            case 105:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var3 = 10;
                var3 = var11[var3];
                var7 = var10.bind(var0)(var3);
                var4 = var7.setPendingCollectiblesItem;
                var3 = {};
                var9 = 9;
                var9 = var11[var9];
                var9 = var10.bind(var0)(var9);
                var9 = var9.CollectiblesItemType;
                var9 = var9.PROFILE_EFFECT;
                var3.type = var9;
                var9 = var6 == var5;
                var10 = undefined;
                if (var9) {
                    _fun49750_ip = 176;
                    continue _fun49750
                }
            case 170:
                var10 = var5.skuId;
            case 176:
                var11 = var6 == var8;
                var9 = undefined;
                if (var11) {
                    _fun49750_ip = 191;
                    continue _fun49750
                }
            case 185:
                var9 = var8.skuId;
            case 191:
                var8 = undefined;
                if (!(var10 !== var9)) {
                    _fun49750_ip = 200;
                    continue _fun49750
                }
            case 197:
                var8 = var5;
            case 200:
                var3.value = var8;
                var3 = var4.bind(var7)(var3);
                _fun49750_ip = 353;
                continue _fun49750;
            case 214:
                var4 = _closure1_slot5;
                var3 = var4.getUserProfile;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var3 = var6 == var2;
                var4 = undefined;
                if (var3) {
                    _fun49750_ip = 249;
                    continue _fun49750
                }
            case 243:
                var4 = var2.profileEffect;
            case 249:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 7;
                var1 = var9[var1];
                var3 = var8.bind(var0)(var1);
                var2 = var3.setPendingCollectiblesItem;
                var1 = {};
                var7 = 9;
                var7 = var9[var7];
                var7 = var8.bind(var0)(var7);
                var7 = var7.CollectiblesItemType;
                var7 = var7.PROFILE_EFFECT;
                var1.type = var7;
                var8 = var6 == var5;
                var7 = undefined;
                if (var8) {
                    _fun49750_ip = 320;
                    continue _fun49750
                }
            case 314:
                var7 = var5.skuId;
            case 320:
                var8 = var6 == var4;
                var6 = undefined;
                if (var8) {
                    _fun49750_ip = 335;
                    continue _fun49750
                }
            case 329:
                var6 = var4.skuId;
            case 335:
                var4 = undefined;
                if (!(var7 !== var6)) {
                    _fun49750_ip = 344;
                    continue _fun49750
                }
            case 341:
                var4 = var5;
            case 344:
                var1.value = var4;
                var1 = var2.bind(var3)(var1);
            case 353:
                return var0;
        }
    };
    var2.setNewPendingProfileEffect = var3;
    var3 = function arg0, arg1() {
        _fun49751: for (var _fun49751_ip = 0;;) switch (_fun49751_ip) {
            case 0:
                var5 = arg0;
                var8 = arg1;
                var2 = _closure1_slot7;
                var0 = var2.getCurrentUser;
                var2 = var0.bind(var2)();
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 8;
                var3 = var3[var0];
                var0 = undefined;
                var7 = var4.bind(var0)(var3);
                var6 = null;
                var4 = var6 != var2;
                var3 = 'user cannot be null';
                var3 = var7.bind(var0)(var4, var3);
                if (!(var6 != var8)) {
                    _fun49751_ip = 229;
                    continue _fun49751
                }
            case 69:
                var7 = _closure1_slot6;
                var4 = var7.getMember;
                var3 = var2.id;
                var3 = var4.bind(var7)(var8, var3);
                var4 = var6 == var3;
                var8 = undefined;
                if (var4) {
                    _fun49751_ip = 120;
                    continue _fun49751
                }
            case 99:
                var3 = var3.collectibles;
                var4 = var6 == var3;
                var8 = undefined;
                if (var4) {
                    _fun49751_ip = 120;
                    continue _fun49751
                }
            case 114:
                var8 = var3.nameplate;
            case 120:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var3 = 10;
                var3 = var11[var3];
                var7 = var10.bind(var0)(var3);
                var4 = var7.setPendingCollectiblesItem;
                var3 = {};
                var9 = 9;
                var9 = var11[var9];
                var9 = var10.bind(var0)(var9);
                var9 = var9.CollectiblesItemType;
                var9 = var9.NAMEPLATE;
                var3.type = var9;
                var9 = var6 == var5;
                var10 = undefined;
                if (var9) {
                    _fun49751_ip = 191;
                    continue _fun49751
                }
            case 185:
                var10 = var5.skuId;
            case 191:
                var11 = var6 == var8;
                var9 = undefined;
                if (var11) {
                    _fun49751_ip = 206;
                    continue _fun49751
                }
            case 200:
                var9 = var8.skuId;
            case 206:
                var8 = undefined;
                if (!(var10 !== var9)) {
                    _fun49751_ip = 215;
                    continue _fun49751
                }
            case 212:
                var8 = var5;
            case 215:
                var3.value = var8;
                var3 = var4.bind(var7)(var3);
                _fun49751_ip = 354;
                continue _fun49751;
            case 229:
                var2 = var2.collectibles;
                var3 = var6 == var2;
                var4 = undefined;
                if (var3) {
                    _fun49751_ip = 250;
                    continue _fun49751
                }
            case 244:
                var4 = var2.nameplate;
            case 250:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 7;
                var1 = var9[var1];
                var3 = var8.bind(var0)(var1);
                var2 = var3.setPendingCollectiblesItem;
                var1 = {};
                var7 = 9;
                var7 = var9[var7];
                var7 = var8.bind(var0)(var7);
                var7 = var7.CollectiblesItemType;
                var7 = var7.NAMEPLATE;
                var1.type = var7;
                var8 = var6 == var5;
                var7 = undefined;
                if (var8) {
                    _fun49751_ip = 321;
                    continue _fun49751
                }
            case 315:
                var7 = var5.skuId;
            case 321:
                var8 = var6 == var4;
                var6 = undefined;
                if (var8) {
                    _fun49751_ip = 336;
                    continue _fun49751
                }
            case 330:
                var6 = var4.skuId;
            case 336:
                var4 = undefined;
                if (!(var7 !== var6)) {
                    _fun49751_ip = 345;
                    continue _fun49751
                }
            case 342:
                var4 = var5;
            case 345:
                var1.value = var4;
                var1 = var2.bind(var3)(var1);
            case 354:
                return var0;
        }
    };
    var2.setNewPendingNameplate = var3;
    var3 = function arg0() {
        _fun49752: for (var _fun49752_ip = 0;;) switch (_fun49752_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.userValue;
                var4 = var1.guildValue;
                var0 = var1.pendingValue;
                var3 = var1.guildId;
                var6 = '';
                if (!(var6 !== var0)) {
                    _fun49752_ip = 77;
                    continue _fun49752
                }
            case 34:
                var5 = null;
                if (!(var5 !== var0)) {
                    _fun49752_ip = 77;
                    continue _fun49752
                }
            case 40:
                if (!(var6 !== var0)) {
                    _fun49752_ip = 48;
                    continue _fun49752
                }
            case 44:
                if (!(var5 == var0)) {
                    _fun49752_ip = 75;
                    continue _fun49752
                }
            case 48:
                var1 = var2;
                if (!(var5 != var3)) {
                    _fun49752_ip = 72;
                    continue _fun49752
                }
            case 55:
                var1 = var2;
                if (!(var6 !== var4)) {
                    _fun49752_ip = 72;
                    continue _fun49752
                }
            case 62:
                var1 = var2;
                if (!(var5 != var4)) {
                    _fun49752_ip = 72;
                    continue _fun49752
                }
            case 69:
                var1 = var4;
            case 72:
                var0 = var1;
            case 75:
                _fun49752_ip = 92;
                continue _fun49752;
            case 77:
                var1 = null;
                var3 = var1 != var3;
                if (!var3) {
                    _fun49752_ip = 89;
                    continue _fun49752
                }
            case 86:
                var1 = var2;
            case 89:
                var0 = var1;
            case 92:
                return var0;
        }
    };
    var2.getProfilePreviewValue = var3;
    var3 = function arg0, arg1() {
        _fun49753: for (var _fun49753_ip = 0;;) switch (_fun49753_ip) {
            case 0:
                var1 = arg0;
                var0 = undefined;
                if (!(var0 !== var1)) {
                    _fun49753_ip = 17;
                    continue _fun49753
                }
            case 9:
                var0 = null;
                var0 = var0 != var1;
                _fun49753_ip = 26;
                continue _fun49753;
            case 17:
                var2 = null;
                var1 = arg1;
                var0 = var2 != var1;
            case 26:
                return var0;
        }
    };
    var2.showRemoveAvatar = var3;
    var1 = function arg0, arg1() {
        _fun49754: for (var _fun49754_ip = 0;;) switch (_fun49754_ip) {
            case 0:
                var1 = arg0;
                var0 = undefined;
                if (!(var0 !== var1)) {
                    _fun49754_ip = 17;
                    continue _fun49754
                }
            case 9:
                var0 = null;
                var0 = var0 != var1;
                _fun49754_ip = 26;
                continue _fun49754;
            case 17:
                var2 = null;
                var1 = arg1;
                var0 = var2 != var1;
            case 26:
                return var0;
        }
    };
    var2.showRemoveBanner = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 5634, 4660, 1683, 1621, 566, 5637, 5772, 44, 3494, 5773, 2]);