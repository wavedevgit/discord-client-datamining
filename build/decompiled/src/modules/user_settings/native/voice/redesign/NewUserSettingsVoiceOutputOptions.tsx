// modules/user_settings/native/voice/redesign/NewUserSettingsVoiceOutputOptions.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var9 = 4;
    var3 = var5[var9];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MediaEngineContextTypes;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.marginTop = var9;
    var3.slider = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/voice/redesign/NewUserSettingsVoiceOutputOptions.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: NewUserSettingsVoiceOutputOptions, environment: var1
        _fun67975: for (var _fun67975_ip = 0;;) switch (_fun67975_ip) {
            case 0:
                var0 = _closure1_slot11;
                var3 = undefined;
                var16 = var0.bind(var3)();
                var18 = _closure1_slot0;
                var17 = _closure1_slot2;
                var1 = 8;
                var0 = var17[var1];
                var6 = var18.bind(var3)(var0);
                var5 = var6.useStateFromStores;
                var0 = _closure1_slot7;
                var4 = new Array(1);
                var4[0] = var0;
                var2 = function() { // Environment: var19
                    var1 = _closure1_slot7;
                    var0 = var1.getOutputVolume;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var20 = var5.bind(var6)(var4, var2);
                var2 = var17[var1];
                var6 = var18.bind(var3)(var2);
                var5 = var6.useStateFromStores;
                var2 = _closure1_slot5;
                var4 = new Array(2);
                var4[0] = var2;
                var2 = _closure1_slot6;
                var4[1] = var2;
                var2 = function() { // Environment: var19
                    _fun67977: for (var _fun67977_ip = 0;;) switch (_fun67977_ip) {
                        case 0:
                            var1 = _closure1_slot5;
                            var0 = var1.getLastActiveStream;
                            var1 = var0.bind(var1)();
                            var4 = null;
                            var3 = var4 != var1;
                            var0 = null;
                            if (!var3) {
                                _fun67977_ip = 57;
                                continue _fun67977
                            }
                        case 28:
                            var3 = var1.ownerId;
                            var5 = _closure1_slot6;
                            var2 = var5.getId;
                            var2 = var2.bind(var5)();
                            var0 = null;
                            if (!(var3 !== var2)) {
                                _fun67977_ip = 57;
                                continue _fun67977
                            }
                        case 54:
                            var0 = var1;
                        case 57:
                            return var0;
                    }
                };
                var7 = var5.bind(var6)(var4, var2);
                var _closure2_slot0 = var7;
                var1 = var17[var1];
                var4 = var18.bind(var3)(var1);
                var2 = var4.useStateFromStores;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var19
                    _fun67978: for (var _fun67978_ip = 0;;) switch (_fun67978_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            var1 = var0 != var1;
                            var0 = 0;
                            if (!var1) {
                                _fun67978_ip = 57;
                                continue _fun67978
                            }
                        case 18:
                            var4 = _closure1_slot7;
                            var3 = var4.getLocalVolume;
                            var2 = _closure2_slot0;
                            var2 = var2.ownerId;
                            var1 = _closure1_slot8;
                            var1 = var1.STREAM;
                            var0 = var3.bind(var4)(var2, var1);
                        case 57:
                            return var0;
                    }
                };
                var14 = var2.bind(var4)(var1, var0);
                var4 = _closure1_slot3;
                var2 = var4.useCallback;
                var1 = new Array(1);
                var1[0] = var7;
                var0 = function(arg0) { // Environment: var19
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var0 = 9;
                    var2 = var5[var0];
                    var0 = undefined;
                    var7 = var4.bind(var0)(var2);
                    var2 = _closure2_slot0;
                    var3 = null;
                    var6 = var3 != var2;
                    var3 = 'Can not set stream volume without active stream';
                    var3 = var7.bind(var0)(var6, var3);
                    var3 = 10;
                    var3 = var5[var3];
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.setLocalVolume;
                    var3 = var2.ownerId;
                    var1 = _closure1_slot8;
                    var2 = var1.STREAM;
                    var1 = arg0;
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var0;
                };
                var13 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot10;
                var0 = 11;
                var0 = var17[var0];
                var0 = var18.bind(var3)(var0);
                var1 = var0.NewUserSettingsTableRowGroup;
                var0 = {};
                var9 = 12;
                var4 = var17[var9];
                var4 = var18.bind(var3)(var4);
                var6 = var4.intl;
                var5 = var6.string;
                var4 = var17[var9];
                var4 = var18.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4.UXxPGB;
                var4 = var5.bind(var6)(var4);
                var0.title = var4;
                var8 = _closure1_slot9;
                var6 = 13;
                var4 = var17[var6];
                var4 = var18.bind(var3)(var4);
                var5 = var4.TableRow;
                var4 = {};
                var10 = var17[var9];
                var10 = var18.bind(var3)(var10);
                var15 = var10.intl;
                var11 = var15.string;
                var10 = var17[var9];
                var10 = var18.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.xPHVBs;
                var10 = var11.bind(var15)(var10);
                var4.label = var10;
                var11 = _closure1_slot4;
                var10 = {};
                var15 = var16.slider;
                var10.style = var15;
                var18 = _closure1_slot1;
                var15 = 14;
                var17 = var17[var15];
                var18 = var18.bind(var3)(var17);
                var17 = {};
                var21 = var16.slider;
                var17.style = var21;
                var17.value = var20;
                var19 = function(arg0) { // Original name: onValueChange, environment: var19
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.setOutputVolume;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var17.onValueChange = var19;
                var17 = var8.bind(var3)(var18, var17);
                var10.children = var17;
                var10 = var8.bind(var3)(var11, var10);
                var4.subLabel = var10;
                var5 = var8.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = null;
                var5 = var5 != var7;
                if (!var5) {
                    _fun67975_ip = 579;
                    continue _fun67975
                }
            case 435:
                var8 = _closure1_slot9;
                var18 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = var11[var6];
                var6 = var18.bind(var3)(var6);
                var7 = var6.TableRow;
                var6 = {};
                var10 = var11[var9];
                var10 = var18.bind(var3)(var10);
                var17 = var10.intl;
                var10 = var17.string;
                var9 = var11[var9];
                var9 = var18.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.pEAl4b;
                var9 = var10.bind(var17)(var9);
                var6.label = var9;
                var10 = _closure1_slot4;
                var9 = {};
                var16 = var16.slider;
                var9.style = var16;
                var12 = _closure1_slot1;
                var11 = var11[var15];
                var12 = var12.bind(var3)(var11);
                var11 = {};
                var11.value = var14;
                var11.onValueChange = var13;
                var11 = var8.bind(var3)(var12, var11);
                var9.children = var11;
                var9 = var8.bind(var3)(var10, var9);
                var6.subLabel = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 579:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3673, 1216, 3435, 3469, 33, 1297, 566, 44, 8169, 8426, 1234, 4861, 8432, 2]);