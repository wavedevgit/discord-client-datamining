// modules/voice_panel/native/shared/VoicePanelTitleButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: ChannelButtonIcons, environment: var1
        var0 = _closure1_slot10;
        var3 = undefined;
        var4 = var0.bind(var3)();
        var2 = _closure1_slot9;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var4.channelButtons;
        var0.style = var4;
        var7 = _closure1_slot8;
        var6 = _closure1_slot0;
        var10 = _closure1_slot2;
        var4 = 7;
        var4 = var10[var4];
        var4 = var6.bind(var3)(var4);
        var5 = var4.ShieldLockIcon;
        var4 = {};
        var9 = 'xs';
        var4.size = var9;
        var9 = 8;
        var11 = var10[var9];
        var11 = var6.bind(var3)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var9 = var10[var9];
        var9 = var6.bind(var3)(var9);
        var9 = var9.t;
        var9 = var9.VHXh8a;
        var9 = var11.bind(var12)(var9);
        var4.accessibilityLabel = var9;
        var5 = var7.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var7 = _closure1_slot8;
        var5 = 9;
        var5 = var10[var5];
        var5 = var6.bind(var3)(var5);
        var5 = var5.BaseTextButton;
        var6 = var5.Icon;
        var5 = {};
        var9 = _closure1_slot1;
        var8 = 10;
        var8 = var10[var8];
        var8 = var9.bind(var3)(var8);
        var5.source = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = function(arg0) { // Original name: ChannelButton, environment: var1
        _fun111610: for (var _fun111610_ip = 0;;) switch (_fun111610_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.channelId;
                var _closure2_slot0 = var6;
                var4 = var1.onPress;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 11;
                var1 = var12[var1];
                var3 = undefined;
                var7 = var11.bind(var3)(var1);
                var2 = var7.useStateFromStores;
                var8 = _closure1_slot6;
                var1 = new Array(1);
                var1[0] = var8;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot6;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var2.bind(var7)(var1, var0);
                var2 = _closure1_slot1;
                var0 = 12;
                var0 = var12[var0];
                var0 = var2.bind(var3)(var0);
                var8 = var0.bind(var3)(var1);
                var0 = 13;
                var0 = var12[var0];
                var2 = var11.bind(var3)(var0);
                var1 = var2.useIsCallSecureFramesVerified;
                var0 = {};
                var0.channelId = var6;
                var6 = var1.bind(var2)(var0);
                var2 = _closure1_slot8;
                var0 = 14;
                var0 = var12[var0];
                var0 = var11.bind(var3)(var0);
                var1 = var0.HeaderButton;
                var0 = {};
                var7 = 'button';
                var0.accessibilityRole = var7;
                var7 = 8;
                var9 = var12[var7];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var7 = var12[var7];
                var7 = var11.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7["Y2b7+e"];
                var7 = var9.bind(var10)(var7);
                var0.accessibilityHint = var7;
                var7 = null;
                var9 = var7 != var8;
                var7 = '???';
                if (!var9) {
                    _fun111610_ip = 226;
                    continue _fun111610
                }
            case 223:
                var7 = var8;
            case 226:
                var0.text = var7;
                if (var6) {
                    _fun111610_ip = 255;
                    continue _fun111610
                }
            case 233:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 10;
                var6 = var8[var6];
                var6 = var7.bind(var3)(var6);
                _fun111610_ip = 271;
                continue _fun111610;
            case 255:
                var9 = _closure1_slot8;
                var8 = _closure1_slot11;
                var7 = {};
                var6 = var9.bind(var3)(var8, var7);
            case 271:
                var0.icon = var6;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 15;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.spacing;
                var5 = var5.PX_4;
                var5 = -var5;
                var0.iconOpticalOffsetMargin = var5;
                var5 = 'end';
                var0.iconPosition = var5;
                var0.onPress = var4;
                var4 = 2;
                var0.maxFontSizeMultiplier = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function(arg0) { // Original name: StreamButton, environment: var1
        var0 = arg0;
        var1 = var0.participant;
        var4 = var0.onPress;
        var8 = _closure1_slot3;
        var5 = var8.useContext;
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var2 = 16;
        var2 = var7[var2];
        var3 = undefined;
        var2 = var6.bind(var3)(var2);
        var2 = var5.bind(var8)(var2);
        var9 = var2.guildId;
        var8 = var2.channelId;
        var2 = 17;
        var2 = var7[var2];
        var5 = var6.bind(var3)(var2);
        var2 = var5.useName;
        var1 = var1.user;
        var5 = var2.bind(var5)(var9, var8, var1);
        var2 = _closure1_slot8;
        var9 = _closure1_slot0;
        var0 = 14;
        var0 = var7[var0];
        var0 = var9.bind(var3)(var0);
        var1 = var0.HeaderButton;
        var0 = {};
        var8 = 'button';
        var0.accessibilityRole = var8;
        var8 = 8;
        var10 = var7[var8];
        var10 = var9.bind(var3)(var10);
        var12 = var10.intl;
        var11 = var12.string;
        var10 = var7[var8];
        var10 = var9.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10["Y2b7+e"];
        var10 = var11.bind(var12)(var10);
        var0.accessibilityHint = var10;
        var10 = var7[var8];
        var10 = var9.bind(var3)(var10);
        var11 = var10.intl;
        var10 = var11.formatToPlainString;
        var8 = var7[var8];
        var8 = var9.bind(var3)(var8);
        var8 = var8.t;
        var9 = var8.I0mOAs;
        var8 = {};
        var8.username = var5;
        var8 = var10.bind(var11)(var9, var8);
        var0.accessibilityLabel = var8;
        var0.text = var5;
        var5 = 18;
        var5 = var7[var5];
        var5 = var6.bind(var3)(var5);
        var0.icon = var5;
        var5 = 'start';
        var0.iconPosition = var5;
        var0.onPress = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = function(arg0) { // Original name: ActivityButton, environment: var1
        _fun111613: for (var _fun111613_ip = 0;;) switch (_fun111613_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.participant;
                var _closure2_slot0 = var2;
                var4 = var1.onPress;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 11;
                var1 = var11[var1];
                var3 = undefined;
                var6 = var10.bind(var3)(var1);
                var2 = var6.useStateFromStores;
                var7 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var7;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.getApplication;
                    var0 = _closure2_slot0;
                    var0 = var0.applicationId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var2.bind(var6)(var1, var0);
                var2 = _closure1_slot8;
                var0 = 14;
                var0 = var11[var0];
                var0 = var10.bind(var3)(var0);
                var1 = var0.HeaderButton;
                var0 = {};
                var6 = 'button';
                var0.accessibilityRole = var6;
                var6 = 8;
                var7 = var11[var6];
                var7 = var10.bind(var3)(var7);
                var9 = var7.intl;
                var7 = var9.string;
                var6 = var11[var6];
                var6 = var10.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6["Y2b7+e"];
                var6 = var7.bind(var9)(var6);
                var0.accessibilityHint = var6;
                var6 = null;
                var9 = var6 == var8;
                var7 = undefined;
                if (var9) {
                    _fun111613_ip = 175;
                    continue _fun111613
                }
            case 170:
                var7 = var8.name;
            case 175:
                var8 = var6 != var7;
                var6 = '???';
                if (!var8) {
                    _fun111613_ip = 191;
                    continue _fun111613
                }
            case 188:
                var6 = var7;
            case 191:
                var0.text = var6;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 19;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var0.icon = var5;
                var5 = 'start';
                var0.iconPosition = var5;
                var0.onPress = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function(arg0) { // Original name: UserButton, environment: var1
        _fun111615: for (var _fun111615_ip = 0;;) switch (_fun111615_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.participant;
                var4 = var0.onPress;
                var1 = _closure1_slot10;
                var3 = undefined;
                var1 = var1.bind(var3)();
                var7 = _closure1_slot3;
                var6 = var7.useContext;
                var5 = _closure1_slot1;
                var11 = _closure1_slot2;
                var2 = 16;
                var2 = var11[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var6.bind(var7)(var2);
                var7 = var2.guildId;
                var9 = var2.channelId;
                var2 = 17;
                var2 = var11[var2];
                var6 = var5.bind(var3)(var2);
                var5 = var6.useName;
                var2 = var8.user;
                var5 = var5.bind(var6)(var7, var9, var2);
                var10 = _closure1_slot0;
                var2 = 20;
                var2 = var11[var2];
                var6 = var10.bind(var3)(var2);
                var2 = var6.useVoicePanelHeaderUserStateIcons;
                var1 = var1.userIcons;
                var7 = var2.bind(var6)(var8, var7, var1);
                var2 = _closure1_slot8;
                var0 = 14;
                var0 = var11[var0];
                var0 = var10.bind(var3)(var0);
                var1 = var0.HeaderButton;
                var0 = {};
                var6 = 'button';
                var0.accessibilityRole = var6;
                var6 = 8;
                var8 = var11[var6];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var6 = var11[var6];
                var6 = var10.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6["Y2b7+e"];
                var6 = var8.bind(var9)(var6);
                var0.accessibilityHint = var6;
                var0.icon = var7;
                var6 = null;
                var7 = var6 != var7;
                var6 = undefined;
                if (!var7) {
                    _fun111615_ip = 240;
                    continue _fun111615
                }
            case 236:
                var6 = 'start';
            case 240:
                var0.iconPosition = var6;
                var0.text = var5;
                var0.onPress = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ParticipantTypes;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot8 = var7;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = -6;
    var9.marginLeft = var10;
    var3.userIcons = var9;
    var9 = {
        'alignItems': 'center',
        'flexDirection': 'row',
        'gap': 2
    };
    var3.channelButtons = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot10 = var3;
    var3 = var6.memo;
    var1 = function() { // Original name: VoicePanelTitleButton, environment: var1
        _fun111616: for (var _fun111616_ip = 0;;) switch (_fun111616_ip) {
            case 0:
                var7 = _closure1_slot3;
                var4 = var7.useContext;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 16;
                var2 = var6[var2];
                var3 = undefined;
                var2 = var5.bind(var3)(var2);
                var2 = var4.bind(var7)(var2);
                var8 = var2.guildId;
                var _closure2_slot0 = var8;
                var7 = var2.channelId;
                var _closure2_slot1 = var7;
                var10 = var2.focused;
                var4 = _closure1_slot0;
                var2 = 21;
                var2 = var6[var2];
                var9 = var4.bind(var3)(var2);
                var4 = var9.useDerivedStateFromSharedValue;
                var2 = function(arg0) { // Environment: var1
                    _fun111617: for (var _fun111617_ip = 0;;) switch (_fun111617_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun111617_ip = 19;
                                continue _fun111617
                            }
                        case 14:
                            var0 = var1.id;
                        case 19:
                            return var0;
                    }
                };
                var4 = var4.bind(var9)(var10, var2);
                var2 = 22;
                var2 = var6[var2];
                var2 = var5.bind(var3)(var2);
                var5 = var2.bind(var3)(var4, var7, var8);
                var6 = _closure1_slot3;
                var4 = var6.useCallback;
                var2 = new Array(2);
                var2[0] = var8;
                var2[1] = var7;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 23;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.openVoicePanelSettingsActionSheet;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var4 = var4.bind(var6)(var1, var2);
                var1 = null;
                if (!(var1 != var5)) {
                    _fun111616_ip = 217;
                    continue _fun111616
                }
            case 160:
                var2 = var5.type;
                var1 = _closure1_slot7;
                var1 = var1.STREAM;
                if (!(var2 !== var1)) {
                    _fun111616_ip = 297;
                    continue _fun111616
                }
            case 179:
                var2 = var5.type;
                var1 = _closure1_slot7;
                var1 = var1.ACTIVITY;
                if (!(var2 !== var1)) {
                    _fun111616_ip = 270;
                    continue _fun111616
                }
            case 198:
                var2 = var5.type;
                var1 = _closure1_slot7;
                var1 = var1.USER;
                if (!(var2 !== var1)) {
                    _fun111616_ip = 243;
                    continue _fun111616
                }
            case 217:
                var6 = _closure1_slot8;
                var2 = _closure1_slot12;
                var1 = {};
                var1.channelId = var7;
                var1.onPress = var4;
                var1 = var6.bind(var3)(var2, var1);
                return var1;
            case 243:
                var6 = _closure1_slot8;
                var2 = _closure1_slot15;
                var1 = {};
                var1.participant = var5;
                var1.onPress = var4;
                var1 = var6.bind(var3)(var2, var1);
                return var1;
            case 270:
                var6 = _closure1_slot8;
                var2 = _closure1_slot14;
                var1 = {};
                var1.participant = var5;
                var1.onPress = var4;
                var1 = var6.bind(var3)(var2, var1);
                return var1;
            case 297:
                var2 = _closure1_slot8;
                var1 = _closure1_slot13;
                var0 = {};
                var0.participant = var5;
                var0.onPress = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 24;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/shared/VoicePanelTitleButton.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3413, 1372, 3482, 33, 1297, 8250, 1234, 4044, 4869, 566, 4754, 8205, 6988, 671, 11837, 3921, 14303, 6804, 14299, 8152, 14298, 14304, 2]);