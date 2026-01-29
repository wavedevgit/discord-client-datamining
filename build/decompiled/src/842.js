// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var2, var4, var3);
    var1 = function() { // Environment: var1
        var3 = function() { // Original name: Scope, environment: var4
            var2 = this;
            var4 = _closure1_slot4;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var4.bind(var0)(var2, var1);
            var1 = false;
            var2._notifyingListeners = var1;
            var1 = new Array(0);
            var2._scopeListeners = var1;
            var1 = new Array(0);
            var2._eventProcessors = var1;
            var1 = new Array(0);
            var2._breadcrumbs = var1;
            var1 = new Array(0);
            var2._attachments = var1;
            var1 = {};
            var2._user = var1;
            var1 = {};
            var2._tags = var1;
            var1 = {};
            var2._extra = var1;
            var1 = {};
            var2._contexts = var1;
            var1 = {};
            var2._sdkProcessingMetadata = var1;
            var1 = {};
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 4;
            var3 = var5[var3];
            var4 = var4.bind(var0)(var3);
            var3 = var4.generateTraceId;
            var3 = var3.bind(var4)();
            var1.traceId = var3;
            var3 = global;
            var4 = var3.Math;
            var3 = var4.random;
            var3 = var3.bind(var4)();
            var1.sampleRand = var3;
            var2._propagationContext = var1;
            return var0;
        };
        var _closure2_slot0 = var3;
        var2 = _closure1_slot5;
        var0 = {};
        var1 = 'clone';
        var0.key = var1;
        var1 = function() { // Original name: clone, environment: var4
            _fun8904: for (var _fun8904_ip = 0;;) switch (_fun8904_ip) {
                case 0:
                    var5 = this;
                    var0 = _closure2_slot0;
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var11 = var1;
                    var0 = new var11[var0](var10);
                    var0 = var0 instanceof Object ? var0 : var1;
                    var3 = _closure1_slot3;
                    var2 = var5._breadcrumbs;
                    var6 = undefined;
                    var2 = var3.bind(var6)(var2);
                    var0._breadcrumbs = var2;
                    var2 = global;
                    var8 = var2.Object;
                    var7 = var8.assign;
                    var4 = var5._tags;
                    var3 = {};
                    var3 = var7.bind(var8)(var3, var4);
                    var0._tags = var3;
                    var8 = var2.Object;
                    var7 = var8.assign;
                    var4 = var5._extra;
                    var3 = {};
                    var3 = var7.bind(var8)(var3, var4);
                    var0._extra = var3;
                    var8 = var2.Object;
                    var7 = var8.assign;
                    var4 = var5._contexts;
                    var3 = {};
                    var3 = var7.bind(var8)(var3, var4);
                    var0._contexts = var3;
                    var3 = var5._contexts;
                    var3 = var3.flags;
                    if (!var3) {
                        _fun8904_ip = 208;
                        continue _fun8904
                    }
                case 165:
                    var4 = var0._contexts;
                    var3 = {};
                    var8 = _closure1_slot3;
                    var7 = var5._contexts;
                    var7 = var7.flags;
                    var7 = var7.values;
                    var7 = var8.bind(var6)(var7);
                    var3.values = var7;
                    var4.flags = var3;
                case 208:
                    var3 = var5._user;
                    var0._user = var3;
                    var3 = var5._level;
                    var0._level = var3;
                    var3 = var5._session;
                    var0._session = var3;
                    var3 = var5._transactionName;
                    var0._transactionName = var3;
                    var3 = var5._fingerprint;
                    var0._fingerprint = var3;
                    var4 = _closure1_slot3;
                    var3 = var5._eventProcessors;
                    var3 = var4.bind(var6)(var3);
                    var0._eventProcessors = var3;
                    var3 = var5._attachments;
                    var3 = var4.bind(var6)(var3);
                    var0._attachments = var3;
                    var8 = var2.Object;
                    var7 = var8.assign;
                    var4 = var5._sdkProcessingMetadata;
                    var3 = {};
                    var3 = var7.bind(var8)(var3, var4);
                    var0._sdkProcessingMetadata = var3;
                    var7 = var2.Object;
                    var4 = var7.assign;
                    var3 = var5._propagationContext;
                    var2 = {};
                    var2 = var4.bind(var7)(var2, var3);
                    var0._propagationContext = var2;
                    var2 = var5._client;
                    var0._client = var2;
                    var2 = var5._lastEventId;
                    var0._lastEventId = var2;
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var1 = 5;
                    var2 = var7[var1];
                    var3 = var4.bind(var6)(var2);
                    var2 = var3._setSpanForScope;
                    var1 = var7[var1];
                    var4 = var4.bind(var6)(var1);
                    var1 = var4._getSpanForScope;
                    var1 = var1.bind(var4)(var5);
                    var1 = var2.bind(var3)(var0, var1);
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(34);
        var1[0] = var0;
        var0 = {};
        var5 = 'setClient';
        var0.key = var5;
        var5 = function(arg0) { // Original name: setClient, environment: var4
            var1 = arg0;
            var0 = this;
            var0._client = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'setLastEventId';
        var0.key = var5;
        var5 = function(arg0) { // Original name: setLastEventId, environment: var4
            var1 = arg0;
            var0 = this;
            var0._lastEventId = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'getClient';
        var0.key = var5;
        var5 = function() { // Original name: getClient, environment: var4
            var0 = this;
            var0 = var0._client;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'lastEventId';
        var0.key = var5;
        var5 = function() { // Original name: lastEventId, environment: var4
            var0 = this;
            var0 = var0._lastEventId;
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'addScopeListener';
        var0.key = var5;
        var5 = function(arg0) { // Original name: addScopeListener, environment: var4
            var0 = this;
            var2 = var0._scopeListeners;
            var1 = var2.push;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'addEventProcessor';
        var0.key = var5;
        var5 = function(arg0) { // Original name: addEventProcessor, environment: var4
            var0 = this;
            var3 = var0._eventProcessors;
            var2 = var3.push;
            var1 = arg0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'setUser';
        var0.key = var5;
        var5 = function(arg0) { // Original name: setUser, environment: var4
            _fun8911: for (var _fun8911_ip = 0;;) switch (_fun8911_ip) {
                case 0:
                    var5 = arg0;
                    var0 = this;
                    var1 = var5;
                    if (var1) {
                        _fun8911_ip = 37;
                        continue _fun8911
                    }
                case 12:
                    var2 = {};
                    var3 = undefined;
                    var2.email = var3;
                    var2.id = var3;
                    var2.ip_address = var3;
                    var2.username = var3;
                    var1 = var2;
                case 37:
                    var0._user = var1;
                    var1 = var0._session;
                    if (!var1) {
                        _fun8911_ip = 101;
                        continue _fun8911
                    }
                case 52:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.updateSession;
                    var2 = var0._session;
                    var1 = {};
                    var1.user = var5;
                    var1 = var3.bind(var4)(var2, var1);
                case 101:
                    var1 = var0._notifyScopeListeners;
                    var1 = var1.bind(var0)();
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'getUser';
        var0.key = var5;
        var5 = function() { // Original name: getUser, environment: var4
            var0 = this;
            var0 = var0._user;
            return var0;
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'setTags';
        var0.key = var5;
        var5 = function(arg0) { // Original name: setTags, environment: var4
            var0 = this;
            var1 = global;
            var5 = var1.Object;
            var4 = var5.assign;
            var3 = var0._tags;
            var2 = {};
            var1 = arg0;
            var1 = var4.bind(var5)(var2, var3, var1);
            var0._tags = var1;
            var1 = var0._notifyScopeListeners;
            var1 = var1.bind(var0)();
            return var0;
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'setTag';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: setTag, environment: var4
            var2 = this;
            var1 = var2.setTags;
            var6 = _closure1_slot2;
            var5 = undefined;
            var4 = {};
            var3 = arg0;
            var0 = arg1;
            var0 = var6.bind(var5)(var4, var3, var0);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'setExtras';
        var0.key = var5;
        var5 = function(arg0) { // Original name: setExtras, environment: var4
            var0 = this;
            var1 = global;
            var5 = var1.Object;
            var4 = var5.assign;
            var3 = var0._extra;
            var2 = {};
            var1 = arg0;
            var1 = var4.bind(var5)(var2, var3, var1);
            var0._extra = var1;
            var1 = var0._notifyScopeListeners;
            var1 = var1.bind(var0)();
            return var0;
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'setExtra';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: setExtra, environment: var4
            var0 = this;
            var1 = global;
            var5 = var1.Object;
            var4 = var5.assign;
            var3 = var0._extra;
            var8 = _closure1_slot2;
            var7 = undefined;
            var6 = {};
            var2 = arg0;
            var1 = arg1;
            var2 = var8.bind(var7)(var6, var2, var1);
            var1 = {};
            var1 = var4.bind(var5)(var1, var3, var2);
            var0._extra = var1;
            var1 = var0._notifyScopeListeners;
            var1 = var1.bind(var0)();
            return var0;
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'setFingerprint';
        var0.key = var5;
        var5 = function(arg0) { // Original name: setFingerprint, environment: var4
            var0 = this;
            var1 = arg0;
            var0._fingerprint = var1;
            var1 = var0._notifyScopeListeners;
            var1 = var1.bind(var0)();
            return var0;
        };
        var0.value = var5;
        var1[13] = var0;
        var0 = {};
        var5 = 'setLevel';
        var0.key = var5;
        var5 = function(arg0) { // Original name: setLevel, environment: var4
            var0 = this;
            var1 = arg0;
            var0._level = var1;
            var1 = var0._notifyScopeListeners;
            var1 = var1.bind(var0)();
            return var0;
        };
        var0.value = var5;
        var1[14] = var0;
        var0 = {};
        var5 = 'setTransactionName';
        var0.key = var5;
        var5 = function(arg0) { // Original name: setTransactionName, environment: var4
            var0 = this;
            var1 = arg0;
            var0._transactionName = var1;
            var1 = var0._notifyScopeListeners;
            var1 = var1.bind(var0)();
            return var0;
        };
        var0.value = var5;
        var1[15] = var0;
        var0 = {};
        var5 = 'setContext';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: setContext, environment: var4
            _fun8920: for (var _fun8920_ip = 0;;) switch (_fun8920_ip) {
                case 0:
                    var2 = arg0;
                    var3 = arg1;
                    var0 = this;
                    var1 = null;
                    if (!(var1 !== var3)) {
                        _fun8920_ip = 27;
                        continue _fun8920
                    }
                case 15:
                    var1 = var0._contexts;
                    var1[var2] = var3;
                    _fun8920_ip = 37;
                    continue _fun8920;
                case 27:
                    var1 = var0._contexts;
                    var1 = delete var1[var2];
                case 37:
                    var1 = var0._notifyScopeListeners;
                    var1 = var1.bind(var0)();
                    return var0;
            }
        };
        var0.value = var5;
        var1[16] = var0;
        var0 = {};
        var5 = 'setSession';
        var0.key = var5;
        var5 = function(arg0) { // Original name: setSession, environment: var4
            _fun8921: for (var _fun8921_ip = 0;;) switch (_fun8921_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    if (var1) {
                        _fun8921_ip = 16;
                        continue _fun8921
                    }
                case 9:
                    var2 = delete var0._session;
                    _fun8921_ip = 22;
                    continue _fun8921;
                case 16:
                    var0._session = var1;
                case 22:
                    var1 = var0._notifyScopeListeners;
                    var1 = var1.bind(var0)();
                    return var0;
            }
        };
        var0.value = var5;
        var1[17] = var0;
        var0 = {};
        var5 = 'getSession';
        var0.key = var5;
        var5 = function() { // Original name: getSession, environment: var4
            var0 = this;
            var0 = var0._session;
            return var0;
        };
        var0.value = var5;
        var1[18] = var0;
        var0 = {};
        var5 = 'update';
        var0.key = var5;
        var5 = function(arg0) { // Original name: update, environment: var4
            _fun8923: for (var _fun8923_ip = 0;;) switch (_fun8923_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    if (var2) {
                        _fun8923_ip = 11;
                        continue _fun8923
                    }
                case 9:
                    return var0;
                case 11:
                    var4 = 'function';
                    var1 = typeof var2;
                    var3 = var2;
                    if (!(var4 === var1)) {
                        _fun8923_ip = 32;
                        continue _fun8923
                    }
                case 25:
                    var1 = undefined;
                    var3 = var2.bind(var1)(var0);
                case 32:
                    var1 = _closure2_slot0;
                    var1 = var3 instanceof var1;
                    if (var1) {
                        _fun8923_ip = 90;
                        continue _fun8923
                    }
                case 46:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 7;
                    var4 = var4[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.isPlainObject;
                    var4 = var4.bind(var5)(var3);
                    if (!var4) {
                        _fun8923_ip = 88;
                        continue _fun8923
                    }
                case 85:
                    var1 = var2;
                case 88:
                    _fun8923_ip = 100;
                    continue _fun8923;
                case 90:
                    var2 = var3.getScopeData;
                    var1 = var2.bind(var3)();
                case 100:
                    if (var1) {
                        _fun8923_ip = 105;
                        continue _fun8923
                    }
                case 103:
                    var1 = {};
                case 105:
                    var12 = var1.tags;
                    var11 = var1.extra;
                    var4 = var1.user;
                    var10 = var1.contexts;
                    var3 = var1.level;
                    var2 = var1.fingerprint;
                    var5 = undefined;
                    if (!(var5 === var2)) {
                        _fun8923_ip = 150;
                        continue _fun8923
                    }
                case 146:
                    var2 = new Array(0);
                case 150:
                    var1 = var1.propagationContext;
                    var6 = global;
                    var9 = var6.Object;
                    var8 = var9.assign;
                    var7 = var0._tags;
                    var5 = {};
                    var5 = var8.bind(var9)(var5, var7, var12);
                    var0._tags = var5;
                    var9 = var6.Object;
                    var8 = var9.assign;
                    var7 = var0._extra;
                    var5 = {};
                    var5 = var8.bind(var9)(var5, var7, var11);
                    var0._extra = var5;
                    var9 = var6.Object;
                    var8 = var9.assign;
                    var7 = var0._contexts;
                    var5 = {};
                    var5 = var8.bind(var9)(var5, var7, var10);
                    var0._contexts = var5;
                    var5 = var4;
                    if (!var5) {
                        _fun8923_ip = 281;
                        continue _fun8923
                    }
                case 260:
                    var7 = var6.Object;
                    var6 = var7.keys;
                    var6 = var6.bind(var7)(var4);
                    var5 = var6.length;
                case 281:
                    if (!var5) {
                        _fun8923_ip = 290;
                        continue _fun8923
                    }
                case 284:
                    var0._user = var4;
                case 290:
                    if (!var3) {
                        _fun8923_ip = 299;
                        continue _fun8923
                    }
                case 293:
                    var0._level = var3;
                case 299:
                    var3 = var2.length;
                    if (!var3) {
                        _fun8923_ip = 313;
                        continue _fun8923
                    }
                case 307:
                    var0._fingerprint = var2;
                case 313:
                    if (!var1) {
                        _fun8923_ip = 322;
                        continue _fun8923
                    }
                case 316:
                    var0._propagationContext = var1;
                case 322:
                    return var0;
            }
        };
        var0.value = var5;
        var1[19] = var0;
        var0 = {};
        var5 = 'clear';
        var0.key = var5;
        var5 = function() { // Original name: clear, environment: var4
            var0 = this;
            var1 = new Array(0);
            var0._breadcrumbs = var1;
            var1 = {};
            var0._tags = var1;
            var1 = {};
            var0._extra = var1;
            var1 = {};
            var0._user = var1;
            var1 = {};
            var0._contexts = var1;
            var5 = undefined;
            var0._level = var5;
            var0._transactionName = var5;
            var0._fingerprint = var5;
            var0._session = var5;
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 5;
            var1 = var6[var1];
            var2 = var4.bind(var5)(var1);
            var1 = var2._setSpanForScope;
            var1 = var1.bind(var2)(var0, var5);
            var1 = new Array(0);
            var0._attachments = var1;
            var2 = var0.setPropagationContext;
            var1 = {};
            var3 = 4;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.generateTraceId;
            var3 = var3.bind(var4)();
            var1.traceId = var3;
            var3 = global;
            var4 = var3.Math;
            var3 = var4.random;
            var3 = var3.bind(var4)();
            var1.sampleRand = var3;
            var1 = var2.bind(var0)(var1);
            var1 = var0._notifyScopeListeners;
            var1 = var1.bind(var0)();
            return var0;
        };
        var0.value = var5;
        var1[20] = var0;
        var0 = {};
        var5 = 'addBreadcrumb';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: addBreadcrumb, environment: var4
            _fun8925: for (var _fun8925_ip = 0;;) switch (_fun8925_ip) {
                case 0:
                    var6 = arg0;
                    var2 = arg1;
                    var0 = this;
                    var1 = 100;
                    var4 = 'number';
                    var3 = typeof var2;
                    if (!(var4 === var3)) {
                        _fun8925_ip = 26;
                        continue _fun8925
                    }
                case 23:
                    var1 = var2;
                case 26:
                    var2 = 0;
                    if (!(!(var1 <= var2))) {
                        _fun8925_ip = 265;
                        continue _fun8925
                    }
                case 35:
                    var2 = global;
                    var5 = var2.Object;
                    var4 = var5.assign;
                    var3 = {};
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var2 = 8;
                    var2 = var9[var2];
                    var10 = undefined;
                    var7 = var7.bind(var10)(var2);
                    var2 = var7.dateTimestampInSeconds;
                    var2 = var2.bind(var7)();
                    var3.timestamp = var2;
                    var2 = {};
                    var7 = var6.message;
                    if (var7) {
                        _fun8925_ip = 107;
                        continue _fun8925
                    }
                case 100:
                    var7 = var6.message;
                    _fun8925_ip = 150;
                    continue _fun8925;
                case 107:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var8 = 9;
                    var8 = var11[var8];
                    var11 = var9.bind(var10)(var8);
                    var10 = var11.truncate;
                    var9 = var6.message;
                    var8 = 2048;
                    var7 = var10.bind(var11)(var9, var8);
                case 150:
                    var2.message = var7;
                    var4 = var4.bind(var5)(var3, var6, var2);
                    var3 = var0._breadcrumbs;
                    var2 = var3.push;
                    var2 = var2.bind(var3)(var4);
                    var2 = var0._breadcrumbs;
                    var2 = var2.length;
                    if (!(var2 > var1)) {
                        _fun8925_ip = 253;
                        continue _fun8925
                    }
                case 192:
                    var3 = var0._breadcrumbs;
                    var2 = var3.slice;
                    var1 = -var1;
                    var1 = var2.bind(var3)(var1);
                    var0._breadcrumbs = var1;
                    var4 = var0._client;
                    var1 = null;
                    if (!(var1 != var4)) {
                        _fun8925_ip = 253;
                        continue _fun8925
                    }
                case 229:
                    var3 = var4.recordDroppedEvent;
                    var2 = 'buffer_overflow';
                    var1 = 'log_item';
                    var1 = var3.bind(var4)(var2, var1);
                case 253:
                    var1 = var0._notifyScopeListeners;
                    var1 = var1.bind(var0)();
                    return var0;
                case 265:
                    return var0;
            }
        };
        var0.value = var5;
        var1[21] = var0;
        var0 = {};
        var5 = 'getLastBreadcrumb';
        var0.key = var5;
        var5 = function() { // Original name: getLastBreadcrumb, environment: var4
            var0 = this;
            var1 = var0._breadcrumbs;
            var0 = var0._breadcrumbs;
            var2 = var0.length;
            var0 = 1;
            var0 = var2 - var0;
            var0 = var1[var0];
            return var0;
        };
        var0.value = var5;
        var1[22] = var0;
        var0 = {};
        var5 = 'clearBreadcrumbs';
        var0.key = var5;
        var5 = function() { // Original name: clearBreadcrumbs, environment: var4
            var0 = this;
            var1 = new Array(0);
            var0._breadcrumbs = var1;
            var1 = var0._notifyScopeListeners;
            var1 = var1.bind(var0)();
            return var0;
        };
        var0.value = var5;
        var1[23] = var0;
        var0 = {};
        var5 = 'addAttachment';
        var0.key = var5;
        var5 = function(arg0) { // Original name: addAttachment, environment: var4
            var0 = this;
            var3 = var0._attachments;
            var2 = var3.push;
            var1 = arg0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var5;
        var1[24] = var0;
        var0 = {};
        var5 = 'clearAttachments';
        var0.key = var5;
        var5 = function() { // Original name: clearAttachments, environment: var4
            var0 = this;
            var1 = new Array(0);
            var0._attachments = var1;
            return var0;
        };
        var0.value = var5;
        var1[25] = var0;
        var0 = {};
        var5 = 'getScopeData';
        var0.key = var5;
        var5 = function() { // Original name: getScopeData, environment: var4
            _fun8930: for (var _fun8930_ip = 0;;) switch (_fun8930_ip) {
                case 0:
                    var3 = this;
                    var0 = {};
                    var1 = var3._breadcrumbs;
                    var0.breadcrumbs = var1;
                    var1 = var3._attachments;
                    var0.attachments = var1;
                    var1 = var3._contexts;
                    var0.contexts = var1;
                    var1 = var3._tags;
                    var0.tags = var1;
                    var1 = var3._extra;
                    var0.extra = var1;
                    var1 = var3._user;
                    var0.user = var1;
                    var1 = var3._level;
                    var0.level = var1;
                    var1 = var3._fingerprint;
                    if (var1) {
                        _fun8930_ip = 94;
                        continue _fun8930
                    }
                case 90:
                    var1 = new Array(0);
                case 94:
                    var0.fingerprint = var1;
                    var1 = var3._eventProcessors;
                    var0.eventProcessors = var1;
                    var1 = var3._propagationContext;
                    var0.propagationContext = var1;
                    var1 = var3._sdkProcessingMetadata;
                    var0.sdkProcessingMetadata = var1;
                    var1 = var3._transactionName;
                    var0.transactionName = var1;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2._getSpanForScope;
                    var1 = var1.bind(var2)(var3);
                    var0.span = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[26] = var0;
        var0 = {};
        var5 = 'setSDKProcessingMetadata';
        var0.key = var5;
        var5 = function(arg0) { // Original name: setSDKProcessingMetadata, environment: var4
            var0 = this;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.merge;
            var3 = var0._sdkProcessingMetadata;
            var2 = arg0;
            var1 = 2;
            var1 = var4.bind(var5)(var3, var2, var1);
            var0._sdkProcessingMetadata = var1;
            return var0;
        };
        var0.value = var5;
        var1[27] = var0;
        var0 = {};
        var5 = 'setPropagationContext';
        var0.key = var5;
        var5 = function(arg0) { // Original name: setPropagationContext, environment: var4
            var0 = this;
            var1 = arg0;
            var0._propagationContext = var1;
            return var0;
        };
        var0.value = var5;
        var1[28] = var0;
        var0 = {};
        var5 = 'getPropagationContext';
        var0.key = var5;
        var5 = function() { // Original name: getPropagationContext, environment: var4
            var0 = this;
            var0 = var0._propagationContext;
            return var0;
        };
        var0.value = var5;
        var1[29] = var0;
        var0 = {};
        var5 = 'captureException';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: captureException, environment: var4
            _fun8934: for (var _fun8934_ip = 0;;) switch (_fun8934_ip) {
                case 0:
                    var5 = arg0;
                    var9 = arg1;
                    var4 = this;
                    var0 = null;
                    var1 = var0 == var9;
                    var3 = undefined;
                    var0 = undefined;
                    if (var1) {
                        _fun8934_ip = 28;
                        continue _fun8934
                    }
                case 22:
                    var0 = var9.event_id;
                case 28:
                    if (var0) {
                        _fun8934_ip = 64;
                        continue _fun8934
                    }
                case 31:
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 11;
                    var1 = var6[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.uuid4;
                    var0 = var1.bind(var2)();
                case 64:
                    var1 = var4._client;
                    if (var1) {
                        _fun8934_ip = 149;
                        continue _fun8934
                    }
                case 73:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 12;
                    var2 = var7[var2];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.DEBUG_BUILD;
                    if (!var2) {
                        _fun8934_ip = 147;
                        continue _fun8934
                    }
                case 105:
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 13;
                    var1 = var6[var1];
                    var1 = var2.bind(var3)(var1);
                    var3 = var1.debug;
                    var2 = var3.warn;
                    var1 = 'No client configured on scope - will not capture exception!';
                    var1 = var2.bind(var3)(var1);
                case 147:
                    return var0;
                case 149:
                    var6 = global;
                    var3 = var6.Error;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {
                        constructor: {
                            value: var3
                        }
                    });
                    var13 = 'Sentry syntheticException';
                    var14 = var2;
                    var1 = new var14[var3](var13, var12);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var3 = var4._client;
                    var2 = var3.captureException;
                    var8 = var6.Object;
                    var7 = var8.assign;
                    var6 = {};
                    var6.originalException = var5;
                    var6.syntheticException = var1;
                    var1 = {};
                    var1.event_id = var0;
                    var1 = var7.bind(var8)(var6, var9, var1);
                    var1 = var2.bind(var3)(var5, var1, var4);
                    return var0;
            }
        };
        var0.value = var5;
        var1[30] = var0;
        var0 = {};
        var5 = 'captureMessage';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2) { // Original name: captureMessage, environment: var4
            _fun8935: for (var _fun8935_ip = 0;;) switch (_fun8935_ip) {
                case 0:
                    var6 = arg0;
                    var9 = arg2;
                    var5 = this;
                    var2 = null;
                    var3 = var2 == var9;
                    var1 = undefined;
                    var0 = undefined;
                    if (var3) {
                        _fun8935_ip = 28;
                        continue _fun8935
                    }
                case 22:
                    var0 = var9.event_id;
                case 28:
                    if (var0) {
                        _fun8935_ip = 64;
                        continue _fun8935
                    }
                case 31:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 11;
                    var3 = var7[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.uuid4;
                    var0 = var3.bind(var4)();
                case 64:
                    var3 = var5._client;
                    if (var3) {
                        _fun8935_ip = 149;
                        continue _fun8935
                    }
                case 73:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var4 = 12;
                    var4 = var8[var4];
                    var4 = var7.bind(var1)(var4);
                    var4 = var4.DEBUG_BUILD;
                    if (!var4) {
                        _fun8935_ip = 147;
                        continue _fun8935
                    }
                case 105:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 13;
                    var3 = var7[var3];
                    var3 = var4.bind(var1)(var3);
                    var7 = var3.debug;
                    var4 = var7.warn;
                    var3 = 'No client configured on scope - will not capture message!';
                    var3 = var4.bind(var7)(var3);
                case 147:
                    return var0;
                case 149:
                    var3 = var2 == var9;
                    var1 = undefined;
                    if (var3) {
                        _fun8935_ip = 164;
                        continue _fun8935
                    }
                case 158:
                    var1 = var9.syntheticException;
                case 164:
                    if (!(var2 == var1)) {
                        _fun8935_ip = 199;
                        continue _fun8935
                    }
                case 168:
                    var2 = global;
                    var2 = var2.Error;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var15 = var3;
                    var14 = var6;
                    var2 = new var15[var2](var14, var13);
                    var1 = var2 instanceof Object ? var2 : var3;
                case 199:
                    var4 = var5._client;
                    var3 = var4.captureMessage;
                    var2 = global;
                    var8 = var2.Object;
                    var7 = var8.assign;
                    var2 = {};
                    var2.originalException = var6;
                    var2.syntheticException = var1;
                    var1 = {};
                    var1.event_id = var0;
                    var12 = var7.bind(var8)(var2, var9, var1);
                    var13 = arg1;
                    var15 = var4;
                    var14 = var6;
                    var11 = var5;
                    var1 = var15[var3](var14, var13, var12, var11, var10);
                    return var0;
            }
        };
        var0.value = var5;
        var1[31] = var0;
        var0 = {};
        var5 = 'captureEvent';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: captureEvent, environment: var4
            _fun8936: for (var _fun8936_ip = 0;;) switch (_fun8936_ip) {
                case 0:
                    var8 = arg1;
                    var5 = this;
                    var0 = null;
                    var1 = var0 == var8;
                    var3 = undefined;
                    var0 = undefined;
                    if (var1) {
                        _fun8936_ip = 25;
                        continue _fun8936
                    }
                case 19:
                    var0 = var8.event_id;
                case 25:
                    if (var0) {
                        _fun8936_ip = 61;
                        continue _fun8936
                    }
                case 28:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 11;
                    var1 = var4[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.uuid4;
                    var0 = var1.bind(var2)();
                case 61:
                    var1 = var5._client;
                    if (var1) {
                        _fun8936_ip = 146;
                        continue _fun8936
                    }
                case 70:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 12;
                    var2 = var6[var2];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.DEBUG_BUILD;
                    if (!var2) {
                        _fun8936_ip = 197;
                        continue _fun8936
                    }
                case 102:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 13;
                    var1 = var4[var1];
                    var1 = var2.bind(var3)(var1);
                    var3 = var1.debug;
                    var2 = var3.warn;
                    var1 = 'No client configured on scope - will not capture event!';
                    var1 = var2.bind(var3)(var1);
                    _fun8936_ip = 197;
                    continue _fun8936;
                case 146:
                    var4 = var5._client;
                    var3 = var4.captureEvent;
                    var1 = global;
                    var7 = var1.Object;
                    var6 = var7.assign;
                    var2 = {};
                    var2.event_id = var0;
                    var1 = {};
                    var2 = var6.bind(var7)(var1, var8, var2);
                    var1 = arg0;
                    var1 = var3.bind(var4)(var1, var2, var5);
                case 197:
                    return var0;
            }
        };
        var0.value = var5;
        var1[32] = var0;
        var0 = {};
        var5 = '_notifyScopeListeners';
        var0.key = var5;
        var4 = function() { // Original name: _notifyScopeListeners, environment: var4
            _fun8937: for (var _fun8937_ip = 0;;) switch (_fun8937_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var2 = var1._notifyingListeners;
                    if (var2) {
                        _fun8937_ip = 55;
                        continue _fun8937
                    }
                case 18:
                    var2 = true;
                    var1._notifyingListeners = var2;
                    var3 = var1._scopeListeners;
                    var2 = var3.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure3_slot0;
                        var1 = arg0;
                        var0 = undefined;
                        var1 = var1.bind(var0)(var2);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0);
                    var0 = false;
                    var1._notifyingListeners = var0;
                case 55:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[33] = var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.Scope = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 65, 6, 7, 829, 843, 844, 827, 837, 831, 845, 830, 823, 824]);