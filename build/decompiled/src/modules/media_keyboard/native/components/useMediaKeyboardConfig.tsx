// modules/media_keyboard/native/components/useMediaKeyboardConfig.tsx
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
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MediaKeyboardTarget;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ChannelTypesSets;
    var _closure1_slot5 = var6;
    var3 = var3.MAX_UPLOAD_COUNT;
    var _closure1_slot6 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_keyboard/native/components/useMediaKeyboardConfig.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun108308: for (var _fun108308_ip = 0;;) switch (_fun108308_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.channel;
                var9 = var1.context;
                var _closure2_slot0 = var9;
                var6 = undefined;
                var _closure2_slot1 = var6;
                var _closure2_slot2 = var6;
                var _closure2_slot3 = var6;
                var _closure2_slot4 = var6;
                var _closure2_slot5 = var6;
                var4 = var9.target;
                var2 = _closure1_slot4;
                var2 = var2.COMMAND;
                var2 = var4 === var2;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 3;
                var4 = var7[var4];
                var5 = var5.bind(var6)(var4);
                var4 = var5.useCanPostPollsInChannel;
                var8 = var4.bind(var5)(var3);
                if (!var8) {
                    _fun108308_ip = 101;
                    continue _fun108308
                }
            case 98:
                var8 = !var2;
            case 101:
                _closure2_slot1 = var8;
                var5 = _closure1_slot1;
                var10 = _closure1_slot2;
                var4 = 4;
                var4 = var10[var4];
                var4 = var5.bind(var6)(var4);
                var7 = var4.bind(var6)(var3);
                _closure2_slot2 = var7;
                var5 = _closure1_slot0;
                var4 = 5;
                var4 = var10[var4];
                var5 = var5.bind(var6)(var4);
                var4 = var5.useCanStartThread;
                var5 = var4.bind(var5)(var3);
                if (!var5) {
                    _fun108308_ip = 192;
                    continue _fun108308
                }
            case 164:
                var4 = _closure1_slot5;
                var11 = var4.GUILD_THREADS_ONLY;
                var10 = var11.has;
                var4 = var3.type;
                var4 = var10.bind(var11)(var4);
                var5 = !var4;
            case 192:
                if (!var5) {
                    _fun108308_ip = 208;
                    continue _fun108308
                }
            case 195:
                var4 = var3.isThread;
                var4 = var4.bind(var3)();
                var5 = !var4;
            case 208:
                if (!var5) {
                    _fun108308_ip = 214;
                    continue _fun108308
                }
            case 211:
                var5 = !var2;
            case 214:
                _closure2_slot3 = var5;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 6;
                var4 = var11[var4];
                var10 = var10.bind(var6)(var4);
                var4 = var10.useIsAppLauncherEnabled;
                var3 = var3.id;
                var4 = var4.bind(var10)(var3);
                if (!var4) {
                    _fun108308_ip = 260;
                    continue _fun108308
                }
            case 257:
                var4 = !var2;
            case 260:
                _closure2_slot4 = var4;
                var3 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 7;
                var2 = var10[var2];
                var6 = var3.bind(var6)(var2);
                var3 = var6.getMediaKeyboardDraftType;
                var2 = var9.target;
                var6 = var3.bind(var6)(var2);
                _closure2_slot5 = var6;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(6);
                var1[0] = var9;
                var1[1] = var8;
                var1[2] = var7;
                var1[3] = var6;
                var1[4] = var5;
                var1[5] = var4;
                var0 = function() { // Environment: var0
                    _fun108309: for (var _fun108309_ip = 0;;) switch (_fun108309_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var3 = var0.target;
                            var0 = _closure1_slot4;
                            var0 = var0.CHAT;
                            if (!(var3 !== var0)) {
                                _fun108309_ip = 47;
                                continue _fun108309
                            }
                        case 30:
                            var0 = _closure1_slot4;
                            var0 = var0.COMMAND;
                            if (!(var3 === var0)) {
                                _fun108309_ip = 256;
                                continue _fun108309
                            }
                        case 47:
                            var0 = {};
                            var2 = _closure1_slot4;
                            var6 = var2.CHAT;
                            var5 = undefined;
                            if (!(var3 !== var6)) {
                                _fun108309_ip = 80;
                                continue _fun108309
                            }
                        case 65:
                            var6 = _closure2_slot0;
                            var6 = var6.option;
                            var5 = var6.displayName;
                        case 80:
                            var0.title = var5;
                            var5 = _closure1_slot4;
                            var6 = var5.CHAT;
                            var5 = undefined;
                            if (!(var3 !== var6)) {
                                _fun108309_ip = 116;
                                continue _fun108309
                            }
                        case 100:
                            var6 = _closure2_slot0;
                            var6 = var6.option;
                            var5 = var6.displayDescription;
                        case 116:
                            var0.subtitle = var5;
                            var5 = _closure1_slot4;
                            var6 = var5.CHAT;
                            var5 = 1;
                            if (!(var3 === var6)) {
                                _fun108309_ip = 142;
                                continue _fun108309
                            }
                        case 138:
                            var5 = _closure1_slot6;
                        case 142:
                            var0.uploadLimit = var5;
                            var4 = _closure1_slot4;
                            var5 = var4.CHAT;
                            var5 = var3 === var5;
                            var0.disableWhenReachedLimit = var5;
                            var4 = var4.CHAT;
                            var2 = undefined;
                            if (!(var3 !== var4)) {
                                _fun108309_ip = 204;
                                continue _fun108309
                            }
                        case 178:
                            var4 = _closure2_slot0;
                            var4 = var4.option;
                            var5 = var4.name;
                            var4 = new Array(1);
                            var4[0] = var5;
                            var2 = var4;
                        case 204:
                            var0.includedUploadIds = var2;
                            var2 = _closure2_slot1;
                            var0.canPostPolls = var2;
                            var2 = _closure2_slot3;
                            var0.canStartThreads = var2;
                            var2 = _closure2_slot4;
                            var0.isAppLauncherEnabled = var2;
                            var2 = _closure2_slot2;
                            var0.uploadDisabled = var2;
                            var1 = _closure2_slot5;
                            var0.draftType = var1;
                            return var0;
                        case 256:
                            var0 = global;
                            var2 = var0.Error;
                            var0 = var0.HermesInternal;
                            var1 = var0.concat;
                            var0 = 'MediaKeyboard does not support context target ';
                            var7 = var1.bind(var0)(var3);
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var8 = var1;
                            var0 = new var8[var2](var7, var6);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1566, 660, 6513, 13939, 6659, 6781, 9364, 2]);