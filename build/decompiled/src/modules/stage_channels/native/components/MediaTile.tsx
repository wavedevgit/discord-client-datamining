// modules/stage_channels/native/components/MediaTile.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var10 = 1;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var7 = var3.useWindowDimensions;
    var _closure1_slot3 = var7;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ParticipantTypes;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flex': 1,
        'marginHorizontal': 4,
        'marginVertical': 4
    };
    var3.container = var9;
    var9 = {};
    var9.flex = var10;
    var10 = 6;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var9.borderRadius = var10;
    var3.media = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot8 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun69163: for (var _fun69163_ip = 0;;) switch (_fun69163_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.channel;
                var _closure2_slot0 = var9;
                var10 = var1.participant;
                var _closure2_slot1 = var10;
                var16 = var1.size;
                var1 = _closure1_slot8;
                var4 = undefined;
                var7 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var8 = 7;
                var1 = var3[var8];
                var6 = var2.bind(var4)(var1);
                var1 = var6.useSpeakerTileStyles;
                var18 = var1.bind(var6)();
                var1 = _closure1_slot3;
                var1 = var1.bind(var4)();
                var15 = var1.width;
                var1 = 8;
                var1 = var3[var1];
                var6 = var2.bind(var4)(var1);
                var1 = var6.useIsScreenLandscape;
                var14 = var1.bind(var6)();
                var1 = 9;
                var1 = var3[var1];
                var6 = var2.bind(var4)(var1);
                var3 = var6.useStateFromStores;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var11 = var9.id;
                var1 = new Array(2);
                var1[0] = var11;
                var10 = var10.id;
                var1[1] = var10;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot5;
                    var2 = var3.getParticipant;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var0 = _closure2_slot1;
                    var0 = var0.id;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var10 = var3.bind(var6)(var2, var0, var1);
                var3 = null;
                var1 = var3 == var10;
                var0 = null;
                if (var1) {
                    _fun69163_ip = 398;
                    continue _fun69163
                }
            case 186:
                var2 = var10.type;
                var1 = _closure1_slot6;
                var1 = var1.ACTIVITY;
                var0 = null;
                if (!(var2 !== var1)) {
                    _fun69163_ip = 398;
                    continue _fun69163
                }
            case 210:
                var3 = _closure1_slot7;
                var2 = _closure1_slot4;
                var1 = {};
                var11 = var7.container;
                var6 = new Array(3);
                var6[0] = var11;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var13 = var12[var8];
                var17 = var11.bind(var4)(var13);
                var13 = var17.getSizeStyle;
                var13 = var13.bind(var17)(var16, var18);
                var6[1] = var13;
                var8 = var12[var8];
                var13 = var11.bind(var4)(var8);
                var8 = var13.getTileWidthStyle;
                var8 = var8.bind(var13)(var16, var15, var14);
                var6[2] = var8;
                var1.style = var6;
                var6 = _closure1_slot1;
                var5 = 10;
                var5 = var12[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {
                    'hasBottomSafeArea': false,
                    'hasLeftSafeArea': false,
                    'hasRightSafeArea': false,
                    'hasTopSafeArea': false
                };
                var8 = false;
                var5.participant = var10;
                var10 = 11;
                var10 = var12[var10];
                var10 = var11.bind(var4)(var10);
                var10 = var10.AvatarSizes;
                var10 = var10.XLARGE;
                var5.avatarSize = var10;
                var5.channel = var9;
                var5.shrinkStreamEmptyState = var8;
                var7 = var7.media;
                var5.contentStyle = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 398:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/native/components/MediaTile.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3902, 3482, 33, 1297, 671, 8611, 5319, 566, 8621, 5409, 2]);