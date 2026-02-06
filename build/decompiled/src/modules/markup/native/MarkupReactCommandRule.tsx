// modules/markup/native/MarkupReactCommandRule.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var3 = function arg0() {
        _fun61962: for (var _fun61962_ip = 0;;) switch (_fun61962_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.appLauncherNavigator;
                var6 = var1.channelId;
                var9 = var1.currentText;
                var3 = var1.onSetCommand;
                var _closure2_slot0 = var3;
                var4 = var1.onOpenCustomKeyboard;
                var _closure2_slot1 = var4;
                var7 = var1.commandId;
                var10 = var1.commandName;
                var8 = undefined;
                var _closure2_slot2 = var8;
                var5 = _closure1_slot4;
                var1 = var5.getChannel;
                var5 = var1.bind(var5)(var6);
                var1 = null;
                if (!(var1 != var5)) {
                    _fun61962_ip = 95;
                    continue _fun61962
                }
            case 83:
                var6 = var5.guild_id;
                if (!(var1 == var6)) {
                    _fun61962_ip = 397;
                    continue _fun61962
                }
            case 95:
                var6 = '';
                if (!(var6 !== var9)) {
                    _fun61962_ip = 388;
                    continue _fun61962
                }
            case 106:
                var14 = _closure1_slot1;
                var16 = _closure1_slot2;
                var6 = 10;
                var6 = var16[var6];
                var11 = var14.bind(var8)(var6);
                var9 = var11.show;
                var6 = {};
                var15 = _closure1_slot0;
                var12 = 11;
                var13 = var16[var12];
                var13 = var15.bind(var8)(var13);
                var18 = var13.intl;
                var17 = var18.string;
                var13 = var16[var12];
                var13 = var15.bind(var8)(var13);
                var13 = var13.t;
                var13 = var13.pe26Cj;
                var13 = var17.bind(var18)(var13);
                var6.title = var13;
                var13 = var16[var12];
                var13 = var15.bind(var8)(var13);
                var18 = var13.intl;
                var17 = var18.string;
                var13 = var16[var12];
                var13 = var15.bind(var8)(var13);
                var13 = var13.t;
                var13 = var13.VkKicb;
                var13 = var17.bind(var18)(var13);
                var6.confirmText = var13;
                var13 = function() {
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
                var6.onConfirm = var13;
                var13 = var16[var12];
                var13 = var15.bind(var8)(var13);
                var18 = var13.intl;
                var17 = var18.string;
                var13 = var16[var12];
                var13 = var15.bind(var8)(var13);
                var13 = var13.t;
                var13 = var13["ETE/oC"];
                var13 = var17.bind(var18)(var13);
                var6.cancelText = var13;
                var13 = 12;
                var13 = var16[var13];
                var13 = var14.bind(var8)(var13);
                var13 = var13.Colors;
                var13 = var13.BRAND;
                var6.confirmColor = var13;
                var13 = var16[var12];
                var13 = var15.bind(var8)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var8)(var12);
                var12 = var12.t;
                var12 = var12["+awCIy"];
                var12 = var13.bind(var14)(var12);
                var6.body = var12;
                var6 = var9.bind(var11)(var6);
                _fun61962_ip = 686;
                continue _fun61962;
            case 388:
                var3 = var3.bind(var8)();
                _fun61962_ip = 686;
                continue _fun61962;
            case 397:
                var3 = var10.includes;
                var9 = ' ';
                var3 = var3.bind(var10)(var9);
                var6 = var7;
                if (!var3) {
                    _fun61962_ip = 468;
                    continue _fun61962
                }
            case 419:
                var3 = _closure1_slot7;
                var7 = var7 + var3;
                var3 = var10.split;
                var10 = var3.bind(var10)(var9);
                var9 = var10.slice;
                var3 = 1;
                var10 = var9.bind(var10)(var3);
                var9 = var10.join;
                var3 = _closure1_slot7;
                var3 = var9.bind(var10)(var3);
                var6 = var7 + var3;
            case 468:
                _closure2_slot2 = var6;
                if (!(var1 != var2)) {
                    _fun61962_ip = 483;
                    continue _fun61962
                }
            case 476:
                if (!(var1 == var5)) {
                    _fun61962_ip = 688;
                    continue _fun61962
                }
            case 483:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 7;
                var3 = var9[var3];
                var7 = var7.bind(var8)(var3);
                var3 = var7.getRootNavigationRef;
                var7 = var3.bind(var7)();
                if (!(var1 != var7)) {
                    _fun61962_ip = 635;
                    continue _fun61962
                }
            case 517:
                var3 = var7.getState;
                var3 = var3.bind(var7)();
                var10 = var1 == var3;
                var9 = undefined;
                if (var10) {
                    _fun61962_ip = 556;
                    continue _fun61962
                }
            case 536:
                var3 = var3.routes;
                var10 = var1 == var3;
                var9 = undefined;
                if (var10) {
                    _fun61962_ip = 556;
                    continue _fun61962
                }
            case 551:
                var9 = var3.length;
            case 556:
                var3 = 1;
                if (!(var9 > var3)) {
                    _fun61962_ip = 635;
                    continue _fun61962
                }
            case 563:
                var9 = var7.getState;
                var10 = var9.bind(var7)();
                var11 = var1 == var10;
                var9 = undefined;
                if (var11) {
                    _fun61962_ip = 602;
                    continue _fun61962
                }
            case 582:
                var10 = var10.routes;
                var11 = var1 == var10;
                var9 = undefined;
                if (var11) {
                    _fun61962_ip = 602;
                    continue _fun61962
                }
            case 597:
                var9 = var10.length;
            case 602:
                var10 = var1 != var9;
                var1 = 0;
                if (!var10) {
                    _fun61962_ip = 614;
                    continue _fun61962
                }
            case 611:
                var1 = var9;
            case 614:
                if (!(var1 > var3)) {
                    _fun61962_ip = 635;
                    continue _fun61962
                }
            case 618:
                var9 = var7.goBack;
                var9 = var9.bind(var7)();
                var1 = var1 - 1;
                if (var1 > var3) {
                    _fun61962_ip = 618;
                    continue _fun61962
                }
            case 635:
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 8;
                var1 = var7[var1];
                var3 = var3.bind(var8)(var1);
                var1 = var3.hideActionSheet;
                var1 = var1.bind(var3)();
                var1 = global;
                var3 = var1.setTimeout;
                var1 = function() { // Environment: var0
                    var2 = _closure2_slot1;
                    var1 = {};
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 9;
                    var3 = var7[var0];
                    var0 = undefined;
                    var3 = var6.bind(var0)(var3);
                    var3 = var3.KeyboardTypes;
                    var3 = var3.APP_LAUNCHER;
                    var1.type = var3;
                    var3 = {};
                    var4 = _closure1_slot5;
                    var4 = var4.COMMAND_VIEW;
                    var3.initialRouteName = var4;
                    var4 = 6;
                    var4 = var7[var4];
                    var4 = var6.bind(var0)(var4);
                    var4 = var4.ApplicationCommandTriggerLocations;
                    var4 = var4.MENTION;
                    var3.analyticsLocation = var4;
                    var4 = {};
                    var5 = _closure2_slot2;
                    var4.commandId = var5;
                    var3.preSelectedCommand = var4;
                    var1.context = var3;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = 0;
                var0 = var3.bind(var8)(var1, var0);
            case 686:
                return var8;
            case 688:
                var1 = var2.navigate;
                var0 = {};
                var3 = _closure1_slot5;
                var3 = var3.COMMAND_VIEW;
                var0.name = var3;
                var3 = {};
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 6;
                var4 = var9[var4];
                var4 = var7.bind(var8)(var4);
                var4 = var4.ApplicationCommandTriggerLocations;
                var4 = var4.MENTION;
                var3.analyticsLocation = var4;
                var4 = {};
                var4.commandId = var6;
                var3.preSelectedCommand = var4;
                var4 = {};
                var6 = 'channel';
                var4.type = var6;
                var4.channel = var5;
                var3.context = var4;
                var0.params = var3;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var1 = function arg0, arg1() {
        _fun61965: for (var _fun61965_ip = 0;;) switch (_fun61965_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var0 = arg1;
                var _closure2_slot1 = var0;
                var2 = {};
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var6 = 11;
                var4 = var7[var6];
                var0 = undefined;
                var4 = var3.bind(var0)(var4);
                var9 = var4.intl;
                var8 = var9.string;
                var4 = var7[var6];
                var4 = var3.bind(var0)(var4);
                var4 = var4.t;
                var4 = var4["42H+Nb"];
                var4 = var8.bind(var9)(var4);
                var2.label = var4;
                var4 = 13;
                var4 = var7[var4];
                var4 = var3.bind(var0)(var4);
                var4 = var4.SlashBoxIcon;
                var2.IconComponent = var4;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 14;
                    var2 = var4[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var2);
                    var2 = var5.presentCommandCopied;
                    var2 = var2.bind(var5)();
                    var2 = 15;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.copy;
                    var6 = _closure1_slot8;
                    var5 = _closure2_slot0;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var1 = '';
                    var1 = var4.bind(var1)(var6, var5);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2.onPress = var4;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = 16;
                var2 = var7[var2];
                var2 = var3.bind(var0)(var2);
                var3 = var2.DeveloperMode;
                var2 = var3.getSetting;
                var2 = var2.bind(var3)();
                if (!var2) {
                    _fun61965_ip = 253;
                    continue _fun61965
                }
            case 152:
                var3 = var4.push;
                var2 = {};
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var9 = var8[var6];
                var9 = var7.bind(var0)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var6 = var8[var6];
                var6 = var7.bind(var0)(var6);
                var6 = var6.t;
                var6 = var6.oJ1Muw;
                var6 = var9.bind(var10)(var6);
                var2.label = var6;
                var6 = 17;
                var6 = var8[var6];
                var6 = var7.bind(var0)(var6);
                var6 = var6.IdIcon;
                var2.IconComponent = var6;
                var5 = function() {
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 14;
                    var1 = var3[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var1 = var4.presentIdCopied;
                    var1 = var1.bind(var4)();
                    var1 = 15;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.copy;
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2.onPress = var5;
                var2 = var3.bind(var4)(var2);
            case 253:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 18;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.showSimpleActionSheet;
                var1 = {};
                var5 = 'LongPressCommandMention';
                var1.key = var5;
                var1.options = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var _closure1_slot11 = var1;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var9 = var7[var0];
    var5 = arg3;
    var0 = undefined;
    var5 = var5.bind(var0)(var9);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.AppLauncherRouteName;
    var _closure1_slot5 = var8;
    var5 = var5.useAppLauncherNavigation;
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.SUB_COMMAND_KEY_SEPARATOR;
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.COMMAND_SENTINEL;
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.jsxs;
    var _closure1_slot9 = var5;
    var5 = 24;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/markup/native/MarkupReactCommandRule.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function arg0() {
        var0 = arg0;
        var8 = var0.node;
        var _closure2_slot0 = var8;
        var7 = var0.output;
        var6 = var0.state;
        var10 = var0.style;
        var11 = _closure1_slot3;
        var2 = var11.useContext;
        var5 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 19;
        var1 = var9[var1];
        var3 = undefined;
        var1 = var5.bind(var3)(var1);
        var1 = var1.AppLauncherContext;
        var2 = var2.bind(var11)(var1);
        var1 = null;
        var1 = var1 != var2;
        var _closure2_slot1 = var1;
        var1 = _closure1_slot6;
        var1 = var1.bind(var3)();
        var _closure2_slot2 = var1;
        var2 = _closure1_slot9;
        var0 = 20;
        var0 = var9[var0];
        var0 = var5.bind(var3)(var0);
        var1 = var0.Text;
        var0 = {};
        var0.style = var10;
        var10 = 'text-md/bold';
        var0.variant = var10;
        var10 = function() {
            _fun61969: for (var _fun61969_ip = 0;;) switch (_fun61969_ip) {
                case 0:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 21;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var2);
                    var2 = var4.getBestActiveInput;
                    var7 = var2.bind(var4)();
                    var _closure3_slot0 = var7;
                    var2 = _closure1_slot10;
                    var1 = {};
                    var6 = _closure2_slot1;
                    var5 = undefined;
                    if (!var6) {
                        _fun61969_ip = 63;
                        continue _fun61969
                    }
                case 59:
                    var5 = _closure2_slot2;
                case 63:
                    var1.appLauncherNavigator = var5;
                    var4 = _closure2_slot0;
                    var5 = var4.channelId;
                    var1.channelId = var5;
                    var5 = var4.commandId;
                    var1.commandId = var5;
                    var4 = var4.commandName;
                    var1.commandName = var4;
                    var4 = null;
                    var6 = var4 == var7;
                    var5 = undefined;
                    if (var6) {
                        _fun61969_ip = 124;
                        continue _fun61969
                    }
                case 114:
                    var6 = var7.getText;
                    var5 = var6.bind(var7)();
                case 124:
                    var6 = var4 != var5;
                    var4 = '';
                    if (!var6) {
                        _fun61969_ip = 138;
                        continue _fun61969
                    }
                case 135:
                    var4 = var5;
                case 138:
                    var1.currentText = var4;
                    var4 = function arg0() {
                        _fun61970: for (var _fun61970_ip = 0;;) switch (_fun61970_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var0 = null;
                                var2 = var0 == var2;
                                var0 = undefined;
                                if (var2) {
                                    _fun61970_ip = 36;
                                    continue _fun61970
                                }
                            case 18:
                                var3 = _closure3_slot0;
                                var2 = var3.openCustomKeyboard;
                                var1 = arg0;
                                var0 = var2.bind(var3)(var1);
                            case 36:
                                return var0;
                        }
                    };
                    var1.onOpenCustomKeyboard = var4;
                    var3 = function() {
                        _fun61971: for (var _fun61971_ip = 0;;) switch (_fun61971_ip) {
                            case 0:
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var0 = 22;
                                var2 = var4[var0];
                                var0 = undefined;
                                var2 = var3.bind(var0)(var2);
                                var2 = var2.bind(var0)();
                                var2 = 8;
                                var2 = var4[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.hideActionSheet;
                                var2 = var2.bind(var3)();
                                var2 = _closure3_slot0;
                                var4 = null;
                                if (!(var4 != var2)) {
                                    _fun61971_ip = 78;
                                    continue _fun61971
                                }
                            case 64:
                                var5 = _closure3_slot0;
                                var2 = var5.openSystemKeyboard;
                                var2 = var2.bind(var5)();
                            case 78:
                                var2 = _closure3_slot0;
                                var2 = var4 == var2;
                                var5 = undefined;
                                if (var2) {
                                    _fun61971_ip = 112;
                                    continue _fun61971
                                }
                            case 91:
                                var6 = _closure3_slot0;
                                var3 = var6.getApplicationCommandManager;
                                var3 = var3.bind(var6)();
                                var2 = var4 == var3;
                                var5 = var3;
                            case 112:
                                if (var2) {
                                    _fun61971_ip = 179;
                                    continue _fun61971
                                }
                            case 115:
                                var4 = var5.setPartialCommand;
                                var2 = _closure2_slot0;
                                var3 = var2.commandId;
                                var2 = var2.commandName;
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var1 = 6;
                                var1 = var7[var1];
                                var1 = var6.bind(var0)(var1);
                                var1 = var1.ApplicationCommandTriggerLocations;
                                var1 = var1.MENTION;
                                var1 = var4.bind(var5)(var3, var2, var1);
                            case 179:
                                return var0;
                        }
                    };
                    var1.onSetCommand = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var0.onPress = var10;
        var4 = function() {
            var3 = _closure1_slot11;
            var0 = _closure2_slot0;
            var2 = var0.commandName;
            var1 = var0.commandId;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0.onLongPress = var4;
        var4 = 23;
        var4 = var9[var4];
        var5 = var5.bind(var3)(var4);
        var4 = var5.smartOutput;
        var5 = var4.bind(var5)(var8, var7, var6);
        var4 = ['/'];
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var4;
    var2.handleTapCommandMention = var3;
    var2.handleLongPressCommandMention = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 1468, 4546, 6747, 33, 4548, 3922, 3280, 1567, 3938, 1234, 4876, 7752, 3149, 5296, 1348, 7754, 7756, 7760, 3943, 3720, 7763, 7765, 2]);