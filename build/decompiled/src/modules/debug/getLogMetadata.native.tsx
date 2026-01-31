// modules/debug/getLogMetadata.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportAll;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 2;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/debug/getLogMetadata.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var6 = _closure1_slot1;
        var4 = _closure1_slot2;
        var5 = 0;
        var0 = var4[var5];
        var3 = undefined;
        var2 = var6.bind(var3)(var0);
        var0 = var2.getConstants;
        var0 = var0.bind(var2)();
        var11 = var0.Identifier;
        var10 = var0.Version;
        var9 = var0.Manifest;
        var8 = var0.ReleaseChannel;
        var7 = var0.Build;
        var2 = var0.DeviceVendorID;
        var0 = {};
        var12 = global;
        var12 = var12.Date;
        var13 = var12.prototype;
        var13 = Object.create(var13, {
            constructor: {
                value: var12
            }
        });
        var15 = var13;
        var12 = new var15[var12](var14);
        var13 = var12 instanceof Object ? var12 : var13;
        var12 = var13.toISOString;
        var12 = var12.bind(var13)();
        var0.logsUploaded = var12;
        var0.Identifier = var11;
        var0.Version = var10;
        var0.Manifest = var9;
        var0.ReleaseChannel = var8;
        var0.Build = var7;
        var5 = var4[var5];
        var6 = var6.bind(var3)(var5);
        var5 = var6.getBuildNumberLabel;
        var5 = var5.bind(var6)();
        var0.JSBuildNumber = var5;
        var0.DeviceVendorID = var2;
        var2 = _closure1_slot0;
        var1 = 1;
        var5 = var4[var1];
        var6 = var2.bind(var3)(var5);
        var5 = var6.getDeviceInfo;
        var5 = var5.bind(var6)();
        var0.DeviceInfo = var5;
        var1 = var4[var1];
        var2 = var2.bind(var3)(var1);
        var1 = var2.getSystemVersion;
        var1 = var1.bind(var2)();
        var0.systemVersion = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1594, 1309, 2]);