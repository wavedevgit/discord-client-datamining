// modules/opt_in_channels/FavoritesSuggestionStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() {
        _fun41553: for (var _fun41553_ip = 0;;) switch (_fun41553_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun41553_ip = 74;
                continue _fun41553;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function() {
        _fun41556: for (var _fun41556_ip = 0;;) switch (_fun41556_ip) {
            case 0:
                var2 = _closure1_slot6;
                var0 = var2.getChannelId;
                var3 = var0.bind(var2)();
                var4 = null;
                if (!(var4 != var3)) {
                    _fun41556_ip = 324;
                    continue _fun41556
                }
            case 26:
                var2 = _closure1_slot5;
                var0 = var2.getChannel;
                var0 = var0.bind(var2)(var3);
                if (!(var4 != var0)) {
                    _fun41556_ip = 324;
                    continue _fun41556
                }
            case 47:
                var2 = var0.guild_id;
                if (!(var4 != var2)) {
                    _fun41556_ip = 324;
                    continue _fun41556
                }
            case 59:
                var2 = var0.guild_id;
                var5 = _closure1_slot10;
                var5 = var5[var3];
                if (!(var4 == var5)) {
                    _fun41556_ip = 86;
                    continue _fun41556
                }
            case 76:
                var6 = _closure1_slot10;
                var5 = 0;
                var6[var3] = var5;
            case 86:
                var5 = var0.isThread;
                var5 = var5.bind(var0)();
                if (var5) {
                    _fun41556_ip = 328;
                    continue _fun41556
                }
            case 102:
                var6 = _closure1_slot7;
                var5 = var6.isOptInEnabled;
                var5 = var5.bind(var6)(var2);
                if (!var5) {
                    _fun41556_ip = 147;
                    continue _fun41556
                }
            case 120:
                var6 = _closure1_slot7;
                var5 = var6.isChannelOrParentOptedIn;
                var0 = var0.id;
                var0 = var5.bind(var6)(var2, var0);
                if (!var0) {
                    _fun41556_ip = 328;
                    continue _fun41556
                }
            case 147:
                var5 = _closure1_slot10;
                var0 = var5[var3];
                var0 = var0 + 1;
                var5[var3] = var0;
                var0 = _closure1_slot8;
                var0 = var0[var2];
                if (!(var4 == var0)) {
                    _fun41556_ip = 210;
                    continue _fun41556
                }
            case 174:
                var5 = _closure1_slot8;
                var0 = global;
                var0 = var0.Set;
                var6 = var0.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var0
                    }
                });
                var9 = var6;
                var0 = new var9[var0](var8);
                var0 = var0 instanceof Object ? var0 : var6;
                var5[var2] = var0;
            case 210:
                var5 = _closure1_slot7;
                var0 = var5.isFavorite;
                var0 = var0.bind(var5)(var2, var3);
                if (var0) {
                    _fun41556_ip = 306;
                    continue _fun41556
                }
            case 229:
                var0 = _closure1_slot9;
                var0 = var0[var2];
                if (!(var4 != var0)) {
                    _fun41556_ip = 264;
                    continue _fun41556
                }
            case 241:
                var0 = _closure1_slot9;
                var5 = var0[var2];
                var0 = var5.has;
                var5 = var0.bind(var5)(var3);
                var0 = undefined;
                if (var5) {
                    _fun41556_ip = 304;
                    continue _fun41556
                }
            case 264:
                var5 = _closure1_slot10;
                var6 = var5[var3];
                var5 = 50;
                var5 = var6 > var5;
                var0 = undefined;
                if (!var5) {
                    _fun41556_ip = 304;
                    continue _fun41556
                }
            case 284:
                var5 = _closure1_slot8;
                var6 = var5[var2];
                var5 = var6.add;
                var5 = var5.bind(var6)(var3);
                var0 = true;
            case 304:
                return var0;
            case 306:
                var0 = _closure1_slot8;
                var5 = var0[var2];
                var0 = var5.delete;
                var0 = var0.bind(var5)(var3);
            case 324:
                var0 = undefined;
                return var0;
            case 328:
                var0 = _closure1_slot10;
                var0 = delete var0[var3];
                var0 = _closure1_slot8;
                var0 = var0[var2];
                var0 = var4 != var0;
                if (!var0) {
                    _fun41556_ip = 369;
                    continue _fun41556
                }
            case 351:
                var1 = _closure1_slot8;
                var2 = var1[var2];
                var1 = var2.delete;
                var0 = var1.bind(var2)(var3);
            case 369:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 5;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 6;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 7;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = {};
    var _closure1_slot8 = var1;
    var1 = {};
    var _closure1_slot9 = var1;
    var1 = {};
    var _closure1_slot10 = var1;
    var1 = 8;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun41558: for (var _fun41558_ip = 0;;) switch (_fun41558_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun41558_ip = 69;
                        continue _fun41558
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun41558_ip = 105;
                    continue _fun41558;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            _fun41559: for (var _fun41559_ip = 0;;) switch (_fun41559_ip) {
                case 0:
                    var0 = arg0;
                    var5 = this;
                    var6 = var5.waitFor;
                    var4 = _closure1_slot5;
                    var3 = _closure1_slot6;
                    var2 = _closure1_slot7;
                    var2 = var6.bind(var5)(var4, var3, var2);
                    var4 = var5.syncWith;
                    var2 = _closure1_slot6;
                    var3 = new Array(1);
                    var3[0] = var2;
                    var2 = _closure1_slot12;
                    var2 = var4.bind(var5)(var3, var2);
                    var2 = null;
                    if (!(var2 != var0)) {
                        _fun41559_ip = 297;
                        continue _fun41559
                    }
                case 71:
                    var10 = var0.suggestedChannels;
                    var9 = var0.dismissedSuggestions;
                    var0 = var0.channelOpensByChannelId;
                    if (!(var2 != var10)) {
                        _fun41559_ip = 188;
                        continue _fun41559
                    }
                case 93:
                    var7 = var10;
                    var3 = global;
                    for (var4 in var7)
                        case 106: {
                            case 115: var13 = var4;
                            var12 = _closure1_slot8;
                            var15 = var3.Set;
                            var18 = var10[var13];
                            var14 = var15.prototype;
                            var14 = Object.create(var14, {
                                constructor: {
                                    value: var15
                                }
                            });
                            var19 = var14;
                            var11 = new var19[var15](var18, var17);
                            var11 = var11 instanceof Object ? var11 : var14;
                            if (!(var2 == var11)) {
                                _fun41559_ip = 182;
                                continue _fun41559
                            }
                            case 156: var14 = var3.Set;
                            var15 = var14.prototype;
                            var15 = Object.create(var15, {
                                constructor: {
                                    value: var14
                                }
                            });
                            var19 = var15;
                            var14 = new var19[var14](var18);
                            var11 = var14 instanceof Object ? var14 : var15;
                            case 182: var12[var13] = var11;
                            _fun41559_ip = 106;
                            continue _fun41559;
                        }
                case 188:
                    if (!(var2 != var9)) {
                        _fun41559_ip = 287;
                        continue _fun41559
                    }
                case 192:
                    var7 = var9;
                    var3 = global;
                    for (var4 in var7)
                        case 205: {
                            case 214: var12 = var4;
                            var11 = _closure1_slot9;
                            var14 = var3.Set;
                            var18 = var9[var12];
                            var13 = var14.prototype;
                            var13 = Object.create(var13, {
                                constructor: {
                                    value: var14
                                }
                            });
                            var19 = var13;
                            var10 = new var19[var14](var18, var17);
                            var10 = var10 instanceof Object ? var10 : var13;
                            if (!(var2 == var10)) {
                                _fun41559_ip = 281;
                                continue _fun41559
                            }
                            case 255: var13 = var3.Set;
                            var14 = var13.prototype;
                            var14 = Object.create(var14, {
                                constructor: {
                                    value: var13
                                }
                            });
                            var19 = var14;
                            var13 = new var19[var13](var18);
                            var10 = var13 instanceof Object ? var13 : var14;
                            case 281: var11[var12] = var10;
                            _fun41559_ip = 205;
                            continue _fun41559;
                        }
                case 287:
                    if (!(var2 == var0)) {
                        _fun41559_ip = 293;
                        continue _fun41559
                    }
                case 291:
                    var0 = {};
                case 293:
                    _closure1_slot10 = var0;
                case 297:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'getSuggestedChannelId';
        var4.key = var6;
        var6 = function() {
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var5 = function() {
            var0 = {};
            var1 = {};
            var0.suggestedChannels = var1;
            var1 = {};
            var0.dismissedSuggestions = var1;
            var1 = {};
            var0.channelOpensByChannelId = var1;
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'FavoritesSuggestionStore';
    var6.displayName = var1;
    var6.persistKey = var1;
    var1 = 9;
    var1 = var4[var1];
    var10 = var5.bind(var0)(var1);
    var1 = {};
    var3 = function arg0() {
        _fun41562: for (var _fun41562_ip = 0;;) switch (_fun41562_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var2 = var0.channelId;
                var3 = _closure1_slot9;
                var4 = var3[var1];
                var3 = null;
                if (!(var3 == var4)) {
                    _fun41562_ip = 66;
                    continue _fun41562
                }
            case 30:
                var4 = _closure1_slot9;
                var3 = global;
                var3 = var3.Set;
                var5 = var3.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var3
                    }
                });
                var7 = var5;
                var3 = new var7[var3](var6);
                var3 = var3 instanceof Object ? var3 : var5;
                var4[var1] = var3;
            case 66:
                var3 = _closure1_slot9;
                var4 = var3[var1];
                var3 = var4.add;
                var3 = var3.bind(var4)(var2);
                var0 = _closure1_slot8;
                var1 = var0[var1];
                var0 = var1.delete;
                var0 = var0.bind(var1)(var2);
                var0 = true;
                return var0;
        }
    };
    var1.DISMISS_FAVORITE_SUGGESTION = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var11 = var3;
    var9 = var1;
    var1 = new var11[var6](var10, var9, var8);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 10;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/opt_in_channels/FavoritesSuggestionStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1372, 1670, 4303, 566, 806, 2]);