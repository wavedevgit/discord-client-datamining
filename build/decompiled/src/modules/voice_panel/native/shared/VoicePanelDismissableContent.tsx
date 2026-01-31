// modules/voice_panel/native/shared/VoicePanelDismissableContent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VoicePanelModes;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isActivityParticipant;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = function() { // Original name: VoiceControlsNuxActionSheetImporter, environment: var1
        var2 = _closure1_slot0;
        var0 = _closure1_slot2;
        var1 = 7;
        var1 = var0[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = 6;
        var1 = var0[var1];
        var0 = var0.paths;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot9 = var3;
    var3 = {};
    var7 = 'function VoicePanelDismissableContentTsx1(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get;return mode.get()===VoicePanelModes.PANEL?(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id:undefined;}';
    var3.code = var7;
    var _closure1_slot10 = var3;
    var3 = {};
    var7 = 'function VoicePanelDismissableContentTsx2(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}';
    var3.code = var7;
    var _closure1_slot11 = var3;
    var3 = var6.memo;
    var1 = function() { // Original name: VoicePanelDismissibleContent, environment: var1
        _fun110887: for (var _fun110887_ip = 0;;) switch (_fun110887_ip) {
            case 0:
                var7 = _closure1_slot4;
                var2 = var7.useContext;
                var5 = _closure1_slot1;
                var12 = _closure1_slot2;
                var1 = 8;
                var1 = var12[var1];
                var3 = undefined;
                var1 = var5.bind(var3)(var1);
                var1 = var2.bind(var7)(var1);
                var2 = var1.channelId;
                var _closure2_slot0 = var2;
                var8 = var1.focused;
                var _closure2_slot1 = var8;
                var13 = var1.mode;
                var _closure2_slot2 = var13;
                var5 = var7.useState;
                var1 = false;
                var6 = var5.bind(var7)(var1);
                var5 = _closure1_slot3;
                var1 = 2;
                var6 = var5.bind(var3)(var6, var1);
                var1 = 0;
                var1 = var6[var1];
                var5 = 1;
                var5 = var6[var5];
                var _closure2_slot3 = var5;
                var6 = var7.useCallback;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function(arg0) { // Environment: var4
                    _fun110888: for (var _fun110888_ip = 0;;) switch (_fun110888_ip) {
                        case 0:
                            var5 = arg0;
                            var0 = null;
                            var2 = var0 != var5;
                            if (!var2) {
                                _fun110888_ip = 49;
                                continue _fun110888
                            }
                        case 12:
                            var3 = _closure1_slot7;
                            var4 = _closure1_slot5;
                            var1 = var4.getParticipant;
                            var0 = _closure2_slot0;
                            var1 = var1.bind(var4)(var0, var5);
                            var0 = undefined;
                            var2 = var3.bind(var0)(var1);
                        case 49:
                            var1 = _closure2_slot3;
                            var0 = undefined;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                    }
                };
                var9 = var6.bind(var7)(var2, var5);
                var _closure2_slot4 = var9;
                var11 = _closure1_slot0;
                var10 = 9;
                var2 = var12[var10];
                var7 = var11.bind(var3)(var2);
                var6 = var7.useAnimatedReaction;
                var5 = function() { // Original name: h, environment: var4
                    _fun110889: for (var _fun110889_ip = 0;;) switch (_fun110889_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var0 = var1.get;
                            var4 = var0.bind(var1)();
                            var0 = _closure1_slot6;
                            var3 = var0.PANEL;
                            var0 = undefined;
                            if (!(var4 === var3)) {
                                _fun110889_ip = 67;
                                continue _fun110889
                            }
                        case 35:
                            var3 = _closure2_slot1;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            var3 = null;
                            var3 = var3 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun110889_ip = 64;
                                continue _fun110889
                            }
                        case 59:
                            var1 = var2.id;
                        case 64:
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                var2 = {};
                var2.mode = var13;
                var13 = _closure1_slot6;
                var2.VoicePanelModes = var13;
                var2.focused = var8;
                var5.__closure = var2;
                var2 = 11330064461661.0;
                var5.__workletHash = var2;
                var2 = _closure1_slot10;
                var5.__initData = var2;
                var2 = function(arg0, arg1) { // Original name: f, environment: var4
                    _fun110890: for (var _fun110890_ip = 0;;) switch (_fun110890_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = arg1;
                            if (!(var2 !== var0)) {
                                _fun110890_ip = 57;
                                continue _fun110890
                            }
                        case 10:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 9;
                            var0 = var1[var0];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var0);
                            var3 = var4.runOnJS;
                            var0 = _closure2_slot4;
                            var0 = var3.bind(var4)(var0);
                            var0 = var0.bind(var1)(var2);
                        case 57:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8 = {};
                var10 = var12[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.runOnJS;
                var8.runOnJS = var10;
                var8.handleFocusChange = var9;
                var2.__closure = var8;
                var8 = 15579591345007.0;
                var2.__workletHash = var8;
                var8 = _closure1_slot11;
                var2.__initData = var8;
                var2 = var6.bind(var7)(var5, var2);
                if (var1) {
                    _fun110887_ip = 302;
                    continue _fun110887
                }
            case 296:
                var5 = new Array(0);
                _fun110887_ip = 345;
                continue _fun110887;
            case 302:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 10;
                var1 = var6[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.DismissibleContent;
                var2 = var1.ACTIVITIES_MOBILE_PIP_FAB_NUX;
                var1 = new Array(1);
                var1[0] = var2;
                var5 = var1;
            case 345:
                var2 = _closure1_slot8;
                var1 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 11;
                var0 = var6[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.contentTypes = var5;
                var4 = function(arg0) { // Original name: children, environment: var4
                    _fun110891: for (var _fun110891_ip = 0;;) switch (_fun110891_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.visibleContent;
                            var6 = var0.markAsDismissed;
                            var1 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 10;
                            var0 = var3[var0];
                            var4 = undefined;
                            var0 = var1.bind(var4)(var0);
                            var0 = var0.DismissibleContent;
                            var1 = var0.ACTIVITIES_MOBILE_PIP_FAB_NUX;
                            var0 = null;
                            if (!(var2 === var1)) {
                                _fun110891_ip = 121;
                                continue _fun110891
                            }
                        case 58:
                            var3 = _closure1_slot8;
                            var2 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 12;
                            var1 = var7[var1];
                            var1 = var2.bind(var4)(var1);
                            var2 = var1.DismissibleActionSheet;
                            var1 = {};
                            var1.markAsDismissed = var6;
                            var5 = _closure1_slot9;
                            var1.importer = var5;
                            var5 = 'VoiceControlToggleNuxActionSheet';
                            var1.actionSheetKey = var5;
                            var0 = var3.bind(var4)(var2, var1);
                        case 121:
                            return var0;
                    }
                };
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/shared/VoicePanelDismissableContent.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 3907, 11771, 3482, 33, 14224, 1307, 11770, 3679, 1358, 5919, 9355, 2]);