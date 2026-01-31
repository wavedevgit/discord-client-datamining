// stores/UploadAttachmentStore.tsx
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
        _fun36625: for (var _fun36625_ip = 0;;) switch (_fun36625_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun36625_ip = 74;
                continue _fun36625;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot12 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0, arg1() {
        _fun36628: for (var _fun36628_ip = 0;;) switch (_fun36628_ip) {
            case 0:
                var3 = _closure1_slot14;
                var0 = undefined;
                var2 = arg0;
                var5 = var3.bind(var0)(var2);
                var2 = null;
                var3 = var2 == var5;
                if (var3) {
                    _fun36628_ip = 39;
                    continue _fun36628
                }
            case 26:
                var4 = var5.get;
                var3 = arg1;
                var0 = var4.bind(var5)(var3);
            case 39:
                if (!(var2 == var0)) {
                    _fun36628_ip = 47;
                    continue _fun36628
                }
            case 43:
                var0 = _closure1_slot11;
            case 47:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function arg0() {
        _fun36629: for (var _fun36629_ip = 0;;) switch (_fun36629_ip) {
            case 0:
                var2 = _closure1_slot10;
                var1 = var2.get;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var1 = null;
                if (!(var1 == var0)) {
                    _fun36629_ip = 54;
                    continue _fun36629
                }
            case 26:
                var1 = global;
                var1 = var1.Map;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var4 = var2;
                var1 = new var4[var1](var3);
                var0 = var1 instanceof Object ? var1 : var2;
            case 54:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0, arg1, arg2() {
        var4 = arg0;
        var2 = _closure1_slot14;
        var0 = undefined;
        var3 = var2.bind(var0)(var4);
        var6 = var3.set;
        var5 = arg1;
        var2 = arg2;
        var2 = var6.bind(var3)(var5, var2);
        var2 = _closure1_slot10;
        var1 = var2.set;
        var1 = var1.bind(var2)(var4, var3);
        return var0;
    };
    var _closure1_slot15 = var0;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var7);
    var0 = 0;
    var7 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.DraftType;
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.MAX_UPLOAD_COUNT;
    var _closure1_slot9 = var7;
    var1 = var1.Map;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var13 = var7;
    var1 = new var13[var1](var12);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot10 = var1;
    var1 = new Array(0);
    var _closure1_slot11 = var1;
    var1 = 12;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun36632: for (var _fun36632_ip = 0;;) switch (_fun36632_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun36632_ip = 69;
                        continue _fun36632
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun36632_ip = 105;
                    continue _fun36632;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'getFirstUpload';
        var4.key = var0;
        var0 = function arg0, arg1() {
            _fun36633: for (var _fun36633_ip = 0;;) switch (_fun36633_ip) {
                case 0:
                    var3 = _closure1_slot13;
                    var2 = undefined;
                    var1 = arg0;
                    var0 = arg1;
                    var2 = var3.bind(var2)(var1, var0);
                    var0 = var2.length;
                    var1 = 0;
                    var3 = var0 > var1;
                    var0 = null;
                    if (!var3) {
                        _fun36633_ip = 41;
                        continue _fun36633
                    }
                case 37:
                    var0 = var2[var1];
                case 41:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'hasAdditionalUploads';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun36634: for (var _fun36634_ip = 0;;) switch (_fun36634_ip) {
                case 0:
                    var3 = _closure1_slot13;
                    var2 = undefined;
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var3.bind(var2)(var1, var0);
                    var0 = var0.length;
                    var1 = null;
                    var2 = var1 != var0;
                    var1 = 0;
                    if (!var2) {
                        _fun36634_ip = 40;
                        continue _fun36634
                    }
                case 37:
                    var1 = var0;
                case 40:
                    var0 = 1;
                    var0 = var1 > var0;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getUploads';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var3 = _closure1_slot13;
            var2 = undefined;
            var1 = arg0;
            var0 = arg1;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getUploadCount';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun36636: for (var _fun36636_ip = 0;;) switch (_fun36636_ip) {
                case 0:
                    var3 = _closure1_slot13;
                    var2 = undefined;
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var3.bind(var2)(var1, var0);
                    var1 = var0.length;
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = 0;
                    if (!var2) {
                        _fun36636_ip = 40;
                        continue _fun36636
                    }
                case 37:
                    var0 = var1;
                case 40:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getUpload';
        var4.key = var6;
        var6 = function arg0, arg1, arg2() {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot13;
            var3 = undefined;
            var2 = arg0;
            var1 = arg2;
            var2 = var4.bind(var3)(var2, var1);
            var1 = var2.find;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.id;
                var0 = _closure3_slot0;
                var0 = var1 === var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'findUpload';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            var3 = _closure1_slot13;
            var2 = undefined;
            var1 = arg0;
            var0 = arg1;
            var2 = var3.bind(var2)(var1, var0);
            var1 = var2.find;
            var0 = arg2;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'UploadAttachmentStore';
    var7.displayName = var1;
    var1 = 13;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        var0 = arg0;
        var4 = var0.channelId;
        var5 = _closure1_slot13;
        var1 = _closure1_slot8;
        var3 = var1.ChannelMessage;
        var0 = undefined;
        var8 = var5.bind(var0)(var4, var3);
        var3 = new Array(0);
        var7 = 0;
        var9 = var3;
        var5 = arraySpread(var9, var8, var7);
        var5 = var3.shift;
        var5 = var5.bind(var3)();
        var2 = _closure1_slot15;
        var1 = var1.ChannelMessage;
        var1 = var2.bind(var0)(var4, var1, var3);
        return var0;
    };
    var1.UPLOAD_ATTACHMENT_POP_FILE = var8;
    var8 = function arg0() {
        _fun36641: for (var _fun36641_ip = 0;;) switch (_fun36641_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.files;
                var4 = var0.channelId;
                var _closure2_slot0 = var4;
                var3 = var0.draftType;
                var0 = var0.allowOptimization;
                var _closure2_slot1 = var0;
                var2 = _closure1_slot13;
                var0 = undefined;
                var12 = var2.bind(var0)(var4, var3);
                var2 = new Array(0);
                var11 = 0;
                var13 = var2;
                var5 = arraySpread(var13, var12, var11);
                var _closure2_slot2 = var2;
                var6 = var2.length;
                var5 = var7.length;
                var6 = var6 + var5;
                var5 = _closure1_slot9;
                if (!(var6 > var5)) {
                    _fun36641_ip = 118;
                    continue _fun36641
                }
            case 90:
                var5 = _closure1_slot8;
                var5 = var5.SlashCommand;
                if (!(var3 !== var5)) {
                    _fun36641_ip = 118;
                    continue _fun36641
                }
            case 104:
                var5 = _closure1_slot8;
                var5 = var5.ApplicationLauncherCommand;
                if (!(var3 === var5)) {
                    _fun36641_ip = 170;
                    continue _fun36641
                }
            case 118:
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var5 = 9;
                var5 = var9[var5];
                var6 = var6.bind(var0)(var5);
                var5 = var6.forEach;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var7 = var1.CloudUpload;
                    var10 = _closure2_slot0;
                    var3 = _closure2_slot2;
                    var9 = var3.length;
                    var8 = _closure2_slot1;
                    var1 = var7.prototype;
                    var2 = Object.create(var1, {
                        constructor: {
                            value: var7
                        }
                    });
                    var11 = arg0;
                    var12 = var2;
                    var1 = new var12[var7](var11, var10, var9, var8, var7);
                    var2 = var1 instanceof Object ? var1 : var2;
                    var1 = var3.push;
                    var1 = var1.bind(var3)(var2);
                    return var0;
                };
                var1 = var5.bind(var6)(var7, var1);
                var1 = _closure1_slot15;
                var1 = var1.bind(var0)(var4, var3, var2);
                _fun36641_ip = 317;
                continue _fun36641;
            case 170:
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 7;
                var1 = var9[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.show;
                var1 = {};
                var5 = _closure1_slot0;
                var4 = 8;
                var6 = var9[var4];
                var6 = var5.bind(var0)(var6);
                var10 = var6.intl;
                var7 = var10.string;
                var6 = var9[var4];
                var6 = var5.bind(var0)(var6);
                var6 = var6.t;
                var6 = var6.wOr6hB;
                var6 = var7.bind(var10)(var6);
                var1.title = var6;
                var6 = var9[var4];
                var6 = var5.bind(var0)(var6);
                var7 = var6.intl;
                var6 = var7.formatToPlainString;
                var4 = var9[var4];
                var4 = var5.bind(var0)(var4);
                var4 = var4.t;
                var5 = var4["qqyp/e"];
                var4 = {};
                var8 = _closure1_slot9;
                var4.limit = var8;
                var4 = var6.bind(var7)(var5, var4);
                var1.body = var4;
                var1 = var2.bind(var3)(var1);
            case 317:
                return var0;
        }
    };
    var1.UPLOAD_ATTACHMENT_ADD_FILES = var8;
    var8 = function arg0() {
        var0 = arg0;
        var4 = var0.channelId;
        var2 = var0.id;
        var _closure2_slot0 = var2;
        var2 = var0.filename;
        var _closure2_slot1 = var2;
        var2 = var0.description;
        var _closure2_slot2 = var2;
        var2 = var0.spoiler;
        var _closure2_slot3 = var2;
        var2 = var0.thumbnail;
        var _closure2_slot4 = var2;
        var3 = var0.draftType;
        var2 = _closure1_slot15;
        var5 = _closure1_slot13;
        var0 = undefined;
        var9 = var5.bind(var0)(var4, var3);
        var6 = new Array(0);
        var8 = 0;
        var10 = var6;
        var5 = arraySpread(var10, var9, var8);
        var5 = var6.map;
        var1 = function(arg0) { // Environment: var1
            _fun36644: for (var _fun36644_ip = 0;;) switch (_fun36644_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.id;
                    var2 = _closure2_slot0;
                    if (!(var3 === var2)) {
                        _fun36644_ip = 93;
                        continue _fun36644
                    }
                case 19:
                    var2 = _closure2_slot1;
                    var3 = undefined;
                    if (!(var3 !== var2)) {
                        _fun36644_ip = 39;
                        continue _fun36644
                    }
                case 29:
                    var2 = _closure2_slot1;
                    var0.filename = var2;
                case 39:
                    var2 = _closure2_slot3;
                    if (!(var3 !== var2)) {
                        _fun36644_ip = 57;
                        continue _fun36644
                    }
                case 47:
                    var2 = _closure2_slot3;
                    var0.spoiler = var2;
                case 57:
                    var2 = _closure2_slot2;
                    if (!(var3 !== var2)) {
                        _fun36644_ip = 75;
                        continue _fun36644
                    }
                case 65:
                    var2 = _closure2_slot2;
                    var0.description = var2;
                case 75:
                    var2 = _closure2_slot4;
                    if (!(var3 !== var2)) {
                        _fun36644_ip = 93;
                        continue _fun36644
                    }
                case 83:
                    var1 = _closure2_slot4;
                    var0.isThumbnail = var1;
                case 93:
                    return var0;
            }
        };
        var1 = var5.bind(var6)(var1);
        var1 = var2.bind(var0)(var4, var3, var1);
        return var0;
    };
    var1.UPLOAD_ATTACHMENT_UPDATE_FILE = var8;
    var8 = function arg0() {
        _fun36645: for (var _fun36645_ip = 0;;) switch (_fun36645_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.channelId;
                var1 = var0.id;
                var _closure2_slot0 = var1;
                var3 = var0.draftType;
                var2 = _closure1_slot13;
                var0 = undefined;
                var10 = var2.bind(var0)(var4, var3);
                var2 = new Array(0);
                var6 = 0;
                var11 = var2;
                var9 = 0;
                var7 = arraySpread(var11, var10, var9);
                var7 = var2.findIndex;
                var5 = function(arg0) { // Environment: var5
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 11;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.doesImageMatchUpload;
                    var1 = {};
                    var0 = _closure2_slot0;
                    var1.uri = var0;
                    var1.filename = var0;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var8 = var7.bind(var2)(var5);
                var5 = -1;
                if (!(var8 > var5)) {
                    _fun36645_ip = 121;
                    continue _fun36645
                }
            case 81:
                var7 = var2.splice;
                var5 = 1;
                var5 = var7.bind(var2)(var8, var5);
                var6 = var5[var6];
                var5 = var6.removeFromMsgDraft;
                var5 = var5.bind(var6)();
                var1 = _closure1_slot15;
                var1 = var1.bind(var0)(var4, var3, var2);
            case 121:
                return var0;
        }
    };
    var1.UPLOAD_ATTACHMENT_REMOVE_FILE = var8;
    var8 = function arg0() {
        var0 = arg0;
        var4 = var0.channelId;
        var7 = var0.attachmentIds;
        var3 = var0.draftType;
        var2 = _closure1_slot13;
        var0 = undefined;
        var10 = var2.bind(var0)(var4, var3);
        var2 = new Array(0);
        var9 = 0;
        var11 = var2;
        var6 = arraySpread(var11, var10, var9);
        var _closure2_slot0 = var2;
        var6 = var7.forEach;
        var5 = function(arg0) { // Environment: var5
            _fun36648: for (var _fun36648_ip = 0;;) switch (_fun36648_ip) {
                case 0:
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var3 = _closure2_slot0;
                    var2 = var3.findIndex;
                    var1 = function(arg0) { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = arg0;
                        var0 = var0.id;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var3 = var2.bind(var3)(var1);
                    var1 = -1;
                    if (!(var3 > var1)) {
                        _fun36648_ip = 77;
                        continue _fun36648
                    }
                case 42:
                    var2 = _closure2_slot0;
                    var1 = var2.splice;
                    var0 = 1;
                    var1 = var1.bind(var2)(var3, var0);
                    var0 = 0;
                    var1 = var1[var0];
                    var0 = var1.removeFromMsgDraft;
                    var0 = var0.bind(var1)();
                case 77:
                    var0 = undefined;
                    return var0;
            }
        };
        var5 = var6.bind(var7)(var5);
        var1 = _closure1_slot15;
        var1 = var1.bind(var0)(var4, var3, var2);
        return var0;
    };
    var1.UPLOAD_ATTACHMENT_REMOVE_FILES = var8;
    var8 = function arg0() {
        var0 = arg0;
        var4 = var0.channelId;
        var3 = var0.draftType;
        var2 = _closure1_slot15;
        var0 = undefined;
        var1 = new Array(0);
        var1 = var2.bind(var0)(var4, var3, var1);
        return var0;
    };
    var1.UPLOAD_ATTACHMENT_CLEAR_ALL_FILES = var8;
    var8 = function arg0() {
        var0 = arg0;
        var4 = var0.channelId;
        var3 = var0.uploads;
        var2 = var0.draftType;
        var1 = _closure1_slot15;
        var0 = undefined;
        var1 = var1.bind(var0)(var4, var2, var3);
        return var0;
    };
    var1.UPLOAD_ATTACHMENT_SET_UPLOADS = var8;
    var8 = function arg0() {
        var0 = arg0;
        var4 = var0.channelId;
        var1 = var0.id;
        var _closure2_slot0 = var1;
        var8 = var0.file;
        var3 = var0.draftType;
        var10 = var0.allowOptimization;
        var5 = _closure1_slot13;
        var0 = undefined;
        var12 = var5.bind(var0)(var4, var3);
        var6 = new Array(0);
        var11 = 0;
        var13 = var6;
        var5 = arraySpread(var13, var12, var11);
        var5 = var6.filter;
        var2 = function(arg0) { // Environment: var2
            var0 = arg0;
            var1 = var0.id;
            var0 = _closure2_slot0;
            var0 = var1 !== var0;
            return var0;
        };
        var2 = var5.bind(var6)(var2);
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var5 = 10;
        var5 = var9[var5];
        var5 = var6.bind(var0)(var5);
        var5 = var5.CloudUpload;
        var6 = var5.prototype;
        var6 = Object.create(var6, {
            constructor: {
                value: var5
            }
        });
        var14 = var6;
        var13 = var8;
        var12 = var4;
        var11 = undefined;
        var5 = new var14[var5](var13, var12, var11, var10, var9);
        var6 = var5 instanceof Object ? var5 : var6;
        var5 = var2.push;
        var5 = var5.bind(var2)(var6);
        var1 = _closure1_slot15;
        var1 = var1.bind(var0)(var4, var3, var2);
        return var0;
    };
    var1.UPLOAD_ATTACHMENT_SET_FILE = var8;
    var3 = function arg0() {
        var0 = arg0;
        var4 = var0.baseChannelId;
        var3 = _closure1_slot15;
        var0 = _closure1_slot8;
        var2 = var0.FirstThreadMessage;
        var0 = undefined;
        var1 = new Array(0);
        var1 = var3.bind(var0)(var4, var2, var1);
        return var0;
    };
    var1.SIDEBAR_CLOSE = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var13 = var3;
    var11 = var1;
    var1 = new var13[var7](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/UploadAttachmentStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3960, 660, 3962, 1234, 22, 3963, 3970, 566, 806, 2]);