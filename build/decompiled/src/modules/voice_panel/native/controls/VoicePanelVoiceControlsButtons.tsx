// modules/voice_panel/native/controls/VoicePanelVoiceControlsButtons.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function arg0() {
        _fun111773: for (var _fun111773_ip = 0;;) switch (_fun111773_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.channel;
                var _closure2_slot0 = var9;
                var0 = var1.account;
                var1 = var1.connected;
                var4 = undefined;
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var4;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 20;
                var5 = var7[var3];
                var5 = var6.bind(var4)(var5);
                var5 = var5.bind(var4)(var9);
                var6 = _closure1_slot0;
                var3 = var7[var3];
                var6 = var6.bind(var4)(var3);
                var3 = var6.useIsVoiceChannelLocked;
                var3 = var3.bind(var6)(var9);
                if (!var3) {
                    _fun111773_ip = 104;
                    continue _fun111773
                }
            case 91:
                var6 = var9.isPrivate;
                var6 = var6.bind(var9)();
                var3 = !var6;
            case 104:
                _closure2_slot1 = var3;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 21;
                var6 = var8[var6];
                var11 = var7.bind(var4)(var6);
                var8 = var11.useStateFromStores;
                var6 = _closure1_slot12;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var2
                    var2 = _closure1_slot12;
                    var1 = var2.isInChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var8.bind(var11)(var7, var6);
                var7 = !var6;
                if (!var7) {
                    _fun111773_ip = 167;
                    continue _fun111773
                }
            case 164:
                var7 = var5;
            case 167:
                if (var7) {
                    _fun111773_ip = 173;
                    continue _fun111773
                }
            case 170:
                var7 = var3;
            case 173:
                var8 = _closure1_slot4;
                var6 = var8.useCallback;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() { // Environment: var2
                    _fun111775: for (var _fun111775_ip = 0;;) switch (_fun111775_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 22;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.open;
                            var1 = {};
                            var6 = _closure2_slot1;
                            var11 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var9 = 17;
                            var8 = var7[var9];
                            var8 = var11.bind(var0)(var8);
                            var10 = var8.intl;
                            var8 = var10.string;
                            var7 = var7[var9];
                            var7 = var11.bind(var0)(var7);
                            var7 = var7.t;
                            if (var6) {
                                _fun111775_ip = 100;
                                continue _fun111775
                            }
                        case 87:
                            var6 = var7.rZfiNq;
                            var6 = var8.bind(var10)(var6);
                            _fun111775_ip = 111;
                            continue _fun111775;
                        case 100:
                            var7 = var7.rimHDW;
                            var6 = var8.bind(var10)(var7);
                        case 111:
                            var1.key = var6;
                            var4 = _closure2_slot1;
                            var8 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var6 = var5[var9];
                            var6 = var8.bind(var0)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var5[var9];
                            var5 = var8.bind(var0)(var5);
                            var5 = var5.t;
                            if (var4) {
                                _fun111775_ip = 176;
                                continue _fun111775
                            }
                        case 163:
                            var4 = var5.rZfiNq;
                            var4 = var6.bind(var7)(var4);
                            _fun111775_ip = 187;
                            continue _fun111775;
                        case 176:
                            var5 = var5.rimHDW;
                            var4 = var6.bind(var7)(var5);
                        case 187:
                            var1.content = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var6 = var6.bind(var8)(var3, var5);
                var8 = _closure1_slot0;
                var3 = _closure1_slot2;
                var5 = 23;
                var5 = var3[var5];
                var8 = var8.bind(var4)(var5);
                var5 = var8.useOnConnectToConsole;
                var11 = var5.bind(var8)(var9, var0);
                _closure2_slot2 = var11;
                var9 = _closure1_slot4;
                var8 = var9.useCallback;
                var5 = new Array(1);
                var5[0] = var11;
                var2 = function() { // Environment: var2
                    var1 = _closure2_slot2;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var5 = var8.bind(var9)(var2, var5);
                var9 = var0.type;
                var2 = _closure1_slot14;
                var2 = var2.XBOX;
                if (!(var9 !== var2)) {
                    _fun111773_ip = 473;
                    continue _fun111773
                }
            case 291:
                var2 = _closure1_slot14;
                var2 = var2.PLAYSTATION;
                if (!(var9 !== var2)) {
                    _fun111773_ip = 397;
                    continue _fun111773
                }
            case 305:
                var2 = _closure1_slot14;
                var2 = var2.PLAYSTATION_STAGING;
                var8 = undefined;
                if (!(var9 === var2)) {
                    _fun111773_ip = 395;
                    continue _fun111773
                }
            case 321:
                var9 = _closure1_slot0;
                var13 = _closure1_slot2;
                var2 = 17;
                var11 = var13[var2];
                var11 = var9.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var2 = var13[var2];
                var2 = var9.bind(var4)(var2);
                var9 = var2.t;
                if (var1) {
                    _fun111773_ip = 381;
                    continue _fun111773
                }
            case 368:
                var2 = var9["bhdB9+"];
                var2 = var11.bind(var12)(var2);
                _fun111773_ip = 392;
                continue _fun111773;
            case 381:
                var9 = var9.BDiXtV;
                var2 = var11.bind(var12)(var9);
            case 392:
                var8 = var2;
            case 395:
                _fun111773_ip = 471;
                continue _fun111773;
            case 397:
                var9 = _closure1_slot0;
                var13 = _closure1_slot2;
                var2 = 17;
                var11 = var13[var2];
                var11 = var9.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var2 = var13[var2];
                var2 = var9.bind(var4)(var2);
                var9 = var2.t;
                if (var1) {
                    _fun111773_ip = 457;
                    continue _fun111773
                }
            case 444:
                var2 = var9.QxEYDj;
                var2 = var11.bind(var12)(var2);
                _fun111773_ip = 468;
                continue _fun111773;
            case 457:
                var9 = var9.vzfxmY;
                var2 = var11.bind(var12)(var9);
            case 468:
                var8 = var2;
            case 471:
                _fun111773_ip = 547;
                continue _fun111773;
            case 473:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var2 = 17;
                var9 = var13[var2];
                var9 = var12.bind(var4)(var9);
                var11 = var9.intl;
                var9 = var11.string;
                var2 = var13[var2];
                var2 = var12.bind(var4)(var2);
                var2 = var2.t;
                if (var1) {
                    _fun111773_ip = 533;
                    continue _fun111773
                }
            case 520:
                var1 = var2.E8euSk;
                var1 = var9.bind(var11)(var1);
                _fun111773_ip = 544;
                continue _fun111773;
            case 533:
                var2 = var2["qVE/VF"];
                var1 = var9.bind(var11)(var2);
            case 544:
                var8 = var1;
            case 547:
                var2 = _closure1_slot1;
                var1 = 24;
                var1 = var3[var1];
                var1 = var2.bind(var4)(var1);
                var0 = var0.type;
                var13 = var1.bind(var4)(var0);
                var9 = null;
                var1 = var9 == var8;
                var0 = null;
                if (var1) {
                    _fun111773_ip = 695;
                    continue _fun111773
                }
            case 584:
                var3 = _closure1_slot17;
                var2 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 25;
                var1 = var11[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.TableRow;
                var1 = {};
                var11 = var9 != var13;
                var9 = undefined;
                if (!var11) {
                    _fun111773_ip = 667;
                    continue _fun111773
                }
            case 625:
                var12 = _closure1_slot17;
                var11 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 26;
                var10 = var14[var10];
                var10 = var11.bind(var4)(var10);
                var11 = var10.TableRowIcon;
                var10 = {};
                var10.source = var13;
                var9 = var12.bind(var4)(var11, var10);
            case 667:
                var1.icon = var9;
                var1.label = var8;
                var1.disabled = var7;
                if (!var7) {
                    _fun111773_ip = 685;
                    continue _fun111773
                }
            case 682:
                var5 = var6;
            case 685:
                var1.onPress = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 695:
                return var0;
        }
    };
    var _closure1_slot18 = var3;
    var0 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 40;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.toggleSelfDeaf;
        var1 = var1.bind(var2)();
        return var0;
    };
    var _closure1_slot19 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot13 = var7;
    var4 = var4.PlatformTypes;
    var _closure1_slot14 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.SelfStreamAndVideoAlertType;
    var _closure1_slot15 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.MediaEngineContextTypes;
    var _closure1_slot16 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot17 = var4;
    var4 = 67;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/controls/VoicePanelVoiceControlsButtons.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0() {
        _fun111778: for (var _fun111778_ip = 0;;) switch (_fun111778_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channel;
                var _closure2_slot0 = var1;
                var0 = var0.connected;
                var _closure2_slot1 = var0;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 18;
                var0 = var3[var0];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var7 = var0.bind(var4)();
                var2 = var7.length;
                var0 = 0;
                var2 = var2 > var0;
                var0 = null;
                if (!var2) {
                    _fun111778_ip = 181;
                    continue _fun111778
                }
            case 69:
                var3 = _closure1_slot17;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 19;
                var1 = var11[var1];
                var1 = var10.bind(var4)(var1);
                var2 = var1.TableRowGroup;
                var1 = {};
                var6 = 17;
                var8 = var11[var6];
                var8 = var10.bind(var4)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var6 = var11[var6];
                var6 = var10.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6["mbi/fB"];
                var6 = var8.bind(var9)(var6);
                var1.title = var6;
                var6 = var7.map;
                var5 = function(arg0) { // Environment: var5
                    var0 = arg0;
                    var4 = _closure1_slot17;
                    var3 = _closure1_slot18;
                    var2 = {};
                    var2.account = var0;
                    var5 = _closure2_slot0;
                    var2.channel = var5;
                    var1 = _closure2_slot1;
                    var2.connected = var1;
                    var1 = var0.type;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var5 = var6.bind(var7)(var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 181:
                return var0;
        }
    };
    var2.GameConsoles = var4;
    var2.GameConsoleAccountButton = var3;
    var3 = function arg0() {
        _fun111780: for (var _fun111780_ip = 0;;) switch (_fun111780_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channel;
                var _closure2_slot0 = var2;
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 27;
                var0 = var6[var0];
                var4 = undefined;
                var3 = var1.bind(var4)(var0);
                var1 = var3.useHangStatusExperiment;
                var0 = {};
                var7 = var2.guild_id;
                var0.guildId = var7;
                var7 = 'HangStatusButton';
                var0.location = var7;
                var0 = var1.bind(var3)(var0);
                var3 = var0.enableHangStatus;
                var1 = _closure1_slot1;
                var0 = 28;
                var0 = var6[var0];
                var1 = var1.bind(var4)(var0);
                var0 = true;
                var1 = var1.bind(var4)(var2, var0);
                var0 = null;
                if (!var3) {
                    _fun111780_ip = 269;
                    continue _fun111780
                }
            case 107:
                var0 = null;
                if (!var1) {
                    _fun111780_ip = 269;
                    continue _fun111780
                }
            case 115:
                var3 = _closure1_slot17;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 25;
                var1 = var9[var1];
                var1 = var8.bind(var4)(var1);
                var2 = var1.TableRow;
                var1 = {};
                var5 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 29;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.showHangStatusPickerActionSheet;
                    var2 = {};
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var2.channelId = var1;
                    var1 = true;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var1.onPress = var5;
                var7 = _closure1_slot17;
                var5 = 26;
                var5 = var9[var5];
                var5 = var8.bind(var4)(var5);
                var6 = var5.TableRowIcon;
                var5 = {};
                var11 = _closure1_slot1;
                var10 = 30;
                var10 = var9[var10];
                var10 = var11.bind(var4)(var10);
                var5.source = var10;
                var5 = var7.bind(var4)(var6, var5);
                var1.icon = var5;
                var5 = 17;
                var6 = var9[var5];
                var6 = var8.bind(var4)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5.pwvT9g;
                var5 = var6.bind(var7)(var5);
                var1.label = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 269:
                return var0;
        }
    };
    var2.HangStatusButton = var3;
    var3 = function arg0() {
        var1 = arg0;
        var6 = var1.openTab;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot4;
        var2 = var5.useContext;
        var7 = _closure1_slot1;
        var8 = _closure1_slot2;
        var1 = 31;
        var1 = var8[var1];
        var3 = undefined;
        var1 = var7.bind(var3)(var1);
        var1 = var2.bind(var5)(var1);
        var7 = var1.dismissPanel;
        var _closure2_slot1 = var7;
        var5 = _closure1_slot4;
        var2 = var5.useCallback;
        var1 = new Array(2);
        var1[0] = var7;
        var1[1] = var6;
        var0 = function() { // Environment: var0
            var1 = _closure2_slot1;
            var0 = undefined;
            var1 = var1.bind(var0)();
            var1 = global;
            var3 = var1.setTimeout;
            var2 = function() { // Environment: var1
                var2 = _closure2_slot0;
                var1 = {};
                var0 = 'app_launcher';
                var1.tab = var0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 32;
                var3 = var3[var0];
                var0 = undefined;
                var3 = var4.bind(var0)(var3);
                var3 = var3.VoicePanelTabAnalyticsSources;
                var3 = var3.VOICE_CONTROLS;
                var1.source = var3;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = 200;
            var1 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var5 = var2.bind(var5)(var0, var1);
        var2 = _closure1_slot17;
        var7 = _closure1_slot0;
        var0 = 25;
        var0 = var8[var0];
        var0 = var7.bind(var3)(var0);
        var1 = var0.TableRow;
        var0 = {};
        var0.onPress = var5;
        var6 = _closure1_slot17;
        var4 = 26;
        var4 = var8[var4];
        var4 = var7.bind(var3)(var4);
        var5 = var4.TableRowIcon;
        var4 = {};
        var9 = 33;
        var9 = var8[var9];
        var9 = var7.bind(var3)(var9);
        var9 = var9.AppsIcon;
        var4.IconComponent = var9;
        var4 = var6.bind(var3)(var5, var4);
        var0.icon = var4;
        var4 = 17;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.aeuOoh;
        var4 = var5.bind(var6)(var4);
        var0.label = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.ActivitiesButton = var3;
    var3 = function arg0() {
        var1 = arg0;
        var6 = var1.openTab;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot4;
        var2 = var5.useContext;
        var7 = _closure1_slot1;
        var8 = _closure1_slot2;
        var1 = 31;
        var1 = var8[var1];
        var3 = undefined;
        var1 = var7.bind(var3)(var1);
        var1 = var2.bind(var5)(var1);
        var7 = var1.dismissPanel;
        var _closure2_slot1 = var7;
        var5 = _closure1_slot4;
        var2 = var5.useCallback;
        var1 = new Array(2);
        var1[0] = var7;
        var1[1] = var6;
        var0 = function() { // Environment: var0
            var1 = _closure2_slot1;
            var0 = undefined;
            var1 = var1.bind(var0)();
            var1 = global;
            var3 = var1.setTimeout;
            var2 = function() { // Environment: var1
                var2 = _closure2_slot0;
                var1 = {};
                var0 = 'chat';
                var1.tab = var0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 32;
                var3 = var3[var0];
                var0 = undefined;
                var3 = var4.bind(var0)(var3);
                var3 = var3.VoicePanelTabAnalyticsSources;
                var3 = var3.VOICE_CONTROLS;
                var1.source = var3;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = 200;
            var1 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var5 = var2.bind(var5)(var0, var1);
        var2 = _closure1_slot17;
        var7 = _closure1_slot0;
        var0 = 25;
        var0 = var8[var0];
        var0 = var7.bind(var3)(var0);
        var1 = var0.TableRow;
        var0 = {};
        var0.onPress = var5;
        var6 = _closure1_slot17;
        var4 = 26;
        var4 = var8[var4];
        var4 = var7.bind(var3)(var4);
        var5 = var4.TableRowIcon;
        var4 = {};
        var9 = 34;
        var9 = var8[var9];
        var9 = var7.bind(var3)(var9);
        var9 = var9.ChatIcon;
        var4.IconComponent = var9;
        var4 = var6.bind(var3)(var5, var4);
        var0.icon = var4;
        var4 = 17;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4["5KxXrK"];
        var4 = var5.bind(var6)(var4);
        var0.label = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.ChatButton = var3;
    var3 = function arg0() {
        _fun111788: for (var _fun111788_ip = 0;;) switch (_fun111788_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channel;
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 35;
                var2 = var6[var0];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var1 = var1.id;
                var3 = _closure1_slot0;
                var0 = var6[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.SoundboardButtonLocation;
                var0 = var0.VOICE_CONTROLS;
                var0 = var2.bind(var4)(var1, var0);
                var1 = var0.visible;
                var7 = var0.handlePress;
                var6 = var0.disabled;
                var0 = null;
                if (!var1) {
                    _fun111788_ip = 247;
                    continue _fun111788
                }
            case 94:
                var3 = _closure1_slot17;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 25;
                var1 = var10[var1];
                var1 = var9.bind(var4)(var1);
                var2 = var1.TableRow;
                var1 = {};
                var8 = 17;
                var11 = var10[var8];
                var11 = var9.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var8 = var10[var8];
                var8 = var9.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8.ABjMWI;
                var8 = var11.bind(var12)(var8);
                var1.label = var8;
                var1.onPress = var7;
                var1.disabled = var6;
                var7 = _closure1_slot17;
                var5 = 26;
                var5 = var10[var5];
                var5 = var9.bind(var4)(var5);
                var6 = var5.TableRowIcon;
                var5 = {};
                var8 = 36;
                var8 = var10[var8];
                var8 = var9.bind(var4)(var8);
                var8 = var8.SoundboardIcon;
                var5.IconComponent = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.icon = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 247:
                return var0;
        }
    };
    var2.SoundboardButton = var3;
    var3 = function arg0() {
        var1 = arg0;
        var2 = var1.channel;
        var4 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 37;
        var1 = var9[var1];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var1 = var1.bind(var3)(var2);
        var7 = var1.onPress;
        var _closure2_slot0 = var7;
        var8 = var1.imgSource;
        var4 = var1.text;
        var10 = var1.isFeatureEnabled;
        var11 = var1.isActive;
        var _closure2_slot1 = var11;
        var6 = _closure1_slot4;
        var2 = var6.useCallback;
        var1 = new Array(2);
        var1[0] = var11;
        var1[1] = var7;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var0 = 38;
            var1 = var4[var0];
            var0 = undefined;
            var7 = var3.bind(var0)(var1);
            var6 = var7.track;
            var1 = _closure1_slot13;
            var5 = var1.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED;
            var3 = {};
            var1 = 'voice controls';
            var3.source = var1;
            var8 = _closure2_slot1;
            var3.was_active = var8;
            var3 = var6.bind(var7)(var5, var3);
            var3 = _closure1_slot0;
            var2 = 37;
            var2 = var4[var2];
            var3 = var3.bind(var0)(var2);
            var2 = var3.handleOnPressWithOnboard;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            var1 = var1.bind(var0)();
            return var0;
        };
        var7 = var2.bind(var6)(var0, var1);
        var2 = _closure1_slot17;
        var6 = _closure1_slot0;
        var0 = 25;
        var0 = var9[var0];
        var0 = var6.bind(var3)(var0);
        var1 = var0.TableRow;
        var0 = {};
        var10 = !var10;
        var0.disabled = var10;
        var0.onPress = var7;
        var7 = _closure1_slot17;
        var5 = 26;
        var5 = var9[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.TableRowIcon;
        var5 = {};
        var5.source = var8;
        var5 = var7.bind(var3)(var6, var5);
        var0.icon = var5;
        var0.label = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.ScreenshareButton = var3;
    var3 = function() {
        _fun111791: for (var _fun111791_ip = 0;;) switch (_fun111791_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 21;
                var1 = var3[var0];
                var4 = undefined;
                var7 = var2.bind(var4)(var1);
                var6 = var7.useStateFromStores;
                var1 = _closure1_slot9;
                var5 = new Array(2);
                var5[0] = var1;
                var1 = _closure1_slot10;
                var5[1] = var1;
                var1 = function() { // Environment: var15
                    _fun111792: for (var _fun111792_ip = 0;;) switch (_fun111792_ip) {
                        case 0:
                            var1 = _closure1_slot9;
                            var0 = var1.getLastActiveStream;
                            var1 = var0.bind(var1)();
                            var4 = null;
                            var3 = var4 != var1;
                            var0 = null;
                            if (!var3) {
                                _fun111792_ip = 57;
                                continue _fun111792
                            }
                        case 28:
                            var3 = var1.ownerId;
                            var5 = _closure1_slot10;
                            var2 = var5.getId;
                            var2 = var2.bind(var5)();
                            var0 = null;
                            if (!(var3 !== var2)) {
                                _fun111792_ip = 57;
                                continue _fun111792
                            }
                        case 54:
                            var0 = var1;
                        case 57:
                            return var0;
                    }
                };
                var1 = var6.bind(var7)(var5, var1);
                var _closure2_slot0 = var1;
                var0 = var3[var0];
                var5 = var2.bind(var4)(var0);
                var3 = var5.useStateFromStores;
                var0 = _closure1_slot11;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var15
                    _fun111793: for (var _fun111793_ip = 0;;) switch (_fun111793_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            var1 = var0 == var1;
                            var0 = 0;
                            if (var1) {
                                _fun111793_ip = 98;
                                continue _fun111793
                            }
                        case 18:
                            var7 = _closure1_slot11;
                            var6 = var7.isLocalMute;
                            var3 = _closure2_slot0;
                            var5 = var3.ownerId;
                            var3 = _closure1_slot16;
                            var3 = var3.STREAM;
                            var3 = var6.bind(var7)(var5, var3);
                            var0 = 0;
                            if (var3) {
                                _fun111793_ip = 98;
                                continue _fun111793
                            }
                        case 62:
                            var4 = _closure1_slot11;
                            var3 = var4.getLocalVolume;
                            var2 = _closure2_slot0;
                            var2 = var2.ownerId;
                            var1 = _closure1_slot16;
                            var1 = var1.STREAM;
                            var0 = var3.bind(var4)(var2, var1);
                        case 98:
                            return var0;
                    }
                };
                var13 = var3.bind(var5)(var2, var0);
                var5 = _closure1_slot4;
                var3 = var5.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var0 = function(arg0) { // Environment: var15
                    _fun111794: for (var _fun111794_ip = 0;;) switch (_fun111794_ip) {
                        case 0:
                            var5 = arg0;
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 39;
                            var2 = var2[var0];
                            var0 = undefined;
                            var6 = var3.bind(var0)(var2);
                            var4 = _closure2_slot0;
                            var3 = null;
                            var4 = var3 != var4;
                            var3 = 'Can not set stream volume without active stream';
                            var3 = var6.bind(var0)(var4, var3);
                            var3 = 0;
                            var3 = var5 > var3;
                            if (!var3) {
                                _fun111794_ip = 98;
                                continue _fun111794
                            }
                        case 62:
                            var8 = _closure1_slot11;
                            var7 = var8.isLocalMute;
                            var4 = _closure2_slot0;
                            var6 = var4.ownerId;
                            var4 = _closure1_slot16;
                            var4 = var4.STREAM;
                            var3 = var7.bind(var8)(var6, var4);
                        case 98:
                            if (!var3) {
                                _fun111794_ip = 153;
                                continue _fun111794
                            }
                        case 101:
                            var4 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 40;
                            var3 = var6[var3];
                            var7 = var4.bind(var0)(var3);
                            var6 = var7.toggleLocalMute;
                            var3 = _closure2_slot0;
                            var4 = var3.ownerId;
                            var3 = _closure1_slot16;
                            var3 = var3.STREAM;
                            var3 = var6.bind(var7)(var4, var3);
                        case 153:
                            var4 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 40;
                            var3 = var6[var3];
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.setLocalVolume;
                            var2 = _closure2_slot0;
                            var2 = var2.ownerId;
                            var1 = _closure1_slot16;
                            var1 = var1.STREAM;
                            var1 = var3.bind(var4)(var2, var5, var1);
                            return var0;
                    }
                };
                var12 = var3.bind(var5)(var0, var2);
                var0 = null;
                var1 = var0 == var1;
                if (var1) {
                    _fun111791_ip = 413;
                    continue _fun111791
                }
            case 150:
                var3 = _closure1_slot17;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var1 = 19;
                var1 = var17[var1];
                var1 = var16.bind(var4)(var1);
                var2 = var1.TableRowGroup;
                var1 = {};
                var5 = 17;
                var6 = var17[var5];
                var6 = var16.bind(var4)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var17[var5];
                var5 = var16.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5.pEAl4b;
                var5 = var6.bind(var7)(var5);
                var1.title = var5;
                var7 = _closure1_slot17;
                var5 = 25;
                var5 = var17[var5];
                var5 = var16.bind(var4)(var5);
                var6 = var5.TableRow;
                var5 = {};
                var10 = _closure1_slot17;
                var9 = _closure1_slot1;
                var8 = 41;
                var8 = var17[var8];
                var9 = var9.bind(var4)(var8);
                var8 = {};
                var14 = 42;
                var14 = var17[var14];
                var16 = var16.bind(var4)(var14);
                var14 = var16.isAndroid;
                var16 = var14.bind(var16)();
                var14 = undefined;
                if (!var16) {
                    _fun111791_ip = 313;
                    continue _fun111791
                }
            case 306:
                var14 = function() { // Environment: var15
                    var0 = true;
                    return var0;
                };
            case 313:
                var8.onResponderGrant = var14;
                var8.value = var13;
                var8.onValueChange = var12;
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var11 = 43;
                var14 = var13[var11];
                var14 = var12.bind(var4)(var14);
                var14 = var14.unsafe_rawColors;
                var14 = var14.WHITE;
                var8.color = var14;
                var11 = var13[var11];
                var11 = var12.bind(var4)(var11);
                var11 = var11.unsafe_rawColors;
                var11 = var11.PRIMARY_300;
                var8.maxTrackTintColor = var11;
                var8 = var10.bind(var4)(var9, var8);
                var5.label = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 413:
                return var0;
        }
    };
    var2.StreamVolumeItem = var3;
    var3 = function() {
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 21;
        var0 = var8[var0];
        var3 = undefined;
        var4 = var7.bind(var3)(var0);
        var2 = var4.useStateFromStores;
        var0 = _closure1_slot11;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            var1 = _closure1_slot11;
            var0 = var1.isSelfDeaf;
            var0 = var0.bind(var1)();
            return var0;
        };
        var6 = var2.bind(var4)(var1, var0);
        var2 = _closure1_slot17;
        var0 = 44;
        var0 = var8[var0];
        var0 = var7.bind(var3)(var0);
        var1 = var0.TableSwitchRow;
        var0 = {};
        var10 = _closure1_slot17;
        var4 = 26;
        var4 = var8[var4];
        var4 = var7.bind(var3)(var4);
        var9 = var4.TableRowIcon;
        var4 = {};
        var11 = 45;
        var11 = var8[var11];
        var11 = var7.bind(var3)(var11);
        var11 = var11.HeadphonesSlashIcon;
        var4.IconComponent = var11;
        var12 = _closure1_slot1;
        var11 = 46;
        var11 = var8[var11];
        var11 = var12.bind(var3)(var11);
        var4.source = var11;
        var4 = var10.bind(var3)(var9, var4);
        var0.icon = var4;
        var4 = 17;
        var9 = var8[var4];
        var9 = var7.bind(var3)(var9);
        var11 = var9.intl;
        var10 = var11.string;
        var9 = var8[var4];
        var9 = var7.bind(var3)(var9);
        var9 = var9.t;
        var9 = var9.wjcRFX;
        var9 = var10.bind(var11)(var9);
        var0.accessibilityHint = var9;
        var0.value = var6;
        var5 = _closure1_slot19;
        var0.onValueChange = var5;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var9 = var5.intl;
        var6 = var9.string;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.wjcRFX;
        var5 = var6.bind(var9)(var5);
        var0.label = var5;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.M3VN2U;
        var4 = var5.bind(var6)(var4);
        var0.subLabel = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.DeafenSwitch = var3;
    var3 = function arg0() {
        var0 = arg0;
        var1 = var0.channel;
        var _closure2_slot0 = var1;
        var0 = var0.connected;
        var _closure2_slot1 = var0;
        var5 = _closure1_slot0;
        var7 = _closure1_slot2;
        var0 = 47;
        var0 = var7[var0];
        var3 = undefined;
        var1 = var5.bind(var3)(var0);
        var0 = var1.useMaskedSpeakerStates;
        var0 = var0.bind(var1)();
        var11 = var0.routeSource;
        var2 = _closure1_slot17;
        var0 = 25;
        var0 = var7[var0];
        var0 = var5.bind(var3)(var0);
        var1 = var0.TableRow;
        var0 = {};
        var10 = _closure1_slot17;
        var8 = 26;
        var8 = var7[var8];
        var8 = var5.bind(var3)(var8);
        var9 = var8.TableRowIcon;
        var8 = {};
        var8.source = var11;
        var8 = var10.bind(var3)(var9, var8);
        var0.icon = var8;
        var6 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 48;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.showAudioOutputSelector;
            var2 = _closure2_slot0;
            var2 = var2.id;
            var1 = _closure2_slot1;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0.onPress = var6;
        var6 = 17;
        var8 = var7[var6];
        var8 = var5.bind(var3)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var6 = var7[var6];
        var6 = var5.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6["A/Ly/2"];
        var6 = var8.bind(var9)(var6);
        var0.label = var6;
        var6 = _closure1_slot17;
        var4 = 49;
        var4 = var7[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.TableRowArrow;
        var4 = {};
        var4 = var6.bind(var3)(var5, var4);
        var0.trailing = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.AudioRouteButton = var3;
    var3 = function arg0() {
        _fun111800: for (var _fun111800_ip = 0;;) switch (_fun111800_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.channel;
                var1 = var1.connected;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 50;
                var2 = var8[var2];
                var4 = undefined;
                var6 = var7.bind(var4)(var2);
                var3 = var6.useCanInviteMembers;
                var2 = var0.id;
                var3 = var3.bind(var6)(var2);
                var6 = _closure1_slot1;
                var2 = 20;
                var2 = var8[var2];
                var2 = var6.bind(var4)(var2);
                var6 = var2.bind(var4)(var0);
                var2 = 51;
                var2 = var8[var2];
                var7 = var7.bind(var4)(var2);
                var2 = var7.useInviteMembersCallback;
                var0 = var0.id;
                var7 = var2.bind(var7)(var0);
                var0 = null;
                if (var6) {
                    _fun111800_ip = 340;
                    continue _fun111800
                }
            case 112:
                var0 = null;
                if (!var3) {
                    _fun111800_ip = 340;
                    continue _fun111800
                }
            case 120:
                var0 = null;
                if (!var1) {
                    _fun111800_ip = 340;
                    continue _fun111800
                }
            case 128:
                var3 = _closure1_slot17;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 25;
                var1 = var8[var1];
                var1 = var6.bind(var4)(var1);
                var2 = var1.TableRow;
                var1 = {};
                var1.onPress = var7;
                var10 = _closure1_slot17;
                var7 = 26;
                var7 = var8[var7];
                var7 = var6.bind(var4)(var7);
                var9 = var7.TableRowIcon;
                var7 = {};
                var11 = 52;
                var11 = var8[var11];
                var11 = var6.bind(var4)(var11);
                var11 = var11.GroupPlusIcon;
                var7.IconComponent = var11;
                var12 = _closure1_slot1;
                var11 = 53;
                var11 = var8[var11];
                var11 = var12.bind(var4)(var11);
                var7.source = var11;
                var11 = 'blurple';
                var7.variant = var11;
                var7 = var10.bind(var4)(var9, var7);
                var1.icon = var7;
                var7 = 17;
                var9 = var8[var7];
                var9 = var6.bind(var4)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var7 = var8[var7];
                var7 = var6.bind(var4)(var7);
                var7 = var7.t;
                var7 = var7["f1+QIK"];
                var7 = var9.bind(var10)(var7);
                var1.label = var7;
                var7 = _closure1_slot17;
                var5 = 49;
                var5 = var8[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.TableRowArrow;
                var5 = {};
                var5 = var7.bind(var4)(var6, var5);
                var1.trailing = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 340:
                return var0;
        }
    };
    var2.InviteButton = var3;
    var3 = function arg0() {
        var1 = arg0;
        var5 = var1.channelId;
        var _closure2_slot0 = var5;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 21;
        var1 = var8[var1];
        var3 = undefined;
        var6 = var7.bind(var3)(var1);
        var4 = var6.useStateFromStores;
        var1 = _closure1_slot6;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            var2 = _closure1_slot6;
            var1 = var2.getVoiceParticipantsHidden;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var6 = var4.bind(var6)(var2, var1);
        var _closure2_slot1 = var6;
        var4 = _closure1_slot4;
        var2 = var4.useCallback;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var6;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 54;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.toggleVoiceParticipantsHidden;
            var2 = _closure2_slot0;
            var1 = _closure2_slot1;
            var1 = !var1;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var5 = var2.bind(var4)(var0, var1);
        var2 = _closure1_slot17;
        var0 = 44;
        var0 = var8[var0];
        var0 = var7.bind(var3)(var0);
        var1 = var0.TableSwitchRow;
        var0 = {};
        var10 = _closure1_slot17;
        var4 = 26;
        var4 = var8[var4];
        var4 = var7.bind(var3)(var4);
        var9 = var4.TableRowIcon;
        var4 = {};
        var12 = 55;
        var12 = var8[var12];
        var12 = var7.bind(var3)(var12);
        var12 = var12.VideoIcon;
        var4.IconComponent = var12;
        var12 = _closure1_slot1;
        var11 = 56;
        var11 = var8[var11];
        var11 = var12.bind(var3)(var11);
        var4.source = var11;
        var4 = var10.bind(var3)(var9, var4);
        var0.icon = var4;
        var4 = 17;
        var9 = var8[var4];
        var9 = var7.bind(var3)(var9);
        var11 = var9.intl;
        var10 = var11.string;
        var9 = var8[var4];
        var9 = var7.bind(var3)(var9);
        var9 = var9.t;
        var9 = var9.ZMTRyc;
        var9 = var10.bind(var11)(var9);
        var0.accessibilityHint = var9;
        var0.value = var6;
        var0.onValueChange = var5;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var9 = var5.intl;
        var6 = var9.string;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.ZMTRyc;
        var5 = var6.bind(var9)(var5);
        var0.label = var5;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.MlpCFS;
        var4 = var5.bind(var6)(var4);
        var0.subLabel = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.HideNonVideoParticipants = var3;
    var3 = function() {
        _fun111804: for (var _fun111804_ip = 0;;) switch (_fun111804_ip) {
            case 0:
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 57;
                var0 = var7[var0];
                var4 = undefined;
                var2 = var2.bind(var4)(var0);
                var3 = _closure1_slot10;
                var0 = var3.getId;
                var0 = var0.bind(var3)();
                var3 = var2.bind(var4)(var0);
                var2 = _closure1_slot3;
                var0 = 3;
                var3 = var2.bind(var4)(var3, var0);
                var0 = 0;
                var2 = var3[var0];
                var0 = 1;
                var6 = var3[var0];
                var _closure2_slot0 = var6;
                var0 = 2;
                var0 = var3[var0];
                var _closure2_slot1 = var0;
                var3 = _closure1_slot0;
                var0 = 21;
                var0 = var7[var0];
                var8 = var3.bind(var4)(var0);
                var7 = var8.useStateFromStores;
                var0 = _closure1_slot7;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var5
                    var0 = _closure1_slot7;
                    var0 = var0.disableHideSelfStreamAndVideoConfirmationAlert;
                    return var0;
                };
                var0 = var7.bind(var8)(var3, var0);
                var _closure2_slot2 = var0;
                var0 = null;
                if (!var2) {
                    _fun111804_ip = 250;
                    continue _fun111804
                }
            case 142:
                var3 = _closure1_slot17;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 44;
                var1 = var9[var1];
                var1 = var8.bind(var4)(var1);
                var2 = var1.TableSwitchRow;
                var1 = {};
                var6 = !var6;
                var1.value = var6;
                var5 = function() {
                    _fun111806: for (var _fun111806_ip = 0;;) switch (_fun111806_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (var1) {
                                _fun111806_ip = 56;
                                continue _fun111806
                            }
                        case 12:
                            var1 = _closure2_slot0;
                            if (var1) {
                                _fun111806_ip = 56;
                                continue _fun111806
                            }
                        case 19:
                            var1 = _closure1_slot15;
                            var4 = var1.VIDEO;
                            var3 = function arg0, arg1() {
                                var0 = arg0;
                                var _closure4_slot0 = var0;
                                var0 = arg1;
                                var _closure4_slot1 = var0;
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 14;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.openLazy;
                                var1 = {};
                                var4 = function() {
                                    var2 = _closure1_slot0;
                                    var0 = _closure1_slot2;
                                    var1 = 16;
                                    var1 = var0[var1];
                                    var3 = undefined;
                                    var2 = var2.bind(var3)(var1);
                                    var1 = 15;
                                    var1 = var0[var1];
                                    var0 = var0.paths;
                                    var2 = var2.bind(var3)(var1, var0);
                                    var1 = var2.then;
                                    var0 = function(arg0) { // Environment: var0
                                        var1 = arg0;
                                        var1 = var1.default;
                                        var _closure6_slot0 = var1;
                                        var0 = function(arg0) { // Environment: var0
                                            var3 = _closure1_slot17;
                                            var2 = _closure6_slot0;
                                            var1 = {};
                                            var6 = arg0;
                                            var7 = var1;
                                            var0 = copyDataProperties(var7, var6);
                                            var5 = _closure4_slot0;
                                            var4 = 'type';
                                            var1[var4] = var5;
                                            var4 = _closure4_slot1;
                                            var0 = 'onConfirm';
                                            var1[var0] = var4;
                                            var0 = undefined;
                                            var0 = var3.bind(var0)(var2, var1);
                                            return var0;
                                        };
                                        return var0;
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var1.importer = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var1 = undefined;
                            var2 = function() { // Environment: var2
                                var2 = _closure2_slot1;
                                var0 = _closure2_slot0;
                                var1 = !var0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var2 = var3.bind(var1)(var4, var2);
                            return var1;
                        case 56:
                            var2 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var1 = !var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var1.onValueChange = var5;
                var5 = 17;
                var6 = var9[var5];
                var6 = var8.bind(var4)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5.MH8ESU;
                var5 = var6.bind(var7)(var5);
                var1.label = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 250:
                return var0;
        }
    };
    var2.HideSelfVideo = var3;
    var3 = function() {
        var3 = _closure1_slot17;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 25;
        var0 = var8[var0];
        var2 = undefined;
        var0 = var7.bind(var2)(var0);
        var1 = var0.TableRow;
        var0 = {};
        var6 = _closure1_slot17;
        var4 = 26;
        var4 = var8[var4];
        var4 = var7.bind(var2)(var4);
        var5 = var4.TableRowIcon;
        var4 = {};
        var10 = _closure1_slot1;
        var9 = 58;
        var9 = var8[var9];
        var9 = var10.bind(var2)(var9);
        var4.source = var9;
        var4 = var6.bind(var2)(var5, var4);
        var0.icon = var4;
        var4 = 17;
        var5 = var8[var4];
        var5 = var7.bind(var2)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4["R/FK4A"];
        var4 = var5.bind(var6)(var4);
        var0.label = var4;
        var4 = function() {
            _fun111813: for (var _fun111813_ip = 0;;) switch (_fun111813_ip) {
                case 0:
                    var2 = _closure1_slot5;
                    var1 = var2.getCurrentEmbeddedActivity;
                    var5 = var1.bind(var2)();
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 59;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.leaveActivity;
                    var1 = {};
                    var4 = null;
                    var7 = var4 == var5;
                    var6 = undefined;
                    if (var7) {
                        _fun111813_ip = 63;
                        continue _fun111813
                    }
                case 58:
                    var6 = var5.location;
                case 63:
                    var1.location = var6;
                    var6 = var4 == var5;
                    var4 = undefined;
                    if (var6) {
                        _fun111813_ip = 81;
                        continue _fun111813
                    }
                case 76:
                    var4 = var5.applicationId;
                case 81:
                    var1.applicationId = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0.onPress = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.LeaveActivitiesButton = var3;
    var3 = function() {
        _fun111814: for (var _fun111814_ip = 0;;) switch (_fun111814_ip) {
            case 0:
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 60;
                var0 = var6[var0];
                var3 = undefined;
                var2 = var1.bind(var3)(var0);
                var0 = var2.shareActivityLogs;
                var0 = var0.bind(var2)();
                var5 = var0.label;
                var10 = var0.icon;
                var4 = var0.onPress;
                var2 = _closure1_slot17;
                var0 = 25;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var6 = null;
                var8 = var6 != var10;
                var6 = undefined;
                if (!var8) {
                    _fun111814_ip = 127;
                    continue _fun111814
                }
            case 85:
                var9 = _closure1_slot17;
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 26;
                var7 = var11[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.TableRowIcon;
                var7 = {};
                var7.source = var10;
                var6 = var9.bind(var3)(var8, var7);
            case 127:
                var0.icon = var6;
                var0.label = var5;
                var0.onPress = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ShareActivityLogsButton = var3;
    var3 = function() {
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 21;
        var0 = var8[var0];
        var3 = undefined;
        var5 = var7.bind(var3)(var0);
        var2 = var5.useStateFromStores;
        var0 = _closure1_slot8;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var4
            var1 = _closure1_slot8;
            var0 = var1.getShowActivitiesDebugOverlay;
            var0 = var0.bind(var1)();
            return var0;
        };
        var5 = var2.bind(var5)(var1, var0);
        var2 = _closure1_slot17;
        var0 = 44;
        var0 = var8[var0];
        var0 = var7.bind(var3)(var0);
        var1 = var0.TableSwitchRow;
        var0 = {};
        var10 = _closure1_slot17;
        var6 = 26;
        var6 = var8[var6];
        var6 = var7.bind(var3)(var6);
        var9 = var6.TableRowIcon;
        var6 = {};
        var12 = _closure1_slot1;
        var11 = 61;
        var11 = var8[var11];
        var11 = var12.bind(var3)(var11);
        var6.source = var11;
        var6 = var10.bind(var3)(var9, var6);
        var0.icon = var6;
        var0.value = var5;
        var4 = function arg0() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 62;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY';
            var1.type = var4;
            var4 = arg0;
            var1.visible = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.onValueChange = var4;
        var4 = 17;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4["qv5/SP"];
        var4 = var5.bind(var6)(var4);
        var0.label = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.ToggleShowActivitiesDebugOverlay = var3;
    var3 = function arg0() {
        var1 = arg0;
        var5 = var1.guildId;
        var _closure2_slot0 = var5;
        var3 = _closure1_slot4;
        var2 = var3.useCallback;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 63;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.showVoiceSettingsActionSheet;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var6 = var2.bind(var3)(var0, var1);
        var3 = _closure1_slot17;
        var5 = _closure1_slot0;
        var7 = _closure1_slot2;
        var0 = 25;
        var0 = var7[var0];
        var2 = undefined;
        var0 = var5.bind(var2)(var0);
        var1 = var0.TableRow;
        var0 = {};
        var0.onPress = var6;
        var9 = _closure1_slot17;
        var6 = 26;
        var6 = var7[var6];
        var6 = var5.bind(var2)(var6);
        var8 = var6.TableRowIcon;
        var6 = {};
        var10 = 64;
        var10 = var7[var10];
        var10 = var5.bind(var2)(var10);
        var10 = var10.SettingsIcon;
        var6.IconComponent = var10;
        var11 = _closure1_slot1;
        var10 = 65;
        var10 = var7[var10];
        var10 = var11.bind(var2)(var10);
        var6.source = var10;
        var6 = var9.bind(var2)(var8, var6);
        var0.icon = var6;
        var6 = 17;
        var8 = var7[var6];
        var8 = var5.bind(var2)(var8);
        var10 = var8.intl;
        var9 = var10.string;
        var8 = var7[var6];
        var8 = var5.bind(var2)(var8);
        var8 = var8.t;
        var8 = var8.NiTd0e;
        var8 = var9.bind(var10)(var8);
        var0.label = var8;
        var8 = var7[var6];
        var8 = var5.bind(var2)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var6 = var7[var6];
        var6 = var5.bind(var2)(var6);
        var6 = var6.t;
        var6 = var6["16SG+O"];
        var6 = var8.bind(var9)(var6);
        var0.subLabel = var6;
        var6 = _closure1_slot17;
        var4 = 49;
        var4 = var7[var4];
        var4 = var5.bind(var2)(var4);
        var5 = var4.TableRowArrow;
        var4 = {};
        var4 = var6.bind(var2)(var5, var4);
        var0.trailing = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.VoiceSettingsButton = var3;
    var3 = function arg0() {
        _fun111820: for (var _fun111820_ip = 0;;) switch (_fun111820_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channel;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 66;
                var0 = var3[var0];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var5 = var0.bind(var4)(var1);
                var0 = null;
                if (!(var0 != var5)) {
                    _fun111820_ip = 188;
                    continue _fun111820
                }
            case 47:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 60;
                var1 = var7[var1];
                var3 = var2.bind(var4)(var1);
                var1 = var3.reportStreamIssue;
                var1 = var1.bind(var3)(var5);
                var6 = var1.label;
                var11 = var1.icon;
                var5 = var1.onPress;
                var3 = _closure1_slot17;
                var1 = 25;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.TableRow;
                var1 = {};
                var9 = var0 != var11;
                var7 = undefined;
                if (!var9) {
                    _fun111820_ip = 168;
                    continue _fun111820
                }
            case 126:
                var10 = _closure1_slot17;
                var9 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 26;
                var8 = var12[var8];
                var8 = var9.bind(var4)(var8);
                var9 = var8.TableRowIcon;
                var8 = {};
                var8.source = var11;
                var7 = var10.bind(var4)(var9, var8);
            case 168:
                var1.icon = var7;
                var1.label = var6;
                var1.onPress = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 188:
                return var0;
        }
    };
    var2.ReportStreamIssueButton = var3;
    var1 = function() {
        _fun111821: for (var _fun111821_ip = 0;;) switch (_fun111821_ip) {
            case 0:
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 60;
                var0 = var6[var0];
                var3 = undefined;
                var4 = var1.bind(var3)(var0);
                var2 = var4.rtcDebugPanel;
                var0 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var0 = var2.bind(var4)(var0);
                var5 = var0.label;
                var4 = var0.onPress;
                var10 = var0.icon;
                var2 = _closure1_slot17;
                var0 = 25;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var6 = null;
                var8 = var6 != var10;
                var6 = undefined;
                if (!var8) {
                    _fun111821_ip = 137;
                    continue _fun111821
                }
            case 95:
                var9 = _closure1_slot17;
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 26;
                var7 = var11[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.TableRowIcon;
                var7 = {};
                var7.source = var10;
                var6 = var9.bind(var3)(var8, var7);
            case 137:
                var0.icon = var6;
                var0.label = var5;
                var0.onPress = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.RTCDebugPanelButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1371, 3950, 3199, 7922, 3716, 1216, 3478, 3523, 660, 8530, 3512, 33, 3938, 8623, 1307, 1234, 8318, 5368, 8470, 566, 3150, 8320, 8336, 4901, 4908, 3616, 14311, 14314, 14323, 11839, 14363, 7800, 4841, 14272, 11959, 8483, 795, 44, 8236, 8499, 478, 671, 5421, 8263, 14324, 8230, 8254, 4909, 14297, 14271, 8674, 8510, 7905, 8817, 8482, 8634, 8628, 7970, 8621, 6515, 806, 8491, 5374, 14313, 8620, 2]);