// modules/application_commands/native/ContextMenuCommandActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var5;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CONTEXT_MENU_COMMANDS_QUERY_LIMIT;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/application_commands/native/ContextMenuCommandActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ContextMenuCommandActionSheet, environment: var1
        var0 = arg0;
        var16 = var0.channel;
        var _closure2_slot0 = var16;
        var12 = var0.commandType;
        var15 = var0.commandTargetId;
        var _closure2_slot1 = var15;
        var11 = var0.onBack;
        var14 = var0.onPressAppCommand;
        var _closure2_slot2 = var14;
        var5 = _closure1_slot0;
        var9 = _closure1_slot3;
        var2 = 4;
        var2 = var9[var2];
        var3 = undefined;
        var7 = var5.bind(var3)(var2);
        var6 = var7.useStateFromStores;
        var2 = _closure1_slot5;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() { // Environment: var1
            _fun75733: for (var _fun75733_ip = 0;;) switch (_fun75733_ip) {
                case 0:
                    var2 = _closure1_slot5;
                    var1 = var2.getGuild;
                    var4 = _closure2_slot0;
                    var0 = null;
                    var4 = var0 == var4;
                    var0 = undefined;
                    if (var4) {
                        _fun75733_ip = 44;
                        continue _fun75733
                    }
                case 30:
                    var4 = _closure2_slot0;
                    var3 = var4.getGuildId;
                    var0 = var3.bind(var4)();
                case 44:
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var4 = var6.bind(var7)(var4, var2);
        var _closure2_slot3 = var4;
        var6 = _closure1_slot2;
        var2 = 5;
        var2 = var9[var2];
        var7 = var6.bind(var3)(var2);
        var6 = var7.useDiscovery;
        var2 = {};
        var8 = {};
        var8.channel = var16;
        var10 = 'channel';
        var8.type = var10;
        var2.context = var8;
        var8 = {};
        var10 = new Array(1);
        var10[0] = var12;
        var8.commandTypes = var10;
        var2.filters = var8;
        var8 = {};
        var10 = _closure1_slot6;
        var8.limit = var10;
        var2.options = var8;
        var10 = true;
        var2.allowFetch = var10;
        var6 = var6.bind(var7)(var2);
        var12 = var6.commands;
        var _closure2_slot4 = var12;
        var2 = var6.sectionDescriptors;
        var _closure2_slot5 = var2;
        var13 = var6.loading;
        var _closure2_slot6 = var13;
        var8 = _closure1_slot4;
        var7 = var8.useMemo;
        var6 = new Array(1);
        var6[0] = var2;
        var2 = function() { // Environment: var1
            var1 = {};
            var _closure3_slot0 = var1;
            var3 = _closure2_slot5;
            var2 = var3.forEach;
            var0 = function(arg0) { // Environment: var0
                var2 = arg0;
                var1 = _closure3_slot0;
                var0 = var2.id;
                var1[var0] = var2;
                var0 = undefined;
                return var0;
            };
            var0 = var2.bind(var3)(var0);
            var0 = {};
            var0.sections = var1;
            return var0;
        };
        var2 = var7.bind(var8)(var2, var6);
        var2 = var2.sections;
        var _closure2_slot7 = var2;
        var7 = var8.useCallback;
        var6 = new Array(3);
        var6[0] = var16;
        var6[1] = var15;
        var6[2] = var4;
        var4 = function(arg0) { // Environment: var1
            _fun75736: for (var _fun75736_ip = 0;;) switch (_fun75736_ip) {
                case 0:
                    var5 = arg0;
                    var1 = var5.type;
                    var0 = 'command';
                    if (!(var0 === var1)) {
                        _fun75736_ip = 122;
                        continue _fun75736
                    }
                case 16:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var0 = 6;
                    var0 = var3[var0];
                    var1 = undefined;
                    var4 = var2.bind(var1)(var0);
                    var0 = {};
                    var5 = var5.command;
                    var0.command = var5;
                    var5 = {};
                    var0.optionValues = var5;
                    var6 = {};
                    var7 = _closure2_slot0;
                    var6.channel = var7;
                    var7 = _closure2_slot3;
                    var6.guild = var7;
                    var0.context = var6;
                    var5 = _closure2_slot1;
                    var0.commandTargetId = var5;
                    var0 = var4.bind(var1)(var0);
                    var0 = 7;
                    var0 = var3[var0];
                    var1 = var2.bind(var1)(var0);
                    var0 = var1.hideActionSheet;
                    var0 = var0.bind(var1)();
                case 122:
                    var0 = undefined;
                    return var0;
            }
        };
        var15 = var7.bind(var8)(var4, var6);
        var _closure2_slot8 = var15;
        var7 = var8.useCallback;
        var6 = function(arg0) { // Environment: var1
            _fun75737: for (var _fun75737_ip = 0;;) switch (_fun75737_ip) {
                case 0:
                    var1 = arg0;
                    var2 = var1.type;
                    var0 = 'command';
                    if (!(var0 !== var2)) {
                        _fun75737_ip = 23;
                        continue _fun75737
                    }
                case 16:
                    var0 = var1.type;
                    _fun75737_ip = 34;
                    continue _fun75737;
                case 23:
                    var1 = var1.command;
                    var0 = var1.id;
                case 34:
                    return var0;
            }
        };
        var4 = new Array(0);
        var7 = var7.bind(var8)(var6, var4);
        var6 = var8.useCallback;
        var4 = new Array(3);
        var4[0] = var15;
        var4[1] = var14;
        var4[2] = var2;
        var2 = function(arg0) { // Environment: var1
            _fun75738: for (var _fun75738_ip = 0;;) switch (_fun75738_ip) {
                case 0:
                    var0 = arg0;
                    var6 = var0.item;
                    var _closure3_slot0 = var6;
                    var5 = var0.start;
                    var4 = var0.end;
                    var1 = var6.type;
                    var0 = 'placeholder';
                    if (!(var0 !== var1)) {
                        _fun75738_ip = 209;
                        continue _fun75738
                    }
                case 40:
                    var0 = 'no_commands';
                    if (!(var0 !== var1)) {
                        _fun75738_ip = 156;
                        continue _fun75738
                    }
                case 50:
                    var0 = 'command';
                    if (!(var0 !== var1)) {
                        _fun75738_ip = 62;
                        continue _fun75738
                    }
                case 58:
                    var0 = undefined;
                    return var0;
                case 62:
                    var3 = _closure1_slot7;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 8;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var8 = var6.command;
                    var0.item = var8;
                    var7 = function() { // Original name: onPress, environment: var7
                        _fun75739: for (var _fun75739_ip = 0;;) switch (_fun75739_ip) {
                            case 0:
                                var2 = _closure2_slot2;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun75739_ip = 23;
                                    continue _fun75739
                                }
                            case 13:
                                var2 = _closure2_slot2;
                                var1 = undefined;
                                var1 = var2.bind(var1)();
                            case 23:
                                var2 = _closure2_slot8;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                        }
                    };
                    var0.onPress = var7;
                    var7 = _closure2_slot7;
                    var6 = var6.command;
                    var6 = var6.applicationId;
                    var6 = var7[var6];
                    var0.section = var6;
                    var0.start = var5;
                    var0.end = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                case 156:
                    var3 = _closure1_slot7;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var0 = 8;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.ContextMenuCommandEmptyItem;
                    var0 = {};
                    var0.start = var5;
                    var0.end = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                case 209:
                    var3 = _closure1_slot7;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var0 = 8;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.ContextMenuCommandLoadingItem;
                    var0 = {};
                    var0.start = var5;
                    var0.end = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
            }
        };
        var6 = var6.bind(var8)(var2, var4);
        var4 = var8.useMemo;
        var2 = new Array(2);
        var2[0] = var13;
        var2[1] = var12;
        var1 = function() { // Environment: var1
            _fun75740: for (var _fun75740_ip = 0;;) switch (_fun75740_ip) {
                case 0:
                    var1 = _closure2_slot6;
                    if (var1) {
                        _fun75740_ip = 75;
                        continue _fun75740
                    }
                case 10:
                    var1 = _closure2_slot4;
                    var2 = var1.length;
                    var1 = 0;
                    if (!(var1 !== var2)) {
                        _fun75740_ip = 50;
                        continue _fun75740
                    }
                case 25:
                    var2 = _closure2_slot4;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = {};
                        var1 = 'command';
                        var0.type = var1;
                        var1 = arg0;
                        var0.command = var1;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    _fun75740_ip = 73;
                    continue _fun75740;
                case 50:
                    var2 = {};
                    var1 = 'no_commands';
                    var2.type = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0 = var1;
                case 73:
                    _fun75740_ip = 96;
                    continue _fun75740;
                case 75:
                    var2 = {};
                    var1 = 'placeholder';
                    var2.type = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0 = var1;
                case 96:
                    return var0;
            }
        };
        var8 = var4.bind(var8)(var1, var2);
        var2 = _closure1_slot7;
        var1 = _closure1_slot1;
        var4 = 9;
        var0 = var9[var4];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var12 = 10;
        var13 = var9[var12];
        var13 = var5.bind(var3)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var12 = var9[var12];
        var12 = var5.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.PHjkRE;
        var12 = var13.bind(var14)(var12);
        var0.title = var12;
        var0.onBack = var11;
        var0.scrollable = var10;
        var4 = var9[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.UserProfileStackedActionSheetList;
        var4 = {};
        var4.data = var8;
        var4.keyExtractor = var7;
        var4.renderItem = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1410, 4508, 33, 566, 7561, 7947, 3237, 9579, 7710, 1234, 2]);