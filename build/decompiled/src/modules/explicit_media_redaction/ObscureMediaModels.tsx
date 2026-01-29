// modules/explicit_media_redaction/ObscureMediaModels.tsx
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
    var4 = {};
    var1 = 'spoiler';
    var4.SPOILER = var1;
    var1 = 'explicit_content';
    var4.EXPLICIT_CONTENT = var1;
    var1 = 'potential_explicit_content';
    var4.POTENTIAL_EXPLICIT_CONTENT = var1;
    var1 = 'gore_content';
    var4.GORE_CONTENT = var1;
    var1 = 'self_harm_content';
    var4.SELF_HARM_CONTENT = var1;
    var5 = var0.Set;
    var3 = var4.EXPLICIT_CONTENT;
    var1 = new Array(4);
    var1[0] = var3;
    var3 = var4.GORE_CONTENT;
    var1[1] = var3;
    var3 = var4.SELF_HARM_CONTENT;
    var1[2] = var3;
    var3 = var4.POTENTIAL_EXPLICIT_CONTENT;
    var1[3] = var3;
    var3 = var5.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var5
        }
    });
    var11 = var3;
    var10 = var1;
    var1 = new var11[var5](var10, var9);
    var3 = var1 instanceof Object ? var1 : var3;
    var5 = var0.Set;
    var1 = var4.EXPLICIT_CONTENT;
    var0 = new Array(3);
    var0[0] = var1;
    var1 = var4.GORE_CONTENT;
    var0[1] = var1;
    var1 = var4.SELF_HARM_CONTENT;
    var0[2] = var1;
    var1 = var5.prototype;
    var1 = Object.create(var1, {
        constructor: {
            value: var5
        }
    });
    var11 = var1;
    var10 = var0;
    var0 = new var11[var5](var10, var9);
    var1 = var0 instanceof Object ? var0 : var1;
    var5 = dependencyMap;
    var0 = 0;
    var6 = var5[var0];
    var5 = require;
    var0 = undefined;
    var7 = var5.bind(var0)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/explicit_media_redaction/ObscureMediaModels.tsx';
    var5 = var6.bind(var7)(var5);
    var2.ObscureReason = var4;
    var2.SENSITIVE_CONTENT_OBSCURABLE_REASONS = var3;
    var2.AGE_VERIFICATION_OBSCURABLE_REASONS = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);