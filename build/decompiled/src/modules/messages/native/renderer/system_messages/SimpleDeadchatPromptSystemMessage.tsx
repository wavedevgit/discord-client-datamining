// modules/messages/native/renderer/system_messages/SimpleDeadchatPromptSystemMessage.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.Image;
    var _closure1_slot3 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/system_messages/SimpleDeadchatPromptSystemMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: createSimpleDeadchatPromptSystemMessage, environment: var1
        _fun55786: for (var _fun55786_ip = 0;;) switch (_fun55786_ip) {
            case 0:
                var2 = arg0;
                var0 = {};
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 1;
                var3 = var5[var3];
                var6 = undefined;
                var3 = var4.bind(var6)(var3);
                var14 = var3.bind(var6)(var2);
                var15 = var0;
                var3 = copyDataProperties(var15, var14);
                var3 = var2.message;
                var4 = var3.content;
                var3 = null;
                if (!(var3 != var4)) {
                    _fun55786_ip = 76;
                    continue _fun55786
                }
            case 58:
                var4 = var2.message;
                var5 = var4.content;
                var4 = '';
                if (!(var4 === var5)) {
                    _fun55786_ip = 135;
                    continue _fun55786
                }
            case 76:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 2;
                var5 = var9[var4];
                var5 = var8.bind(var6)(var5);
                var7 = var5.intl;
                var5 = var7.string;
                var4 = var9[var4];
                var4 = var8.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4.wnn1Dc;
                var4 = var5.bind(var7)(var4);
                _fun55786_ip = 145;
                continue _fun55786;
            case 135:
                var2 = var2.message;
                var4 = var2.content;
            case 145:
                var2 = 'content';
                var0[var2] = var4;
                var2 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var7 = 3;
                var4 = var4[var7];
                var5 = var5.bind(var6)(var4);
                var4 = var5.isAndroid;
                var5 = var4.bind(var5)();
                var4 = null;
                if (var5) {
                    _fun55786_ip = 258;
                    continue _fun55786
                }
            case 191:
                var9 = _closure1_slot3;
                var8 = var9.resolveAssetSource;
                var10 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = 4;
                var5 = var13[var5];
                var11 = var10.bind(var6)(var5);
                var10 = var11.makeSource;
                var12 = _closure1_slot1;
                var5 = 5;
                var5 = var13[var5];
                var5 = var12.bind(var6)(var5);
                var5 = var10.bind(var11)(var5);
                var5 = var8.bind(var9)(var5);
                var4 = var5.uri;
            case 258:
                var2.cameraButtonIcon = var4;
                var10 = _closure1_slot3;
                var9 = var10.resolveAssetSource;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var8 = 4;
                var8 = var4[var8];
                var12 = var5.bind(var6)(var8);
                var11 = var12.makeSource;
                var13 = _closure1_slot1;
                var8 = 6;
                var8 = var4[var8];
                var8 = var13.bind(var6)(var8);
                var8 = var11.bind(var12)(var8);
                var8 = var9.bind(var10)(var8);
                var8 = var8.uri;
                var2.emojiButtonIcon = var8;
                var4 = var4[var7];
                var5 = var5.bind(var6)(var4);
                var4 = var5.isAndroid;
                var4 = var4.bind(var5)();
                var3 = null;
                if (var4) {
                    _fun55786_ip = 420;
                    continue _fun55786
                }
            case 363:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 2;
                var5 = var9[var4];
                var5 = var8.bind(var6)(var5);
                var7 = var5.intl;
                var5 = var7.string;
                var4 = var9[var4];
                var4 = var8.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4["+j6eZf"];
                var3 = var5.bind(var7)(var4);
            case 420:
                var2.cameraButtonText = var3;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 2;
                var3 = var7[var1];
                var3 = var5.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var1 = var7[var1];
                var1 = var5.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1["WZ+NyG"];
                var1 = var3.bind(var4)(var1);
                var2.emojiButtonText = var1;
                var1 = 'channelPromptData';
                var0[var1] = var2;
                return var0;
        }
    };
    var2.createSimpleDeadchatPromptSystemMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 6640, 1234, 478, 1417, 6721, 6722, 2]);