// modules/video_calls/native/components/ChannelCallBottomHeader.tsx
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
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Image;
    var _closure1_slot3 = var6;
    var3 = var3.Pressable;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var9 = {
        'marginRight': 8,
        'width': 16,
        'height': 16
    };
    var3 = 16;
    var10 = 6;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.WHITE;
    var9.tintColor = var10;
    var6.icon = var9;
    var9 = {};
    var10 = 12;
    var9.marginLeft = var10;
    var6.cancelButton = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot9 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/native/components/ChannelCallBottomHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun69408: for (var _fun69408_ip = 0;;) switch (_fun69408_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channel;
                var0 = _closure1_slot9;
                var4 = undefined;
                var12 = var0.bind(var4)();
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 7;
                var0 = var5[var0];
                var0 = var1.bind(var4)(var0);
                var1 = var0.bind(var4)();
                var _closure2_slot0 = var1;
                var0 = null;
                var5 = var0 == var1;
                var17 = undefined;
                if (var5) {
                    _fun69408_ip = 67;
                    continue _fun69408
                }
            case 62:
                var17 = var1.channelId;
            case 67:
                var11 = var3.id;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 8;
                var7 = var5[var3];
                var13 = var6.bind(var4)(var7);
                var9 = var13.useStateFromStores;
                var7 = _closure1_slot5;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = function() { // Environment: var2
                    var1 = _closure1_slot5;
                    var0 = var1.getAwaitingRemoteSessionInfo;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var16 = var9.bind(var13)(var8, var7);
                var3 = var5[var3];
                var7 = var6.bind(var4)(var3);
                var6 = var7.useStateFromStores;
                var8 = _closure1_slot6;
                var3 = new Array(1);
                var3[0] = var8;
                var2 = function() { // Environment: var2
                    _fun69410: for (var _fun69410_ip = 0;;) switch (_fun69410_ip) {
                        case 0:
                            var2 = _closure1_slot6;
                            var1 = var2.getSessionById;
                            var3 = _closure2_slot0;
                            var0 = null;
                            var5 = var0 == var3;
                            var3 = undefined;
                            if (var5) {
                                _fun69410_ip = 41;
                                continue _fun69410
                            }
                        case 31:
                            var4 = _closure2_slot0;
                            var3 = var4.sessionId;
                        case 41:
                            var4 = var0 != var3;
                            var0 = '';
                            if (!var4) {
                                _fun69410_ip = 55;
                                continue _fun69410
                            }
                        case 52:
                            var0 = var3;
                        case 55:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var15 = var6.bind(var7)(var3, var2);
                var3 = _closure1_slot1;
                var2 = 9;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var7 = var2.bind(var4)(var16);
                if (!(var0 == var1)) {
                    _fun69408_ip = 193;
                    continue _fun69408
                }
            case 186:
                if (!(var0 != var16)) {
                    _fun69408_ip = 575;
                    continue _fun69408
                }
            case 193:
                var2 = var0 == var16;
                var1 = undefined;
                if (var2) {
                    _fun69408_ip = 207;
                    continue _fun69408
                }
            case 202:
                var1 = var16.type;
            case 207:
                if (!(var0 == var1)) {
                    _fun69408_ip = 235;
                    continue _fun69408
                }
            case 211:
                var3 = var0 == var15;
                var2 = undefined;
                if (var3) {
                    _fun69408_ip = 232;
                    continue _fun69408
                }
            case 220:
                var3 = var15.clientInfo;
                var2 = var3.os;
            case 232:
                var1 = var2;
            case 235:
                var2 = var0 != var1;
                var14 = '';
                if (!var2) {
                    _fun69408_ip = 249;
                    continue _fun69408
                }
            case 246:
                var14 = var1;
            case 249:
                var3 = _closure1_slot8;
                var19 = _closure1_slot1;
                var18 = _closure1_slot2;
                var6 = 10;
                var1 = var18[var6];
                var2 = var19.bind(var4)(var1);
                var1 = {};
                var9 = _closure1_slot7;
                var8 = _closure1_slot3;
                var5 = {};
                var13 = 11;
                var13 = var18[var13];
                var13 = var19.bind(var4)(var13);
                var13 = var13.bind(var4)(var14);
                var5.source = var13;
                var13 = var12.icon;
                var5.style = var13;
                var8 = var9.bind(var4)(var8, var5);
                var5 = new Array(3);
                var5[0] = var8;
                var14 = _closure1_slot0;
                var6 = var18[var6];
                var6 = var14.bind(var4)(var6);
                var8 = var6.FocusedControlsBottomControlsHeaderText;
                var6 = {};
                var13 = 12;
                var13 = var18[var13];
                var14 = var14.bind(var4)(var13);
                var13 = var14.getConsoleConnectingText;
                var11 = var17 === var11;
                var11 = var13.bind(var14)(var15, var16, var11);
                var6.children = var11;
                var6 = var9.bind(var4)(var8, var6);
                var5[1] = var6;
                var6 = null;
                if (!var7) {
                    _fun69408_ip = 559;
                    continue _fun69408
                }
            case 401:
                var9 = _closure1_slot7;
                var8 = _closure1_slot4;
                var7 = {};
                var11 = 4;
                var7.hitSlop = var11;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var10 = 13;
                var10 = var16[var10];
                var10 = var15.bind(var4)(var10);
                var10 = var10.disconnectRemote;
                var7.onPress = var10;
                var10 = 14;
                var10 = var16[var10];
                var10 = var15.bind(var4)(var10);
                var11 = var10.Text;
                var10 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-link'
                };
                var12 = var12.cancelButton;
                var10.style = var12;
                var12 = 15;
                var13 = var16[var12];
                var13 = var15.bind(var4)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12["ETE/oC"];
                var12 = var13.bind(var14)(var12);
                var10.children = var12;
                var10 = var9.bind(var4)(var11, var10);
                var7.children = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 559:
                var5[2] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 575:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3480, 3481, 33, 1297, 671, 8254, 566, 8656, 8657, 8271, 8658, 8257, 3902, 1234, 2]);