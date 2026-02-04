// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'padding', 'paddingVertical', 'paddingHorizontal', 'backgroundColor'];
    var _closure1_slot0 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot1 = var3;
    var3 = function arg0, arg1() {
        _fun45771: for (var _fun45771_ip = 0;;) switch (_fun45771_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var2 = null;
                if (!(var2 == var1)) {
                    _fun45771_ip = 14;
                    continue _fun45771
                }
            case 12:
                var1 = {};
            case 14:
                var8 = var1.paddingTop;
                var9 = var1.paddingRight;
                var4 = var1.paddingBottom;
                var11 = var1.paddingLeft;
                var5 = var1.padding;
                var6 = var1.paddingVertical;
                var10 = var1.paddingHorizontal;
                var1 = var1.backgroundColor;
                var2 = global;
                var7 = var2.Number;
                if (var11) {
                    _fun45771_ip = 73;
                    continue _fun45771
                }
            case 70:
                var11 = var10;
            case 73:
                if (var11) {
                    _fun45771_ip = 79;
                    continue _fun45771
                }
            case 76:
                var11 = var5;
            case 79:
                if (var11) {
                    _fun45771_ip = 84;
                    continue _fun45771
                }
            case 82:
                var11 = 0;
            case 84:
                var3 = undefined;
                var7 = var7.bind(var3)(var11);
                var0.paddingLeft = var7;
                var7 = var2.Number;
                if (var9) {
                    _fun45771_ip = 109;
                    continue _fun45771
                }
            case 106:
                var9 = var10;
            case 109:
                if (var9) {
                    _fun45771_ip = 115;
                    continue _fun45771
                }
            case 112:
                var9 = var5;
            case 115:
                if (var9) {
                    _fun45771_ip = 120;
                    continue _fun45771
                }
            case 118:
                var9 = 0;
            case 120:
                var7 = var7.bind(var3)(var9);
                var0.paddingRight = var7;
                var7 = var2.Number;
                if (var8) {
                    _fun45771_ip = 143;
                    continue _fun45771
                }
            case 140:
                var8 = var6;
            case 143:
                if (var8) {
                    _fun45771_ip = 149;
                    continue _fun45771
                }
            case 146:
                var8 = var5;
            case 149:
                if (var8) {
                    _fun45771_ip = 154;
                    continue _fun45771
                }
            case 152:
                var8 = 0;
            case 154:
                var7 = var7.bind(var3)(var8);
                var0.paddingTop = var7;
                var2 = var2.Number;
                if (var4) {
                    _fun45771_ip = 177;
                    continue _fun45771
                }
            case 174:
                var4 = var6;
            case 177:
                if (var4) {
                    _fun45771_ip = 183;
                    continue _fun45771
                }
            case 180:
                var4 = var5;
            case 183:
                if (var4) {
                    _fun45771_ip = 188;
                    continue _fun45771
                }
            case 186:
                var4 = 0;
            case 188:
                var2 = var2.bind(var3)(var4);
                var0.paddingBottom = var2;
                var0.backgroundColor = var1;
                return var0;
        }
    };
    var _closure1_slot2 = var3;
    var2.updateContentStyle = var3;
    var3 = function arg0() {
        _fun45772: for (var _fun45772_ip = 0;;) switch (_fun45772_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 == var3)) {
                    _fun45772_ip = 11;
                    continue _fun45772
                }
            case 9:
                var3 = {};
            case 11:
                var0 = var3.paddingTop;
                var0 = var3.paddingRight;
                var0 = var3.paddingBottom;
                var0 = var3.paddingLeft;
                var0 = var3.padding;
                var0 = var3.paddingVertical;
                var0 = var3.paddingHorizontal;
                var0 = var3.backgroundColor;
                var2 = _closure1_slot1;
                var1 = _closure1_slot0;
                var0 = undefined;
                var2 = var2.bind(var0)(var3, var1);
                var0 = global;
                var1 = var0.Object;
                var0 = var1.keys;
                var0 = var0.bind(var1)(var2);
                var1 = var0.length;
                var0 = 0;
                var0 = var1 > var0;
                return var0;
        }
    };
    var2.hasUnsupportedKeysInContentContainerStyle = var3;
    var3 = function arg0, arg1, arg2() {
        _fun45773: for (var _fun45773_ip = 0;;) switch (_fun45773_ip) {
            case 0:
                var0 = arg0;
                var4 = _closure1_slot2;
                var1 = {};
                var3 = undefined;
                var2 = arg1;
                var2 = var4.bind(var3)(var1, var2);
                var2 = arg2;
                if (var2) {
                    _fun45773_ip = 62;
                    continue _fun45773
                }
            case 29:
                var3 = var0.width;
                var4 = var1.paddingLeft;
                var2 = var1.paddingRight;
                var2 = var4 + var2;
                var2 = var3 - var2;
                var0.width = var2;
                _fun45773_ip = 93;
                continue _fun45773;
            case 62:
                var2 = var0.height;
                var3 = var1.paddingTop;
                var1 = var1.paddingBottom;
                var1 = var3 + var1;
                var1 = var2 - var1;
                var0.height = var1;
            case 93:
                return var0;
        }
    };
    var2.applyContentContainerInsetForLayoutManager = var3;
    var1 = function arg0, arg1() {
        _fun45774: for (var _fun45774_ip = 0;;) switch (_fun45774_ip) {
            case 0:
                var2 = arg0;
                var1 = {};
                var0 = arg1;
                if (var0) {
                    _fun45774_ip = 38;
                    continue _fun45774
                }
            case 11:
                var0 = var2.paddingLeft;
                var1.paddingLeft = var0;
                var0 = var2.paddingRight;
                var1.paddingRight = var0;
                var0 = var1;
                _fun45774_ip = 63;
                continue _fun45774;
            case 38:
                var3 = var2.paddingTop;
                var1.paddingTop = var3;
                var2 = var2.paddingBottom;
                var1.paddingBottom = var2;
                var0 = var1;
            case 63:
                return var0;
        }
    };
    var2.getContentContainerPadding = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5100]);