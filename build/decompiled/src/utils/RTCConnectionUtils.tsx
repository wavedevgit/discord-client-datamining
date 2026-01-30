// utils/RTCConnectionUtils.tsx
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
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var6 = var1.RTCConnectionStates;
    var _closure1_slot2 = var6;
    var1 = var1.ConnectionStatus;
    var _closure1_slot3 = var1;
    var1 = {};
    var6 = function(arg0) { // Original name: getStatus, environment: var3
        _fun69132: for (var _fun69132_ip = 0;;) switch (_fun69132_ip) {
            case 0:
                var2 = arg0;
                var3 = arguments[1];
                var7 = undefined;
                if (!(var3 === var7)) {
                    _fun69132_ip = 14;
                    continue _fun69132
                }
            case 12:
                var3 = false;
            case 14:
                var1 = _closure1_slot2;
                var1 = var1.CONNECTING;
                if (!(var1 !== var2)) {
                    _fun69132_ip = 846;
                    continue _fun69132
                }
            case 34:
                var1 = _closure1_slot2;
                var1 = var1.AUTHENTICATING;
                if (!(var1 !== var2)) {
                    _fun69132_ip = 777;
                    continue _fun69132
                }
            case 51:
                var1 = _closure1_slot2;
                var1 = var1.AWAITING_ENDPOINT;
                if (!(var1 !== var2)) {
                    _fun69132_ip = 705;
                    continue _fun69132
                }
            case 68:
                var1 = _closure1_slot2;
                var1 = var1.RTC_CONNECTED;
                if (!(var1 !== var2)) {
                    _fun69132_ip = 609;
                    continue _fun69132
                }
            case 85:
                var1 = _closure1_slot2;
                var1 = var1.RTC_CONNECTING;
                if (!(var1 !== var2)) {
                    _fun69132_ip = 537;
                    continue _fun69132
                }
            case 102:
                var1 = _closure1_slot2;
                var1 = var1.ICE_CHECKING;
                if (!(var1 !== var2)) {
                    _fun69132_ip = 465;
                    continue _fun69132
                }
            case 119:
                var1 = _closure1_slot2;
                var1 = var1.DTLS_CONNECTING;
                if (!(var1 !== var2)) {
                    _fun69132_ip = 393;
                    continue _fun69132
                }
            case 136:
                var1 = _closure1_slot2;
                var1 = var1.NO_ROUTE;
                if (!(var1 !== var2)) {
                    _fun69132_ip = 321;
                    continue _fun69132
                }
            case 153:
                var1 = _closure1_slot2;
                var1 = var1.RTC_DISCONNECTED;
                if (!(var1 !== var2)) {
                    _fun69132_ip = 249;
                    continue _fun69132
                }
            case 167:
                var1 = _closure1_slot2;
                var1 = var1.DISCONNECTED;
                var1 = _closure1_slot3;
                var2 = var1.ERROR;
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 1;
                var4 = var8[var1];
                var4 = var6.bind(var7)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var1 = var8[var1];
                var1 = var6.bind(var7)(var1);
                var1 = var1.t;
                var1 = var1.NLKQbx;
                var1 = var4.bind(var5)(var1);
                _fun69132_ip = 913;
                continue _fun69132;
            case 249:
                var4 = _closure1_slot3;
                var2 = var4.ERROR;
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var4 = 1;
                var6 = var10[var4];
                var6 = var9.bind(var7)(var6);
                var8 = var6.intl;
                var6 = var8.string;
                var4 = var10[var4];
                var4 = var9.bind(var7)(var4);
                var4 = var4.t;
                var4 = var4.M7LDmE;
                var1 = var6.bind(var8)(var4);
                _fun69132_ip = 913;
                continue _fun69132;
            case 321:
                var4 = _closure1_slot3;
                var2 = var4.ERROR;
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var4 = 1;
                var6 = var10[var4];
                var6 = var9.bind(var7)(var6);
                var8 = var6.intl;
                var6 = var8.string;
                var4 = var10[var4];
                var4 = var9.bind(var7)(var4);
                var4 = var4.t;
                var4 = var4.mGhOIi;
                var1 = var6.bind(var8)(var4);
                _fun69132_ip = 913;
                continue _fun69132;
            case 393:
                var4 = _closure1_slot3;
                var2 = var4.CONNECTING;
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var4 = 1;
                var6 = var10[var4];
                var6 = var9.bind(var7)(var6);
                var8 = var6.intl;
                var6 = var8.string;
                var4 = var10[var4];
                var4 = var9.bind(var7)(var4);
                var4 = var4.t;
                var4 = var4.UvB3gV;
                var1 = var6.bind(var8)(var4);
                _fun69132_ip = 913;
                continue _fun69132;
            case 465:
                var4 = _closure1_slot3;
                var2 = var4.CONNECTING;
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var4 = 1;
                var6 = var10[var4];
                var6 = var9.bind(var7)(var6);
                var8 = var6.intl;
                var6 = var8.string;
                var4 = var10[var4];
                var4 = var9.bind(var7)(var4);
                var4 = var4.t;
                var4 = var4["rdCyA/"];
                var1 = var6.bind(var8)(var4);
                _fun69132_ip = 913;
                continue _fun69132;
            case 537:
                var4 = _closure1_slot3;
                var2 = var4.CONNECTING;
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var4 = 1;
                var6 = var10[var4];
                var6 = var9.bind(var7)(var6);
                var8 = var6.intl;
                var6 = var8.string;
                var4 = var10[var4];
                var4 = var9.bind(var7)(var4);
                var4 = var4.t;
                var4 = var4.Gp51dl;
                var1 = var6.bind(var8)(var4);
                _fun69132_ip = 913;
                continue _fun69132;
            case 609:
                var4 = _closure1_slot3;
                var4 = var4.CONNECTED;
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var5 = 1;
                var6 = var10[var5];
                var6 = var9.bind(var7)(var6);
                var8 = var6.intl;
                var6 = var8.string;
                var5 = var10[var5];
                var5 = var9.bind(var7)(var5);
                var5 = var5.t;
                if (var3) {
                    _fun69132_ip = 681;
                    continue _fun69132
                }
            case 666:
                var3 = var5.daXg45;
                var3 = var6.bind(var8)(var3);
                _fun69132_ip = 694;
                continue _fun69132;
            case 681:
                var5 = var5.HtVOdd;
                var3 = var6.bind(var8)(var5);
            case 694:
                var1 = var3;
                var2 = var4;
                _fun69132_ip = 913;
                continue _fun69132;
            case 705:
                var3 = _closure1_slot3;
                var2 = var3.CONNECTING;
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var3 = 1;
                var5 = var9[var3];
                var5 = var8.bind(var7)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var3 = var9[var3];
                var3 = var8.bind(var7)(var3);
                var3 = var3.t;
                var3 = var3.xEbu0Q;
                var1 = var5.bind(var6)(var3);
                _fun69132_ip = 913;
                continue _fun69132;
            case 777:
                var3 = _closure1_slot3;
                var2 = var3.CONNECTING;
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var3 = 1;
                var5 = var9[var3];
                var5 = var8.bind(var7)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var3 = var9[var3];
                var3 = var8.bind(var7)(var3);
                var3 = var3.t;
                var3 = var3.GxXwE2;
                var1 = var5.bind(var6)(var3);
                _fun69132_ip = 913;
                continue _fun69132;
            case 846:
                var3 = _closure1_slot3;
                var2 = var3.CONNECTING;
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var0 = 1;
                var4 = var8[var0];
                var4 = var6.bind(var7)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var0 = var8[var0];
                var0 = var6.bind(var7)(var0);
                var0 = var0.t;
                var0 = var0.MzW9sN;
                var1 = var4.bind(var5)(var0);
            case 913:
                var0 = {};
                var0.connectionStatus = var2;
                var0.connectionStatusText = var1;
                return var0;
        }
    };
    var1.getStatus = var6;
    var3 = function(arg0) { // Original name: getShortHostname, environment: var3
        _fun69133: for (var _fun69133_ip = 0;;) switch (_fun69133_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var1 = var0 == var3;
                var0 = '';
                if (var1) {
                    _fun69133_ip = 36;
                    continue _fun69133
                }
            case 16:
                var2 = var3.split;
                var1 = '.';
                var2 = var2.bind(var3)(var1);
                var1 = 0;
                var0 = var2[var1];
            case 36:
                return var0;
        }
    };
    var1.getShortHostname = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/RTCConnectionUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 1234, 2]);