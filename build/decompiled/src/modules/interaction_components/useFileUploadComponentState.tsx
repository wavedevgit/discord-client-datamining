// modules/interaction_components/useFileUploadComponentState.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.DraftType;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/interaction_components/useFileUploadComponentState.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var3 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 3;
        var1 = var7[var1];
        var6 = undefined;
        var3 = var3.bind(var6)(var1);
        var1 = var3.useComponentStateContext;
        var4 = var1.bind(var3)();
        var5 = _closure1_slot1;
        var3 = 4;
        var1 = var7[var3];
        var10 = var5.bind(var6)(var1);
        var1 = null;
        var9 = var1 != var4;
        var8 = 'useFileUploadComponentState must be used within a ComponentStateContextProvider';
        var8 = var10.bind(var6)(var9, var8);
        var8 = var4.channelId;
        var3 = var7[var3];
        var5 = var5.bind(var6)(var3);
        var3 = var1 != var8;
        var1 = 'useFileUploadComponentState must be used inside a channel';
        var1 = var5.bind(var6)(var3, var1);
        var3 = var4.useComponentState;
        var1 = arg0;
        var1 = var3.bind(var4)(var1);
        var4 = var1.state;
        var _closure2_slot0 = var4;
        var3 = var1.executeStateUpdate;
        var _closure2_slot1 = var3;
        var1 = var1.error;
        var7 = _closure1_slot3;
        var6 = var7.useMemo;
        var5 = new Array(1);
        var5[0] = var4;
        var4 = function() { // Environment: var0
            _fun113577: for (var _fun113577_ip = 0;;) switch (_fun113577_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    var0 = var0 == var2;
                    var4 = undefined;
                    var2 = undefined;
                    if (var0) {
                        _fun113577_ip = 29;
                        continue _fun113577
                    }
                case 20:
                    var0 = _closure2_slot0;
                    var2 = var0.type;
                case 29:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 5;
                    var0 = var5[var0];
                    var0 = var3.bind(var4)(var0);
                    var0 = var0.ComponentType;
                    var0 = var0.FILE_UPLOAD;
                    if (!(var2 !== var0)) {
                        _fun113577_ip = 74;
                        continue _fun113577
                    }
                case 68:
                    var0 = new Array(0);
                    _fun113577_ip = 84;
                    continue _fun113577;
                case 74:
                    var1 = _closure2_slot0;
                    var0 = var1.uploadIds;
                case 84:
                    return var0;
            }
        };
        var4 = var6.bind(var7)(var4, var5);
        var _closure2_slot2 = var4;
        var6 = _closure1_slot5;
        var5 = var6.getUploads;
        var2 = _closure1_slot4;
        var2 = var2.InteractionModal;
        var2 = var5.bind(var6)(var8, var2);
        var _closure2_slot3 = var2;
        var6 = var7.useMemo;
        var5 = new Array(2);
        var5[0] = var4;
        var5[1] = var2;
        var2 = function() { // Environment: var0
            var3 = _closure2_slot2;
            var2 = var3.map;
            var1 = function(arg0) { // Environment: var0
                var1 = arg0;
                var _closure4_slot0 = var1;
                var2 = _closure2_slot3;
                var1 = var2.find;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure4_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                var1 = null;
                var0 = arg0;
                var0 = var1 != var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var2 = var6.bind(var7)(var2, var5);
        var _closure2_slot4 = var2;
        var6 = var7.useCallback;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = function(arg0) { // Environment: var0
            var2 = _closure2_slot1;
            var1 = {};
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var0 = 5;
            var3 = var3[var0];
            var0 = undefined;
            var3 = var4.bind(var0)(var3);
            var3 = var3.ComponentType;
            var3 = var3.FILE_UPLOAD;
            var1.type = var3;
            var3 = arg0;
            var1.uploadIds = var3;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var3 = var6.bind(var7)(var3, var5);
        var _closure2_slot5 = var3;
        var6 = var7.useEffect;
        var5 = new Array(3);
        var5[0] = var4;
        var5[1] = var2;
        var5[2] = var3;
        var0 = function() { // Environment: var0
            _fun113583: for (var _fun113583_ip = 0;;) switch (_fun113583_ip) {
                case 0:
                    var1 = _closure2_slot2;
                    var2 = var1.length;
                    var1 = _closure2_slot4;
                    var1 = var1.length;
                    if (!(var2 > var1)) {
                        _fun113583_ip = 59;
                        continue _fun113583
                    }
                case 25:
                    var3 = _closure2_slot2;
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var2 = _closure2_slot4;
                        var1 = var2.some;
                        var0 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var1 = var0.id;
                            var0 = _closure4_slot0;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = _closure2_slot5;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                case 59:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var6.bind(var7)(var0, var5);
        var0 = {};
        var0.uploadIds = var4;
        var0.setUploadIds = var3;
        var0.currentUploads = var2;
        var0.error = var1;
        return var0;
    };
    var2.useFileUploadComponentState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4001, 4000, 6852, 44, 1645, 2]);