// lib/guild/GuildMemberRequester.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function(arg0, arg1) { // Original name: GuildMemberRequestState, environment: var4
            var3 = arg0;
            var2 = this;
            var _closure3_slot0 = var3;
            var0 = arg1;
            var _closure3_slot1 = var0;
            var5 = _closure1_slot3;
            var4 = _closure2_slot0;
            var0 = undefined;
            var4 = var5.bind(var0)(var2, var4);
            var4 = global;
            var5 = var4.Set;
            var6 = var5.prototype;
            var6 = Object.create(var6, {
                constructor: {
                    value: var5
                }
            });
            var9 = var6;
            var5 = new var9[var5](var8);
            var5 = var5 instanceof Object ? var5 : var6;
            var2._pendingRequests = var5;
            var5 = var4.Set;
            var6 = var5.prototype;
            var6 = Object.create(var6, {
                constructor: {
                    value: var5
                }
            });
            var9 = var6;
            var5 = new var9[var5](var8);
            var5 = var5 instanceof Object ? var5 : var6;
            var2._sentRequests = var5;
            var4 = var4.Set;
            var5 = var4.prototype;
            var5 = Object.create(var5, {
                constructor: {
                    value: var4
                }
            });
            var9 = var5;
            var4 = new var9[var4](var8);
            var4 = var4 instanceof Object ? var4 : var5;
            var2._unacknowledgedRequests = var4;
            var2._guildId = var3;
            var1 = function(arg0) { // Environment: var1
                var3 = _closure3_slot1;
                var2 = _closure3_slot0;
                var1 = undefined;
                var0 = arg0;
                var0 = var3.bind(var1)(var2, var0);
                return var0;
            };
            var2._guildMemberExists = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'acknowledge';
        var0.key = var1;
        var1 = function(arg0) { // Original name: value, environment: var4
            var2 = arg0;
            var0 = this;
            var3 = var0._unacknowledgedRequests;
            var1 = var3.delete;
            var1 = var1.bind(var3)(var2);
            var1 = var0._pendingRequests;
            var0 = var1.delete;
            var0 = var0.bind(var1)(var2);
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var5 = 'flushRequests';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun50300: for (var _fun50300_ip = 0;;) switch (_fun50300_ip) {
                case 0:
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var2 = var0._pendingRequests;
                    var3 = var2.size;
                    var2 = 0;
                    if (!(var2 !== var3)) {
                        _fun50300_ip = 97;
                        continue _fun50300
                    }
                case 26:
                    var4 = new Array(0);
                    var _closure3_slot1 = var4;
                    var5 = var0._pendingRequests;
                    var3 = var5.forEach;
                    var1 = function(arg0) { // Environment: var1
                        _fun50301: for (var _fun50301_ip = 0;;) switch (_fun50301_ip) {
                            case 0:
                                var2 = arg0;
                                var3 = _closure3_slot0;
                                var1 = var3._guildMemberExists;
                                var1 = var1.bind(var3)(var2);
                                if (var1) {
                                    _fun50301_ip = 74;
                                    continue _fun50301
                                }
                            case 24:
                                var1 = _closure3_slot0;
                                var4 = var1._unacknowledgedRequests;
                                var3 = var4.add;
                                var3 = var3.bind(var4)(var2);
                                var3 = var1._sentRequests;
                                var1 = var3.add;
                                var1 = var1.bind(var3)(var2);
                                var1 = _closure3_slot1;
                                var0 = var1.push;
                                var0 = var0.bind(var1)(var2);
                            case 74:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var3.bind(var5)(var1);
                    var1 = var4.length;
                    if (!(var1 > var2)) {
                        _fun50300_ip = 81;
                        continue _fun50300
                    }
                case 64:
                    var3 = var0._guildId;
                    var2 = arg0;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3, var4);
                case 81:
                    var1 = var0._pendingRequests;
                    var0 = var1.clear;
                    var0 = var0.bind(var1)();
                case 97:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'requestUnacknowledged';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun50302: for (var _fun50302_ip = 0;;) switch (_fun50302_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var0 = var1._unacknowledgedRequests;
                    var0 = var0.size;
                    var2 = 0;
                    var0 = var2 !== var0;
                    if (!var0) {
                        _fun50302_ip = 73;
                        continue _fun50302
                    }
                case 29:
                    var5 = var1._unacknowledgedRequests;
                    var4 = var5.forEach;
                    var3 = function(arg0) { // Environment: var3
                        _fun50303: for (var _fun50303_ip = 0;;) switch (_fun50303_ip) {
                            case 0:
                                var2 = arg0;
                                var3 = _closure3_slot0;
                                var1 = var3._guildMemberExists;
                                var1 = var1.bind(var3)(var2);
                                var0 = _closure3_slot0;
                                if (var1) {
                                    _fun50303_ip = 46;
                                    continue _fun50303
                                }
                            case 28:
                                var3 = var0._pendingRequests;
                                var1 = var3.add;
                                var1 = var1.bind(var3)(var2);
                                _fun50303_ip = 62;
                                continue _fun50303;
                            case 46:
                                var1 = var0._unacknowledgedRequests;
                                var0 = var1.delete;
                                var0 = var0.bind(var1)(var2);
                            case 62:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var3 = var4.bind(var5)(var3);
                    var1 = var1._pendingRequests;
                    var1 = var1.size;
                    var1 = var2 !== var1;
                    if (!var1) {
                        _fun50302_ip = 70;
                        continue _fun50302
                    }
                case 68:
                    var1 = undefined;
                case 70:
                    var0 = var1;
                case 73:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'request';
        var0.key = var5;
        var4 = function(arg0) { // Original name: value, environment: var4
            _fun50304: for (var _fun50304_ip = 0;;) switch (_fun50304_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var1 = var0._guildMemberExists;
                    var1 = var1.bind(var0)(var2);
                    if (var1) {
                        _fun50304_ip = 78;
                        continue _fun50304
                    }
                case 20:
                    var3 = var0._sentRequests;
                    var1 = var3.has;
                    var1 = var1.bind(var3)(var2);
                    if (var1) {
                        _fun50304_ip = 78;
                        continue _fun50304
                    }
                case 39:
                    var3 = var0._pendingRequests;
                    var1 = var3.has;
                    var1 = var1.bind(var3)(var2);
                    if (var1) {
                        _fun50304_ip = 78;
                        continue _fun50304
                    }
                case 58:
                    var1 = var0._pendingRequests;
                    var0 = var1.add;
                    var0 = var0.bind(var1)(var2);
                    var0 = undefined;
                    return var0;
                case 78:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var4;
        var1[3] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot5 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function(arg0, arg1) { // Original name: GuildMemberRequester, environment: var4
            var2 = this;
            var _closure3_slot0 = var2;
            var5 = _closure1_slot3;
            var4 = _closure2_slot0;
            var0 = undefined;
            var4 = var5.bind(var0)(var2, var4);
            var4 = {};
            var2._guildStates = var4;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 2;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var5 = var3.DelayedCall;
            var3 = var5.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var5
                }
            });
            var7 = 0;
            var6 = function() { // Environment: var1
                var1 = _closure3_slot0;
                var0 = var1.flushRequests;
                var0 = var0.bind(var1)();
                return var0;
            };
            var8 = var3;
            var1 = new var8[var5](var7, var6, var5);
            var1 = var1 instanceof Object ? var1 : var3;
            var2._flush = var1;
            var1 = arg0;
            var2._guildMemberExists = var1;
            var1 = arg1;
            var2._onChange = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'reset';
        var0.key = var1;
        var1 = function() { // Original name: value, environment: var4
            var0 = this;
            var1 = {};
            var0._guildStates = var1;
            var1 = var0._flush;
            var0 = var1.cancel;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(7);
        var1[0] = var0;
        var0 = {};
        var5 = 'request';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun50309: for (var _fun50309_ip = 0;;) switch (_fun50309_ip) {
                case 0:
                    var0 = this;
                    var2 = var0._getGuildState;
                    var1 = arg0;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.request;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    var2 = false;
                    if (!(var2 !== var1)) {
                        _fun50309_ip = 54;
                        continue _fun50309
                    }
                case 37:
                    var1 = var0._flush;
                    var0 = var1.delay;
                    var0 = var0.bind(var1)(var2);
                case 54:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'acknowledge';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            var2 = this;
            var1 = var2._getGuildState;
            var0 = arg0;
            var2 = var1.bind(var2)(var0);
            var1 = var2.acknowledge;
            var0 = arg1;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'flushRequests';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var2 = this;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var0 = 3;
            var3 = var3[var0];
            var0 = undefined;
            var4 = var4.bind(var0)(var3);
            var3 = var4.forEach;
            var2 = var2._guildStates;
            var1 = function(arg0) { // Environment: var1
                var2 = arg0;
                var1 = var2.flushRequests;
                var0 = _closure3_slot0;
                var0 = var0._onChange;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'requestUnacknowledged';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun50313: for (var _fun50313_ip = 0;;) switch (_fun50313_ip) {
                case 0:
                    var1 = this;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 3;
                    var2 = var2[var0];
                    var0 = undefined;
                    var6 = var3.bind(var0)(var2);
                    var5 = var6.reduce;
                    var4 = var1._guildStates;
                    var3 = function(arg0, arg1) { // Environment: var2
                        _fun50314: for (var _fun50314_ip = 0;;) switch (_fun50314_ip) {
                            case 0:
                                var1 = arg1;
                                var0 = var1.requestUnacknowledged;
                                var2 = var0.bind(var1)();
                                var0 = false;
                                var0 = var0 !== var2;
                                if (var0) {
                                    _fun50314_ip = 25;
                                    continue _fun50314
                                }
                            case 22:
                                var0 = var1;
                            case 25:
                                return var0;
                        }
                    };
                    var2 = false;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    if (!var2) {
                        _fun50313_ip = 75;
                        continue _fun50313
                    }
                case 59:
                    var2 = var1._flush;
                    var1 = var2.delay;
                    var1 = var1.bind(var2)();
                case 75:
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = '_getGuildState';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun50315: for (var _fun50315_ip = 0;;) switch (_fun50315_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var0 = var1._guildStates;
                    var0 = var0[var3];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun50315_ip = 71;
                        continue _fun50315
                    }
                case 22:
                    var2 = var1._guildStates;
                    var5 = _closure1_slot5;
                    var6 = var1._guildMemberExists;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var5
                        }
                    });
                    var8 = var4;
                    var7 = var3;
                    var1 = new var8[var5](var7, var6, var5);
                    var1 = var1 instanceof Object ? var1 : var4;
                    var2[var3] = var1;
                    var0 = var1;
                case 71:
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'getDebugState';
        var0.key = var5;
        var4 = function(arg0) { // Original name: value, environment: var4
            var1 = arg0;
            var _closure3_slot0 = var1;
            var3 = new Array(0);
            var _closure3_slot1 = var3;
            var2 = new Array(0);
            var _closure3_slot2 = var2;
            var1 = new Array(0);
            var _closure3_slot3 = var1;
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var4 = 3;
            var5 = var5[var4];
            var4 = undefined;
            var6 = var6.bind(var4)(var5);
            var5 = var6.forEach;
            var4 = this;
            var4 = var4._guildStates;
            var0 = function(arg0) { // Environment: var0
                _fun50317: for (var _fun50317_ip = 0;;) switch (_fun50317_ip) {
                    case 0:
                        var0 = arg0;
                        var4 = var0._pendingRequests;
                        var3 = var4.has;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
                        if (!var2) {
                            _fun50317_ip = 49;
                            continue _fun50317
                        }
                    case 29:
                        var4 = _closure3_slot1;
                        var3 = var4.push;
                        var2 = var0._guildId;
                        var2 = var3.bind(var4)(var2);
                    case 49:
                        var4 = var0._unacknowledgedRequests;
                        var3 = var4.has;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
                        if (!var2) {
                            _fun50317_ip = 92;
                            continue _fun50317
                        }
                    case 72:
                        var4 = _closure3_slot2;
                        var3 = var4.push;
                        var2 = var0._guildId;
                        var2 = var3.bind(var4)(var2);
                    case 92:
                        var4 = var0._sentRequests;
                        var3 = var4.has;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
                        if (!var2) {
                            _fun50317_ip = 135;
                            continue _fun50317
                        }
                    case 115:
                        var2 = _closure3_slot3;
                        var1 = var2.push;
                        var0 = var0._guildId;
                        var0 = var1.bind(var2)(var0);
                    case 135:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = var5.bind(var6)(var4, var0);
            var0 = {};
            var0.pendingRequestGuildIds = var3;
            var0.unacknowledgedRequestGuildIds = var2;
            var0.sentRequestGuildIds = var1;
            return var0;
        };
        var0.value = var4;
        var1[6] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'lib/guild/GuildMemberRequester.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 3587, 22, 2]);