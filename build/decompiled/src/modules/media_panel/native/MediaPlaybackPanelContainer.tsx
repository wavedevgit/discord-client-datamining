// modules/media_panel/native/MediaPlaybackPanelContainer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = var6.memo;
    var1 = function() { // Original name: MediaPlaybackPanelContainer, environment: var1
        _fun112476: for (var _fun112476_ip = 0;;) switch (_fun112476_ip) {
            case 0:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 2;
                var0 = var6[var0];
                var4 = undefined;
                var3 = var5.bind(var4)(var0);
                var2 = var3.useMediaPlayerManagerStore;
                var0 = 3;
                var0 = var6[var0];
                var6 = var5.bind(var4)(var0);
                var5 = var6.useShallow;
                var0 = function(arg0) { // Environment: var0
                    _fun112477: for (var _fun112477_ip = 0;;) switch (_fun112477_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.showPip;
                            var2 = !var0;
                            if (var2) {
                                _fun112477_ip = 24;
                                continue _fun112477
                            }
                        case 15:
                            var0 = var1.canAccessMedia;
                            var2 = !var0;
                        case 24:
                            if (var2) {
                                _fun112477_ip = 39;
                                continue _fun112477
                            }
                        case 27:
                            var3 = var1.activeMediaPlayerSource;
                            var0 = null;
                            var2 = var0 == var3;
                        case 39:
                            var0 = !var2;
                            if (var2) {
                                _fun112477_ip = 188;
                                continue _fun112477
                            }
                        case 48:
                            var7 = var1.mediaSourceMessage;
                            var1 = var1.activeMediaPlayerSource;
                            var2 = null;
                            var3 = var2 == var1;
                            var6 = undefined;
                            if (var3) {
                                _fun112477_ip = 77;
                                continue _fun112477
                            }
                        case 71:
                            var6 = var1.attachmentIndex;
                        case 77:
                            var3 = var2 == var7;
                            var1 = false;
                            if (var3) {
                                _fun112477_ip = 185;
                                continue _fun112477
                            }
                        case 86:
                            var3 = var2 == var6;
                            var1 = false;
                            if (var3) {
                                _fun112477_ip = 185;
                                continue _fun112477
                            }
                        case 95:
                            var3 = var2 == var7;
                            var4 = undefined;
                            if (var3) {
                                _fun112477_ip = 133;
                                continue _fun112477
                            }
                        case 104:
                            var3 = var7.getContentMessage;
                            var3 = var3.bind(var7)();
                            var7 = var2 == var3;
                            var4 = undefined;
                            if (var7) {
                                _fun112477_ip = 133;
                                continue _fun112477
                            }
                        case 123:
                            var3 = var3.attachments;
                            var4 = var3[var6];
                        case 133:
                            var6 = var2 == var4;
                            var3 = undefined;
                            if (var6) {
                                _fun112477_ip = 172;
                                continue _fun112477
                            }
                        case 142:
                            var6 = var4.content_type;
                            var4 = var2 == var6;
                            var3 = undefined;
                            if (var4) {
                                _fun112477_ip = 172;
                                continue _fun112477
                            }
                        case 157:
                            var5 = var6.startsWith;
                            var4 = 'audio';
                            var3 = var5.bind(var6)(var4);
                        case 172:
                            var2 = var2 != var3;
                            if (!var2) {
                                _fun112477_ip = 182;
                                continue _fun112477
                            }
                        case 179:
                            var2 = var3;
                        case 182:
                            var1 = var2;
                        case 185:
                            var0 = var1;
                        case 188:
                            return var0;
                    }
                };
                var0 = var5.bind(var6)(var0);
                var2 = var2.bind(var3)(var0);
                var0 = null;
                if (!var2) {
                    _fun112476_ip = 129;
                    continue _fun112476
                }
            case 73:
                var3 = _closure1_slot3;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 4;
                var1 = var7[var1];
                var2 = var6.bind(var4)(var1);
                var1 = {};
                var5 = 5;
                var5 = var7[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 129:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_panel/native/MediaPlaybackPanelContainer.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 12866, 3037, 14403, 14405, 2]);