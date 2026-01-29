// ../discord_common/js/shared/shared-constants/ReportMenuType.tsx
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
    var1 = 'message';
    var3.message = var1;
    var1 = 'first_dm';
    var3.first_dm = var1;
    var1 = 'guild';
    var3.guild = var1;
    var1 = 'guild_directory_entry';
    var3.guild_directory_entry = var1;
    var1 = 'guild_discovery';
    var3.guild_discovery = var1;
    var1 = 'user';
    var3.user = var1;
    var1 = 'stage_channel';
    var3.stage_channel = var1;
    var1 = 'guild_scheduled_event';
    var3.guild_scheduled_event = var1;
    var1 = 'application';
    var3.application = var1;
    var1 = 'widget';
    var3.widget = var1;
    var1 = 'user_urf';
    var3.user_urf = var1;
    var1 = 'message_urf';
    var3.message_urf = var1;
    var1 = 'guild_urf';
    var3.guild_urf = var1;
    var1 = 'media_takedown';
    var3.media_takedown = var1;
    var1 = 'xbox_console_voice';
    var3.xbox_console_voice = var1;
    var1 = 'playstation_console_voice';
    var3.playstation_console_voice = var1;
    var1 = 'report_to_mod_message';
    var3.report_to_mod_message = var1;
    var1 = {};
    var6 = var0.Set;
    var4 = var6.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var6
        }
    });
    var9 = ['application', 'first_dm', 'guild', 'guild_directory_entry', 'guild_discovery', 'guild_scheduled_event', 'message', 'report_to_mod_message', 'stage_channel', 'user', 'widget'];
    var10 = var5;
    var4 = new var10[var6](var9, var8);
    var4 = var4 instanceof Object ? var4 : var5;
    var1.IN_APP = var4;
    var6 = var0.Set;
    var4 = var6.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var6
        }
    });
    var9 = ['report_to_mod_message'];
    var10 = var5;
    var4 = new var10[var6](var9, var8);
    var4 = var4 instanceof Object ? var4 : var5;
    var1.REPORT_TO_MOD = var4;
    var6 = var0.Set;
    var4 = var6.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var6
        }
    });
    var9 = ['guild_urf', 'media_takedown', 'message_urf', 'user_urf'];
    var10 = var5;
    var4 = new var10[var6](var9, var8);
    var4 = var4 instanceof Object ? var4 : var5;
    var1.UNAUTHENTICATED = var4;
    var5 = var0.Set;
    var0 = var5.prototype;
    var4 = Object.create(var0, {
        constructor: {
            value: var5
        }
    });
    var9 = ['playstation_console_voice', 'xbox_console_voice'];
    var10 = var4;
    var0 = new var10[var5](var9, var8);
    var0 = var0 instanceof Object ? var0 : var4;
    var1.CONSOLE = var0;
    var4 = dependencyMap;
    var0 = 0;
    var5 = var4[var0];
    var4 = require;
    var0 = undefined;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/shared/shared-constants/ReportMenuType.tsx';
    var4 = var5.bind(var6)(var4);
    var2.ReportMenuType = var3;
    var2.ReportMenuTypeSets = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);