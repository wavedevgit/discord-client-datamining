// modules/routing/router_utils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var2 = var1.ComponentDispatch;
        var1 = var2.hasSubscribers;
        var0 = _closure1_slot7;
        var0 = var0.MODAL_CLOSE;
        var0 = var1.bind(var2)(var0);
        var0 = !var0;
        return var0;
    };
    var _closure1_slot11 = var4;
    var0 = function arg0, arg1() {
        _fun13399: for (var _fun13399_ip = 0;;) switch (_fun13399_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var _closure2_slot0 = var3;
                var4 = 'string';
                var2 = typeof var3;
                var2 = var4 !== var2;
                if (var2) {
                    _fun13399_ip = 52;
                    continue _fun13399
                }
            case 26:
                var5 = _closure1_slot9;
                var4 = var5.some;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.startsWith;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var4.bind(var5)(var0);
                var2 = !var0;
            case 52:
                var0 = !var2;
                if (var2) {
                    _fun13399_ip = 176;
                    continue _fun13399
                }
            case 58:
                var6 = _closure1_slot8;
                var5 = var6.log;
                var2 = global;
                var4 = var2.HermesInternal;
                var8 = var4.concat;
                var7 = '';
                var4 = ' - route to external path ';
                var4 = var8.bind(var7)(var1, var4, var3);
                var4 = var5.bind(var6)(var4);
                var6 = var2.window;
                var5 = var6.dispatchEvent;
                var8 = var2.Event;
                var4 = var8.prototype;
                var7 = Object.create(var4, {
                    constructor: {
                        value: var8
                    }
                });
                var11 = 'beforeunload';
                var12 = var7;
                var4 = new var12[var8](var11, var10);
                var4 = var4 instanceof Object ? var4 : var7;
                var4 = var5.bind(var6)(var4);
                var2 = var2.window;
                var2 = var2.location;
                var1 = var2[var1];
                var1 = var1.bind(var2)(var3);
                var0 = true;
            case 176:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var3 = function arg0, arg1() {
        _fun13401: for (var _fun13401_ip = 0;;) switch (_fun13401_ip) {
            case 0:
                var6 = arg0;
                var8 = arg1;
                var3 = _closure1_slot12;
                var0 = undefined;
                var1 = 'assign';
                var1 = var3.bind(var0)(var6, var1);
                if (var1) {
                    _fun13401_ip = 255;
                    continue _fun13401
                }
            case 31:
                var5 = _closure1_slot8;
                var3 = var5.log;
                var4 = global;
                var1 = var4.HermesInternal;
                var7 = var1.concat;
                var1 = 'transitionTo - Transitioning to ';
                var1 = var7.bind(var1)(var6);
                var1 = var3.bind(var5)(var1);
                var5 = null;
                var1 = var5 == var8;
                var3 = undefined;
                if (var1) {
                    _fun13401_ip = 85;
                    continue _fun13401
                }
            case 80:
                var3 = var8.source;
            case 85:
                var7 = var5 == var8;
                var1 = undefined;
                if (var7) {
                    _fun13401_ip = 100;
                    continue _fun13401
                }
            case 94:
                var1 = var8.sourceLocationStack;
            case 100:
                if (!(var5 != var8)) {
                    _fun13401_ip = 233;
                    continue _fun13401
                }
            case 107:
                var7 = var4.URL;
                var5 = var4.window;
                var5 = var5.GLOBAL_ENV;
                var9 = var5.WEBAPP_ENDPOINT;
                var4 = var4.HermesInternal;
                var5 = var4.concat;
                var4 = 'https:';
                var11 = var5.bind(var4)(var9);
                var5 = var7.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var7
                    }
                });
                var13 = var5;
                var12 = var6;
                var4 = new var13[var7](var12, var11, var10);
                var9 = var4 instanceof Object ? var4 : var5;
                var7 = _closure1_slot2;
                var5 = var7.push;
                var4 = {};
                var10 = var9.pathname;
                var4.pathname = var10;
                var10 = var9.search;
                var4.search = var10;
                var9 = var9.hash;
                var4.hash = var9;
                var12 = var4;
                var11 = var8;
                var8 = copyDataProperties(var12, var11);
                var4 = var5.bind(var7)(var4);
                _fun13401_ip = 247;
                continue _fun13401;
            case 233:
                var5 = _closure1_slot2;
                var4 = var5.push;
                var4 = var4.bind(var5)(var6);
            case 247:
                var _closure1_slot3 = var3;
                var _closure1_slot4 = var1;
            case 255:
                return var0;
        }
    };
    var _closure1_slot13 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var8 = var5.Routes;
    var _closure1_slot5 = var8;
    var8 = var5.PageAnalyticsLocations;
    var _closure1_slot6 = var8;
    var8 = var5.ComponentActions;
    var _closure1_slot7 = var8;
    var5 = var5.RelativeMarketingURLs;
    var8 = 1;
    var9 = var7[var8];
    var8 = arg2;
    var10 = var8.bind(var0)(var9);
    var8 = var10.prototype;
    var9 = Object.create(var8, {
        constructor: {
            value: var10
        }
    });
    var13 = 'Routing/Utils';
    var14 = var9;
    var8 = new var14[var10](var13, var12);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot8 = var8;
    var8 = var5.DEVELOPER_PORTAL;
    var5 = new Array(1);
    var5[0] = var8;
    var _closure1_slot9 = var5;
    var5 = 2;
    var5 = var7[var5];
    var8 = var6.bind(var0)(var5);
    var5 = var8.createMemoryHistory;
    var9 = var5.bind(var8)();
    var _closure1_slot2 = var9;
    var8 = var9.listen;
    var5 = function(arg0, arg1) { // Environment: var1
        _fun13402: for (var _fun13402_ip = 0;;) switch (_fun13402_ip) {
            case 0:
                var1 = 'REPLACE';
                var0 = arg1;
                if (!(var1 !== var0)) {
                    _fun13402_ip = 26;
                    continue _fun13402
                }
            case 13:
                var1 = _closure1_slot10;
                var0 = undefined;
                var0 = var1.bind(var0)();
            case 26:
                var0 = undefined;
                return var0;
        }
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot10 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/routing/router_utils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.shouldNavigate = var4;
    var2.transitionTo = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        var5 = arg0;
        var4 = arg1;
        var2 = arg2;
        var6 = _closure1_slot8;
        var3 = var6.log;
        var1 = global;
        var9 = var1.JSON;
        var8 = var9.stringify;
        var7 = {};
        var7.guildId = var5;
        var7.channelId = var4;
        var7.messageId = var2;
        var8 = var8.bind(var9)(var7);
        var1 = var1.HermesInternal;
        var7 = var1.concat;
        var1 = 'transitionToGuild - Transitioning to ';
        var1 = var7.bind(var1)(var8);
        var1 = var3.bind(var6)(var1);
        var3 = _closure1_slot13;
        var1 = _closure1_slot5;
        var0 = var1.CHANNEL;
        var2 = var0.bind(var1)(var5, var4, var2);
        var0 = undefined;
        var1 = arg3;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.transitionToGuild = var3;
    var3 = function() {
        _fun13404: for (var _fun13404_ip = 0;;) switch (_fun13404_ip) {
            case 0:
                var2 = _closure1_slot3;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun13404_ip = 58;
                    continue _fun13404
                }
            case 16:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 4;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var3 = var2.ChannelBackNavigationSources;
                var2 = var3.has;
                var1 = _closure1_slot3;
                var0 = var2.bind(var3)(var1);
            case 58:
                return var0;
        }
    };
    var2.currentRouteHasBackNavigation = var3;
    var3 = function arg0, arg1, arg2() {
        _fun13405: for (var _fun13405_ip = 0;;) switch (_fun13405_ip) {
            case 0:
                var5 = arg0;
                var3 = _closure1_slot12;
                var0 = undefined;
                var1 = 'replace';
                var1 = var3.bind(var0)(var5, var1);
                if (var1) {
                    _fun13405_ip = 115;
                    continue _fun13405
                }
            case 25:
                var4 = _closure1_slot8;
                var3 = var4.log;
                var1 = global;
                var1 = var1.HermesInternal;
                var6 = var1.concat;
                var1 = 'Replacing route with ';
                var1 = var6.bind(var1)(var5);
                var1 = var3.bind(var4)(var1);
                var3 = 'string';
                var1 = typeof var5;
                if (!(var3 !== var1)) {
                    _fun13405_ip = 90;
                    continue _fun13405
                }
            case 74:
                var3 = _closure1_slot2;
                var1 = var3.replace;
                var1 = var1.bind(var3)(var5);
                _fun13405_ip = 108;
                continue _fun13405;
            case 90:
                var4 = _closure1_slot2;
                var3 = var4.replace;
                var1 = arg1;
                var1 = var3.bind(var4)(var5, var1);
            case 108:
                var1 = arg2;
                _closure1_slot3 = var1;
            case 115:
                return var0;
        }
    };
    var2.replaceWith = var3;
    var3 = function() {
        var0 = _closure1_slot2;
        return var0;
    };
    var2.getHistory = var3;
    var3 = function() {
        var0 = _closure1_slot3;
        return var0;
    };
    var2.getLastRouteChangeSource = var3;
    var3 = function() {
        var0 = _closure1_slot4;
        return var0;
    };
    var2.getLastRouteChangeSourceLocationStack = var3;
    var3 = function arg0() {
        _fun13409: for (var _fun13409_ip = 0;;) switch (_fun13409_ip) {
            case 0:
                var1 = null;
                var0 = arg0;
                if (!(var1 == var0)) {
                    _fun13409_ip = 31;
                    continue _fun13409
                }
            case 9:
                var0 = _closure1_slot2;
                var0 = var0.location;
                var0 = var0.pathname;
                var0 = var1 != var0;
            case 31:
                var0 = true;
                return var0;
        }
    };
    var2.isValidFingerprintRoute = var3;
    var3 = function arg0() {
        _fun13410: for (var _fun13410_ip = 0;;) switch (_fun13410_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                if (!(var1 == var0)) {
                    _fun13410_ip = 44;
                    continue _fun13410
                }
            case 9:
                var2 = _closure1_slot2;
                var2 = var2.location;
                var2 = var2.pathname;
                var3 = var1 != var2;
                var1 = '';
                if (!var3) {
                    _fun13410_ip = 41;
                    continue _fun13410
                }
            case 38:
                var1 = var2;
            case 41:
                var0 = var1;
            case 44:
                var3 = var0.startsWith;
                var2 = _closure1_slot5;
                var2 = var2.LOGIN;
                var2 = var3.bind(var0)(var2);
                if (var2) {
                    _fun13410_ip = 583;
                    continue _fun13410
                }
            case 74:
                var3 = var0.startsWith;
                var2 = _closure1_slot5;
                var2 = var2.REGISTER;
                var2 = var3.bind(var0)(var2);
                if (var2) {
                    _fun13410_ip = 571;
                    continue _fun13410
                }
            case 101:
                var3 = var0.startsWith;
                var4 = _closure1_slot5;
                var2 = var4.INVITE;
                var5 = '';
                var2 = var2.bind(var4)(var5);
                var2 = var3.bind(var0)(var2);
                if (var2) {
                    _fun13410_ip = 559;
                    continue _fun13410
                }
            case 137:
                var3 = var0.startsWith;
                var2 = _closure1_slot5;
                var2 = var2.VERIFY;
                var2 = var3.bind(var0)(var2);
                if (var2) {
                    _fun13410_ip = 547;
                    continue _fun13410
                }
            case 164:
                var3 = var0.startsWith;
                var2 = _closure1_slot5;
                var2 = var2.DISABLE_EMAIL_NOTIFICATIONS;
                var2 = var3.bind(var0)(var2);
                if (var2) {
                    _fun13410_ip = 535;
                    continue _fun13410
                }
            case 191:
                var3 = var0.startsWith;
                var2 = _closure1_slot5;
                var2 = var2.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS;
                var2 = var3.bind(var0)(var2);
                if (var2) {
                    _fun13410_ip = 523;
                    continue _fun13410
                }
            case 218:
                var3 = var0.startsWith;
                var2 = _closure1_slot5;
                var2 = var2.REJECT_IP;
                var2 = var3.bind(var0)(var2);
                if (var2) {
                    _fun13410_ip = 511;
                    continue _fun13410
                }
            case 245:
                var3 = var0.startsWith;
                var2 = _closure1_slot5;
                var2 = var2.REJECT_MFA;
                var2 = var3.bind(var0)(var2);
                if (var2) {
                    _fun13410_ip = 499;
                    continue _fun13410
                }
            case 272:
                var3 = var0.startsWith;
                var2 = _closure1_slot5;
                var2 = var2.AUTHORIZE_IP;
                var2 = var3.bind(var0)(var2);
                if (var2) {
                    _fun13410_ip = 487;
                    continue _fun13410
                }
            case 299:
                var3 = var0.startsWith;
                var2 = _closure1_slot5;
                var2 = var2.AUTHORIZE_PAYMENT;
                var2 = var3.bind(var0)(var2);
                if (var2) {
                    _fun13410_ip = 475;
                    continue _fun13410
                }
            case 326:
                var3 = var0.startsWith;
                var2 = _closure1_slot5;
                var2 = var2.RESET;
                var2 = var3.bind(var0)(var2);
                if (var2) {
                    _fun13410_ip = 463;
                    continue _fun13410
                }
            case 350:
                var3 = var0.startsWith;
                var2 = _closure1_slot5;
                var2 = var2.REPORT;
                var2 = var3.bind(var0)(var2);
                if (var2) {
                    _fun13410_ip = 451;
                    continue _fun13410
                }
            case 374:
                var3 = var0.startsWith;
                var2 = _closure1_slot5;
                var2 = var2.REPORT_SECOND_LOOK;
                var2 = var3.bind(var0)(var2);
                if (var2) {
                    _fun13410_ip = 439;
                    continue _fun13410
                }
            case 398:
                var3 = var0.startsWith;
                var4 = _closure1_slot5;
                var2 = var4.ACCOUNT_REVERT;
                var2 = var2.bind(var4)(var5);
                var2 = var3.bind(var0)(var2);
                if (!var2) {
                    _fun13410_ip = 437;
                    continue _fun13410
                }
            case 427:
                var2 = _closure1_slot6;
                var0 = var2.ACCOUNT_REVERT;
            case 437:
                _fun13410_ip = 449;
                continue _fun13410;
            case 439:
                var2 = _closure1_slot6;
                var0 = var2.REPORT_SECOND_LOOK;
            case 449:
                _fun13410_ip = 461;
                continue _fun13410;
            case 451:
                var2 = _closure1_slot6;
                var0 = var2.REPORT;
            case 461:
                _fun13410_ip = 473;
                continue _fun13410;
            case 463:
                var2 = _closure1_slot6;
                var0 = var2.RESET;
            case 473:
                _fun13410_ip = 485;
                continue _fun13410;
            case 475:
                var2 = _closure1_slot6;
                var0 = var2.AUTHORIZE_PAYMENT;
            case 485:
                _fun13410_ip = 497;
                continue _fun13410;
            case 487:
                var2 = _closure1_slot6;
                var0 = var2.AUTHORIZE_IP;
            case 497:
                _fun13410_ip = 509;
                continue _fun13410;
            case 499:
                var2 = _closure1_slot6;
                var0 = var2.REJECT_MFA;
            case 509:
                _fun13410_ip = 521;
                continue _fun13410;
            case 511:
                var2 = _closure1_slot6;
                var0 = var2.REJECT_IP;
            case 521:
                _fun13410_ip = 533;
                continue _fun13410;
            case 523:
                var2 = _closure1_slot6;
                var0 = var2.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS;
            case 533:
                _fun13410_ip = 545;
                continue _fun13410;
            case 535:
                var2 = _closure1_slot6;
                var0 = var2.DISABLE_EMAIL_NOTIFICATIONS;
            case 545:
                _fun13410_ip = 557;
                continue _fun13410;
            case 547:
                var2 = _closure1_slot6;
                var0 = var2.VERIFY;
            case 557:
                _fun13410_ip = 569;
                continue _fun13410;
            case 559:
                var2 = _closure1_slot6;
                var0 = var2.INVITE;
            case 569:
                _fun13410_ip = 581;
                continue _fun13410;
            case 571:
                var2 = _closure1_slot6;
                var0 = var2.REGISTER;
            case 581:
                _fun13410_ip = 593;
                continue _fun13410;
            case 583:
                var1 = _closure1_slot6;
                var0 = var1.LOGIN;
            case 593:
                return var0;
        }
    };
    var2.getFingerprintLocation = var3;
    var3 = function() {
        var0 = false;
        return var0;
    };
    var2.hasNavigated = var3;
    var3 = function() {
        _fun13412: for (var _fun13412_ip = 0;;) switch (_fun13412_ip) {
            case 0:
                var2 = _closure1_slot11;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (!var2) {
                    _fun13412_ip = 36;
                    continue _fun13412
                }
            case 16:
                var2 = null;
                _closure1_slot3 = var2;
                var2 = _closure1_slot2;
                var1 = var2.goBack;
                var1 = var1.bind(var2)();
            case 36:
                return var0;
        }
    };
    var2.back = var3;
    var1 = function() {
        _fun13413: for (var _fun13413_ip = 0;;) switch (_fun13413_ip) {
            case 0:
                var2 = _closure1_slot11;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (!var2) {
                    _fun13413_ip = 36;
                    continue _fun13413
                }
            case 16:
                var2 = null;
                _closure1_slot3 = var2;
                var2 = _closure1_slot2;
                var1 = var2.goForward;
                var1 = var1.bind(var2)();
            case 36:
                return var0;
        }
    };
    var2.forward = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 3, 1221, 1229, 1232, 2]);