// modules/polls/native/useRenderPollAnswerImage.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityIndicator;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DraftType;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EMOJI_URL_BASE_SIZE;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot9 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/polls/native/useRenderPollAnswerImage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: useRenderPollAnswerImage, environment: var1
        _fun108436: for (var _fun108436_ip = 0;;) switch (_fun108436_ip) {
            case 0:
                var11 = arg2;
                var9 = arg3;
                var10 = arg4;
                var0 = arg0;
                var _closure2_slot0 = var0;
                var0 = arg1;
                var _closure2_slot1 = var0;
                var _closure2_slot2 = var11;
                var _closure2_slot3 = var9;
                var _closure2_slot4 = var10;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 7;
                var0 = var2[var0];
                var8 = undefined;
                var5 = var1.bind(var8)(var0);
                var2 = var5.useStateFromStores;
                var0 = _closure1_slot7;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var3
                    var4 = _closure1_slot7;
                    var3 = var4.getUpload;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var0 = _closure1_slot6;
                    var0 = var0.Poll;
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
                };
                var2 = var2.bind(var5)(var1, var0);
                var _closure2_slot5 = var2;
                var1 = _closure1_slot4;
                var0 = var1.useState;
                var5 = var0.bind(var1)();
                var1 = _closure1_slot3;
                var0 = 2;
                var1 = var1.bind(var8)(var5, var0);
                var0 = 0;
                var7 = var1[var0];
                var _closure2_slot6 = var7;
                var0 = 1;
                var1 = var1[var0];
                var6 = null;
                var0 = var6 == var11;
                var5 = undefined;
                if (var0) {
                    _fun108436_ip = 170;
                    continue _fun108436
                }
            case 150:
                var0 = var11.mediaAttachmentState;
                var6 = var6 == var0;
                var5 = undefined;
                if (var6) {
                    _fun108436_ip = 170;
                    continue _fun108436
                }
            case 165:
                var5 = var0.status;
            case 170:
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 8;
                var0 = var12[var0];
                var0 = var6.bind(var8)(var0);
                var0 = var0.PollMediaUploadAttachmentStatus;
                var0 = var0.PREPARING;
                var8 = var5 === var0;
                var _closure2_slot7 = var8;
                var0 = {};
                var6 = _closure1_slot4;
                var5 = var6.useMemo;
                var4 = new Array(6);
                var4[0] = var11;
                var4[1] = var10;
                var4[2] = var9;
                var4[3] = var2;
                var4[4] = var8;
                var4[5] = var7;
                var3 = function() { // Environment: var3
                    _fun108438: for (var _fun108438_ip = 0;;) switch (_fun108438_ip) {
                        case 0:
                            var1 = _closure2_slot7;
                            if (var1) {
                                _fun108438_ip = 377;
                                continue _fun108438
                            }
                        case 13:
                            var1 = _closure2_slot5;
                            var2 = null;
                            if (!(var2 == var1)) {
                                _fun108438_ip = 282;
                                continue _fun108438
                            }
                        case 26:
                            var1 = _closure2_slot2;
                            var3 = var2 == var1;
                            var5 = undefined;
                            var1 = undefined;
                            if (var3) {
                                _fun108438_ip = 51;
                                continue _fun108438
                            }
                        case 41:
                            var3 = _closure2_slot2;
                            var1 = var3.emoji;
                        case 51:
                            if (!(var2 == var1)) {
                                _fun108438_ip = 57;
                                continue _fun108438
                            }
                        case 55:
                            return var5;
                        case 57:
                            var1 = _closure2_slot2;
                            var11 = var1.emoji;
                            var4 = _closure1_slot9;
                            var3 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var1 = 10;
                            var1 = var9[var1];
                            var3 = var3.bind(var5)(var1);
                            var1 = {};
                            var6 = {};
                            var7 = _closure2_slot4;
                            var6.width = var7;
                            var6.height = var7;
                            var1.fastImageStyle = var6;
                            var6 = {};
                            var6.fontSize = var7;
                            var1.textEmojiStyle = var6;
                            var7 = var11.type;
                            var8 = _closure1_slot0;
                            var6 = 11;
                            var6 = var9[var6];
                            var6 = var8.bind(var5)(var6);
                            var6 = var6.EmojiTypes;
                            var6 = var6.UNICODE;
                            if (!(var7 !== var6)) {
                                _fun108438_ip = 171;
                                continue _fun108438
                            }
                        case 164:
                            var7 = var11.name;
                            _fun108438_ip = 176;
                            continue _fun108438;
                        case 171:
                            var7 = var11.surrogates;
                        case 176:
                            var8 = var2 != var7;
                            var6 = '';
                            if (!var8) {
                                _fun108438_ip = 190;
                                continue _fun108438
                            }
                        case 187:
                            var6 = var7;
                        case 190:
                            var1.name = var6;
                            var6 = var11.id;
                            var7 = var2 != var6;
                            var6 = undefined;
                            if (!var7) {
                                _fun108438_ip = 269;
                                continue _fun108438
                            }
                        case 208:
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var7 = 12;
                            var7 = var9[var7];
                            var9 = var8.bind(var5)(var7);
                            var8 = var9.getEmojiURL;
                            var7 = {};
                            var12 = var11.id;
                            var7.id = var12;
                            var11 = var11.animated;
                            var7.animated = var11;
                            var10 = _closure1_slot8;
                            var7.size = var10;
                            var6 = var8.bind(var9)(var7);
                        case 269:
                            var1.src = var6;
                            var1 = var4.bind(var5)(var3, var1);
                            return var1;
                        case 282:
                            var1 = _closure2_slot5;
                            var5 = var1.item;
                            var1 = _closure2_slot3;
                            if (!(var2 == var1)) {
                                _fun108438_ip = 305;
                                continue _fun108438
                            }
                        case 299:
                            var6 = _closure2_slot6;
                            _fun108438_ip = 309;
                            continue _fun108438;
                        case 305:
                            var6 = _closure2_slot3;
                        case 309:
                            var3 = _closure1_slot9;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 9;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var4 = {};
                            var4.width = var6;
                            var4.height = var6;
                            var0.style = var4;
                            var4 = {};
                            var5 = var5.uri;
                            var4.uri = var5;
                            var0.source = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        case 377:
                            var3 = _closure1_slot9;
                            var2 = _closure1_slot5;
                            var1 = undefined;
                            var0 = {};
                            var0 = var3.bind(var1)(var2, var0);
                            return var0;
                    }
                };
                var3 = var5.bind(var6)(var3, var4);
                var0.renderImage = var3;
                var0.upload = var2;
                var0.setUploadSize = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3960, 3959, 1616, 33, 566, 13947, 4667, 5731, 3066, 1417, 2]);