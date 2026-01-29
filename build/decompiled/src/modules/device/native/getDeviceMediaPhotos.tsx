// modules/device/native/getDeviceMediaPhotos.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.NativeModules;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'DeviceMedia.tsx';
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/device/native/getDeviceMediaPhotos.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: getDeviceMediaPhotos, environment: var1
        _fun75516: for (var _fun75516_ip = 0;;) switch (_fun75516_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.batchSize;
                var6 = var0.endCursor;
                var9 = var0.lastAssetIndex;
                var10 = var0.lastNodeImageUri;
                var4 = var0.onFetched;
                var3 = var0.onError;
                var0 = undefined;
                if (!(var3 === var0)) {
                    _fun75516_ip = 54;
                    continue _fun75516
                }
            case 45:
                var3 = function(arg0) { // Original name: h, environment: var1
                    var4 = arg0;
                    var3 = _closure1_slot4;
                    var2 = var3.log;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var5 = var1.concat;
                    var1 = 'CameraRollUtils -- Failed to get photos with error ';
                    var1 = var5.bind(var1)(var4);
                    var1 = var2.bind(var3)(var1);
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.captureException;
                    var1 = {};
                    var5 = {};
                    var6 = 'DEVICE_MEDIA';
                    var5.source = var6;
                    var1.tags = var5;
                    var1 = var2.bind(var3)(var4, var1);
                    return var0;
                };
            case 54:
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 3;
                var2 = var8[var2];
                var5 = var5.bind(var0)(var2);
                var2 = var5.isIOS;
                var2 = var2.bind(var5)();
                if (var2) {
                    _fun75516_ip = 162;
                    continue _fun75516
                }
            case 90:
                var2 = _closure1_slot3;
                var8 = var2.CameraRollUtils;
                var5 = var8.getPhotos;
                var2 = {};
                var2.first = var7;
                var11 = 'All';
                var2.assetType = var11;
                var2.after = var10;
                var2.offset = var9;
                var5 = var5.bind(var8)(var2);
                var2 = var5.then;
                var5 = var2.bind(var5)(var4);
                var2 = var5.catch;
                var2 = var2.bind(var5)(var3);
                _fun75516_ip = 262;
                continue _fun75516;
            case 162:
                var8 = _closure1_slot1;
                var2 = _closure1_slot2;
                var5 = 4;
                var2 = var2[var5];
                var8 = var8.bind(var0)(var2);
                var2 = null;
                if (!(var2 != var8)) {
                    _fun75516_ip = 262;
                    continue _fun75516
                }
            case 188:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var5 = var2.bind(var0)(var1);
                var2 = var5.getPhotos;
                var1 = {
                    'first': null,
                    'groupTypes': 'Recents',
                    'assetType': 'All'
                };
                var1.first = var7;
                var1.after = var6;
                var2 = var2.bind(var5)(var1);
                var1 = var2.then;
                var2 = var1.bind(var2)(var4);
                var1 = var2.catch;
                var1 = var1.bind(var2)(var3);
            case 262:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 3, 1207, 478, 9537, 2]);