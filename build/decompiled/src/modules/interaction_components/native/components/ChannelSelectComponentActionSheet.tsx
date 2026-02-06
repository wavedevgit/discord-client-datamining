// modules/interaction_components/native/components/ChannelSelectComponentActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
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
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/interaction_components/native/components/ChannelSelectComponentActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var11 = var0.selectionActionComponent;
        var10 = var0.labelComponent;
        var4 = var0.channelId;
        var _closure2_slot0 = var4;
        var9 = var0.guildId;
        var _closure2_slot1 = var9;
        var12 = var0.containerId;
        var7 = var0.onSubmit;
        var1 = var11.channelTypes;
        var _closure2_slot2 = var1;
        var6 = _closure1_slot3;
        var3 = var6.useCallback;
        var2 = new Array(2);
        var2[0] = var4;
        var2[1] = var1;
        var1 = function(arg0) { // Environment: var5
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 4;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.queryChannels;
            var2 = _closure2_slot0;
            var1 = _closure2_slot2;
            var0 = arg0;
            var0 = var3.bind(var4)(var0, var2, var1);
            return var0;
        };
        var8 = var3.bind(var6)(var1, var2);
        var1 = _closure1_slot1;
        var13 = _closure1_slot2;
        var2 = 5;
        var2 = var13[var2];
        var3 = undefined;
        var6 = var1.bind(var3)(var2);
        var2 = {};
        var2.selectActionComponent = var11;
        var2.containerId = var12;
        var2.guildId = var9;
        var2.queryOptions = var8;
        var2.onSubmit = var7;
        var2 = var6.bind(var3)(var2);
        var9 = var2.options;
        var8 = var2.selectedOptions;
        var7 = var2.isSelected;
        var12 = var2.onPressOptionItem;
        var6 = var2.submitSelection;
        var _closure2_slot3 = var6;
        var6 = var2.setQuery;
        var2 = _closure1_slot6;
        var0 = 6;
        var0 = var13[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var0.onPressOptionItem = var12;
        var12 = function arg0() {
            _fun79438: for (var _fun79438_ip = 0;;) switch (_fun79438_ip) {
                case 0:
                    var3 = _closure1_slot4;
                    var1 = var3.getChannel;
                    var0 = arg0;
                    var0 = var0.value;
                    var6 = var1.bind(var3)(var0);
                    var0 = null;
                    if (!(var0 != var6)) {
                        _fun79438_ip = 131;
                        continue _fun79438
                    }
                case 31:
                    var4 = _closure1_slot5;
                    var3 = var4.getGuild;
                    var1 = _closure2_slot1;
                    var4 = var3.bind(var4)(var1);
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 7;
                    var1 = var5[var1];
                    var5 = undefined;
                    var3 = var3.bind(var5)(var1);
                    var1 = var3.getChannelIconData;
                    var6 = var1.bind(var3)(var6, var4);
                    var1 = var0 != var6;
                    if (!var1) {
                        _fun79438_ip = 129;
                        continue _fun79438
                    }
                case 93:
                    var4 = _closure1_slot6;
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 8;
                    var2 = var7[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = {};
                    var2.source = var6;
                    var1 = var4.bind(var5)(var3, var2);
                case 129:
                    return var1;
                case 131:
                    return var0;
            }
        };
        var0.renderIcon = var12;
        var0.selectionActionComponent = var11;
        var0.labelComponent = var10;
        var0.options = var9;
        var9 = var8.length;
        var0.selectedCount = var9;
        var0.selectedOptions = var8;
        var0.isSelected = var7;
        var7 = function() {
            var1 = _closure2_slot3;
            var0 = undefined;
            var0 = var1.bind(var0)();
            return var0;
        };
        var0.submitSelection = var7;
        var0.onQueryChange = var6;
        var5 = function arg0() {
            _fun79440: for (var _fun79440_ip = 0;;) switch (_fun79440_ip) {
                case 0:
                    var3 = _closure1_slot4;
                    var2 = var3.getChannel;
                    var1 = arg0;
                    var1 = var1.value;
                    var3 = var2.bind(var3)(var1);
                    var1 = null;
                    if (!(var1 == var3)) {
                        _fun79440_ip = 35;
                        continue _fun79440
                    }
                case 31:
                    var1 = undefined;
                    return var1;
                case 35:
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 9;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var0.channel = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0.itemAccessibilityLabel = var5;
        var0.channelId = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 1410, 33, 6858, 10120, 10118, 6860, 4087, 7902, 2]);