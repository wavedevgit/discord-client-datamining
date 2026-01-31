// actions/native/MessagePreviewActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var6 = var1.Endpoints;
    var _closure1_slot3 = var6;
    var1 = var1.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot4 = var1;
    var1 = {};
    var6 = function arg0, arg1() {
        var9 = arg0;
        var6 = arg1;
        var _closure2_slot0 = var9;
        var _closure2_slot1 = var6;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 1;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var4 = var2.HTTP;
        var3 = var4.get;
        var2 = {
            'url': null,
            'query': null,
            'retries': 2,
            'oldFormErrors': true,
            'rejectWithError': true
        };
        var8 = _closure1_slot3;
        var5 = var8.MESSAGES;
        var5 = var5.bind(var8)(var9);
        var2.url = var5;
        var5 = {};
        var7 = _closure1_slot4;
        var5.limit = var7;
        var5.around = var6;
        var2.query = var5;
        var3 = var3.bind(var4)(var2);
        var2 = var3.then;
        var1 = function(arg0) { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'LOAD_MESSAGES_AROUND_SUCCESS';
            var1.type = var4;
            var5 = _closure2_slot0;
            var1.channelId = var5;
            var5 = arg0;
            var5 = var5.body;
            var1.messages = var5;
            var4 = _closure2_slot1;
            var1.around = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.fetchMessages = var6;
    var3 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CLEAR_MESSAGES_AROUND_SUCCESS';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.clearMessages = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/native/MessagePreviewActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 507, 806, 2]);