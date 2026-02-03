// modules/forums/ForumPostDataLoader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun76663: for (var _fun76663_ip = 0;;) switch (_fun76663_ip) {
            case 0:
                var0 = arg0;
                var0 = !var0;
                if (!var0) {
                    _fun76663_ip = 18;
                    continue _fun76663
                }
            case 9:
                var2 = null;
                var1 = arg1;
                var0 = var2 == var1;
            case 18:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0, arg1() {
        _fun76664: for (var _fun76664_ip = 0;;) switch (_fun76664_ip) {
            case 0:
                var3 = arg1;
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = false;
                var _closure2_slot1 = var1;
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var0
                    _fun76665: for (var _fun76665_ip = 0;;) switch (_fun76665_ip) {
                        case 0:
                            var5 = arg0;
                            var2 = _closure1_slot8;
                            var0 = var2.getMessage;
                            var0 = var0.bind(var2)(var5);
                            var4 = _closure1_slot14;
                            var3 = var0.loaded;
                            var2 = var0.firstMessage;
                            var0 = undefined;
                            var2 = var4.bind(var0)(var3, var2);
                            if (!var2) {
                                _fun76665_ip = 82;
                                continue _fun76665
                            }
                        case 48:
                            var4 = _closure1_slot12;
                            var3 = var4.request;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var1 = var3.bind(var4)(var1, var5);
                            var1 = true;
                            _closure2_slot1 = var1;
                        case 82:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var0 = _closure2_slot1;
                if (!var0) {
                    _fun76664_ip = 55;
                    continue _fun76664
                }
            case 42:
                var2 = _closure1_slot13;
                var1 = null;
                var0 = var1 == var2;
            case 55:
                if (!var0) {
                    _fun76664_ip = 87;
                    continue _fun76664
                }
            case 58:
                var0 = global;
                var4 = var0.setTimeout;
                var3 = _closure1_slot16;
                var2 = undefined;
                var0 = 0;
                var0 = var4.bind(var2)(var3, var0);
                _closure1_slot13 = var0;
            case 87:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot17;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun76669: for (var _fun76669_ip = 0;;) switch (_fun76669_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun76669_ip = 109;
                            continue _fun76669
                        }
                    case 7: // try_start_0
                        var2 = _closure1_slot12;
                        var1 = var2.hasNext;
                        var1 = var1.bind(var2)();
                        var2 = undefined;
                        if (!var1) {
                            _fun76669_ip = 78;
                            continue _fun76669
                        }
                    case 29:
                        var4 = _closure1_slot18;
                        var5 = _closure1_slot12;
                        var1 = var5.next;
                        var1 = var1.bind(var5)();
                        var1 = var4.bind(var2)(var1);
                        SaveGenerator(address = 55);
                    case 53:
                        return var1;
                    case 55:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun76669_ip = 87;
                            continue _fun76669
                        }
                    case 61:
                        var5 = _closure1_slot12;
                        var4 = var5.hasNext;
                        var4 = var4.bind(var5)();
                        if (var4) {
                            _fun76669_ip = 29;
                            continue _fun76669
                        }
                    case 78: // try_end0
                        var4 = null;
                        _closure1_slot13 = var4;
                        return var2;
                    case 87:
                        var2 = null;
                        _closure1_slot13 = var2;
                        return var1;
                    case 96: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var2 = null;
                        _closure1_slot13 = var2;
                        throw var1;
                    case 109:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot17 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot19;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun76673: for (var _fun76673_ip = 0;;) switch (_fun76673_ip) {
                    case 0:
                        StartGenerator();
                        var9 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun76673_ip = 387;
                            continue _fun76673
                        }
                    case 13:
                        var3 = var9;
                        var1 = undefined;
                        var2 = undefined;
                        var7 = undefined;
                        var10 = undefined;
                        var8 = _closure1_slot12;
                        var6 = var8.getNextBatch;
                        var5 = 10;
                        var2 = var6.bind(var8)(var9, var5);
                    case 48: // try_start_0 // try_start_1
                        var5 = var2;
                        var6 = var5.length;
                        var5 = 0;
                        if (!(var5 !== var6)) {
                            _fun76673_ip = 315;
                            continue _fun76673
                        }
                    case 65:
                        var8 = _closure1_slot6;
                        var6 = var8.getChannel;
                        var5 = var3;
                        var5 = var6.bind(var8)(var5);
                        var7 = var5;
                        var6 = null;
                        var8 = var6 == var5;
                        var5 = undefined;
                        if (var8) {
                            _fun76673_ip = 101;
                            continue _fun76673
                        }
                    case 96:
                        var5 = var7.guild_id;
                    case 101:
                        var10 = var5;
                        if (!(var6 != var5)) {
                            _fun76673_ip = 290;
                            continue _fun76673
                        }
                    case 111:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 11;
                        var5 = var7[var5];
                        var5 = var6.bind(var1)(var5);
                        var7 = var5.HTTP;
                        var6 = var7.post;
                        var5 = {};
                        var11 = _closure1_slot10;
                        var9 = var11.FORUM_POSTS;
                        var8 = var3;
                        var8 = var9.bind(var11)(var8);
                        var5.url = var8;
                        var8 = {};
                        var9 = var2;
                        var8.thread_ids = var9;
                        var5.body = var8;
                        var8 = true;
                        var5.rejectWithError = var8;
                        var5 = var6.bind(var7)(var5);
                        SaveGenerator(address = 197);
                    case 195:
                        return var5;
                    case 197:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 6);
                        if (var6) {
                            _fun76673_ip = 265;
                            continue _fun76673
                        }
                    case 203:
                        var6 = var5.body;
                        var9 = var6.threads;
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 12;
                        var6 = var8[var6];
                        var8 = var7.bind(var1)(var6);
                        var7 = var8.dispatch;
                        var6 = {};
                        var11 = 'LOAD_FORUM_POSTS';
                        var6.type = var11;
                        var6.guildId = var10;
                        var6.threads = var9;
                        var6 = var7.bind(var8)(var6);
                    case 263: // try_end0
                        _fun76673_ip = 342;
                        continue _fun76673;
                    case 265: // try_end1
                        var9 = _closure1_slot12;
                        var8 = var9.finishRequesting;
                        var7 = var3;
                        var6 = var2;
                        var6 = var8.bind(var9)(var7, var6);
                        return var5;
                    case 290:
                        var8 = _closure1_slot12;
                        var7 = var8.finishRequesting;
                        var6 = var3;
                        var5 = var2;
                        var5 = var7.bind(var8)(var6, var5);
                        return var1;
                    case 315:
                        var8 = _closure1_slot12;
                        var7 = var8.finishRequesting;
                        var6 = var3;
                        var5 = var2;
                        var5 = var7.bind(var8)(var6, var5);
                        return var1;
                    case 340: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register = 5);
                    case 342: // try_end2
                        var8 = _closure1_slot12;
                        var7 = var8.finishRequesting;
                        var6 = var3;
                        var5 = var2;
                        var5 = var7.bind(var8)(var6, var5);
                        return var1;
                    case 367: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register = 1);
                        var5 = _closure1_slot12;
                        var4 = var5.finishRequesting;
                        var2 = var4.bind(var5)(var3, var2);
                        throw var1;
                    case 387:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot19 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot19 = var0;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.computeThreadIdsSnapshot;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot10 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot5;
        var2 = function arg0() {
            var2 = this;
            var3 = _closure1_slot4;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = {};
            var2._set = var1;
            var1 = arg0;
            var2._defaultValueFunc = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'get';
        var0.key = var1;
        var1 = function arg0() {
            _fun76676: for (var _fun76676_ip = 0;;) switch (_fun76676_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var3 = var0._set;
                    var2 = var3.hasOwnProperty;
                    var2 = var2.bind(var3)(var1);
                    if (var2) {
                        _fun76676_ip = 46;
                        continue _fun76676
                    }
                case 26:
                    var3 = var0._set;
                    var2 = var0._defaultValueFunc;
                    var2 = var2.bind(var0)();
                    var3[var1] = var2;
                case 46:
                    var0 = var0._set;
                    var0 = var0[var1];
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var5 = 'delete';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var1 = var0._set;
            var0 = arg0;
            var0 = delete var1[var0];
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'hasNext';
        var0.key = var5;
        var5 = function() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 8;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.isEmpty;
            var0 = this;
            var0 = var0._set;
            var0 = var1.bind(var2)(var0);
            var0 = !var0;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'next';
        var0.key = var5;
        var4 = function() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.keys;
            var0 = this;
            var0 = var0._set;
            var1 = var1.bind(var2)(var0);
            var0 = 0;
            var0 = var1[var0];
            return var0;
        };
        var0.value = var4;
        var1[3] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot11 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot5;
        var2 = function() {
            var2 = this;
            var4 = _closure1_slot4;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var4 = _closure1_slot11;
            var1 = var4.prototype;
            var3 = Object.create(var1, {
                constructor: {
                    value: var4
                }
            });
            var6 = function() { // Environment: var1
                var0 = global;
                var0 = var0.Set;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var2 = var1;
                var0 = new var2[var0](var1);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            };
            var7 = var3;
            var1 = new var7[var4](var6, var5);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.requested = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'request';
        var0.key = var1;
        var1 = function arg0, arg1() {
            var0 = this;
            var2 = var0.requested;
            var1 = var2.get;
            var0 = arg0;
            var2 = var1.bind(var2)(var0);
            var1 = var2.add;
            var0 = arg1;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(8);
        var1[0] = var0;
        var0 = {};
        var5 = 'hasRequested';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var0 = this;
            var2 = var0.requested;
            var1 = var2.get;
            var0 = arg0;
            var2 = var1.bind(var2)(var0);
            var1 = var2.has;
            var0 = arg1;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'finishRequesting';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var2 = arg0;
            var3 = arg1;
            var1 = this;
            var4 = var1.requested;
            var1 = var4.get;
            var1 = var1.bind(var4)(var2);
            var _closure3_slot0 = var1;
            var1 = var3.forEach;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure3_slot0;
                var1 = var2.delete;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = var1.bind(var3)(var0);
            var1 = _closure1_slot12;
            var0 = var1.compact;
            var0 = var0.bind(var1)(var2);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'getRequested';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var2 = var0.requested;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'getNextBatch';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var0 = global;
            var2 = var0.Array;
            var1 = var2.from;
            var0 = this;
            var4 = var0.requested;
            var3 = var4.get;
            var0 = arg0;
            var0 = var3.bind(var4)(var0);
            var3 = var1.bind(var2)(var0);
            var2 = var3.slice;
            var1 = 0;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'hasNext';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.requested;
            var0 = var1.hasNext;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'next';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.requested;
            var0 = var1.next;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'compact';
        var0.key = var5;
        var4 = function arg0() {
            _fun76691: for (var _fun76691_ip = 0;;) switch (_fun76691_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var3 = var0.requested;
                    var1 = var3.get;
                    var1 = var1.bind(var3)(var2);
                    var3 = var1.size;
                    var1 = 0;
                    if (!(var1 === var3)) {
                        _fun76691_ip = 49;
                        continue _fun76691
                    }
                case 33:
                    var1 = var0.requested;
                    var0 = var1.delete;
                    var0 = var0.bind(var1)(var2);
                case 49:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[7] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var6 = var3.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var3
        }
    });
    var12 = var6;
    var3 = new var12[var3](var11);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot12 = var3;
    var3 = null;
    var _closure1_slot13 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/ForumPostDataLoader.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun76692: for (var _fun76692_ip = 0;;) switch (_fun76692_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 10;
                var1 = var8[var4];
                var5 = undefined;
                var10 = var6.bind(var5)(var1);
                var9 = var10.useStateFromStoresObject;
                var1 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot8;
                    var1 = var2.getMessage;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var9.bind(var10)(var2, var1);
                var2 = var1.loaded;
                var1 = var1.firstMessage;
                var4 = var8[var4];
                var9 = var6.bind(var5)(var4);
                var8 = var9.useStateFromStores;
                var4 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = function() { // Environment: var0
                    var2 = _closure1_slot6;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.parent_id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var8.bind(var9)(var6, var4);
                var6 = null;
                var6 = var6 != var4;
                if (!var6) {
                    _fun76692_ip = 135;
                    continue _fun76692
                }
            case 125:
                var7 = _closure1_slot14;
                var6 = var7.bind(var5)(var2, var1);
            case 135:
                if (!var6) {
                    _fun76692_ip = 156;
                    continue _fun76692
                }
            case 138:
                var3 = var3.id;
                var0 = function arg0, arg1() {
                    _fun76695: for (var _fun76695_ip = 0;;) switch (_fun76695_ip) {
                        case 0:
                            var3 = arg0;
                            var6 = arg1;
                            var _closure3_slot0 = var3;
                            var _closure3_slot1 = var6;
                            var5 = _closure1_slot12;
                            var4 = var5.hasRequested;
                            var0 = var3.id;
                            var4 = var4.bind(var5)(var0, var6);
                            var0 = undefined;
                            if (var4) {
                                _fun76695_ip = 124;
                                continue _fun76695
                            }
                        case 45:
                            var5 = _closure1_slot7;
                            var4 = var3.id;
                            var7 = var5.bind(var0)(var4);
                            var5 = var7.findIndex;
                            var4 = function(arg0) { // Environment: var2
                                var1 = _closure3_slot1;
                                var0 = arg0;
                                var0 = var0 === var1;
                                return var0;
                            };
                            var6 = var5.bind(var7)(var4);
                            var5 = var7.slice;
                            var4 = 5;
                            var4 = var6 + var4;
                            var5 = var5.bind(var7)(var6, var4);
                            var4 = var5.filter;
                            var2 = function(arg0) { // Environment: var2
                                var3 = _closure1_slot12;
                                var2 = var3.hasRequested;
                                var0 = _closure3_slot0;
                                var1 = var0.id;
                                var0 = arg0;
                                var0 = var2.bind(var3)(var1, var0);
                                var0 = !var0;
                                return var0;
                            };
                            var2 = var4.bind(var5)(var2);
                            var1 = _closure1_slot15;
                            var1 = var1.bind(var0)(var3, var2);
                            return var0;
                        case 124:
                            return var0;
                    }
                };
                var0 = var0.bind(var5)(var4, var3);
            case 156:
                var0 = {};
                var0.loaded = var2;
                var0.firstMessage = var1;
                return var0;
        }
    };
    var2.useFirstForumPostMessage = var3;
    var3 = function arg0, arg1() {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 10;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStoresObject;
        var4 = _closure1_slot9;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot9;
            var1 = var2.getMessageState;
            var0 = _closure2_slot0;
            var0 = var0.id;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1, var0);
        var0 = {};
        var2 = var1.loaded;
        var0.loaded = var2;
        var1 = var1.message;
        var0.mostRecentMessage = var1;
        return var0;
    };
    var2.useMostRecentForumMessage = var3;
    var1 = function arg0() {
        var3 = arg0;
        var2 = _closure1_slot15;
        var4 = _closure1_slot7;
        var1 = var3.id;
        var0 = undefined;
        var6 = var4.bind(var0)(var1);
        var5 = var6.slice;
        var4 = 0;
        var1 = 10;
        var1 = var5.bind(var6)(var4, var1);
        var1 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var2.preloadForumThreads = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 1372, 7599, 5641, 9749, 660, 22, 21, 566, 507, 806, 2]);