// modules/forwarding/getInlineForwardOptions.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageReferenceTypes;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forwarding/getInlineForwardOptions.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun88707: for (var _fun88707_ip = 0;;) switch (_fun88707_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var4 = var1.targetKind;
                var5 = var1.embedIndex;
                var1 = 'media';
                if (!(var1 !== var4)) {
                    _fun88707_ip = 78;
                    continue _fun88707
                }
            case 30:
                var1 = 'embed';
                if (!(var1 === var4)) {
                    _fun88707_ip = 44;
                    continue _fun88707
                }
            case 38:
                var1 = null;
                if (!(var1 == var5)) {
                    _fun88707_ip = 58;
                    continue _fun88707
                }
            case 44:
                var3 = 'shortcut';
                var1 = undefined;
                if (!(var3 === var4)) {
                    _fun88707_ip = 56;
                    continue _fun88707
                }
            case 54:
                var1 = {};
            case 56:
                _fun88707_ip = 76;
                continue _fun88707;
            case 58:
                var3 = {};
                var4 = new Array(1);
                var4[0] = var5;
                var3.onlyEmbedIndices = var4;
                var1 = var3;
            case 76:
                return var1;
            case 78:
                var3 = var0.messageReference;
                var4 = null;
                var5 = var4 == var3;
                var6 = undefined;
                if (var5) {
                    _fun88707_ip = 100;
                    continue _fun88707
                }
            case 95:
                var6 = var3.type;
            case 100:
                var3 = _closure1_slot2;
                var5 = var3.FORWARD;
                var3 = var0;
                if (!(var6 === var5)) {
                    _fun88707_ip = 149;
                    continue _fun88707
                }
            case 120:
                var5 = var0.messageSnapshots;
                var0 = 0;
                var5 = var5[var0];
                var6 = var4 == var5;
                var0 = undefined;
                if (var6) {
                    _fun88707_ip = 146;
                    continue _fun88707
                }
            case 141:
                var0 = var5.message;
            case 146:
                var3 = var0;
            case 149:
                var0 = {};
                var4 = var4 == var3;
                var1 = undefined;
                if (var4) {
                    _fun88707_ip = 200;
                    continue _fun88707
                }
            case 160:
                var5 = var3.attachments;
                var4 = var5.filter;
                var3 = function(arg0) { // Environment: var2
                    _fun88708: for (var _fun88708_ip = 0;;) switch (_fun88708_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.filename;
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var5 = 1;
                            var0 = var0[var5];
                            var4 = undefined;
                            var2 = var2.bind(var4)(var0);
                            var0 = var2.isImageFile;
                            var0 = var0.bind(var2)(var3);
                            if (var0) {
                                _fun88708_ip = 76;
                                continue _fun88708
                            }
                        case 48:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var5];
                            var2 = var2.bind(var4)(var1);
                            var1 = var2.isVideoFile;
                            var0 = var1.bind(var2)(var3);
                        case 76:
                            return var0;
                    }
                };
                var4 = var4.bind(var5)(var3);
                var3 = var4.map;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var1 = var3.bind(var4)(var2);
            case 200:
                var0.onlyAttachmentIds = var1;
                return var0;
        }
    };
    var2.getInlineForwardOptions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 3939, 2]);