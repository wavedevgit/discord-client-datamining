// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun67659: for (var _fun67659_ip = 0;;) switch (_fun67659_ip) {
        case 0:
            var7 = require;
            var2 = exports;
            var8 = dependencyMap;
            var6 = function arg0() {
                _fun67660: for (var _fun67660_ip = 0;;) switch (_fun67660_ip) {
                    case 0:
                        var2 = arg0;
                        if (!var2) {
                            _fun67660_ip = 18;
                            continue _fun67660
                        }
                    case 6:
                        var1 = var2.__esModule;
                        var0 = var2;
                        if (var1) {
                            _fun67660_ip = 27;
                            continue _fun67660
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
            var5 = var9.defineProperty;
            var4 = {};
            var3 = true;
            var4.value = var3;
            var3 = '__esModule';
            var3 = var5.bind(var9)(var2, var3, var4);
            var0 = var0.Object;
            var0 = var0.assign;
            if (var0) {
                _fun67659_ip = 71;
                continue _fun67659
            }
        case 64:
            var0 = function(arg0) { // Environment: var1
                _fun67661: for (var _fun67661_ip = 0;;) switch (_fun67661_ip) {
                    case 0:
                        var0 = arg0;
                        var5 = undefined;
                        var1 = arguments.length;
                        var3 = 1;
                        var1 = var3 < var1;
                        var2 = global;
                        var4 = undefined;
                        if (!var1) {
                            _fun67661_ip = 115;
                            continue _fun67661
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
                                    _fun67661_ip = 43;
                                    continue _fun67661
                                }
                                case 92: var13 = var11[var12];
                                var0[var12] = var13;
                                var1 = var12;
                                _fun67661_ip = 43;
                                continue _fun67661;
                            }
                    case 105:
                        var3 = var3 + 1;
                        var1 = arguments.length;
                        if (var3 < var1) {
                            _fun67661_ip = 22;
                            continue _fun67661
                        }
                    case 115:
                        return var0;
                }
            };
        case 71:
            var _closure1_slot0 = var0;
            var0 = 0;
            var3 = var8[var0];
            var0 = undefined;
            var3 = var7.bind(var0)(var3);
            var3 = var6.bind(var0)(var3);
            var _closure1_slot1 = var3;
            var3 = 1;
            var3 = var8[var3];
            var3 = var7.bind(var0)(var3);
            var3 = var6.bind(var0)(var3);
            var _closure1_slot2 = var3;
            var3 = 2;
            var3 = var8[var3];
            var3 = var7.bind(var0)(var3);
            var5 = var6.bind(var0)(var3);
            var3 = 3;
            var3 = var8[var3];
            var4 = var7.bind(var0)(var3);
            var3 = var6.bind(var0)(var4);
            var _closure1_slot3 = var3;
            var3 = 4;
            var3 = var8[var3];
            var3 = var7.bind(var0)(var3);
            var3 = var6.bind(var0)(var3);
            var _closure1_slot4 = var3;
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
            var3.bgColor = var6;
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
            var3.fgColor = var6;
            var6 = var5.default;
            var6 = var6.string;
            var3.level = var6;
            var6 = var5.default;
            var6 = var6.number;
            var3.size = var6;
            var5 = var5.default;
            var5 = var5.string;
            var5 = var5.isRequired;
            var3.value = var5;
            var4 = var4.forwardRef;
            var1 = function(arg0, arg1) { // Environment: var1
                _fun67662: for (var _fun67662_ip = 0;;) switch (_fun67662_ip) {
                    case 0:
                        var15 = arg0;
                        var10 = var15.bgColor;
                        var9 = var15.fgColor;
                        var1 = var15.level;
                        var4 = var15.size;
                        var2 = var15.value;
                        var14 = ['bgColor', 'fgColor', 'level', 'size', 'value'];
                        var7 = {};
                        var12 = var15;
                        var3 = global;
                        var0 = 0;
                        for (var5 in var12)
                            case 60: {
                                case 69: var17 = var5;
                                var16 = var14.indexOf;
                                var16 = var16.bind(var14)(var17);
                                if (var16 >= var0) {
                                    _fun67662_ip = 60;
                                    continue _fun67662
                                }
                                case 87: var16 = var3.Object;
                                var16 = var16.prototype;
                                var18 = var16.hasOwnProperty;
                                var16 = var18.call;
                                var16 = var16.bind(var18)(var15, var17);
                                if (!var16) {
                                    _fun67662_ip = 60;
                                    continue _fun67662
                                }
                                case 118: var16 = var15[var17];
                                var7[var17] = var16;
                                _fun67662_ip = 60;
                                continue _fun67662;
                            }
                    case 128:
                        var0 = _closure1_slot1;
                        var6 = var0.default;
                        var0 = _closure1_slot2;
                        var0 = var0.default;
                        var20 = var0[var1];
                        var0 = var6.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var6
                            }
                        });
                        var21 = -1;
                        var22 = var1;
                        var0 = new var22[var6](var21, var20, var19);
                        var0 = var0 instanceof Object ? var0 : var1;
                        var1 = var0.addData;
                        var1 = var1.bind(var0)(var2);
                        var1 = var0.make;
                        var1 = var1.bind(var0)();
                        var0 = var0.modules;
                        var1 = _closure1_slot3;
                        var3 = var1.default;
                        var2 = var3.createElement;
                        var1 = _closure1_slot4;
                        var1 = var1.default;
                        var6 = _closure1_slot0;
                        var5 = {};
                        var5.bgColor = var10;
                        var11 = var0.map;
                        var10 = function(arg0, arg1) { // Environment: var8
                            var2 = arg0;
                            var1 = arg1;
                            var _closure3_slot0 = var1;
                            var1 = var2.map;
                            var0 = function(arg0, arg1) { // Environment: var0
                                _fun67664: for (var _fun67664_ip = 0;;) switch (_fun67664_ip) {
                                    case 0:
                                        var0 = '';
                                        var1 = arg0;
                                        if (var1) {
                                            _fun67664_ip = 54;
                                            continue _fun67664
                                        }
                                    case 10:
                                        var2 = 'M ';
                                        var1 = arg1;
                                        var3 = var2 + var1;
                                        var2 = _closure3_slot0;
                                        var1 = ' ';
                                        var1 = var3 + var1;
                                        var2 = var1 + var2;
                                        var1 = ' l 1 0 0 1 -1 0 Z';
                                        var0 = var2 + var1;
                                    case 54:
                                        return var0;
                                }
                            };
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.join;
                            var0 = ' ';
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var12 = var11.bind(var0)(var10);
                        var11 = var12.join;
                        var10 = ' ';
                        var11 = var11.bind(var12)(var10);
                        var5.bgD = var11;
                        var5.fgColor = var9;
                        var9 = var0.map;
                        var8 = function(arg0, arg1) { // Environment: var8
                            var2 = arg0;
                            var1 = arg1;
                            var _closure3_slot0 = var1;
                            var1 = var2.map;
                            var0 = function(arg0, arg1) { // Environment: var0
                                _fun67666: for (var _fun67666_ip = 0;;) switch (_fun67666_ip) {
                                    case 0:
                                        var0 = '';
                                        var1 = arg0;
                                        if (!var1) {
                                            _fun67666_ip = 54;
                                            continue _fun67666
                                        }
                                    case 10:
                                        var2 = 'M ';
                                        var1 = arg1;
                                        var3 = var2 + var1;
                                        var2 = _closure3_slot0;
                                        var1 = ' ';
                                        var1 = var3 + var1;
                                        var2 = var1 + var2;
                                        var1 = ' l 1 0 0 1 -1 0 Z';
                                        var0 = var2 + var1;
                                    case 54:
                                        return var0;
                                }
                            };
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.join;
                            var0 = ' ';
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var9 = var9.bind(var0)(var8);
                        var8 = var9.join;
                        var8 = var8.bind(var9)(var10);
                        var5.fgD = var8;
                        var8 = arg1;
                        var5.ref = var8;
                        var5.size = var4;
                        var0 = var0.length;
                        var5.viewBoxSize = var0;
                        var4 = undefined;
                        var0 = {};
                        var0 = var6.bind(var4)(var0, var7, var5);
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var1 = var4.bind(var0)(var1);
            var4 = 'QRCode';
            var1.displayName = var4;
            var1.propTypes = var3;
            var3 = {
                'bgColor': '#FFFFFF',
                'fgColor': '#000000',
                'level': 'L',
                'size': 256
            };
            var1.defaultProps = var3;
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [8391, 8395, 5144, 31, 8400]);