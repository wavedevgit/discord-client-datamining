// modules/connections/authorizeConnection.native.tsx
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
    var3 = var3.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PlatformTypes;
    var _closure1_slot4 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/connections/authorizeConnection.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun47571: for (var _fun47571_ip = 0;;) switch (_fun47571_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.platformType;
                var5 = var0.location;
                var1 = var0.onClose;
                var _closure2_slot0 = var1;
                var10 = var0.overrideUrl;
                var _closure2_slot1 = var10;
                var9 = var0.successRedirect;
                var1 = function() {
                    _fun47572: for (var _fun47572_ip = 0;;) switch (_fun47572_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun47572_ip = 67;
                                continue _fun47572
                            }
                        case 15:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 2;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.subscribe;
                            var1 = function() {
                                _fun47573: for (var _fun47573_ip = 0;;) switch (_fun47573_ip) {
                                    case 0:
                                        var2 = _closure2_slot0;
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun47573_ip = 23;
                                            continue _fun47573
                                        }
                                    case 13:
                                        var1 = _closure2_slot0;
                                        var0 = undefined;
                                        var0 = var1.bind(var0)();
                                    case 23:
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 2;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var4 = var2.bind(var0)(var1);
                                        var3 = var4.unsubscribe;
                                        var2 = _closure3_slot0;
                                        var1 = 'MODAL_POP';
                                        var1 = var3.bind(var4)(var1, var2);
                                        return var0;
                                }
                            };
                            var _closure3_slot0 = var1;
                            var0 = 'MODAL_POP';
                            var0 = var2.bind(var3)(var0, var1);
                        case 67:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = _closure1_slot4;
                var2 = var2.LEAGUE_OF_LEGENDS;
                if (!(var7 === var2)) {
                    _fun47571_ip = 74;
                    continue _fun47571
                }
            case 64:
                var2 = _closure1_slot4;
                var7 = var2.RIOT_GAMES;
            case 74:
                var3 = null;
                if (!(var3 == var5)) {
                    _fun47571_ip = 84;
                    continue _fun47571
                }
            case 80:
                var5 = 'mobile';
            case 84:
                var2 = _closure1_slot4;
                var2 = var2.XBOX;
                if (!(var7 !== var2)) {
                    _fun47571_ip = 727;
                    continue _fun47571
                }
            case 101:
                var2 = _closure1_slot4;
                var2 = var2.PLAYSTATION;
                if (!(var7 !== var2)) {
                    _fun47571_ip = 657;
                    continue _fun47571
                }
            case 118:
                var2 = _closure1_slot4;
                var2 = var2.PLAYSTATION_STAGING;
                if (!(var7 !== var2)) {
                    _fun47571_ip = 657;
                    continue _fun47571
                }
            case 135:
                var2 = _closure1_slot4;
                var2 = var2.CRUNCHYROLL;
                if (!(var7 !== var2)) {
                    _fun47571_ip = 585;
                    continue _fun47571
                }
            case 152:
                var2 = _closure1_slot4;
                var2 = var2.DOMAIN;
                if (!(var7 !== var2)) {
                    _fun47571_ip = 471;
                    continue _fun47571
                }
            case 169:
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 10;
                var4 = var4[var2];
                var2 = undefined;
                var6 = var6.bind(var2)(var4);
                var4 = var6.get;
                var6 = var4.bind(var6)(var7);
                var11 = var3 == var6;
                var4 = undefined;
                if (var11) {
                    _fun47571_ip = 216;
                    continue _fun47571
                }
            case 210:
                var4 = var6.isFederated;
            case 216:
                var11 = true;
                if (!(var11 !== var4)) {
                    _fun47571_ip = 358;
                    continue _fun47571
                }
            case 225:
                if (!(var3 != var10)) {
                    _fun47571_ip = 237;
                    continue _fun47571
                }
            case 229:
                var3 = _closure1_slot3;
                if (!(var7 !== var3)) {
                    _fun47571_ip = 300;
                    continue _fun47571
                }
            case 237:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 14;
                var3 = var6[var3];
                var6 = var4.bind(var2)(var3);
                var4 = var6.authorize;
                var3 = {};
                var3.location = var5;
                var3.successRedirect = var9;
                var6 = var4.bind(var6)(var7, var3);
                var4 = var6.then;
                var3 = function(arg0) { // Environment: var8
                    _fun47575: for (var _fun47575_ip = 0;;) switch (_fun47575_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.body;
                            var2 = var0.url;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun47575_ip = 55;
                                continue _fun47575
                            }
                        case 19:
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 13;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            var0 = var1.openURL;
                            var0 = var0.bind(var1)(var2);
                        case 55:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var4.bind(var6)(var3);
                _fun47571_ip = 794;
                continue _fun47571;
            case 300:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 12;
                var3 = var6[var3];
                var6 = var4.bind(var2)(var3);
                var4 = var6.handleClick;
                var3 = {};
                var3.shouldConfirm = var11;
                var3.href = var10;
                var8 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openURL;
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var3.onConfirm = var8;
                var3 = var4.bind(var6)(var3);
                _fun47571_ip = 794;
                continue _fun47571;
            case 358:
                var6 = _closure1_slot1;
                var3 = _closure1_slot2;
                var4 = 3;
                var4 = var3[var4];
                var8 = var6.bind(var2)(var4);
                var4 = var8.hideActionSheet;
                var4 = var4.bind(var8)();
                var4 = 7;
                var4 = var3[var4];
                var8 = var6.bind(var2)(var4);
                var6 = var8.pushLazy;
                var10 = _closure1_slot0;
                var4 = 9;
                var4 = var3[var4];
                var10 = var10.bind(var2)(var4);
                var4 = 11;
                var4 = var3[var4];
                var3 = var3.paths;
                var4 = var10.bind(var2)(var4, var3);
                var3 = {};
                var3.platformType = var7;
                var3.location = var5;
                var3.successRedirect = var9;
                var3 = var6.bind(var8)(var4, var3);
                var2 = var1.bind(var2)();
                _fun47571_ip = 794;
                continue _fun47571;
            case 471:
                var6 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 3;
                var4 = var3[var2];
                var2 = undefined;
                var8 = var6.bind(var2)(var4);
                var4 = var8.hideActionSheet;
                var4 = var4.bind(var8)();
                var4 = 7;
                var4 = var3[var4];
                var8 = var6.bind(var2)(var4);
                var6 = var8.pushLazy;
                var9 = _closure1_slot0;
                var4 = 9;
                var4 = var3[var4];
                var9 = var9.bind(var2)(var4);
                var4 = 8;
                var4 = var3[var4];
                var3 = var3.paths;
                var4 = var9.bind(var2)(var4, var3);
                var3 = {};
                var9 = new Array(1);
                var9[0] = var5;
                var3.locationStack = var9;
                var3 = var6.bind(var8)(var4, var3);
                var2 = var1.bind(var2)();
                _fun47571_ip = 794;
                continue _fun47571;
            case 585:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 3;
                var3 = var6[var2];
                var2 = undefined;
                var8 = var4.bind(var2)(var3);
                var3 = var8.hideActionSheet;
                var3 = var3.bind(var8)();
                var3 = 6;
                var3 = var6[var3];
                var6 = var4.bind(var2)(var3);
                var4 = var6.showModal;
                var3 = new Array(1);
                var3[0] = var5;
                var3 = var4.bind(var6)(var3);
                var2 = var1.bind(var2)();
                _fun47571_ip = 794;
                continue _fun47571;
            case 657:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 3;
                var3 = var6[var2];
                var2 = undefined;
                var8 = var4.bind(var2)(var3);
                var3 = var8.hideActionSheet;
                var3 = var3.bind(var8)();
                var3 = 5;
                var3 = var6[var3];
                var6 = var4.bind(var2)(var3);
                var4 = var6.showModal;
                var3 = new Array(1);
                var3[0] = var5;
                var3 = var4.bind(var6)(var3, var7);
                var2 = var1.bind(var2)();
                _fun47571_ip = 794;
                continue _fun47571;
            case 727:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 3;
                var2 = var4[var0];
                var0 = undefined;
                var6 = var3.bind(var0)(var2);
                var2 = var6.hideActionSheet;
                var2 = var2.bind(var6)();
                var2 = 4;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.showModal;
                var2 = new Array(1);
                var2[0] = var5;
                var2 = var3.bind(var4)(var2);
                var0 = var1.bind(var0)();
            case 794:
                var0 = undefined;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4519, 660, 806, 3269, 5314, 5851, 5862, 4557, 5876, 1307, 4391, 5883, 5885, 3135, 4517, 2]);