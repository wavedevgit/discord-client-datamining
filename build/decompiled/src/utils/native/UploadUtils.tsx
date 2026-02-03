// utils/native/UploadUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var25 = require;
    var28 = metroImportDefault;
    var2 = exports;
    var26 = dependencyMap;
    var _closure1_slot0 = var25;
    var _closure1_slot1 = var28;
    var _closure1_slot2 = var26;
    var24 = function() {
        var0 = undefined;
        var3 = _closure1_slot26;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot25 = var24;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun37038: for (var _fun37038_ip = 0;;) switch (_fun37038_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun37038_ip = 850;
                            continue _fun37038
                        }
                    case 10:
                        var12 = arg0;
                        var11 = undefined;
                        var16 = undefined;
                        var15 = undefined;
                        var4 = undefined;
                        var8 = undefined;
                        var13 = undefined;
                        var2 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var1 = 9;
                        var1 = var6[var1];
                        var6 = var2.bind(var11)(var1);
                        var2 = var6.requestPermission;
                        var1 = _closure1_slot20;
                        var1 = var1.PHOTOS;
                        var1 = var2.bind(var6)(var1);
                        SaveGenerator(address = 73);
                    case 71:
                        return var1;
                    case 73:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun37038_ip = 847;
                            continue _fun37038
                        }
                    case 82:
                        if (var1) {
                            _fun37038_ip = 121;
                            continue _fun37038
                        }
                    case 85:
                        var2 = global;
                        var7 = var2.Error;
                        var2 = var7.prototype;
                        var6 = Object.create(var2, {
                            constructor: {
                                value: var7
                            }
                        });
                        var20 = 'Missing permission';
                        var21 = var6;
                        var2 = new var21[var7](var20, var19);
                        var2 = var2 instanceof Object ? var2 : var6;
                        throw var2;
                    case 121:
                        var6 = var12;
                        var2 = 'size';
                        var2 = var2 in var6;
                        var6 = {};
                        var7 = var12;
                        if (var2) {
                            _fun37038_ip = 163;
                            continue _fun37038
                        }
                    case 140:
                        var2 = var7.width;
                        var6.width = var2;
                        var2 = var7.height;
                        var6.height = var2;
                        var2 = var6;
                        _fun37038_ip = 184;
                        continue _fun37038;
                    case 163:
                        var9 = var7.size;
                        var6.width = var9;
                        var7 = var7.size;
                        var6.height = var7;
                        var2 = var6;
                    case 184:
                        var16 = var2.width;
                        var15 = var2.height;
                        var10 = global;
                        var7 = var10.Promise;
                        var2 = var7.prototype;
                        var6 = Object.create(var2, {
                            constructor: {
                                value: var7
                            }
                        });
                        var20 = function(arg0, arg1) { // Environment: var2
                            var0 = arg0;
                            var _closure5_slot0 = var0;
                            var0 = arg1;
                            var _closure5_slot1 = var0;
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 10;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.launchImageLibrary;
                            var2 = {
                                'mediaType': 'photo',
                                'includeBase64': true,
                                'disableNewIOSPicker': true
                            };
                            var1 = function(arg0) { // Environment: var1
                                _fun37040: for (var _fun37040_ip = 0;;) switch (_fun37040_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var1 = var0.assets;
                                        var2 = null;
                                        var1 = var2 != var1;
                                        var4 = null;
                                        if (!var1) {
                                            _fun37040_ip = 52;
                                            continue _fun37040
                                        }
                                    case 20:
                                        var1 = var0.assets;
                                        var1 = var1.length;
                                        var3 = 0;
                                        var1 = var1 > var3;
                                        var4 = null;
                                        if (!var1) {
                                            _fun37040_ip = 52;
                                            continue _fun37040
                                        }
                                    case 42:
                                        var1 = var0.assets;
                                        var4 = var1[var3];
                                    case 52:
                                        var1 = var0.didCancel;
                                        if (var1) {
                                            _fun37040_ip = 177;
                                            continue _fun37040
                                        }
                                    case 61:
                                        var1 = var0.errorCode;
                                        if (!(var2 == var1)) {
                                            _fun37040_ip = 127;
                                            continue _fun37040
                                        }
                                    case 71:
                                        var5 = var2 == var4;
                                        var3 = undefined;
                                        var1 = undefined;
                                        if (var5) {
                                            _fun37040_ip = 87;
                                            continue _fun37040
                                        }
                                    case 82:
                                        var1 = var4.uri;
                                    case 87:
                                        if (!(var2 != var1)) {
                                            _fun37040_ip = 127;
                                            continue _fun37040
                                        }
                                    case 91:
                                        var2 = _closure5_slot0;
                                        var1 = {};
                                        var5 = var4.uri;
                                        var1.uri = var5;
                                        var4 = var4.base64;
                                        var1.base64 = var4;
                                        var1 = var2.bind(var3)(var1);
                                        _fun37040_ip = 226;
                                        continue _fun37040;
                                    case 127:
                                        var2 = _closure5_slot1;
                                        var1 = global;
                                        var3 = var1.Error;
                                        var6 = var0.errorMessage;
                                        var1 = var3.prototype;
                                        var1 = Object.create(var1, {
                                            constructor: {
                                                value: var3
                                            }
                                        });
                                        var7 = var1;
                                        var0 = new var7[var3](var6, var5);
                                        var1 = var0 instanceof Object ? var0 : var1;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                        _fun37040_ip = 226;
                                        continue _fun37040;
                                    case 177:
                                        var2 = _closure5_slot1;
                                        var0 = global;
                                        var3 = var0.Error;
                                        var6 = _closure1_slot24;
                                        var1 = var3.prototype;
                                        var1 = Object.create(var1, {
                                            constructor: {
                                                value: var3
                                            }
                                        });
                                        var7 = var1;
                                        var0 = new var7[var3](var6, var5);
                                        var1 = var0 instanceof Object ? var0 : var1;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                    case 226:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                        };
                        var21 = var6;
                        var2 = new var21[var7](var20, var19);
                        var2 = var2 instanceof Object ? var2 : var6;
                        SaveGenerator(address = 233);
                    case 231:
                        return var2;
                    case 233:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                        if (var6) {
                            _fun37038_ip = 844;
                            continue _fun37038
                        }
                    case 242:
                        var4 = var2;
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var6 = 11;
                        var6 = var9[var6];
                        var9 = var7.bind(var11)(var6);
                        var7 = var9.getFile;
                        var6 = {};
                        var14 = var2.uri;
                        var6.uri = var14;
                        var14 = '';
                        var6.i = var14;
                        var8 = var7.bind(var9)(var6);
                        var6 = var2.base64;
                        var14 = null;
                        if (!(var14 != var6)) {
                            _fun37038_ip = 480;
                            continue _fun37038
                        }
                    case 310:
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var6 = 12;
                        var6 = var9[var6];
                        var7 = var7.bind(var11)(var6);
                        var6 = var7.isAndroid;
                        var6 = var6.bind(var7)();
                        if (!var6) {
                            _fun37038_ip = 480;
                            continue _fun37038
                        }
                    case 346:
                        var6 = var4;
                        var9 = var6.base64;
                        var7 = var9.startsWith;
                        var6 = 'UklGR';
                        var6 = var7.bind(var9)(var6);
                        if (var6) {
                            _fun37038_ip = 809;
                            continue _fun37038
                        }
                    case 378:
                        var6 = var4;
                        var9 = var6.base64;
                        var7 = var9.indexOf;
                        var6 = 'ZnR5cA==';
                        var7 = var7.bind(var9)(var6);
                        var6 = 4;
                        if (!(var6 === var7)) {
                            _fun37038_ip = 480;
                            continue _fun37038
                        }
                    case 411:
                        var6 = var4;
                        var9 = var6.base64;
                        var7 = var9.indexOf;
                        var6 = 'YXZpZg==';
                        var6 = var7.bind(var9)(var6);
                        var7 = 8;
                        if (!(var7 !== var6)) {
                            _fun37038_ip = 771;
                            continue _fun37038
                        }
                    case 447:
                        var6 = var4;
                        var17 = var6.base64;
                        var9 = var17.indexOf;
                        var6 = 'YXZpcw==';
                        var6 = var9.bind(var17)(var6);
                        if (!(var7 !== var6)) {
                            _fun37038_ip = 771;
                            continue _fun37038
                        }
                    case 480:
                        var6 = var8;
                        var7 = var6.type;
                        var6 = 'image/gif';
                        if (!(var6 !== var7)) {
                            _fun37038_ip = 739;
                            continue _fun37038
                        }
                    case 501: // try_start_0
                        var9 = _closure1_slot1;
                        var17 = _closure1_slot2;
                        var7 = 10;
                        var7 = var17[var7];
                        var11 = var9.bind(var11)(var7);
                        var9 = var11.launchCropper;
                        var7 = {};
                        var17 = var4;
                        var17 = var17.uri;
                        var7.uri = var17;
                        var7.width = var16;
                        var7.height = var15;
                        var15 = true;
                        var7.includeBase64 = var15;
                        var12 = var12.preferredMimeType;
                        var13 = var12;
                        if (!(var14 == var12)) {
                            _fun37038_ip = 579;
                            continue _fun37038
                        }
                    case 569:
                        var12 = var8;
                        var12 = var12.type;
                        _fun37038_ip = 582;
                        continue _fun37038;
                    case 579:
                        var12 = var13;
                    case 582:
                        var7.mimeType = var12;
                        var7 = var9.bind(var11)(var7);
                        SaveGenerator(address = 596);
                    case 594:
                        return var7;
                    case 596:
                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 9);
                        if (var9) {
                            _fun37038_ip = 664;
                            continue _fun37038
                        }
                    case 602:
                        var9 = {};
                        var14 = var7.mime;
                        var13 = var7.data;
                        var10 = var10.HermesInternal;
                        var12 = var10.concat;
                        var11 = 'data:';
                        var10 = ';base64,';
                        var10 = var12.bind(var11)(var14, var10, var13);
                        var9.base64 = var10;
                        var10 = var7.mime;
                        var9.mimeType = var10;
                    case 661: // try_end0
                        return var9;
                    case 664:
                        return var7;
                    case 667: // catch_target0
                        CatchBlockStart(arg_register = 7);
                        var3 = var7;
                        var9 = var7.code;
                        var7 = 'E_PICKER_CANCELLED';
                        if (!(var7 !== var9)) {
                            _fun37038_ip = 737;
                            continue _fun37038
                        }
                    case 687:
                        var7 = {};
                        var10 = _closure1_slot14;
                        var9 = var4;
                        var9 = var9.base64;
                        var9 = var10 + var9;
                        var7.base64 = var9;
                        var8 = var8.type;
                        var7.mimeType = var8;
                        var8 = var3;
                        var8 = var8.message;
                        var7.errorStr = var8;
                        return var7;
                    case 737:
                        throw var3;
                    case 739:
                        var3 = {};
                        var8 = _closure1_slot15;
                        var7 = var4;
                        var7 = var7.base64;
                        var7 = var8 + var7;
                        var3.base64 = var7;
                        var3.mimeType = var6;
                        return var3;
                    case 771:
                        var3 = {};
                        var7 = _closure1_slot19;
                        var6 = var4;
                        var6 = var6.base64;
                        var6 = var7 + var6;
                        var3.base64 = var6;
                        var6 = 'image/avif';
                        var3.mimeType = var6;
                        return var3;
                    case 809:
                        var3 = {};
                        var5 = _closure1_slot18;
                        var4 = var4.base64;
                        var4 = var5 + var4;
                        var3.base64 = var4;
                        var4 = 'image/webp';
                        var3.mimeType = var4;
                        return var3;
                    case 844:
                        return var2;
                    case 847:
                        return var1;
                    case 850:
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
    var20 = function() {
        var0 = undefined;
        var3 = _closure1_slot27;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun37044: for (var _fun37044_ip = 0;;) switch (_fun37044_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun37044_ip = 463;
                            continue _fun37044
                        }
                    case 10:
                        var4 = arg0;
                        var9 = undefined;
                        var5 = undefined;
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var1 = 9;
                        var1 = var7[var1];
                        var7 = var6.bind(var9)(var1);
                        var6 = var7.requestPermission;
                        var1 = _closure1_slot20;
                        var1 = var1.PHOTOS;
                        var1 = var6.bind(var7)(var1);
                        SaveGenerator(address = 65);
                    case 63:
                        return var1;
                    case 65:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 6);
                        if (var6) {
                            _fun37044_ip = 460;
                            continue _fun37044
                        }
                    case 74:
                        if (var1) {
                            _fun37044_ip = 93;
                            continue _fun37044
                        }
                    case 77:
                        var6 = {};
                        var7 = 'Missing permission';
                        var6.errorStr = var7;
                        return var6;
                    case 93: // try_start_0
                        var6 = _closure1_slot25;
                        var4 = var6.bind(var9)(var4);
                        SaveGenerator(address = 106);
                    case 104:
                        return var4;
                    case 106:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 6);
                        if (var6) {
                            _fun37044_ip = 227;
                            continue _fun37044
                        }
                    case 112:
                        var5 = var4;
                        var7 = var4.errorStr;
                        var6 = null;
                        if (!(var6 != var7)) {
                            _fun37044_ip = 224;
                            continue _fun37044
                        }
                    case 127:
                        var10 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var6 = 13;
                        var6 = var13[var6];
                        var8 = var10.bind(var9)(var6);
                        var7 = var8.presentFailedToast;
                        var6 = 14;
                        var11 = var13[var6];
                        var11 = var10.bind(var9)(var11);
                        var12 = var11.intl;
                        var11 = var12.formatToPlainString;
                        var6 = var13[var6];
                        var6 = var10.bind(var9)(var6);
                        var6 = var6.t;
                        var10 = var6.Ex162J;
                        var6 = {};
                        var13 = var5;
                        var13 = var13.errorStr;
                        var6.reason = var13;
                        var6 = var11.bind(var12)(var10, var6);
                        var6 = var7.bind(var8)(var6);
                    case 224: // try_end0
                        return var5;
                    case 227:
                        return var4;
                    case 230: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var2 = var4;
                        var5 = var4.code;
                        var4 = 'E_PICKER_CANCELLED';
                        if (!(var4 !== var5)) {
                            _fun37044_ip = 441;
                            continue _fun37044
                        }
                    case 253:
                        var4 = var2;
                        var5 = var4.message;
                        var4 = _closure1_slot24;
                        if (!(var5 !== var4)) {
                            _fun37044_ip = 441;
                            continue _fun37044
                        }
                    case 272:
                        var4 = var2;
                        var5 = var4.code;
                        var4 = 'E_CROPPER_IMAGE_NOT_FOUND';
                        if (!(var4 !== var5)) {
                            _fun37044_ip = 343;
                            continue _fun37044
                        }
                    case 290:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 13;
                        var4 = var6[var4];
                        var6 = var5.bind(var9)(var4);
                        var5 = var6.presentFailedToast;
                        var4 = var2;
                        var2 = var4.message;
                        var2 = var5.bind(var6)(var2);
                        var2 = {};
                        var4 = var4.message;
                        var2.errorStr = var4;
                        _fun37044_ip = 439;
                        continue _fun37044;
                    case 343:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var3 = 13;
                        var3 = var10[var3];
                        var5 = var8.bind(var9)(var3);
                        var4 = var5.presentFailedToast;
                        var3 = 14;
                        var6 = var10[var3];
                        var6 = var8.bind(var9)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var3 = var10[var3];
                        var3 = var8.bind(var9)(var3);
                        var3 = var3.t;
                        var3 = var3.TTzyzW;
                        var3 = var6.bind(var7)(var3);
                        var3 = var4.bind(var5)(var3);
                        var3 = {};
                        var4 = 'No select photo access';
                        var3.errorStr = var4;
                        var2 = var3;
                    case 439:
                        _fun37044_ip = 457;
                        continue _fun37044;
                    case 441:
                        var3 = {};
                        var4 = 'Cancelled';
                        var3.errorStr = var4;
                        var2 = var3;
                    case 457:
                        return var2;
                    case 460:
                        return var1;
                    case 463:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot27 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot27 = var0;
    var19 = function() {
        var0 = undefined;
        var3 = _closure1_slot29;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot28 = var19;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun37048: for (var _fun37048_ip = 0;;) switch (_fun37048_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arguments[2];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun37048_ip = 101;
                            continue _fun37048
                        }
                    case 10:
                        var5 = arg0;
                        var4 = arg1;
                        var2 = undefined;
                        if (!(var1 === var2)) {
                            _fun37048_ip = 24;
                            continue _fun37048
                        }
                    case 22:
                        var1 = null;
                    case 24:
                        var3 = var1;
                        SaveGenerator(address = 31);
                    case 29:
                        return var2;
                    case 31:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 6);
                        if (var6) {
                            _fun37048_ip = 98;
                            continue _fun37048
                        }
                    case 37: // try_start_0
                        var6 = _closure1_slot6;
                        var6 = var6.MediaManager;
                        var5 = var6[var5];
                        var3 = var5.bind(var6)(var4, var3);
                        SaveGenerator(address = 64);
                    case 62:
                        return var3;
                    case 64:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun37048_ip = 73;
                            continue _fun37048
                        }
                    case 70: // try_end0
                        return var3;
                    case 73:
                        return var3;
                    case 76: // catch_target0
                        CatchBlockStart(arg_register = 5);
                        var4 = _closure1_slot21;
                        var3 = var4.warn;
                        var3 = var3.bind(var4)(var5);
                        return var2;
                    case 98:
                        return var1;
                    case 101:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot29 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot29 = var0;
    var18 = function() {
        _fun37049: for (var _fun37049_ip = 0;;) switch (_fun37049_ip) {
            case 0:
                var1 = _closure1_slot11;
                var1 = var1.dataSavingMode;
                if (!var1) {
                    _fun37049_ip = 44;
                    continue _fun37049
                }
            case 16:
                var2 = _closure1_slot12;
                var1 = var2.getType;
                var2 = var1.bind(var2)();
                var1 = _closure1_slot16;
                var1 = var1.CELLULAR;
                if (!(var2 !== var1)) {
                    _fun37049_ip = 125;
                    continue _fun37049
                }
            case 44:
                var2 = _closure1_slot13;
                var1 = var2.getCurrentUser;
                var5 = var1.bind(var2)();
                var1 = _closure1_slot11;
                var4 = var1.videoUploadQuality;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 15;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var2.canUseHighVideoUploadQuality;
                var1 = var1.bind(var2)(var5);
                if (var1) {
                    _fun37049_ip = 114;
                    continue _fun37049
                }
            case 103:
                var1 = _closure1_slot32;
                var1 = var1.bind(var3)(var4);
                _fun37049_ip = 123;
                continue _fun37049;
            case 114:
                var2 = _closure1_slot31;
                var1 = var2.bind(var3)(var4);
            case 123:
                return var1;
            case 125:
                var0 = _closure1_slot9;
                var0 = var0.LOW;
                return var0;
        }
    };
    var _closure1_slot30 = var18;
    var17 = function arg0() {
        _fun37050: for (var _fun37050_ip = 0;;) switch (_fun37050_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot10;
                var1 = var1.DATA_SAVER;
                if (!(var1 !== var2)) {
                    _fun37050_ip = 84;
                    continue _fun37050
                }
            case 20:
                var1 = _closure1_slot10;
                var1 = var1.STANDARD;
                if (!(var1 !== var2)) {
                    _fun37050_ip = 72;
                    continue _fun37050
                }
            case 34:
                var1 = _closure1_slot10;
                var1 = var1.BEST;
                if (!(var1 !== var2)) {
                    _fun37050_ip = 60;
                    continue _fun37050
                }
            case 48:
                var1 = _closure1_slot9;
                var1 = var1.MEDIUM;
                return var1;
            case 60:
                var1 = _closure1_slot9;
                var1 = var1.VERY_HIGH;
                return var1;
            case 72:
                var1 = _closure1_slot9;
                var1 = var1.HIGH;
                return var1;
            case 84:
                var0 = _closure1_slot9;
                var0 = var0.LOW;
                return var0;
        }
    };
    var _closure1_slot31 = var17;
    var16 = function arg0() {
        _fun37051: for (var _fun37051_ip = 0;;) switch (_fun37051_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot10;
                var1 = var1.DATA_SAVER;
                if (!(var1 !== var2)) {
                    _fun37051_ip = 84;
                    continue _fun37051
                }
            case 20:
                var1 = _closure1_slot10;
                var1 = var1.STANDARD;
                if (!(var1 !== var2)) {
                    _fun37051_ip = 72;
                    continue _fun37051
                }
            case 34:
                var1 = _closure1_slot10;
                var1 = var1.BEST;
                if (!(var1 !== var2)) {
                    _fun37051_ip = 60;
                    continue _fun37051
                }
            case 48:
                var1 = _closure1_slot9;
                var1 = var1.LOW;
                return var1;
            case 60:
                var1 = _closure1_slot9;
                var1 = var1.HIGH;
                return var1;
            case 72:
                var1 = _closure1_slot9;
                var1 = var1.MEDIUM;
                return var1;
            case 84:
                var0 = _closure1_slot9;
                var0 = var0.LOW;
                return var0;
        }
    };
    var _closure1_slot32 = var16;
    var14 = function() {
        _fun37052: for (var _fun37052_ip = 0;;) switch (_fun37052_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var1 = var2[var1];
                var2 = undefined;
                var3 = var3.bind(var2)(var1);
                var1 = var3.isAndroid;
                var1 = var1.bind(var3)();
                if (var1) {
                    _fun37052_ip = 95;
                    continue _fun37052
                }
            case 38:
                var1 = _closure1_slot6;
                var1 = var1.DCDFileManager;
                var5 = var1.DocumentsDirPath;
                var4 = var5.replace;
                var3 = /Documents$/;
                var1 = '';
                var3 = var4.bind(var5)(var3, var1);
                var1 = '/private';
                var1 = var1 + var3;
                return var1;
            case 95:
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var3 = 17;
                var1 = var1[var3];
                var4 = var4.bind(var2)(var1);
                var1 = null;
                if (!(var1 != var4)) {
                    _fun37052_ip = 185;
                    continue _fun37052
                }
            case 121:
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var3];
                var1 = var1.bind(var2)(var0);
                var0 = var1.getConstants;
                var0 = var0.bind(var1)();
                var3 = var0.CacheDirPath;
                var2 = var3.replace;
                var1 = /cache$/;
                var0 = '';
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 185:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var7 = "RTNFileManager doesn't exist?";
                var8 = var1;
                var0 = new var8[var2](var7, var6);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var13 = function arg0() {
        _fun37053: for (var _fun37053_ip = 0;;) switch (_fun37053_ip) {
            case 0:
                var0 = arg0;
                var4 = arguments[1];
                var7 = var0.item;
                var6 = var0.spoiler;
                var5 = var0.description;
                var2 = var0.mimeType;
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun37053_ip = 40;
                    continue _fun37053
                }
            case 36:
                var4 = '';
            case 40:
                var9 = var7.platform;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var8 = 16;
                var8 = var11[var8];
                var8 = var10.bind(var3)(var8);
                var8 = var8.UploadPlatform;
                var8 = var8.REACT_NATIVE;
                if (!(var9 === var8)) {
                    _fun37053_ip = 243;
                    continue _fun37053
                }
            case 88:
                var10 = var7.originalUri;
                var9 = var7.filename;
                var8 = var7.mimeType;
                var11 = null;
                if (!(var11 != var8)) {
                    _fun37053_ip = 115;
                    continue _fun37053
                }
            case 112:
                var2 = var8;
            case 115:
                var0 = _closure1_slot38;
                var0 = var0.bind(var3)(var10, var2);
                var8 = var2;
                if (var0) {
                    _fun37053_ip = 191;
                    continue _fun37053
                }
            case 131:
                var2 = {};
                var2.originalUri = var10;
                var2.filename = var9;
                var2.mimeType = var8;
                var2.spoiler = var6;
                var2.description = var5;
                var2.i = var4;
                var0 = var7.width;
                var2.width = var0;
                var0 = var7.height;
                var2.height = var0;
                var0 = function arg0() {
                    var0 = undefined;
                    var3 = _closure1_slot44;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var0 = var0.bind(var3)(var2);
                _fun37053_ip = 241;
                continue _fun37053;
            case 191:
                var2 = {};
                var2.originalUri = var10;
                var2.filename = var9;
                var2.mimeType = var8;
                var7 = var7.size;
                var2.fileSize = var7;
                var2.spoiler = var6;
                var2.description = var5;
                var2.i = var4;
                var1 = function arg0() {
                    var0 = undefined;
                    var3 = _closure1_slot43;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var0 = var1.bind(var3)(var2);
            case 241:
                return var0;
            case 243:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var13 = 'Try to get file info for unsupported upload item';
                var14 = var1;
                var0 = new var14[var2](var13, var12);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var0 = function arg0, arg1() {
        _fun37056: for (var _fun37056_ip = 0;;) switch (_fun37056_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.match;
                var0 = /^ph:\\/\\ //i;
                var0 = var1.bind(var2)(var0);
                var2 = null;
                var0 = var2 != var0;
                if (!var0) {
                    _fun37056_ip = 44;
                    continue _fun37056
                }
            case 37:
                var1 = arg1;
                var0 = var2 != var1;
            case 44:
                return var0;
        }
    };
    var _closure1_slot33 = var0;
    var12 = function arg0, arg1() {
        _fun37057: for (var _fun37057_ip = 0;;) switch (_fun37057_ip) {
            case 0:
                var5 = arg0;
                var6 = arg1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 12;
                var0 = var2[var0];
                var2 = undefined;
                var3 = var3.bind(var2)(var0);
                var0 = var3.isIOS;
                var0 = var0.bind(var3)();
                var3 = !var0;
                var0 = !var3;
                if (var3) {
                    _fun37057_ip = 137;
                    continue _fun37057
                }
            case 50:
                var1 = _closure1_slot33;
                var1 = var1.bind(var2)(var5, var6);
                var3 = null;
                if (var1) {
                    _fun37057_ip = 96;
                    continue _fun37057
                }
            case 65:
                var4 = var5.match;
                var1 = /^(assets-library|file):\\/\\ / . + ( & ext = | \.)(HEI[CF]) $ / i;
                var1 = var4.bind(var5)(var1);
                var1 = var3 != var1;
                _fun37057_ip = 134;
                continue _fun37057;
            case 96:
                var4 = var3 == var6;
                var2 = undefined;
                if (var4) {
                    _fun37057_ip = 130;
                    continue _fun37057
                }
            case 105:
                var5 = var6.match;
                var4 = /\.HEI[CF]$/i;
                var2 = var5.bind(var6)(var4);
            case 130:
                var1 = var3 != var2;
            case 134:
                var0 = var1;
            case 137:
                return var0;
        }
    };
    var _closure1_slot34 = var12;
    var11 = function arg0, arg1, arg2() {
        _fun37058: for (var _fun37058_ip = 0;;) switch (_fun37058_ip) {
            case 0:
                var8 = arg0;
                var6 = arg1;
                var0 = arg2;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 12;
                var1 = var4[var1];
                var5 = undefined;
                var3 = var3.bind(var5)(var1);
                var1 = var3.isIOS;
                var1 = var1.bind(var3)();
                if (var1) {
                    _fun37058_ip = 51;
                    continue _fun37058
                }
            case 47:
                var1 = false;
                return var1;
            case 51:
                var1 = _closure1_slot33;
                var3 = var1.bind(var5)(var8, var6);
                var1 = null;
                if (var3) {
                    _fun37058_ip = 138;
                    continue _fun37058
                }
            case 66:
                var4 = var8.match;
                var3 = /^(assets-library|file):\\/\\ / . + ( & ext = | \.)(hei[cf] | jpe ? g | dng) $ / i;
                var3 = var4.bind(var8)(var3);
                var3 = var1 != var3;
                if (var3) {
                    _fun37058_ip = 136;
                    continue _fun37058
                }
            case 98:
                var7 = var8.match;
                var4 = /^(assets-library|file):\\/\\ / . + ( & ext = | \.) png$ / i;
                var4 = var7.bind(var8)(var4);
                var4 = var1 == var4;
                if (var4) {
                    _fun37058_ip = 133;
                    continue _fun37058
                }
            case 130:
                var4 = !var0;
            case 133:
                var3 = !var4;
            case 136:
                return var3;
            case 138:
                if (!(var1 != var6)) {
                    _fun37058_ip = 314;
                    continue _fun37058
                }
            case 145:
                var4 = var6.lastIndexOf;
                var3 = '.';
                var7 = var4.bind(var6)(var3);
                var3 = -1;
                if (!(var3 !== var7)) {
                    _fun37058_ip = 310;
                    continue _fun37058
                }
            case 173:
                var4 = var6.substring;
                var3 = 1;
                var3 = var7 + var3;
                var4 = var4.bind(var6)(var3);
                var3 = var4.toLowerCase;
                var3 = var3.bind(var4)();
                var4 = 'png';
                if (!(var4 !== var3)) {
                    _fun37058_ip = 299;
                    continue _fun37058
                }
            case 209:
                var7 = _closure1_slot1;
                var4 = _closure1_slot2;
                var6 = 18;
                var4 = var4[var6];
                var7 = var7.bind(var5)(var4);
                var4 = var7.isExtensionAnimated;
                var4 = var4.bind(var7)(var3);
                if (var4) {
                    _fun37058_ip = 295;
                    continue _fun37058
                }
            case 245:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var4 = var4.bind(var5)(var2);
                var2 = var4.getSupportedExtensions;
                var2 = var2.bind(var4)();
                if (!(var1 !== var2)) {
                    _fun37058_ip = 302;
                    continue _fun37058
                }
            case 278:
                var1 = var2.has;
                var1 = var1.bind(var2)(var3);
                if (!var1) {
                    _fun37058_ip = 302;
                    continue _fun37058
                }
            case 291:
                var1 = true;
                return var1;
            case 295:
                var1 = false;
                return var1;
            case 299:
                if (var0) {
                    _fun37058_ip = 306;
                    continue _fun37058
                }
            case 302:
                var0 = false;
                return var0;
            case 306:
                var0 = true;
                return var0;
            case 310:
                var0 = false;
                return var0;
            case 314:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot35 = var11;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun37061: for (var _fun37061_ip = 0;;) switch (_fun37061_ip) {
                    case 0:
                        StartGenerator();
                        var7 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun37061_ip = 243;
                            continue _fun37061
                        }
                    case 13:
                        var2 = arg0;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 12;
                        var4 = var4[var3];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.isIOS;
                        var4 = var4.bind(var5)();
                        if (var4) {
                            _fun37061_ip = 59;
                            continue _fun37061
                        }
                    case 54:
                        var4 = false;
                        return var4;
                    case 59:
                        var5 = _closure1_slot33;
                        var4 = var2;
                        var5 = var5.bind(var3)(var4, var7);
                        var4 = null;
                        if (var5) {
                            _fun37061_ip = 116;
                            continue _fun37061
                        }
                    case 77:
                        var8 = var2;
                        var6 = var8.match;
                        var5 = /^(assets-library|file):\\/\\ / . + ( & ext = | \.) png$ / i;
                        var5 = var6.bind(var8)(var5);
                        if (!(var4 != var5)) {
                            _fun37061_ip = 111;
                            continue _fun37061
                        }
                    case 109:
                        _fun37061_ip = 154;
                        continue _fun37061;
                    case 111:
                        var5 = false;
                        return var5;
                    case 116:
                        var5 = var4 == var7;
                        var3 = undefined;
                        if (var5) {
                            _fun37061_ip = 150;
                            continue _fun37061
                        }
                    case 125:
                        var6 = var7.match;
                        var5 = /\.png$/i;
                        var3 = var6.bind(var7)(var5);
                    case 150:
                        if (!(var4 != var3)) {
                            _fun37061_ip = 238;
                            continue _fun37061
                        }
                    case 154: // try_start_0
                        var3 = _closure1_slot6;
                        var4 = var3.MediaManager;
                        var3 = var4.imageHasTransparency;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address = 181);
                    case 179:
                        return var2;
                    case 181:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun37061_ip = 190;
                            continue _fun37061
                        }
                    case 187: // try_end0
                        return var2;
                    case 190:
                        return var2;
                    case 193: // catch_target0
                        CatchBlockStart(arg_register = 5);
                        var3 = _closure1_slot21;
                        var2 = var3.error;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var4 = var1.concat;
                        var1 = 'shouldConvertToPNG: imageHasTransparency failed: ';
                        var1 = var4.bind(var1)(var5);
                        var1 = var2.bind(var3)(var1);
                        var1 = false;
                        return var1;
                    case 238:
                        var1 = false;
                        return var1;
                    case 243:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot36 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot36 = var0;
    var10 = function arg0() {
        _fun37062: for (var _fun37062_ip = 0;;) switch (_fun37062_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 12;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var0 = var1.isAndroid;
                var0 = var0.bind(var1)();
                if (!var0) {
                    _fun37062_ip = 72;
                    continue _fun37062
                }
            case 41:
                var2 = var3.match;
                var1 = /^content:\\/\\ / . + $ / i;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var0 = var1 != var2;
            case 72:
                return var0;
        }
    };
    var _closure1_slot37 = var10;
    var9 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getFile;
        var0 = {};
        var3 = arg0;
        var0.uri = var3;
        var3 = arg1;
        var0.overrideType = var3;
        var0 = var1.bind(var2)(var0);
        var0 = var0.isVideo;
        return var0;
    };
    var _closure1_slot38 = var9;
    var8 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getFile;
        var0 = {};
        var3 = arg0;
        var0.uri = var3;
        var3 = arg1;
        var0.overrideType = var3;
        var0 = var1.bind(var2)(var0);
        var0 = var0.isImage;
        return var0;
    };
    var _closure1_slot39 = var8;
    var7 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getFile;
        var0 = {};
        var3 = arg0;
        var0.uri = var3;
        var0 = var1.bind(var2)(var0);
        var0 = var0.type;
        return var0;
    };
    var0 = function arg0() {
        _fun37066: for (var _fun37066_ip = 0;;) switch (_fun37066_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.uri;
                var _closure2_slot0 = var2;
                var2 = var1.filename;
                var _closure2_slot1 = var2;
                var2 = var1.isLowQuality;
                var _closure2_slot2 = var2;
                var2 = var1.compressionQuality;
                var _closure2_slot3 = var2;
                var9 = var1.videoQualitySetting;
                var _closure2_slot4 = var9;
                var2 = var1.videoMetadata;
                var8 = var1.fileSize;
                var10 = undefined;
                var _closure2_slot5 = var10;
                var _closure2_slot6 = var10;
                var _closure2_slot7 = var10;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 19;
                var1 = var6[var4];
                var11 = var5.bind(var10)(var1);
                var7 = var11.getVideoUploadBitrateConfig;
                var1 = {};
                var12 = 'upload_utils.convert_video';
                var1.location = var12;
                var1 = var7.bind(var11)(var1);
                var4 = var6[var4];
                var5 = var5.bind(var10)(var4);
                var4 = var5.shouldApplyBitrateExperiment;
                var4 = var4.bind(var5)(var9);
                var5 = 1;
                if (!var4) {
                    _fun37066_ip = 158;
                    continue _fun37066
                }
            case 152:
                var5 = var1.bitrateMultiplier;
            case 158:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var11 = 20;
                var1 = var7[var11];
                var1 = var6.bind(var10)(var1);
                var4 = var1.VideoQualityTarget;
                var1 = var4.fromCompressionQuality;
                var12 = var1.bind(var4)(var9, var5);
                var1 = var7[var11];
                var5 = var6.bind(var10)(var1);
                var4 = var5.canSkipVideoTranscode;
                var1 = 21;
                var1 = var7[var1];
                var9 = var6.bind(var10)(var1);
                var1 = var9.maxFileSize;
                var13 = var1.bind(var9)();
                var17 = var5;
                var16 = var12;
                var15 = var2;
                var14 = var8;
                var4 = var17[var4](var16, var15, var14, var13, var12);
                _closure2_slot5 = var4;
                var1 = var7[var11];
                var8 = var6.bind(var10)(var1);
                var5 = var8.calculateTargetDimensions;
                var1 = var12.targetResolution;
                var5 = var5.bind(var8)(var2, var1);
                var1 = var7[var11];
                var9 = var6.bind(var10)(var1);
                var8 = var9.calculateOptimalBitrate;
                var1 = var7[var11];
                var1 = var6.bind(var10)(var1);
                var1 = var1.DEFAULT_VIDEO_ENCODING_CONFIG;
                var1 = var1.bitrateFloor;
                var8 = var8.bind(var9)(var2, var12, var1);
                var1 = {};
                var9 = var7[var11];
                var9 = var6.bind(var10)(var9);
                var15 = var9.DEFAULT_VIDEO_ENCODING_CONFIG;
                var16 = var1;
                var9 = copyDataProperties(var16, var15);
                var9 = 'videoQuality';
                var1[var9] = var12;
                var12 = var5.width;
                var9 = 'targetWidth';
                var1[var9] = var12;
                var9 = var5.height;
                var5 = 'targetHeight';
                var1[var5] = var9;
                var5 = 'targetBitrate';
                var1[var5] = var8;
                var5 = 12;
                var5 = var7[var5];
                var6 = var6.bind(var10)(var5);
                var5 = var6.isAndroid;
                var5 = var5.bind(var6)();
                if (!var5) {
                    _fun37066_ip = 448;
                    continue _fun37066
                }
            case 418:
                var6 = global;
                var7 = var6.Number;
                var5 = _closure1_slot8;
                var5 = var5.Version;
                var7 = var7.bind(var10)(var5);
                var5 = 34;
                if (!(!(var7 > var5))) {
                    _fun37066_ip = 456;
                    continue _fun37066
                }
            case 448:
                var5 = var2.frameRate;
                _fun37066_ip = 508;
                continue _fun37066;
            case 456:
                var8 = var6.Math;
                var7 = var8.min;
                var6 = var2.frameRate;
                var9 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var11];
                var3 = var9.bind(var10)(var3);
                var3 = var3.DEFAULT_VIDEO_ENCODING_CONFIG;
                var3 = var3.frameRate;
                var5 = var7.bind(var8)(var6, var3);
            case 508:
                var3 = 'frameRate';
                var1[var3] = var5;
                var3 = 'skipVideoTranscode';
                var1[var3] = var4;
                var4 = var2.isHDRContent;
                var3 = 'createHDR';
                var1[var3] = var4;
                var3 = var2.rotationDegrees;
                var2 = 'rotationDegrees';
                var1[var2] = var3;
                _closure2_slot6 = var1;
                var1 = 0;
                _closure2_slot7 = var1;
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var16 = function(arg0, arg1) { // Environment: var0
                    var3 = arg1;
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var _closure3_slot1 = var3;
                    var2 = function() { // Environment: var1
                        var3 = _closure1_slot5;
                        var2 = undefined;
                        var1 = function*() { // Environment: var0
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun37070: for (var _fun37070_ip = 0;;) switch (_fun37070_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun37070_ip = 630;
                                            continue _fun37070
                                        }
                                    case 10:
                                        var13 = function*() { // Original name: _loop, environment: var1
                                            var0 = function*() { // Original name: ?anon_0__loop, environment: var0
                                                _fun37072: for (var _fun37072_ip = 0;;) switch (_fun37072_ip) {
                                                    case 0:
                                                        StartGenerator();
                                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                        if (var1) {
                                                            _fun37072_ip = 1209;
                                                            continue _fun37072
                                                        }
                                                    case 12:
                                                        var6 = undefined;
                                                        var _closure8_slot0 = var6;
                                                        var4 = _closure1_slot49;
                                                        var1 = _closure2_slot6;
                                                        var1 = var4.bind(var6)(var1);
                                                        SaveGenerator(address = 41);
                                                    case 39:
                                                        return var1;
                                                    case 41:
                                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                                        if (var4) {
                                                            _fun37072_ip = 1206;
                                                            continue _fun37072
                                                        }
                                                    case 50:
                                                        var4 = var1.isSupported;
                                                        if (var4) {
                                                            _fun37072_ip = 1195;
                                                            continue _fun37072
                                                        }
                                                    case 62:
                                                        var11 = null;
                                                        if (!(var11 != var1)) {
                                                            _fun37072_ip = 1143;
                                                            continue _fun37072
                                                        }
                                                    case 71:
                                                        var4 = var1.capabilities;
                                                        if (!(var11 != var4)) {
                                                            _fun37072_ip = 1143;
                                                            continue _fun37072
                                                        }
                                                    case 84:
                                                        var4 = var1.failures;
                                                        if (!(var11 != var4)) {
                                                            _fun37072_ip = 1143;
                                                            continue _fun37072
                                                        }
                                                    case 97:
                                                        var4 = var1.failures;
                                                        var4 = var4.length;
                                                        var8 = 0;
                                                        if (!(var8 !== var4)) {
                                                            _fun37072_ip = 1143;
                                                            continue _fun37072
                                                        }
                                                    case 117:
                                                        var9 = var1.failures;
                                                        var5 = var9.find;
                                                        var4 = function(arg0) { // Environment: var7
                                                            var0 = arg0;
                                                            var1 = var0.type;
                                                            var0 = 'codec_not_found';
                                                            var0 = var0 === var1;
                                                            return var0;
                                                        };
                                                        var4 = var5.bind(var9)(var4);
                                                        if (!(var11 == var4)) {
                                                            _fun37072_ip = 1039;
                                                            continue _fun37072
                                                        }
                                                    case 145:
                                                        var9 = var1.failures;
                                                        var5 = var9.find;
                                                        var4 = function(arg0) { // Environment: var7
                                                            _fun37074: for (var _fun37074_ip = 0;;) switch (_fun37074_ip) {
                                                                case 0:
                                                                    var1 = arg0;
                                                                    var2 = var1.type;
                                                                    var0 = 'resolution';
                                                                    var0 = var0 === var2;
                                                                    if (var0) {
                                                                        _fun37074_ip = 34;
                                                                        continue _fun37074
                                                                    }
                                                                case 19:
                                                                    var2 = var1.type;
                                                                    var1 = 'resolution_alignment';
                                                                    var0 = var1 === var2;
                                                                case 34:
                                                                    return var0;
                                                            }
                                                        };
                                                        var4 = var5.bind(var9)(var4);
                                                        var4 = var11 != var4;
                                                        var5 = false;
                                                        var9 = false;
                                                        if (!var4) {
                                                            _fun37072_ip = 558;
                                                            continue _fun37072
                                                        }
                                                    case 180:
                                                        var4 = var1.capabilities;
                                                        var4 = var4.resolution;
                                                        var4 = var11 != var4;
                                                        var9 = false;
                                                        if (!var4) {
                                                            _fun37072_ip = 558;
                                                            continue _fun37072
                                                        }
                                                    case 204:
                                                        var4 = _closure2_slot6;
                                                        var4 = var4.targetHeight;
                                                        if (!(var8 !== var4)) {
                                                            _fun37072_ip = 984;
                                                            continue _fun37072
                                                        }
                                                    case 221:
                                                        var4 = _closure2_slot6;
                                                        var4 = var4.targetWidth;
                                                        if (!(var8 !== var4)) {
                                                            _fun37072_ip = 984;
                                                            continue _fun37072
                                                        }
                                                    case 238:
                                                        var4 = var1.capabilities;
                                                        var4 = var4.resolution;
                                                        var14 = var4.maxWidth;
                                                        var4 = var1.capabilities;
                                                        var4 = var4.resolution;
                                                        var15 = var4.maxHeight;
                                                        var4 = _closure2_slot6;
                                                        var8 = var4.targetWidth;
                                                        var4 = _closure2_slot6;
                                                        var4 = var4.targetHeight;
                                                        var8 = var8 / var4;
                                                        var12 = global;
                                                        var13 = var12.Math;
                                                        var10 = var13.min;
                                                        var4 = _closure2_slot6;
                                                        var4 = var4.targetWidth;
                                                        var10 = var10.bind(var13)(var4, var14);
                                                        var14 = var12.Math;
                                                        var13 = var14.min;
                                                        var4 = _closure2_slot6;
                                                        var4 = var4.targetHeight;
                                                        var4 = var13.bind(var14)(var4, var15);
                                                        var13 = _closure2_slot6;
                                                        var13 = var13.targetWidth;
                                                        if (!(var10 !== var13)) {
                                                            _fun37072_ip = 388;
                                                            continue _fun37072
                                                        }
                                                    case 368:
                                                        var15 = var12.Math;
                                                        var14 = var15.round;
                                                        var13 = var10 / var8;
                                                        var4 = var14.bind(var15)(var13);
                                                    case 388:
                                                        var13 = _closure2_slot6;
                                                        var13 = var13.targetHeight;
                                                        if (!(var4 !== var13)) {
                                                            _fun37072_ip = 422;
                                                            continue _fun37072
                                                        }
                                                    case 402:
                                                        var14 = var12.Math;
                                                        var13 = var14.round;
                                                        var8 = var4 * var8;
                                                        var10 = var13.bind(var14)(var8);
                                                    case 422:
                                                        var8 = var1.capabilities;
                                                        var8 = var8.blockSize;
                                                        var13 = var8.widthAlignment;
                                                        var8 = var8.heightAlignment;
                                                        var15 = var12.Math;
                                                        var14 = var15.floor;
                                                        var10 = var10 / var13;
                                                        var10 = var14.bind(var15)(var10);
                                                        var10 = var10 * var13;
                                                        var13 = var12.Math;
                                                        var12 = var13.floor;
                                                        var4 = var4 / var8;
                                                        var4 = var12.bind(var13)(var4);
                                                        var8 = var4 * var8;
                                                        var4 = _closure2_slot6;
                                                        var4 = var4.targetWidth;
                                                        var4 = var10 === var4;
                                                        if (!var4) {
                                                            _fun37072_ip = 531;
                                                            continue _fun37072
                                                        }
                                                    case 517:
                                                        var12 = _closure2_slot6;
                                                        var12 = var12.targetHeight;
                                                        var4 = var8 === var12;
                                                    case 531:
                                                        var9 = false;
                                                        if (var4) {
                                                            _fun37072_ip = 558;
                                                            continue _fun37072
                                                        }
                                                    case 536:
                                                        var4 = _closure2_slot6;
                                                        var4.targetWidth = var10;
                                                        var4 = _closure2_slot6;
                                                        var4.targetHeight = var8;
                                                        var9 = true;
                                                    case 558:
                                                        var10 = var1.failures;
                                                        var8 = var10.find;
                                                        var4 = function(arg0) { // Environment: var7
                                                            var0 = arg0;
                                                            var1 = var0.type;
                                                            var0 = 'frameRate';
                                                            var0 = var0 === var1;
                                                            return var0;
                                                        };
                                                        var8 = var8.bind(var10)(var4);
                                                        var10 = var1.capabilities;
                                                        _closure8_slot0 = var10;
                                                        var4 = var9;
                                                        if (!(var11 != var8)) {
                                                            _fun37072_ip = 841;
                                                            continue _fun37072
                                                        }
                                                    case 599:
                                                        var13 = var11 == var10;
                                                        var12 = undefined;
                                                        if (var13) {
                                                            _fun37072_ip = 628;
                                                            continue _fun37072
                                                        }
                                                    case 608:
                                                        var13 = var10.frameRate;
                                                        var14 = var11 == var13;
                                                        var12 = undefined;
                                                        if (var14) {
                                                            _fun37072_ip = 628;
                                                            continue _fun37072
                                                        }
                                                    case 623:
                                                        var12 = var13.min;
                                                    case 628:
                                                        var4 = var9;
                                                        if (!(var11 != var12)) {
                                                            _fun37072_ip = 841;
                                                            continue _fun37072
                                                        }
                                                    case 638:
                                                        var13 = var11 == var10;
                                                        var12 = undefined;
                                                        if (var13) {
                                                            _fun37072_ip = 667;
                                                            continue _fun37072
                                                        }
                                                    case 647:
                                                        var13 = var10.frameRate;
                                                        var14 = var11 == var13;
                                                        var12 = undefined;
                                                        if (var14) {
                                                            _fun37072_ip = 667;
                                                            continue _fun37072
                                                        }
                                                    case 662:
                                                        var12 = var13.max;
                                                    case 667:
                                                        var4 = var9;
                                                        if (!(var11 != var12)) {
                                                            _fun37072_ip = 841;
                                                            continue _fun37072
                                                        }
                                                    case 677:
                                                        var12 = _closure2_slot6;
                                                        var12 = var12.frameRate;
                                                        var13 = var8.message;
                                                        var12 = var13.includes;
                                                        var8 = 'not supported at resolution';
                                                        var8 = var12.bind(var13)(var8);
                                                        if (var8) {
                                                            _fun37072_ip = 753;
                                                            continue _fun37072
                                                        }
                                                    case 711:
                                                        var8 = global;
                                                        var14 = var8.Math;
                                                        var13 = var14.min;
                                                        var8 = _closure2_slot6;
                                                        var12 = var8.frameRate;
                                                        var8 = var10.frameRate;
                                                        var8 = var8.max;
                                                        var8 = var13.bind(var14)(var12, var8);
                                                        _fun37072_ip = 812;
                                                        continue _fun37072;
                                                    case 753:
                                                        var14 = [60, 30, 29.97, 24, 15];
                                                        var13 = var14.sort;
                                                        var12 = function(arg0, arg1) { // Environment: var7
                                                            var1 = arg1;
                                                            var0 = arg0;
                                                            var0 = var1 - var0;
                                                            return var0;
                                                        };
                                                        var13 = var13.bind(var14)(var12);
                                                        var12 = var13.find;
                                                        var7 = function(arg0) { // Environment: var7
                                                            _fun37077: for (var _fun37077_ip = 0;;) switch (_fun37077_ip) {
                                                                case 0:
                                                                    var2 = arg0;
                                                                    var0 = _closure2_slot6;
                                                                    var0 = var0.frameRate;
                                                                    var0 = var2 < var0;
                                                                    if (!var0) {
                                                                        _fun37077_ip = 45;
                                                                        continue _fun37077
                                                                    }
                                                                case 23:
                                                                    var1 = _closure8_slot0;
                                                                    var1 = var1.frameRate;
                                                                    var1 = var1.min;
                                                                    var0 = var2 >= var1;
                                                                case 45:
                                                                    return var0;
                                                            }
                                                        };
                                                        var7 = var12.bind(var13)(var7);
                                                        if (!(var11 == var7)) {
                                                            _fun37072_ip = 809;
                                                            continue _fun37072
                                                        }
                                                    case 798:
                                                        var10 = var10.frameRate;
                                                        var7 = var10.min;
                                                    case 809:
                                                        var8 = var7;
                                                    case 812:
                                                        var7 = _closure2_slot6;
                                                        var7 = var7.frameRate;
                                                        var4 = var9;
                                                        if (!(var8 !== var7)) {
                                                            _fun37072_ip = 841;
                                                            continue _fun37072
                                                        }
                                                    case 829:
                                                        var7 = _closure2_slot6;
                                                        var7.frameRate = var8;
                                                        var4 = true;
                                                    case 841:
                                                        if (var4) {
                                                            _fun37072_ip = 970;
                                                            continue _fun37072
                                                        }
                                                    case 847:
                                                        var8 = _closure1_slot21;
                                                        var7 = var8.error;
                                                        var4 = {};
                                                        var9 = var1.failures;
                                                        var4.currentFailures = var9;
                                                        var9 = _closure2_slot6;
                                                        var4.config = var9;
                                                        var9 = var1.capabilities;
                                                        var4.capabilities = var9;
                                                        var10 = _closure2_slot7;
                                                        var9 = 1;
                                                        var9 = var10 + var9;
                                                        var4.attempt = var9;
                                                        var9 = 'No adjustments possible for current failures';
                                                        var4 = var7.bind(var8)(var9, var4);
                                                        var7 = _closure3_slot1;
                                                        var4 = global;
                                                        var4 = var4.Error;
                                                        var8 = var4.prototype;
                                                        var8 = Object.create(var8, {
                                                            constructor: {
                                                                value: var4
                                                            }
                                                        });
                                                        var18 = var8;
                                                        var17 = var9;
                                                        var4 = new var18[var4](var17, var16);
                                                        var4 = var4 instanceof Object ? var4 : var8;
                                                        var4 = var7.bind(var6)(var4);
                                                        var4 = {};
                                                        var4.v = var5;
                                                        return var4;
                                                    case 970:
                                                        var4 = _closure2_slot7;
                                                        var4 = var4 + 1;
                                                        _closure2_slot7 = var4;
                                                        return var6;
                                                    case 984:
                                                        var7 = _closure3_slot1;
                                                        var4 = global;
                                                        var9 = var4.Error;
                                                        var4 = var9.prototype;
                                                        var8 = Object.create(var4, {
                                                            constructor: {
                                                                value: var9
                                                            }
                                                        });
                                                        var17 = 'Invalid video dimensions: width or height is 0';
                                                        var18 = var8;
                                                        var4 = new var18[var9](var17, var16);
                                                        var4 = var4 instanceof Object ? var4 : var8;
                                                        var4 = var7.bind(var6)(var4);
                                                        var4 = {};
                                                        var4.v = var5;
                                                        return var4;
                                                    case 1039:
                                                        var4 = _closure2_slot6;
                                                        var4 = var4.useHEVC;
                                                        if (var4) {
                                                            _fun37072_ip = 1125;
                                                            continue _fun37072
                                                        }
                                                    case 1052:
                                                        var5 = _closure1_slot21;
                                                        var4 = var5.error;
                                                        var8 = 'No supported video encoder found';
                                                        var4 = var4.bind(var5)(var8);
                                                        var5 = _closure3_slot1;
                                                        var4 = global;
                                                        var4 = var4.Error;
                                                        var7 = var4.prototype;
                                                        var7 = Object.create(var7, {
                                                            constructor: {
                                                                value: var4
                                                            }
                                                        });
                                                        var18 = var7;
                                                        var17 = var8;
                                                        var4 = new var18[var4](var17, var16);
                                                        var4 = var4 instanceof Object ? var4 : var7;
                                                        var4 = var5.bind(var6)(var4);
                                                        var4 = {};
                                                        var5 = false;
                                                        var4.v = var5;
                                                        _fun37072_ip = 1140;
                                                        continue _fun37072;
                                                    case 1125:
                                                        var6 = _closure2_slot6;
                                                        var5 = false;
                                                        var6.useHEVC = var5;
                                                        var4 = 1;
                                                    case 1140:
                                                        return var4;
                                                    case 1143:
                                                        var5 = _closure1_slot21;
                                                        var4 = var5.warn;
                                                        var3 = {};
                                                        var6 = _closure2_slot6;
                                                        var3.config = var6;
                                                        var6 = _closure2_slot7;
                                                        var2 = 1;
                                                        var2 = var6 + var2;
                                                        var3.attempt = var2;
                                                        var2 = 'Unable to determine device capabilities or adjust parameters';
                                                        var2 = var4.bind(var5)(var2, var3);
                                                        var2 = 0;
                                                        return var2;
                                                    case 1195:
                                                        var2 = {};
                                                        var3 = true;
                                                        var2.v = var3;
                                                        return var2;
                                                    case 1206:
                                                        return var1;
                                                    case 1209:
                                                        return var0;
                                                }
                                            };
                                            return var0;
                                        };
                                        var1 = _closure2_slot7;
                                        var11 = 4;
                                        if (!(var1 < var11)) {
                                            _fun37070_ip = 617;
                                            continue _fun37070
                                        }
                                    case 34:
                                        var10 = undefined;
                                        var2 = var13.bind(var10)();
                                        var9 = global;
                                        var1 = var9.Symbol;
                                        var1 = var1.iterator;
                                        var1 = var2[var1];
                                        var3 = var1.bind(var2)();
                                        var8 = 'iterator is not an object';
                                        var24 = var3;
                                        var23 = var8;
                                        var1 = ensureObject(var24, var23);
                                        var17 = var3.next;
                                        var16 = undefined;
                                        var7 = 'iterator.throw() did not return an object';
                                        var6 = 'throw';
                                        var5 = 'iterator.next() did not return an object';
                                    case 101:
                                        var2 = var16;
                                        var2 = var17.bind(var3)(var2);
                                        var24 = var2;
                                        var23 = var5;
                                        var4 = ensureObject(var24, var23);
                                        var1 = var2;
                                        var4 = var2.done;
                                        if (var4) {
                                            _fun37070_ip = 312;
                                            continue _fun37070
                                        }
                                    case 133: // try_start_0
                                        var4 = generatorSetDelegated();
                                        SaveGenerator(address = 188);
                                    case 139:
                                        return var2;
                                    case 141: // try_end0 // catch_target0 // catch_target1
                                        CatchBlockStart(arg_register = 4);
                                        var24 = var3;
                                        var23 = var6;
                                        var2 = getMethod(var24, var23);
                                        if (!(var2 !== var10)) {
                                            _fun37070_ip = 271;
                                            continue _fun37070
                                        }
                                    case 157:
                                        var2 = var2.bind(var3)(var4);
                                        var24 = var2;
                                        var23 = var7;
                                        var4 = ensureObject(var24, var23);
                                        var4 = var2.done;
                                        if (var4) {
                                            _fun37070_ip = 266;
                                            continue _fun37070
                                        }
                                    case 180:
                                        var4 = generatorSetDelegated();
                                        SaveGenerator(address = 188);
                                    case 186:
                                        return var2;
                                    case 188: // try_start_1
                                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 15);
                                        var16 = var4;
                                        var14 = var15;
                                        if (!var14) {
                                            _fun37070_ip = 101;
                                            continue _fun37070
                                        }
                                    case 200:
                                        var16 = var4;
                                    case 203: // try_end1
                                        var23 = 'return';
                                        var24 = var3;
                                        var18 = getMethod(var24, var23);
                                        if (!(var18 !== var10)) {
                                            _fun37070_ip = 263;
                                            continue _fun37070
                                        }
                                    case 218:
                                        var14 = var16;
                                        var14 = var18.bind(var3)(var14);
                                        var23 = 'iterator.return() did not return an object';
                                        var24 = var14;
                                        var18 = ensureObject(var24, var23);
                                        var18 = var14.done;
                                        if (var18) {
                                            _fun37070_ip = 255;
                                            continue _fun37070
                                        }
                                    case 247:
                                        var18 = generatorSetDelegated();
                                        SaveGenerator(address = 188);
                                    case 253:
                                        return var14;
                                    case 255:
                                        var14 = var14.value;
                                        return var14;
                                    case 263:
                                        return var4;
                                    case 266:
                                        var1 = var2;
                                        _fun37070_ip = 312;
                                        continue _fun37070;
                                    case 271:
                                        var23 = 'return';
                                        var24 = var3;
                                        var2 = getMethod(var24, var23);
                                        if (!(var2 !== var10)) {
                                            _fun37070_ip = 300;
                                            continue _fun37070
                                        }
                                    case 286:
                                        var24 = var2.bind(var3)();
                                        var23 = 'iterator.return() did not return an object';
                                        var2 = ensureObject(var24, var23);
                                    case 300:
                                        var24 = 'yield* delegate must have a .throw() method';
                                        var2 = throwTypeError(var24);
                                        throw var10;
                                    case 312:
                                        var4 = var1.value;
                                        var3 = 0;
                                        var2 = 1;
                                        if (!(var3 !== var4)) {
                                            _fun37070_ip = 617;
                                            continue _fun37070
                                        }
                                    case 329:
                                        var1 = var4;
                                        if (!(var2 !== var1)) {
                                            _fun37070_ip = 342;
                                            continue _fun37070
                                        }
                                    case 336:
                                        if (var1) {
                                            _fun37070_ip = 622;
                                            continue _fun37070
                                        }
                                    case 342:
                                        var14 = _closure2_slot7;
                                        if (!(var14 < var11)) {
                                            _fun37070_ip = 617;
                                            continue _fun37070
                                        }
                                    case 353:
                                        var15 = var13.bind(var10)();
                                        var14 = var9.Symbol;
                                        var14 = var14.iterator;
                                        var14 = var15[var14];
                                        var16 = var14.bind(var15)();
                                        var24 = var16;
                                        var23 = var8;
                                        var14 = ensureObject(var24, var23);
                                        var21 = var16.next;
                                        var20 = undefined;
                                    case 394:
                                        var15 = var20;
                                        var15 = var21.bind(var16)(var15);
                                        var24 = var15;
                                        var23 = var5;
                                        var17 = ensureObject(var24, var23);
                                        var14 = var15;
                                        var17 = var15.done;
                                        if (var17) {
                                            _fun37070_ip = 605;
                                            continue _fun37070
                                        }
                                    case 426: // try_start_2
                                        var17 = generatorSetDelegated();
                                        SaveGenerator(address = 481);
                                    case 432:
                                        return var15;
                                    case 434: // try_end2 // catch_target2 // catch_target3
                                        CatchBlockStart(arg_register = 17);
                                        var24 = var16;
                                        var23 = var6;
                                        var15 = getMethod(var24, var23);
                                        if (!(var15 !== var10)) {
                                            _fun37070_ip = 564;
                                            continue _fun37070
                                        }
                                    case 450:
                                        var15 = var15.bind(var16)(var17);
                                        var24 = var15;
                                        var23 = var7;
                                        var17 = ensureObject(var24, var23);
                                        var17 = var15.done;
                                        if (var17) {
                                            _fun37070_ip = 559;
                                            continue _fun37070
                                        }
                                    case 473:
                                        var17 = generatorSetDelegated();
                                        SaveGenerator(address = 481);
                                    case 479:
                                        return var15;
                                    case 481: // try_start_3
                                        ResumeGenerator(result_out_reg = 17, return_bool_out_reg = 19);
                                        var20 = var17;
                                        var18 = var19;
                                        if (!var18) {
                                            _fun37070_ip = 394;
                                            continue _fun37070
                                        }
                                    case 493:
                                        var20 = var17;
                                    case 496: // try_end3
                                        var23 = 'return';
                                        var24 = var16;
                                        var22 = getMethod(var24, var23);
                                        if (!(var22 !== var10)) {
                                            _fun37070_ip = 556;
                                            continue _fun37070
                                        }
                                    case 511:
                                        var18 = var20;
                                        var18 = var22.bind(var16)(var18);
                                        var23 = 'iterator.return() did not return an object';
                                        var24 = var18;
                                        var22 = ensureObject(var24, var23);
                                        var22 = var18.done;
                                        if (var22) {
                                            _fun37070_ip = 548;
                                            continue _fun37070
                                        }
                                    case 540:
                                        var22 = generatorSetDelegated();
                                        SaveGenerator(address = 481);
                                    case 546:
                                        return var18;
                                    case 548:
                                        var18 = var18.value;
                                        return var18;
                                    case 556:
                                        return var17;
                                    case 559:
                                        var14 = var15;
                                        _fun37070_ip = 605;
                                        continue _fun37070;
                                    case 564:
                                        var23 = 'return';
                                        var24 = var16;
                                        var15 = getMethod(var24, var23);
                                        if (!(var15 !== var10)) {
                                            _fun37070_ip = 593;
                                            continue _fun37070
                                        }
                                    case 579:
                                        var24 = var15.bind(var16)();
                                        var23 = 'iterator.return() did not return an object';
                                        var15 = ensureObject(var24, var23);
                                    case 593:
                                        var24 = 'yield* delegate must have a .throw() method';
                                        var15 = throwTypeError(var24);
                                        throw var10;
                                    case 605:
                                        var4 = var14.value;
                                        if (var3 !== var4) {
                                            _fun37070_ip = 329;
                                            continue _fun37070
                                        }
                                    case 617:
                                        var2 = false;
                                        return var2;
                                    case 622:
                                        var1 = var1.v;
                                        return var1;
                                    case 630:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var1 = var3.bind(var2)(var1);
                        var _closure4_slot0 = var1;
                        var0 = function() {
                            var0 = undefined;
                            var3 = _closure4_slot0;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        return var0;
                    };
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var4 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = {};
                        var0 = arg0;
                        var1.path = var0;
                        var0 = _closure2_slot6;
                        var1.encodingConfig = var0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var _closure3_slot2 = var4;
                    var4 = var2.bind(var0)();
                    var2 = var4.then;
                    var1 = function(arg0) { // Environment: var1
                        _fun37080: for (var _fun37080_ip = 0;;) switch (_fun37080_ip) {
                            case 0:
                                var0 = arg0;
                                if (var0) {
                                    _fun37080_ip = 107;
                                    continue _fun37080
                                }
                            case 9:
                                var2 = _closure1_slot21;
                                var1 = var2.error;
                                var0 = {};
                                var5 = _closure2_slot6;
                                var0.finalConfig = var5;
                                var4 = _closure2_slot7;
                                var0.attempts = var4;
                                var4 = 'Could not find compatible encoding configuration after multiple attempts';
                                var0 = var1.bind(var2)(var4, var0);
                                var2 = _closure3_slot1;
                                var0 = global;
                                var0 = var0.Error;
                                var1 = var0.prototype;
                                var1 = Object.create(var1, {
                                    constructor: {
                                        value: var0
                                    }
                                });
                                var15 = var1;
                                var14 = var4;
                                var0 = new var15[var0](var14, var13);
                                var1 = var0 instanceof Object ? var0 : var1;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                var0 = undefined;
                                _fun37080_ip = 1054;
                                continue _fun37080;
                            case 107:
                                var4 = _closure1_slot37;
                                var1 = _closure2_slot0;
                                var6 = undefined;
                                var1 = var4.bind(var6)(var1);
                                if (var1) {
                                    _fun37080_ip = 961;
                                    continue _fun37080
                                }
                            case 131:
                                var9 = _closure2_slot0;
                                var11 = _closure2_slot1;
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var5 = 12;
                                var1 = var1[var5];
                                var4 = var4.bind(var6)(var1);
                                var1 = var4.isIOS;
                                var1 = var1.bind(var4)();
                                var4 = !var1;
                                var1 = !var4;
                                if (var4) {
                                    _fun37080_ip = 277;
                                    continue _fun37080
                                }
                            case 178:
                                var4 = _closure1_slot33;
                                var4 = var4.bind(var6)(var9, var11);
                                var8 = null;
                                if (var4) {
                                    _fun37080_ip = 236;
                                    continue _fun37080
                                }
                            case 193:
                                var7 = var9.match;
                                var4 = /^assets-library:\\/\\ / . + & ext = (mov | qt) $ / i;
                                var4 = var7.bind(var9)(var4);
                                var4 = var8 != var4;
                                if (!var4) {
                                    _fun37080_ip = 234;
                                    continue _fun37080
                                }
                            case 225:
                                var7 = _closure1_slot38;
                                var4 = var7.bind(var6)(var9);
                            case 234:
                                _fun37080_ip = 274;
                                continue _fun37080;
                            case 236:
                                var9 = var8 == var11;
                                var7 = undefined;
                                if (var9) {
                                    _fun37080_ip = 270;
                                    continue _fun37080
                                }
                            case 245:
                                var10 = var11.match;
                                var9 = /\.(mov|qt)$/i;
                                var7 = var10.bind(var11)(var9);
                            case 270:
                                var4 = var8 != var7;
                            case 274:
                                var1 = var4;
                            case 277:
                                if (var1) {
                                    _fun37080_ip = 880;
                                    continue _fun37080
                                }
                            case 283:
                                var9 = _closure2_slot0;
                                var11 = _closure2_slot1;
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var1 = var1[var5];
                                var4 = var4.bind(var6)(var1);
                                var1 = var4.isIOS;
                                var1 = var1.bind(var4)();
                                var4 = !var1;
                                var1 = !var4;
                                if (var4) {
                                    _fun37080_ip = 426;
                                    continue _fun37080
                                }
                            case 327:
                                var4 = _closure1_slot33;
                                var4 = var4.bind(var6)(var9, var11);
                                var8 = null;
                                if (var4) {
                                    _fun37080_ip = 385;
                                    continue _fun37080
                                }
                            case 342:
                                var7 = var9.match;
                                var4 = /^assets-library:\\/\\ / . + & ext = mp4$ / i;
                                var4 = var7.bind(var9)(var4);
                                var4 = var8 != var4;
                                if (!var4) {
                                    _fun37080_ip = 383;
                                    continue _fun37080
                                }
                            case 374:
                                var7 = _closure1_slot38;
                                var4 = var7.bind(var6)(var9);
                            case 383:
                                _fun37080_ip = 423;
                                continue _fun37080;
                            case 385:
                                var9 = var8 == var11;
                                var7 = undefined;
                                if (var9) {
                                    _fun37080_ip = 419;
                                    continue _fun37080
                                }
                            case 394:
                                var10 = var11.match;
                                var9 = /\.mp4$/i;
                                var7 = var10.bind(var11)(var9);
                            case 419:
                                var4 = var8 != var7;
                            case 423:
                                var1 = var4;
                            case 426:
                                if (var1) {
                                    _fun37080_ip = 806;
                                    continue _fun37080
                                }
                            case 432:
                                var7 = _closure2_slot0;
                                var1 = var7.toLowerCase;
                                var8 = var1.bind(var7)();
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var1 = var1[var5];
                                var4 = var4.bind(var6)(var1);
                                var1 = var4.isIOS;
                                var1 = var1.bind(var4)();
                                if (!var1) {
                                    _fun37080_ip = 491;
                                    continue _fun37080
                                }
                            case 476:
                                var5 = var7.startsWith;
                                var4 = 'file';
                                var1 = var5.bind(var7)(var4);
                            case 491:
                                if (!var1) {
                                    _fun37080_ip = 554;
                                    continue _fun37080
                                }
                            case 494:
                                var5 = var8.endsWith;
                                var4 = 'mov';
                                var4 = var5.bind(var8)(var4);
                                if (var4) {
                                    _fun37080_ip = 531;
                                    continue _fun37080
                                }
                            case 514:
                                var7 = var8.endsWith;
                                var5 = 'mp4';
                                var4 = var7.bind(var8)(var5);
                            case 531:
                                if (var4) {
                                    _fun37080_ip = 551;
                                    continue _fun37080
                                }
                            case 534:
                                var7 = var8.endsWith;
                                var5 = 'qt';
                                var4 = var7.bind(var8)(var5);
                            case 551:
                                var1 = var4;
                            case 554:
                                if (var1) {
                                    _fun37080_ip = 666;
                                    continue _fun37080
                                }
                            case 557:
                                var7 = _closure1_slot21;
                                var5 = var7.error;
                                var4 = {};
                                var8 = _closure2_slot0;
                                var4.uri = var8;
                                var1 = _closure2_slot1;
                                var4.filename = var1;
                                var1 = 'Unsupported video URI format';
                                var1 = var5.bind(var7)(var1, var4);
                                var4 = _closure3_slot1;
                                var1 = global;
                                var7 = var1.Error;
                                var1 = var1.HermesInternal;
                                var5 = var1.concat;
                                var1 = 'Unsupported video URI format: ';
                                var14 = var5.bind(var1)(var8);
                                var5 = var7.prototype;
                                var5 = Object.create(var5, {
                                    constructor: {
                                        value: var7
                                    }
                                });
                                var15 = var5;
                                var1 = new var15[var7](var14, var13);
                                var1 = var1 instanceof Object ? var1 : var5;
                                var1 = var4.bind(var6)(var1);
                                var1 = undefined;
                                _fun37080_ip = 804;
                                continue _fun37080;
                            case 666:
                                var8 = _closure1_slot28;
                                var7 = _closure2_slot0;
                                var5 = {};
                                var4 = _closure2_slot6;
                                var5.encodingConfig = var4;
                                var4 = _closure2_slot4;
                                var5.videoQuality = var4;
                                var4 = var7.toLowerCase;
                                var10 = var4.bind(var7)();
                                var9 = var10.endsWith;
                                var4 = 'mov';
                                var4 = var9.bind(var10)(var4);
                                if (var4) {
                                    _fun37080_ip = 755;
                                    continue _fun37080
                                }
                            case 724:
                                var10 = _closure2_slot0;
                                var9 = var10.toLowerCase;
                                var11 = var9.bind(var10)();
                                var10 = var11.endsWith;
                                var9 = 'qt';
                                var4 = var10.bind(var11)(var9);
                            case 755:
                                var5.isMov = var4;
                                var4 = _closure2_slot5;
                                var5.skipVideoTranscode = var4;
                                var4 = 'compressVideo';
                                var8 = var8.bind(var6)(var4, var7, var5);
                                var7 = var8.then;
                                var5 = _closure3_slot2;
                                var4 = _closure3_slot1;
                                var1 = var7.bind(var8)(var5, var4);
                            case 804:
                                _fun37080_ip = 878;
                                continue _fun37080;
                            case 806:
                                var8 = _closure1_slot28;
                                var7 = _closure2_slot0;
                                var5 = {};
                                var4 = _closure2_slot6;
                                var5.encodingConfig = var4;
                                var4 = _closure2_slot4;
                                var5.videoQuality = var4;
                                var4 = _closure2_slot5;
                                var5.skipVideoTranscode = var4;
                                var4 = 'compressVideo';
                                var8 = var8.bind(var6)(var4, var7, var5);
                                var7 = var8.then;
                                var5 = _closure3_slot2;
                                var4 = _closure3_slot1;
                                var1 = var7.bind(var8)(var5, var4);
                            case 878:
                                _fun37080_ip = 959;
                                continue _fun37080;
                            case 880:
                                var8 = _closure1_slot28;
                                var7 = _closure2_slot0;
                                var5 = {};
                                var4 = _closure2_slot6;
                                var5.encodingConfig = var4;
                                var4 = _closure2_slot4;
                                var5.videoQuality = var4;
                                var4 = true;
                                var5.isMov = var4;
                                var4 = _closure2_slot5;
                                var5.skipVideoTranscode = var4;
                                var4 = 'compressVideo';
                                var8 = var8.bind(var6)(var4, var7, var5);
                                var7 = var8.then;
                                var5 = _closure3_slot2;
                                var4 = _closure3_slot1;
                                var1 = var7.bind(var8)(var5, var4);
                            case 959:
                                _fun37080_ip = 1051;
                                continue _fun37080;
                            case 961:
                                var5 = _closure1_slot28;
                                var4 = _closure2_slot0;
                                var3 = {};
                                var7 = _closure2_slot6;
                                var3.encodingConfig = var7;
                                var7 = _closure2_slot3;
                                var3.compressionQuality = var7;
                                var7 = _closure2_slot2;
                                var3.isLowQuality = var7;
                                var7 = _closure2_slot4;
                                var3.videoQuality = var7;
                                var2 = _closure2_slot5;
                                var3.skipVideoTranscode = var2;
                                var2 = 'resolveToMediaFilePath';
                                var5 = var5.bind(var6)(var2, var4, var3);
                                var4 = var5.then;
                                var3 = _closure3_slot2;
                                var2 = _closure3_slot1;
                                var1 = var4.bind(var5)(var3, var2);
                            case 1051:
                                var0 = var1;
                            case 1054:
                                return var0;
                        }
                    };
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.catch;
                    var1 = var1.bind(var2)(var3);
                    return var0;
                };
                var17 = var1;
                var0 = new var17[var2](var16, var15);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var _closure1_slot40 = var0;
    var0 = function arg0() {
        var0 = undefined;
        var3 = _closure1_slot42;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot41 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun37084: for (var _fun37084_ip = 0;;) switch (_fun37084_ip) {
                    case 0:
                        StartGenerator();
                        var4 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun37084_ip = 444;
                            continue _fun37084
                        }
                    case 13:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 11;
                        var2 = var5[var2];
                        var11 = undefined;
                        var5 = var3.bind(var11)(var2);
                        var3 = var5.getFile;
                        var2 = {};
                        var6 = var4.path;
                        var2.uri = var6;
                        var6 = var4.i;
                        var2.i = var6;
                        var6 = var4.mimeType;
                        var2.overrideType = var6;
                        var6 = var4.filename;
                        var2.overrideFilename = var6;
                        var5 = var3.bind(var5)(var2);
                        var6 = var5.filename;
                        var3 = _closure1_slot4;
                        var2 = _closure1_slot3;
                        var5 = var3.bind(var11)(var5, var2);
                        var3 = {};
                        var2 = var4.isImage;
                        if (!var2) {
                            _fun37084_ip = 139;
                            continue _fun37084
                        }
                    case 123:
                        var8 = var4.path;
                        var7 = var4.originalUri;
                        var2 = var8 !== var7;
                    case 139:
                        if (!var2) {
                            _fun37084_ip = 198;
                            continue _fun37084
                        }
                    case 142:
                        var10 = _closure1_slot51;
                        var16 = var4.originalUri;
                        var15 = var4.path;
                        var14 = var4.filename;
                        var13 = var4.attachmentQualityMetricsEnabled;
                        var12 = var4.attachmentOriginDetectionEnabled;
                        var17 = undefined;
                        var1 = var17[var10](var16, var15, var14, var13, var12, var11);
                        SaveGenerator(address = 186);
                    case 184:
                        return var1;
                    case 186:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        var3 = var1;
                        if (var2) {
                            _fun37084_ip = 441;
                            continue _fun37084
                        }
                    case 198:
                        var2 = {};
                        var16 = var2;
                        var15 = var5;
                        var5 = copyDataProperties(var16, var15);
                        var5 = 'name';
                        var2[var5] = var6;
                        var6 = var4.spoiler;
                        var5 = 'spoiler';
                        var2[var5] = var6;
                        var6 = var4.description;
                        var5 = 'description';
                        var2[var5] = var6;
                        var6 = var4.compressionQuality;
                        var5 = 'imageCompressionQuality';
                        var2[var5] = var6;
                        var6 = var4.imageEncoderType;
                        var5 = 'imageEncoderType';
                        var2[var5] = var6;
                        var6 = var4.videoQualitySetting;
                        var5 = 'videoCompressionQuality';
                        var2[var5] = var6;
                        var6 = var4.videoMetadata;
                        var5 = 'videoMetadata';
                        var2[var5] = var6;
                        var6 = var4.encodingConfig;
                        var5 = 'encodingConfig';
                        var2[var5] = var6;
                        var5 = var4.sourceImageDimensions;
                        var6 = var5.width;
                        var5 = 'sourceWidth';
                        var2[var5] = var6;
                        var4 = var4.sourceImageDimensions;
                        var5 = var4.height;
                        var4 = 'sourceHeight';
                        var2[var4] = var5;
                        var5 = var3.psnr;
                        var4 = 'psnr';
                        var2[var4] = var5;
                        var5 = var3.ssim;
                        var4 = 'ssim';
                        var2[var4] = var5;
                        var5 = var3.origin;
                        var4 = 'origin';
                        var2[var4] = var5;
                        var5 = var3.psnrMeasurementLatencyMs;
                        var4 = 'psnrMeasurementLatencyMs';
                        var2[var4] = var5;
                        var4 = var3.ssimMeasurementLatencyMs;
                        var3 = 'ssimMeasurementLatencyMs';
                        var2[var3] = var4;
                        return var2;
                    case 441:
                        return var1;
                    case 444:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot42 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot42 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun37087: for (var _fun37087_ip = 0;;) switch (_fun37087_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun37087_ip = 580;
                            continue _fun37087
                        }
                    case 13:
                        var12 = var1.originalUri;
                        var13 = var1.filename;
                        var14 = var1.mimeType;
                        var7 = var1.fileSize;
                        var11 = var1.spoiler;
                        var10 = var1.description;
                        var15 = var1.i;
                        var6 = undefined;
                        SaveGenerator(address = 59);
                    case 57:
                        return var6;
                    case 59:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun37087_ip = 577;
                            continue _fun37087
                        }
                    case 68:
                        var2 = _closure1_slot30;
                        var8 = var2.bind(var6)();
                        var2 = _closure1_slot11;
                        var16 = var2.dataSavingMode;
                        if (!var16) {
                            _fun37087_ip = 120;
                            continue _fun37087
                        }
                    case 92:
                        var3 = _closure1_slot12;
                        var2 = var3.getType;
                        var3 = var2.bind(var3)();
                        var2 = _closure1_slot16;
                        var2 = var2.CELLULAR;
                        var16 = var3 === var2;
                    case 120:
                        var2 = function arg0, arg1() {
                            var0 = undefined;
                            var3 = _closure1_slot46;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var2 = var2.bind(var6)(var12, var14);
                        SaveGenerator(address = 137);
                    case 135:
                        return var2;
                    case 137:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun37087_ip = 574;
                            continue _fun37087
                        }
                    case 146:
                        var4 = null;
                        if (!(var4 != var2)) {
                            _fun37087_ip = 538;
                            continue _fun37087
                        }
                    case 155:
                        var5 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var3 = 22;
                        var3 = var17[var3];
                        var17 = var5.bind(var6)(var3);
                        var5 = var17.getVideoFrameRateValidationExperimentConfig;
                        var3 = {};
                        var18 = 'upload_utils.process_video_upload';
                        var3.location = var18;
                        var3 = var5.bind(var17)(var3);
                        var3 = var3.enableFrameRateValidation;
                        if (!var3) {
                            _fun37087_ip = 266;
                            continue _fun37087
                        }
                    case 207:
                        var3 = var2.frameRate;
                        if (!(var4 != var3)) {
                            _fun37087_ip = 480;
                            continue _fun37087
                        }
                    case 220:
                        var3 = global;
                        var17 = var3.Number;
                        var5 = var17.isFinite;
                        var3 = var2.frameRate;
                        var3 = var5.bind(var17)(var3);
                        if (!var3) {
                            _fun37087_ip = 480;
                            continue _fun37087
                        }
                    case 251:
                        var5 = var2.frameRate;
                        var3 = 0;
                        if (!(!(var5 <= var3))) {
                            _fun37087_ip = 480;
                            continue _fun37087
                        }
                    case 266:
                        var5 = _closure1_slot40;
                        var3 = {};
                        var3.uri = var12;
                        var3.filename = var13;
                        var3.isLowQuality = var16;
                        var16 = _closure1_slot17;
                        var16 = var16.LOW;
                        var3.compressionQuality = var16;
                        var3.videoQualitySetting = var8;
                        var3.videoMetadata = var2;
                        var3.fileSize = var7;
                        var3 = var5.bind(var6)(var3);
                        SaveGenerator(address = 325);
                    case 323:
                        return var3;
                    case 325:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun37087_ip = 477;
                            continue _fun37087
                        }
                    case 334:
                        var16 = var3.path;
                        var7 = var3.encodingConfig;
                        if (!(var4 != var16)) {
                            _fun37087_ip = 441;
                            continue _fun37087
                        }
                    case 350:
                        var5 = _closure1_slot41;
                        var4 = {};
                        var4.path = var16;
                        var4.i = var15;
                        var4.mimeType = var14;
                        var4.filename = var13;
                        var4.originalUri = var12;
                        var4.spoiler = var11;
                        var4.description = var10;
                        var9 = _closure1_slot17;
                        var9 = var9.LOW;
                        var4.compressionQuality = var9;
                        var4.videoQualitySetting = var8;
                        var4.videoMetadata = var2;
                        var4.encodingConfig = var7;
                        var7 = {};
                        var4.sourceImageDimensions = var7;
                        var7 = false;
                        var4.isImage = var7;
                        var4 = var5.bind(var6)(var4);
                        return var4;
                    case 441:
                        var4 = global;
                        var6 = var4.Error;
                        var4 = var6.prototype;
                        var5 = Object.create(var4, {
                            constructor: {
                                value: var6
                            }
                        });
                        var20 = 'Failed to get video file path';
                        var21 = var5;
                        var4 = new var21[var6](var20, var19);
                        var4 = var4 instanceof Object ? var4 : var5;
                        throw var4;
                    case 477:
                        return var3;
                    case 480:
                        var3 = global;
                        var5 = var3.Error;
                        var6 = var2.frameRate;
                        var3 = var3.HermesInternal;
                        var4 = var3.concat;
                        var3 = 'Invalid video frame rate: ';
                        var20 = var4.bind(var3)(var6);
                        var4 = var5.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var5
                            }
                        });
                        var21 = var4;
                        var3 = new var21[var5](var20, var19);
                        var3 = var3 instanceof Object ? var3 : var4;
                        throw var3;
                    case 538:
                        var3 = global;
                        var5 = var3.Error;
                        var3 = var5.prototype;
                        var4 = Object.create(var3, {
                            constructor: {
                                value: var5
                            }
                        });
                        var20 = 'Video metadata is required for video conversion';
                        var21 = var4;
                        var3 = new var21[var5](var20, var19);
                        var3 = var3 instanceof Object ? var3 : var4;
                        throw var3;
                    case 574:
                        return var2;
                    case 577:
                        return var1;
                    case 580:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot43 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot43 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun37091: for (var _fun37091_ip = 0;;) switch (_fun37091_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun37091_ip = 1258;
                            continue _fun37091
                        }
                    case 13:
                        var13 = var1.originalUri;
                        var14 = var1.filename;
                        var15 = var1.mimeType;
                        var12 = var1.spoiler;
                        var11 = var1.description;
                        var16 = var1.i;
                        var27 = var1.width;
                        var26 = var1.height;
                        var5 = undefined;
                        SaveGenerator(address = 63);
                    case 61:
                        return var5;
                    case 63:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun37091_ip = 1255;
                            continue _fun37091
                        }
                    case 72:
                        var2 = _closure1_slot11;
                        var19 = var2.dataSavingMode;
                        if (!var19) {
                            _fun37091_ip = 116;
                            continue _fun37091
                        }
                    case 88:
                        var4 = _closure1_slot12;
                        var2 = var4.getType;
                        var4 = var2.bind(var4)();
                        var2 = _closure1_slot16;
                        var2 = var2.CELLULAR;
                        var19 = var4 === var2;
                    case 116:
                        var2 = _closure1_slot39;
                        var8 = var2.bind(var5)(var13, var15);
                        if (var8) {
                            _fun37091_ip = 133;
                            continue _fun37091
                        }
                    case 129:
                        var9 = {};
                        _fun37091_ip = 146;
                        continue _fun37091;
                    case 133:
                        var2 = {};
                        var2.width = var27;
                        var2.height = var26;
                        var9 = var2;
                    case 146:
                        var2 = _closure1_slot17;
                        var24 = var2.LOW;
                        var2 = var8;
                        if (!var2) {
                            _fun37091_ip = 165;
                            continue _fun37091
                        }
                    case 162:
                        var2 = !var19;
                    case 165:
                        var23 = false;
                        if (!var2) {
                            _fun37091_ip = 321;
                            continue _fun37091
                        }
                    case 173:
                        var17 = _closure1_slot0;
                        var18 = _closure1_slot2;
                        var6 = 23;
                        var2 = var18[var6];
                        var2 = var17.bind(var5)(var2);
                        var2 = var2.ADAPTIVE_COMPRESSION_CONFIG;
                        var2 = var2.useOriginalIfSmaller;
                        var7 = var18[var6];
                        var10 = var17.bind(var5)(var7);
                        var7 = var10.getAdaptiveImageCompressionQuality;
                        var6 = var18[var6];
                        var6 = var17.bind(var5)(var6);
                        var6 = var6.ADAPTIVE_COMPRESSION_CONFIG;
                        var6 = var7.bind(var10)(var9, var6);
                        var17 = _closure1_slot21;
                        var10 = var17.log;
                        var7 = global;
                        var7 = var7.HermesInternal;
                        var25 = var7.concat;
                        var37 = 'Got image compression quality: ';
                        var35 = ' for ';
                        var33 = ' with dimensions: ';
                        var31 = 'x';
                        var29 = ' and useOriginalIfSmaller: ';
                        var36 = var6;
                        var34 = var13;
                        var32 = var27;
                        var30 = var26;
                        var28 = var2;
                        var7 = var37[var25](var36, var35, var34, var33, var32, var31, var30, var29, var28, var27);
                        var7 = var10.bind(var17)(var7);
                        var24 = var6;
                        var23 = var2;
                    case 321:
                        var6 = var13.startsWith;
                        var2 = 'ph://';
                        var6 = var6.bind(var13)(var2);
                        var10 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var7 = 12;
                        var2 = var2[var7];
                        var10 = var10.bind(var5)(var2);
                        var2 = var10.isIOS;
                        var2 = var2.bind(var10)();
                        if (!var2) {
                            _fun37091_ip = 374;
                            continue _fun37091
                        }
                    case 371:
                        var2 = var6;
                    case 374:
                        var18 = false;
                        if (!var2) {
                            _fun37091_ip = 428;
                            continue _fun37091
                        }
                    case 379:
                        var6 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var2 = 24;
                        var2 = var10[var2];
                        var10 = var6.bind(var5)(var2);
                        var6 = var10.getIosPhotoKitUploadsConfig;
                        var2 = {};
                        var17 = 'upload_utils.process_image_upload';
                        var2.location = var17;
                        var2 = var6.bind(var10)(var2);
                        var18 = var2.useEnhancedConversion;
                    case 428:
                        var20 = false;
                        if (!var8) {
                            _fun37091_ip = 515;
                            continue _fun37091
                        }
                    case 433:
                        var10 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var2 = 25;
                        var2 = var17[var2];
                        var21 = var10.bind(var5)(var2);
                        var6 = var21.useMobileLosslessImageUploadV2Experiment;
                        var2 = {};
                        var22 = 'upload_utils.process_image_upload';
                        var2.location = var22;
                        var6 = var6.bind(var21)(var2);
                        var2 = 26;
                        var2 = var17[var2];
                        var10 = var10.bind(var5)(var2);
                        var2 = var10.isDiscordFrontendDevelopment;
                        var2 = var2.bind(var10)();
                        var10 = !var2;
                        var2 = !var10;
                        if (!var10) {
                            _fun37091_ip = 512;
                            continue _fun37091
                        }
                    case 507:
                        var2 = var6.enabled;
                    case 512:
                        var20 = var2;
                    case 515:
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var7];
                        var6 = var6.bind(var5)(var2);
                        var2 = var6.isIOS;
                        var21 = var2.bind(var6)();
                        var6 = undefined;
                        var2 = undefined;
                        var10 = var24;
                        var7 = var23;
                        var17 = false;
                        if (!var21) {
                            _fun37091_ip = 893;
                            continue _fun37091
                        }
                    case 560:
                        var6 = undefined;
                        var2 = undefined;
                        var10 = var24;
                        var7 = var23;
                        var17 = false;
                        if (!var8) {
                            _fun37091_ip = 893;
                            continue _fun37091
                        }
                    case 578:
                        var21 = _closure1_slot0;
                        var22 = _closure1_slot2;
                        var4 = 26;
                        var4 = var22[var4];
                        var21 = var21.bind(var5)(var4);
                        var4 = var21.isDiscordFrontendDevelopment;
                        var22 = var4.bind(var21)();
                        var4 = true;
                        if (var22) {
                            _fun37091_ip = 662;
                            continue _fun37091
                        }
                    case 613:
                        var25 = _closure1_slot0;
                        var26 = _closure1_slot2;
                        var22 = 27;
                        var22 = var26[var22];
                        var26 = var25.bind(var5)(var22);
                        var25 = var26.getIosJpegliConfig;
                        var22 = {};
                        var27 = 'upload_utils.process_image_upload';
                        var22.location = var27;
                        var22 = var25.bind(var26)(var22);
                        var4 = var22.useJpegliEncoder;
                    case 662:
                        var6 = undefined;
                        var2 = undefined;
                        var10 = var24;
                        var7 = var23;
                        var17 = var4;
                        if (var19) {
                            _fun37091_ip = 893;
                            continue _fun37091
                        }
                    case 681:
                        var22 = var9.width;
                        var25 = null;
                        var22 = var25 != var22;
                        var6 = undefined;
                        var2 = undefined;
                        var10 = var24;
                        var7 = var23;
                        var17 = var4;
                        if (!var22) {
                            _fun37091_ip = 893;
                            continue _fun37091
                        }
                    case 711:
                        var22 = var9.height;
                        var22 = var25 != var22;
                        var6 = undefined;
                        var2 = undefined;
                        var10 = var24;
                        var7 = var23;
                        var17 = var4;
                        if (!var22) {
                            _fun37091_ip = 893;
                            continue _fun37091
                        }
                    case 739:
                        var25 = _closure1_slot0;
                        var26 = _closure1_slot2;
                        var22 = 28;
                        var22 = var26[var22];
                        var26 = var25.bind(var5)(var22);
                        var25 = var26.getMobileImageEncodingLadderConfig;
                        var22 = {};
                        var27 = 'upload_utils.process_image_upload';
                        var22.location = var27;
                        var22 = var25.bind(var26)(var22);
                        var22 = var22.useImageEncodingLadder;
                        var6 = undefined;
                        var2 = undefined;
                        var10 = var24;
                        var7 = var23;
                        var17 = var4;
                        if (!var22) {
                            _fun37091_ip = 893;
                            continue _fun37091
                        }
                    case 804:
                        var23 = _closure1_slot0;
                        var24 = _closure1_slot2;
                        var22 = 23;
                        var22 = var24[var22];
                        var22 = var23.bind(var5)(var22);
                        var24 = var22.ImageEncodingLadder;
                        var23 = var24.selectEncodingConfig;
                        var22 = {};
                        var25 = var9.width;
                        var22.width = var25;
                        var25 = var9.height;
                        var22.height = var25;
                        var23 = var23.bind(var24)(var22);
                        var24 = var23.compressionQuality;
                        var22 = 100;
                        var10 = var24 / var22;
                        var6 = var23.targetWidth;
                        var2 = var23.targetHeight;
                        var7 = true;
                        var17 = var4;
                    case 893:
                        var4 = {};
                        var4.uri = var13;
                        var4.filename = var14;
                        var4.isLowQuality = var19;
                        var4.compressionQuality = var10;
                        var4.mobileLosslessImageEnabled = var20;
                        var4.useEnhancedConversion = var18;
                        var4.useJpegliEncoder = var17;
                        var4.targetWidth = var6;
                        var4.targetHeight = var2;
                        var2 = function arg0() {
                            var0 = undefined;
                            var3 = _closure1_slot45;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var2 = var2.bind(var5)(var4);
                        SaveGenerator(address = 955);
                    case 953:
                        return var2;
                    case 955:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun37091_ip = 1252;
                            continue _fun37091
                        }
                    case 964:
                        var4 = null;
                        if (!(var4 == var2)) {
                            _fun37091_ip = 1065;
                            continue _fun37091
                        }
                    case 970:
                        var6 = _closure1_slot37;
                        var6 = var6.bind(var5)(var13);
                        if (var6) {
                            _fun37091_ip = 1003;
                            continue _fun37091
                        }
                    case 982:
                        var6 = global;
                        var17 = var6.Promise;
                        var6 = var17.resolve;
                        var6 = var6.bind(var17)(var13);
                        _fun37091_ip = 1044;
                        continue _fun37091;
                    case 1003:
                        var18 = _closure1_slot28;
                        var17 = {};
                        var17.compressionQuality = var10;
                        var17.isLowQuality = var19;
                        var19 = true;
                        var17.skipVideoTranscode = var19;
                        var17.useOriginalIfSmaller = var7;
                        var7 = 'resolveToMediaFilePath';
                        var6 = var18.bind(var5)(var7, var13, var17);
                    case 1044:
                        SaveGenerator(address = 1048);
                    case 1046:
                        return var6;
                    case 1048:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 7);
                        var18 = var7;
                        var17 = var6;
                        var7 = undefined;
                        if (!var18) {
                            _fun37091_ip = 1077;
                            continue _fun37091
                        }
                    case 1062:
                        return var6;
                    case 1065:
                        var17 = var2.path;
                        var7 = var2.encoderUsed;
                    case 1077:
                        if (!(var4 != var17)) {
                            _fun37091_ip = 1216;
                            continue _fun37091
                        }
                    case 1084:
                        var6 = _closure1_slot0;
                        var18 = _closure1_slot2;
                        var4 = 29;
                        var4 = var18[var4];
                        var18 = var6.bind(var5)(var4);
                        var6 = var18.useAttachmentQualityMetricsExperiment;
                        var4 = {};
                        var19 = 'upload_utils.process_image_upload';
                        var4.location = var19;
                        var6 = var6.bind(var18)(var4);
                        var4 = _closure1_slot41;
                        var3 = {};
                        var3.path = var17;
                        var3.i = var16;
                        var3.mimeType = var15;
                        var3.filename = var14;
                        var3.originalUri = var13;
                        var3.spoiler = var12;
                        var3.description = var11;
                        var3.compressionQuality = var10;
                        var3.sourceImageDimensions = var9;
                        var3.isImage = var8;
                        var3.imageEncoderType = var7;
                        var7 = var6.enableQualityMetrics;
                        var3.attachmentQualityMetricsEnabled = var7;
                        var6 = var6.enableOriginDetection;
                        var3.attachmentOriginDetectionEnabled = var6;
                        var3 = var4.bind(var5)(var3);
                        return var3;
                    case 1216:
                        var3 = global;
                        var5 = var3.Error;
                        var3 = var5.prototype;
                        var4 = Object.create(var3, {
                            constructor: {
                                value: var5
                            }
                        });
                        var36 = 'Failed to get image file path';
                        var37 = var4;
                        var3 = new var37[var5](var36, var35);
                        var3 = var3 instanceof Object ? var3 : var4;
                        throw var3;
                    case 1252:
                        return var2;
                    case 1255:
                        return var1;
                    case 1258:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot44 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot44 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun37095: for (var _fun37095_ip = 0;;) switch (_fun37095_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun37095_ip = 909;
                            continue _fun37095
                        }
                    case 13:
                        var3 = var1.uri;
                        var9 = var1.filename;
                        var15 = var1.isLowQuality;
                        var2 = var1.compressionQuality;
                        var4 = var1.mobileLosslessImageEnabled;
                        var13 = var1.useEnhancedConversion;
                        var12 = var1.useJpegliEncoder;
                        var11 = var1.targetWidth;
                        var6 = var1.targetHeight;
                        var7 = undefined;
                        SaveGenerator(address = 72);
                    case 70:
                        return var7;
                    case 72:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun37095_ip = 906;
                            continue _fun37095
                        }
                    case 81:
                        var17 = var3;
                        var10 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var14 = 12;
                        var8 = var8[var14];
                        var10 = var10.bind(var7)(var8);
                        var8 = var10.isIOS;
                        var8 = var8.bind(var10)();
                        if (!var8) {
                            _fun37095_ip = 141;
                            continue _fun37095
                        }
                    case 120:
                        var16 = var17.match;
                        var10 = _closure1_slot22;
                        var16 = var16.bind(var17)(var10);
                        var10 = null;
                        var8 = var10 != var16;
                    case 141:
                        if (var8) {
                            _fun37095_ip = 792;
                            continue _fun37095
                        }
                    case 147:
                        var17 = var3;
                        var10 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var8 = var8[var14];
                        var10 = var10.bind(var7)(var8);
                        var8 = var10.isIOS;
                        var8 = var8.bind(var10)();
                        if (!var8) {
                            _fun37095_ip = 201;
                            continue _fun37095
                        }
                    case 180:
                        var16 = var17.match;
                        var10 = _closure1_slot23;
                        var16 = var16.bind(var17)(var10);
                        var10 = null;
                        var8 = var10 != var16;
                    case 201:
                        if (var8) {
                            _fun37095_ip = 723;
                            continue _fun37095
                        }
                    case 207:
                        if (!var4) {
                            _fun37095_ip = 374;
                            continue _fun37095
                        }
                    case 213:
                        var8 = var3;
                        var4 = function() {
                            var0 = undefined;
                            var3 = _closure1_slot36;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var4 = var4.bind(var7)(var8, var9);
                        SaveGenerator(address = 233);
                    case 231:
                        return var4;
                    case 233:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 8);
                        if (var8) {
                            _fun37095_ip = 720;
                            continue _fun37095
                        }
                    case 242:
                        if (!var4) {
                            _fun37095_ip = 374;
                            continue _fun37095
                        }
                    case 248: // try_start_0
                        var10 = {};
                        var8 = _closure1_slot6;
                        var17 = var8.MediaManager;
                        var16 = var17.getLosslessImageData;
                        var8 = var3;
                        var8 = var16.bind(var17)(var8);
                        SaveGenerator(address = 280);
                    case 278:
                        return var8;
                    case 280:
                        ResumeGenerator(result_out_reg = 8, return_bool_out_reg = 16);
                        if (var16) {
                            _fun37095_ip = 331;
                            continue _fun37095
                        }
                    case 286:
                        var10.path = var8;
                        var17 = _closure1_slot0;
                        var18 = _closure1_slot2;
                        var16 = 30;
                        var16 = var18[var16];
                        var16 = var17.bind(var7)(var16);
                        var16 = var16.ImageEncoder;
                        var16 = var16.PASSTHROUGH;
                        var10.encoderUsed = var16;
                    case 328: // try_end0
                        return var10;
                    case 331:
                        return var8;
                    case 334: // catch_target0
                        CatchBlockStart(arg_register = 18);
                        var16 = _closure1_slot21;
                        var10 = var16.error;
                        var8 = global;
                        var8 = var8.HermesInternal;
                        var17 = var8.concat;
                        var8 = 'getLosslessImageData failed, falling through to JPEG conversion: ';
                        var8 = var17.bind(var8)(var18);
                        var8 = var10.bind(var16)(var8);
                    case 374:
                        var10 = _closure1_slot35;
                        var8 = var3;
                        var8 = var10.bind(var7)(var8, var9, var15);
                        if (var8) {
                            _fun37095_ip = 578;
                            continue _fun37095
                        }
                    case 394:
                        var16 = var3;
                        var10 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var8 = var8[var14];
                        var10 = var10.bind(var7)(var8);
                        var8 = var10.isIOS;
                        var8 = var8.bind(var10)();
                        var10 = !var8;
                        var8 = !var10;
                        if (var10) {
                            _fun37095_ip = 520;
                            continue _fun37095
                        }
                    case 433:
                        var10 = _closure1_slot33;
                        var10 = var10.bind(var7)(var16, var9);
                        var15 = null;
                        if (var10) {
                            _fun37095_ip = 479;
                            continue _fun37095
                        }
                    case 448:
                        var14 = var16.match;
                        var10 = /^assets-library:\\/\\ / . + & ext = gif$ / i;
                        var10 = var14.bind(var16)(var10);
                        var10 = var15 != var10;
                        _fun37095_ip = 517;
                        continue _fun37095;
                    case 479:
                        var16 = var15 == var9;
                        var14 = undefined;
                        if (var16) {
                            _fun37095_ip = 513;
                            continue _fun37095
                        }
                    case 488:
                        var17 = var9.match;
                        var16 = /\.gif$/i;
                        var14 = var17.bind(var9)(var16);
                    case 513:
                        var10 = var15 != var14;
                    case 517:
                        var8 = var10;
                    case 520:
                        if (var8) {
                            _fun37095_ip = 528;
                            continue _fun37095
                        }
                    case 523:
                        var8 = null;
                        return var8;
                    case 528:
                        var14 = _closure1_slot28;
                        var10 = var3;
                        var8 = 'convertToGIFFilePath';
                        var8 = var14.bind(var7)(var8, var10);
                        SaveGenerator(address = 551);
                    case 549:
                        return var8;
                    case 551:
                        ResumeGenerator(result_out_reg = 8, return_bool_out_reg = 10);
                        if (var10) {
                            _fun37095_ip = 575;
                            continue _fun37095
                        }
                    case 557:
                        var10 = null;
                        if (!var8) {
                            _fun37095_ip = 572;
                            continue _fun37095
                        }
                    case 562:
                        var14 = {};
                        var14.path = var8;
                        var10 = var14;
                    case 572:
                        return var10;
                    case 575:
                        return var8;
                    case 578:
                        var8 = _closure1_slot34;
                        var10 = var3;
                        var14 = var8.bind(var7)(var10, var9);
                        var9 = _closure1_slot28;
                        var8 = {};
                        var8.compressionQuality = var2;
                        var8.forceConvertToJPG = var14;
                        var8.useEnhancedConversion = var13;
                        var8.useJpegliEncoder = var12;
                        var8.targetWidth = var11;
                        var8.targetHeight = var6;
                        var6 = 'convertToJPEG';
                        var6 = var9.bind(var7)(var6, var10, var8);
                        SaveGenerator(address = 646);
                    case 644:
                        return var6;
                    case 646:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 8);
                        if (var8) {
                            _fun37095_ip = 717;
                            continue _fun37095
                        }
                    case 652:
                        var8 = null;
                        var10 = var8 == var6;
                        var9 = undefined;
                        if (var10) {
                            _fun37095_ip = 669;
                            continue _fun37095
                        }
                    case 663:
                        var9 = var6.path;
                    case 669:
                        var11 = var6;
                        if (!(var8 != var9)) {
                            _fun37095_ip = 679;
                            continue _fun37095
                        }
                    case 676:
                        var11 = var9;
                    case 679:
                        var9 = var8 == var6;
                        var10 = undefined;
                        if (var9) {
                            _fun37095_ip = 694;
                            continue _fun37095
                        }
                    case 688:
                        var10 = var6.encoderUsed;
                    case 694:
                        var8 = null;
                        if (!var11) {
                            _fun37095_ip = 714;
                            continue _fun37095
                        }
                    case 699:
                        var9 = {};
                        var9.path = var11;
                        var9.encoderUsed = var10;
                        var8 = var9;
                    case 714:
                        return var8;
                    case 717:
                        return var6;
                    case 720:
                        return var4;
                    case 723:
                        var8 = _closure1_slot28;
                        var10 = var3;
                        var9 = var10.replace;
                        var6 = _closure1_slot23;
                        var4 = '';
                        var6 = var9.bind(var10)(var6, var4);
                        var4 = 'convertBase64ToGIF';
                        var4 = var8.bind(var7)(var4, var6);
                        SaveGenerator(address = 765);
                    case 763:
                        return var4;
                    case 765:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 6);
                        if (var6) {
                            _fun37095_ip = 789;
                            continue _fun37095
                        }
                    case 771:
                        var6 = null;
                        if (!var4) {
                            _fun37095_ip = 786;
                            continue _fun37095
                        }
                    case 776:
                        var8 = {};
                        var8.path = var4;
                        var6 = var8;
                    case 786:
                        return var6;
                    case 789:
                        return var4;
                    case 792:
                        var6 = _closure1_slot28;
                        var9 = var3;
                        var8 = var9.replace;
                        var4 = _closure1_slot22;
                        var3 = '';
                        var4 = var8.bind(var9)(var4, var3);
                        var3 = {};
                        var3.compressionQuality = var2;
                        var2 = 'convertBase64ToJPEG';
                        var2 = var6.bind(var7)(var2, var4, var3);
                        SaveGenerator(address = 842);
                    case 840:
                        return var2;
                    case 842:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun37095_ip = 903;
                            continue _fun37095
                        }
                    case 848:
                        var3 = null;
                        if (!var2) {
                            _fun37095_ip = 900;
                            continue _fun37095
                        }
                    case 853:
                        var4 = {};
                        var4.path = var2;
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 30;
                        var5 = var8[var5];
                        var5 = var6.bind(var7)(var5);
                        var5 = var5.ImageEncoder;
                        var5 = var5.NATIVE;
                        var4.encoderUsed = var5;
                        var3 = var4;
                    case 900:
                        return var3;
                    case 903:
                        return var2;
                    case 906:
                        return var1;
                    case 909:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot45 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot45 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun37099: for (var _fun37099_ip = 0;;) switch (_fun37099_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun37099_ip = 144;
                            continue _fun37099
                        }
                    case 13:
                        var6 = var8;
                        var1 = undefined;
                        var7 = undefined;
                        var4 = undefined;
                        var5 = _closure1_slot38;
                        var2 = arg1;
                        var2 = var5.bind(var1)(var8, var2);
                        if (!var2) {
                            _fun37099_ip = 141;
                            continue _fun37099
                        }
                    case 41: // try_start_0
                        var8 = _closure1_slot28;
                        var5 = var6;
                        var2 = 'getVideoMetadata';
                        var2 = var8.bind(var1)(var2, var5);
                        SaveGenerator(address = 64);
                    case 62:
                        return var2;
                    case 64:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun37099_ip = 105;
                            continue _fun37099
                        }
                    case 70:
                        var4 = var2;
                        var8 = var2.rotationDegrees;
                        var7 = var8;
                        var5 = null;
                        var8 = var5 != var8;
                        var5 = 0;
                        if (!var8) {
                            _fun37099_ip = 96;
                            continue _fun37099
                        }
                    case 93:
                        var5 = var7;
                    case 96:
                        var2.rotationDegrees = var5;
                    case 102: // try_end0
                        return var4;
                    case 105:
                        return var2;
                    case 108: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var5 = _closure1_slot21;
                        var4 = var5.warn;
                        var3 = {};
                        var3.uri = var6;
                        var3.error = var2;
                        var2 = 'Failed to fetch video metadata';
                        var2 = var4.bind(var5)(var2, var3);
                    case 141:
                        return var1;
                    case 144:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot46 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot46 = var0;
    var6 = function arg0, arg1, arg2() {
        _fun37100: for (var _fun37100_ip = 0;;) switch (_fun37100_ip) {
            case 0:
                var2 = arg2;
                var0 = arg1;
                if (var0) {
                    _fun37100_ip = 30;
                    continue _fun37100
                }
            case 9:
                var3 = 'image/gif';
                var1 = arg0;
                var0 = null;
                if (!(var3 === var1)) {
                    _fun37100_ip = 94;
                    continue _fun37100
                }
            case 24:
                var0 = 'GIF';
                _fun37100_ip = 94;
                continue _fun37100;
            case 30:
                var3 = var2.playableDuration;
                var1 = null;
                var3 = var1 != var3;
                var1 = 'VIDEO';
                if (!var3) {
                    _fun37100_ip = 91;
                    continue _fun37100
                }
            case 49:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 31;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.getTimeFormat;
                var2 = var2.playableDuration;
                var1 = var3.bind(var4)(var2);
            case 91:
                var0 = var1;
            case 94:
                return var0;
        }
    };
    var5 = function arg0, arg1, arg2, arg3() {
        var0 = undefined;
        var3 = _closure1_slot47;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*(arg0, arg1, arg2, arg3) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                _fun37104: for (var _fun37104_ip = 0;;) switch (_fun37104_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg1;
                        var4 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun37104_ip = 351;
                            continue _fun37104
                        }
                    case 16:
                        var2 = arg0;
                        var12 = undefined;
                        var1 = undefined;
                        var9 = undefined;
                        var6 = undefined;
                        var3 = {};
                        var3.width = var5;
                        var3.height = var4;
                        var1 = var3;
                        var3 = null;
                        if (!(var3 != var5)) {
                            _fun37104_ip = 53;
                            continue _fun37104
                        }
                    case 46:
                        if (!(var3 == var4)) {
                            _fun37104_ip = 348;
                            continue _fun37104
                        }
                    case 53:
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 11;
                        var4 = var7[var4];
                        var7 = var5.bind(var12)(var4);
                        var5 = var7.getFile;
                        var4 = {};
                        var8 = var2;
                        var4.uri = var8;
                        var8 = arg3;
                        var4.overrideFilename = var8;
                        var4 = var5.bind(var7)(var4);
                        var9 = var4;
                        var4 = var4.isImage;
                        if (var4) {
                            _fun37104_ip = 134;
                            continue _fun37104
                        }
                    case 116:
                        var4 = var9;
                        var4 = var4.isVideo;
                        if (var4) {
                            _fun37104_ip = 134;
                            continue _fun37104
                        }
                    case 128:
                        var4 = var1;
                        return var4;
                    case 134: // try_start_0
                        var5 = var2;
                        var4 = function arg0() {
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
                                var1 = arg0;
                                var _closure6_slot0 = var1;
                                var4 = _closure1_slot7;
                                var3 = var4.getSize;
                                var2 = _closure5_slot0;
                                var1 = function(arg0, arg1) { // Environment: var0
                                    var2 = _closure6_slot0;
                                    var1 = {};
                                    var0 = arg0;
                                    var1.width = var0;
                                    var0 = arg1;
                                    var1.height = var0;
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var0 = arg1;
                                var0 = var3.bind(var4)(var2, var1, var0);
                                return var0;
                            };
                            var4 = var1;
                            var0 = new var4[var2](var3, var2);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var4 = var4.bind(var12)(var5);
                        SaveGenerator(address = 153);
                    case 151:
                        return var4;
                    case 153:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                        if (var5) {
                            _fun37104_ip = 295;
                            continue _fun37104
                        }
                    case 162:
                        var6 = var4;
                        var11 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var10 = 12;
                        var10 = var13[var10];
                        var11 = var11.bind(var12)(var10);
                        var10 = var11.isIOS;
                        var10 = var10.bind(var11)();
                        var8 = var10;
                        if (!var10) {
                            _fun37104_ip = 207;
                            continue _fun37104
                        }
                    case 201:
                        var8 = var9.isVideo;
                    case 207:
                        var7 = var8;
                        if (!var8) {
                            _fun37104_ip = 227;
                            continue _fun37104
                        }
                    case 213:
                        var8 = var6;
                        var9 = var8.width;
                        var8 = 0;
                        var7 = var8 === var9;
                    case 227:
                        var5 = var7;
                        if (!var7) {
                            _fun37104_ip = 247;
                            continue _fun37104
                        }
                    case 233:
                        var7 = var6;
                        var8 = var7.height;
                        var7 = 0;
                        var5 = var7 === var8;
                    case 247:
                        if (!var5) {
                            _fun37104_ip = 289;
                            continue _fun37104
                        }
                    case 250:
                        var5 = _closure1_slot6;
                        var8 = var5.DCDFileManager;
                        var7 = var8.getVideoDimensions;
                        var5 = var2;
                        var5 = var7.bind(var8)(var5);
                        SaveGenerator(address = 280);
                    case 278:
                        return var5;
                    case 280:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 7);
                        if (var7) {
                            _fun37104_ip = 292;
                            continue _fun37104
                        }
                    case 286:
                        var6 = var5;
                    case 289: // try_end0
                        return var6;
                    case 292:
                        return var5;
                    case 295:
                        return var4;
                    case 298: // catch_target0
                        CatchBlockStart(arg_register = 5);
                        var4 = _closure1_slot21;
                        var3 = var4.warn;
                        var7 = var2;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var6 = var2.concat;
                        var2 = 'Unable to get width and height of media file: ';
                        var2 = var6.bind(var2)(var7);
                        var2 = var3.bind(var4)(var2, var5);
                        var2 = var1;
                        return var2;
                    case 348:
                        return var1;
                    case 351:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot47 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot47 = var0;
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot48;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun37111: for (var _fun37111_ip = 0;;) switch (_fun37111_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun37111_ip = 77;
                            continue _fun37111
                        }
                    case 7: // try_start_0
                        var1 = _closure1_slot6;
                        var2 = var1.MediaManager;
                        var1 = var2.isHEVCEncodingSupported;
                        var1 = var1.bind(var2)();
                        SaveGenerator(address = 34);
                    case 32:
                        return var1;
                    case 34:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun37111_ip = 43;
                            continue _fun37111
                        }
                    case 40: // try_end0
                        return var1;
                    case 43:
                        return var1;
                    case 46: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot21;
                        var2 = var3.warn;
                        var1 = 'Error checking HEVC support:';
                        var1 = var2.bind(var3)(var1, var4);
                        var1 = false;
                        return var1;
                    case 77:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot48 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot48 = var0;
    var3 = function arg0() {
        var0 = undefined;
        var3 = _closure1_slot50;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot49 = var3;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun37115: for (var _fun37115_ip = 0;;) switch (_fun37115_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun37115_ip = 139;
                            continue _fun37115
                        }
                    case 10:
                        var4 = arg0;
                    case 13: // try_start_0
                        var1 = _closure1_slot6;
                        var3 = var1.MediaManager;
                        var2 = var3.isVideoEncodingSupported;
                        var1 = {};
                        var5 = var4.targetWidth;
                        var1.width = var5;
                        var5 = var4.targetHeight;
                        var1.height = var5;
                        var5 = var4.frameRate;
                        var1.frameRate = var5;
                        var4 = var4.useHEVC;
                        var1.isHEVC = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 89);
                    case 87:
                        return var1;
                    case 89:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun37115_ip = 98;
                            continue _fun37115
                        }
                    case 95: // try_end0
                        return var1;
                    case 98:
                        return var1;
                    case 101: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot21;
                        var2 = var3.warn;
                        var1 = 'Error checking video encoding support:';
                        var1 = var2.bind(var3)(var1, var4);
                        var1 = {};
                        var2 = true;
                        var1.isSupported = var2;
                        return var1;
                    case 139:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot50 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot50 = var0;
    var1 = function arg0, arg1, arg2, arg3, arg4() {
        var0 = undefined;
        var3 = _closure1_slot52;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot51 = var1;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*(arg0, arg1, arg2, arg3, arg4) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3, arg4) { // Original name: ?anon_0_, environment: var0
                _fun37119: for (var _fun37119_ip = 0;;) switch (_fun37119_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun37119_ip = 509;
                            continue _fun37119
                        }
                    case 10:
                        var4 = arg0;
                        var7 = arg1;
                        var9 = undefined;
                        var5 = undefined;
                        var2 = undefined;
                        var1 = {};
                        var3 = arg4;
                        if (!var3) {
                            _fun37119_ip = 136;
                            continue _fun37119
                        }
                    case 30: // try_start_0
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var3 = 2;
                        var3 = var8[var3];
                        var3 = var6.bind(var9)(var3);
                        var3 = var3.NativeModules;
                        var8 = var3.MediaManager;
                        var6 = var8.getMediaOrigin;
                        var3 = var4;
                        var3 = var6.bind(var8)(var3);
                        SaveGenerator(address = 85);
                    case 83:
                        return var3;
                    case 85:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                        if (var6) {
                            _fun37119_ip = 107;
                            continue _fun37119
                        }
                    case 91:
                        var8 = var1;
                        var6 = var3.source;
                        var8.origin = var6;
                    case 105: // try_end0
                        _fun37119_ip = 136;
                        continue _fun37119;
                    case 107:
                        return var3;
                    case 110: // catch_target0
                        CatchBlockStart(arg_register = 10);
                        var8 = _closure1_slot21;
                        var6 = var8.warn;
                        var3 = 'Failed to detect media origin';
                        var3 = var6.bind(var8)(var3, var10);
                    case 136:
                        var3 = arg3;
                        if (!var3) {
                            _fun37119_ip = 506;
                            continue _fun37119
                        }
                    case 145: // try_start_1
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var6 = 2;
                        var6 = var10[var6];
                        var6 = var8.bind(var9)(var6);
                        var6 = var6.NativeModules;
                        var5 = var6.MediaManager;
                        var9 = var7;
                        var2 = var9;
                        var8 = var9.includes;
                        var6 = '://';
                        var6 = var8.bind(var9)(var6);
                        if (var6) {
                            _fun37119_ip = 337;
                            continue _fun37119
                        }
                    case 208:
                        var9 = var7;
                        var8 = var9.includes;
                        var6 = '/';
                        var6 = var8.bind(var9)(var6);
                        if (var6) {
                            _fun37119_ip = 307;
                            continue _fun37119
                        }
                    case 228:
                        var9 = var7;
                        var8 = var9.includes;
                        var6 = '\\';
                        var6 = var8.bind(var9)(var6);
                        if (var6) {
                            _fun37119_ip = 307;
                            continue _fun37119
                        }
                    case 248:
                        var8 = var4;
                        var6 = var8.startsWith;
                        var10 = 'ph://';
                        var6 = var6.bind(var8)(var10);
                        var9 = var7;
                        var8 = global;
                        var8 = var8.HermesInternal;
                        var8 = var8.concat;
                        if (var6) {
                            _fun37119_ip = 300;
                            continue _fun37119
                        }
                    case 287:
                        var6 = 'file://';
                        var6 = var8.bind(var6)(var9);
                        _fun37119_ip = 305;
                        continue _fun37119;
                    case 300:
                        var6 = var8.bind(var10)(var9);
                    case 305:
                        _fun37119_ip = 334;
                        continue _fun37119;
                    case 307:
                        var9 = var7;
                        var7 = global;
                        var7 = var7.HermesInternal;
                        var8 = var7.concat;
                        var7 = 'file://';
                        var6 = var8.bind(var7)(var9);
                    case 334:
                        var2 = var6;
                    case 337:
                        var6 = var5;
                        var5 = var6.calculateImageQualityMetrics;
                        var2 = var5.bind(var6)(var4, var2);
                        SaveGenerator(address = 356);
                    case 354:
                        return var2;
                    case 356:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun37119_ip = 477;
                            continue _fun37119
                        }
                    case 362:
                        var5 = var1;
                        var4 = var2.psnr;
                        var5.psnr = var4;
                        var4 = var2.ssim;
                        var5.ssim = var4;
                        var4 = var2.psnrCalculationTimeMs;
                        var5.psnrMeasurementLatencyMs = var4;
                        var4 = var2.ssimCalculationTimeMs;
                        var5.ssimMeasurementLatencyMs = var4;
                        var5 = _closure1_slot21;
                        var4 = var5.log;
                        var9 = var2.psnr;
                        var8 = var2.ssim;
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var7 = var3.concat;
                        var6 = 'Quality metrics calculated: PSNR=';
                        var3 = 'dB, SSIM=';
                        var3 = var7.bind(var6)(var9, var3, var8);
                        var3 = var4.bind(var5)(var3);
                    case 475: // try_end1
                        _fun37119_ip = 506;
                        continue _fun37119;
                    case 477:
                        return var2;
                    case 480: // catch_target1
                        CatchBlockStart(arg_register = 5);
                        var4 = _closure1_slot21;
                        var3 = var4.warn;
                        var2 = 'Error in quality metrics calculation';
                        var2 = var3.bind(var4)(var2, var5);
                    case 506:
                        return var1;
                    case 509:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot52 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot52 = var0;
    var0 = ['filename'];
    var _closure1_slot3 = var0;
    var27 = global;
    var23 = var27.Object;
    var22 = var23.defineProperty;
    var21 = {};
    var0 = true;
    var21.value = var0;
    var0 = '__esModule';
    var0 = var22.bind(var23)(var2, var0, var21);
    var0 = 0;
    var21 = var26[var0];
    var0 = undefined;
    var21 = var28.bind(var0)(var21);
    var _closure1_slot4 = var21;
    var21 = 1;
    var21 = var26[var21];
    var21 = var28.bind(var0)(var21);
    var _closure1_slot5 = var21;
    var21 = 2;
    var21 = var26[var21];
    var21 = var25.bind(var0)(var21);
    var22 = var21.NativeModules;
    var _closure1_slot6 = var22;
    var22 = var21.Image;
    var _closure1_slot7 = var22;
    var21 = var21.Platform;
    var _closure1_slot8 = var21;
    var21 = 3;
    var22 = var26[var21];
    var22 = var25.bind(var0)(var22);
    var23 = var22.VideoCompressionQuality;
    var _closure1_slot9 = var23;
    var22 = var22.VideoQualitySettings;
    var _closure1_slot10 = var22;
    var21 = var26[var21];
    var21 = var28.bind(var0)(var21);
    var _closure1_slot11 = var21;
    var21 = 4;
    var21 = var26[var21];
    var21 = var28.bind(var0)(var21);
    var _closure1_slot12 = var21;
    var21 = 5;
    var21 = var26[var21];
    var21 = var28.bind(var0)(var21);
    var _closure1_slot13 = var21;
    var21 = 6;
    var21 = var26[var21];
    var21 = var25.bind(var0)(var21);
    var22 = var21.Base64PNGPrefix;
    var _closure1_slot14 = var22;
    var23 = var21.Base64GIFPrefix;
    var _closure1_slot15 = var23;
    var22 = var21.Base64JPEGPrefix;
    var29 = var21.NetworkConnectionTypes;
    var _closure1_slot16 = var29;
    var29 = var21.CompressionQuality;
    var _closure1_slot17 = var29;
    var29 = var21.Base64WEBPPrefix;
    var _closure1_slot18 = var29;
    var21 = var21.Base64AVIFPrefix;
    var _closure1_slot19 = var21;
    var21 = 7;
    var21 = var26[var21];
    var21 = var25.bind(var0)(var21);
    var21 = var21.NativePermissionTypes;
    var _closure1_slot20 = var21;
    var21 = 8;
    var21 = var26[var21];
    var29 = var28.bind(var0)(var21);
    var21 = var29.prototype;
    var28 = Object.create(var21, {
        constructor: {
            value: var29
        }
    });
    var33 = 'UploadUtils.tsx';
    var34 = var28;
    var21 = new var34[var29](var33, var32);
    var21 = var21 instanceof Object ? var21 : var28;
    var _closure1_slot21 = var21;
    var30 = var27.RegExp;
    var21 = '^';
    var33 = var21 + var22;
    var28 = var30.prototype;
    var29 = Object.create(var28, {
        constructor: {
            value: var30
        }
    });
    var28 = 'i';
    var34 = var29;
    var32 = var28;
    var22 = new var34[var30](var33, var32, var31);
    var22 = var22 instanceof Object ? var22 : var29;
    var _closure1_slot22 = var22;
    var27 = var27.RegExp;
    var33 = var21 + var23;
    var23 = var27.prototype;
    var23 = Object.create(var23, {
        constructor: {
            value: var27
        }
    });
    var34 = var23;
    var21 = new var34[var27](var33, var32, var31);
    var21 = var21 instanceof Object ? var21 : var23;
    var _closure1_slot23 = var21;
    var23 = 'Canceled';
    var _closure1_slot24 = var23;
    var23 = {};
    var23.getFileInfo = var13;
    var23.isVideo = var9;
    var23.getType = var7;
    var23.openImagePickerUnhandled = var24;
    var23.openImagePicker = var20;
    var23.getCaptionLabel = var6;
    var23.getImageDimensionsIfMissing = var5;
    var23.isHEVCEncodingSupported = var4;
    var23.getAppDir = var14;
    var24 = 32;
    var24 = var26[var24];
    var26 = var25.bind(var0)(var24);
    var25 = var26.fileFinishedImporting;
    var24 = 'utils/native/UploadUtils.tsx';
    var24 = var25.bind(var26)(var24);
    var2.default = var23;
    var2.base64JPEGRegex = var22;
    var2.base64GIFRegex = var21;
    var2.openImagePicker = var20;
    var2.mediaManager = var19;
    var19 = function() {
        _fun37120: for (var _fun37120_ip = 0;;) switch (_fun37120_ip) {
            case 0:
                var0 = _closure1_slot11;
                var0 = var0.dataSavingMode;
                if (!var0) {
                    _fun37120_ip = 44;
                    continue _fun37120
                }
            case 16:
                var2 = _closure1_slot12;
                var0 = var2.getType;
                var2 = var0.bind(var2)();
                var0 = _closure1_slot16;
                var0 = var0.CELLULAR;
                if (!(var2 !== var0)) {
                    _fun37120_ip = 56;
                    continue _fun37120
                }
            case 44:
                var0 = _closure1_slot17;
                var0 = var0.HIGH;
                _fun37120_ip = 66;
                continue _fun37120;
            case 56:
                var1 = _closure1_slot17;
                var0 = var1.LOW;
            case 66:
                return var0;
        }
    };
    var2.getImageCompressionQuality = var19;
    var2.getVideoQuality = var18;
    var2.resolveModeToVideoQualityForUserWithFeature = var17;
    var2.resolveModeToVideoQualityForFreeUser = var16;
    var16 = function arg0() {
        var1 = arg0;
        var1 = var1.item;
        var _closure2_slot0 = var1;
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0, arg1) { // Environment: var0
            _fun37122: for (var _fun37122_ip = 0;;) switch (_fun37122_ip) {
                case 0:
                    var4 = arg0;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var1);
                    var1 = var3.isAndroid;
                    var1 = var1.bind(var3)();
                    if (!var1) {
                        _fun37122_ip = 90;
                        continue _fun37122
                    }
                case 41:
                    var3 = _closure2_slot0;
                    var5 = var3.platform;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 16;
                    var3 = var7[var3];
                    var3 = var6.bind(var0)(var3);
                    var3 = var3.UploadPlatform;
                    var3 = var3.REACT_NATIVE;
                    if (!(var5 !== var3)) {
                        _fun37122_ip = 96;
                        continue _fun37122
                    }
                case 90:
                    var3 = var4.bind(var0)();
                    _fun37122_ip = 135;
                    continue _fun37122;
                case 96:
                    var3 = _closure1_slot28;
                    var1 = _closure2_slot0;
                    var2 = var1.uri;
                    var1 = 'cancelResolveToMediaFilePath';
                    var3 = var3.bind(var0)(var1, var2);
                    var2 = var3.then;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var4, var1);
                case 135:
                    return var0;
            }
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var2.cancelGetFileInfo = var16;
    var16 = function arg0() {
        _fun37123: for (var _fun37123_ip = 0;;) switch (_fun37123_ip) {
            case 0:
                var7 = arg0;
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 12;
                var0 = var0[var5];
                var4 = undefined;
                var2 = var2.bind(var4)(var0);
                var0 = var2.isIOS;
                var0 = var0.bind(var2)();
                var3 = var7;
                if (!var0) {
                    _fun37123_ip = 73;
                    continue _fun37123
                }
            case 44:
                var6 = var7.replace;
                var2 = /file:\\/\\ //;
                var0 = '';
                var3 = var6.bind(var7)(var2, var0);
            case 73:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var5];
                var2 = var2.bind(var4)(var0);
                var0 = var2.isAndroid;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun37123_ip = 126;
                    continue _fun37123
                }
            case 103:
                var0 = _closure1_slot6;
                var2 = var0.DCDFileManager;
                var0 = var2.getSize;
                var0 = var0.bind(var2)(var3);
                _fun37123_ip = 210;
                continue _fun37123;
            case 126:
                var6 = _closure1_slot1;
                var2 = _closure1_slot2;
                var5 = 17;
                var2 = var2[var5];
                var6 = var6.bind(var4)(var2);
                var2 = null;
                if (!(var2 != var6)) {
                    _fun37123_ip = 182;
                    continue _fun37123
                }
            case 152:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var2 = var2.bind(var4)(var1);
                var1 = var2.getSize;
                var1 = var1.bind(var2)(var3);
                _fun37123_ip = 207;
                continue _fun37123;
            case 182:
                var2 = global;
                var4 = var2.Promise;
                var3 = var4.reject;
                var2 = "RTNFileManager doesn't exist?";
                var1 = var3.bind(var4)(var2);
            case 207:
                var0 = var1;
            case 210:
                return var0;
        }
    };
    var2.getFileSize = var16;
    var15 = function arg0() {
        _fun37124: for (var _fun37124_ip = 0;;) switch (_fun37124_ip) {
            case 0:
                var5 = arg0;
                var4 = arguments[1];
                var3 = arguments[2];
                var6 = undefined;
                if (!(var4 === var6)) {
                    _fun37124_ip = 21;
                    continue _fun37124
                }
            case 15:
                var4 = 'md5';
            case 21:
                if (!(var3 === var6)) {
                    _fun37124_ip = 31;
                    continue _fun37124
                }
            case 25:
                var3 = 4096;
            case 31:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 12;
                var0 = var7[var0];
                var2 = var2.bind(var6)(var0);
                var0 = var2.isAndroid;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun37124_ip = 92;
                    continue _fun37124
                }
            case 67:
                var0 = _closure1_slot6;
                var2 = var0.DCDFileManager;
                var0 = var2.getFileHash;
                var0 = var0.bind(var2)(var5, var4, var3);
                _fun37124_ip = 178;
                continue _fun37124;
            case 92:
                var8 = _closure1_slot1;
                var2 = _closure1_slot2;
                var7 = 17;
                var2 = var2[var7];
                var8 = var8.bind(var6)(var2);
                var2 = null;
                if (!(var2 != var8)) {
                    _fun37124_ip = 150;
                    continue _fun37124
                }
            case 118:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var2 = var2.bind(var6)(var1);
                var1 = var2.getFileHash;
                var1 = var1.bind(var2)(var5, var4, var3);
                _fun37124_ip = 175;
                continue _fun37124;
            case 150:
                var2 = global;
                var4 = var2.Promise;
                var3 = var4.reject;
                var2 = "RTNFileManager doesn't exist?";
                var1 = var3.bind(var4)(var2);
            case 175:
                var0 = var1;
            case 178:
                return var0;
        }
    };
    var2.getFileHash = var15;
    var2.getAppDir = var14;
    var2.getFileInfo = var13;
    var2.shouldForceConvertToJPG = var12;
    var2.shouldConvertToJPG = var11;
    var2.shouldResolveToMediaFilePath = var10;
    var2.isVideo = var9;
    var2.isImage = var8;
    var2.getType = var7;
    var2.getCaptionLabel = var6;
    var2.getImageDimensionsIfMissing = var5;
    var2.isHEVCEncodingSupported = var4;
    var2.checkVideoEncodingSupport = var3;
    var2.calculateImageQualityMetrics = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 5, 27, 3188, 3617, 1613, 660, 4005, 3, 4006, 4096, 3998, 478, 3138, 1234, 3100, 3997, 1269, 4102, 4103, 4104, 4000, 4105, 4106, 4107, 4108, 1304, 4109, 4110, 4111, 3970, 4113, 2]);