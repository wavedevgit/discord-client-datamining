// modules/hub/HubProgressBarUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun91639: for (var _fun91639_ip = 0;;) switch (_fun91639_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun91639_ip = 45;
                    continue _fun91639
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun91639_ip = 54;
                    continue _fun91639
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun91639_ip = 344;
                    continue _fun91639
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun91639_ip = 322;
                    continue _fun91639
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun91639_ip = 282;
                    continue _fun91639
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun91639_ip = 269;
                    continue _fun91639
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
                    _fun91639_ip = 162;
                    continue _fun91639
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun91639_ip = 178;
                    continue _fun91639
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun91639_ip = 248;
                    continue _fun91639
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun91639_ip = 248;
                    continue _fun91639
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun91639_ip = 233;
                    continue _fun91639
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun91639_ip = 246;
                    continue _fun91639
                }
            case 233:
                var8 = _closure1_slot8;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun91639_ip = 264;
                continue _fun91639;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun91639_ip = 282;
                continue _fun91639;
            case 269:
                var6 = _closure1_slot8;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun91639_ip = 322;
                    continue _fun91639
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
                    _fun91639_ip = 329;
                    continue _fun91639
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun91640: for (var _fun91640_ip = 0;;) switch (_fun91640_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun91640_ip = 56;
                                continue _fun91640
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
                            _fun91640_ip = 67;
                            continue _fun91640;
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
    var _closure1_slot7 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun91641: for (var _fun91641_ip = 0;;) switch (_fun91641_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun91641_ip = 23;
                    continue _fun91641
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun91641_ip = 33;
                    continue _fun91641
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
                    _fun91641_ip = 70;
                    continue _fun91641
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun91641_ip = 55;
                    continue _fun91641
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function(arg0) { // Original name: useCompletedStepsFromSettings, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var5 = var4.bind(var2)(var3);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot3;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            _fun91643: for (var _fun91643_ip = 0;;) switch (_fun91643_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var3 = null;
                    var2 = var3 == var0;
                    var0 = 0;
                    if (var2) {
                        _fun91643_ip = 90;
                        continue _fun91643
                    }
                case 18:
                    var2 = _closure1_slot3;
                    var2 = var2.settings;
                    var5 = var2.guilds;
                    var7 = var3 == var5;
                    var2 = undefined;
                    if (var7) {
                        _fun91643_ip = 75;
                        continue _fun91643
                    }
                case 46:
                    var5 = var5.guilds;
                    var4 = _closure2_slot0;
                    var4 = var5[var4];
                    var5 = var3 == var4;
                    var2 = undefined;
                    if (var5) {
                        _fun91643_ip = 75;
                        continue _fun91643
                    }
                case 69:
                    var2 = var4.hubProgress;
                case 75:
                    var3 = var3 != var2;
                    var1 = 0;
                    if (!var3) {
                        _fun91643_ip = 87;
                        continue _fun91643
                    }
                case 84:
                    var1 = var2;
                case 87:
                    var0 = var1;
                case 90:
                    return var0;
            }
        };
        var4 = var4.bind(var5)(var3, var2);
        var _closure2_slot1 = var4;
        var3 = _closure1_slot2;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun91644: for (var _fun91644_ip = 0;;) switch (_fun91644_ip) {
                case 0:
                    var7 = _closure2_slot1;
                    var0 = global;
                    var0 = var0.Set;
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var12 = var1;
                    var0 = new var12[var0](var11);
                    var0 = var0 instanceof Object ? var0 : var1;
                    var2 = _closure1_slot7;
                    var1 = _closure1_slot5;
                    var5 = undefined;
                    var4 = var2.bind(var5)(var1);
                    var2 = var4.bind(var5)();
                    var1 = var2.done;
                    var3 = 9;
                    if (var1) {
                        _fun91644_ip = 130;
                        continue _fun91644
                    }
                case 68:
                    var8 = var2.value;
                    var9 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var3];
                    var9 = var9.bind(var5)(var1);
                    var1 = var9.hasFlag;
                    var1 = var1.bind(var9)(var7, var8);
                    if (!var1) {
                        _fun91644_ip = 115;
                        continue _fun91644
                    }
                case 105:
                    var1 = var0.add;
                    var1 = var1.bind(var0)(var8);
                case 115:
                    var8 = var4.bind(var5)();
                    var1 = var8.done;
                    var2 = var8;
                    if (!var1) {
                        _fun91644_ip = 68;
                        continue _fun91644
                    }
                case 130:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.HUB_PROGRESS_STEP_ORDER;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PlatformTypes;
    var _closure1_slot6 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/hub/HubProgressBarUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: getHubProgressTitleForStep, environment: var1
        _fun91645: for (var _fun91645_ip = 0;;) switch (_fun91645_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var5 = 6;
                var1 = var1[var5];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var1 = var1.HubProgressStep;
                var1 = var1.JOIN_GUILD;
                if (!(var1 !== var3)) {
                    _fun91645_ip = 300;
                    continue _fun91645
                }
            case 47:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var2.bind(var4)(var1);
                var1 = var1.HubProgressStep;
                var1 = var1.INVITE_USER;
                if (!(var1 !== var3)) {
                    _fun91645_ip = 243;
                    continue _fun91645
                }
            case 83:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var2.bind(var4)(var1);
                var1 = var1.HubProgressStep;
                var1 = var1.CONTACT_SYNC;
                if (!(var1 !== var3)) {
                    _fun91645_ip = 186;
                    continue _fun91645
                }
            case 116:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var2.bind(var4)(var1);
                var1 = var1.HubProgressStep;
                var1 = var1.NO_PROGRESS;
                if (!(var1 !== var3)) {
                    _fun91645_ip = 182;
                    continue _fun91645
                }
            case 149:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 8;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.assertNever;
                var1 = var1.bind(var2)(var3);
                return var4;
            case 182:
                var1 = null;
                return var1;
            case 186:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 7;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.HFvFte;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 243:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 7;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["3NlTYU"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 300:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 7;
                var1 = var5[var0];
                var1 = var3.bind(var4)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0.iNR25n;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getHubProgressTitleForStep = var3;
    var3 = function(arg0) { // Original name: useHubProgressBarCompletedSteps, environment: var1
        _fun91646: for (var _fun91646_ip = 0;;) switch (_fun91646_ip) {
            case 0:
                var5 = arg0;
                var4 = _closure1_slot9;
                var2 = null;
                var6 = var2 == var5;
                var3 = undefined;
                var2 = undefined;
                if (var6) {
                    _fun91646_ip = 30;
                    continue _fun91646
                }
            case 25:
                var2 = var5.id;
            case 30:
                var5 = var4.bind(var3)(var2);
                var _closure2_slot0 = var5;
                var2 = function() { // Original name: useContactSyncEverEnabled, environment: var0
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.useStateFromStores;
                    var0 = _closure1_slot4;
                    var1 = new Array(1);
                    var1[0] = var0;
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot4;
                        var1 = var2.getLocalAccount;
                        var0 = _closure1_slot6;
                        var0 = var0.CONTACTS;
                        var1 = var1.bind(var2)(var0);
                        var0 = null;
                        var0 = var0 != var1;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var4 = var2.bind(var3)();
                var _closure2_slot1 = var4;
                var3 = _closure1_slot2;
                var2 = var3.useMemo;
                var1 = new Array(2);
                var1[0] = var5;
                var1[1] = var4;
                var0 = function() { // Environment: var0
                    _fun91649: for (var _fun91649_ip = 0;;) switch (_fun91649_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (var1) {
                                _fun91649_ip = 16;
                                continue _fun91649
                            }
                        case 10:
                            var1 = _closure2_slot0;
                            return var1;
                        case 16:
                            var1 = global;
                            var2 = var1.Set;
                            var5 = _closure2_slot0;
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var6 = var1;
                            var0 = new var6[var2](var5, var4);
                            var0 = var0 instanceof Object ? var0 : var1;
                            var2 = var0.add;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 6;
                            var3 = var3[var1];
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3);
                            var1 = var1.HubProgressStep;
                            var1 = var1.CONTACT_SYNC;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useHubProgressBarCompletedSteps = var3;
    var1 = function(arg0) { // Original name: getNextHubProgressStep, environment: var1
        _fun91650: for (var _fun91650_ip = 0;;) switch (_fun91650_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot7;
                var0 = _closure1_slot5;
                var3 = undefined;
                var2 = var1.bind(var3)(var0);
                var1 = var2.bind(var3)();
                var0 = var1.done;
                if (var0) {
                    _fun91650_ip = 68;
                    continue _fun91650
                }
            case 33:
                var0 = var1.value;
                var5 = var4.has;
                var5 = var5.bind(var4)(var0);
                if (var5) {
                    _fun91650_ip = 53;
                    continue _fun91650
                }
            case 51:
                return var0;
            case 53:
                var5 = var2.bind(var3)();
                var0 = var5.done;
                var1 = var5;
                if (!var0) {
                    _fun91650_ip = 33;
                    continue _fun91650
                }
            case 68:
                var0 = null;
                return var0;
        }
    };
    var2.getNextHubProgressStep = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1310, 4476, 8302, 660, 566, 1311, 1234, 1304, 1384, 2]);