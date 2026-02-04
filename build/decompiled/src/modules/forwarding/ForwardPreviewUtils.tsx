// modules/forwarding/ForwardPreviewUtils.tsx
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
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forwarding/ForwardPreviewUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun73143: for (var _fun73143_ip = 0;;) switch (_fun73143_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.message;
                var _closure2_slot0 = var10;
                var2 = var1.channel;
                var _closure2_slot1 = var2;
                var2 = var1.forwardOptions;
                var1 = undefined;
                var _closure2_slot2 = var1;
                var _closure2_slot3 = var1;
                var4 = null;
                var5 = var4 == var2;
                var3 = undefined;
                if (var5) {
                    _fun73143_ip = 56;
                    continue _fun73143
                }
            case 50:
                var3 = var2.onlyAttachmentIds;
            case 56:
                _closure2_slot2 = var3;
                var6 = var4 == var2;
                var5 = undefined;
                if (var6) {
                    _fun73143_ip = 75;
                    continue _fun73143
                }
            case 69:
                var5 = var2.onlyEmbedIndices;
            case 75:
                _closure2_slot3 = var5;
                var2 = var10.messageSnapshots;
                var7 = 0;
                var6 = var2[var7];
                var8 = var4 == var6;
                var2 = undefined;
                if (var8) {
                    _fun73143_ip = 105;
                    continue _fun73143
                }
            case 100:
                var2 = var6.message;
            case 105:
                if (!(var4 != var2)) {
                    _fun73143_ip = 112;
                    continue _fun73143
                }
            case 109:
                var10 = var2;
            case 112:
                var6 = var10.attachments;
                if (!(var4 == var3)) {
                    _fun73143_ip = 132;
                    continue _fun73143
                }
            case 122:
                if (!(var4 != var5)) {
                    _fun73143_ip = 155;
                    continue _fun73143
                }
            case 126:
                var6 = new Array(0);
                _fun73143_ip = 155;
                continue _fun73143;
            case 132:
                var9 = var10.attachments;
                var8 = var9.filter;
                var2 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot2;
                    var1 = var2.includes;
                    var0 = arg0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var8.bind(var9)(var2);
            case 155:
                var2 = new Array(0);
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var9 = 1;
                var9 = var12[var9];
                var12 = var11.bind(var1)(var9);
                var11 = var12.useStateFromStores;
                var8 = _closure1_slot2;
                var9 = new Array(1);
                var9[0] = var8;
                var8 = function() { // Environment: var0
                    _fun73145: for (var _fun73145_ip = 0;;) switch (_fun73145_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun73145_ip = 64;
                                continue _fun73145
                            }
                        case 16:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var3 = 2;
                            var4 = var4[var3];
                            var3 = undefined;
                            var5 = var5.bind(var3)(var4);
                            var4 = var5.canEmbedLinks;
                            var3 = _closure2_slot1;
                            var2 = _closure1_slot2;
                            var2 = var4.bind(var5)(var3, var2);
                            var0 = !var2;
                        case 64:
                            if (!var0) {
                                _fun73145_ip = 107;
                                continue _fun73145
                            }
                        case 67:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var2 = 2;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.shouldStripEmbeds;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1);
                        case 107:
                            return var0;
                    }
                };
                var8 = var11.bind(var12)(var9, var8);
                if (var8) {
                    _fun73143_ip = 261;
                    continue _fun73143
                }
            case 215:
                var8 = var10.embeds;
                if (!(var4 == var5)) {
                    _fun73143_ip = 235;
                    continue _fun73143
                }
            case 225:
                if (!(var4 != var3)) {
                    _fun73143_ip = 233;
                    continue _fun73143
                }
            case 229:
                var8 = new Array(0);
            case 233:
                _fun73143_ip = 258;
                continue _fun73143;
            case 235:
                var12 = var10.embeds;
                var11 = var12.filter;
                var9 = function(arg0, arg1) { // Environment: var0
                    var2 = _closure2_slot3;
                    var1 = var2.includes;
                    var0 = arg1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var11.bind(var12)(var9);
            case 258:
                var2 = var8;
            case 261:
                var5 = var4 != var5;
                if (var5) {
                    _fun73143_ip = 296;
                    continue _fun73143
                }
            case 268:
                var9 = var10.content;
                var8 = '';
                var8 = var8 === var9;
                if (!var8) {
                    _fun73143_ip = 293;
                    continue _fun73143
                }
            case 284:
                var9 = var2.length;
                var8 = var9 > var7;
            case 293:
                var5 = var8;
            case 296:
                var9 = var10;
                if (!var5) {
                    _fun73143_ip = 348;
                    continue _fun73143
                }
            case 302:
                var8 = var10.set;
                var5 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.url;
                    return var0;
                };
                var11 = var5.bind(var2)(var0);
                var5 = var11.join;
                var0 = '\n';
                var5 = var5.bind(var11)(var0);
                var0 = 'content';
                var9 = var8.bind(var10)(var0, var5);
            case 348:
                var0 = var9.content;
                var5 = '';
                var0 = var5 === var0;
                if (!var0) {
                    _fun73143_ip = 393;
                    continue _fun73143
                }
            case 364:
                var8 = var9.embeds;
                var8 = var8[var7];
                var10 = var4 == var8;
                var1 = undefined;
                if (var10) {
                    _fun73143_ip = 389;
                    continue _fun73143
                }
            case 383:
                var1 = var8.rawDescription;
            case 389:
                var0 = var4 != var1;
            case 393:
                var1 = var9;
                if (!var0) {
                    _fun73143_ip = 430;
                    continue _fun73143
                }
            case 399:
                var8 = var9.set;
                var0 = var9.embeds;
                var0 = var0[var7];
                var7 = var0.rawDescription;
                var0 = 'content';
                var1 = var8.bind(var9)(var0, var7);
            case 430:
                var0 = {};
                var0.attachments = var6;
                var0.embeds = var2;
                var2 = var1.content;
                var2 = var5 !== var2;
                if (!var2) {
                    _fun73143_ip = 458;
                    continue _fun73143
                }
            case 454:
                var2 = var4 == var3;
            case 458:
                var0.hasContent = var2;
                var0.contentMessage = var1;
                return var0;
        }
    };
    var2.useForwardPreviewContent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3091, 566, 3997, 2]);