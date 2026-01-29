// modules/user_profile/native/UserProfileAboutMeCardCommand.tsx
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
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsxs;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 4;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.MENTION_FOREGROUND;
    var9.color = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.MENTION_BACKGROUND;
    var9.backgroundColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9.marginEnd = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_12;
    var9.marginBottom = var10;
    var3.commandClickable = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot5 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: UserProfileAboutMeCardCommand, environment: var1
        var0 = arg0;
        var1 = var0.application;
        var _closure2_slot0 = var1;
        var4 = var0.command;
        var _closure2_slot1 = var4;
        var0 = var0.channel;
        var _closure2_slot2 = var0;
        var1 = _closure1_slot5;
        var3 = undefined;
        var5 = var1.bind(var3)();
        var2 = _closure1_slot4;
        var1 = _closure1_slot0;
        var7 = _closure1_slot2;
        var0 = 5;
        var0 = var7[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.Text;
        var0 = {};
        var7 = 'text-md/bold';
        var0.variant = var7;
        var7 = function() { // Original name: onPress, environment: var6
            _fun61667: for (var _fun61667_ip = 0;;) switch (_fun61667_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 6;
                    var1 = var3[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var1 = var5.getBestActiveInput;
                    var9 = var1.bind(var5)();
                    var _closure3_slot0 = var9;
                    var1 = 7;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.handleTapCommandMention;
                    var1 = {};
                    var6 = _closure2_slot2;
                    var6 = var6.id;
                    var1.channelId = var6;
                    var6 = null;
                    var8 = var6 == var9;
                    var7 = undefined;
                    if (var8) {
                        _fun61667_ip = 98;
                        continue _fun61667
                    }
                case 88:
                    var8 = var9.getText;
                    var7 = var8.bind(var9)();
                case 98:
                    var8 = var6 != var7;
                    var6 = '';
                    if (!var8) {
                        _fun61667_ip = 112;
                        continue _fun61667
                    }
                case 109:
                    var6 = var7;
                case 112:
                    var1.currentText = var6;
                    var5 = _closure2_slot1;
                    var6 = var5.id;
                    var1.commandId = var6;
                    var5 = var5.displayName;
                    var1.commandName = var5;
                    var5 = function(arg0) { // Original name: onOpenCustomKeyboard, environment: var4
                        _fun61668: for (var _fun61668_ip = 0;;) switch (_fun61668_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var0 = null;
                                var2 = var0 == var2;
                                var0 = undefined;
                                if (var2) {
                                    _fun61668_ip = 36;
                                    continue _fun61668
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
                    var1.onOpenCustomKeyboard = var5;
                    var4 = function() { // Original name: onSetCommand, environment: var4
                        _fun61669: for (var _fun61669_ip = 0;;) switch (_fun61669_ip) {
                            case 0:
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 8;
                                var1 = var1[var0];
                                var0 = undefined;
                                var8 = var2.bind(var0)(var1);
                                var7 = var8.track;
                                var1 = _closure1_slot3;
                                var2 = var1.POPULAR_APPLICATION_COMMAND_CLICKED;
                                var1 = {};
                                var3 = _closure2_slot0;
                                var5 = null;
                                var9 = var5 == var3;
                                var3 = undefined;
                                if (var9) {
                                    _fun61669_ip = 69;
                                    continue _fun61669
                                }
                            case 60:
                                var9 = _closure2_slot0;
                                var3 = var9.id;
                            case 69:
                                var1.application_id = var3;
                                var3 = _closure2_slot1;
                                var3 = var3.id;
                                var1.command_id = var3;
                                var11 = _closure2_slot2;
                                var3 = var11.getGuildId;
                                var3 = var3.bind(var11)();
                                var1.guild_id = var3;
                                var10 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var9 = 9;
                                var9 = var3[var9];
                                var10 = var10.bind(var0)(var9);
                                var9 = var10.collectChannelAnalyticsMetadata;
                                var12 = var9.bind(var10)(var11);
                                var13 = var1;
                                var9 = copyDataProperties(var13, var12);
                                var1 = var7.bind(var8)(var2, var1);
                                var2 = _closure1_slot1;
                                var1 = 10;
                                var1 = var3[var1];
                                var7 = var2.bind(var0)(var1);
                                var1 = var7.hideActionSheet;
                                var1 = var1.bind(var7)();
                                var1 = 11;
                                var1 = var3[var1];
                                var1 = var2.bind(var0)(var1);
                                var1 = var1.bind(var0)();
                                var1 = _closure3_slot0;
                                if (!(var5 != var1)) {
                                    _fun61669_ip = 217;
                                    continue _fun61669
                                }
                            case 203:
                                var3 = _closure3_slot0;
                                var1 = var3.openSystemKeyboard;
                                var1 = var1.bind(var3)();
                            case 217:
                                var1 = _closure3_slot0;
                                var1 = var5 == var1;
                                var3 = undefined;
                                if (var1) {
                                    _fun61669_ip = 251;
                                    continue _fun61669
                                }
                            case 230:
                                var7 = _closure3_slot0;
                                var2 = var7.getApplicationCommandManager;
                                var2 = var2.bind(var7)();
                                var1 = var5 == var2;
                                var3 = var2;
                            case 251:
                                if (var1) {
                                    _fun61669_ip = 380;
                                    continue _fun61669
                                }
                            case 257:
                                var2 = var3.setCommand;
                                var1 = {};
                                var7 = _closure2_slot2;
                                var7 = var7.id;
                                var1.channelId = var7;
                                var7 = _closure2_slot1;
                                var1.command = var7;
                                var7 = _closure2_slot0;
                                var7 = var5 != var7;
                                var5 = null;
                                if (!var7) {
                                    _fun61669_ip = 335;
                                    continue _fun61669
                                }
                            case 300:
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var7 = 12;
                                var7 = var9[var7];
                                var8 = var8.bind(var0)(var7);
                                var7 = var8.getApplicationCommandSection;
                                var6 = _closure2_slot0;
                                var5 = var7.bind(var8)(var6);
                            case 335:
                                var1.section = var5;
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var4 = 13;
                                var4 = var6[var4];
                                var4 = var5.bind(var0)(var4);
                                var4 = var4.ApplicationCommandTriggerLocations;
                                var4 = var4.POPULAR_COMMANDS;
                                var1.location = var4;
                                var1 = var2.bind(var3)(var1);
                            case 380:
                                return var0;
                        }
                    };
                    var1.onSetCommand = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0.onPress = var7;
        var6 = function() { // Original name: onLongPress, environment: var6
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 7;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.handleLongPressCommandMention;
            var0 = _closure2_slot1;
            var1 = var0.displayName;
            var0 = var0.id;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.onLongPress = var6;
        var5 = var5.commandClickable;
        var0.style = var5;
        var5 = var4.displayName;
        var4 = ['/'];
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileAboutMeCardCommand.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 33, 1297, 671, 3895, 3675, 7684, 795, 4259, 3237, 7696, 4501, 4504, 2]);