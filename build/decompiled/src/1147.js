// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var10 = require;
    var2 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var11;
    var8 = function arg0, arg1() {
        _fun12473: for (var _fun12473_ip = 0;;) switch (_fun12473_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var7 = var1.children;
                if (var7) {
                    _fun12473_ip = 20;
                    continue _fun12473
                }
            case 16:
                var7 = new Array(0);
            case 20:
                var _closure2_slot0 = var7;
                var2 = var3.filter;
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var2 = _closure2_slot0;
                    var1 = var2.some;
                    var0 = function(arg0) { // Environment: var0
                        _fun12475: for (var _fun12475_ip = 0;;) switch (_fun12475_ip) {
                            case 0:
                                var3 = arg0;
                                var0 = _closure3_slot0;
                                var0 = var3 === var0;
                                if (var0) {
                                    _fun12475_ip = 53;
                                    continue _fun12475
                                }
                            case 17:
                                var1 = _closure3_slot0;
                                var1 = var1.path;
                                if (!var1) {
                                    _fun12475_ip = 50;
                                    continue _fun12475
                                }
                            case 30:
                                var5 = var3.path;
                                var4 = _closure3_slot0;
                                var4 = var4.path;
                                var1 = var5 === var4;
                            case 50:
                                var0 = var1;
                            case 53:
                                if (var0) {
                                    _fun12475_ip = 89;
                                    continue _fun12475
                                }
                            case 56:
                                var1 = _closure3_slot0;
                                var1 = var1.id;
                                if (!var1) {
                                    _fun12475_ip = 86;
                                    continue _fun12475
                                }
                            case 68:
                                var3 = var3.id;
                                var2 = _closure3_slot0;
                                var2 = var2.id;
                                var1 = var3 === var2;
                            case 86:
                                var0 = var1;
                            case 89:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var6 = var2.bind(var3)(var0);
                var2 = var6.length;
                var0 = 0;
                if (!(var2 > var0)) {
                    _fun12473_ip = 94;
                    continue _fun12473
                }
            case 50:
                var4 = new Array(0);
                var3 = var4.concat;
                var2 = _closure1_slot5;
                var5 = undefined;
                var2 = var2.bind(var5)(var7);
                var0 = _closure1_slot5;
                var0 = var0.bind(var5)(var6);
                var0 = var3.bind(var4)(var2, var0);
                var1.children = var0;
            case 94:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot16 = var8;
    var0 = function arg0, arg1() {
        _fun12476: for (var _fun12476_ip = 0;;) switch (_fun12476_ip) {
            case 0:
                var1 = arg0;
                var3 = arg1;
                var2 = var1.historyAction;
                var0 = 'PUSH';
                var0 = var0 === var2;
                if (var0) {
                    _fun12476_ip = 46;
                    continue _fun12476
                }
            case 23:
                var4 = var1.historyAction;
                var2 = 'POP';
                var2 = var2 === var4;
                if (!var2) {
                    _fun12476_ip = 43;
                    continue _fun12476
                }
            case 40:
                var2 = var3;
            case 43:
                var0 = var2;
            case 46:
                if (!var0) {
                    _fun12476_ip = 68;
                    continue _fun12476
                }
            case 49:
                var1 = var1.navigation;
                var2 = var1.state;
                var1 = 'idle';
                var0 = var1 === var2;
            case 68:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var3 = function arg0, arg1() {
        _fun12477: for (var _fun12477_ip = 0;;) switch (_fun12477_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var0 = undefined;
                var5 = undefined;
                var1 = arguments.length;
                var2 = 2;
                var6 = var1 > var2;
                var1 = null;
                if (!var6) {
                    _fun12477_ip = 39;
                    continue _fun12477
                }
            case 25:
                var6 = arguments[var2];
                var1 = null;
                if (!(var0 !== var6)) {
                    _fun12477_ip = 39;
                    continue _fun12477
                }
            case 35:
                var1 = arguments[var2];
            case 39:
                var5 = var4.forEach;
                var2 = function(arg0) { // Environment: var2
                    _fun12478: for (var _fun12478_ip = 0;;) switch (_fun12478_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure1_slot15;
                            var1 = var2.add;
                            var1 = var1.bind(var2)(var3);
                            var1 = _closure1_slot12;
                            if (!var1) {
                                _fun12478_ip = 65;
                                continue _fun12478
                            }
                        case 27:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 5;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            var1 = var2.checkRouteForAsyncHandler;
                            var0 = _closure1_slot18;
                            var0 = var1.bind(var2)(var3, var0);
                        case 65:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var5.bind(var4)(var2);
                if (!var3) {
                    _fun12477_ip = 72;
                    continue _fun12477
                }
            case 59:
                var2 = _closure1_slot16;
                var2 = var2.bind(var0)(var4, var3);
            case 72:
                var2 = _closure1_slot27;
                var4 = var2.bind(var0)();
                if (!var4) {
                    _fun12477_ip = 372;
                    continue _fun12477
                }
            case 89:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 6;
                var2 = var6[var2];
                var5 = var5.bind(var0)(var2);
                var2 = var5.spanToJSON;
                var2 = var2.bind(var5)(var4);
                var2 = var2.op;
                var5 = var1;
                if (var5) {
                    _fun12477_ip = 214;
                    continue _fun12477
                }
            case 131:
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var8 = 7;
                var6 = var6[var8];
                var6 = var7.bind(var0)(var6);
                var6 = var6.WINDOW;
                var5 = var1;
                if (!(var0 !== var6)) {
                    _fun12477_ip = 214;
                    continue _fun12477
                }
            case 164:
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var8];
                var6 = var7.bind(var0)(var6);
                var6 = var6.WINDOW;
                var6 = var6.location;
                var5 = var1;
                if (!var6) {
                    _fun12477_ip = 214;
                    continue _fun12477
                }
            case 198:
                var1 = {};
                var6 = var6.pathname;
                var1.pathname = var6;
                var5 = var1;
            case 214:
                if (!var5) {
                    _fun12477_ip = 372;
                    continue _fun12477
                }
            case 220:
                var1 = 'pageload';
                if (!(var1 !== var2)) {
                    _fun12477_ip = 287;
                    continue _fun12477
                }
            case 230:
                var1 = 'navigation';
                if (!(var1 === var2)) {
                    _fun12477_ip = 372;
                    continue _fun12477
                }
            case 241:
                var7 = _closure1_slot19;
                var1 = global;
                var6 = var1.Array;
                var2 = var6.from;
                var1 = _closure1_slot15;
                var11 = var2.bind(var6)(var1);
                var9 = _closure1_slot10;
                var10 = false;
                var14 = undefined;
                var13 = var4;
                var12 = var5;
                var1 = var14[var7](var13, var12, var11, var10, var9, var8);
                _fun12477_ip = 372;
                continue _fun12477;
            case 287:
                var2 = _closure1_slot25;
                var1 = {};
                var1.activeRootSpan = var4;
                var4 = {};
                var5 = var5.pathname;
                var4.pathname = var5;
                var1.location = var4;
                var4 = global;
                var7 = var4.Array;
                var6 = var7.from;
                var5 = _closure1_slot15;
                var5 = var6.bind(var7)(var5);
                var1.routes = var5;
                var5 = var4.Array;
                var4 = var5.from;
                var3 = _closure1_slot15;
                var3 = var4.bind(var5)(var3);
                var1.allRoutes = var3;
                var1 = var2.bind(var0)(var1);
            case 372:
                return var0;
        }
    };
    var _closure1_slot18 = var3;
    var1 = function arg0, arg1, arg2() {
        _fun12479: for (var _fun12479_ip = 0;;) switch (_fun12479_ip) {
            case 0:
                var5 = arg0;
                var8 = arg1;
                var7 = arg2;
                var0 = undefined;
                var3 = undefined;
                var1 = arguments.length;
                var2 = 4;
                var4 = var1 > var2;
                var1 = undefined;
                if (!var4) {
                    _fun12479_ip = 32;
                    continue _fun12479
                }
            case 28:
                var1 = arguments[var2];
            case 32:
                var4 = arguments.length;
                var2 = 3;
                if (!(var4 > var2)) {
                    _fun12479_ip = 57;
                    continue _fun12479
                }
            case 42:
                var4 = arguments[var2];
                if (!(var0 !== var4)) {
                    _fun12479_ip = 57;
                    continue _fun12479
                }
            case 50:
                var2 = arguments[var2];
                if (var2) {
                    _fun12479_ip = 80;
                    continue _fun12479
                }
            case 57:
                var2 = null;
                var3 = var2 == var5;
                var2 = undefined;
                if (var3) {
                    _fun12479_ip = 74;
                    continue _fun12479
                }
            case 68:
                var2 = var5.__sentry_navigation_name_set__;
            case 74:
                if (var2) {
                    _fun12479_ip = 297;
                    continue _fun12479
                }
            case 80:
                var2 = var1.bind(var0)(var7, var8);
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 8;
                var3 = var6[var3];
                var6 = var4.bind(var0)(var3);
                var4 = var6.resolveRouteNameAndSource;
                var3 = var2;
                if (var3) {
                    _fun12479_ip = 125;
                    continue _fun12479
                }
            case 121:
                var3 = new Array(0);
            case 125:
                var9 = '';
                var14 = var6;
                var13 = var8;
                var12 = var7;
                var11 = var7;
                var10 = var3;
                var4 = var14[var4](var13, var12, var11, var10, var9, var8);
                var3 = _closure1_slot4;
                var2 = 2;
                var3 = var3.bind(var0)(var4, var2);
                var2 = 0;
                var4 = var3[var2];
                var2 = 1;
                var7 = var3[var2];
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var3 = 6;
                var2 = var2[var3];
                var6 = var6.bind(var0)(var2);
                var2 = var6.spanToJSON;
                var6 = var2.bind(var6)(var5);
                var2 = var4;
                if (!var2) {
                    _fun12479_ip = 220;
                    continue _fun12479
                }
            case 211:
                var6 = var6.timestamp;
                var2 = !var6;
            case 220:
                if (!var2) {
                    _fun12479_ip = 297;
                    continue _fun12479
                }
            case 223:
                var2 = var5.updateName;
                var2 = var2.bind(var5)(var4);
                var6 = var5.setAttribute;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var4 = var1[var3];
                var4 = var2.bind(var0)(var4);
                var4 = var4.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                var4 = var6.bind(var5)(var4, var7);
                var1 = var1[var3];
                var4 = var2.bind(var0)(var1);
                var3 = var4.addNonEnumerableProperty;
                var2 = '__sentry_navigation_name_set__';
                var1 = true;
                var1 = var3.bind(var4)(var5, var2, var1);
            case 297:
                return var0;
        }
    };
    var _closure1_slot19 = var1;
    var0 = function arg0() {
        _fun12480: for (var _fun12480_ip = 0;;) switch (_fun12480_ip) {
            case 0:
                var0 = arg0;
                var7 = undefined;
                var4 = undefined;
                var2 = arguments.length;
                var3 = 1;
                var2 = var2 > var3;
                if (!var2) {
                    _fun12480_ip = 30;
                    continue _fun12480
                }
            case 22:
                var5 = arguments[var3];
                var2 = var7 !== var5;
            case 30:
                if (!var2) {
                    _fun12480_ip = 37;
                    continue _fun12480
                }
            case 33:
                var2 = arguments[var3];
            case 37:
                var _closure2_slot0 = var2;
                if (!var0) {
                    _fun12480_ip = 139;
                    continue _fun12480
                }
            case 44:
                var2 = 'patchRoutesOnNavigation';
                var2 = var2 in var0;
                if (!var2) {
                    _fun12480_ip = 139;
                    continue _fun12480
                }
            case 55:
                var2 = var0.patchRoutesOnNavigation;
                var3 = 'function';
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun12480_ip = 139;
                    continue _fun12480
                }
            case 72:
                var2 = var0.patchRoutesOnNavigation;
                var _closure2_slot2 = var2;
                var2 = global;
                var4 = var2.Object;
                var3 = var4.assign;
                var2 = {};
                var6 = _closure1_slot2;
                var5 = function*(arg0) { // Environment: var1
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun12482: for (var _fun12482_ip = 0;;) switch (_fun12482_ip) {
                            case 0:
                                StartGenerator();
                                var2 = arg0;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun12482_ip = 315;
                                    continue _fun12482
                                }
                            case 15:
                                var8 = undefined;
                                var _closure4_slot0 = var8;
                                var _closure4_slot1 = var8;
                                var5 = null;
                                var3 = var5 == var2;
                                var6 = undefined;
                                if (var3) {
                                    _fun12482_ip = 42;
                                    continue _fun12482
                                }
                            case 36:
                                var6 = var2.path;
                            case 42:
                                _closure4_slot0 = var6;
                                var4 = _closure2_slot0;
                                if (var4) {
                                    _fun12482_ip = 89;
                                    continue _fun12482
                                }
                            case 56:
                                var7 = var5 == var2;
                                var4 = undefined;
                                if (var7) {
                                    _fun12482_ip = 71;
                                    continue _fun12482
                                }
                            case 65:
                                var4 = var2.patch;
                            case 71:
                                _closure4_slot1 = var4;
                                if (!var4) {
                                    _fun12482_ip = 89;
                                    continue _fun12482
                                }
                            case 78:
                                var1 = function(arg0, arg1) { // Environment: var1
                                    _fun12483: for (var _fun12483_ip = 0;;) switch (_fun12483_ip) {
                                        case 0:
                                            var3 = arg1;
                                            var1 = _closure1_slot23;
                                            var2 = undefined;
                                            var1 = var1.bind(var2)(var3);
                                            var1 = _closure1_slot27;
                                            var7 = var1.bind(var2)();
                                            var1 = var7;
                                            if (!var1) {
                                                _fun12483_ip = 75;
                                                continue _fun12483
                                            }
                                        case 31:
                                            var5 = _closure1_slot0;
                                            var6 = _closure1_slot1;
                                            var4 = 6;
                                            var4 = var6[var4];
                                            var5 = var5.bind(var2)(var4);
                                            var4 = var5.spanToJSON;
                                            var4 = var4.bind(var5)(var7);
                                            var5 = var4.op;
                                            var4 = 'navigation';
                                            var1 = var4 === var5;
                                        case 75:
                                            if (!var1) {
                                                _fun12483_ip = 145;
                                                continue _fun12483
                                            }
                                        case 78:
                                            var6 = _closure1_slot19;
                                            var5 = {
                                                'pathname': null,
                                                'search': '',
                                                'hash': '',
                                                'state': null,
                                                'key': 'default'
                                            };
                                            var1 = _closure4_slot0;
                                            var5.pathname = var1;
                                            var1 = global;
                                            var8 = var1.Array;
                                            var4 = var8.from;
                                            var1 = _closure1_slot15;
                                            var11 = var4.bind(var8)(var1);
                                            var9 = _closure1_slot10;
                                            var10 = true;
                                            var14 = undefined;
                                            var13 = var7;
                                            var12 = var5;
                                            var0 = var14[var6](var13, var12, var11, var10, var9, var8);
                                        case 145:
                                            var1 = _closure4_slot1;
                                            var0 = arg0;
                                            var0 = var1.bind(var2)(var0, var3);
                                            return var0;
                                    }
                                };
                                var2.patch = var1;
                            case 89:
                                var1 = _closure2_slot2;
                                var1 = var1.bind(var8)(var2);
                                SaveGenerator(address = 102);
                            case 100:
                                return var1;
                            case 102:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun12482_ip = 312;
                                    continue _fun12482
                                }
                            case 111:
                                var4 = _closure1_slot27;
                                var7 = var4.bind(var8)();
                                var4 = var7;
                                if (!var4) {
                                    _fun12482_ip = 172;
                                    continue _fun12482
                                }
                            case 128:
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot1;
                                var9 = 6;
                                var9 = var11[var9];
                                var10 = var10.bind(var8)(var9);
                                var9 = var10.spanToJSON;
                                var9 = var9.bind(var10)(var7);
                                var10 = var9.op;
                                var9 = 'navigation';
                                var4 = var9 === var10;
                            case 172:
                                if (!var4) {
                                    _fun12482_ip = 309;
                                    continue _fun12482
                                }
                            case 178:
                                var4 = _closure2_slot0;
                                var3 = var6;
                                if (var4) {
                                    _fun12482_ip = 246;
                                    continue _fun12482
                                }
                            case 188:
                                var4 = var6;
                                if (var6) {
                                    _fun12482_ip = 243;
                                    continue _fun12482
                                }
                            case 194:
                                var9 = _closure1_slot0;
                                var10 = _closure1_slot1;
                                var6 = 7;
                                var6 = var10[var6];
                                var6 = var9.bind(var8)(var6);
                                var6 = var6.WINDOW;
                                var6 = var6.location;
                                var9 = var5 == var6;
                                var5 = undefined;
                                if (var9) {
                                    _fun12482_ip = 240;
                                    continue _fun12482
                                }
                            case 234:
                                var5 = var6.pathname;
                            case 240:
                                var4 = var5;
                            case 243:
                                var3 = var4;
                            case 246:
                                if (!var3) {
                                    _fun12482_ip = 309;
                                    continue _fun12482
                                }
                            case 249:
                                var6 = _closure1_slot19;
                                var5 = {
                                    'pathname': null,
                                    'search': '',
                                    'hash': '',
                                    'state': null,
                                    'key': 'default'
                                };
                                var5.pathname = var3;
                                var3 = global;
                                var9 = var3.Array;
                                var4 = var9.from;
                                var3 = _closure1_slot15;
                                var14 = var4.bind(var9)(var3);
                                var12 = _closure1_slot10;
                                var13 = false;
                                var17 = undefined;
                                var16 = var7;
                                var15 = var5;
                                var2 = var17[var6](var16, var15, var14, var13, var12, var11);
                            case 309:
                                return var1;
                            case 312:
                                return var1;
                            case 315:
                                return var0;
                        }
                    };
                    return var0;
                };
                var5 = var6.bind(var7)(var5);
                var _closure2_slot1 = var5;
                var1 = function arg0() {
                    var0 = undefined;
                    var3 = _closure2_slot1;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var2.patchRoutesOnNavigation = var1;
                var1 = {};
                var1 = var3.bind(var4)(var1, var0, var2);
                return var1;
            case 139:
                if (var0) {
                    _fun12480_ip = 144;
                    continue _fun12480
                }
            case 142:
                var0 = {};
            case 144:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function arg0() {
        _fun12485: for (var _fun12485_ip = 0;;) switch (_fun12485_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.client;
                var _closure2_slot0 = var5;
                var3 = var0.name;
                var18 = var0.source;
                var17 = var0.version;
                var8 = var0.location;
                var7 = var0.routes;
                var6 = var0.basename;
                var1 = var0.allRoutes;
                var11 = var0.navigationKey;
                var _closure2_slot1 = var11;
                var13 = _closure1_slot0;
                var16 = _closure1_slot1;
                var0 = 7;
                var0 = var16[var0];
                var4 = undefined;
                var10 = var13.bind(var4)(var0);
                var9 = var10.startBrowserTracingNavigationSpan;
                var0 = {};
                var0.name = var3;
                var15 = _closure1_slot3;
                var12 = 6;
                var3 = var16[var12];
                var3 = var13.bind(var4)(var3);
                var14 = var3.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                var3 = {};
                var18 = var15.bind(var4)(var3, var14, var18);
                var3 = var16[var12];
                var3 = var13.bind(var4)(var3);
                var14 = var3.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                var3 = 'navigation';
                var14 = var15.bind(var4)(var18, var14, var3);
                var12 = var16[var12];
                var12 = var13.bind(var4)(var12);
                var13 = var12.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                var12 = global;
                var12 = var12.HermesInternal;
                var16 = var12.concat;
                var12 = 'auto.navigation.react.reactrouter_v';
                var12 = var16.bind(var12)(var17);
                var12 = var15.bind(var4)(var14, var13, var12);
                var0.attributes = var12;
                var0 = var9.bind(var10)(var5, var0);
                var _closure2_slot2 = var0;
                if (!var0) {
                    _fun12485_ip = 291;
                    continue _fun12485
                }
            case 222:
                var10 = _closure1_slot14;
                var9 = var10.set;
                var9 = var9.bind(var10)(var5, var11);
                var1 = _closure1_slot26;
                var25 = undefined;
                var24 = var0;
                var23 = var8;
                var22 = var7;
                var21 = var6;
                var20 = undefined;
                var19 = var3;
                var1 = var25[var1](var24, var23, var22, var21, var20, var19, var18);
                var4 = var5.on;
                var3 = 'spanEnd';
                var1 = function(arg0) { // Environment: var2
                    _fun12486: for (var _fun12486_ip = 0;;) switch (_fun12486_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = arg0;
                            if (!(var1 === var2)) {
                                _fun12486_ip = 71;
                                continue _fun12486
                            }
                        case 14:
                            var4 = _closure1_slot14;
                            var3 = var4.get;
                            var2 = _closure2_slot0;
                            var3 = var3.bind(var4)(var2);
                            var2 = _closure2_slot1;
                            if (!(var3 === var2)) {
                                _fun12486_ip = 61;
                                continue _fun12486
                            }
                        case 43:
                            var3 = _closure1_slot14;
                            var2 = var3.delete;
                            var1 = _closure2_slot0;
                            var1 = var2.bind(var3)(var1);
                        case 61:
                            var1 = _closure2_slot3;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 71:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var4.bind(var5)(var3, var1);
                var _closure2_slot3 = var1;
            case 291:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var4 = function arg0() {
        _fun12487: for (var _fun12487_ip = 0;;) switch (_fun12487_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.location;
                var10 = var0.routes;
                var4 = var0.navigationType;
                var12 = var0.version;
                var1 = var0.matches;
                var9 = var0.basename;
                var8 = var0.allRoutes;
                var2 = global;
                var3 = var2.Array;
                var0 = var3.isArray;
                var0 = var0.bind(var3)(var1);
                var14 = var1;
                if (var0) {
                    _fun12487_ip = 93;
                    continue _fun12487
                }
            case 68:
                var3 = _closure1_slot10;
                var1 = var8;
                if (var8) {
                    _fun12487_ip = 84;
                    continue _fun12487
                }
            case 81:
                var1 = var10;
            case 84:
                var0 = undefined;
                var14 = var3.bind(var0)(var1, var11, var9);
            case 93:
                var5 = _closure1_slot0;
                var0 = _closure1_slot1;
                var6 = 6;
                var3 = var0[var6];
                var0 = undefined;
                var5 = var5.bind(var0)(var3);
                var3 = var5.getClient;
                var13 = var3.bind(var5)();
                if (!var13) {
                    _fun12487_ip = 642;
                    continue _fun12487
                }
            case 134:
                var5 = _closure1_slot13;
                var3 = var5.has;
                var3 = var3.bind(var5)(var13);
                if (!var3) {
                    _fun12487_ip = 642;
                    continue _fun12487
                }
            case 154:
                var3 = _closure1_slot27;
                var7 = var3.bind(var0)();
                if (!var7) {
                    _fun12487_ip = 219;
                    continue _fun12487
                }
            case 165:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var6];
                var5 = var5.bind(var0)(var3);
                var3 = var5.spanToJSON;
                var3 = var3.bind(var5)(var7);
                var5 = var3.op;
                var3 = 'pageload';
                if (!(var3 === var5)) {
                    _fun12487_ip = 219;
                    continue _fun12487
                }
            case 208:
                var3 = 'POP';
                if (!(var3 !== var4)) {
                    _fun12487_ip = 642;
                    continue _fun12487
                }
            case 219:
                var3 = 'PUSH';
                if (!(var3 !== var4)) {
                    _fun12487_ip = 238;
                    continue _fun12487
                }
            case 227:
                var3 = 'POP';
                if (!(var3 === var4)) {
                    _fun12487_ip = 642;
                    continue _fun12487
                }
            case 238:
                if (!var14) {
                    _fun12487_ip = 642;
                    continue _fun12487
                }
            case 244:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 8;
                var3 = var5[var3];
                var7 = var4.bind(var0)(var3);
                var5 = var7.resolveRouteNameAndSource;
                var4 = var8;
                if (var8) {
                    _fun12487_ip = 279;
                    continue _fun12487
                }
            case 276:
                var4 = var10;
            case 279:
                var3 = var8;
                if (var3) {
                    _fun12487_ip = 288;
                    continue _fun12487
                }
            case 285:
                var3 = var10;
            case 288:
                var21 = var7;
                var20 = var11;
                var19 = var4;
                var18 = var3;
                var17 = var14;
                var16 = var9;
                var5 = var21[var5](var20, var19, var18, var17, var16, var15);
                var4 = _closure1_slot4;
                var3 = 2;
                var4 = var4.bind(var0)(var5, var3);
                var3 = 0;
                var5 = var4[var3];
                var3 = 1;
                var4 = var4[var3];
                var15 = var11.pathname;
                var14 = var11.search;
                var7 = var11.hash;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = '';
                var7 = var3.bind(var2)(var15, var14, var7);
                var3 = _closure1_slot14;
                var2 = var3.get;
                var2 = var2.bind(var3)(var13);
                if (!(var2 !== var7)) {
                    _fun12487_ip = 451;
                    continue _fun12487
                }
            case 393:
                var3 = _closure1_slot21;
                var2 = {};
                var2.client = var13;
                var2.name = var5;
                var2.source = var4;
                var2.version = var12;
                var2.location = var11;
                var2.routes = var10;
                var2.basename = var9;
                var2.allRoutes = var8;
                var2.navigationKey = var7;
                var2 = var3.bind(var0)(var2);
                _fun12487_ip = 642;
                continue _fun12487;
            case 451:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var3 = var3.bind(var0)(var2);
                var2 = var3.getActiveSpan;
                var3 = var2.bind(var3)();
                var7 = var3;
                if (!var3) {
                    _fun12487_ip = 512;
                    continue _fun12487
                }
            case 484:
                var8 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var8 = var8.bind(var0)(var2);
                var2 = var8.spanToJSON;
                var7 = var2.bind(var8)(var3);
            case 512:
                var2 = null;
                var8 = var2 == var7;
                var9 = undefined;
                if (var8) {
                    _fun12487_ip = 528;
                    continue _fun12487
                }
            case 523:
                var9 = var7.op;
            case 528:
                var8 = 'navigation';
                var8 = var8 === var9;
                if (!var8) {
                    _fun12487_ip = 542;
                    continue _fun12487
                }
            case 539:
                var8 = var3;
            case 542:
                if (!var8) {
                    _fun12487_ip = 642;
                    continue _fun12487
                }
            case 545:
                var8 = var2 == var7;
                var2 = undefined;
                if (var8) {
                    _fun12487_ip = 559;
                    continue _fun12487
                }
            case 554:
                var2 = var7.description;
            case 559:
                var8 = /\\/: [a - zA - Z0 - 9_] + /;
                var7 = var8.test;
                var7 = var7.bind(var8)(var5);
                var2 = var5 !== var2;
                if (!var2) {
                    _fun12487_ip = 593;
                    continue _fun12487
                }
            case 590:
                var2 = var7;
            case 593:
                if (!var2) {
                    _fun12487_ip = 642;
                    continue _fun12487
                }
            case 596:
                var2 = var3.updateName;
                var2 = var2.bind(var3)(var5);
                var2 = var3.setAttribute;
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var1 = var5.bind(var0)(var1);
                var1 = var1.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                var1 = var2.bind(var3)(var1, var4);
            case 642:
                return var0;
        }
    };
    var _closure1_slot22 = var4;
    var7 = function arg0() {
        var2 = arg0;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot24;
            var0 = undefined;
            var1 = arg0;
            var3 = var2.bind(var0)(var1);
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var1
                var2 = _closure1_slot15;
                var1 = var2.add;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot23 = var7;
    var0 = function arg0() {
        _fun12491: for (var _fun12491_ip = 0;;) switch (_fun12491_ip) {
            case 0:
                var2 = arg0;
                var5 = undefined;
                var4 = undefined;
                var0 = arguments.length;
                var3 = 1;
                if (!(var0 > var3)) {
                    _fun12491_ip = 27;
                    continue _fun12491
                }
            case 19:
                var0 = arguments[var3];
                if (!(var5 === var0)) {
                    _fun12491_ip = 57;
                    continue _fun12491
                }
            case 27:
                var0 = global;
                var0 = var0.Set;
                var5 = var0.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var0
                    }
                });
                var7 = var5;
                var0 = new var7[var0](var6);
                var0 = var0 instanceof Object ? var0 : var5;
                _fun12491_ip = 61;
                continue _fun12491;
            case 57:
                var0 = arguments[var3];
            case 61:
                var _closure2_slot0 = var0;
                var3 = var0.has;
                var3 = var3.bind(var0)(var2);
                if (var3) {
                    _fun12491_ip = 127;
                    continue _fun12491
                }
            case 78:
                var3 = var0.add;
                var3 = var3.bind(var0)(var2);
                var3 = var2.children;
                if (!var3) {
                    _fun12491_ip = 104;
                    continue _fun12491
                }
            case 96:
                var4 = var2.index;
                var3 = !var4;
            case 104:
                if (!var3) {
                    _fun12491_ip = 127;
                    continue _fun12491
                }
            case 107:
                var3 = var2.children;
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    var3 = _closure1_slot24;
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var1 = arg0;
                    var3 = var3.bind(var0)(var1, var2);
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        var2 = _closure2_slot0;
                        var1 = var2.add;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
            case 127:
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function arg0() {
        _fun12494: for (var _fun12494_ip = 0;;) switch (_fun12494_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.activeRootSpan;
                var5 = var0.location;
                var4 = var0.routes;
                var1 = var0.matches;
                var3 = var0.basename;
                var10 = var0.allRoutes;
                var0 = global;
                var2 = var0.Array;
                var0 = var2.isArray;
                var0 = var0.bind(var2)(var1);
                var9 = var1;
                if (var0) {
                    _fun12494_ip = 87;
                    continue _fun12494
                }
            case 62:
                var2 = _closure1_slot10;
                var1 = var10;
                if (var10) {
                    _fun12494_ip = 78;
                    continue _fun12494
                }
            case 75:
                var1 = var4;
            case 78:
                var0 = undefined;
                var9 = var2.bind(var0)(var1, var5, var3);
            case 87:
                if (!var9) {
                    _fun12494_ip = 317;
                    continue _fun12494
                }
            case 93:
                var7 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 8;
                var1 = var2[var1];
                var2 = undefined;
                var8 = var7.bind(var2)(var1);
                var7 = var8.resolveRouteNameAndSource;
                var1 = var10;
                if (var10) {
                    _fun12494_ip = 133;
                    continue _fun12494
                }
            case 130:
                var1 = var4;
            case 133:
                if (var10) {
                    _fun12494_ip = 139;
                    continue _fun12494
                }
            case 136:
                var10 = var4;
            case 139:
                var19 = var8;
                var18 = var5;
                var17 = var1;
                var16 = var10;
                var15 = var9;
                var14 = var3;
                var8 = var19[var7](var18, var17, var16, var15, var14, var13);
                var7 = _closure1_slot4;
                var1 = 2;
                var8 = var7.bind(var2)(var8, var1);
                var1 = 0;
                var7 = var8[var1];
                var1 = 1;
                var8 = var8[var1];
                var9 = _closure1_slot0;
                var1 = _closure1_slot1;
                var10 = 6;
                var1 = var1[var10];
                var9 = var9.bind(var2)(var1);
                var1 = var9.getCurrentScope;
                var11 = var1.bind(var9)();
                var9 = var11.setTransactionName;
                var1 = var7;
                if (var1) {
                    _fun12494_ip = 233;
                    continue _fun12494
                }
            case 229:
                var1 = '/';
            case 233:
                var1 = var9.bind(var11)(var1);
                if (!var6) {
                    _fun12494_ip = 317;
                    continue _fun12494
                }
            case 241:
                var1 = var6.updateName;
                var1 = var1.bind(var6)(var7);
                var7 = var6.setAttribute;
                var9 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var10];
                var1 = var9.bind(var2)(var1);
                var1 = var1.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                var1 = var7.bind(var6)(var1, var8);
                var1 = _closure1_slot26;
                var13 = 'pageload';
                var19 = undefined;
                var18 = var6;
                var17 = var5;
                var16 = var4;
                var15 = var3;
                var14 = undefined;
                var0 = var19[var1](var18, var17, var16, var15, var14, var13, var12);
            case 317:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function arg0, arg1, arg2, arg3, arg4, arg5() {
        _fun12495: for (var _fun12495_ip = 0;;) switch (_fun12495_ip) {
            case 0:
                var5 = arg0;
                var4 = arg5;
                var _closure2_slot0 = var5;
                var0 = arg1;
                var _closure2_slot1 = var0;
                var0 = arg2;
                var _closure2_slot2 = var0;
                var0 = arg3;
                var _closure2_slot3 = var0;
                var _closure2_slot4 = var4;
                var0 = global;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var2 = '__sentry_';
                var0 = '_end_patched__';
                var4 = var3.bind(var2)(var4, var0);
                var0 = null;
                var3 = var0 == var5;
                var0 = undefined;
                var2 = undefined;
                if (var3) {
                    _fun12495_ip = 85;
                    continue _fun12495
                }
            case 81:
                var2 = var5[var4];
            case 85:
                if (var2) {
                    _fun12495_ip = 164;
                    continue _fun12495
                }
            case 88:
                var2 = var5.end;
                if (!var2) {
                    _fun12495_ip = 164;
                    continue _fun12495
                }
            case 96:
                var3 = var5.end;
                var2 = var3.bind;
                var2 = var2.bind(var3)(var5);
                var _closure2_slot5 = var2;
                var1 = function() {
                    _fun12496: for (var _fun12496_ip = 0;;) switch (_fun12496_ip) {
                        case 0:
                            var3 = undefined;
                            var0 = undefined;
                            var7 = undefined;
                            var10 = undefined;
                            var11 = undefined;
                            var9 = undefined;
                            var5 = undefined;
                            var2 = undefined;
                        case 16: // try_start_0
                            var12 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var8 = 6;
                            var6 = var6[var8];
                            var14 = var12.bind(var3)(var6);
                            var13 = var14.spanToJSON;
                            var12 = _closure2_slot0;
                            var12 = var13.bind(var14)(var12);
                            var10 = var12;
                            var13 = var12.data;
                            var7 = var13;
                            var12 = null;
                            var13 = var12 == var13;
                            var12 = undefined;
                            if (var13) {
                                _fun12496_ip = 109;
                                continue _fun12496
                            }
                        case 79:
                            var13 = var7;
                            var14 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var7 = var7[var8];
                            var7 = var14.bind(var3)(var7);
                            var7 = var7.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                            var12 = var13[var7];
                        case 109:
                            var7 = 'route';
                            if (!(var7 !== var12)) {
                                _fun12496_ip = 406;
                                continue _fun12496
                            }
                        case 120:
                            var7 = global;
                            var13 = var7.Array;
                            var12 = var13.from;
                            var7 = _closure1_slot15;
                            var7 = var12.bind(var13)(var7);
                            var11 = var7;
                            var15 = _closure1_slot10;
                            var12 = var7.length;
                            var7 = 0;
                            if (!(!(var12 > var7))) {
                                _fun12496_ip = 166;
                                continue _fun12496
                            }
                        case 160:
                            var14 = _closure2_slot2;
                            _fun12496_ip = 169;
                            continue _fun12496;
                        case 166:
                            var14 = var11;
                        case 169:
                            var13 = _closure2_slot1;
                            var12 = _closure2_slot3;
                            var12 = var15.bind(var3)(var14, var13, var12);
                            var9 = var12;
                            if (!var12) {
                                _fun12496_ip = 406;
                                continue _fun12496
                            }
                        case 193:
                            var13 = _closure1_slot0;
                            var14 = _closure1_slot1;
                            var12 = 8;
                            var12 = var14[var12];
                            var16 = var13.bind(var3)(var12);
                            var15 = var16.resolveRouteNameAndSource;
                            var14 = _closure2_slot1;
                            var12 = var11;
                            var12 = var12.length;
                            if (!(!(var12 > var7))) {
                                _fun12496_ip = 241;
                                continue _fun12496
                            }
                        case 235:
                            var13 = _closure2_slot2;
                            _fun12496_ip = 244;
                            continue _fun12496;
                        case 241:
                            var13 = var11;
                        case 244:
                            var12 = var11;
                            var12 = var12.length;
                            if (!(!(var12 > var7))) {
                                _fun12496_ip = 262;
                                continue _fun12496
                            }
                        case 256:
                            var12 = _closure2_slot2;
                            _fun12496_ip = 265;
                            continue _fun12496;
                        case 262:
                            var12 = var11;
                        case 265:
                            var19 = var9;
                            var18 = _closure2_slot3;
                            var23 = var16;
                            var22 = var14;
                            var21 = var13;
                            var20 = var12;
                            var12 = var23[var15](var22, var21, var20, var19, var18, var17);
                            var11 = _closure1_slot4;
                            var9 = 2;
                            var11 = var11.bind(var3)(var12, var9);
                            var9 = var11[var7];
                            var5 = var9;
                            var7 = 1;
                            var2 = var11[var7];
                            var9 = !var9;
                            var7 = var9;
                            if (var9) {
                                _fun12496_ip = 353;
                                continue _fun12496
                            }
                        case 324:
                            var12 = _closure2_slot4;
                            var11 = 'pageload';
                            var11 = var11 !== var12;
                            var9 = var11;
                            if (!var11) {
                                _fun12496_ip = 350;
                                continue _fun12496
                            }
                        case 344:
                            var9 = var10.timestamp;
                        case 350:
                            var7 = var9;
                        case 353:
                            if (var7) {
                                _fun12496_ip = 406;
                                continue _fun12496
                            }
                        case 356:
                            var6 = _closure2_slot0;
                            var7 = var6.updateName;
                            var5 = var7.bind(var6)(var5);
                            var5 = var6.setAttribute;
                            var7 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var4 = var4[var8];
                            var4 = var7.bind(var3)(var4);
                            var4 = var4.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                            var2 = var5.bind(var6)(var4, var2);
                        case 406: // try_end0
                            _fun12496_ip = 505;
                            continue _fun12496;
                        case 408: // catch_target0
                            CatchBlockStart(arg_register = 1);
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var4 = 9;
                            var4 = var6[var4];
                            var4 = var5.bind(var3)(var4);
                            var4 = var4.DEBUG_BUILD;
                            if (!var4) {
                                _fun12496_ip = 505;
                                continue _fun12496
                            }
                        case 442:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var2 = 6;
                            var2 = var5[var2];
                            var2 = var4.bind(var3)(var2);
                            var4 = var2.debug;
                            var2 = var4.warn;
                            var6 = var1;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var5 = var1.concat;
                            var1 = 'Error updating span details before ending: ';
                            var1 = var5.bind(var1)(var6);
                            var1 = var2.bind(var4)(var1);
                        case 505:
                            var2 = _closure2_slot5;
                            var1 = var2.apply;
                            var0 = arguments;
                            var0 = var1.bind(var2)(var3, var0);
                            return var0;
                    }
                };
                var5.end = var1;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 6;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.addNonEnumerableProperty;
                var1 = true;
                var1 = var2.bind(var3)(var5, var4, var1);
            case 164:
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function() {
        _fun12497: for (var _fun12497_ip = 0;;) switch (_fun12497_ip) {
            case 0:
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var4 = 6;
                var1 = var0[var4];
                var0 = undefined;
                var3 = var3.bind(var0)(var1);
                var1 = var3.getActiveSpan;
                var6 = var1.bind(var3)();
                var1 = undefined;
                if (!var6) {
                    _fun12497_ip = 68;
                    continue _fun12497
                }
            case 40:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var4];
                var5 = var5.bind(var0)(var3);
                var3 = var5.getRootSpan;
                var1 = var3.bind(var5)(var6);
            case 68:
                if (var1) {
                    _fun12497_ip = 73;
                    continue _fun12497
                }
            case 71:
                return var0;
            case 73:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var4];
                var3 = var3.bind(var0)(var2);
                var2 = var3.spanToJSON;
                var2 = var2.bind(var3)(var1);
                var3 = var2.op;
                var2 = 'navigation';
                if (!(var2 !== var3)) {
                    _fun12497_ip = 126;
                    continue _fun12497
                }
            case 114:
                var2 = 'pageload';
                var0 = undefined;
                if (!(var2 === var3)) {
                    _fun12497_ip = 129;
                    continue _fun12497
                }
            case 126:
                var0 = var1;
            case 129:
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = 0;
    var6 = var11[var0];
    var0 = undefined;
    var6 = var10.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var11[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var11[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 3;
    var6 = var11[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = global;
    var14 = var6.Object;
    var13 = var14.defineProperty;
    var9 = var6.Symbol;
    var12 = var9.toStringTag;
    var9 = {};
    var15 = 'Module';
    var9.value = var15;
    var9 = var13.bind(var14)(var2, var12, var9);
    var9 = 4;
    var9 = var11[var9];
    var9 = var10.bind(var0)(var9);
    var _closure1_slot11 = var9;
    var9 = false;
    var _closure1_slot12 = var9;
    var9 = var6.WeakSet;
    var10 = var9.prototype;
    var10 = Object.create(var10, {
        constructor: {
            value: var9
        }
    });
    var19 = var10;
    var9 = new var19[var9](var18);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot13 = var9;
    var9 = var6.WeakMap;
    var10 = var9.prototype;
    var10 = Object.create(var10, {
        constructor: {
            value: var9
        }
    });
    var19 = var10;
    var9 = new var19[var9](var18);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot14 = var9;
    var6 = var6.Set;
    var9 = var6.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var6
        }
    });
    var19 = var9;
    var6 = new var19[var6](var18);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot15 = var6;
    var2.addResolvedRoutesToParent = var8;
    var2.addRoutesToAllRoutes = var7;
    var2.allRoutes = var6;
    var6 = function arg0, arg1() {
        _fun12498: for (var _fun12498_ip = 0;;) switch (_fun12498_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var _closure2_slot0 = var1;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var1 = var2[var1];
                var2 = undefined;
                var6 = var4.bind(var2)(var1);
                var5 = var6.browserTracingIntegration;
                var1 = global;
                var9 = var1.Object;
                var8 = var9.assign;
                var7 = {};
                var4 = {
                    'instrumentPageLoad': false,
                    'instrumentNavigation': false
                };
                var4 = var8.bind(var9)(var7, var3, var4);
                var4 = var5.bind(var6)(var4);
                var _closure2_slot1 = var4;
                var5 = var3.useEffect;
                var _closure2_slot2 = var5;
                var5 = var3.useLocation;
                var _closure2_slot3 = var5;
                var5 = var3.useNavigationType;
                var _closure2_slot4 = var5;
                var5 = var3.createRoutesFromChildren;
                var _closure2_slot5 = var5;
                var5 = var3.matchRoutes;
                var _closure2_slot6 = var5;
                var5 = var3.stripBasename;
                var _closure2_slot7 = var5;
                var6 = var3.enableAsyncRouteHandlers;
                var5 = var2 !== var6;
                if (!var5) {
                    _fun12498_ip = 159;
                    continue _fun12498
                }
            case 156:
                var5 = var6;
            case 159:
                var _closure2_slot8 = var5;
                var6 = var3.instrumentPageLoad;
                var5 = var2 === var6;
                if (var5) {
                    _fun12498_ip = 179;
                    continue _fun12498
                }
            case 176:
                var5 = var6;
            case 179:
                var _closure2_slot9 = var5;
                var3 = var3.instrumentNavigation;
                var2 = var2 === var3;
                if (var2) {
                    _fun12498_ip = 199;
                    continue _fun12498
                }
            case 196:
                var2 = var3;
            case 199:
                var _closure2_slot10 = var2;
                var3 = var1.Object;
                var2 = var3.assign;
                var1 = {};
                var5 = function arg0() {
                    _fun12499: for (var _fun12499_ip = 0;;) switch (_fun12499_ip) {
                        case 0:
                            var3 = _closure2_slot1;
                            var2 = var3.setup;
                            var0 = arg0;
                            var0 = var2.bind(var3)(var0);
                            var2 = _closure2_slot2;
                            var _closure1_slot6 = var2;
                            var2 = _closure2_slot3;
                            var _closure1_slot7 = var2;
                            var2 = _closure2_slot4;
                            var _closure1_slot8 = var2;
                            var4 = _closure2_slot6;
                            var _closure1_slot10 = var4;
                            var2 = _closure2_slot5;
                            var _closure1_slot9 = var2;
                            var2 = _closure2_slot8;
                            _closure1_slot12 = var2;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var0 = 8;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.initializeRouterUtils;
                            var1 = _closure2_slot7;
                            if (var1) {
                                _fun12499_ip = 109;
                                continue _fun12499
                            }
                        case 107:
                            var1 = false;
                        case 109:
                            var1 = var2.bind(var3)(var4, var1);
                            return var0;
                    }
                };
                var1.setup = var5;
                var0 = function arg0() {
                    _fun12500: for (var _fun12500_ip = 0;;) switch (_fun12500_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = _closure2_slot1;
                            var0 = var1.afterAllSetup;
                            var0 = var0.bind(var1)(var3);
                            var6 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var4 = 7;
                            var5 = var0[var4];
                            var0 = undefined;
                            var5 = var6.bind(var0)(var5);
                            var5 = var5.WINDOW;
                            var5 = var5.location;
                            var6 = null;
                            var6 = var6 == var5;
                            var7 = undefined;
                            if (var6) {
                                _fun12500_ip = 74;
                                continue _fun12500
                            }
                        case 68:
                            var7 = var5.pathname;
                        case 74:
                            var5 = _closure2_slot9;
                            if (!var5) {
                                _fun12500_ip = 84;
                                continue _fun12500
                            }
                        case 81:
                            var5 = var7;
                        case 84:
                            if (!var5) {
                                _fun12500_ip = 243;
                                continue _fun12500
                            }
                        case 90:
                            var8 = _closure1_slot0;
                            var11 = _closure1_slot1;
                            var4 = var11[var4];
                            var6 = var8.bind(var0)(var4);
                            var5 = var6.startBrowserTracingPageLoadSpan;
                            var4 = {};
                            var4.name = var7;
                            var10 = _closure1_slot3;
                            var7 = 6;
                            var9 = var11[var7];
                            var9 = var8.bind(var0)(var9);
                            var13 = var9.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                            var12 = {};
                            var9 = 'url';
                            var13 = var10.bind(var0)(var12, var13, var9);
                            var9 = var11[var7];
                            var9 = var8.bind(var0)(var9);
                            var12 = var9.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                            var9 = 'pageload';
                            var9 = var10.bind(var0)(var13, var12, var9);
                            var7 = var11[var7];
                            var7 = var8.bind(var0)(var7);
                            var8 = var7.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                            var12 = _closure2_slot0;
                            var7 = global;
                            var7 = var7.HermesInternal;
                            var11 = var7.concat;
                            var7 = 'auto.pageload.react.reactrouter_v';
                            var7 = var11.bind(var7)(var12);
                            var7 = var10.bind(var0)(var9, var8, var7);
                            var4.attributes = var7;
                            var4 = var5.bind(var6)(var3, var4);
                        case 243:
                            var2 = _closure2_slot10;
                            if (!var2) {
                                _fun12500_ip = 264;
                                continue _fun12500
                            }
                        case 250:
                            var2 = _closure1_slot13;
                            var1 = var2.add;
                            var1 = var1.bind(var2)(var3);
                        case 264:
                            return var0;
                    }
                };
                var1.afterAllSetup = var0;
                var0 = {};
                var0 = var2.bind(var3)(var0, var4, var1);
                return var0;
        }
    };
    var2.createReactRouterV6CompatibleTracingIntegration = var6;
    var6 = function arg0, arg1() {
        _fun12501: for (var _fun12501_ip = 0;;) switch (_fun12501_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var2 = _closure1_slot6;
                if (!var2) {
                    _fun12501_ip = 57;
                    continue _fun12501
                }
            case 26:
                var2 = _closure1_slot7;
                if (!var2) {
                    _fun12501_ip = 57;
                    continue _fun12501
                }
            case 33:
                var2 = _closure1_slot8;
                if (!var2) {
                    _fun12501_ip = 57;
                    continue _fun12501
                }
            case 40:
                var2 = _closure1_slot9;
                if (!var2) {
                    _fun12501_ip = 57;
                    continue _fun12501
                }
            case 47:
                var2 = _closure1_slot10;
                if (var2) {
                    _fun12501_ip = 197;
                    continue _fun12501
                }
            case 57:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 9;
                var2 = var5[var2];
                var5 = undefined;
                var2 = var4.bind(var5)(var2);
                var2 = var2.DEBUG_BUILD;
                if (!var2) {
                    _fun12501_ip = 195;
                    continue _fun12501
                }
            case 88:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 6;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var5 = var2.debug;
                var4 = var5.warn;
                var26 = _closure1_slot6;
                var24 = _closure1_slot7;
                var22 = _closure1_slot8;
                var20 = _closure1_slot9;
                var18 = _closure1_slot10;
                var2 = global;
                var2 = var2.HermesInternal;
                var11 = var2.concat;
                var27 = 'reactRouterV6Instrumentation was unable to wrap Routes because of one or more missing parameters.\n      useEffect: ';
                var25 = '. useLocation: ';
                var23 = '. useNavigationType: ';
                var21 = '.\n      createRoutesFromChildren: ';
                var19 = '. matchRoutes: ';
                var17 = '.';
                var2 = var27[var11](var26, var25, var24, var23, var22, var21, var20, var19, var18, var17, var16);
                var2 = var4.bind(var5)(var2);
            case 195:
                return var3;
            case 197:
                var0 = function arg0() {
                    var6 = arg0;
                    var _closure3_slot0 = var6;
                    var3 = _closure1_slot11;
                    var4 = var3.useRef;
                    var2 = true;
                    var2 = var4.bind(var3)(var2);
                    var _closure3_slot1 = var2;
                    var2 = _closure1_slot7;
                    var4 = undefined;
                    var7 = var2.bind(var4)();
                    var _closure3_slot2 = var7;
                    var2 = _closure1_slot8;
                    var5 = var2.bind(var4)();
                    var _closure3_slot3 = var5;
                    var2 = _closure1_slot6;
                    var1 = new Array(2);
                    var1[0] = var7;
                    var1[1] = var5;
                    var0 = function() { // Environment: var0
                        _fun12503: for (var _fun12503_ip = 0;;) switch (_fun12503_ip) {
                            case 0:
                                var3 = _closure1_slot9;
                                var0 = _closure3_slot0;
                                var2 = var0.children;
                                var0 = undefined;
                                var5 = var3.bind(var0)(var2);
                                var2 = _closure3_slot1;
                                var2 = var2.current;
                                if (var2) {
                                    _fun12503_ip = 112;
                                    continue _fun12503
                                }
                            case 38:
                                var3 = _closure1_slot22;
                                var2 = {};
                                var6 = _closure3_slot2;
                                var2.location = var6;
                                var2.routes = var5;
                                var6 = _closure3_slot3;
                                var2.navigationType = var6;
                                var6 = _closure2_slot1;
                                var2.version = var6;
                                var6 = global;
                                var8 = var6.Array;
                                var7 = var8.from;
                                var6 = _closure1_slot15;
                                var6 = var7.bind(var8)(var6);
                                var2.allRoutes = var6;
                                var2 = var3.bind(var0)(var2);
                                _fun12503_ip = 197;
                                continue _fun12503;
                            case 112:
                                var2 = _closure1_slot23;
                                var2 = var2.bind(var0)(var5);
                                var3 = _closure1_slot25;
                                var2 = {};
                                var6 = _closure1_slot27;
                                var6 = var6.bind(var0)();
                                var2.activeRootSpan = var6;
                                var6 = _closure3_slot2;
                                var2.location = var6;
                                var2.routes = var5;
                                var5 = global;
                                var6 = var5.Array;
                                var5 = var6.from;
                                var4 = _closure1_slot15;
                                var4 = var5.bind(var6)(var4);
                                var2.allRoutes = var4;
                                var2 = var3.bind(var0)(var2);
                                var2 = _closure3_slot1;
                                var1 = false;
                                var2.current = var1;
                            case 197:
                                return var0;
                        }
                    };
                    var0 = var2.bind(var4)(var0, var1);
                    var2 = var3.createElement;
                    var1 = _closure2_slot0;
                    var0 = global;
                    var5 = var0.Object;
                    var4 = var5.assign;
                    var0 = {};
                    var0 = var4.bind(var5)(var0, var6);
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.hoistNonReactStatics;
                var1 = var1.bind(var2)(var0, var3);
                return var0;
        }
    };
    var2.createV6CompatibleWithSentryReactRouterRouting = var6;
    var6 = function arg0, arg1() {
        _fun12504: for (var _fun12504_ip = 0;;) switch (_fun12504_ip) {
            case 0:
                var2 = arg0;
                var8 = arg1;
                var _closure2_slot0 = var2;
                var _closure2_slot1 = var8;
                var0 = _closure1_slot6;
                if (!var0) {
                    _fun12504_ip = 47;
                    continue _fun12504
                }
            case 26:
                var0 = _closure1_slot7;
                if (!var0) {
                    _fun12504_ip = 47;
                    continue _fun12504
                }
            case 33:
                var0 = _closure1_slot8;
                if (!var0) {
                    _fun12504_ip = 47;
                    continue _fun12504
                }
            case 40:
                var0 = _closure1_slot10;
                if (var0) {
                    _fun12504_ip = 153;
                    continue _fun12504
                }
            case 47:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 9;
                var0 = var5[var0];
                var5 = undefined;
                var0 = var4.bind(var5)(var0);
                var4 = var0.DEBUG_BUILD;
                var0 = var2;
                if (!var4) {
                    _fun12504_ip = 158;
                    continue _fun12504
                }
            case 81:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 6;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var5 = var3.debug;
                var4 = var5.warn;
                var3 = global;
                var3 = var3.HermesInternal;
                var7 = var3.concat;
                var6 = 'reactRouterV';
                var3 = 'Instrumentation was unable to wrap the `createRouter` function because of one or more missing parameters.';
                var3 = var7.bind(var6)(var8, var3);
                var3 = var4.bind(var5)(var3);
                var0 = var2;
                _fun12504_ip = 158;
                continue _fun12504;
            case 153:
                var0 = function(arg0, arg1) { // Environment: var1
                    _fun12505: for (var _fun12505_ip = 0;;) switch (_fun12505_ip) {
                        case 0:
                            var7 = arg0;
                            var2 = arg1;
                            var _closure3_slot0 = var7;
                            var0 = _closure1_slot23;
                            var4 = undefined;
                            var0 = var0.bind(var4)(var7);
                            var0 = _closure1_slot12;
                            if (!var0) {
                                _fun12505_ip = 95;
                                continue _fun12505
                            }
                        case 33:
                            var6 = var7;
                            var3 = var6[Symbol.iterator];
                            var6 = var3().next;
                            var0 = 5;
                        case 42:
                            var11 = var6().value;
                            var8 = var3;
                            if (!(var8 !== var4)) {
                                _fun12505_ip = 95;
                                continue _fun12505
                            }
                        case 53: // try_start_0
                            var9 = _closure1_slot0;
                            var8 = _closure1_slot1;
                            var8 = var8[var0];
                            var10 = var9.bind(var4)(var8);
                            var9 = var10.checkRouteForAsyncHandler;
                            var8 = _closure1_slot18;
                            var8 = var9.bind(var10)(var11, var8);
                        case 86: // try_end0
                            _fun12505_ip = 42;
                            continue _fun12505;
                        case 88: // catch_target0
                            CatchBlockStart(arg_register = 0);
                            var3.return();
                            throw var0;
                        case 95:
                            var0 = _closure1_slot20;
                            var3 = var0.bind(var4)(var2);
                            var0 = _closure2_slot0;
                            var0 = var0.bind(var4)(var7, var3);
                            var3 = null;
                            var3 = var3 == var2;
                            var6 = undefined;
                            if (var3) {
                                _fun12505_ip = 134;
                                continue _fun12505
                            }
                        case 128:
                            var6 = var2.basename;
                        case 134:
                            var _closure3_slot1 = var6;
                            var2 = _closure1_slot27;
                            var8 = var2.bind(var4)();
                            var2 = false;
                            var _closure3_slot2 = var2;
                            var9 = !var8;
                            var3 = !var9;
                            if (var9) {
                                _fun12505_ip = 207;
                                continue _fun12505
                            }
                        case 161:
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot1;
                            var9 = 6;
                            var9 = var11[var9];
                            var10 = var10.bind(var4)(var9);
                            var9 = var10.spanToJSON;
                            var9 = var9.bind(var10)(var8);
                            var10 = var9.op;
                            var9 = 'pageload';
                            var3 = var9 === var10;
                        case 207:
                            var _closure3_slot3 = var3;
                            var _closure3_slot4 = var2;
                            var2 = var0.state;
                            var3 = var2.historyAction;
                            var2 = 'POP';
                            var2 = var2 === var3;
                            if (!var2) {
                                _fun12505_ip = 240;
                                continue _fun12505
                            }
                        case 237:
                            var2 = var8;
                        case 240:
                            if (!var2) {
                                _fun12505_ip = 310;
                                continue _fun12505
                            }
                        case 243:
                            var3 = _closure1_slot25;
                            var2 = {};
                            var2.activeRootSpan = var8;
                            var8 = var0.state;
                            var8 = var8.location;
                            var2.location = var8;
                            var2.routes = var7;
                            var2.basename = var6;
                            var6 = global;
                            var7 = var6.Array;
                            var6 = var7.from;
                            var5 = _closure1_slot15;
                            var5 = var6.bind(var7)(var5);
                            var2.allRoutes = var5;
                            var2 = var3.bind(var4)(var2);
                        case 310:
                            var2 = var0.subscribe;
                            var1 = function(arg0) { // Environment: var1
                                _fun12506: for (var _fun12506_ip = 0;;) switch (_fun12506_ip) {
                                    case 0:
                                        var5 = arg0;
                                        var0 = _closure3_slot2;
                                        if (var0) {
                                            _fun12506_ip = 125;
                                            continue _fun12506
                                        }
                                    case 13:
                                        var1 = _closure1_slot27;
                                        var3 = undefined;
                                        var2 = var1.bind(var3)();
                                        if (!var2) {
                                            _fun12506_ip = 75;
                                            continue _fun12506
                                        }
                                    case 29:
                                        var1 = _closure1_slot0;
                                        var6 = _closure1_slot1;
                                        var0 = 6;
                                        var0 = var6[var0];
                                        var1 = var1.bind(var3)(var0);
                                        var0 = var1.spanToJSON;
                                        var0 = var0.bind(var1)(var2);
                                        var1 = var0.op;
                                        var0 = 'pageload';
                                        if (!(var0 !== var1)) {
                                            _fun12506_ip = 119;
                                            continue _fun12506
                                        }
                                    case 75:
                                        var0 = _closure3_slot3;
                                        if (!var0) {
                                            _fun12506_ip = 125;
                                            continue _fun12506
                                        }
                                    case 82:
                                        var1 = var5.historyAction;
                                        var0 = 'POP';
                                        if (!(var0 === var1)) {
                                            _fun12506_ip = 111;
                                            continue _fun12506
                                        }
                                    case 96:
                                        var0 = _closure3_slot4;
                                        if (var0) {
                                            _fun12506_ip = 111;
                                            continue _fun12506
                                        }
                                    case 103:
                                        var0 = true;
                                        _closure3_slot4 = var0;
                                        _fun12506_ip = 125;
                                        continue _fun12506;
                                    case 111:
                                        var0 = true;
                                        _closure3_slot2 = var0;
                                        _fun12506_ip = 125;
                                        continue _fun12506;
                                    case 119:
                                        var0 = true;
                                        _closure3_slot3 = var0;
                                    case 125:
                                        var2 = _closure1_slot17;
                                        var1 = _closure3_slot2;
                                        var0 = undefined;
                                        var1 = var2.bind(var0)(var5, var1);
                                        if (!var1) {
                                            _fun12506_ip = 235;
                                            continue _fun12506
                                        }
                                    case 147:
                                        var2 = _closure1_slot22;
                                        var1 = {};
                                        var6 = var5.location;
                                        var1.location = var6;
                                        var6 = _closure3_slot0;
                                        var1.routes = var6;
                                        var5 = var5.historyAction;
                                        var1.navigationType = var5;
                                        var5 = _closure2_slot1;
                                        var1.version = var5;
                                        var4 = _closure3_slot1;
                                        var1.basename = var4;
                                        var4 = global;
                                        var5 = var4.Array;
                                        var4 = var5.from;
                                        var3 = _closure1_slot15;
                                        var3 = var4.bind(var5)(var3);
                                        var1.allRoutes = var3;
                                        var1 = var2.bind(var0)(var1);
                                    case 235:
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
            case 158:
                return var0;
        }
    };
    var2.createV6CompatibleWrapCreateBrowserRouter = var6;
    var6 = function arg0, arg1() {
        _fun12507: for (var _fun12507_ip = 0;;) switch (_fun12507_ip) {
            case 0:
                var2 = arg0;
                var8 = arg1;
                var _closure2_slot0 = var2;
                var _closure2_slot1 = var8;
                var0 = _closure1_slot6;
                if (!var0) {
                    _fun12507_ip = 47;
                    continue _fun12507
                }
            case 26:
                var0 = _closure1_slot7;
                if (!var0) {
                    _fun12507_ip = 47;
                    continue _fun12507
                }
            case 33:
                var0 = _closure1_slot8;
                if (!var0) {
                    _fun12507_ip = 47;
                    continue _fun12507
                }
            case 40:
                var0 = _closure1_slot10;
                if (var0) {
                    _fun12507_ip = 153;
                    continue _fun12507
                }
            case 47:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 9;
                var0 = var5[var0];
                var5 = undefined;
                var0 = var4.bind(var5)(var0);
                var4 = var0.DEBUG_BUILD;
                var0 = var2;
                if (!var4) {
                    _fun12507_ip = 158;
                    continue _fun12507
                }
            case 81:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 6;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var5 = var3.debug;
                var4 = var5.warn;
                var3 = global;
                var3 = var3.HermesInternal;
                var7 = var3.concat;
                var6 = 'reactRouterV';
                var3 = 'Instrumentation was unable to wrap the `createMemoryRouter` function because of one or more missing parameters.';
                var3 = var7.bind(var6)(var8, var3);
                var3 = var4.bind(var5)(var3);
                var0 = var2;
                _fun12507_ip = 158;
                continue _fun12507;
            case 153:
                var0 = function(arg0, arg1) { // Environment: var1
                    _fun12508: for (var _fun12508_ip = 0;;) switch (_fun12508_ip) {
                        case 0:
                            var8 = arg0;
                            var6 = arg1;
                            var _closure3_slot0 = var8;
                            var0 = _closure1_slot23;
                            var7 = undefined;
                            var0 = var0.bind(var7)(var8);
                            var0 = _closure1_slot12;
                            if (!var0) {
                                _fun12508_ip = 95;
                                continue _fun12508
                            }
                        case 33:
                            var3 = var8;
                            var2 = var3[Symbol.iterator];
                            var3 = var2().next;
                            var0 = 5;
                        case 42:
                            var11 = var3().value;
                            var5 = var2;
                            if (!(var5 !== var7)) {
                                _fun12508_ip = 95;
                                continue _fun12508
                            }
                        case 53: // try_start_0
                            var9 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var5 = var5[var0];
                            var10 = var9.bind(var7)(var5);
                            var9 = var10.checkRouteForAsyncHandler;
                            var5 = _closure1_slot18;
                            var5 = var9.bind(var10)(var11, var5);
                        case 86: // try_end0
                            _fun12508_ip = 42;
                            continue _fun12508;
                        case 88: // catch_target0
                            CatchBlockStart(arg_register = 0);
                            var2.return();
                            throw var0;
                        case 95:
                            var2 = _closure1_slot20;
                            var0 = true;
                            var2 = var2.bind(var7)(var6, var0);
                            var0 = _closure2_slot0;
                            var0 = var0.bind(var7)(var8, var2);
                            var2 = null;
                            var3 = var2 == var6;
                            var5 = undefined;
                            if (var3) {
                                _fun12508_ip = 137;
                                continue _fun12508
                            }
                        case 131:
                            var5 = var6.basename;
                        case 137:
                            var _closure3_slot1 = var5;
                            var9 = var2 == var6;
                            var3 = undefined;
                            if (var9) {
                                _fun12508_ip = 156;
                                continue _fun12508
                            }
                        case 150:
                            var3 = var6.initialEntries;
                        case 156:
                            var9 = var2 == var6;
                            var2 = undefined;
                            if (var9) {
                                _fun12508_ip = 171;
                                continue _fun12508
                            }
                        case 165:
                            var2 = var6.initialIndex;
                        case 171:
                            var6 = var3;
                            if (!var3) {
                                _fun12508_ip = 189;
                                continue _fun12508
                            }
                        case 177:
                            var10 = var3.length;
                            var9 = 1;
                            var6 = var9 === var10;
                        case 189:
                            var9 = var7 !== var2;
                            if (!var9) {
                                _fun12508_ip = 199;
                                continue _fun12508
                            }
                        case 196:
                            var9 = var3;
                        case 199:
                            if (!var9) {
                                _fun12508_ip = 206;
                                continue _fun12508
                            }
                        case 202:
                            var9 = var3[var2];
                        case 206:
                            if (var6) {
                                _fun12508_ip = 220;
                                continue _fun12508
                            }
                        case 209:
                            var6 = undefined;
                            if (!var9) {
                                _fun12508_ip = 218;
                                continue _fun12508
                            }
                        case 214:
                            var6 = var3[var2];
                        case 218:
                            _fun12508_ip = 226;
                            continue _fun12508;
                        case 220:
                            var2 = 0;
                            var6 = var3[var2];
                        case 226:
                            if (var6) {
                                _fun12508_ip = 241;
                                continue _fun12508
                            }
                        case 229:
                            var2 = var0.state;
                            var9 = var2.location;
                            _fun12508_ip = 268;
                            continue _fun12508;
                        case 241:
                            var10 = 'string';
                            var3 = typeof var6;
                            var2 = var6;
                            if (!(var10 === var3)) {
                                _fun12508_ip = 265;
                                continue _fun12508
                            }
                        case 255:
                            var3 = {};
                            var3.pathname = var6;
                            var2 = var3;
                        case 265:
                            var9 = var2;
                        case 268:
                            var2 = _closure1_slot27;
                            var6 = var2.bind(var7)();
                            var2 = var0.state;
                            var3 = var2.historyAction;
                            var2 = 'POP';
                            var2 = var2 === var3;
                            if (!var2) {
                                _fun12508_ip = 301;
                                continue _fun12508
                            }
                        case 298:
                            var2 = var6;
                        case 301:
                            if (!var2) {
                                _fun12508_ip = 361;
                                continue _fun12508
                            }
                        case 304:
                            var3 = _closure1_slot25;
                            var2 = {};
                            var2.activeRootSpan = var6;
                            var2.location = var9;
                            var2.routes = var8;
                            var2.basename = var5;
                            var5 = global;
                            var9 = var5.Array;
                            var8 = var9.from;
                            var5 = _closure1_slot15;
                            var5 = var8.bind(var9)(var5);
                            var2.allRoutes = var5;
                            var2 = var3.bind(var7)(var2);
                        case 361:
                            var2 = false;
                            var _closure3_slot2 = var2;
                            var5 = !var6;
                            var3 = !var5;
                            if (var5) {
                                _fun12508_ip = 422;
                                continue _fun12508
                            }
                        case 376:
                            var5 = _closure1_slot0;
                            var8 = _closure1_slot1;
                            var4 = 6;
                            var4 = var8[var4];
                            var5 = var5.bind(var7)(var4);
                            var4 = var5.spanToJSON;
                            var4 = var4.bind(var5)(var6);
                            var5 = var4.op;
                            var4 = 'pageload';
                            var3 = var4 === var5;
                        case 422:
                            var _closure3_slot3 = var3;
                            var _closure3_slot4 = var2;
                            var2 = var0.subscribe;
                            var1 = function(arg0) { // Environment: var1
                                _fun12509: for (var _fun12509_ip = 0;;) switch (_fun12509_ip) {
                                    case 0:
                                        var5 = arg0;
                                        var0 = _closure3_slot2;
                                        if (var0) {
                                            _fun12509_ip = 125;
                                            continue _fun12509
                                        }
                                    case 13:
                                        var1 = _closure1_slot27;
                                        var3 = undefined;
                                        var2 = var1.bind(var3)();
                                        if (!var2) {
                                            _fun12509_ip = 75;
                                            continue _fun12509
                                        }
                                    case 29:
                                        var1 = _closure1_slot0;
                                        var6 = _closure1_slot1;
                                        var0 = 6;
                                        var0 = var6[var0];
                                        var1 = var1.bind(var3)(var0);
                                        var0 = var1.spanToJSON;
                                        var0 = var0.bind(var1)(var2);
                                        var1 = var0.op;
                                        var0 = 'pageload';
                                        if (!(var0 !== var1)) {
                                            _fun12509_ip = 119;
                                            continue _fun12509
                                        }
                                    case 75:
                                        var0 = _closure3_slot3;
                                        if (!var0) {
                                            _fun12509_ip = 125;
                                            continue _fun12509
                                        }
                                    case 82:
                                        var1 = var5.historyAction;
                                        var0 = 'POP';
                                        if (!(var0 === var1)) {
                                            _fun12509_ip = 111;
                                            continue _fun12509
                                        }
                                    case 96:
                                        var0 = _closure3_slot4;
                                        if (var0) {
                                            _fun12509_ip = 111;
                                            continue _fun12509
                                        }
                                    case 103:
                                        var0 = true;
                                        _closure3_slot4 = var0;
                                        _fun12509_ip = 125;
                                        continue _fun12509;
                                    case 111:
                                        var0 = true;
                                        _closure3_slot2 = var0;
                                        _fun12509_ip = 125;
                                        continue _fun12509;
                                    case 119:
                                        var0 = true;
                                        _closure3_slot3 = var0;
                                    case 125:
                                        var2 = _closure1_slot17;
                                        var1 = _closure3_slot2;
                                        var0 = undefined;
                                        var1 = var2.bind(var0)(var5, var1);
                                        if (!var1) {
                                            _fun12509_ip = 235;
                                            continue _fun12509
                                        }
                                    case 147:
                                        var2 = _closure1_slot22;
                                        var1 = {};
                                        var6 = var5.location;
                                        var1.location = var6;
                                        var6 = _closure3_slot0;
                                        var1.routes = var6;
                                        var5 = var5.historyAction;
                                        var1.navigationType = var5;
                                        var5 = _closure2_slot1;
                                        var1.version = var5;
                                        var4 = _closure3_slot1;
                                        var1.basename = var4;
                                        var4 = global;
                                        var5 = var4.Array;
                                        var4 = var5.from;
                                        var3 = _closure1_slot15;
                                        var3 = var4.bind(var5)(var3);
                                        var1.allRoutes = var3;
                                        var1 = var2.bind(var0)(var1);
                                    case 235:
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
            case 158:
                return var0;
        }
    };
    var2.createV6CompatibleWrapCreateMemoryRouter = var6;
    var5 = function arg0, arg1() {
        _fun12510: for (var _fun12510_ip = 0;;) switch (_fun12510_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var2 = arg1;
                var _closure2_slot1 = var2;
                var3 = _closure1_slot6;
                if (!var3) {
                    _fun12510_ip = 47;
                    continue _fun12510
                }
            case 26:
                var3 = _closure1_slot7;
                if (!var3) {
                    _fun12510_ip = 47;
                    continue _fun12510
                }
            case 33:
                var3 = _closure1_slot8;
                if (!var3) {
                    _fun12510_ip = 47;
                    continue _fun12510
                }
            case 40:
                var3 = _closure1_slot10;
                if (var3) {
                    _fun12510_ip = 122;
                    continue _fun12510
                }
            case 47:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 9;
                var3 = var4[var3];
                var4 = undefined;
                var3 = var5.bind(var4)(var3);
                var3 = var3.DEBUG_BUILD;
                if (!var3) {
                    _fun12510_ip = 120;
                    continue _fun12510
                }
            case 78:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 6;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var4 = var2.debug;
                var3 = var4.warn;
                var2 = 'reactRouterV6Instrumentation was unable to wrap `useRoutes` because of one or more missing parameters.';
                var2 = var3.bind(var4)(var2);
            case 120:
                return var1;
            case 122:
                var1 = function arg0() {
                    _fun12511: for (var _fun12511_ip = 0;;) switch (_fun12511_ip) {
                        case 0:
                            var0 = arg0;
                            var5 = _closure1_slot11;
                            var4 = var5.useRef;
                            var3 = true;
                            var3 = var4.bind(var5)(var3);
                            var _closure3_slot0 = var3;
                            var5 = var0.routes;
                            var _closure3_slot1 = var5;
                            var3 = var0.locationArg;
                            var0 = _closure2_slot0;
                            var4 = undefined;
                            var0 = var0.bind(var4)(var5, var3);
                            var5 = _closure1_slot7;
                            var8 = var5.bind(var4)();
                            var5 = _closure1_slot8;
                            var6 = var5.bind(var4)();
                            var _closure3_slot2 = var6;
                            var7 = 'string';
                            var5 = typeof var3;
                            if (!(var7 !== var5)) {
                                _fun12511_ip = 111;
                                continue _fun12511
                            }
                        case 90:
                            var7 = null;
                            var5 = var8;
                            if (!(var7 != var3)) {
                                _fun12511_ip = 114;
                                continue _fun12511
                            }
                        case 99:
                            var7 = var3.pathname;
                            var5 = var8;
                            if (!var7) {
                                _fun12511_ip = 114;
                                continue _fun12511
                            }
                        case 111:
                            var5 = var3;
                        case 114:
                            var _closure3_slot3 = var5;
                            var3 = _closure1_slot6;
                            var2 = new Array(2);
                            var2[0] = var6;
                            var2[1] = var5;
                            var1 = function() { // Environment: var1
                                _fun12512: for (var _fun12512_ip = 0;;) switch (_fun12512_ip) {
                                    case 0:
                                        var1 = _closure3_slot3;
                                        var2 = 'string';
                                        var1 = typeof var1;
                                        if (!(var2 !== var1)) {
                                            _fun12512_ip = 24;
                                            continue _fun12512
                                        }
                                    case 18:
                                        var6 = _closure3_slot3;
                                        _fun12512_ip = 38;
                                        continue _fun12512;
                                    case 24:
                                        var1 = {};
                                        var2 = _closure3_slot3;
                                        var1.pathname = var2;
                                        var6 = var1;
                                    case 38:
                                        var1 = _closure3_slot0;
                                        var1 = var1.current;
                                        if (var1) {
                                            _fun12512_ip = 129;
                                            continue _fun12512
                                        }
                                    case 53:
                                        var3 = _closure1_slot22;
                                        var2 = {};
                                        var2.location = var6;
                                        var1 = _closure3_slot1;
                                        var2.routes = var1;
                                        var1 = _closure3_slot2;
                                        var2.navigationType = var1;
                                        var1 = _closure2_slot1;
                                        var2.version = var1;
                                        var1 = global;
                                        var7 = var1.Array;
                                        var5 = var7.from;
                                        var1 = _closure1_slot15;
                                        var1 = var5.bind(var7)(var1);
                                        var2.allRoutes = var1;
                                        var1 = undefined;
                                        var1 = var3.bind(var1)(var2);
                                        _fun12512_ip = 216;
                                        continue _fun12512;
                                    case 129:
                                        var1 = _closure1_slot23;
                                        var5 = _closure3_slot1;
                                        var3 = undefined;
                                        var1 = var1.bind(var3)(var5);
                                        var2 = _closure1_slot25;
                                        var1 = {};
                                        var7 = _closure1_slot27;
                                        var7 = var7.bind(var3)();
                                        var1.activeRootSpan = var7;
                                        var1.location = var6;
                                        var1.routes = var5;
                                        var5 = global;
                                        var6 = var5.Array;
                                        var5 = var6.from;
                                        var4 = _closure1_slot15;
                                        var4 = var5.bind(var6)(var4);
                                        var1.allRoutes = var4;
                                        var1 = var2.bind(var3)(var1);
                                        var1 = _closure3_slot0;
                                        var0 = false;
                                        var1.current = var0;
                                    case 216:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var3.bind(var4)(var1, var2);
                            return var0;
                    }
                };
                var _closure2_slot2 = var1;
                var0 = function(arg0, arg1) { // Environment: var0
                    var3 = _closure1_slot11;
                    var2 = var3.createElement;
                    var1 = _closure2_slot2;
                    var0 = {};
                    var4 = arg0;
                    var0.routes = var4;
                    var4 = arg1;
                    var0.locationArg = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                return var0;
        }
    };
    var2.createV6CompatibleWrapUseRoutes = var5;
    var2.handleNavigation = var4;
    var2.processResolvedRoutes = var3;
    var2.updateNavigationSpan = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 77, 57, 65, 31, 1148, 817, 1021, 1149, 1141, 1136]);