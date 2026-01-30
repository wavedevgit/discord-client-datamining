// modules/threads/native/components/ThreadAutoArchiveBottomSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = var3.View;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelFlags;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot4 = var7;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun109535: for (var _fun109535_ip = 0;;) switch (_fun109535_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.title;
                var7 = var0.hint;
                var10 = var0.channel;
                var5 = var0.selected;
                var _closure2_slot0 = var5;
                var0 = var0.onSelectDuration;
                var _closure2_slot1 = var0;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var2 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 4;
                var1 = var6[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.getAutoArchiveOptions;
                var6 = var1.bind(var2)();
                var1 = null;
                var1 = var1 != var10;
                if (!var1) {
                    _fun109535_ip = 99;
                    continue _fun109535
                }
            case 89:
                var2 = var10.isForumPost;
                var1 = var2.bind(var10)();
            case 99:
                if (!var1) {
                    _fun109535_ip = 123;
                    continue _fun109535
                }
            case 102:
                var9 = var10.hasFlag;
                var2 = _closure1_slot3;
                var2 = var2.PINNED;
                var1 = var9.bind(var10)(var2);
            case 123:
                _closure2_slot2 = var1;
                var2 = _closure1_slot4;
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var0 = 5;
                var0 = var10[var0];
                var0 = var9.bind(var3)(var0);
                var1 = var0.FormRadioGroup;
                var0 = {};
                var0.title = var8;
                var0.hint = var7;
                var0.value = var5;
                var5 = false;
                var0.hasIcons = var5;
                var5 = 6;
                var7 = var10[var5];
                var7 = var9.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var5 = var10[var5];
                var5 = var9.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.H4mGfI;
                var5 = var7.bind(var8)(var5);
                var0.accessibilityLabel = var5;
                var5 = var6.map;
                var4 = function(arg0, arg1, arg2) { // Environment: var4
                    _fun109536: for (var _fun109536_ip = 0;;) switch (_fun109536_ip) {
                        case 0:
                            var7 = arg0;
                            var _closure3_slot0 = var7;
                            var4 = _closure1_slot5;
                            var3 = _closure1_slot2;
                            var2 = {};
                            var8 = _closure1_slot4;
                            var5 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var10 = 5;
                            var0 = var0[var10];
                            var1 = undefined;
                            var0 = var5.bind(var1)(var0);
                            var5 = var0.FormRadioRow;
                            var0 = {};
                            var9 = var7.value;
                            var0.value = var9;
                            var12 = _closure2_slot2;
                            var0.disabled = var12;
                            var12 = var7.label;
                            var0.label = var12;
                            var11 = function() { // Original name: onPress, environment: var11
                                var2 = _closure2_slot1;
                                var0 = _closure3_slot0;
                                var1 = var0.value;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0.onPress = var11;
                            var11 = _closure2_slot0;
                            var9 = var7.value;
                            var9 = var11 === var9;
                            var0.selected = var9;
                            var9 = 'right';
                            var0.align = var9;
                            var5 = var8.bind(var1)(var5, var0);
                            var0 = new Array(2);
                            var0[0] = var5;
                            var5 = arg2;
                            var8 = var5.length;
                            var5 = 1;
                            var9 = var8 - var5;
                            var8 = arg1;
                            var5 = null;
                            if (!(var8 !== var9)) {
                                _fun109536_ip = 196;
                                continue _fun109536
                            }
                        case 161:
                            var9 = _closure1_slot4;
                            var8 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var6 = var6[var10];
                            var6 = var8.bind(var1)(var6);
                            var8 = var6.FormDivider;
                            var6 = {};
                            var5 = var9.bind(var1)(var8, var6);
                        case 196:
                            var0[1] = var5;
                            var2.children = var0;
                            var0 = global;
                            var6 = var0.JSON;
                            var5 = var6.stringify;
                            var6 = var5.bind(var6)(var7);
                            var0 = var0.HermesInternal;
                            var5 = var0.concat;
                            var0 = '';
                            var0 = var5.bind(var0)(var6);
                            var0 = var4.bind(var1)(var3, var2, var0);
                            return var0;
                    }
                };
                var4 = var5.bind(var6)(var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/threads/native/components/ThreadAutoArchiveBottomSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var2.AutoArchiveDurationOptions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1379, 33, 7569, 5339, 1234, 2]);