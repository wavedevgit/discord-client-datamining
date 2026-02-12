// modules/voice_panel/native/controls/VoicePanelVoiceControlsButtons.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var3 = function arg0() {
        _fun112287: for (var _fun112287_ip = 0;;) switch (_fun112287_ip) {
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
                    _fun112287_ip = 104;
                    continue _fun112287
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
                    _fun112287_ip = 167;
                    continue _fun112287
                }
            case 164:
                var7 = var5;
            case 167:
                if (var7) {
                    _fun112287_ip = 173;
                    continue _fun112287
                }
            case 170:
                var7 = var3;
            case 173:
                var8 = _closure1_slot4;
                var6 = var8.useCallback;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() { // Environment: var2
                    _fun112289: for (var _fun112289_ip = 0;;) switch (_fun112289_ip) {
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
                                _fun112289_ip = 100;
                                continue _fun112289
                            }
                        case 87:
                            var6 = var7.rZfiNq;
                            var6 = var8.bind(var10)(var6);
                            _fun112289_ip = 111;
                            continue _fun112289;
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
                                _fun112289_ip = 176;
                                continue _fun112289
                            }
                        case 163:
                            var4 = var5.rZfiNq;
                            var4 = var6.bind(var7)(var4);
                            _fun112289_ip = 187;
                            continue _fun112289;
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
                    _fun112287_ip = 473;
                    continue _fun112287
                }
            case 291:
                var2 = _closure1_slot14;
                var2 = var2.PLAYSTATION;
                if (!(var9 !== var2)) {
                    _fun112287_ip = 397;
                    continue _fun112287
                }
            case 305:
                var2 = _closure1_slot14;
                var2 = var2.PLAYSTATION_STAGING;
                var8 = undefined;
                if (!(var9 === var2)) {
                    _fun112287_ip = 395;
                    continue _fun112287
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
                    _fun112287_ip = 381;
                    continue _fun112287
                }
            case 368:
                var2 = var9["bhdB9+"];
                var2 = var11.bind(var12)(var2);
                _fun112287_ip = 392;
                continue _fun112287;
            case 381:
                var9 = var9.BDiXtV;
                var2 = var11.bind(var12)(var9);
            case 392:
                var8 = var2;
            case 395:
                _fun112287_ip = 471;
                continue _fun112287;
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
                    _fun112287_ip = 457;
                    continue _fun112287
                }
            case 444:
                var2 = var9.QxEYDj;
                var2 = var11.bind(var12)(var2);
                _fun112287_ip = 468;
                continue _fun112287;
            case 457:
                var9 = var9.vzfxmY;
                var2 = var11.bind(var12)(var9);
            case 468:
                var8 = var2;
            case 471:
                _fun112287_ip = 547;
                continue _fun112287;
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
                    _fun112287_ip = 533;
                    continue _fun112287
                }
            case 520:
                var1 = var2.E8euSk;
                var1 = var9.bind(var11)(var1);
                _fun112287_ip = 544;
                continue _fun112287;
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
                    _fun112287_ip = 695;
                    continue _fun112287
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
                    _fun112287_ip = 667;
                    continue _fun112287
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
                    _fun112287_ip = 685;
                    continue _fun112287
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
    var _closure1_slot31 = var3;
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
    var _closure1_slot32 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var11.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
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
    var8 = var4.jsx;
    var _closure1_slot17 = var8;
    var7 = 26;
    var4 = var6[var7];
    var4 = var5.bind(var0)(var4);
    var9 = var4.TableRowIcon;
    var4 = {};
    var10 = 27;
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var4.source = var10;
    var4 = var8.bind(var0)(var9, var4);
    var _closure1_slot18 = var4;
    var4 = var6[var7];
    var4 = var5.bind(var0)(var4);
    var9 = var4.TableRowIcon;
    var4 = {};
    var10 = 31;
    var10 = var6[var10];
    var10 = var5.bind(var0)(var10);
    var10 = var10.AppsIcon;
    var4.IconComponent = var10;
    var4 = var8.bind(var0)(var9, var4);
    var _closure1_slot19 = var4;
    var4 = var6[var7];
    var4 = var5.bind(var0)(var4);
    var9 = var4.TableRowIcon;
    var4 = {};
    var10 = 34;
    var10 = var6[var10];
    var10 = var5.bind(var0)(var10);
    var10 = var10.ChatIcon;
    var4.IconComponent = var10;
    var4 = var8.bind(var0)(var9, var4);
    var _closure1_slot20 = var4;
    var4 = var6[var7];
    var4 = var5.bind(var0)(var4);
    var9 = var4.TableRowIcon;
    var4 = {};
    var10 = 35;
    var10 = var6[var10];
    var10 = var5.bind(var0)(var10);
    var10 = var10.SoundboardIcon;
    var4.IconComponent = var10;
    var4 = var8.bind(var0)(var9, var4);
    var _closure1_slot21 = var4;
    var4 = var6[var7];
    var4 = var5.bind(var0)(var4);
    var9 = var4.TableRowIcon;
    var4 = {};
    var10 = 44;
    var10 = var6[var10];
    var10 = var5.bind(var0)(var10);
    var10 = var10.HeadphonesSlashIcon;
    var4.IconComponent = var10;
    var10 = 45;
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var4.source = var10;
    var4 = var8.bind(var0)(var9, var4);
    var _closure1_slot22 = var4;
    var4 = 47;
    var9 = var6[var4];
    var9 = var5.bind(var0)(var9);
    var10 = var9.TableRowArrow;
    var9 = {};
    var9 = var8.bind(var0)(var10, var9);
    var _closure1_slot23 = var9;
    var9 = var6[var7];
    var9 = var5.bind(var0)(var9);
    var10 = var9.TableRowIcon;
    var9 = {};
    var12 = 50;
    var12 = var6[var12];
    var12 = var5.bind(var0)(var12);
    var12 = var12.GroupPlusIcon;
    var9.IconComponent = var12;
    var12 = 51;
    var12 = var6[var12];
    var12 = var11.bind(var0)(var12);
    var9.source = var12;
    var12 = 'blurple';
    var9.variant = var12;
    var9 = var8.bind(var0)(var10, var9);
    var _closure1_slot24 = var9;
    var9 = var6[var4];
    var9 = var5.bind(var0)(var9);
    var10 = var9.TableRowArrow;
    var9 = {};
    var9 = var8.bind(var0)(var10, var9);
    var _closure1_slot25 = var9;
    var9 = var6[var7];
    var9 = var5.bind(var0)(var9);
    var10 = var9.TableRowIcon;
    var9 = {};
    var12 = 54;
    var12 = var6[var12];
    var12 = var5.bind(var0)(var12);
    var12 = var12.VideoIcon;
    var9.IconComponent = var12;
    var12 = 55;
    var12 = var6[var12];
    var12 = var11.bind(var0)(var12);
    var9.source = var12;
    var9 = var8.bind(var0)(var10, var9);
    var _closure1_slot26 = var9;
    var9 = var6[var7];
    var9 = var5.bind(var0)(var9);
    var10 = var9.TableRowIcon;
    var9 = {};
    var12 = 58;
    var12 = var6[var12];
    var12 = var11.bind(var0)(var12);
    var9.source = var12;
    var9 = var8.bind(var0)(var10, var9);
    var _closure1_slot27 = var9;
    var9 = var6[var7];
    var9 = var5.bind(var0)(var9);
    var10 = var9.TableRowIcon;
    var9 = {};
    var12 = 61;
    var12 = var6[var12];
    var12 = var11.bind(var0)(var12);
    var9.source = var12;
    var9 = var8.bind(var0)(var10, var9);
    var _closure1_slot28 = var9;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var9 = var7.TableRowIcon;
    var7 = {};
    var10 = 63;
    var10 = var6[var10];
    var10 = var5.bind(var0)(var10);
    var10 = var10.SettingsIcon;
    var7.IconComponent = var10;
    var10 = 64;
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var7.source = var10;
    var7 = var8.bind(var0)(var9, var7);
    var _closure1_slot29 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.TableRowArrow;
    var4 = {};
    var4 = var8.bind(var0)(var7, var4);
    var _closure1_slot30 = var4;
    var4 = 67;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/controls/VoicePanelVoiceControlsButtons.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0() {
        _fun112292: for (var _fun112292_ip = 0;;) switch (_fun112292_ip) {
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
                    _fun112292_ip = 181;
                    continue _fun112292
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
                    var3 = _closure1_slot31;
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
        _fun112294: for (var _fun112294_ip = 0;;) switch (_fun112294_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channel;
                var _closure2_slot0 = var2;
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 28;
                var0 = var7[var0];
                var4 = undefined;
                var3 = var1.bind(var4)(var0);
                var1 = var3.useHangStatusExperiment;
                var0 = {};
                var8 = var2.guild_id;
                var0.guildId = var8;
                var8 = 'HangStatusButton';
                var0.location = var8;
                var0 = var1.bind(var3)(var0);
                var3 = var0.enableHangStatus;
                var1 = _closure1_slot1;
                var0 = 29;
                var0 = var7[var0];
                var1 = var1.bind(var4)(var0);
                var0 = true;
                var1 = var1.bind(var4)(var2, var0);
                var0 = null;
                if (!var3) {
                    _fun112294_ip = 217;
                    continue _fun112294
                }
            case 104:
                var0 = null;
                if (!var1) {
                    _fun112294_ip = 217;
                    continue _fun112294
                }
            case 109:
                var3 = _closure1_slot17;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 25;
                var1 = var9[var1];
                var1 = var8.bind(var4)(var1);
                var2 = var1.TableRow;
                var1 = {};
                var6 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 30;
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
                var1.onPress = var6;
                var5 = _closure1_slot18;
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
            case 217:
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
        var1 = 32;
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
                var0 = 33;
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
        var4 = _closure1_slot19;
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
        var1 = 32;
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
                var0 = 33;
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
        var4 = _closure1_slot20;
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
        _fun112302: for (var _fun112302_ip = 0;;) switch (_fun112302_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channel;
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 36;
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
                    _fun112302_ip = 196;
                    continue _fun112302
                }
            case 91:
                var3 = _closure1_slot17;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 25;
                var1 = var12[var1];
                var1 = var11.bind(var4)(var1);
                var2 = var1.TableRow;
                var1 = {};
                var8 = 17;
                var9 = var12[var8];
                var9 = var11.bind(var4)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8.ABjMWI;
                var8 = var9.bind(var10)(var8);
                var1.label = var8;
                var1.onPress = var7;
                var1.disabled = var6;
                var5 = _closure1_slot21;
                var1.icon = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 196:
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
        _fun112305: for (var _fun112305_ip = 0;;) switch (_fun112305_ip) {
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
                    _fun112306: for (var _fun112306_ip = 0;;) switch (_fun112306_ip) {
                        case 0:
                            var1 = _closure1_slot9;
                            var0 = var1.getLastActiveStream;
                            var1 = var0.bind(var1)();
                            var4 = null;
                            var3 = var4 != var1;
                            var0 = null;
                            if (!var3) {
                                _fun112306_ip = 57;
                                continue _fun112306
                            }
                        case 28:
                            var3 = var1.ownerId;
                            var5 = _closure1_slot10;
                            var2 = var5.getId;
                            var2 = var2.bind(var5)();
                            var0 = null;
                            if (!(var3 !== var2)) {
                                _fun112306_ip = 57;
                                continue _fun112306
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
                    _fun112307: for (var _fun112307_ip = 0;;) switch (_fun112307_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            var1 = var0 == var1;
                            var0 = 0;
                            if (var1) {
                                _fun112307_ip = 98;
                                continue _fun112307
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
                                _fun112307_ip = 98;
                                continue _fun112307
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
                    _fun112308: for (var _fun112308_ip = 0;;) switch (_fun112308_ip) {
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
                                _fun112308_ip = 98;
                                continue _fun112308
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
                                _fun112308_ip = 153;
                                continue _fun112308
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
                    _fun112305_ip = 413;
                    continue _fun112305
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
                    _fun112305_ip = 313;
                    continue _fun112305
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
        var0 = 46;
        var0 = var8[var0];
        var0 = var7.bind(var3)(var0);
        var1 = var0.TableSwitchRow;
        var0 = {};
        var4 = _closure1_slot22;
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
        var5 = _closure1_slot32;
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
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 48;
        var0 = var9[var0];
        var3 = undefined;
        var1 = var8.bind(var3)(var0);
        var0 = var1.useMaskedSpeakerStates;
        var0 = var0.bind(var1)();
        var11 = var0.routeSource;
        var2 = _closure1_slot17;
        var0 = 25;
        var0 = var9[var0];
        var0 = var8.bind(var3)(var0);
        var1 = var0.TableRow;
        var0 = {};
        var10 = _closure1_slot17;
        var6 = 26;
        var6 = var9[var6];
        var6 = var8.bind(var3)(var6);
        var7 = var6.TableRowIcon;
        var6 = {};
        var6.source = var11;
        var6 = var10.bind(var3)(var7, var6);
        var0.icon = var6;
        var5 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 49;
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
        var0.onPress = var5;
        var5 = 17;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5["A/Ly/2"];
        var5 = var6.bind(var7)(var5);
        var0.label = var5;
        var4 = _closure1_slot23;
        var0.trailing = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.AudioRouteButton = var3;
    var3 = function arg0() {
        _fun112314: for (var _fun112314_ip = 0;;) switch (_fun112314_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.channel;
                var1 = var1.connected;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 52;
                var2 = var8[var2];
                var4 = undefined;
                var7 = var6.bind(var4)(var2);
                var3 = var7.useCanInviteMembers;
                var2 = var0.id;
                var3 = var3.bind(var7)(var2);
                var7 = _closure1_slot1;
                var2 = 20;
                var2 = var8[var2];
                var2 = var7.bind(var4)(var2);
                var7 = var2.bind(var4)(var0);
                var2 = 53;
                var2 = var8[var2];
                var6 = var6.bind(var4)(var2);
                var2 = var6.useInviteMembersCallback;
                var0 = var0.id;
                var6 = var2.bind(var6)(var0);
                var0 = null;
                if (var7) {
                    _fun112314_ip = 229;
                    continue _fun112314
                }
            case 109:
                var0 = null;
                if (!var3) {
                    _fun112314_ip = 229;
                    continue _fun112314
                }
            case 114:
                var0 = null;
                if (!var1) {
                    _fun112314_ip = 229;
                    continue _fun112314
                }
            case 119:
                var3 = _closure1_slot17;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 25;
                var1 = var10[var1];
                var1 = var9.bind(var4)(var1);
                var2 = var1.TableRow;
                var1 = {};
                var1.onPress = var6;
                var6 = _closure1_slot24;
                var1.icon = var6;
                var6 = 17;
                var7 = var10[var6];
                var7 = var9.bind(var4)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6["f1+QIK"];
                var6 = var7.bind(var8)(var6);
                var1.label = var6;
                var5 = _closure1_slot25;
                var1.trailing = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 229:
                return var0;
        }
    };
    var2.InviteButton = var3;
    var3 = function arg0() {
        var1 = arg0;
        var9 = var1.channelId;
        var _closure2_slot0 = var9;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 21;
        var1 = var8[var1];
        var3 = undefined;
        var6 = var7.bind(var3)(var1);
        var5 = var6.useStateFromStores;
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
        var6 = var5.bind(var6)(var2, var1);
        var _closure2_slot1 = var6;
        var5 = _closure1_slot4;
        var2 = var5.useCallback;
        var1 = new Array(2);
        var1[0] = var9;
        var1[1] = var6;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 56;
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
        var5 = var2.bind(var5)(var0, var1);
        var2 = _closure1_slot17;
        var0 = 46;
        var0 = var8[var0];
        var0 = var7.bind(var3)(var0);
        var1 = var0.TableSwitchRow;
        var0 = {};
        var4 = _closure1_slot26;
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
        _fun112318: for (var _fun112318_ip = 0;;) switch (_fun112318_ip) {
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
                    _fun112318_ip = 250;
                    continue _fun112318
                }
            case 142:
                var3 = _closure1_slot17;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 46;
                var1 = var9[var1];
                var1 = var8.bind(var4)(var1);
                var2 = var1.TableSwitchRow;
                var1 = {};
                var6 = !var6;
                var1.value = var6;
                var5 = function() {
                    _fun112320: for (var _fun112320_ip = 0;;) switch (_fun112320_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (var1) {
                                _fun112320_ip = 56;
                                continue _fun112320
                            }
                        case 12:
                            var1 = _closure2_slot0;
                            if (var1) {
                                _fun112320_ip = 56;
                                continue _fun112320
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
        var4 = _closure1_slot27;
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
            _fun112327: for (var _fun112327_ip = 0;;) switch (_fun112327_ip) {
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
                        _fun112327_ip = 63;
                        continue _fun112327
                    }
                case 58:
                    var6 = var5.location;
                case 63:
                    var1.location = var6;
                    var6 = var4 == var5;
                    var4 = undefined;
                    if (var6) {
                        _fun112327_ip = 81;
                        continue _fun112327
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
        _fun112328: for (var _fun112328_ip = 0;;) switch (_fun112328_ip) {
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
                    _fun112328_ip = 127;
                    continue _fun112328
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
        var0 = 46;
        var0 = var8[var0];
        var0 = var7.bind(var3)(var0);
        var1 = var0.TableSwitchRow;
        var0 = {};
        var6 = _closure1_slot28;
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
            var0 = 65;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.showVoiceSettingsActionSheet;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var5 = var2.bind(var3)(var0, var1);
        var3 = _closure1_slot17;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 25;
        var0 = var9[var0];
        var2 = undefined;
        var0 = var8.bind(var2)(var0);
        var1 = var0.TableRow;
        var0 = {};
        var0.onPress = var5;
        var5 = _closure1_slot29;
        var0.icon = var5;
        var5 = 17;
        var6 = var9[var5];
        var6 = var8.bind(var2)(var6);
        var10 = var6.intl;
        var7 = var10.string;
        var6 = var9[var5];
        var6 = var8.bind(var2)(var6);
        var6 = var6.t;
        var6 = var6.NiTd0e;
        var6 = var7.bind(var10)(var6);
        var0.label = var6;
        var6 = var9[var5];
        var6 = var8.bind(var2)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5["16SG+O"];
        var5 = var6.bind(var7)(var5);
        var0.subLabel = var5;
        var4 = _closure1_slot30;
        var0.trailing = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.VoiceSettingsButton = var3;
    var3 = function arg0() {
        _fun112334: for (var _fun112334_ip = 0;;) switch (_fun112334_ip) {
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
                    _fun112334_ip = 188;
                    continue _fun112334
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
                    _fun112334_ip = 168;
                    continue _fun112334
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
        _fun112335: for (var _fun112335_ip = 0;;) switch (_fun112335_ip) {
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
                    _fun112335_ip = 137;
                    continue _fun112335
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1371, 3945, 3199, 7933, 3711, 1216, 3473, 3518, 660, 11789, 3507, 33, 3933, 11816, 1307, 1234, 8937, 5343, 11748, 566, 3150, 8939, 8955, 4876, 4883, 14340, 3611, 14343, 14345, 8468, 9718, 14393, 4814, 8594, 14330, 9991, 795, 44, 8573, 8570, 478, 671, 8706, 14341, 5344, 4884, 8915, 8924, 9069, 11770, 14344, 14329, 8598, 11755, 7918, 11826, 9756, 7981, 11814, 6584, 806, 5434, 14339, 11760, 11813, 2]);