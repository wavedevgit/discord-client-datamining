// modules/application_commands/native/ApplicationCommandList.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FlatList;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AUTOCOMPLETE_ROW_HEIGHT;
    var3 = 3;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var7 = var7.jsx;
    var _closure1_slot6 = var7;
    var3 = var3 * var6;
    var _closure1_slot7 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/application_commands/native/ApplicationCommandList.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: _default, environment: var1
        _fun90731: for (var _fun90731_ip = 0;;) switch (_fun90731_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.style;
                var13 = var0.channel;
                var _closure2_slot0 = var13;
                var4 = var0.onPressCommandItem;
                var _closure2_slot1 = var4;
                var1 = var0.query;
                var6 = var0.ItemSeparatorComponent;
                var5 = var0.getItemLayout;
                var2 = var0.onCommandsChange;
                var _closure2_slot2 = var2;
                var8 = _closure1_slot2;
                var16 = _closure1_slot3;
                var3 = 4;
                var7 = var16[var3];
                var3 = undefined;
                var12 = var8.bind(var3)(var7);
                var11 = var12.useQuery;
                var8 = {};
                var8.channel = var13;
                var7 = 'channel';
                var8.type = var7;
                var7 = {};
                var7.text = var1;
                var15 = _closure1_slot0;
                var1 = 5;
                var1 = var16[var1];
                var1 = var15.bind(var3)(var1);
                var1 = var1.ApplicationCommandType;
                var14 = var1.CHAT;
                var1 = new Array(1);
                var1[0] = var14;
                var7.commandTypes = var1;
                var1 = {
                    'placeholderCount': 3,
                    'limit': 7
                };
                var14 = 6;
                var14 = var16[var14];
                var14 = var15.bind(var3)(var14);
                var14 = var14.ScoreMethod;
                var14 = var14.COMMAND_OR_APPLICATION;
                var1.scoreMethod = var14;
                var1 = var11.bind(var12)(var8, var7, var1);
                var8 = var1.commands;
                var _closure2_slot3 = var8;
                var14 = var1.sections;
                var _closure2_slot4 = var14;
                var1 = var1.scrollDown;
                var _closure2_slot5 = var1;
                var12 = _closure1_slot4;
                var11 = var12.useCallback;
                var7 = new Array(3);
                var7[0] = var14;
                var13 = var13.guild_id;
                var7[1] = var13;
                var7[2] = var4;
                var4 = function(arg0) { // Environment: var9
                    _fun90732: for (var _fun90732_ip = 0;;) switch (_fun90732_ip) {
                        case 0:
                            var0 = arg0;
                            var9 = var0.item;
                            var _closure3_slot0 = var9;
                            var6 = var0.index;
                            var3 = undefined;
                            var _closure3_slot1 = var3;
                            var2 = var9.inputType;
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var1 = 7;
                            var1 = var5[var1];
                            var1 = var4.bind(var3)(var1);
                            var1 = var1.ApplicationCommandInputType;
                            var1 = var1.PLACEHOLDER;
                            if (!(var2 !== var1)) {
                                _fun90732_ip = 194;
                                continue _fun90732
                            }
                        case 73:
                            var2 = _closure2_slot4;
                            var1 = null;
                            var1 = var1 == var2;
                            var8 = undefined;
                            if (var1) {
                                _fun90732_ip = 112;
                                continue _fun90732
                            }
                        case 91:
                            var4 = _closure2_slot4;
                            var2 = var4.find;
                            var1 = function(arg0) { // Environment: var7
                                var0 = arg0;
                                var1 = var0.id;
                                var0 = _closure3_slot0;
                                var0 = var0.applicationId;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var8 = var2.bind(var4)(var1);
                        case 112:
                            _closure3_slot1 = var8;
                            var4 = _closure1_slot6;
                            var2 = _closure1_slot1;
                            var10 = _closure1_slot3;
                            var1 = 9;
                            var1 = var10[var1];
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var1.command = var9;
                            var1.section = var8;
                            var7 = function() { // Original name: onPress, environment: var7
                                var3 = _closure2_slot1;
                                var2 = _closure3_slot0;
                                var1 = _closure3_slot1;
                                var0 = undefined;
                                var0 = var3.bind(var0)(var2, var1);
                                return var0;
                            };
                            var1.onPress = var7;
                            var5 = _closure2_slot0;
                            var5 = var5.guild_id;
                            var1.guildId = var5;
                            var5 = 0;
                            var5 = var5 === var6;
                            var1.highlighted = var5;
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        case 194:
                            var2 = _closure1_slot6;
                            var1 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var0 = 8;
                            var0 = var4[var0];
                            var1 = var1.bind(var3)(var0);
                            var0 = {};
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var7 = var11.bind(var12)(var4, var7);
                var11 = var12.useEffect;
                var4 = null;
                var4 = var4 == var8;
                var13 = undefined;
                if (var4) {
                    _fun90731_ip = 293;
                    continue _fun90731
                }
            case 288:
                var13 = var8.length;
            case 293:
                var4 = new Array(2);
                var4[0] = var13;
                var4[1] = var2;
                var2 = function() { // Environment: var9
                    _fun90735: for (var _fun90735_ip = 0;;) switch (_fun90735_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun90735_ip = 58;
                                continue _fun90735
                            }
                        case 13:
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot3;
                            var5 = var0 == var1;
                            var1 = undefined;
                            var3 = undefined;
                            if (var5) {
                                _fun90735_ip = 41;
                                continue _fun90735
                            }
                        case 32:
                            var4 = _closure2_slot3;
                            var3 = var4.length;
                        case 41:
                            var4 = var0 != var3;
                            var0 = 0;
                            if (!var4) {
                                _fun90735_ip = 53;
                                continue _fun90735
                            }
                        case 50:
                            var0 = var3;
                        case 53:
                            var0 = var2.bind(var1)(var0);
                        case 58:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var11.bind(var12)(var2, var4);
                var11 = _closure1_slot4;
                var4 = var11.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function(arg0) { // Environment: var9
                    _fun90736: for (var _fun90736_ip = 0;;) switch (_fun90736_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.nativeEvent;
                            var1 = var2.layoutMeasurement;
                            var0 = var2.contentSize;
                            var2 = var2.contentOffset;
                            var2 = var2.y;
                            var1 = var1.height;
                            var1 = var2 + var1;
                            var2 = var0.height;
                            var0 = _closure1_slot7;
                            var0 = var2 - var0;
                            if (!(var1 >= var0)) {
                                _fun90736_ip = 74;
                                continue _fun90736
                            }
                        case 61:
                            var1 = _closure2_slot5;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 74:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var4.bind(var11)(var1, var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot5;
                var0 = {};
                var0.style = var10;
                var9 = function(arg0) { // Original name: keyExtractor, environment: var9
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var0.keyExtractor = var9;
                var0.data = var8;
                var0.renderItem = var7;
                var0.ItemSeparatorComponent = var6;
                var0.getItemLayout = var5;
                var0.onScroll = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 9221, 33, 7561, 1636, 7562, 4510, 11729, 11730, 2]);