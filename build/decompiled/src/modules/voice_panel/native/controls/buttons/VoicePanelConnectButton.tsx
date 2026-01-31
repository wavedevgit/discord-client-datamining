// modules/voice_panel/native/controls/buttons/VoicePanelConnectButton.tsx
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
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.GREEN_360;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.paddingLeft = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_8;
    var8.paddingRight = var9;
    var3.connectButton = var8;
    var8 = {};
    var9 = 'center';
    var8.textAlign = var9;
    var3.connectText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/controls/buttons/VoicePanelConnectButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ConnectButton, environment: var1
        _fun111562: for (var _fun111562_ip = 0;;) switch (_fun111562_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.props;
                var3 = undefined;
                var _closure2_slot5 = var3;
                var0 = _closure1_slot6;
                var5 = var0.bind(var3)();
                var _closure2_slot0 = var5;
                var7 = _closure1_slot3;
                var1 = var7.useContext;
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 5;
                var0 = var9[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var1.bind(var7)(var0);
                var10 = var0.channelId;
                var _closure2_slot1 = var10;
                var0 = var0.guildId;
                var _closure2_slot2 = var0;
                var1 = 6;
                var1 = var9[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)(var10);
                var12 = var1.canConnect;
                var _closure2_slot3 = var12;
                var11 = var1.isAtMaxCapacity;
                var _closure2_slot4 = var11;
                var2 = _closure1_slot0;
                var1 = 7;
                var1 = var9[var1];
                var14 = var2.bind(var3)(var1);
                var13 = var14.useStateFromStores;
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
                var7 = var13.bind(var14)(var7, var1);
                var1 = 8;
                var1 = var9[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useIsChannelContentGated;
                var9 = var1.bind(var2)(var7);
                if (!var9) {
                    _fun111562_ip = 199;
                    continue _fun111562
                }
            case 193:
                var1 = null;
                var9 = var1 != var0;
            case 199:
                if (!var9) {
                    _fun111562_ip = 208;
                    continue _fun111562
                }
            case 202:
                var1 = null;
                var9 = var1 != var10;
            case 208:
                _closure2_slot5 = var9;
                var7 = _closure1_slot3;
                var2 = var7.useCallback;
                var1 = new Array(5);
                var1[0] = var12;
                var1[1] = var11;
                var1[2] = var10;
                var1[3] = var9;
                var1[4] = var0;
                var0 = function() { // Environment: var4
                    _fun111564: for (var _fun111564_ip = 0;;) switch (_fun111564_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            if (!var0) {
                                _fun111564_ip = 69;
                                continue _fun111564
                            }
                        case 10:
                            var0 = _closure2_slot4;
                            if (var0) {
                                _fun111564_ip = 69;
                                continue _fun111564
                            }
                        case 17:
                            var0 = _closure2_slot5;
                            if (var0) {
                                _fun111564_ip = 69;
                                continue _fun111564
                            }
                        case 24:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 9;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.selectVoiceChannel;
                            var0 = _closure2_slot1;
                            var0 = var1.bind(var2)(var0);
                            _fun111564_ip = 364;
                            continue _fun111564;
                        case 69:
                            var0 = _closure2_slot3;
                            if (var0) {
                                _fun111564_ip = 161;
                                continue _fun111564
                            }
                        case 76:
                            var5 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var0 = 10;
                            var0 = var8[var0];
                            var6 = undefined;
                            var3 = var5.bind(var6)(var0);
                            var2 = var3.openAlert;
                            var0 = 11;
                            var1 = var8[var0];
                            var1 = var5.bind(var6)(var1);
                            var1 = var1.VOICE_PANEL_NO_JOIN_PERMS_KEY;
                            var5 = _closure1_slot5;
                            var4 = _closure1_slot1;
                            var0 = var8[var0];
                            var4 = var4.bind(var6)(var0);
                            var0 = {};
                            var0 = var5.bind(var6)(var4, var0);
                            var0 = var2.bind(var3)(var1, var0);
                            _fun111564_ip = 364;
                            continue _fun111564;
                        case 161:
                            var0 = _closure2_slot4;
                            if (var0) {
                                _fun111564_ip = 276;
                                continue _fun111564
                            }
                        case 168:
                            var0 = _closure2_slot5;
                            if (!var0) {
                                _fun111564_ip = 364;
                                continue _fun111564
                            }
                        case 178:
                            var5 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var0 = 10;
                            var0 = var8[var0];
                            var6 = undefined;
                            var3 = var5.bind(var6)(var0);
                            var2 = var3.openAlert;
                            var0 = 13;
                            var1 = var8[var0];
                            var1 = var5.bind(var6)(var1);
                            var1 = var1.VOICE_PANEL_NSFW_KEY;
                            var5 = _closure1_slot5;
                            var4 = _closure1_slot1;
                            var0 = var8[var0];
                            var4 = var4.bind(var6)(var0);
                            var0 = {};
                            var8 = _closure2_slot2;
                            var0.guildId = var8;
                            var8 = _closure2_slot1;
                            var0.channelId = var8;
                            var0 = var5.bind(var6)(var4, var0);
                            var0 = var2.bind(var3)(var1, var0);
                            _fun111564_ip = 364;
                            continue _fun111564;
                        case 276:
                            var5 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var0 = 10;
                            var0 = var8[var0];
                            var6 = undefined;
                            var3 = var5.bind(var6)(var0);
                            var2 = var3.openAlert;
                            var0 = 12;
                            var1 = var8[var0];
                            var1 = var5.bind(var6)(var1);
                            var1 = var1.VOICE_PANEL_MAX_CAPACITY_KEY;
                            var5 = _closure1_slot5;
                            var4 = _closure1_slot1;
                            var0 = var8[var0];
                            var4 = var4.bind(var6)(var0);
                            var0 = {};
                            var7 = _closure2_slot1;
                            var0.channelId = var7;
                            var0 = var5.bind(var6)(var4, var0);
                            var0 = var2.bind(var3)(var1, var0);
                        case 364:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9 = var2.bind(var7)(var0, var1);
                var2 = _closure1_slot5;
                var1 = _closure1_slot1;
                var11 = _closure1_slot2;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 33, 1297, 671, 11770, 14257, 566, 4515, 4195, 3988, 14305, 14308, 14309, 14303, 1234, 3900, 2]);