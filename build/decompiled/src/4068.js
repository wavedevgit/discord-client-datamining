// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun37508: for (var _fun37508_ip = 0;;) switch (_fun37508_ip) {
        case 0:
            var10 = require;
            var2 = exports;
            var9 = dependencyMap;
            var0 = global;
            var5 = var0.Object;
            var4 = var5.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var5)(var2, var0, var3);
            var0 = 0;
            var3 = var9[var0];
            var0 = undefined;
            var3 = var10.bind(var0)(var3);
            var3 = var3.NativeModules;
            var _closure1_slot0 = var3;
            var8 = 1;
            var3 = {
                'mediaType': 'photo',
                'videoQuality': 'high',
                'quality': 1,
                'maxWidth': 0,
                'maxHeight': 0,
                'includeBase64': false,
                'cameraType': 'back',
                'selectionLimit': 1,
                'saveToPhotos': false,
                'durationLimit': 0,
                'includeExtra': false
            };
            var _closure1_slot1 = var3;
            var3 = var9[var8];
            var6 = var10.bind(var0)(var3);
            for (var3 in var6)
                case 104: {
                    case 113: var12 = var3;
                    var11 = var9[var8];
                    var11 = var10.bind(var0)(var11);
                    var11 = var11[var12];
                    var2[var12] = var11;
                    _fun37508_ip = 104;
                    continue _fun37508;
                }
        case 135:
            var3 = function arg0, arg1() {
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var2 = _closure1_slot0;
                    var3 = var2.ImagePickerManager;
                    var2 = var3.launchCamera;
                    var4 = global;
                    var7 = var4.Object;
                    var6 = var7.assign;
                    var5 = _closure1_slot1;
                    var4 = _closure2_slot0;
                    var1 = {};
                    var1 = var6.bind(var7)(var1, var5, var4);
                    var0 = function(arg0) { // Environment: var0
                        _fun37511: for (var _fun37511_ip = 0;;) switch (_fun37511_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = _closure2_slot1;
                                if (!var1) {
                                    _fun37511_ip = 24;
                                    continue _fun37511
                                }
                            case 13:
                                var1 = _closure2_slot1;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var2);
                            case 24:
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var1 = var1.bind(var0)(var2);
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            };
            var2.launchCamera = var3;
            var1 = function arg0, arg1() {
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var2 = _closure1_slot0;
                    var3 = var2.ImagePickerManager;
                    var2 = var3.launchImageLibrary;
                    var4 = global;
                    var7 = var4.Object;
                    var6 = var7.assign;
                    var5 = _closure1_slot1;
                    var4 = _closure2_slot0;
                    var1 = {};
                    var1 = var6.bind(var7)(var1, var5, var4);
                    var0 = function(arg0) { // Environment: var0
                        _fun37514: for (var _fun37514_ip = 0;;) switch (_fun37514_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = _closure2_slot1;
                                if (!var1) {
                                    _fun37514_ip = 24;
                                    continue _fun37514
                                }
                            case 13:
                                var1 = _closure2_slot1;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var2);
                            case 24:
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var1 = var1.bind(var0)(var2);
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            };
            var2.launchImageLibrary = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 4069]);