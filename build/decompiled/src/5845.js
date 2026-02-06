// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var0 = ['enabled', 'layout', 'style'];
    var _closure1_slot0 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var7[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 1;
    var1 = var7[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 2;
    var5 = var7[var1];
    var1 = metroImportAll;
    var5 = var1.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var1 = 3;
    var1 = var7[var1];
    var1 = var3.bind(var0)(var1);
    var6 = var1.StyleSheet;
    var1 = var1.View;
    var _closure1_slot4 = var1;
    var1 = 4;
    var1 = var7[var1];
    var1 = var3.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot5 = var1;
    var3 = var5.forwardRef;
    var1 = function arg0, arg1() {
        _fun51509: for (var _fun51509_ip = 0;;) switch (_fun51509_ip) {
            case 0:
                var5 = arg0;
                var10 = var5.enabled;
                var6 = var5.layout;
                var _closure2_slot0 = var6;
                var8 = var5.style;
                var4 = _closure1_slot2;
                var2 = _closure1_slot0;
                var3 = undefined;
                var7 = var4.bind(var3)(var5, var2);
                var5 = _closure1_slot3;
                var4 = var5.useState;
                var2 = false;
                var2 = var4.bind(var5)(var2);
                var13 = _closure1_slot1;
                var12 = 2;
                var2 = var13.bind(var3)(var2, var12);
                var11 = 0;
                var9 = var2[var11];
                var4 = 1;
                var2 = var2[var4];
                var _closure2_slot1 = var2;
                var14 = var5.useState;
                var2 = 'auto';
                var2 = var14.bind(var5)(var2);
                var2 = var13.bind(var3)(var2, var12);
                var11 = var2[var11];
                var2 = var2[var4];
                var _closure2_slot2 = var2;
                var12 = var5.useImperativeHandle;
                var4 = arg1;
                var2 = function() { // Environment: var1
                    var0 = {};
                    var1 = _closure2_slot2;
                    var0.setPointerEvents = var1;
                    return var0;
                };
                var2 = var12.bind(var5)(var4, var2);
                var4 = var5.useEffect;
                var12 = var6.height;
                var2 = new Array(2);
                var2[0] = var12;
                var6 = var6.width;
                var2[1] = var6;
                var1 = function() { // Environment: var1
                    _fun51511: for (var _fun51511_ip = 0;;) switch (_fun51511_ip) {
                        case 0:
                            var0 = global;
                            var1 = var0.document;
                            var2 = 'undefined';
                            var1 = typeof var1;
                            if (!(var2 !== var1)) {
                                _fun51511_ip = 110;
                                continue _fun51511
                            }
                        case 19:
                            var1 = var0.document;
                            var1 = var1.body;
                            if (!var1) {
                                _fun51511_ip = 110;
                                continue _fun51511
                            }
                        case 33:
                            var1 = var0.document;
                            var1 = var1.body;
                            var4 = var1.clientWidth;
                            var0 = var0.document;
                            var0 = var0.body;
                            var3 = var0.clientHeight;
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var1 = var1.width;
                            var1 = var4 === var1;
                            if (!var1) {
                                _fun51511_ip = 103;
                                continue _fun51511
                            }
                        case 90:
                            var0 = _closure2_slot0;
                            var0 = var0.height;
                            var1 = var3 === var0;
                        case 103:
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 110:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var4.bind(var5)(var1, var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot4;
                var4 = global;
                var6 = var4.Object;
                var5 = var6.assign;
                var4 = {};
                var4.pointerEvents = var11;
                if (!var10) {
                    _fun51509_ip = 214;
                    continue _fun51509
                }
            case 211:
                if (var9) {
                    _fun51509_ip = 226;
                    continue _fun51509
                }
            case 214:
                var9 = _closure1_slot6;
                var9 = var9.card;
                _fun51509_ip = 236;
                continue _fun51509;
            case 226:
                var0 = _closure1_slot6;
                var9 = var0.page;
            case 236:
                var0 = new Array(2);
                var0[0] = var9;
                var0[1] = var8;
                var4.style = var0;
                var0 = {};
                var0 = var5.bind(var6)(var0, var7, var4);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var5)(var1);
    var5 = var6.create;
    var3 = {};
    var7 = {};
    var8 = '100%';
    var7.minHeight = var8;
    var3.page = var7;
    var7 = {
        'flex': 1,
        'overflow': 'hidden'
    };
    var3.card = var7;
    var3 = var5.bind(var6)(var3);
    var _closure1_slot6 = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 29, 31, 27, 33]);