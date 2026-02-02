// modules/chat/native/ChatUpdatesQueue.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
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
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.NativeEventEmitter;
    var _closure1_slot2 = var6;
    var3 = var3.NativeModules;
    var3 = var3.DCDChatBlockerManager;
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function arg0, arg1() {
            var2 = this;
            var _closure3_slot0 = var2;
            var5 = _closure1_slot0;
            var4 = _closure2_slot0;
            var0 = undefined;
            var4 = var5.bind(var0)(var2, var4);
            var4 = global;
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
            var2.blockers = var4;
            var4 = new Array(0);
            var2.queue = var4;
            var4 = null;
            var2.queueStartTimestamp = var4;
            var4 = function(arg0) { // Environment: var1
                var1 = _closure3_slot0;
                var0 = arg0;
                var1.onFlushItem = var0;
                var0 = undefined;
                return var0;
            };
            var2.setOnFlushItem = var4;
            var4 = arg0;
            var2.getReactTag = var4;
            var4 = arg1;
            var2.onFlushItem = var4;
            var5 = _closure1_slot2;
            var8 = _closure1_slot3;
            var4 = var5.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var5
                }
            });
            var9 = var4;
            var3 = new var9[var5](var8, var7);
            var3 = var3 instanceof Object ? var3 : var4;
            var2.eventEmitter = var3;
            var6 = var2.eventEmitter;
            var5 = var6.addListener;
            var4 = 'AddBlocker';
            var3 = function(arg0) { // Environment: var1
                _fun77004: for (var _fun77004_ip = 0;;) switch (_fun77004_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.blockerId;
                        var4 = var0.reactTag;
                        var3 = _closure3_slot0;
                        var1 = var3.getReactTag;
                        var3 = var1.bind(var3)();
                        var1 = null;
                        var1 = var1 != var4;
                        if (!var1) {
                            _fun77004_ip = 45;
                            continue _fun77004
                        }
                    case 41:
                        var1 = var4 === var3;
                    case 45:
                        if (!var1) {
                            _fun77004_ip = 65;
                            continue _fun77004
                        }
                    case 48:
                        var1 = _closure3_slot0;
                        var0 = var1.addBlocker;
                        var0 = var0.bind(var1)(var2);
                    case 65:
                        var0 = undefined;
                        return var0;
                }
            };
            var3 = var5.bind(var6)(var4, var3);
            var2.addBlockerSubscription = var3;
            var5 = var2.eventEmitter;
            var4 = var5.addListener;
            var3 = 'RemoveBlocker';
            var1 = function(arg0) { // Environment: var1
                _fun77005: for (var _fun77005_ip = 0;;) switch (_fun77005_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.blockerId;
                        var4 = var0.reactTag;
                        var3 = _closure3_slot0;
                        var1 = var3.getReactTag;
                        var3 = var1.bind(var3)();
                        var1 = null;
                        var1 = var1 != var4;
                        if (!var1) {
                            _fun77005_ip = 45;
                            continue _fun77005
                        }
                    case 41:
                        var1 = var4 === var3;
                    case 45:
                        if (!var1) {
                            _fun77005_ip = 65;
                            continue _fun77005
                        }
                    case 48:
                        var1 = _closure3_slot0;
                        var0 = var1.removeBlocker;
                        var0 = var0.bind(var1)(var2);
                    case 65:
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = var4.bind(var5)(var3, var1);
            var2.removeBlockerSubscription = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'hasUpdates';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0.queue;
            var1 = var0.length;
            var0 = 0;
            var0 = var1 > var0;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(8);
        var1[0] = var0;
        var0 = {};
        var5 = 'isBlocking';
        var0.key = var5;
        var5 = function() {
            _fun77007: for (var _fun77007_ip = 0;;) switch (_fun77007_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.hasUpdates;
                    var0 = var0.bind(var1)();
                    if (var0) {
                        _fun77007_ip = 33;
                        continue _fun77007
                    }
                case 16:
                    var1 = var1.blockers;
                    var2 = var1.size;
                    var1 = 0;
                    var0 = var2 > var1;
                case 33:
                    return var0;
            }
        };
        var0.get = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'addBlocker';
        var0.key = var5;
        var5 = function arg0() {
            _fun77008: for (var _fun77008_ip = 0;;) switch (_fun77008_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun77008_ip = 28;
                        continue _fun77008
                    }
                case 9:
                    var0 = this;
                    var1 = var0.blockers;
                    var0 = var1.add;
                    var0 = var0.bind(var1)(var2);
                case 28:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'removeBlocker';
        var0.key = var5;
        var5 = function arg0() {
            _fun77009: for (var _fun77009_ip = 0;;) switch (_fun77009_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun77009_ip = 55;
                        continue _fun77009
                    }
                case 12:
                    var2 = var1.blockers;
                    var0 = var2.delete;
                    var0 = var0.bind(var2)(var3);
                    var0 = var1.blockers;
                    var2 = var0.size;
                    var0 = 0;
                    if (!(var0 === var2)) {
                        _fun77009_ip = 55;
                        continue _fun77009
                    }
                case 45:
                    var0 = var1.flush;
                    var0 = var0.bind(var1)();
                case 55:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'add';
        var0.key = var5;
        var5 = function arg0() {
            _fun77010: for (var _fun77010_ip = 0;;) switch (_fun77010_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.queueStartTimestamp;
                    var3 = null;
                    if (!(var3 == var0)) {
                        _fun77010_ip = 38;
                        continue _fun77010
                    }
                case 15:
                    var0 = global;
                    var2 = var0.Date;
                    var0 = var2.now;
                    var0 = var0.bind(var2)();
                    var1.queueStartTimestamp = var0;
                case 38:
                    var4 = var1.queue;
                    var2 = var4.push;
                    var0 = arg0;
                    var0 = var2.bind(var4)(var0);
                    var0 = var1.queue;
                    var2 = var0.length;
                    var0 = 100;
                    var0 = var2 > var0;
                    var2 = var1.queueStartTimestamp;
                    var2 = var3 != var2;
                    if (!var2) {
                        _fun77010_ip = 125;
                        continue _fun77010
                    }
                case 88:
                    var3 = global;
                    var4 = var3.Date;
                    var3 = var4.now;
                    var4 = var3.bind(var4)();
                    var3 = var1.queueStartTimestamp;
                    var4 = var4 - var3;
                    var3 = 30000;
                    var2 = var4 > var3;
                case 125:
                    if (var0) {
                        _fun77010_ip = 131;
                        continue _fun77010
                    }
                case 128:
                    var0 = var2;
                case 131:
                    if (!var0) {
                        _fun77010_ip = 160;
                        continue _fun77010
                    }
                case 134:
                    var2 = var1.blockers;
                    var0 = var2.clear;
                    var0 = var0.bind(var2)();
                    var0 = var1.flush;
                    var0 = var0.bind(var1)();
                case 160:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'tryFlush';
        var0.key = var5;
        var5 = function() {
            _fun77011: for (var _fun77011_ip = 0;;) switch (_fun77011_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.blockers;
                    var2 = var0.size;
                    var0 = 0;
                    if (!(var0 === var2)) {
                        _fun77011_ip = 30;
                        continue _fun77011
                    }
                case 20:
                    var0 = var1.flush;
                    var0 = var0.bind(var1)();
                case 30:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'flush';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var _closure3_slot0 = var1;
            var2 = null;
            var1.queueStartTimestamp = var2;
            var3 = var1.queue;
            var2 = var3.forEach;
            var0 = function(arg0) { // Environment: var0
                _fun77013: for (var _fun77013_ip = 0;;) switch (_fun77013_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = null;
                        if (!(var1 != var3)) {
                            _fun77013_ip = 41;
                            continue _fun77013
                        }
                    case 9:
                        var2 = _closure3_slot0;
                        var2 = var2.onFlushItem;
                        if (!(var1 != var2)) {
                            _fun77013_ip = 41;
                            continue _fun77013
                        }
                    case 26:
                        var1 = var2.call;
                        var0 = _closure3_slot0;
                        var0 = var1.bind(var2)(var0, var3);
                    case 41:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = var2.bind(var3)(var0);
            var0 = new Array(0);
            var1.queue = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'cleanup';
        var0.key = var5;
        var4 = function() {
            var0 = this;
            var2 = var0.addBlockerSubscription;
            var1 = var2.remove;
            var1 = var1.bind(var2)();
            var1 = var0.removeBlockerSubscription;
            var0 = var1.remove;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[7] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat/native/ChatUpdatesQueue.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 27, 2]);