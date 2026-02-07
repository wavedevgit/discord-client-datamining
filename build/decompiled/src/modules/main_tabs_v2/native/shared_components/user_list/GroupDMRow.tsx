// modules/main_tabs_v2/native/shared_components/user_list/GroupDMRow.tsx
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
    var3 = var3.UserRowModes;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/user_list/GroupDMRow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun73299: for (var _fun73299_ip = 0;;) switch (_fun73299_ip) {
            case 0:
                var7 = arg0;
                var12 = var7.channel;
                var _closure2_slot0 = var12;
                var2 = var7.mode;
                var4 = undefined;
                if (!(var2 === var4)) {
                    _fun73299_ip = 38;
                    continue _fun73299
                }
            case 25:
                var0 = _closure1_slot4;
                var2 = var0.NONE;
            case 38:
                var6 = var7.selected;
                if (!(var6 === var4)) {
                    _fun73299_ip = 50;
                    continue _fun73299
                }
            case 48:
                var6 = false;
            case 50:
                var10 = var7.disabled;
                if (!(var10 === var4)) {
                    _fun73299_ip = 61;
                    continue _fun73299
                }
            case 59:
                var10 = false;
            case 61:
                var15 = var7.onPress;
                var _closure2_slot1 = var15;
                var1 = {
                    'channel': 0,
                    'mode': 0,
                    'selected': 0,
                    'disabled': 0,
                    'onPress': 0
                };
                var3 = null;
                var19 = var1;
                var18 = null;
                var0 = silentSetPrototypeOf(var19, var18);
                var19 = {};
                var18 = var7;
                var17 = var1;
                var7 = copyDataProperties(var19, var18, var17);
                var9 = _closure1_slot1;
                var13 = _closure1_slot2;
                var0 = 3;
                var0 = var13[var0];
                var0 = var9.bind(var4)(var0);
                var0 = var0.bind(var4)(var12);
                var14 = _closure1_slot3;
                var11 = var14.useCallback;
                var8 = new Array(2);
                var8[0] = var12;
                var8[1] = var15;
                var5 = function() { // Environment: var5
                    _fun73300: for (var _fun73300_ip = 0;;) switch (_fun73300_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun73300_ip = 28;
                                continue _fun73300
                            }
                        case 13:
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 28:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8 = var11.bind(var14)(var5, var8);
                var14 = _closure1_slot5;
                var5 = 4;
                var5 = var13[var5];
                var9 = var9.bind(var4)(var5);
                var5 = {};
                var11 = _closure1_slot0;
                var15 = 5;
                var15 = var13[var15];
                var15 = var11.bind(var4)(var15);
                var15 = var15.AvatarSizes;
                var15 = var15.REFRESH_MEDIUM_32;
                var5.size = var15;
                var5.channel = var12;
                var9 = var14.bind(var4)(var9, var5);
                var5 = 6;
                var5 = var13[var5];
                var11 = var11.bind(var4)(var5);
                var5 = var11.useRecipientsLabel;
                var13 = var5.bind(var11)(var12);
                var5 = {};
                var19 = var5;
                var18 = var7;
                var7 = copyDataProperties(var19, var18);
                var7 = 'disabled';
                var5[var7] = var10;
                var7 = var3 != var13;
                var10 = undefined;
                if (!var7) {
                    _fun73299_ip = 335;
                    continue _fun73299
                }
            case 282:
                var12 = _closure1_slot5;
                var11 = _closure1_slot0;
                var14 = _closure1_slot2;
                var7 = 7;
                var7 = var14[var7];
                var7 = var11.bind(var4)(var7);
                var11 = var7.Text;
                var7 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-muted',
                    'lineClamp': 1
                };
                var7.children = var13;
                var10 = var12.bind(var4)(var11, var7);
            case 335:
                var7 = 'subLabel';
                var5[var7] = var10;
                var7 = 'icon';
                var5[var7] = var9;
                var7 = 'onPress';
                var5[var7] = var8;
                var7 = var3 != var0;
                var3 = '';
                if (!var7) {
                    _fun73299_ip = 376;
                    continue _fun73299
                }
            case 373:
                var3 = var0;
            case 376:
                var0 = 'label';
                var5[var0] = var3;
                var3 = 1;
                var0 = 'labelLineClamp';
                var5[var0] = var3;
                var0 = _closure1_slot4;
                var0 = var0.TOGGLE;
                if (!(var2 !== var0)) {
                    _fun73299_ip = 461;
                    continue _fun73299
                }
            case 411:
                var3 = _closure1_slot5;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 9;
                var0 = var7[var0];
                var0 = var2.bind(var4)(var0);
                var2 = var0.TableRow;
                var0 = {};
                var19 = var0;
                var18 = var5;
                var7 = copyDataProperties(var19, var18);
                var0 = var3.bind(var4)(var2, var0);
                _fun73299_ip = 518;
                continue _fun73299;
            case 461:
                var3 = _closure1_slot5;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 8;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.TableCheckboxRow;
                var1 = {};
                var19 = var1;
                var18 = var5;
                var5 = copyDataProperties(var19, var18);
                var5 = 'checked';
                var1[var5] = var6;
                var0 = var3.bind(var4)(var2, var1);
            case 518:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 8966, 33, 4794, 9110, 5504, 9180, 3942, 8856, 4900, 2]);