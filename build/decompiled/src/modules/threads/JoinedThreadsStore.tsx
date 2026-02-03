// modules/threads/JoinedThreadsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun24840: for (var _fun24840_ip = 0;;) switch (_fun24840_ip) {
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
                _fun24840_ip = 74;
                continue _fun24840;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var0 = 8;
        var3 = var3[var0];
        var0 = undefined;
        var4 = var4.bind(var0)(var3);
        var3 = _closure1_slot9;
        var4 = var4.bind(var0)(var3);
        var3 = var4.reject;
        var1 = function(arg0) { // Environment: var1
            var0 = arg0;
            var1 = var0.guildId;
            var0 = _closure2_slot0;
            var0 = var1 === var0;
            return var0;
        };
        var4 = var3.bind(var4)(var1);
        var3 = var4.keyBy;
        var1 = 'threadId';
        var3 = var3.bind(var4)(var1);
        var1 = var3.value;
        var1 = var1.bind(var3)();
        _closure1_slot9 = var1;
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        _fun24845: for (var _fun24845_ip = 0;;) switch (_fun24845_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.threads;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun24845_ip = 32;
                    continue _fun24845
                }
            case 15:
                var1 = var2.forEach;
                var0 = _closure1_slot16;
                var0 = var1.bind(var2)(var0);
            case 32:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        _fun24846: for (var _fun24846_ip = 0;;) switch (_fun24846_ip) {
            case 0:
                var0 = arg0;
                var4 = _closure1_slot7;
                var3 = var4.has;
                var2 = var0.type;
                var2 = var3.bind(var4)(var2);
                if (!var2) {
                    _fun24846_ip = 40;
                    continue _fun24846
                }
            case 28:
                var4 = var0.member;
                var3 = null;
                var2 = var3 != var4;
            case 40:
                if (!var2) {
                    _fun24846_ip = 190;
                    continue _fun24846
                }
            case 46:
                var4 = _closure1_slot9;
                var3 = var0.id;
                var2 = {};
                var5 = var0.id;
                var2.threadId = var5;
                var5 = var0.guild_id;
                var2.guildId = var5;
                var5 = var0.member;
                var5 = var5.flags;
                var2.flags = var5;
                var5 = var0.member;
                var5 = var5.muted;
                var2.muted = var5;
                var5 = var0.member;
                var5 = var5.muteConfig;
                var2.muteConfig = var5;
                var5 = global;
                var7 = var5.Date;
                var5 = var0.member;
                var8 = var5.joinTimestamp;
                var6 = var7.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var7
                    }
                });
                var9 = var6;
                var5 = new var9[var7](var8, var7);
                var5 = var5 instanceof Object ? var5 : var6;
                var2.joinTimestamp = var5;
                var4[var3] = var2;
                var2 = _closure1_slot17;
                var1 = var0.id;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
            case 190:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        _fun24847: for (var _fun24847_ip = 0;;) switch (_fun24847_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var1 = _closure1_slot9;
                var4 = var1[var2];
                var5 = _closure1_slot10;
                var1 = var5.clearTimer;
                var1 = var1.bind(var5)(var2);
                var5 = var4.muted;
                var1 = true;
                if (!(var1 !== var5)) {
                    _fun24847_ip = 98;
                    continue _fun24847
                }
            case 47:
                var1 = global;
                var6 = var1.Set;
                var10 = _closure1_slot11;
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var11 = var5;
                var1 = new var11[var6](var10, var9);
                var5 = var1 instanceof Object ? var1 : var5;
                _closure1_slot11 = var5;
                var1 = var5.delete;
                var1 = var1.bind(var5)(var2);
                _fun24847_ip = 235;
                continue _fun24847;
            case 98:
                var1 = global;
                var7 = var1.Set;
                var10 = _closure1_slot11;
                var6 = var7.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var7
                    }
                });
                var11 = var6;
                var5 = new var11[var7](var10, var9);
                var6 = var5 instanceof Object ? var5 : var6;
                _closure1_slot11 = var6;
                var5 = var6.add;
                var5 = var5.bind(var6)(var2);
                var6 = _closure1_slot10;
                var5 = var6.setTimer;
                var4 = var4.muteConfig;
                var3 = function() { // Environment: var3
                    var1 = _closure1_slot9;
                    var3 = _closure2_slot0;
                    var2 = var1[var3];
                    var1 = false;
                    var2.muted = var1;
                    var1 = global;
                    var4 = var1.Set;
                    var5 = _closure1_slot11;
                    var2 = var4.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var4
                        }
                    });
                    var6 = var2;
                    var1 = new var6[var4](var5, var4);
                    var2 = var1 instanceof Object ? var1 : var2;
                    _closure1_slot11 = var2;
                    var1 = var2.delete;
                    var1 = var1.bind(var2)(var3);
                    var1 = _closure1_slot12;
                    var0 = var1.emitChange;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
                };
                var3 = var5.bind(var6)(var2, var4, var3);
                if (!var3) {
                    _fun24847_ip = 235;
                    continue _fun24847
                }
            case 175:
                var3 = _closure1_slot9;
                var4 = var3[var2];
                var3 = false;
                var4.muted = var3;
                var4 = var1.Set;
                var10 = _closure1_slot11;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var11 = var3;
                var1 = new var11[var4](var10, var9);
                var1 = var1 instanceof Object ? var1 : var3;
                _closure1_slot11 = var1;
                var0 = var1.delete;
                var0 = var0.bind(var1)(var2);
            case 235:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var6 = function arg0() {
        _fun24849: for (var _fun24849_ip = 0;;) switch (_fun24849_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.guildId;
                var _closure2_slot0 = var1;
                var2 = var2.members;
                var3 = null;
                var1 = var3 != var1;
                if (!var1) {
                    _fun24849_ip = 33;
                    continue _fun24849
                }
            case 29:
                var1 = var3 != var2;
            case 33:
                if (!var1) {
                    _fun24849_ip = 51;
                    continue _fun24849
                }
            case 36:
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var4 = _closure1_slot9;
                    var3 = var0.id;
                    var2 = {};
                    var5 = var0.id;
                    var2.threadId = var5;
                    var5 = _closure2_slot0;
                    var2.guildId = var5;
                    var5 = var0.flags;
                    var2.flags = var5;
                    var5 = var0.muted;
                    var2.muted = var5;
                    var5 = var0.muteConfig;
                    var2.muteConfig = var5;
                    var5 = global;
                    var7 = var5.Date;
                    var8 = var0.joinTimestamp;
                    var6 = var7.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var7
                        }
                    });
                    var9 = var6;
                    var5 = new var9[var7](var8, var7);
                    var5 = var5 instanceof Object ? var5 : var6;
                    var2.joinTimestamp = var5;
                    var4[var3] = var2;
                    var2 = _closure1_slot17;
                    var1 = var0.id;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 51:
                var0 = undefined;
                return var0;
        }
    };
    var9 = function arg0() {
        _fun24851: for (var _fun24851_ip = 0;;) switch (_fun24851_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.guildId;
                var _closure2_slot0 = var3;
                var2 = var1.data;
                var1 = null;
                if (!(var1 != var3)) {
                    _fun24851_ip = 40;
                    continue _fun24851
                }
            case 25:
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var2 = var0.members;
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var4 = _closure1_slot9;
                        var3 = var0.id;
                        var2 = {};
                        var5 = var0.id;
                        var2.threadId = var5;
                        var5 = _closure2_slot0;
                        var2.guildId = var5;
                        var5 = var0.flags;
                        var2.flags = var5;
                        var5 = var0.muted;
                        var2.muted = var5;
                        var5 = var0.muteConfig;
                        var2.muteConfig = var5;
                        var5 = global;
                        var7 = var5.Date;
                        var8 = var0.joinTimestamp;
                        var6 = var7.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var7
                            }
                        });
                        var9 = var6;
                        var5 = new var9[var7](var8, var7);
                        var5 = var5 instanceof Object ? var5 : var6;
                        var2.joinTimestamp = var5;
                        var4[var3] = var2;
                        var2 = _closure1_slot17;
                        var1 = var0.id;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 40:
                var0 = undefined;
                return var0;
        }
    };
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var8 = {};
    var0 = true;
    var8.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var8);
    var0 = 0;
    var8 = var5[var0];
    var0 = undefined;
    var8 = var7.bind(var0)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var5[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var5[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var5[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var5[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot6 = var8;
    var8 = 5;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.ALL_CHANNEL_TYPES;
    var _closure1_slot7 = var8;
    var8 = 6;
    var8 = var5[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot8 = var8;
    var8 = {};
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var5[var8];
    var8 = var7.bind(var0)(var8);
    var10 = var8.prototype;
    var10 = Object.create(var10, {
        constructor: {
            value: var8
        }
    });
    var15 = var10;
    var8 = new var15[var8](var14);
    var8 = var8 instanceof Object ? var8 : var10;
    var _closure1_slot10 = var8;
    var1 = var1.Set;
    var8 = var1.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var1
        }
    });
    var15 = var8;
    var1 = new var15[var1](var14);
    var1 = var1 instanceof Object ? var1 : var8;
    var _closure1_slot11 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var8 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun24855: for (var _fun24855_ip = 0;;) switch (_fun24855_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun24855_ip = 69;
                        continue _fun24855
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun24855_ip = 105;
                    continue _fun24855;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
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
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot8;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(8);
        var0[0] = var4;
        var4 = {};
        var6 = 'hasJoined';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot9;
            var0 = arg0;
            var0 = var0 in var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'joinTimestamp';
        var4.key = var6;
        var6 = function arg0() {
            _fun24858: for (var _fun24858_ip = 0;;) switch (_fun24858_ip) {
                case 0:
                    var1 = _closure1_slot9;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun24858_ip = 31;
                        continue _fun24858
                    }
                case 25:
                    var0 = var1.joinTimestamp;
                case 31:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'flags';
        var4.key = var6;
        var6 = function arg0() {
            _fun24859: for (var _fun24859_ip = 0;;) switch (_fun24859_ip) {
                case 0:
                    var1 = _closure1_slot9;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun24859_ip = 30;
                        continue _fun24859
                    }
                case 25:
                    var0 = var1.flags;
                case 30:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getInitialOverlayState';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Object;
            var1 = var2.values;
            var0 = _closure1_slot9;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getMuteConfig';
        var4.key = var6;
        var6 = function arg0() {
            _fun24861: for (var _fun24861_ip = 0;;) switch (_fun24861_ip) {
                case 0:
                    var1 = _closure1_slot9;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun24861_ip = 31;
                        continue _fun24861
                    }
                case 25:
                    var0 = var1.muteConfig;
                case 31:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getMutedThreads';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot11;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'isMuted';
        var4.key = var6;
        var5 = function arg0() {
            var2 = _closure1_slot11;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var5;
        var0[7] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var1.bind(var0)(var8);
    var1 = 'JoinedThreadsStore';
    var8.displayName = var1;
    var1 = 10;
    var1 = var5[var1];
    var14 = var7.bind(var0)(var1);
    var1 = {};
    var10 = function arg0() {
        var2 = _closure1_slot10;
        var0 = var2.reset;
        var0 = var0.bind(var2)();
        var0 = global;
        var0 = var0.Set;
        var2 = var0.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var0
            }
        });
        var4 = var2;
        var0 = new var4[var0](var3);
        var0 = var0 instanceof Object ? var0 : var2;
        _closure1_slot11 = var0;
        var0 = {};
        _closure1_slot9 = var0;
        var0 = arg0;
        var2 = var0.guilds;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot15;
            var0 = undefined;
            var1 = arg0;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_OPEN = var10;
    var10 = function arg0() {
        var0 = arg0;
        var3 = var0.joinedThreads;
        var4 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var4.bind(var0)(var1);
        var4 = var1.bind(var0)(var3);
        var3 = var4.map;
        var1 = function(arg0) { // Environment: var1
            var1 = arg0;
            var0 = {};
            var5 = var0;
            var4 = var1;
            var2 = copyDataProperties(var5, var4);
            var2 = global;
            var3 = var2.Date;
            var5 = var1.joinTimestamp;
            var2 = var3.prototype;
            var2 = Object.create(var2, {
                constructor: {
                    value: var3
                }
            });
            var6 = var2;
            var1 = new var6[var3](var5, var4);
            var2 = var1 instanceof Object ? var1 : var2;
            var1 = 'joinTimestamp';
            var0[var1] = var2;
            return var0;
        };
        var4 = var3.bind(var4)(var1);
        var3 = var4.keyBy;
        var1 = 'threadId';
        var3 = var3.bind(var4)(var1);
        var1 = var3.value;
        var1 = var1.bind(var3)();
        _closure1_slot9 = var1;
        return var0;
    };
    var1.OVERLAY_INITIALIZE = var10;
    var10 = function arg0() {
        var0 = arg0;
        var2 = var0.guild;
        var4 = _closure1_slot14;
        var3 = var2.id;
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        var1 = _closure1_slot15;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.GUILD_CREATE = var10;
    var10 = function arg0() {
        var0 = arg0;
        var0 = var0.guild;
        var2 = _closure1_slot14;
        var1 = var0.id;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var1.GUILD_DELETE = var10;
    var10 = function arg0() {
        var0 = arg0;
        var2 = var0.channel;
        var1 = _closure1_slot16;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.THREAD_CREATE = var10;
    var1.THREAD_LIST_SYNC = var6;
    var1.SEARCH_MESSAGES_SUCCESS = var9;
    var1.MOD_VIEW_SEARCH_MESSAGES_SUCCESS = var9;
    var1.LOAD_THREADS_SUCCESS = var6;
    var1.LOAD_ARCHIVED_THREADS_SUCCESS = var6;
    var6 = function arg0() {
        _fun24871: for (var _fun24871_ip = 0;;) switch (_fun24871_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channel;
                var3 = var0.id;
                var1 = _closure1_slot9;
                var1 = var3 in var1;
                if (var1) {
                    _fun24871_ip = 31;
                    continue _fun24871
                }
            case 27:
                var1 = false;
                return var1;
            case 31:
                var1 = {};
                var4 = _closure1_slot9;
                var5 = var1;
                var3 = copyDataProperties(var5, var4);
                _closure1_slot9 = var1;
                var0 = var0.id;
                var0 = delete var1[var0];
                var0 = undefined;
                return var0;
        }
    };
    var1.THREAD_DELETE = var6;
    var6 = function arg0() {
        _fun24872: for (var _fun24872_ip = 0;;) switch (_fun24872_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot8;
                var2 = var3.getId;
                var3 = var2.bind(var3)();
                var2 = var0.userId;
                if (!(var3 === var2)) {
                    _fun24872_ip = 154;
                    continue _fun24872
                }
            case 32:
                var4 = _closure1_slot9;
                var3 = var0.id;
                var2 = {};
                var5 = var0.id;
                var2.threadId = var5;
                var5 = var0.guildId;
                var2.guildId = var5;
                var5 = var0.flags;
                var2.flags = var5;
                var5 = var0.muted;
                var2.muted = var5;
                var5 = var0.muteConfig;
                var2.muteConfig = var5;
                var5 = global;
                var7 = var5.Date;
                var8 = var0.joinTimestamp;
                var6 = var7.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var7
                    }
                });
                var9 = var6;
                var5 = new var9[var7](var8, var7);
                var5 = var5 instanceof Object ? var5 : var6;
                var2.joinTimestamp = var5;
                var4[var3] = var2;
                var2 = _closure1_slot17;
                var1 = var0.id;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            case 154:
                var0 = false;
                return var0;
        }
    };
    var1.THREAD_MEMBER_UPDATE = var6;
    var6 = function arg0() {
        _fun24873: for (var _fun24873_ip = 0;;) switch (_fun24873_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.id;
                var1 = var0.userId;
                var6 = var0.guildId;
                var2 = var0.isJoining;
                var4 = _closure1_slot8;
                var0 = var4.getId;
                var0 = var0.bind(var4)();
                var0 = var0 === var1;
                if (!var0) {
                    _fun24873_ip = 153;
                    continue _fun24873
                }
            case 48:
                var1 = null;
                var1 = var1 !== var6;
                if (!var1) {
                    _fun24873_ip = 150;
                    continue _fun24873
                }
            case 57:
                var4 = _closure1_slot9;
                if (var2) {
                    _fun24873_ip = 70;
                    continue _fun24873
                }
            case 64:
                var2 = delete var4[var5];
                _fun24873_ip = 148;
                continue _fun24873;
            case 70:
                var3 = {};
                var3.threadId = var5;
                var3.guildId = var6;
                var6 = 0;
                var3.flags = var6;
                var6 = true;
                var3.muted = var6;
                var6 = {};
                var7 = undefined;
                var6.end_time = var7;
                var3.muteConfig = var6;
                var6 = global;
                var6 = var6.Date;
                var7 = var6.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var6
                    }
                });
                var8 = var7;
                var6 = new var8[var6](var7);
                var6 = var6 instanceof Object ? var6 : var7;
                var3.joinTimestamp = var6;
                var4[var5] = var3;
                var2 = var3;
            case 148:
                var1 = undefined;
            case 150:
                var0 = var1;
            case 153:
                return var0;
        }
    };
    var1.THREAD_MEMBER_LOCAL_UPDATE = var6;
    var6 = function arg0() {
        _fun24874: for (var _fun24874_ip = 0;;) switch (_fun24874_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var1 = false;
                var _closure2_slot1 = var1;
                var6 = var2.removedMemberIds;
                var1 = null;
                var3 = var1 != var6;
                if (!var3) {
                    _fun24874_ip = 57;
                    continue _fun24874
                }
            case 30:
                var5 = var6.includes;
                var7 = _closure1_slot8;
                var4 = var7.getId;
                var4 = var4.bind(var7)();
                var3 = var5.bind(var6)(var4);
            case 57:
                if (!var3) {
                    _fun24874_ip = 76;
                    continue _fun24874
                }
            case 60:
                var5 = var2.id;
                var4 = _closure1_slot9;
                var3 = var5 in var4;
            case 76:
                if (!var3) {
                    _fun24874_ip = 114;
                    continue _fun24874
                }
            case 79:
                var4 = {};
                var8 = _closure1_slot9;
                var9 = var4;
                var5 = copyDataProperties(var9, var8);
                _closure1_slot9 = var4;
                var3 = var2.id;
                var3 = delete var4[var3];
                var3 = true;
                _closure2_slot1 = var3;
            case 114:
                var3 = var2.addedMembers;
                if (!(var1 != var3)) {
                    _fun24874_ip = 139;
                    continue _fun24874
                }
            case 124:
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var0
                    _fun24875: for (var _fun24875_ip = 0;;) switch (_fun24875_ip) {
                        case 0:
                            var6 = arg0;
                            var1 = var6.userId;
                            var3 = _closure1_slot8;
                            var0 = var3.getId;
                            var0 = var0.bind(var3)();
                            if (!(var1 === var0)) {
                                _fun24875_ip = 178;
                                continue _fun24875
                            }
                        case 32:
                            var5 = {};
                            var9 = _closure1_slot9;
                            var10 = var5;
                            var0 = copyDataProperties(var10, var9);
                            _closure1_slot9 = var5;
                            var0 = _closure2_slot0;
                            var4 = var0.id;
                            var3 = {};
                            var7 = var0.id;
                            var3.threadId = var7;
                            var7 = var0.guildId;
                            var3.guildId = var7;
                            var7 = var6.flags;
                            var3.flags = var7;
                            var7 = var6.muted;
                            var3.muted = var7;
                            var7 = var6.muteConfig;
                            var3.muteConfig = var7;
                            var7 = global;
                            var8 = var7.Date;
                            var10 = var6.joinTimestamp;
                            var7 = var8.prototype;
                            var7 = Object.create(var7, {
                                constructor: {
                                    value: var8
                                }
                            });
                            var11 = var7;
                            var6 = new var11[var8](var10, var9);
                            var6 = var6 instanceof Object ? var6 : var7;
                            var3.joinTimestamp = var6;
                            var5[var4] = var3;
                            var3 = _closure1_slot17;
                            var2 = var0.id;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2);
                            var0 = true;
                            _closure2_slot1 = var0;
                        case 178:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
            case 139:
                var0 = _closure2_slot1;
                return var0;
        }
    };
    var1.THREAD_MEMBERS_UPDATE = var6;
    var6 = var8.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var15 = var6;
    var13 = var1;
    var1 = new var15[var8](var14, var13, var12);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot12 = var1;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/threads/JoinedThreadsStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1376, 1216, 3094, 22, 566, 806, 2]);