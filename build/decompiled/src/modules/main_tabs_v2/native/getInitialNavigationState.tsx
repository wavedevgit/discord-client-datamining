// modules/main_tabs_v2/native/getInitialNavigationState.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function arg0() {
        var2 = arg0;
        var1 = {};
        var0 = 'main';
        var1.name = var0;
        var0 = {};
        var0.routes = var2;
        var3 = var2.length;
        var2 = 1;
        var2 = var3 - var2;
        var0.index = var2;
        var1.state = var0;
        var0 = new Array(1);
        var0[0] = var1;
        return var0;
    };
    var _closure1_slot9 = var4;
    var3 = function arg0, arg1, arg2() {
        _fun35409: for (var _fun35409_ip = 0;;) switch (_fun35409_ip) {
            case 0:
                var12 = arg0;
                var0 = arg1;
                var1 = null;
                if (!(var1 == var0)) {
                    _fun35409_ip = 30;
                    continue _fun35409
                }
            case 12:
                var3 = _closure1_slot5;
                var2 = var3.getChannelId;
                var0 = var2.bind(var3)(var12);
            case 30:
                var2 = var1 != var0;
                var5 = undefined;
                var11 = undefined;
                if (!var2) {
                    _fun35409_ip = 44;
                    continue _fun35409
                }
            case 41:
                var11 = var0;
            case 44:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 6;
                var0 = var6[var0];
                var2 = var4.bind(var5)(var0);
                var0 = var2.getChatLayout;
                var0 = var0.bind(var2)();
                var2 = var0.isChatLockedOpen;
                var0 = 7;
                var0 = var6[var0];
                var0 = var4.bind(var5)(var0);
                var6 = var0.MobileHomeDrawerExperiment;
                var4 = var6.getConfig;
                var0 = {};
                var7 = 'app-start';
                var0.location = var7;
                var0 = var4.bind(var6)(var0);
                var10 = var0.landOnHome;
                var0 = arg2;
                if (!var0) {
                    _fun35409_ip = 291;
                    continue _fun35409
                }
            case 139:
                if (!(var1 != var11)) {
                    _fun35409_ip = 291;
                    continue _fun35409
                }
            case 146:
                if (var2) {
                    _fun35409_ip = 291;
                    continue _fun35409
                }
            case 152:
                if (var10) {
                    _fun35409_ip = 291;
                    continue _fun35409
                }
            case 158:
                var0 = new Array(2);
                var4 = true;
                var0[0] = var4;
                var4 = {};
                var9 = 0;
                var4.index = var9;
                var7 = _closure1_slot9;
                var8 = {};
                var6 = 'tabs';
                var8.name = var6;
                var6 = {};
                var14 = {};
                var13 = 'guilds';
                var14.name = var13;
                var13 = {};
                var13.guildId = var12;
                var13.channelId = var11;
                var14.params = var13;
                var13 = new Array(1);
                var13[0] = var14;
                var6.routes = var13;
                var6.index = var9;
                var8.state = var6;
                var6 = new Array(2);
                var6[0] = var8;
                var8 = {};
                var9 = 'channel';
                var8.name = var9;
                var9 = {};
                var9.guildId = var12;
                var9.channelId = var11;
                var8.params = var9;
                var6[1] = var8;
                var6 = var7.bind(var5)(var6);
                var4.routes = var6;
                var0[1] = var4;
                _fun35409_ip = 412;
                continue _fun35409;
            case 291:
                var4 = !var2;
                var2 = !var4;
                if (var4) {
                    _fun35409_ip = 304;
                    continue _fun35409
                }
            case 300:
                var2 = var1 != var11;
            case 304:
                var1 = new Array(2);
                var1[0] = var2;
                var2 = {};
                var7 = 0;
                var2.index = var7;
                var4 = _closure1_slot9;
                var6 = {};
                var3 = 'tabs';
                var6.name = var3;
                var3 = {};
                var9 = {};
                var8 = 'guilds';
                var9.name = var8;
                var8 = {};
                var8.guildId = var12;
                var8.channelId = var11;
                var8.drawerOpen = var10;
                var9.params = var8;
                var8 = new Array(1);
                var8[0] = var9;
                var3.routes = var8;
                var3.index = var7;
                var6.state = var3;
                var3 = new Array(1);
                var3[0] = var6;
                var3 = var4.bind(var5)(var3);
                var2.routes = var3;
                var1[1] = var2;
                var0 = var1;
            case 412:
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var0 = function() {
        _fun35410: for (var _fun35410_ip = 0;;) switch (_fun35410_ip) {
            case 0:
                var2 = _closure1_slot3;
                var0 = var2.getToken;
                var0 = var0.bind(var2)();
                var2 = null;
                if (!(var2 == var0)) {
                    _fun35410_ip = 79;
                    continue _fun35410
                }
            case 23:
                var3 = {};
                var0 = 'other';
                var3.page = var0;
                var0 = new Array(2);
                var0[0] = var3;
                var3 = {};
                var5 = {};
                var4 = 'auth';
                var5.name = var4;
                var4 = new Array(1);
                var4[0] = var5;
                var3.routes = var4;
                var4 = 0;
                var3.index = var4;
                var0[1] = var3;
                return var0;
            case 79:
                var13 = _closure1_slot0;
                var9 = _closure1_slot1;
                var0 = 8;
                var0 = var9[var0];
                var4 = undefined;
                var3 = var13.bind(var4)(var0);
                var0 = var3.getHistory;
                var0 = var0.bind(var3)();
                var5 = var0.location;
                var0 = 9;
                var3 = var9[var0];
                var8 = var13.bind(var4)(var3);
                var7 = var8.matchPath;
                var6 = var5.pathname;
                var3 = {};
                var12 = _closure1_slot7;
                var11 = var12.CHANNEL;
                var15 = 10;
                var10 = var9[var15];
                var10 = var13.bind(var4)(var10);
                var14 = var10.RouteParam;
                var10 = var14.guildId;
                var10 = var10.bind(var14)();
                var9 = var9[var15];
                var9 = var13.bind(var4)(var9);
                var14 = var9.RouteParam;
                var13 = var14.channelId;
                var9 = {};
                var16 = true;
                var9.optional = var16;
                var9 = var13.bind(var14)(var9);
                var13 = ':messageId?';
                var9 = var11.bind(var12)(var10, var9, var13);
                var3.path = var9;
                var3 = var7.bind(var8)(var6, var3);
                if (!(var2 != var3)) {
                    _fun35410_ip = 259;
                    continue _fun35410
                }
            case 241:
                var6 = var5.openChannel;
                var5 = var2 != var6;
                if (!var5) {
                    _fun35410_ip = 257;
                    continue _fun35410
                }
            case 254:
                var5 = var6;
            case 257:
                _fun35410_ip = 380;
                continue _fun35410;
            case 259:
                var14 = _closure1_slot0;
                var9 = _closure1_slot1;
                var0 = var9[var0];
                var8 = var14.bind(var4)(var0);
                var7 = var8.matchPath;
                var0 = _closure1_slot4;
                var6 = var0.lastNonVoiceRoute;
                var0 = {};
                var12 = _closure1_slot7;
                var11 = var12.CHANNEL;
                var10 = var9[var15];
                var10 = var14.bind(var4)(var10);
                var17 = var10.RouteParam;
                var10 = var17.guildId;
                var10 = var10.bind(var17)();
                var9 = var9[var15];
                var9 = var14.bind(var4)(var9);
                var15 = var9.RouteParam;
                var14 = var15.channelId;
                var9 = {};
                var9.optional = var16;
                var9 = var14.bind(var15)(var9);
                var9 = var11.bind(var12)(var10, var9, var13);
                var0.path = var9;
                var3 = var7.bind(var8)(var6, var0);
                var5 = false;
            case 380:
                var6 = var2 == var3;
                var0 = undefined;
                if (var6) {
                    _fun35410_ip = 395;
                    continue _fun35410
                }
            case 389:
                var0 = var3.params;
            case 395:
                if (!(var2 == var0)) {
                    _fun35410_ip = 401;
                    continue _fun35410
                }
            case 399:
                var0 = {};
            case 401:
                var3 = var0.channelId;
                var0 = var0.guildId;
                if (!(var2 != var0)) {
                    _fun35410_ip = 555;
                    continue _fun35410
                }
            case 418:
                var2 = _closure1_slot10;
                if (var5) {
                    _fun35410_ip = 433;
                    continue _fun35410
                }
            case 425:
                var6 = _closure1_slot6;
                var5 = var0 !== var6;
            case 433:
                var5 = var2.bind(var4)(var0, var3, var5);
                var3 = _closure1_slot2;
                var2 = 2;
                var3 = var3.bind(var4)(var5, var2);
                var2 = 0;
                var5 = var3[var2];
                var2 = 1;
                var3 = var3[var2];
                var2 = 'other';
                if (var5) {
                    _fun35410_ip = 496;
                    continue _fun35410
                }
            case 473:
                var6 = _closure1_slot6;
                var5 = 'guild-channels';
                if (!(var0 === var6)) {
                    _fun35410_ip = 493;
                    continue _fun35410
                }
            case 487:
                var5 = 'private-channels';
            case 493:
                var2 = var5;
            case 496:
                var5 = 'private-channels';
                if (!(var5 !== var2)) {
                    _fun35410_ip = 531;
                    continue _fun35410
                }
            case 506:
                var5 = {};
                var5.page = var2;
                var5.guildId = var0;
                var0 = new Array(2);
                var0[0] = var5;
                var0[1] = var3;
                _fun35410_ip = 553;
                continue _fun35410;
            case 531:
                var5 = {};
                var5.page = var2;
                var2 = new Array(2);
                var2[0] = var5;
                var2[1] = var3;
                var0 = var2;
            case 553:
                return var0;
            case 555:
                var2 = {};
                var0 = 'private-channels';
                var2.page = var0;
                var0 = new Array(2);
                var0[0] = var2;
                var3 = _closure1_slot10;
                var2 = _closure1_slot6;
                var1 = false;
                var2 = var3.bind(var4)(var2, var4, var1);
                var1 = 1;
                var1 = var2[var1];
                var0[1] = var1;
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var9 = var5.ME;
    var _closure1_slot6 = var9;
    var5 = var5.Routes;
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var9 = var8.bind(var0)(var5);
    var5 = var9.prototype;
    var8 = Object.create(var5, {
        constructor: {
            value: var9
        }
    });
    var13 = 'getInitialNavigationState';
    var14 = var8;
    var5 = new var14[var9](var13, var12);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot8 = var5;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/getInitialNavigationState.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function arg0() {
        _fun35411: for (var _fun35411_ip = 0;;) switch (_fun35411_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot11;
                var0 = undefined;
                var2 = var2.bind(var0)();
                var0 = 1;
                var0 = var2[var0];
                var _closure2_slot0 = var0;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun35411_ip = 50;
                    continue _fun35411
                }
            case 35:
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    var0 = _closure2_slot0;
                    var2 = var0.routes;
                    var1 = var2.push;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
            case 50:
                return var0;
        }
    };
    var2.default = var5;
    var2.wrapRouteForRootNavigator = var4;
    var4 = function() {
        var0 = {};
        var2 = {};
        var1 = 'auth';
        var2.name = var1;
        var1 = new Array(1);
        var1[0] = var2;
        var0.routes = var1;
        var1 = 0;
        var0.index = var1;
        return var0;
    };
    var2.getInitialAuthState = var4;
    var2.getInitialGuildState = var3;
    var1 = function() {
        var2 = _closure1_slot11;
        var0 = undefined;
        var0 = var2.bind(var0)();
        var3 = _closure1_slot8;
        var2 = var3.log;
        var1 = 'Initial State:';
        var1 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.computeInitialNavigationState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1216, 3217, 1670, 660, 3, 3922, 3925, 1220, 3218, 3228, 2]);