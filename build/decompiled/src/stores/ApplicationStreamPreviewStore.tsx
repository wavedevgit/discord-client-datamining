// stores/ApplicationStreamPreviewStore.tsx
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
        _fun64505: for (var _fun64505_ip = 0;;) switch (_fun64505_ip) {
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
                _fun64505_ip = 74;
                continue _fun64505;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
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
    var8 = function() {
        var0 = {};
        _closure1_slot9 = var0;
        var0 = {};
        _closure1_slot10 = var0;
        var0 = undefined;
        return var0;
    };
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var7);
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
    var7 = var7.StreamTypes;
    var _closure1_slot8 = var7;
    var7 = {};
    var _closure1_slot9 = var7;
    var7 = {};
    var _closure1_slot10 = var7;
    var1 = var1.Set;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var14 = var7;
    var1 = new var14[var1](var13);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot11 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun64510: for (var _fun64510_ip = 0;;) switch (_fun64510_ip) {
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
                        _fun64510_ip = 69;
                        continue _fun64510
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun64510_ip = 105;
                    continue _fun64510;
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
        var0 = 'getPreviewURL';
        var4.key = var0;
        var0 = function arg0, arg1, arg2() {
            _fun64511: for (var _fun64511_ip = 0;;) switch (_fun64511_ip) {
                case 0:
                    var6 = arg0;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 7;
                    var2 = var2[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var2);
                    var4 = var5.encodeStreamKey;
                    var3 = {};
                    var2 = null;
                    if (!(var2 == var6)) {
                        _fun64511_ip = 54;
                        continue _fun64511
                    }
                case 42:
                    var7 = _closure1_slot8;
                    var7 = var7.CALL;
                    _fun64511_ip = 64;
                    continue _fun64511;
                case 54:
                    var8 = _closure1_slot8;
                    var7 = var8.GUILD;
                case 64:
                    var3.streamType = var7;
                    var3.guildId = var6;
                    var6 = arg1;
                    var3.channelId = var6;
                    var6 = arg2;
                    var3.ownerId = var6;
                    var3 = var4.bind(var5)(var3);
                    var1 = _closure1_slot9;
                    var1 = var1[var3];
                    var2 = var2 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun64511_ip = 115;
                        continue _fun64511
                    }
                case 110:
                    var0 = var1.url;
                case 115:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'shouldFetchPreview';
        var4.key = var6;
        var6 = function arg0, arg1, arg2() {
            _fun64512: for (var _fun64512_ip = 0;;) switch (_fun64512_ip) {
                case 0:
                    var5 = arg0;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 7;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.encodeStreamKey;
                    var0 = {};
                    var4 = null;
                    if (!(var4 == var5)) {
                        _fun64512_ip = 54;
                        continue _fun64512
                    }
                case 42:
                    var6 = _closure1_slot8;
                    var6 = var6.CALL;
                    _fun64512_ip = 64;
                    continue _fun64512;
                case 54:
                    var7 = _closure1_slot8;
                    var6 = var7.GUILD;
                case 64:
                    var0.streamType = var6;
                    var0.guildId = var5;
                    var5 = arg1;
                    var0.channelId = var5;
                    var5 = arg2;
                    var0.ownerId = var5;
                    var3 = var2.bind(var3)(var0);
                    var0 = _closure1_slot9;
                    var0 = var0[var3];
                    var2 = _closure1_slot10;
                    var2 = var2[var3];
                    var6 = var4 != var2;
                    var5 = 0;
                    if (!var6) {
                        _fun64512_ip = 121;
                        continue _fun64512
                    }
                case 118:
                    var5 = var2;
                case 121:
                    var2 = var4 != var0;
                    if (!var2) {
                        _fun64512_ip = 155;
                        continue _fun64512
                    }
                case 128:
                    var6 = global;
                    var7 = var6.Date;
                    var6 = var7.now;
                    var7 = var6.bind(var7)();
                    var6 = var0.expires;
                    var2 = var7 > var6;
                case 155:
                    var0 = var4 == var0;
                    if (!var0) {
                        _fun64512_ip = 169;
                        continue _fun64512
                    }
                case 162:
                    var4 = 5;
                    var0 = var5 < var4;
                case 169:
                    if (var0) {
                        _fun64512_ip = 175;
                        continue _fun64512
                    }
                case 172:
                    var0 = var2;
                case 175:
                    if (!var0) {
                        _fun64512_ip = 195;
                        continue _fun64512
                    }
                case 178:
                    var2 = _closure1_slot11;
                    var1 = var2.has;
                    var1 = var1.bind(var2)(var3);
                    var0 = !var1;
                case 195:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getPreviewURLForStreamKey';
        var4.key = var6;
        var6 = function arg0() {
            var4 = this;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 7;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.decodeStreamKey;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var3 = var0.guildId;
            var2 = var0.channelId;
            var1 = var0.ownerId;
            var0 = var4.getPreviewURL;
            var0 = var0.bind(var4)(var3, var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getIsPreviewLoading';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun64514: for (var _fun64514_ip = 0;;) switch (_fun64514_ip) {
                case 0:
                    var4 = arg0;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.encodeStreamKey;
                    var1 = {};
                    var5 = null;
                    if (!(var5 == var4)) {
                        _fun64514_ip = 54;
                        continue _fun64514
                    }
                case 42:
                    var5 = _closure1_slot8;
                    var5 = var5.CALL;
                    _fun64514_ip = 64;
                    continue _fun64514;
                case 54:
                    var6 = _closure1_slot8;
                    var5 = var6.GUILD;
                case 64:
                    var1.streamType = var5;
                    var1.guildId = var4;
                    var4 = arg1;
                    var1.channelId = var4;
                    var4 = arg2;
                    var1.ownerId = var4;
                    var2 = var2.bind(var3)(var1);
                    var1 = _closure1_slot11;
                    var0 = var1.has;
                    var0 = var0.bind(var1)(var2);
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'ApplicationStreamPreviewStore';
    var7.displayName = var1;
    var1 = 9;
    var1 = var5[var1];
    var13 = var6.bind(var0)(var1);
    var1 = {};
    var1.CONNECTION_OPEN = var8;
    var1.LOGOUT = var8;
    var8 = function arg0() {
        _fun64515: for (var _fun64515_ip = 0;;) switch (_fun64515_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.streamKey;
                var3 = _closure1_slot10;
                var1 = var3[var2];
                var4 = null;
                var5 = var4 != var1;
                var4 = 0;
                if (!var5) {
                    _fun64515_ip = 34;
                    continue _fun64515
                }
            case 31:
                var4 = var1;
            case 34:
                var1 = 1;
                var1 = var4 + var1;
                var3[var2] = var1;
                var1 = _closure1_slot11;
                var0 = var1.add;
                var0 = var0.bind(var1)(var2);
                var0 = undefined;
                return var0;
        }
    };
    var1.STREAM_PREVIEW_FETCH_START = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.streamKey;
        var4 = var0.previewURL;
        var3 = _closure1_slot9;
        var1 = {};
        var1.url = var4;
        var4 = global;
        var5 = var4.Date;
        var4 = var5.now;
        var5 = var4.bind(var5)();
        var4 = 120000;
        var4 = var5 + var4;
        var1.expires = var4;
        var3[var2] = var1;
        var3 = _closure1_slot10;
        var1 = 0;
        var3[var2] = var1;
        var1 = _closure1_slot11;
        var0 = var1.delete;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var1.STREAM_PREVIEW_FETCH_SUCCESS = var8;
    var8 = function arg0() {
        _fun64517: for (var _fun64517_ip = 0;;) switch (_fun64517_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.streamKey;
                var5 = var0.retryAfter;
                var3 = _closure1_slot9;
                var1 = {};
                var6 = null;
                var1.url = var6;
                var4 = global;
                var7 = var4.Date;
                var4 = var7.now;
                var4 = var4.bind(var7)();
                if (!(var6 == var5)) {
                    _fun64517_ip = 69;
                    continue _fun64517
                }
            case 51:
                var6 = _closure1_slot10;
                var7 = var6[var2];
                var6 = 10000;
                var5 = var6 * var7;
            case 69:
                var4 = var4 + var5;
                var1.expires = var4;
                var3[var2] = var1;
                var1 = _closure1_slot11;
                var0 = var1.delete;
                var0 = var0.bind(var1)(var2);
                var0 = undefined;
                return var0;
        }
    };
    var1.STREAM_PREVIEW_FETCH_FAIL = var8;
    var3 = function arg0() {
        _fun64518: for (var _fun64518_ip = 0;;) switch (_fun64518_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.voiceStates;
                var2 = _closure1_slot1;
                var0 = _closure1_slot2;
                var6 = 6;
                var0 = var0[var6];
                var5 = undefined;
                var3 = var2.bind(var5)(var0);
                var2 = var3.isEmpty;
                var0 = _closure1_slot9;
                var0 = var2.bind(var3)(var0);
                var0 = !var0;
                if (var0) {
                    _fun64518_ip = 90;
                    continue _fun64518
                }
            case 55:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var3 = var3.bind(var5)(var2);
                var2 = var3.isEmpty;
                var1 = _closure1_slot10;
                var1 = var2.bind(var3)(var1);
                var0 = !var1;
            case 90:
                if (!var0) {
                    _fun64518_ip = 114;
                    continue _fun64518
                }
            case 93:
                var3 = var4.reduce;
                var2 = function(arg0, arg1) { // Environment: var1
                    _fun64519: for (var _fun64519_ip = 0;;) switch (_fun64519_ip) {
                        case 0:
                            var0 = arg1;
                            var4 = var0.userId;
                            var6 = var0.guildId;
                            var5 = var0.channelId;
                            var0 = var0.selfStream;
                            if (var0) {
                                _fun64519_ip = 131;
                                continue _fun64519
                            }
                        case 27:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 7;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.encodeStreamKey;
                            var1 = {};
                            var7 = null;
                            if (!(var7 == var6)) {
                                _fun64519_ip = 78;
                                continue _fun64519
                            }
                        case 66:
                            var7 = _closure1_slot8;
                            var7 = var7.CALL;
                            _fun64519_ip = 88;
                            continue _fun64519;
                        case 78:
                            var8 = _closure1_slot8;
                            var7 = var8.GUILD;
                        case 88:
                            var1.streamType = var7;
                            var1.guildId = var6;
                            var1.channelId = var5;
                            var1.ownerId = var4;
                            var1 = var2.bind(var3)(var1);
                            var2 = _closure1_slot9;
                            var2 = delete var2[var1];
                            var0 = _closure1_slot10;
                            var0 = delete var0[var1];
                            var0 = true;
                            return var0;
                        case 131:
                            var0 = arg0;
                            return var0;
                    }
                };
                var1 = false;
                var0 = var3.bind(var4)(var2, var1);
            case 114:
                return var0;
        }
    };
    var1.VOICE_STATE_UPDATES = var3;
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
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/ApplicationStreamPreviewStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3506, 22, 3505, 566, 806, 2]);