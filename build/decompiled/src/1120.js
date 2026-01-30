// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var3 = function(arg0) { // Original name: mapSamples, environment: var4
        _fun12261: for (var _fun12261_ip = 0;;) switch (_fun12261_ip) {
            case 0:
                var5 = arg0;
                var9 = undefined;
                var4 = undefined;
                var7 = undefined;
                var3 = undefined;
                var1 = undefined;
                var2 = undefined;
                var12 = undefined;
                var13 = undefined;
                var8 = undefined;
                var0 = arguments.length;
                var10 = 1;
                if (!(var0 > var10)) {
                    _fun12261_ip = 39;
                    continue _fun12261
                }
            case 31:
                var0 = arguments[var10];
                if (!(var9 === var0)) {
                    _fun12261_ip = 48;
                    continue _fun12261
                }
            case 39:
                var0 = _closure1_slot2;
                _fun12261_ip = 52;
                continue _fun12261;
            case 48:
                var0 = arguments[var10];
            case 52:
                var7 = var0;
                var3 = new Array(0);
                var0 = global;
                var4 = var0.Set;
                var6 = var4.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var4
                    }
                });
                var23 = var6;
                var4 = new var23[var4](var22);
                var1 = var4 instanceof Object ? var4 : var6;
                var4 = var0.Set;
                var6 = var4.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var4
                    }
                });
                var23 = var6;
                var4 = new var23[var4](var22);
                var2 = var4 instanceof Object ? var4 : var6;
                var11 = 0;
                var4 = var5[var11];
                if (var4) {
                    _fun12261_ip = 192;
                    continue _fun12261
                }
            case 122:
                var14 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var10];
                var6 = var14.bind(var9)(var6);
                var15 = var6.debug;
                var14 = var15.warn;
                var6 = '[Profiling] No samples found in profile.';
                var6 = var14.bind(var15)(var6);
                var6 = {};
                var14 = var3;
                var6.samples = var14;
                var14 = var2;
                var6.hermesStacks = var14;
                var14 = var1;
                var6.jsThreads = var14;
                return var6;
            case 192:
                var6 = var0.Number;
                var4 = var4.ts;
                var12 = var6.bind(var9)(var4);
                var6 = var5;
                var4 = var6[Symbol.iterator];
                var6 = var4().next;
                var5 = 1000;
            case 221:
                var14 = var6().value;
                var15 = var4;
                if (!(var15 !== var9)) {
                    _fun12261_ip = 465;
                    continue _fun12261
                }
            case 235: // try_start_0
                var13 = var14;
                var17 = var1;
                var16 = var17.add;
                var15 = var14.tid;
                var15 = var16.bind(var17)(var15);
                var17 = var2;
                var16 = var17.add;
                var15 = var14.sf;
                var15 = var16.bind(var17)(var15);
                var15 = var0.Number;
                var14 = var14.ts;
                var15 = var15.bind(var9)(var14);
                var14 = var12;
                var14 = var15 - var14;
                var15 = var5 * var14;
                var8 = var15;
                var14 = var7;
                if (!(!(var15 >= var14))) {
                    _fun12261_ip = 378;
                    continue _fun12261
                }
            case 314:
                var16 = var3;
                var15 = var16.push;
                var14 = {};
                var17 = var13;
                var18 = var17.sf;
                var14.stack_id = var18;
                var17 = var17.tid;
                var14.thread_id = var17;
                var18 = var8;
                var17 = var18.toFixed;
                var17 = var17.bind(var18)(var11);
                var14.elapsed_since_start_ns = var17;
                var14 = var15.bind(var16)(var14);
            case 373: // try_end0
                _fun12261_ip = 221;
                continue _fun12261;
            case 378: // try_start_1
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var10];
                var5 = var6.bind(var9)(var5);
                var6 = var5.debug;
                var5 = var6.warn;
                var22 = var8;
                var20 = var7;
                var0 = var0.HermesInternal;
                var9 = var0.concat;
                var23 = '[Profiling] Sample has elapsed time since start ';
                var21 = 'ns greater than the max elapsed time ';
                var19 = 'ns.';
                var0 = var23[var9](var22, var21, var20, var19, var18);
                var0 = var5.bind(var6)(var0);
            case 453: // try_end1
                var4.return();
                _fun12261_ip = 465;
                continue _fun12261;
            case 458: // catch_target0 // catch_target1
                CatchBlockStart(arg_register = 0);
                var4.return();
                throw var0;
            case 465:
                var0 = {};
                var0.samples = var3;
                var0.hermesStacks = var2;
                var0.jsThreads = var1;
                return var0;
        }
    };
    var _closure1_slot3 = var3;
    var1 = function(arg0) { // Original name: parseHermesJSStackFrame, environment: var4
        _fun12262: for (var _fun12262_ip = 0;;) switch (_fun12262_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.category;
                var0 = 'JavaScript';
                if (!(var0 === var1)) {
                    _fun12262_ip = 331;
                    continue _fun12262
                }
            case 22:
                var0 = var2.funcVirtAddr;
                var6 = undefined;
                if (!(var6 !== var0)) {
                    _fun12262_ip = 47;
                    continue _fun12262
                }
            case 34:
                var0 = var2.offset;
                if (!(var6 === var0)) {
                    _fun12262_ip = 226;
                    continue _fun12262
                }
            case 47:
                var3 = var2.name;
                var1 = var3.indexOf;
                var0 = '(';
                var7 = var1.bind(var3)(var0);
                var0 = {};
                var1 = -1;
                if (!(var1 === var7)) {
                    _fun12262_ip = 86;
                    continue _fun12262
                }
            case 79:
                var1 = var2.name;
                _fun12262_ip = 113;
                continue _fun12262;
            case 86:
                var5 = var2.name;
                var4 = var5.substring;
                var3 = 0;
                var3 = var4.bind(var5)(var3, var7);
                if (var3) {
                    _fun12262_ip = 110;
                    continue _fun12262
                }
            case 108:
                var3 = undefined;
            case 110:
                var1 = var3;
            case 113:
                var0.function = var1;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 2;
                var1 = var4[var1];
                var1 = var3.bind(var6)(var1);
                var1 = var1.DEFAULT_BUNDLE_NAME;
                var0.abs_path = var1;
                var3 = var2.line;
                var1 = undefined;
                if (!(var6 !== var3)) {
                    _fun12262_ip = 183;
                    continue _fun12262
                }
            case 164:
                var3 = global;
                var4 = var3.Number;
                var3 = var2.line;
                var1 = var4.bind(var6)(var3);
            case 183:
                var0.lineno = var1;
                var3 = var2.column;
                var1 = undefined;
                if (!(var1 !== var3)) {
                    _fun12262_ip = 219;
                    continue _fun12262
                }
            case 200:
                var3 = global;
                var4 = var3.Number;
                var3 = var2.column;
                var1 = var4.bind(var6)(var3);
            case 219:
                var0.colno = var1;
                return var0;
            case 226:
                var0 = {};
                var1 = var2.name;
                var0.function = var1;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 2;
                var1 = var4[var1];
                var1 = var3.bind(var6)(var1);
                var1 = var1.DEFAULT_BUNDLE_NAME;
                var0.abs_path = var1;
                var3 = 1;
                var0.lineno = var3;
                var1 = global;
                var5 = var1.Number;
                var4 = var2.funcVirtAddr;
                var4 = var5.bind(var6)(var4);
                var5 = var1.Number;
                var1 = var2.offset;
                var1 = var5.bind(var6)(var1);
                var1 = var4 + var1;
                var1 = var1 + var3;
                var0.colno = var1;
                return var0;
            case 331:
                var1 = var2.name;
                var0 = '[root]';
                if (!(var0 !== var1)) {
                    _fun12262_ip = 360;
                    continue _fun12262
                }
            case 346:
                var0 = {};
                var1 = var2.name;
                var0.function = var1;
                _fun12262_ip = 382;
                continue _fun12262;
            case 360:
                var1 = {};
                var2 = var2.name;
                var1.function = var2;
                var2 = false;
                var1.in_app = var2;
                var0 = var1;
            case 382:
                return var0;
        }
    };
    var _closure1_slot4 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var7);
    var0 = 0;
    var5 = var5[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var6 = var5.MAX_PROFILE_DURATION_MS;
    var5 = 1000000;
    var5 = var5 * var6;
    var _closure1_slot2 = var5;
    var4 = function(arg0) { // Original name: convertToSentryProfile, environment: var4
        _fun12263: for (var _fun12263_ip = 0;;) switch (_fun12263_ip) {
            case 0:
                var5 = arg0;
                var2 = undefined;
                var15 = undefined;
                var16 = undefined;
                var17 = undefined;
                var4 = undefined;
                var0 = var5.samples;
                var0 = var0.length;
                var3 = 0;
                if (!(var3 !== var0)) {
                    _fun12263_ip = 752;
                    continue _fun12263
                }
            case 33:
                var1 = _closure1_slot3;
                var0 = var5.samples;
                var1 = var1.bind(var2)(var0);
                var7 = var1.samples;
                var0 = var1.hermesStacks;
                var9 = var1.jsThreads;
                var20 = var5.stackFrames;
                var10 = new Array(0);
                var1 = global;
                var6 = var1.Map;
                var8 = var6.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var6
                    }
                });
                var28 = var8;
                var6 = new var28[var6](var27);
                var6 = var6 instanceof Object ? var6 : var8;
                var18 = var20;
                var8 = undefined;
                for (var11 in var18)
                    case 120: {
                        case 129: var23 = var11;
                        var21 = var1.Object;
                        var21 = var21.prototype;
                        var22 = var21.hasOwnProperty;
                        var21 = var22.call;
                        var21 = var21.bind(var22)(var20, var23);
                        if (!var21) {
                            _fun12263_ip = 120;
                            continue _fun12263
                        }
                        case 163: var21 = var20[var23];
                        var8 = var21;
                        if (!var8) {
                            _fun12263_ip = 120;
                            continue _fun12263
                        }
                        case 173: var24 = var6.set;
                        var22 = var1.Number;
                        var23 = var22.bind(var2)(var23);
                        var22 = var10.length;
                        var22 = var24.bind(var6)(var23, var22);
                        var23 = var10.push;
                        var22 = _closure1_slot4;
                        var22 = var22.bind(var2)(var21);
                        var22 = var23.bind(var10)(var22);
                        var8 = var21;
                        _fun12263_ip = 120;
                        continue _fun12263;
                    }
            case 224:
                var8 = {};
                var8.frames = var10;
                var8.hermesStackFrameIdToSentryFrameIdMap = var6;
                var6 = var8.frames;
                var10 = var8.hermesStackFrameIdToSentryFrameIdMap;
                var11 = var5.stackFrames;
                var12 = var11;
                var13 = var10;
                var18 = undefined;
                var5 = undefined;
                var8 = undefined;
                var19 = undefined;
                var20 = undefined;
                var21 = undefined;
                var10 = var1.Map;
                var11 = var10.prototype;
                var11 = Object.create(var11, {
                    constructor: {
                        value: var10
                    }
                });
                var28 = var11;
                var10 = new var28[var10](var27);
                var5 = var10 instanceof Object ? var10 : var11;
                var8 = new Array(0);
                var11 = var0;
                var10 = var11[Symbol.iterator];
                var11 = var10().next;
                var0 = null;
            case 310:
                var22 = var11().value;
                var23 = var10;
                if (!(var23 !== var2)) {
                    _fun12263_ip = 467;
                    continue _fun12263
                }
            case 324: // try_start_0
                var23 = var8;
                var25 = var23.length;
                var24 = var5;
                var23 = var24.set;
                var23 = var23.bind(var24)(var22, var25);
                var19 = new Array(0);
                var20 = var22;
                if (!(var2 !== var22)) {
                    _fun12263_ip = 439;
                    continue _fun12263
                }
            case 357:
                var24 = var13;
                var23 = var24.get;
                var22 = var20;
                var22 = var23.bind(var24)(var22);
                var21 = var22;
                if (!(var2 !== var22)) {
                    _fun12263_ip = 396;
                    continue _fun12263
                }
            case 380:
                var24 = var19;
                var23 = var24.push;
                var22 = var21;
                var22 = var23.bind(var24)(var22);
            case 396:
                var23 = var12;
                var22 = var20;
                var23 = var23[var22];
                var18 = var23;
                var22 = undefined;
                if (!(var0 !== var23)) {
                    _fun12263_ip = 432;
                    continue _fun12263
                }
            case 415:
                var23 = var18;
                var22 = undefined;
                if (!(var22 !== var23)) {
                    _fun12263_ip = 432;
                    continue _fun12263
                }
            case 424:
                var23 = var18;
                var22 = var23.parent;
            case 432:
                var20 = var22;
                if (var2 !== var22) {
                    _fun12263_ip = 357;
                    continue _fun12263
                }
            case 439:
                var24 = var8;
                var23 = var24.push;
                var22 = var19;
                var22 = var23.bind(var24)(var22);
            case 455: // try_end0
                _fun12263_ip = 310;
                continue _fun12263;
            case 460: // catch_target0
                CatchBlockStart(arg_register = 0);
                var10.return();
                throw var0;
            case 467:
                var0 = {};
                var0.stacks = var8;
                var0.hermesStackToSentryStackMap = var5;
                var5 = var0.stacks;
                var15 = var0.hermesStackToSentryStackMap;
                var13 = var7;
                var8 = var13[Symbol.iterator];
                var13 = var8().next;
                var12 = 1;
                var11 = '[Profiling] Hermes Stack ID ';
                var10 = ' not found when mapping to Sentry Stack ID.';
                var0 = -1;
            case 518:
                var18 = var13().value;
                var19 = var8;
                if (!(var19 !== var2)) {
                    _fun12263_ip = 646;
                    continue _fun12263
                }
            case 529: // try_start_1
                var16 = var18;
                var20 = var15;
                var19 = var20.get;
                var18 = var18.stack_id;
                var18 = var19.bind(var20)(var18);
                var17 = var18;
                if (!(var2 !== var18)) {
                    _fun12263_ip = 572;
                    continue _fun12263
                }
            case 558:
                var19 = var16;
                var18 = var17;
                var19.stack_id = var18;
                _fun12263_ip = 637;
                continue _fun12263;
            case 572:
                var19 = _closure1_slot0;
                var18 = _closure1_slot1;
                var18 = var18[var12];
                var18 = var19.bind(var2)(var18);
                var21 = var18.debug;
                var20 = var21.error;
                var18 = var16;
                var22 = var18.stack_id;
                var19 = var1.HermesInternal;
                var19 = var19.concat;
                var19 = var19.bind(var11)(var22, var10);
                var19 = var20.bind(var21)(var19);
                var18.stack_id = var0;
            case 637: // try_end1
                _fun12263_ip = 518;
                continue _fun12263;
            case 639: // catch_target1
                CatchBlockStart(arg_register = 0);
                var8.return();
                throw var0;
            case 646:
                var4 = {};
                var0 = var9;
                var8 = var0[Symbol.iterator];
                var0 = var8().next;
            case 654:
                var11 = var0().value;
                var9 = var8;
                if (!(var9 !== var2)) {
                    _fun12263_ip = 691;
                    continue _fun12263
                }
            case 665: // try_start_2
                var10 = var4;
                var9 = {
                    'name': 'JavaScriptThread',
                    'priority': 1
                };
                var10[var11] = var9;
            case 682: // try_end2
                _fun12263_ip = 654;
                continue _fun12263;
            case 684: // catch_target2
                CatchBlockStart(arg_register = 0);
                var8.return();
                throw var0;
            case 691:
                var0 = {};
                var0.samples = var7;
                var0.frames = var6;
                var0.stacks = var5;
                var5 = var4;
                var0.thread_metadata = var5;
                var4 = var1.Object;
                var1 = var4.keys;
                var1 = var1.bind(var4)(var5);
                var1 = var1[var3];
                if (var1) {
                    _fun12263_ip = 745;
                    continue _fun12263
                }
            case 739:
                var1 = '0';
            case 745:
                var0.active_thread_id = var1;
                return var0;
            case 752:
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 1;
                var0 = var3[var0];
                var0 = var1.bind(var2)(var0);
                var2 = var0.debug;
                var1 = var2.warn;
                var0 = '[Profiling] No samples found in profile.';
                var0 = var1.bind(var2)(var0);
                var0 = null;
                return var0;
        }
    };
    var2.convertToSentryProfile = var4;
    var2.mapSamples = var3;
    var2.parseHermesJSStackFrame = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1119, 817, 1116]);