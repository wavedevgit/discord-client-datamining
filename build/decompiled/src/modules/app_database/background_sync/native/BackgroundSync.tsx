// modules/app_database/background_sync/native/BackgroundSync.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun112723: for (var _fun112723_ip = 0;;) switch (_fun112723_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun112723_ip = 46;
                    continue _fun112723
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun112723_ip = 55;
                    continue _fun112723
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun112723_ip = 345;
                    continue _fun112723
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun112723_ip = 323;
                    continue _fun112723
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun112723_ip = 283;
                    continue _fun112723
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun112723_ip = 270;
                    continue _fun112723
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun112723_ip = 163;
                    continue _fun112723
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun112723_ip = 179;
                    continue _fun112723
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun112723_ip = 249;
                    continue _fun112723
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun112723_ip = 249;
                    continue _fun112723
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun112723_ip = 234;
                    continue _fun112723
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun112723_ip = 247;
                    continue _fun112723
                }
            case 234:
                var8 = _closure1_slot19;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun112723_ip = 265;
                continue _fun112723;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun112723_ip = 283;
                continue _fun112723;
            case 270:
                var6 = _closure1_slot19;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun112723_ip = 323;
                    continue _fun112723
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun112723_ip = 330;
                    continue _fun112723
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun112724: for (var _fun112724_ip = 0;;) switch (_fun112724_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun112724_ip = 56;
                                continue _fun112724
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun112724_ip = 67;
                            continue _fun112724;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0, arg1() {
        _fun112725: for (var _fun112725_ip = 0;;) switch (_fun112725_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun112725_ip = 23;
                    continue _fun112725
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun112725_ip = 33;
                    continue _fun112725
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun112725_ip = 70;
                    continue _fun112725
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun112725_ip = 55;
                    continue _fun112725
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun112728: for (var _fun112728_ip = 0;;) switch (_fun112728_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun112728_ip = 1372;
                            continue _fun112728
                        }
                    case 13:
                        var4 = var1.force;
                        var2 = undefined;
                        if (!(var4 === var2)) {
                            _fun112728_ip = 27;
                            continue _fun112728
                        }
                    case 25:
                        var4 = false;
                    case 27:
                        var14 = var4;
                        var4 = var1.messagesOnly;
                        if (!(var4 === var2)) {
                            _fun112728_ip = 42;
                            continue _fun112728
                        }
                    case 40:
                        var4 = false;
                    case 42:
                        var15 = var4;
                        var1 = var1.checkLastMessageId;
                        if (!(var1 === var2)) {
                            _fun112728_ip = 57;
                            continue _fun112728
                        }
                    case 55:
                        var1 = false;
                    case 57:
                        var18 = var1;
                        var17 = undefined;
                        var12 = undefined;
                        var16 = undefined;
                        var19 = undefined;
                        var6 = undefined;
                        SaveGenerator(address = 74);
                    case 72:
                        return var2;
                    case 74:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun112728_ip = 1369;
                            continue _fun112728
                        }
                    case 83:
                        var8 = _closure1_slot14;
                        var7 = var8.verbose;
                        var3 = 'Starting Background Sync';
                        var3 = var7.bind(var8)(var3);
                        var17 = 25;
                        var9 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var8 = 14;
                        var7 = var3[var8];
                        var7 = var9.bind(var2)(var7);
                        var11 = var7.BackgroundSyncImprovementsExperiment;
                        var10 = var11.getConfig;
                        var7 = {};
                        var13 = 'BackgroundSync';
                        var7.location = var13;
                        var7 = var10.bind(var11)(var7);
                        var7 = var7.variation;
                        var3 = var3[var8];
                        var3 = var9.bind(var2)(var3);
                        var3 = var3.BackgroundSyncImprovementsExperimentVariation;
                        var3 = var3.DEGRADED;
                        if (!(var3 !== var7)) {
                            _fun112728_ip = 1366;
                            continue _fun112728
                        }
                    case 191:
                        var9 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var8];
                        var3 = var9.bind(var2)(var3);
                        var3 = var3.BackgroundSyncImprovementsExperimentVariation;
                        var3 = var3.ENABLED;
                        if (!(var3 !== var7)) {
                            _fun112728_ip = 255;
                            continue _fun112728
                        }
                    case 224:
                        var7 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var8];
                        var3 = var7.bind(var2)(var3);
                        var3 = var3.BackgroundSyncImprovementsExperimentVariation;
                        var3 = var3.CONTROL;
                        _fun112728_ip = 258;
                        continue _fun112728;
                    case 255:
                        var17 = 50;
                    case 258:
                        var3 = var14;
                        if (var3) {
                            _fun112728_ip = 472;
                            continue _fun112728
                        }
                    case 267:
                        var7 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var9 = 15;
                        var3 = var3[var9];
                        var3 = var7.bind(var2)(var3);
                        var8 = var3.Storage;
                        var7 = var8.get;
                        var3 = _closure1_slot16;
                        var3 = var7.bind(var8)(var3);
                        var7 = null;
                        var7 = var7 != var3;
                        var8 = 0;
                        if (!var7) {
                            _fun112728_ip = 321;
                            continue _fun112728
                        }
                    case 318:
                        var8 = var3;
                    case 321:
                        var3 = global;
                        var10 = var3.Date;
                        var7 = var10.now;
                        var7 = var7.bind(var10)();
                        if (!(!(var8 > var7))) {
                            _fun112728_ip = 394;
                            continue _fun112728
                        }
                    case 342:
                        var10 = var3.Date;
                        var7 = var10.now;
                        var7 = var7.bind(var10)();
                        var8 = var7 - var8;
                        var7 = _closure1_slot15;
                        if (!(var8 < var7)) {
                            _fun112728_ip = 472;
                            continue _fun112728
                        }
                    case 369:
                        var10 = _closure1_slot14;
                        var8 = var10.log;
                        var7 = 'Skipping Background Sync because it has been too soon';
                        var7 = var8.bind(var10)(var7);
                        var7 = undefined;
                        return var7;
                    case 394:
                        var10 = _closure1_slot14;
                        var8 = var10.log;
                        var7 = 'Skipping Background Sync because of clock skew';
                        var7 = var8.bind(var10)(var7);
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var7 = var7[var9];
                        var7 = var8.bind(var2)(var7);
                        var9 = var7.Storage;
                        var8 = var9.set;
                        var7 = _closure1_slot16;
                        var10 = var3.Date;
                        var3 = var10.now;
                        var3 = var3.bind(var10)();
                        var3 = var8.bind(var9)(var7, var3);
                        var3 = undefined;
                        return var3;
                    case 472:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var3 = 15;
                        var3 = var8[var3];
                        var3 = var7.bind(var2)(var3);
                        var10 = var3.Storage;
                        var9 = var10.set;
                        var7 = _closure1_slot16;
                        var8 = global;
                        var11 = var8.Date;
                        var3 = var11.now;
                        var3 = var3.bind(var11)();
                        var3 = var9.bind(var10)(var7, var3);
                        var7 = _closure1_slot10;
                        var3 = var7.refresh;
                        var3 = var3.bind(var7)();
                        SaveGenerator(address = 548);
                    case 546:
                        return var3;
                    case 548:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 7);
                        if (var7) {
                            _fun112728_ip = 1363;
                            continue _fun112728
                        }
                    case 557:
                        var7 = _closure1_slot10;
                        var7 = var7.isLowDisk;
                        if (var7) {
                            _fun112728_ip = 1340;
                            continue _fun112728
                        }
                    case 573:
                        var12 = {};
                        var9 = var8.Date;
                        var7 = var9.now;
                        var9 = var7.bind(var9)();
                        var16 = var9;
                        var7 = var8.String;
                        var19 = var7.bind(var2)(var9);
                        var6 = -1;
                    case 610: // try_start_0 // try_start_1
                        var9 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var11 = 16;
                        var7 = var7[var11];
                        var9 = var9.bind(var2)(var7);
                        var7 = var9.startBackgroundTask;
                        var7 = var7.bind(var9)();
                        SaveGenerator(address = 644);
                    case 642:
                        return var7;
                    case 644:
                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 9);
                        if (var9) {
                            _fun112728_ip = 926;
                            continue _fun112728
                        }
                    case 653:
                        var6 = var7;
                        var13 = var8.Promise;
                        var10 = var13.all;
                        var9 = _closure1_slot21;
                        var22 = var19;
                        var21 = var12;
                        var20 = var16;
                        var19 = var9.bind(var2)(var22, var21, var20);
                        var9 = new Array(3);
                        var9[0] = var19;
                        var19 = _closure1_slot25;
                        var24 = var18;
                        var23 = var17;
                        var28 = undefined;
                        var27 = var22;
                        var26 = var21;
                        var25 = var20;
                        var17 = var28[var19](var27, var26, var25, var24, var23, var22);
                        var9[1] = var17;
                        var17 = var15;
                        if (var17) {
                            _fun112728_ip = 747;
                            continue _fun112728
                        }
                    case 731:
                        var18 = _closure1_slot23;
                        var17 = var12;
                        var14 = var18.bind(var2)(var17, var16, var14);
                        _fun112728_ip = 763;
                        continue _fun112728;
                    case 747:
                        var17 = var8.Promise;
                        var16 = var17.resolve;
                        var14 = var16.bind(var17)();
                    case 763:
                        var9[2] = var14;
                        var9 = var10.bind(var13)(var9);
                        SaveGenerator(address = 776);
                    case 774:
                        return var9;
                    case 776:
                        ResumeGenerator(result_out_reg = 9, return_bool_out_reg = 10);
                        if (var10) {
                            _fun112728_ip = 834;
                            continue _fun112728
                        }
                    case 782:
                        var13 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var10 = 17;
                        var10 = var14[var10];
                        var14 = var13.bind(var2)(var10);
                        var13 = var14.dispatch;
                        var10 = {};
                        var16 = 'BACKGROUND_SYNC_FINISHED';
                        var10.type = var16;
                        var10.messagesOnly = var15;
                        var10 = var13.bind(var14)(var10);
                    case 829: // try_end0
                        _fun112728_ip = 1156;
                        continue _fun112728;
                    case 834: // try_end1
                        var13 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var14 = 19;
                        var14 = var10[var14];
                        var16 = var13.bind(var2)(var14);
                        var15 = var16.track;
                        var14 = _closure1_slot11;
                        var14 = var14.BACKGROUND_SYNC_COMPLETED;
                        var17 = var12;
                        var14 = var15.bind(var16)(var14, var17);
                        var16 = _closure1_slot14;
                        var15 = var16.verbose;
                        var14 = 'Finished Background Sync';
                        var14 = var15.bind(var16)(var14, var17);
                        var10 = var10[var11];
                        var14 = var13.bind(var2)(var10);
                        var13 = var14.endBackgroundTask;
                        var10 = var6;
                        var10 = var13.bind(var14)(var10);
                        return var9;
                    case 926:
                        var10 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var13 = 19;
                        var13 = var9[var13];
                        var15 = var10.bind(var2)(var13);
                        var14 = var15.track;
                        var13 = _closure1_slot11;
                        var13 = var13.BACKGROUND_SYNC_COMPLETED;
                        var16 = var12;
                        var13 = var14.bind(var15)(var13, var16);
                        var15 = _closure1_slot14;
                        var14 = var15.verbose;
                        var13 = 'Finished Background Sync';
                        var13 = var14.bind(var15)(var13, var16);
                        var9 = var9[var11];
                        var11 = var10.bind(var2)(var9);
                        var10 = var11.endBackgroundTask;
                        var9 = var6;
                        var9 = var10.bind(var11)(var9);
                        return var7;
                    case 1018: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register = 7);
                        var5 = var7;
                        var9 = var7.status;
                        var7 = 429;
                        if (!(var7 !== var9)) {
                            _fun112728_ip = 1064;
                            continue _fun112728
                        }
                    case 1038:
                        var11 = _closure1_slot14;
                        var10 = var11.error;
                        var9 = var5;
                        var7 = 'Background sync encountered error';
                        var7 = var10.bind(var11)(var7, var9);
                        _fun112728_ip = 1085;
                        continue _fun112728;
                    case 1064:
                        var10 = _closure1_slot14;
                        var9 = var10.verbose;
                        var7 = 'Background sync was rate limited';
                        var7 = var9.bind(var10)(var7);
                    case 1085:
                        var7 = var5;
                        var7 = var7.timeout;
                        if (var7) {
                            _fun112728_ip = 1131;
                            continue _fun112728
                        }
                    case 1097:
                        var9 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var7 = 18;
                        var7 = var10[var7];
                        var10 = var9.bind(var2)(var7);
                        var9 = var10.captureException;
                        var7 = var5;
                        var7 = var9.bind(var10)(var7);
                    case 1131:
                        var7 = var12;
                        var8 = var8.String;
                        var5 = var5.message;
                        var5 = var8.bind(var2)(var5);
                        var7.error = var5;
                    case 1156: // try_end2
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var5 = 19;
                        var5 = var8[var5];
                        var10 = var7.bind(var2)(var5);
                        var9 = var10.track;
                        var5 = _closure1_slot11;
                        var5 = var5.BACKGROUND_SYNC_COMPLETED;
                        var11 = var12;
                        var5 = var9.bind(var10)(var5, var11);
                        var10 = _closure1_slot14;
                        var9 = var10.verbose;
                        var5 = 'Finished Background Sync';
                        var5 = var9.bind(var10)(var5, var11);
                        var5 = 16;
                        var5 = var8[var5];
                        var8 = var7.bind(var2)(var5);
                        var7 = var8.endBackgroundTask;
                        var5 = var6;
                        var5 = var7.bind(var8)(var5);
                        _fun112728_ip = 1360;
                        continue _fun112728;
                    case 1250: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register = 5);
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var7 = 19;
                        var7 = var9[var7];
                        var11 = var8.bind(var2)(var7);
                        var10 = var11.track;
                        var7 = _closure1_slot11;
                        var7 = var7.BACKGROUND_SYNC_COMPLETED;
                        var7 = var10.bind(var11)(var7, var12);
                        var11 = _closure1_slot14;
                        var10 = var11.verbose;
                        var7 = 'Finished Background Sync';
                        var7 = var10.bind(var11)(var7, var12);
                        var7 = 16;
                        var7 = var9[var7];
                        var8 = var8.bind(var2)(var7);
                        var7 = var8.endBackgroundTask;
                        var6 = var7.bind(var8)(var6);
                        throw var5;
                    case 1340:
                        var6 = _closure1_slot14;
                        var5 = var6.log;
                        var4 = 'Skipping Background Sync because disk is low';
                        var4 = var5.bind(var6)(var4);
                    case 1360:
                        return var2;
                    case 1363:
                        return var3;
                    case 1366:
                        return var2;
                    case 1369:
                        return var1;
                    case 1372:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot20 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot22;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun112732: for (var _fun112732_ip = 0;;) switch (_fun112732_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg1;
                        var7 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun112732_ip = 615;
                            continue _fun112732
                        }
                    case 18:
                        var3 = undefined;
                        var _closure4_slot0 = var3;
                        var _closure4_slot1 = var3;
                        var _closure4_slot2 = var3;
                        var5 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var1 = 20;
                        var1 = var8[var1];
                        var5 = var5.bind(var3)(var1);
                        var1 = var5.messages;
                        var10 = var1.bind(var5)();
                        _closure4_slot0 = var10;
                        var9 = null;
                        if (!(var9 == var10)) {
                            _fun112732_ip = 100;
                            continue _fun112732
                        }
                    case 75:
                        var8 = _closure1_slot14;
                        var5 = var8.log;
                        var1 = 'Aborting BG sync because there is no database';
                        var1 = var5.bind(var8)(var1);
                        _fun112732_ip = 606;
                        continue _fun112732;
                    case 100:
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var1 = 21;
                        var1 = var13[var1];
                        var1 = var14.bind(var3)(var1);
                        var8 = var1.HTTP;
                        var5 = var8.post;
                        var1 = {};
                        var11 = _closure1_slot12;
                        var11 = var11.MESSAGE_LOG_PRIVATE_CHANNELS;
                        var1.url = var11;
                        var12 = {};
                        var11 = _closure1_slot13;
                        var12.per_channel_limit = var11;
                        var11 = 15;
                        var13 = var13[var11];
                        var13 = var14.bind(var3)(var13);
                        var15 = var13.Storage;
                        var14 = var15.get;
                        var13 = _closure1_slot17;
                        var13 = var14.bind(var15)(var13);
                        var12.last_synced_message_id = var13;
                        var1.body = var12;
                        var12 = 5000;
                        var1.timeout = var12;
                        var12 = false;
                        var1.rejectWithError = var12;
                        var1 = var5.bind(var8)(var1);
                        SaveGenerator(address = 227);
                    case 225:
                        return var1;
                    case 227:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun112732_ip = 612;
                            continue _fun112732
                        }
                    case 236:
                        var13 = var1.body;
                        _closure4_slot1 = var13;
                        var5 = global;
                        var12 = var5.Date;
                        var8 = var12.now;
                        var8 = var8.bind(var12)();
                        var8 = var8 - var7;
                        var6.time_finish_fetch_private_channel_messages = var8;
                        var8 = 0;
                        var6.num_private_channel_messages = var8;
                        var12 = var5.JSON;
                        var8 = var12.stringify;
                        var8 = var8.bind(var12)(var13);
                        var8 = var8.length;
                        var6.size_private_channel_messages = var8;
                        var8 = var13.latest_message_id;
                        if (!(var9 != var8)) {
                            _fun112732_ip = 366;
                            continue _fun112732
                        }
                    case 322:
                        var9 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var8 = var8[var11];
                        var8 = var9.bind(var3)(var8);
                        var12 = var8.Storage;
                        var11 = var12.set;
                        var9 = _closure1_slot17;
                        var8 = var13.latest_message_id;
                        var8 = var11.bind(var12)(var9, var8);
                    case 366:
                        var9 = {};
                        _closure4_slot2 = var9;
                        var11 = var5.Promise;
                        var8 = var11.all;
                        var14 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var12 = 22;
                        var12 = var15[var12];
                        var15 = var14.bind(var3)(var12);
                        var14 = var15.keys;
                        var12 = var13.changes_by_channel_id;
                        var14 = var14.bind(var15)(var12);
                        var12 = var14.map;
                        var2 = function(arg0) { // Environment: var2
                            var6 = arg0;
                            var5 = _closure1_slot27;
                            var11 = _closure4_slot0;
                            var10 = _closure4_slot2;
                            var0 = _closure4_slot1;
                            var0 = var0.changes_by_channel_id;
                            var7 = var0[var6];
                            var12 = undefined;
                            var9 = null;
                            var8 = var6;
                            var0 = var12[var5](var11, var10, var9, var8, var7, var6);
                            return var0;
                        };
                        var2 = var12.bind(var14)(var2);
                        var2 = var8.bind(var11)(var2);
                        SaveGenerator(address = 446);
                    case 444:
                        return var2;
                    case 446:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 8);
                        if (var8) {
                            _fun112732_ip = 609;
                            continue _fun112732
                        }
                    case 455:
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var8 = 23;
                        var8 = var12[var8];
                        var11 = var11.bind(var3)(var8);
                        var8 = var11.isEmpty;
                        var8 = var8.bind(var11)(var9);
                        if (var8) {
                            _fun112732_ip = 606;
                            continue _fun112732
                        }
                    case 489:
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var8 = 17;
                        var8 = var12[var8];
                        var12 = var11.bind(var3)(var8);
                        var11 = var12.dispatch;
                        var8 = {};
                        var14 = 'BACKGROUND_SYNC_CHANNEL_MESSAGES';
                        var8.type = var14;
                        var13 = var13.changes_by_channel_id;
                        var8.changesByChannelId = var13;
                        var8 = var11.bind(var12)(var8);
                        var8 = _closure1_slot29;
                        var18 = arg0;
                        var21 = undefined;
                        var20 = var10;
                        var19 = var9;
                        var17 = var6;
                        var16 = undefined;
                        var4 = var21[var8](var20, var19, var18, var17, var16, var15);
                        SaveGenerator(address = 568);
                    case 566:
                        return var4;
                    case 568:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 8);
                        if (var8) {
                            _fun112732_ip = 603;
                            continue _fun112732
                        }
                    case 574:
                        var8 = var5.Date;
                        var5 = var8.now;
                        var5 = var5.bind(var8)();
                        var5 = var5 - var7;
                        var6.time_save_private_channel_messages = var5;
                        _fun112732_ip = 606;
                        continue _fun112732;
                    case 603:
                        return var4;
                    case 606:
                        return var3;
                    case 609:
                        return var2;
                    case 612:
                        return var1;
                    case 615:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot22 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot22 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot24;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot23 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun112737: for (var _fun112737_ip = 0;;) switch (_fun112737_ip) {
                    case 0:
                        StartGenerator();
                        var7 = arg0;
                        var8 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun112737_ip = 815;
                            continue _fun112737
                        }
                    case 18:
                        var _closure4_slot0 = var7;
                        var6 = global;
                        var3 = var6.Promise;
                        var2 = var3.all;
                        var10 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var1 = 24;
                        var1 = var11[var1];
                        var5 = undefined;
                        var4 = var10.bind(var5)(var1);
                        var1 = var4.getCommittedVersions;
                        var4 = var1.bind(var4)();
                        var1 = new Array(3);
                        var1[0] = var4;
                        var4 = 25;
                        var4 = var11[var4];
                        var12 = var10.bind(var5)(var4);
                        var4 = var12.getCommittedVersions;
                        var4 = var4.bind(var12)();
                        var1[1] = var4;
                        var4 = 26;
                        var4 = var11[var4];
                        var10 = var10.bind(var5)(var4);
                        var4 = var10.canUseGuildVersions;
                        var4 = var4.bind(var10)();
                        var1[2] = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 140);
                    case 138:
                        return var1;
                    case 140:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun112737_ip = 812;
                            continue _fun112737
                        }
                    case 149:
                        var3 = _closure1_slot3;
                        var2 = 3;
                        var3 = var3.bind(var5)(var1, var2);
                        var4 = 0;
                        var15 = var3[var4];
                        var2 = 1;
                        var13 = var3[var2];
                        var2 = 2;
                        var11 = var3[var2];
                        var3 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var2 = 21;
                        var2 = var10[var2];
                        var2 = var3.bind(var5)(var2);
                        var10 = var2.HTTP;
                        var3 = var10.post;
                        var2 = {};
                        var12 = _closure1_slot12;
                        var12 = var12.BACKGROUND_SYNC;
                        var2.url = var12;
                        if (var11) {
                            _fun112737_ip = 278;
                            continue _fun112737
                        }
                    case 232:
                        var11 = {};
                        var16 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var12 = 27;
                        var12 = var17[var12];
                        var17 = var16.bind(var5)(var12);
                        var16 = var17.isChannelMetadataObfuscationEnabled;
                        var12 = 'background-sync';
                        var12 = var16.bind(var17)(var12);
                        var11.channel_privacy = var12;
                        _fun112737_ip = 352;
                        continue _fun112737;
                    case 278:
                        var12 = {};
                        var12.guild_versions = var15;
                        var15 = var13.highest_last_message_id;
                        var12.highest_last_message_id = var15;
                        var13 = var13.api_code_version;
                        var12.api_code_version = var13;
                        var15 = _closure1_slot0;
                        var16 = _closure1_slot2;
                        var13 = 27;
                        var13 = var16[var13];
                        var16 = var15.bind(var5)(var13);
                        var15 = var16.isChannelMetadataObfuscationEnabled;
                        var13 = 'background-sync';
                        var13 = var15.bind(var16)(var13);
                        var12.channel_privacy = var13;
                        var11 = var12;
                    case 352:
                        var2.body = var11;
                        var11 = 5000;
                        var2.timeout = var11;
                        var11 = false;
                        var2.rejectWithError = var11;
                        var2 = var3.bind(var10)(var2);
                        SaveGenerator(address = 382);
                    case 380:
                        return var2;
                    case 382:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun112737_ip = 809;
                            continue _fun112737
                        }
                    case 391:
                        var3 = var2.body;
                        var10 = var3.guilds;
                        var13 = var3.api_code_version;
                        var11 = var6.Date;
                        var3 = var11.now;
                        var3 = var3.bind(var11)();
                        var3 = var3 - var8;
                        var7.time_finish_fetch_guild_data = var3;
                        var11 = var6.JSON;
                        var3 = var11.stringify;
                        var3 = var3.bind(var11)(var10);
                        var3 = var3.length;
                        var7.size_guild_data = var3;
                        var3 = var10.length;
                        var7.num_guilds = var3;
                        var7.num_unavailable_guilds = var4;
                        var3 = var10.length;
                        if (!(var4 !== var3)) {
                            _fun112737_ip = 800;
                            continue _fun112737
                        }
                    case 494:
                        var4 = var10.map;
                        var3 = function(arg0) { // Environment: var14
                            _fun112738: for (var _fun112738_ip = 0;;) switch (_fun112738_ip) {
                                case 0:
                                    var2 = arg0;
                                    var1 = var2.unavailable;
                                    var0 = var2;
                                    if (!var1) {
                                        _fun112738_ip = 60;
                                        continue _fun112738
                                    }
                                case 15:
                                    var3 = _closure4_slot0;
                                    var1 = var3.num_unavailable_guilds;
                                    var1 = var1 + 1;
                                    var3.num_unavailable_guilds = var1;
                                    var1 = {};
                                    var2 = var2.id;
                                    var1.id = var2;
                                    var2 = 'unavailable';
                                    var1.data_mode = var2;
                                    var0 = var1;
                                case 60:
                                    return var0;
                            }
                        };
                        var16 = var4.bind(var10)(var3);
                        var10 = var6.Promise;
                        var3 = var10.prototype;
                        var4 = Object.create(var3, {
                            constructor: {
                                value: var10
                            }
                        });
                        var19 = function(arg0) { // Environment: var14
                            var0 = global;
                            var3 = var0.setTimeout;
                            var2 = undefined;
                            var1 = arg0;
                            var0 = 0;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var20 = var4;
                        var3 = new var20[var10](var19, var18);
                        var3 = var3 instanceof Object ? var3 : var4;
                        SaveGenerator(address = 548);
                    case 546:
                        return var3;
                    case 548:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun112737_ip = 806;
                            continue _fun112737
                        }
                    case 557:
                        var4 = arg2;
                        if (var4) {
                            _fun112737_ip = 610;
                            continue _fun112737
                        }
                    case 563:
                        var10 = _closure1_slot9;
                        var4 = var10.getState;
                        var10 = var4.bind(var10)();
                        var4 = 'active';
                        if (!(var4 === var10)) {
                            _fun112737_ip = 610;
                            continue _fun112737
                        }
                    case 585:
                        var11 = _closure1_slot14;
                        var10 = var11.log;
                        var4 = 'Skipping guild data background sync because app is now active';
                        var4 = var10.bind(var11)(var4);
                        _fun112737_ip = 800;
                        continue _fun112737;
                    case 610:
                        var11 = new Array(0);
                        var10 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var4 = 17;
                        var4 = var12[var4];
                        var12 = var10.bind(var5)(var4);
                        var10 = var12.dispatch;
                        var4 = {};
                        var15 = 'BACKGROUND_SYNC';
                        var4.type = var15;
                        var4.guilds = var16;
                        var17 = var16.map;
                        var15 = function(arg0) { // Environment: var14
                            _fun112740: for (var _fun112740_ip = 0;;) switch (_fun112740_ip) {
                                case 0:
                                    var3 = arg0;
                                    var0 = var3.data_mode;
                                    var2 = 'unavailable';
                                    if (!(var2 !== var0)) {
                                        _fun112740_ip = 137;
                                        continue _fun112740
                                    }
                                case 17:
                                    var0 = var3.data_mode;
                                    var4 = 'partial';
                                    if (!(var4 !== var0)) {
                                        _fun112740_ip = 64;
                                        continue _fun112740
                                    }
                                case 31:
                                    var0 = {};
                                    var1 = 'full';
                                    var0.dataMode = var1;
                                    var1 = var3.id;
                                    var0.guildId = var1;
                                    var1 = var3.emojis;
                                    var0.entities = var1;
                                    _fun112740_ip = 135;
                                    continue _fun112740;
                                case 64:
                                    var1 = {};
                                    var1.dataMode = var4;
                                    var4 = var3.id;
                                    var1.guildId = var4;
                                    var4 = var3.partial_updates;
                                    var4 = var4.emojis;
                                    var5 = null;
                                    if (!(var5 == var4)) {
                                        _fun112740_ip = 102;
                                        continue _fun112740
                                    }
                                case 98:
                                    var4 = new Array(0);
                                case 102:
                                    var1.updatedEntities = var4;
                                    var4 = var3.partial_updates;
                                    var4 = var4.deleted_emoji_ids;
                                    if (!(var5 == var4)) {
                                        _fun112740_ip = 127;
                                        continue _fun112740
                                    }
                                case 123:
                                    var4 = new Array(0);
                                case 127:
                                    var1.deletedEntityIds = var4;
                                    var0 = var1;
                                case 135:
                                    _fun112740_ip = 156;
                                    continue _fun112740;
                                case 137:
                                    var1 = {};
                                    var3 = var3.id;
                                    var1.guildId = var3;
                                    var1.dataMode = var2;
                                    var0 = var1;
                                case 156:
                                    return var0;
                            }
                        };
                        var15 = var17.bind(var16)(var15);
                        var4.emojis = var15;
                        var15 = var16.map;
                        var14 = function(arg0) { // Environment: var14
                            _fun112741: for (var _fun112741_ip = 0;;) switch (_fun112741_ip) {
                                case 0:
                                    var3 = arg0;
                                    var0 = var3.data_mode;
                                    var2 = 'unavailable';
                                    if (!(var2 !== var0)) {
                                        _fun112741_ip = 137;
                                        continue _fun112741
                                    }
                                case 17:
                                    var0 = var3.data_mode;
                                    var4 = 'partial';
                                    if (!(var4 !== var0)) {
                                        _fun112741_ip = 64;
                                        continue _fun112741
                                    }
                                case 31:
                                    var0 = {};
                                    var1 = 'full';
                                    var0.dataMode = var1;
                                    var1 = var3.id;
                                    var0.guildId = var1;
                                    var1 = var3.stickers;
                                    var0.entities = var1;
                                    _fun112741_ip = 135;
                                    continue _fun112741;
                                case 64:
                                    var1 = {};
                                    var1.dataMode = var4;
                                    var4 = var3.id;
                                    var1.guildId = var4;
                                    var4 = var3.partial_updates;
                                    var4 = var4.stickers;
                                    var5 = null;
                                    if (!(var5 == var4)) {
                                        _fun112741_ip = 102;
                                        continue _fun112741
                                    }
                                case 98:
                                    var4 = new Array(0);
                                case 102:
                                    var1.updatedEntities = var4;
                                    var4 = var3.partial_updates;
                                    var4 = var4.deleted_sticker_ids;
                                    if (!(var5 == var4)) {
                                        _fun112741_ip = 127;
                                        continue _fun112741
                                    }
                                case 123:
                                    var4 = new Array(0);
                                case 127:
                                    var1.deletedEntityIds = var4;
                                    var0 = var1;
                                case 135:
                                    _fun112741_ip = 156;
                                    continue _fun112741;
                                case 137:
                                    var1 = {};
                                    var3 = var3.id;
                                    var1.guildId = var3;
                                    var1.dataMode = var2;
                                    var0 = var1;
                                case 156:
                                    return var0;
                            }
                        };
                        var14 = var15.bind(var16)(var14);
                        var4.stickers = var14;
                        var4.apiCodeVersion = var13;
                        var4.promisesForBackgroundSyncToWaitOn = var11;
                        var4 = var10.bind(var12)(var4);
                        var10 = var6.Promise;
                        var4 = var10.all;
                        var4 = var4.bind(var10)(var11);
                        SaveGenerator(address = 734);
                    case 732:
                        return var4;
                    case 734:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 10);
                        if (var10) {
                            _fun112737_ip = 803;
                            continue _fun112737
                        }
                    case 740:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var9 = 28;
                        var9 = var11[var9];
                        var11 = var10.bind(var5)(var9);
                        var10 = var11.writeCaches;
                        var9 = true;
                        var9 = var10.bind(var11)(var9);
                        var9 = var6.Date;
                        var6 = var9.now;
                        var6 = var6.bind(var9)();
                        var6 = var6 - var8;
                        var7.time_save_guild_data = var6;
                    case 800:
                        return var5;
                    case 803:
                        return var4;
                    case 806:
                        return var3;
                    case 809:
                        return var2;
                    case 812:
                        return var1;
                    case 815:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot24 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot24 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot26;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot25 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1, arg2, arg3, arg4) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3, arg4) { // Original name: ?anon_0_, environment: var0
                _fun112745: for (var _fun112745_ip = 0;;) switch (_fun112745_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg1;
                        var7 = arg2;
                        var16 = arg3;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun112745_ip = 1108;
                            continue _fun112745
                        }
                    case 21:
                        var3 = undefined;
                        var _closure4_slot0 = var3;
                        var5 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var2 = 20;
                        var2 = var8[var2];
                        var5 = var5.bind(var3)(var2);
                        var2 = var5.messages;
                        var11 = var2.bind(var5)();
                        _closure4_slot0 = var11;
                        var22 = null;
                        if (!(var22 == var11)) {
                            _fun112745_ip = 95;
                            continue _fun112745
                        }
                    case 70:
                        var8 = _closure1_slot14;
                        var5 = var8.log;
                        var2 = 'Aborting BG sync because there is no database';
                        var2 = var5.bind(var8)(var2);
                        _fun112745_ip = 1099;
                        continue _fun112745;
                    case 95:
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var13 = 23;
                        var2 = var2[var13];
                        var8 = var5.bind(var3)(var2);
                        var5 = global;
                        var10 = var5.Array;
                        var9 = var10.from;
                        var12 = _closure1_slot8;
                        var2 = var12.getReadStatesByChannel;
                        var12 = var2.bind(var12)();
                        var2 = var12.values;
                        var2 = var2.bind(var12)();
                        var2 = var9.bind(var10)(var2);
                        var9 = var8.bind(var3)(var2);
                        var8 = var9.filter;
                        var2 = function(arg0) { // Environment: var1
                            _fun112746: for (var _fun112746_ip = 0;;) switch (_fun112746_ip) {
                                case 0:
                                    var3 = arg0;
                                    var2 = _closure1_slot7;
                                    var1 = var2.getBasicChannel;
                                    var0 = var3.channelId;
                                    var2 = var1.bind(var2)(var0);
                                    var4 = null;
                                    var0 = var4 != var2;
                                    if (!var0) {
                                        _fun112746_ip = 105;
                                        continue _fun112746
                                    }
                                case 35:
                                    var7 = _closure1_slot5;
                                    var1 = var2.type;
                                    var6 = undefined;
                                    var1 = var7.bind(var6)(var1);
                                    var1 = !var1;
                                    if (!var1) {
                                        _fun112746_ip = 74;
                                        continue _fun112746
                                    }
                                case 57:
                                    var5 = _closure1_slot6;
                                    var2 = var2.type;
                                    var2 = var5.bind(var6)(var2);
                                    var1 = !var2;
                                case 74:
                                    if (!var1) {
                                        _fun112746_ip = 102;
                                        continue _fun112746
                                    }
                                case 77:
                                    var2 = var3.guildId;
                                    var2 = var4 != var2;
                                    if (!var2) {
                                        _fun112746_ip = 99;
                                        continue _fun112746
                                    }
                                case 89:
                                    var3 = var3.lastViewed;
                                    var2 = var4 != var3;
                                case 99:
                                    var1 = var2;
                                case 102:
                                    var0 = var1;
                                case 105:
                                    return var0;
                            }
                        };
                        var9 = var8.bind(var9)(var2);
                        var8 = var9.sortBy;
                        var2 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var0 = var0.lastViewed;
                            var0 = -var0;
                            return var0;
                        };
                        var10 = var8.bind(var9)(var2);
                        var9 = var10.slice;
                        var8 = 0;
                        var2 = arg4;
                        var9 = var9.bind(var10)(var8, var2);
                        var2 = var9.value;
                        var9 = var2.bind(var9)();
                        var14 = _closure1_slot14;
                        var12 = var14.verbose;
                        var10 = var9.map;
                        var2 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var0 = var0.channelId;
                            return var0;
                        };
                        var10 = var10.bind(var9)(var2);
                        var2 = 'Guild Message Background Syncing for ';
                        var2 = var12.bind(var14)(var2, var10);
                        var2 = var9.length;
                        if (!(var8 !== var2)) {
                            _fun112745_ip = 1099;
                            continue _fun112745
                        }
                    case 274:
                        var10 = var5.Promise;
                        var2 = var10.all;
                        var12 = var9.map;
                        var1 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var2 = _closure4_slot0;
                            var1 = var2.withoutLogging;
                            var4 = var1.bind(var2)();
                            var3 = var4.getLatest;
                            var2 = var0.guildId;
                            var1 = var0.channelId;
                            var0 = 1;
                            var0 = var3.bind(var4)(var2, var1, var0);
                            return var0;
                        };
                        var1 = var12.bind(var9)(var1);
                        var1 = var2.bind(var10)(var1);
                        SaveGenerator(address = 312);
                    case 310:
                        return var1;
                    case 312:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun112745_ip = 1105;
                            continue _fun112745
                        }
                    case 321:
                        var15 = {};
                        var2 = var9.length;
                        var2 = var8 < var2;
                        var14 = 22;
                        var12 = '0';
                        var10 = 0;
                        if (!var2) {
                            _fun112745_ip = 454;
                            continue _fun112745
                        }
                    case 346:
                        var2 = var1[var10];
                        var17 = var2[var8];
                        var18 = var22 == var17;
                        var2 = undefined;
                        if (var18) {
                            _fun112745_ip = 368;
                            continue _fun112745
                        }
                    case 363:
                        var2 = var17.id;
                    case 368:
                        var18 = var22 != var2;
                        var17 = var12;
                        if (!var18) {
                            _fun112745_ip = 381;
                            continue _fun112745
                        }
                    case 378:
                        var17 = var2;
                    case 381:
                        var2 = var9[var10];
                        var18 = var16;
                        if (!var18) {
                            _fun112745_ip = 430;
                            continue _fun112745
                        }
                    case 391:
                        var20 = _closure1_slot1;
                        var19 = _closure1_slot2;
                        var19 = var19[var14];
                        var21 = var20.bind(var3)(var19);
                        var20 = var21.compare;
                        var19 = var2.lastMessageId;
                        var19 = var20.bind(var21)(var17, var19);
                        var18 = var19 >= var8;
                    case 430:
                        if (var18) {
                            _fun112745_ip = 442;
                            continue _fun112745
                        }
                    case 433:
                        var2 = var2.channelId;
                        var15[var2] = var17;
                    case 442:
                        var10 = var10 + 1;
                        var2 = var9.length;
                        if (var10 < var2) {
                            _fun112745_ip = 346;
                            continue _fun112745
                        }
                    case 454:
                        var14 = {};
                        var2 = _closure1_slot18;
                        var12 = var2.bind(var3)(var1);
                        var10 = var12.bind(var3)();
                        var2 = var10.done;
                        if (var2) {
                            _fun112745_ip = 547;
                            continue _fun112745
                        }
                    case 477:
                        var16 = _closure1_slot18;
                        var2 = var10.value;
                        var17 = var16.bind(var3)(var2);
                        var16 = var17.bind(var3)();
                        var2 = var16.done;
                        if (var2) {
                            _fun112745_ip = 532;
                            continue _fun112745
                        }
                    case 503:
                        var18 = var16.value;
                        var2 = var18.id;
                        var14[var2] = var18;
                        var18 = var17.bind(var3)();
                        var2 = var18.done;
                        var16 = var18;
                        if (!var2) {
                            _fun112745_ip = 503;
                            continue _fun112745
                        }
                    case 532:
                        var16 = var12.bind(var3)();
                        var2 = var16.done;
                        var10 = var16;
                        if (!var2) {
                            _fun112745_ip = 477;
                            continue _fun112745
                        }
                    case 547:
                        var10 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var2 = 21;
                        var2 = var12[var2];
                        var2 = var10.bind(var3)(var2);
                        var12 = var2.HTTP;
                        var10 = var12.post;
                        var2 = {};
                        var14 = _closure1_slot12;
                        var14 = var14.MESSAGE_LOG_GUILD_CHANNELS;
                        var2.url = var14;
                        var14 = {};
                        var16 = _closure1_slot13;
                        var14.per_channel_limit = var16;
                        var14.last_synced_message_id_by_channel_id = var15;
                        var2.body = var14;
                        var14 = 5000;
                        var2.timeout = var14;
                        var14 = false;
                        var2.rejectWithError = var14;
                        var2 = var10.bind(var12)(var2);
                        SaveGenerator(address = 642);
                    case 640:
                        return var2;
                    case 642:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 10);
                        if (var10) {
                            _fun112745_ip = 1102;
                            continue _fun112745
                        }
                    case 651:
                        var21 = var2.body;
                        var12 = var5.Date;
                        var10 = var12.now;
                        var10 = var10.bind(var12)();
                        var10 = var10 - var7;
                        var6.time_finish_fetch_guild_channel_messages = var10;
                        var6.num_guild_channel_messages = var8;
                        var10 = var5.JSON;
                        var8 = var10.stringify;
                        var8 = var8.bind(var10)(var21);
                        var8 = var8.length;
                        var6.size_guild_channel_messages = var8;
                        var10 = {};
                        var12 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var8 = 29;
                        var8 = var14[var8];
                        var8 = var12.bind(var3)(var8);
                        var14 = var8.BackgroundSyncFixExperiment;
                        var12 = var14.getConfig;
                        var8 = {};
                        var15 = 'backgroundSyncGuildChannels';
                        var8.location = var15;
                        var8 = var12.bind(var14)(var8);
                        var8 = var8.enabled;
                        if (!var8) {
                            _fun112745_ip = 833;
                            continue _fun112745
                        }
                    case 778:
                        var8 = _closure1_slot18;
                        var12 = var8.bind(var3)(var9);
                        var9 = var12.bind(var3)();
                        var8 = var9.done;
                        if (var8) {
                            _fun112745_ip = 833;
                            continue _fun112745
                        }
                    case 799:
                        var8 = var9.value;
                        var14 = var8.channelId;
                        var8 = var8.guildId;
                        var10[var14] = var8;
                        var14 = var12.bind(var3)();
                        var8 = var14.done;
                        var9 = var14;
                        if (!var8) {
                            _fun112745_ip = 799;
                            continue _fun112745
                        }
                    case 833:
                        var9 = {};
                        var14 = {};
                        var19 = var21.change_logs_by_channel_id;
                        var15 = undefined;
                        for (var16 in var19)
                            case 853: {
                                case 862: var24 = var16;
                                var8 = var21.change_logs_by_channel_id;
                                var8 = var8[var24];
                                var8 = var8.changes;
                                if (var22 == var8) {
                                    _fun112745_ip = 853;
                                    continue _fun112745
                                }
                                case 885: var14[var24] = var8;
                                var23 = _closure1_slot27;
                                var15 = var10[var24];
                                var8 = var22 != var15;
                                var12 = null;
                                if (!var8) {
                                    _fun112745_ip = 909;
                                    continue _fun112745
                                }
                                case 906: var12 = var15;
                                case 909: var8 = var21.change_logs_by_channel_id;
                                var8 = var8[var24];
                                var25 = var8.changes;
                                var30 = undefined;
                                var29 = var11;
                                var28 = var9;
                                var27 = var12;
                                var26 = var24;
                                var8 = var30[var23](var29, var28, var27, var26, var25, var24);
                                SaveGenerator(address = 947);
                                case 945: return var8;
                                case 947: ResumeGenerator(result_out_reg = 8, return_bool_out_reg = 12);
                                if (!var12) {
                                    _fun112745_ip = 853;
                                    continue _fun112745
                                }
                                case 953: return var8;
                            }
                    case 956:
                        var12 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var8 = var8[var13];
                        var12 = var12.bind(var3)(var8);
                        var8 = var12.isEmpty;
                        var8 = var8.bind(var12)(var9);
                        if (var8) {
                            _fun112745_ip = 1099;
                            continue _fun112745
                        }
                    case 987:
                        var12 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var8 = 17;
                        var8 = var13[var8];
                        var13 = var12.bind(var3)(var8);
                        var12 = var13.dispatch;
                        var8 = {};
                        var15 = 'BACKGROUND_SYNC_CHANNEL_MESSAGES';
                        var8.type = var15;
                        var8.changesByChannelId = var14;
                        var8 = var12.bind(var13)(var8);
                        var8 = _closure1_slot29;
                        var27 = arg0;
                        var30 = undefined;
                        var29 = var11;
                        var28 = var9;
                        var26 = var6;
                        var25 = var10;
                        var4 = var30[var8](var29, var28, var27, var26, var25, var24);
                        SaveGenerator(address = 1061);
                    case 1059:
                        return var4;
                    case 1061:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 8);
                        if (var8) {
                            _fun112745_ip = 1096;
                            continue _fun112745
                        }
                    case 1067:
                        var8 = var5.Date;
                        var5 = var8.now;
                        var5 = var5.bind(var8)();
                        var5 = var5 - var7;
                        var6.time_save_guild_channel_messages = var5;
                        _fun112745_ip = 1099;
                        continue _fun112745;
                    case 1096:
                        return var4;
                    case 1099:
                        return var3;
                    case 1102:
                        return var2;
                    case 1105:
                        return var1;
                    case 1108:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot26 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot26 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot28;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot27 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1, arg2, arg3, arg4) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3, arg4) { // Original name: ?anon_0_, environment: var0
                _fun112753: for (var _fun112753_ip = 0;;) switch (_fun112753_ip) {
                    case 0:
                        StartGenerator();
                        var2 = arg4;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun112753_ip = 521;
                            continue _fun112753
                        }
                    case 15:
                        var3 = arg0;
                        var _closure4_slot0 = var3;
                        var3 = arg2;
                        var _closure4_slot1 = var3;
                        var3 = null;
                        if (!(var3 != var2)) {
                            _fun112753_ip = 513;
                            continue _fun112753
                        }
                    case 38:
                        var3 = var2.new_messages;
                        var9 = undefined;
                        if (!(var9 === var3)) {
                            _fun112753_ip = 54;
                            continue _fun112753
                        }
                    case 50:
                        var3 = new Array(0);
                    case 54:
                        var8 = var2.modified_messages;
                        if (!(var9 === var8)) {
                            _fun112753_ip = 68;
                            continue _fun112753
                        }
                    case 64:
                        var8 = new Array(0);
                    case 68:
                        var2 = var2.deleted_message_ids;
                        if (!(var9 === var2)) {
                            _fun112753_ip = 82;
                            continue _fun112753
                        }
                    case 78:
                        var2 = new Array(0);
                    case 82:
                        var6 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var10 = 23;
                        var5 = var12[var10];
                        var7 = var6.bind(var9)(var5);
                        var6 = var7.partition;
                        var11 = _closure1_slot0;
                        var5 = 30;
                        var5 = var12[var5];
                        var5 = var11.bind(var9)(var5);
                        var5 = var5.isLikelyNotDelta;
                        var7 = var6.bind(var7)(var8, var5);
                        var6 = _closure1_slot3;
                        var5 = 2;
                        var7 = var6.bind(var9)(var7, var5);
                        var6 = 0;
                        var18 = var7[var6];
                        var5 = 1;
                        var5 = var7[var5];
                        var8 = var3.push;
                        var7 = new Array(0);
                        var19 = var7;
                        var17 = 0;
                        var11 = arraySpread(var19, var18, var17);
                        var19 = var8;
                        var18 = var7;
                        var17 = var3;
                        var7 = apply(var19, var18, var17);
                        var7 = var5.length;
                        if (!(var7 > var6)) {
                            _fun112753_ip = 467;
                            continue _fun112753
                        }
                    case 208:
                        var8 = global;
                        var11 = var8.Promise;
                        var7 = var11.all;
                        var12 = var5.map;
                        var1 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var3 = _closure4_slot0;
                            var2 = var3.withoutLogging;
                            var4 = var2.bind(var3)();
                            var3 = var4.get;
                            var2 = _closure4_slot1;
                            var1 = var0.channel_id;
                            var0 = var0.id;
                            var0 = var3.bind(var4)(var2, var1, var0);
                            return var0;
                        };
                        var1 = var12.bind(var5)(var1);
                        var1 = var7.bind(var11)(var1);
                        SaveGenerator(address = 248);
                    case 246:
                        return var1;
                    case 248:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 7);
                        if (var7) {
                            _fun112753_ip = 518;
                            continue _fun112753
                        }
                    case 257:
                        var12 = var1.filter;
                        var13 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var11 = 31;
                        var11 = var7[var11];
                        var11 = var13.bind(var9)(var11);
                        var11 = var11.isNotNullish;
                        var11 = var12.bind(var1)(var11);
                        var13 = _closure1_slot14;
                        var12 = var13.verbose;
                        var16 = var11.length;
                        var8 = var8.HermesInternal;
                        var15 = var8.concat;
                        var14 = 'Fetched ';
                        var8 = ' modified messages from the database';
                        var8 = var15.bind(var14)(var16, var8);
                        var8 = var12.bind(var13)(var8);
                        var8 = _closure1_slot1;
                        var7 = var7[var10];
                        var10 = var8.bind(var9)(var7);
                        var8 = var10.keyBy;
                        var7 = 'id';
                        var8 = var8.bind(var10)(var11, var7);
                        var4 = _closure1_slot18;
                        var7 = var4.bind(var9)(var5);
                        var5 = var7.bind(var9)();
                        var4 = var5.done;
                        if (var4) {
                            _fun112753_ip = 467;
                            continue _fun112753
                        }
                    case 392:
                        var11 = var5.value;
                        var4 = var11.id;
                        var4 = var4 in var8;
                        if (!var4) {
                            _fun112753_ip = 452;
                            continue _fun112753
                        }
                    case 409:
                        var10 = var3.push;
                        var4 = {};
                        var12 = var11.id;
                        var12 = var8[var12];
                        var18 = var12.message;
                        var19 = var4;
                        var12 = copyDataProperties(var19, var18);
                        var19 = var4;
                        var18 = var11;
                        var11 = copyDataProperties(var19, var18);
                        var4 = var10.bind(var3)(var4);
                    case 452:
                        var10 = var7.bind(var9)();
                        var4 = var10.done;
                        var5 = var10;
                        if (!var4) {
                            _fun112753_ip = 392;
                            continue _fun112753
                        }
                    case 467:
                        var4 = var3.length;
                        var4 = var4 > var6;
                        if (var4) {
                            _fun112753_ip = 488;
                            continue _fun112753
                        }
                    case 479:
                        var5 = var2.length;
                        var4 = var5 > var6;
                    case 488:
                        if (!var4) {
                            _fun112753_ip = 513;
                            continue _fun112753
                        }
                    case 491:
                        var4 = new Array(2);
                        var4[0] = var3;
                        var4[1] = var2;
                        var3 = arg1;
                        var2 = arg3;
                        var3[var2] = var4;
                    case 513:
                        var2 = undefined;
                        return var2;
                    case 518:
                        return var1;
                    case 521:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot28 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot28 = var0;
    var0 = function arg0, arg1, arg2, arg3, arg4() {
        var3 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = arg3;
        var _closure2_slot2 = var1;
        var1 = arg4;
        var _closure2_slot3 = var1;
        var2 = var3.transaction;
        var1 = function(arg0) { // Environment: var0
            _fun112756: for (var _fun112756_ip = 0;;) switch (_fun112756_ip) {
                case 0:
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var6 = function arg0() {
                        _fun112757: for (var _fun112757_ip = 0;;) switch (_fun112757_ip) {
                            case 0:
                                var9 = arg0;
                                var _closure4_slot0 = var9;
                                var4 = _closure1_slot3;
                                var0 = _closure2_slot0;
                                var3 = var0[var9];
                                var0 = undefined;
                                var1 = 2;
                                var3 = var4.bind(var0)(var3, var1);
                                var1 = 0;
                                var4 = var3[var1];
                                var1 = 1;
                                var1 = var3[var1];
                                var3 = _closure2_slot3;
                                var6 = null;
                                var7 = var6 == var3;
                                var3 = undefined;
                                if (var7) {
                                    _fun112757_ip = 74;
                                    continue _fun112757
                                }
                            case 66:
                                var7 = _closure2_slot3;
                                var3 = var7[var9];
                            case 74:
                                var8 = var6 != var3;
                                var7 = null;
                                if (!var8) {
                                    _fun112757_ip = 86;
                                    continue _fun112757
                                }
                            case 83:
                                var7 = var3;
                            case 86:
                                var _closure4_slot1 = var7;
                                var3 = _closure2_slot3;
                                if (!(var6 == var3)) {
                                    _fun112757_ip = 125;
                                    continue _fun112757
                                }
                            case 98:
                                var6 = _closure2_slot2;
                                var8 = var6.num_private_channel_messages;
                                var3 = var4.length;
                                var3 = var8 + var3;
                                var6.num_private_channel_messages = var3;
                                _fun112757_ip = 150;
                                continue _fun112757;
                            case 125:
                                var6 = _closure2_slot2;
                                var8 = var6.num_guild_channel_messages;
                                var3 = var4.length;
                                var3 = var8 + var3;
                                var6.num_guild_channel_messages = var3;
                            case 150:
                                var3 = _closure1_slot18;
                                var11 = var3.bind(var0)(var4);
                                var8 = var11.bind(var0)();
                                var6 = var8.done;
                                var10 = 32;
                                if (var6) {
                                    _fun112757_ip = 260;
                                    continue _fun112757
                                }
                            case 177:
                                var20 = var8.value;
                                var14 = _closure3_slot0;
                                var13 = var14.put;
                                var15 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var6 = var6[var10];
                                var6 = var15.bind(var0)(var6);
                                var16 = var6.KvMessage;
                                var15 = var16.fromMessage;
                                var19 = _closure2_slot1;
                                var23 = var16;
                                var22 = var7;
                                var21 = var9;
                                var6 = var23[var15](var22, var21, var20, var19, var18);
                                var6 = var13.bind(var14)(var7, var9, var6);
                                var13 = var11.bind(var0)();
                                var6 = var13.done;
                                var8 = var13;
                                if (!var6) {
                                    _fun112757_ip = 177;
                                    continue _fun112757
                                }
                            case 260:
                                var6 = var1.forEach;
                                var5 = function(arg0) { // Environment: var5
                                    var4 = _closure3_slot0;
                                    var3 = var4.deleteMessage;
                                    var2 = _closure4_slot1;
                                    var1 = _closure4_slot0;
                                    var0 = arg0;
                                    var0 = var3.bind(var4)(var2, var1, var0);
                                    return var0;
                                };
                                var5 = var6.bind(var1)(var5);
                                var6 = _closure3_slot0;
                                var5 = var6.trimChannel;
                                var3 = 200;
                                var3 = var5.bind(var6)(var7, var9, var3);
                                var3 = _closure1_slot14;
                                var2 = var3.verbose;
                                var22 = var4.length;
                                var20 = var1.length;
                                var1 = global;
                                var1 = var1.HermesInternal;
                                var6 = var1.concat;
                                var23 = 'Wrote ';
                                var21 = ' and deleted ';
                                var19 = ' messages for ';
                                var18 = var9;
                                var1 = var23[var6](var22, var21, var20, var19, var18, var17);
                                var1 = var2.bind(var3)(var1);
                                return var0;
                        }
                    };
                    var4 = _closure2_slot0;
                    var0 = undefined;
                    for (var1 in var4)
                        case 33: {
                            case 42: var7 = var1;
                            var7 = var6.bind(var0)(var7);
                            _fun112756_ip = 33;
                            continue _fun112756;
                        }
                case 52:
                    return var0;
            }
        };
        var0 = 'Background Sync';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot29 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Platform;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.isPrivate;
    var _closure1_slot5 = var6;
    var3 = var3.isThread;
    var _closure1_slot6 = var3;
    var6 = 4;
    var3 = var5[var6];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.AnalyticEvents;
    var _closure1_slot11 = var8;
    var8 = var3.Endpoints;
    var _closure1_slot12 = var8;
    var3 = var3.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var5[var6];
    var3 = var4.bind(var0)(var3);
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = 12;
    var3 = var5[var3];
    var9 = var7.bind(var0)(var3);
    var3 = var9.prototype;
    var8 = Object.create(var3, {
        constructor: {
            value: var9
        }
    });
    var12 = 'BackgroundSync';
    var13 = var8;
    var3 = new var13[var9](var12, var11);
    var3 = var3 instanceof Object ? var3 : var8;
    var _closure1_slot14 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var3 = var3.Millis;
    var3 = var3.HOUR;
    var3 = var6 * var3;
    var _closure1_slot15 = var3;
    var3 = 'lastSyncTime';
    var _closure1_slot16 = var3;
    var3 = 'lastSyncedPrivateChannelsMessageId';
    var _closure1_slot17 = var3;
    var3 = 33;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_database/background_sync/native/BackgroundSync.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot20;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.backgroundSync = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 27, 1376, 1372, 3947, 5284, 4368, 660, 5594, 4737, 1410, 3, 667, 14474, 587, 6546, 806, 1207, 795, 1646, 507, 21, 22, 12212, 12215, 12213, 12435, 11108, 14475, 4366, 1304, 4379, 2]);