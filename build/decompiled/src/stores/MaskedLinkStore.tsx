// stores/MaskedLinkStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun51527: for (var _fun51527_ip = 0;;) switch (_fun51527_ip) {
        case 0:
            var4 = require;
            var6 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var6;
            var _closure1_slot2 = var5;
            var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
                _fun51528: for (var _fun51528_ip = 0;;) switch (_fun51528_ip) {
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
                        _fun51528_ip = 74;
                        continue _fun51528;
                    case 72: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 74:
                        var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                            var0 = _closure2_slot0;
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        _closure1_slot12 = var1;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var _closure1_slot12 = var0;
            var0 = function(arg0) { // Original name: _isTrustedDomain, environment: var3
                _fun51531: for (var _fun51531_ip = 0;;) switch (_fun51531_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 6;
                        var0 = var3[var0];
                        var5 = undefined;
                        var3 = var2.bind(var5)(var0);
                        var2 = var3.getHostname;
                        var0 = arg0;
                        var3 = var2.bind(var3)(var0);
                        var0 = global;
                        var2 = var0.window;
                        var2 = var2.GLOBAL_ENV;
                        var2 = var2.INVITE_HOST;
                        if (!(var2 !== var3)) {
                            _fun51531_ip = 201;
                            continue _fun51531
                        }
                    case 66:
                        var2 = var0.window;
                        var2 = var2.GLOBAL_ENV;
                        var2 = var2.GIFT_CODE_HOST;
                        if (!(var2 !== var3)) {
                            _fun51531_ip = 201;
                            continue _fun51531
                        }
                    case 88:
                        var2 = var0.window;
                        var2 = var2.GLOBAL_ENV;
                        var2 = var2.GUILD_TEMPLATE_HOST;
                        if (!(var2 !== var3)) {
                            _fun51531_ip = 201;
                            continue _fun51531
                        }
                    case 110:
                        var2 = _closure1_slot11;
                        if (!(var2 !== var3)) {
                            _fun51531_ip = 201;
                            continue _fun51531
                        }
                    case 118:
                        var0 = var0.location;
                        var0 = var0.hostname;
                        if (!(var0 !== var3)) {
                            _fun51531_ip = 201;
                            continue _fun51531
                        }
                    case 134:
                        var2 = _closure1_slot8;
                        var0 = var2.includes;
                        var0 = var0.bind(var2)(var3);
                        if (var0) {
                            _fun51531_ip = 182;
                            continue _fun51531
                        }
                    case 151:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 7;
                        var2 = var6[var2];
                        var4 = var4.bind(var5)(var2);
                        var2 = var4.isDiscordHostname;
                        var0 = var2.bind(var4)(var3);
                    case 182:
                        if (var0) {
                            _fun51531_ip = 199;
                            continue _fun51531
                        }
                    case 185:
                        var2 = _closure1_slot9;
                        var1 = var2.has;
                        var0 = var1.bind(var2)(var3);
                    case 199:
                        return var0;
                    case 201:
                        var0 = true;
                        return var0;
                }
            };
            var _closure1_slot13 = var0;
            var0 = function(arg0) { // Original name: _isTrustedProtocol, environment: var3
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getProtocol;
                var1 = arg0;
                var2 = var2.bind(var3)(var1);
                var1 = _closure1_slot10;
                var0 = var1.has;
                var0 = var0.bind(var1)(var2);
                return var0;
            };
            var _closure1_slot14 = var0;
            var1 = global;
            var9 = var1.Object;
            var8 = var9.defineProperty;
            var7 = {};
            var0 = true;
            var7.value = var0;
            var0 = '__esModule';
            var0 = var8.bind(var9)(var2, var0, var7);
            var0 = 0;
            var7 = var5[var0];
            var0 = undefined;
            var7 = var6.bind(var0)(var7);
            var _closure1_slot3 = var7;
            var7 = 1;
            var7 = var5[var7];
            var7 = var6.bind(var0)(var7);
            var _closure1_slot4 = var7;
            var7 = 2;
            var7 = var5[var7];
            var7 = var6.bind(var0)(var7);
            var _closure1_slot5 = var7;
            var7 = 3;
            var7 = var5[var7];
            var7 = var6.bind(var0)(var7);
            var _closure1_slot6 = var7;
            var7 = 4;
            var7 = var5[var7];
            var7 = var6.bind(var0)(var7);
            var _closure1_slot7 = var7;
            var7 = 5;
            var7 = var5[var7];
            var7 = var4.bind(var0)(var7);
            var7 = var7.SPOTIFY_HOSTNAMES;
            var _closure1_slot8 = var7;
            var7 = var1.Set;
            var8 = var7.prototype;
            var8 = Object.create(var8, {
                constructor: {
                    value: var7
                }
            });
            var14 = var8;
            var7 = new var14[var7](var13);
            var7 = var7 instanceof Object ? var7 : var8;
            var _closure1_slot9 = var7;
            var7 = var1.Set;
            var8 = var7.prototype;
            var8 = Object.create(var8, {
                constructor: {
                    value: var7
                }
            });
            var14 = var8;
            var7 = new var14[var7](var13);
            var7 = var7 instanceof Object ? var7 : var8;
            var _closure1_slot10 = var7;
            var1 = var1.window;
            var1 = var1.GLOBAL_ENV;
            var10 = var1.MEDIA_PROXY_ENDPOINT;
            var1 = null;
            var7 = var1 == var10;
            var1 = undefined;
            if (var7) {
                _fun51527_ip = 298;
                continue _fun51527
            }
        case 277:
            var9 = var10.replace;
            var8 = '//';
            var7 = '';
            var1 = var9.bind(var10)(var8, var7);
        case 298:
            var _closure1_slot11 = var1;
            var1 = 9;
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var7 = var1.Store;
            var1 = function(arg0) { // Environment: var3
                var3 = function() { // Original name: MaskedLinkStore, environment: var5
                    _fun51534: for (var _fun51534_ip = 0;;) switch (_fun51534_ip) {
                        case 0:
                            var3 = this;
                            var2 = undefined;
                            var4 = undefined;
                            var0 = _closure1_slot3;
                            var1 = _closure2_slot0;
                            var0 = var0.bind(var2)(var3, var1);
                            var0 = _closure1_slot6;
                            var8 = var0.bind(var2)(var1);
                            var1 = _closure1_slot5;
                            var0 = _closure1_slot12;
                            var0 = var0.bind(var2)();
                            if (var0) {
                                _fun51534_ip = 69;
                                continue _fun51534
                            }
                        case 51:
                            var6 = var8.apply;
                            var4 = arguments;
                            var0 = var4;
                            var0 = var6.bind(var8)(var3, var0);
                            _fun51534_ip = 105;
                            continue _fun51534;
                        case 69:
                            var6 = global;
                            var7 = var6.Reflect;
                            var6 = var7.construct;
                            var5 = _closure1_slot6;
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
                var4 = _closure1_slot7;
                var2 = undefined;
                var1 = arg0;
                var1 = var4.bind(var2)(var3, var1);
                var1 = _closure1_slot4;
                var4 = {};
                var0 = 'initialize';
                var4.key = var0;
                var0 = function() { // Original name: value, environment: var5
                    _fun51535: for (var _fun51535_ip = 0;;) switch (_fun51535_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 8;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            var4 = var1.Storage;
                            var3 = var4.get;
                            var1 = 'MaskedLinkStore';
                            var4 = var3.bind(var4)(var1);
                            var5 = null;
                            if (!(var5 == var4)) {
                                _fun51535_ip = 55;
                                continue _fun51535
                            }
                        case 53:
                            var4 = {};
                        case 55:
                            var1 = global;
                            var6 = var1.Array;
                            var3 = var6.isArray;
                            var3 = var3.bind(var6)(var4);
                            var7 = var4;
                            if (var3) {
                                _fun51535_ip = 212;
                                continue _fun51535
                            }
                        case 82:
                            var10 = var7.trustedDomains;
                            var9 = var7.trustedProtocols;
                            var6 = var1.Set;
                            var4 = var5 != var10;
                            var3 = null;
                            if (!var4) {
                                _fun51535_ip = 125;
                                continue _fun51535
                            }
                        case 109:
                            var8 = var1.Array;
                            var4 = var8.from;
                            var3 = var4.bind(var8)(var10);
                        case 125:
                            var4 = var6.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var6
                                }
                            });
                            var12 = var4;
                            var11 = var3;
                            var3 = new var12[var6](var11, var10);
                            var3 = var3 instanceof Object ? var3 : var4;
                            _closure1_slot9 = var3;
                            var6 = var1.Set;
                            var4 = var5 != var9;
                            var3 = null;
                            if (!var4) {
                                _fun51535_ip = 183;
                                continue _fun51535
                            }
                        case 167:
                            var8 = var1.Array;
                            var4 = var8.from;
                            var3 = var4.bind(var8)(var9);
                        case 183:
                            var4 = var6.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var6
                                }
                            });
                            var12 = var4;
                            var11 = var3;
                            var3 = new var12[var6](var11, var10);
                            var3 = var3 instanceof Object ? var3 : var4;
                            _closure1_slot10 = var3;
                            _fun51535_ip = 300;
                            continue _fun51535;
                        case 212:
                            var3 = var1.Set;
                            var4 = var5 != var7;
                            var5 = null;
                            if (!var4) {
                                _fun51535_ip = 243;
                                continue _fun51535
                            }
                        case 227:
                            var6 = var1.Array;
                            var4 = var6.from;
                            var5 = var4.bind(var6)(var7);
                        case 243:
                            var4 = var3.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var12 = var4;
                            var11 = var5;
                            var3 = new var12[var3](var11, var10);
                            var3 = var3 instanceof Object ? var3 : var4;
                            _closure1_slot9 = var3;
                            var1 = var1.Set;
                            var3 = var1.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var12 = var3;
                            var1 = new var12[var1](var11);
                            var1 = var1 instanceof Object ? var1 : var3;
                            _closure1_slot10 = var1;
                        case 300:
                            return var0;
                    }
                };
                var4.value = var0;
                var0 = new Array(3);
                var0[0] = var4;
                var4 = {};
                var6 = 'isTrustedDomain';
                var4.key = var6;
                var6 = function(arg0) { // Original name: value, environment: var5
                    var2 = _closure1_slot13;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var4.value = var6;
                var0[1] = var4;
                var4 = {};
                var6 = 'isTrustedProtocol';
                var4.key = var6;
                var5 = function(arg0) { // Original name: value, environment: var5
                    var2 = _closure1_slot14;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var4.value = var5;
                var0[2] = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            };
            var7 = var1.bind(var0)(var7);
            var1 = 'MaskedLinkStore';
            var7.displayName = var1;
            var1 = 10;
            var1 = var5[var1];
            var13 = var6.bind(var0)(var1);
            var1 = {};
            var8 = function(arg0) { // Original name: handleAddTrustedDomain, environment: var3
                _fun51538: for (var _fun51538_ip = 0;;) switch (_fun51538_ip) {
                    case 0:
                        var0 = arg0;
                        var8 = var0.url;
                        var2 = _closure1_slot13;
                        var0 = undefined;
                        var2 = var2.bind(var0)(var8);
                        if (var2) {
                            _fun51538_ip = 127;
                            continue _fun51538
                        }
                    case 25:
                        var6 = _closure1_slot9;
                        var5 = var6.add;
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 6;
                        var2 = var4[var2];
                        var7 = var3.bind(var0)(var2);
                        var2 = var7.getHostname;
                        var2 = var2.bind(var7)(var8);
                        var2 = var5.bind(var6)(var2);
                        var2 = 8;
                        var2 = var4[var2];
                        var2 = var3.bind(var0)(var2);
                        var4 = var2.Storage;
                        var3 = var4.set;
                        var2 = {};
                        var5 = _closure1_slot9;
                        var2.trustedDomains = var5;
                        var1 = _closure1_slot10;
                        var2.trustedProtocols = var1;
                        var1 = 'MaskedLinkStore';
                        var1 = var3.bind(var4)(var1, var2);
                        return var0;
                    case 127:
                        var0 = false;
                        return var0;
                }
            };
            var1.MASKED_LINK_ADD_TRUSTED_DOMAIN = var8;
            var3 = function(arg0) { // Original name: handleAddTrustedProtocol, environment: var3
                _fun51539: for (var _fun51539_ip = 0;;) switch (_fun51539_ip) {
                    case 0:
                        var0 = arg0;
                        var8 = var0.url;
                        var2 = _closure1_slot14;
                        var0 = undefined;
                        var2 = var2.bind(var0)(var8);
                        if (var2) {
                            _fun51539_ip = 127;
                            continue _fun51539
                        }
                    case 25:
                        var6 = _closure1_slot10;
                        var5 = var6.add;
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 6;
                        var2 = var4[var2];
                        var7 = var3.bind(var0)(var2);
                        var2 = var7.getProtocol;
                        var2 = var2.bind(var7)(var8);
                        var2 = var5.bind(var6)(var2);
                        var2 = 8;
                        var2 = var4[var2];
                        var2 = var3.bind(var0)(var2);
                        var4 = var2.Storage;
                        var3 = var4.set;
                        var2 = {};
                        var5 = _closure1_slot9;
                        var2.trustedDomains = var5;
                        var1 = _closure1_slot10;
                        var2.trustedProtocols = var1;
                        var1 = 'MaskedLinkStore';
                        var1 = var3.bind(var4)(var1, var2);
                        return var0;
                    case 127:
                        var0 = false;
                        return var0;
                }
            };
            var1.MASKED_LINK_ADD_TRUSTED_PROTOCOL = var3;
            var3 = var7.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var7
                }
            });
            var14 = var3;
            var12 = var1;
            var1 = new var14[var7](var13, var12, var11);
            var1 = var1 instanceof Object ? var1 : var3;
            var3 = 11;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'stores/MaskedLinkStore.tsx';
            var3 = var4.bind(var5)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 5610, 5854, 1457, 587, 566, 806, 2]);