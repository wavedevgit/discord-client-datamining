// modules/panels/isChannelFocused.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function() {
        _fun69904: for (var _fun69904_ip = 0;;) switch (_fun69904_ip) {
            case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 6;
                var1 = var4[var1];
                var2 = undefined;
                var5 = var3.bind(var2)(var1);
                var1 = var5.getRootNavigationRef;
                var5 = var1.bind(var5)();
                var1 = 7;
                var1 = var4[var1];
                var3 = var3.bind(var2)(var1);
                var1 = var3.getChatLayout;
                var1 = var1.bind(var3)();
                var3 = var1.isChatLockedOpen;
                var4 = null;
                if (!(var4 != var5)) {
                    _fun69904_ip = 202;
                    continue _fun69904
                }
            case 72:
                var1 = var5.isReady;
                var1 = var1.bind(var5)();
                if (!var1) {
                    _fun69904_ip = 202;
                    continue _fun69904
                }
            case 85:
                var1 = var5.getCurrentRoute;
                var7 = var1.bind(var5)();
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var8 = 5;
                var1 = var1[var8];
                var5 = var5.bind(var2)(var1);
                var1 = var5.coerceChannelRoute;
                var1 = var1.bind(var5)(var7);
                if (!(var4 == var1)) {
                    _fun69904_ip = 189;
                    continue _fun69904
                }
            case 130:
                if (!var3) {
                    _fun69904_ip = 165;
                    continue _fun69904
                }
            case 133:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var8];
                var6 = var6.bind(var2)(var5);
                var5 = var6.coerceGuildsRoute;
                var5 = var5.bind(var6)(var7);
                if (!(var4 == var5)) {
                    _fun69904_ip = 167;
                    continue _fun69904
                }
            case 165:
                return var2;
            case 167:
                var6 = var5.params;
                var7 = var4 == var6;
                var5 = undefined;
                if (var7) {
                    _fun69904_ip = 187;
                    continue _fun69904
                }
            case 182:
                var5 = var6.channelId;
            case 187:
                return var5;
            case 189:
                var1 = var1.params;
                var1 = var1.channelId;
                return var1;
            case 202:
                var1 = _closure1_slot7;
                if (!(var4 === var1)) {
                    _fun69904_ip = 680;
                    continue _fun69904
                }
            case 213:
                var6 = _closure1_slot1;
                var1 = _closure1_slot2;
                var5 = 4;
                var5 = var1[var5];
                var5 = var6.bind(var2)(var5);
                var8 = var5.bind(var2)();
                var5 = _closure1_slot0;
                var6 = 5;
                var1 = var1[var6];
                var7 = var5.bind(var2)(var1);
                var5 = var7.coerceMainRoute;
                var9 = var4 == var8;
                var1 = undefined;
                if (var9) {
                    _fun69904_ip = 313;
                    continue _fun69904
                }
            case 268:
                var9 = var8.routes;
                var10 = var4 == var9;
                var1 = undefined;
                if (var10) {
                    _fun69904_ip = 313;
                    continue _fun69904
                }
            case 283:
                var11 = var4 == var8;
                var10 = undefined;
                if (var11) {
                    _fun69904_ip = 297;
                    continue _fun69904
                }
            case 292:
                var10 = var8.index;
            case 297:
                var11 = var4 != var10;
                var8 = 0;
                if (!var11) {
                    _fun69904_ip = 309;
                    continue _fun69904
                }
            case 306:
                var8 = var10;
            case 309:
                var1 = var9[var8];
            case 313:
                var8 = var5.bind(var7)(var1);
                var5 = var4 != var8;
                var1 = undefined;
                if (!var5) {
                    _fun69904_ip = 676;
                    continue _fun69904
                }
            case 330:
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var6];
                var7 = var7.bind(var2)(var5);
                if (var3) {
                    _fun69904_ip = 465;
                    continue _fun69904
                }
            case 350:
                var5 = var7.coerceChannelRoute;
                var9 = var8.state;
                var10 = var4 == var9;
                var3 = undefined;
                if (var10) {
                    _fun69904_ip = 420;
                    continue _fun69904
                }
            case 370:
                var10 = var9.routes;
                var9 = var4 == var10;
                var3 = undefined;
                if (var9) {
                    _fun69904_ip = 420;
                    continue _fun69904
                }
            case 385:
                var9 = var8.state;
                var12 = var4 == var9;
                var11 = undefined;
                if (var12) {
                    _fun69904_ip = 404;
                    continue _fun69904
                }
            case 399:
                var11 = var9.index;
            case 404:
                var12 = var4 != var11;
                var9 = 0;
                if (!var12) {
                    _fun69904_ip = 416;
                    continue _fun69904
                }
            case 413:
                var9 = var11;
            case 416:
                var3 = var10[var9];
            case 420:
                var3 = var5.bind(var7)(var3);
                var5 = var4 == var3;
                var1 = undefined;
                if (var5) {
                    _fun69904_ip = 676;
                    continue _fun69904
                }
            case 437:
                var5 = var3.params;
                var9 = var4 == var5;
                var3 = undefined;
                if (var9) {
                    _fun69904_ip = 457;
                    continue _fun69904
                }
            case 452:
                var3 = var5.channelId;
            case 457:
                var1 = var3;
                _fun69904_ip = 676;
                continue _fun69904;
            case 465:
                var5 = var7.coerceTabsRoute;
                var9 = var8.state;
                var10 = var4 == var9;
                var3 = undefined;
                if (var10) {
                    _fun69904_ip = 535;
                    continue _fun69904
                }
            case 485:
                var9 = var9.routes;
                var10 = var4 == var9;
                var3 = undefined;
                if (var10) {
                    _fun69904_ip = 535;
                    continue _fun69904
                }
            case 500:
                var8 = var8.state;
                var11 = var4 == var8;
                var10 = undefined;
                if (var11) {
                    _fun69904_ip = 519;
                    continue _fun69904
                }
            case 514:
                var10 = var8.index;
            case 519:
                var11 = var4 != var10;
                var8 = 0;
                if (!var11) {
                    _fun69904_ip = 531;
                    continue _fun69904
                }
            case 528:
                var8 = var10;
            case 531:
                var3 = var9[var8];
            case 535:
                var7 = var5.bind(var7)(var3);
                var3 = var4 != var7;
                var1 = undefined;
                if (!var3) {
                    _fun69904_ip = 676;
                    continue _fun69904
                }
            case 552:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var6 = var5.bind(var2)(var3);
                var5 = var6.coerceGuildsRoute;
                var8 = var7.state;
                var9 = var4 == var8;
                var3 = undefined;
                if (var9) {
                    _fun69904_ip = 639;
                    continue _fun69904
                }
            case 589:
                var8 = var8.routes;
                var9 = var4 == var8;
                var3 = undefined;
                if (var9) {
                    _fun69904_ip = 639;
                    continue _fun69904
                }
            case 604:
                var7 = var7.state;
                var10 = var4 == var7;
                var9 = undefined;
                if (var10) {
                    _fun69904_ip = 623;
                    continue _fun69904
                }
            case 618:
                var9 = var7.index;
            case 623:
                var10 = var4 != var9;
                var7 = 0;
                if (!var10) {
                    _fun69904_ip = 635;
                    continue _fun69904
                }
            case 632:
                var7 = var9;
            case 635:
                var3 = var8[var7];
            case 639:
                var3 = var5.bind(var6)(var3);
                var5 = var4 != var3;
                var1 = undefined;
                if (!var5) {
                    _fun69904_ip = 676;
                    continue _fun69904
                }
            case 653:
                var3 = var3.params;
                var4 = var4 == var3;
                var2 = undefined;
                if (var4) {
                    _fun69904_ip = 673;
                    continue _fun69904
                }
            case 668:
                var2 = var3.channelId;
            case 673:
                var1 = var2;
            case 676:
                _closure1_slot7 = var1;
            case 680:
                var0 = _closure1_slot7;
                return var0;
        }
    };
    var _closure1_slot8 = var4;
    var3 = function() {
        var1 = _closure1_slot8;
        var0 = undefined;
        var1 = var1.bind(var0)();
        var0 = null;
        var0 = var0 != var1;
        return var0;
    };
    var _closure1_slot9 = var3;
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
    var _closure1_slot3 = var5;
    var5 = 1;
    var9 = var7[var5];
    var5 = arg3;
    var5 = var5.bind(var0)(var9);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = null;
    var _closure1_slot7 = var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/panels/isChannelFocused.native.tsx';
    var5 = var6.bind(var7)(var5);
    var2.getFocusedChannelId = var4;
    var2.isChannelFocused = var3;
    var3 = function() {
        var4 = _closure1_slot4;
        var3 = var4.useState;
        var0 = function() { // Environment: var1
            var1 = _closure1_slot9;
            var0 = undefined;
            var0 = var1.bind(var0)();
            return var0;
        };
        var6 = var3.bind(var4)(var0);
        var5 = _closure1_slot3;
        var3 = undefined;
        var0 = 2;
        var6 = var5.bind(var3)(var6, var0);
        var0 = 0;
        var0 = var6[var0];
        var5 = 1;
        var5 = var6[var5];
        var _closure2_slot0 = var5;
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var2 = 7;
        var2 = var6[var2];
        var2 = var5.bind(var3)(var2);
        var2 = var2.bind(var3)();
        var5 = var4.useEffect;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var1
            var2 = _closure2_slot0;
            var1 = _closure1_slot9;
            var0 = undefined;
            var1 = var1.bind(var0)();
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var2 = var5.bind(var4)(var2, var3);
        var3 = var4.useEffect;
        var2 = function() { // Environment: var1
            _fun69909: for (var _fun69909_ip = 0;;) switch (_fun69909_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var4 = var2.bind(var3)();
                    var _closure3_slot0 = var4;
                    var2 = null;
                    if (!(var2 == var4)) {
                        _fun69909_ip = 49;
                        continue _fun69909
                    }
                case 47:
                    return var1;
                case 49:
                    var3 = function() {
                        var2 = _closure2_slot0;
                        var1 = _closure1_slot9;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var _closure3_slot1 = var3;
                    var2 = var4.addListener;
                    var1 = 'state';
                    var1 = var2.bind(var4)(var1, var3);
                    var0 = function() { // Environment: var0
                        var3 = _closure3_slot0;
                        var2 = var3.removeListener;
                        var1 = _closure3_slot1;
                        var0 = 'state';
                        var0 = var2.bind(var3)(var0, var1);
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
            }
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.useIsChannelFocused = var3;
    var1 = function arg0() {
        _fun69912: for (var _fun69912_ip = 0;;) switch (_fun69912_ip) {
            case 0:
                var3 = arg0;
                var1 = _closure1_slot5;
                var0 = var1.getChatOpen;
                var0 = var0.bind(var1)(var3);
                var1 = !var0;
                var0 = !var1;
                if (!var1) {
                    _fun69912_ip = 77;
                    continue _fun69912
                }
            case 30:
                var4 = _closure1_slot8;
                var1 = undefined;
                var1 = var4.bind(var1)();
                var1 = var1 === var3;
                if (!var1) {
                    _fun69912_ip = 74;
                    continue _fun69912
                }
            case 47:
                var3 = _closure1_slot6;
                var2 = var3.getState;
                var3 = var2.bind(var3)();
                var2 = var3.isVoicePanelFullscreen;
                var2 = var2.bind(var3)();
                var1 = !var2;
            case 74:
                var0 = var1;
            case 77:
                return var0;
        }
    };
    var2.isChannelFocusedForReadStateAck = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 3948, 7899, 3921, 3919, 3920, 3922, 2]);