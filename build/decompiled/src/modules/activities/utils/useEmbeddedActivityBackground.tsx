// modules/activities/utils/useEmbeddedActivityBackground.tsx
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
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = ['embedded_cover', 'embedded_background'];
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/useEmbeddedActivityBackground.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useEmbeddedActivityBackground, environment: var1
        _fun64652: for (var _fun64652_ip = 0;;) switch (_fun64652_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.applicationId;
                var _closure2_slot0 = var6;
                var10 = var1.size;
                var4 = var1.names;
                var11 = undefined;
                if (!(var4 === var11)) {
                    _fun64652_ip = 37;
                    continue _fun64652
                }
            case 30:
                var4 = _closure1_slot4;
            case 37:
                var _closure2_slot1 = var4;
                var9 = var1.format;
                if (!(var9 === var11)) {
                    _fun64652_ip = 54;
                    continue _fun64652
                }
            case 50:
                var9 = 'png';
            case 54:
                var _closure2_slot2 = var11;
                var _closure2_slot3 = var11;
                var _closure2_slot4 = var11;
                var15 = _closure1_slot3;
                var1 = var15.useState;
                var5 = null;
                var1 = var1.bind(var15)(var5);
                var13 = _closure1_slot2;
                var12 = 2;
                var1 = var13.bind(var11)(var1, var12);
                var7 = 0;
                var8 = var1[var7];
                var2 = 1;
                var1 = var1[var2];
                _closure2_slot2 = var1;
                var14 = var15.useState;
                var1 = true;
                var1 = var14.bind(var15)(var1);
                var1 = var13.bind(var11)(var1, var12);
                var7 = var1[var7];
                var1 = var1[var2];
                _closure2_slot3 = var1;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var12];
                var2 = var2.bind(var11)(var1);
                var1 = var2.getAssetImage;
                var20 = var2;
                var19 = var6;
                var18 = var8;
                var17 = var10;
                var16 = var9;
                var2 = var20[var1](var19, var18, var17, var16, var15);
                var1 = 'loading';
                if (var7) {
                    _fun64652_ip = 214;
                    continue _fun64652
                }
            case 194:
                var7 = var5 != var2;
                var5 = 'not-found';
                if (!var7) {
                    _fun64652_ip = 211;
                    continue _fun64652
                }
            case 207:
                var5 = 'fetched';
            case 211:
                var1 = var5;
            case 214:
                var5 = _closure1_slot3;
                var3 = var5.useRef;
                var3 = var3.bind(var5)(var4);
                _closure2_slot4 = var3;
                var4 = var5.useEffect;
                var3 = function() { // Environment: var0
                    var1 = _closure2_slot4;
                    var0 = _closure2_slot1;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var3 = var4.bind(var5)(var3);
                var4 = var5.useEffect;
                var3 = new Array(1);
                var3[0] = var6;
                var0 = function() { // Environment: var0
                    _fun64654: for (var _fun64654_ip = 0;;) switch (_fun64654_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var2 = var2.current;
                            var _closure3_slot0 = var2;
                            var3 = _closure2_slot0;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun64654_ip = 83;
                                continue _fun64654
                            }
                        case 28:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var2 = 2;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.getAssets;
                            var1 = _closure2_slot0;
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.then;
                            var0 = function(arg0) { // Environment: var0
                                _fun64655: for (var _fun64655_ip = 0;;) switch (_fun64655_ip) {
                                    case 0:
                                        var3 = _closure2_slot3;
                                        var2 = undefined;
                                        var0 = false;
                                        var0 = var3.bind(var2)(var0);
                                        var0 = global;
                                        var4 = var0.Object;
                                        var3 = var4.entries;
                                        var0 = arg0;
                                        var12 = var3.bind(var4)(var0);
                                        var0 = var12.length;
                                        var11 = 0;
                                        var0 = var11 < var0;
                                        var9 = '';
                                        var7 = 2;
                                        var6 = 1;
                                        var5 = null;
                                        var4 = 0;
                                        if (!var0) {
                                            _fun64655_ip = 141;
                                            continue _fun64655
                                        }
                                    case 72:
                                        var3 = var12[var4];
                                        var0 = _closure1_slot2;
                                        var0 = var0.bind(var2)(var3, var7);
                                        var3 = var0[var11];
                                        var0 = var0[var6];
                                        if (!(var5 != var0)) {
                                            _fun64655_ip = 129;
                                            continue _fun64655
                                        }
                                    case 98:
                                        var3 = var0.id;
                                        if (!(var9 !== var3)) {
                                            _fun64655_ip = 129;
                                            continue _fun64655
                                        }
                                    case 107:
                                        var14 = _closure3_slot0;
                                        var13 = var14.includes;
                                        var3 = var0.name;
                                        var3 = var13.bind(var14)(var3);
                                        if (var3) {
                                            _fun64655_ip = 143;
                                            continue _fun64655
                                        }
                                    case 129:
                                        var4 = var4 + 1;
                                        var3 = var12.length;
                                        if (var4 < var3) {
                                            _fun64655_ip = 72;
                                            continue _fun64655
                                        }
                                    case 141:
                                        return var2;
                                    case 143:
                                        var1 = _closure2_slot2;
                                        var0 = var0.id;
                                        var0 = var1.bind(var2)(var0);
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                        case 83:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var4.bind(var5)(var0, var3);
                var0 = {};
                var0.url = var2;
                var0.state = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 5612, 2]);