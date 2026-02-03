// utils/InviteErrorUtils.tsx
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
    var3 = var4.bind(var0)(var3);
    var6 = var3.AbortCodes;
    var _closure1_slot4 = var6;
    var6 = var3.HelpdeskArticles;
    var _closure1_slot5 = var6;
    var6 = var3.MAX_USER_GUILDS;
    var _closure1_slot6 = var6;
    var3 = var3.MAX_USER_GUILDS_PREMIUM;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/InviteErrorUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun80842: for (var _fun80842_ip = 0;;) switch (_fun80842_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot4;
                var0 = var0.TOO_MANY_USER_GUILDS;
                if (!(var0 !== var2)) {
                    _fun80842_ip = 414;
                    continue _fun80842
                }
            case 23:
                var0 = _closure1_slot4;
                var0 = var0.GUILD_AT_CAPACITY;
                if (!(var0 !== var2)) {
                    _fun80842_ip = 301;
                    continue _fun80842
                }
            case 40:
                var0 = _closure1_slot4;
                var0 = var0.GUILD_JOIN_INVITE_LIMITED_ACCESS;
                if (!(var0 !== var2)) {
                    _fun80842_ip = 188;
                    continue _fun80842
                }
            case 57:
                var0 = _closure1_slot4;
                var0 = var0.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED;
                if (!(var0 !== var2)) {
                    _fun80842_ip = 75;
                    continue _fun80842
                }
            case 71:
                var0 = null;
                return var0;
            case 75:
                var0 = {};
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 3;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var8 = var3.intl;
                var4 = var8.string;
                var3 = var7[var2];
                var3 = var6.bind(var5)(var3);
                var3 = var3.t;
                var3 = var3["u/xsK9"];
                var3 = var4.bind(var8)(var3);
                var0.title = var3;
                var3 = var7[var2];
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.SxY4IW;
                var2 = var3.bind(var4)(var2);
                var0.description = var2;
                return var0;
            case 188:
                var0 = {};
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 3;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var8 = var3.intl;
                var4 = var8.string;
                var3 = var7[var2];
                var3 = var6.bind(var5)(var3);
                var3 = var3.t;
                var3 = var3.kJwpBW;
                var3 = var4.bind(var8)(var3);
                var0.title = var3;
                var3 = var7[var2];
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.ZUEGFn;
                var2 = var3.bind(var4)(var2);
                var0.description = var2;
                return var0;
            case 301:
                var0 = {};
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 3;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var8 = var3.intl;
                var4 = var8.string;
                var3 = var7[var2];
                var3 = var6.bind(var5)(var3);
                var3 = var3.t;
                var3 = var3.ZZlox4;
                var3 = var4.bind(var8)(var3);
                var0.title = var3;
                var3 = var7[var2];
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.ZUEGFn;
                var2 = var3.bind(var4)(var2);
                var0.description = var2;
                return var0;
            case 414:
                var2 = _closure1_slot3;
                var0 = var2.getCurrentUser;
                var3 = var0.bind(var2)();
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 2;
                var0 = var4[var0];
                var5 = undefined;
                var2 = var2.bind(var5)(var0);
                var0 = var2.canUseIncreasedGuildCap;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun80842_ip = 493;
                    continue _fun80842
                }
            case 463:
                var0 = null;
                var2 = var0 == var3;
                var0 = undefined;
                if (var2) {
                    _fun80842_ip = 484;
                    continue _fun80842
                }
            case 474:
                var2 = var3.isStaff;
                var0 = var2.bind(var3)();
            case 484:
                if (var0) {
                    _fun80842_ip = 493;
                    continue _fun80842
                }
            case 487:
                var9 = _closure1_slot6;
                _fun80842_ip = 497;
                continue _fun80842;
            case 493:
                var9 = _closure1_slot7;
            case 497:
                var0 = {};
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 3;
                var2 = var6[var1];
                var2 = var4.bind(var5)(var2);
                var8 = var2.intl;
                var7 = var8.formatToPlainString;
                var2 = var6[var1];
                var2 = var4.bind(var5)(var2);
                var2 = var2.t;
                var3 = var2["ttJ/hj"];
                var2 = {};
                var2.quantity = var9;
                var2 = var7.bind(var8)(var3, var2);
                var0.title = var2;
                var2 = var6[var1];
                var2 = var4.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.iLyuDO;
                var1 = var2.bind(var3)(var1);
                var0.description = var1;
                return var0;
        }
    };
    var2.getDescriptiveInviteError = var3;
    var1 = function arg0() {
        _fun80843: for (var _fun80843_ip = 0;;) switch (_fun80843_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot4;
                var1 = var1.TOO_MANY_USER_GUILDS;
                if (!(var1 !== var2)) {
                    _fun80843_ip = 436;
                    continue _fun80843
                }
            case 23:
                var1 = _closure1_slot4;
                var1 = var1.GUILD_AT_CAPACITY;
                if (!(var1 !== var2)) {
                    _fun80843_ip = 375;
                    continue _fun80843
                }
            case 40:
                var1 = _closure1_slot4;
                var1 = var1.INVALID_COUNTRY_CODE;
                if (!(var1 !== var2)) {
                    _fun80843_ip = 314;
                    continue _fun80843
                }
            case 57:
                var1 = _closure1_slot4;
                var1 = var1.INVALID_CANNOT_FRIEND_SELF;
                if (!(var1 !== var2)) {
                    _fun80843_ip = 253;
                    continue _fun80843
                }
            case 74:
                var1 = _closure1_slot4;
                var1 = var1.INVITES_DISABLED;
                if (!(var1 !== var2)) {
                    _fun80843_ip = 149;
                    continue _fun80843
                }
            case 88:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 3;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.dDZRdy;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 149:
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 3;
                var3 = var8[var1];
                var7 = undefined;
                var3 = var2.bind(var7)(var3);
                var4 = var3.intl;
                var3 = var4.format;
                var1 = var8[var1];
                var1 = var2.bind(var7)(var1);
                var1 = var1.t;
                var2 = var1.RXSeLl;
                var1 = {};
                var6 = _closure1_slot1;
                var5 = 4;
                var5 = var8[var5];
                var7 = var6.bind(var7)(var5);
                var6 = var7.getArticleURL;
                var5 = _closure1_slot5;
                var5 = var5.INVITE_DISABLED;
                var5 = var6.bind(var7)(var5);
                var1.articleLink = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 253:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 3;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["mY2R+F"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 314:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 3;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.sRJGR1;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 375:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 3;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.M6unNJ;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 436:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 3;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.iLyuDO;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getInviteError = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1621, 660, 3109, 1234, 1684, 2]);