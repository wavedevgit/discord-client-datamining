// modules/threads/native/components/thread_creation/ThreadCreationTitleInput.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MAX_CHANNEL_NAME_LENGTH;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun105080: for (var _fun105080_ip = 0;;) switch (_fun105080_ip) {
            case 0:
                var3 = arg0;
                var4 = arg1;
                var2 = var3.chatInputRef;
                var _closure2_slot0 = var2;
                var0 = var3.threadSettingsDraft;
                var _closure2_slot1 = var0;
                var11 = var3.threadNameError;
                var _closure2_slot2 = var4;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 4;
                var8 = var7[var3];
                var3 = undefined;
                var10 = var5.bind(var3)(var8);
                var9 = var10.renderError;
                var8 = {};
                var12 = var0.name;
                var8.content = var12;
                var11 = var9.bind(var10)(var11, var8);
                var15 = _closure1_slot3;
                var9 = var15.useRef;
                var8 = var0.name;
                var13 = var9.bind(var15)(var8);
                var _closure2_slot3 = var13;
                var10 = var15.useCallback;
                var8 = var0.parentChannelId;
                var9 = new Array(1);
                var9[0] = var8;
                var8 = function(arg0) { // Environment: var1
                    _fun105081: for (var _fun105081_ip = 0;;) switch (_fun105081_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = _closure2_slot1;
                            var3 = var2.parentChannelId;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun105081_ip = 105;
                                continue _fun105081
                            }
                        case 22:
                            var7 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var2 = 5;
                            var2 = var9[var2];
                            var8 = undefined;
                            var5 = var7.bind(var8)(var2);
                            var4 = var5.changeThreadSettings;
                            var2 = _closure2_slot1;
                            var3 = var2.parentChannelId;
                            var2 = {};
                            var6 = 6;
                            var6 = var9[var6];
                            var7 = var7.bind(var8)(var6);
                            var6 = false;
                            var6 = var7.bind(var8)(var1, var6);
                            var2.name = var6;
                            var2 = var4.bind(var5)(var3, var2);
                            var0 = _closure2_slot3;
                            var0.current = var1;
                        case 105:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8 = var10.bind(var15)(var8, var9);
                var12 = var15.useCallback;
                var10 = new Array(1);
                var10[0] = var0;
                var9 = function() { // Environment: var1
                    _fun105082: for (var _fun105082_ip = 0;;) switch (_fun105082_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var1 = var1.name;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun105082_ip = 131;
                                continue _fun105082
                            }
                        case 18:
                            var1 = _closure2_slot1;
                            var1 = var1.parentChannelId;
                            if (!(var2 != var1)) {
                                _fun105082_ip = 131;
                                continue _fun105082
                            }
                        case 32:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 6;
                            var2 = var3[var2];
                            var3 = undefined;
                            var6 = var4.bind(var3)(var2);
                            var2 = _closure2_slot1;
                            var5 = var2.name;
                            var4 = true;
                            var4 = var6.bind(var3)(var5, var4);
                            var2 = var2.name;
                            if (!(var4 !== var2)) {
                                _fun105082_ip = 131;
                                continue _fun105082
                            }
                        case 83:
                            var2 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var1 = 5;
                            var1 = var5[var1];
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.changeThreadSettings;
                            var0 = _closure2_slot1;
                            var1 = var0.parentChannelId;
                            var0 = {};
                            var0.name = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 131:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9 = var12.bind(var15)(var9, var10);
                var12 = var15.useCallback;
                var10 = new Array(1);
                var10[0] = var2;
                var2 = function() { // Environment: var1
                    _fun105083: for (var _fun105083_ip = 0;;) switch (_fun105083_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var1 = var0.current;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun105083_ip = 28;
                                continue _fun105083
                            }
                        case 18:
                            var0 = var1.focus;
                            var0 = var0.bind(var1)();
                        case 28:
                            var0 = undefined;
                            return var0;
                    }
                };
                var10 = var12.bind(var15)(var2, var10);
                var14 = var15.useEffect;
                var2 = var0.name;
                var12 = new Array(2);
                var12[0] = var2;
                var12[1] = var4;
                var2 = function() { // Environment: var1
                    _fun105084: for (var _fun105084_ip = 0;;) switch (_fun105084_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var2 = var1.current;
                            var1 = _closure2_slot1;
                            var1 = var1.name;
                            var1 = var2 !== var1;
                            if (!var1) {
                                _fun105084_ip = 43;
                                continue _fun105084
                            }
                        case 28:
                            var2 = _closure2_slot1;
                            var3 = var2.name;
                            var2 = null;
                            var1 = var2 != var3;
                        case 43:
                            if (!var1) {
                                _fun105084_ip = 100;
                                continue _fun105084
                            }
                        case 46:
                            var1 = _closure2_slot2;
                            var4 = null;
                            var1 = var4 == var1;
                            var2 = undefined;
                            if (var1) {
                                _fun105084_ip = 77;
                                continue _fun105084
                            }
                        case 61:
                            var3 = _closure2_slot2;
                            var3 = var3.current;
                            var1 = var4 == var3;
                            var2 = var3;
                        case 77:
                            if (var1) {
                                _fun105084_ip = 100;
                                continue _fun105084
                            }
                        case 80:
                            var1 = var2.setText;
                            var0 = _closure2_slot1;
                            var0 = var0.name;
                            var0 = var1.bind(var2)(var0);
                        case 100:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var14.bind(var15)(var2, var12);
                var2 = 7;
                var2 = var7[var2];
                var7 = var5.bind(var3)(var2);
                var5 = var7.useStateFromStores;
                var12 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var12;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot4;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot1;
                    var0 = var0.parentChannelId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var12 = var5.bind(var7)(var2, var1);
                var1 = null;
                var1 = var1 != var12;
                var7 = '';
                var5 = var7;
                if (!var1) {
                    _fun105080_ip = 324;
                    continue _fun105080
                }
            case 286:
                var2 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 8;
                var1 = var14[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.getDefaultThreadName;
                var0 = var0.parentMessageId;
                var5 = var1.bind(var2)(var12, var0);
            case 324:
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 9;
                var0 = var15[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TextInput;
                var0 = {};
                var14 = _closure1_slot1;
                var12 = 10;
                var12 = var15[var12];
                var12 = var14.bind(var3)(var12);
                var12 = var12.bind(var3)(var13);
                var0.defaultValue = var12;
                var0.errorMessage = var11;
                var11 = true;
                var0.isClearable = var11;
                var0.autoFocus = var11;
                var11 = _closure1_slot5;
                var0.maxLength = var11;
                var0.onSubmitEditing = var10;
                var0.onBlur = var9;
                var0.onChange = var8;
                if (!(var7 === var5)) {
                    _fun105080_ip = 484;
                    continue _fun105080
                }
            case 427:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 11;
                var7 = var10[var6];
                var7 = var9.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6["Nb2/RE"];
                var5 = var7.bind(var8)(var6);
            case 484:
                var0.placeholder = var5;
                var0.ref = var4;
                var4 = 'next';
                var0.returnKeyType = var4;
                var4 = 'none';
                var0.textContentType = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var3.bind(var6)(var1);
    var1 = var6.memo;
    var1 = var1.bind(var6)(var3);
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/threads/native/components/thread_creation/ThreadCreationTitleInput.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 660, 33, 13721, 6505, 7632, 566, 7630, 5406, 4738, 1234, 2]);