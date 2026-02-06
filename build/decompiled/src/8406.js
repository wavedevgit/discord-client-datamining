// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun67746: for (var _fun67746_ip = 0;;) switch (_fun67746_ip) {
        case 0:
            var6 = require;
            var2 = exports;
            var7 = dependencyMap;
            var _closure1_slot0 = var6;
            var _closure1_slot1 = var7;
            var3 = function arg0() {
                _fun67747: for (var _fun67747_ip = 0;;) switch (_fun67747_ip) {
                    case 0:
                        var2 = arg0;
                        if (!var2) {
                            _fun67747_ip = 18;
                            continue _fun67747
                        }
                    case 6:
                        var1 = var2.__esModule;
                        var0 = var2;
                        if (var1) {
                            _fun67747_ip = 27;
                            continue _fun67747
                        }
                    case 18:
                        var1 = {};
                        var1.default = var2;
                        var0 = var1;
                    case 27:
                        return var0;
                }
            };
            var0 = global;
            var9 = var0.Object;
            var8 = var9.defineProperty;
            var5 = {};
            var4 = true;
            var5.value = var4;
            var4 = '__esModule';
            var4 = var8.bind(var9)(var2, var4, var5);
            var0 = var0.Object;
            var0 = var0.assign;
            if (var0) {
                _fun67746_ip = 79;
                continue _fun67746
            }
        case 72:
            var0 = function(arg0) { // Environment: var1
                _fun67748: for (var _fun67748_ip = 0;;) switch (_fun67748_ip) {
                    case 0:
                        var0 = arg0;
                        var5 = undefined;
                        var1 = arguments.length;
                        var3 = 1;
                        var1 = var3 < var1;
                        var2 = global;
                        var4 = undefined;
                        if (!var1) {
                            _fun67748_ip = 115;
                            continue _fun67748
                        }
                    case 22:
                        var11 = arguments[var3];
                        var9 = var11;
                        var1 = var4;
                        var4 = var1;
                        for (var6 in var9)
                            case 43: {
                                var4 = var1;
                                case 55: var12 = var6;
                                var13 = var2.Object;
                                var13 = var13.prototype;
                                var14 = var13.hasOwnProperty;
                                var13 = var14.call;
                                var13 = var13.bind(var14)(var11, var12);
                                var1 = var12;
                                if (!var13) {
                                    _fun67748_ip = 43;
                                    continue _fun67748
                                }
                                case 92: var13 = var11[var12];
                                var0[var12] = var13;
                                var1 = var12;
                                _fun67748_ip = 43;
                                continue _fun67748;
                            }
                    case 105:
                        var3 = var3 + 1;
                        var1 = arguments.length;
                        if (var3 < var1) {
                            _fun67748_ip = 22;
                            continue _fun67748
                        }
                    case 115:
                        return var0;
                }
            };
        case 79:
            var _closure1_slot2 = var0;
            var0 = 0;
            var4 = var7[var0];
            var0 = undefined;
            var4 = var6.bind(var0)(var4);
            var5 = var3.bind(var0)(var4);
            var4 = 1;
            var4 = var7[var4];
            var4 = var6.bind(var0)(var4);
            var3 = var3.bind(var0)(var4);
            var _closure1_slot3 = var3;
            var3 = {};
            var8 = var5.default;
            var7 = var8.oneOfType;
            var6 = var5.default;
            var9 = var6.object;
            var6 = new Array(2);
            var6[0] = var9;
            var9 = var5.default;
            var9 = var9.string;
            var6[1] = var9;
            var6 = var7.bind(var8)(var6);
            var6 = var6.isRequired;
            var3.bgColor = var6;
            var6 = var5.default;
            var6 = var6.string;
            var6 = var6.isRequired;
            var3.bgD = var6;
            var8 = var5.default;
            var7 = var8.oneOfType;
            var6 = var5.default;
            var9 = var6.object;
            var6 = new Array(2);
            var6[0] = var9;
            var9 = var5.default;
            var9 = var9.string;
            var6[1] = var9;
            var6 = var7.bind(var8)(var6);
            var6 = var6.isRequired;
            var3.fgColor = var6;
            var6 = var5.default;
            var6 = var6.string;
            var6 = var6.isRequired;
            var3.fgD = var6;
            var6 = var5.default;
            var6 = var6.number;
            var6 = var6.isRequired;
            var3.size = var6;
            var5 = var5.default;
            var5 = var5.number;
            var5 = var5.isRequired;
            var3.viewBoxSize = var5;
            var4 = var4.forwardRef;
            var1 = function(arg0, arg1) { // Environment: var1
                _fun67749: for (var _fun67749_ip = 0;;) switch (_fun67749_ip) {
                    case 0:
                        var11 = arg0;
                        var15 = var11.bgColor;
                        var16 = var11.bgD;
                        var10 = var11.fgD;
                        var9 = var11.fgColor;
                        var1 = var11.size;
                        var17 = var11.viewBoxSize;
                        var8 = ['bgColor', 'bgD', 'fgD', 'fgColor', 'size', 'viewBoxSize'];
                        var13 = {};
                        var6 = var11;
                        var2 = global;
                        var0 = 0;
                        for (var3 in var6)
                            case 65: {
                                case 74: var14 = var3;
                                var12 = var8.indexOf;
                                var12 = var12.bind(var8)(var14);
                                if (var12 >= var0) {
                                    _fun67749_ip = 65;
                                    continue _fun67749
                                }
                                case 92: var12 = var2.Object;
                                var12 = var12.prototype;
                                var18 = var12.hasOwnProperty;
                                var12 = var18.call;
                                var12 = var12.bind(var18)(var11, var14);
                                if (!var12) {
                                    _fun67749_ip = 65;
                                    continue _fun67749
                                }
                                case 123: var12 = var11[var14];
                                var13[var14] = var12;
                                _fun67749_ip = 65;
                                continue _fun67749;
                            }
                    case 133:
                        var0 = _closure1_slot3;
                        var5 = var0.default;
                        var4 = var5.createElement;
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var0 = 2;
                        var2 = var12[var0];
                        var6 = undefined;
                        var2 = var11.bind(var6)(var2);
                        var3 = var2.Svg;
                        var8 = _closure1_slot2;
                        var2 = {};
                        var2.height = var1;
                        var14 = arg1;
                        var2.ref = var14;
                        var14 = {};
                        var14.height = var1;
                        var14.width = var1;
                        var2.style = var14;
                        var14 = '0 0 ';
                        var18 = var14 + var17;
                        var14 = ' ';
                        var14 = var18 + var14;
                        var14 = var14 + var17;
                        var2.viewBox = var14;
                        var2.width = var1;
                        var1 = {};
                        var2 = var8.bind(var6)(var1, var13, var2);
                        var1 = _closure1_slot3;
                        var14 = var1.default;
                        var13 = var14.createElement;
                        var1 = var12[var0];
                        var1 = var11.bind(var6)(var1);
                        var8 = var1.Path;
                        var1 = {};
                        var1.d = var16;
                        var1.fill = var15;
                        var20 = var13.bind(var14)(var8, var1);
                        var7 = _closure1_slot3;
                        var8 = var7.default;
                        var7 = var8.createElement;
                        var0 = var12[var0];
                        var0 = var11.bind(var6)(var0);
                        var6 = var0.Path;
                        var0 = {};
                        var0.d = var10;
                        var0.fill = var9;
                        var19 = var7.bind(var8)(var6, var0);
                        var23 = var5;
                        var22 = var3;
                        var21 = var2;
                        var0 = var23[var4](var22, var21, var20, var19, var18);
                        return var0;
                }
            };
            var1 = var4.bind(var0)(var1);
            var4 = 'QRCodeSvg';
            var1.displayName = var4;
            var1.propTypes = var3;
            var3 = {};
            var1.defaultProps = var3;
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [5145, 31, 5465]);