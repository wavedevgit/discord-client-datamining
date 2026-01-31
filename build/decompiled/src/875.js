// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var1 = function(arg0) { // Original name: logAttributeToSerializedLogAttribute, environment: var6
        _fun9311: for (var _fun9311_ip = 0;;) switch (_fun9311_ip) {
            case 0:
                var0 = arg0;
                var2 = var0;
                var4 = undefined;
                var5 = undefined;
                var0 = typeof var0;
                var1 = 'number';
                if (!(var1 !== var0)) {
                    _fun9311_ip = 130;
                    continue _fun9311
                }
            case 21:
                var1 = 'boolean';
                if (!(var1 !== var0)) {
                    _fun9311_ip = 115;
                    continue _fun9311
                }
            case 29:
                var3 = 'string';
                if (!(var3 !== var0)) {
                    _fun9311_ip = 100;
                    continue _fun9311
                }
            case 37:
                var0 = '';
                var4 = var0;
            case 44: // try_start_0
                var6 = global;
                var8 = var6.JSON;
                var7 = var8.stringify;
                var6 = var2;
                var7 = var7.bind(var8)(var6);
                var5 = var7;
                var6 = null;
                var6 = var6 != var7;
                if (!var6) {
                    _fun9311_ip = 81;
                    continue _fun9311
                }
            case 78:
                var0 = var5;
            case 81:
                var4 = var0;
            case 84: // try_end0
                _fun9311_ip = 88;
                continue _fun9311;
            case 86: // catch_target0
                CatchBlockStart(arg_register = 0);
            case 88:
                var0 = {};
                var0.value = var4;
                var0.type = var3;
                return var0;
            case 100:
                var0 = {};
                var4 = var2;
                var0.value = var4;
                var0.type = var3;
                return var0;
            case 115:
                var0 = {};
                var3 = var2;
                var0.value = var3;
                var0.type = var1;
                return var0;
            case 130:
                var0 = global;
                var3 = var0.Number;
                var1 = var3.isInteger;
                var0 = var2;
                var0 = var1.bind(var3)(var0);
                var1 = {};
                var1.value = var2;
                if (var0) {
                    _fun9311_ip = 174;
                    continue _fun9311
                }
            case 161:
                var0 = 'double';
                var1.type = var0;
                var0 = var1;
                _fun9311_ip = 185;
                continue _fun9311;
            case 174:
                var2 = 'integer';
                var1.type = var2;
                var0 = var1;
            case 185:
                return var0;
        }
    };
    var _closure1_slot4 = var1;
    var0 = function(arg0, arg1, arg2) { // Original name: setLogAttribute, environment: var6
        _fun9312: for (var _fun9312_ip = 0;;) switch (_fun9312_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var1 = arg2;
                var0 = undefined;
                var5 = undefined;
                var6 = arguments.length;
                var4 = 3;
                var7 = var6 > var4;
                if (!var7) {
                    _fun9312_ip = 34;
                    continue _fun9312
                }
            case 26:
                var6 = arguments[var4];
                var7 = var0 !== var6;
            case 34:
                var6 = !var7;
                if (!var7) {
                    _fun9312_ip = 44;
                    continue _fun9312
                }
            case 40:
                var6 = arguments[var4];
            case 44:
                var4 = !var1;
                if (var4) {
                    _fun9312_ip = 63;
                    continue _fun9312
                }
            case 50:
                var5 = var3[var2];
                if (!var5) {
                    _fun9312_ip = 60;
                    continue _fun9312
                }
            case 57:
                var5 = !var6;
            case 60:
                var4 = var5;
            case 63:
                if (var4) {
                    _fun9312_ip = 70;
                    continue _fun9312
                }
            case 66:
                var3[var2] = var1;
            case 70:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var5 = function(arg0, arg1) { // Original name: _INTERNAL_captureSerializedLog, environment: var6
        _fun9313: for (var _fun9313_ip = 0;;) switch (_fun9313_ip) {
            case 0:
                var4 = arg0;
                var5 = arg1;
                var2 = _closure1_slot9;
                var0 = undefined;
                var3 = var2.bind(var0)();
                var2 = _closure1_slot8;
                var2 = var2.bind(var0)(var4);
                if (!(var0 !== var2)) {
                    _fun9313_ip = 120;
                    continue _fun9313
                }
            case 32:
                var7 = var2.length;
                var6 = 100;
                if (!(!(var7 >= var6))) {
                    _fun9313_ip = 89;
                    continue _fun9313
                }
            case 44:
                var7 = var3.set;
                var10 = new Array(0);
                var9 = var10.concat;
                var6 = _closure1_slot3;
                var8 = var6.bind(var0)(var2);
                var6 = new Array(1);
                var6[0] = var5;
                var6 = var9.bind(var10)(var8, var6);
                var6 = var7.bind(var3)(var4, var6);
                _fun9313_ip = 139;
                continue _fun9313;
            case 89:
                var1 = _closure1_slot7;
                var1 = var1.bind(var0)(var4, var2);
                var2 = var3.set;
                var1 = new Array(1);
                var1[0] = var5;
                var1 = var2.bind(var3)(var4, var1);
                _fun9313_ip = 139;
                continue _fun9313;
            case 120:
                var2 = var3.set;
                var1 = new Array(1);
                var1[0] = var5;
                var1 = var2.bind(var3)(var4, var1);
            case 139:
                return var0;
        }
    };
    var _closure1_slot6 = var5;
    var4 = function(arg0, arg1) { // Original name: _INTERNAL_flushLogsBuffer, environment: var6
        _fun9314: for (var _fun9314_ip = 0;;) switch (_fun9314_ip) {
            case 0:
                var2 = arg0;
                var8 = arg1;
                var0 = null;
                if (!(var0 == var8)) {
                    _fun9314_ip = 26;
                    continue _fun9314
                }
            case 12:
                var3 = _closure1_slot8;
                var1 = undefined;
                var8 = var3.bind(var1)(var2);
            case 26:
                if (!(var0 == var8)) {
                    _fun9314_ip = 34;
                    continue _fun9314
                }
            case 30:
                var8 = new Array(0);
            case 34:
                var1 = var8.length;
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun9314_ip = 172;
                    continue _fun9314
                }
            case 48:
                var0 = var2.getOptions;
                var1 = var0.bind(var2)();
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 10;
                var4 = var4[var3];
                var3 = undefined;
                var7 = var5.bind(var3)(var4);
                var6 = var7.createLogEnvelope;
                var11 = var1._metadata;
                var10 = var1.tunnel;
                var1 = var2.getDsn;
                var9 = var1.bind(var2)();
                var13 = var7;
                var12 = var8;
                var1 = var13[var6](var12, var11, var10, var9, var8);
                var0 = _closure1_slot9;
                var4 = var0.bind(var3)();
                var3 = var4.set;
                var0 = new Array(0);
                var0 = var3.bind(var4)(var2, var0);
                var3 = var2.emit;
                var0 = 'flushLogs';
                var0 = var3.bind(var2)(var0);
                var0 = var2.sendEnvelope;
                var0 = var0.bind(var2)(var1);
            case 172:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot7 = var4;
    var3 = function(arg0) { // Original name: _INTERNAL_getLogBuffer, environment: var6
        var1 = _closure1_slot9;
        var0 = undefined;
        var2 = var1.bind(var0)();
        var1 = var2.get;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot8 = var3;
    var0 = function() { // Original name: _getBufferMap, environment: var6
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 12;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.getGlobalSingleton;
        var1 = 'clientToLogBufferMap';
        var0 = function() { // Environment: var0
            var0 = global;
            var0 = var0.WeakMap;
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
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = 0;
    var7 = var9[var0];
    var0 = undefined;
    var7 = var8.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = global;
    var10 = var7.Object;
    var9 = var10.defineProperty;
    var7 = var7.Symbol;
    var8 = var7.toStringTag;
    var7 = {};
    var11 = 'Module';
    var7.value = var11;
    var7 = var9.bind(var10)(var2, var8, var7);
    var6 = function(arg0) { // Original name: _INTERNAL_captureLog, environment: var6
        _fun9318: for (var _fun9318_ip = 0;;) switch (_fun9318_ip) {
            case 0:
                var14 = arg0;
                var0 = undefined;
                var1 = undefined;
                var2 = arguments.length;
                var10 = 1;
                if (!(var2 > var10)) {
                    _fun9318_ip = 27;
                    continue _fun9318
                }
            case 19:
                var2 = arguments[var10];
                if (!(var0 === var2)) {
                    _fun9318_ip = 62;
                    continue _fun9318
                }
            case 27:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 2;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.getCurrentScope;
                var12 = var2.bind(var3)();
                _fun9318_ip = 66;
                continue _fun9318;
            case 62:
                var12 = arguments[var10];
            case 66:
                var2 = arguments.length;
                var19 = 2;
                if (!(var2 > var19)) {
                    _fun9318_ip = 84;
                    continue _fun9318
                }
            case 76:
                var2 = arguments[var19];
                if (!(var0 === var2)) {
                    _fun9318_ip = 93;
                    continue _fun9318
                }
            case 84:
                var2 = _closure1_slot6;
                _fun9318_ip = 97;
                continue _fun9318;
            case 93:
                var2 = arguments[var19];
            case 97:
                var11 = null;
                var1 = var11 == var12;
                var4 = undefined;
                if (var1) {
                    _fun9318_ip = 118;
                    continue _fun9318
                }
            case 108:
                var1 = var12.getClient;
                var4 = var1.bind(var12)();
            case 118:
                if (!(var11 == var4)) {
                    _fun9318_ip = 152;
                    continue _fun9318
                }
            case 122:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var19];
                var3 = var3.bind(var0)(var1);
                var1 = var3.getClient;
                var4 = var1.bind(var3)();
            case 152:
                if (var4) {
                    _fun9318_ip = 237;
                    continue _fun9318
                }
            case 155:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 3;
                var3 = var7[var3];
                var3 = var6.bind(var0)(var3);
                var3 = var3.DEBUG_BUILD;
                if (!var3) {
                    _fun9318_ip = 1393;
                    continue _fun9318
                }
            case 190:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 4;
                var1 = var6[var1];
                var1 = var3.bind(var0)(var1);
                var6 = var1.debug;
                var3 = var6.warn;
                var1 = 'No client available to capture log.';
                var1 = var3.bind(var6)(var1);
                _fun9318_ip = 1393;
                continue _fun9318;
            case 237:
                var1 = var4.getOptions;
                var1 = var1.bind(var4)();
                var16 = var1.release;
                var15 = var1.environment;
                var6 = var1.enableLogs;
                var3 = var0 !== var6;
                if (!var3) {
                    _fun9318_ip = 275;
                    continue _fun9318
                }
            case 272:
                var3 = var6;
            case 275:
                var1 = var1.beforeSendLog;
                var _closure2_slot0 = var1;
                var17 = _closure1_slot0;
                var18 = _closure1_slot1;
                if (var3) {
                    _fun9318_ip = 370;
                    continue _fun9318
                }
            case 299:
                var3 = 3;
                var3 = var18[var3];
                var3 = var17.bind(var0)(var3);
                var3 = var3.DEBUG_BUILD;
                if (!var3) {
                    _fun9318_ip = 1393;
                    continue _fun9318
                }
            case 323:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 4;
                var3 = var7[var3];
                var3 = var6.bind(var0)(var3);
                var7 = var3.debug;
                var6 = var7.warn;
                var3 = 'logging option not enabled, log will not be captured.';
                var3 = var6.bind(var7)(var3);
                _fun9318_ip = 1393;
                continue _fun9318;
            case 370:
                var3 = 5;
                var3 = var18[var3];
                var6 = var17.bind(var0)(var3);
                var3 = var6._getTraceInfoFromScope;
                var6 = var3.bind(var6)(var4, var12);
                var3 = _closure1_slot2;
                var3 = var3.bind(var0)(var6, var19);
                var13 = var3[var10];
                var6 = global;
                var20 = var6.Object;
                var8 = var20.assign;
                var7 = var14.attributes;
                var3 = {};
                var3 = var8.bind(var20)(var3, var7);
                var _closure2_slot1 = var3;
                var7 = var18[var19];
                var8 = var17.bind(var0)(var7);
                var7 = var8.getGlobalScope;
                var8 = var7.bind(var8)();
                var7 = var8.getScopeData;
                var7 = var7.bind(var8)();
                var8 = 11;
                var20 = var18[var8];
                var21 = var17.bind(var0)(var20);
                var20 = var21.mergeScopeData;
                var19 = var18[var19];
                var22 = var17.bind(var0)(var19);
                var19 = var22.getIsolationScope;
                var22 = var19.bind(var22)();
                var19 = var22.getScopeData;
                var19 = var19.bind(var22)();
                var19 = var20.bind(var21)(var7, var19);
                var8 = var18[var8];
                var18 = var17.bind(var0)(var8);
                var17 = var18.mergeScopeData;
                var8 = var12.getScopeData;
                var8 = var8.bind(var12)();
                var8 = var17.bind(var18)(var7, var8);
                var7 = var7.user;
                var24 = var7.id;
                var19 = var7.email;
                var18 = var7.username;
                var8 = _closure1_slot5;
                var25 = 'user.id';
                var27 = undefined;
                var26 = var3;
                var23 = false;
                var7 = var27[var8](var26, var25, var24, var23, var22);
                var25 = 'user.email';
                var26 = var3;
                var24 = var19;
                var7 = var27[var8](var26, var25, var24, var23, var22);
                var25 = 'user.name';
                var26 = var3;
                var24 = var18;
                var7 = var27[var8](var26, var25, var24, var23, var22);
                var7 = 'sentry.release';
                var7 = var8.bind(var0)(var3, var7, var16);
                var7 = 'sentry.environment';
                var7 = var8.bind(var0)(var3, var7, var15);
                var7 = var4.getSdkMetadata;
                var8 = var7.bind(var4)();
                var15 = var11 == var8;
                var7 = undefined;
                if (var15) {
                    _fun9318_ip = 677;
                    continue _fun9318
                }
            case 671:
                var7 = var8.sdk;
            case 677:
                if (!(var11 == var7)) {
                    _fun9318_ip = 683;
                    continue _fun9318
                }
            case 681:
                var7 = {};
            case 683:
                var16 = var7.name;
                var15 = var7.version;
                var8 = _closure1_slot5;
                var7 = 'sentry.sdk.name';
                var7 = var8.bind(var0)(var3, var7, var16);
                var7 = 'sentry.sdk.version';
                var7 = var8.bind(var0)(var3, var7, var15);
                var8 = var4.getIntegrationByName;
                var7 = 'Replay';
                var16 = var8.bind(var4)(var7);
                var8 = var11 == var16;
                var7 = undefined;
                if (var8) {
                    _fun9318_ip = 763;
                    continue _fun9318
                }
            case 750:
                var15 = var16.getReplayId;
                var8 = true;
                var7 = var15.bind(var16)(var8);
            case 763:
                var15 = _closure1_slot5;
                var8 = 'sentry.replay_id';
                var8 = var15.bind(var0)(var3, var8, var7);
                if (!var7) {
                    _fun9318_ip = 810;
                    continue _fun9318
                }
            case 783:
                var8 = var11 == var16;
                var15 = undefined;
                if (var8) {
                    _fun9318_ip = 802;
                    continue _fun9318
                }
            case 792:
                var8 = var16.getRecordingMode;
                var15 = var8.bind(var16)();
            case 802:
                var8 = 'buffer';
                var7 = var8 === var15;
            case 810:
                if (!var7) {
                    _fun9318_ip = 832;
                    continue _fun9318
                }
            case 813:
                var15 = _closure1_slot5;
                var8 = 'sentry._internal.replay_is_buffering';
                var7 = true;
                var7 = var15.bind(var0)(var3, var8, var7);
            case 832:
                var8 = var14.message;
                var15 = _closure1_slot0;
                var16 = _closure1_slot1;
                var7 = 6;
                var7 = var16[var7];
                var15 = var15.bind(var0)(var7);
                var7 = var15.isParameterizedString;
                var7 = var7.bind(var15)(var8);
                if (!var7) {
                    _fun9318_ip = 927;
                    continue _fun9318
                }
            case 871:
                var7 = var8.__sentry_template_string__;
                var15 = var8.__sentry_template_values__;
                if (!(var0 === var15)) {
                    _fun9318_ip = 891;
                    continue _fun9318
                }
            case 887:
                var15 = new Array(0);
            case 891:
                var8 = var11 != var15;
                if (!var8) {
                    _fun9318_ip = 903;
                    continue _fun9318
                }
            case 898:
                var8 = var15.length;
            case 903:
                if (!var8) {
                    _fun9318_ip = 912;
                    continue _fun9318
                }
            case 906:
                var3['sentry.message.template'] = var7;
            case 912:
                var8 = var15.forEach;
                var7 = function(arg0, arg1) { // Environment: var5
                    var2 = _closure2_slot1;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var3 = var0.concat;
                    var1 = 'sentry.message.parameter.';
                    var0 = arg1;
                    var1 = var3.bind(var1)(var0);
                    var0 = arg0;
                    var2[var1] = var0;
                    var0 = undefined;
                    return var0;
                };
                var7 = var8.bind(var15)(var7);
            case 927:
                var8 = _closure1_slot0;
                var15 = _closure1_slot1;
                var7 = 7;
                var7 = var15[var7];
                var8 = var8.bind(var0)(var7);
                var7 = var8._getSpanForScope;
                var15 = var7.bind(var8)(var12);
                var12 = _closure1_slot5;
                var7 = var11 == var15;
                var8 = undefined;
                if (var7) {
                    _fun9318_ip = 987;
                    continue _fun9318
                }
            case 971:
                var7 = var15.spanContext;
                var7 = var7.bind(var15)();
                var8 = var7.spanId;
            case 987:
                var7 = 'sentry.trace.parent_span_id';
                var7 = var12.bind(var0)(var3, var7, var8);
                var12 = var6.Object;
                var8 = var12.assign;
                var7 = {};
                var7.attributes = var3;
                var3 = {};
                var3 = var8.bind(var12)(var3, var14, var7);
                var _closure2_slot2 = var3;
                var8 = var4.emit;
                var7 = 'beforeCaptureLog';
                var7 = var8.bind(var4)(var7, var3);
                if (!var1) {
                    _fun9318_ip = 1088;
                    continue _fun9318
                }
            case 1052:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 4;
                var1 = var8[var1];
                var8 = var7.bind(var0)(var1);
                var7 = var8.consoleSandbox;
                var1 = function() { // Environment: var5
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot2;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var3 = var7.bind(var8)(var1);
            case 1088:
                if (var3) {
                    _fun9318_ip = 1191;
                    continue _fun9318
                }
            case 1091:
                var8 = var4.recordDroppedEvent;
                var7 = 'before_send';
                var1 = 'log_item';
                var1 = var8.bind(var4)(var7, var1, var10);
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 3;
                var1 = var8[var1];
                var1 = var7.bind(var0)(var1);
                var1 = var1.DEBUG_BUILD;
                if (!var1) {
                    _fun9318_ip = 1187;
                    continue _fun9318
                }
            case 1145:
                var8 = _closure1_slot0;
                var10 = _closure1_slot1;
                var7 = 4;
                var7 = var10[var7];
                var7 = var8.bind(var0)(var7);
                var10 = var7.debug;
                var8 = var10.warn;
                var7 = 'beforeSendLog returned null, log will not be captured.';
                var1 = var8.bind(var10)(var7);
            case 1187:
                var1 = undefined;
                return var1;
            case 1191:
                var10 = var3.level;
                var12 = var3.message;
                var8 = var3.attributes;
                if (!(var0 === var8)) {
                    _fun9318_ip = 1214;
                    continue _fun9318
                }
            case 1212:
                var8 = {};
            case 1214:
                var _closure2_slot3 = var8;
                var7 = var3.severityNumber;
                var1 = {};
                var15 = _closure1_slot0;
                var16 = _closure1_slot1;
                var14 = 8;
                var14 = var16[var14];
                var15 = var15.bind(var0)(var14);
                var14 = var15.timestampInSeconds;
                var14 = var14.bind(var15)();
                var1.timestamp = var14;
                var1.level = var10;
                var1.body = var12;
                var14 = var11 == var13;
                var12 = undefined;
                if (var14) {
                    _fun9318_ip = 1285;
                    continue _fun9318
                }
            case 1279:
                var12 = var13.trace_id;
            case 1285:
                var1.trace_id = var12;
                if (!(var11 == var7)) {
                    _fun9318_ip = 1324;
                    continue _fun9318
                }
            case 1294:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var9 = 9;
                var9 = var12[var9];
                var9 = var11.bind(var0)(var9);
                var9 = var9.SEVERITY_TEXT_TO_SEVERITY_NUMBER;
                var7 = var9[var10];
            case 1324:
                var1.severity_number = var7;
                var7 = var6.Object;
                var6 = var7.keys;
                var8 = var6.bind(var7)(var8);
                var7 = var8.reduce;
                var6 = function(arg0, arg1) { // Environment: var5
                    var0 = arg0;
                    var2 = arg1;
                    var4 = _closure1_slot4;
                    var1 = _closure2_slot3;
                    var3 = var1[var2];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    var0[var2] = var1;
                    return var0;
                };
                var5 = {};
                var5 = var7.bind(var8)(var6, var5);
                var1.attributes = var5;
                var1 = var2.bind(var0)(var4, var1);
                var2 = var4.emit;
                var1 = 'afterCaptureLog';
                var1 = var2.bind(var4)(var1, var3);
            case 1393:
                return var0;
        }
    };
    var2._INTERNAL_captureLog = var6;
    var2._INTERNAL_captureSerializedLog = var5;
    var2._INTERNAL_flushLogsBuffer = var4;
    var2._INTERNAL_getLogBuffer = var3;
    var2.logAttributeToSerializedLogAttribute = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 65, 847, 823, 824, 876, 827, 843, 837, 877, 878, 869, 825]);