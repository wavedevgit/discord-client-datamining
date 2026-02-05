// modules/game_console/getErrorMessageForCommandResult.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.GameConsoleCommandResultErrorCodes;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_console/getErrorMessageForCommandResult.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2() {
        _fun113311: for (var _fun113311_ip = 0;;) switch (_fun113311_ip) {
            case 0:
                var1 = arg0;
                var4 = arg1;
                var5 = arg2;
                var0 = 'failed';
                if (!(var0 !== var4)) {
                    _fun113311_ip = 217;
                    continue _fun113311
                }
            case 22:
                var3 = 'n/a';
                var0 = null;
                if (!(var3 === var4)) {
                    _fun113311_ip = 971;
                    continue _fun113311
                }
            case 37:
                var6 = var5.code;
                var14 = var1.platform;
                var9 = var1.name;
                var3 = _closure1_slot3;
                var3 = var3.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED;
                var2 = null;
                if (!(var6 === var3)) {
                    _fun113311_ip = 209;
                    continue _fun113311
                }
            case 75:
                var3 = {};
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 1;
                var7 = var11[var4];
                var6 = undefined;
                var7 = var10.bind(var6)(var7);
                var13 = var7.intl;
                var12 = var13.formatToPlainString;
                var7 = var11[var4];
                var7 = var10.bind(var6)(var7);
                var7 = var7.t;
                var8 = var7.KchfhO;
                var7 = {};
                var7.deviceType = var14;
                var7 = var12.bind(var13)(var8, var7);
                var3.title = var7;
                var7 = var11[var4];
                var7 = var10.bind(var6)(var7);
                var8 = var7.intl;
                var7 = var8.formatToPlainString;
                var4 = var11[var4];
                var4 = var10.bind(var6)(var4);
                var4 = var4.t;
                var6 = var4["21ndz7"];
                var4 = {};
                var4.deviceName = var9;
                var4 = var7.bind(var8)(var6, var4);
                var3.body = var4;
                var2 = var3;
            case 209:
                var0 = var2;
                _fun113311_ip = 971;
                continue _fun113311;
            case 217:
                var2 = var5.code;
                var8 = var1.platform;
                var10 = var1.name;
                var1 = _closure1_slot3;
                var1 = var1.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED;
                if (!(var1 !== var2)) {
                    _fun113311_ip = 842;
                    continue _fun113311
                }
            case 253:
                var1 = _closure1_slot3;
                var1 = var1.CONSOLE_DEVICE_INVALID_POWER_MODE;
                if (!(var1 !== var2)) {
                    _fun113311_ip = 703;
                    continue _fun113311
                }
            case 270:
                var1 = _closure1_slot3;
                var1 = var1.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS;
                if (!(var1 !== var2)) {
                    _fun113311_ip = 564;
                    continue _fun113311
                }
            case 287:
                var1 = _closure1_slot3;
                var1 = var1.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR;
                if (!(var1 !== var2)) {
                    _fun113311_ip = 428;
                    continue _fun113311
                }
            case 304:
                var1 = {};
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 1;
                var6 = var11[var2];
                var4 = undefined;
                var6 = var9.bind(var4)(var6);
                var12 = var6.intl;
                var7 = var12.string;
                var6 = var11[var2];
                var6 = var9.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6.QL1y93;
                var6 = var7.bind(var12)(var6);
                var1.title = var6;
                var6 = var11[var2];
                var6 = var9.bind(var4)(var6);
                var7 = var6.intl;
                var6 = var7.formatToPlainString;
                var2 = var11[var2];
                var2 = var9.bind(var4)(var2);
                var2 = var2.t;
                var4 = var2["6ZyNH/"];
                var2 = {};
                var2.deviceName = var10;
                var2 = var6.bind(var7)(var4, var2);
                var1.body = var2;
                _fun113311_ip = 968;
                continue _fun113311;
            case 428:
                var2 = {};
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var4 = 1;
                var7 = var12[var4];
                var6 = undefined;
                var7 = var11.bind(var6)(var7);
                var13 = var7.intl;
                var9 = var13.string;
                var7 = var12[var4];
                var7 = var11.bind(var6)(var7);
                var7 = var7.t;
                var7 = var7.QL1y93;
                var7 = var9.bind(var13)(var7);
                var2.title = var7;
                var7 = var12[var4];
                var7 = var11.bind(var6)(var7);
                var9 = var7.intl;
                var7 = var9.formatToPlainString;
                var4 = var12[var4];
                var4 = var11.bind(var6)(var4);
                var4 = var4.t;
                var6 = var4.D18eZu;
                var4 = {};
                var4.deviceType = var8;
                var4 = var7.bind(var9)(var6, var4);
                var2.body = var4;
                var4 = true;
                var2.isAccountLinkError = var4;
                var1 = var2;
                _fun113311_ip = 968;
                continue _fun113311;
            case 564:
                var2 = {};
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var4 = 1;
                var7 = var12[var4];
                var6 = undefined;
                var7 = var11.bind(var6)(var7);
                var14 = var7.intl;
                var13 = var14.formatToPlainString;
                var7 = var12[var4];
                var7 = var11.bind(var6)(var7);
                var7 = var7.t;
                var9 = var7.M6Vzat;
                var7 = {};
                var7.deviceType = var8;
                var7 = var13.bind(var14)(var9, var7);
                var2.title = var7;
                var7 = var12[var4];
                var7 = var11.bind(var6)(var7);
                var9 = var7.intl;
                var7 = var9.formatToPlainString;
                var4 = var12[var4];
                var4 = var11.bind(var6)(var4);
                var4 = var4.t;
                var6 = var4.InKtnC;
                var4 = {};
                var4.deviceName = var10;
                var4 = var7.bind(var9)(var6, var4);
                var2.body = var4;
                var1 = var2;
                _fun113311_ip = 968;
                continue _fun113311;
            case 703:
                var2 = {};
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var4 = 1;
                var7 = var12[var4];
                var6 = undefined;
                var7 = var11.bind(var6)(var7);
                var14 = var7.intl;
                var13 = var14.formatToPlainString;
                var7 = var12[var4];
                var7 = var11.bind(var6)(var7);
                var7 = var7.t;
                var9 = var7.akd6Sx;
                var7 = {};
                var7.deviceType = var8;
                var7 = var13.bind(var14)(var9, var7);
                var2.title = var7;
                var7 = var12[var4];
                var7 = var11.bind(var6)(var7);
                var9 = var7.intl;
                var7 = var9.formatToPlainString;
                var4 = var12[var4];
                var4 = var11.bind(var6)(var4);
                var4 = var4.t;
                var6 = var4.RyOvpJ;
                var4 = {};
                var4.deviceName = var10;
                var4 = var7.bind(var9)(var6, var4);
                var2.body = var4;
                var1 = var2;
                _fun113311_ip = 968;
                continue _fun113311;
            case 842:
                var2 = {};
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 1;
                var6 = var10[var3];
                var4 = undefined;
                var6 = var9.bind(var4)(var6);
                var11 = var6.intl;
                var7 = var11.string;
                var6 = var10[var3];
                var6 = var9.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6["GSZ+HI"];
                var6 = var7.bind(var11)(var6);
                var2.title = var6;
                var6 = var10[var3];
                var6 = var9.bind(var4)(var6);
                var7 = var6.intl;
                var6 = var7.formatToPlainString;
                var3 = var10[var3];
                var3 = var9.bind(var4)(var3);
                var3 = var3.t;
                var4 = var3["cYX/3E"];
                var3 = {};
                var3.deviceType = var8;
                var3 = var6.bind(var7)(var4, var3);
                var2.body = var3;
                var1 = var2;
            case 968:
                var0 = var1;
            case 971:
                var1 = null;
                if (!(var1 != var0)) {
                    _fun113311_ip = 1089;
                    continue _fun113311
                }
            case 977:
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 1;
                var3 = var9[var1];
                var8 = undefined;
                var3 = var2.bind(var8)(var3);
                var4 = var3.intl;
                var3 = var4.format;
                var1 = var9[var1];
                var1 = var2.bind(var8)(var1);
                var1 = var1.t;
                var2 = var1["1Bi9Cf"];
                var1 = {};
                var7 = _closure1_slot1;
                var6 = 2;
                var6 = var9[var6];
                var7 = var7.bind(var8)(var6);
                var6 = var7.getSubmitRequestURL;
                var6 = var6.bind(var7)();
                var1.supportURL = var6;
                var5 = var5.code;
                var1.errorCode = var5;
                var1 = var3.bind(var4)(var2, var1);
                var0.errorCodeMessage = var1;
            case 1089:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5343, 1234, 1684, 2]);