// modules/hub/HubProgressActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun67290: for (var _fun67290_ip = 0;;) switch (_fun67290_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun67290_ip = 45;
                    continue _fun67290
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun67290_ip = 54;
                    continue _fun67290
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun67290_ip = 344;
                    continue _fun67290
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun67290_ip = 322;
                    continue _fun67290
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun67290_ip = 282;
                    continue _fun67290
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun67290_ip = 269;
                    continue _fun67290
                }
            case 109:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun67290_ip = 162;
                    continue _fun67290
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun67290_ip = 178;
                    continue _fun67290
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun67290_ip = 248;
                    continue _fun67290
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun67290_ip = 248;
                    continue _fun67290
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun67290_ip = 233;
                    continue _fun67290
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun67290_ip = 246;
                    continue _fun67290
                }
            case 233:
                var8 = _closure1_slot6;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun67290_ip = 264;
                continue _fun67290;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun67290_ip = 282;
                continue _fun67290;
            case 269:
                var6 = _closure1_slot6;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun67290_ip = 322;
                    continue _fun67290
                }
            case 288:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 322:
                if (!var3) {
                    _fun67290_ip = 329;
                    continue _fun67290
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun67291: for (var _fun67291_ip = 0;;) switch (_fun67291_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun67291_ip = 56;
                                continue _fun67291
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun67291_ip = 67;
                            continue _fun67291;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 344:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun67292: for (var _fun67292_ip = 0;;) switch (_fun67292_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun67292_ip = 23;
                    continue _fun67292
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun67292_ip = 33;
                    continue _fun67292
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun67292_ip = 70;
                    continue _fun67292
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun67292_ip = 55;
                    continue _fun67292
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function(arg0, arg1) { // Original name: changeHubProgressUserSetting, environment: var1
        var0 = arg1;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var6 = _closure1_slot1;
        var2 = 3;
        var4 = var6[var2];
        var0 = undefined;
        var5 = var3.bind(var0)(var4);
        var4 = var5.updateUserGuildSettings;
        var2 = var6[var2];
        var2 = var3.bind(var0)(var2);
        var2 = var2.UserSettingsDelay;
        var3 = var2.INFREQUENT_USER_ACTION;
        var2 = arg0;
        var1 = function(arg0) { // Environment: var1
            _fun67294: for (var _fun67294_ip = 0;;) switch (_fun67294_ip) {
                case 0:
                    var9 = arg0;
                    var1 = _closure1_slot5;
                    var0 = _closure2_slot0;
                    var7 = undefined;
                    var6 = var1.bind(var7)(var0);
                    var2 = var6.bind(var7)();
                    var1 = var2.done;
                    var5 = 4;
                    var3 = var2;
                    var2 = false;
                    var0 = false;
                    if (var1) {
                        _fun67294_ip = 150;
                        continue _fun67294
                    }
                case 46:
                    var12 = var3.value;
                    var10 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var5];
                    var11 = var10.bind(var7)(var1);
                    var10 = var11.hasFlag;
                    var1 = var9.hubProgress;
                    var1 = var10.bind(var11)(var1, var12);
                    if (var1) {
                        _fun67294_ip = 132;
                        continue _fun67294
                    }
                case 89:
                    var10 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var5];
                    var11 = var10.bind(var7)(var1);
                    var10 = var11.addFlag;
                    var1 = var9.hubProgress;
                    var1 = var10.bind(var11)(var1, var12);
                    var9.hubProgress = var1;
                    var2 = true;
                case 132:
                    var11 = var6.bind(var7)();
                    var1 = var11.done;
                    var3 = var11;
                    var0 = var2;
                    if (!var1) {
                        _fun67294_ip = 46;
                        continue _fun67294
                    }
                case 150:
                    return var0;
            }
        };
        var1 = var4.bind(var5)(var2, var1, var3);
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.HUB_PROGRESS_STEP_ORDER;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildFeatures;
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/hub/HubProgressActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0, arg1) { // Original name: setHubProgressActionComplete, environment: var1
        _fun67295: for (var _fun67295_ip = 0;;) switch (_fun67295_ip) {
            case 0:
                var3 = arg0;
                var1 = null;
                if (!(var1 != var3)) {
                    _fun67295_ip = 85;
                    continue _fun67295
                }
            case 9:
                var4 = _closure1_slot2;
                var2 = var4.getGuild;
                var2 = var2.bind(var4)(var3);
                var1 = var1 != var2;
                if (!var1) {
                    _fun67295_ip = 59;
                    continue _fun67295
                }
            case 33:
                var5 = var2.features;
                var4 = var5.has;
                var2 = _closure1_slot4;
                var2 = var2.HUB;
                var1 = var4.bind(var5)(var2);
            case 59:
                if (!var1) {
                    _fun67295_ip = 85;
                    continue _fun67295
                }
            case 62:
                var2 = _closure1_slot7;
                var1 = new Array(1);
                var0 = arg1;
                var1[0] = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var3, var1);
            case 85:
                var0 = undefined;
                return var0;
        }
    };
    var2.setHubProgressActionComplete = var3;
    var1 = function(arg0) { // Original name: skipHubProgress, environment: var1
        var3 = _closure1_slot7;
        var2 = _closure1_slot3;
        var0 = undefined;
        var1 = arg0;
        var1 = var3.bind(var0)(var1, var2);
        return var0;
    };
    var2.skipHubProgress = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1410, 8305, 660, 1355, 1384, 2]);