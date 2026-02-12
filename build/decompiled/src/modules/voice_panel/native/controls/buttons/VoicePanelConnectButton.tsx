// modules/voice_panel/native/controls/buttons/VoicePanelConnectButton.tsx
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
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot5 = var7;
    var3 = 3;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var8 = var9.createStyles;
    var3 = {};
    var10 = {};
    var11 = 4;
    var12 = var5[var11];
    var12 = var6.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.GREEN_360;
    var10.backgroundColor = var12;
    var12 = var5[var11];
    var12 = var6.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var10.paddingLeft = var12;
    var11 = var5[var11];
    var11 = var6.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var10.paddingRight = var11;
    var3.connectButton = var10;
    var10 = {};
    var11 = 'center';
    var10.textAlign = var11;
    var3.connectText = var10;
    var3 = var8.bind(var9)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot7 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/controls/buttons/VoicePanelConnectButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun112197: for (var _fun112197_ip = 0;;) switch (_fun112197_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.props;
                var3 = undefined;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var0 = _closure1_slot6;
                var5 = var0.bind(var3)();
                var _closure2_slot0 = var5;
                var7 = _closure1_slot3;
                var1 = var7.useContext;
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 6;
                var0 = var9[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var1.bind(var7)(var0);
                var13 = var0.channelId;
                var _closure2_slot1 = var13;
                var0 = var0.guildId;
                var1 = 7;
                var1 = var9[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)(var13);
                var15 = var1.canConnect;
                var _closure2_slot2 = var15;
                var14 = var1.isAtMaxCapacity;
                var _closure2_slot3 = var14;
                var2 = _closure1_slot0;
                var1 = 8;
                var1 = var9[var1];
                var11 = var2.bind(var3)(var1);
                var10 = var11.useStateFromStores;
                var1 = _closure1_slot4;
                var7 = new Array(1);
                var7[0] = var1;
                var1 = function() { // Environment: var4
                    var2 = _closure1_slot4;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var10.bind(var11)(var7, var1);
                var1 = 9;
                var1 = var9[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useIsChannelContentGated;
                var12 = var1.bind(var2)(var7);
                if (!var12) {
                    _fun112197_ip = 203;
                    continue _fun112197
                }
            case 197:
                var1 = null;
                var12 = var1 != var0;
            case 203:
                if (!var12) {
                    _fun112197_ip = 212;
                    continue _fun112197
                }
            case 206:
                var1 = null;
                var12 = var1 != var13;
            case 212:
                _closure2_slot4 = var12;
                var2 = _closure1_slot5;
                var1 = _closure1_slot1;
                var11 = _closure1_slot2;
                var7 = 10;
                var7 = var11[var7];
                var9 = var1.bind(var3)(var7);
                var7 = {};
                var7.channelId = var13;
                var7 = var2.bind(var3)(var9, var7);
                _closure2_slot5 = var7;
                var7 = 11;
                var7 = var11[var7];
                var9 = var1.bind(var3)(var7);
                var7 = {};
                var7.guildId = var0;
                var7.channelId = var13;
                var7 = var2.bind(var3)(var9, var7);
                _closure2_slot6 = var7;
                var7 = _closure1_slot3;
                var10 = var7.useCallback;
                var9 = new Array(5);
                var9[0] = var15;
                var9[1] = var14;
                var9[2] = var13;
                var9[3] = var12;
                var9[4] = var0;
                var0 = function() { // Environment: var4
                    _fun112199: for (var _fun112199_ip = 0;;) switch (_fun112199_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (!var1) {
                                _fun112199_ip = 69;
                                continue _fun112199
                            }
                        case 10:
                            var1 = _closure2_slot3;
                            if (var1) {
                                _fun112199_ip = 69;
                                continue _fun112199
                            }
                        case 17:
                            var1 = _closure2_slot4;
                            if (var1) {
                                _fun112199_ip = 69;
                                continue _fun112199
                            }
                        case 24:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 12;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.selectVoiceChannel;
                            var1 = _closure2_slot1;
                            var1 = var2.bind(var3)(var1);
                            _fun112199_ip = 274;
                            continue _fun112199;
                        case 69:
                            var1 = _closure2_slot2;
                            if (var1) {
                                _fun112199_ip = 140;
                                continue _fun112199
                            }
                        case 76:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 13;
                            var2 = var7[var2];
                            var5 = undefined;
                            var4 = var6.bind(var5)(var2);
                            var3 = var4.openAlert;
                            var2 = 5;
                            var2 = var7[var2];
                            var2 = var6.bind(var5)(var2);
                            var2 = var2.VOICE_PANEL_NO_JOIN_PERMS_KEY;
                            var1 = _closure1_slot7;
                            var1 = var3.bind(var4)(var2, var1);
                            _fun112199_ip = 274;
                            continue _fun112199;
                        case 140:
                            var1 = _closure2_slot3;
                            if (var1) {
                                _fun112199_ip = 215;
                                continue _fun112199
                            }
                        case 147:
                            var1 = _closure2_slot4;
                            if (!var1) {
                                _fun112199_ip = 274;
                                continue _fun112199
                            }
                        case 154:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 13;
                            var1 = var6[var1];
                            var2 = undefined;
                            var4 = var5.bind(var2)(var1);
                            var3 = var4.openAlert;
                            var1 = 11;
                            var1 = var6[var1];
                            var1 = var5.bind(var2)(var1);
                            var2 = var1.VOICE_PANEL_NSFW_KEY;
                            var1 = _closure2_slot6;
                            var1 = var3.bind(var4)(var2, var1);
                            _fun112199_ip = 274;
                            continue _fun112199;
                        case 215:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 13;
                            var1 = var6[var1];
                            var4 = undefined;
                            var3 = var5.bind(var4)(var1);
                            var2 = var3.openAlert;
                            var1 = 10;
                            var1 = var6[var1];
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.VOICE_PANEL_MAX_CAPACITY_KEY;
                            var0 = _closure2_slot5;
                            var0 = var2.bind(var3)(var1, var0);
                        case 274:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9 = var10.bind(var7)(var0, var9);
                var0 = 14;
                var0 = var11[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.onPress = var9;
                var0.props = var8;
                var10 = _closure1_slot0;
                var6 = 15;
                var8 = var11[var6];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var6 = var11[var6];
                var6 = var10.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6["96ANUN"];
                var6 = var8.bind(var9)(var6);
                var0.accessibilityLabel = var6;
                var6 = var5.connectButton;
                var0.style = var6;
                var6 = var7.useMemo;
                var8 = var5.connectText;
                var5 = new Array(1);
                var5[0] = var8;
                var4 = function() { // Environment: var4
                    var3 = _closure1_slot5;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 16;
                    var0 = var8[var0];
                    var2 = undefined;
                    var0 = var7.bind(var2)(var0);
                    var1 = var0.Text;
                    var0 = {
                        'variant': 'text-sm/semibold',
                        'color': 'always-white'
                    };
                    var4 = _closure2_slot0;
                    var4 = var4.connectText;
                    var0.style = var4;
                    var4 = 15;
                    var5 = var8[var4];
                    var5 = var7.bind(var2)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var8[var4];
                    var4 = var7.bind(var2)(var4);
                    var4 = var4.t;
                    var4 = var4["96ANUN"];
                    var4 = var5.bind(var6)(var4);
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var4 = var6.bind(var7)(var4, var5);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 33, 1297, 671, 14408, 9718, 14360, 566, 4557, 14411, 14412, 4237, 4024, 14406, 1234, 3938, 2]);