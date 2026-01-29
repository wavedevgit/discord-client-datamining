// modules/game_community_upsell/GameCommunityConfig.tsx
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
    var1 = 'modules/game_community_upsell/GameCommunityConfig.tsx';
    var1 = var3.bind(var4)(var1);
    var3 = {
        'id': '1402418491272986635',
        'name': 'Minecraft',
        'iosUrlSchemes': null,
        'androidPackageName': 'minecraft',
        'guildId': '302094807046684672',
        'guildName': 'The official Minecraft Discord',
        'overrideInstall': false
    };
    var1 = ['minecraft'];
    var3.iosUrlSchemes = var1;
    var1 = new Array(3);
    var1[0] = var3;
    var3 = {
        'id': '1402418703554842694',
        'name': 'Fortnite',
        'iosUrlSchemes': null,
        'androidPackageName': 'fortnite',
        'guildId': '322850917248663552',
        'guildName': 'Official Fortnite',
        'overrideInstall': false
    };
    var4 = ['com.epicgames.fortnite'];
    var3.iosUrlSchemes = var4;
    var1[1] = var3;
    var3 = {
        'id': '762434991303950386',
        'name': 'Genshin Impact',
        'iosUrlSchemes': null,
        'androidPackageName': 'genshin',
        'guildId': '522681957373575168',
        'guildName': 'Genshin Impact Official',
        'overrideInstall': false
    };
    var4 = ['genshin'];
    var3.iosUrlSchemes = var4;
    var1[2] = var3;
    var2.SUPPORTED_GAMES = var1;
    var1 = 10000;
    var2.DETECTION_DELAY_MS = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);