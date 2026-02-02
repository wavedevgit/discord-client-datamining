// modules/calls/CallConstants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var11 = {};
    var12 = 0;
    var11.STREAM = var12;
    var7 = 'STREAM';
    var11[var12] = var7;
    var3 = 1;
    var11.HIDDEN_STREAM = var3;
    var0 = 'HIDDEN_STREAM';
    var11[var3] = var0;
    var1 = 2;
    var11.USER = var1;
    var5 = 'USER';
    var11[var1] = var5;
    var4 = 3;
    var11.ACTIVITY = var4;
    var0 = 'ACTIVITY';
    var11[var4] = var0;
    var _closure1_slot0 = var11;
    var10 = {};
    var10.STREAM = var7;
    var10.USER = var5;
    var10.ACTIVITY = var0;
    var9 = {};
    var0 = 'NONE';
    var9.NONE = var0;
    var0 = 'AUTO';
    var9.AUTO = var0;
    var8 = {};
    var8.DESKTOP = var12;
    var0 = 'DESKTOP';
    var8[var12] = var0;
    var8.MOBILE = var3;
    var0 = 'MOBILE';
    var8[var3] = var0;
    var8.XBOX = var1;
    var0 = 'XBOX';
    var8[var1] = var0;
    var8.PLAYSTATION = var4;
    var0 = 'PLAYSTATION';
    var8[var4] = var0;
    var4 = 4;
    var8.QUEST = var4;
    var0 = 'QUEST';
    var8[var4] = var0;
    var7 = {};
    var0 = 'Context Menu';
    var7.CONTEXT_MENU = var0;
    var0 = 'Three-Dot';
    var7.THREE_DOT = var0;
    var0 = 'Caret';
    var7.CARET = var0;
    var0 = 'Other Button';
    var7.OTHER_BUTTON = var0;
    var5 = {};
    var5.VIDEO = var12;
    var0 = 'VIDEO';
    var5[var12] = var0;
    var5.CAMERA_PREVIEW = var3;
    var0 = 'CAMERA_PREVIEW';
    var5[var3] = var0;
    var5.HAVEN = var1;
    var0 = 'HAVEN';
    var5[var1] = var0;
    var4 = {};
    var0 = var5.VIDEO;
    var1 = 320;
    var4[var0] = var1;
    var0 = var5.CAMERA_PREVIEW;
    var14 = 160;
    var4[var0] = var14;
    var0 = var5.HAVEN;
    var4[var0] = var1;
    var3 = {};
    var0 = var5.VIDEO;
    var1 = 960;
    var3[var0] = var1;
    var13 = var5.CAMERA_PREVIEW;
    var0 = 480;
    var3[var13] = var0;
    var0 = var5.HAVEN;
    var3[var0] = var1;
    var1 = {};
    var0 = var5.VIDEO;
    var13 = 200;
    var1[var0] = var13;
    var0 = var5.CAMERA_PREVIEW;
    var1[var0] = var14;
    var0 = var5.HAVEN;
    var1[var0] = var13;
    var0 = dependencyMap;
    var13 = var0[var12];
    var12 = require;
    var0 = undefined;
    var14 = var12.bind(var0)(var13);
    var13 = var14.fileFinishedImporting;
    var12 = 'modules/calls/CallConstants.tsx';
    var12 = var13.bind(var14)(var12);
    var2.ParticipantTypes = var11;
    var2.ContextMenuTileTypes = var10;
    var2.ParticipantSelectionTypes = var9;
    var2.VoicePlatforms = var8;
    var2.CallMenuEntrypoint = var7;
    var7 = function arg0() {
        _fun31091: for (var _fun31091_ip = 0;;) switch (_fun31091_ip) {
            case 0:
                var3 = arg0;
                var4 = null;
                var0 = var4 == var3;
                var5 = undefined;
                if (var0) {
                    _fun31091_ip = 19;
                    continue _fun31091
                }
            case 14:
                var5 = var3.type;
            case 19:
                var0 = _closure1_slot0;
                var0 = var0.STREAM;
                var0 = var5 === var0;
                if (var0) {
                    _fun31091_ip = 67;
                    continue _fun31091
                }
            case 39:
                var4 = var4 == var3;
                var2 = undefined;
                if (var4) {
                    _fun31091_ip = 53;
                    continue _fun31091
                }
            case 48:
                var2 = var3.type;
            case 53:
                var1 = _closure1_slot0;
                var1 = var1.HIDDEN_STREAM;
                var0 = var2 === var1;
            case 67:
                return var0;
        }
    };
    var2.isStreamParticipant = var7;
    var7 = function arg0() {
        _fun31092: for (var _fun31092_ip = 0;;) switch (_fun31092_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                var2 = var1 == var0;
                var1 = undefined;
                if (var2) {
                    _fun31092_ip = 19;
                    continue _fun31092
                }
            case 14:
                var1 = var0.type;
            case 19:
                var0 = _closure1_slot0;
                var0 = var0.USER;
                var0 = var1 === var0;
                return var0;
        }
    };
    var2.isUserParticipant = var7;
    var6 = function arg0() {
        _fun31093: for (var _fun31093_ip = 0;;) switch (_fun31093_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                var2 = var1 == var0;
                var1 = undefined;
                if (var2) {
                    _fun31093_ip = 19;
                    continue _fun31093
                }
            case 14:
                var1 = var0.type;
            case 19:
                var0 = _closure1_slot0;
                var0 = var0.ACTIVITY;
                var0 = var1 === var0;
                return var0;
        }
    };
    var2.isActivityParticipant = var6;
    var2.PictureInPictureTypes = var5;
    var2.DEFAULT_PIP_WIDTH = var4;
    var2.MAX_PIP_WIDTH = var3;
    var2.MIN_PIP_WIDTH = var1;
    var1 = 8;
    var2.EMOJI_PICKER_EMOJI_TO_SHOW_COUNT = var1;
    var1 = 550;
    var2.MIN_CALL_WIDTH = var1;
    var1 = 230;
    var2.MIN_CALL_HEIGHT = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);