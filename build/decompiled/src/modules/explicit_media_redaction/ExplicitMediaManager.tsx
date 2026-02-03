// modules/explicit_media_redaction/ExplicitMediaManager.tsx
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
        _fun39227: for (var _fun39227_ip = 0;;) switch (_fun39227_ip) {
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
                _fun39227_ip = 74;
                continue _fun39227;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot21 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var4 = var0.channel_id;
        var3 = var0.id;
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = '';
        var0 = ':';
        var0 = var2.bind(var1)(var4, var0, var3);
        return var0;
    };
    var _closure1_slot22 = var0;
    var0 = function() {
        var0 = global;
        var3 = var0.Object;
        var2 = var3.values;
        var0 = _closure1_slot19;
        var3 = var2.bind(var3)(var0);
        var2 = var3.forEach;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var2 = var0.timeout;
            var0 = global;
            var1 = var0.clearTimeout;
            var0 = undefined;
            var1 = var1.bind(var0)(var2);
            return var0;
        };
        var0 = var2.bind(var3)(var0);
        var0 = {};
        _closure1_slot19 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot23 = var0;
    var0 = function arg0, arg1() {
        _fun39233: for (var _fun39233_ip = 0;;) switch (_fun39233_ip) {
            case 0:
                var7 = arg0;
                var0 = var7.id;
                var3 = null;
                if (!(var3 != var0)) {
                    _fun39233_ip = 115;
                    continue _fun39233
                }
            case 14:
                var0 = var7.channel_id;
                if (!(var3 != var0)) {
                    _fun39233_ip = 115;
                    continue _fun39233
                }
            case 23:
                var1 = _closure1_slot22;
                var4 = undefined;
                var1 = var1.bind(var4)(var7);
                var2 = _closure1_slot19;
                var2 = var2[var1];
                if (!(var3 == var2)) {
                    _fun39233_ip = 53;
                    continue _fun39233
                }
            case 49:
                var2 = false;
                return var2;
            case 53:
                var2 = _closure1_slot19;
                var2 = var2[var1];
                var3 = var2.timeout;
                var6 = var2.setAt;
                var5 = function arg0, arg1, arg2() {
                    _fun39234: for (var _fun39234_ip = 0;;) switch (_fun39234_ip) {
                        case 0:
                            var11 = arg0;
                            var4 = arg1;
                            var6 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var3 = 15;
                            var5 = var0[var3];
                            var0 = undefined;
                            var5 = var6.bind(var0)(var5);
                            var5 = var5.TimeoutCancelSource;
                            var5 = var5.UPDATE;
                            if (!(var4 === var5)) {
                                _fun39234_ip = 200;
                                continue _fun39234
                            }
                        case 52:
                            var10 = var11.attachments;
                            var5 = null;
                            if (!(var5 == var10)) {
                                _fun39234_ip = 68;
                                continue _fun39234
                            }
                        case 64:
                            var10 = new Array(0);
                        case 68:
                            var9 = var11.embeds;
                            if (!(var5 == var9)) {
                                _fun39234_ip = 82;
                                continue _fun39234
                            }
                        case 78:
                            var9 = new Array(0);
                        case 82:
                            var6 = var10.filter;
                            var5 = function(arg0) { // Environment: var2
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var0 = 16;
                                var0 = var7[var0];
                                var5 = undefined;
                                var3 = var6.bind(var5)(var0);
                                var2 = var3.isMediaFlaggedForHarmType;
                                var0 = 17;
                                var0 = var7[var0];
                                var0 = var6.bind(var5)(var0);
                                var0 = var0.ContentHarmType;
                                var1 = var0.EXPLICIT;
                                var0 = {};
                                var4 = 18;
                                var4 = var7[var4];
                                var4 = var6.bind(var5)(var4);
                                var4 = var4.ObscuredMediaTypes;
                                var4 = var4.Attachment;
                                var0.type = var4;
                                var4 = arg0;
                                var0.media = var4;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var8 = var6.bind(var10)(var5);
                            var5 = var9.filter;
                            var2 = function(arg0) { // Environment: var2
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var0 = 16;
                                var0 = var7[var0];
                                var5 = undefined;
                                var3 = var6.bind(var5)(var0);
                                var2 = var3.isMediaFlaggedForHarmType;
                                var0 = 17;
                                var0 = var7[var0];
                                var0 = var6.bind(var5)(var0);
                                var0 = var0.ContentHarmType;
                                var1 = var0.EXPLICIT;
                                var0 = {};
                                var4 = 18;
                                var4 = var7[var4];
                                var4 = var6.bind(var5)(var4);
                                var4 = var4.ObscuredMediaTypes;
                                var4 = var4.Embed;
                                var0.type = var4;
                                var4 = arg0;
                                var0.media = var4;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var7 = var5.bind(var9)(var2);
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var3];
                            var6 = var5.bind(var0)(var2);
                            var5 = var6.trackExplicitMediaScanComplete;
                            var2 = {};
                            var12 = var11.id;
                            var2.messageId = var12;
                            var11 = var11.channel_id;
                            var2.channelId = var11;
                            var10 = var10.length;
                            var2.numOfAttachments = var10;
                            var9 = var9.length;
                            var2.numOfEmbeds = var9;
                            var8 = var8.length;
                            var2.numOfExplicitAttachments = var8;
                            var7 = var7.length;
                            var2.numOfExplicitEmbeds = var7;
                            var2 = var5.bind(var6)(var2);
                        case 200:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var3];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.trackScanTiming;
                            var1 = arg2;
                            var1 = var2.bind(var3)(var1, var4);
                            return var0;
                    }
                };
                var2 = arg1;
                var2 = var5.bind(var4)(var7, var2, var6);
                var2 = global;
                var2 = var2.clearTimeout;
                var2 = var2.bind(var4)(var3);
                var0 = _closure1_slot19;
                var0 = delete var0[var1];
                var0 = true;
                return var0;
            case 115:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function arg0() {
        var3 = _closure1_slot22;
        var2 = undefined;
        var1 = arg0;
        var1 = var3.bind(var2)(var1);
        var0 = _closure1_slot19;
        var1 = var0[var1];
        var0 = null;
        var0 = var0 == var1;
        return var0;
    };
    var _closure1_slot25 = var0;
    var0 = function arg0, arg1() {
        _fun39238: for (var _fun39238_ip = 0;;) switch (_fun39238_ip) {
            case 0:
                var7 = arg0;
                var3 = arg1;
                var5 = null;
                var2 = var3;
                if (!(var5 == var2)) {
                    _fun39238_ip = 19;
                    continue _fun39238
                }
            case 17:
                var2 = {};
            case 19:
                var6 = var2.forceBatchScan;
                var0 = undefined;
                var4 = var0 !== var6;
                if (!var4) {
                    _fun39238_ip = 37;
                    continue _fun39238
                }
            case 34:
                var4 = var6;
            case 37:
                var6 = var2.jitter;
                var2 = var0 !== var6;
                if (!var2) {
                    _fun39238_ip = 53;
                    continue _fun39238
                }
            case 50:
                var2 = var6;
            case 53:
                if (!(var5 != var3)) {
                    _fun39238_ip = 66;
                    continue _fun39238
                }
            case 57:
                var3 = var3.isMessageUpdate;
                if (var3) {
                    _fun39238_ip = 100;
                    continue _fun39238
                }
            case 66:
                var5 = var7.filter;
                var3 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 16;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.isEligibleForScanning;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var5.bind(var7)(var3);
                var5 = var6.filter;
                var3 = _closure1_slot25;
                var3 = var5.bind(var6)(var3);
                _fun39238_ip = 132;
                continue _fun39238;
            case 100:
                var6 = var7.filter;
                var5 = function(arg0) { // Environment: var1
                    _fun39239: for (var _fun39239_ip = 0;;) switch (_fun39239_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var5 = 16;
                            var0 = var0[var5];
                            var4 = undefined;
                            var2 = var2.bind(var4)(var0);
                            var0 = var2.isEligibleForScanning;
                            var0 = var0.bind(var2)(var3);
                            if (!var0) {
                                _fun39239_ip = 70;
                                continue _fun39239
                            }
                        case 42:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var5];
                            var2 = var2.bind(var4)(var1);
                            var1 = var2.hasUnscannedMedia;
                            var0 = var1.bind(var2)(var3);
                        case 70:
                            return var0;
                    }
                };
                var7 = var6.bind(var7)(var5);
                var6 = var7.filter;
                var5 = _closure1_slot25;
                var3 = var6.bind(var7)(var5);
            case 132:
                var _closure2_slot0 = var3;
                var6 = var3.forEach;
                var5 = function(arg0) { // Environment: var1
                    _fun39241: for (var _fun39241_ip = 0;;) switch (_fun39241_ip) {
                        case 0:
                            var3 = arg0;
                            var _closure3_slot0 = var3;
                            var2 = _closure1_slot22;
                            var0 = undefined;
                            var3 = var2.bind(var0)(var3);
                            var2 = _closure1_slot19;
                            var5 = var2[var3];
                            var2 = null;
                            if (!(var2 == var5)) {
                                _fun39241_ip = 165;
                                continue _fun39241
                            }
                        case 40:
                            var5 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var2 = 21;
                            var2 = var9[var2];
                            var6 = var5.bind(var0)(var2);
                            var5 = var6.increment;
                            var2 = {};
                            var8 = _closure1_slot0;
                            var7 = 22;
                            var7 = var9[var7];
                            var7 = var8.bind(var0)(var7);
                            var7 = var7.MetricEvents;
                            var7 = var7.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE;
                            var2.name = var7;
                            var2 = var5.bind(var6)(var2);
                            var2 = _closure1_slot19;
                            var1 = {};
                            var5 = global;
                            var7 = var5.Date;
                            var6 = var7.now;
                            var6 = var6.bind(var7)();
                            var1.setAt = var6;
                            var6 = var5.setTimeout;
                            var5 = function() { // Environment: var4
                                _fun39242: for (var _fun39242_ip = 0;;) switch (_fun39242_ip) {
                                    case 0:
                                        var4 = _closure3_slot0;
                                        var3 = _closure1_slot24;
                                        var6 = _closure1_slot0;
                                        var0 = _closure1_slot2;
                                        var5 = 15;
                                        var2 = var0[var5];
                                        var0 = undefined;
                                        var2 = var6.bind(var0)(var2);
                                        var2 = var2.TimeoutCancelSource;
                                        var2 = var2.TIMEOUT;
                                        var2 = var3.bind(var0)(var4, var2);
                                        if (!var2) {
                                            _fun39242_ip = 243;
                                            continue _fun39242
                                        }
                                    case 60:
                                        var7 = _closure1_slot13;
                                        var6 = var7.getMessage;
                                        var3 = var4.channel_id;
                                        var2 = var4.id;
                                        var8 = var6.bind(var7)(var3, var2);
                                        var2 = null;
                                        if (!(var2 != var8)) {
                                            _fun39242_ip = 185;
                                            continue _fun39242
                                        }
                                    case 92:
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var6 = 16;
                                        var6 = var2[var6];
                                        var7 = var3.bind(var0)(var6);
                                        var6 = var7.getUnscannedMediaIds;
                                        var6 = var6.bind(var7)(var8);
                                        var7 = var6.attachmentIds;
                                        var6 = var6.embedIds;
                                        var2 = var2[var5];
                                        var5 = var3.bind(var0)(var2);
                                        var3 = var5.trackScanningTimedOut;
                                        var2 = {};
                                        var8 = var4.channel_id;
                                        var2.channelId = var8;
                                        var8 = var4.id;
                                        var2.messageId = var8;
                                        var2.attachmentIds = var7;
                                        var2.embedIds = var6;
                                        var2 = var3.bind(var5)(var2);
                                    case 185:
                                        var2 = _closure1_slot1;
                                        var3 = _closure1_slot2;
                                        var1 = 19;
                                        var1 = var3[var1];
                                        var3 = var2.bind(var0)(var1);
                                        var2 = var3.dispatch;
                                        var1 = {};
                                        var5 = 'MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT';
                                        var1.type = var5;
                                        var5 = var4.id;
                                        var1.messageId = var5;
                                        var4 = var4.channel_id;
                                        var1.channelId = var4;
                                        var1 = var2.bind(var3)(var1);
                                    case 243:
                                        return var0;
                                }
                            };
                            var4 = 3000;
                            var4 = var6.bind(var0)(var5, var4);
                            var1.timeout = var4;
                            var2[var3] = var1;
                        case 165:
                            return var0;
                    }
                };
                var5 = var6.bind(var3)(var5);
                if (var4) {
                    _fun39238_ip = 209;
                    continue _fun39238
                }
            case 154:
                var5 = global;
                var7 = var5.Set;
                var6 = var3.map;
                var5 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.channel_id;
                    return var0;
                };
                var10 = var6.bind(var3)(var5);
                var6 = var7.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var7
                    }
                });
                var11 = var6;
                var5 = new var11[var7](var10, var9);
                var5 = var5 instanceof Object ? var5 : var6;
                var6 = var5.size;
                var5 = 1;
                var4 = var6 > var5;
            case 209:
                var _closure2_slot1 = var4;
                if (var2) {
                    _fun39238_ip = 231;
                    continue _fun39238
                }
            case 216:
                var2 = _closure1_slot20;
                var2 = var2.bind(var0)(var3, var4);
                _fun39238_ip = 276;
                continue _fun39238;
            case 231:
                var2 = global;
                var3 = var2.setTimeout;
                var4 = var2.Math;
                var2 = var4.random;
                var4 = var2.bind(var4)();
                var2 = 800;
                var2 = var2 * var4;
                var1 = function() { // Environment: var1
                    var3 = _closure2_slot0;
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var1
                        var1 = _closure1_slot19;
                        var3 = _closure1_slot22;
                        var2 = undefined;
                        var0 = arg0;
                        var0 = var3.bind(var2)(var0);
                        var1 = var1[var0];
                        var0 = null;
                        var0 = var0 != var1;
                        return var0;
                    };
                    var3 = var2.bind(var3)(var1);
                    var2 = _closure1_slot20;
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var3, var1);
                    return var0;
                };
                var1 = var3.bind(var0)(var1, var2);
            case 276:
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function arg0() {
        var4 = arg0;
        var2 = {};
        var _closure2_slot0 = var2;
        var1 = {};
        var _closure2_slot1 = var1;
        var3 = var4.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun39247: for (var _fun39247_ip = 0;;) switch (_fun39247_ip) {
                case 0:
                    var3 = arg0;
                    var2 = _closure2_slot0;
                    var0 = var3.channel_id;
                    var0 = var2[var0];
                    var4 = null;
                    if (!(var4 == var0)) {
                        _fun39247_ip = 54;
                        continue _fun39247
                    }
                case 27:
                    var6 = _closure2_slot0;
                    var2 = var3.channel_id;
                    var0 = {
                        'numOfAttachments': 0,
                        'numOfAttachmentsPendingScan': 0,
                        'numOfEmbeds': 0,
                        'numOfEmbedsPendingScan': 0
                    };
                    var6[var2] = var0;
                case 54:
                    var2 = _closure2_slot1;
                    var0 = var3.id;
                    var0 = var2[var0];
                    if (!(var4 == var0)) {
                        _fun39247_ip = 109;
                        continue _fun39247
                    }
                case 71:
                    var6 = _closure2_slot1;
                    var2 = var3.id;
                    var0 = {
                        'channelId': null,
                        'numOfAttachments': 0,
                        'numOfSelfHarmAttachments': 0,
                        'numOfGoreAttachments': 0,
                        'numOfExplicitAttachments': 0,
                        'numOfEmbeds': 0,
                        'numOfSelfHarmEmbeds': 0,
                        'numOfGoreEmbeds': 0,
                        'numOfExplicitEmbeds': 0
                    };
                    var7 = var3.channel_id;
                    var0.channelId = var7;
                    var6[var2] = var0;
                case 109:
                    var2 = var3.attachments;
                    var7 = var4 == var2;
                    var0 = undefined;
                    var6 = undefined;
                    if (var7) {
                        _fun39247_ip = 131;
                        continue _fun39247
                    }
                case 126:
                    var6 = var2.length;
                case 131:
                    var7 = var4 != var6;
                    var8 = 0;
                    if (!var7) {
                        _fun39247_ip = 143;
                        continue _fun39247
                    }
                case 140:
                    var8 = var6;
                case 143:
                    var7 = var3.embeds;
                    var9 = var4 == var7;
                    var6 = undefined;
                    if (var9) {
                        _fun39247_ip = 163;
                        continue _fun39247
                    }
                case 158:
                    var6 = var7.length;
                case 163:
                    var9 = var4 != var6;
                    var7 = 0;
                    if (!var9) {
                        _fun39247_ip = 175;
                        continue _fun39247
                    }
                case 172:
                    var7 = var6;
                case 175:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 16;
                    var6 = var10[var6];
                    var9 = var9.bind(var0)(var6);
                    var6 = var9.getUnscannedMediaIds;
                    var6 = var6.bind(var9)(var3);
                    var10 = var6.attachmentIds;
                    var6 = var6.embedIds;
                    var11 = _closure2_slot0;
                    var9 = var3.channel_id;
                    var9 = var11[var9];
                    var11 = var9.numOfAttachments;
                    var11 = var11 + var8;
                    var9.numOfAttachments = var11;
                    var11 = var9.numOfEmbeds;
                    var11 = var11 + var7;
                    var9.numOfEmbeds = var11;
                    var11 = var9.numOfAttachmentsPendingScan;
                    var10 = var10.length;
                    var10 = var11 + var10;
                    var9.numOfAttachmentsPendingScan = var10;
                    var10 = var9.numOfEmbedsPendingScan;
                    var6 = var6.length;
                    var6 = var10 + var6;
                    var9.numOfEmbedsPendingScan = var6;
                    var6 = _closure2_slot1;
                    var1 = var3.id;
                    var1 = var6[var1];
                    var6 = var1.numOfAttachments;
                    var6 = var6 + var8;
                    var1.numOfAttachments = var6;
                    var6 = var1.numOfEmbeds;
                    var6 = var6 + var7;
                    var1.numOfEmbeds = var6;
                    var9 = var3.attachments;
                    var6 = var4 == var9;
                    var7 = undefined;
                    if (var6) {
                        _fun39247_ip = 388;
                        continue _fun39247
                    }
                case 368:
                    var8 = var9.filter;
                    var6 = function(arg0) { // Environment: var5
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var0 = 16;
                        var0 = var7[var0];
                        var5 = undefined;
                        var3 = var6.bind(var5)(var0);
                        var2 = var3.isMediaFlaggedForHarmType;
                        var0 = 17;
                        var0 = var7[var0];
                        var0 = var6.bind(var5)(var0);
                        var0 = var0.ContentHarmType;
                        var1 = var0.EXPLICIT;
                        var0 = {};
                        var4 = 18;
                        var4 = var7[var4];
                        var4 = var6.bind(var5)(var4);
                        var4 = var4.ObscuredMediaTypes;
                        var4 = var4.Attachment;
                        var0.type = var4;
                        var4 = arg0;
                        var0.media = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var6 = var8.bind(var9)(var6);
                    var7 = var6.length;
                case 388:
                    var8 = var4 != var7;
                    var6 = 0;
                    if (!var8) {
                        _fun39247_ip = 400;
                        continue _fun39247
                    }
                case 397:
                    var6 = var7;
                case 400:
                    var1.numOfExplicitAttachments = var6;
                    var9 = var3.embeds;
                    var6 = var4 == var9;
                    var7 = undefined;
                    if (var6) {
                        _fun39247_ip = 441;
                        continue _fun39247
                    }
                case 421:
                    var8 = var9.filter;
                    var6 = function(arg0) { // Environment: var5
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var0 = 16;
                        var0 = var7[var0];
                        var5 = undefined;
                        var3 = var6.bind(var5)(var0);
                        var2 = var3.isMediaFlaggedForHarmType;
                        var0 = 17;
                        var0 = var7[var0];
                        var0 = var6.bind(var5)(var0);
                        var0 = var0.ContentHarmType;
                        var1 = var0.EXPLICIT;
                        var0 = {};
                        var4 = 18;
                        var4 = var7[var4];
                        var4 = var6.bind(var5)(var4);
                        var4 = var4.ObscuredMediaTypes;
                        var4 = var4.Embed;
                        var0.type = var4;
                        var4 = arg0;
                        var0.media = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var6 = var8.bind(var9)(var6);
                    var7 = var6.length;
                case 441:
                    var8 = var4 != var7;
                    var6 = 0;
                    if (!var8) {
                        _fun39247_ip = 453;
                        continue _fun39247
                    }
                case 450:
                    var6 = var7;
                case 453:
                    var1.numOfExplicitEmbeds = var6;
                    var9 = var3.attachments;
                    var6 = var4 == var9;
                    var7 = undefined;
                    if (var6) {
                        _fun39247_ip = 494;
                        continue _fun39247
                    }
                case 474:
                    var8 = var9.filter;
                    var6 = function(arg0) { // Environment: var5
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var0 = 16;
                        var0 = var7[var0];
                        var5 = undefined;
                        var3 = var6.bind(var5)(var0);
                        var2 = var3.isMediaFlaggedForHarmType;
                        var0 = 17;
                        var0 = var7[var0];
                        var0 = var6.bind(var5)(var0);
                        var0 = var0.ContentHarmType;
                        var1 = var0.GORE;
                        var0 = {};
                        var4 = 18;
                        var4 = var7[var4];
                        var4 = var6.bind(var5)(var4);
                        var4 = var4.ObscuredMediaTypes;
                        var4 = var4.Attachment;
                        var0.type = var4;
                        var4 = arg0;
                        var0.media = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var6 = var8.bind(var9)(var6);
                    var7 = var6.length;
                case 494:
                    var8 = var4 != var7;
                    var6 = 0;
                    if (!var8) {
                        _fun39247_ip = 506;
                        continue _fun39247
                    }
                case 503:
                    var6 = var7;
                case 506:
                    var1.numOfGoreAttachments = var6;
                    var9 = var3.embeds;
                    var6 = var4 == var9;
                    var7 = undefined;
                    if (var6) {
                        _fun39247_ip = 547;
                        continue _fun39247
                    }
                case 527:
                    var8 = var9.filter;
                    var6 = function(arg0) { // Environment: var5
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var0 = 16;
                        var0 = var7[var0];
                        var5 = undefined;
                        var3 = var6.bind(var5)(var0);
                        var2 = var3.isMediaFlaggedForHarmType;
                        var0 = 17;
                        var0 = var7[var0];
                        var0 = var6.bind(var5)(var0);
                        var0 = var0.ContentHarmType;
                        var1 = var0.GORE;
                        var0 = {};
                        var4 = 18;
                        var4 = var7[var4];
                        var4 = var6.bind(var5)(var4);
                        var4 = var4.ObscuredMediaTypes;
                        var4 = var4.Embed;
                        var0.type = var4;
                        var4 = arg0;
                        var0.media = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var6 = var8.bind(var9)(var6);
                    var7 = var6.length;
                case 547:
                    var8 = var4 != var7;
                    var6 = 0;
                    if (!var8) {
                        _fun39247_ip = 559;
                        continue _fun39247
                    }
                case 556:
                    var6 = var7;
                case 559:
                    var1.numOfGoreEmbeds = var6;
                    var9 = var3.attachments;
                    var6 = var4 == var9;
                    var7 = undefined;
                    if (var6) {
                        _fun39247_ip = 600;
                        continue _fun39247
                    }
                case 580:
                    var8 = var9.filter;
                    var6 = function(arg0) { // Environment: var5
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var0 = 16;
                        var0 = var7[var0];
                        var5 = undefined;
                        var3 = var6.bind(var5)(var0);
                        var2 = var3.isMediaFlaggedForHarmType;
                        var0 = 17;
                        var0 = var7[var0];
                        var0 = var6.bind(var5)(var0);
                        var0 = var0.ContentHarmType;
                        var1 = var0.SELF_HARM;
                        var0 = {};
                        var4 = 18;
                        var4 = var7[var4];
                        var4 = var6.bind(var5)(var4);
                        var4 = var4.ObscuredMediaTypes;
                        var4 = var4.Attachment;
                        var0.type = var4;
                        var4 = arg0;
                        var0.media = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var6 = var8.bind(var9)(var6);
                    var7 = var6.length;
                case 600:
                    var8 = var4 != var7;
                    var6 = 0;
                    if (!var8) {
                        _fun39247_ip = 612;
                        continue _fun39247
                    }
                case 609:
                    var6 = var7;
                case 612:
                    var1.numOfSelfHarmAttachments = var6;
                    var7 = var3.embeds;
                    var6 = var4 == var7;
                    var3 = undefined;
                    if (var6) {
                        _fun39247_ip = 653;
                        continue _fun39247
                    }
                case 633:
                    var6 = var7.filter;
                    var5 = function(arg0) { // Environment: var5
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var0 = 16;
                        var0 = var7[var0];
                        var5 = undefined;
                        var3 = var6.bind(var5)(var0);
                        var2 = var3.isMediaFlaggedForHarmType;
                        var0 = 17;
                        var0 = var7[var0];
                        var0 = var6.bind(var5)(var0);
                        var0 = var0.ContentHarmType;
                        var1 = var0.SELF_HARM;
                        var0 = {};
                        var4 = 18;
                        var4 = var7[var4];
                        var4 = var6.bind(var5)(var4);
                        var4 = var4.ObscuredMediaTypes;
                        var4 = var4.Embed;
                        var0.type = var4;
                        var4 = arg0;
                        var0.media = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var5 = var6.bind(var7)(var5);
                    var3 = var5.length;
                case 653:
                    var4 = var4 != var3;
                    var2 = 0;
                    if (!var4) {
                        _fun39247_ip = 665;
                        continue _fun39247
                    }
                case 662:
                    var2 = var3;
                case 665:
                    var1.numOfSelfHarmEmbeds = var2;
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var0);
        var0 = {};
        var0.channelLookup = var2;
        var0.messageLookup = var1;
        return var0;
    };
    var _closure1_slot27 = var0;
    var0 = function arg0, arg1() {
        _fun39254: for (var _fun39254_ip = 0;;) switch (_fun39254_ip) {
            case 0:
                var2 = function arg0() {
                    _fun39255: for (var _fun39255_ip = 0;;) switch (_fun39255_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = var3.filter;
                            var0 = function(arg0) { // Environment: var2
                                _fun39256: for (var _fun39256_ip = 0;;) switch (_fun39256_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var4 = _closure1_slot0;
                                        var5 = _closure1_slot2;
                                        var0 = 23;
                                        var0 = var5[var0];
                                        var2 = undefined;
                                        var1 = var4.bind(var2)(var0);
                                        var0 = var1.hasAttachmentsEmbedsComponentsOrSnapshots;
                                        var0 = var0.bind(var1)(var3);
                                        var1 = 16;
                                        var1 = var5[var1];
                                        var2 = var4.bind(var2)(var1);
                                        var1 = var2.getEnabledHarmTypesForMessage;
                                        var2 = var1.bind(var2)(var3);
                                        var1 = 0;
                                        var1 = var1 !== var2;
                                        if (!var0) {
                                            _fun39256_ip = 74;
                                            continue _fun39256
                                        }
                                    case 71:
                                        var0 = var1;
                                    case 74:
                                        return var0;
                                }
                            };
                            var4 = var1.bind(var3)(var0);
                            var1 = var3.map;
                            var0 = function(arg0) { // Environment: var2
                                _fun39257: for (var _fun39257_ip = 0;;) switch (_fun39257_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var2 = null;
                                        if (!(var2 != var0)) {
                                            _fun39257_ip = 118;
                                            continue _fun39257
                                        }
                                    case 9:
                                        var1 = 'referenced_message';
                                        var1 = var1 in var0;
                                        if (!var1) {
                                            _fun39257_ip = 118;
                                            continue _fun39257
                                        }
                                    case 20:
                                        var1 = var0.referenced_message;
                                        if (!(var2 != var1)) {
                                            _fun39257_ip = 118;
                                            continue _fun39257
                                        }
                                    case 30:
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var2 = 23;
                                        var2 = var3[var2];
                                        var3 = undefined;
                                        var5 = var4.bind(var3)(var2);
                                        var4 = var5.hasAttachmentsEmbedsComponentsOrSnapshots;
                                        var2 = var0.referenced_message;
                                        var2 = var4.bind(var5)(var2);
                                        if (!var2) {
                                            _fun39257_ip = 118;
                                            continue _fun39257
                                        }
                                    case 75:
                                        var2 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var1 = 16;
                                        var1 = var4[var1];
                                        var3 = var2.bind(var3)(var1);
                                        var2 = var3.getEnabledHarmTypesForMessage;
                                        var1 = var0.referenced_message;
                                        var2 = var2.bind(var3)(var1);
                                        var1 = 0;
                                        if (!(var1 === var2)) {
                                            _fun39257_ip = 122;
                                            continue _fun39257
                                        }
                                    case 118:
                                        var1 = undefined;
                                        return var1;
                                    case 122:
                                        var0 = var0.referenced_message;
                                        return var0;
                                }
                            };
                            var3 = var1.bind(var3)(var0);
                            var1 = var3.filter;
                            var0 = function(arg0) { // Environment: var2
                                var1 = null;
                                var0 = arg0;
                                var0 = var1 != var0;
                                return var0;
                            };
                            var3 = var1.bind(var3)(var0);
                            var0 = var3.length;
                            var1 = 0;
                            var5 = var4;
                            if (!(var0 > var1)) {
                                _fun39255_ip = 93;
                                continue _fun39255
                            }
                        case 64:
                            var0 = new Array(0);
                            var8 = var0;
                            var7 = var4;
                            var6 = 0;
                            var6 = arraySpread(var8, var7, var6);
                            var8 = var0;
                            var7 = var3;
                            var1 = arraySpread(var8, var7, var6);
                            var5 = var0;
                        case 93:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 24;
                            var1 = var3[var1];
                            var3 = undefined;
                            var4 = var4.bind(var3)(var1);
                            var1 = function(arg0, arg1) { // Environment: var2
                                _fun39259: for (var _fun39259_ip = 0;;) switch (_fun39259_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var1 = arg1;
                                        var3 = var2.id;
                                        var0 = var1.id;
                                        var0 = var3 === var0;
                                        if (!var0) {
                                            _fun39259_ip = 37;
                                            continue _fun39259
                                        }
                                    case 23:
                                        var2 = var2.channel_id;
                                        var1 = var1.channel_id;
                                        var0 = var2 === var1;
                                    case 37:
                                        return var0;
                                }
                            };
                            var1 = var4.bind(var3)(var5, var1);
                            var4 = var1.filter;
                            var2 = function(arg0) { // Environment: var2
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 16;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.hasUnscannedMedia;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var2 = var4.bind(var1)(var2);
                            var0 = _closure1_slot27;
                            var1 = var0.bind(var3)(var1);
                            var0 = {};
                            var0.messagesPendingScan = var2;
                            var2 = var1.messageLookup;
                            var0.attributesByMessageId = var2;
                            var1 = var1.channelLookup;
                            var0.attributesByChannelId = var1;
                            return var0;
                    }
                };
                var4 = undefined;
                var1 = arg0;
                var1 = var2.bind(var4)(var1);
                var3 = var1.messagesPendingScan;
                var9 = var1.attributesByChannelId;
                var6 = var1.attributesByMessageId;
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var7 = 25;
                var2 = var8[var7];
                var5 = var5.bind(var4)(var2);
                var2 = var5.entries;
                var9 = var2.bind(var5)(var9);
                var5 = var9.forEach;
                var2 = function(arg0) { // Environment: var0
                    _fun39261: for (var _fun39261_ip = 0;;) switch (_fun39261_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = var3[Symbol.iterator];
                            var3 = var1().next;
                            var4 = var3().value;
                            var2 = var1;
                            var0 = undefined;
                            var2 = var2 === var0;
                            var5 = undefined;
                            if (var2) {
                                _fun39261_ip = 27;
                                continue _fun39261
                            }
                        case 24:
                            var5 = var4;
                        case 27:
                            var4 = undefined;
                            if (var2) {
                                _fun39261_ip = 57;
                                continue _fun39261
                            }
                        case 32:
                            var6 = var3().value;
                            var3 = var1;
                            var3 = var3 === var0;
                            var4 = undefined;
                            var2 = var3;
                            if (var3) {
                                _fun39261_ip = 57;
                                continue _fun39261
                            }
                        case 51:
                            var4 = var6;
                            var2 = var3;
                        case 57:
                            if (var2) {
                                _fun39261_ip = 63;
                                continue _fun39261
                            }
                        case 60:
                            var1.return();
                        case 63:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 15;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.trackExplicitMediaRedactableMessagedLoaded;
                            var1 = {};
                            var1.channelId = var5;
                            var5 = var4.numOfAttachments;
                            var1.numOfAttachments = var5;
                            var5 = var4.numOfAttachmentsPendingScan;
                            var1.numOfAttachmentsPendingScan = var5;
                            var5 = var4.numOfEmbeds;
                            var1.numOfEmbeds = var5;
                            var4 = var4.numOfEmbedsPendingScan;
                            var1.numOfEmbedsPendingScan = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var2 = var5.bind(var9)(var2);
                var5 = _closure1_slot0;
                var2 = 26;
                var2 = var8[var2];
                var5 = var5.bind(var4)(var2);
                var2 = var5.isEligibleForObscuredMessageLoadExperiment;
                var2 = var2.bind(var5)();
                if (!var2) {
                    _fun39254_ip = 156;
                    continue _fun39254
                }
            case 113:
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var5 = var5.bind(var4)(var2);
                var2 = var5.entries;
                var5 = var2.bind(var5)(var6);
                var2 = var5.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun39262: for (var _fun39262_ip = 0;;) switch (_fun39262_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = var3[Symbol.iterator];
                            var3 = var1().next;
                            var4 = var3().value;
                            var2 = var1;
                            var0 = undefined;
                            var2 = var2 === var0;
                            var5 = undefined;
                            if (var2) {
                                _fun39262_ip = 27;
                                continue _fun39262
                            }
                        case 24:
                            var5 = var4;
                        case 27:
                            var4 = undefined;
                            if (var2) {
                                _fun39262_ip = 57;
                                continue _fun39262
                            }
                        case 32:
                            var6 = var3().value;
                            var3 = var1;
                            var3 = var3 === var0;
                            var4 = undefined;
                            var2 = var3;
                            if (var3) {
                                _fun39262_ip = 57;
                                continue _fun39262
                            }
                        case 51:
                            var4 = var6;
                            var2 = var3;
                        case 57:
                            if (var2) {
                                _fun39262_ip = 63;
                                continue _fun39262
                            }
                        case 60:
                            var1.return();
                        case 63:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 15;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.trackRedactableMessageLoaded;
                            var1 = {};
                            var1.messageId = var5;
                            var5 = var4.channelId;
                            var1.channelId = var5;
                            var5 = var4.numOfAttachments;
                            var1.numOfAttachments = var5;
                            var5 = var4.numOfGoreAttachments;
                            var1.numOfGoreAttachments = var5;
                            var5 = var4.numOfExplicitAttachments;
                            var1.numOfExplicitAttachments = var5;
                            var5 = var4.numOfSelfHarmAttachments;
                            var1.numOfSelfHarmAttachments = var5;
                            var5 = var4.numOfEmbeds;
                            var1.numOfEmbeds = var5;
                            var5 = var4.numOfGoreEmbeds;
                            var1.numOfGoreEmbeds = var5;
                            var5 = var4.numOfExplicitEmbeds;
                            var1.numOfExplicitEmbeds = var5;
                            var4 = var4.numOfSelfHarmEmbeds;
                            var1.numOfSelfHarmEmbeds = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var0 = var2.bind(var5)(var0);
            case 156:
                var2 = var3.length;
                var0 = 0;
                var0 = var2 > var0;
                if (!var0) {
                    _fun39254_ip = 185;
                    continue _fun39254
                }
            case 170:
                var2 = _closure1_slot26;
                var1 = arg1;
                var1 = var2.bind(var4)(var3, var1);
                var0 = true;
            case 185:
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function arg0() {
        _fun39263: for (var _fun39263_ip = 0;;) switch (_fun39263_ip) {
            case 0:
                var2 = function arg0() {
                    _fun39264: for (var _fun39264_ip = 0;;) switch (_fun39264_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = var3.filter;
                            var0 = function(arg0) { // Environment: var2
                                _fun39265: for (var _fun39265_ip = 0;;) switch (_fun39265_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var2 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var0 = 23;
                                        var0 = var4[var0];
                                        var4 = undefined;
                                        var2 = var2.bind(var4)(var0);
                                        var0 = var2.hasAttachmentsEmbedsComponentsOrSnapshots;
                                        var0 = var0.bind(var2)(var3);
                                        if (!var0) {
                                            _fun39265_ip = 79;
                                            continue _fun39265
                                        }
                                    case 42:
                                        var2 = _closure1_slot0;
                                        var5 = _closure1_slot2;
                                        var1 = 16;
                                        var1 = var5[var1];
                                        var2 = var2.bind(var4)(var1);
                                        var1 = var2.getEnabledHarmTypesForMessage;
                                        var2 = var1.bind(var2)(var3);
                                        var1 = 0;
                                        var0 = var1 !== var2;
                                    case 79:
                                        return var0;
                                }
                            };
                            var4 = var1.bind(var3)(var0);
                            var1 = var3.map;
                            var0 = function(arg0) { // Environment: var2
                                _fun39266: for (var _fun39266_ip = 0;;) switch (_fun39266_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var4 = _closure1_slot17;
                                        var3 = var4.has;
                                        var2 = var0.type;
                                        var2 = var3.bind(var4)(var2);
                                        if (!var2) {
                                            _fun39266_ip = 178;
                                            continue _fun39266
                                        }
                                    case 31:
                                        var2 = var0.messageReference;
                                        var3 = null;
                                        if (!(var3 != var2)) {
                                            _fun39266_ip = 178;
                                            continue _fun39266
                                        }
                                    case 46:
                                        var4 = _closure1_slot8;
                                        var2 = var4.getMessageByReference;
                                        var0 = var0.messageReference;
                                        var0 = var2.bind(var4)(var0);
                                        var4 = var0.state;
                                        var2 = _closure1_slot9;
                                        var2 = var2.LOADED;
                                        if (!(var4 === var2)) {
                                            _fun39266_ip = 178;
                                            continue _fun39266
                                        }
                                    case 86:
                                        var2 = var0.message;
                                        if (!(var3 != var2)) {
                                            _fun39266_ip = 178;
                                            continue _fun39266
                                        }
                                    case 95:
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var2 = 23;
                                        var2 = var3[var2];
                                        var3 = undefined;
                                        var5 = var4.bind(var3)(var2);
                                        var4 = var5.hasAttachmentsEmbedsComponentsOrSnapshots;
                                        var2 = var0.message;
                                        var2 = var4.bind(var5)(var2);
                                        if (!var2) {
                                            _fun39266_ip = 178;
                                            continue _fun39266
                                        }
                                    case 136:
                                        var2 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var1 = 16;
                                        var1 = var4[var1];
                                        var3 = var2.bind(var3)(var1);
                                        var2 = var3.getEnabledHarmTypesForMessage;
                                        var1 = var0.message;
                                        var2 = var2.bind(var3)(var1);
                                        var1 = 0;
                                        if (!(var1 === var2)) {
                                            _fun39266_ip = 182;
                                            continue _fun39266
                                        }
                                    case 178:
                                        var1 = undefined;
                                        return var1;
                                    case 182:
                                        var0 = var0.message;
                                        return var0;
                                }
                            };
                            var3 = var1.bind(var3)(var0);
                            var1 = var3.filter;
                            var0 = function(arg0) { // Environment: var2
                                var1 = null;
                                var0 = arg0;
                                var0 = var1 != var0;
                                return var0;
                            };
                            var3 = var1.bind(var3)(var0);
                            var0 = var3.length;
                            var1 = 0;
                            var5 = var4;
                            if (!(var0 > var1)) {
                                _fun39264_ip = 93;
                                continue _fun39264
                            }
                        case 64:
                            var0 = new Array(0);
                            var8 = var0;
                            var7 = var4;
                            var6 = 0;
                            var6 = arraySpread(var8, var7, var6);
                            var8 = var0;
                            var7 = var3;
                            var1 = arraySpread(var8, var7, var6);
                            var5 = var0;
                        case 93:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 24;
                            var1 = var3[var1];
                            var3 = undefined;
                            var4 = var4.bind(var3)(var1);
                            var1 = function(arg0, arg1) { // Environment: var2
                                _fun39268: for (var _fun39268_ip = 0;;) switch (_fun39268_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var1 = arg1;
                                        var3 = var2.id;
                                        var0 = var1.id;
                                        var0 = var3 === var0;
                                        if (!var0) {
                                            _fun39268_ip = 37;
                                            continue _fun39268
                                        }
                                    case 23:
                                        var2 = var2.channel_id;
                                        var1 = var1.channel_id;
                                        var0 = var2 === var1;
                                    case 37:
                                        return var0;
                                }
                            };
                            var1 = var4.bind(var3)(var5, var1);
                            var4 = var1.filter;
                            var2 = function(arg0) { // Environment: var2
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 16;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.hasUnscannedMedia;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var2 = var4.bind(var1)(var2);
                            var0 = _closure1_slot27;
                            var1 = var0.bind(var3)(var1);
                            var0 = {};
                            var0.messagesPendingScan = var2;
                            var2 = var1.channelLookup;
                            var0.attributesByChannelId = var2;
                            var1 = var1.messageLookup;
                            var0.attributesByMessageId = var1;
                            return var0;
                    }
                };
                var3 = undefined;
                var1 = arg0;
                var1 = var2.bind(var3)(var1);
                var2 = var1.messagesPendingScan;
                var9 = var1.attributesByChannelId;
                var6 = var1.attributesByMessageId;
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var7 = 25;
                var4 = var8[var7];
                var5 = var5.bind(var3)(var4);
                var4 = var5.entries;
                var9 = var4.bind(var5)(var9);
                var5 = var9.forEach;
                var4 = function(arg0) { // Environment: var0
                    _fun39270: for (var _fun39270_ip = 0;;) switch (_fun39270_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = var3[Symbol.iterator];
                            var3 = var1().next;
                            var4 = var3().value;
                            var2 = var1;
                            var0 = undefined;
                            var2 = var2 === var0;
                            var5 = undefined;
                            if (var2) {
                                _fun39270_ip = 27;
                                continue _fun39270
                            }
                        case 24:
                            var5 = var4;
                        case 27:
                            var4 = undefined;
                            if (var2) {
                                _fun39270_ip = 57;
                                continue _fun39270
                            }
                        case 32:
                            var6 = var3().value;
                            var3 = var1;
                            var3 = var3 === var0;
                            var4 = undefined;
                            var2 = var3;
                            if (var3) {
                                _fun39270_ip = 57;
                                continue _fun39270
                            }
                        case 51:
                            var4 = var6;
                            var2 = var3;
                        case 57:
                            if (var2) {
                                _fun39270_ip = 63;
                                continue _fun39270
                            }
                        case 60:
                            var1.return();
                        case 63:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 15;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.trackExplicitMediaRedactableMessagedLoaded;
                            var1 = {};
                            var1.channelId = var5;
                            var5 = var4.numOfAttachments;
                            var1.numOfAttachments = var5;
                            var5 = var4.numOfAttachmentsPendingScan;
                            var1.numOfAttachmentsPendingScan = var5;
                            var5 = var4.numOfEmbeds;
                            var1.numOfEmbeds = var5;
                            var4 = var4.numOfEmbedsPendingScan;
                            var1.numOfEmbedsPendingScan = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var4 = var5.bind(var9)(var4);
                var5 = _closure1_slot0;
                var4 = 26;
                var4 = var8[var4];
                var5 = var5.bind(var3)(var4);
                var4 = var5.isEligibleForObscuredMessageLoadExperiment;
                var4 = var4.bind(var5)();
                if (!var4) {
                    _fun39263_ip = 156;
                    continue _fun39263
                }
            case 113:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var5 = var5.bind(var3)(var4);
                var4 = var5.entries;
                var5 = var4.bind(var5)(var6);
                var4 = var5.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun39271: for (var _fun39271_ip = 0;;) switch (_fun39271_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = var3[Symbol.iterator];
                            var3 = var1().next;
                            var4 = var3().value;
                            var2 = var1;
                            var0 = undefined;
                            var2 = var2 === var0;
                            var5 = undefined;
                            if (var2) {
                                _fun39271_ip = 27;
                                continue _fun39271
                            }
                        case 24:
                            var5 = var4;
                        case 27:
                            var4 = undefined;
                            if (var2) {
                                _fun39271_ip = 57;
                                continue _fun39271
                            }
                        case 32:
                            var6 = var3().value;
                            var3 = var1;
                            var3 = var3 === var0;
                            var4 = undefined;
                            var2 = var3;
                            if (var3) {
                                _fun39271_ip = 57;
                                continue _fun39271
                            }
                        case 51:
                            var4 = var6;
                            var2 = var3;
                        case 57:
                            if (var2) {
                                _fun39271_ip = 63;
                                continue _fun39271
                            }
                        case 60:
                            var1.return();
                        case 63:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 15;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.trackRedactableMessageLoaded;
                            var1 = {};
                            var1.messageId = var5;
                            var5 = var4.channelId;
                            var1.channelId = var5;
                            var5 = var4.numOfAttachments;
                            var1.numOfAttachments = var5;
                            var5 = var4.numOfGoreAttachments;
                            var1.numOfGoreAttachments = var5;
                            var5 = var4.numOfSelfHarmAttachments;
                            var1.numOfSelfHarmAttachments = var5;
                            var5 = var4.numOfExplicitAttachments;
                            var1.numOfExplicitAttachments = var5;
                            var5 = var4.numOfEmbeds;
                            var1.numOfEmbeds = var5;
                            var5 = var4.numOfGoreEmbeds;
                            var1.numOfGoreEmbeds = var5;
                            var5 = var4.numOfExplicitEmbeds;
                            var1.numOfExplicitEmbeds = var5;
                            var4 = var4.numOfSelfHarmEmbeds;
                            var1.numOfSelfHarmEmbeds = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var0 = var4.bind(var5)(var0);
            case 156:
                var4 = var2.length;
                var0 = 0;
                var0 = var4 > var0;
                if (!var0) {
                    _fun39263_ip = 181;
                    continue _fun39263
                }
            case 170:
                var1 = _closure1_slot26;
                var1 = var1.bind(var3)(var2);
                var0 = true;
            case 181:
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = function arg0() {
        _fun39272: for (var _fun39272_ip = 0;;) switch (_fun39272_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.message;
                var2 = var1.channel_id;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun39272_ip = 583;
                    continue _fun39272
                }
            case 22:
                var2 = var1.id;
                if (!(var0 != var2)) {
                    _fun39272_ip = 583;
                    continue _fun39272
                }
            case 34:
                var2 = var1.author;
                var3 = var0 == var2;
                var4 = undefined;
                var5 = undefined;
                if (var3) {
                    _fun39272_ip = 56;
                    continue _fun39272
                }
            case 51:
                var5 = var2.id;
            case 56:
                var6 = _closure1_slot10;
                var3 = var6.getId;
                var3 = var3.bind(var6)();
                if (!(var5 !== var3)) {
                    _fun39272_ip = 583;
                    continue _fun39272
                }
            case 80:
                var3 = var1.embeds;
                if (!(var0 == var3)) {
                    _fun39272_ip = 138;
                    continue _fun39272
                }
            case 90:
                var3 = var1.attachments;
                if (!(var0 == var3)) {
                    _fun39272_ip = 138;
                    continue _fun39272
                }
            case 100:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 15;
                var3 = var6[var3];
                var5 = var5.bind(var4)(var3);
                var3 = var5.hasMessageSnapshotsWithAttachmentsOrEmbeds;
                var3 = var3.bind(var5)(var1);
                if (var3) {
                    _fun39272_ip = 138;
                    continue _fun39272
                }
            case 134:
                var3 = false;
                return var3;
            case 138:
                var5 = var1.embeds;
                var6 = var0 == var5;
                var3 = undefined;
                if (var6) {
                    _fun39272_ip = 158;
                    continue _fun39272
                }
            case 153:
                var3 = var5.length;
            case 158:
                var5 = 0;
                if (!(var5 === var3)) {
                    _fun39272_ip = 226;
                    continue _fun39272
                }
            case 164:
                var6 = var1.attachments;
                var7 = var0 == var6;
                var3 = undefined;
                if (var7) {
                    _fun39272_ip = 184;
                    continue _fun39272
                }
            case 179:
                var3 = var6.length;
            case 184:
                if (!(var5 === var3)) {
                    _fun39272_ip = 226;
                    continue _fun39272
                }
            case 188:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 15;
                var3 = var6[var3];
                var5 = var5.bind(var4)(var3);
                var3 = var5.hasMessageSnapshotsWithAttachmentsOrEmbeds;
                var3 = var3.bind(var5)(var1);
                if (var3) {
                    _fun39272_ip = 226;
                    continue _fun39272
                }
            case 222:
                var3 = false;
                return var3;
            case 226:
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var5 = 16;
                var3 = var3[var5];
                var6 = var6.bind(var4)(var3);
                var3 = var6.hasUnscannedMedia;
                var3 = var3.bind(var6)(var1);
                if (var3) {
                    _fun39272_ip = 470;
                    continue _fun39272
                }
            case 263:
                var8 = _closure1_slot13;
                var7 = var8.getMessage;
                var6 = var1.channel_id;
                var3 = var1.id;
                var6 = var7.bind(var8)(var6, var3);
                if (!(var0 == var6)) {
                    _fun39272_ip = 319;
                    continue _fun39272
                }
            case 293:
                var9 = _closure1_slot16;
                var8 = var9.getMessage;
                var7 = var1.id;
                var3 = var1.channel_id;
                var6 = var8.bind(var9)(var7, var3);
            case 319:
                if (!(var0 == var6)) {
                    _fun39272_ip = 366;
                    continue _fun39272
                }
            case 323:
                var9 = _closure1_slot8;
                var8 = var9.getMessage;
                var7 = var1.channel_id;
                var3 = var1.id;
                var7 = var8.bind(var9)(var7, var3);
                var8 = var0 == var7;
                var3 = undefined;
                if (var8) {
                    _fun39272_ip = 363;
                    continue _fun39272
                }
            case 358:
                var3 = var7.message;
            case 363:
                var6 = var3;
            case 366:
                var3 = var0 == var6;
                if (var3) {
                    _fun39272_ip = 425;
                    continue _fun39272
                }
            case 373:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = var10[var5];
                var8 = var9.bind(var4)(var5);
                var7 = var8.hasUnscannedMedia;
                var5 = 27;
                var5 = var10[var5];
                var9 = var9.bind(var4)(var5);
                var5 = var9.updateMessageRecord;
                var5 = var5.bind(var9)(var6, var1);
                var3 = var7.bind(var8)(var5);
            case 425:
                if (var3) {
                    _fun39272_ip = 470;
                    continue _fun39272
                }
            case 428:
                var5 = _closure1_slot24;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 15;
                var3 = var8[var3];
                var3 = var7.bind(var4)(var3);
                var3 = var3.TimeoutCancelSource;
                var3 = var3.UPDATE;
                var3 = var5.bind(var4)(var6, var3);
            case 470:
                var5 = _closure1_slot14;
                var3 = var5.getChannelId;
                var6 = var3.bind(var5)();
                var5 = _closure1_slot11;
                var3 = var5.getCurrentSidebarChannelId;
                var5 = var3.bind(var5)(var6);
                var3 = var1.channel_id;
                if (!(var3 !== var6)) {
                    _fun39272_ip = 521;
                    continue _fun39272
                }
            case 508:
                var3 = var1.channel_id;
                if (!(var3 !== var5)) {
                    _fun39272_ip = 521;
                    continue _fun39272
                }
            case 517:
                var3 = false;
                return var3;
            case 521:
                var6 = _closure1_slot13;
                var5 = var6.getMessage;
                var3 = var1.channel_id;
                var1 = var1.id;
                var1 = var5.bind(var6)(var3, var1);
                var0 = var0 != var1;
                if (!var0) {
                    _fun39272_ip = 581;
                    continue _fun39272
                }
            case 554:
                var3 = _closure1_slot28;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = {};
                var5 = true;
                var1.isMessageUpdate = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 581:
                return var0;
            case 583:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function arg0() {
        _fun39273: for (var _fun39273_ip = 0;;) switch (_fun39273_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.channelId;
                var0 = var1.message;
                var2 = var1.optimistic;
                var1 = var1.isPushNotification;
                if (var2) {
                    _fun39273_ip = 253;
                    continue _fun39273
                }
            case 31:
                if (var1) {
                    _fun39273_ip = 253;
                    continue _fun39273
                }
            case 37:
                var6 = null;
                if (!(var6 != var5)) {
                    _fun39273_ip = 253;
                    continue _fun39273
                }
            case 46:
                var1 = var0.author;
                var2 = var6 == var1;
                var3 = undefined;
                var4 = undefined;
                if (var2) {
                    _fun39273_ip = 68;
                    continue _fun39273
                }
            case 63:
                var4 = var1.id;
            case 68:
                var7 = _closure1_slot10;
                var2 = var7.getId;
                var2 = var2.bind(var7)();
                if (!(var4 !== var2)) {
                    _fun39273_ip = 253;
                    continue _fun39273
                }
            case 92:
                var4 = _closure1_slot14;
                var2 = var4.getChannelId;
                var7 = var2.bind(var4)();
                var4 = _closure1_slot11;
                var2 = var4.getCurrentSidebarChannelId;
                var4 = var2.bind(var4)(var7);
                var8 = _closure1_slot12;
                var2 = var8.getChannel;
                var2 = var2.bind(var8)(var5);
                if (!(var5 !== var7)) {
                    _fun39273_ip = 143;
                    continue _fun39273
                }
            case 139:
                if (!(var5 === var4)) {
                    _fun39273_ip = 249;
                    continue _fun39273
                }
            case 143:
                var4 = var6 == var2;
                var5 = undefined;
                if (var4) {
                    _fun39273_ip = 162;
                    continue _fun39273
                }
            case 152:
                var4 = var2.isPrivate;
                var5 = var4.bind(var2)();
            case 162:
                var4 = var6 == var5;
                if (var4) {
                    _fun39273_ip = 172;
                    continue _fun39273
                }
            case 169:
                var4 = var5;
            case 172:
                var7 = var6 == var2;
                var5 = undefined;
                if (var7) {
                    _fun39273_ip = 187;
                    continue _fun39273
                }
            case 181:
                var5 = var2.memberCount;
            case 187:
                var5 = var6 == var5;
                if (var5) {
                    _fun39273_ip = 216;
                    continue _fun39273
                }
            case 194:
                var7 = var6 == var2;
                var6 = undefined;
                if (var7) {
                    _fun39273_ip = 209;
                    continue _fun39273
                }
            case 203:
                var6 = var2.memberCount;
            case 209:
                var2 = 100;
                var5 = var6 > var2;
            case 216:
                var2 = _closure1_slot28;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = {};
                if (!var4) {
                    _fun39273_ip = 236;
                    continue _fun39273
                }
            case 233:
                var4 = var5;
            case 236:
                var0.jitter = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 249:
                var0 = false;
                return var0;
            case 253:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var0 = function arg0() {
        _fun39274: for (var _fun39274_ip = 0;;) switch (_fun39274_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.channelId;
                var3 = var0.messages;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun39274_ip = 83;
                    continue _fun39274
                }
            case 20:
                if (!(var0 != var3)) {
                    _fun39274_ip = 83;
                    continue _fun39274
                }
            case 24:
                var2 = _closure1_slot14;
                var0 = var2.getChannelId;
                var0 = var0.bind(var2)();
                var5 = _closure1_slot11;
                var2 = var5.getCurrentSidebarChannelId;
                var2 = var2.bind(var5)(var0);
                var0 = var4 === var0;
                if (var0) {
                    _fun39274_ip = 67;
                    continue _fun39274
                }
            case 63:
                var0 = var4 === var2;
            case 67:
                if (!var0) {
                    _fun39274_ip = 81;
                    continue _fun39274
                }
            case 70:
                var2 = _closure1_slot28;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 81:
                return var0;
            case 83:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var0 = function arg0() {
        var1 = arg0;
        var3 = var1.data;
        var1 = false;
        var _closure2_slot0 = var1;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var0
            _fun39276: for (var _fun39276_ip = 0;;) switch (_fun39276_ip) {
                case 0:
                    var0 = arg0;
                    var4 = var0.messages;
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var0 = 28;
                    var2 = var5[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var4 = var2.bind(var0)(var4);
                    var2 = _closure1_slot28;
                    var1 = 24;
                    var1 = var5[var1];
                    var3 = var3.bind(var0)(var1);
                    var1 = function(arg0, arg1) { // Environment: var1
                        _fun39277: for (var _fun39277_ip = 0;;) switch (_fun39277_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = arg1;
                                var3 = var2.id;
                                var0 = var1.id;
                                var0 = var3 === var0;
                                if (!var0) {
                                    _fun39277_ip = 37;
                                    continue _fun39277
                                }
                            case 23:
                                var2 = var2.channel_id;
                                var1 = var1.channel_id;
                                var0 = var2 === var1;
                            case 37:
                                return var0;
                        }
                    };
                    var1 = var3.bind(var0)(var4, var1);
                    var2 = var2.bind(var0)(var1);
                    if (var2) {
                        _fun39276_ip = 83;
                        continue _fun39276
                    }
                case 76:
                    var2 = _closure2_slot0;
                case 83:
                    _closure2_slot0 = var2;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        var0 = _closure2_slot0;
        return var0;
    };
    var _closure1_slot33 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var3 = var0.pins;
        var2 = _closure1_slot28;
        var1 = var3.map;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.message;
            return var0;
        };
        var1 = var1.bind(var3)(var0);
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot34 = var0;
    var0 = function arg0() {
        _fun39280: for (var _fun39280_ip = 0;;) switch (_fun39280_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildId;
                var7 = var0.threads;
                var _closure2_slot0 = var7;
                var0 = null;
                var0 = var0 != var7;
                if (!var0) {
                    _fun39280_ip = 112;
                    continue _fun39280
                }
            case 29:
                var5 = _closure1_slot15;
                var1 = var5.getGuildId;
                var1 = var1.bind(var5)();
                var1 = var1 === var4;
                if (!var1) {
                    _fun39280_ip = 109;
                    continue _fun39280
                }
            case 53:
                var4 = _closure1_slot28;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 25;
                var5 = var5[var3];
                var3 = undefined;
                var6 = var6.bind(var3)(var5);
                var5 = var6.keys;
                var6 = var5.bind(var6)(var7);
                var5 = var6.map;
                var2 = function(arg0) { // Environment: var2
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var1[var0];
                    var0 = var0.first_message;
                    return var0;
                };
                var2 = var5.bind(var6)(var2);
                var1 = var4.bind(var3)(var2);
            case 109:
                var0 = var1;
            case 112:
                return var0;
        }
    };
    var _closure1_slot35 = var0;
    var0 = function arg0() {
        _fun39282: for (var _fun39282_ip = 0;;) switch (_fun39282_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var5 = var0.firstMessages;
                var0 = null;
                var0 = var0 != var5;
                if (!var0) {
                    _fun39282_ip = 74;
                    continue _fun39282
                }
            case 23:
                var4 = _closure1_slot15;
                var1 = var4.getGuildId;
                var1 = var1.bind(var4)();
                var3 = var1 !== var3;
                var1 = !var3;
                if (var3) {
                    _fun39282_ip = 71;
                    continue _fun39282
                }
            case 50:
                var4 = _closure1_slot28;
                var3 = {};
                var2 = true;
                var3.forceBatchScan = var2;
                var2 = undefined;
                var1 = var4.bind(var2)(var5, var3);
            case 71:
                var0 = var1;
            case 74:
                return var0;
        }
    };
    var _closure1_slot36 = var0;
    var0 = function arg0() {
        _fun39283: for (var _fun39283_ip = 0;;) switch (_fun39283_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun39283_ip = 31;
                    continue _fun39283
                }
            case 17:
                var2 = _closure1_slot41;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 31:
                return var0;
        }
    };
    var _closure1_slot37 = var0;
    var0 = function arg0() {
        _fun39284: for (var _fun39284_ip = 0;;) switch (_fun39284_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.channelId;
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 29;
                var0 = var3[var0];
                var3 = undefined;
                var1 = var1.bind(var3)(var0);
                var0 = var1.isEligibleForSafetyXPHoldoutExperiment;
                var0 = var0.bind(var1)();
                var0 = null;
                var0 = var0 != var4;
                if (!var0) {
                    _fun39284_ip = 88;
                    continue _fun39284
                }
            case 52:
                var5 = _closure1_slot14;
                var1 = var5.getChannelId;
                var1 = var1.bind(var5)();
                var5 = var4 !== var1;
                var1 = !var5;
                if (var5) {
                    _fun39284_ip = 85;
                    continue _fun39284
                }
            case 76:
                var2 = _closure1_slot41;
                var1 = var2.bind(var3)(var4);
            case 85:
                var0 = var1;
            case 88:
                return var0;
        }
    };
    var _closure1_slot38 = var0;
    var0 = function arg0() {
        _fun39285: for (var _fun39285_ip = 0;;) switch (_fun39285_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.settings;
                var1 = var1.local;
                if (!var1) {
                    _fun39285_ip = 76;
                    continue _fun39285
                }
            case 18:
                var2 = var0.type;
                var0 = _closure1_slot18;
                var0 = var0.PRELOADED_USER_SETTINGS;
                if (!(var2 === var0)) {
                    _fun39285_ip = 76;
                    continue _fun39285
                }
            case 40:
                var2 = _closure1_slot14;
                var0 = var2.getChannelId;
                var3 = var0.bind(var2)();
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun39285_ip = 74;
                    continue _fun39285
                }
            case 63:
                var2 = _closure1_slot41;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 74:
                return var0;
            case 76:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot39 = var0;
    var0 = function arg0() {
        _fun39286: for (var _fun39286_ip = 0;;) switch (_fun39286_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var0 = var0.chatOpen;
                var1 = !var0;
                var0 = !var1;
                if (var1) {
                    _fun39286_ip = 37;
                    continue _fun39286
                }
            case 23:
                var2 = _closure1_slot41;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 37:
                return var0;
        }
    };
    var _closure1_slot40 = var0;
    var0 = function arg0() {
        _fun39287: for (var _fun39287_ip = 0;;) switch (_fun39287_ip) {
            case 0:
                var3 = _closure1_slot13;
                var2 = var3.getMessages;
                var0 = arg0;
                var3 = var2.bind(var3)(var0);
                var2 = var3.length;
                var0 = 0;
                var0 = var0 !== var2;
                if (!var0) {
                    _fun39287_ip = 46;
                    continue _fun39287
                }
            case 35:
                var2 = _closure1_slot29;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 46:
                return var0;
        }
    };
    var _closure1_slot41 = var0;
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
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ReferencedMessageState;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot15 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot16 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageTypesWithLazyLoadedReferences;
    var _closure1_slot17 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserSettingsTypes;
    var _closure1_slot18 = var3;
    var3 = {};
    var _closure1_slot19 = var3;
    var3 = function arg0, arg1() {
        _fun39288: for (var _fun39288_ip = 0;;) switch (_fun39288_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.length;
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun39288_ip = 96;
                    continue _fun39288
                }
            case 14:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 20;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var3 = arg1;
                if (var3) {
                    _fun39288_ip = 85;
                    continue _fun39288
                }
            case 45:
                var4 = var1.sendMessagesForScanning;
                var0 = var2[var0];
                var3 = var0.channel_id;
                var5 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var0 = var5.bind(var2)(var0);
                var0 = var4.bind(var1)(var3, var0);
                _fun39288_ip = 96;
                continue _fun39288;
            case 85:
                var0 = var1.sendMultiChannelMessagesForScanning;
                var0 = var0.bind(var1)(var2);
            case 96:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot20 = var3;
    var3 = 30;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function arg0() {
            _fun39291: for (var _fun39291_ip = 0;;) switch (_fun39291_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var6 = _closure1_slot4;
                    var1 = _closure2_slot0;
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4, var1);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot21;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun39291_ip = 84;
                        continue _fun39291
                    }
                case 71:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun39291_ip = 118;
                    continue _fun39291;
                case 84:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 118:
                    var0 = var1.bind(var3)(var4, var0);
                    var1 = {};
                    var3 = _closure1_slot32;
                    var1.LOAD_MESSAGES_SUCCESS = var3;
                    var3 = _closure1_slot35;
                    var1.LOAD_FORUM_POSTS = var3;
                    var3 = _closure1_slot36;
                    var1.LOAD_THREADS_SUCCESS = var3;
                    var1.LOAD_ARCHIVED_THREADS_SUCCESS = var3;
                    var3 = _closure1_slot37;
                    var1.SIDEBAR_VIEW_CHANNEL = var3;
                    var3 = _closure1_slot31;
                    var1.MESSAGE_CREATE = var3;
                    var3 = _closure1_slot30;
                    var1.MESSAGE_UPDATE = var3;
                    var3 = _closure1_slot23;
                    var1.LOGOUT = var3;
                    var3 = _closure1_slot33;
                    var1.SEARCH_MESSAGES_SUCCESS = var3;
                    var1.MOD_VIEW_SEARCH_MESSAGES_SUCCESS = var3;
                    var3 = _closure1_slot38;
                    var1.CHANNEL_SELECT = var3;
                    var3 = _closure1_slot34;
                    var1.LOAD_PINNED_MESSAGES_SUCCESS = var3;
                    var3 = _closure1_slot39;
                    var1.USER_SETTINGS_PROTO_UPDATE = var3;
                    var2 = _closure1_slot40;
                    var1.CHANNEL_RTC_UPDATE_CHAT_OPEN = var2;
                    var0.actions = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot7;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot3;
        var0 = var0.bind(var1)(var2);
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
    var3 = 31;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/explicit_media_redaction/ExplicitMediaManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    var1 = 3000;
    var2.MESSAGE_SCAN_TIMEOUT = var1;
    var1 = 800;
    var2.MAX_TIMEOUT_FOR_JITTER = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 4268, 1216, 4225, 1372, 4249, 1670, 3213, 4269, 660, 665, 4256, 4270, 4271, 4273, 806, 4283, 4261, 4266, 4284, 4285, 21, 4294, 3972, 4295, 4298, 4299, 2]);