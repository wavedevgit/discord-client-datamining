// modules/forums/tracking/ForumPostAnalyticsManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun53452: for (var _fun53452_ip = 0;;) switch (_fun53452_ip) {
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
                _fun53452_ip = 74;
                continue _fun53452;
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
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun53456: for (var _fun53456_ip = 0;;) switch (_fun53456_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun53456_ip = 86;
                        continue _fun53456
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun53456_ip = 120;
                    continue _fun53456;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = {};
                    var0.readStateSnapshots = var2;
                    var2 = {};
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleChannelSelect;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.CHANNEL_SELECT = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleThreadCreate;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.THREAD_CREATE = var3;
                    var0.actions = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun53459: for (var _fun53459_ip = 0;;) switch (_fun53459_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = var0.channelId;
                                var1 = null;
                                if (!(var1 != var3)) {
                                    _fun53459_ip = 83;
                                    continue _fun53459
                                }
                            case 14:
                                var2 = _closure1_slot10;
                                var0 = var2.getChannel;
                                var0 = var0.bind(var2)(var3);
                                var1 = var1 != var0;
                                if (!var1) {
                                    _fun53459_ip = 48;
                                    continue _fun53459
                                }
                            case 38:
                                var2 = var0.isForumLikeChannel;
                                var1 = var2.bind(var0)();
                            case 48:
                                if (!var1) {
                                    _fun53459_ip = 83;
                                    continue _fun53459
                                }
                            case 51:
                                var2 = _closure3_slot0;
                                var1 = {};
                                var2.readStateSnapshots = var1;
                                var1 = var2.processForumChannel;
                                var0 = var0.guild_id;
                                var0 = var1.bind(var2)(var0, var3);
                            case 83:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleChannelSelect = var2;
                    var2 = function(arg0, arg1) { // Environment: var1
                        var4 = _closure1_slot8;
                        var3 = var4.getThreadsForParent;
                        var2 = arg0;
                        var1 = arg1;
                        var3 = var3.bind(var4)(var2, var1);
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 8;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.keys;
                        var3 = var1.bind(var2)(var3);
                        var2 = var3.forEach;
                        var1 = function(arg0) { // Environment: var1
                            _fun53461: for (var _fun53461_ip = 0;;) switch (_fun53461_ip) {
                                case 0:
                                    var3 = arg0;
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var0 = 9;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var2 = var2.bind(var0)(var1);
                                    var1 = var2.getForumPostReadStatesById;
                                    var2 = var1.bind(var2)(var3);
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun53461_ip = 62;
                                        continue _fun53461
                                    }
                                case 45:
                                    var1 = _closure3_slot0;
                                    var1 = var1.readStateSnapshots;
                                    var1[var3] = var2;
                                case 62:
                                    return var0;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.processForumChannel = var2;
                    var1 = function(arg0) { // Environment: var1
                        var0 = _closure3_slot0;
                        var1 = var0.readStateSnapshots;
                        var0 = arg0;
                        var0 = var1[var0];
                        return var0;
                    };
                    var0.getReadStateSnapshotAnalytics = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var4 = {};
        var5 = 'handleThreadCreate';
        var4.key = var5;
        var0 = function arg0() {
            _fun53463: for (var _fun53463_ip = 0;;) switch (_fun53463_ip) {
                case 0:
                    var0 = arg0;
                    var0 = var0.channel;
                    var1 = var0.isForumPost;
                    var1 = var1.bind(var0)();
                    if (!var1) {
                        _fun53463_ip = 81;
                        continue _fun53463
                    }
                case 21:
                    var4 = var0.ownerId;
                    var2 = _closure1_slot9;
                    var1 = var2.getId;
                    var3 = var1.bind(var2)();
                    var1 = this;
                    var2 = var1.readStateSnapshots;
                    var1 = var0.id;
                    var0 = {};
                    var3 = var4 === var3;
                    var3 = !var3;
                    var0.isNew = var3;
                    var0.hasUnreads = var3;
                    var2[var1] = var0;
                case 81:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/tracking/ForumPostAnalyticsManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 4190, 1216, 1372, 21, 6441, 4265, 2]);