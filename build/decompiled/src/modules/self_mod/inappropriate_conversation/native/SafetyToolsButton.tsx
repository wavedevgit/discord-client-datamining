// modules/self_mod/inappropriate_conversation/native/SafetyToolsButton.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 5;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.unsafe_rawColors;
    var9 = var9.BRAND_500;
    var8.backgroundColor = var9;
    var3.safetyToolsButton = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/self_mod/inappropriate_conversation/native/SafetyToolsButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: SafetyToolsButton, environment: var1
        var0 = arg0;
        var16 = var0.channelId;
        var _closure2_slot0 = var16;
        var17 = var0.recipientId;
        var _closure2_slot1 = var17;
        var15 = var0.warningId;
        var _closure2_slot2 = var15;
        var7 = var0.warningType;
        var _closure2_slot3 = var7;
        var2 = _closure1_slot7;
        var3 = undefined;
        var6 = var2.bind(var3)();
        var10 = _closure1_slot0;
        var11 = _closure1_slot2;
        var2 = 6;
        var2 = var11[var2];
        var4 = var10.bind(var3)(var2);
        var2 = var4.useSafetyToolsButtonTooltipForChannel;
        var2 = var2.bind(var4)(var16);
        var _closure2_slot4 = var2;
        var4 = 7;
        var4 = var11[var4];
        var5 = var10.bind(var3)(var4);
        var4 = var5.useShouldShowInitialSafetyToolsButtonTooltip;
        var4 = var4.bind(var5)(var16);
        var _closure2_slot5 = var4;
        var8 = _closure1_slot4;
        var9 = var8.useState;
        var5 = false;
        var5 = var9.bind(var8)(var5);
        var18 = _closure1_slot3;
        var14 = 2;
        var9 = var18.bind(var3)(var5, var14);
        var12 = 0;
        var5 = var9[var12];
        var _closure2_slot6 = var5;
        var13 = 1;
        var9 = var9[var13];
        var _closure2_slot7 = var9;
        var20 = var8.useCallback;
        var19 = new Array(2);
        var19[0] = var4;
        var19[1] = var2;
        var9 = function() { // Environment: var1
            _fun72205: for (var _fun72205_ip = 0;;) switch (_fun72205_ip) {
                case 0:
                    var1 = _closure2_slot5;
                    if (var1) {
                        _fun72205_ip = 87;
                        continue _fun72205
                    }
                case 10:
                    var1 = _closure2_slot4;
                    var0 = null;
                    var1 = var0 != var1;
                    if (!var1) {
                        _fun72205_ip = 85;
                        continue _fun72205
                    }
                case 23:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 8;
                    var2 = var6[var1];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1.kCN9i0;
                    var0 = var2.bind(var3)(var1);
                case 85:
                    _fun72205_ip = 149;
                    continue _fun72205;
                case 87:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 8;
                    var2 = var6[var1];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1["16QyDv"];
                    var0 = var2.bind(var3)(var1);
                case 149:
                    return var0;
            }
        };
        var19 = var20.bind(var8)(var9, var19);
        var _closure2_slot8 = var19;
        var20 = var8.useState;
        var9 = var19.bind(var3)();
        var9 = var20.bind(var8)(var9);
        var9 = var18.bind(var3)(var9, var14);
        var12 = var9[var12];
        var _closure2_slot9 = var12;
        var9 = var9[var13];
        var _closure2_slot10 = var9;
        var13 = var8.useMemo;
        var9 = new Array(3);
        var9[0] = var5;
        var9[1] = var2;
        var9[2] = var4;
        var5 = function() { // Environment: var1
            _fun72206: for (var _fun72206_ip = 0;;) switch (_fun72206_ip) {
                case 0:
                    var0 = _closure2_slot6;
                    if (!var0) {
                        _fun72206_ip = 30;
                        continue _fun72206
                    }
                case 10:
                    var3 = _closure2_slot4;
                    var1 = null;
                    var1 = var1 != var3;
                    if (var1) {
                        _fun72206_ip = 27;
                        continue _fun72206
                    }
                case 23:
                    var1 = _closure2_slot5;
                case 27:
                    var0 = var1;
                case 30:
                    return var0;
            }
        };
        var13 = var13.bind(var8)(var5, var9);
        var _closure2_slot11 = var13;
        var14 = var8.useCallback;
        var9 = new Array(5);
        var9[0] = var16;
        var9[1] = var15;
        var9[2] = var7;
        var9[3] = var17;
        var9[4] = var2;
        var5 = function(arg0) { // Environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.trackNamedViewEvent;
            var1 = {};
            var5 = _closure2_slot0;
            var1.channelId = var5;
            var5 = _closure2_slot2;
            var1.warningId = var5;
            var5 = _closure2_slot3;
            var1.warningType = var5;
            var5 = _closure2_slot1;
            var1.senderId = var5;
            var5 = arg0;
            var1.viewName = var5;
            var5 = _closure2_slot4;
            var4 = null;
            var4 = var4 != var5;
            var1.isNudgeWarning = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var5 = var14.bind(var8)(var5, var9);
        var _closure2_slot12 = var5;
        var18 = var8.useEffect;
        var14 = function() { // Environment: var1
            var0 = global;
            var3 = var0.setTimeout;
            var0 = undefined;
            var2 = function() { // Environment: var1
                var2 = _closure2_slot7;
                var0 = undefined;
                var1 = true;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = 5;
            var1 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var9 = new Array(0);
        var9 = var18.bind(var8)(var14, var9);
        var9 = _closure1_slot1;
        var14 = 10;
        var14 = var11[var14];
        var18 = var9.bind(var3)(var14);
        var14 = function() { // Environment: var1
            var2 = _closure2_slot12;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var3.bind(var0)(var1);
            var1 = var1.ViewNameTypes;
            var1 = var1.SAFETY_TOOLS_BUTTON;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var14 = var18.bind(var3)(var14);
        var18 = var8.useEffect;
        var14 = new Array(4);
        var14[0] = var19;
        var14[1] = var13;
        var14[2] = var4;
        var14[3] = var5;
        var5 = function() { // Environment: var1
            _fun72211: for (var _fun72211_ip = 0;;) switch (_fun72211_ip) {
                case 0:
                    var0 = _closure2_slot11;
                    if (!var0) {
                        _fun72211_ip = 17;
                        continue _fun72211
                    }
                case 10:
                    var2 = _closure2_slot5;
                    var0 = !var2;
                case 17:
                    if (!var0) {
                        _fun72211_ip = 66;
                        continue _fun72211
                    }
                case 20:
                    var3 = _closure2_slot12;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 9;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var4.bind(var2)(var0);
                    var0 = var0.ViewNameTypes;
                    var0 = var0.SAFETY_TOOLS_NUDGE_TOOLTIP;
                    var0 = var3.bind(var2)(var0);
                case 66:
                    var2 = _closure2_slot8;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var3 = null;
                    if (!(var3 != var2)) {
                        _fun72211_ip = 91;
                        continue _fun72211
                    }
                case 82:
                    var1 = _closure2_slot10;
                    var1 = var1.bind(var0)(var2);
                case 91:
                    return var0;
            }
        };
        var5 = var18.bind(var8)(var5, var14);
        var14 = var8.useCallback;
        var5 = new Array(3);
        var5[0] = var16;
        var5[1] = var2;
        var5[2] = var4;
        var4 = function() { // Environment: var1
            _fun72212: for (var _fun72212_ip = 0;;) switch (_fun72212_ip) {
                case 0:
                    var1 = _closure2_slot5;
                    if (!var1) {
                        _fun72212_ip = 50;
                        continue _fun72212
                    }
                case 10:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.acknowledgeChannelSafetyWarningTooltip;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                case 50:
                    var2 = _closure2_slot4;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun72212_ip = 118;
                        continue _fun72212
                    }
                case 60:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dismissChannelSafetyWarnings;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot4;
                    var4 = var0.id;
                    var0 = new Array(1);
                    var0[0] = var4;
                    var0 = var2.bind(var3)(var1, var0);
                case 118:
                    var0 = undefined;
                    return var0;
            }
        };
        var14 = var14.bind(var8)(var4, var5);
        var _closure2_slot13 = var14;
        var5 = var8.useCallback;
        var4 = new Array(6);
        var4[0] = var17;
        var4[1] = var14;
        var4[2] = var16;
        var4[3] = var15;
        var4[4] = var7;
        var4[5] = var2;
        var2 = function() { // Environment: var1
            _fun72213: for (var _fun72213_ip = 0;;) switch (_fun72213_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    var4 = null;
                    if (!(var4 != var0)) {
                        _fun72213_ip = 173;
                        continue _fun72213
                    }
                case 16:
                    var0 = _closure2_slot13;
                    var7 = undefined;
                    var0 = var0.bind(var7)();
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 12;
                    var0 = var8[var0];
                    var1 = var6.bind(var7)(var0);
                    var0 = var1.openSafetyToolsActionSheet;
                    var12 = _closure2_slot0;
                    var11 = _closure2_slot1;
                    var10 = _closure2_slot2;
                    var9 = _closure2_slot3;
                    var17 = var1;
                    var16 = var12;
                    var15 = var11;
                    var14 = var10;
                    var13 = var9;
                    var0 = var17[var0](var16, var15, var14, var13, var12);
                    var5 = 9;
                    var0 = var8[var5];
                    var2 = var6.bind(var7)(var0);
                    var1 = var2.trackCtaEvent;
                    var0 = {};
                    var0.channelId = var12;
                    var0.senderId = var11;
                    var0.warningId = var10;
                    var0.warningType = var9;
                    var5 = var8[var5];
                    var5 = var6.bind(var7)(var5);
                    var5 = var5.CtaEventTypes;
                    var5 = var5.USER_SAFETY_TOOLS_BUTTON_CLICK;
                    var0.cta = var5;
                    var3 = _closure2_slot4;
                    var3 = var4 != var3;
                    var0.isNudgeWarning = var3;
                    var0 = var1.bind(var2)(var0);
                case 173:
                    var0 = undefined;
                    return var0;
            }
        };
        var7 = var5.bind(var8)(var2, var4);
        var4 = var8.useRef;
        var2 = null;
        var4 = var4.bind(var8)(var2);
        var5 = var8.useMemo;
        var2 = new Array(3);
        var2[0] = var14;
        var2[1] = var13;
        var2[2] = var12;
        var1 = function() { // Environment: var1
            _fun72214: for (var _fun72214_ip = 0;;) switch (_fun72214_ip) {
                case 0:
                    var0 = {};
                    var1 = 'bottom';
                    var0.position = var1;
                    var3 = _closure2_slot9;
                    var2 = null;
                    var3 = var2 != var3;
                    var2 = '';
                    if (!var3) {
                        _fun72214_ip = 34;
                        continue _fun72214
                    }
                case 30:
                    var2 = _closure2_slot9;
                case 34:
                    var0.label = var2;
                    var1 = _closure2_slot11;
                    var0.visible = var1;
                    var1 = function() { // Original name: onPress, environment: var1
                        var1 = _closure2_slot13;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                    };
                    var0.onPress = var1;
                    return var0;
            }
        };
        var5 = var5.bind(var8)(var1, var2);
        var1 = 13;
        var1 = var11[var1];
        var2 = var10.bind(var3)(var1);
        var1 = var2.useTooltip;
        var1 = var1.bind(var2)(var4, var5);
        var2 = _closure1_slot6;
        var1 = _closure1_slot5;
        var0 = {};
        var0.ref = var4;
        var4 = 14;
        var4 = var11[var4];
        var5 = var9.bind(var3)(var4);
        var4 = {};
        var8 = true;
        var4.noMargin = var8;
        var8 = 5;
        var8 = var11[var8];
        var8 = var9.bind(var3)(var8);
        var8 = var8.unsafe_rawColors;
        var8 = var8.WHITE;
        var4.color = var8;
        var8 = 15;
        var8 = var11[var8];
        var8 = var9.bind(var3)(var8);
        var4.source = var8;
        var4.onPress = var7;
        var7 = 8;
        var8 = var11[var7];
        var8 = var10.bind(var3)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var7 = var11[var7];
        var7 = var10.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.rpc2qv;
        var7 = var8.bind(var9)(var7);
        var4.accessibilityLabel = var7;
        var6 = var6.safetyToolsButton;
        var4.style = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.SafetyToolsButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 671, 8999, 9000, 1234, 9002, 4062, 9003, 9004, 6980, 8948, 5411, 2]);