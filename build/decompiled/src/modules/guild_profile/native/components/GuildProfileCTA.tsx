// modules/guild_profile/native/components/GuildProfileCTA.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var3 = var3.AnalyticsObjects;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ProfileCustomizationScrollPositions;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_profile/native/components/GuildProfileCTA.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun59959: for (var _fun59959_ip = 0;;) switch (_fun59959_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.profile;
                var _closure2_slot0 = var11;
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var13 = 4;
                var1 = var9[var13];
                var3 = undefined;
                var1 = var8.bind(var3)(var1);
                var1 = var1.bind(var3)(var11);
                var2 = var1.guildId;
                var _closure2_slot1 = var2;
                var4 = var1.validInviteKey;
                var _closure2_slot2 = var4;
                var6 = var1.ctaType;
                var1 = 5;
                var1 = var9[var1];
                var5 = var8.bind(var3)(var1);
                var1 = {};
                var10 = _closure1_slot5;
                var10 = var10.GUILD_TAG;
                var1.scrollPosition = var10;
                var1 = var5.bind(var3)(var1);
                var _closure2_slot3 = var1;
                var14 = _closure1_slot3;
                var10 = var14.useCallback;
                var5 = new Array(1);
                var5[0] = var2;
                var1 = function() { // Environment: var7
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var0 = 6;
                    var2 = var4[var0];
                    var0 = undefined;
                    var6 = var3.bind(var0)(var2);
                    var5 = var6.hideActionSheet;
                    var3 = _closure2_slot1;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var7 = var2.concat;
                    var2 = 'GuildProfileActionSheet:';
                    var2 = var7.bind(var2)(var3);
                    var2 = var5.bind(var6)(var2);
                    var2 = _closure1_slot0;
                    var1 = 7;
                    var1 = var4[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.transitionToGuild;
                    var1 = var1.bind(var2)(var3);
                    return var0;
                };
                var5 = var10.bind(var14)(var1, var5);
                var12 = var14.useCallback;
                var10 = new Array(2);
                var10[0] = var2;
                var10[1] = var4;
                var1 = function() { // Environment: var7
                    _fun59961: for (var _fun59961_ip = 0;;) switch (_fun59961_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun59961_ip = 127;
                                continue _fun59961
                            }
                        case 13:
                            var2 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var0 = 6;
                            var0 = var4[var0];
                            var1 = undefined;
                            var6 = var2.bind(var1)(var0);
                            var5 = var6.hideActionSheet;
                            var8 = _closure2_slot1;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var7 = var0.concat;
                            var0 = 'GuildProfileActionSheet:';
                            var0 = var7.bind(var0)(var8);
                            var0 = var5.bind(var6)(var0);
                            var0 = 8;
                            var0 = var4[var0];
                            var2 = var2.bind(var1)(var0);
                            var1 = var2.acceptInviteAndTransitionToInviteChannel;
                            var0 = {};
                            var3 = _closure2_slot2;
                            var0.inviteKey = var3;
                            var3 = {};
                            var4 = 'guild_profile';
                            var3.location = var4;
                            var0.context = var3;
                            var0 = var1.bind(var2)(var0);
                        case 127:
                            var0 = undefined;
                            return var0;
                    }
                };
                var12 = var12.bind(var14)(var1, var10);
                var _closure2_slot4 = var12;
                var1 = 9;
                var1 = var9[var1];
                var1 = var8.bind(var3)(var1);
                var15 = var1.bind(var3)(var2);
                var _closure2_slot5 = var15;
                var10 = var14.useCallback;
                var9 = new Array(2);
                var9[0] = var2;
                var1 = null;
                var16 = var1 == var15;
                var8 = undefined;
                if (var16) {
                    _fun59959_ip = 219;
                    continue _fun59959
                }
            case 213:
                var8 = var15.applicationStatus;
            case 219:
                var9[1] = var8;
                var8 = function() { // Environment: var7
                    _fun59962: for (var _fun59962_ip = 0;;) switch (_fun59962_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var0 = null;
                            var2 = var0 == var2;
                            var0 = undefined;
                            var4 = undefined;
                            if (var2) {
                                _fun59962_ip = 30;
                                continue _fun59962
                            }
                        case 20:
                            var2 = _closure2_slot5;
                            var4 = var2.applicationStatus;
                        case 30:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var6 = 10;
                            var3 = var3[var6];
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.GuildJoinRequestApplicationStatuses;
                            var3 = var3.SUBMITTED;
                            if (!(var3 !== var4)) {
                                _fun59962_ip = 228;
                                continue _fun59962
                            }
                        case 72:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var6];
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.GuildJoinRequestApplicationStatuses;
                            var3 = var3.REJECTED;
                            if (!(var3 !== var4)) {
                                _fun59962_ip = 178;
                                continue _fun59962
                            }
                        case 105:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var6];
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.GuildJoinRequestApplicationStatuses;
                            var3 = var3.STARTED;
                            if (!(var3 === var4)) {
                                _fun59962_ip = 263;
                                continue _fun59962
                            }
                        case 141:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 11;
                            var3 = var5[var3];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.openMemberVerificationIncompleteAlert;
                            var3 = _closure2_slot1;
                            var3 = var4.bind(var5)(var3);
                            _fun59962_ip = 263;
                            continue _fun59962;
                        case 178:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 11;
                            var3 = var5[var3];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.openMemberVerificationRejectedAlert;
                            var3 = {};
                            var6 = _closure2_slot1;
                            var3.guildId = var6;
                            var6 = true;
                            var3.canWithdraw = var6;
                            var3 = var4.bind(var5)(var3);
                            _fun59962_ip = 263;
                            continue _fun59962;
                        case 228:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 11;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.openMemberVerificationPendingAlert;
                            var1 = _closure2_slot1;
                            var1 = var2.bind(var3)(var1);
                        case 263:
                            return var0;
                    }
                };
                var9 = var10.bind(var14)(var8, var9);
                var14 = _closure1_slot3;
                var10 = var14.useCallback;
                var8 = new Array(4);
                var8[0] = var2;
                var8[1] = var12;
                var11 = var11.visibility;
                var8[2] = var11;
                var8[3] = var4;
                var4 = function() { // Environment: var7
                    _fun59963: for (var _fun59963_ip = 0;;) switch (_fun59963_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var0 = 6;
                            var1 = var6[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var1);
                            var4 = var5.hideActionSheet;
                            var8 = _closure2_slot1;
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var7 = var3.concat;
                            var3 = 'GuildProfileActionSheet:';
                            var3 = var7.bind(var3)(var8);
                            var3 = var4.bind(var5)(var3);
                            var3 = _closure2_slot0;
                            var4 = var3.visibility;
                            var5 = _closure1_slot0;
                            var3 = 12;
                            var3 = var6[var3];
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.GuildProfileVisibility;
                            var3 = var3.PUBLIC_WITH_RECRUITMENT;
                            if (!(var4 !== var3)) {
                                _fun59963_ip = 119;
                                continue _fun59963
                            }
                        case 109:
                            var4 = _closure2_slot2;
                            var3 = null;
                            if (!(var3 == var4)) {
                                _fun59963_ip = 156;
                                continue _fun59963
                            }
                        case 119:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 13;
                            var2 = var4[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.openMemberVerificationModal;
                            var2 = _closure2_slot1;
                            var2 = var3.bind(var4)(var2);
                            _fun59963_ip = 164;
                            continue _fun59963;
                        case 156:
                            var1 = _closure2_slot4;
                            var1 = var1.bind(var0)();
                        case 164:
                            return var0;
                    }
                };
                var10 = var10.bind(var14)(var4, var8);
                var8 = var14.useCallback;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var7
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 6;
                    var1 = var3[var0];
                    var0 = undefined;
                    var6 = var2.bind(var0)(var1);
                    var2 = var6.hideActionSheet;
                    var4 = _closure2_slot1;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var7 = var1.concat;
                    var1 = 'GuildProfileActionSheet:';
                    var1 = var7.bind(var1)(var4);
                    var1 = var2.bind(var6)(var1);
                    var2 = _closure1_slot0;
                    var1 = 14;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.startLurking;
                    var1 = {};
                    var5 = _closure1_slot4;
                    var5 = var5.GUILD_PROFILE;
                    var1.object = var5;
                    var1 = var2.bind(var3)(var4, var1);
                    return var0;
                };
                var11 = var8.bind(var14)(var2, var4);
                var8 = var14.useMemo;
                var4 = function() { // Environment: var7
                    var0 = {
                        'grow': true,
                        'size': 'lg',
                        'variant': 'active'
                    };
                    return var0;
                };
                var2 = new Array(0);
                var4 = var8.bind(var14)(var4, var2);
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var13];
                var2 = var8.bind(var3)(var2);
                var2 = var2.CTATypes;
                var2 = var2.IS_MEMBER;
                if (!(var2 !== var6)) {
                    _fun59959_ip = 1121;
                    continue _fun59959
                }
            case 360:
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var13];
                var2 = var8.bind(var3)(var2);
                var2 = var2.CTATypes;
                var2 = var2.ADOPT_TAG;
                if (!(var2 !== var6)) {
                    _fun59959_ip = 999;
                    continue _fun59959
                }
            case 396:
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var13];
                var2 = var8.bind(var3)(var2);
                var2 = var2.CTATypes;
                var2 = var2.HAS_APPLICATION;
                if (!(var2 !== var6)) {
                    _fun59959_ip = 884;
                    continue _fun59959
                }
            case 432:
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var13];
                var2 = var8.bind(var3)(var2);
                var2 = var2.CTATypes;
                var2 = var2.APPLY_TO_JOIN;
                if (!(var2 !== var6)) {
                    _fun59959_ip = 769;
                    continue _fun59959
                }
            case 468:
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var13];
                var2 = var8.bind(var3)(var2);
                var2 = var2.CTATypes;
                var2 = var2.LURK_DISCOVERABLE;
                if (!(var2 !== var6)) {
                    _fun59959_ip = 654;
                    continue _fun59959
                }
            case 504:
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var13];
                var2 = var8.bind(var3)(var2);
                var2 = var2.CTATypes;
                var2 = var2.JOIN_VIA_INVITE;
                if (!(var2 !== var6)) {
                    _fun59959_ip = 539;
                    continue _fun59959
                }
            case 537:
                return var1;
            case 539:
                var6 = _closure1_slot6;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var1 = 15;
                var1 = var15[var1];
                var1 = var14.bind(var3)(var1);
                var2 = var1.Button;
                var1 = {};
                var18 = var1;
                var17 = var4;
                var8 = copyDataProperties(var18, var17);
                var8 = 'onPress';
                var1[var8] = var12;
                var8 = 16;
                var12 = var15[var8];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var8 = var15[var8];
                var8 = var14.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.XpeFYr;
                var12 = var12.bind(var13)(var8);
                var8 = 'text';
                var1[var8] = var12;
                var1 = var6.bind(var3)(var2, var1);
                return var1;
            case 654:
                var6 = _closure1_slot6;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 15;
                var1 = var14[var1];
                var1 = var13.bind(var3)(var1);
                var2 = var1.Button;
                var1 = {};
                var18 = var1;
                var17 = var4;
                var8 = copyDataProperties(var18, var17);
                var8 = 'onPress';
                var1[var8] = var11;
                var8 = 16;
                var11 = var14[var8];
                var11 = var13.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var8 = var14[var8];
                var8 = var13.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.XpeFYr;
                var11 = var11.bind(var12)(var8);
                var8 = 'text';
                var1[var8] = var11;
                var1 = var6.bind(var3)(var2, var1);
                return var1;
            case 769:
                var6 = _closure1_slot6;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 15;
                var1 = var13[var1];
                var1 = var12.bind(var3)(var1);
                var2 = var1.Button;
                var1 = {};
                var18 = var1;
                var17 = var4;
                var8 = copyDataProperties(var18, var17);
                var8 = 'onPress';
                var1[var8] = var10;
                var8 = 16;
                var10 = var13[var8];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var8 = var13[var8];
                var8 = var12.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["7XdMW2"];
                var10 = var10.bind(var11)(var8);
                var8 = 'text';
                var1[var8] = var10;
                var1 = var6.bind(var3)(var2, var1);
                return var1;
            case 884:
                var6 = _closure1_slot6;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 15;
                var1 = var12[var1];
                var1 = var11.bind(var3)(var1);
                var2 = var1.Button;
                var1 = {};
                var18 = var1;
                var17 = var4;
                var8 = copyDataProperties(var18, var17);
                var8 = 'onPress';
                var1[var8] = var9;
                var8 = 16;
                var9 = var12[var8];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["4yfIDk"];
                var9 = var9.bind(var10)(var8);
                var8 = 'text';
                var1[var8] = var9;
                var1 = var6.bind(var3)(var2, var1);
                return var1;
            case 999:
                var6 = _closure1_slot6;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 15;
                var1 = var11[var1];
                var1 = var10.bind(var3)(var1);
                var2 = var1.Button;
                var1 = {};
                var18 = var1;
                var17 = var4;
                var8 = copyDataProperties(var18, var17);
                var8 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.hideActionSheet;
                    var6 = _closure2_slot1;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var5 = var2.concat;
                    var2 = 'GuildProfileActionSheet:';
                    var2 = var5.bind(var2)(var6);
                    var2 = var3.bind(var4)(var2);
                    var1 = _closure2_slot3;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var7 = 'onPress';
                var1[var7] = var8;
                var7 = 16;
                var8 = var11[var7];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.cQDYRu;
                var8 = var8.bind(var9)(var7);
                var7 = 'text';
                var1[var7] = var8;
                var1 = var6.bind(var3)(var2, var1);
                return var1;
            case 1121:
                var2 = _closure1_slot6;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 15;
                var0 = var8[var0];
                var0 = var7.bind(var3)(var0);
                var1 = var0.Button;
                var0 = {};
                var18 = var0;
                var17 = var4;
                var4 = copyDataProperties(var18, var17);
                var4 = 'onPress';
                var0[var4] = var5;
                var4 = 16;
                var5 = var8[var4];
                var5 = var7.bind(var3)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var8[var4];
                var4 = var7.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4.KLOhbO;
                var5 = var5.bind(var6)(var4);
                var4 = 'text';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 665, 33, 7418, 7420, 3278, 5615, 5898, 7421, 3216, 7423, 7384, 7446, 5614, 4084, 1234, 2]);