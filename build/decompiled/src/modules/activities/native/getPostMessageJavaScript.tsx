// modules/activities/native/getPostMessageJavaScript.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = dependencyMap;
    var0 = 0;
    var3 = var1[var0];
    var1 = require;
    var0 = undefined;
    var4 = var1.bind(var0)(var3);
    var3 = var4.fileFinishedImporting;
    var1 = 'modules/activities/native/getPostMessageJavaScript.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function(arg0) { // Original name: getPostMessageJavaScript, environment: var1
        var0 = global;
        var3 = var0.JSON;
        var2 = var3.stringify;
        var1 = arg0;
        var3 = var2.bind(var3)(var1);
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = "\n    (function() {\n      const iFrame = document.getElementById('activityFrame');\n      iFrame.contentWindow.postMessage(";
        var0 = ", '*');\n    })()\n  ";
        var0 = var2.bind(var1)(var3, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);