// ../discord_common/js/packages/transition-group/TransitionChildMapping.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/transition-group/TransitionChildMapping.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun81449: for (var _fun81449_ip = 0;;) switch (_fun81449_ip) {
            case 0:
                var5 = arg0;
                var0 = {};
                var _closure2_slot0 = var0;
                if (!var5) {
                    _fun81449_ip = 68;
                    continue _fun81449
                }
            case 14:
                var2 = _closure1_slot0;
                var4 = var2.Children;
                var3 = var4.map;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    return var0;
                };
                var3 = var3.bind(var4)(var5, var2);
                var2 = null;
                if (!(var2 != var3)) {
                    _fun81449_ip = 68;
                    continue _fun81449
                }
            case 51:
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun81451: for (var _fun81451_ip = 0;;) switch (_fun81451_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = var2.key;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun81451_ip = 25;
                                continue _fun81451
                            }
                        case 14:
                            var0 = _closure2_slot0;
                            var0[var1] = var2;
                        case 25:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
            case 68:
                return var0;
        }
    };
    var2.getChildMapping = var3;
    var1 = function() {
        _fun81452: for (var _fun81452_ip = 0;;) switch (_fun81452_ip) {
            case 0:
                var0 = arguments[0];
                var1 = arguments[1];
                var5 = undefined;
                if (!(var0 === var5)) {
                    _fun81452_ip = 16;
                    continue _fun81452
                }
            case 14:
                var0 = {};
            case 16:
                var _closure2_slot0 = var0;
                if (!(var1 === var5)) {
                    _fun81452_ip = 26;
                    continue _fun81452
                }
            case 24:
                var1 = {};
            case 26:
                var _closure2_slot1 = var1;
                var4 = function arg0() {
                    _fun81453: for (var _fun81453_ip = 0;;) switch (_fun81453_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure2_slot1;
                            var0 = var3.hasOwnProperty;
                            var0 = var0.bind(var3)(var2);
                            if (var0) {
                                _fun81453_ip = 34;
                                continue _fun81453
                            }
                        case 24:
                            var0 = _closure2_slot0;
                            var0 = var0[var2];
                            _fun81453_ip = 42;
                            continue _fun81453;
                        case 34:
                            var1 = _closure2_slot1;
                            var0 = var1[var2];
                        case 42:
                            return var0;
                    }
                };
                var11 = {};
                var2 = new Array(0);
                var9 = var0;
                var3 = 0;
                var0 = var2;
                var2 = var0;
                for (var6 in var9)
                    case 62: {
                        var13 = var0;
                        var2 = var13;
                        case 77: var12 = var6;
                        var14 = var1.hasOwnProperty;
                        var14 = var14.bind(var1)(var12);
                        if (var14) {
                            _fun81452_ip = 109;
                            continue _fun81452
                        }
                        case 94: var14 = var13.push;
                        var14 = var14.bind(var13)(var12);
                        var0 = var13;
                        _fun81452_ip = 62;
                        continue _fun81452;
                        case 109: var14 = var13.length;
                        var0 = var13;
                        if (!(var14 > var3)) {
                            _fun81452_ip = 62;
                            continue _fun81452
                        }
                        case 121: var11[var12] = var13;
                        var0 = new Array(0);
                        _fun81452_ip = 62;
                        continue _fun81452;
                    }
            case 131:
                var0 = {};
                var9 = var1;
                var1 = undefined;
                for (var6 in var9)
                    case 146: {
                        case 155: var13 = var6;
                        var12 = var11.hasOwnProperty;
                        var12 = var12.bind(var11)(var13);
                        if (!var12) {
                            _fun81452_ip = 236;
                            continue _fun81452
                        }
                        case 172: var12 = var11[var13];
                        var12 = var12.length;
                        var12 = var3 < var12;
                        var14 = 0;
                        var1 = 0;
                        if (!var12) {
                            _fun81452_ip = 236;
                            continue _fun81452
                        }
                        case 192: var12 = var11[var13];
                        var12 = var12[var14];
                        var15 = var11[var13];
                        var15 = var15[var14];
                        var12 = var4.bind(var5)(var12);
                        var0[var15] = var12;
                        var14 = var14 + 1;
                        var12 = var11[var13];
                        var12 = var12.length;
                        var1 = var14;
                        if (var1 < var12) {
                            _fun81452_ip = 192;
                            continue _fun81452
                        }
                        case 236: var12 = var4.bind(var5)(var13);
                        var0[var13] = var12;
                        _fun81452_ip = 146;
                        continue _fun81452;
                    }
            case 247:
                var1 = var2.length;
                var1 = var3 < var1;
                var3 = 0;
                if (!var1) {
                    _fun81452_ip = 290;
                    continue _fun81452
                }
            case 261:
                var6 = var2[var3];
                var1 = var2[var3];
                var1 = var4.bind(var5)(var1);
                var0[var6] = var1;
                var3 = var3 + 1;
                var1 = var2.length;
                if (var3 < var1) {
                    _fun81452_ip = 261;
                    continue _fun81452
                }
            case 290:
                return var0;
        }
    };
    var2.mergeChildMappings = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 2]);