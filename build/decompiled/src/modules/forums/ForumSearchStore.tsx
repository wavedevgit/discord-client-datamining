// modules/forums/ForumSearchStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() {
        _fun53522: for (var _fun53522_ip = 0;;) switch (_fun53522_ip) {
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
                _fun53522_ip = 74;
                continue _fun53522;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot7 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function arg0() {
        _fun53525: for (var _fun53525_ip = 0;;) switch (_fun53525_ip) {
            case 0:
                var2 = _closure1_slot5;
                var1 = var2.getChannel;
                var0 = arg0;
                var2 = var1.bind(var2)(var0);
                var0 = null;
                var0 = var0 == var2;
                if (var0) {
                    _fun53525_ip = 42;
                    continue _fun53525
                }
            case 29:
                var1 = var2.isForumLikeChannel;
                var1 = var1.bind(var2)();
                var0 = !var1;
            case 42:
                var0 = !var0;
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function arg0() {
        _fun53526: for (var _fun53526_ip = 0;;) switch (_fun53526_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot6;
                var0 = var0[var2];
                var3 = null;
                if (!(var3 == var0)) {
                    _fun53526_ip = 34;
                    continue _fun53526
                }
            case 20:
                var0 = {
                    'query': null,
                    'loading': false,
                    'results': null
                };
            case 34:
                var1 = _closure1_slot6;
                var1[var2] = var0;
                return var0;
        }
    };
    var _closure1_slot9 = var0;
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
    var1 = {};
    var _closure1_slot6 = var1;
    var1 = 6;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun53528: for (var _fun53528_ip = 0;;) switch (_fun53528_ip) {
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
                    var0 = _closure1_slot7;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun53528_ip = 69;
                        continue _fun53528
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun53528_ip = 105;
                    continue _fun53528;
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
        var0 = function() {
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot5;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'getSearchQuery';
        var4.key = var6;
        var6 = function arg0() {
            _fun53530: for (var _fun53530_ip = 0;;) switch (_fun53530_ip) {
                case 0:
                    var1 = _closure1_slot6;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun53530_ip = 31;
                        continue _fun53530
                    }
                case 25:
                    var0 = var1.query;
                case 31:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getSearchLoading';
        var4.key = var6;
        var6 = function arg0() {
            _fun53531: for (var _fun53531_ip = 0;;) switch (_fun53531_ip) {
                case 0:
                    var1 = _closure1_slot6;
                    var0 = arg0;
                    var2 = var1[var0];
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun53531_ip = 31;
                        continue _fun53531
                    }
                case 25:
                    var1 = var2.loading;
                case 31:
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun53531_ip = 41;
                        continue _fun53531
                    }
                case 38:
                    var0 = var1;
                case 41:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getSearchResults';
        var4.key = var6;
        var6 = function arg0() {
            _fun53532: for (var _fun53532_ip = 0;;) switch (_fun53532_ip) {
                case 0:
                    var1 = _closure1_slot6;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun53532_ip = 31;
                        continue _fun53532
                    }
                case 25:
                    var0 = var1.results;
                case 31:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getHasSearchResults';
        var4.key = var6;
        var5 = function arg0() {
            _fun53533: for (var _fun53533_ip = 0;;) switch (_fun53533_ip) {
                case 0:
                    var1 = _closure1_slot6;
                    var0 = arg0;
                    var1 = var1[var0];
                    var2 = null;
                    var3 = var2 == var1;
                    var0 = undefined;
                    if (var3) {
                        _fun53533_ip = 31;
                        continue _fun53533
                    }
                case 25:
                    var0 = var1.results;
                case 31:
                    var0 = var2 != var0;
                    if (!var0) {
                        _fun53533_ip = 55;
                        continue _fun53533
                    }
                case 38:
                    var1 = var1.results;
                    var2 = var1.length;
                    var1 = 0;
                    var0 = var2 > var1;
                case 55:
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'ForumSearchStore';
    var6.displayName = var1;
    var1 = 7;
    var1 = var4[var1];
    var10 = var5.bind(var0)(var1);
    var1 = {};
    var7 = function() {
        var0 = {};
        _closure1_slot6 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_OPEN = var7;
    var7 = function arg0() {
        _fun53535: for (var _fun53535_ip = 0;;) switch (_fun53535_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channel;
                var _closure2_slot0 = var0;
                var3 = var0.parent_id;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun53535_ip = 108;
                    continue _fun53535
                }
            case 26:
                var2 = _closure1_slot6;
                var5 = var2[var3];
                if (!(var0 != var5)) {
                    _fun53535_ip = 104;
                    continue _fun53535
                }
            case 41:
                var2 = _closure1_slot6;
                var1 = {};
                var9 = var1;
                var8 = var5;
                var6 = copyDataProperties(var9, var8);
                var7 = var5.results;
                var6 = var0 == var7;
                var0 = undefined;
                var5 = undefined;
                if (var6) {
                    _fun53535_ip = 89;
                    continue _fun53535
                }
            case 74:
                var6 = var7.filter;
                var4 = function(arg0) { // Environment: var4
                    var0 = _closure2_slot0;
                    var1 = var0.id;
                    var0 = arg0;
                    var0 = var1 !== var0;
                    return var0;
                };
                var5 = var6.bind(var7)(var4);
            case 89:
                var4 = 'results';
                var1[var4] = var5;
                var2[var3] = var1;
                return var0;
            case 104:
                var0 = false;
                return var0;
            case 108:
                var0 = false;
                return var0;
        }
    };
    var1.THREAD_DELETE = var7;
    var7 = function arg0() {
        var0 = arg0;
        var0 = var0.channel;
        var1 = _closure1_slot6;
        var0 = var0.id;
        var0 = delete var1[var0];
        return var0;
    };
    var1.CHANNEL_DELETE = var7;
    var7 = function arg0() {
        _fun53538: for (var _fun53538_ip = 0;;) switch (_fun53538_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var5 = var0.query;
                var2 = _closure1_slot8;
                var0 = undefined;
                var2 = var2.bind(var0)(var3);
                if (var2) {
                    _fun53538_ip = 35;
                    continue _fun53538
                }
            case 31:
                var2 = false;
                return var2;
            case 35:
                var2 = _closure1_slot9;
                var6 = var2.bind(var0)(var3);
                var2 = _closure1_slot6;
                var1 = {};
                var7 = var1;
                var4 = copyDataProperties(var7, var6);
                var4 = 'query';
                var1[var4] = var5;
                var2[var3] = var1;
                return var0;
        }
    };
    var1.FORUM_SEARCH_QUERY_UPDATED = var7;
    var7 = function arg0() {
        _fun53539: for (var _fun53539_ip = 0;;) switch (_fun53539_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var2 = _closure1_slot8;
                var0 = undefined;
                var2 = var2.bind(var0)(var3);
                if (var2) {
                    _fun53539_ip = 29;
                    continue _fun53539
                }
            case 25:
                var2 = false;
                return var2;
            case 29:
                var2 = _closure1_slot9;
                var6 = var2.bind(var0)(var3);
                var2 = _closure1_slot6;
                var1 = {};
                var7 = var1;
                var4 = copyDataProperties(var7, var6);
                var5 = true;
                var4 = 'loading';
                var1[var4] = var5;
                var2[var3] = var1;
                return var0;
        }
    };
    var1.FORUM_SEARCH_START = var7;
    var7 = function arg0() {
        _fun53540: for (var _fun53540_ip = 0;;) switch (_fun53540_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var5 = var0.threadIds;
                var2 = _closure1_slot8;
                var0 = undefined;
                var2 = var2.bind(var0)(var3);
                if (var2) {
                    _fun53540_ip = 35;
                    continue _fun53540
                }
            case 31:
                var2 = false;
                return var2;
            case 35:
                var2 = _closure1_slot9;
                var7 = var2.bind(var0)(var3);
                var2 = _closure1_slot6;
                var1 = {};
                var8 = var1;
                var4 = copyDataProperties(var8, var7);
                var6 = false;
                var4 = 'loading';
                var1[var4] = var6;
                var4 = 'results';
                var1[var4] = var5;
                var2[var3] = var1;
                return var0;
        }
    };
    var1.FORUM_SEARCH_SUCCESS = var7;
    var7 = function arg0() {
        _fun53541: for (var _fun53541_ip = 0;;) switch (_fun53541_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var2 = _closure1_slot8;
                var0 = undefined;
                var2 = var2.bind(var0)(var3);
                if (var2) {
                    _fun53541_ip = 29;
                    continue _fun53541
                }
            case 25:
                var2 = false;
                return var2;
            case 29:
                var2 = _closure1_slot9;
                var6 = var2.bind(var0)(var3);
                var2 = _closure1_slot6;
                var1 = {};
                var7 = var1;
                var4 = copyDataProperties(var7, var6);
                var5 = false;
                var4 = 'loading';
                var1[var4] = var5;
                var5 = new Array(0);
                var4 = 'results';
                var1[var4] = var5;
                var2[var3] = var1;
                return var0;
        }
    };
    var1.FORUM_SEARCH_FAILURE = var7;
    var3 = function arg0() {
        _fun53542: for (var _fun53542_ip = 0;;) switch (_fun53542_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var3 = _closure1_slot8;
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var0 = !var3;
                var0 = !var0;
                if (!var3) {
                    _fun53542_ip = 39;
                    continue _fun53542
                }
            case 31:
                var1 = _closure1_slot6;
                var0 = delete var1[var2];
            case 39:
                return var0;
        }
    };
    var1.FORUM_SEARCH_CLEAR = var3;
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
    var3 = 8;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/ForumSearchStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1372, 566, 806, 2]);