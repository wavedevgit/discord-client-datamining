// modules/voice_panel/VoicePanelStore.tsx
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
    var3 = var5[var3];
    var6 = var4.bind(var0)(var3);
    var3 = var6.createWithEqualityFn;
    var1 = function(arg0, arg1) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var0 = {};
        var2 = global;
        var3 = var2.Set;
        var4 = var3.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var3
            }
        });
        var5 = var4;
        var3 = new var5[var3](var4);
        var3 = var3 instanceof Object ? var3 : var4;
        var0.channels = var3;
        var3 = false;
        var0.isActivityFocused = var3;
        var3 = function() {
            var1 = _closure2_slot1;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = var0.voicePanelsFullscreen;
            var1 = var0.size;
            var0 = 0;
            var0 = var1 > var0;
            return var0;
        };
        var0.isVoicePanelFullscreen = var3;
        var3 = function() {
            var1 = _closure2_slot1;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = var0.voicePanelsOpened;
            var1 = var0.size;
            var0 = 0;
            var0 = var1 > var0;
            return var0;
        };
        var0.isAnyVoicePanelOpen = var3;
        var3 = var2.Set;
        var4 = var3.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var3
            }
        });
        var5 = var4;
        var3 = new var5[var3](var4);
        var3 = var3 instanceof Object ? var3 : var4;
        var0.voicePanelsFullscreen = var3;
        var3 = var2.Set;
        var4 = var3.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var3
            }
        });
        var5 = var4;
        var3 = new var5[var3](var4);
        var3 = var3 instanceof Object ? var3 : var4;
        var0.voicePanelsOpened = var3;
        var2 = var2.Set;
        var3 = var2.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var2
            }
        });
        var5 = var3;
        var2 = new var5[var2](var4);
        var2 = var2 instanceof Object ? var2 : var3;
        var0.voicePanelsPIP = var2;
        var2 = function arg0() {
            _fun62672: for (var _fun62672_ip = 0;;) switch (_fun62672_ip) {
                case 0:
                    var6 = arg0;
                    var _closure3_slot0 = var6;
                    var3 = _closure1_slot2;
                    var0 = var3.getChannel;
                    var5 = var0.bind(var3)(var6);
                    var0 = null;
                    var3 = var0 == var5;
                    var0 = undefined;
                    var4 = undefined;
                    if (var3) {
                        _fun62672_ip = 49;
                        continue _fun62672
                    }
                case 39:
                    var3 = var5.isGuildStageVoice;
                    var4 = var3.bind(var5)();
                case 49:
                    var3 = true;
                    var3 = var3 === var4;
                    if (var3) {
                        _fun62672_ip = 85;
                        continue _fun62672
                    }
                case 58:
                    var4 = _closure2_slot1;
                    var4 = var4.bind(var0)();
                    var5 = var4.channels;
                    var4 = var5.has;
                    var3 = var4.bind(var5)(var6);
                case 85:
                    if (var3) {
                        _fun62672_ip = 124;
                        continue _fun62672
                    }
                case 88:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 2;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.batchUpdates;
                    var1 = function() { // Environment: var1
                        var2 = _closure2_slot0;
                        var0 = undefined;
                        var1 = function(arg0) { // Environment: var1
                            var2 = arg0;
                            var0 = {};
                            var11 = var0;
                            var10 = var2;
                            var1 = copyDataProperties(var11, var10);
                            var5 = global;
                            var7 = var5.Set;
                            var6 = _closure3_slot0;
                            var1 = new Array(1);
                            var1[0] = var6;
                            var8 = var5.Array;
                            var4 = var8.from;
                            var3 = var2.channels;
                            var10 = var4.bind(var8)(var3);
                            var4 = 1;
                            var11 = var1;
                            var9 = var4;
                            var3 = arraySpread(var11, var10, var9);
                            var3 = var7.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var7
                                }
                            });
                            var12 = var3;
                            var11 = var1;
                            var1 = new var12[var7](var11, var10);
                            var3 = var1 instanceof Object ? var1 : var3;
                            var1 = 'channels';
                            var0[var1] = var3;
                            var3 = var5.Set;
                            var1 = new Array(1);
                            var1[0] = var6;
                            var6 = var5.Array;
                            var5 = var6.from;
                            var2 = var2.voicePanelsOpened;
                            var10 = var5.bind(var6)(var2);
                            var11 = var1;
                            var2 = arraySpread(var11, var10, var9);
                            var2 = var3.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var12 = var2;
                            var11 = var1;
                            var1 = new var12[var3](var11, var10);
                            var2 = var1 instanceof Object ? var1 : var2;
                            var1 = 'voicePanelsOpened';
                            var0[var1] = var2;
                            return var0;
                        };
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                case 124:
                    return var0;
            }
        };
        var0.openChannel = var2;
        var2 = function arg0() {
            var0 = arg0;
            var _closure3_slot0 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 2;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                var2 = _closure2_slot0;
                var0 = undefined;
                var1 = function(arg0) { // Environment: var1
                    _fun62677: for (var _fun62677_ip = 0;;) switch (_fun62677_ip) {
                        case 0:
                            var2 = arg0;
                            var4 = var2.channels;
                            var7 = var2.voicePanelsFullscreen;
                            var8 = var2.voicePanelsOpened;
                            var1 = var4.has;
                            var0 = _closure3_slot0;
                            var0 = var1.bind(var4)(var0);
                            if (var0) {
                                _fun62677_ip = 81;
                                continue _fun62677
                            }
                        case 41:
                            var1 = var7.has;
                            var0 = _closure3_slot0;
                            var0 = var1.bind(var7)(var0);
                            if (var0) {
                                _fun62677_ip = 81;
                                continue _fun62677
                            }
                        case 58:
                            var1 = var8.has;
                            var0 = _closure3_slot0;
                            var1 = var1.bind(var8)(var0);
                            var0 = var2;
                            if (!var1) {
                                _fun62677_ip = 327;
                                continue _fun62677
                            }
                        case 81:
                            var3 = var4.has;
                            var1 = _closure3_slot0;
                            var1 = var3.bind(var4)(var1);
                            var5 = var4;
                            if (!var1) {
                                _fun62677_ip = 149;
                                continue _fun62677
                            }
                        case 101:
                            var1 = global;
                            var1 = var1.Set;
                            var3 = var1.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var11 = var3;
                            var10 = var4;
                            var1 = new var11[var1](var10, var9);
                            var1 = var1 instanceof Object ? var1 : var3;
                            var4 = var1.delete;
                            var3 = _closure3_slot0;
                            var3 = var4.bind(var1)(var3);
                            var5 = var1;
                        case 149:
                            var3 = var7.has;
                            var1 = _closure3_slot0;
                            var1 = var3.bind(var7)(var1);
                            var4 = var7;
                            if (!var1) {
                                _fun62677_ip = 217;
                                continue _fun62677
                            }
                        case 169:
                            var1 = global;
                            var1 = var1.Set;
                            var3 = var1.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var11 = var3;
                            var10 = var7;
                            var1 = new var11[var1](var10, var9);
                            var1 = var1 instanceof Object ? var1 : var3;
                            var7 = var1.delete;
                            var3 = _closure3_slot0;
                            var3 = var7.bind(var1)(var3);
                            var4 = var1;
                        case 217:
                            var3 = var8.has;
                            var1 = _closure3_slot0;
                            var1 = var3.bind(var8)(var1);
                            var3 = var8;
                            if (!var1) {
                                _fun62677_ip = 285;
                                continue _fun62677
                            }
                        case 237:
                            var1 = global;
                            var1 = var1.Set;
                            var7 = var1.prototype;
                            var7 = Object.create(var7, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var11 = var7;
                            var10 = var8;
                            var1 = new var11[var1](var10, var9);
                            var1 = var1 instanceof Object ? var1 : var7;
                            var7 = var1.delete;
                            var6 = _closure3_slot0;
                            var6 = var7.bind(var1)(var6);
                            var3 = var1;
                        case 285:
                            var1 = {};
                            var10 = var1;
                            var9 = var2;
                            var2 = copyDataProperties(var10, var9);
                            var2 = 'channels';
                            var1[var2] = var5;
                            var2 = 'voicePanelsFullscreen';
                            var1[var2] = var4;
                            var2 = 'voicePanelsOpened';
                            var1[var2] = var3;
                            var0 = var1;
                        case 327:
                            return var0;
                    }
                };
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.closeChannel = var2;
        var2 = function arg0() {
            var1 = _closure2_slot1;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var2 = var0.channels;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.isMounted = var2;
        var2 = function arg0() {
            var0 = arg0;
            var _closure3_slot0 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 2;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                var2 = _closure2_slot0;
                var0 = undefined;
                var1 = function(arg0) { // Environment: var1
                    _fun62681: for (var _fun62681_ip = 0;;) switch (_fun62681_ip) {
                        case 0:
                            var3 = arg0;
                            var4 = var3.isActivityFocused;
                            var1 = _closure3_slot0;
                            var0 = var3;
                            if (!(var4 !== var1)) {
                                _fun62681_ip = 51;
                                continue _fun62681
                            }
                        case 23:
                            var1 = {};
                            var6 = var1;
                            var5 = var3;
                            var3 = copyDataProperties(var6, var5);
                            var3 = _closure3_slot0;
                            var2 = 'isActivityFocused';
                            var1[var2] = var3;
                            var0 = var1;
                        case 51:
                            return var0;
                    }
                };
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.setIsActivityFocused = var2;
        var2 = function arg0, arg1() {
            var0 = arg0;
            var _closure3_slot0 = var0;
            var0 = arg1;
            var _closure3_slot1 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 2;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                var2 = _closure2_slot0;
                var0 = undefined;
                var1 = function(arg0) { // Environment: var1
                    _fun62684: for (var _fun62684_ip = 0;;) switch (_fun62684_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = global;
                            var3 = var1.Set;
                            var7 = var0.voicePanelsFullscreen;
                            var2 = var3.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var8 = var2;
                            var1 = new var8[var3](var7, var6);
                            var3 = var1 instanceof Object ? var1 : var2;
                            var4 = _closure3_slot1;
                            var5 = var3.has;
                            var2 = _closure3_slot0;
                            var2 = var5.bind(var3)(var2);
                            if (var4) {
                                _fun62684_ip = 82;
                                continue _fun62684
                            }
                        case 61:
                            if (var2) {
                                _fun62684_ip = 66;
                                continue _fun62684
                            }
                        case 64:
                            return var0;
                        case 66:
                            var5 = var3.delete;
                            var4 = _closure3_slot0;
                            var4 = var5.bind(var3)(var4);
                            _fun62684_ip = 99;
                            continue _fun62684;
                        case 82:
                            if (var2) {
                                _fun62684_ip = 122;
                                continue _fun62684
                            }
                        case 85:
                            var2 = var3.add;
                            var1 = _closure3_slot0;
                            var1 = var2.bind(var3)(var1);
                        case 99:
                            var1 = {};
                            var7 = var1;
                            var6 = var0;
                            var2 = copyDataProperties(var7, var6);
                            var2 = 'voicePanelsFullscreen';
                            var1[var2] = var3;
                            return var1;
                        case 122:
                            return var0;
                    }
                };
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.setChannelPanelFullscreen = var2;
        var2 = function arg0, arg1() {
            var0 = arg0;
            var _closure3_slot0 = var0;
            var0 = arg1;
            var _closure3_slot1 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 2;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                var2 = _closure2_slot0;
                var0 = undefined;
                var1 = function(arg0) { // Environment: var1
                    _fun62687: for (var _fun62687_ip = 0;;) switch (_fun62687_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = var0.channels;
                            var3 = var4.has;
                            var2 = _closure3_slot0;
                            var2 = var3.bind(var4)(var2);
                            if (var2) {
                                _fun62687_ip = 31;
                                continue _fun62687
                            }
                        case 29:
                            return var0;
                        case 31:
                            var2 = global;
                            var4 = var2.Set;
                            var7 = var0.voicePanelsOpened;
                            var3 = var4.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var8 = var3;
                            var2 = new var8[var4](var7, var6);
                            var3 = var2 instanceof Object ? var2 : var3;
                            var4 = _closure3_slot1;
                            var5 = var3.has;
                            var2 = _closure3_slot0;
                            var2 = var5.bind(var3)(var2);
                            if (var4) {
                                _fun62687_ip = 107;
                                continue _fun62687
                            }
                        case 86:
                            if (var2) {
                                _fun62687_ip = 91;
                                continue _fun62687
                            }
                        case 89:
                            return var0;
                        case 91:
                            var5 = var3.delete;
                            var4 = _closure3_slot0;
                            var4 = var5.bind(var3)(var4);
                            _fun62687_ip = 124;
                            continue _fun62687;
                        case 107:
                            if (var2) {
                                _fun62687_ip = 147;
                                continue _fun62687
                            }
                        case 110:
                            var2 = var3.add;
                            var1 = _closure3_slot0;
                            var1 = var2.bind(var3)(var1);
                        case 124:
                            var1 = {};
                            var7 = var1;
                            var6 = var0;
                            var2 = copyDataProperties(var7, var6);
                            var2 = 'voicePanelsOpened';
                            var1[var2] = var3;
                            return var1;
                        case 147:
                            return var0;
                    }
                };
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.setChannelPanelOpen = var2;
        var2 = function arg0() {
            var1 = _closure2_slot1;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var2 = var0.voicePanelsOpened;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.isChannelOpen = var2;
        var1 = function arg0, arg1() {
            var0 = arg0;
            var _closure3_slot0 = var0;
            var0 = arg1;
            var _closure3_slot1 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 2;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                var2 = _closure2_slot0;
                var0 = undefined;
                var1 = function(arg0) { // Environment: var1
                    _fun62691: for (var _fun62691_ip = 0;;) switch (_fun62691_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = global;
                            var3 = var1.Set;
                            var7 = var0.voicePanelsPIP;
                            var2 = var3.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var8 = var2;
                            var1 = new var8[var3](var7, var6);
                            var3 = var1 instanceof Object ? var1 : var2;
                            var4 = _closure3_slot1;
                            var5 = var3.has;
                            var2 = _closure3_slot0;
                            var2 = var5.bind(var3)(var2);
                            if (var4) {
                                _fun62691_ip = 82;
                                continue _fun62691
                            }
                        case 61:
                            if (var2) {
                                _fun62691_ip = 66;
                                continue _fun62691
                            }
                        case 64:
                            return var0;
                        case 66:
                            var5 = var3.delete;
                            var4 = _closure3_slot0;
                            var4 = var5.bind(var3)(var4);
                            _fun62691_ip = 99;
                            continue _fun62691;
                        case 82:
                            if (var2) {
                                _fun62691_ip = 122;
                                continue _fun62691
                            }
                        case 85:
                            var2 = var3.add;
                            var1 = _closure3_slot0;
                            var1 = var2.bind(var3)(var1);
                        case 99:
                            var1 = {};
                            var7 = var1;
                            var6 = var0;
                            var2 = copyDataProperties(var7, var6);
                            var2 = 'voicePanelsPIP';
                            var1[var2] = var3;
                            return var1;
                        case 122:
                            return var0;
                    }
                };
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.setChannelPanelPIP = var1;
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/VoicePanelStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 797, 802, 2]);