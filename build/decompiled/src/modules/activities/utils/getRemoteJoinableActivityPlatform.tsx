// modules/activities/utils/getRemoteJoinableActivityPlatform.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ActivityFlags;
    var _closure1_slot4 = var6;
    var3 = var3.ActivityGamePlatforms;
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/getRemoteJoinableActivityPlatform.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: getRemoteJoinableActivityPlatform, environment: var1
        _fun78264: for (var _fun78264_ip = 0;;) switch (_fun78264_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun78264_ip = 488;
                    continue _fun78264
                }
            case 12:
                var4 = var1.application_id;
                if (!(var0 != var4)) {
                    _fun78264_ip = 486;
                    continue _fun78264
                }
            case 25:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var8 = 5;
                var3 = var3[var8];
                var7 = undefined;
                var9 = var5.bind(var7)(var3);
                var5 = var9.hasFlag;
                var1 = var1.flags;
                var10 = var0 != var1;
                var3 = 0;
                if (!var10) {
                    _fun78264_ip = 73;
                    continue _fun78264
                }
            case 70:
                var3 = var1;
            case 73:
                var1 = _closure1_slot4;
                var1 = var1.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN;
                var1 = var5.bind(var9)(var3, var1);
                if (!var1) {
                    _fun78264_ip = 486;
                    continue _fun78264
                }
            case 95:
                var3 = _closure1_slot3;
                var1 = var3.getRemoteApplicationActivity;
                var3 = var1.bind(var3)(var4);
                var4 = var0 == var3;
                var1 = null;
                if (var4) {
                    _fun78264_ip = 484;
                    continue _fun78264
                }
            case 124:
                var10 = var3.platform;
                var5 = _closure1_slot0;
                var9 = _closure1_slot1;
                var4 = 3;
                var4 = var9[var4];
                var5 = var5.bind(var7)(var4);
                var4 = var5.isContextlessEmbeddedActivity;
                var4 = var4.bind(var5)(var3);
                var5 = !var4;
                var4 = !var5;
                if (!var5) {
                    _fun78264_ip = 397;
                    continue _fun78264
                }
            case 173:
                var9 = _closure1_slot0;
                var5 = _closure1_slot1;
                var12 = 4;
                var5 = var5[var12];
                var9 = var9.bind(var7)(var5);
                var5 = var9.isAndroid;
                var5 = var5.bind(var9)();
                if (var5) {
                    _fun78264_ip = 380;
                    continue _fun78264
                }
            case 209:
                var9 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var12];
                var9 = var9.bind(var7)(var5);
                var5 = var9.isIOS;
                var5 = var5.bind(var9)();
                if (var5) {
                    _fun78264_ip = 364;
                    continue _fun78264
                }
            case 242:
                var9 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var12];
                var9 = var9.bind(var7)(var5);
                var5 = var9.isWeb;
                var5 = var5.bind(var9)();
                if (var5) {
                    _fun78264_ip = 345;
                    continue _fun78264
                }
            case 272:
                var11 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var12];
                var11 = var11.bind(var7)(var9);
                var9 = var11.isDesktop;
                var9 = var9.bind(var11)();
                var11 = !var9;
                var9 = !var11;
                if (var11) {
                    _fun78264_ip = 318;
                    continue _fun78264
                }
            case 308:
                var11 = var3.application_id;
                var9 = var0 != var11;
            case 318:
                if (!var9) {
                    _fun78264_ip = 342;
                    continue _fun78264
                }
            case 321:
                var13 = _closure1_slot2;
                var12 = var13.isConnected;
                var11 = var3.application_id;
                var9 = var12.bind(var13)(var11);
            case 342:
                var5 = var9;
            case 345:
                if (!var5) {
                    _fun78264_ip = 362;
                    continue _fun78264
                }
            case 348:
                var9 = _closure1_slot5;
                var9 = var9.DESKTOP;
                var5 = var10 === var9;
            case 362:
                _fun78264_ip = 378;
                continue _fun78264;
            case 364:
                var9 = _closure1_slot5;
                var9 = var9.IOS;
                var5 = var10 === var9;
            case 378:
                _fun78264_ip = 394;
                continue _fun78264;
            case 380:
                var9 = _closure1_slot5;
                var9 = var9.ANDROID;
                var5 = var10 === var9;
            case 394:
                var4 = var5;
            case 397:
                var1 = null;
                if (var4) {
                    _fun78264_ip = 484;
                    continue _fun78264
                }
            case 402:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var8];
                var5 = var5.bind(var7)(var4);
                var4 = var5.hasFlag;
                var7 = var3.flags;
                var8 = var0 != var7;
                var6 = 0;
                if (!var8) {
                    _fun78264_ip = 442;
                    continue _fun78264
                }
            case 439:
                var6 = var7;
            case 442:
                var2 = _closure1_slot4;
                var2 = var2.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN;
                var4 = var4.bind(var5)(var6, var2);
                var2 = null;
                if (!var4) {
                    _fun78264_ip = 481;
                    continue _fun78264
                }
            case 463:
                var3 = var3.platform;
                var4 = var0 != var3;
                var2 = null;
                if (!var4) {
                    _fun78264_ip = 481;
                    continue _fun78264
                }
            case 478:
                var2 = var3;
            case 481:
                var1 = var2;
            case 484:
                return var1;
            case 486:
                return var0;
            case 488:
                return var0;
        }
    };
    var2.getRemoteJoinableActivityPlatform = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4544, 3479, 660, 5627, 478, 1384, 2]);