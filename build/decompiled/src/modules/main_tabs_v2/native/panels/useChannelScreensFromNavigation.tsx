// modules/main_tabs_v2/native/panels/useChannelScreensFromNavigation.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var3 = function arg0() {
        _fun100695: for (var _fun100695_ip = 0;;) switch (_fun100695_ip) {
            case 0:
                var2 = arg0;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun100695_ip = 183;
                    continue _fun100695
                }
            case 12:
                var3 = var2.state;
                var5 = var1 == var3;
                var4 = undefined;
                var0 = undefined;
                if (var5) {
                    _fun100695_ip = 93;
                    continue _fun100695
                }
            case 28:
                var5 = var3.routes;
                var6 = var2.state;
                var7 = var1 == var6;
                var3 = undefined;
                if (var7) {
                    _fun100695_ip = 53;
                    continue _fun100695
                }
            case 48:
                var3 = var6.index;
            case 53:
                if (!(var1 == var3)) {
                    _fun100695_ip = 89;
                    continue _fun100695
                }
            case 57:
                var6 = var2.state;
                var8 = var1 == var6;
                var7 = undefined;
                if (var8) {
                    _fun100695_ip = 82;
                    continue _fun100695
                }
            case 71:
                var6 = var6.routes;
                var7 = var6.length;
            case 82:
                var6 = 1;
                var3 = var7 - var6;
            case 89:
                var0 = var5[var3];
            case 93:
                if (!(var1 == var0)) {
                    _fun100695_ip = 244;
                    continue _fun100695
                }
            case 100:
                var5 = var2.params;
                var6 = var1 == var5;
                var3 = undefined;
                if (var6) {
                    _fun100695_ip = 121;
                    continue _fun100695
                }
            case 115:
                var3 = var5.screen;
            case 121:
                if (!(var1 == var3)) {
                    _fun100695_ip = 199;
                    continue _fun100695
                }
            case 125:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 7;
                var3 = var6[var3];
                var5 = var5.bind(var4)(var3);
                var3 = var5.getRootNavigationRef;
                var3 = var3.bind(var5)();
                var1 = var1 == var3;
                var4 = undefined;
                if (var1) {
                    _fun100695_ip = 177;
                    continue _fun100695
                }
            case 167:
                var1 = var3.isReady;
                var4 = var1.bind(var3)();
            case 177:
                var1 = true;
                if (!(var1 !== var4)) {
                    _fun100695_ip = 187;
                    continue _fun100695
                }
            case 183:
                var1 = undefined;
                return var1;
            case 187:
                var1 = var3.getCurrentRoute;
                var1 = var1.bind(var3)();
                return var1;
            case 199:
                var1 = {};
                var3 = 'resolved';
                var1.key = var3;
                var3 = var2.params;
                var3 = var3.screen;
                var1.name = var3;
                var2 = var2.params;
                var2 = var2.params;
                var1.params = var2;
                return var1;
            case 244:
                return var0;
        }
    };
    var _closure1_slot11 = var3;
    var0 = function arg0() {
        _fun100696: for (var _fun100696_ip = 0;;) switch (_fun100696_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.routes;
                var7 = 0;
                var2 = var0[var7];
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 8;
                var0 = var0[var6];
                var3 = undefined;
                var1 = var1.bind(var3)(var0);
                var0 = var1.coerceTabsRoute;
                var1 = var0.bind(var1)(var2);
                var5 = null;
                if (!(var5 != var1)) {
                    _fun100696_ip = 309;
                    continue _fun100696
                }
            case 60:
                var0 = _closure1_slot11;
                var2 = var0.bind(var3)(var1);
                if (!(var5 != var2)) {
                    _fun100696_ip = 303;
                    continue _fun100696
                }
            case 76:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var6];
                var1 = var1.bind(var3)(var0);
                var0 = var1.coerceGuildsRoute;
                var6 = var0.bind(var1)(var2);
                if (!(var5 != var6)) {
                    _fun100696_ip = 297;
                    continue _fun100696
                }
            case 111:
                var0 = var6.params;
                var1 = var5 == var0;
                var2 = undefined;
                if (var1) {
                    _fun100696_ip = 131;
                    continue _fun100696
                }
            case 126:
                var2 = var0.guildId;
            case 131:
                var0 = var6.params;
                var8 = var5 == var0;
                var1 = undefined;
                if (var8) {
                    _fun100696_ip = 151;
                    continue _fun100696
                }
            case 146:
                var1 = var0.channelId;
            case 151:
                var8 = var5 != var1;
                var0 = undefined;
                if (!var8) {
                    _fun100696_ip = 163;
                    continue _fun100696
                }
            case 160:
                var0 = var1;
            case 163:
                if (!(var5 != var0)) {
                    _fun100696_ip = 291;
                    continue _fun100696
                }
            case 170:
                var1 = _closure1_slot9;
                var1 = var1.bind(var3)(var0);
                if (var1) {
                    _fun100696_ip = 206;
                    continue _fun100696
                }
            case 182:
                var8 = _closure1_slot5;
                var1 = var8.getChannel;
                var1 = var1.bind(var8)(var0);
                if (!(var5 == var1)) {
                    _fun100696_ip = 206;
                    continue _fun100696
                }
            case 200:
                var1 = new Array(0);
                return var1;
            case 206:
                var1 = {};
                var1.index = var7;
                var6 = var6.params;
                var7 = var5 == var6;
                var3 = undefined;
                if (var7) {
                    _fun100696_ip = 233;
                    continue _fun100696
                }
            case 227:
                var3 = var6.search;
            case 233:
                if (!(var5 != var3)) {
                    _fun100696_ip = 240;
                    continue _fun100696
                }
            case 237:
                if (var3) {
                    _fun100696_ip = 252;
                    continue _fun100696
                }
            case 240:
                var3 = _closure1_slot10;
                var3 = var3.BACKGROUND_SAVED;
                _fun100696_ip = 262;
                continue _fun100696;
            case 252:
                var4 = _closure1_slot10;
                var3 = var4.FALLBACK_RENDERED;
            case 262:
                var1.type = var3;
                var1.guildId = var2;
                var1.channelId = var0;
                var0 = false;
                var1.showCreateThread = var0;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
            case 291:
                var0 = new Array(0);
                return var0;
            case 297:
                var0 = new Array(0);
                return var0;
            case 303:
                var0 = new Array(0);
                return var0;
            case 309:
                var0 = new Array(0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0, arg1() {
        _fun100697: for (var _fun100697_ip = 0;;) switch (_fun100697_ip) {
            case 0:
                var7 = arg0;
                var4 = new Array(0);
                var0 = var7.index;
                var3 = 0;
                var0 = var3 <= var0;
                var9 = 8;
                var6 = undefined;
                var8 = null;
                var2 = 0;
                if (!var0) {
                    _fun100697_ip = 177;
                    continue _fun100697
                }
            case 38:
                var0 = var7.routes;
                var11 = var0[var2];
                var10 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var9];
                var10 = var10.bind(var6)(var0);
                var0 = var10.coerceChannelRoute;
                var11 = var0.bind(var10)(var11);
                if (!(var8 != var11)) {
                    _fun100697_ip = 162;
                    continue _fun100697
                }
            case 80:
                var10 = var4.push;
                var0 = {};
                var12 = var4.length;
                var0.index = var12;
                var12 = _closure1_slot10;
                var12 = var12.DEFAULT;
                var0.type = var12;
                var12 = var11.params;
                var12 = var12.guildId;
                var0.guildId = var12;
                var12 = var11.params;
                var12 = var12.channelId;
                var0.channelId = var12;
                var11 = var11.params;
                var11 = var11.showCreateThread;
                var0.showCreateThread = var11;
                var0 = var10.bind(var4)(var0);
            case 162:
                var2 = var2 + 1;
                var0 = var7.index;
                if (var2 <= var0) {
                    _fun100697_ip = 38;
                    continue _fun100697
                }
            case 177:
                var0 = arg1;
                var0 = var0.isChatLockedOpen;
                if (!var0) {
                    _fun100697_ip = 211;
                    continue _fun100697
                }
            case 189:
                var0 = _closure1_slot12;
                var2 = var0.bind(var6)(var7);
                var _closure2_slot0 = var2;
                var0 = var2.length;
                if (!(!(var0 > var3))) {
                    _fun100697_ip = 234;
                    continue _fun100697
                }
            case 211:
                var8 = var4.length;
                var0 = var4;
                if (!(!(var8 > var3))) {
                    _fun100697_ip = 232;
                    continue _fun100697
                }
            case 223:
                var5 = _closure1_slot12;
                var0 = var5.bind(var6)(var7);
            case 232:
                return var0;
            case 234:
                var0 = new Array(0);
                var15 = var0;
                var14 = var2;
                var13 = 0;
                var13 = arraySpread(var15, var14, var13);
                var3 = var4.map;
                var1 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var0 = {};
                    var4 = var0;
                    var3 = var1;
                    var2 = copyDataProperties(var4, var3);
                    var2 = var1.index;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    var2 = var2 + var1;
                    var1 = 'index';
                    var0[var1] = var2;
                    return var0;
                };
                var14 = var3.bind(var4)(var1);
                var15 = var0;
                var1 = arraySpread(var15, var14, var13);
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var10 = 0;
    var4 = var7[var10];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var9 = 1;
    var8 = var7[var9];
    var4 = arg3;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot4 = var4;
    var8 = 2;
    var4 = var7[var8];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var4 = var4.ME;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var4 = var4.isStaticChannelRoute;
    var _closure1_slot9 = var4;
    var4 = {};
    var4.DEFAULT = var10;
    var5 = 'DEFAULT';
    var4[var10] = var5;
    var4.BACKGROUND_SAVED = var9;
    var5 = 'BACKGROUND_SAVED';
    var4[var9] = var5;
    var4.FALLBACK_RENDERED = var8;
    var5 = 'FALLBACK_RENDERED';
    var4[var8] = var5;
    var _closure1_slot10 = var4;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/panels/useChannelScreensFromNavigation.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function arg0() {
        var6 = arg0;
        var _closure2_slot0 = var6;
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 9;
        var2 = var4[var2];
        var7 = undefined;
        var2 = var3.bind(var7)(var2);
        var2 = var2.bind(var7)();
        var _closure2_slot1 = var2;
        var4 = _closure1_slot4;
        var5 = var4.useState;
        var3 = function() { // Environment: var1
            _fun100700: for (var _fun100700_ip = 0;;) switch (_fun100700_ip) {
                case 0:
                    var3 = _closure1_slot13;
                    var2 = _closure2_slot0;
                    var1 = var2.getState;
                    var2 = var1.bind(var2)();
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    var1 = var0.length;
                    var6 = 0;
                    if (!(!(var1 > var6))) {
                        _fun100700_ip = 134;
                        continue _fun100700
                    }
                case 47:
                    var2 = _closure1_slot7;
                    var1 = var2.getGuildId;
                    var3 = var1.bind(var2)();
                    var2 = _closure1_slot6;
                    var1 = var2.getChannelId;
                    var1 = var1.bind(var2)();
                    var5 = null;
                    if (!(var5 != var1)) {
                        _fun100700_ip = 127;
                        continue _fun100700
                    }
                case 81:
                    var2 = {};
                    var2.index = var6;
                    var6 = _closure1_slot10;
                    var6 = var6.FALLBACK_RENDERED;
                    var2.type = var6;
                    if (!(var5 == var3)) {
                        _fun100700_ip = 109;
                        continue _fun100700
                    }
                case 105:
                    var3 = _closure1_slot8;
                case 109:
                    var2.guildId = var3;
                    var2.channelId = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    _fun100700_ip = 131;
                    continue _fun100700;
                case 127:
                    var1 = new Array(0);
                case 131:
                    var0 = var1;
                case 134:
                    return var0;
            }
        };
        var5 = var5.bind(var4)(var3);
        var3 = _closure1_slot3;
        var0 = 2;
        var5 = var3.bind(var7)(var5, var0);
        var0 = 0;
        var0 = var5[var0];
        var3 = 1;
        var3 = var5[var3];
        var _closure2_slot2 = var3;
        var7 = var4.useCallback;
        var5 = function(arg0) { // Environment: var1
            _fun100701: for (var _fun100701_ip = 0;;) switch (_fun100701_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun100701_ip = 20;
                        continue _fun100701
                    }
                case 9:
                    var1 = var2.length;
                    var0 = 0;
                    if (!(!(var1 > var0))) {
                        _fun100701_ip = 45;
                        continue _fun100701
                    }
                case 20:
                    var3 = _closure2_slot2;
                    var1 = undefined;
                    var0 = function(arg0) { // Environment: var0
                        _fun100702: for (var _fun100702_ip = 0;;) switch (_fun100702_ip) {
                            case 0:
                                var4 = arg0;
                                var1 = var4.length;
                                var3 = 0;
                                var0 = var4;
                                if (!(var3 !== var1)) {
                                    _fun100702_ip = 89;
                                    continue _fun100702
                                }
                            case 17:
                                var1 = var4[var3];
                                var5 = var1.type;
                                var2 = _closure1_slot10;
                                var2 = var2.FALLBACK_RENDERED;
                                var0 = var4;
                                if (!(var5 !== var2)) {
                                    _fun100702_ip = 89;
                                    continue _fun100702
                                }
                            case 46:
                                var2 = {};
                                var6 = var4[var3];
                                var7 = var2;
                                var3 = copyDataProperties(var7, var6);
                                var1 = _closure1_slot10;
                                var3 = var1.FALLBACK_RENDERED;
                                var1 = 'type';
                                var2[var1] = var3;
                                var1 = new Array(1);
                                var1[0] = var2;
                                var0 = var1;
                            case 89:
                                return var0;
                        }
                    };
                    var0 = var3.bind(var1)(var0);
                    _fun100701_ip = 59;
                    continue _fun100701;
                case 45:
                    var1 = _closure2_slot2;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                case 59:
                    var0 = undefined;
                    return var0;
            }
        };
        var3 = new Array(0);
        var5 = var7.bind(var4)(var5, var3);
        var _closure2_slot3 = var5;
        var7 = var4.useEffect;
        var3 = new Array(3);
        var3[0] = var6;
        var3[1] = var2;
        var3[2] = var5;
        var2 = function() { // Environment: var1
            var4 = _closure1_slot13;
            var2 = _closure2_slot0;
            var0 = var2.getState;
            var3 = var0.bind(var2)();
            var2 = _closure2_slot1;
            var0 = undefined;
            var2 = var4.bind(var0)(var3, var2);
            var1 = _closure2_slot3;
            var1 = var1.bind(var0)(var2);
            return var0;
        };
        var2 = var7.bind(var4)(var2, var3);
        var3 = var4.useEffect;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() { // Environment: var1
            var4 = function arg0() {
                var3 = _closure1_slot13;
                var1 = arg0;
                var1 = var1.data;
                var2 = var1.state;
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 9;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var1);
                var1 = var4.getChatLayout;
                var1 = var1.bind(var4)();
                var2 = var3.bind(var0)(var2, var1);
                var1 = _closure2_slot3;
                var1 = var1.bind(var0)(var2);
                return var0;
            };
            var _closure3_slot0 = var4;
            var3 = _closure2_slot0;
            var2 = var3.addListener;
            var1 = 'state';
            var1 = var2.bind(var3)(var1, var4);
            var0 = function() { // Environment: var0
                var3 = _closure2_slot0;
                var2 = var3.removeListener;
                var1 = _closure3_slot0;
                var0 = 'state';
                var0 = var2.bind(var3)(var0, var1);
                var0 = undefined;
                return var0;
            };
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.default = var5;
    var2.ChannelScreenType = var4;
    var2.getActiveTabsRoute = var3;
    var1 = function arg0() {
        _fun100707: for (var _fun100707_ip = 0;;) switch (_fun100707_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.routes;
                var0 = 0;
                var3 = var1[var0];
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 8;
                var0 = var0[var6];
                var5 = undefined;
                var2 = var2.bind(var5)(var0);
                var0 = var2.coerceTabsRoute;
                var3 = var0.bind(var2)(var3);
                var2 = null;
                if (!(var2 != var3)) {
                    _fun100707_ip = 107;
                    continue _fun100707
                }
            case 57:
                var0 = _closure1_slot11;
                var4 = var0.bind(var5)(var3);
                var0 = var2 != var4;
                if (!var0) {
                    _fun100707_ip = 105;
                    continue _fun100707
                }
            case 73:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var3 = var3.bind(var5)(var1);
                var1 = var3.coerceGuildsRoute;
                var1 = var1.bind(var3)(var4);
                var0 = var2 != var1;
            case 105:
                return var0;
            case 107:
                var0 = false;
                return var0;
        }
    };
    var2.isActiveTabsGuilds = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1372, 1670, 3215, 660, 1379, 3922, 3921, 3924, 2]);