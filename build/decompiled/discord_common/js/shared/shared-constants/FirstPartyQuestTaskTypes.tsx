// ../discord_common/js/shared/shared-constants/FirstPartyQuestTaskTypes.tsx
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
    var3 = {};
    var1 = 'STREAM_ON_DESKTOP';
    var3.STREAM_ON_DESKTOP = var1;
    var1 = 'PLAY_ON_DESKTOP';
    var3.PLAY_ON_DESKTOP = var1;
    var1 = 'PLAY_ON_XBOX';
    var3.PLAY_ON_XBOX = var1;
    var1 = 'PLAY_ON_PLAYSTATION';
    var3.PLAY_ON_PLAYSTATION = var1;
    var1 = 'PLAY_ON_DESKTOP_V2';
    var3.PLAY_ON_DESKTOP_V2 = var1;
    var1 = 'WATCH_VIDEO';
    var3.WATCH_VIDEO = var1;
    var1 = 'WATCH_VIDEO_ON_MOBILE';
    var3.WATCH_VIDEO_ON_MOBILE = var1;
    var1 = 'PLAY_ACTIVITY';
    var3.PLAY_ACTIVITY = var1;
    var1 = 'ACHIEVEMENT_IN_GAME';
    var3.ACHIEVEMENT_IN_GAME = var1;
    var1 = 'ACHIEVEMENT_IN_ACTIVITY';
    var3.ACHIEVEMENT_IN_ACTIVITY = var1;
    var1 = {};
    var6 = var0.Set;
    var4 = var6.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var6
        }
    });
    var9 = ['PLAY_ACTIVITY', 'PLAY_ON_DESKTOP', 'PLAY_ON_DESKTOP_V2', 'PLAY_ON_PLAYSTATION', 'PLAY_ON_XBOX', 'STREAM_ON_DESKTOP', 'WATCH_VIDEO', 'WATCH_VIDEO_ON_MOBILE'];
    var10 = var5;
    var4 = new var10[var6](var9, var8);
    var4 = var4 instanceof Object ? var4 : var5;
    var1.ALL = var4;
    var6 = var0.Set;
    var4 = var6.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var6
        }
    });
    var9 = ['PLAY_ACTIVITY', 'PLAY_ON_DESKTOP', 'STREAM_ON_DESKTOP'];
    var10 = var5;
    var4 = new var10[var6](var9, var8);
    var4 = var4 instanceof Object ? var4 : var5;
    var1.DESKTOP = var4;
    var6 = var0.Set;
    var4 = var6.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var6
        }
    });
    var9 = ['PLAY_ON_PLAYSTATION', 'PLAY_ON_XBOX'];
    var10 = var5;
    var4 = new var10[var6](var9, var8);
    var4 = var4 instanceof Object ? var4 : var5;
    var1.CONSOLE = var4;
    var6 = var0.Set;
    var4 = var6.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var6
        }
    });
    var9 = ['ACHIEVEMENT_IN_ACTIVITY', 'ACHIEVEMENT_IN_GAME'];
    var10 = var5;
    var4 = new var10[var6](var9, var8);
    var4 = var4 instanceof Object ? var4 : var5;
    var1.IN_GAME = var4;
    var5 = var0.Set;
    var0 = var5.prototype;
    var4 = Object.create(var0, {
        constructor: {
            value: var5
        }
    });
    var9 = ['WATCH_VIDEO', 'WATCH_VIDEO_ON_MOBILE'];
    var10 = var4;
    var0 = new var10[var5](var9, var8);
    var0 = var0 instanceof Object ? var0 : var4;
    var1.VIDEO = var0;
    var4 = dependencyMap;
    var0 = 0;
    var5 = var4[var0];
    var4 = require;
    var0 = undefined;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/shared/shared-constants/FirstPartyQuestTaskTypes.tsx';
    var4 = var5.bind(var6)(var4);
    var2.FirstPartyQuestTaskTypes = var3;
    var2.FirstPartyQuestTaskTypesSets = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);