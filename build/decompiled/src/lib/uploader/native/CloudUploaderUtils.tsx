// lib/uploader/native/CloudUploaderUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var0 = function(arg0, arg1, arg2) { // Original name: _prepareMessageRequestBodyCloud, environment: var3
        _fun37587: for (var _fun37587_ip = 0;;) switch (_fun37587_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var5 = arg2;
                var9 = new Array(0);
                var _closure2_slot0 = var9;
                var2 = var3.forEach;
                var0 = function(arg0, arg1) { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.getAttachmentPayload;
                    var2 = arg0;
                    var1 = arg1;
                    var5 = var3.bind(var4)(var2, var1);
                    var3 = _closure2_slot0;
                    var2 = var3.push;
                    var1 = {};
                    var6 = var1;
                    var4 = copyDataProperties(var6, var5);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var2.bind(var3)(var0);
                var0 = null;
                if (!(var0 != var5)) {
                    _fun37587_ip = 44;
                    continue _fun37587
                }
            case 40:
                if (!(var0 == var1)) {
                    _fun37587_ip = 67;
                    continue _fun37587
                }
            case 44:
                var0 = {};
                var13 = var0;
                var12 = var1;
                var2 = copyDataProperties(var13, var12);
                var2 = 'attachments';
                var0[var2] = var9;
                _fun37587_ip = 164;
                continue _fun37587;
            case 67:
                var4 = {};
                var13 = var4;
                var12 = var1;
                var1 = copyDataProperties(var13, var12);
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 4;
                var3 = var7[var1];
                var2 = undefined;
                var10 = var6.bind(var2)(var3);
                var8 = var10.get;
                var3 = new Array(0);
                var12 = var8.bind(var10)(var4, var5, var3);
                var3 = new Array(0);
                var11 = 0;
                var13 = var3;
                var11 = arraySpread(var13, var12, var11);
                var13 = var3;
                var12 = var9;
                var8 = arraySpread(var13, var12, var11);
                var1 = var7[var1];
                var2 = var6.bind(var2)(var1);
                var1 = var2.set;
                var0 = var1.bind(var2)(var4, var5, var3);
            case 164:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var1 = function(arg0) { // Original name: getUploadPayload, environment: var3
        var1 = arg0;
        var0 = {};
        var2 = var1.filename;
        var0.filename = var2;
        var1 = var1.currentSize;
        var0.file_size = var1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.uniqueId;
        var2 = var2.bind(var3)();
        var0.id = var2;
        var0.original_content_type = var1;
        return var0;
    };
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var7[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = {};
    var4.getUploadPayload = var1;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'lib/uploader/native/CloudUploaderUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var3 = function(arg0, arg1, arg2, arg3) { // Original name: prepareMessagePayload, environment: var3
        _fun37590: for (var _fun37590_ip = 0;;) switch (_fun37590_ip) {
            case 0:
                var4 = _closure1_slot6;
                var6 = undefined;
                var2 = arg1;
                var1 = arg2;
                var0 = arg3;
                var1 = var4.bind(var6)(var2, var1, var0);
                var0 = {};
                var2 = {};
                var4 = arg0;
                var2.Authorization = var4;
                var5 = _closure1_slot5;
                var4 = var5.getDebugOptionsHeaderValue;
                var4 = var4.bind(var5)();
                var2['X-Debug-Options'] = var4;
                var4 = _closure1_slot3;
                var4 = var4.locale;
                var2['Accept-Language'] = var4;
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 5;
                var4 = var7[var4];
                var5 = var5.bind(var6)(var4);
                var4 = var5.getSuperPropertiesBase64;
                var5 = var4.bind(var5)();
                var4 = null;
                if (!(var4 != var5)) {
                    _fun37590_ip = 117;
                    continue _fun37590
                }
            case 111:
                var2['X-Super-Properties'] = var5;
            case 117:
                var5 = _closure1_slot4;
                var3 = var5.getFingerprint;
                var3 = var3.bind(var5)();
                if (!(var4 != var3)) {
                    _fun37590_ip = 141;
                    continue _fun37590
                }
            case 135:
                var2['X-Fingerprint'] = var3;
            case 141:
                var0.headers = var2;
                var0.body = var1;
                return var0;
        }
    };
    var2.prepareMessagePayload = var3;
    var2.getUploadPayload = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1676, 1216, 803, 3966, 22, 795, 2]);