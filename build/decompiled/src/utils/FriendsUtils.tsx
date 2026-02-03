// utils/FriendsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function arg0() {
        _fun64596: for (var _fun64596_ip = 0;;) switch (_fun64596_ip) {
            case 0:
                var11 = arg0;
                var1 = _closure1_slot8;
                var0 = var1.test;
                var1 = var0.bind(var1)(var11);
                var9 = null;
                var0 = null;
                if (var1) {
                    _fun64596_ip = 336;
                    continue _fun64596
                }
            case 30:
                var1 = var11.includes;
                var3 = '#';
                var1 = var1.bind(var11)(var3);
                if (!var1) {
                    _fun64596_ip = 69;
                    continue _fun64596
                }
            case 47:
                var4 = _closure1_slot7;
                var1 = var4.test;
                var1 = var1.bind(var4)(var11);
                var0 = null;
                if (var1) {
                    _fun64596_ip = 336;
                    continue _fun64596
                }
            case 69:
                var1 = var11.split;
                var3 = var1.bind(var11)(var3);
                var1 = _closure1_slot3;
                var5 = undefined;
                var6 = 2;
                var4 = var1.bind(var5)(var3, var6);
                var1 = 0;
                var1 = var4[var1];
                var3 = 1;
                var10 = var4[var3];
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 4;
                var3 = var7[var3];
                var8 = var4.bind(var5)(var3);
                var7 = var8.track;
                var3 = _closure1_slot5;
                var4 = var3.FRIEND_REQUEST_FAILED;
                var3 = {};
                var12 = 'Invalid Username';
                var3.reason = var12;
                var3.query = var11;
                var12 = var9 != var10;
                var9 = '';
                if (!var12) {
                    _fun64596_ip = 174;
                    continue _fun64596
                }
            case 171:
                var9 = var10;
            case 174:
                var9 = var9.length;
                var3.discrim_len = var9;
                var1 = var1.length;
                var3.username_len = var1;
                var10 = _closure1_slot1;
                var1 = _closure1_slot2;
                var9 = 5;
                var12 = var1[var9];
                var13 = var10.bind(var5)(var12);
                var12 = var13.isEmail;
                var12 = var12.bind(var13)(var11);
                var3.is_email_like = var12;
                var9 = var1[var9];
                var10 = var10.bind(var5)(var9);
                var9 = var10.isInvite;
                var9 = var9.bind(var10)(var11);
                var3.is_invite_like = var9;
                var10 = _closure1_slot6;
                var9 = var10.test;
                var9 = var9.bind(var10)(var11);
                var3.is_num_only = var9;
                var3 = var7.bind(var8)(var4, var3);
                var4 = _closure1_slot0;
                var2 = var1[var6];
                var2 = var4.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var1[var6];
                var1 = var4.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.paDJBM;
                var0 = var2.bind(var3)(var1);
            case 336:
                return var0;
        }
    };
    var _closure1_slot9 = var4;
    var3 = function arg0, arg1() {
        _fun64597: for (var _fun64597_ip = 0;;) switch (_fun64597_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot4;
                var1 = var1.RELATIONSHIP_INCOMING_DISABLED;
                if (!(var1 !== var2)) {
                    _fun64597_ip = 536;
                    continue _fun64597
                }
            case 23:
                var1 = _closure1_slot4;
                var1 = var1.TOO_MANY_FRIENDS;
                if (!(var1 !== var2)) {
                    _fun64597_ip = 475;
                    continue _fun64597
                }
            case 40:
                var1 = _closure1_slot4;
                var1 = var1.RELATIONSHIP_ALREADY_FRIENDS;
                if (!(var1 !== var2)) {
                    _fun64597_ip = 414;
                    continue _fun64597
                }
            case 57:
                var1 = _closure1_slot4;
                var1 = var1.USER_QUARANTINED;
                if (!(var1 !== var2)) {
                    _fun64597_ip = 355;
                    continue _fun64597
                }
            case 74:
                var1 = _closure1_slot4;
                var1 = var1.USER_FRIEND_REQUEST_LIMITED_ACCESS;
                if (!(var1 !== var2)) {
                    _fun64597_ip = 355;
                    continue _fun64597
                }
            case 91:
                var1 = _closure1_slot4;
                var1 = var1.TOO_MANY_BLOCKED_USERS;
                if (!(var1 !== var2)) {
                    _fun64597_ip = 294;
                    continue _fun64597
                }
            case 108:
                var1 = _closure1_slot4;
                var1 = var1.TOO_MANY_PENDING_OUTGOING;
                if (!(var1 !== var2)) {
                    _fun64597_ip = 233;
                    continue _fun64597
                }
            case 122:
                var1 = _closure1_slot4;
                var1 = var1.RELATIONSHIP_INCOMING_BLOCKED;
                if (!(var1 !== var2)) {
                    _fun64597_ip = 174;
                    continue _fun64597
                }
            case 136:
                var1 = _closure1_slot4;
                var1 = var1.RELATIONSHIP_INVALID_SELF;
                if (!(var1 !== var2)) {
                    _fun64597_ip = 174;
                    continue _fun64597
                }
            case 150:
                var1 = _closure1_slot4;
                var1 = var1.RELATIONSHIP_INVALUD_USER_BOT;
                if (!(var1 !== var2)) {
                    _fun64597_ip = 174;
                    continue _fun64597
                }
            case 164:
                var1 = _closure1_slot4;
                var1 = var1.RELATIONSHIP_INVALID_DISCORD_TAG;
            case 174:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 2;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.paDJBM;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 233:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 2;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.k1K15p;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 294:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 2;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.sIGo1i;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 355:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 2;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.EouHwv;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 414:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 2;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.VNLneq;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 475:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 2;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.tnBalD;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 536:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 2;
                var2 = var5[var0];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var3 = var2.intl;
                var2 = var3.format;
                var0 = var5[var0];
                var0 = var4.bind(var1)(var0);
                var0 = var0.t;
                var1 = var0.Oxe6Ur;
                var0 = {};
                var4 = arg1;
                var0.discordTag = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.AbortCodes;
    var _closure1_slot4 = var8;
    var5 = var5.AnalyticEvents;
    var _closure1_slot5 = var5;
    var5 = /^\d+$/;
    var _closure1_slot6 = var5;
    var5 = /^(.+?@.+?\..+?|.+?#\d{4})$/;
    var _closure1_slot7 = var5;
    var5 = /^[a-zA-Z0-9_\\.]+$/;
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/FriendsUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.validateDiscordTag = var4;
    var4 = function arg0() {
        var2 = _closure1_slot9;
        var1 = undefined;
        var0 = arg0;
        var1 = var2.bind(var1)(var0);
        var0 = null;
        var0 = var0 == var1;
        return var0;
    };
    var2.isValidDiscordTag = var4;
    var2.humanizeAbortCode = var3;
    var1 = function arg0, arg1() {
        _fun64599: for (var _fun64599_ip = 0;;) switch (_fun64599_ip) {
            case 0:
                var3 = arg0;
                var7 = arg1;
                var0 = _closure1_slot10;
                var4 = undefined;
                var0 = var0.bind(var4)(var3, var7);
                var2 = _closure1_slot4;
                var2 = var2.RELATIONSHIP_INCOMING_DISABLED;
                if (!(var3 === var2)) {
                    _fun64599_ip = 100;
                    continue _fun64599
                }
            case 35:
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 2;
                var5 = var8[var2];
                var5 = var3.bind(var4)(var5);
                var6 = var5.intl;
                var5 = var6.formatToPlainString;
                var2 = var8[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.t;
                var3 = var2["ihb+UW"];
                var2 = {};
                var2.discordTag = var7;
                var0 = var5.bind(var6)(var3, var2);
            case 100:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 3;
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = 'string';
                var1 = typeof var0;
                var2 = var2 === var1;
                var1 = 'abortCode should be a string for a11y';
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.humanizeAbortCodeForA11y = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 660, 1234, 44, 795, 5896, 2]);