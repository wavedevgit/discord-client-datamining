// modules/device/native/DeviceConstants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var1 = true;
    var3.value = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var2, var1, var3);
    var4 = var0.Object;
    var3 = var4.freeze;
    var1 = {
        'VIDEO': 'ALAssetTypeVideo',
        'PHOTO': 'ALAssetTypePhoto'
    };
    var3 = var3.bind(var4)(var1);
    var4 = var0.Object;
    var1 = var4.freeze;
    var0 = {
        'VIDEO': 'video',
        'IMAGE': 'image'
    };
    var1 = var1.bind(var4)(var0);
    var4 = dependencyMap;
    var0 = 0;
    var5 = var4[var0];
    var4 = require;
    var0 = undefined;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/device/native/DeviceConstants.tsx';
    var4 = var5.bind(var6)(var4);
    var2.ALAssetsType = var3;
    var2.DeviceMediaType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);