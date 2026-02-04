// modules/share/native/AppShare.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.BackHandler;
    var _closure1_slot5 = var7;
    var3 = var3.NativeModules;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/share/native/AppShare.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun118165: for (var _fun118165_ip = 0;;) switch (_fun118165_ip) {
            case 0:
                var9 = arg0;
                var _closure2_slot0 = var9;
                var1 = function arg0() {
                    _fun118166: for (var _fun118166_ip = 0;;) switch (_fun118166_ip) {
                        case 0:
                            var0 = arg0;
                            var6 = var0.targetUserId;
                            var _closure3_slot0 = var6;
                            var9 = undefined;
                            var _closure3_slot3 = var9;
                            var10 = _closure1_slot4;
                            var1 = var10.useState;
                            var0 = false;
                            var1 = var1.bind(var10)(var0);
                            var0 = _closure1_slot3;
                            var8 = 2;
                            var4 = var0.bind(var9)(var1, var8);
                            var1 = 0;
                            var0 = var4[var1];
                            var _closure3_slot1 = var0;
                            var5 = 1;
                            var4 = var4[var5];
                            var _closure3_slot2 = var4;
                            var7 = var10.useState;
                            var4 = null;
                            var4 = var4 == var6;
                            if (var4) {
                                _fun118166_ip = 106;
                                continue _fun118166
                            }
                        case 88:
                            var12 = _closure1_slot7;
                            var11 = var12.getId;
                            var11 = var11.bind(var12)();
                            var4 = var11 === var6;
                        case 106:
                            var7 = var7.bind(var10)(var4);
                            var4 = _closure1_slot3;
                            var4 = var4.bind(var9)(var7, var8);
                            var1 = var4[var1];
                            var4 = var4[var5];
                            _closure3_slot3 = var4;
                            var5 = _closure1_slot4;
                            var7 = var5.useEffect;
                            var4 = new Array(1);
                            var4[0] = var0;
                            var3 = function() { // Environment: var2
                                _fun118167: for (var _fun118167_ip = 0;;) switch (_fun118167_ip) {
                                    case 0:
                                        var1 = _closure3_slot1;
                                        if (var1) {
                                            _fun118167_ip = 56;
                                            continue _fun118167
                                        }
                                    case 10:
                                        var3 = _closure1_slot1;
                                        var2 = _closure1_slot2;
                                        var1 = 11;
                                        var1 = var2[var1];
                                        var2 = undefined;
                                        var3 = var3.bind(var2)(var1);
                                        var1 = var3.init;
                                        var1 = var1.bind(var3)();
                                        var1 = _closure3_slot2;
                                        var0 = true;
                                        var0 = var1.bind(var2)(var0);
                                    case 56:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var3 = var7.bind(var5)(var3, var4);
                            var4 = var5.useEffect;
                            var3 = new Array(1);
                            var3[0] = var6;
                            var2 = function() { // Environment: var2
                                _fun118168: for (var _fun118168_ip = 0;;) switch (_fun118168_ip) {
                                    case 0:
                                        var2 = _closure3_slot0;
                                        var0 = null;
                                        var0 = var0 != var2;
                                        if (!var0) {
                                            _fun118168_ip = 41;
                                            continue _fun118168
                                        }
                                    case 16:
                                        var3 = _closure1_slot7;
                                        var2 = var3.getId;
                                        var2 = var2.bind(var3)();
                                        var1 = _closure3_slot0;
                                        var0 = var2 !== var1;
                                    case 41:
                                        if (!var0) {
                                            _fun118168_ip = 72;
                                            continue _fun118168
                                        }
                                    case 44:
                                        var0 = global;
                                        var3 = var0.setTimeout;
                                        var2 = undefined;
                                        var1 = function() { // Environment: var0
                                            var2 = _closure1_slot0;
                                            var1 = _closure1_slot2;
                                            var0 = 12;
                                            var1 = var1[var0];
                                            var0 = undefined;
                                            var4 = var2.bind(var0)(var1);
                                            var3 = var4.switchAccount;
                                            var2 = _closure3_slot0;
                                            var1 = false;
                                            var3 = var3.bind(var4)(var2, var1);
                                            var2 = var3.then;
                                            var1 = function() { // Environment: var1
                                                var2 = _closure3_slot3;
                                                var0 = undefined;
                                                var1 = true;
                                                var1 = var2.bind(var0)(var1);
                                                return var0;
                                            };
                                            var1 = var2.bind(var3)(var1);
                                            return var0;
                                        };
                                        var0 = 18;
                                        var0 = var3.bind(var2)(var1, var0);
                                    case 72:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2 = var4.bind(var5)(var2, var3);
                            if (!var0) {
                                _fun118166_ip = 195;
                                continue _fun118166
                            }
                        case 192:
                            var0 = var1;
                        case 195:
                            return var0;
                    }
                };
                var3 = undefined;
                var4 = var1.bind(var3)(var9);
                var1 = function() {
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 8;
                    var3 = var3[var0];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var3);
                    var5 = var6.useStateFromStores;
                    var3 = _closure1_slot7;
                    var4 = new Array(1);
                    var4[0] = var3;
                    var3 = function() { // Environment: var1
                        var1 = _closure1_slot7;
                        var0 = var1.isAuthenticated;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var5 = var5.bind(var6)(var4, var3);
                    var _closure3_slot0 = var5;
                    var4 = _closure1_slot4;
                    var3 = var4.useEffect;
                    var2 = new Array(1);
                    var2[0] = var5;
                    var1 = function() { // Environment: var1
                        _fun118173: for (var _fun118173_ip = 0;;) switch (_fun118173_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                if (!var0) {
                                    _fun118173_ip = 109;
                                    continue _fun118173
                                }
                            case 10:
                                var2 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var1 = 9;
                                var1 = var4[var1];
                                var3 = undefined;
                                var5 = var2.bind(var3)(var1);
                                var2 = var5.startSession;
                                var6 = _closure1_slot7;
                                var1 = var6.getToken;
                                var1 = var1.bind(var6)();
                                var1 = var2.bind(var5)(var1);
                                var2 = _closure1_slot0;
                                var1 = 10;
                                var1 = var4[var1];
                                var2 = var2.bind(var3)(var1);
                                var1 = var2.isAndroid;
                                var1 = var1.bind(var2)();
                                if (!var1) {
                                    _fun118173_ip = 109;
                                    continue _fun118173
                                }
                            case 89:
                                var0 = _closure1_slot6;
                                var1 = var0.NativePermissionManager;
                                var0 = var1.requestNotificationAuthorization;
                                var0 = var0.bind(var1)();
                            case 109:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
                };
                var1 = var1.bind(var3)();
                var7 = _closure1_slot4;
                var6 = var7.useEffect;
                var1 = var9.attachments;
                var1 = var1.length;
                var2 = new Array(2);
                var2[0] = var1;
                var1 = var9.text;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    _fun118174: for (var _fun118174_ip = 0;;) switch (_fun118174_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 14;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.track;
                            var1 = _closure1_slot8;
                            var2 = var1.EXTERNAL_SHARE_OPENED;
                            var1 = {};
                            var6 = _closure2_slot0;
                            var7 = var6.text;
                            var6 = null;
                            var6 = var6 != var7;
                            if (!var6) {
                                _fun118174_ip = 83;
                                continue _fun118174
                            }
                        case 63:
                            var7 = _closure2_slot0;
                            var7 = var7.text;
                            var8 = var7.length;
                            var7 = 0;
                            var6 = var8 > var7;
                        case 83:
                            var1.has_content = var6;
                            var5 = _closure2_slot0;
                            var5 = var5.attachments;
                            var6 = var5.length;
                            var5 = 0;
                            var5 = var6 > var5;
                            var1.has_attachment = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var1 = var6.bind(var7)(var1, var2);
                var1 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 15;
                var2 = var6[var2];
                var2 = var1.bind(var3)(var2);
                var0 = function() { // Environment: var0
                    var0 = {};
                    var1 = _closure2_slot0;
                    var2 = var1.attachments;
                    var2 = var2.length;
                    var0.numAttachments = var2;
                    var3 = var1.attachments;
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var1
                        _fun118176: for (var _fun118176_ip = 0;;) switch (_fun118176_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.mimeType;
                                var0 = null;
                                var2 = var0 != var1;
                                var0 = 'unknown';
                                if (!var2) {
                                    _fun118176_ip = 25;
                                    continue _fun118176
                                }
                            case 22:
                                var0 = var1;
                            case 25:
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    var0.mimeTypes = var1;
                    var5 = var0.numAttachments;
                    var1 = var0.mimeTypes;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 13;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.trackAppUIViewed;
                    var2 = {};
                    var2.share_num_attachments = var5;
                    var2.share_attachment_mimetypes = var1;
                    var1 = 'share';
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
                };
                var0 = var2.bind(var3)(var0);
                var2 = _closure1_slot10;
                var0 = 16;
                var0 = var6[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var6 = 'share';
                var0.appEntryKey = var6;
                var8 = _closure1_slot9;
                if (var4) {
                    _fun118165_ip = 189;
                    continue _fun118165
                }
            case 153:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 18;
                var4 = var7[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.SceneLoadingIndicator;
                var4 = {};
                var6 = var8.bind(var3)(var6, var4);
                _fun118165_ip = 237;
                continue _fun118165;
            case 189:
                var7 = _closure1_slot1;
                var10 = _closure1_slot2;
                var4 = 17;
                var4 = var10[var4];
                var7 = var7.bind(var3)(var4);
                var4 = {};
                var4.sharedContent = var9;
                var9 = _closure1_slot5;
                var9 = var9.exitApp;
                var4.onClose = var9;
                var6 = var8.bind(var3)(var7, var4);
            case 237:
                var4 = new Array(4);
                var4[0] = var6;
                var7 = _closure1_slot9;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var9 = 19;
                var9 = var8[var9];
                var9 = var6.bind(var3)(var9);
                var10 = var9.ActionSheetContainer;
                var9 = {};
                var9 = var7.bind(var3)(var10, var9);
                var4[1] = var9;
                var9 = _closure1_slot1;
                var5 = 20;
                var5 = var8[var5];
                var9 = var9.bind(var3)(var5);
                var5 = {};
                var5 = var7.bind(var3)(var9, var5);
                var4[2] = var5;
                var5 = 21;
                var5 = var8[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.AlertModalContainer;
                var5 = {};
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 4313, 12733, 1216, 660, 33, 566, 4557, 478, 12771, 10285, 4364, 795, 4103, 13002, 12568, 5852, 14105, 5222, 4027, 2]);