// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var5 = function(arg0, arg1) { // Original name: applyClientOptions, environment: var1
        _fun9172: for (var _fun9172_ip = 0;;) switch (_fun9172_ip) {
            case 0:
                var0 = arg0;
                var3 = arg1;
                var4 = var3.environment;
                var2 = var3.release;
                var1 = var3.dist;
                var5 = var3.maxValueLength;
                var3 = var0.environment;
                if (var3) {
                    _fun9172_ip = 42;
                    continue _fun9172
                }
            case 39:
                var3 = var4;
            case 42:
                if (var3) {
                    _fun9172_ip = 76;
                    continue _fun9172
                }
            case 45:
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 7;
                var6 = var6[var4];
                var4 = undefined;
                var4 = var7.bind(var4)(var6);
                var3 = var4.DEFAULT_ENVIRONMENT;
            case 76:
                var0.environment = var3;
                var3 = var0.release;
                var3 = !var3;
                if (!var3) {
                    _fun9172_ip = 97;
                    continue _fun9172
                }
            case 94:
                var3 = var2;
            case 97:
                if (!var3) {
                    _fun9172_ip = 106;
                    continue _fun9172
                }
            case 100:
                var0.release = var2;
            case 106:
                var2 = var0.dist;
                var2 = !var2;
                if (!var2) {
                    _fun9172_ip = 121;
                    continue _fun9172
                }
            case 118:
                var2 = var1;
            case 121:
                if (!var2) {
                    _fun9172_ip = 130;
                    continue _fun9172
                }
            case 124:
                var0.dist = var1;
            case 130:
                var1 = var0.request;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun9172_ip = 150;
                    continue _fun9172
                }
            case 145:
                var0 = var1.url;
            case 150:
                if (!var0) {
                    _fun9172_ip = 211;
                    continue _fun9172
                }
            case 153:
                if (var5) {
                    _fun9172_ip = 163;
                    continue _fun9172
                }
            case 156:
                var0 = var1.url;
                _fun9172_ip = 205;
                continue _fun9172;
            case 163:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 8;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.truncate;
                var2 = var1.url;
                var0 = var3.bind(var4)(var2, var5);
            case 205:
                var1.url = var0;
            case 211:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot5 = var5;
    var4 = function(arg0, arg1) { // Original name: applyDebugIds, environment: var1
        _fun9173: for (var _fun9173_ip = 0;;) switch (_fun9173_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 9;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.getFilenameToDebugIdMap;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
                var _closure2_slot0 = var2;
                var2 = arg0;
                var4 = var2.exception;
                var5 = null;
                var2 = var5 == var4;
                var3 = var4;
                if (var2) {
                    _fun9173_ip = 78;
                    continue _fun9173
                }
            case 66:
                var4 = var4.values;
                var2 = var5 == var4;
                var3 = var4;
            case 78:
                if (var2) {
                    _fun9173_ip = 96;
                    continue _fun9173
                }
            case 81:
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun9174: for (var _fun9174_ip = 0;;) switch (_fun9174_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.stacktrace;
                            var3 = null;
                            var0 = var3 == var1;
                            var2 = var1;
                            if (var0) {
                                _fun9174_ip = 34;
                                continue _fun9174
                            }
                        case 21:
                            var1 = var1.frames;
                            var0 = var3 == var1;
                            var2 = var1;
                        case 34:
                            if (var0) {
                                _fun9174_ip = 54;
                                continue _fun9174
                            }
                        case 37:
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                _fun9175: for (var _fun9175_ip = 0;;) switch (_fun9175_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var0 = var1.filename;
                                        if (!var0) {
                                            _fun9175_ip = 35;
                                            continue _fun9175
                                        }
                                    case 12:
                                        var2 = _closure2_slot0;
                                        var0 = var1.filename;
                                        var0 = var2[var0];
                                        var1.debug_id = var0;
                                    case 35:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                        case 54:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
            case 96:
                return var0;
        }
    };
    var _closure1_slot6 = var4;
    var3 = function(arg0) { // Original name: applyDebugMeta, environment: var1
        _fun9176: for (var _fun9176_ip = 0;;) switch (_fun9176_ip) {
            case 0:
                var2 = arg0;
                var3 = {};
                var _closure2_slot0 = var3;
                var4 = var2.exception;
                var6 = null;
                var1 = var6 == var4;
                var5 = var4;
                if (var1) {
                    _fun9176_ip = 41;
                    continue _fun9176
                }
            case 29:
                var4 = var4.values;
                var1 = var6 == var4;
                var5 = var4;
            case 41:
                if (var1) {
                    _fun9176_ip = 59;
                    continue _fun9176
                }
            case 44:
                var4 = var5.forEach;
                var1 = function(arg0) { // Environment: var0
                    _fun9177: for (var _fun9177_ip = 0;;) switch (_fun9177_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.stacktrace;
                            var3 = null;
                            var0 = var3 == var1;
                            var2 = var1;
                            if (var0) {
                                _fun9177_ip = 34;
                                continue _fun9177
                            }
                        case 21:
                            var1 = var1.frames;
                            var0 = var3 == var1;
                            var2 = var1;
                        case 34:
                            if (var0) {
                                _fun9177_ip = 54;
                                continue _fun9177
                            }
                        case 37:
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                _fun9178: for (var _fun9178_ip = 0;;) switch (_fun9178_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var1 = var0.debug_id;
                                        if (!var1) {
                                            _fun9178_ip = 83;
                                            continue _fun9178
                                        }
                                    case 12:
                                        var1 = var0.abs_path;
                                        if (var1) {
                                            _fun9178_ip = 55;
                                            continue _fun9178
                                        }
                                    case 21:
                                        var1 = var0.filename;
                                        if (!var1) {
                                            _fun9178_ip = 78;
                                            continue _fun9178
                                        }
                                    case 30:
                                        var3 = _closure2_slot0;
                                        var2 = var0.filename;
                                        var1 = var0.debug_id;
                                        var3[var2] = var1;
                                        _fun9178_ip = 78;
                                        continue _fun9178;
                                    case 55:
                                        var3 = _closure2_slot0;
                                        var2 = var0.abs_path;
                                        var1 = var0.debug_id;
                                        var3[var2] = var1;
                                    case 78:
                                        var0 = delete var0.debug_id;
                                    case 83:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                        case 54:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var4.bind(var5)(var1);
            case 59:
                var1 = global;
                var5 = var1.Object;
                var4 = var5.keys;
                var4 = var4.bind(var5)(var3);
                var5 = var4.length;
                var4 = 0;
                if (!(var4 !== var5)) {
                    _fun9176_ip = 184;
                    continue _fun9176
                }
            case 88:
                var4 = var2.debug_meta;
                if (var4) {
                    _fun9176_ip = 99;
                    continue _fun9176
                }
            case 97:
                var4 = {};
            case 99:
                var2.debug_meta = var4;
                var5 = var2.debug_meta;
                var4 = var2.debug_meta;
                var4 = var4.images;
                if (var4) {
                    _fun9176_ip = 130;
                    continue _fun9176
                }
            case 126:
                var4 = new Array(0);
            case 130:
                var5.images = var4;
                var2 = var2.debug_meta;
                var2 = var2.images;
                var _closure2_slot1 = var2;
                var2 = var1.Object;
                var1 = var2.entries;
                var2 = var1.bind(var2)(var3);
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var3 = _closure1_slot2;
                    var0 = undefined;
                    var2 = arg0;
                    var1 = 2;
                    var2 = var3.bind(var0)(var2, var1);
                    var1 = 0;
                    var5 = var2[var1];
                    var1 = 1;
                    var4 = var2[var1];
                    var3 = _closure2_slot1;
                    var2 = var3.push;
                    var1 = {};
                    var6 = 'sourcemap';
                    var1.type = var6;
                    var1.code_file = var5;
                    var1.debug_id = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 184:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var0 = 0;
    var6 = var8[var0];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = global;
    var9 = var6.Object;
    var8 = var9.defineProperty;
    var6 = var6.Symbol;
    var7 = var6.toStringTag;
    var6 = {};
    var10 = 'Module';
    var6.value = var10;
    var6 = var8.bind(var9)(var2, var7, var6);
    var6 = ['user', 'level', 'extra', 'contexts', 'tags', 'fingerprint', 'propagationContext'];
    var _closure1_slot4 = var6;
    var2.applyClientOptions = var5;
    var2.applyDebugIds = var4;
    var2.applyDebugMeta = var3;
    var3 = function(arg0) { // Original name: parseEventHintOrCaptureContext, environment: var1
        _fun9180: for (var _fun9180_ip = 0;;) switch (_fun9180_ip) {
            case 0:
                var2 = arg0;
                if (var2) {
                    _fun9180_ip = 10;
                    continue _fun9180
                }
            case 6:
                var0 = undefined;
                return var0;
            case 10:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 11;
                var0 = var1[var0];
                var1 = undefined;
                var0 = var3.bind(var1)(var0);
                var0 = var0.Scope;
                var0 = var2 instanceof var0;
                if (var0) {
                    _fun9180_ip = 59;
                    continue _fun9180
                }
            case 48:
                var4 = 'function';
                var3 = typeof var2;
                var0 = var4 === var3;
            case 59:
                if (var0) {
                    _fun9180_ip = 80;
                    continue _fun9180
                }
            case 62:
                var0 = function(arg0) { // Original name: hintIsScopeContext, environment: var0
                    var0 = global;
                    var2 = var0.Object;
                    var1 = var2.keys;
                    var0 = arg0;
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.some;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot4;
                        var1 = var2.includes;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var0.bind(var1)(var2);
                var0 = var2;
                if (!var1) {
                    _fun9180_ip = 90;
                    continue _fun9180
                }
            case 80:
                var1 = {};
                var1.captureContext = var2;
                var0 = var1;
            case 90:
                return var0;
        }
    };
    var2.parseEventHintOrCaptureContext = var3;
    var1 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Original name: prepareEvent, environment: var1
        _fun9183: for (var _fun9183_ip = 0;;) switch (_fun9183_ip) {
            case 0:
                var1 = arg0;
                var3 = arg1;
                var5 = arg2;
                var11 = arg3;
                var2 = arg4;
                var8 = arg5;
                var7 = var1.normalizeDepth;
                var14 = 3;
                var6 = undefined;
                var4 = var14;
                if (!(var6 !== var7)) {
                    _fun9183_ip = 41;
                    continue _fun9183
                }
            case 38:
                var4 = var7;
            case 41:
                var _closure2_slot0 = var4;
                var7 = var1.normalizeMaxBreadth;
                var4 = 1000;
                if (!(var6 !== var7)) {
                    _fun9183_ip = 64;
                    continue _fun9183
                }
            case 61:
                var4 = var7;
            case 64:
                var _closure2_slot1 = var4;
                var4 = global;
                var10 = var4.Object;
                var9 = var10.assign;
                var7 = {};
                var4 = var3.event_id;
                if (var4) {
                    _fun9183_ip = 98;
                    continue _fun9183
                }
            case 92:
                var4 = var5.event_id;
            case 98:
                if (var4) {
                    _fun9183_ip = 134;
                    continue _fun9183
                }
            case 101:
                var13 = _closure1_slot0;
                var15 = _closure1_slot1;
                var12 = 2;
                var12 = var15[var12];
                var13 = var13.bind(var6)(var12);
                var12 = var13.uuid4;
                var4 = var12.bind(var13)();
            case 134:
                var7.event_id = var4;
                var4 = var3.timestamp;
                if (var4) {
                    _fun9183_ip = 178;
                    continue _fun9183
                }
            case 148:
                var13 = _closure1_slot0;
                var12 = _closure1_slot1;
                var12 = var12[var14];
                var13 = var13.bind(var6)(var12);
                var12 = var13.dateTimestampInSeconds;
                var4 = var12.bind(var13)();
            case 178:
                var7.timestamp = var4;
                var4 = {};
                var4 = var9.bind(var10)(var4, var3, var7);
                var15 = var5.integrations;
                if (var15) {
                    _fun9183_ip = 222;
                    continue _fun9183
                }
            case 201:
                var10 = var1.integrations;
                var9 = var10.map;
                var7 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.name;
                    return var0;
                };
                var15 = var9.bind(var10)(var7);
            case 222:
                var7 = _closure1_slot5;
                var7 = var7.bind(var6)(var4, var1);
                var9 = var15.length;
                var7 = 0;
                if (!(var9 > var7)) {
                    _fun9183_ip = 327;
                    continue _fun9183
                }
            case 246:
                var7 = var4.sdk;
                if (var7) {
                    _fun9183_ip = 257;
                    continue _fun9183
                }
            case 255:
                var7 = {};
            case 257:
                var4.sdk = var7;
                var9 = var4.sdk;
                var14 = new Array(0);
                var13 = var14.concat;
                var12 = _closure1_slot3;
                var7 = var4.sdk;
                var7 = var7.integrations;
                if (var7) {
                    _fun9183_ip = 301;
                    continue _fun9183
                }
            case 297:
                var7 = new Array(0);
            case 301:
                var12 = var12.bind(var6)(var7);
                var7 = _closure1_slot3;
                var7 = var7.bind(var6)(var15);
                var7 = var13.bind(var14)(var12, var7);
                var9.integrations = var7;
            case 327:
                if (!var2) {
                    _fun9183_ip = 348;
                    continue _fun9183
                }
            case 330:
                var9 = var2.emit;
                var7 = 'applyFrameMetadata';
                var7 = var9.bind(var2)(var7, var3);
            case 348:
                var3 = var3.type;
                if (!(var6 === var3)) {
                    _fun9183_ip = 373;
                    continue _fun9183
                }
            case 357:
                var3 = _closure1_slot6;
                var1 = var1.stackParser;
                var1 = var3.bind(var6)(var4, var1);
            case 373:
                var9 = var5.captureContext;
                var7 = var11;
                if (!var9) {
                    _fun9183_ip = 460;
                    continue _fun9183
                }
            case 385:
                if (var11) {
                    _fun9183_ip = 436;
                    continue _fun9183
                }
            case 388:
                var3 = _closure1_slot0;
                var12 = _closure1_slot1;
                var1 = 11;
                var1 = var12[var1];
                var1 = var3.bind(var6)(var1);
                var1 = var1.Scope;
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var20 = var3;
                var1 = new var20[var1](var19);
                var1 = var1 instanceof Object ? var1 : var3;
                _fun9183_ip = 446;
                continue _fun9183;
            case 436:
                var3 = var11.clone;
                var1 = var3.bind(var11)();
            case 446:
                var3 = var1.update;
                var3 = var3.bind(var1)(var9);
                var7 = var1;
            case 460:
                var1 = var5.mechanism;
                if (!var1) {
                    _fun9183_ip = 507;
                    continue _fun9183
                }
            case 469:
                var3 = _closure1_slot0;
                var9 = _closure1_slot1;
                var1 = 2;
                var1 = var9[var1];
                var9 = var3.bind(var6)(var1);
                var3 = var9.addExceptionMechanism;
                var1 = var5.mechanism;
                var1 = var3.bind(var9)(var4, var1);
            case 507:
                if (var2) {
                    _fun9183_ip = 516;
                    continue _fun9183
                }
            case 510:
                var3 = new Array(0);
                _fun9183_ip = 526;
                continue _fun9183;
            case 516:
                var1 = var2.getEventProcessors;
                var3 = var1.bind(var2)();
            case 526:
                var2 = _closure1_slot0;
                var9 = _closure1_slot1;
                var1 = 4;
                var1 = var9[var1];
                var2 = var2.bind(var6)(var1);
                var1 = var2.getGlobalScope;
                var2 = var1.bind(var2)();
                var1 = var2.getScopeData;
                var1 = var1.bind(var2)();
                if (!var8) {
                    _fun9183_ip = 611;
                    continue _fun9183
                }
            case 569:
                var2 = var8.getScopeData;
                var9 = var2.bind(var8)();
                var8 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 5;
                var2 = var11[var2];
                var8 = var8.bind(var6)(var2);
                var2 = var8.mergeScopeData;
                var2 = var2.bind(var8)(var1, var9);
            case 611:
                if (!var7) {
                    _fun9183_ip = 656;
                    continue _fun9183
                }
            case 614:
                var2 = var7.getScopeData;
                var8 = var2.bind(var7)();
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var2 = 5;
                var2 = var9[var2];
                var7 = var7.bind(var6)(var2);
                var2 = var7.mergeScopeData;
                var2 = var2.bind(var7)(var1, var8);
            case 656:
                var9 = new Array(0);
                var8 = var9.concat;
                var7 = _closure1_slot3;
                var2 = var5.attachments;
                if (var2) {
                    _fun9183_ip = 682;
                    continue _fun9183
                }
            case 678:
                var2 = new Array(0);
            case 682:
                var7 = var7.bind(var6)(var2);
                var11 = _closure1_slot3;
                var2 = var1.attachments;
                var2 = var11.bind(var6)(var2);
                var2 = var8.bind(var9)(var7, var2);
                var7 = var2.length;
                if (!var7) {
                    _fun9183_ip = 722;
                    continue _fun9183
                }
            case 716:
                var5.attachments = var2;
            case 722:
                var2 = _closure1_slot0;
                var7 = _closure1_slot1;
                var8 = 5;
                var8 = var7[var8];
                var9 = var2.bind(var6)(var8);
                var8 = var9.applyScopeDataToEvent;
                var8 = var8.bind(var9)(var4, var1);
                var9 = new Array(0);
                var8 = var9.concat;
                var10 = _closure1_slot3;
                var3 = var10.bind(var6)(var3);
                var1 = var1.eventProcessors;
                var1 = var10.bind(var6)(var1);
                var3 = var8.bind(var9)(var3, var1);
                var1 = 6;
                var1 = var7[var1];
                var2 = var2.bind(var6)(var1);
                var1 = var2.notifyEventProcessors;
                var2 = var1.bind(var2)(var3, var4, var5);
                var1 = var2.then;
                var0 = function(arg0) { // Environment: var0
                    _fun9185: for (var _fun9185_ip = 0;;) switch (_fun9185_ip) {
                        case 0:
                            var5 = arg0;
                            if (!var5) {
                                _fun9185_ip = 20;
                                continue _fun9185
                            }
                        case 6:
                            var1 = _closure1_slot7;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var5);
                        case 20:
                            var0 = _closure2_slot0;
                            var3 = 'number';
                            var2 = typeof var0;
                            var0 = var5;
                            if (!(var3 === var2)) {
                                _fun9185_ip = 78;
                                continue _fun9185
                            }
                        case 41:
                            var3 = _closure2_slot0;
                            var2 = 0;
                            var0 = var5;
                            if (!(var3 > var2)) {
                                _fun9185_ip = 78;
                                continue _fun9185
                            }
                        case 54:
                            var4 = _closure2_slot0;
                            var3 = _closure2_slot1;
                            var2 = function(arg0, arg1, arg2) { // Original name: normalizeEvent, environment: var1
                                _fun9186: for (var _fun9186_ip = 0;;) switch (_fun9186_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var9 = arg1;
                                        var6 = arg2;
                                        var _closure4_slot0 = var9;
                                        var _closure4_slot1 = var6;
                                        if (var1) {
                                            _fun9186_ip = 26;
                                            continue _fun9186
                                        }
                                    case 22:
                                        var0 = null;
                                        return var0;
                                    case 26:
                                        var0 = global;
                                        var10 = var0.Object;
                                        var8 = var10.assign;
                                        var7 = var1.breadcrumbs;
                                        if (!var7) {
                                            _fun9186_ip = 79;
                                            continue _fun9186
                                        }
                                    case 48:
                                        var0 = {};
                                        var5 = var1.breadcrumbs;
                                        var4 = var5.map;
                                        var2 = function(arg0) { // Environment: var3
                                            _fun9187: for (var _fun9187_ip = 0;;) switch (_fun9187_ip) {
                                                case 0:
                                                    var4 = arg0;
                                                    var0 = global;
                                                    var3 = var0.Object;
                                                    var2 = var3.assign;
                                                    var1 = var4.data;
                                                    if (!var1) {
                                                        _fun9187_ip = 87;
                                                        continue _fun9187
                                                    }
                                                case 24:
                                                    var0 = {};
                                                    var7 = _closure1_slot0;
                                                    var6 = _closure1_slot1;
                                                    var5 = 10;
                                                    var6 = var6[var5];
                                                    var5 = undefined;
                                                    var9 = var7.bind(var5)(var6);
                                                    var8 = var9.normalize;
                                                    var7 = var4.data;
                                                    var6 = _closure4_slot0;
                                                    var5 = _closure4_slot1;
                                                    var5 = var8.bind(var9)(var7, var6, var5);
                                                    var0.data = var5;
                                                    var1 = var0;
                                                case 87:
                                                    var0 = {};
                                                    var0 = var2.bind(var3)(var0, var4, var1);
                                                    return var0;
                                            }
                                        };
                                        var2 = var4.bind(var5)(var2);
                                        var0.breadcrumbs = var2;
                                        var7 = var0;
                                    case 79:
                                        var5 = var1.user;
                                        if (!var5) {
                                            _fun9186_ip = 139;
                                            continue _fun9186
                                        }
                                    case 87:
                                        var0 = {};
                                        var11 = _closure1_slot0;
                                        var4 = _closure1_slot1;
                                        var2 = 10;
                                        var4 = var4[var2];
                                        var2 = undefined;
                                        var11 = var11.bind(var2)(var4);
                                        var4 = var11.normalize;
                                        var2 = var1.user;
                                        var2 = var4.bind(var11)(var2, var9, var6);
                                        var0.user = var2;
                                        var5 = var0;
                                    case 139:
                                        var4 = var1.contexts;
                                        if (!var4) {
                                            _fun9186_ip = 202;
                                            continue _fun9186
                                        }
                                    case 148:
                                        var0 = {};
                                        var12 = _closure1_slot0;
                                        var11 = _closure1_slot1;
                                        var2 = 10;
                                        var11 = var11[var2];
                                        var2 = undefined;
                                        var12 = var12.bind(var2)(var11);
                                        var11 = var12.normalize;
                                        var2 = var1.contexts;
                                        var2 = var11.bind(var12)(var2, var9, var6);
                                        var0.contexts = var2;
                                        var4 = var0;
                                    case 202:
                                        var2 = var1.extra;
                                        if (!var2) {
                                            _fun9186_ip = 265;
                                            continue _fun9186
                                        }
                                    case 211:
                                        var0 = {};
                                        var13 = _closure1_slot0;
                                        var12 = _closure1_slot1;
                                        var11 = 10;
                                        var12 = var12[var11];
                                        var11 = undefined;
                                        var13 = var13.bind(var11)(var12);
                                        var12 = var13.normalize;
                                        var11 = var1.extra;
                                        var11 = var12.bind(var13)(var11, var9, var6);
                                        var0.extra = var11;
                                        var2 = var0;
                                    case 265:
                                        var19 = {};
                                        var20 = var10;
                                        var18 = var1;
                                        var17 = var7;
                                        var16 = var5;
                                        var15 = var4;
                                        var14 = var2;
                                        var0 = var20[var8](var19, var18, var17, var16, var15, var14, var13);
                                        var5 = var1.contexts;
                                        var2 = null;
                                        var4 = var2 != var5;
                                        if (!var4) {
                                            _fun9186_ip = 310;
                                            continue _fun9186
                                        }
                                    case 304:
                                        var4 = var5.trace;
                                    case 310:
                                        if (!var4) {
                                            _fun9186_ip = 319;
                                            continue _fun9186
                                        }
                                    case 313:
                                        var4 = var0.contexts;
                                    case 319:
                                        if (!var4) {
                                            _fun9186_ip = 439;
                                            continue _fun9186
                                        }
                                    case 322:
                                        var5 = var0.contexts;
                                        var4 = var1.contexts;
                                        var4 = var4.trace;
                                        var5.trace = var4;
                                        var4 = var1.contexts;
                                        var4 = var4.trace;
                                        var4 = var4.data;
                                        if (!var4) {
                                            _fun9186_ip = 439;
                                            continue _fun9186
                                        }
                                    case 366:
                                        var4 = var0.contexts;
                                        var5 = var4.trace;
                                        var8 = _closure1_slot0;
                                        var7 = _closure1_slot1;
                                        var4 = 10;
                                        var7 = var7[var4];
                                        var4 = undefined;
                                        var8 = var8.bind(var4)(var7);
                                        var7 = var8.normalize;
                                        var4 = var1.contexts;
                                        var4 = var4.trace;
                                        var4 = var4.data;
                                        var4 = var7.bind(var8)(var4, var9, var6);
                                        var5.data = var4;
                                    case 439:
                                        var4 = var1.spans;
                                        if (!var4) {
                                            _fun9186_ip = 475;
                                            continue _fun9186
                                        }
                                    case 448:
                                        var5 = var1.spans;
                                        var4 = var5.map;
                                        var3 = function(arg0) { // Environment: var3
                                            _fun9188: for (var _fun9188_ip = 0;;) switch (_fun9188_ip) {
                                                case 0:
                                                    var4 = arg0;
                                                    var0 = global;
                                                    var3 = var0.Object;
                                                    var2 = var3.assign;
                                                    var1 = var4.data;
                                                    if (!var1) {
                                                        _fun9188_ip = 87;
                                                        continue _fun9188
                                                    }
                                                case 24:
                                                    var0 = {};
                                                    var7 = _closure1_slot0;
                                                    var6 = _closure1_slot1;
                                                    var5 = 10;
                                                    var6 = var6[var5];
                                                    var5 = undefined;
                                                    var9 = var7.bind(var5)(var6);
                                                    var8 = var9.normalize;
                                                    var7 = var4.data;
                                                    var6 = _closure4_slot0;
                                                    var5 = _closure4_slot1;
                                                    var5 = var8.bind(var9)(var7, var6, var5);
                                                    var0.data = var5;
                                                    var1 = var0;
                                                case 87:
                                                    var0 = {};
                                                    var0 = var2.bind(var3)(var0, var4, var1);
                                                    return var0;
                                            }
                                        };
                                        var3 = var4.bind(var5)(var3);
                                        var0.spans = var3;
                                    case 475:
                                        var3 = var1.contexts;
                                        var2 = var2 != var3;
                                        if (!var2) {
                                            _fun9186_ip = 493;
                                            continue _fun9186
                                        }
                                    case 488:
                                        var2 = var3.flags;
                                    case 493:
                                        if (!var2) {
                                            _fun9186_ip = 502;
                                            continue _fun9186
                                        }
                                    case 496:
                                        var2 = var0.contexts;
                                    case 502:
                                        if (!var2) {
                                            _fun9186_ip = 569;
                                            continue _fun9186
                                        }
                                    case 505:
                                        var2 = var0.contexts;
                                        var5 = _closure1_slot0;
                                        var4 = _closure1_slot1;
                                        var3 = 10;
                                        var4 = var4[var3];
                                        var3 = undefined;
                                        var5 = var5.bind(var3)(var4);
                                        var4 = var5.normalize;
                                        var1 = var1.contexts;
                                        var3 = var1.flags;
                                        var1 = 3;
                                        var1 = var4.bind(var5)(var3, var1, var6);
                                        var2.flags = var1;
                                    case 569:
                                        return var0;
                                }
                            };
                            var1 = undefined;
                            var0 = var2.bind(var1)(var5, var4, var3);
                        case 78:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.prepareEvent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 65, 830, 837, 847, 869, 870, 856, 831, 872, 863, 842]);