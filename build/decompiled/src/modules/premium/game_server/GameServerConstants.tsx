// modules/premium/game_server/GameServerConstants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun78450: for (var _fun78450_ip = 0;;) switch (_fun78450_ip) {
        case 0:
            var10 = require;
            var2 = exports;
            var11 = dependencyMap;
            var13 = global;
            var4 = var13.Object;
            var3 = var4.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var4)(var2, var0, var1);
            var9 = 0;
            var1 = var11[var9];
            var0 = undefined;
            var1 = var10.bind(var0)(var1);
            var1 = var1.Environments;
            var8 = {};
            var3 = 'select-game';
            var8.SELECT_GAME = var3;
            var3 = 'server-settings';
            var8.SERVER_SETTINGS = var3;
            var7 = {};
            var3 = {};
            var5 = var8.SELECT_GAME;
            var4 = {};
            var6 = {};
            var12 = 'close';
            var6.type = var12;
            var4.onBack = var6;
            var6 = {};
            var12 = 'go-to-step';
            var6.type = var12;
            var14 = var8.SERVER_SETTINGS;
            var6.step = var14;
            var4.onNext = var6;
            var3[var5] = var4;
            var5 = var8.SERVER_SETTINGS;
            var4 = {};
            var6 = {};
            var6.type = var12;
            var12 = var8.SELECT_GAME;
            var6.step = var12;
            var4.onBack = var6;
            var6 = {};
            var12 = 'save';
            var6.type = var12;
            var4.onNext = var6;
            var3[var5] = var4;
            var7.steps = var3;
            var3 = var13.window;
            var3 = var3.GLOBAL_ENV;
            var3 = var3.PROJECT_ENV;
            var6 = '1425215263548117002';
            var4 = 'production';
            if (!(var4 !== var3)) {
                _fun78450_ip = 276;
                continue _fun78450
            }
        case 233:
            var3 = var13.window;
            var3 = var3.GLOBAL_ENV;
            var12 = var3.PROJECT_ENV;
            var3 = '1415025086791942144';
            var5 = 'staging';
            if (!(var5 === var12)) {
                _fun78450_ip = 273;
                continue _fun78450
            }
        case 267:
            var3 = '1415044199572832256';
        case 273:
            var6 = var3;
        case 276:
            var3 = var13.window;
            var3 = var3.GLOBAL_ENV;
            var3 = var3.PROJECT_ENV;
            if (!(var4 !== var3)) {
                _fun78450_ip = 350;
                continue _fun78450
            }
        case 298:
            var3 = var13.window;
            var3 = var3.GLOBAL_ENV;
            var4 = var3.PROJECT_ENV;
            var3 = 'staging';
            if (!(var3 !== var4)) {
                _fun78450_ip = 338;
                continue _fun78450
            }
        case 326:
            var5 = ['1', '2'];
            _fun78450_ip = 348;
            continue _fun78450;
        case 338:
            var5 = ['356875570916753438', '1458563423670501376'];
        case 348:
            _fun78450_ip = 360;
            continue _fun78450;
        case 350:
            var5 = ['1402418491272986635', '1458530944955973852'];
        case 360:
            var4 = {};
            var4.SHOCKBYTE = var9;
            var3 = 'SHOCKBYTE';
            var4[var9] = var3;
            var3 = {};
            var9 = 1;
            var12 = var11[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.GameServerProviderType;
            var12 = var12.SHOCKBYTE;
            var13 = var13.window;
            var13 = var13.GLOBAL_ENV;
            var14 = var13.RELEASE_CHANNEL;
            var13 = var1.STAGING;
            var1 = 'https://discord.shockbyte.com/support';
            if (!(var14 === var13)) {
                _fun78450_ip = 442;
                continue _fun78450
            }
        case 436:
            var1 = 'https://purple-prod.shockbyte.dev/support';
        case 442:
            var3[var12] = var1;
            var1 = {};
            var9 = var11[var9];
            var9 = var10.bind(var0)(var9);
            var9 = var9.GameServerProviderType;
            var12 = var9.SHOCKBYTE;
            var9 = 'https://shockbyte.com/legal/acceptable-use-policy';
            var1[var12] = var9;
            var9 = 2;
            var9 = var11[var9];
            var11 = var10.bind(var0)(var9);
            var10 = var11.fileFinishedImporting;
            var9 = 'modules/premium/game_server/GameServerConstants.tsx';
            var9 = var10.bind(var11)(var9);
            var2.GameServerSetupStep = var8;
            var2.GAME_SERVER_DEFAULT_STEP_CONFIG = var7;
            var7 = 24;
            var2.GAME_SERVER_SLIDE_PADDING = var7;
            var7 = 680;
            var2.GAME_SERVER_SLIDE_WIDTH = var7;
            var7 = 632;
            var2.GAME_SERVER_SLIDE_CONTENT_WIDTH = var7;
            var7 = 10;
            var2.GAME_SERVER_MAX_INSTANCES = var7;
            var7 = 32;
            var2.GAME_SERVER_MAX_NAME_LENGTH = var7;
            var7 = 1000;
            var2.GAME_SERVER_MIN_DELAY_TIME_MS = var7;
            var2.GAME_SERVER_COLLECTION_ID = var6;
            var2.GAME_SERVER_FEATURED_GAME_IDS = var5;
            var2.GameServerGameProvider = var4;
            var2.GAME_SERVER_SUPPORT_URLS = var3;
            var2.GAME_SERVER_TOS = var1;
            var1 = function(arg0, arg1) { // Environment: var1
                var0 = global;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var3 = 'https://discord.sjc1.qualtrics.com/jfe/form/SV_2h34PnQLPTCjTTM?user_id=';
                var2 = arg0;
                var1 = '&guild_id=';
                var0 = arg1;
                var0 = var4.bind(var3)(var2, var1, var0);
                return var0;
            };
            var2.GAME_SERVER_SURVEY_URL = var1;
            var1 = '0';
            var2.GAME_SERVER_POWERUP_SKU_ID = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [1619, 9953, 2]);