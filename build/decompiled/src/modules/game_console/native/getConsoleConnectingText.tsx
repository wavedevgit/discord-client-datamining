// modules/game_console/native/getConsoleConnectingText.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = var3.PlatformTypes;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_console/native/getConsoleConnectingText.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2() {
        _fun69418: for (var _fun69418_ip = 0;;) switch (_fun69418_ip) {
            case 0:
                var4 = arg0;
                var2 = arg1;
                var1 = arg2;
                var0 = null;
                var3 = var0 == var2;
                var6 = undefined;
                var5 = undefined;
                if (var3) {
                    _fun69418_ip = 27;
                    continue _fun69418
                }
            case 22:
                var5 = var2.type;
            case 27:
                if (!(var0 == var5)) {
                    _fun69418_ip = 55;
                    continue _fun69418
                }
            case 31:
                var7 = var0 == var4;
                var3 = undefined;
                if (var7) {
                    _fun69418_ip = 52;
                    continue _fun69418
                }
            case 40:
                var4 = var4.clientInfo;
                var3 = var4.os;
            case 52:
                var5 = var3;
            case 55:
                var3 = var0 != var2;
                var0 = _closure1_slot2;
                var0 = var0.XBOX;
                if (!(var5 !== var0)) {
                    _fun69418_ip = 249;
                    continue _fun69418
                }
            case 79:
                var0 = _closure1_slot2;
                var0 = var0.PLAYSTATION;
                if (!(var5 !== var0)) {
                    _fun69418_ip = 112;
                    continue _fun69418
                }
            case 93:
                var0 = _closure1_slot2;
                var4 = var0.PLAYSTATION_STAGING;
                var0 = undefined;
                if (!(var5 === var4)) {
                    _fun69418_ip = 244;
                    continue _fun69418
                }
            case 112:
                if (var1) {
                    _fun69418_ip = 181;
                    continue _fun69418
                }
            case 115:
                var4 = 'PS5';
                if (!var3) {
                    _fun69418_ip = 179;
                    continue _fun69418
                }
            case 122:
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var5 = 1;
                var7 = var10[var5];
                var7 = var9.bind(var6)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var5 = var10[var5];
                var5 = var9.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.QCw1oW;
                var4 = var7.bind(var8)(var5);
            case 179:
                _fun69418_ip = 241;
                continue _fun69418;
            case 181:
                var7 = _closure1_slot0;
                var10 = _closure1_slot1;
                var5 = 1;
                var8 = var10[var5];
                var8 = var7.bind(var6)(var8);
                var9 = var8.intl;
                var8 = var9.format;
                var5 = var10[var5];
                var5 = var7.bind(var6)(var5);
                var5 = var5.t;
                var7 = var5.TZ17Bg;
                var5 = {};
                var4 = var8.bind(var9)(var7, var5);
            case 241:
                var0 = var4;
            case 244:
                _fun69418_ip = 381;
                continue _fun69418;
            case 249:
                if (var1) {
                    _fun69418_ip = 318;
                    continue _fun69418
                }
            case 252:
                var1 = 'Xbox';
                if (!var3) {
                    _fun69418_ip = 316;
                    continue _fun69418
                }
            case 259:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 1;
                var4 = var8[var3];
                var4 = var7.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.UjA4HX;
                var1 = var4.bind(var5)(var3);
            case 316:
                _fun69418_ip = 378;
                continue _fun69418;
            case 318:
                var3 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 1;
                var4 = var7[var2];
                var4 = var3.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.format;
                var2 = var7[var2];
                var2 = var3.bind(var6)(var2);
                var2 = var2.t;
                var3 = var2["ynEs/Y"];
                var2 = {};
                var1 = var4.bind(var5)(var3, var2);
            case 378:
                var0 = var1;
            case 381:
                return var0;
        }
    };
    var2.getConsoleConnectingText = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 1234, 2]);