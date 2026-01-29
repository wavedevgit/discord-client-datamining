// modules/activities/MessageActivityInviteCoverImageActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 1;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/MessageActivityInviteCoverImageActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: setCoverImageURL, environment: var1
        var0 = arg0;
        var5 = var0.messageId;
        var4 = var0.coverImageURL;
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var6 = 'SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL';
        var1.type = var6;
        var1.messageId = var5;
        var1.coverImageURL = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setCoverImageURL = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [806, 2]);