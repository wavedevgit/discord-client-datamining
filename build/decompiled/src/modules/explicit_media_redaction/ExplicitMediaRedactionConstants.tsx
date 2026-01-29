// modules/explicit_media_redaction/ExplicitMediaRedactionConstants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var1 = true;
    var3.value = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var2, var1, var3);
    var6 = var0.Set;
    var3 = 0;
    var1 = var5[var3];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var1 = var1.MessageEmbedTypes;
    var7 = var1.IMAGE;
    var1 = new Array(3);
    var1[0] = var7;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var7 = var7.MessageEmbedTypes;
    var7 = var7.VIDEO;
    var1[1] = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageEmbedTypes;
    var3 = var3.GIFV;
    var1[2] = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var11 = var3;
    var10 = var1;
    var1 = new var11[var6](var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/explicit_media_redaction/ExplicitMediaRedactionConstants.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = 'SensitiveMediaFilterSetting';
    var2.USER_SETTING_ACTION_SHEET_KEY = var3;
    var3 = 'ExplicitMediaFalsePositiveActionSheet';
    var2.EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY = var3;
    var3 = 'ExplicitMediaLearnMoreActionSheet';
    var2.EXPLICIT_MEDIA_LEARN_MORE_ACTION_SHEET_KEY = var3;
    var3 = 'ExplicitMediaSenderFalsePositiveActionSheet';
    var2.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY = var3;
    var3 = 'ExplicitMediaSettingsActionSheet';
    var2.EXPLICIT_MEDIA_SETTINGS_ACTION_SHEET_KEY = var3;
    var2.SUPPORTED_EMBED_TYPES = var1;
    var1 = 146;
    var2.EXPLICIT_MEDIA_MIN_WIDTH = var1;
    var1 = 212;
    var2.EXPLICIT_MEDIA_MIN_HEIGHT = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [791, 2]);