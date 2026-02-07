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
    var3 = var3.ChannelFlags;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun109475: for (var _fun109475_ip = 0;;) switch (_fun109475_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.title;
                var7 = var0.description;
                var11 = var0.channel;
                var9 = var0.selected;
                var5 = var0.onSelectDuration;
                var3 = undefined;
                var _closure2_slot0 = var3;
                var2 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 3;
                var1 = var6[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.getAutoArchiveOptions;
                var6 = var1.bind(var2)();
                var1 = null;
                var1 = var1 != var11;
                if (!var1) {
                    _fun109475_ip = 90;
                    continue _fun109475
                }
            case 80:
                var2 = var11.isForumPost;
                var1 = var2.bind(var11)();
            case 90:
                if (!var1) {
                    _fun109475_ip = 114;
                    continue _fun109475
                }
            case 93:
                var10 = var11.hasFlag;
                var2 = _closure1_slot2;
                var2 = var2.PINNED;
                var1 = var10.bind(var11)(var2);
            case 114:
                _closure2_slot0 = var1;
                var2 = _closure1_slot3;
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var0 = 4;
                var0 = var11[var0];
                var0 = var10.bind(var3)(var0);
                var1 = var0.TableRadioGroup;
                var0 = {};
                var0.value = var9;
                var0.title = var8;
                var0.description = var7;
                var7 = 5;
                var8 = var11[var7];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.H4mGfI;
                var7 = var8.bind(var9)(var7);
                var0.accessibilityLabel = var7;
                var0.onChange = var5;
                var5 = false;
                var0.hasIcons = var5;
                var5 = var6.map;
                var4 = function(arg0) { // Environment: var4
                    var0 = arg0;
                    var4 = _closure1_slot3;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 6;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.TableRadioRow;
                    var1 = {};
                    var5 = var0.value;
                    var1.value = var5;
                    var5 = _closure2_slot0;
                    var1.disabled = var5;
                    var5 = var0.label;
                    var1.label = var5;
                    var0 = var0.value;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1379, 33, 7677, 5474, 1234, 5473, 2]);