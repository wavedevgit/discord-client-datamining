// actions/native/CreateChannelModalActionCreators.tsx
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
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var1 = var1.CREATEABLE_NON_VOCAL_CHANNEL_NAME_TYPES;
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = {};
    var6 = 'CREATE_CHANNEL_MODAL_KEY';
    var1.CREATE_CHANNEL_MODAL_KEY = var6;
    var6 = function arg0, arg1, arg2, arg3() {
        _fun65518: for (var _fun65518_ip = 0;;) switch (_fun65518_ip) {
            case 0:
                var11 = arg0;
                var8 = arg1;
                var9 = arg2;
                var6 = arg3;
                var1 = this;
                var _closure2_slot0 = var1;
                var7 = null;
                if (!(var7 != var8)) {
                    _fun65518_ip = 173;
                    continue _fun65518
                }
            case 30:
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var3 = 3;
                var3 = var1[var3];
                var5 = undefined;
                var4 = var4.bind(var5)(var3);
                var3 = var4.pushLazy;
                var10 = _closure1_slot0;
                var2 = 5;
                var2 = var1[var2];
                var10 = var10.bind(var5)(var2);
                var2 = 4;
                var2 = var1[var2];
                var1 = var1.paths;
                var2 = var10.bind(var5)(var2, var1);
                var1 = {};
                var12 = var7 != var11;
                var10 = undefined;
                if (!var12) {
                    _fun65518_ip = 109;
                    continue _fun65518
                }
            case 106:
                var10 = var11;
            case 109:
                var1.channelType = var10;
                var1.guildId = var8;
                var10 = var7 != var9;
                var8 = undefined;
                if (!var10) {
                    _fun65518_ip = 130;
                    continue _fun65518
                }
            case 127:
                var8 = var9;
            case 130:
                var1.categoryId = var8;
                var7 = var7 != var6;
                var5 = undefined;
                if (!var7) {
                    _fun65518_ip = 147;
                    continue _fun65518
                }
            case 144:
                var5 = var6;
            case 147:
                var1.cloneChannelId = var5;
                var0 = function arg0, arg1() {
                    _fun65519: for (var _fun65519_ip = 0;;) switch (_fun65519_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot0;
                            var0 = var1.close;
                            var0 = var0.bind(var1)();
                            var3 = _closure1_slot4;
                            var1 = var3.getChannel;
                            var3 = var1.bind(var3)(var2);
                            var4 = null;
                            var1 = arg1;
                            var1 = var4 != var1;
                            if (!var1) {
                                _fun65519_ip = 53;
                                continue _fun65519
                            }
                        case 49:
                            var1 = var4 != var3;
                        case 53:
                            if (!var1) {
                                _fun65519_ip = 75;
                                continue _fun65519
                            }
                        case 56:
                            var5 = _closure1_slot3;
                            var4 = var5.has;
                            var3 = var3.type;
                            var1 = var4.bind(var5)(var3);
                        case 75:
                            if (!var1) {
                                _fun65519_ip = 111;
                                continue _fun65519
                            }
                        case 78:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 2;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            var0 = var1.transitionToChannel;
                            var0 = var0.bind(var1)(var2);
                        case 111:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1.onChannelCreated = var0;
                var0 = 'CREATE_CHANNEL_MODAL_KEY';
                var0 = var3.bind(var4)(var2, var1, var0);
            case 173:
                var0 = undefined;
                return var0;
        }
    };
    var1.open = var6;
    var3 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.popWithKey;
        var1 = 'CREATE_CHANNEL_MODAL_KEY';
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.close = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/native/CreateChannelModalActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1376, 1372, 3904, 4527, 8092, 1307, 2]);