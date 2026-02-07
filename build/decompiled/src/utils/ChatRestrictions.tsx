// utils/ChatRestrictions.tsx
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
    var3 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var1 = var1.TOKEN_REGEX;
    var _closure1_slot3 = var1;
    var3 = {};
    var1 = function arg0, arg1, arg2() {
        _fun74465: for (var _fun74465_ip = 0;;) switch (_fun74465_ip) {
            case 0:
                var2 = arg1;
                var0 = arg2;
                if (var0) {
                    _fun74465_ip = 13;
                    continue _fun74465
                }
            case 9:
                var0 = false;
                return var0;
            case 13:
                var0 = var2.getGuildId;
                var1 = var0.bind(var2)();
                var0 = null;
                if (!(var0 != var1)) {
                    _fun74465_ip = 461;
                    continue _fun74465
                }
            case 32:
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 1;
                var4 = var4[var3];
                var5 = undefined;
                var7 = var6.bind(var5)(var4);
                var6 = var7.extractEveryoneRole;
                var4 = arg0;
                var12 = var6.bind(var7)(var4, var2);
                if (!(var0 != var12)) {
                    _fun74465_ip = 457;
                    continue _fun74465
                }
            case 79:
                var4 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var3];
                var4 = var4.bind(var5)(var0);
                var0 = var4.shouldShowEveryoneGuard;
                var0 = var0.bind(var4)(var12, var2);
                if (var0) {
                    _fun74465_ip = 115;
                    continue _fun74465
                }
            case 111:
                var0 = false;
                return var0;
            case 115:
                var4 = _closure1_slot1;
                var0 = _closure1_slot2;
                var3 = var0[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.everyoneMemberCount;
                var9 = var3.bind(var4)(var12, var2);
                var11 = global;
                var7 = var11.Math;
                var6 = var7.pow;
                var8 = var11.Math;
                var4 = var8.floor;
                var10 = var11.Math;
                var3 = var10.log10;
                var3 = var3.bind(var10)(var9);
                var4 = var4.bind(var8)(var3);
                var3 = 10;
                var10 = var6.bind(var7)(var3, var4);
                var3 = _closure1_slot0;
                var6 = 2;
                var0 = var0[var6];
                var0 = var3.bind(var5)(var0);
                var0 = var0.t;
                var8 = var0["47E5Rz"];
                var0 = var2.isForumPost;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun74465_ip = 288;
                    continue _fun74465
                }
            case 243:
                var0 = var2.isThread;
                var0 = var0.bind(var2)();
                if (!var0) {
                    _fun74465_ip = 318;
                    continue _fun74465
                }
            case 256:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var6];
                var0 = var2.bind(var5)(var0);
                var0 = var0.t;
                var8 = var0["2YaiQ1"];
                _fun74465_ip = 318;
                continue _fun74465;
            case 288:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var6];
                var0 = var2.bind(var5)(var0);
                var0 = var0.t;
                var8 = var0.sYW2cy;
            case 318:
                var0 = {};
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = var1[var6];
                var2 = var4.bind(var5)(var2);
                var7 = var2.intl;
                var3 = var7.formatToPlainString;
                var2 = {};
                var2.role = var12;
                var12 = var11.Math;
                var11 = var12.trunc;
                var9 = var9 / var10;
                var9 = var11.bind(var12)(var9);
                var10 = var9 * var10;
                var9 = var10.toLocaleString;
                var9 = var9.bind(var10)();
                var2.count = var9;
                var2 = var3.bind(var7)(var8, var2);
                var0.body = var2;
                var2 = var1[var6];
                var2 = var4.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var1[var6];
                var1 = var4.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.mVyrtu;
                var1 = var2.bind(var3)(var1);
                var0.footer = var1;
                return var0;
            case 457:
                var0 = false;
                return var0;
            case 461:
                var0 = false;
                return var0;
        }
    };
    var3.check = var1;
    var1 = '@Everyone Warning';
    var3.analyticsType = var1;
    var3.animation = var0;
    var1 = new Array(2);
    var1[0] = var3;
    var3 = {};
    var6 = function arg0() {
        _fun74466: for (var _fun74466_ip = 0;;) switch (_fun74466_ip) {
            case 0:
                var3 = _closure1_slot3;
                var1 = var3.test;
                var0 = arg0;
                var0 = var1.bind(var3)(var0);
                var1 = !var0;
                var0 = !var1;
                if (var1) {
                    _fun74466_ip = 97;
                    continue _fun74466
                }
            case 29:
                var1 = {};
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 2;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.sTwS1a;
                var2 = var3.bind(var4)(var2);
                var1.body = var2;
                var0 = var1;
            case 97:
                return var0;
        }
    };
    var3.check = var6;
    var6 = 'API Token Warning';
    var3.analyticsType = var6;
    var1[1] = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/ChatRestrictions.tsx';
    var3 = var4.bind(var5)(var3);
    var2.RESTRICTIONS = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 9344, 1234, 2]);