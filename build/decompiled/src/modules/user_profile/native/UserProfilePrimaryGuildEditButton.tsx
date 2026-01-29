// modules/user_profile/native/UserProfilePrimaryGuildEditButton.tsx
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
    var11 = 0;
    var6 = var5[var11];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildTagBadgeSize;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'paddingHorizontal': 6,
        'paddingVertical': 2,
        'columnGap': 4
    };
    var9 = 5;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var8.borderRadius = var12;
    var3.tag = var8;
    var8 = {};
    var8.paddingTop = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_4;
    var8.marginLeft = var9;
    var3.newBadge = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfilePrimaryGuildEditButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: UserProfilePrimaryGuildEditButton, environment: var1
        _fun79861: for (var _fun79861_ip = 0;;) switch (_fun79861_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.user;
                var5 = var0.disabled;
                var15 = var0.tagStyle;
                var0 = var0.pendingPrimaryGuildId;
                var4 = undefined;
                var _closure2_slot0 = var4;
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var2 = _closure1_slot6;
                var13 = var2.bind(var4)();
                if (!(var4 === var0)) {
                    _fun79861_ip = 115;
                    continue _fun79861
                }
            case 60:
                var7 = var1.primaryGuild;
                var3 = null;
                var8 = var3 != var7;
                var2 = null;
                if (!var8) {
                    _fun79861_ip = 112;
                    continue _fun79861
                }
            case 77:
                var7 = var7.identityEnabled;
                var2 = null;
                if (!var7) {
                    _fun79861_ip = 112;
                    continue _fun79861
                }
            case 88:
                var7 = var1.primaryGuild;
                var8 = var3 == var7;
                var3 = undefined;
                if (var8) {
                    _fun79861_ip = 109;
                    continue _fun79861
                }
            case 103:
                var3 = var7.identityGuildId;
            case 109:
                var2 = var3;
            case 112:
                var0 = var2;
            case 115:
                _closure2_slot0 = var0;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var7 = 6;
                var7 = var3[var7];
                var11 = var2.bind(var4)(var7);
                var9 = var11.useStateFromStores;
                var7 = _closure1_slot3;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = new Array(1);
                var7[0] = var0;
                var0 = function() { // Environment: var6
                    var2 = _closure1_slot3;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var16 = var9.bind(var11)(var8, var0, var7);
                _closure2_slot1 = var16;
                var0 = 7;
                var0 = var3[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.useUserAvailableGuildsWithTags;
                var0 = var0.bind(var2)();
                _closure2_slot2 = var0;
                var2 = var0.length;
                var0 = 0;
                var8 = var2 > var0;
                var0 = function(arg0) { // Original name: handleSelectPrimaryGuild, environment: var6
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.setPendingPrimaryGuildId;
                    var1 = arg0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                _closure2_slot3 = var0;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun79861_ip = 904;
                    continue _fun79861
                }
            case 239:
                if (!var8) {
                    _fun79861_ip = 904;
                    continue _fun79861
                }
            case 245:
                var1 = var0 == var16;
                var12 = undefined;
                if (var1) {
                    _fun79861_ip = 260;
                    continue _fun79861
                }
            case 254:
                var12 = var16.profile;
            case 260:
                var11 = var0 != var16;
                if (!var11) {
                    _fun79861_ip = 342;
                    continue _fun79861
                }
            case 267:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var9 = var2.bind(var4)(var1);
                var7 = var9.getGuildTagBadgeUrl;
                var3 = var16.id;
                var2 = var0 == var12;
                var1 = undefined;
                if (var2) {
                    _fun79861_ip = 313;
                    continue _fun79861
                }
            case 307:
                var1 = var12.badge;
            case 313:
                var14 = var0 != var1;
                var2 = undefined;
                if (!var14) {
                    _fun79861_ip = 325;
                    continue _fun79861
                }
            case 322:
                var2 = var1;
            case 325:
                var1 = _closure1_slot4;
                var1 = var1.SIZE_24;
                var11 = var7.bind(var9)(var3, var2, var1);
            case 342:
                var7 = var0 != var16;
                var9 = _closure1_slot0;
                var1 = _closure1_slot2;
                var19 = 10;
                var2 = var1[var19];
                var2 = var9.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var1[var19];
                var1 = var9.bind(var4)(var1);
                var1 = var1.t;
                if (var8) {
                    _fun79861_ip = 408;
                    continue _fun79861
                }
            case 393:
                var8 = var1.NGHYUv;
                var17 = var2.bind(var3)(var8);
                _fun79861_ip = 421;
                continue _fun79861;
            case 408:
                var1 = var1.ECv270;
                var17 = var2.bind(var3)(var1);
            case 421:
                if (!var7) {
                    _fun79861_ip = 429;
                    continue _fun79861
                }
            case 424:
                var17 = var16.name;
            case 429:
                var9 = var17;
                if (!(var0 != var12)) {
                    _fun79861_ip = 471;
                    continue _fun79861
                }
            case 436:
                var8 = var12.tag;
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = ', ';
                var9 = var3.bind(var2)(var17, var1, var8);
            case 471:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 11;
                var1 = var3[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.isAndroid;
                var1 = var1.bind(var2)();
                var2 = 4;
                if (!var1) {
                    _fun79861_ip = 510;
                    continue _fun79861
                }
            case 507:
                var2 = 1;
            case 510:
                var18 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 12;
                var1 = var8[var1];
                var1 = var18.bind(var4)(var1);
                var1 = var1.TextStyleSheet;
                var1 = var1["text-md/semibold"];
                var1 = var1.fontSize;
                var14 = var1 + var2;
                var3 = _closure1_slot5;
                var1 = 13;
                var1 = var8[var1];
                var1 = var18.bind(var4)(var1);
                var2 = var1.UserProfileEditFormButton;
                var1 = {};
                var20 = var8[var19];
                var20 = var18.bind(var4)(var20);
                var22 = var20.intl;
                var21 = var22.string;
                var20 = var8[var19];
                var20 = var18.bind(var4)(var20);
                var20 = var20.t;
                var20 = var20["DUD+5n"];
                var20 = var21.bind(var22)(var20);
                var1.label = var20;
                var1.buttonText = var17;
                var1.accessibilityLabel = var9;
                var9 = var8[var19];
                var9 = var18.bind(var4)(var9);
                var17 = var9.intl;
                var9 = var17.string;
                var8 = var8[var19];
                var8 = var18.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8.Xz9c91;
                var8 = var9.bind(var17)(var8);
                var1.accessibilityHint = var8;
                var6 = function() { // Original name: onPress, environment: var6
                    _fun79864: for (var _fun79864_ip = 0;;) switch (_fun79864_ip) {
                        case 0:
                            var4 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 14;
                            var3 = var1[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.openLazy;
                            var3 = _closure1_slot0;
                            var2 = 16;
                            var2 = var1[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = 15;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var3 = var3.bind(var0)(var2, var1);
                            var2 = {};
                            var6 = _closure2_slot2;
                            var2.availableGuilds = var6;
                            var7 = _closure2_slot1;
                            var6 = null;
                            var7 = var6 != var7;
                            if (!var7) {
                                _fun79864_ip = 96;
                                continue _fun79864
                            }
                        case 92:
                            var6 = _closure2_slot1;
                        case 96:
                            var2.userPrimaryGuild = var6;
                            var1 = _closure2_slot3;
                            var2.onSelectGuild = var1;
                            var1 = 'UserPrimaryGuildListBottomSheet';
                            var1 = var4.bind(var5)(var3, var1, var2);
                            return var0;
                    }
                };
                var1.onPress = var6;
                var6 = null;
                if (!var7) {
                    _fun79861_ip = 736;
                    continue _fun79861
                }
            case 700:
                var9 = _closure1_slot5;
                var8 = _closure1_slot1;
                var17 = _closure1_slot2;
                var7 = 17;
                var7 = var17[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var7.guild = var16;
                var6 = var9.bind(var4)(var8, var7);
            case 736:
                var1.leading = var6;
                var7 = var0 != var12;
                var6 = null;
                if (!var7) {
                    _fun79861_ip = 887;
                    continue _fun79861
                }
            case 753:
                var9 = _closure1_slot5;
                var8 = _closure1_slot0;
                var16 = _closure1_slot2;
                var7 = 18;
                var7 = var16[var7];
                var7 = var8.bind(var4)(var7);
                var8 = var7.BaseGuildTagChiplet;
                var7 = {};
                var16 = var13.tag;
                var13 = new Array(2);
                var13[0] = var16;
                var13[1] = var15;
                var7.containerStyles = var13;
                var13 = {};
                var13.lineHeight = var14;
                var7.textStyle = var13;
                var13 = var12.tag;
                var14 = var0 != var13;
                var12 = undefined;
                if (!var14) {
                    _fun79861_ip = 836;
                    continue _fun79861
                }
            case 833:
                var12 = var13;
            case 836:
                var7.guildTag = var12;
                var7.guildBadge = var11;
                var10 = _closure1_slot4;
                var10 = var10.SIZE_16;
                var7.badgeSize = var10;
                var10 = 'text-md/semibold';
                var7.textVariant = var10;
                var10 = 'text-default';
                var7.textColor = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 887:
                var1.trailing = var6;
                var1.disabled = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 904:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1410, 6597, 33, 1297, 671, 566, 10130, 5679, 6767, 1234, 478, 3895, 10117, 3237, 10131, 1307, 7353, 7336, 2]);