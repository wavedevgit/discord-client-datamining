// modules/oauth2/native/authorizeCallback.tsx
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
    var6 = var3.OAUTH2_SUCCESS_RESULT_MODAL_KEY;
    var _closure1_slot3 = var6;
    var3 = var3.OAUTH2_ERROR_RESULT_MODAL_KEY;
    var _closure1_slot4 = var3;
    var3 = /oauth2\\/authorized / ;
    var _closure1_slot5 = var3;
    var3 = /oauth2\\/error / ;
    var _closure1_slot6 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/oauth2/native/authorizeCallback.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun62310: for (var _fun62310_ip = 0;;) switch (_fun62310_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.location;
                var1 = var0.canceled;
                var6 = var0.application;
                var5 = var0.guild;
                var9 = var0.wasDeepLink;
                var10 = null;
                if (!(var10 == var7)) {
                    _fun62310_ip = 123;
                    continue _fun62310
                }
            case 36:
                if (var1) {
                    _fun62310_ip = 396;
                    continue _fun62310
                }
            case 42:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var3 = 1;
                var3 = var2[var3];
                var8 = undefined;
                var4 = var4.bind(var8)(var3);
                var3 = var4.pushLazy;
                var12 = _closure1_slot0;
                var11 = 3;
                var11 = var2[var11];
                var12 = var12.bind(var8)(var11);
                var11 = 2;
                var11 = var2[var11];
                var2 = var2.paths;
                var2 = var12.bind(var8)(var11, var2);
                var0 = _closure1_slot4;
                var0 = var3.bind(var4)(var2, var8, var0);
                _fun62310_ip = 396;
                continue _fun62310;
            case 123:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var12 = 4;
                var2 = var2[var12];
                var8 = undefined;
                var3 = var3.bind(var8)(var2);
                var2 = var3.toURLSafe;
                var2 = var2.bind(var3)(var7);
                if (!(var10 == var2)) {
                    _fun62310_ip = 165;
                    continue _fun62310
                }
            case 163:
                var2 = {};
            case 165:
                var11 = var2.host;
                var4 = var2.pathname;
                var13 = var2.searchParams;
                if (!(var10 != var11)) {
                    _fun62310_ip = 266;
                    continue _fun62310
                }
            case 187:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var12];
                var3 = var3.bind(var8)(var2);
                var2 = var3.isDiscordHostname;
                var2 = var2.bind(var3)(var11);
                if (!var2) {
                    _fun62310_ip = 266;
                    continue _fun62310
                }
            case 218:
                if (!(var10 != var4)) {
                    _fun62310_ip = 266;
                    continue _fun62310
                }
            case 222:
                var3 = var4.match;
                var2 = _closure1_slot5;
                var2 = var3.bind(var4)(var2);
                if (!(var10 == var2)) {
                    _fun62310_ip = 574;
                    continue _fun62310
                }
            case 244:
                var3 = var4.match;
                var2 = _closure1_slot6;
                var2 = var3.bind(var4)(var2);
                if (!(var10 == var2)) {
                    _fun62310_ip = 400;
                    continue _fun62310
                }
            case 266:
                if (!var9) {
                    _fun62310_ip = 327;
                    continue _fun62310
                }
            case 269:
                var4 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 6;
                var2 = var11[var2];
                var3 = var4.bind(var8)(var2);
                var2 = var3.getBrowserManagerSelectedBrowser;
                var3 = var2.bind(var3)();
                var2 = 7;
                var2 = var11[var2];
                var2 = var4.bind(var8)(var2);
                var2 = var2.WebBrowserType;
                var2 = var2.IN_APP;
                var9 = var3 === var2;
            case 327:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 8;
                var2 = var4[var2];
                var4 = var3.bind(var8)(var2);
                var3 = var4.openURL;
                var2 = undefined;
                if (!var9) {
                    _fun62310_ip = 390;
                    continue _fun62310
                }
            case 358:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var9 = 7;
                var9 = var12[var9];
                var9 = var11.bind(var8)(var9);
                var9 = var9.WebBrowserType;
                var2 = var9.SAFARI;
            case 390:
                var2 = var3.bind(var4)(var7, var2);
            case 396:
                var2 = undefined;
                return var2;
            case 400:
                if (var1) {
                    _fun62310_ip = 572;
                    continue _fun62310
                }
            case 406:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var2 = 1;
                var2 = var1[var2];
                var7 = var3.bind(var8)(var2);
                var4 = var7.pushLazy;
                var3 = _closure1_slot0;
                var2 = 3;
                var2 = var1[var2];
                var3 = var3.bind(var8)(var2);
                var2 = 2;
                var2 = var1[var2];
                var1 = var1.paths;
                var3 = var3.bind(var8)(var2, var1);
                var2 = {};
                var9 = var10 == var13;
                var1 = undefined;
                if (var9) {
                    _fun62310_ip = 509;
                    continue _fun62310
                }
            case 477:
                var11 = var13.get;
                var9 = 'error_description';
                var11 = var11.bind(var13)(var9);
                var9 = var10 == var11;
                var1 = undefined;
                if (var9) {
                    _fun62310_ip = 509;
                    continue _fun62310
                }
            case 500:
                var9 = var11.toString;
                var1 = var9.bind(var11)();
            case 509:
                if (!(var10 == var1)) {
                    _fun62310_ip = 557;
                    continue _fun62310
                }
            case 513:
                var11 = var10 == var13;
                var9 = undefined;
                if (var11) {
                    _fun62310_ip = 554;
                    continue _fun62310
                }
            case 522:
                var12 = var13.get;
                var11 = 'error';
                var11 = var12.bind(var13)(var11);
                var10 = var10 == var11;
                var9 = undefined;
                if (var10) {
                    _fun62310_ip = 554;
                    continue _fun62310
                }
            case 545:
                var10 = var11.toString;
                var9 = var10.bind(var11)();
            case 554:
                var1 = var9;
            case 557:
                var2.error = var1;
                var1 = _closure1_slot4;
                var1 = var4.bind(var7)(var3, var2, var1);
            case 572:
                return var8;
            case 574:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var2 = 1;
                var2 = var1[var2];
                var4 = var3.bind(var8)(var2);
                var3 = var4.pushLazy;
                var7 = _closure1_slot0;
                var2 = 3;
                var2 = var1[var2];
                var7 = var7.bind(var8)(var2);
                var2 = 5;
                var2 = var1[var2];
                var1 = var1.paths;
                var2 = var7.bind(var8)(var2, var1);
                var1 = {};
                var1.application = var6;
                var1.guild = var5;
                var0 = _closure1_slot3;
                var0 = var3.bind(var4)(var2, var1, var0);
                var0 = undefined;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7836, 4561, 5359, 1307, 1457, 7838, 3276, 670, 3144, 2]);