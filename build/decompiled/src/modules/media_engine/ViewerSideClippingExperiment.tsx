// modules/media_engine/ViewerSideClippingExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var7 = var4.bind(var0)(var1);
    var6 = var7.createExperiment;
    var1 = {
        'kind': 'user',
        'id': '2023-10_viewer_clipping',
        'label': 'Test viewer side clipping'
    };
    var3 = {
        'enableViewerClipping': false,
        'ignoreSenderPreference': false
    };
    var1.defaultConfig = var3;
    var9 = {
        'id': 1,
        'label': 'Viewer Clipping enabled'
    };
    var3 = 1;
    var8 = {
        'enableViewerClipping': true,
        'ignoreSenderPreference': false
    };
    var9.config = var8;
    var8 = new Array(2);
    var8[0] = var9;
    var9 = {
        'id': 2,
        'label': 'Viewer Clipping enabled; For developer testing'
    };
    var10 = {
        'enableViewerClipping': true,
        'ignoreSenderPreference': true
    };
    var9.config = var10;
    var8[1] = var9;
    var1.treatments = var8;
    var1 = var6.bind(var7)(var1);
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_engine/ViewerSideClippingExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3074, 2]);