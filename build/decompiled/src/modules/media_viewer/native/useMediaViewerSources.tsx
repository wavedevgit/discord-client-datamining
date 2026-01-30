// modules/media_viewer/native/useMediaViewerSources.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
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
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var4 = var3.createZustandStore;
    var3 = function() { // Environment: var1
        var0 = {};
        var1 = new Array(0);
        var0.sources = var1;
        var1 = global;
        var1 = var1.Set;
        var2 = var1.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var1
            }
        });
        var3 = var2;
        var1 = new var3[var1](var2);
        var1 = var1 instanceof Object ? var1 : var2;
        var0.spoilerIndexes = var1;
        return var0;
    };
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/useMediaViewerSources.tsx';
    var4 = var5.bind(var6)(var4);
    var2.MediaViewerSourcesStore = var3;
    var3 = function(arg0) { // Original name: setMediaViewerSources, environment: var1
        _fun70226: for (var _fun70226_ip = 0;;) switch (_fun70226_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.sources;
                var2 = var0.initialIndex;
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun70226_ip = 25;
                    continue _fun70226
                }
            case 23:
                var2 = null;
            case 25:
                var _closure2_slot0 = var2;
                var _closure2_slot2 = var0;
                var5 = new Array(0);
                var _closure2_slot1 = var5;
                var2 = global;
                var2 = var2.Set;
                var4 = var2.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var2
                    }
                });
                var7 = var4;
                var2 = new var7[var2](var6);
                var4 = var2 instanceof Object ? var2 : var4;
                _closure2_slot2 = var4;
                var2 = var3.forEach;
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun70227: for (var _fun70227_ip = 0;;) switch (_fun70227_ip) {
                        case 0:
                            var3 = arg0;
                            var4 = arg1;
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 1;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.flattenSource;
                            var5 = var1.bind(var2)(var3);
                            var1 = null;
                            var1 = var1 != var5;
                            if (!var1) {
                                _fun70227_ip = 69;
                                continue _fun70227
                            }
                        case 51:
                            var2 = var5.spoiler;
                            if (var2) {
                                _fun70227_ip = 66;
                                continue _fun70227
                            }
                        case 60:
                            var2 = var5.obscure;
                        case 66:
                            var1 = var2;
                        case 69:
                            if (!var1) {
                                _fun70227_ip = 83;
                                continue _fun70227
                            }
                        case 72:
                            var2 = _closure2_slot0;
                            var1 = var2 !== var4;
                        case 83:
                            if (!var1) {
                                _fun70227_ip = 103;
                                continue _fun70227
                            }
                        case 86:
                            var2 = _closure2_slot2;
                            var1 = var2.add;
                            var1 = var1.bind(var2)(var4);
                        case 103:
                            var2 = _closure2_slot1;
                            var1 = var2.push;
                            var1 = var1.bind(var2)(var3);
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var3 = _closure1_slot2;
                var2 = var3.setState;
                var1 = {};
                var1.sources = var5;
                var1.spoilerIndexes = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.setMediaViewerSources = var3;
    var3 = function(arg0) { // Original name: removeSpoiler, environment: var1
        _fun70228: for (var _fun70228_ip = 0;;) switch (_fun70228_ip) {
            case 0:
                var2 = arg0;
                var4 = _closure1_slot2;
                var3 = var4.getField;
                var1 = 'spoilerIndexes';
                var4 = var3.bind(var4)(var1);
                var1 = var4.has;
                var1 = var1.bind(var4)(var2);
                if (!var1) {
                    _fun70228_ip = 101;
                    continue _fun70228
                }
            case 38:
                var1 = global;
                var1 = var1.Set;
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var6 = var3;
                var5 = var4;
                var1 = new var6[var1](var5, var4);
                var3 = var1 instanceof Object ? var1 : var3;
                var1 = var3.delete;
                var1 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = var2.setState;
                var0 = {};
                var0.spoilerIndexes = var3;
                var0 = var1.bind(var2)(var0);
            case 101:
                var0 = undefined;
                return var0;
        }
    };
    var2.removeSpoiler = var3;
    var1 = function(arg0) { // Original name: toggleSpoiler, environment: var1
        _fun70229: for (var _fun70229_ip = 0;;) switch (_fun70229_ip) {
            case 0:
                var2 = arg0;
                var4 = _closure1_slot2;
                var3 = var4.getField;
                var1 = 'spoilerIndexes';
                var5 = var3.bind(var4)(var1);
                var1 = global;
                var1 = var1.Set;
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var6 = var3;
                var1 = new var6[var1](var5, var4);
                var3 = var1 instanceof Object ? var1 : var3;
                var1 = var3.has;
                var1 = var1.bind(var3)(var2);
                if (var1) {
                    _fun70229_ip = 78;
                    continue _fun70229
                }
            case 66:
                var1 = var3.add;
                var1 = var1.bind(var3)(var2);
                _fun70229_ip = 88;
                continue _fun70229;
            case 78:
                var1 = var3.delete;
                var1 = var1.bind(var3)(var2);
            case 88:
                var2 = _closure1_slot2;
                var1 = var2.setState;
                var0 = {};
                var0.spoilerIndexes = var3;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
        }
    };
    var2.toggleSpoiler = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3875, 8803, 2]);