// modules/explicit_media_redaction/hooks/useExplicitMediaAttachmentsForMessage.tsx
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
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/explicit_media_redaction/hooks/useExplicitMediaAttachmentsForMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0, arg1, arg2) { // Environment: var1
        _fun73685: for (var _fun73685_ip = 0;;) switch (_fun73685_ip) {
            case 0:
                var3 = arg2;
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var _closure2_slot2 = var3;
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 1;
                var2 = var6[var2];
                var5 = undefined;
                var8 = var4.bind(var5)(var2);
                var7 = var8.useStateFromStores;
                var1 = _closure1_slot2;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot2;
                    var2 = var3.getMessage;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2 = var7.bind(var8)(var2, var1);
                var1 = 2;
                var1 = var6[var1];
                var4 = var4.bind(var5)(var1);
                var1 = var4.useEnabledHarmTypesBitmaskForMessage;
                var1 = var1.bind(var4)(var2);
                var _closure2_slot3 = var1;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun73685_ip = 175;
                    continue _fun73685
                }
            case 111:
                if (!(var5 === var3)) {
                    _fun73685_ip = 124;
                    continue _fun73685
                }
            case 115:
                var4 = function(arg0) { // Environment: var0
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var0 = 3;
                    var0 = var6[var0];
                    var4 = undefined;
                    var3 = var5.bind(var4)(var0);
                    var2 = var3.isMediaObscuredForHarmTypes;
                    var1 = {};
                    var0 = 4;
                    var0 = var6[var0];
                    var0 = var5.bind(var4)(var0);
                    var0 = var0.ObscuredMediaTypes;
                    var0 = var0.Attachment;
                    var1.type = var0;
                    var0 = arg0;
                    var1.media = var0;
                    var0 = _closure2_slot3;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                _fun73685_ip = 131;
                continue _fun73685;
            case 124:
                var4 = function(arg0) { // Environment: var0
                    _fun73687: for (var _fun73687_ip = 0;;) switch (_fun73687_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = var2.url;
                            var0 = _closure2_slot2;
                            var0 = var3 === var0;
                            if (var0) {
                                _fun73687_ip = 35;
                                continue _fun73687
                            }
                        case 22:
                            var2 = var2.id;
                            var1 = _closure2_slot2;
                            var0 = var2 === var1;
                        case 35:
                            return var0;
                    }
                };
            case 131:
                var3 = var1 == var2;
                var0 = undefined;
                if (var3) {
                    _fun73685_ip = 165;
                    continue _fun73685
                }
            case 140:
                var3 = var2.attachments;
                var2 = var1 == var3;
                var0 = undefined;
                if (var2) {
                    _fun73685_ip = 165;
                    continue _fun73685
                }
            case 155:
                var2 = var3.filter;
                var0 = var2.bind(var3)(var4);
            case 165:
                if (!(var1 == var0)) {
                    _fun73685_ip = 173;
                    continue _fun73685
                }
            case 169:
                var0 = new Array(0);
            case 173:
                return var0;
            case 175:
                var0 = new Array(0);
                return var0;
        }
    };
    var2.useRedactableMediaAttachmentsForMessage = var3;
    var1 = function(arg0, arg1, arg2) { // Environment: var1
        _fun73689: for (var _fun73689_ip = 0;;) switch (_fun73689_ip) {
            case 0:
                var3 = arg2;
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var _closure2_slot2 = var3;
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 1;
                var2 = var6[var2];
                var5 = undefined;
                var8 = var4.bind(var5)(var2);
                var7 = var8.useStateFromStores;
                var1 = _closure1_slot2;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot2;
                    var2 = var3.getMessage;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2 = var7.bind(var8)(var2, var1);
                var1 = 2;
                var1 = var6[var1];
                var4 = var4.bind(var5)(var1);
                var1 = var4.useEnabledHarmTypesBitmaskForMessage;
                var1 = var1.bind(var4)(var2);
                var _closure2_slot3 = var1;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun73689_ip = 175;
                    continue _fun73689
                }
            case 111:
                if (!(var5 === var3)) {
                    _fun73689_ip = 124;
                    continue _fun73689
                }
            case 115:
                var4 = function(arg0) { // Environment: var0
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var0 = 3;
                    var0 = var6[var0];
                    var4 = undefined;
                    var3 = var5.bind(var4)(var0);
                    var2 = var3.isMediaObscuredForHarmTypes;
                    var1 = {};
                    var0 = 4;
                    var0 = var6[var0];
                    var0 = var5.bind(var4)(var0);
                    var0 = var0.ObscuredMediaTypes;
                    var0 = var0.Embed;
                    var1.type = var0;
                    var0 = arg0;
                    var1.media = var0;
                    var0 = _closure2_slot3;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                _fun73689_ip = 131;
                continue _fun73689;
            case 124:
                var4 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot2;
                    var0 = var1 === var0;
                    return var0;
                };
            case 131:
                var3 = var1 == var2;
                var0 = undefined;
                if (var3) {
                    _fun73689_ip = 165;
                    continue _fun73689
                }
            case 140:
                var3 = var2.embeds;
                var2 = var1 == var3;
                var0 = undefined;
                if (var2) {
                    _fun73689_ip = 165;
                    continue _fun73689
                }
            case 155:
                var2 = var3.filter;
                var0 = var2.bind(var3)(var4);
            case 165:
                if (!(var1 == var0)) {
                    _fun73689_ip = 173;
                    continue _fun73689
                }
            case 169:
                var0 = new Array(0);
            case 173:
                return var0;
            case 175:
                var0 = new Array(0);
                return var0;
        }
    };
    var2.useRedactableMediaEmbedsForMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4251, 632, 9262, 4272, 4275, 2]);