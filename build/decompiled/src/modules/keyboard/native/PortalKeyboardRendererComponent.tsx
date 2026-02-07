// modules/keyboard/native/PortalKeyboardRendererComponent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun107805: for (var _fun107805_ip = 0;;) switch (_fun107805_ip) {
            case 0:
                var3 = arg0;
                var2 = var3.item;
                var1 = var2.channelId;
                var _closure2_slot0 = var1;
                var9 = var2.chatInputRef;
                var2 = var2.type;
                var6 = var3.state;
                var8 = var3.cleanUp;
                var4 = _closure1_slot4;
                var3 = var4.getChannel;
                var10 = var3.bind(var4)(var1);
                var _closure2_slot1 = var10;
                var4 = _closure1_slot3;
                var7 = var4.useMemo;
                var3 = new Array(2);
                var3[0] = var10;
                var3[1] = var1;
                var1 = function() { // Environment: var0
                    _fun107806: for (var _fun107806_ip = 0;;) switch (_fun107806_ip) {
                        case 0:
                            var5 = _closure2_slot0;
                            var6 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var4 = 3;
                            var2 = var2[var4];
                            var3 = undefined;
                            var2 = var6.bind(var3)(var2);
                            var2 = var2.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                            if (!(var5 === var2)) {
                                _fun107806_ip = 67;
                                continue _fun107806
                            }
                        case 42:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var4];
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
                            _fun107806_ip = 71;
                            continue _fun107806;
                        case 67:
                            var0 = _closure2_slot1;
                        case 71:
                            return var0;
                    }
                };
                var7 = var7.bind(var4)(var1, var3);
                var _closure2_slot2 = var7;
                var3 = var4.useMemo;
                var1 = new Array(1);
                var1[0] = var7;
                var0 = function() { // Environment: var0
                    _fun107807: for (var _fun107807_ip = 0;;) switch (_fun107807_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var0 = null;
                            var1 = var0 != var1;
                            var0 = undefined;
                            if (!var1) {
                                _fun107807_ip = 39;
                                continue _fun107807
                            }
                        case 18:
                            var1 = {};
                            var2 = _closure2_slot2;
                            var1.channel = var2;
                            var2 = 'channel';
                            var1.type = var2;
                            var0 = var1;
                        case 39:
                            return var0;
                    }
                };
                var10 = var3.bind(var4)(var0, var1);
                var0 = null;
                if (!(var0 != var7)) {
                    _fun107805_ip = 443;
                    continue _fun107805
                }
            case 135:
                var4 = undefined;
                if (!(var4 !== var10)) {
                    _fun107805_ip = 443;
                    continue _fun107805
                }
            case 144:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var11 = 4;
                var1 = var1[var11];
                var1 = var3.bind(var4)(var1);
                var1 = var1.KeyboardTypes;
                var1 = var1.APP_LAUNCHER;
                if (!(var1 !== var2)) {
                    _fun107805_ip = 357;
                    continue _fun107805
                }
            case 183:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var11];
                var1 = var3.bind(var4)(var1);
                var1 = var1.KeyboardTypes;
                var1 = var1.MEDIA;
                if (!(var1 !== var2)) {
                    _fun107805_ip = 304;
                    continue _fun107805
                }
            case 216:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var11];
                var1 = var3.bind(var4)(var1);
                var1 = var1.KeyboardTypes;
                var1 = var1.EXPRESSION;
                if (!(var1 !== var2)) {
                    _fun107805_ip = 251;
                    continue _fun107805
                }
            case 249:
                return var0;
            case 251:
                var3 = _closure1_slot5;
                var2 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 8;
                var1 = var11[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.channel = var7;
                var1.chatInputRef = var9;
                var1.onClose = var8;
                var1.transitionState = var6;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 304:
                var3 = _closure1_slot5;
                var2 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 7;
                var1 = var11[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.channel = var7;
                var1.chatInputRef = var9;
                var1.onClose = var8;
                var1.transitionState = var6;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 357:
                var3 = _closure1_slot5;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 5;
                var1 = var7[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.context = var10;
                var1.chatInputRef = var9;
                var1.onClose = var8;
                var1.transitionState = var6;
                var6 = _closure1_slot0;
                var5 = 6;
                var5 = var7[var5];
                var5 = var6.bind(var4)(var5);
                var5 = var5.AppLauncherEntrypoint;
                var5 = var5.TEXT;
                var1.entrypoint = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 443:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/keyboard/native/PortalKeyboardRendererComponent.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 33, 5695, 1567, 13920, 7805, 14046, 14073, 2]);