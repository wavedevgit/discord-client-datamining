// modules/channel/useChannelName.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var6 = function arg0, arg1, arg2() {
        _fun44205: for (var _fun44205_ip = 0;;) switch (_fun44205_ip) {
            case 0:
                var3 = arg0;
                var8 = arg1;
                var1 = arg2;
                var _closure2_slot0 = var1;
                var2 = var3.map;
                var1 = var8.getUser;
                var3 = var2.bind(var3)(var1);
                var2 = var3.filter;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 5;
                var1 = var6[var1];
                var7 = undefined;
                var1 = var4.bind(var7)(var1);
                var1 = var1.isNotNullish;
                var2 = var2.bind(var3)(var1);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    _fun44206: for (var _fun44206_ip = 0;;) switch (_fun44206_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure2_slot0;
                            var1 = var2.getNickname;
                            var0 = var3.id;
                            var0 = var1.bind(var2)(var0);
                            var1 = null;
                            if (!(var1 == var0)) {
                                _fun44206_ip = 68;
                                continue _fun44206
                            }
                        case 32:
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 6;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            var1 = var2.getName;
                            var0 = var1.bind(var2)(var3);
                        case 68:
                            return var0;
                    }
                };
                var3 = var1.bind(var2)(var0);
                var1 = var3.length;
                var0 = 0;
                if (!(!(var1 > var0))) {
                    _fun44205_ip = 200;
                    continue _fun44205
                }
            case 98:
                var1 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 7;
                var2 = var9[var0];
                var2 = var1.bind(var7)(var2);
                var4 = var2.intl;
                var2 = var4.formatToPlainString;
                var0 = var9[var0];
                var0 = var1.bind(var7)(var0);
                var0 = var0.t;
                var1 = var0["9Uk8PF"];
                var0 = {};
                var6 = _closure1_slot1;
                var5 = 6;
                var5 = var9[var5];
                var7 = var6.bind(var7)(var5);
                var6 = var7.getName;
                var5 = var8.getCurrentUser;
                var5 = var5.bind(var8)();
                var5 = var6.bind(var7)(var5);
                var0.name = var5;
                var0 = var2.bind(var4)(var1, var0);
                _fun44205_ip = 216;
                continue _fun44205;
            case 200:
                var2 = var3.join;
                var1 = ', ';
                var0 = var2.bind(var3)(var1);
            case 216:
                return var0;
        }
    };
    var _closure1_slot8 = var6;
    var5 = function arg0, arg1, arg2() {
        var4 = _closure1_slot8;
        var0 = arg0;
        var3 = var0.recipients;
        var2 = undefined;
        var1 = arg1;
        var0 = arg2;
        var0 = var4.bind(var2)(var3, var1, var0);
        return var0;
    };
    var _closure1_slot9 = var5;
    var4 = function arg0, arg1, arg2() {
        _fun44208: for (var _fun44208_ip = 0;;) switch (_fun44208_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var7 = arg2;
                var3 = arguments[3];
                var5 = arguments[4];
                var4 = undefined;
                if (!(var3 === var4)) {
                    _fun44208_ip = 23;
                    continue _fun44208
                }
            case 21:
                var3 = false;
            case 23:
                if (!(var5 === var4)) {
                    _fun44208_ip = 29;
                    continue _fun44208
                }
            case 27:
                var5 = false;
            case 29:
                var0 = var2.isObfuscated;
                var6 = var0.bind(var2)();
                if (var6) {
                    _fun44208_ip = 635;
                    continue _fun44208
                }
            case 48:
                var8 = var2.type;
                var6 = _closure1_slot7;
                var6 = var6.DM;
                if (!(var6 !== var8)) {
                    _fun44208_ip = 417;
                    continue _fun44208
                }
            case 70:
                var6 = _closure1_slot7;
                var6 = var6.GROUP_DM;
                if (!(var6 !== var8)) {
                    _fun44208_ip = 384;
                    continue _fun44208
                }
            case 87:
                var6 = _closure1_slot7;
                var6 = var6.GUILD_ANNOUNCEMENT;
                if (!(var6 !== var8)) {
                    _fun44208_ip = 347;
                    continue _fun44208
                }
            case 104:
                var6 = _closure1_slot7;
                var6 = var6.GUILD_TEXT;
                if (!(var6 !== var8)) {
                    _fun44208_ip = 347;
                    continue _fun44208
                }
            case 121:
                var6 = _closure1_slot7;
                var6 = var6.GUILD_FORUM;
                if (!(var6 !== var8)) {
                    _fun44208_ip = 347;
                    continue _fun44208
                }
            case 138:
                var6 = _closure1_slot7;
                var6 = var6.GUILD_MEDIA;
                if (!(var6 !== var8)) {
                    _fun44208_ip = 347;
                    continue _fun44208
                }
            case 155:
                var6 = _closure1_slot7;
                var6 = var6.PUBLIC_THREAD;
                if (!(var6 !== var8)) {
                    _fun44208_ip = 246;
                    continue _fun44208
                }
            case 169:
                var6 = _closure1_slot7;
                var6 = var6.PRIVATE_THREAD;
                if (!(var6 !== var8)) {
                    _fun44208_ip = 246;
                    continue _fun44208
                }
            case 183:
                var6 = _closure1_slot7;
                var6 = var6.ANNOUNCEMENT_THREAD;
                if (!(var6 !== var8)) {
                    _fun44208_ip = 246;
                    continue _fun44208
                }
            case 197:
                var6 = _closure1_slot7;
                var6 = var6.GUILD_VOICE;
                if (!(var6 !== var8)) {
                    _fun44208_ip = 246;
                    continue _fun44208
                }
            case 211:
                var6 = _closure1_slot7;
                var6 = var6.GUILD_STAGE_VOICE;
                if (!(var6 !== var8)) {
                    _fun44208_ip = 246;
                    continue _fun44208
                }
            case 225:
                var6 = _closure1_slot7;
                var6 = var6.GUILD_CATEGORY;
                if (!(var6 !== var8)) {
                    _fun44208_ip = 246;
                    continue _fun44208
                }
            case 239:
                var6 = var2.name;
                return var6;
            case 246:
                if (var5) {
                    _fun44208_ip = 302;
                    continue _fun44208
                }
            case 249:
                if (!var3) {
                    _fun44208_ip = 265;
                    continue _fun44208
                }
            case 252:
                var5 = var2.isThread;
                var5 = var5.bind(var2)();
                if (var5) {
                    _fun44208_ip = 272;
                    continue _fun44208
                }
            case 265:
                var5 = var2.name;
                _fun44208_ip = 300;
                continue _fun44208;
            case 272:
                var9 = var2.name;
                var6 = global;
                var6 = var6.HermesInternal;
                var8 = var6.concat;
                var6 = '"';
                var5 = var8.bind(var6)(var9, var6);
            case 300:
                _fun44208_ip = 345;
                continue _fun44208;
            case 302:
                var8 = _closure1_slot11;
                var6 = var2.name;
                var10 = var8.bind(var4)(var6);
                var6 = global;
                var6 = var6.HermesInternal;
                var9 = var6.concat;
                var8 = '#"';
                var6 = '"';
                var5 = var9.bind(var8)(var10, var6);
            case 345:
                return var5;
            case 347:
                var9 = var2.name;
                if (var3) {
                    _fun44208_ip = 360;
                    continue _fun44208
                }
            case 355:
                var5 = var9;
                _fun44208_ip = 382;
                continue _fun44208;
            case 360:
                var6 = global;
                var6 = var6.HermesInternal;
                var8 = var6.concat;
                var6 = '#';
                var5 = var8.bind(var6)(var9);
            case 382:
                return var5;
            case 384:
                var6 = var2.name;
                var5 = '';
                if (!(var5 === var6)) {
                    _fun44208_ip = 410;
                    continue _fun44208
                }
            case 397:
                var5 = _closure1_slot9;
                var5 = var5.bind(var4)(var2, var1, var7);
                _fun44208_ip = 415;
                continue _fun44208;
            case 410:
                var5 = var2.name;
            case 415:
                return var5;
            case 417:
                var5 = var2.recipients;
                var2 = var5.map;
                var1 = var1.getUser;
                var5 = var2.bind(var5)(var1);
                var2 = var5.filter;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 5;
                var1 = var8[var1];
                var1 = var6.bind(var4)(var1);
                var1 = var1.isNotNullish;
                var5 = var2.bind(var5)(var1);
                var2 = _closure1_slot3;
                var1 = 1;
                var2 = var2.bind(var4)(var5, var1);
                var1 = 0;
                var1 = var2[var1];
                var5 = null;
                if (!(var5 != var1)) {
                    _fun44208_ip = 627;
                    continue _fun44208
                }
            case 503:
                var2 = var1.isProvisional;
                if (!var2) {
                    _fun44208_ip = 522;
                    continue _fun44208
                }
            case 512:
                var2 = var1.globalName;
                if (!(var5 == var2)) {
                    _fun44208_ip = 619;
                    continue _fun44208
                }
            case 522:
                var6 = var7.getNickname;
                var2 = var1.id;
                var2 = var6.bind(var7)(var2);
                if (!(var5 == var2)) {
                    _fun44208_ip = 573;
                    continue _fun44208
                }
            case 542:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 6;
                var6 = var8[var6];
                var7 = var7.bind(var4)(var6);
                var6 = var7.getName;
                var2 = var6.bind(var7)(var1);
            case 573:
                var5 = var5 != var2;
                var6 = '???';
                if (!var5) {
                    _fun44208_ip = 589;
                    continue _fun44208
                }
            case 586:
                var6 = var2;
            case 589:
                var2 = var6;
                if (!var3) {
                    _fun44208_ip = 617;
                    continue _fun44208
                }
            case 595:
                var3 = global;
                var3 = var3.HermesInternal;
                var5 = var3.concat;
                var3 = '@';
                var2 = var5.bind(var3)(var6);
            case 617:
                return var2;
            case 619:
                var1 = var1.globalName;
                return var1;
            case 627:
                var1 = '???';
                return var1;
            case 635:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 7;
                var1 = var5[var0];
                var1 = var3.bind(var4)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0["/YzI63"];
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot10 = var4;
    var3 = function arg0() {
        var3 = arg0;
        var2 = var3.replace;
        var1 = /\\/g;
        var0 = '\\\\';
        var3 = var2.bind(var3)(var1, var0);
        var2 = var3.replace;
        var1 = /"/g;
        var0 = '\\"';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot11 = var3;
    var0 = global;
    var12 = var0.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var11.bind(var12)(var2, var0, var7);
    var0 = 0;
    var7 = var9[var0];
    var0 = undefined;
    var7 = var10.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var7 = var7.ChannelTypes;
    var _closure1_slot7 = var7;
    var7 = 9;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/channel/useChannelName.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function arg0() {
        _fun44210: for (var _fun44210_ip = 0;;) switch (_fun44210_ip) {
            case 0:
                var1 = arguments[1];
                var2 = arg0;
                var _closure2_slot0 = var2;
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun44210_ip = 20;
                    continue _fun44210
                }
            case 18:
                var1 = false;
            case 20:
                var _closure2_slot1 = var1;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 8;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.useStateFromStores;
                var5 = _closure1_slot6;
                var1 = new Array(3);
                var1[0] = var5;
                var5 = _closure1_slot4;
                var1[1] = var5;
                var4 = _closure1_slot5;
                var1[2] = var4;
                var0 = function() { // Environment: var0
                    _fun44211: for (var _fun44211_ip = 0;;) switch (_fun44211_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 == var2;
                            if (var2) {
                                _fun44211_ip = 45;
                                continue _fun44211
                            }
                        case 16:
                            var6 = _closure1_slot10;
                            var10 = _closure2_slot0;
                            var9 = _closure1_slot6;
                            var8 = _closure1_slot5;
                            var7 = _closure2_slot1;
                            var11 = undefined;
                            var0 = var11[var6](var10, var9, var8, var7, var6);
                        case 45:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var7;
    var2.computeDefaultGroupDmNameFromUserIds = var6;
    var2.computeDefaultGroupDmName = var5;
    var5 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var5 = _closure1_slot6;
        var1 = new Array(2);
        var1[0] = var5;
        var4 = _closure1_slot5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun44213: for (var _fun44213_ip = 0;;) switch (_fun44213_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var3 = null;
                    var1 = var3 != var0;
                    var0 = null;
                    if (!var1) {
                        _fun44213_ip = 65;
                        continue _fun44213
                    }
                case 18:
                    var4 = _closure2_slot0;
                    var1 = var4.isMultiUserDM;
                    var1 = var1.bind(var4)();
                    var0 = null;
                    if (!var1) {
                        _fun44213_ip = 65;
                        continue _fun44213
                    }
                case 37:
                    var5 = _closure1_slot9;
                    var4 = _closure2_slot0;
                    var3 = _closure1_slot6;
                    var2 = _closure1_slot5;
                    var1 = undefined;
                    var0 = var5.bind(var1)(var4, var3, var2);
                case 65:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useComputedGroupDmName = var5;
    var2.computeChannelName = var4;
    var2.escapeChannelName = var3;
    var1 = function arg0() {
        var3 = arg0;
        var2 = var3.replace;
        var1 = /\\"/g;
        var0 = '"';
        var3 = var2.bind(var3)(var1, var0);
        var2 = var3.replace;
        var1 = /\\\\/g;
        var0 = '\\';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.unescapeChannelName = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1590, 3102, 1621, 660, 1304, 3238, 1234, 566, 2]);