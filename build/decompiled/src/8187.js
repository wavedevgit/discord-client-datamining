// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
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
    var4 = var6[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var4 = var3.bind(var0)(var4);
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var7 = var3.Appearance;
    var _closure1_slot2 = var7;
    var7 = var3.Platform;
    var3 = var3.Text;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.DatePickerAndroid;
    var _closure1_slot4 = var3;
    var3 = function arg0() {
        _fun66058: for (var _fun66058_ip = 0;;) switch (_fun66058_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.theme;
                if (var1) {
                    _fun66058_ip = 55;
                    continue _fun66058
                }
            case 12:
                var2 = _closure1_slot2;
                if (var2) {
                    _fun66058_ip = 28;
                    continue _fun66058
                }
            case 22:
                var2 = 'auto';
                return var2;
            case 28:
                var2 = _closure1_slot2;
                var1 = var2.getColorScheme;
                var2 = var1.bind(var2)();
                var3 = null;
                var1 = undefined;
                if (!(var3 !== var2)) {
                    _fun66058_ip = 53;
                    continue _fun66058
                }
            case 50:
                var1 = var2;
            case 53:
                return var1;
            case 55:
                var0 = var0.theme;
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var3 = function arg0() {
        _fun66059: for (var _fun66059_ip = 0;;) switch (_fun66059_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.dividerColor;
                if (var1) {
                    _fun66059_ip = 57;
                    continue _fun66059
                }
            case 12:
                var1 = _closure1_slot5;
                var2 = undefined;
                var4 = var1.bind(var2)(var0);
                var1 = 'white';
                var3 = 'dark';
                if (!(var3 !== var4)) {
                    _fun66059_ip = 55;
                    continue _fun66059
                }
            case 38:
                var3 = 'light';
                var2 = undefined;
                if (!(var3 === var4)) {
                    _fun66059_ip = 52;
                    continue _fun66059
                }
            case 48:
                var2 = 'black';
            case 52:
                var1 = var2;
            case 55:
                return var1;
            case 57:
                var0 = var0.dividerColor;
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var3 = function arg0() {
        _fun66060: for (var _fun66060_ip = 0;;) switch (_fun66060_ip) {
            case 0:
                var2 = _closure1_slot5;
                var1 = undefined;
                var0 = arg0;
                var3 = var2.bind(var1)(var0);
                var0 = 'white';
                var2 = 'dark';
                if (!(var2 !== var3)) {
                    _fun66060_ip = 46;
                    continue _fun66060
                }
            case 29:
                var2 = 'light';
                var1 = undefined;
                if (!(var2 === var3)) {
                    _fun66060_ip = 43;
                    continue _fun66060
                }
            case 39:
                var1 = 'black';
            case 43:
                var0 = var1;
            case 46:
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var3 = function arg0() {
        _fun66061: for (var _fun66061_ip = 0;;) switch (_fun66061_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.title;
                var4 = var0.mode;
                var0 = '';
                var2 = null;
                if (!(var2 !== var1)) {
                    _fun66061_ip = 52;
                    continue _fun66061
                }
            case 23:
                if (var1) {
                    _fun66061_ip = 49;
                    continue _fun66061
                }
            case 26:
                var2 = 'Select date';
                var3 = 'time';
                if (!(var3 === var4)) {
                    _fun66061_ip = 46;
                    continue _fun66061
                }
            case 40:
                var2 = 'Select time';
            case 46:
                var1 = var2;
            case 49:
                var0 = var1;
            case 52:
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var3 = var4.memo;
    var1 = function arg0() {
        _fun66062: for (var _fun66062_ip = 0;;) switch (_fun66062_ip) {
            case 0:
                var7 = arg0;
                var3 = _closure1_slot3;
                var2 = _closure1_slot4;
                var1 = global;
                var6 = var1.Object;
                var5 = var6.assign;
                var4 = {};
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var8 = 4;
                var11 = var10[var8];
                var1 = undefined;
                var13 = var9.bind(var1)(var11);
                var12 = var13.colorToHex;
                var11 = _closure1_slot7;
                var11 = var11.bind(var1)(var7);
                var11 = var12.bind(var13)(var11);
                var4.textColor = var11;
                var8 = var10[var8];
                var10 = var9.bind(var1)(var8);
                var9 = var10.colorToHex;
                var8 = _closure1_slot6;
                var8 = var8.bind(var1)(var7);
                var8 = var9.bind(var10)(var8);
                var4.dividerColor = var8;
                var8 = _closure1_slot5;
                var8 = var8.bind(var1)(var7);
                var4.theme = var8;
                var0 = _closure1_slot8;
                var0 = var0.bind(var1)(var7);
                var4.title = var0;
                var8 = var7.confirmText;
                var0 = 'Confirm';
                if (!var8) {
                    _fun66062_ip = 158;
                    continue _fun66062
                }
            case 152:
                var0 = var7.confirmText;
            case 158:
                var4.confirmText = var0;
                var8 = var7.cancelText;
                var0 = 'Cancel';
                if (!var8) {
                    _fun66062_ip = 182;
                    continue _fun66062
                }
            case 176:
                var0 = var7.cancelText;
            case 182:
                var4.cancelText = var0;
                var8 = var7.minuteInterval;
                var0 = 1;
                if (!var8) {
                    _fun66062_ip = 205;
                    continue _fun66062
                }
            case 199:
                var0 = var7.minuteInterval;
            case 205:
                var4.minuteInterval = var0;
                var8 = var7.mode;
                var0 = 'datetime';
                if (!var8) {
                    _fun66062_ip = 227;
                    continue _fun66062
                }
            case 222:
                var0 = var7.mode;
            case 227:
                var4.mode = var0;
                var8 = var7.timeZoneOffsetInMinutes;
                var0 = null;
                var8 = var0 == var8;
                var0 = '';
                if (var8) {
                    _fun66062_ip = 265;
                    continue _fun66062
                }
            case 250:
                var9 = var7.timeZoneOffsetInMinutes;
                var8 = var9.toString;
                var0 = var8.bind(var9)();
            case 265:
                var4.timeZoneOffsetInMinutes = var0;
                var0 = {};
                var0 = var5.bind(var6)(var0, var7, var4);
                var0 = var3.bind(var1)(var2, var0);
                return var0;
        }
    };
    var1 = var3.bind(var4)(var1);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 8188, 8192]);