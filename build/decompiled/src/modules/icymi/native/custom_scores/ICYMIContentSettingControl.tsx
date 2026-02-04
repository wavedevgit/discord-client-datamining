// modules/icymi/native/custom_scores/ICYMIContentSettingControl.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun103599: for (var _fun103599_ip = 0;;) switch (_fun103599_ip) {
            case 0:
                var1 = arg0;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var4 = 8;
                var2 = var2[var4];
                var3 = undefined;
                var2 = var5.bind(var3)(var2);
                var2 = var2.ICYMICustomScore;
                var2 = var2.LESS;
                if (!(var2 !== var1)) {
                    _fun103599_ip = 87;
                    continue _fun103599
                }
            case 44:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var2.bind(var3)(var0);
                var0 = var0.ICYMICustomScore;
                var0 = var0.MORE;
                if (!(var0 !== var1)) {
                    _fun103599_ip = 82;
                    continue _fun103599
                }
            case 77:
                var0 = 1;
                return var0;
            case 82:
                var0 = 2;
                return var0;
            case 87:
                var0 = 0;
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        _fun103600: for (var _fun103600_ip = 0;;) switch (_fun103600_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.initialValue;
                var1 = var0.onValueUpdated;
                var _closure2_slot0 = var1;
                var6 = var0.disabled;
                var0 = _closure1_slot10;
                var3 = undefined;
                var14 = var0.bind(var3)();
                var1 = _closure1_slot4;
                var0 = var1.useState;
                var2 = var0.bind(var1)(var2);
                var1 = _closure1_slot3;
                var0 = 2;
                var1 = var1.bind(var3)(var2, var0);
                var10 = 0;
                var8 = var1[var10];
                var0 = 1;
                var0 = var1[var0];
                var _closure2_slot1 = var0;
                var0 = {};
                var15 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 9;
                var1 = var5[var2];
                var1 = var15.bind(var3)(var1);
                var11 = var1.intl;
                var7 = var11.string;
                var1 = var5[var2];
                var1 = var15.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.rdt65I;
                var1 = var7.bind(var11)(var1);
                var0.label = var1;
                var1 = '-1';
                var0.id = var1;
                var12 = _closure1_slot8;
                var16 = _closure1_slot1;
                var1 = 10;
                var7 = var5[var1];
                var11 = var16.bind(var3)(var7);
                var7 = {};
                var13 = 11;
                var13 = var5[var13];
                var13 = var16.bind(var3)(var13);
                var7.source = var13;
                var16 = var14.icon;
                var13 = new Array(2);
                var13[0] = var16;
                var16 = 8;
                var5 = var5[var16];
                var5 = var15.bind(var3)(var5);
                var5 = var5.ICYMICustomScore;
                var17 = var5.LESS;
                var5 = null;
                var15 = null;
                if (!(var8 === var17)) {
                    _fun103600_ip = 241;
                    continue _fun103600
                }
            case 235:
                var15 = var14.iconSelected;
            case 241:
                var13[1] = var15;
                var7.style = var13;
                var7 = var12.bind(var3)(var11, var7);
                var0.icon = var7;
                var0.page = var5;
                var7 = new Array(3);
                var7[0] = var0;
                var0 = {};
                var18 = _closure1_slot0;
                var17 = _closure1_slot2;
                var11 = var17[var2];
                var11 = var18.bind(var3)(var11);
                var13 = var11.intl;
                var12 = var13.string;
                var11 = var17[var2];
                var11 = var18.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.SnrG00;
                var11 = var12.bind(var13)(var11);
                var0.label = var11;
                var11 = '0';
                var0.id = var11;
                var13 = _closure1_slot8;
                var19 = _closure1_slot1;
                var11 = var17[var1];
                var12 = var19.bind(var3)(var11);
                var11 = {};
                var15 = 12;
                var15 = var17[var15];
                var15 = var19.bind(var3)(var15);
                var11.source = var15;
                var19 = var14.icon;
                var15 = new Array(2);
                var15[0] = var19;
                var17 = var17[var16];
                var17 = var18.bind(var3)(var17);
                var17 = var17.ICYMICustomScore;
                var18 = var17.DEFAULT;
                var17 = null;
                if (!(var8 === var18)) {
                    _fun103600_ip = 421;
                    continue _fun103600
                }
            case 415:
                var17 = var14.iconSelected;
            case 421:
                var15[1] = var17;
                var11.style = var15;
                var11 = var13.bind(var3)(var12, var11);
                var0.icon = var11;
                var0.page = var5;
                var7[1] = var0;
                var0 = {};
                var15 = _closure1_slot0;
                var13 = _closure1_slot2;
                var11 = var13[var2];
                var11 = var15.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var2 = var13[var2];
                var2 = var15.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.Rxe3jF;
                var2 = var11.bind(var12)(var2);
                var0.label = var2;
                var2 = '1';
                var0.id = var2;
                var11 = _closure1_slot8;
                var17 = _closure1_slot1;
                var1 = var13[var1];
                var2 = var17.bind(var3)(var1);
                var1 = {};
                var12 = 13;
                var12 = var13[var12];
                var12 = var17.bind(var3)(var12);
                var1.source = var12;
                var17 = var14.icon;
                var12 = new Array(2);
                var12[0] = var17;
                var13 = var13[var16];
                var13 = var15.bind(var3)(var13);
                var13 = var13.ICYMICustomScore;
                var15 = var13.MORE;
                var13 = null;
                if (!(var8 === var15)) {
                    _fun103600_ip = 597;
                    continue _fun103600
                }
            case 591:
                var13 = var14.iconSelected;
            case 597:
                var12[1] = var13;
                var1.style = var12;
                var1 = var11.bind(var3)(var2, var1);
                var0.icon = var1;
                var0.page = var5;
                var7[2] = var0;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 14;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.useSegmentedControlState;
                var0 = {};
                var0.pageWidth = var10;
                var9 = function arg0() {
                    _fun103601: for (var _fun103601_ip = 0;;) switch (_fun103601_ip) {
                        case 0:
                            var5 = arg0;
                            var3 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var4 = 8;
                            var2 = var0[var4];
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.ICYMICustomScore;
                            var2 = var2.DEFAULT;
                            var3 = 0;
                            if (!(var3 !== var5)) {
                                _fun103601_ip = 84;
                                continue _fun103601
                            }
                        case 46:
                            var3 = 2;
                            if (!(var3 === var5)) {
                                _fun103601_ip = 113;
                                continue _fun103601
                            }
                        case 53:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var4];
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.ICYMICustomScore;
                            var2 = var3.MORE;
                            _fun103601_ip = 113;
                            continue _fun103601;
                        case 84:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var4];
                            var1 = var3.bind(var0)(var1);
                            var1 = var1.ICYMICustomScore;
                            var2 = var1.LESS;
                        case 113:
                            var3 = _closure2_slot1;
                            var3 = var3.bind(var0)(var2);
                            var1 = _closure2_slot0;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                    }
                };
                var0.onSetActiveIndex = var9;
                var0.items = var7;
                var7 = _closure1_slot11;
                var7 = var7.bind(var3)(var8);
                var0.defaultIndex = var7;
                var7 = var1.bind(var2)(var0);
                var2 = _closure1_slot8;
                var1 = _closure1_slot5;
                var0 = {};
                var5 = null;
                if (!var6) {
                    _fun103600_ip = 726;
                    continue _fun103600
                }
            case 707:
                var8 = {};
                var9 = 0.7;
                var8.opacity = var9;
                var5 = var8;
            case 726:
                var0.style = var5;
                var5 = 'auto';
                if (!var6) {
                    _fun103600_ip = 741;
                    continue _fun103600
                }
            case 737:
                var5 = 'none';
            case 741:
                var0.pointerEvents = var5;
                var6 = _closure1_slot8;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 15;
                var4 = var8[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.SegmentedControl;
                var4 = {};
                var8 = 'experimental_Large';
                var4.variant = var8;
                var4.state = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
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
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 7;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.marginVertical = var11;
    var3.customScoreWrapper = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.marginTop = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var8.marginHorizontal = var11;
    var3.warningText = var8;
    var8 = {
        'width': 24,
        'height': 24
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_MUTED;
    var8.tintColor = var11;
    var3.icon = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_TEXT_ACTIVE;
    var8.tintColor = var11;
    var3.iconSelected = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.marginTop = var9;
    var3.muted = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/icymi/native/custom_scores/ICYMIContentSettingControl.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun103602: for (var _fun103602_ip = 0;;) switch (_fun103602_ip) {
            case 0:
                var1 = arg0;
                var20 = var1.guild;
                var5 = var20.id;
                var _closure2_slot0 = var5;
                var13 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 16;
                var1 = var11[var1];
                var3 = undefined;
                var7 = var13.bind(var3)(var1);
                var4 = var7.useStateFromStores;
                var1 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getCustomGuildScore;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var4.bind(var7)(var2, var1);
                var1 = 8;
                var2 = var11[var1];
                var4 = var13.bind(var3)(var2);
                var2 = var4.numberToCustomScore;
                var19 = var2.bind(var4)(var7);
                var _closure2_slot1 = var19;
                var1 = var11[var1];
                var1 = var13.bind(var3)(var1);
                var1 = var1.ICYMICustomScore;
                var1 = var1.MUTED;
                var18 = var19 === var1;
                var7 = _closure1_slot4;
                var4 = var7.useCallback;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function(arg0) { // Environment: var0
                    _fun103604: for (var _fun103604_ip = 0;;) switch (_fun103604_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 17;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.customScoreGuild;
                            var1 = {};
                            var5 = _closure2_slot0;
                            var1.guildId = var5;
                            var5 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var4 = 8;
                            var6 = var8[var4];
                            var7 = var5.bind(var0)(var6);
                            var6 = var7.customScoreToNumber;
                            var4 = var8[var4];
                            var4 = var5.bind(var0)(var4);
                            var5 = var4.ICYMICustomScore;
                            var4 = arg0;
                            if (var4) {
                                _fun103604_ip = 104;
                                continue _fun103604
                            }
                        case 91:
                            var4 = var5.MUTED;
                            var4 = var6.bind(var7)(var4);
                            _fun103604_ip = 115;
                            continue _fun103604;
                        case 104:
                            var5 = var5.DEFAULT;
                            var4 = var6.bind(var7)(var5);
                        case 115:
                            var1.guildScore = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var17 = var4.bind(var7)(var1, var2);
                var4 = _closure1_slot4;
                var2 = var4.useCallback;
                var1 = new Array(2);
                var1[0] = var19;
                var1[1] = var5;
                var0 = function(arg0) { // Environment: var0
                    _fun103605: for (var _fun103605_ip = 0;;) switch (_fun103605_ip) {
                        case 0:
                            var5 = arg0;
                            var0 = _closure2_slot1;
                            if (!(var0 !== var5)) {
                                _fun103605_ip = 92;
                                continue _fun103605
                            }
                        case 14:
                            var1 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var0 = 17;
                            var0 = var7[var0];
                            var6 = undefined;
                            var2 = var1.bind(var6)(var0);
                            var1 = var2.customScoreGuild;
                            var0 = {};
                            var4 = _closure2_slot0;
                            var0.guildId = var4;
                            var4 = _closure1_slot0;
                            var3 = 8;
                            var3 = var7[var3];
                            var4 = var4.bind(var6)(var3);
                            var3 = var4.customScoreToNumber;
                            var3 = var3.bind(var4)(var5);
                            var0.guildScore = var3;
                            var0 = var1.bind(var2)(var0);
                        case 92:
                            var0 = undefined;
                            return var0;
                    }
                };
                var16 = var2.bind(var4)(var0, var1);
                var0 = _closure1_slot10;
                var9 = var0.bind(var3)();
                var2 = _closure1_slot9;
                var1 = _closure1_slot5;
                var0 = {};
                var8 = _closure1_slot8;
                var5 = 18;
                var4 = var11[var5];
                var4 = var13.bind(var3)(var4);
                var7 = var4.Text;
                var4 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-default'
                };
                var12 = 9;
                var10 = var11[var12];
                var10 = var13.bind(var3)(var10);
                var15 = var10.intl;
                var14 = var15.string;
                var10 = var11[var12];
                var10 = var13.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.Clq6km;
                var10 = var14.bind(var15)(var10);
                var4.children = var10;
                var7 = var8.bind(var3)(var7, var4);
                var4 = new Array(5);
                var4[0] = var7;
                var10 = _closure1_slot8;
                var7 = var11[var5];
                var7 = var13.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'variant': 'text-xs/normal',
                    'color': 'text-default'
                };
                var14 = var11[var12];
                var14 = var13.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.format;
                var11 = var11[var12];
                var11 = var13.bind(var3)(var11);
                var11 = var11.t;
                var13 = var11["0DhU2P"];
                var11 = {};
                var20 = var20.name;
                var11.guildName = var20;
                var11 = var14.bind(var15)(var13, var11);
                var7.children = var11;
                var7 = var10.bind(var3)(var8, var7);
                var4[1] = var7;
                var7 = null;
                if (var18) {
                    _fun103602_ip = 476;
                    continue _fun103602
                }
            case 420:
                var11 = _closure1_slot8;
                var10 = _closure1_slot5;
                var8 = {};
                var13 = var9.customScoreWrapper;
                var8.style = var13;
                var15 = _closure1_slot8;
                var14 = _closure1_slot12;
                var13 = {};
                var13.initialValue = var19;
                var13.onValueUpdated = var16;
                var13 = var15.bind(var3)(var14, var13);
                var8.children = var13;
                var7 = var11.bind(var3)(var10, var8);
            case 476:
                var4[2] = var7;
                var13 = _closure1_slot8;
                var10 = _closure1_slot5;
                var7 = {};
                var8 = var18;
                if (!var8) {
                    _fun103602_ip = 502;
                    continue _fun103602
                }
            case 496:
                var8 = var9.muted;
            case 502:
                var7.style = var8;
                var16 = _closure1_slot8;
                var11 = _closure1_slot0;
                var8 = _closure1_slot2;
                var14 = 19;
                var14 = var8[var14];
                var14 = var11.bind(var3)(var14);
                var15 = var14.TableSwitchRow;
                var14 = {};
                var18 = !var18;
                var14.value = var18;
                var14.onValueChange = var17;
                var17 = var8[var12];
                var17 = var11.bind(var3)(var17);
                var19 = var17.intl;
                var18 = var19.string;
                var17 = var8[var12];
                var17 = var11.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.oujX73;
                var17 = var18.bind(var19)(var17);
                var14.label = var17;
                var17 = true;
                var14.start = var17;
                var14.end = var17;
                var14 = var16.bind(var3)(var15, var14);
                var7.children = var14;
                var7 = var13.bind(var3)(var10, var7);
                var4[3] = var7;
                var7 = _closure1_slot8;
                var5 = var8[var5];
                var5 = var11.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-xs/normal',
                    'color': 'text-muted'
                };
                var9 = var9.warningText;
                var5.style = var9;
                var9 = var8[var12];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var8[var12];
                var8 = var11.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.vRVs07;
                var8 = var9.bind(var10)(var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[4] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.GuildScoreSettings = var3;
    var1 = function arg0() {
        _fun103606: for (var _fun103606_ip = 0;;) switch (_fun103606_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.guild;
                var8 = var2.channel;
                var5 = var1.id;
                var _closure2_slot0 = var5;
                var7 = var8.id;
                var _closure2_slot1 = var7;
                var13 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 16;
                var1 = var11[var2];
                var3 = undefined;
                var12 = var13.bind(var3)(var1);
                var10 = var12.useStateFromStores;
                var1 = _closure1_slot7;
                var9 = new Array(2);
                var9[0] = var1;
                var4 = _closure1_slot6;
                var9[1] = var4;
                var4 = function() { // Environment: var0
                    _fun103607: for (var _fun103607_ip = 0;;) switch (_fun103607_ip) {
                        case 0:
                            var5 = _closure1_slot7;
                            var4 = var5.getCustomChannelScore;
                            var3 = _closure2_slot0;
                            var0 = _closure2_slot1;
                            var0 = var4.bind(var5)(var3, var0);
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var5 = 8;
                            var3 = var3[var5];
                            var4 = undefined;
                            var3 = var6.bind(var4)(var3);
                            var3 = var3.ICYMICustomScore;
                            var3 = var3.UNKNOWN;
                            if (!(var0 === var3)) {
                                _fun103607_ip = 135;
                                continue _fun103607
                            }
                        case 68:
                            var7 = _closure1_slot6;
                            var6 = var7.isChannelMuted;
                            var3 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = var6.bind(var7)(var3, var1);
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var5];
                            var2 = var3.bind(var4)(var2);
                            var2 = var2.ICYMICustomScore;
                            if (var1) {
                                _fun103607_ip = 126;
                                continue _fun103607
                            }
                        case 118:
                            var1 = var2.DEFAULT;
                            _fun103607_ip = 132;
                            continue _fun103607;
                        case 126:
                            var1 = var2.MUTED;
                        case 132:
                            var0 = var1;
                        case 135:
                            return var0;
                    }
                };
                var21 = var10.bind(var12)(var9, var4);
                var _closure2_slot2 = var21;
                var9 = _closure1_slot1;
                var4 = 20;
                var4 = var11[var4];
                var4 = var9.bind(var3)(var4);
                var17 = true;
                var22 = var4.bind(var3)(var8, var17);
                var2 = var11[var2];
                var8 = var13.bind(var3)(var2);
                var4 = var8.useStateFromStores;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getCustomGuildScore;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var4.bind(var8)(var2, var1);
                var1 = 8;
                var2 = var11[var1];
                var4 = var13.bind(var3)(var2);
                var2 = var4.numberToCustomScore;
                var4 = var2.bind(var4)(var8);
                var2 = var11[var1];
                var2 = var13.bind(var3)(var2);
                var2 = var2.ICYMICustomScore;
                var2 = var2.MUTED;
                var18 = var4 === var2;
                var1 = var11[var1];
                var1 = var13.bind(var3)(var1);
                var1 = var1.ICYMICustomScore;
                var1 = var1.MUTED;
                var20 = var21 === var1;
                var8 = _closure1_slot4;
                var4 = var8.useCallback;
                var2 = new Array(3);
                var2[0] = var21;
                var2[1] = var5;
                var2[2] = var7;
                var1 = function(arg0) { // Environment: var0
                    _fun103609: for (var _fun103609_ip = 0;;) switch (_fun103609_ip) {
                        case 0:
                            var6 = arg0;
                            var0 = _closure2_slot2;
                            if (!(var0 !== var6)) {
                                _fun103609_ip = 115;
                                continue _fun103609
                            }
                        case 14:
                            var1 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var0 = 17;
                            var0 = var8[var0];
                            var7 = undefined;
                            var2 = var1.bind(var7)(var0);
                            var1 = var2.customScoreGuild;
                            var0 = {};
                            var4 = _closure2_slot0;
                            var0.guildId = var4;
                            var4 = {};
                            var5 = _closure2_slot1;
                            var4.channelId = var5;
                            var5 = _closure1_slot0;
                            var3 = 8;
                            var3 = var8[var3];
                            var5 = var5.bind(var7)(var3);
                            var3 = var5.customScoreToNumber;
                            var3 = var3.bind(var5)(var6);
                            var4.score = var3;
                            var3 = new Array(1);
                            var3[0] = var4;
                            var0.channelScores = var3;
                            var0 = var1.bind(var2)(var0);
                        case 115:
                            var0 = undefined;
                            return var0;
                    }
                };
                var16 = var4.bind(var8)(var1, var2);
                var4 = _closure1_slot4;
                var2 = var4.useCallback;
                var1 = new Array(2);
                var1[0] = var7;
                var1[1] = var5;
                var0 = function(arg0) { // Environment: var0
                    _fun103610: for (var _fun103610_ip = 0;;) switch (_fun103610_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 17;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.customScoreGuild;
                            var1 = {};
                            var5 = _closure2_slot0;
                            var1.guildId = var5;
                            var5 = {};
                            var6 = _closure2_slot1;
                            var5.channelId = var6;
                            var6 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var4 = 8;
                            var7 = var9[var4];
                            var8 = var6.bind(var0)(var7);
                            var7 = var8.customScoreToNumber;
                            var4 = var9[var4];
                            var4 = var6.bind(var0)(var4);
                            var6 = var4.ICYMICustomScore;
                            var4 = arg0;
                            if (var4) {
                                _fun103610_ip = 114;
                                continue _fun103610
                            }
                        case 101:
                            var4 = var6.MUTED;
                            var4 = var7.bind(var8)(var4);
                            _fun103610_ip = 125;
                            continue _fun103610;
                        case 114:
                            var6 = var6.DEFAULT;
                            var4 = var7.bind(var8)(var6);
                        case 125:
                            var5.score = var4;
                            var4 = new Array(1);
                            var4[0] = var5;
                            var1.channelScores = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var19 = var2.bind(var4)(var0, var1);
                var0 = _closure1_slot10;
                var9 = var0.bind(var3)();
                var2 = _closure1_slot9;
                var1 = _closure1_slot5;
                var0 = {};
                var8 = _closure1_slot8;
                var5 = 18;
                var4 = var11[var5];
                var4 = var13.bind(var3)(var4);
                var7 = var4.Text;
                var4 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-default'
                };
                var12 = 9;
                var10 = var11[var12];
                var10 = var13.bind(var3)(var10);
                var15 = var10.intl;
                var14 = var15.string;
                var10 = var11[var12];
                var10 = var13.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10["0jRosn"];
                var10 = var14.bind(var15)(var10);
                var4.children = var10;
                var7 = var8.bind(var3)(var7, var4);
                var4 = new Array(5);
                var4[0] = var7;
                var10 = _closure1_slot8;
                var7 = var11[var5];
                var7 = var13.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'variant': 'text-xs/normal',
                    'color': 'text-default'
                };
                var14 = var11[var12];
                var14 = var13.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.format;
                var11 = var11[var12];
                var11 = var13.bind(var3)(var11);
                var11 = var11.t;
                var13 = var11.KzkF1j;
                var11 = {};
                var11.channelName = var22;
                var11 = var14.bind(var15)(var13, var11);
                var7.children = var11;
                var7 = var10.bind(var3)(var8, var7);
                var4[1] = var7;
                var7 = null;
                if (var20) {
                    _fun103606_ip = 587;
                    continue _fun103606
                }
            case 527:
                var11 = _closure1_slot8;
                var10 = _closure1_slot5;
                var8 = {};
                var13 = var9.customScoreWrapper;
                var8.style = var13;
                var15 = _closure1_slot8;
                var14 = _closure1_slot12;
                var13 = {};
                var13.disabled = var18;
                var13.initialValue = var21;
                var13.onValueUpdated = var16;
                var13 = var15.bind(var3)(var14, var13);
                var8.children = var13;
                var7 = var11.bind(var3)(var10, var8);
            case 587:
                var4[2] = var7;
                var13 = _closure1_slot8;
                var10 = _closure1_slot5;
                var7 = {};
                var8 = var20;
                if (!var8) {
                    _fun103606_ip = 613;
                    continue _fun103606
                }
            case 607:
                var8 = var9.muted;
            case 613:
                var7.style = var8;
                var16 = _closure1_slot8;
                var11 = _closure1_slot0;
                var8 = _closure1_slot2;
                var14 = 19;
                var14 = var8[var14];
                var14 = var11.bind(var3)(var14);
                var15 = var14.TableSwitchRow;
                var14 = {};
                var20 = !var20;
                var14.value = var20;
                var14.onValueChange = var19;
                var19 = var8[var12];
                var19 = var11.bind(var3)(var19);
                var21 = var19.intl;
                var20 = var21.string;
                var19 = var8[var12];
                var19 = var11.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.W2aJRS;
                var19 = var20.bind(var21)(var19);
                var14.label = var19;
                var14.disabled = var18;
                var14.start = var17;
                var14.end = var17;
                var14 = var16.bind(var3)(var15, var14);
                var7.children = var14;
                var7 = var13.bind(var3)(var10, var7);
                var4[3] = var7;
                var7 = _closure1_slot8;
                var5 = var8[var5];
                var5 = var11.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-xs/normal',
                    'color': 'text-muted'
                };
                var9 = var9.warningText;
                var5.style = var9;
                var9 = var8[var12];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var8[var12];
                var8 = var11.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["5lP6Ax"];
                var8 = var9.bind(var10)(var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[4] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ChannelScoreSettings = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 4303, 8878, 33, 1297, 671, 8887, 1234, 4086, 13537, 13538, 13539, 7798, 8191, 566, 13540, 3941, 5416, 4792, 2]);