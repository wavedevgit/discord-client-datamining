// modules/debug/DebugUploadManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var6;
    var0 = function() { // Original name: _uploadDebugLogFiles, environment: var3
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun70066: for (var _fun70066_ip = 0;;) switch (_fun70066_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 4);
                        if (var4) {
                            _fun70066_ip = 582;
                            continue _fun70066
                        }
                    case 10:
                        var2 = arg0;
                        var3 = arg1;
                        var8 = undefined;
                        var5 = undefined;
                    case 20: // try_start_0
                        var6 = _closure1_slot12;
                        var2 = var6.bind(var8)(var2);
                        SaveGenerator(address = 36);
                    case 34:
                        return var2;
                    case 36:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                        if (var6) {
                            _fun70066_ip = 99;
                            continue _fun70066
                        }
                    case 42:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var4 = 7;
                        var4 = var7[var4];
                        var7 = var6.bind(var8)(var4);
                        var6 = var7.uploadRtcLogFiles;
                        var4 = var3;
                        var3 = 14680064;
                        var3 = var6.bind(var7)(var3, var4);
                        SaveGenerator(address = 87);
                    case 85:
                        return var3;
                    case 87:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun70066_ip = 96;
                            continue _fun70066
                        }
                    case 93: // try_end0
                        return var8;
                    case 96:
                        return var3;
                    case 99:
                        return var2;
                    case 102: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var1 = var4;
                        var6 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var7 = 5;
                        var3 = var3[var7];
                        var3 = var6.bind(var8)(var3);
                        var3 = var3.UploadVoiceDebugLogsError;
                        var3 = var4 instanceof var3;
                        if (!var3) {
                            _fun70066_ip = 507;
                            continue _fun70066
                        }
                    case 146:
                        var3 = var1;
                        var6 = var3.code;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var3 = var3[var7];
                        var3 = var4.bind(var8)(var3);
                        var3 = var3.UploadErrorCodes;
                        var3 = var3.GENERAL;
                        if (!(var3 !== var6)) {
                            _fun70066_ip = 472;
                            continue _fun70066
                        }
                    case 190:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var3 = var3[var7];
                        var3 = var4.bind(var8)(var3);
                        var3 = var3.UploadErrorCodes;
                        var3 = var3.NO_FILE;
                        if (!(var3 !== var6)) {
                            _fun70066_ip = 438;
                            continue _fun70066
                        }
                    case 226:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var3 = var3[var7];
                        var3 = var4.bind(var8)(var3);
                        var3 = var3.UploadErrorCodes;
                        var3 = var3.PROGRESS;
                        if (!(var3 !== var6)) {
                            _fun70066_ip = 404;
                            continue _fun70066
                        }
                    case 262:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var3 = var3[var7];
                        var3 = var4.bind(var8)(var3);
                        var3 = var3.UploadErrorCodes;
                        var3 = var3.UPLOAD;
                        if (!(var3 !== var6)) {
                            _fun70066_ip = 370;
                            continue _fun70066
                        }
                    case 295:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var3 = var3[var7];
                        var3 = var4.bind(var8)(var3);
                        var3 = var3.UploadErrorCodes;
                        var4 = var3.READ;
                        var3 = undefined;
                        if (!(var4 === var6)) {
                            _fun70066_ip = 504;
                            continue _fun70066
                        }
                    case 333:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var4 = 6;
                        var4 = var7[var4];
                        var4 = var6.bind(var8)(var4);
                        var4 = var4.AVUnderlyingError;
                        var3 = var4.UploadErrorRead;
                        _fun70066_ip = 504;
                        continue _fun70066;
                    case 370:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var4 = 6;
                        var4 = var7[var4];
                        var4 = var6.bind(var8)(var4);
                        var4 = var4.AVUnderlyingError;
                        var3 = var4.UploadErrorUpload;
                        _fun70066_ip = 504;
                        continue _fun70066;
                    case 404:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var4 = 6;
                        var4 = var7[var4];
                        var4 = var6.bind(var8)(var4);
                        var4 = var4.AVUnderlyingError;
                        var3 = var4.UploadErrorProgress;
                        _fun70066_ip = 504;
                        continue _fun70066;
                    case 438:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var4 = 6;
                        var4 = var7[var4];
                        var4 = var6.bind(var8)(var4);
                        var4 = var4.AVUnderlyingError;
                        var3 = var4.UploadErrorNoFile;
                        _fun70066_ip = 504;
                        continue _fun70066;
                    case 472:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var4 = 6;
                        var4 = var7[var4];
                        var4 = var6.bind(var8)(var4);
                        var4 = var4.AVUnderlyingError;
                        var3 = var4.UploadErrorGeneral;
                    case 504:
                        var5 = var3;
                    case 507:
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var6 = 6;
                        var2 = var9[var6];
                        var4 = var7.bind(var8)(var2);
                        var3 = var4.reportAVError;
                        var2 = {};
                        var6 = var9[var6];
                        var6 = var7.bind(var8)(var6);
                        var6 = var6.AVError;
                        var6 = var6.DEBUG_LOG_UPLOAD_FAILED;
                        var2.type = var6;
                        var2.underlyingError = var5;
                        var5 = var1.message;
                        var2.errorMessage = var5;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 582:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot11 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot11 = var0;
    var1 = function() { // Original name: uploadAppLogFiles, environment: var3
        var0 = undefined;
        var3 = _closure1_slot13;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot12 = var1;
    var0 = function() { // Original name: _uploadAppLogFiles, environment: var3
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun70070: for (var _fun70070_ip = 0;;) switch (_fun70070_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun70070_ip = 1097;
                            continue _fun70070
                        }
                    case 12:
                        var2 = arg0;
                        var1 = undefined;
                        var10 = undefined;
                        var9 = undefined;
                        var7 = undefined;
                        var8 = undefined;
                        var5 = undefined;
                        var3 = undefined;
                    case 29: // try_start_0 // try_start_4
                        var11 = _closure1_slot2;
                        var12 = _closure1_slot3;
                        var6 = 8;
                        var6 = var12[var6];
                        var11 = var11.bind(var1)(var6);
                        var6 = var11.stringify;
                        var10 = var6.bind(var11)();
                    case 62: // try_end0
                        _fun70070_ip = 90;
                        continue _fun70070;
                    case 64: // catch_target0
                        CatchBlockStart(arg_register = 12);
                        var6 = global;
                        var6 = var6.HermesInternal;
                        var11 = var6.concat;
                        var6 = 'Logs failed: ';
                        var10 = var11.bind(var6)(var12);
                    case 90: // try_start_1
                        var6 = _closure1_slot9;
                        var11 = null;
                        var13 = var11 == var6;
                        var6 = undefined;
                        if (var13) {
                            _fun70070_ip = 118;
                            continue _fun70070
                        }
                    case 108:
                        var12 = _closure1_slot9;
                        var6 = var12.getSystemLog;
                    case 118:
                        var6 = var11 != var6;
                        var11 = '';
                        if (!var6) {
                            _fun70070_ip = 177;
                            continue _fun70070
                        }
                    case 129:
                        var6 = global;
                        var13 = var6.Promise;
                        var6 = var13.prototype;
                        var12 = Object.create(var6, {
                            constructor: {
                                value: var13
                            }
                        });
                        var38 = function(arg0) { // Environment: var4
                            var2 = _closure1_slot9;
                            var1 = var2.getSystemLog;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var39 = var12;
                        var6 = new var39[var13](var38, var37);
                        var6 = var6 instanceof Object ? var6 : var12;
                        SaveGenerator(address = 168);
                    case 166:
                        return var6;
                    case 168:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 12);
                        var11 = var6;
                        if (var12) {
                            _fun70070_ip = 182;
                            continue _fun70070
                        }
                    case 177:
                        var9 = var11;
                    case 180: // try_end1
                        _fun70070_ip = 211;
                        continue _fun70070;
                    case 182: // try_end4
                        return var6;
                    case 185: // try_start_5 // catch_target1
                        CatchBlockStart(arg_register = 12);
                        var6 = global;
                        var6 = var6.HermesInternal;
                        var11 = var6.concat;
                        var6 = 'System Logs failed ';
                        var9 = var11.bind(var6)(var12);
                    case 211: // try_start_2
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot3;
                        var6 = 9;
                        var6 = var12[var6];
                        var6 = var11.bind(var1)(var6);
                        var11 = var6.bind(var1)();
                        var6 = var11.then;
                        var4 = function(arg0) { // Environment: var4
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var0 = 10;
                            var0 = var2[var0];
                            var3 = undefined;
                            var2 = var1.bind(var3)(var0);
                            var1 = arg0;
                            var0 = true;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var4 = var6.bind(var11)(var4);
                        SaveGenerator(address = 259);
                    case 257:
                        return var4;
                    case 259:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 6);
                        if (var6) {
                            _fun70070_ip = 270;
                            continue _fun70070
                        }
                    case 265:
                        var7 = var4;
                    case 268: // try_end2
                        _fun70070_ip = 299;
                        continue _fun70070;
                    case 270: // try_end5
                        return var4;
                    case 273: // try_start_6 // catch_target2
                        CatchBlockStart(arg_register = 11);
                        var4 = global;
                        var4 = var4.HermesInternal;
                        var6 = var4.concat;
                        var4 = 'Push logs failed: ';
                        var7 = var6.bind(var4)(var11);
                    case 299: // try_start_3
                        var6 = _closure1_slot0;
                        var11 = _closure1_slot3;
                        var4 = 11;
                        var4 = var11[var4];
                        var6 = var6.bind(var1)(var4);
                        var4 = var6.consumeLogs;
                        var6 = var4.bind(var6)();
                        var5 = var6;
                        var4 = null;
                        var6 = var4 != var6;
                        var4 = '';
                        if (!var6) {
                            _fun70070_ip = 351;
                            continue _fun70070
                        }
                    case 348:
                        var4 = var5;
                    case 351:
                        var8 = var4;
                    case 354: // try_end3
                        _fun70070_ip = 382;
                        continue _fun70070;
                    case 356: // catch_target3
                        CatchBlockStart(arg_register = 6);
                        var4 = global;
                        var4 = var4.HermesInternal;
                        var5 = var4.concat;
                        var4 = 'LibDiscore logs failed: ';
                        var8 = var5.bind(var4)(var6);
                    case 382:
                        var4 = var10;
                        var5 = var4.length;
                        var4 = var9;
                        var4 = var4.length;
                        var5 = var5 + var4;
                        var4 = var7;
                        var4 = var4.length;
                        var5 = var5 + var4;
                        var4 = var8;
                        var4 = var4.length;
                        var5 = var5 + var4;
                        var3 = var5;
                        var4 = _closure1_slot7;
                        if (!(var5 > var4)) {
                            _fun70070_ip = 652;
                            continue _fun70070
                        }
                    case 443:
                        var4 = _closure1_slot7;
                        var4 = var4 / var3;
                        var3 = 1;
                        var14 = var3 - var4;
                        var11 = var10;
                        var5 = var11.slice;
                        var12 = var11.length;
                        var3 = global;
                        var15 = var3.Math;
                        var13 = var15.floor;
                        var4 = var11.length;
                        var4 = var4 * var14;
                        var4 = var13.bind(var15)(var4);
                        var4 = var12 - var4;
                        var10 = var5.bind(var11)(var4);
                        var11 = var9;
                        var5 = var11.slice;
                        var12 = var11.length;
                        var15 = var3.Math;
                        var13 = var15.floor;
                        var4 = var11.length;
                        var4 = var4 * var14;
                        var4 = var13.bind(var15)(var4);
                        var4 = var12 - var4;
                        var9 = var5.bind(var11)(var4);
                        var11 = var7;
                        var5 = var11.slice;
                        var12 = var11.length;
                        var15 = var3.Math;
                        var13 = var15.floor;
                        var4 = var11.length;
                        var4 = var4 * var14;
                        var4 = var13.bind(var15)(var4);
                        var4 = var12 - var4;
                        var7 = var5.bind(var11)(var4);
                        var5 = var8;
                        var4 = var5.slice;
                        var11 = var5.length;
                        var13 = var3.Math;
                        var12 = var13.floor;
                        var3 = var5.length;
                        var3 = var3 * var14;
                        var3 = var12.bind(var13)(var3);
                        var3 = var11 - var3;
                        var8 = var4.bind(var5)(var3);
                    case 652:
                        var3 = _closure1_slot10;
                        var5 = null;
                        var4 = var5 == var3;
                        var3 = undefined;
                        if (var4) {
                            _fun70070_ip = 677;
                            continue _fun70070
                        }
                    case 667:
                        var4 = _closure1_slot10;
                        var3 = var4.AppOpenedTimestamp;
                    case 677:
                        var3 = var5 != var3;
                        var5 = null;
                        if (!var3) {
                            _fun70070_ip = 696;
                            continue _fun70070
                        }
                    case 686:
                        var3 = _closure1_slot10;
                        var5 = var3.AppOpenedTimestamp;
                    case 696:
                        var14 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var3 = 12;
                        var3 = var4[var3];
                        var3 = var14.bind(var1)(var3);
                        var22 = var3.bind(var1)(var5);
                        var3 = _closure1_slot0;
                        var5 = 13;
                        var5 = var4[var5];
                        var11 = var3.bind(var1)(var5);
                        var5 = var11.serializeComponentRenderAverages;
                        var21 = var5.bind(var11)();
                        var5 = global;
                        var13 = var5.JSON;
                        var12 = var13.stringify;
                        var11 = 14;
                        var11 = var4[var11];
                        var11 = var14.bind(var1)(var11);
                        var11 = var11.bind(var1)();
                        var14 = 2;
                        var34 = var12.bind(var13)(var11, var1, var14);
                        var13 = var5.JSON;
                        var12 = var13.stringify;
                        var15 = _closure1_slot5;
                        var11 = var15.getDebugInfo;
                        var11 = var11.bind(var15)();
                        var32 = var12.bind(var13)(var11, var1, var14);
                        var30 = var10;
                        var28 = var9;
                        var26 = var8;
                        var24 = var7;
                        var5 = var5.HermesInternal;
                        var14 = var5.concat;
                        var13 = '\n    ';
                        var37 = '\n\n    ';
                        var35 = '\n\n    Metadata:\n    ';
                        var33 = '\n\n    ChannelStore:\n    ';
                        var31 = '\n\n    Logs:\n    ';
                        var29 = '\n\n    System logs:\n    ';
                        var27 = '\n\n    LibDiscore logs:\n    ';
                        var25 = '\n\n    Push Notifications:\n    ';
                        var39 = var13;
                        var38 = var22;
                        var36 = var21;
                        var23 = var13;
                        var5 = var39[var14](var38, var37, var36, var35, var34, var33, var32, var31, var30, var29, var28, var27, var26, var25, var24, var23, var22);
                        var8 = _closure1_slot2;
                        var7 = 8;
                        var7 = var4[var7];
                        var8 = var8.bind(var1)(var7);
                        var7 = var8.clear;
                        var7 = var7.bind(var8)();
                        var8 = _closure1_slot6;
                        var7 = var8.DEBUG_LOG;
                        var6 = var2;
                        var2 = 'discord_app_logs';
                        var6 = var7.bind(var8)(var6, var2);
                        var2 = 15;
                        var2 = var4[var2];
                        var2 = var3.bind(var1)(var2);
                        var4 = var2.HTTP;
                        var3 = var4.post;
                        var2 = {
                            'url': null,
                            'body': null,
                            'retries': 3,
                            'headers': null,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var2.url = var6;
                        var2.body = var5;
                        var5 = {};
                        var6 = 'text/plain';
                        var5['Content-Type'] = var6;
                        var2.headers = var5;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address = 1035);
                    case 1033:
                        return var2;
                    case 1035:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun70070_ip = 1043;
                            continue _fun70070
                        }
                    case 1041: // try_end6
                        _fun70070_ip = 1094;
                        continue _fun70070;
                    case 1043:
                        return var2;
                    case 1046: // catch_target4 // catch_target5 // catch_target6
                        CatchBlockStart(arg_register = 2);
                        var4 = _closure1_slot8;
                        var3 = var4.error;
                        var6 = var2.message;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var5 = var2.concat;
                        var2 = 'uploadAppLogFiles: upload app log files error ';
                        var2 = var5.bind(var2)(var6);
                        var2 = var3.bind(var4)(var2);
                    case 1094:
                        return var1;
                    case 1097:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot13 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot6 = var4;
    var4 = 9437184;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var7.bind(var0)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var12 = 'DebugUploadManager';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot8 = var4;
    var4 = 4;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.NativeModules;
    var7 = var7.CrashReportingManager;
    var _closure1_slot9 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.NativeModules;
    var4 = var4.TTIManager;
    var _closure1_slot10 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/debug/DebugUploadManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function() { // Original name: uploadDebugLogFiles, environment: var3
        var0 = undefined;
        var3 = _closure1_slot11;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.uploadDebugLogFiles = var3;
    var2.uploadAppLogFiles = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1372, 660, 3, 27, 3309, 7965, 8770, 12, 8771, 8772, 4076, 8773, 8774, 8775, 507, 2]);