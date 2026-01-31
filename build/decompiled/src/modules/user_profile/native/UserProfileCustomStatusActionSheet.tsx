// modules/user_profile/native/UserProfileCustomStatusActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var13;
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
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var10 = 2;
    var3 = var5[var10];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.AVATAR_CONTAINER_SIZE;
    var12 = var3.AVATAR_CUSTOM_STATUS_GAP;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var11 = var3.ACTION_SHEET_BACKGROUND_COLOR;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var14 = 'row';
    var8.flexDirection = var14;
    var8.columnGap = var12;
    var12 = 7;
    var12 = var5[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.marginHorizontal = var12;
    var3.statusPreviewContainer = var8;
    var8 = {};
    var8.height = var9;
    var8.width = var9;
    var12 = 'center';
    var8.alignItems = var12;
    var8.justifyContent = var12;
    var3.avatarContainer = var8;
    var8 = {};
    var8.backgroundColor = var11;
    var3.avatarStatus = var8;
    var8 = {
        'marginTop': null,
        'flexShrink': 1,
        'flexGrow': 1
    };
    var10 = var9 / var10;
    var9 = 10;
    var9 = var10 + var9;
    var8.marginTop = var9;
    var3.customStatusBubble = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileCustomStatusActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun61830: for (var _fun61830_ip = 0;;) switch (_fun61830_ip) {
            case 0:
                var1 = arg0;
                var16 = var1.user;
                var _closure2_slot0 = var16;
                var6 = var1.guildId;
                var5 = var1.channelId;
                var11 = var1.previewEmoji;
                var10 = var1.previewText;
                var1 = _closure1_slot7;
                var3 = undefined;
                var12 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 8;
                var1 = var7[var1];
                var9 = var2.bind(var3)(var1);
                var8 = var9.useStateFromStores;
                var1 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = new Array(1);
                var1[0] = var16;
                var0 = function() { // Environment: var0
                    _fun61831: for (var _fun61831_ip = 0;;) switch (_fun61831_ip) {
                        case 0:
                            var1 = _closure1_slot4;
                            var0 = var1.getCurrentUser;
                            var0 = var0.bind(var1)();
                            var1 = null;
                            var2 = var1 == var0;
                            var1 = undefined;
                            if (var2) {
                                _fun61831_ip = 32;
                                continue _fun61831
                            }
                        case 27:
                            var1 = var0.id;
                        case 32:
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var0 = var1 === var0;
                            return var0;
                    }
                };
                var1 = var8.bind(var9)(var2, var0, var1);
                var2 = _closure1_slot1;
                var0 = 9;
                var0 = var7[var0];
                var8 = var2.bind(var3)(var0);
                var0 = var16.id;
                var13 = var8.bind(var3)(var0);
                var0 = 10;
                var0 = var7[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.useName;
                var9 = var0.bind(var2)(var6, var5, var16);
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 11;
                var2 = var7[var0];
                var2 = var6.bind(var3)(var2);
                var2 = var2.intl;
                if (var1) {
                    _fun61830_ip = 226;
                    continue _fun61830
                }
            case 185:
                var8 = var2.formatToPlainString;
                var1 = var7[var0];
                var1 = var6.bind(var3)(var1);
                var1 = var1.t;
                var5 = var1["pP5Aa+"];
                var1 = {};
                var1.username = var9;
                var5 = var8.bind(var2)(var5, var1);
                _fun61830_ip = 258;
                continue _fun61830;
            case 226:
                var1 = var2.string;
                var0 = var7[var0];
                var0 = var6.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.AHoLf4;
                var5 = var1.bind(var2)(var0);
            case 258:
                var2 = _closure1_slot5;
                var9 = _closure1_slot1;
                var14 = _closure1_slot2;
                var0 = 12;
                var0 = var14[var0];
                var1 = var9.bind(var3)(var0);
                var0 = {};
                var0.title = var5;
                var6 = _closure1_slot6;
                var5 = _closure1_slot3;
                var4 = {};
                var7 = var12.statusPreviewContainer;
                var4.style = var7;
                var7 = {};
                var8 = var12.avatarContainer;
                var7.style = var8;
                var8 = 13;
                var8 = var14[var8];
                var15 = var9.bind(var3)(var8);
                var8 = {};
                var8.user = var16;
                var16 = var12.avatarStatus;
                var8.statusStyle = var16;
                var8 = var2.bind(var3)(var15, var8);
                var7.children = var8;
                var8 = var2.bind(var3)(var5, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var8 = 14;
                var8 = var14[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {
                    'customStatusActivity': null,
                    'hasCustomProfileTheme': false,
                    'showFullStatus': true
                };
                var8.customStatusActivity = var13;
                var12 = var12.customStatusBubble;
                var8.style = var12;
                var8.previewEmoji = var11;
                var8.previewText = var10;
                var8 = var2.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1613, 6920, 4895, 33, 1297, 671, 566, 7707, 3920, 1234, 7709, 5696, 6932, 2]);