// modules/voice_panel/native/controls/useControlsButtons.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun111898: for (var _fun111898_ip = 0;;) switch (_fun111898_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun111898_ip = 45;
                    continue _fun111898
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun111898_ip = 54;
                    continue _fun111898
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun111898_ip = 344;
                    continue _fun111898
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun111898_ip = 322;
                    continue _fun111898
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun111898_ip = 282;
                    continue _fun111898
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun111898_ip = 269;
                    continue _fun111898
                }
            case 109:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun111898_ip = 162;
                    continue _fun111898
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun111898_ip = 178;
                    continue _fun111898
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun111898_ip = 248;
                    continue _fun111898
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun111898_ip = 248;
                    continue _fun111898
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun111898_ip = 233;
                    continue _fun111898
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun111898_ip = 246;
                    continue _fun111898
                }
            case 233:
                var8 = _closure1_slot12;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun111898_ip = 264;
                continue _fun111898;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun111898_ip = 282;
                continue _fun111898;
            case 269:
                var6 = _closure1_slot12;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun111898_ip = 322;
                    continue _fun111898
                }
            case 288:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 322:
                if (!var3) {
                    _fun111898_ip = 329;
                    continue _fun111898
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun111899: for (var _fun111899_ip = 0;;) switch (_fun111899_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun111899_ip = 56;
                                continue _fun111899
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun111899_ip = 67;
                            continue _fun111899;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 344:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun111900: for (var _fun111900_ip = 0;;) switch (_fun111900_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun111900_ip = 23;
                    continue _fun111900
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun111900_ip = 33;
                    continue _fun111900
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun111900_ip = 70;
                    continue _fun111900
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun111900_ip = 55;
                    continue _fun111900
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.CONTROLS_BUTTON_SIZE_LARGE;
    var _closure1_slot5 = var6;
    var3 = var3.CONTROLS_BUTTON_SIZE_NORMAL;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.InputModes;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = {};
    var6 = function(arg0, arg1) { // Original name: mic, environment: var1
        var4 = _closure1_slot8;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 5;
        var0 = var2[var0];
        var3 = undefined;
        var0 = var1.bind(var3)(var0);
        var2 = var0.MicButton;
        var1 = {};
        var6 = arg1;
        var7 = var1;
        var0 = copyDataProperties(var7, var6);
        var0 = arg0;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var3.mic = var6;
    var6 = function(arg0, arg1) { // Original name: ptt, environment: var1
        var4 = _closure1_slot8;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 5;
        var0 = var2[var0];
        var3 = undefined;
        var0 = var1.bind(var3)(var0);
        var2 = var0.PTTButton;
        var1 = {};
        var6 = arg1;
        var7 = var1;
        var0 = copyDataProperties(var7, var6);
        var0 = arg0;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var3.ptt = var6;
    var6 = function(arg0, arg1) { // Original name: micConnected, environment: var1
        var4 = _closure1_slot8;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 5;
        var0 = var2[var0];
        var3 = undefined;
        var0 = var1.bind(var3)(var0);
        var2 = var0.MicButton;
        var1 = {};
        var6 = arg1;
        var7 = var1;
        var0 = copyDataProperties(var7, var6);
        var0 = arg0;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var3.micConnected = var6;
    var6 = function(arg0, arg1) { // Original name: connect, environment: var1
        var4 = _closure1_slot8;
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 6;
        var0 = var2[var0];
        var3 = undefined;
        var2 = var1.bind(var3)(var0);
        var1 = {};
        var6 = arg1;
        var7 = var1;
        var0 = copyDataProperties(var7, var6);
        var0 = arg0;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var3.connect = var6;
    var6 = function(arg0, arg1) { // Original name: chat, environment: var1
        var4 = _closure1_slot8;
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 7;
        var0 = var2[var0];
        var3 = undefined;
        var2 = var1.bind(var3)(var0);
        var1 = {};
        var6 = arg1;
        var7 = var1;
        var0 = copyDataProperties(var7, var6);
        var0 = arg0;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var3.chat = var6;
    var6 = function(arg0, arg1) { // Original name: disconnectCancel, environment: var1
        var4 = _closure1_slot8;
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 8;
        var0 = var2[var0];
        var3 = undefined;
        var2 = var1.bind(var3)(var0);
        var1 = {};
        var6 = arg1;
        var7 = var1;
        var0 = copyDataProperties(var7, var6);
        var0 = arg0;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var3.disconnectCancel = var6;
    var6 = function(arg0, arg1) { // Original name: video, environment: var1
        var4 = _closure1_slot8;
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 9;
        var0 = var2[var0];
        var3 = undefined;
        var2 = var1.bind(var3)(var0);
        var1 = {};
        var6 = arg1;
        var7 = var1;
        var0 = copyDataProperties(var7, var6);
        var0 = arg0;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var3.video = var6;
    var6 = function(arg0, arg1) { // Original name: activities, environment: var1
        var4 = _closure1_slot8;
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 10;
        var0 = var2[var0];
        var3 = undefined;
        var2 = var1.bind(var3)(var0);
        var1 = {};
        var6 = arg1;
        var7 = var1;
        var0 = copyDataProperties(var7, var6);
        var0 = arg0;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var3.activities = var6;
    var6 = function(arg0, arg1) { // Original name: soundboard, environment: var1
        var4 = _closure1_slot8;
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 11;
        var0 = var2[var0];
        var3 = undefined;
        var2 = var1.bind(var3)(var0);
        var1 = {};
        var6 = arg1;
        var7 = var1;
        var0 = copyDataProperties(var7, var6);
        var0 = arg0;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var3.soundboard = var6;
    var _closure1_slot9 = var3;
    var3 = {};
    var6 = 'function useControlsButtonsTsx1(){const{getControlsDefaultWidth,windowDimensions,safeArea}=this.__closure;return getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right);}';
    var3.code = var6;
    var _closure1_slot10 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/controls/useControlsButtons.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: useControlsButtons, environment: var1
        var3 = _closure1_slot3;
        var2 = var3.useContext;
        var8 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 12;
        var1 = var9[var1];
        var5 = undefined;
        var1 = var8.bind(var5)(var1);
        var1 = var2.bind(var3)(var1);
        var2 = var1.channelId;
        var14 = var1.windowDimensions;
        var _closure2_slot0 = var14;
        var13 = var1.safeArea;
        var _closure2_slot1 = var13;
        var1 = 13;
        var1 = var9[var1];
        var1 = var8.bind(var5)(var1);
        var7 = var1.bind(var5)(var2);
        var _closure2_slot2 = var7;
        var16 = _closure1_slot0;
        var1 = 14;
        var1 = var9[var1];
        var4 = var16.bind(var5)(var1);
        var2 = var4.useSoundboardXP4Experiment;
        var1 = 'VoicePanelControlButtons';
        var1 = var2.bind(var4)(var1);
        var4 = var1.enabled;
        var _closure2_slot3 = var4;
        var1 = 15;
        var1 = var9[var1];
        var10 = var16.bind(var5)(var1);
        var6 = var10.useStateFromStores;
        var1 = _closure1_slot4;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            var2 = _closure1_slot4;
            var1 = var2.getMode;
            var1 = var1.bind(var2)();
            var0 = _closure1_slot7;
            var0 = var0.PUSH_TO_TALK;
            var0 = var1 === var0;
            return var0;
        };
        var6 = var6.bind(var10)(var2, var1);
        var _closure2_slot4 = var6;
        var1 = 16;
        var1 = var9[var1];
        var10 = var16.bind(var5)(var1);
        var2 = var10.useDerivedValue;
        var1 = function() { // Original name: n, environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.getControlsDefaultWidth;
            var2 = _closure2_slot0;
            var1 = var2.get;
            var1 = var1.bind(var2)();
            var2 = var1.width;
            var5 = _closure2_slot1;
            var0 = var5.get;
            var0 = var0.bind(var5)();
            var1 = var0.left;
            var0 = var5.get;
            var0 = var0.bind(var5)();
            var0 = var0.right;
            var0 = var3.bind(var4)(var2, var1, var0);
            return var0;
        };
        var12 = {};
        var15 = 17;
        var15 = var9[var15];
        var15 = var16.bind(var5)(var15);
        var15 = var15.getControlsDefaultWidth;
        var12.getControlsDefaultWidth = var15;
        var12.windowDimensions = var14;
        var12.safeArea = var13;
        var1.__closure = var12;
        var12 = 16456936876254.0;
        var1.__workletHash = var12;
        var11 = _closure1_slot10;
        var1.__initData = var11;
        var2 = var2.bind(var10)(var1);
        var1 = 18;
        var1 = var9[var1];
        var1 = var8.bind(var5)(var1);
        var5 = var1.bind(var5)(var2);
        var _closure2_slot5 = var5;
        var2 = var3.useMemo;
        var1 = new Array(4);
        var1[0] = var7;
        var1[1] = var6;
        var1[2] = var5;
        var1[3] = var4;
        var0 = function() { // Environment: var0
            _fun111913: for (var _fun111913_ip = 0;;) switch (_fun111913_ip) {
                case 0:
                    var0 = false;
                    var _closure3_slot0 = var0;
                    var0 = 0;
                    var _closure3_slot1 = var0;
                    var4 = _closure2_slot2;
                    var1 = _closure2_slot4;
                    var0 = _closure2_slot3;
                    var3 = new Array(0);
                    var6 = var3.push;
                    if (var4) {
                        _fun111913_ip = 153;
                        continue _fun111913
                    }
                case 41:
                    var4 = {
                        'type': 'icon-normal',
                        'key': 'disconnected-mute'
                    };
                    var7 = _closure1_slot9;
                    var5 = var7.mic;
                    var4.render = var5;
                    var4 = var6.bind(var3)(var4);
                    var5 = var3.push;
                    var4 = {
                        'type': 'label',
                        'key': 'disconnected-connect'
                    };
                    var8 = var7.connect;
                    var4.render = var8;
                    var4 = var5.bind(var3)(var4);
                    var5 = var3.push;
                    var4 = {
                        'type': 'icon-normal',
                        'key': 'disconnected-chat'
                    };
                    var7 = var7.chat;
                    var4.render = var7;
                    var4 = var5.bind(var3)(var4);
                    _fun111913_ip = 430;
                    continue _fun111913;
                case 153:
                    var5 = {
                        'type': 'icon-normal',
                        'key': 'connected-video'
                    };
                    var7 = _closure1_slot9;
                    var7 = var7.video;
                    var5.render = var7;
                    var5 = var6.bind(var3)(var5);
                    if (var1) {
                        _fun111913_ip = 232;
                        continue _fun111913
                    }
                case 193:
                    var6 = var3.push;
                    var5 = {
                        'type': 'icon-normal',
                        'key': 'connected-mic'
                    };
                    var7 = _closure1_slot9;
                    var7 = var7.micConnected;
                    var5.render = var7;
                    var5 = var6.bind(var3)(var5);
                case 232:
                    var6 = var3.push;
                    var5 = {
                        'type': 'icon-normal',
                        'key': 'connected-chat'
                    };
                    var7 = _closure1_slot9;
                    var7 = var7.chat;
                    var5.render = var7;
                    var5 = var6.bind(var3)(var5);
                    if (!var1) {
                        _fun111913_ip = 313;
                        continue _fun111913
                    }
                case 274:
                    var5 = var3.push;
                    var1 = {
                        'type': 'icon-large',
                        'key': 'connected-ptt'
                    };
                    var6 = _closure1_slot9;
                    var6 = var6.ptt;
                    var1.render = var6;
                    var1 = var5.bind(var3)(var1);
                case 313:
                    var1 = var3.push;
                    if (var0) {
                        _fun111913_ip = 357;
                        continue _fun111913
                    }
                case 321:
                    var0 = {
                        'type': 'icon-normal',
                        'key': 'connected-activities'
                    };
                    var5 = _closure1_slot9;
                    var5 = var5.activities;
                    var0.render = var5;
                    var0 = var1.bind(var3)(var0);
                    _fun111913_ip = 391;
                    continue _fun111913;
                case 357:
                    var0 = {
                        'type': 'icon-normal',
                        'key': 'connected-soundboard'
                    };
                    var5 = _closure1_slot9;
                    var5 = var5.soundboard;
                    var0.render = var5;
                    var0 = var1.bind(var3)(var0);
                case 391:
                    var1 = var3.push;
                    var0 = {
                        'type': 'icon-normal',
                        'key': 'connected-disconnect'
                    };
                    var4 = _closure1_slot9;
                    var4 = var4.disconnectCancel;
                    var0.render = var4;
                    var0 = var1.bind(var3)(var0);
                case 430:
                    var1 = var3.map;
                    var0 = function(arg0) { // Environment: var2
                        _fun111914: for (var _fun111914_ip = 0;;) switch (_fun111914_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = var2.type;
                                var4 = 'label';
                                if (!(var4 === var0)) {
                                    _fun111914_ip = 25;
                                    continue _fun111914
                                }
                            case 16:
                                var0 = true;
                                _closure3_slot0 = var0;
                            case 25:
                                var1 = _closure1_slot6;
                                var5 = var2.type;
                                var3 = 'icon-large';
                                if (!(var3 === var5)) {
                                    _fun111914_ip = 69;
                                    continue _fun111914
                                }
                            case 47:
                                var6 = _closure3_slot1;
                                var3 = 1;
                                var3 = var6 + var3;
                                _closure3_slot1 = var3;
                                var1 = _closure1_slot5;
                            case 69:
                                var0 = {};
                                var8 = var0;
                                var7 = var2;
                                var3 = copyDataProperties(var8, var7);
                                var3 = 'height';
                                var0[var3] = var1;
                                var3 = var2.type;
                                var2 = -1;
                                if (!(var4 !== var3)) {
                                    _fun111914_ip = 108;
                                    continue _fun111914
                                }
                            case 105:
                                var2 = var1;
                            case 108:
                                var1 = 'width';
                                var0[var1] = var2;
                                var2 = 0;
                                var1 = 'x';
                                var0[var1] = var2;
                                var1 = 'y';
                                var0[var1] = var2;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var3)(var0);
                    var1 = _closure3_slot0;
                    var11 = 16;
                    var10 = var11;
                    if (var1) {
                        _fun111913_ip = 531;
                        continue _fun111913
                    }
                case 460:
                    var4 = _closure2_slot5;
                    var5 = _closure3_slot1;
                    var3 = _closure1_slot5;
                    var3 = var5 * var3;
                    var3 = var4 - var3;
                    var4 = var0.length;
                    var2 = _closure3_slot1;
                    var2 = var4 - var2;
                    var1 = _closure1_slot6;
                    var1 = var2 * var1;
                    var4 = var0.length;
                    var2 = 1;
                    var2 = var4 - var2;
                    var3 = var3 - var1;
                    var1 = 32;
                    var1 = var3 - var1;
                    var10 = var1 / var2;
                case 531:
                    var1 = _closure1_slot11;
                    var8 = undefined;
                    var7 = var1.bind(var8)(var0);
                    var2 = var7.bind(var8)();
                    var1 = var2.done;
                    var6 = 2;
                    var5 = 1;
                    var4 = 32;
                    var3 = -1;
                    if (var1) {
                        _fun111913_ip = 690;
                        continue _fun111913
                    }
                case 572:
                    var14 = var2.value;
                    var1 = var14.width;
                    if (!(var3 === var1)) {
                        _fun111913_ip = 641;
                        continue _fun111913
                    }
                case 586:
                    var13 = var0.length;
                    var15 = var13 - var5;
                    var13 = _closure1_slot6;
                    var16 = var15 * var13;
                    var13 = var0.length;
                    var13 = var13 - var5;
                    var15 = _closure2_slot5;
                    var16 = var4 + var16;
                    var13 = var13 * var10;
                    var13 = var16 + var13;
                    var13 = var15 - var13;
                    var14.width = var13;
                    var1 = var13;
                case 641:
                    var13 = _closure2_slot5;
                    var13 = var13 / var6;
                    var15 = var1 / var6;
                    var13 = var11 - var13;
                    var13 = var13 + var15;
                    var14.x = var13;
                    var1 = var1 + var10;
                    var11 = var11 + var1;
                    var13 = var7.bind(var8)();
                    var1 = var13.done;
                    var2 = var13;
                    if (!var1) {
                        _fun111913_ip = 572;
                        continue _fun111913
                    }
                case 690:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3435, 11814, 660, 33, 14344, 14347, 14353, 14355, 14358, 14360, 14362, 11815, 14223, 14363, 566, 3677, 14334, 8149, 2]);