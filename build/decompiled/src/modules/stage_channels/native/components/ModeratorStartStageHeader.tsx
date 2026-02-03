// modules/stage_channels/native/components/ModeratorStartStageHeader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot4 = var7;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'height': null,
        'flexDirection': 'row',
        'alignItems': 'center',
        'paddingHorizontal': 8,
        'marginTop': 4,
        'overflow': 'visible'
    };
    var10 = 4;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.NAV_BAR_HEIGHT;
    var9.height = var10;
    var3.header = var9;
    var9 = {
        'marginRight': 4,
        'marginLeft': 4
    };
    var3.chatButton = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot6 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun69435: for (var _fun69435_ip = 0;;) switch (_fun69435_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.channel;
                var0 = _closure1_slot6;
                var3 = undefined;
                var4 = var0.bind(var3)();
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 5;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var8.id;
                var0 = var1.bind(var3)(var0);
                var1 = null;
                var1 = var1 == var0;
                var6 = undefined;
                if (var1) {
                    _fun69435_ip = 68;
                    continue _fun69435
                }
            case 62:
                var6 = var0.speaker;
            case 68:
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var4.header;
                var0.style = var4;
                var4 = 'box-none';
                var0.pointerEvents = var4;
                var11 = _closure1_slot4;
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var9 = 6;
                var4 = var7[var9];
                var4 = var10.bind(var3)(var4);
                var12 = var4.HideStageChannelCallIcon;
                var4 = {};
                var4.channel = var8;
                var12 = var11.bind(var3)(var12, var4);
                var4 = new Array(4);
                var4[0] = var12;
                var7 = var7[var9];
                var7 = var10.bind(var3)(var7);
                var10 = var7.StageChannelCallHeader;
                var7 = {};
                var7.channel = var8;
                var7 = var11.bind(var3)(var10, var7);
                var4[1] = var7;
                if (!var6) {
                    _fun69435_ip = 226;
                    continue _fun69435
                }
            case 182:
                var11 = _closure1_slot4;
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var9];
                var7 = var10.bind(var3)(var7);
                var10 = var7.MusicMuteButton;
                var7 = {};
                var12 = var8.id;
                var7.channelId = var12;
                var6 = var11.bind(var3)(var10, var7);
            case 226:
                var4[2] = var6;
                var7 = _closure1_slot4;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var9];
                var5 = var6.bind(var3)(var5);
                var6 = var5.StageInviteButton;
                var5 = {};
                var8 = var8.id;
                var5.channelId = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/native/components/ModeratorStartStageHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 4698, 8629, 8618, 2]);