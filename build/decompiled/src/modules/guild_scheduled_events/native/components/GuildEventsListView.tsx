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
    var0 = function() {
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
    var3 = function arg0() {
        _fun90693: for (var _fun90693_ip = 0;;) switch (_fun90693_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.events;
                var7 = var0.guild;
                var1 = var0.onPressEvent;
                var _closure2_slot0 = var1;
                var8 = var0.onCloseAction;
                var _closure2_slot1 = var8;
                var1 = var0.lastAckedId;
                var _closure2_slot2 = var1;
                var0 = var0.inActionSheet;
                var12 = _closure1_slot5;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var9 = 4;
                var6 = var1[var9];
                var3 = undefined;
                var10 = var2.bind(var3)(var6);
                var6 = {};
                var6.onClose = var8;
                var6.guild = var7;
                var6 = var12.bind(var3)(var10, var6);
                var _closure2_slot3 = var6;
                var6 = 5;
                var1 = var1[var6];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var10 = var1.bottom;
                var2 = var11.length;
                var1 = 0;
                if (!(var1 !== var2)) {
                    _fun90693_ip = 299;
                    continue _fun90693
                }
            case 137:
                if (var0) {
                    _fun90693_ip = 146;
                    continue _fun90693
                }
            case 140:
                var2 = _closure1_slot4;
                _fun90693_ip = 172;
                continue _fun90693;
            case 146:
                var1 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 6;
                var0 = var12[var0];
                var0 = var1.bind(var3)(var0);
                var2 = var0.BottomSheetFlatList;
            case 172:
                var1 = _closure1_slot5;
                var0 = {};
                var0.data = var11;
                var11 = _closure1_slot6;
                var11 = var11.container;
                var0.style = var11;
                var11 = function arg0() {
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var0.keyExtractor = var11;
                var11 = function arg0() {
                    _fun90695: for (var _fun90695_ip = 0;;) switch (_fun90695_ip) {
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
                            var4 = _closure2_slot1;
                            var0.onCloseAction = var4;
                            var4 = _closure2_slot0;
                            var0.onPress = var4;
                            var8 = _closure2_slot2;
                            var4 = null;
                            var4 = var4 != var8;
                            if (!var4) {
                                _fun90695_ip = 124;
                                continue _fun90695
                            }
                        case 77:
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var7 = 8;
                            var7 = var9[var7];
                            var8 = var8.bind(var2)(var7);
                            var7 = var8.compare;
                            var6 = var6.id;
                            var5 = _closure2_slot2;
                            var6 = var7.bind(var8)(var6, var5);
                            var5 = 0;
                            var4 = var6 > var5;
                        case 124:
                            var0.isNew = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var0.renderItem = var11;
                var11 = _closure1_slot7;
                var0.ItemSeparatorComponent = var11;
                var0.initialNumToRender = var6;
                var4 = function() {
                    var0 = _closure2_slot3;
                    return var0;
                };
                var0.ListEmptyComponent = var4;
                var4 = {};
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var6 = 3;
                var6 = var12[var6];
                var6 = var11.bind(var3)(var6);
                var6 = var6.spacing;
                var6 = var6.PX_16;
                var6 = var6 + var10;
                var4.paddingBottom = var6;
                var0.contentContainerStyle = var4;
                var0 = var1.bind(var3)(var2, var0);
                return var0;
            case 299:
                var2 = _closure1_slot5;
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 6;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.BottomSheetView;
                var0 = {};
                var6 = _closure1_slot5;
                var5 = _closure1_slot1;
                var4 = var4[var9];
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 671, 11708, 1568, 4909, 11709, 21, 2]);