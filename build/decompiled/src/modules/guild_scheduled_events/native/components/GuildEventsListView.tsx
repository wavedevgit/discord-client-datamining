// modules/guild_scheduled_events/native/components/GuildEventsListView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var0 = function() { // Original name: FormSeparator, environment: var3
        var3 = _closure1_slot5;
        var2 = _closure1_slot3;
        var1 = {};
        var0 = _closure1_slot6;
        var0 = var0.spacer;
        var1.style = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var4 = var6[var0];
    var1 = arg3;
    var0 = undefined;
    var1 = var1.bind(var0)(var4);
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.View;
    var _closure1_slot3 = var4;
    var1 = var1.FlatList;
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot5 = var1;
    var1 = {};
    var4 = {};
    var7 = 3;
    var9 = var6[var7];
    var9 = var8.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var4.height = var9;
    var9 = '100%';
    var4.width = var9;
    var1.spacer = var4;
    var4 = {};
    var7 = var6[var7];
    var7 = var8.bind(var0)(var7);
    var7 = var7.spacing;
    var7 = var7.PX_16;
    var4.paddingHorizontal = var7;
    var1.container = var4;
    var _closure1_slot6 = var1;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/native/components/GuildEventsListView.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0) { // Original name: GuildEventsListView, environment: var3
        _fun66913: for (var _fun66913_ip = 0;;) switch (_fun66913_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.events;
                var7 = var0.guild;
                var _closure2_slot0 = var7;
                var1 = var0.onPressEvent;
                var _closure2_slot1 = var1;
                var8 = var0.onCloseAction;
                var _closure2_slot2 = var8;
                var1 = var0.lastAckedId;
                var _closure2_slot3 = var1;
                var0 = var0.inActionSheet;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 4;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var9 = var1.bottom;
                var2 = var6.length;
                var1 = 0;
                if (!(var1 !== var2)) {
                    _fun66913_ip = 269;
                    continue _fun66913
                }
            case 104:
                if (var0) {
                    _fun66913_ip = 113;
                    continue _fun66913
                }
            case 107:
                var2 = _closure1_slot4;
                _fun66913_ip = 139;
                continue _fun66913;
            case 113:
                var1 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 5;
                var0 = var10[var0];
                var0 = var1.bind(var3)(var0);
                var2 = var0.BottomSheetFlatList;
            case 139:
                var1 = _closure1_slot5;
                var0 = {};
                var0.data = var6;
                var6 = _closure1_slot6;
                var6 = var6.container;
                var0.style = var6;
                var6 = function(arg0) { // Original name: keyExtractor, environment: var5
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var0.keyExtractor = var6;
                var6 = function(arg0) { // Original name: renderItem, environment: var5
                    _fun66915: for (var _fun66915_ip = 0;;) switch (_fun66915_ip) {
                        case 0:
                            var0 = arg0;
                            var6 = var0.item;
                            var3 = _closure1_slot5;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 7;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var0.event = var6;
                            var4 = _closure2_slot2;
                            var0.onCloseAction = var4;
                            var4 = _closure2_slot1;
                            var0.onPress = var4;
                            var8 = _closure2_slot3;
                            var4 = null;
                            var4 = var4 != var8;
                            if (!var4) {
                                _fun66915_ip = 124;
                                continue _fun66915
                            }
                        case 77:
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var7 = 8;
                            var7 = var9[var7];
                            var8 = var8.bind(var2)(var7);
                            var7 = var8.compare;
                            var6 = var6.id;
                            var5 = _closure2_slot3;
                            var6 = var7.bind(var8)(var6, var5);
                            var5 = 0;
                            var4 = var6 > var5;
                        case 124:
                            var0.isNew = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var0.renderItem = var6;
                var6 = _closure1_slot7;
                var0.ItemSeparatorComponent = var6;
                var6 = 5;
                var0.initialNumToRender = var6;
                var5 = function() { // Original name: ListEmptyComponent, environment: var5
                    var3 = _closure1_slot5;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 6;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var5 = _closure2_slot2;
                    var0.onClose = var5;
                    var4 = _closure2_slot0;
                    var0.guild = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var0.ListEmptyComponent = var5;
                var5 = {};
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 3;
                var6 = var11[var6];
                var6 = var10.bind(var3)(var6);
                var6 = var6.spacing;
                var6 = var6.PX_16;
                var6 = var6 + var9;
                var5.paddingBottom = var6;
                var0.contentContainerStyle = var5;
                var0 = var1.bind(var3)(var2, var0);
                return var0;
            case 269:
                var2 = _closure1_slot5;
                var1 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 5;
                var0 = var9[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.BottomSheetView;
                var0 = {};
                var6 = _closure1_slot5;
                var5 = _closure1_slot1;
                var4 = 6;
                var4 = var9[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.onClose = var8;
                var4.guild = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.styles = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 671, 1568, 4889, 8271, 8272, 21, 2]);