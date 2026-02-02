// modules/stage_channels/native/components/SpeakerTileStatuses.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = 0;
    var4 = var7[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var8 = var3.bind(var0)(var4);
    var3 = 1;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var7[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var7[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var7[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var7[var3];
    var5 = var6.bind(var0)(var3);
    var4 = var5.createStyles;
    var3 = {};
    var9 = {
        'position': 'absolute',
        'top': 4,
        'left': 4,
        'backgroundColor': null,
        'borderRadius': null,
        'width': 24,
        'height': 24,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var10 = 7;
    var12 = var7[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.WHITE;
    var9.backgroundColor = var12;
    var12 = var7[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.md;
    var9.borderRadius = var12;
    var3.voiceStatusWrapper = var9;
    var9 = {
        'position': 'absolute',
        'top': 4,
        'right': 4,
        'backgroundColor': null,
        'borderRadius': null,
        'width': 24,
        'height': 24,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var12 = var7[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.WHITE;
    var9.backgroundColor = var12;
    var12 = var7[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.md;
    var9.borderRadius = var12;
    var3.moderatorStatusWrapper = var9;
    var9 = {};
    var10 = var7[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_4;
    var9.marginEnd = var10;
    var3.restricted = var9;
    var3 = var4.bind(var5)(var3);
    var _closure1_slot8 = var3;
    var4 = var8.memo;
    var3 = function(arg0) { // Environment: var1
        _fun69213: for (var _fun69213_ip = 0;;) switch (_fun69213_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.userId;
                var _closure2_slot0 = var10;
                var11 = var1.channelId;
                var _closure2_slot1 = var11;
                var8 = var1.style;
                var1 = _closure1_slot8;
                var4 = undefined;
                var6 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 8;
                var3 = var7[var1];
                var14 = var2.bind(var4)(var3);
                var13 = var14.useStateFromStores;
                var3 = _closure1_slot4;
                var12 = new Array(1);
                var12[0] = var3;
                var9 = new Array(1);
                var9[0] = var10;
                var3 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.isLocalMute;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var13.bind(var14)(var12, var3, var9);
                var1 = var7[var1];
                var9 = var2.bind(var4)(var1);
                var7 = var9.useStateFromStores;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = new Array(2);
                var1[0] = var11;
                var1[1] = var10;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot5;
                    var2 = var3.getVoiceStateForChannel;
                    var1 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var9 = var7.bind(var9)(var2, var0, var1);
                var0 = null;
                var2 = var0 == var9;
                var1 = undefined;
                if (var2) {
                    _fun69213_ip = 173;
                    continue _fun69213
                }
            case 163:
                var2 = var9.isVoiceMuted;
                var1 = var2.bind(var9)();
            case 173:
                var2 = var0 != var1;
                if (!var2) {
                    _fun69213_ip = 183;
                    continue _fun69213
                }
            case 180:
                var2 = var1;
            case 183:
                var1 = var0 == var9;
                var7 = undefined;
                if (var1) {
                    _fun69213_ip = 202;
                    continue _fun69213
                }
            case 192:
                var1 = var9.isVoiceDeafened;
                var7 = var1.bind(var9)();
            case 202:
                var1 = var0 != var7;
                if (!var1) {
                    _fun69213_ip = 212;
                    continue _fun69213
                }
            case 209:
                var1 = var7;
            case 212:
                if (var3) {
                    _fun69213_ip = 273;
                    continue _fun69213
                }
            case 215:
                if (var1) {
                    _fun69213_ip = 249;
                    continue _fun69213
                }
            case 218:
                var11 = undefined;
                var7 = false;
                if (!var2) {
                    _fun69213_ip = 295;
                    continue _fun69213
                }
            case 225:
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 11;
                var2 = var9[var2];
                var11 = var3.bind(var4)(var2);
                var7 = false;
                _fun69213_ip = 295;
                continue _fun69213;
            case 249:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 10;
                var1 = var3[var1];
                var11 = var2.bind(var4)(var1);
                var7 = false;
                _fun69213_ip = 295;
                continue _fun69213;
            case 273:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var11 = var2.bind(var4)(var1);
                var7 = true;
            case 295:
                var1 = var0 == var11;
                var0 = null;
                if (var1) {
                    _fun69213_ip = 438;
                    continue _fun69213
                }
            case 307:
                var3 = _closure1_slot7;
                var2 = _closure1_slot3;
                var1 = {};
                var9 = var6.voiceStatusWrapper;
                var6 = new Array(2);
                var6[0] = var9;
                var6[1] = var8;
                var1.style = var6;
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var8 = 12;
                var5 = var10[var8];
                var6 = var9.bind(var4)(var5);
                var5 = {};
                var5.source = var11;
                var8 = var10[var8];
                var8 = var9.bind(var4)(var8);
                var8 = var8.Sizes;
                var8 = var8.SMALL;
                var5.size = var8;
                var8 = 7;
                var8 = var10[var8];
                var8 = var9.bind(var4)(var8);
                var8 = var8.unsafe_rawColors;
                var8 = var8.BLACK;
                var5.color = var8;
                var5.disableColor = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 438:
                return var0;
        }
    };
    var4 = var4.bind(var8)(var3);
    var5 = var8.memo;
    var3 = function(arg0) { // Environment: var1
        _fun69216: for (var _fun69216_ip = 0;;) switch (_fun69216_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.userId;
                var _closure2_slot0 = var9;
                var10 = var1.channelId;
                var _closure2_slot1 = var10;
                var7 = var1.style;
                var1 = _closure1_slot8;
                var4 = undefined;
                var6 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 8;
                var1 = var3[var1];
                var8 = var2.bind(var4)(var1);
                var3 = var8.useStateFromStores;
                var1 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = new Array(2);
                var1[0] = var10;
                var1[1] = var9;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot6;
                    var2 = var3.isModerator;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0 = var3.bind(var8)(var2, var0, var1);
                var10 = undefined;
                if (!var0) {
                    _fun69216_ip = 129;
                    continue _fun69216
                }
            case 109:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 13;
                var0 = var2[var0];
                var10 = var1.bind(var4)(var0);
            case 129:
                var0 = null;
                var1 = var0 == var10;
                if (var1) {
                    _fun69216_ip = 267;
                    continue _fun69216
                }
            case 141:
                var3 = _closure1_slot7;
                var2 = _closure1_slot3;
                var1 = {};
                var8 = var6.moderatorStatusWrapper;
                var6 = new Array(2);
                var6[0] = var8;
                var6[1] = var7;
                var1.style = var6;
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var7 = 12;
                var5 = var9[var7];
                var6 = var8.bind(var4)(var5);
                var5 = {};
                var5.source = var10;
                var7 = var9[var7];
                var7 = var8.bind(var4)(var7);
                var7 = var7.Sizes;
                var7 = var7.SMALL;
                var5.size = var7;
                var7 = 7;
                var7 = var9[var7];
                var7 = var8.bind(var4)(var7);
                var7 = var7.unsafe_rawColors;
                var7 = var7.BLACK;
                var5.color = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 267:
                return var0;
        }
    };
    var3 = var5.bind(var8)(var3);
    var5 = 16;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/stage_channels/native/components/SpeakerTileStatuses.tsx';
    var5 = var6.bind(var7)(var5);
    var2.VoiceStatus = var4;
    var2.ModeratorStatus = var3;
    var3 = function() { // Environment: var1
        var1 = _closure1_slot8;
        var3 = undefined;
        var7 = var1.bind(var3)();
        var2 = _closure1_slot7;
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var4 = 12;
        var0 = var6[var4];
        var1 = var5.bind(var3)(var0);
        var0 = {};
        var7 = var7.restricted;
        var0.style = var7;
        var7 = 14;
        var7 = var6[var7];
        var7 = var5.bind(var3)(var7);
        var0.source = var7;
        var4 = var6[var4];
        var4 = var5.bind(var3)(var4);
        var4 = var4.Sizes;
        var4 = var4.EXTRA_SMALL;
        var0.size = var4;
        var4 = 7;
        var4 = var6[var4];
        var4 = var5.bind(var3)(var4);
        var4 = var4.unsafe_rawColors;
        var4 = var4.RED_400;
        var0.color = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.BlockedStatus = var3;
    var1 = function() { // Environment: var1
        var1 = _closure1_slot8;
        var3 = undefined;
        var7 = var1.bind(var3)();
        var2 = _closure1_slot7;
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var4 = 12;
        var0 = var6[var4];
        var1 = var5.bind(var3)(var0);
        var0 = {};
        var7 = var7.restricted;
        var0.style = var7;
        var7 = 15;
        var7 = var6[var7];
        var7 = var5.bind(var3)(var7);
        var0.source = var7;
        var4 = var6[var4];
        var4 = var5.bind(var3)(var4);
        var4 = var4.Sizes;
        var4 = var4.EXTRA_SMALL;
        var0.size = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.IgnoredStatus = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3437, 3482, 4212, 33, 1297, 671, 566, 8456, 5729, 5730, 4047, 8619, 8620, 7319, 2]);