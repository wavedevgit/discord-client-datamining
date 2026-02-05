// modules/messages/native/VisibleMessagesWindowHandler.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function arg0() {
        _fun76949: for (var _fun76949_ip = 0;;) switch (_fun76949_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                if (!(var1 != var0)) {
                    _fun76949_ip = 86;
                    continue _fun76949
                }
            case 9:
                var2 = 'rowType';
                var2 = var2 in var0;
                if (var2) {
                    _fun76949_ip = 63;
                    continue _fun76949
                }
            case 20:
                var3 = var0.type;
                var2 = _closure1_slot1;
                var2 = var2.MESSAGE;
                if (!(var3 === var2)) {
                    _fun76949_ip = 86;
                    continue _fun76949
                }
            case 42:
                var2 = var0.message;
                var3 = var1 == var2;
                var1 = undefined;
                if (var3) {
                    _fun76949_ip = 61;
                    continue _fun76949
                }
            case 56:
                var1 = var2.id;
            case 61:
                return var1;
            case 63:
                var2 = var0.rowType;
                var1 = _closure1_slot1;
                var1 = var1.MESSAGE;
                if (!(var2 !== var1)) {
                    _fun76949_ip = 90;
                    continue _fun76949
                }
            case 86:
                var1 = undefined;
                return var1;
            case 90:
                var0 = var0.message;
                var0 = var0.id;
                return var0;
        }
    };
    var _closure1_slot2 = var0;
    var0 = global;
    var8 = var0.Object;
    var3 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var1);
    var1 = 1;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.RowType;
    var _closure1_slot1 = var1;
    var1 = function() {
        var2 = this;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var0 = undefined;
        var3 = var4.bind(var0)(var2, var3);
        var3 = null;
        var2.data = var3;
        var2.callback = var3;
        var3 = function(arg0) { // Environment: var1
            _fun76951: for (var _fun76951_ip = 0;;) switch (_fun76951_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var2 = arg0;
                    var1.callback = var2;
                    var2 = var1.data;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun76951_ip = 47;
                        continue _fun76951
                    }
                case 27:
                    var2 = _closure2_slot0;
                    var1 = var2.callback;
                    var0 = var2.data;
                    var0 = var1.bind(var2)(var0);
                case 47:
                    var0 = undefined;
                    return var0;
            }
        };
        var2.setCallback = var3;
        var3 = function() { // Environment: var1
            var1 = _closure2_slot0;
            var0 = null;
            var1.callback = var0;
            var1.data = var0;
            var0 = undefined;
            return var0;
        };
        var2.clearCallback = var3;
        var1 = function(arg0) { // Environment: var1
            _fun76953: for (var _fun76953_ip = 0;;) switch (_fun76953_ip) {
                case 0:
                    var0 = arg0;
                    var9 = var0.rows;
                    var5 = var0.firstVisibleMessageRowIndex;
                    var2 = var0.lastVisibleMessageRowIndex;
                    var1 = _closure2_slot0;
                    var1 = var1.callback;
                    var8 = null;
                    if (!(var8 != var1)) {
                        _fun76953_ip = 312;
                        continue _fun76953
                    }
                case 43:
                    var1 = var8 != var5;
                    var4 = null;
                    if (!var1) {
                        _fun76953_ip = 97;
                        continue _fun76953
                    }
                case 52:
                    var7 = 0;
                    var10 = var5 >= var7;
                    var3 = undefined;
                    var1 = var5;
                    var4 = null;
                    if (!var10) {
                        _fun76953_ip = 97;
                        continue _fun76953
                    }
                case 71:
                    var11 = _closure1_slot2;
                    var10 = var9[var1];
                    var4 = var11.bind(var3)(var10);
                    if (!(var8 == var4)) {
                        _fun76953_ip = 97;
                        continue _fun76953
                    }
                case 88:
                    var1 = var1 - 1;
                    var4 = null;
                    if (var1 >= var7) {
                        _fun76953_ip = 71;
                        continue _fun76953
                    }
                case 97:
                    var3 = var8 != var2;
                    var1 = null;
                    if (!var3) {
                        _fun76953_ip = 162;
                        continue _fun76953
                    }
                case 106:
                    var3 = var9.length;
                    var3 = var2 < var3;
                    var7 = undefined;
                    var6 = var2;
                    var1 = null;
                    if (!var3) {
                        _fun76953_ip = 162;
                        continue _fun76953
                    }
                case 128:
                    var11 = _closure1_slot2;
                    var3 = var9[var6];
                    var1 = var11.bind(var7)(var3);
                    if (!(var8 == var1)) {
                        _fun76953_ip = 162;
                        continue _fun76953
                    }
                case 145:
                    var6 = var6 + 1;
                    var3 = var9.length;
                    var3 = var6 < var3;
                    var1 = null;
                    if (var3) {
                        _fun76953_ip = 128;
                        continue _fun76953
                    }
                case 162:
                    var6 = var8 != var5;
                    var3 = null;
                    if (!var6) {
                        _fun76953_ip = 267;
                        continue _fun76953
                    }
                case 171:
                    var6 = var8 != var2;
                    var3 = null;
                    if (!var6) {
                        _fun76953_ip = 267;
                        continue _fun76953
                    }
                case 180:
                    var6 = global;
                    var7 = var6.Math;
                    var6 = var7.floor;
                    var10 = var2 - var5;
                    var2 = 2;
                    var2 = var10 / var2;
                    var2 = var6.bind(var7)(var2);
                    var7 = var5 + var2;
                    var2 = var9.length;
                    var2 = var7 < var2;
                    var5 = undefined;
                    var3 = null;
                    if (!var2) {
                        _fun76953_ip = 267;
                        continue _fun76953
                    }
                case 233:
                    var10 = _closure1_slot2;
                    var2 = var9[var7];
                    var3 = var10.bind(var5)(var2);
                    if (!(var8 == var3)) {
                        _fun76953_ip = 267;
                        continue _fun76953
                    }
                case 250:
                    var7 = var7 + 1;
                    var2 = var9.length;
                    var2 = var7 < var2;
                    var3 = null;
                    if (var2) {
                        _fun76953_ip = 233;
                        continue _fun76953
                    }
                case 267:
                    var2 = _closure2_slot0;
                    var0 = {};
                    var0.topVisibleMessage = var4;
                    var0.middleVisibleMessage = var3;
                    var0.bottomVisibleMessage = var1;
                    var2.data = var0;
                    var1 = var2.callback;
                    var0 = var2.data;
                    var0 = var1.bind(var2)(var0);
                case 312:
                    var0 = undefined;
                    return var0;
            }
        };
        var2.handleScrollPosition = var1;
        return var0;
    };
    var _closure1_slot3 = var1;
    var1 = var3.bind(var0)(var1);
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/VisibleMessagesWindowHandler.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 6537, 2]);