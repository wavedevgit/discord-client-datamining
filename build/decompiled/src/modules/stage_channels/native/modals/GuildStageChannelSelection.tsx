// modules/stage_channels/native/modals/GuildStageChannelSelection.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'marginTop': 8,
        'flexDirection': 'row'
    };
    var3.channelText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/native/modals/GuildStageChannelSelection.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: GuildStageChannelSelection, environment: var1
        _fun67065: for (var _fun67065_ip = 0;;) switch (_fun67065_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.guild;
                var2 = var0.channel;
                var _closure2_slot0 = var2;
                var0 = var0.onChangeChannel;
                var _closure2_slot1 = var0;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var0 = function() { // Original name: handleSelectChannel, environment: var9
                    _fun67066: for (var _fun67066_ip = 0;;) switch (_fun67066_ip) {
                        case 0:
                            var4 = _closure1_slot2;
                            var12 = _closure1_slot3;
                            var0 = 7;
                            var3 = var12[var0];
                            var0 = undefined;
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.dismissGlobalKeyboard;
                            var3 = var3.bind(var4)();
                            var5 = _closure2_slot2;
                            var4 = var5.map;
                            var3 = function(arg0) { // Environment: var1
                                var6 = arg0;
                                var0 = {};
                                var1 = var6.id;
                                var0.value = var1;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var2 = 6;
                                var3 = var3[var2];
                                var2 = undefined;
                                var5 = var4.bind(var2)(var3);
                                var4 = var5.computeChannelName;
                                var9 = _closure1_slot5;
                                var8 = _closure1_slot4;
                                var7 = true;
                                var11 = var5;
                                var10 = var6;
                                var1 = var11[var4](var10, var9, var8, var7, var6);
                                var0.label = var1;
                                return var0;
                            };
                            var6 = var4.bind(var5)(var3);
                            var4 = _closure1_slot1;
                            var3 = 8;
                            var3 = var12[var3];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.openLazy;
                            var11 = _closure1_slot0;
                            var2 = 10;
                            var2 = var12[var2];
                            var8 = var11.bind(var0)(var2);
                            var2 = 9;
                            var3 = var12[var2];
                            var2 = var12.paths;
                            var3 = var8.bind(var0)(var3, var2);
                            var2 = {};
                            var8 = 11;
                            var9 = var12[var8];
                            var9 = var11.bind(var0)(var9);
                            var10 = var9.intl;
                            var9 = var10.string;
                            var8 = var12[var8];
                            var8 = var11.bind(var0)(var8);
                            var8 = var8.t;
                            var8 = var8["bxw/f7"];
                            var8 = var9.bind(var10)(var8);
                            var2.title = var8;
                            var2.items = var6;
                            var1 = function(arg0) { // Original name: onItemSelect, environment: var1
                                _fun67068: for (var _fun67068_ip = 0;;) switch (_fun67068_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var _closure4_slot0 = var0;
                                        var3 = _closure2_slot2;
                                        var2 = var3.find;
                                        var1 = function(arg0) { // Environment: var1
                                            var0 = arg0;
                                            var1 = var0.id;
                                            var0 = _closure4_slot0;
                                            var0 = var1 === var0;
                                            return var0;
                                        };
                                        var2 = var2.bind(var3)(var1);
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun67068_ip = 50;
                                            continue _fun67068
                                        }
                                    case 39:
                                        var1 = _closure2_slot1;
                                        var0 = undefined;
                                        var0 = var1.bind(var0)(var2);
                                    case 50:
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot3;
                                        var0 = 8;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.hideActionSheet;
                                        var1 = var1.bind(var2)();
                                        return var0;
                                }
                            };
                            var2.onItemSelect = var1;
                            var6 = _closure2_slot0;
                            var1 = null;
                            var8 = var1 == var6;
                            var6 = undefined;
                            if (var8) {
                                _fun67066_ip = 213;
                                continue _fun67066
                            }
                        case 204:
                            var7 = _closure2_slot0;
                            var6 = var7.id;
                        case 213:
                            var7 = var1 != var6;
                            var1 = undefined;
                            if (!var7) {
                                _fun67066_ip = 225;
                                continue _fun67066
                            }
                        case 222:
                            var1 = var6;
                        case 225:
                            var2.selectedItem = var1;
                            var1 = 'SelectUpdatesChannel';
                            var1 = var4.bind(var5)(var3, var1, var2);
                            return var0;
                    }
                };
                var _closure2_slot3 = var0;
                var10 = function(arg0, arg1) { // Original name: renderChannelHook, environment: var9
                    var4 = _closure1_slot6;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var0 = 12;
                    var0 = var2[var0];
                    var3 = undefined;
                    var0 = var1.bind(var3)(var0);
                    var2 = var0.Text;
                    var1 = {
                        'variant': 'text-sm/bold',
                        'color': 'mobile-text-heading-primary'
                    };
                    var0 = arg0;
                    var1.children = var0;
                    var0 = arg1;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var0 = _closure1_slot7;
                var6 = var0.bind(var3)();
                var4 = _closure1_slot0;
                var7 = _closure1_slot3;
                var0 = 5;
                var0 = var7[var0];
                var1 = var4.bind(var3)(var0);
                var0 = var1.useChannelsUserCanStartStageIn;
                var0 = var0.bind(var1)(var8);
                _closure2_slot2 = var0;
                var1 = var0.length;
                var0 = 1;
                var0 = var1 > var0;
                var8 = _closure1_slot1;
                var1 = 6;
                var1 = var7[var1];
                var1 = var8.bind(var3)(var1);
                var11 = var1.bind(var3)(var2);
                var2 = _closure1_slot6;
                var1 = 12;
                var1 = var7[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.Text;
                var4 = {
                    'style': null,
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var6 = var6.channelText;
                var4.style = var6;
                var6 = _closure1_slot0;
                var12 = _closure1_slot3;
                var5 = 11;
                var7 = var12[var5];
                var7 = var6.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.format;
                var5 = var12[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.t;
                if (var0) {
                    _fun67065_ip = 261;
                    continue _fun67065
                }
            case 226:
                var6 = var5["S+9O7g"];
                var0 = {};
                var0.stageName = var11;
                var0.stageHook = var10;
                var0 = var7.bind(var8)(var6, var0);
                var4.children = var0;
                var0 = var4;
                _fun67065_ip = 308;
                continue _fun67065;
            case 261:
                var6 = var5.AkzLcV;
                var5 = {};
                var5.stageName = var11;
                var5.stageHook = var10;
                var9 = function(arg0, arg1) { // Original name: changeHook, environment: var9
                    var4 = _closure1_slot6;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var0 = 12;
                    var0 = var2[var0];
                    var3 = undefined;
                    var0 = var1.bind(var3)(var0);
                    var2 = var0.Text;
                    var1 = {
                        'onPress': null,
                        'variant': 'text-xs/medium',
                        'color': 'text-link'
                    };
                    var0 = _closure2_slot3;
                    var1.onPress = var0;
                    var0 = arg0;
                    var1.children = var0;
                    var0 = arg1;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var5.changeHook = var9;
                var5 = var7.bind(var8)(var6, var5);
                var4.children = var5;
                var0 = var4;
            case 308:
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3059, 1613, 33, 1297, 8072, 4754, 1582, 3237, 5338, 1307, 1234, 3901, 2]);