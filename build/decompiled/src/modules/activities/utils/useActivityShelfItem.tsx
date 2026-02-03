// modules/activities/utils/useActivityShelfItem.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var9;
    var4 = function arg0, arg1() {
        _fun107250: for (var _fun107250_ip = 0;;) switch (_fun107250_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.flags;
                var1 = null;
                var1 = var1 != var0;
                var3 = 0;
                if (!var1) {
                    _fun107250_ip = 22;
                    continue _fun107250
                }
            case 19:
                var3 = var0;
            case 22:
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var4 = 10;
                var2 = var0[var4];
                var0 = undefined;
                var6 = var5.bind(var0)(var2);
                var5 = var6.hasFlag;
                var2 = _closure1_slot6;
                var2 = var2.EMBEDDED_RELEASED;
                var2 = var5.bind(var6)(var3, var2);
                var5 = var3;
                if (var2) {
                    _fun107250_ip = 119;
                    continue _fun107250
                }
            case 75:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var4 = var3.bind(var0)(var2);
                var3 = var4.hasFlag;
                var2 = _closure1_slot6;
                var2 = var2.EMBEDDED_FIRST_PARTY;
                var2 = var3.bind(var4)(var5, var2);
                if (var2) {
                    _fun107250_ip = 119;
                    continue _fun107250
                }
            case 117:
                return var0;
            case 119:
                var2 = arg1;
                var3 = var2.client_platform_config;
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 4;
                var2 = var6[var2];
                var4 = var4.bind(var0)(var2);
                var5 = _closure1_slot0;
                var2 = 5;
                var2 = var6[var2];
                var5 = var5.bind(var0)(var2);
                var2 = var5.getOS;
                var2 = var2.bind(var5)();
                var2 = var4.bind(var0)(var2);
                var2 = var3[var2];
                var4 = var2.release_phase;
                var2 = _closure1_slot5;
                var1 = var2.includes;
                var1 = var1.bind(var2)(var4);
                var0 = undefined;
                if (!var1) {
                    _fun107250_ip = 263;
                    continue _fun107250
                }
            case 208:
                var3 = var4.replace;
                var2 = '_';
                var1 = ' ';
                var4 = var3.bind(var4)(var2, var1);
                var3 = var4.replace;
                var2 = /(^\w|\s\w)/g;
                var1 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var0 = var1.toUpperCase;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var3.bind(var4)(var2, var1);
            case 263:
                return var0;
        }
    };
    var _closure1_slot8 = var4;
    var3 = function arg0() {
        _fun107252: for (var _fun107252_ip = 0;;) switch (_fun107252_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.context;
                var12 = var0.applicationId;
                var10 = var0.fetchesApplication;
                var5 = undefined;
                if (!(var10 === var5)) {
                    _fun107252_ip = 29;
                    continue _fun107252
                }
            case 27:
                var10 = true;
            case 29:
                var _closure2_slot0 = var5;
                var0 = _closure1_slot7;
                var0 = var0.START;
                var6 = var1.type;
                var4 = 'channel';
                var7 = undefined;
                if (!(var4 === var6)) {
                    _fun107252_ip = 66;
                    continue _fun107252
                }
            case 61:
                var7 = var1.channel;
            case 66:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 11;
                var1 = var9[var1];
                var1 = var8.bind(var5)(var1);
                var11 = var1.bind(var5)();
                var1 = 12;
                var1 = var9[var1];
                var4 = var8.bind(var5)(var1);
                var1 = {};
                var1.fetchesApplication = var10;
                var6 = var4.bind(var5)(var1);
                var4 = _closure1_slot0;
                var1 = 13;
                var1 = var9[var1];
                var4 = var4.bind(var5)(var1);
                var1 = var4.useGetOrFetchApplication;
                var1 = var1.bind(var4)(var12, var10);
                _closure2_slot0 = var1;
                var4 = 8;
                var4 = var9[var4];
                var4 = var8.bind(var5)(var4);
                var8 = var4.bind(var5)(var7);
                var4 = var8.find;
                var3 = function(arg0) { // Environment: var3
                    _fun107253: for (var _fun107253_ip = 0;;) switch (_fun107253_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.embeddedActivity;
                            var3 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 != var3;
                            if (!var0) {
                                _fun107253_ip = 43;
                                continue _fun107253
                            }
                        case 25:
                            var2 = _closure2_slot0;
                            var2 = var2.id;
                            var1 = var1.applicationId;
                            var0 = var2 === var1;
                        case 43:
                            return var0;
                    }
                };
                var4 = var4.bind(var8)(var3);
                var3 = null;
                if (!(var3 != var1)) {
                    _fun107252_ip = 298;
                    continue _fun107252
                }
            case 186:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 14;
                var8 = var10[var8];
                var10 = var9.bind(var5)(var8);
                var9 = var10.getEmbeddedActivityLocationChannelId;
                var12 = var3 == var11;
                var8 = undefined;
                if (var12) {
                    _fun107252_ip = 226;
                    continue _fun107252
                }
            case 221:
                var8 = var11.location;
            case 226:
                var8 = var9.bind(var10)(var8);
                if (!(var3 != var7)) {
                    _fun107252_ip = 267;
                    continue _fun107252
                }
            case 235:
                var7 = var7.id;
                if (!(var8 === var7)) {
                    _fun107252_ip = 267;
                    continue _fun107252
                }
            case 244:
                var7 = var3 == var6;
                var5 = undefined;
                if (var7) {
                    _fun107252_ip = 258;
                    continue _fun107252
                }
            case 253:
                var5 = var6.id;
            case 258:
                var1 = var1.id;
                if (!(var5 !== var1)) {
                    _fun107252_ip = 286;
                    continue _fun107252
                }
            case 267:
                var1 = var0;
                if (!(var3 != var4)) {
                    _fun107252_ip = 296;
                    continue _fun107252
                }
            case 274:
                var3 = _closure1_slot7;
                var1 = var3.JOIN;
                _fun107252_ip = 296;
                continue _fun107252;
            case 286:
                var2 = _closure1_slot7;
                var1 = var2.LEAVE;
            case 296:
                return var1;
            case 298:
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var1 = function arg0() {
        _fun107254: for (var _fun107254_ip = 0;;) switch (_fun107254_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.application;
                var2 = var1.botUserIdForAppDM;
                var _closure2_slot0 = var2;
                var9 = var1.context;
                var _closure2_slot1 = var9;
                var2 = var1.locationObject;
                var _closure2_slot2 = var2;
                var2 = var1.embeddedActivitiesManager;
                var _closure2_slot3 = var2;
                var2 = var1.onActivityItemSelectedProp;
                var _closure2_slot4 = var2;
                var2 = var1.launchingComponentId;
                var _closure2_slot5 = var2;
                var2 = var1.commandOrigin;
                var _closure2_slot6 = var2;
                var2 = var1.sectionName;
                var _closure2_slot7 = var2;
                var2 = var1.source;
                var _closure2_slot8 = var2;
                var7 = var1.fetchesApplication;
                var3 = undefined;
                if (!(var7 === var3)) {
                    _fun107254_ip = 114;
                    continue _fun107254
                }
            case 112:
                var7 = true;
            case 114:
                var2 = var1.customId;
                var _closure2_slot9 = var2;
                var2 = var1.referrerId;
                var _closure2_slot10 = var2;
                var1 = var1.onConfirmActivityLaunchChecksAlertOpen;
                var _closure2_slot11 = var1;
                var _closure2_slot12 = var3;
                var _closure2_slot13 = var3;
                var _closure2_slot14 = var3;
                var _closure2_slot15 = var3;
                var2 = null;
                var4 = var2 == var5;
                var1 = undefined;
                if (var4) {
                    _fun107254_ip = 176;
                    continue _fun107254
                }
            case 171:
                var1 = var5.id;
            case 176:
                var4 = var2 != var1;
                var8 = '';
                if (!var4) {
                    _fun107254_ip = 190;
                    continue _fun107254
                }
            case 187:
                var8 = var1;
            case 190:
                _closure2_slot12 = var8;
                var6 = _closure1_slot9;
                var4 = {};
                var4.context = var9;
                var4.applicationId = var8;
                var4.fetchesApplication = var7;
                var4 = var6.bind(var3)(var4);
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 15;
                var6 = var8[var6];
                var6 = var7.bind(var3)(var6);
                var6 = var6.bind(var3)();
                var6 = var6.analyticsLocations;
                _closure2_slot13 = var6;
                var6 = 11;
                var6 = var8[var6];
                var6 = var7.bind(var3)(var6);
                var6 = var6.bind(var3)();
                _closure2_slot14 = var6;
                var7 = _closure1_slot0;
                var6 = 16;
                var6 = var8[var6];
                var7 = var7.bind(var3)(var6);
                var6 = var7.useCanLaunchFrame;
                var6 = var6.bind(var7)(var5);
                _closure2_slot15 = var6;
                if (!(var2 != var5)) {
                    _fun107254_ip = 399;
                    continue _fun107254
                }
            case 310:
                var2 = _closure1_slot7;
                var2 = var2.START;
                if (!(var2 !== var4)) {
                    _fun107254_ip = 381;
                    continue _fun107254
                }
            case 324:
                var2 = _closure1_slot7;
                var2 = var2.JOIN;
                if (!(var2 !== var4)) {
                    _fun107254_ip = 363;
                    continue _fun107254
                }
            case 338:
                var2 = _closure1_slot7;
                var2 = var2.LEAVE;
                if (!(var2 !== var4)) {
                    _fun107254_ip = 354;
                    continue _fun107254
                }
            case 352:
                return var3;
            case 354:
                var2 = function() { // Environment: var0
                    _fun107262: for (var _fun107262_ip = 0;;) switch (_fun107262_ip) {
                        case 0:
                            var1 = _closure1_slot4;
                            var0 = var1.isLaunchingActivity;
                            var0 = var0.bind(var1)();
                            if (var0) {
                                _fun107262_ip = 100;
                                continue _fun107262
                            }
                        case 20:
                            var1 = _closure2_slot14;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun107262_ip = 71;
                                continue _fun107262
                            }
                        case 33:
                            var4 = _closure2_slot3;
                            var3 = var4.leaveActivity;
                            var1 = {};
                            var5 = _closure2_slot14;
                            var5 = var5.location;
                            var1.location = var5;
                            var5 = _closure2_slot12;
                            var1.applicationId = var5;
                            var1 = var3.bind(var4)(var1);
                        case 71:
                            var1 = _closure2_slot4;
                            if (!(var2 != var1)) {
                                _fun107262_ip = 100;
                                continue _fun107262
                            }
                        case 79:
                            var2 = _closure2_slot4;
                            var1 = {};
                            var0 = _closure2_slot12;
                            var1.applicationId = var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 100:
                            var0 = undefined;
                            return var0;
                    }
                };
                return var2;
            case 363:
                var4 = _closure1_slot3;
                var2 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun107260: for (var _fun107260_ip = 0;;) switch (_fun107260_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun107260_ip = 210;
                                    continue _fun107260
                                }
                            case 10:
                                var3 = _closure1_slot4;
                                var2 = var3.isLaunchingActivity;
                                var2 = var2.bind(var3)();
                                if (var2) {
                                    _fun107260_ip = 205;
                                    continue _fun107260
                                }
                            case 33:
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var1 = 20;
                                var1 = var3[var1];
                                var3 = undefined;
                                var2 = var2.bind(var3)(var1);
                                var1 = {};
                                var5 = _closure2_slot12;
                                var1.applicationId = var5;
                                var5 = _closure2_slot1;
                                var7 = var5.type;
                                var6 = 'channel';
                                var5 = undefined;
                                if (!(var6 === var7)) {
                                    _fun107260_ip = 101;
                                    continue _fun107260
                                }
                            case 87:
                                var6 = _closure2_slot1;
                                var6 = var6.channel;
                                var5 = var6.id;
                            case 101:
                                var1.activityChannelId = var5;
                                var5 = _closure2_slot2;
                                var1.locationObject = var5;
                                var5 = _closure2_slot13;
                                var1.analyticsLocations = var5;
                                var5 = _closure2_slot5;
                                var1.componentId = var5;
                                var5 = _closure2_slot7;
                                var1.sectionName = var5;
                                var5 = _closure2_slot8;
                                var1.source = var5;
                                var5 = _closure2_slot9;
                                var1.customId = var5;
                                var4 = _closure2_slot10;
                                var1.referrerId = var4;
                                var3 = var2.bind(var3)(var1);
                                var2 = var3.then;
                                var1 = function(arg0) { // Environment: var1
                                    _fun107261: for (var _fun107261_ip = 0;;) switch (_fun107261_ip) {
                                        case 0:
                                            var0 = arg0;
                                            if (!var0) {
                                                _fun107261_ip = 48;
                                                continue _fun107261
                                            }
                                        case 6:
                                            var2 = _closure2_slot4;
                                            var1 = null;
                                            var2 = var1 == var2;
                                            var4 = undefined;
                                            var1 = undefined;
                                            if (var2) {
                                                _fun107261_ip = 45;
                                                continue _fun107261
                                            }
                                        case 26:
                                            var3 = _closure2_slot4;
                                            var2 = {};
                                            var5 = _closure2_slot12;
                                            var2.applicationId = var5;
                                            var1 = var3.bind(var4)(var2);
                                        case 45:
                                            var0 = var1;
                                        case 48:
                                            return var0;
                                    }
                                };
                                var1 = var2.bind(var3)(var1);
                                SaveGenerator(address = 196);
                            case 194:
                                return var1;
                            case 196:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (!var2) {
                                    _fun107260_ip = 205;
                                    continue _fun107260
                                }
                            case 202:
                                return var1;
                            case 205:
                                var1 = undefined;
                                return var1;
                            case 210:
                                return var0;
                        }
                    };
                    return var0;
                };
                var2 = var4.bind(var3)(var2);
                return var2;
            case 381:
                var2 = _closure1_slot3;
                var1 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun107257: for (var _fun107257_ip = 0;;) switch (_fun107257_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun107257_ip = 398;
                                    continue _fun107257
                                }
                            case 10:
                                var1 = undefined;
                                var6 = undefined;
                                var2 = _closure2_slot15;
                                if (var2) {
                                    _fun107257_ip = 304;
                                    continue _fun107257
                                }
                            case 27:
                                var2 = _closure2_slot1;
                                var4 = var2.type;
                                var3 = 'channel';
                                var2 = undefined;
                                if (!(var3 === var4)) {
                                    _fun107257_ip = 60;
                                    continue _fun107257
                                }
                            case 46:
                                var3 = _closure2_slot1;
                                var3 = var3.channel;
                                var2 = var3.id;
                            case 60:
                                var6 = var2;
                                var3 = _closure2_slot0;
                                var2 = null;
                                if (!(var2 != var3)) {
                                    _fun107257_ip = 141;
                                    continue _fun107257
                                }
                            case 73: // try_start_0
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 18;
                                var2 = var4[var2];
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.openPrivateChannel;
                                var2 = {};
                                var7 = _closure2_slot0;
                                var2.recipientIds = var7;
                                var7 = true;
                                var2.navigateToChannel = var7;
                                var2 = var3.bind(var4)(var2);
                                SaveGenerator(address = 129);
                            case 127:
                                return var2;
                            case 129:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun107257_ip = 296;
                                    continue _fun107257
                                }
                            case 138:
                                var6 = var2;
                            case 141: // try_end0
                                var4 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var3 = 19;
                                var3 = var7[var3];
                                var4 = var4.bind(var1)(var3);
                                var3 = {};
                                var7 = _closure2_slot12;
                                var3.targetApplicationId = var7;
                                var7 = _closure2_slot2;
                                var3.locationObject = var7;
                                var3.channelId = var6;
                                var6 = _closure2_slot13;
                                var3.analyticsLocations = var6;
                                var6 = _closure2_slot5;
                                var3.componentId = var6;
                                var6 = _closure2_slot6;
                                var3.commandOrigin = var6;
                                var6 = _closure2_slot7;
                                var3.sectionName = var6;
                                var6 = _closure2_slot8;
                                var3.source = var6;
                                var6 = _closure2_slot9;
                                var3.customId = var6;
                                var6 = _closure2_slot10;
                                var3.referrerId = var6;
                                var6 = _closure2_slot11;
                                var3.onConfirmActivityLaunchChecksAlertOpen = var6;
                                var6 = var4.bind(var1)(var3);
                                var4 = var6.then;
                                var3 = function(arg0) { // Environment: var3
                                    _fun107258: for (var _fun107258_ip = 0;;) switch (_fun107258_ip) {
                                        case 0:
                                            var0 = arg0;
                                            if (!var0) {
                                                _fun107258_ip = 48;
                                                continue _fun107258
                                            }
                                        case 6:
                                            var2 = _closure2_slot4;
                                            var1 = null;
                                            var2 = var1 == var2;
                                            var4 = undefined;
                                            var1 = undefined;
                                            if (var2) {
                                                _fun107258_ip = 45;
                                                continue _fun107258
                                            }
                                        case 26:
                                            var3 = _closure2_slot4;
                                            var2 = {};
                                            var5 = _closure2_slot12;
                                            var2.applicationId = var5;
                                            var1 = var3.bind(var4)(var2);
                                        case 45:
                                            var0 = var1;
                                        case 48:
                                            return var0;
                                    }
                                };
                                var3 = var4.bind(var6)(var3);
                                SaveGenerator(address = 287);
                            case 285:
                                return var3;
                            case 287:
                                ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                                if (!var4) {
                                    _fun107257_ip = 387;
                                    continue _fun107257
                                }
                            case 293:
                                return var3;
                            case 296:
                                return var2;
                            case 299: // catch_target0
                                CatchBlockStart(arg_register = 2);
                                return var1;
                            case 304: // try_start_1
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 17;
                                var2 = var4[var2];
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.launchFrame;
                                var2 = {};
                                var6 = _closure2_slot12;
                                var2.applicationId = var6;
                                var2 = var3.bind(var4)(var2);
                                SaveGenerator(address = 352);
                            case 350:
                                return var2;
                            case 352:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun107257_ip = 390;
                                    continue _fun107257
                                }
                            case 358:
                                var4 = _closure2_slot4;
                                var3 = null;
                                if (!(var3 != var4)) {
                                    _fun107257_ip = 387;
                                    continue _fun107257
                                }
                            case 368:
                                var4 = _closure2_slot4;
                                var3 = {};
                                var5 = _closure2_slot12;
                                var3.applicationId = var5;
                                var3 = var4.bind(var1)(var3);
                            case 387: // try_end1
                                return var1;
                            case 390:
                                return var2;
                            case 393: // catch_target1
                                CatchBlockStart(arg_register = 2);
                                return var1;
                            case 398:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            case 399:
                var0 = function() { // Environment: var0
                    _fun107255: for (var _fun107255_ip = 0;;) switch (_fun107255_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun107255_ip = 34;
                                continue _fun107255
                            }
                        case 13:
                            var2 = _closure2_slot4;
                            var1 = {};
                            var0 = '';
                            var1.applicationId = var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 34:
                            var0 = undefined;
                            return var0;
                    }
                };
                return var0;
        }
    };
    var _closure1_slot10 = var1;
    var0 = global;
    var11 = var0.Object;
    var10 = var11.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var5);
    var12 = 0;
    var5 = var9[var12];
    var0 = undefined;
    var5 = var7.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var11 = 1;
    var5 = var9[var11];
    var5 = var7.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var10 = 2;
    var5 = var9[var10];
    var5 = var8.bind(var0)(var5);
    var5 = var5.STAFF_RELEASE_PHASES;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var9[var5];
    var5 = var8.bind(var0)(var5);
    var5 = var5.ApplicationFlags;
    var _closure1_slot6 = var5;
    var5 = {};
    var5.START = var12;
    var7 = 'START';
    var5[var12] = var7;
    var5.JOIN = var11;
    var7 = 'JOIN';
    var5[var11] = var7;
    var5.LEAVE = var10;
    var7 = 'LEAVE';
    var5[var10] = var7;
    var _closure1_slot7 = var5;
    var7 = 21;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/activities/utils/useActivityShelfItem.tsx';
    var7 = var8.bind(var9)(var7);
    var6 = function arg0() {
        _fun107263: for (var _fun107263_ip = 0;;) switch (_fun107263_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.activityItem;
                var18 = var2.context;
                var17 = var2.locationObject;
                var15 = var2.onActivityItemSelected;
                var16 = var2.embeddedActivitiesManager;
                var10 = var2.assetNames;
                var5 = undefined;
                if (!(var10 === var5)) {
                    _fun107263_ip = 56;
                    continue _fun107263
                }
            case 46:
                var10 = ['embedded_cover'];
            case 56:
                var19 = var2.backgroundResolution;
                if (!(var19 === var5)) {
                    _fun107263_ip = 69;
                    continue _fun107263
                }
            case 66:
                var19 = 250;
            case 69:
                var14 = var2.launchingComponentId;
                var13 = var2.commandOrigin;
                var12 = var2.source;
                var _closure2_slot0 = var5;
                var11 = var0.application;
                _closure2_slot0 = var11;
                var6 = var0.activity;
                var4 = var6.client_platform_config;
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var3 = 4;
                var3 = var9[var3];
                var7 = var7.bind(var5)(var3);
                var8 = _closure1_slot0;
                var3 = 5;
                var3 = var9[var3];
                var8 = var8.bind(var5)(var3);
                var3 = var8.getOS;
                var3 = var3.bind(var8)();
                var3 = var7.bind(var5)(var3);
                var3 = var4[var3];
                var7 = global;
                var8 = var7.Date;
                var4 = var8.now;
                var8 = var4.bind(var8)();
                var4 = var3.label_until;
                var9 = null;
                var4 = var9 != var4;
                if (!var4) {
                    _fun107263_ip = 228;
                    continue _fun107263
                }
            case 201:
                var22 = var7.Date;
                var21 = var22.parse;
                var20 = var3.label_until;
                var20 = var21.bind(var22)(var20);
                var4 = var8 < var20;
            case 228:
                if (!var4) {
                    _fun107263_ip = 241;
                    continue _fun107263
                }
            case 231:
                var20 = var3.label_from;
                var4 = var9 != var20;
            case 241:
                if (!var4) {
                    _fun107263_ip = 271;
                    continue _fun107263
                }
            case 244:
                var21 = var7.Date;
                var20 = var21.parse;
                var7 = var3.label_from;
                var7 = var20.bind(var21)(var7);
                var4 = var8 > var7;
            case 271:
                var8 = _closure1_slot1;
                var20 = _closure1_slot2;
                var7 = 6;
                var7 = var20[var7];
                var8 = var8.bind(var5)(var7);
                var7 = {};
                var20 = var11.id;
                var7.applicationId = var20;
                var7.size = var19;
                var7.names = var10;
                var10 = 'webp';
                var7.format = var10;
                var10 = var8.bind(var5)(var7);
                var7 = var6.activity_preview_video_asset_id;
                var7 = var9 != var7;
                var9 = null;
                if (!var7) {
                    _fun107263_ip = 377;
                    continue _fun107263
                }
            case 340:
                var8 = _closure1_slot1;
                var19 = _closure1_slot2;
                var7 = 7;
                var7 = var19[var7];
                var8 = var8.bind(var5)(var7);
                var7 = var11.id;
                var6 = var6.activity_preview_video_asset_id;
                var9 = var8.bind(var5)(var7, var6);
            case 377:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 8;
                var6 = var8[var6];
                var7 = var7.bind(var5)(var6);
                var19 = var18.type;
                var8 = 'channel';
                var6 = undefined;
                if (!(var8 === var19)) {
                    _fun107263_ip = 417;
                    continue _fun107263
                }
            case 412:
                var6 = var18.channel;
            case 417:
                var7 = var7.bind(var5)(var6);
                var6 = var7.find;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.embeddedActivity;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var0 = var0.applicationId;
                    var0 = var1 === var0;
                    return var0;
                };
                var8 = var6.bind(var7)(var1);
                var6 = _closure1_slot9;
                var1 = {};
                var1.context = var18;
                var7 = var11.id;
                var1.applicationId = var7;
                var7 = var6.bind(var5)(var1);
                var6 = _closure1_slot10;
                var1 = {};
                var19 = var0.application;
                var1.application = var19;
                var1.context = var18;
                var1.locationObject = var17;
                var1.embeddedActivitiesManager = var16;
                var1.onActivityItemSelectedProp = var15;
                var1.launchingComponentId = var14;
                var1.commandOrigin = var13;
                var1.source = var12;
                var6 = var6.bind(var5)(var1);
                var1 = _closure1_slot8;
                var0 = var0.activity;
                var1 = var1.bind(var5)(var11, var0);
                var0 = {};
                var0.imageBackground = var10;
                var0.videoUrl = var9;
                var0.joinableEmbeddedApp = var8;
                var0.activityAction = var7;
                var0.onActivityItemSelected = var6;
                if (var4) {
                    _fun107263_ip = 598;
                    continue _fun107263
                }
            case 564:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 9;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var2 = var2.EmbeddedActivityLabelTypes;
                var2 = var2.NONE;
                _fun107263_ip = 604;
                continue _fun107263;
            case 598:
                var2 = var3.label_type;
            case 604:
                var0.labelType = var2;
                var0.staffReleasePhase = var1;
                return var0;
        }
    };
    var2.default = var6;
    var2.ActivityAction = var5;
    var2.getStaffReleasePhase = var4;
    var2.useActivityAction = var3;
    var2.useOnActivityItemSelected = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1371, 3448, 660, 7945, 478, 8063, 13853, 13399, 1636, 1384, 8048, 8047, 6874, 3072, 5721, 4667, 7933, 3936, 7973, 7958, 2]);