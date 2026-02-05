// modules/voice_panel/native/controls/buttons/VoicePanelDisconnectCancelButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var9 = 0;
    var3 = var5[var9];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var8 = 1;
    var6 = var5[var8];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var7 = 2;
    var3 = var5[var7];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VoicePanelModes;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot9 = var3;
    var3 = {};
    var3.USER = var9;
    var6 = 'USER';
    var3[var9] = var6;
    var3.STREAM = var8;
    var6 = 'STREAM';
    var3[var8] = var6;
    var3.ACTIVITY = var7;
    var6 = 'ACTIVITY';
    var3[var7] = var6;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 8;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.RED_400;
    var8.backgroundColor = var11;
    var3.disconnectCancelBG = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.WHITE;
    var8.tintColor = var9;
    var3.icon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = {};
    var6 = 'function VoicePanelDisconnectCancelButtonTsx1(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get$id,_focused$get;if(mode.get()!==VoicePanelModes.PANEL){return null;}return(_focused$get$id=(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==null&&_focused$get$id!==void 0?_focused$get$id:null;}';
    var3.code = var6;
    var _closure1_slot12 = var3;
    var3 = {};
    var6 = 'function VoicePanelDisconnectCancelButtonTsx2(focusId,lastFocusId){const{runOnJS,handleFocusChange}=this.__closure;if(focusId!==lastFocusId){runOnJS(handleFocusChange)(focusId);}}';
    var3.code = var6;
    var _closure1_slot13 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/controls/buttons/VoicePanelDisconnectCancelButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun111691: for (var _fun111691_ip = 0;;) switch (_fun111691_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.props;
                var3 = undefined;
                var _closure2_slot7 = var3;
                var0 = _closure1_slot11;
                var8 = var0.bind(var3)();
                var _closure2_slot0 = var8;
                var9 = _closure1_slot4;
                var1 = var9.useContext;
                var2 = _closure1_slot1;
                var17 = _closure1_slot2;
                var0 = 9;
                var0 = var17[var0];
                var0 = var2.bind(var3)(var0);
                var1 = var1.bind(var9)(var0);
                var10 = var1.channelId;
                var _closure2_slot1 = var10;
                var0 = var1.focused;
                var _closure2_slot2 = var0;
                var13 = var1.mode;
                var _closure2_slot3 = var13;
                var2 = var9.useState;
                var1 = null;
                var7 = var2.bind(var9)(var1);
                var2 = _closure1_slot3;
                var1 = 2;
                var2 = var2.bind(var3)(var7, var1);
                var1 = 0;
                var7 = var2[var1];
                var _closure2_slot4 = var7;
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot5 = var1;
                var11 = var9.useCallback;
                var2 = function(arg0) { // Environment: var4
                    _fun111692: for (var _fun111692_ip = 0;;) switch (_fun111692_ip) {
                        case 0:
                            var5 = arg0;
                            var4 = null;
                            if (!(var4 == var5)) {
                                _fun111692_ip = 28;
                                continue _fun111692
                            }
                        case 9:
                            var1 = _closure2_slot5;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var4);
                            _fun111692_ip = 199;
                            continue _fun111692;
                        case 28:
                            var1 = _closure1_slot5;
                            var0 = var1.getCurrentEmbeddedActivity;
                            var7 = var0.bind(var1)();
                            var1 = var4 == var7;
                            var2 = undefined;
                            var0 = undefined;
                            if (var1) {
                                _fun111692_ip = 61;
                                continue _fun111692
                            }
                        case 56:
                            var0 = var7.applicationId;
                        case 61:
                            if (!(var4 != var0)) {
                                _fun111692_ip = 146;
                                continue _fun111692
                            }
                        case 65:
                            var1 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 10;
                            var0 = var6[var0];
                            var6 = var1.bind(var2)(var0);
                            var1 = var6.getEmbeddedActivityParticipantId;
                            var0 = {};
                            var8 = var7.applicationId;
                            var0.applicationId = var8;
                            var7 = var7.compositeInstanceId;
                            var0.instanceId = var7;
                            var0 = var1.bind(var6)(var0);
                            if (!(var5 === var0)) {
                                _fun111692_ip = 146;
                                continue _fun111692
                            }
                        case 122:
                            var1 = _closure2_slot5;
                            var0 = _closure1_slot10;
                            var0 = var0.ACTIVITY;
                            var0 = var1.bind(var2)(var0);
                            _fun111692_ip = 199;
                            continue _fun111692;
                        case 146:
                            var1 = _closure1_slot6;
                            var0 = var1.getActiveStreamForStreamKey;
                            var0 = var0.bind(var1)(var5);
                            var1 = _closure2_slot5;
                            if (!(var4 != var0)) {
                                _fun111692_ip = 184;
                                continue _fun111692
                            }
                        case 172:
                            var0 = _closure1_slot10;
                            var0 = var0.STREAM;
                            _fun111692_ip = 194;
                            continue _fun111692;
                        case 184:
                            var3 = _closure1_slot10;
                            var0 = var3.USER;
                        case 194:
                            var0 = var1.bind(var2)(var0);
                        case 199:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = new Array(0);
                var14 = var11.bind(var9)(var2, var1);
                var _closure2_slot6 = var14;
                var16 = _closure1_slot0;
                var15 = 11;
                var1 = var17[var15];
                var12 = var16.bind(var3)(var1);
                var11 = var12.useAnimatedReaction;
                var2 = function() {
                    _fun111693: for (var _fun111693_ip = 0;;) switch (_fun111693_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var0 = var1.get;
                            var4 = var0.bind(var1)();
                            var0 = _closure1_slot8;
                            var3 = var0.PANEL;
                            var1 = null;
                            var0 = null;
                            if (!(var4 === var3)) {
                                _fun111693_ip = 79;
                                continue _fun111693
                            }
                        case 37:
                            var3 = _closure2_slot2;
                            var2 = var3.get;
                            var3 = var2.bind(var3)();
                            var4 = var1 == var3;
                            var2 = undefined;
                            if (var4) {
                                _fun111693_ip = 64;
                                continue _fun111693
                            }
                        case 59:
                            var2 = var3.id;
                        case 64:
                            var3 = var1 != var2;
                            var1 = null;
                            if (!var3) {
                                _fun111693_ip = 76;
                                continue _fun111693
                            }
                        case 73:
                            var1 = var2;
                        case 76:
                            var0 = var1;
                        case 79:
                            return var0;
                    }
                };
                var1 = {};
                var1.mode = var13;
                var13 = _closure1_slot8;
                var1.VoicePanelModes = var13;
                var1.focused = var0;
                var2.__closure = var1;
                var1 = 1109426015268.0;
                var2.__workletHash = var1;
                var1 = _closure1_slot12;
                var2.__initData = var1;
                var1 = function arg0, arg1() {
                    _fun111694: for (var _fun111694_ip = 0;;) switch (_fun111694_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = arg1;
                            if (!(var2 !== var0)) {
                                _fun111694_ip = 57;
                                continue _fun111694
                            }
                        case 10:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 11;
                            var0 = var1[var0];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var0);
                            var3 = var4.runOnJS;
                            var0 = _closure2_slot6;
                            var0 = var3.bind(var4)(var0);
                            var0 = var0.bind(var1)(var2);
                        case 57:
                            var0 = undefined;
                            return var0;
                    }
                };
                var13 = {};
                var15 = var17[var15];
                var15 = var16.bind(var3)(var15);
                var15 = var15.runOnJS;
                var13.runOnJS = var15;
                var13.handleFocusChange = var14;
                var1.__closure = var13;
                var13 = 16719769067952.0;
                var1.__workletHash = var13;
                var13 = _closure1_slot13;
                var1.__initData = var13;
                var1 = var11.bind(var12)(var2, var1);
                var2 = var9.useCallback;
                var1 = new Array(3);
                var1[0] = var10;
                var1[1] = var7;
                var1[2] = var0;
                var0 = function() { // Environment: var4
                    _fun111695: for (var _fun111695_ip = 0;;) switch (_fun111695_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var0 = var1.get;
                            var1 = var0.bind(var1)();
                            var0 = null;
                            var5 = var0 == var1;
                            var4 = undefined;
                            var3 = undefined;
                            if (var5) {
                                _fun111695_ip = 34;
                                continue _fun111695
                            }
                        case 29:
                            var3 = var1.id;
                        case 34:
                            var6 = _closure2_slot4;
                            var5 = _closure1_slot10;
                            var5 = var5.ACTIVITY;
                            if (!(var6 === var5)) {
                                _fun111695_ip = 153;
                                continue _fun111695
                            }
                        case 55:
                            var6 = _closure1_slot5;
                            var5 = var6.getCurrentEmbeddedActivity;
                            var10 = var5.bind(var6)();
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var5 = 10;
                            var5 = var7[var5];
                            var6 = var6.bind(var4)(var5);
                            var5 = var6.activityParticipantIdToApplicationId;
                            var8 = var5.bind(var6)(var3);
                            var6 = _closure1_slot1;
                            var5 = 12;
                            var5 = var7[var5];
                            var7 = var6.bind(var4)(var5);
                            var6 = var7.leaveActivity;
                            var5 = {};
                            var11 = var0 == var10;
                            var9 = undefined;
                            if (var11) {
                                _fun111695_ip = 138;
                                continue _fun111695
                            }
                        case 133:
                            var9 = var10.location;
                        case 138:
                            var5.location = var9;
                            var5.applicationId = var8;
                            var5 = var6.bind(var7)(var5);
                            _fun111695_ip = 230;
                            continue _fun111695;
                        case 153:
                            var6 = _closure2_slot4;
                            var5 = _closure1_slot10;
                            var5 = var5.STREAM;
                            if (!(var6 !== var5)) {
                                _fun111695_ip = 232;
                                continue _fun111695
                            }
                        case 171:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var5 = 15;
                            var5 = var7[var5];
                            var6 = var6.bind(var4)(var5);
                            var5 = var6.disconnect;
                            var5 = var5.bind(var6)();
                            var6 = _closure1_slot7;
                            var5 = var6.getState;
                            var7 = var5.bind(var6)();
                            var6 = var7.closeChannel;
                            var5 = _closure2_slot1;
                            var5 = var6.bind(var7)(var5);
                        case 230:
                            return var4;
                        case 232:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var5 = 13;
                            var5 = var7[var5];
                            var6 = var6.bind(var4)(var5);
                            var5 = var6.selectParticipant;
                            var2 = _closure2_slot1;
                            var2 = var5.bind(var6)(var2, var0);
                            var0 = var0 != var3;
                            if (!var0) {
                                _fun111695_ip = 306;
                                continue _fun111695
                            }
                        case 275:
                            var2 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 14;
                            var1 = var5[var1];
                            var2 = var2.bind(var4)(var1);
                            var1 = var2.stopStream;
                            var0 = var1.bind(var2)(var3);
                        case 306:
                            var0 = undefined;
                            return var0;
                    }
                };
                var10 = var2.bind(var9)(var0, var1);
                var0 = _closure1_slot10;
                var0 = var0.ACTIVITY;
                if (!(var7 !== var0)) {
                    _fun111691_ip = 435;
                    continue _fun111691
                }
            case 365:
                var0 = _closure1_slot10;
                var0 = var0.STREAM;
                if (!(var7 !== var0)) {
                    _fun111691_ip = 407;
                    continue _fun111691
                }
            case 379:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 18;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var9 = var0.PhoneHangUpIcon;
                _fun111691_ip = 433;
                continue _fun111691;
            case 407:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 17;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var9 = var0.ScreenXIcon;
            case 433:
                _fun111691_ip = 461;
                continue _fun111691;
            case 435:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 16;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var9 = var0.DoorExitIcon;
            case 461:
                _closure2_slot7 = var9;
                var2 = _closure1_slot9;
                var1 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = 19;
                var0 = var11[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.onPress = var10;
                var0.props = var6;
                var6 = var8.disconnectCancelBG;
                var0.style = var6;
                var6 = _closure1_slot10;
                var6 = var6.ACTIVITY;
                if (!(var7 !== var6)) {
                    _fun111691_ip = 654;
                    continue _fun111691
                }
            case 526:
                var6 = _closure1_slot10;
                var6 = var6.STREAM;
                if (!(var7 !== var6)) {
                    _fun111691_ip = 597;
                    continue _fun111691
                }
            case 540:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var6 = 20;
                var7 = var12[var6];
                var7 = var11.bind(var3)(var7);
                var10 = var7.intl;
                var7 = var10.string;
                var6 = var12[var6];
                var6 = var11.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6["6vrfgt"];
                var6 = var7.bind(var10)(var6);
                _fun111691_ip = 652;
                continue _fun111691;
            case 597:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = 20;
                var10 = var13[var7];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var7 = var13[var7];
                var7 = var12.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.q3O3J8;
                var6 = var10.bind(var11)(var7);
            case 652:
                _fun111691_ip = 709;
                continue _fun111691;
            case 654:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = 20;
                var10 = var13[var7];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var7 = var13[var7];
                var7 = var12.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7["R/FK4A"];
                var6 = var10.bind(var11)(var7);
            case 709:
                var0.accessibilityLabel = var6;
                var7 = _closure1_slot4;
                var6 = var7.useMemo;
                var5 = new Array(2);
                var5[0] = var9;
                var8 = var8.icon;
                var5[1] = var8;
                var4 = function() { // Environment: var4
                    var3 = _closure1_slot9;
                    var2 = _closure2_slot7;
                    var1 = {};
                    var0 = _closure2_slot0;
                    var0 = var0.icon;
                    var1.style = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var4 = var6.bind(var7)(var4, var5);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1371, 3714, 7899, 11837, 33, 1297, 671, 11836, 3953, 3720, 7965, 7900, 8035, 4231, 8439, 14382, 8817, 14372, 1234, 2]);