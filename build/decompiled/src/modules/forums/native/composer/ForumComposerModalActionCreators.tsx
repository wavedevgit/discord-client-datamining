// modules/forums/native/composer/ForumComposerModalActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
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
    var0 = 4;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/composer/ForumComposerModalActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Environment: var1
        _fun73881: for (var _fun73881_ip = 0;;) switch (_fun73881_ip) {
            case 0:
                var5 = arg0;
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var4 = 0;
                var1 = var0[var4];
                var0 = undefined;
                var6 = var3.bind(var0)(var1);
                var3 = var6.trackMobileForumComposerOpened;
                var1 = {};
                var7 = var5.guildId;
                var1.guildId = var7;
                var7 = var5.parentChannelId;
                var1.channelId = var7;
                var7 = var5.analyticsLocationObject;
                var1.location = var7;
                var1 = var3.bind(var6)(var1);
                var3 = var5.isEdit;
                var1 = null;
                var1 = var1 != var3;
                if (!var1) {
                    _fun73881_ip = 90;
                    continue _fun73881
                }
            case 84:
                var1 = var5.isEdit;
            case 90:
                if (var1) {
                    _fun73881_ip = 142;
                    continue _fun73881
                }
            case 93:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var4 = var3.bind(var0)(var1);
                var3 = var4.trackForumCreateNewPostStarted;
                var1 = {};
                var6 = var5.guildId;
                var1.guildId = var6;
                var6 = var5.parentChannelId;
                var1.channelId = var6;
                var1 = var3.bind(var4)(var1);
            case 142:
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var3 = 1;
                var3 = var1[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.pushLazy;
                var6 = _closure1_slot0;
                var2 = 3;
                var2 = var1[var2];
                var6 = var6.bind(var0)(var2);
                var2 = 2;
                var2 = var1[var2];
                var1 = var1.paths;
                var2 = var6.bind(var0)(var2, var1);
                var1 = 'create-forum-post';
                var1 = var3.bind(var4)(var2, var5, var1);
                return var0;
        }
    };
    var2.openCreateForumPostModal = var3;
    var1 = function() { // Environment: var1
        _fun73882: for (var _fun73882_ip = 0;;) switch (_fun73882_ip) {
            case 0:
                var1 = arguments[0];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun73882_ip = 11;
                    continue _fun73882
                }
            case 9:
                var1 = false;
            case 11:
                if (var1) {
                    _fun73882_ip = 46;
                    continue _fun73882
                }
            case 14:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 0;
                var1 = var3[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.trackMobileForumComposerDismissed;
                var1 = var1.bind(var2)();
            case 46:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 1;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.popWithKey;
                var1 = 'create-forum-post';
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.closeCreateForumPostModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6469, 4561, 9269, 1307, 2]);