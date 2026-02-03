// modules/messages/getEmojiPopoutMessage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var3 = var3.EmojiSourceDataTypes;
    var _closure1_slot2 = var3;
    var3 = {};
    var4 = 'Custom Emoji Popout';
    var3.DEFAULT = var4;
    var4 = 'Custom Emoji Popout (Cross-Server)';
    var3.CROSS_SERVER = var4;
    var4 = 'Custom Emoji Popout (Upsell Joined Current-Server)';
    var3.UPSELL_CURRENT_SERVER_JOINED = var4;
    var4 = 'Custom Emoji Popout (Upsell Joined Cross-Server)';
    var3.UPSELL_CROSS_SERVER_JOINED = var4;
    var4 = 'Custom Emoji Popout (Upsell Not-Joined Cross-Server)';
    var3.UPSELL_CROSS_SERVER_JOINABLE = var4;
    var4 = 'Custom Emoji Popout (Soft Upsell)';
    var3.UPSELL_CROSS_SERVER_UNJOINABLE = var4;
    var _closure1_slot3 = var3;
    var3 = {};
    var4 = 'GET_PREMIUM';
    var3.GET_PREMIUM = var4;
    var4 = 'JOIN_GUILD';
    var3.JOIN_GUILD = var4;
    var4 = 'UNAVAILABLE';
    var3.UNAVAILABLE = var4;
    var _closure1_slot4 = var3;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/getEmojiPopoutMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2.EmojiPopoutType = var3;
    var1 = function(arg0) { // Environment: var1
        _fun74145: for (var _fun74145_ip = 0;;) switch (_fun74145_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.sourceType;
                var7 = var1.expressionSourceApplication;
                var3 = var1.isPremium;
                var10 = var1.hasJoinedEmojiSourceGuild;
                var4 = var1.isUnusableRoleSubscriptionEmoji;
                var0 = var1.isDiscoverable;
                var2 = var1.emojiComesFromCurrentGuild;
                var6 = var1.userIsRoleSubscriber;
                var9 = var1.isRoleSubscriptionEmoji;
                var8 = var1.shouldHideRoleSubscriptionCTA;
                var18 = var1.onOpenPremiumSettings;
                var11 = _closure1_slot2;
                var11 = var11.APPLICATION;
                if (!(var12 === var11)) {
                    _fun74145_ip = 95;
                    continue _fun74145
                }
            case 86:
                var11 = null;
                if (!(var11 == var7)) {
                    _fun74145_ip = 738;
                    continue _fun74145
                }
            case 95:
                if (var3) {
                    _fun74145_ip = 398;
                    continue _fun74145
                }
            case 101:
                if (var10) {
                    _fun74145_ip = 213;
                    continue _fun74145
                }
            case 104:
                var15 = _closure1_slot0;
                var16 = _closure1_slot1;
                var11 = 1;
                var3 = var16[var11];
                var14 = undefined;
                var3 = var15.bind(var14)(var3);
                var13 = var3.intl;
                if (var0) {
                    _fun74145_ip = 176;
                    continue _fun74145
                }
            case 134:
                var17 = var13.format;
                var3 = var16[var11];
                var3 = var15.bind(var14)(var3);
                var3 = var3.t;
                var12 = var3.U6vLcA;
                var3 = {};
                var3.openPremiumSettings = var18;
                var3 = var17.bind(var13)(var12, var3);
                _fun74145_ip = 208;
                continue _fun74145;
            case 176:
                var12 = var13.string;
                var11 = var16[var11];
                var11 = var15.bind(var14)(var11);
                var11 = var11.t;
                var11 = var11.FJ6Z01;
                var3 = var12.bind(var13)(var11);
            case 208:
                _fun74145_ip = 393;
                continue _fun74145;
            case 213:
                if (!var8) {
                    _fun74145_ip = 219;
                    continue _fun74145
                }
            case 216:
                if (var4) {
                    _fun74145_ip = 333;
                    continue _fun74145
                }
            case 219:
                var13 = _closure1_slot0;
                var16 = _closure1_slot1;
                var11 = 1;
                var14 = var16[var11];
                var12 = undefined;
                var14 = var13.bind(var12)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var11 = var16[var11];
                var11 = var13.bind(var12)(var11);
                var13 = var11.t;
                if (var4) {
                    _fun74145_ip = 301;
                    continue _fun74145
                }
            case 268:
                if (var2) {
                    _fun74145_ip = 286;
                    continue _fun74145
                }
            case 271:
                var11 = var13.jQy3aM;
                var11 = var14.bind(var15)(var11);
                _fun74145_ip = 299;
                continue _fun74145;
            case 286:
                var12 = var13.ICPhqa;
                var11 = var14.bind(var15)(var12);
            case 299:
                _fun74145_ip = 331;
                continue _fun74145;
            case 301:
                if (var6) {
                    _fun74145_ip = 317;
                    continue _fun74145
                }
            case 304:
                var12 = var13["g8i/bf"];
                var12 = var14.bind(var15)(var12);
                _fun74145_ip = 328;
                continue _fun74145;
            case 317:
                var13 = var13.vLklfF;
                var12 = var14.bind(var15)(var13);
            case 328:
                var11 = var12;
            case 331:
                _fun74145_ip = 390;
                continue _fun74145;
            case 333:
                var16 = _closure1_slot0;
                var17 = _closure1_slot1;
                var12 = 1;
                var13 = var17[var12];
                var15 = undefined;
                var13 = var16.bind(var15)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var17[var12];
                var12 = var16.bind(var15)(var12);
                var12 = var12.t;
                var12 = var12.xFb68j;
                var11 = var13.bind(var14)(var12);
            case 390:
                var3 = var11;
            case 393:
                _fun74145_ip = 736;
                continue _fun74145;
            case 398:
                if (var10) {
                    _fun74145_ip = 483;
                    continue _fun74145
                }
            case 401:
                var14 = _closure1_slot0;
                var15 = _closure1_slot1;
                var10 = 1;
                var11 = var15[var10];
                var13 = undefined;
                var11 = var14.bind(var13)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var15[var10];
                var10 = var14.bind(var13)(var10);
                var10 = var10.t;
                if (var0) {
                    _fun74145_ip = 465;
                    continue _fun74145
                }
            case 450:
                var0 = var10["0LMpW+"];
                var0 = var11.bind(var12)(var0);
                _fun74145_ip = 478;
                continue _fun74145;
            case 465:
                var10 = var10.xE9WGt;
                var0 = var11.bind(var12)(var10);
            case 478:
                _fun74145_ip = 733;
                continue _fun74145;
            case 483:
                if (var9) {
                    _fun74145_ip = 568;
                    continue _fun74145
                }
            case 486:
                var13 = _closure1_slot0;
                var14 = _closure1_slot1;
                var9 = 1;
                var10 = var14[var9];
                var12 = undefined;
                var10 = var13.bind(var12)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var14[var9];
                var9 = var13.bind(var12)(var9);
                var9 = var9.t;
                if (var2) {
                    _fun74145_ip = 550;
                    continue _fun74145
                }
            case 535:
                var2 = var9.GM0xaX;
                var2 = var10.bind(var11)(var2);
                _fun74145_ip = 563;
                continue _fun74145;
            case 550:
                var9 = var9.hU4kIe;
                var2 = var10.bind(var11)(var9);
            case 563:
                _fun74145_ip = 730;
                continue _fun74145;
            case 568:
                if (!var8) {
                    _fun74145_ip = 574;
                    continue _fun74145
                }
            case 571:
                if (var4) {
                    _fun74145_ip = 670;
                    continue _fun74145
                }
            case 574:
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var8 = 1;
                var9 = var13[var8];
                var11 = undefined;
                var9 = var12.bind(var11)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var13[var8];
                var8 = var12.bind(var11)(var8);
                var8 = var8.t;
                if (var4) {
                    _fun74145_ip = 638;
                    continue _fun74145
                }
            case 623:
                var4 = var8.Eoynp0;
                var4 = var9.bind(var10)(var4);
                _fun74145_ip = 668;
                continue _fun74145;
            case 638:
                if (var6) {
                    _fun74145_ip = 654;
                    continue _fun74145
                }
            case 641:
                var6 = var8["g8i/bf"];
                var6 = var9.bind(var10)(var6);
                _fun74145_ip = 665;
                continue _fun74145;
            case 654:
                var8 = var8.vLklfF;
                var6 = var9.bind(var10)(var8);
            case 665:
                var4 = var6;
            case 668:
                _fun74145_ip = 727;
                continue _fun74145;
            case 670:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var6 = 1;
                var8 = var12[var6];
                var10 = undefined;
                var8 = var11.bind(var10)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var6 = var12[var6];
                var6 = var11.bind(var10)(var6);
                var6 = var6.t;
                var6 = var6.xFb68j;
                var4 = var8.bind(var9)(var6);
            case 727:
                var2 = var4;
            case 730:
                var0 = var2;
            case 733:
                var3 = var0;
            case 736:
                _fun74145_ip = 810;
                continue _fun74145;
            case 738:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var0 = 1;
                var4 = var9[var0];
                var2 = undefined;
                var4 = var8.bind(var2)(var4);
                var6 = var4.intl;
                var4 = var6.formatToPlainString;
                var0 = var9[var0];
                var0 = var8.bind(var2)(var0);
                var0 = var0.t;
                var2 = var0.uERlTd;
                var0 = {};
                var7 = var7.name;
                var0.appName = var7;
                var3 = var4.bind(var6)(var2, var0);
            case 810:
                var4 = var1.isPremium;
                var7 = var1.hasJoinedEmojiSourceGuild;
                var9 = var1.isUnusableRoleSubscriptionEmoji;
                var8 = var1.emojiComesFromCurrentGuild;
                var0 = var1.isDiscoverable;
                var2 = _closure1_slot3;
                var6 = var2.DEFAULT;
                if (!var4) {
                    _fun74145_ip = 871;
                    continue _fun74145
                }
            case 853:
                if (var7) {
                    _fun74145_ip = 871;
                    continue _fun74145
                }
            case 856:
                if (!var0) {
                    _fun74145_ip = 871;
                    continue _fun74145
                }
            case 859:
                var2 = _closure1_slot3;
                var2 = var2.CROSS_SERVER;
                _fun74145_ip = 942;
                continue _fun74145;
            case 871:
                if (var4) {
                    _fun74145_ip = 906;
                    continue _fun74145
                }
            case 874:
                if (!var7) {
                    _fun74145_ip = 906;
                    continue _fun74145
                }
            case 877:
                if (var9) {
                    _fun74145_ip = 906;
                    continue _fun74145
                }
            case 880:
                var9 = _closure1_slot3;
                if (var8) {
                    _fun74145_ip = 895;
                    continue _fun74145
                }
            case 887:
                var8 = var9.UPSELL_CROSS_SERVER_JOINED;
                _fun74145_ip = 901;
                continue _fun74145;
            case 895:
                var8 = var9.UPSELL_CURRENT_SERVER_JOINED;
            case 901:
                var2 = var8;
                _fun74145_ip = 942;
                continue _fun74145;
            case 906:
                if (var4) {
                    _fun74145_ip = 912;
                    continue _fun74145
                }
            case 909:
                var4 = var7;
            case 912:
                var2 = var6;
                if (var4) {
                    _fun74145_ip = 942;
                    continue _fun74145
                }
            case 918:
                var4 = _closure1_slot3;
                if (var0) {
                    _fun74145_ip = 933;
                    continue _fun74145
                }
            case 925:
                var0 = var4.UPSELL_CROSS_SERVER_UNJOINABLE;
                _fun74145_ip = 939;
                continue _fun74145;
            case 933:
                var0 = var4.UPSELL_CROSS_SERVER_JOINABLE;
            case 939:
                var2 = var0;
            case 942:
                var0 = {};
                var7 = var1.isPremium;
                var6 = var1.hasJoinedEmojiSourceGuild;
                var4 = var1.isUnusableRoleSubscriptionEmoji;
                var8 = var1.isDiscoverable;
                var1 = !var6;
                if (!var1) {
                    _fun74145_ip = 977;
                    continue _fun74145
                }
            case 974:
                var1 = var8;
            case 977:
                if (!var7) {
                    _fun74145_ip = 986;
                    continue _fun74145
                }
            case 980:
                if (var1) {
                    _fun74145_ip = 1118;
                    continue _fun74145
                }
            case 986:
                if (var7) {
                    _fun74145_ip = 1083;
                    continue _fun74145
                }
            case 989:
                if (!var6) {
                    _fun74145_ip = 995;
                    continue _fun74145
                }
            case 992:
                if (!var4) {
                    _fun74145_ip = 998;
                    continue _fun74145
                }
            case 995:
                if (!var1) {
                    _fun74145_ip = 1083;
                    continue _fun74145
                }
            case 998:
                var1 = {};
                var4 = _closure1_slot4;
                var4 = var4.GET_PREMIUM;
                var1.type = var4;
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var4 = 1;
                var6 = var10[var4];
                var8 = undefined;
                var6 = var9.bind(var8)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var4 = var10[var4];
                var4 = var9.bind(var8)(var4);
                var4 = var4.t;
                var4 = var4["gl/XHJ"];
                var4 = var6.bind(var7)(var4);
                var1.text = var4;
                var4 = null;
                var1.description = var4;
                _fun74145_ip = 1116;
                continue _fun74145;
            case 1083:
                var4 = {
                    'type': null,
                    'text': null,
                    'description': null
                };
                var6 = _closure1_slot4;
                var6 = var6.UNAVAILABLE;
                var4.type = var6;
                var1 = var4;
            case 1116:
                _fun74145_ip = 1204;
                continue _fun74145;
            case 1118:
                var4 = {};
                var6 = _closure1_slot4;
                var6 = var6.JOIN_GUILD;
                var4.type = var6;
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var5 = 1;
                var6 = var10[var5];
                var8 = undefined;
                var6 = var9.bind(var8)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var10[var5];
                var5 = var9.bind(var8)(var5);
                var5 = var5.t;
                var5 = var5.riu2R5;
                var5 = var6.bind(var7)(var5);
                var4.text = var5;
                var5 = null;
                var4.description = var5;
                var1 = var4;
            case 1204:
                var20 = var0;
                var19 = var1;
                var1 = copyDataProperties(var20, var19);
                var1 = 'emojiDescription';
                var0[var1] = var3;
                var1 = 'analyticsType';
                var0[var1] = var2;
                return var0;
        }
    };
    var2.getEmojiPopoutData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7389, 1234, 2]);