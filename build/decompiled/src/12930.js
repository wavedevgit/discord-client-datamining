// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4.value = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var2, var1, var4);
    var1 = function() { // Environment: var3
        var3 = function() {
            var2 = this;
            var4 = _closure1_slot5;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var3 = false;
            var2._notifyingListeners = var3;
            var3 = new Array(0);
            var2._scopeListeners = var3;
            var3 = new Array(0);
            var2._eventProcessors = var3;
            var3 = new Array(0);
            var2._breadcrumbs = var3;
            var3 = new Array(0);
            var2._attachments = var3;
            var3 = {};
            var2._user = var3;
            var3 = {};
            var2._tags = var3;
            var3 = {};
            var2._extra = var3;
            var3 = {};
            var2._contexts = var3;
            var3 = {};
            var2._sdkProcessingMetadata = var3;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 5;
            var1 = var4[var1];
            var3 = var3.bind(var0)(var1);
            var1 = var3.generatePropagationContext;
            var1 = var1.bind(var3)();
            var2._propagationContext = var1;
            return var0;
        };
        var _closure2_slot0 = var3;
        var2 = _closure1_slot6;
        var0 = {};
        var1 = 'clone';
        var0.key = var1;
        var1 = function() {
            var5 = this;
            var0 = _closure2_slot0;
            var1 = var0.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var0
                }
            });
            var12 = var1;
            var0 = new var12[var0](var11);
            var0 = var0 instanceof Object ? var0 : var1;
            var4 = _closure1_slot4;
            var2 = var5._breadcrumbs;
            var6 = undefined;
            var2 = var4.bind(var6)(var2);
            var0._breadcrumbs = var2;
            var2 = global;
            var9 = var2.Object;
            var8 = var9.assign;
            var7 = var5._tags;
            var3 = {};
            var3 = var8.bind(var9)(var3, var7);
            var0._tags = var3;
            var9 = var2.Object;
            var8 = var9.assign;
            var7 = var5._extra;
            var3 = {};
            var3 = var8.bind(var9)(var3, var7);
            var0._extra = var3;
            var9 = var2.Object;
            var8 = var9.assign;
            var7 = var5._contexts;
            var3 = {};
            var3 = var8.bind(var9)(var3, var7);
            var0._contexts = var3;
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
            var3 = var5._eventProcessors;
            var3 = var4.bind(var6)(var3);
            var0._eventProcessors = var3;
            var3 = var5._requestSession;
            var0._requestSession = var3;
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
            var1 = 6;
            var2 = var7[var1];
            var3 = var4.bind(var6)(var2);
            var2 = var3._setSpanForScope;
            var1 = var7[var1];
            var4 = var4.bind(var6)(var1);
            var1 = var4._getSpanForScope;
            var1 = var1.bind(var4)(var5);
            var1 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var0.value = var1;
        var1 = new Array(36);
        var1[0] = var0;
        var0 = {};
        var5 = 'setClient';
        var0.key = var5;
        var5 = function arg0() {
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
        var5 = function arg0() {
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
        var5 = function() {
            var0 = this;
            var0 = var0._client;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'lastEventId';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._lastEventId;
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'addScopeListener';
        var0.key = var5;
        var5 = function arg0() {
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
        var5 = function arg0() {
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
        var5 = function arg0() {
            _fun99165: for (var _fun99165_ip = 0;;) switch (_fun99165_ip) {
                case 0:
                    var5 = arg0;
                    var0 = this;
                    var1 = var5;
                    if (var1) {
                        _fun99165_ip = 37;
                        continue _fun99165
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
                        _fun99165_ip = 101;
                        continue _fun99165
                    }
                case 52:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 7;
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
        var5 = function() {
            var0 = this;
            var0 = var0._user;
            return var0;
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'getRequestSession';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._requestSession;
            return var0;
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'setRequestSession';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0._requestSession = var1;
            return var0;
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'setTags';
        var0.key = var5;
        var5 = function arg0() {
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
        var1[11] = var0;
        var0 = {};
        var5 = 'setTag';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var0 = this;
            var1 = global;
            var5 = var1.Object;
            var4 = var5.assign;
            var3 = var0._tags;
            var8 = _closure1_slot3;
            var7 = undefined;
            var6 = {};
            var2 = arg0;
            var1 = arg1;
            var2 = var8.bind(var7)(var6, var2, var1);
            var1 = {};
            var1 = var4.bind(var5)(var1, var3, var2);
            var0._tags = var1;
            var1 = var0._notifyScopeListeners;
            var1 = var1.bind(var0)();
            return var0;
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'setExtras';
        var0.key = var5;
        var5 = function arg0() {
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
        var1[13] = var0;
        var0 = {};
        var5 = 'setExtra';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var0 = this;
            var1 = global;
            var5 = var1.Object;
            var4 = var5.assign;
            var3 = var0._extra;
            var8 = _closure1_slot3;
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
        var1[14] = var0;
        var0 = {};
        var5 = 'setFingerprint';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0._fingerprint = var1;
            var1 = var0._notifyScopeListeners;
            var1 = var1.bind(var0)();
            return var0;
        };
        var0.value = var5;
        var1[15] = var0;
        var0 = {};
        var5 = 'setLevel';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0._level = var1;
            var1 = var0._notifyScopeListeners;
            var1 = var1.bind(var0)();
            return var0;
        };
        var0.value = var5;
        var1[16] = var0;
        var0 = {};
        var5 = 'setTransactionName';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0._transactionName = var1;
            var1 = var0._notifyScopeListeners;
            var1 = var1.bind(var0)();
            return var0;
        };
        var0.value = var5;
        var1[17] = var0;
        var0 = {};
        var5 = 'setContext';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun99176: for (var _fun99176_ip = 0;;) switch (_fun99176_ip) {
                case 0:
                    var2 = arg0;
                    var3 = arg1;
                    var0 = this;
                    var1 = null;
                    if (!(var1 !== var3)) {
                        _fun99176_ip = 27;
                        continue _fun99176
                    }
                case 15:
                    var1 = var0._contexts;
                    var1[var2] = var3;
                    _fun99176_ip = 37;
                    continue _fun99176;
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
        var1[18] = var0;
        var0 = {};
        var5 = 'setSession';
        var0.key = var5;
        var5 = function arg0() {
            _fun99177: for (var _fun99177_ip = 0;;) switch (_fun99177_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    if (var1) {
                        _fun99177_ip = 16;
                        continue _fun99177
                    }
                case 9:
                    var2 = delete var0._session;
                    _fun99177_ip = 22;
                    continue _fun99177;
                case 16:
                    var0._session = var1;
                case 22:
                    var1 = var0._notifyScopeListeners;
                    var1 = var1.bind(var0)();
                    return var0;
            }
        };
        var0.value = var5;
        var1[19] = var0;
        var0 = {};
        var5 = 'getSession';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._session;
            return var0;
        };
        var0.value = var5;
        var1[20] = var0;
        var0 = {};
        var5 = 'update';
        var0.key = var5;
        var5 = function arg0() {
            _fun99179: for (var _fun99179_ip = 0;;) switch (_fun99179_ip) {
                case 0:
                    var4 = arg0;
                    var0 = this;
                    if (var4) {
                        _fun99179_ip = 11;
                        continue _fun99179
                    }
                case 9:
                    return var0;
                case 11:
                    var2 = 'function';
                    var1 = typeof var4;
                    var5 = var4;
                    if (!(var2 === var1)) {
                        _fun99179_ip = 32;
                        continue _fun99179
                    }
                case 25:
                    var1 = undefined;
                    var5 = var4.bind(var1)(var0);
                case 32:
                    var2 = _closure1_slot7;
                    var2 = var5 instanceof var2;
                    if (var2) {
                        _fun99179_ip = 111;
                        continue _fun99179
                    }
                case 46:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var6.bind(var2)(var3);
                    var2 = var3.isPlainObject;
                    var2 = var2.bind(var3)(var5);
                    if (var2) {
                        _fun99179_ip = 88;
                        continue _fun99179
                    }
                case 82:
                    var3 = new Array(0);
                    _fun99179_ip = 109;
                    continue _fun99179;
                case 88:
                    var2 = new Array(2);
                    var2[0] = var4;
                    var4 = var4.requestSession;
                    var2[1] = var4;
                    var3 = var2;
                case 109:
                    _fun99179_ip = 146;
                    continue _fun99179;
                case 111:
                    var2 = var5.getScopeData;
                    var4 = var2.bind(var5)();
                    var2 = new Array(2);
                    var2[0] = var4;
                    var4 = var5.getRequestSession;
                    var4 = var4.bind(var5)();
                    var2[1] = var4;
                    var3 = var2;
                case 146:
                    var2 = _closure1_slot2;
                    var6 = undefined;
                    var1 = 2;
                    var3 = var2.bind(var6)(var3, var1);
                    var1 = 0;
                    var2 = var3[var1];
                    var1 = 1;
                    var1 = var3[var1];
                    if (var2) {
                        _fun99179_ip = 179;
                        continue _fun99179
                    }
                case 177:
                    var2 = {};
                case 179:
                    var13 = var2.tags;
                    var12 = var2.extra;
                    var5 = var2.user;
                    var11 = var2.contexts;
                    var4 = var2.level;
                    var3 = var2.fingerprint;
                    if (!(var6 === var3)) {
                        _fun99179_ip = 222;
                        continue _fun99179
                    }
                case 218:
                    var3 = new Array(0);
                case 222:
                    var2 = var2.propagationContext;
                    var7 = global;
                    var10 = var7.Object;
                    var9 = var10.assign;
                    var8 = var0._tags;
                    var6 = {};
                    var6 = var9.bind(var10)(var6, var8, var13);
                    var0._tags = var6;
                    var10 = var7.Object;
                    var9 = var10.assign;
                    var8 = var0._extra;
                    var6 = {};
                    var6 = var9.bind(var10)(var6, var8, var12);
                    var0._extra = var6;
                    var10 = var7.Object;
                    var9 = var10.assign;
                    var8 = var0._contexts;
                    var6 = {};
                    var6 = var9.bind(var10)(var6, var8, var11);
                    var0._contexts = var6;
                    var6 = var5;
                    if (!var6) {
                        _fun99179_ip = 353;
                        continue _fun99179
                    }
                case 332:
                    var8 = var7.Object;
                    var7 = var8.keys;
                    var7 = var7.bind(var8)(var5);
                    var6 = var7.length;
                case 353:
                    if (!var6) {
                        _fun99179_ip = 362;
                        continue _fun99179
                    }
                case 356:
                    var0._user = var5;
                case 362:
                    if (!var4) {
                        _fun99179_ip = 371;
                        continue _fun99179
                    }
                case 365:
                    var0._level = var4;
                case 371:
                    var4 = var3.length;
                    if (!var4) {
                        _fun99179_ip = 385;
                        continue _fun99179
                    }
                case 379:
                    var0._fingerprint = var3;
                case 385:
                    if (!var2) {
                        _fun99179_ip = 394;
                        continue _fun99179
                    }
                case 388:
                    var0._propagationContext = var2;
                case 394:
                    if (!var1) {
                        _fun99179_ip = 403;
                        continue _fun99179
                    }
                case 397:
                    var0._requestSession = var1;
                case 403:
                    return var0;
            }
        };
        var0.value = var5;
        var1[21] = var0;
        var0 = {};
        var5 = 'clear';
        var0.key = var5;
        var5 = function() {
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
            var3 = undefined;
            var0._level = var3;
            var0._transactionName = var3;
            var0._fingerprint = var3;
            var0._requestSession = var3;
            var0._session = var3;
            var2 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 6;
            var1 = var4[var1];
            var5 = var2.bind(var3)(var1);
            var1 = var5._setSpanForScope;
            var1 = var1.bind(var5)(var0, var3);
            var1 = new Array(0);
            var0._attachments = var1;
            var1 = 5;
            var1 = var4[var1];
            var2 = var2.bind(var3)(var1);
            var1 = var2.generatePropagationContext;
            var1 = var1.bind(var2)();
            var0._propagationContext = var1;
            var1 = var0._notifyScopeListeners;
            var1 = var1.bind(var0)();
            return var0;
        };
        var0.value = var5;
        var1[22] = var0;
        var0 = {};
        var5 = 'addBreadcrumb';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun99181: for (var _fun99181_ip = 0;;) switch (_fun99181_ip) {
                case 0:
                    var1 = arg1;
                    var0 = this;
                    var2 = 100;
                    var4 = 'number';
                    var3 = typeof var1;
                    if (!(var4 === var3)) {
                        _fun99181_ip = 23;
                        continue _fun99181
                    }
                case 20:
                    var2 = var1;
                case 23:
                    var1 = 0;
                    if (!(!(var2 <= var1))) {
                        _fun99181_ip = 155;
                        continue _fun99181
                    }
                case 32:
                    var1 = global;
                    var5 = var1.Object;
                    var4 = var5.assign;
                    var3 = {};
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 5;
                    var6 = var6[var1];
                    var1 = undefined;
                    var6 = var7.bind(var1)(var6);
                    var1 = var6.dateTimestampInSeconds;
                    var1 = var1.bind(var6)();
                    var3.timestamp = var1;
                    var1 = arg0;
                    var3 = var4.bind(var5)(var3, var1);
                    var4 = var0._breadcrumbs;
                    var1 = var4.push;
                    var1 = var1.bind(var4)(var3);
                    var3 = var4.length;
                    var1 = var4;
                    if (!(var3 > var2)) {
                        _fun99181_ip = 137;
                        continue _fun99181
                    }
                case 124:
                    var3 = var4.slice;
                    var2 = -var2;
                    var1 = var3.bind(var4)(var2);
                case 137:
                    var0._breadcrumbs = var1;
                    var1 = var0._notifyScopeListeners;
                    var1 = var1.bind(var0)();
                    return var0;
                case 155:
                    return var0;
            }
        };
        var0.value = var5;
        var1[23] = var0;
        var0 = {};
        var5 = 'getLastBreadcrumb';
        var0.key = var5;
        var5 = function() {
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
        var1[24] = var0;
        var0 = {};
        var5 = 'clearBreadcrumbs';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = new Array(0);
            var0._breadcrumbs = var1;
            var1 = var0._notifyScopeListeners;
            var1 = var1.bind(var0)();
            return var0;
        };
        var0.value = var5;
        var1[25] = var0;
        var0 = {};
        var5 = 'addAttachment';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var3 = var0._attachments;
            var2 = var3.push;
            var1 = arg0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var5;
        var1[26] = var0;
        var0 = {};
        var5 = 'clearAttachments';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = new Array(0);
            var0._attachments = var1;
            return var0;
        };
        var0.value = var5;
        var1[27] = var0;
        var0 = {};
        var5 = 'getScopeData';
        var0.key = var5;
        var5 = function() {
            _fun99186: for (var _fun99186_ip = 0;;) switch (_fun99186_ip) {
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
                        _fun99186_ip = 94;
                        continue _fun99186
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
                    var1 = 6;
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
        var1[28] = var0;
        var0 = {};
        var5 = 'setSDKProcessingMetadata';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var1 = global;
            var5 = var1.Object;
            var4 = var5.assign;
            var3 = var0._sdkProcessingMetadata;
            var2 = {};
            var1 = arg0;
            var1 = var4.bind(var5)(var2, var3, var1);
            var0._sdkProcessingMetadata = var1;
            return var0;
        };
        var0.value = var5;
        var1[29] = var0;
        var0 = {};
        var5 = 'setPropagationContext';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0._propagationContext = var1;
            return var0;
        };
        var0.value = var5;
        var1[30] = var0;
        var0 = {};
        var5 = 'getPropagationContext';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._propagationContext;
            return var0;
        };
        var0.value = var5;
        var1[31] = var0;
        var0 = {};
        var5 = 'captureException';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun99190: for (var _fun99190_ip = 0;;) switch (_fun99190_ip) {
                case 0:
                    var5 = arg0;
                    var9 = arg1;
                    var4 = this;
                    if (!var9) {
                        _fun99190_ip = 21;
                        continue _fun99190
                    }
                case 12:
                    var0 = var9.event_id;
                    if (var0) {
                        _fun99190_ip = 58;
                        continue _fun99190
                    }
                case 21:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.uuid4;
                    var0 = var0.bind(var1)();
                    _fun99190_ip = 64;
                    continue _fun99190;
                case 58:
                    var0 = var9.event_id;
                case 64:
                    var1 = var4._client;
                    if (var1) {
                        _fun99190_ip = 122;
                        continue _fun99190
                    }
                case 73:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.logger;
                    var2 = var3.warn;
                    var1 = 'No client configured on scope - will not capture exception!';
                    var1 = var2.bind(var3)(var1);
                    return var0;
                case 122:
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
        var1[32] = var0;
        var0 = {};
        var5 = 'captureMessage';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun99191: for (var _fun99191_ip = 0;;) switch (_fun99191_ip) {
                case 0:
                    var6 = arg0;
                    var9 = arg2;
                    var5 = this;
                    if (!var9) {
                        _fun99191_ip = 21;
                        continue _fun99191
                    }
                case 12:
                    var0 = var9.event_id;
                    if (var0) {
                        _fun99191_ip = 58;
                        continue _fun99191
                    }
                case 21:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.uuid4;
                    var0 = var0.bind(var1)();
                    _fun99191_ip = 64;
                    continue _fun99191;
                case 58:
                    var0 = var9.event_id;
                case 64:
                    var1 = var5._client;
                    if (var1) {
                        _fun99191_ip = 122;
                        continue _fun99191
                    }
                case 73:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.logger;
                    var2 = var3.warn;
                    var1 = 'No client configured on scope - will not capture message!';
                    var1 = var2.bind(var3)(var1);
                    return var0;
                case 122:
                    var2 = global;
                    var1 = var2.Error;
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var1
                        }
                    });
                    var15 = var3;
                    var14 = var6;
                    var1 = new var15[var1](var14, var13);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var4 = var5._client;
                    var3 = var4.captureMessage;
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
        var1[33] = var0;
        var0 = {};
        var5 = 'captureEvent';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun99192: for (var _fun99192_ip = 0;;) switch (_fun99192_ip) {
                case 0:
                    var8 = arg1;
                    var5 = this;
                    if (!var8) {
                        _fun99192_ip = 18;
                        continue _fun99192
                    }
                case 9:
                    var0 = var8.event_id;
                    if (var0) {
                        _fun99192_ip = 55;
                        continue _fun99192
                    }
                case 18:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.uuid4;
                    var0 = var0.bind(var1)();
                    _fun99192_ip = 61;
                    continue _fun99192;
                case 55:
                    var0 = var8.event_id;
                case 61:
                    var1 = var5._client;
                    if (var1) {
                        _fun99192_ip = 119;
                        continue _fun99192
                    }
                case 70:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.logger;
                    var2 = var3.warn;
                    var1 = 'No client configured on scope - will not capture event!';
                    var1 = var2.bind(var3)(var1);
                    _fun99192_ip = 170;
                    continue _fun99192;
                case 119:
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
                case 170:
                    return var0;
            }
        };
        var0.value = var5;
        var1[34] = var0;
        var0 = {};
        var5 = '_notifyScopeListeners';
        var0.key = var5;
        var4 = function() {
            _fun99193: for (var _fun99193_ip = 0;;) switch (_fun99193_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var2 = var1._notifyingListeners;
                    if (var2) {
                        _fun99193_ip = 57;
                        continue _fun99193
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
                case 57:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[35] = var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var _closure1_slot7 = var1;
    var2.Scope = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 77, 65, 6, 7, 12869, 12931, 12932]);