// modules/media_engine/SecureFramesExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var12 = true;
    var1.value = var12;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var3 = 0;
    var1 = var7[var3];
    var0 = undefined;
    var8 = var6.bind(var0)(var1);
    var5 = var8.createExperiment;
    var4 = {
        'kind': 'user',
        'id': '2023-08_secure_frames_encryption',
        'label': 'Allowing testing DAVE protocol for voice/video'
    };
    var1 = 1;
    var11 = false;
    var9 = {
        'protocolVersionFloor': 1,
        'canSupportDaveProtocol': false
    };
    var4.defaultConfig = var9;
    var10 = {
        'id': 11,
        'label': 'Can support DAVE protocol version 1 and above'
    };
    var9 = {
        'protocolVersionFloor': 1,
        'canSupportDaveProtocol': true
    };
    var10.config = var9;
    var9 = new Array(1);
    var9[0] = var10;
    var4.treatments = var9;
    var4 = var5.bind(var8)(var4);
    var3 = var7[var3];
    var9 = var6.bind(var0)(var3);
    var8 = var9.createExperiment;
    var3 = {
        'kind': 'user',
        'id': '2025-06_dave_for_browser',
        'label': 'Allowing testing DAVE protocol for browser'
    };
    var5 = {
        'loadWasmModule': false,
        'useWasmModule': false,
        'preload': false
    };
    var3.defaultConfig = var5;
    var5 = {
        'id': 1,
        'label': 'Load only'
    };
    var10 = {
        'loadWasmModule': true,
        'useWasmModule': false,
        'preload': false
    };
    var5.config = var10;
    var10 = new Array(3);
    var10[0] = var5;
    var13 = {
        'id': 2,
        'label': 'Enable'
    };
    var5 = 2;
    var14 = {
        'loadWasmModule': true,
        'useWasmModule': true,
        'preload': false
    };
    var13.config = var14;
    var10[1] = var13;
    var13 = {
        'id': 3,
        'label': 'Preload'
    };
    var14 = {
        'loadWasmModule': true,
        'useWasmModule': true,
        'preload': true
    };
    var13.config = var14;
    var10[2] = var13;
    var3.treatments = var10;
    var3 = var8.bind(var9)(var3);
    var1 = var7[var1];
    var9 = var6.bind(var0)(var1);
    var8 = var9.createApexExperiment;
    var1 = {
        'kind': 'user',
        'name': '2025-11-dave-opt-in'
    };
    var10 = {};
    var10.allowOptIn = var11;
    var1.defaultConfig = var10;
    var10 = {};
    var11 = {};
    var11.allowOptIn = var12;
    var10[1] = var11;
    var1.variations = var10;
    var1 = var8.bind(var9)(var1);
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/media_engine/SecureFramesExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var2.SecureFramesUserExperiment = var4;
    var2.DaveForBrowserExperiment = var3;
    var2.DaveOptInExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3117, 1301, 2]);