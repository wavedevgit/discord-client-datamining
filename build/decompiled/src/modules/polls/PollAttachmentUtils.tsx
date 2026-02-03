// modules/polls/PollAttachmentUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot0;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun108397: for (var _fun108397_ip = 0;;) switch (_fun108397_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun108397_ip = 78;
                            continue _fun108397
                        }
                    case 7:
                        var1 = global;
                        var2 = var1.fetch;
                        var4 = undefined;
                        var1 = arg0;
                        var1 = var2.bind(var4)(var1);
                        SaveGenerator(address = 29);
                    case 27:
                        return var1;
                    case 29:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun108397_ip = 75;
                            continue _fun108397
                        }
                    case 35:
                        var2 = var1.blob;
                        var2 = var2.bind(var1)();
                        SaveGenerator(address = 49);
                    case 47:
                        return var2;
                    case 49:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun108397_ip = 72;
                            continue _fun108397
                        }
                    case 55:
                        var3 = function arg0() {
                            var1 = arg0;
                            var _closure5_slot0 = var1;
                            var1 = global;
                            var2 = var1.FileReader;
                            var3 = var2.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var5 = var3;
                            var2 = new var5[var2](var4);
                            var2 = var2 instanceof Object ? var2 : var3;
                            var _closure5_slot1 = var2;
                            var2 = var1.Promise;
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var4 = function(arg0, arg1) { // Environment: var0
                                var0 = arg0;
                                var _closure6_slot0 = var0;
                                var2 = _closure5_slot1;
                                var1 = function() { // Environment: var1
                                    var0 = _closure5_slot1;
                                    var2 = var0.result;
                                    var1 = var2.split;
                                    var0 = ',';
                                    var1 = var1.bind(var2)(var0);
                                    var0 = var1.pop;
                                    var2 = var0.bind(var1)();
                                    var1 = _closure6_slot0;
                                    var0 = undefined;
                                    var1 = var1.bind(var0)(var2);
                                    return var0;
                                };
                                var2.onload = var1;
                                var1 = arg1;
                                var2.onerror = var1;
                                var1 = var2.readAsDataURL;
                                var0 = _closure5_slot0;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var5 = var1;
                            var0 = new var5[var2](var4, var3);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var3 = var3.bind(var4)(var2);
                        return var3;
                    case 72:
                        return var2;
                    case 75:
                        return var1;
                    case 78:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot2 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot2 = var0;
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
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.POLL_ATTACHMENT_FOLDER;
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/polls/PollAttachmentUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        _fun108401: for (var _fun108401_ip = 0;;) switch (_fun108401_ip) {
            case 0:
                var0 = global;
                var3 = var0.decodeURIComponent;
                var2 = undefined;
                var1 = arg1;
                var3 = var3.bind(var2)(var1);
                var2 = var3.split;
                var1 = '/';
                var2 = var2.bind(var3)(var1);
                var1 = var2.pop;
                var1 = var1.bind(var2)();
                var2 = null;
                var2 = var2 != var1;
                var4 = 'temp.gif';
                if (!var2) {
                    _fun108401_ip = 60;
                    continue _fun108401
                }
            case 57:
                var4 = var1;
            case 60:
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var2 = '';
                var1 = arg0;
                var0 = '-';
                var0 = var3.bind(var2)(var1, var0, var4);
                return var0;
        }
    };
    var2.getFileNameFromGifUrl = var3;
    var3 = function arg0() {
        var1 = _closure1_slot1;
        var0 = '/';
        var1 = var1 + var0;
        var0 = arg0;
        var0 = var1 + var0;
        return var0;
    };
    var2.getFilePathForGif = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.downloadPollGif = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6608, 2]);