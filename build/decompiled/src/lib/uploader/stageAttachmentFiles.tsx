// lib/uploader/stageAttachmentFiles.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _stageAttachmentFiles, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun54669: for (var _fun54669_ip = 0;;) switch (_fun54669_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        var1 = arguments[1];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun54669_ip = 97;
                            continue _fun54669
                        }
                    case 15:
                        var3 = undefined;
                        if (!(var1 === var3)) {
                            _fun54669_ip = 23;
                            continue _fun54669
                        }
                    case 21:
                        var1 = false;
                    case 23:
                        var _closure4_slot0 = var1;
                        var1 = arguments[2];
                        var _closure4_slot1 = var1;
                        SaveGenerator(address = 38);
                    case 36:
                        return var3;
                    case 38:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun54669_ip = 94;
                            continue _fun54669
                        }
                    case 44:
                        var4 = var5.map;
                        var2 = function(arg0) { // Environment: var2
                            var1 = arg0;
                            var _closure5_slot0 = var1;
                            var1 = global;
                            var2 = var1.Promise;
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var3 = function(arg0, arg1) { // Environment: var0
                                _fun54671: for (var _fun54671_ip = 0;;) switch (_fun54671_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var5 = arg1;
                                        var _closure6_slot0 = var4;
                                        var _closure6_slot1 = var5;
                                        var0 = _closure5_slot0;
                                        var7 = var0.status;
                                        var8 = _closure1_slot0;
                                        var0 = _closure1_slot1;
                                        var9 = 2;
                                        var6 = var0[var9];
                                        var0 = undefined;
                                        var6 = var8.bind(var0)(var6);
                                        var6 = var6.CloudUploadStatus;
                                        var6 = var6.NOT_STARTED;
                                        if (!(var6 !== var7)) {
                                            _fun54671_ip = 399;
                                            continue _fun54671
                                        }
                                    case 72:
                                        var8 = _closure1_slot0;
                                        var6 = _closure1_slot1;
                                        var6 = var6[var9];
                                        var6 = var8.bind(var0)(var6);
                                        var6 = var6.CloudUploadStatus;
                                        var6 = var6.COMPLETED;
                                        if (!(var6 !== var7)) {
                                            _fun54671_ip = 388;
                                            continue _fun54671
                                        }
                                    case 108:
                                        var8 = _closure1_slot0;
                                        var6 = _closure1_slot1;
                                        var6 = var6[var9];
                                        var6 = var8.bind(var0)(var6);
                                        var6 = var6.CloudUploadStatus;
                                        var6 = var6.ERROR;
                                        if (!(var6 !== var7)) {
                                            _fun54671_ip = 298;
                                            continue _fun54671
                                        }
                                    case 144:
                                        var8 = _closure1_slot0;
                                        var6 = _closure1_slot1;
                                        var6 = var6[var9];
                                        var6 = var8.bind(var0)(var6);
                                        var6 = var6.CloudUploadStatus;
                                        var6 = var6.CANCELED;
                                        if (!(var6 !== var7)) {
                                            _fun54671_ip = 257;
                                            continue _fun54671
                                        }
                                    case 177:
                                        var8 = _closure1_slot0;
                                        var6 = _closure1_slot1;
                                        var6 = var6[var9];
                                        var6 = var8.bind(var0)(var6);
                                        var6 = var6.CloudUploadStatus;
                                        var6 = var6.REMOVED_FROM_MSG_DRAFT;
                                        if (!(var6 === var7)) {
                                            _fun54671_ip = 413;
                                            continue _fun54671
                                        }
                                    case 213:
                                        var6 = global;
                                        var8 = var6.Error;
                                        var6 = var8.prototype;
                                        var7 = Object.create(var6, {
                                            constructor: {
                                                value: var8
                                            }
                                        });
                                        var11 = 'Upload is removed from draft';
                                        var12 = var7;
                                        var6 = new var12[var8](var11, var10);
                                        var6 = var6 instanceof Object ? var6 : var7;
                                        var6 = var5.bind(var0)(var6);
                                        _fun54671_ip = 413;
                                        continue _fun54671;
                                    case 257:
                                        var6 = global;
                                        var8 = var6.Error;
                                        var6 = var8.prototype;
                                        var7 = Object.create(var6, {
                                            constructor: {
                                                value: var8
                                            }
                                        });
                                        var11 = 'Upload is canceled';
                                        var12 = var7;
                                        var6 = new var12[var8](var11, var10);
                                        var6 = var6 instanceof Object ? var6 : var7;
                                        var6 = var5.bind(var0)(var6);
                                        _fun54671_ip = 413;
                                        continue _fun54671;
                                    case 298:
                                        var6 = _closure4_slot0;
                                        if (!var6) {
                                            _fun54671_ip = 331;
                                            continue _fun54671
                                        }
                                    case 308:
                                        var6 = _closure5_slot0;
                                        var6 = var6.error;
                                        var3 = _closure1_slot3;
                                        var3 = var3.ENTITY_TOO_LARGE;
                                        if (!(var6 === var3)) {
                                            _fun54671_ip = 372;
                                            continue _fun54671
                                        }
                                    case 331:
                                        var3 = global;
                                        var7 = var3.Error;
                                        var3 = var7.prototype;
                                        var6 = Object.create(var3, {
                                            constructor: {
                                                value: var7
                                            }
                                        });
                                        var11 = 'File failed to upload';
                                        var12 = var6;
                                        var3 = new var12[var7](var11, var10);
                                        var3 = var3 instanceof Object ? var3 : var6;
                                        var3 = var5.bind(var0)(var3);
                                        _fun54671_ip = 413;
                                        continue _fun54671;
                                    case 372:
                                        var5 = _closure5_slot0;
                                        var3 = var5.upload;
                                        var3 = var3.bind(var5)();
                                        _fun54671_ip = 413;
                                        continue _fun54671;
                                    case 388:
                                        var3 = 'complete';
                                        var3 = var4.bind(var0)(var3);
                                        _fun54671_ip = 413;
                                        continue _fun54671;
                                    case 399:
                                        var4 = _closure5_slot0;
                                        var3 = var4.upload;
                                        var3 = var3.bind(var4)();
                                    case 413:
                                        var4 = _closure5_slot0;
                                        var5 = var4.on;
                                        var3 = 'complete';
                                        var2 = function() { // Environment: var1
                                            var2 = _closure6_slot0;
                                            var0 = undefined;
                                            var1 = 'complete';
                                            var1 = var2.bind(var0)(var1);
                                            return var0;
                                        };
                                        var2 = var5.bind(var4)(var3, var2);
                                        var5 = var4.on;
                                        var3 = 'error';
                                        var2 = function() { // Environment: var1
                                            var2 = _closure6_slot1;
                                            var0 = global;
                                            var3 = var0.Error;
                                            var1 = _closure5_slot0;
                                            var5 = var1.id;
                                            var0 = var0.HermesInternal;
                                            var4 = var0.concat;
                                            var1 = 'File ';
                                            var0 = ' failed to upload';
                                            var7 = var4.bind(var1)(var5, var0);
                                            var1 = var3.prototype;
                                            var1 = Object.create(var1, {
                                                constructor: {
                                                    value: var3
                                                }
                                            });
                                            var8 = var1;
                                            var0 = new var8[var3](var7, var6);
                                            var1 = var0 instanceof Object ? var0 : var1;
                                            var0 = undefined;
                                            var1 = var2.bind(var0)(var1);
                                            return var0;
                                        };
                                        var2 = var5.bind(var4)(var3, var2);
                                        var3 = var4.on;
                                        var2 = 'progress';
                                        var1 = function(arg0, arg1) { // Environment: var1
                                            _fun54674: for (var _fun54674_ip = 0;;) switch (_fun54674_ip) {
                                                case 0:
                                                    var2 = _closure4_slot1;
                                                    var1 = null;
                                                    if (!(var1 != var2)) {
                                                        _fun54674_ip = 31;
                                                        continue _fun54674
                                                    }
                                                case 13:
                                                    var3 = _closure4_slot1;
                                                    var2 = undefined;
                                                    var1 = arg0;
                                                    var0 = arg1;
                                                    var0 = var3.bind(var2)(var1, var0);
                                                case 31:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var1 = var3.bind(var4)(var2, var1);
                                        return var0;
                                }
                            };
                            var4 = var1;
                            var0 = new var4[var2](var3, var2);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var5 = var4.bind(var5)(var2);
                        var2 = global;
                        var4 = var2.Promise;
                        var2 = var4.all;
                        var2 = var2.bind(var4)(var5);
                        SaveGenerator(address = 82);
                    case 80:
                        return var2;
                    case 82:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun54669_ip = 91;
                            continue _fun54669
                        }
                    case 88:
                        return var3;
                    case 91:
                        return var2;
                    case 94:
                        return var1;
                    case 97:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot4 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot4 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AbortCodes;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'lib/uploader/stageAttachmentFiles.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: stageAttachmentFiles, environment: var1
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 3963, 2]);