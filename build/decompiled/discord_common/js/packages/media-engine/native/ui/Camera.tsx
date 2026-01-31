// ../discord_common/js/packages/media-engine/native/ui/Camera.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var1 = function arg0() {
        _fun32233: for (var _fun32233_ip = 0;;) switch (_fun32233_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.disabled;
                var6 = var0.deviceId;
                var5 = var0.width;
                var2 = var0.height;
                var4 = _closure1_slot2;
                if (var1) {
                    _fun32233_ip = 85;
                    continue _fun32233
                }
            case 34:
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 2;
                var0 = var3[var0];
                var3 = undefined;
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.streamId = var6;
                var6 = {};
                var6.width = var5;
                var6.height = var2;
                var0.style = var6;
                var0 = var4.bind(var3)(var1, var0);
                _fun32233_ip = 124;
                continue _fun32233;
            case 85:
                var3 = {};
                var1 = 'media-engine-video';
                var3.className = var1;
                var1 = {};
                var1.width = var5;
                var1.height = var2;
                var3.style = var1;
                var2 = undefined;
                var1 = 'div';
                var0 = var4.bind(var2)(var1, var3);
            case 124:
                return var0;
        }
    };
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot2 = var3;
    var3 = {
        'disabled': false,
        'width': 320,
        'height': 180
    };
    var1.defaultProps = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/media-engine/native/ui/Camera.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 3595, 2]);