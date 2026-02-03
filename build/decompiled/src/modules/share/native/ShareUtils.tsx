// modules/share/native/ShareUtils.tsx
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
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun96447: for (var _fun96447_ip = 0;;) switch (_fun96447_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun96447_ip = 369;
                            continue _fun96447
                        }
                    case 15:
                        var7 = var1.attachments;
                        var4 = var1.channel;
                        var _closure4_slot0 = var4;
                        var9 = var1.comment;
                        var _closure4_slot1 = var9;
                        var5 = undefined;
                        var _closure4_slot2 = var5;
                        var _closure4_slot3 = var5;
                        var _closure4_slot4 = var5;
                        SaveGenerator(address = 58);
                    case 56:
                        return var5;
                    case 58:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun96447_ip = 366;
                            continue _fun96447
                        }
                    case 67:
                        var8 = var4.id;
                        _closure4_slot2 = var8;
                        var6 = var7.map;
                        var3 = function(arg0) { // Environment: var2
                            var0 = arg0;
                            var3 = {};
                            var1 = var0.uri;
                            var3.uri = var1;
                            var1 = var0.uri;
                            var3.originalUri = var1;
                            var1 = var0.mimeType;
                            var3.mimeType = var1;
                            var1 = var0.name;
                            var3.filename = var1;
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 7;
                            var5 = var4[var1];
                            var1 = undefined;
                            var5 = var2.bind(var1)(var5);
                            var5 = var5.UploadPlatform;
                            var5 = var5.REACT_NATIVE;
                            var3.platform = var5;
                            var5 = var0.width;
                            var3.width = var5;
                            var0 = var0.height;
                            var3.height = var0;
                            var0 = 8;
                            var0 = var4[var0];
                            var0 = var2.bind(var1)(var0);
                            var2 = var0.CloudUpload;
                            var0 = _closure4_slot0;
                            var6 = var0.id;
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var8 = var1;
                            var7 = var3;
                            var0 = new var8[var2](var7, var6, var5);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var10 = var6.bind(var7)(var3);
                        _closure4_slot3 = var10;
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 9;
                        var3 = var7[var3];
                        var7 = var6.bind(var5)(var3);
                        var6 = var7.parse;
                        var3 = null;
                        var12 = var3 != var9;
                        var3 = '';
                        if (!var12) {
                            _fun96447_ip = 142;
                            continue _fun96447
                        }
                    case 139:
                        var3 = var9;
                    case 142:
                        var9 = var6.bind(var7)(var4, var3);
                        var6 = var10.length;
                        var3 = 0;
                        if (!(var6 > var3)) {
                            _fun96447_ip = 201;
                            continue _fun96447
                        }
                    case 159:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 5;
                        var3 = var7[var3];
                        var7 = var6.bind(var5)(var3);
                        var6 = var7.clearAll;
                        var3 = _closure1_slot4;
                        var3 = var3.ChannelMessage;
                        var3 = var6.bind(var7)(var8, var3);
                    case 201:
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var3 = 10;
                        var3 = var8[var3];
                        var3 = var6.bind(var5)(var3);
                        var3 = var3.Future;
                        var6 = var3.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var3
                            }
                        });
                        var17 = var6;
                        var3 = new var17[var3](var16);
                        var3 = var3 instanceof Object ? var3 : var6;
                        _closure4_slot4 = var3;
                        var7 = _closure1_slot1;
                        var6 = 11;
                        var6 = var8[var6];
                        var8 = var7.bind(var5)(var6);
                        var7 = var8.sendMessage;
                        var16 = var4.id;
                        var4 = {};
                        var11 = _closure1_slot5;
                        var11 = var11.SHARE_MODAL;
                        var4.location = var11;
                        var11 = true;
                        var4.doNotNotifyOnError = var11;
                        var4.attachmentsToUpload = var10;
                        var2 = function() {
                            var3 = _closure4_slot4;
                            var1 = var3.reject;
                            var0 = undefined;
                            var1 = var1.bind(var3)(var0);
                            var1 = {};
                            var3 = _closure4_slot3;
                            var1.uploads = var3;
                            var3 = _closure4_slot2;
                            var1.channelId = var3;
                            var2 = _closure4_slot1;
                            var1.comment = var2;
                            var9 = var1.uploads;
                            var5 = var1.channelId;
                            var4 = var1.comment;
                            var3 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var2 = 5;
                            var2 = var6[var2];
                            var8 = var3.bind(var0)(var2);
                            var7 = var8.setUploads;
                            var2 = {};
                            var2.channelId = var5;
                            var2.uploads = var9;
                            var9 = _closure1_slot4;
                            var9 = var9.ChannelMessage;
                            var2.draftType = var9;
                            var9 = true;
                            var2.resetState = var9;
                            var2 = var7.bind(var8)(var2);
                            var2 = 6;
                            var2 = var6[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.saveDraft;
                            var1 = _closure1_slot4;
                            var1 = var1.ChannelMessage;
                            var1 = var2.bind(var3)(var5, var4, var1);
                            return var0;
                        };
                        var4.onAttachmentUploadError = var2;
                        var14 = false;
                        var17 = var8;
                        var15 = var9;
                        var13 = var4;
                        var2 = var17[var7](var16, var15, var14, var13, var12);
                        SaveGenerator(address = 337);
                    case 335:
                        return var2;
                    case 337:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun96447_ip = 363;
                            continue _fun96447
                        }
                    case 343:
                        var4 = var3.resolve;
                        var4 = var4.bind(var3)(var5);
                        var3 = var3.promise;
                        return var3;
                    case 363:
                        return var2;
                    case 366:
                        return var1;
                    case 369:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.DraftType;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageSendLocation;
    var _closure1_slot5 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/share/native/ShareUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var4 = arg0;
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var0 = 3;
        var1 = var6[var0];
        var0 = undefined;
        var3 = var5.bind(var0)(var1);
        var2 = var3.open;
        var1 = {};
        var7 = global;
        var7 = var7.HermesInternal;
        var8 = var7.concat;
        var7 = 'INFORMATION_TOAST-';
        var7 = var8.bind(var7)(var4);
        var1.key = var7;
        var1.content = var4;
        var4 = 4;
        var4 = var6[var4];
        var4 = var5.bind(var0)(var4);
        var1.icon = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.showInformationToast = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.sendShareMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 4001, 1346, 3148, 9231, 7607, 6481, 4006, 4004, 5588, 4677, 6526, 2]);