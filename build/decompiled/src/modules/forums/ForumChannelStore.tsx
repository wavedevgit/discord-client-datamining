// modules/forums/ForumChannelStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var5;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var7 = 0;
    var6 = var5[var7];
    var0 = undefined;
    var6 = var9.bind(var0)(var6);
    var8 = 1;
    var8 = var5[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var5[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot4 = var8;
    var3 = var3.Set;
    var8 = var3.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var3
        }
    });
    var13 = var8;
    var3 = new var13[var3](var12);
    var8 = var3 instanceof Object ? var3 : var8;
    var _closure1_slot5 = var8;
    var3 = {};
    var9 = 3;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.ForumLayout;
    var9 = var9.LIST;
    var3.layoutType = var9;
    var9 = 4;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.ThreadSortOrder;
    var9 = var9.CREATION_DATE;
    var3.sortOrder = var9;
    var3.tagFilter = var8;
    var3.scrollPosition = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ThreadSearchTagSetting;
    var7 = var7.MATCH_SOME;
    var3.tagSetting = var7;
    var _closure1_slot6 = var3;
    var3 = function arg0, arg1() {
        var2 = this;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot3;
        var3 = _closure1_slot9;
        var0 = undefined;
        var3 = var4.bind(var0)(var2, var3);
        var3 = arg0;
        var2.set = var3;
        var3 = arg1;
        var2.get = var3;
        var3 = {};
        var2.channelStates = var3;
        var3 = function(arg0, arg1) { // Environment: var1
            var3 = arg0;
            var4 = _closure2_slot0;
            var0 = var4.get;
            var0 = var0.bind(var4)();
            var2 = var4.getChannelState;
            var4 = var2.bind(var4)(var3);
            var2 = {};
            var5 = var0.channelStates;
            var6 = var2;
            var0 = copyDataProperties(var6, var5);
            var _closure3_slot0 = var2;
            var0 = {};
            var6 = var0;
            var5 = var4;
            var4 = copyDataProperties(var6, var5);
            var5 = arg1;
            var6 = var0;
            var4 = copyDataProperties(var6, var5);
            var2[var3] = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 6;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                var2 = _closure2_slot0;
                var1 = var2.set;
                var0 = {};
                var3 = _closure3_slot0;
                var0.channelStates = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var2.setChannelState = var3;
        var3 = function(arg0) { // Environment: var1
            _fun89406: for (var _fun89406_ip = 0;;) switch (_fun89406_ip) {
                case 0:
                    var5 = arg0;
                    var1 = null;
                    if (!(var1 != var5)) {
                        _fun89406_ip = 168;
                        continue _fun89406
                    }
                case 12:
                    var2 = _closure2_slot0;
                    var0 = var2.get;
                    var0 = var0.bind(var2)();
                    var0 = var0.channelStates;
                    var0 = var0[var5];
                    if (!(var1 == var0)) {
                        _fun89406_ip = 166;
                        continue _fun89406
                    }
                case 45:
                    var4 = _closure1_slot4;
                    var3 = var4.getChannel;
                    var3 = var3.bind(var4)(var5);
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 7;
                    var4 = var6[var4];
                    var6 = undefined;
                    var5 = var5.bind(var6)(var4);
                    var4 = var1 != var3;
                    var1 = '[Forum Channel Store] The channel should not be missing.';
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = {};
                    var4 = var3.getDefaultLayout;
                    var4 = var4.bind(var3)();
                    var1.layoutType = var4;
                    var4 = var3.getDefaultSortOrder;
                    var4 = var4.bind(var3)();
                    var1.sortOrder = var4;
                    var2 = _closure1_slot5;
                    var1.tagFilter = var2;
                    var2 = 0;
                    var1.scrollPosition = var2;
                    var2 = var3.getDefaultTagSetting;
                    var2 = var2.bind(var3)();
                    var1.tagSetting = var2;
                    var0 = var1;
                case 166:
                    return var0;
                case 168:
                    var0 = _closure1_slot6;
                    return var0;
            }
        };
        var2.getChannelState = var3;
        var3 = function(arg0, arg1) { // Environment: var1
            _fun89407: for (var _fun89407_ip = 0;;) switch (_fun89407_ip) {
                case 0:
                    var3 = arg0;
                    var4 = arg1;
                    var2 = _closure2_slot0;
                    var1 = var2.getChannelState;
                    var1 = var1.bind(var2)(var3);
                    var2 = global;
                    var5 = var2.Set;
                    var7 = var1.tagFilter;
                    var2 = var5.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var5
                        }
                    });
                    var8 = var2;
                    var1 = new var8[var5](var7, var6);
                    var2 = var1 instanceof Object ? var1 : var2;
                    var1 = var2.has;
                    var1 = var1.bind(var2)(var4);
                    if (var1) {
                        _fun89407_ip = 83;
                        continue _fun89407
                    }
                case 71:
                    var1 = var2.add;
                    var1 = var1.bind(var2)(var4);
                    _fun89407_ip = 93;
                    continue _fun89407;
                case 83:
                    var1 = var2.delete;
                    var1 = var1.bind(var2)(var4);
                case 93:
                    var1 = _closure2_slot0;
                    var0 = var1.setTagFilter;
                    var0 = var0.bind(var1)(var3, var2);
                    var0 = undefined;
                    return var0;
            }
        };
        var2.toggleTagFilter = var3;
        var3 = function(arg0, arg1) { // Environment: var1
            var3 = arg1;
            var4 = _closure2_slot0;
            var2 = var4.setChannelState;
            var1 = {};
            var1.tagFilter = var3;
            var0 = arg0;
            var0 = var2.bind(var4)(var0, var1);
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 8;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.setFilterTagIds;
            var1 = var1.bind(var2)(var3);
            return var0;
        };
        var2.setTagFilter = var3;
        var3 = function(arg0, arg1) { // Environment: var1
            var3 = arg1;
            var4 = _closure2_slot0;
            var2 = var4.setChannelState;
            var1 = {};
            var1.sortOrder = var3;
            var0 = arg0;
            var0 = var2.bind(var4)(var0, var1);
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 8;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.setSortOrder;
            var1 = var1.bind(var2)(var3);
            return var0;
        };
        var2.setSortOrder = var3;
        var3 = function(arg0, arg1) { // Environment: var1
            var3 = arg1;
            var4 = _closure2_slot0;
            var2 = var4.setChannelState;
            var1 = {};
            var1.layoutType = var3;
            var0 = arg0;
            var0 = var2.bind(var4)(var0, var1);
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 8;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.setLayout;
            var1 = var1.bind(var2)(var3);
            return var0;
        };
        var2.setLayoutType = var3;
        var3 = function(arg0, arg1) { // Environment: var1
            var3 = arg1;
            var4 = _closure2_slot0;
            var2 = var4.setChannelState;
            var1 = {};
            var1.tagSetting = var3;
            var0 = arg0;
            var0 = var2.bind(var4)(var0, var1);
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 8;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.setTagSetting;
            var1 = var1.bind(var2)(var3);
            return var0;
        };
        var2.setTagSetting = var3;
        var1 = function(arg0, arg1) { // Environment: var1
            var3 = _closure2_slot0;
            var2 = var3.setChannelState;
            var1 = {};
            var0 = arg1;
            var1.scrollPosition = var0;
            var0 = arg0;
            var0 = var2.bind(var3)(var0, var1);
            var0 = undefined;
            return var0;
        };
        var2.setScrollPosition = var1;
        return var0;
    };
    var _closure1_slot9 = var3;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 9;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.create;
    var3 = function(arg0, arg1) { // Environment: var1
        var3 = _closure1_slot7;
        var0 = var3.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var3
            }
        });
        var5 = arg0;
        var4 = arg1;
        var6 = var1;
        var0 = new var6[var3](var5, var4, var3);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/ForumChannelStore.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Environment: var1
        _fun89414: for (var _fun89414_ip = 0;;) switch (_fun89414_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var2 = _closure1_slot8;
                var6 = undefined;
                var2 = var2.bind(var6)();
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 10;
                var4 = var7[var4];
                var6 = var5.bind(var6)(var4);
                var5 = var6.useStateFromStores;
                var7 = _closure1_slot4;
                var4 = new Array(1);
                var4[0] = var7;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var5.bind(var6)(var4, var0);
                var0 = null;
                if (!(var0 != var4)) {
                    _fun89414_ip = 91;
                    continue _fun89414
                }
            case 78:
                var0 = var2.getChannelState;
                var0 = var0.bind(var2)(var3);
                _fun89414_ip = 95;
                continue _fun89414;
            case 91:
                var0 = _closure1_slot6;
            case 95:
                return var0;
        }
    };
    var2.useForumChannelStore = var3;
    var1 = function() { // Environment: var1
        var0 = _closure1_slot8;
        return var0;
    };
    var2.useForumChannelStoreApi = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 1372, 1382, 1381, 1383, 802, 44, 6470, 629, 566, 2]);