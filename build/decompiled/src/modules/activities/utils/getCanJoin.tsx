// modules/activities/utils/getCanJoin.tsx
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
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.ActivityActionTypes;
    var _closure1_slot3 = var6;
    var3 = var3.ActivityFlags;
    var _closure1_slot4 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/getCanJoin.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun92473: for (var _fun92473_ip = 0;;) switch (_fun92473_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.presenceActivity;
                var9 = var0.currentUserPresenceActivity;
                var4 = var0.currentUserId;
                var1 = var0.message;
                var7 = var0.application;
                var5 = var0.isEmbeddedApplication;
                var3 = var0.isFrameApplication;
                var0 = var0.isGameLaunchable;
                var2 = var1.author;
                var2 = var2.id;
                if (!(var2 !== var4)) {
                    _fun92473_ip = 527;
                    continue _fun92473
                }
            case 67:
                var10 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 1;
                var8 = var8[var4];
                var4 = undefined;
                var8 = var10.bind(var4)(var8);
                var7 = var7.id;
                var7 = var8.bind(var4)(var6, var1, var7);
                if (var7) {
                    _fun92473_ip = 123;
                    continue _fun92473
                }
            case 107:
                var7 = {
                    'canJoin': false,
                    'remoteJoinPlatform': null
                };
                return var7;
            case 123:
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 2;
                var7 = var11[var7];
                var10 = var8.bind(var4)(var7);
                var7 = var10.getPartySize;
                var10 = var7.bind(var10)(var6);
                var7 = 3;
                var7 = var11[var7];
                var8 = var8.bind(var4)(var7);
                var7 = var8.hasPartySize;
                var7 = var7.bind(var8)(var10);
                if (!var7) {
                    _fun92473_ip = 511;
                    continue _fun92473
                }
            case 183:
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 4;
                var7 = var11[var7];
                var8 = var8.bind(var4)(var7);
                var7 = var8.isPartyFull;
                var7 = var7.bind(var8)(var10);
                if (var7) {
                    _fun92473_ip = 511;
                    continue _fun92473
                }
            case 220:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 5;
                var7 = var10[var7];
                var8 = var8.bind(var4)(var7);
                var7 = var8.getIsInParty;
                var7 = var7.bind(var8)(var9, var6);
                if (var7) {
                    _fun92473_ip = 495;
                    continue _fun92473
                }
            case 258:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 6;
                var7 = var9[var7];
                var8 = var8.bind(var4)(var7);
                var7 = var8.getIsAskToJoin;
                var7 = var7.bind(var8)(var1);
                if (var7) {
                    _fun92473_ip = 479;
                    continue _fun92473
                }
            case 295:
                if (!var5) {
                    _fun92473_ip = 304;
                    continue _fun92473
                }
            case 298:
                if (var3) {
                    _fun92473_ip = 463;
                    continue _fun92473
                }
            case 304:
                var1 = var1.activity;
                var3 = null;
                var7 = var3 == var1;
                var5 = undefined;
                if (var7) {
                    _fun92473_ip = 326;
                    continue _fun92473
                }
            case 321:
                var5 = var1.type;
            case 326:
                var1 = _closure1_slot3;
                var1 = var1.JOIN;
                if (!(var5 === var1)) {
                    _fun92473_ip = 379;
                    continue _fun92473
                }
            case 340:
                if (!(var3 != var6)) {
                    _fun92473_ip = 379;
                    continue _fun92473
                }
            case 344:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 7;
                var1 = var7[var1];
                var5 = var5.bind(var4)(var1);
                var1 = var5.getRemoteJoinableActivityPlatform;
                var1 = var1.bind(var5)(var6);
                if (!(var3 == var1)) {
                    _fun92473_ip = 447;
                    continue _fun92473
                }
            case 379:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 8;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.platformSupportsActivityJoin;
                var2 = var2.bind(var3)();
                if (!var2) {
                    _fun92473_ip = 415;
                    continue _fun92473
                }
            case 412:
                if (var0) {
                    _fun92473_ip = 431;
                    continue _fun92473
                }
            case 415:
                var0 = {
                    'canJoin': false,
                    'remoteJoinPlatform': null
                };
                _fun92473_ip = 445;
                continue _fun92473;
            case 431:
                var0 = {
                    'canJoin': true,
                    'remoteJoinPlatform': null
                };
            case 445:
                return var0;
            case 447:
                var0 = {};
                var2 = true;
                var0.canJoin = var2;
                var0.remoteJoinPlatform = var1;
                return var0;
            case 463:
                var0 = {
                    'canJoin': true,
                    'remoteJoinPlatform': null
                };
                return var0;
            case 479:
                var0 = {
                    'canJoin': false,
                    'remoteJoinPlatform': null
                };
                return var0;
            case 495:
                var0 = {
                    'canJoin': false,
                    'remoteJoinPlatform': null
                };
                return var0;
            case 511:
                var0 = {
                    'canJoin': false,
                    'remoteJoinPlatform': null
                };
                return var0;
            case 527:
                var0 = {
                    'canJoin': false,
                    'remoteJoinPlatform': null
                };
                return var0;
        }
    };
    var2.getCanJoin = var3;
    var1 = function arg0, arg1, arg2, arg3() {
        _fun92474: for (var _fun92474_ip = 0;;) switch (_fun92474_ip) {
            case 0:
                var7 = arg0;
                var0 = null;
                var0 = var0 != var7;
                if (!var0) {
                    _fun92474_ip = 197;
                    continue _fun92474
                }
            case 15:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 1;
                var1 = var3[var1];
                var6 = undefined;
                var3 = var2.bind(var6)(var1);
                var1 = arg3;
                var2 = var1.id;
                var1 = arg2;
                var1 = var3.bind(var6)(var7, var1, var2);
                var2 = !var1;
                var1 = !var2;
                if (var2) {
                    _fun92474_ip = 194;
                    continue _fun92474
                }
            case 70:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 9;
                var2 = var5[var2];
                var3 = var3.bind(var6)(var2);
                var2 = _closure1_slot4;
                var2 = var2.SYNC;
                var2 = var3.bind(var6)(var7, var2);
                var3 = !var2;
                var2 = !var3;
                if (var3) {
                    _fun92474_ip = 191;
                    continue _fun92474
                }
            case 115:
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 8;
                var3 = var8[var3];
                var3 = var5.bind(var6)(var3);
                var3 = var3.isPlatformEmbedded;
                var5 = !var3;
                var3 = !var5;
                if (var5) {
                    _fun92474_ip = 188;
                    continue _fun92474
                }
            case 150:
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 5;
                var4 = var8[var4];
                var6 = var5.bind(var6)(var4);
                var5 = var6.getIsInParty;
                var4 = arg1;
                var4 = var5.bind(var6)(var4, var7);
                var3 = !var4;
            case 188:
                var2 = var3;
            case 191:
                var1 = var2;
            case 194:
                var0 = var1;
            case 197:
                return var0;
        }
    };
    var2.getCanSync = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 12060, 12063, 12066, 12067, 12064, 12061, 10017, 478, 5666, 2]);