// modules/media_channel/MediaPostEmbedManager.tsx
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
        _fun117378: for (var _fun117378_ip = 0;;) switch (_fun117378_ip) {
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
            case 72: // try_end0
                _fun117378_ip = 76;
                continue _fun117378;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot15 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        _fun117381: for (var _fun117381_ip = 0;;) switch (_fun117381_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var6 = var0.embeds;
                var2 = null;
                var4 = var2 == var6;
                var0 = undefined;
                var3 = undefined;
                if (var4) {
                    _fun117381_ip = 45;
                    continue _fun117381
                }
            case 28:
                var5 = var6.filter;
                var4 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.type;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 10;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.MessageEmbedTypes;
                    var0 = var0.POST_PREVIEW;
                    var0 = var1 === var0;
                    return var0;
                };
                var3 = var5.bind(var6)(var4);
            case 45:
                var2 = var2 != var3;
                if (!var2) {
                    _fun117381_ip = 63;
                    continue _fun117381
                }
            case 52:
                var5 = var3.length;
                var4 = 0;
                var2 = var4 !== var5;
            case 63:
                if (!var2) {
                    _fun117381_ip = 83;
                    continue _fun117381
                }
            case 66:
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun117383: for (var _fun117383_ip = 0;;) switch (_fun117383_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.url;
                            var5 = null;
                            if (!(var5 != var1)) {
                                _fun117383_ip = 431;
                                continue _fun117383
                            }
                        case 17:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 11;
                            var2 = var3[var2];
                            var3 = undefined;
                            var4 = var4.bind(var3)(var2);
                            var2 = var4.isEligibleForGuildMediaChannelPostPreviewEmbed;
                            var2 = var2.bind(var4)();
                            if (!var2) {
                                _fun117383_ip = 431;
                                continue _fun117383
                            }
                        case 58:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 12;
                            var2 = var6[var2];
                            var4 = var4.bind(var3)(var2);
                            var2 = var4.getMediaPostEmbedChannelPath;
                            var0 = var0.url;
                            var0 = var2.bind(var4)(var0);
                            if (!(var5 != var0)) {
                                _fun117383_ip = 431;
                                continue _fun117383
                            }
                        case 101:
                            var4 = var5 == var0;
                            var2 = undefined;
                            if (var4) {
                                _fun117383_ip = 116;
                                continue _fun117383
                            }
                        case 110:
                            var2 = var0.threadId;
                        case 116:
                            if (!(var5 != var2)) {
                                _fun117383_ip = 431;
                                continue _fun117383
                            }
                        case 123:
                            var4 = var5 == var0;
                            var2 = undefined;
                            if (var4) {
                                _fun117383_ip = 137;
                                continue _fun117383
                            }
                        case 132:
                            var2 = var0.channelId;
                        case 137:
                            if (!(var5 != var2)) {
                                _fun117383_ip = 431;
                                continue _fun117383
                            }
                        case 144:
                            var6 = _closure1_slot11;
                            var4 = var6.getEmbedFetchState;
                            var2 = var0.threadId;
                            var4 = var4.bind(var6)(var2);
                            var2 = _closure1_slot12;
                            var2 = var2.NOT_FETCHED;
                            if (!(var4 === var2)) {
                                _fun117383_ip = 431;
                                continue _fun117383
                            }
                        case 182:
                            var6 = _closure1_slot14;
                            var4 = var6.has;
                            var2 = var0.threadId;
                            var2 = var4.bind(var6)(var2);
                            if (var2) {
                                _fun117383_ip = 431;
                                continue _fun117383
                            }
                        case 208:
                            var6 = _closure1_slot14;
                            var4 = var6.add;
                            var2 = var0.threadId;
                            var2 = var4.bind(var6)(var2);
                            var4 = _closure1_slot9;
                            var2 = var4.getId;
                            var7 = var2.bind(var4)();
                            var6 = _closure1_slot10;
                            var4 = var6.isMember;
                            var8 = var5 == var0;
                            var2 = undefined;
                            if (var8) {
                                _fun117383_ip = 266;
                                continue _fun117383
                            }
                        case 261:
                            var2 = var0.guildId;
                        case 266:
                            var4 = var4.bind(var6)(var2, var7);
                            var8 = _closure1_slot8;
                            var7 = var8.isChannelGated;
                            var6 = var0.guildId;
                            var2 = var0.channelId;
                            var7 = var7.bind(var8)(var6, var2);
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 13;
                            var2 = var8[var2];
                            var8 = var6.bind(var3)(var2);
                            var6 = var8.hasFlag;
                            var2 = _closure2_slot0;
                            var2 = var2.flags;
                            var9 = var5 != var2;
                            var5 = 0;
                            if (!var9) {
                                _fun117383_ip = 348;
                                continue _fun117383
                            }
                        case 345:
                            var5 = var2;
                        case 348:
                            var2 = _closure1_slot13;
                            var2 = var2.IS_CROSSPOST;
                            var5 = var6.bind(var8)(var5, var2);
                            var2 = var4;
                            if (!var2) {
                                _fun117383_ip = 376;
                                continue _fun117383
                            }
                        case 370:
                            var6 = false;
                            var2 = var6 === var7;
                        case 376:
                            if (var2) {
                                _fun117383_ip = 391;
                                continue _fun117383
                            }
                        case 379:
                            var4 = !var4;
                            if (!var4) {
                                _fun117383_ip = 388;
                                continue _fun117383
                            }
                        case 385:
                            var4 = var5;
                        case 388:
                            var2 = var4;
                        case 391:
                            if (var2) {
                                _fun117383_ip = 431;
                                continue _fun117383
                            }
                        case 394:
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 14;
                            var1 = var4[var1];
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.fetchMediaPostEmbed;
                            var0 = var0.threadId;
                            var0 = var1.bind(var2)(var0);
                        case 431:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
            case 83:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var3 = global;
    var9 = var3.Object;
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
    var7 = var6.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot10 = var7;
    var7 = 8;
    var8 = var5[var7];
    var8 = var6.bind(var0)(var8);
    var _closure1_slot11 = var8;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.FetchState;
    var _closure1_slot12 = var7;
    var7 = 9;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.MessageFlags;
    var _closure1_slot13 = var7;
    var3 = var3.Set;
    var7 = var3.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var3
        }
    });
    var13 = var7;
    var3 = new var13[var3](var12);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot14 = var3;
    var3 = 16;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun117385: for (var _fun117385_ip = 0;;) switch (_fun117385_ip) {
                case 0:
                    var3 = this;
                    var0 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var4 = undefined;
                    var0 = var0.bind(var4)(var3, var2);
                    var0 = _closure1_slot6;
                    var9 = var0.bind(var4)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot15;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun117385_ip = 62;
                        continue _fun117385
                    }
                case 49:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var3, var4);
                    _fun117385_ip = 100;
                    continue _fun117385;
                case 62:
                    var5 = global;
                    var8 = var5.Reflect;
                    var7 = var8.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var4)(var3);
                    var6 = var5.constructor;
                    var5 = new Array(0);
                    var0 = var7.bind(var8)(var9, var5, var6);
                case 100:
                    var0 = var2.bind(var4)(var3, var0);
                    var2 = {};
                    var3 = var0.handleLoadThreadsSuccess;
                    var2.LOAD_THREADS_SUCCESS = var3;
                    var3 = var0.handleLoadThreadsSuccess;
                    var2.LOAD_ARCHIVED_THREADS_SUCCESS = var3;
                    var3 = var0.handleLoadForumPosts;
                    var2.LOAD_FORUM_POSTS = var3;
                    var0.actions = var2;
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 15;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = _closure1_slot16;
                    var1 = {};
                    var5 = function() {
                        var1 = _closure1_slot14;
                        var0 = var1.clear;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var1.onBeforeBatch = var5;
                    var1 = var3.bind(var4)(var0, var2, var1);
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
        var0 = 'handleLoadThreadsSuccess';
        var4.key = var0;
        var0 = function arg0() {
            _fun117387: for (var _fun117387_ip = 0;;) switch (_fun117387_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.firstMessages;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun117387_ip = 59;
                        continue _fun117387
                    }
                case 15:
                    var3 = _closure1_slot14;
                    var1 = var3.clear;
                    var1 = var1.bind(var3)();
                    if (!(var0 != var2)) {
                        _fun117387_ip = 55;
                        continue _fun117387
                    }
                case 36:
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot16;
                        var0 = undefined;
                        var1 = arg0;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                case 55:
                    var0 = undefined;
                    return var0;
                case 59:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'handleLoadForumPosts';
        var4.key = var6;
        var5 = function arg0() {
            var0 = arg0;
            var2 = var0.threads;
            var1 = _closure1_slot14;
            var0 = var1.clear;
            var0 = var0.bind(var1)();
            var0 = global;
            var1 = var0.Object;
            var0 = var1.values;
            var2 = var0.bind(var1)(var2);
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                _fun117390: for (var _fun117390_ip = 0;;) switch (_fun117390_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = var0.first_message;
                        var0 = null;
                        var0 = var0 != var3;
                        if (!var0) {
                            _fun117390_ip = 34;
                            continue _fun117390
                        }
                    case 18:
                        var2 = _closure1_slot16;
                        var1 = undefined;
                        var2 = var2.bind(var1)(var3);
                        var0 = undefined;
                    case 34:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
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
    var13 = var3;
    var1 = new var13[var1](var12);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_channel/MediaPostEmbedManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1672, 1216, 1681, 9878, 660, 791, 8157, 4240, 1384, 10170, 14606, 4300, 2]);