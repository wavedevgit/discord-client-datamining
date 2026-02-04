// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var0 = var0.Symbol;
    var5 = var0.toStringTag;
    var0 = {};
    var8 = 'Module';
    var0.value = var8;
    var0 = var6.bind(var7)(var2, var5, var0);
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var4 = var4.bind(var0)(var3);
    var3 = var4.defineIntegration;
    var1 = function() {
        _fun10981: for (var _fun10981_ip = 0;;) switch (_fun10981_ip) {
            case 0:
                var4 = undefined;
                var2 = undefined;
                var3 = arguments.length;
                var0 = 0;
                if (!(var3 > var0)) {
                    _fun10981_ip = 23;
                    continue _fun10981
                }
            case 15:
                var3 = arguments[var0];
                if (!(var4 === var3)) {
                    _fun10981_ip = 27;
                    continue _fun10981
                }
            case 23:
                var4 = {};
                _fun10981_ip = 31;
                continue _fun10981;
            case 27:
                var4 = arguments[var0];
            case 31:
                var0 = global;
                var3 = var0.Object;
                var2 = var3.assign;
                var0 = {
                    'console': true,
                    'dom': true,
                    'fetch': true,
                    'history': true,
                    'sentry': true,
                    'xhr': true
                };
                var0 = var2.bind(var3)(var0, var4);
                var _closure2_slot0 = var0;
                var0 = {};
                var2 = 'Breadcrumbs';
                var0.name = var2;
                var1 = function arg0() {
                    _fun10982: for (var _fun10982_ip = 0;;) switch (_fun10982_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure2_slot0;
                            var2 = var2.console;
                            if (!var2) {
                                _fun10982_ip = 66;
                                continue _fun10982
                            }
                        case 21:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var2 = 0;
                            var2 = var5[var2];
                            var6 = undefined;
                            var5 = var4.bind(var6)(var2);
                            var4 = var5.addConsoleInstrumentationHandler;
                            var2 = function arg0() {
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var0 = function arg0() {
                                    _fun10984: for (var _fun10984_ip = 0;;) switch (_fun10984_ip) {
                                        case 0:
                                            var5 = arg0;
                                            var4 = _closure1_slot0;
                                            var0 = _closure1_slot1;
                                            var3 = 0;
                                            var2 = var0[var3];
                                            var0 = undefined;
                                            var4 = var4.bind(var0)(var2);
                                            var2 = var4.getClient;
                                            var4 = var2.bind(var4)();
                                            var2 = _closure4_slot0;
                                            if (!(var4 === var2)) {
                                                _fun10984_ip = 363;
                                                continue _fun10984
                                            }
                                        case 51:
                                            var4 = {};
                                            var6 = 'console';
                                            var4.category = var6;
                                            var2 = {};
                                            var7 = var5.args;
                                            var2.arguments = var7;
                                            var2.logger = var6;
                                            var4.data = var2;
                                            var6 = _closure1_slot0;
                                            var2 = _closure1_slot1;
                                            var7 = var2[var3];
                                            var9 = var6.bind(var0)(var7);
                                            var8 = var9.severityLevelFromString;
                                            var7 = var5.level;
                                            var7 = var8.bind(var9)(var7);
                                            var4.level = var7;
                                            var2 = var2[var3];
                                            var7 = var6.bind(var0)(var2);
                                            var6 = var7.safeJoin;
                                            var2 = var5.args;
                                            var9 = ' ';
                                            var2 = var6.bind(var7)(var2, var9);
                                            var4.message = var2;
                                            var6 = var5.level;
                                            var2 = 'assert';
                                            if (!(var2 === var6)) {
                                                _fun10984_ip = 310;
                                                continue _fun10984
                                            }
                                        case 177:
                                            var2 = var5.args;
                                            var6 = var2[var3];
                                            var2 = false;
                                            if (!(var2 === var6)) {
                                                _fun10984_ip = 365;
                                                continue _fun10984
                                            }
                                        case 196:
                                            var6 = _closure1_slot0;
                                            var2 = _closure1_slot1;
                                            var2 = var2[var3];
                                            var7 = var6.bind(var0)(var2);
                                            var6 = var7.safeJoin;
                                            var10 = var5.args;
                                            var2 = var10.slice;
                                            var8 = 1;
                                            var2 = var2.bind(var10)(var8);
                                            var7 = var6.bind(var7)(var2, var9);
                                            if (var7) {
                                                _fun10984_ip = 253;
                                                continue _fun10984
                                            }
                                        case 247:
                                            var7 = 'console.assert';
                                        case 253:
                                            var2 = global;
                                            var2 = var2.HermesInternal;
                                            var6 = var2.concat;
                                            var2 = 'Assertion failed: ';
                                            var2 = var6.bind(var2)(var7);
                                            var4.message = var2;
                                            var6 = var4.data;
                                            var7 = var5.args;
                                            var2 = var7.slice;
                                            var2 = var2.bind(var7)(var8);
                                            var6.arguments = var2;
                                        case 310:
                                            var2 = _closure1_slot0;
                                            var1 = _closure1_slot1;
                                            var1 = var1[var3];
                                            var3 = var2.bind(var0)(var1);
                                            var2 = var3.addBreadcrumb;
                                            var1 = {};
                                            var6 = var5.args;
                                            var1.input = var6;
                                            var5 = var5.level;
                                            var1.level = var5;
                                            var1 = var2.bind(var3)(var4, var1);
                                        case 363:
                                            return var0;
                                        case 365:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var2 = var2.bind(var6)(var3);
                            var2 = var4.bind(var5)(var2);
                        case 66:
                            var2 = _closure2_slot0;
                            var2 = var2.dom;
                            if (!var2) {
                                _fun10982_ip = 136;
                                continue _fun10982
                            }
                        case 79:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var2 = 1;
                            var2 = var5[var2];
                            var7 = undefined;
                            var5 = var4.bind(var7)(var2);
                            var4 = var5.addClickKeypressInstrumentationHandler;
                            var2 = _closure2_slot0;
                            var6 = var2.dom;
                            var2 = function arg0, arg1() {
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var1 = arg1;
                                var _closure4_slot1 = var1;
                                var0 = function arg0() {
                                    _fun10986: for (var _fun10986_ip = 0;;) switch (_fun10986_ip) {
                                        case 0:
                                            var5 = arg0;
                                            var0 = undefined;
                                            var6 = undefined;
                                            var7 = undefined;
                                            var14 = undefined;
                                            var13 = undefined;
                                            var3 = undefined;
                                            var1 = undefined;
                                            var9 = _closure1_slot0;
                                            var8 = _closure1_slot1;
                                            var4 = 0;
                                            var8 = var8[var4];
                                            var9 = var9.bind(var0)(var8);
                                            var8 = var9.getClient;
                                            var10 = var8.bind(var9)();
                                            var8 = _closure4_slot0;
                                            if (!(var10 === var8)) {
                                                _fun10986_ip = 557;
                                                continue _fun10986
                                            }
                                        case 63:
                                            var8 = _closure4_slot1;
                                            var11 = 'object';
                                            var10 = typeof var8;
                                            var8 = undefined;
                                            if (!(var11 === var10)) {
                                                _fun10986_ip = 90;
                                                continue _fun10986
                                            }
                                        case 80:
                                            var10 = _closure4_slot1;
                                            var8 = var10.serializeAttribute;
                                        case 90:
                                            var14 = var8;
                                            var8 = _closure4_slot1;
                                            var10 = typeof var8;
                                            var8 = undefined;
                                            if (!(var11 === var10)) {
                                                _fun10986_ip = 139;
                                                continue _fun10986
                                            }
                                        case 106:
                                            var10 = _closure4_slot1;
                                            var10 = var10.maxStringLength;
                                            var11 = 'number';
                                            var10 = typeof var10;
                                            var8 = undefined;
                                            if (!(var11 === var10)) {
                                                _fun10986_ip = 139;
                                                continue _fun10986
                                            }
                                        case 129:
                                            var9 = _closure4_slot1;
                                            var8 = var9.maxStringLength;
                                        case 139:
                                            var13 = var8;
                                            if (!var8) {
                                                _fun10986_ip = 158;
                                                continue _fun10986
                                            }
                                        case 145:
                                            var10 = var13;
                                            var9 = 1024;
                                            var8 = var10 > var9;
                                        case 158:
                                            if (!var8) {
                                                _fun10986_ip = 263;
                                                continue _fun10986
                                            }
                                        case 161:
                                            var9 = _closure1_slot0;
                                            var10 = _closure1_slot1;
                                            var8 = 2;
                                            var8 = var10[var8];
                                            var8 = var9.bind(var0)(var8);
                                            var8 = var8.DEBUG_BUILD;
                                            if (!var8) {
                                                _fun10986_ip = 257;
                                                continue _fun10986
                                            }
                                        case 190:
                                            var9 = _closure1_slot0;
                                            var8 = _closure1_slot1;
                                            var8 = var8[var4];
                                            var8 = var9.bind(var0)(var8);
                                            var10 = var8.debug;
                                            var9 = var10.warn;
                                            var15 = var13;
                                            var8 = global;
                                            var8 = var8.HermesInternal;
                                            var12 = var8.concat;
                                            var11 = '`dom.maxStringLength` cannot exceed 1024, but a value of ';
                                            var8 = ' was configured. Sentry will use 1024 instead.';
                                            var8 = var12.bind(var11)(var15, var8);
                                            var8 = var9.bind(var10)(var8);
                                        case 257:
                                            var13 = 1024;
                                        case 263:
                                            var8 = var14;
                                            var9 = 'string';
                                            var8 = typeof var8;
                                            if (!(var9 === var8)) {
                                                _fun10986_ip = 291;
                                                continue _fun10986
                                            }
                                        case 277:
                                            var9 = var14;
                                            var8 = new Array(1);
                                            var8[0] = var9;
                                            var14 = var8;
                                        case 291: // try_start_0
                                            var8 = var5;
                                            var9 = var8.event;
                                            var3 = var9;
                                            var10 = !var9;
                                            var8 = !var10;
                                            if (var10) {
                                                _fun10986_ip = 324;
                                                continue _fun10986
                                            }
                                        case 312:
                                            var9 = var9.target;
                                            var9 = !var9;
                                            var8 = !var9;
                                        case 324:
                                            if (var8) {
                                                _fun10986_ip = 332;
                                                continue _fun10986
                                            }
                                        case 327:
                                            var9 = var3;
                                            _fun10986_ip = 338;
                                            continue _fun10986;
                                        case 332:
                                            var9 = var3.target;
                                        case 338:
                                            var8 = _closure1_slot0;
                                            var3 = _closure1_slot1;
                                            var10 = var3[var4];
                                            var12 = var8.bind(var0)(var10);
                                            var11 = var12.htmlTreeAsString;
                                            var10 = {};
                                            var10.keyAttrs = var14;
                                            var10.maxStringLength = var13;
                                            var6 = var11.bind(var12)(var9, var10);
                                            var3 = var3[var4];
                                            var8 = var8.bind(var0)(var3);
                                            var3 = var8.getComponentName;
                                            var7 = var3.bind(var8)(var9);
                                        case 399: // try_end0
                                            _fun10986_ip = 409;
                                            continue _fun10986;
                                        case 401: // catch_target0
                                            CatchBlockStart(arg_register = 3);
                                            var6 = '<unknown>';
                                        case 409:
                                            var3 = var6;
                                            var3 = var3.length;
                                            if (!(var4 !== var3)) {
                                                _fun10986_ip = 557;
                                                continue _fun10986
                                            }
                                        case 424:
                                            var3 = {};
                                            var8 = var5;
                                            var10 = var8.name;
                                            var8 = global;
                                            var8 = var8.HermesInternal;
                                            var9 = var8.concat;
                                            var8 = 'ui.';
                                            var8 = var9.bind(var8)(var10);
                                            var3.category = var8;
                                            var3.message = var6;
                                            var1 = var3;
                                            var3 = var7;
                                            if (!var3) {
                                                _fun10986_ip = 492;
                                                continue _fun10986
                                            }
                                        case 476:
                                            var6 = var1;
                                            var3 = {};
                                            var3['ui.component_name'] = var7;
                                            var6.data = var3;
                                        case 492:
                                            var3 = _closure1_slot0;
                                            var2 = _closure1_slot1;
                                            var2 = var2[var4];
                                            var4 = var3.bind(var0)(var2);
                                            var3 = var4.addBreadcrumb;
                                            var2 = var1;
                                            var1 = {};
                                            var6 = var5.event;
                                            var1.event = var6;
                                            var6 = var5.name;
                                            var1.name = var6;
                                            var5 = var5.global;
                                            var1.global = var5;
                                            var1 = var3.bind(var4)(var2, var1);
                                        case 557:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var2 = var2.bind(var7)(var3, var6);
                            var2 = var4.bind(var5)(var2);
                        case 136:
                            var2 = _closure2_slot0;
                            var2 = var2.xhr;
                            if (!var2) {
                                _fun10982_ip = 195;
                                continue _fun10982
                            }
                        case 149:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var2 = 1;
                            var2 = var5[var2];
                            var6 = undefined;
                            var5 = var4.bind(var6)(var2);
                            var4 = var5.addXhrInstrumentationHandler;
                            var2 = function arg0() {
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var0 = function arg0() {
                                    _fun10988: for (var _fun10988_ip = 0;;) switch (_fun10988_ip) {
                                        case 0:
                                            var10 = arg0;
                                            var3 = _closure1_slot0;
                                            var0 = _closure1_slot1;
                                            var5 = 0;
                                            var2 = var0[var5];
                                            var0 = undefined;
                                            var3 = var3.bind(var0)(var2);
                                            var2 = var3.getClient;
                                            var3 = var2.bind(var3)();
                                            var2 = _closure4_slot0;
                                            if (!(var3 === var2)) {
                                                _fun10988_ip = 276;
                                                continue _fun10988
                                            }
                                        case 51:
                                            var7 = var10.startTimestamp;
                                            var3 = var10.endTimestamp;
                                            var4 = var10.xhr;
                                            var8 = _closure1_slot0;
                                            var9 = _closure1_slot1;
                                            var2 = 1;
                                            var2 = var9[var2];
                                            var2 = var8.bind(var0)(var2);
                                            var2 = var2.SENTRY_XHR_DATA_KEY;
                                            var2 = var4[var2];
                                            if (!var7) {
                                                _fun10988_ip = 276;
                                                continue _fun10988
                                            }
                                        case 105:
                                            if (!var3) {
                                                _fun10988_ip = 276;
                                                continue _fun10988
                                            }
                                        case 111:
                                            if (!var2) {
                                                _fun10988_ip = 276;
                                                continue _fun10988
                                            }
                                        case 117:
                                            var11 = var2.method;
                                            var4 = var2.url;
                                            var9 = var2.status_code;
                                            var8 = var2.body;
                                            var2 = {};
                                            var2.method = var11;
                                            var2.url = var4;
                                            var2.status_code = var9;
                                            var4 = {};
                                            var10 = var10.xhr;
                                            var4.xhr = var10;
                                            var4.input = var8;
                                            var4.startTimestamp = var7;
                                            var4.endTimestamp = var3;
                                            var3 = {
                                                'category': 'xhr',
                                                'data': null,
                                                'type': 'http'
                                            };
                                            var3.data = var2;
                                            var2 = _closure1_slot0;
                                            var1 = _closure1_slot1;
                                            var7 = var1[var5];
                                            var8 = var2.bind(var0)(var7);
                                            var7 = var8.getBreadcrumbLogLevelFromHttpStatusCode;
                                            var7 = var7.bind(var8)(var9);
                                            var3.level = var7;
                                            var8 = _closure4_slot0;
                                            var7 = var8.emit;
                                            var6 = 'beforeOutgoingRequestBreadcrumb';
                                            var6 = var7.bind(var8)(var6, var3, var4);
                                            var1 = var1[var5];
                                            var2 = var2.bind(var0)(var1);
                                            var1 = var2.addBreadcrumb;
                                            var1 = var1.bind(var2)(var3, var4);
                                        case 276:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var2 = var2.bind(var6)(var3);
                            var2 = var4.bind(var5)(var2);
                        case 195:
                            var2 = _closure2_slot0;
                            var2 = var2.fetch;
                            if (!var2) {
                                _fun10982_ip = 253;
                                continue _fun10982
                            }
                        case 208:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var2 = 0;
                            var2 = var5[var2];
                            var6 = undefined;
                            var5 = var4.bind(var6)(var2);
                            var4 = var5.addFetchInstrumentationHandler;
                            var2 = function arg0() {
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var0 = function arg0() {
                                    _fun10990: for (var _fun10990_ip = 0;;) switch (_fun10990_ip) {
                                        case 0:
                                            var8 = arg0;
                                            var3 = _closure1_slot0;
                                            var0 = _closure1_slot1;
                                            var5 = 0;
                                            var2 = var0[var5];
                                            var0 = undefined;
                                            var3 = var3.bind(var0)(var2);
                                            var2 = var3.getClient;
                                            var4 = var2.bind(var3)();
                                            var3 = _closure4_slot0;
                                            if (!(var4 === var3)) {
                                                _fun10990_ip = 492;
                                                continue _fun10990
                                            }
                                        case 51:
                                            var7 = var8.startTimestamp;
                                            var3 = var8.endTimestamp;
                                            if (!var3) {
                                                _fun10990_ip = 492;
                                                continue _fun10990
                                            }
                                        case 69:
                                            var4 = var8.fetchData;
                                            var9 = var4.url;
                                            var6 = var9.match;
                                            var4 = /sentry_key/;
                                            var4 = var6.bind(var9)(var4);
                                            if (!var4) {
                                                _fun10990_ip = 133;
                                                continue _fun10990
                                            }
                                        case 108:
                                            var4 = var8.fetchData;
                                            var6 = var4.method;
                                            var4 = 'POST';
                                            if (!(var4 !== var6)) {
                                                _fun10990_ip = 492;
                                                continue _fun10990
                                            }
                                        case 133:
                                            var4 = var8.fetchData;
                                            var4 = var4.method;
                                            var4 = var8.fetchData;
                                            var4 = var4.url;
                                            var4 = var8.error;
                                            if (var4) {
                                                _fun10990_ip = 386;
                                                continue _fun10990
                                            }
                                        case 167:
                                            var4 = var8.response;
                                            var6 = global;
                                            var13 = var6.Object;
                                            var12 = var13.assign;
                                            var11 = var8.fetchData;
                                            var10 = {};
                                            var6 = null;
                                            var14 = var6 == var4;
                                            var9 = undefined;
                                            if (var14) {
                                                _fun10990_ip = 210;
                                                continue _fun10990
                                            }
                                        case 205:
                                            var9 = var4.status;
                                        case 210:
                                            var10.status_code = var9;
                                            var9 = {};
                                            var11 = var12.bind(var13)(var9, var11, var10);
                                            var9 = var8.fetchData;
                                            var9 = var9.request_body_size;
                                            var9 = var8.fetchData;
                                            var9 = var9.response_body_size;
                                            if (!(var6 != var4)) {
                                                _fun10990_ip = 257;
                                                continue _fun10990
                                            }
                                        case 252:
                                            var6 = var4.status;
                                        case 257:
                                            var10 = {};
                                            var6 = var8.args;
                                            var10.input = var6;
                                            var10.response = var4;
                                            var10.startTimestamp = var7;
                                            var10.endTimestamp = var3;
                                            var9 = {
                                                'category': 'fetch',
                                                'data': null,
                                                'type': 'http'
                                            };
                                            var9.data = var11;
                                            var6 = _closure1_slot0;
                                            var4 = _closure1_slot1;
                                            var12 = var4[var5];
                                            var13 = var6.bind(var0)(var12);
                                            var12 = var13.getBreadcrumbLogLevelFromHttpStatusCode;
                                            var11 = var11.status_code;
                                            var11 = var12.bind(var13)(var11);
                                            var9.level = var11;
                                            var13 = _closure4_slot0;
                                            var12 = var13.emit;
                                            var11 = 'beforeOutgoingRequestBreadcrumb';
                                            var11 = var12.bind(var13)(var11, var9, var10);
                                            var4 = var4[var5];
                                            var6 = var6.bind(var0)(var4);
                                            var4 = var6.addBreadcrumb;
                                            var4 = var4.bind(var6)(var9, var10);
                                            _fun10990_ip = 492;
                                            continue _fun10990;
                                        case 386:
                                            var6 = var8.fetchData;
                                            var4 = {};
                                            var9 = var8.error;
                                            var4.data = var9;
                                            var8 = var8.args;
                                            var4.input = var8;
                                            var4.startTimestamp = var7;
                                            var4.endTimestamp = var3;
                                            var3 = {
                                                'category': 'fetch',
                                                'data': null,
                                                'level': 'error',
                                                'type': 'http'
                                            };
                                            var3.data = var6;
                                            var7 = _closure4_slot0;
                                            var6 = var7.emit;
                                            var2 = 'beforeOutgoingRequestBreadcrumb';
                                            var2 = var6.bind(var7)(var2, var3, var4);
                                            var2 = _closure1_slot0;
                                            var1 = _closure1_slot1;
                                            var1 = var1[var5];
                                            var2 = var2.bind(var0)(var1);
                                            var1 = var2.addBreadcrumb;
                                            var1 = var1.bind(var2)(var3, var4);
                                        case 492:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var2 = var2.bind(var6)(var3);
                            var2 = var4.bind(var5)(var2);
                        case 253:
                            var2 = _closure2_slot0;
                            var2 = var2.history;
                            if (!var2) {
                                _fun10982_ip = 312;
                                continue _fun10982
                            }
                        case 266:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var2 = 1;
                            var2 = var5[var2];
                            var6 = undefined;
                            var5 = var4.bind(var6)(var2);
                            var4 = var5.addHistoryInstrumentationHandler;
                            var2 = function arg0() {
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var0 = function arg0() {
                                    _fun10992: for (var _fun10992_ip = 0;;) switch (_fun10992_ip) {
                                        case 0:
                                            var2 = arg0;
                                            var5 = _closure1_slot0;
                                            var0 = _closure1_slot1;
                                            var3 = 0;
                                            var4 = var0[var3];
                                            var0 = undefined;
                                            var5 = var5.bind(var0)(var4);
                                            var4 = var5.getClient;
                                            var5 = var4.bind(var5)();
                                            var4 = _closure4_slot0;
                                            if (!(var5 === var4)) {
                                                _fun10992_ip = 341;
                                                continue _fun10992
                                            }
                                        case 51:
                                            var6 = var2.from;
                                            var5 = var2.to;
                                            var8 = _closure1_slot0;
                                            var9 = _closure1_slot1;
                                            var2 = var9[var3];
                                            var7 = var8.bind(var0)(var2);
                                            var4 = var7.parseUrl;
                                            var2 = 3;
                                            var2 = var9[var2];
                                            var2 = var8.bind(var0)(var2);
                                            var2 = var2.WINDOW;
                                            var2 = var2.location;
                                            var2 = var2.href;
                                            var7 = var4.bind(var7)(var2);
                                            var2 = undefined;
                                            if (!var6) {
                                                _fun10992_ip = 151;
                                                continue _fun10992
                                            }
                                        case 123:
                                            var8 = _closure1_slot0;
                                            var4 = _closure1_slot1;
                                            var4 = var4[var3];
                                            var8 = var8.bind(var0)(var4);
                                            var4 = var8.parseUrl;
                                            var2 = var4.bind(var8)(var6);
                                        case 151:
                                            var8 = _closure1_slot0;
                                            var4 = _closure1_slot1;
                                            var4 = var4[var3];
                                            var8 = var8.bind(var0)(var4);
                                            var4 = var8.parseUrl;
                                            var4 = var4.bind(var8)(var5);
                                            var8 = null;
                                            var8 = var8 != var2;
                                            if (!var8) {
                                                _fun10992_ip = 194;
                                                continue _fun10992
                                            }
                                        case 188:
                                            var8 = var2.path;
                                        case 194:
                                            if (var8) {
                                                _fun10992_ip = 200;
                                                continue _fun10992
                                            }
                                        case 197:
                                            var2 = var7;
                                        case 200:
                                            var9 = var7.protocol;
                                            var8 = var4.protocol;
                                            var8 = var9 === var8;
                                            if (!var8) {
                                                _fun10992_ip = 235;
                                                continue _fun10992
                                            }
                                        case 219:
                                            var10 = var7.host;
                                            var9 = var4.host;
                                            var8 = var10 === var9;
                                        case 235:
                                            if (!var8) {
                                                _fun10992_ip = 244;
                                                continue _fun10992
                                            }
                                        case 238:
                                            var5 = var4.relative;
                                        case 244:
                                            var8 = var7.protocol;
                                            var4 = var2.protocol;
                                            var4 = var8 === var4;
                                            if (!var4) {
                                                _fun10992_ip = 279;
                                                continue _fun10992
                                            }
                                        case 263:
                                            var8 = var7.host;
                                            var7 = var2.host;
                                            var4 = var8 === var7;
                                        case 279:
                                            if (!var4) {
                                                _fun10992_ip = 288;
                                                continue _fun10992
                                            }
                                        case 282:
                                            var6 = var2.relative;
                                        case 288:
                                            var2 = _closure1_slot0;
                                            var1 = _closure1_slot1;
                                            var1 = var1[var3];
                                            var3 = var2.bind(var0)(var1);
                                            var2 = var3.addBreadcrumb;
                                            var1 = {};
                                            var4 = 'navigation';
                                            var1.category = var4;
                                            var4 = {};
                                            var4.from = var6;
                                            var4.to = var5;
                                            var1.data = var4;
                                            var1 = var2.bind(var3)(var1);
                                        case 341:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var2 = var2.bind(var6)(var3);
                            var2 = var4.bind(var5)(var2);
                        case 312:
                            var1 = _closure2_slot0;
                            var1 = var1.sentry;
                            if (!var1) {
                                _fun10982_ip = 355;
                                continue _fun10982
                            }
                        case 325:
                            var2 = var3.on;
                            var1 = function arg0() {
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var0 = function arg0() {
                                    _fun10994: for (var _fun10994_ip = 0;;) switch (_fun10994_ip) {
                                        case 0:
                                            var5 = arg0;
                                            var3 = _closure1_slot0;
                                            var0 = _closure1_slot1;
                                            var7 = 0;
                                            var2 = var0[var7];
                                            var0 = undefined;
                                            var3 = var3.bind(var0)(var2);
                                            var2 = var3.getClient;
                                            var3 = var2.bind(var3)();
                                            var2 = _closure4_slot0;
                                            if (!(var3 === var2)) {
                                                _fun10994_ip = 178;
                                                continue _fun10994
                                            }
                                        case 51:
                                            var3 = _closure1_slot0;
                                            var2 = _closure1_slot1;
                                            var2 = var2[var7];
                                            var4 = var3.bind(var0)(var2);
                                            var3 = var4.addBreadcrumb;
                                            var2 = {};
                                            var9 = var5.type;
                                            var8 = 'event';
                                            var6 = 'transaction';
                                            if (!(var6 === var9)) {
                                                _fun10994_ip = 96;
                                                continue _fun10994
                                            }
                                        case 93:
                                            var8 = var6;
                                        case 96:
                                            var6 = 'sentry.';
                                            var6 = var6 + var8;
                                            var2.category = var6;
                                            var6 = var5.event_id;
                                            var2.event_id = var6;
                                            var6 = var5.level;
                                            var2.level = var6;
                                            var6 = _closure1_slot0;
                                            var1 = _closure1_slot1;
                                            var1 = var1[var7];
                                            var6 = var6.bind(var0)(var1);
                                            var1 = var6.getEventDescription;
                                            var1 = var1.bind(var6)(var5);
                                            var2.message = var1;
                                            var1 = {};
                                            var1.event = var5;
                                            var1 = var3.bind(var4)(var2, var1);
                                        case 178:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var0 = undefined;
                            var1 = var1.bind(var0)(var3);
                            var0 = 'beforeSendEvent';
                            var0 = var2.bind(var3)(var0, var1);
                        case 355:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.setup = var1;
                return var0;
        }
    };
    var1 = var3.bind(var4)(var1);
    var2.breadcrumbsIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [817, 1030, 1073, 1025]);