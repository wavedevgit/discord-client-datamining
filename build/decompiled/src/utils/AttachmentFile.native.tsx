// utils/AttachmentFile.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun37112: for (var _fun37112_ip = 0;;) switch (_fun37112_ip) {
                    case 0:
                        StartGenerator();
                        var2 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun37112_ip = 345;
                            continue _fun37112
                        }
                    case 13:
                        var8 = var2;
                        var3 = arg1;
                        var9 = undefined;
                        var6 = undefined;
                        var4 = undefined;
                        var7 = undefined;
                        var5 = undefined;
                        var11 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var10 = 2;
                        var10 = var13[var10];
                        var11 = var11.bind(var9)(var10);
                        var2 = var2.item;
                        var10 = var2.platform;
                        var12 = _closure1_slot0;
                        var2 = 3;
                        var2 = var13[var2];
                        var2 = var12.bind(var9)(var2);
                        var2 = var2.UploadPlatform;
                        var2 = var2.REACT_NATIVE;
                        var10 = var10 === var2;
                        var2 = 'Upload must be in the React Native format';
                        var2 = var11.bind(var9)(var10, var2);
                    case 107: // try_start_1
                        var11 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var10 = 4;
                        var2 = var2[var10];
                        var13 = var11.bind(var9)(var2);
                        var12 = var13.getFileInfo;
                        var11 = var8;
                        var2 = var3;
                        var2 = var12.bind(var13)(var11, var2);
                        SaveGenerator(address = 149);
                    case 147:
                        return var2;
                    case 149:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 11);
                        if (var11) {
                            _fun37112_ip = 314;
                            continue _fun37112
                        }
                    case 158:
                        var7 = var2;
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var11 = 5;
                        var11 = var13[var11];
                        var13 = var12.bind(var9)(var11);
                        var12 = var13.getAttachmentPayload;
                        var11 = var8;
                        var8 = var3;
                        var3 = var2.name;
                        var5 = var12.bind(var13)(var11, var8, var3);
                    case 205: // try_start_0
                        var8 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var10];
                        var9 = var8.bind(var9)(var3);
                        var8 = var9.getFileSize;
                        var3 = var7;
                        var3 = var3.uri;
                        var3 = var8.bind(var9)(var3);
                        SaveGenerator(address = 245);
                    case 243:
                        return var3;
                    case 245:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 8);
                        if (var8) {
                            _fun37112_ip = 256;
                            continue _fun37112
                        }
                    case 251:
                        var4 = var3;
                    case 254: // try_end0
                        _fun37112_ip = 261;
                        continue _fun37112;
                    case 256: // try_end1
                        return var3;
                    case 259: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register = 3);
                    case 261:
                        var3 = {};
                        var3.file = var7;
                        var7 = var7.uri;
                        var3.uri = var7;
                        var7 = var5.filename;
                        var6 = var7;
                        var5 = null;
                        var7 = var5 != var7;
                        var5 = '';
                        if (!var7) {
                            _fun37112_ip = 302;
                            continue _fun37112
                        }
                    case 299:
                        var5 = var6;
                    case 302:
                        var3.name = var5;
                        var3.fileSize = var4;
                    case 311: // try_end2
                        return var3;
                    case 314:
                        return var2;
                    case 317: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot4;
                        var2 = var3.error;
                        var1 = 'Failed to get attachment file';
                        var1 = var2.bind(var3)(var1, var4);
                        var1 = undefined;
                        return var1;
                    case 345:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot5 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun37115: for (var _fun37115_ip = 0;;) switch (_fun37115_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun37115_ip = 62;
                            continue _fun37115
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var1 = var2[var1];
                        var2 = undefined;
                        var4 = var3.bind(var2)(var1);
                        var3 = var4.cancelGetFileInfo;
                        var1 = arg0;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 50);
                    case 48:
                        return var1;
                    case 50:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun37115_ip = 59;
                            continue _fun37115
                        }
                    case 56:
                        return var2;
                    case 59:
                        return var1;
                    case 62:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot6 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'AttachmentFile';
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/AttachmentFile.native.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getAttachmentFile = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.cancelGetAttachmentFile = var3;
    var1 = function arg0() {
        _fun37118: for (var _fun37118_ip = 0;;) switch (_fun37118_ip) {
            case 0:
                var3 = arg0;
                var2 = var3;
                var1 = var3.replace;
                var0 = /^file:\\/\\ //;
                var4 = '';
                var2 = var1.bind(var3)(var0, var4);
            case 35: // try_start_0
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var6 = 4;
                var3 = var3[var6];
                var5 = undefined;
                var7 = var7.bind(var5)(var3);
                var3 = var7.getAppDir;
                var3 = var3.bind(var7)();
                var3 = var4 !== var3;
                var0 = var3;
                if (!var3) {
                    _fun37118_ip = 121;
                    continue _fun37118
                }
            case 80:
                var3 = var2;
                var2 = var3.startsWith;
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var4 = var4.bind(var5)(var1);
                var1 = var4.getAppDir;
                var1 = var1.bind(var4)();
                var0 = var2.bind(var3)(var1);
            case 121: // try_end0
                return var0;
            case 123: // catch_target0
                CatchBlockStart(arg_register = 3);
                var2 = _closure1_slot4;
                var1 = var2.error;
                var0 = 'Failed to get app dir';
                var0 = var1.bind(var2)(var0, var3);
                var0 = false;
                return var0;
        }
    };
    var2.fileIsInAppDir = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3, 44, 4005, 4012, 4006, 2]);