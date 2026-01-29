// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
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
    var3 = var3.View;
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var6);
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var1 = function(arg0) { // Original name: Basic, environment: var1
        _fun74907: for (var _fun74907_ip = 0;;) switch (_fun74907_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.activeDotStyle;
                var _closure2_slot0 = var0;
                var2 = var1.dotStyle;
                var _closure2_slot1 = var2;
                var0 = var1.progress;
                var _closure2_slot2 = var0;
                var0 = var1.horizontal;
                var3 = undefined;
                var8 = var3 === var0;
                if (var8) {
                    _fun74907_ip = 53;
                    continue _fun74907
                }
            case 50:
                var8 = var0;
            case 53:
                var _closure2_slot3 = var8;
                var6 = var1.data;
                var _closure2_slot4 = var6;
                var0 = var1.size;
                var _closure2_slot5 = var0;
                var7 = var1.containerStyle;
                var5 = var1.renderItem;
                var _closure2_slot6 = var5;
                var5 = var1.onPress;
                var _closure2_slot7 = var5;
                var1 = var1.carouselName;
                var _closure2_slot8 = var1;
                var1 = 'string';
                var0 = typeof var0;
                if (!(var1 !== var0)) {
                    _fun74907_ip = 276;
                    continue _fun74907
                }
            case 124:
                var0 = null;
                var9 = var0 == var2;
                var5 = undefined;
                if (var9) {
                    _fun74907_ip = 140;
                    continue _fun74907
                }
            case 135:
                var5 = var2.width;
            case 140:
                var5 = typeof var5;
                if (!(var1 !== var5)) {
                    _fun74907_ip = 276;
                    continue _fun74907
                }
            case 150:
                var5 = var0 == var2;
                var0 = undefined;
                if (var5) {
                    _fun74907_ip = 164;
                    continue _fun74907
                }
            case 159:
                var0 = var2.height;
            case 164:
                var0 = typeof var0;
                if (!(var1 !== var0)) {
                    _fun74907_ip = 276;
                    continue _fun74907
                }
            case 171:
                var2 = _closure1_slot3;
                var1 = _closure1_slot2;
                var0 = {};
                var5 = new Array(3);
                var9 = {
                    'justifyContent': 'space-between',
                    'alignSelf': 'center'
                };
                var5[0] = var9;
                var9 = {};
                if (var8) {
                    _fun74907_ip = 224;
                    continue _fun74907
                }
            case 211:
                var8 = 'column';
                var9.flexDirection = var8;
                var8 = var9;
                _fun74907_ip = 235;
                continue _fun74907;
            case 224:
                var10 = 'row';
                var9.flexDirection = var10;
                var8 = var9;
            case 235:
                var5[1] = var8;
                var5[2] = var7;
                var0.style = var5;
                var5 = var6.map;
                var4 = function(arg0, arg1) { // Environment: var4
                    _fun74908: for (var _fun74908_ip = 0;;) switch (_fun74908_ip) {
                        case 0:
                            var4 = arg1;
                            var _closure3_slot0 = var4;
                            var3 = _closure1_slot3;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var0 = 3;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.PaginationItem;
                            var0 = {};
                            var0.index = var4;
                            var7 = _closure2_slot5;
                            var0.size = var7;
                            var7 = _closure2_slot4;
                            var7 = var7.length;
                            var0.count = var7;
                            var7 = _closure2_slot1;
                            var0.dotStyle = var7;
                            var7 = _closure2_slot2;
                            var0.animValue = var7;
                            var7 = _closure2_slot3;
                            var7 = !var7;
                            var0.horizontal = var7;
                            var7 = _closure2_slot0;
                            var0.activeDotStyle = var7;
                            var5 = function() { // Original name: onPress, environment: var5
                                _fun74909: for (var _fun74909_ip = 0;;) switch (_fun74909_ip) {
                                    case 0:
                                        var2 = _closure2_slot7;
                                        var0 = null;
                                        var2 = var0 == var2;
                                        var3 = undefined;
                                        var0 = undefined;
                                        if (var2) {
                                            _fun74909_ip = 36;
                                            continue _fun74909
                                        }
                                    case 20:
                                        var2 = _closure2_slot7;
                                        var1 = _closure3_slot0;
                                        var0 = var2.bind(var3)(var1);
                                    case 36:
                                        return var0;
                                }
                            };
                            var0.onPress = var5;
                            var5 = 1;
                            var17 = var4 + var5;
                            var5 = _closure2_slot4;
                            var15 = var5.length;
                            var13 = _closure2_slot8;
                            var5 = global;
                            var5 = var5.HermesInternal;
                            var9 = var5.concat;
                            var18 = 'Slide ';
                            var16 = ' of ';
                            var14 = ' - ';
                            var5 = var18[var9](var17, var16, var15, var14, var13, var12);
                            var0.accessibilityLabel = var5;
                            var7 = _closure2_slot6;
                            var5 = null;
                            var7 = var5 == var7;
                            var5 = undefined;
                            if (var7) {
                                _fun74908_ip = 212;
                                continue _fun74908
                            }
                        case 199:
                            var7 = _closure2_slot6;
                            var6 = arg0;
                            var5 = var7.bind(var2)(var6, var4);
                        case 212:
                            var0.children = var5;
                            var0 = var3.bind(var2)(var1, var0, var4);
                            return var0;
                    }
                };
                var4 = var5.bind(var6)(var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 276:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var12 = 'size/width/height must be a number';
                var13 = var1;
                var0 = new var13[var2](var12, var11);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.Basic = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 31, 33, 9421]);