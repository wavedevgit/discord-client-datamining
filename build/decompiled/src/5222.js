// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
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
    var3 = require;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var4 = var3.useCallback;
    var _closure1_slot0 = var4;
    var3 = var3.useRef;
    var _closure1_slot1 = var3;
    var1 = function arg0, arg1, arg2() {
        _fun46762: for (var _fun46762_ip = 0;;) switch (_fun46762_ip) {
            case 0:
                var5 = arg0;
                var6 = arg1;
                var3 = arg2;
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var3;
                var1 = null;
                var7 = var1 == var3;
                var4 = undefined;
                var2 = undefined;
                if (var7) {
                    _fun46762_ip = 38;
                    continue _fun46762
                }
            case 32:
                var2 = var3.startDelayInMs;
            case 38:
                var3 = var1 != var2;
                var1 = 1000;
                if (!var3) {
                    _fun46762_ip = 54;
                    continue _fun46762
                }
            case 51:
                var1 = var2;
            case 54:
                var _closure2_slot2 = var1;
                var3 = _closure1_slot1;
                var2 = {
                    'maxBlankArea': 0,
                    'cumulativeBlankArea': 0
                };
                var2 = var3.bind(var4)(var2);
                var2 = var2.current;
                var _closure2_slot3 = var2;
                var7 = {
                    'inProgress': false,
                    'complete': false
                };
                var7 = var3.bind(var4)(var7);
                var7 = var7.current;
                var _closure2_slot4 = var7;
                var3 = var3.bind(var4)(var6);
                var _closure2_slot5 = var3;
                var3.current = var6;
                var3 = _closure1_slot0;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function(arg0) { // Environment: var0
                    _fun46763: for (var _fun46763_ip = 0;;) switch (_fun46763_ip) {
                        case 0:
                            var8 = arg0;
                            var0 = _closure2_slot4;
                            var0 = var0.complete;
                            if (var0) {
                                _fun46763_ip = 89;
                                continue _fun46763
                            }
                        case 19:
                            var1 = _closure2_slot2;
                            var0 = 0;
                            if (!(var1 > var0)) {
                                _fun46763_ip = 89;
                                continue _fun46763
                            }
                        case 29:
                            var0 = _closure2_slot4;
                            var0 = var0.inProgress;
                            if (var0) {
                                _fun46763_ip = 387;
                                continue _fun46763
                            }
                        case 45:
                            var1 = _closure2_slot4;
                            var0 = true;
                            var1.inProgress = var0;
                            var0 = global;
                            var3 = var0.setTimeout;
                            var2 = _closure2_slot2;
                            var1 = undefined;
                            var0 = function() { // Environment: var0
                                var1 = _closure2_slot4;
                                var0 = true;
                                var1.complete = var0;
                                var0 = undefined;
                                return var0;
                            };
                            var0 = var3.bind(var1)(var0, var2);
                            _fun46763_ip = 387;
                            continue _fun46763;
                        case 89:
                            var0 = _closure2_slot0;
                            var0 = var0.current;
                            var4 = null;
                            var1 = var4 == var0;
                            var2 = undefined;
                            var10 = undefined;
                            if (var1) {
                                _fun46763_ip = 117;
                                continue _fun46763
                            }
                        case 111:
                            var10 = var0.recyclerlistview_unsafe;
                        case 117:
                            var3 = global;
                            var1 = var3.Boolean;
                            var0 = _closure2_slot0;
                            var5 = var0.current;
                            var7 = var4 == var5;
                            var0 = undefined;
                            if (var7) {
                                _fun46763_ip = 154;
                                continue _fun46763
                            }
                        case 143:
                            var5 = var5.props;
                            var0 = var5.horizontal;
                        case 154:
                            var5 = var1.bind(var2)(var0);
                            if (!var10) {
                                _fun46763_ip = 387;
                                continue _fun46763
                            }
                        case 165:
                            var1 = _closure2_slot3;
                            var0 = _closure2_slot5;
                            var0 = var0.current;
                            var9 = _closure2_slot1;
                            var6 = var10.getRenderedSize;
                            var7 = var6.bind(var10)();
                            if (var5) {
                                _fun46763_ip = 202;
                                continue _fun46763
                            }
                        case 195:
                            var6 = var7.height;
                            _fun46763_ip = 207;
                            continue _fun46763;
                        case 202:
                            var6 = var7.width;
                        case 207:
                            var7 = var10.getContentDimension;
                            var7 = var7.bind(var10)();
                            if (var5) {
                                _fun46763_ip = 227;
                                continue _fun46763
                            }
                        case 220:
                            var5 = var7.height;
                            _fun46763_ip = 232;
                            continue _fun46763;
                        case 227:
                            var5 = var7.width;
                        case 232:
                            if (!(var5 > var6)) {
                                _fun46763_ip = 387;
                                continue _fun46763
                            }
                        case 239:
                            var6 = var1.maxBlankArea;
                            var5 = var1.cumulativeBlankArea;
                            var13 = var3.Math;
                            var12 = var13.max;
                            var10 = var1.maxBlankArea;
                            var7 = var8.blankArea;
                            var11 = 0;
                            var7 = var12.bind(var13)(var10, var7, var11);
                            var1.maxBlankArea = var7;
                            var7 = var1.cumulativeBlankArea;
                            if (!(var4 != var9)) {
                                _fun46763_ip = 308;
                                continue _fun46763
                            }
                        case 299:
                            var9 = var9.sumNegativeValues;
                            if (var9) {
                                _fun46763_ip = 333;
                                continue _fun46763
                            }
                        case 308:
                            var10 = var3.Math;
                            var9 = var10.max;
                            var3 = var8.blankArea;
                            var3 = var9.bind(var10)(var3, var11);
                            _fun46763_ip = 339;
                            continue _fun46763;
                        case 333:
                            var3 = var8.blankArea;
                        case 339:
                            var3 = var7 + var3;
                            var1.cumulativeBlankArea = var3;
                            var3 = var1.cumulativeBlankArea;
                            var3 = var5 === var3;
                            if (!var3) {
                                _fun46763_ip = 372;
                                continue _fun46763
                            }
                        case 362:
                            var5 = var1.maxBlankArea;
                            var3 = var6 === var5;
                        case 372:
                            if (var3) {
                                _fun46763_ip = 379;
                                continue _fun46763
                            }
                        case 375:
                            var3 = var4 == var0;
                        case 379:
                            if (var3) {
                                _fun46763_ip = 387;
                                continue _fun46763
                            }
                        case 382:
                            var0 = var0.bind(var2)(var1);
                        case 387:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var0, var1);
                var0 = new Array(2);
                var0[0] = var2;
                var0[1] = var1;
                return var0;
        }
    };
    var2.useBlankAreaTracker = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31]);