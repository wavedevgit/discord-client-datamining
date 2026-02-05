// modules/chat_input/native/guard/ChatInputGuardGuildMemberVerification.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Image;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.TextAreaCta;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'height': 36,
        'width': 36,
        'resizeMode': 'contain'
    };
    var3.noticeIcon = var9;
    var9 = {
        'height': 36,
        'width': 36
    };
    var3.lottieAnimation = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot8 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun90728: for (var _fun90728_ip = 0;;) switch (_fun90728_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.guildId;
                var _closure2_slot0 = var4;
                var1 = _closure1_slot8;
                var3 = undefined;
                var13 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var1 = var6[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useCurrentUserGuildJoinRequest;
                var1 = var1.bind(var2)(var4);
                var8 = null;
                var4 = var8 == var1;
                var2 = undefined;
                if (var4) {
                    _fun90728_ip = 75;
                    continue _fun90728
                }
            case 69:
                var2 = var1.applicationStatus;
            case 75:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var6 = 8;
                var1 = var1[var6];
                var1 = var4.bind(var3)(var1);
                var1 = var1.GuildJoinRequestApplicationStatuses;
                var1 = var1.REJECTED;
                if (!(var1 !== var2)) {
                    _fun90728_ip = 332;
                    continue _fun90728
                }
            case 114:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var4.bind(var3)(var1);
                var1 = var1.GuildJoinRequestApplicationStatuses;
                var1 = var1.SUBMITTED;
                if (!(var1 !== var2)) {
                    _fun90728_ip = 220;
                    continue _fun90728
                }
            case 147:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 10;
                var2 = var7[var1];
                var2 = var6.bind(var3)(var2);
                var4 = var2.intl;
                var2 = var4.string;
                var1 = var7[var1];
                var1 = var6.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.rEBKvg;
                var7 = var2.bind(var4)(var1);
                var4 = function() {
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 11;
                    var2 = var3[var0];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var2);
                    var5 = var6.trackWithMetadata;
                    var2 = _closure1_slot6;
                    var4 = var2.TEXT_AREA_CTA_CLICKED;
                    var2 = {};
                    var7 = _closure1_slot5;
                    var7 = var7.MEMBER_VERIFICATION;
                    var2.cta_type = var7;
                    var2 = var5.bind(var6)(var4, var2);
                    var2 = _closure1_slot0;
                    var1 = 15;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openMemberVerificationModal;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var12 = undefined;
                var6 = undefined;
                _fun90728_ip = 414;
                continue _fun90728;
            case 220:
                var2 = _closure1_slot1;
                var15 = _closure1_slot2;
                var1 = 13;
                var1 = var15[var1];
                var12 = var2.bind(var3)(var1);
                var9 = _closure1_slot7;
                var14 = _closure1_slot0;
                var1 = 14;
                var1 = var15[var1];
                var1 = var14.bind(var3)(var1);
                var2 = var1.XSmallIcon;
                var1 = {};
                var6 = var9.bind(var3)(var2, var1);
                var2 = 10;
                var9 = var15[var2];
                var9 = var14.bind(var3)(var9);
                var11 = var9.intl;
                var9 = var11.string;
                var2 = var15[var2];
                var2 = var14.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2["5iLvSx"];
                var7 = var9.bind(var11)(var2);
                var4 = function() {
                    var3 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 11;
                    var2 = var8[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var2);
                    var4 = var5.trackWithMetadata;
                    var2 = _closure1_slot6;
                    var3 = var2.TEXT_AREA_CTA_CLICKED;
                    var2 = {};
                    var6 = _closure1_slot5;
                    var6 = var6.MEMBER_VERIFICATION_CONFIRMED;
                    var2.cta_type = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    var7 = _closure1_slot0;
                    var1 = 12;
                    var1 = var8[var1];
                    var3 = var7.bind(var0)(var1);
                    var2 = var3.openMemberVerificationCancelPendingAlert;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var1.guildId = var4;
                    var4 = 10;
                    var5 = var8[var4];
                    var5 = var7.bind(var0)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var8[var4];
                    var4 = var7.bind(var0)(var4);
                    var4 = var4.t;
                    var4 = var4["13tjTU"];
                    var4 = var5.bind(var6)(var4);
                    var1.subtitleText = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                _fun90728_ip = 414;
                continue _fun90728;
            case 332:
                var2 = _closure1_slot1;
                var14 = _closure1_slot2;
                var1 = 9;
                var1 = var14[var1];
                var12 = var2.bind(var3)(var1);
                var11 = _closure1_slot0;
                var1 = 10;
                var2 = var14[var1];
                var2 = var11.bind(var3)(var2);
                var10 = var2.intl;
                var2 = var10.string;
                var1 = var14[var1];
                var1 = var11.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.lk30cY;
                var7 = var2.bind(var10)(var1);
                var4 = function() {
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 11;
                    var2 = var3[var0];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var2);
                    var5 = var6.trackWithMetadata;
                    var2 = _closure1_slot6;
                    var4 = var2.TEXT_AREA_CTA_CLICKED;
                    var2 = {};
                    var7 = _closure1_slot5;
                    var7 = var7.MEMBER_VERIFICATION_REJECTED;
                    var2.cta_type = var7;
                    var2 = var5.bind(var6)(var4, var2);
                    var2 = _closure1_slot0;
                    var1 = 12;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openMemberVerificationRejectedAlert;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var1.guildId = var4;
                    var4 = false;
                    var1.canWithdraw = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var6 = undefined;
            case 414:
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 16;
                var1 = var9[var1];
                var10 = var2.bind(var3)(var1);
                var2 = var10.useStateFromStores;
                var11 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var11;
                var0 = function() { // Environment: var0
                    var0 = _closure1_slot4;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var11 = var2.bind(var10)(var1, var0);
                var2 = _closure1_slot7;
                var1 = _closure1_slot1;
                var0 = 17;
                var0 = var9[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var9 = 'simple-action';
                var0.type = var9;
                if (!(var8 == var12)) {
                    _fun90728_ip = 572;
                    continue _fun90728
                }
            case 500:
                var10 = _closure1_slot7;
                var9 = _closure1_slot1;
                var16 = _closure1_slot2;
                var8 = 18;
                var8 = var16[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var14 = var13.lottieAnimation;
                var8.style = var14;
                var15 = _closure1_slot0;
                var14 = 19;
                var14 = var16[var14];
                var14 = var15.bind(var3)(var14);
                var8.source = var14;
                var11 = !var11;
                var8.autoPlay = var11;
                var8 = var10.bind(var3)(var9, var8);
                _fun90728_ip = 602;
                continue _fun90728;
            case 572:
                var11 = _closure1_slot7;
                var10 = _closure1_slot3;
                var9 = {};
                var13 = var13.noticeIcon;
                var9.style = var13;
                var9.source = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 602:
                var0.icon = var8;
                var0.message = var7;
                var0.actionIcon = var6;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 10;
                var6 = var9[var5];
                var6 = var8.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5["var8/DT+"];
                var5 = var6.bind(var7)(var5);
                var0.actionLabel = var5;
                var0.actionOnPress = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat_input/native/guard/ChatInputGuardGuildMemberVerification.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 11625, 660, 33, 1297, 7451, 3216, 11799, 1234, 4302, 7442, 11800, 4734, 7465, 566, 11791, 6619, 11801, 2]);