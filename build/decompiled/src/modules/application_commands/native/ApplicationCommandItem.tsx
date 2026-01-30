// modules/application_commands/native/ApplicationCommandItem.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.AUTOCOMPLETE_ROW_HEIGHT;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'paddingVertical': 8,
        'paddingHorizontal': 16,
        'alignItems': 'center'
    };
    var8.height = var9;
    var3.applicationCommandItem = var8;
    var8 = {};
    var9 = 6;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_BACKGROUND_HOVER;
    var8.backgroundColor = var11;
    var3.highlightedApplicationCommandItem = var8;
    var8 = {
        'width': 32,
        'height': 32,
        'borderRadius': null,
        'marginRight': 16
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.lg;
    var8.borderRadius = var9;
    var3.applicationCommandIcon = var8;
    var8 = {
        'flexDirection': 'column',
        'flexShrink': 1,
        'alignSelf': 'flex-end'
    };
    var3.applicationCommandDescriptionWrapper = var8;
    var8 = {
        'paddingLeft': 16,
        'marginLeft': 'auto'
    };
    var3.applicationCommandSectionName = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/application_commands/native/ApplicationCommandItem.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: _default, environment: var1
        _fun90727: for (var _fun90727_ip = 0;;) switch (_fun90727_ip) {
            case 0:
                var0 = arg0;
                var17 = var0.command;
                var7 = var0.onPress;
                var1 = var0.section;
                var _closure2_slot0 = var1;
                var3 = var0.guildId;
                var _closure2_slot1 = var3;
                var6 = var0.showIcon;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun90727_ip = 48;
                    continue _fun90727
                }
            case 46:
                var6 = true;
            case 48:
                var12 = var0.highlighted;
                if (!(var12 === var3)) {
                    _fun90727_ip = 60;
                    continue _fun90727
                }
            case 58:
                var12 = false;
            case 60:
                var _closure2_slot2 = var3;
                var0 = _closure1_slot8;
                var9 = var0.bind(var3)();
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 7;
                var0 = var8[var0];
                var10 = var4.bind(var3)(var0);
                var8 = var10.useStateFromStores;
                var0 = _closure1_slot5;
                var4 = new Array(1);
                var4[0] = var0;
                var0 = function() { // Environment: var2
                    _fun90728: for (var _fun90728_ip = 0;;) switch (_fun90728_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun90728_ip = 40;
                                continue _fun90728
                            }
                        case 13:
                            var1 = _closure2_slot0;
                            var3 = var2 == var1;
                            var1 = undefined;
                            if (var3) {
                                _fun90728_ip = 36;
                                continue _fun90728
                            }
                        case 26:
                            var3 = _closure2_slot0;
                            var1 = var3.botId;
                        case 36:
                            if (!(var2 == var1)) {
                                _fun90728_ip = 44;
                                continue _fun90728
                            }
                        case 40:
                            var1 = undefined;
                            return var1;
                        case 44:
                            var3 = _closure1_slot5;
                            var2 = var3.getMember;
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.botId;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var0 = var8.bind(var10)(var4, var0);
                _closure2_slot2 = var0;
                var10 = _closure1_slot3;
                var8 = var10.useMemo;
                var4 = new Array(2);
                var4[0] = var1;
                var4[1] = var0;
                var2 = function() { // Environment: var2
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getApplicationCommandsIconSource;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot2;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var11 = var8.bind(var10)(var2, var4);
                var4 = null;
                var8 = var4 == var0;
                var2 = undefined;
                if (var8) {
                    _fun90727_ip = 180;
                    continue _fun90727
                }
            case 174:
                var2 = var0.nick;
            case 180:
                if (!(var4 == var2)) {
                    _fun90727_ip = 200;
                    continue _fun90727
                }
            case 184:
                var2 = var4 == var1;
                var8 = undefined;
                if (var2) {
                    _fun90727_ip = 198;
                    continue _fun90727
                }
            case 193:
                var8 = var1.name;
            case 198:
                _fun90727_ip = 206;
                continue _fun90727;
            case 200:
                var8 = var0.nick;
            case 206:
                var2 = _closure1_slot7;
                var13 = _closure1_slot0;
                var16 = _closure1_slot2;
                var0 = 9;
                var0 = var16[var0];
                var0 = var13.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var10 = 10;
                var14 = var16[var10];
                var14 = var13.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.formatToPlainString;
                var10 = var16[var10];
                var10 = var13.bind(var3)(var10);
                var10 = var10.t;
                var13 = var10.eo8b3e;
                var10 = {};
                var10.applicationName = var8;
                var16 = var17.displayDescription;
                var10.commandDescription = var16;
                var16 = var17.displayName;
                var10.commandName = var16;
                var10 = var14.bind(var15)(var13, var10);
                var0.accessibilityLabel = var10;
                var10 = {};
                var19 = var9.applicationCommandItem;
                var20 = var10;
                var13 = copyDataProperties(var20, var19);
                if (var12) {
                    _fun90727_ip = 344;
                    continue _fun90727
                }
            case 340:
                var12 = {};
                _fun90727_ip = 350;
                continue _fun90727;
            case 344:
                var12 = var9.highlightedApplicationCommandItem;
            case 350:
                var20 = var10;
                var19 = var12;
                var12 = copyDataProperties(var20, var19);
                var0.style = var10;
                var10 = 'button';
                var0.accessibilityRole = var10;
                var0.onPress = var7;
                if (!var6) {
                    _fun90727_ip = 383;
                    continue _fun90727
                }
            case 379:
                var6 = var4 != var11;
            case 383:
                if (!var6) {
                    _fun90727_ip = 432;
                    continue _fun90727
                }
            case 386:
                var10 = _closure1_slot6;
                var7 = _closure1_slot1;
                var12 = _closure1_slot2;
                var4 = 11;
                var4 = var12[var4];
                var7 = var7.bind(var3)(var4);
                var4 = {};
                var12 = var9.applicationCommandIcon;
                var4.style = var12;
                var4.source = var11;
                var6 = var10.bind(var3)(var7, var4);
            case 432:
                var4 = new Array(3);
                var4[0] = var6;
                var13 = _closure1_slot7;
                var12 = _closure1_slot4;
                var11 = {};
                var6 = var9.applicationCommandDescriptionWrapper;
                var11.style = var6;
                var7 = _closure1_slot6;
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 12;
                var14 = var10[var5];
                var14 = var6.bind(var3)(var14);
                var15 = var14.Text;
                var14 = {
                    'lineClamp': 1,
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var18 = var17.displayName;
                var16 = '/ ';
                var16 = var16 + var18;
                var14.children = var16;
                var15 = var7.bind(var3)(var15, var14);
                var14 = new Array(2);
                var14[0] = var15;
                var15 = var10[var5];
                var15 = var6.bind(var3)(var15);
                var16 = var15.Text;
                var15 = {
                    'lineClamp': 1,
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var17 = var17.displayDescription;
                var15.children = var17;
                var15 = var7.bind(var3)(var16, var15);
                var14[1] = var15;
                var11.children = var14;
                var11 = var13.bind(var3)(var12, var11);
                var4[1] = var11;
                var5 = var10[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'style': null,
                    'variant': 'eyebrow',
                    'color': 'text-muted'
                };
                var9 = var9.applicationCommandSectionName;
                var5.style = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1672, 9221, 33, 1297, 671, 566, 9580, 4864, 1234, 4666, 3901, 2]);