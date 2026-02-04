// lib/guild/GuildSubscriptions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var4;
    var0 = function arg0() {
        _fun50615: for (var _fun50615_ip = 0;;) switch (_fun50615_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun50615_ip = 20;
                    continue _fun50615
                }
            case 12:
                var1 = 'null';
                var0 = var1 !== var2;
            case 20:
                if (!var0) {
                    _fun50615_ip = 34;
                    continue _fun50615
                }
            case 23:
                var1 = _closure1_slot6;
                var0 = var2 !== var1;
            case 34:
                if (!var0) {
                    _fun50615_ip = 45;
                    continue _fun50615
                }
            case 37:
                var1 = 'undefined';
                var0 = var1 !== var2;
            case 45:
                if (!var0) {
                    _fun50615_ip = 59;
                    continue _fun50615
                }
            case 48:
                var1 = _closure1_slot5;
                var0 = var2 !== var1;
            case 59:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var5);
    var0 = 0;
    var5 = var4[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var4[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var4[var5];
    var5 = var3.bind(var0)(var5);
    var6 = var5.FAVORITES;
    var _closure1_slot5 = var6;
    var5 = var5.ME;
    var _closure1_slot6 = var5;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function arg0() {
            var2 = this;
            var _closure3_slot0 = var2;
            var5 = _closure1_slot3;
            var4 = _closure2_slot0;
            var0 = undefined;
            var4 = var5.bind(var0)(var2, var4);
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var4 = 3;
            var4 = var5[var4];
            var8 = var6.bind(var0)(var4);
            var4 = var8.prototype;
            var7 = Object.create(var4, {
                constructor: {
                    value: var8
                }
            });
            var10 = function(arg0, arg1) { // Environment: var1
                var3 = _closure3_slot0;
                var2 = var3._enqueue;
                var1 = {};
                var0 = arg1;
                var1.members = var0;
                var0 = arg0;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var11 = var7;
            var4 = new var11[var8](var10, var9);
            var4 = var4 instanceof Object ? var4 : var7;
            var2._members = var4;
            var4 = 4;
            var4 = var5[var4];
            var8 = var6.bind(var0)(var4);
            var4 = var8.prototype;
            var7 = Object.create(var4, {
                constructor: {
                    value: var8
                }
            });
            var10 = function(arg0, arg1) { // Environment: var1
                var3 = _closure3_slot0;
                var2 = var3._enqueue;
                var1 = {};
                var0 = arg1;
                var1.channels = var0;
                var0 = arg0;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var11 = var7;
            var4 = new var11[var8](var10, var9);
            var4 = var4 instanceof Object ? var4 : var7;
            var2._channels = var4;
            var4 = 5;
            var4 = var5[var4];
            var7 = var6.bind(var0)(var4);
            var4 = var7.prototype;
            var6 = Object.create(var4, {
                constructor: {
                    value: var7
                }
            });
            var10 = function(arg0, arg1) { // Environment: var1
                var3 = _closure3_slot0;
                var2 = var3._enqueue;
                var1 = {};
                var0 = arg1;
                var1.thread_member_lists = var0;
                var0 = arg0;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var11 = var6;
            var4 = new var11[var7](var10, var9);
            var4 = var4 instanceof Object ? var4 : var6;
            var2._threadMemberLists = var4;
            var4 = global;
            var6 = var4.Set;
            var7 = var6.prototype;
            var7 = Object.create(var7, {
                constructor: {
                    value: var6
                }
            });
            var11 = var7;
            var6 = new var11[var6](var10);
            var6 = var6 instanceof Object ? var6 : var7;
            var2._typing = var6;
            var6 = var4.Set;
            var7 = var6.prototype;
            var7 = Object.create(var7, {
                constructor: {
                    value: var6
                }
            });
            var11 = var7;
            var6 = new var11[var6](var10);
            var6 = var6 instanceof Object ? var6 : var7;
            var2._threads = var6;
            var6 = var4.Set;
            var7 = var6.prototype;
            var7 = Object.create(var7, {
                constructor: {
                    value: var6
                }
            });
            var11 = var7;
            var6 = new var11[var6](var10);
            var6 = var6 instanceof Object ? var6 : var7;
            var2._activities = var6;
            var6 = var4.Set;
            var7 = var6.prototype;
            var7 = Object.create(var7, {
                constructor: {
                    value: var6
                }
            });
            var11 = var7;
            var6 = new var11[var6](var10);
            var6 = var6 instanceof Object ? var6 : var7;
            var2._memberUpdates = var6;
            var4 = var4.Set;
            var6 = var4.prototype;
            var6 = Object.create(var6, {
                constructor: {
                    value: var4
                }
            });
            var11 = var6;
            var4 = new var11[var4](var10);
            var4 = var4 instanceof Object ? var4 : var6;
            var2._subscribed = var4;
            var4 = {};
            var2._pending = var4;
            var4 = _closure1_slot0;
            var3 = 6;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var5 = var3.DelayedCall;
            var3 = var5.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var5
                }
            });
            var10 = 0;
            var9 = function() { // Environment: var1
                var1 = _closure3_slot0;
                var0 = var1.flush;
                var0 = var0.bind(var1)();
                return var0;
            };
            var11 = var3;
            var1 = new var11[var5](var10, var9, var8);
            var1 = var1 instanceof Object ? var1 : var3;
            var2._flush = var1;
            var1 = arg0;
            var2._onChange = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = '_enqueue';
        var0.key = var1;
        var1 = function arg0, arg1() {
            var3 = arg0;
            var0 = this;
            var2 = var0._pending;
            var1 = {};
            var4 = var0._pending;
            var5 = var4[var3];
            var6 = var1;
            var4 = copyDataProperties(var6, var5);
            var5 = arg1;
            var6 = var1;
            var4 = copyDataProperties(var6, var5);
            var2[var3] = var1;
            var1 = var0._flush;
            var0 = var1.delay;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(19);
        var1[0] = var0;
        var0 = {};
        var5 = 'reset';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var2 = var0._subscribed;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var1 = {};
            var0._pending = var1;
            var2 = var0._members;
            var1 = var2.reset;
            var1 = var1.bind(var2)();
            var2 = var0._memberUpdates;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var2 = var0._channels;
            var1 = var2.reset;
            var1 = var1.bind(var2)();
            var2 = var0._threadMemberLists;
            var1 = var2.reset;
            var1 = var1.bind(var2)();
            var2 = var0._typing;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var2 = var0._threads;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var1 = var0._activities;
            var0 = var1.clear;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'get';
        var0.key = var5;
        var5 = function arg0() {
            var3 = arg0;
            var1 = this;
            var0 = {};
            var4 = var1._typing;
            var2 = var4.has;
            var2 = var2.bind(var4)(var3);
            var0.typing = var2;
            var4 = var1._threads;
            var2 = var4.has;
            var2 = var2.bind(var4)(var3);
            var0.threads = var2;
            var4 = var1._activities;
            var2 = var4.has;
            var2 = var2.bind(var4)(var3);
            var0.activities = var2;
            var4 = var1._members;
            var2 = var4.get;
            var2 = var2.bind(var4)(var3);
            var0.members = var2;
            var4 = var1._memberUpdates;
            var2 = var4.has;
            var2 = var2.bind(var4)(var3);
            var0.member_updates = var2;
            var4 = var1._channels;
            var2 = var4.get;
            var2 = var2.bind(var4)(var3);
            var0.channels = var2;
            var2 = var1._threadMemberLists;
            var1 = var2.get;
            var1 = var1.bind(var2)(var3);
            var0.thread_member_lists = var1;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'getSubscribedThreadIds';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0._threadMemberLists;
            var0 = var1.getSubscribedThreadIds;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'isSubscribedToThreads';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var2 = var0._threads;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'isSubscribedToAnyMember';
        var0.key = var5;
        var5 = function arg0() {
            _fun50627: for (var _fun50627_ip = 0;;) switch (_fun50627_ip) {
                case 0:
                    var0 = this;
                    var2 = var0._members;
                    var1 = var2.isSubscribedToAnyMember;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun50627_ip = 35;
                        continue _fun50627
                    }
                case 32:
                    var0 = var1;
                case 35:
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'isSubscribedToMemberUpdates';
        var0.key = var5;
        var5 = function arg0() {
            _fun50628: for (var _fun50628_ip = 0;;) switch (_fun50628_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.get;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.member_updates;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun50628_ip = 34;
                        continue _fun50628
                    }
                case 31:
                    var0 = var1;
                case 34:
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'forEach';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var2 = var0._subscribed;
            var1 = var2.forEach;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'clearWithoutFlushing';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun50630: for (var _fun50630_ip = 0;;) switch (_fun50630_ip) {
                case 0:
                    var2 = arg0;
                    var1 = arg1;
                    var0 = this;
                    var3 = !var1;
                    if (!var3) {
                        _fun50630_ip = 31;
                        continue _fun50630
                    }
                case 15:
                    var5 = var0._threads;
                    var4 = var5.has;
                    var3 = var4.bind(var5)(var2);
                case 31:
                    if (var3) {
                        _fun50630_ip = 50;
                        continue _fun50630
                    }
                case 34:
                    var4 = var0._subscribed;
                    var3 = var4.delete;
                    var3 = var3.bind(var4)(var2);
                case 50:
                    var3 = var0._pending;
                    var3 = delete var3[var2];
                    var4 = var0._members;
                    var3 = var4.clear;
                    var3 = var3.bind(var4)(var2);
                    var4 = var0._channels;
                    var3 = var4.clear;
                    var3 = var3.bind(var4)(var2);
                    var4 = var0._threadMemberLists;
                    var3 = var4.clear;
                    var3 = var3.bind(var4)(var2);
                    var4 = var0._typing;
                    var3 = var4.delete;
                    var3 = var3.bind(var4)(var2);
                    var4 = var0._memberUpdates;
                    var3 = var4.delete;
                    var3 = var3.bind(var4)(var2);
                    if (!var1) {
                        _fun50630_ip = 162;
                        continue _fun50630
                    }
                case 146:
                    var3 = var0._threads;
                    var1 = var3.delete;
                    var1 = var1.bind(var3)(var2);
                case 162:
                    var1 = var0._activities;
                    var0 = var1.delete;
                    var0 = var0.bind(var1)(var2);
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'flush';
        var0.key = var5;
        var5 = function() {
            var2 = this;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var0 = 7;
            var3 = var3[var0];
            var0 = undefined;
            var5 = var4.bind(var0)(var3);
            var4 = var5.forEach;
            var3 = var2._pending;
            var1 = function(arg0, arg1) { // Environment: var1
                var0 = _closure3_slot0;
                var2 = var0._subscribed;
                var1 = var2.add;
                var0 = arg1;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var1 = var4.bind(var5)(var3, var1);
            var3 = var2._onChange;
            var1 = var2._pending;
            var1 = var3.bind(var2)(var1);
            var1 = {};
            var2._pending = var1;
            return var0;
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'subscribeUser';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun50633: for (var _fun50633_ip = 0;;) switch (_fun50633_ip) {
                case 0:
                    var4 = arg0;
                    var1 = _closure1_slot7;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var4);
                    if (!var1) {
                        _fun50633_ip = 44;
                        continue _fun50633
                    }
                case 20:
                    var1 = this;
                    var3 = var1._members;
                    var2 = var3.subscribe;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var4, var1);
                case 44:
                    return var0;
            }
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'unsubscribeUser';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun50634: for (var _fun50634_ip = 0;;) switch (_fun50634_ip) {
                case 0:
                    var4 = arg0;
                    var1 = _closure1_slot7;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var4);
                    if (!var1) {
                        _fun50634_ip = 44;
                        continue _fun50634
                    }
                case 20:
                    var1 = this;
                    var3 = var1._members;
                    var2 = var3.unsubscribe;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var4, var1);
                case 44:
                    return var0;
            }
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'subscribeChannel';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun50635: for (var _fun50635_ip = 0;;) switch (_fun50635_ip) {
                case 0:
                    var5 = arg0;
                    var1 = _closure1_slot7;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var5);
                    var0 = !var1;
                    var0 = !var0;
                    if (!var1) {
                        _fun50635_ip = 54;
                        continue _fun50635
                    }
                case 26:
                    var1 = this;
                    var4 = var1._channels;
                    var3 = var4.subscribe;
                    var2 = arg1;
                    var1 = arg2;
                    var0 = var3.bind(var4)(var5, var2, var1);
                case 54:
                    return var0;
            }
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'subscribeToMemberUpdates';
        var0.key = var5;
        var5 = function arg0() {
            _fun50636: for (var _fun50636_ip = 0;;) switch (_fun50636_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var2 = _closure1_slot7;
                    var0 = undefined;
                    var2 = var2.bind(var0)(var3);
                    if (var2) {
                        _fun50636_ip = 27;
                        continue _fun50636
                    }
                case 23:
                    var2 = false;
                    return var2;
                case 27:
                    var4 = var1._enqueue;
                    var2 = {};
                    var5 = true;
                    var2.member_updates = var5;
                    var2 = var4.bind(var1)(var3, var2);
                    var2 = var1._memberUpdates;
                    var1 = var2.add;
                    var1 = var1.bind(var2)(var3);
                    return var0;
            }
        };
        var0.value = var5;
        var1[13] = var0;
        var0 = {};
        var5 = 'unsubscribeFromMemberUpdates';
        var0.key = var5;
        var5 = function arg0() {
            _fun50637: for (var _fun50637_ip = 0;;) switch (_fun50637_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var1 = _closure1_slot7;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var4);
                    var5 = false;
                    if (var1) {
                        _fun50637_ip = 27;
                        continue _fun50637
                    }
                case 25:
                    return var5;
                case 27:
                    var2 = var3._enqueue;
                    var1 = {};
                    var1.member_updates = var5;
                    var1 = var2.bind(var3)(var4, var1);
                    return var0;
            }
        };
        var0.value = var5;
        var1[14] = var0;
        var0 = {};
        var5 = 'subscribeThreadMemberList';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun50638: for (var _fun50638_ip = 0;;) switch (_fun50638_ip) {
                case 0:
                    var5 = arg0;
                    var1 = _closure1_slot7;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var5);
                    var0 = !var1;
                    var0 = !var0;
                    if (!var1) {
                        _fun50638_ip = 54;
                        continue _fun50638
                    }
                case 26:
                    var1 = this;
                    var4 = var1._threadMemberLists;
                    var3 = var4.subscribe;
                    var2 = arg1;
                    var1 = arg2;
                    var0 = var3.bind(var4)(var5, var2, var1);
                case 54:
                    return var0;
            }
        };
        var0.value = var5;
        var1[15] = var0;
        var0 = {};
        var5 = 'unsubscribeThreadMemberList';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun50639: for (var _fun50639_ip = 0;;) switch (_fun50639_ip) {
                case 0:
                    var4 = arg0;
                    var1 = _closure1_slot7;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var4);
                    var0 = !var1;
                    var0 = !var0;
                    if (!var1) {
                        _fun50639_ip = 50;
                        continue _fun50639
                    }
                case 26:
                    var1 = this;
                    var3 = var1._threadMemberLists;
                    var2 = var3.unsubscribe;
                    var1 = arg1;
                    var0 = var2.bind(var3)(var4, var1);
                case 50:
                    return var0;
            }
        };
        var0.value = var5;
        var1[16] = var0;
        var0 = {};
        var5 = 'subscribeToGuild';
        var0.key = var5;
        var5 = function arg0() {
            var4 = arg0;
            var3 = this;
            var2 = var3._subscribeToFeature;
            var1 = var3._typing;
            var0 = {};
            var5 = true;
            var0.typing = var5;
            var0 = var2.bind(var3)(var4, var1, var0);
            var2 = var3._subscribeToFeature;
            var1 = var3._activities;
            var0 = {};
            var0.activities = var5;
            var0 = var2.bind(var3)(var4, var1, var0);
            var2 = var3._subscribeToFeature;
            var1 = var3._threads;
            var0 = {};
            var0.threads = var5;
            var0 = var2.bind(var3)(var4, var1, var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[17] = var0;
        var0 = {};
        var5 = '_subscribeToFeature';
        var0.key = var5;
        var4 = function arg0, arg1, arg2() {
            _fun50641: for (var _fun50641_ip = 0;;) switch (_fun50641_ip) {
                case 0:
                    var4 = arg0;
                    var2 = arg1;
                    var3 = this;
                    var1 = _closure1_slot7;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var4);
                    if (!var1) {
                        _fun50641_ip = 64;
                        continue _fun50641
                    }
                case 26:
                    var1 = var2.has;
                    var1 = var1.bind(var2)(var4);
                    if (var1) {
                        _fun50641_ip = 64;
                        continue _fun50641
                    }
                case 39:
                    var1 = var2.add;
                    var1 = var1.bind(var2)(var4);
                    var2 = var3._enqueue;
                    var1 = arg2;
                    var1 = var2.bind(var3)(var4, var1);
                case 64:
                    return var0;
            }
        };
        var0.value = var4;
        var1[18] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var5 = 8;
    var5 = var4[var5];
    var7 = var3.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'lib/guild/GuildSubscriptions.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var1;
    var1 = 4;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.MINIMUM_RANGE;
    var2.MINIMUM_RANGE = var5;
    var1 = var4[var1];
    var1 = var3.bind(var0)(var1);
    var1 = var1.DEFAULT_RANGES;
    var2.DEFAULT_RANGES = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 660, 5674, 5675, 5676, 3630, 22, 2]);