// modules/rtc/SecureFramesPlatformUtils.native.tsx
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
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var6 = var1.SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY;
    var _closure1_slot5 = var6;
    var6 = var1.SECURE_FRAMES_STREAM_VERIFICATION_BOTTOM_SHEET_KEY;
    var _closure1_slot6 = var6;
    var1 = var1.SECURE_FRAMES_USER_VERIFICATION_MODAL_KEY;
    var _closure1_slot7 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var6 = var1.ME;
    var _closure1_slot8 = var6;
    var1 = var1.Routes;
    var _closure1_slot9 = var1;
    var1 = {};
    var6 = function arg0, arg1() {
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 7;
        var3 = var2[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var3);
        var4 = var5.openLazy;
        var6 = _closure1_slot0;
        var3 = 6;
        var3 = var2[var3];
        var6 = var6.bind(var0)(var3);
        var3 = 8;
        var3 = var2[var3];
        var2 = var2.paths;
        var3 = var6.bind(var0)(var3, var2);
        var2 = _closure1_slot6;
        var1 = {};
        var6 = arg0;
        var1.streamKey = var6;
        var6 = arg1;
        var1.channelId = var6;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var1.openSecureFramesStreamVerification = var6;
    var6 = function arg0, arg1, arg2() {
        _fun66846: for (var _fun66846_ip = 0;;) switch (_fun66846_ip) {
            case 0:
                var1 = arg2;
                var0 = undefined;
                var1 = var1.bind(var0)();
                if (!var1) {
                    _fun66846_ip = 102;
                    continue _fun66846
                }
            case 12:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var3 = 4;
                var3 = var2[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.pushLazy;
                var6 = _closure1_slot0;
                var3 = 6;
                var3 = var2[var3];
                var6 = var6.bind(var0)(var3);
                var3 = 5;
                var3 = var2[var3];
                var2 = var2.paths;
                var3 = var6.bind(var0)(var3, var2);
                var2 = {};
                var6 = arg0;
                var2.userId = var6;
                var6 = arg1;
                var2.channelId = var6;
                var1 = _closure1_slot7;
                var1 = var4.bind(var5)(var3, var2, var1);
            case 102:
                return var0;
        }
    };
    var1.openSecureFramesUserVerificationModal = var6;
    var6 = function arg0() {
        _fun66847: for (var _fun66847_ip = 0;;) switch (_fun66847_ip) {
            case 0:
                var2 = arg0;
                var9 = var2.title;
                var8 = var2.subtitle;
                var6 = var2.confirmText;
                var0 = undefined;
                if (!(var6 === var0)) {
                    _fun66847_ip = 86;
                    continue _fun66847
                }
            case 28:
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 9;
                var4 = var10[var3];
                var4 = var7.bind(var0)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var10[var3];
                var3 = var7.bind(var0)(var3);
                var3 = var3.t;
                var3 = var3["cY+Oob"];
                var6 = var4.bind(var5)(var3);
            case 86:
                var2 = var2.onConfirm;
                var _closure2_slot0 = var2;
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 10;
                var2 = var7[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.confirm;
                var2 = {};
                var2.title = var9;
                var2.body = var8;
                var2.confirmText = var6;
                var6 = _closure1_slot0;
                var5 = 9;
                var8 = var7[var5];
                var8 = var6.bind(var0)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var5 = var7[var5];
                var5 = var6.bind(var0)(var5);
                var5 = var5.t;
                var5 = var5["ETE/oC"];
                var5 = var8.bind(var9)(var5);
                var2.cancelText = var5;
                var5 = 11;
                var5 = var7[var5];
                var5 = var6.bind(var0)(var5);
                var5 = var5.ButtonColors;
                var5 = var5.RED;
                var2.confirmColor = var5;
                var3 = var3.bind(var4)(var2);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var1
                    _fun66848: for (var _fun66848_ip = 0;;) switch (_fun66848_ip) {
                        case 0:
                            var0 = arg0;
                            if (!var0) {
                                _fun66848_ip = 19;
                                continue _fun66848
                            }
                        case 6:
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 19:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.openSecureFramesUpdateConfirmation = var6;
    var3 = function arg0() {
        _fun66849: for (var _fun66849_ip = 0;;) switch (_fun66849_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.userId;
                var6 = var0.fingerprint;
                var2 = _closure1_slot4;
                var0 = var2.getChannelId;
                var8 = var0.bind(var2)();
                var2 = _closure1_slot3;
                var0 = var2.getChannel;
                var3 = var0.bind(var2)(var8);
                var2 = null;
                var4 = var2 == var3;
                var0 = undefined;
                var7 = undefined;
                if (var4) {
                    _fun66849_ip = 68;
                    continue _fun66849
                }
            case 58:
                var4 = var3.getGuildId;
                var7 = var4.bind(var3)();
            case 68:
                if (!(var2 == var7)) {
                    _fun66849_ip = 76;
                    continue _fun66849
                }
            case 72:
                var7 = _closure1_slot8;
            case 76:
                if (!(var2 != var8)) {
                    _fun66849_ip = 87;
                    continue _fun66849
                }
            case 80:
                if (!(var2 == var3)) {
                    _fun66849_ip = 228;
                    continue _fun66849
                }
            case 87:
                var3 = _closure1_slot1;
                var13 = _closure1_slot2;
                var2 = 10;
                var2 = var13[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.show;
                var2 = {};
                var12 = _closure1_slot0;
                var5 = 9;
                var10 = var13[var5];
                var10 = var12.bind(var0)(var10);
                var14 = var10.intl;
                var11 = var14.string;
                var10 = var13[var5];
                var10 = var12.bind(var0)(var10);
                var10 = var10.t;
                var10 = var10["5ICxE6"];
                var10 = var11.bind(var14)(var10);
                var2.title = var10;
                var10 = var13[var5];
                var10 = var12.bind(var0)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var5 = var13[var5];
                var5 = var12.bind(var0)(var5);
                var5 = var5.t;
                var5 = var5["v1eXp/"];
                var5 = var10.bind(var11)(var5);
                var2.body = var5;
                var2 = var3.bind(var4)(var2);
                _fun66849_ip = 351;
                continue _fun66849;
            case 228:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var3 = 12;
                var3 = var2[var3];
                var5 = var4.bind(var0)(var3);
                var10 = _closure1_slot9;
                var3 = var10.CHANNEL;
                var3 = var3.bind(var10)(var7, var8);
                var3 = var5.bind(var0)(var3);
                var3 = 7;
                var3 = var2[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.openLazy;
                var10 = _closure1_slot0;
                var3 = 6;
                var3 = var2[var3];
                var10 = var10.bind(var0)(var3);
                var3 = 13;
                var3 = var2[var3];
                var2 = var2.paths;
                var3 = var10.bind(var0)(var3, var2);
                var2 = _closure1_slot5;
                var1 = {};
                var1.userId = var9;
                var1.channelId = var8;
                var1.guildId = var7;
                var1.fingerprint = var6;
                var1 = var4.bind(var5)(var3, var2, var1);
            case 351:
                return var0;
        }
    };
    var1.handleSecureFramesUserVerificationLink = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rtc/SecureFramesPlatformUtils.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 3509, 8258, 660, 4557, 8261, 1307, 3269, 8273, 1234, 3927, 4868, 5612, 8276, 2]);