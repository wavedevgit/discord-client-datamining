// modules/voice_panel/native/controls/buttons/VoicePanelChatButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var6 = var3.Fragment;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'position': 'absolute',
        'justifyContent': 'center',
        'alignItems': 'center',
        'width': '100%',
        'height': '100%'
    };
    var3.iconContainer = var8;
    var8 = {
        'position': 'absolute',
        'zIndex': 1,
        'width': 10,
        'height': 10,
        'borderRadius': null,
        'top': 0,
        'right': 0
    };
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var8.borderRadius = var11;
    var3.badge = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.unsafe_rawColors;
    var9 = var9.RED_400;
    var8.backgroundColor = var9;
    var3.redBG = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/controls/buttons/VoicePanelChatButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ChatButton, environment: var1
        var0 = arg0;
        var12 = var0.props;
        var _closure2_slot0 = var12;
        var14 = var0.openTab;
        var _closure2_slot1 = var14;
        var8 = var0.wrapperSpecs;
        var7 = _closure1_slot3;
        var5 = var7.useContext;
        var1 = _closure1_slot1;
        var16 = _closure1_slot2;
        var2 = 5;
        var2 = var16[var2];
        var3 = undefined;
        var2 = var1.bind(var3)(var2);
        var2 = var5.bind(var7)(var2);
        var5 = var2.channelId;
        var _closure2_slot2 = var5;
        var2 = var2.connected;
        var _closure2_slot3 = var2;
        var5 = _closure1_slot8;
        var10 = var5.bind(var3)();
        var _closure2_slot4 = var10;
        var15 = _closure1_slot0;
        var5 = 6;
        var5 = var16[var5];
        var6 = var15.bind(var3)(var5);
        var5 = var6.useVoicePanelButtonStyles;
        var9 = var5.bind(var6)(var8);
        var _closure2_slot5 = var9;
        var5 = 7;
        var5 = var16[var5];
        var11 = var15.bind(var3)(var5);
        var8 = var11.useStateFromStores;
        var5 = _closure1_slot4;
        var6 = new Array(1);
        var6[0] = var5;
        var5 = function() { // Environment: var4
            _fun112230: for (var _fun112230_ip = 0;;) switch (_fun112230_ip) {
                case 0:
                    var4 = _closure1_slot4;
                    var3 = var4.getMentionCount;
                    var0 = _closure2_slot2;
                    var3 = var3.bind(var4)(var0);
                    var0 = 0;
                    var3 = var3 > var0;
                    var0 = 'mention';
                    if (var3) {
                        _fun112230_ip = 69;
                        continue _fun112230
                    }
                case 38:
                    var3 = _closure1_slot4;
                    var2 = var3.hasUnread;
                    var1 = _closure2_slot2;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    if (!var2) {
                        _fun112230_ip = 66;
                        continue _fun112230
                    }
                case 62:
                    var1 = 'unread';
                case 66:
                    var0 = var1;
                case 69:
                    return var0;
            }
        };
        var11 = var8.bind(var11)(var6, var5);
        var _closure2_slot6 = var11;
        var5 = var9.iconBg;
        var13 = var5.backgroundColor;
        var _closure2_slot7 = var13;
        var8 = var7.useMemo;
        var6 = new Array(3);
        var6[0] = var11;
        var5 = var10.redBG;
        var6[1] = var5;
        var5 = var9.iconBadgeIndicator;
        var6[2] = var5;
        var5 = function() { // Environment: var4
            _fun112231: for (var _fun112231_ip = 0;;) switch (_fun112231_ip) {
                case 0:
                    var2 = _closure2_slot6;
                    var0 = 'mention';
                    if (!(var0 !== var2)) {
                        _fun112231_ip = 27;
                        continue _fun112231
                    }
                case 15:
                    var0 = _closure2_slot5;
                    var0 = var0.iconBadgeIndicator;
                    _fun112231_ip = 37;
                    continue _fun112231;
                case 27:
                    var1 = _closure2_slot4;
                    var0 = var1.redBG;
                case 37:
                    return var0;
            }
        };
        var8 = var8.bind(var7)(var5, var6);
        var _closure2_slot8 = var8;
        var6 = var7.useCallback;
        var5 = new Array(2);
        var5[0] = var14;
        var5[1] = var2;
        var2 = function() { // Environment: var4
            _fun112232: for (var _fun112232_ip = 0;;) switch (_fun112232_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var1 = {};
                    var3 = 'chat';
                    var1.tab = var3;
                    var3 = _closure2_slot3;
                    var0 = var3.get;
                    var3 = var0.bind(var3)();
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 8;
                    var4 = var4[var0];
                    var0 = undefined;
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.VoicePanelTabAnalyticsSources;
                    if (var3) {
                        _fun112232_ip = 73;
                        continue _fun112232
                    }
                case 65:
                    var3 = var4.PREJOIN_BUTTON;
                    _fun112232_ip = 79;
                    continue _fun112232;
                case 73:
                    var3 = var4.CONNECTED_BUTTON;
                case 79:
                    var1.source = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var5 = var6.bind(var7)(var2, var5);
        var2 = _closure1_slot5;
        var0 = 9;
        var0 = var16[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var0.onPress = var5;
        var0.props = var12;
        var5 = 10;
        var6 = var16[var5];
        var6 = var15.bind(var3)(var6);
        var14 = var6.intl;
        var6 = var14.string;
        var5 = var16[var5];
        var5 = var15.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5["5KxXrK"];
        var5 = var6.bind(var14)(var5);
        var0.accessibilityLabel = var5;
        var6 = var7.useMemo;
        var5 = new Array(7);
        var5[0] = var13;
        var12 = var12.width;
        var5[1] = var12;
        var5[2] = var11;
        var11 = var10.iconContainer;
        var5[3] = var11;
        var10 = var10.badge;
        var5[4] = var10;
        var9 = var9.iconFill;
        var9 = var9.color;
        var5[5] = var9;
        var5[6] = var8;
        var4 = function() { // Environment: var4
            _fun112233: for (var _fun112233_ip = 0;;) switch (_fun112233_ip) {
                case 0:
                    var3 = _closure1_slot7;
                    var2 = _closure1_slot6;
                    var1 = {};
                    var12 = _closure1_slot5;
                    var11 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var0 = 11;
                    var4 = var15[var0];
                    var0 = undefined;
                    var8 = var11.bind(var0)(var4);
                    var4 = {
                        'fill': null,
                        'circleRadius': null,
                        'cutoutRadius': 8,
                        'enableCutout': null,
                        'cutoutPositionInDegrees': 45,
                        'alignBadgeEdgeWithCircleEdge': true,
                        'badgeRadius': 5,
                        'scaleToPixelDensity': true
                    };
                    var5 = _closure2_slot7;
                    var4.fill = var5;
                    var5 = _closure2_slot0;
                    var7 = var5.width;
                    var5 = 2;
                    var5 = var7 / var5;
                    var4.circleRadius = var5;
                    var7 = _closure2_slot6;
                    var5 = null;
                    var9 = var5 != var7;
                    var4.enableCutout = var9;
                    var8 = var12.bind(var0)(var8, var4);
                    var4 = new Array(3);
                    var4[0] = var8;
                    var9 = 12;
                    var8 = var15[var9];
                    var11 = var11.bind(var0)(var8);
                    var8 = {};
                    var13 = _closure2_slot4;
                    var13 = var13.iconContainer;
                    var8.style = var13;
                    var14 = _closure1_slot0;
                    var13 = 13;
                    var13 = var15[var13];
                    var13 = var14.bind(var0)(var13);
                    var14 = var13.ChatIcon;
                    var13 = {};
                    var15 = _closure2_slot5;
                    var15 = var15.iconFill;
                    var15 = var15.color;
                    var13.color = var15;
                    var13 = var12.bind(var0)(var14, var13);
                    var8.children = var13;
                    var8 = var12.bind(var0)(var11, var8);
                    var4[1] = var8;
                    var5 = var5 != var7;
                    if (!var5) {
                        _fun112233_ip = 275;
                        continue _fun112233
                    }
                case 216:
                    var8 = _closure1_slot5;
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var9];
                    var7 = var7.bind(var0)(var6);
                    var6 = {};
                    var9 = _closure2_slot4;
                    var11 = var9.badge;
                    var9 = new Array(2);
                    var9[0] = var11;
                    var10 = _closure2_slot8;
                    var9[1] = var10;
                    var6.style = var9;
                    var5 = var8.bind(var0)(var7, var6);
                case 275:
                    var4[2] = var5;
                    var1.children = var4;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
            }
        };
        var4 = var6.bind(var7)(var4, var5);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3907, 33, 1297, 671, 11837, 14372, 566, 14360, 14373, 1234, 14381, 6418, 4800, 2]);