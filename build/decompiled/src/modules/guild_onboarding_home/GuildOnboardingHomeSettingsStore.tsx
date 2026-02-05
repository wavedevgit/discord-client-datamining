// modules/guild_onboarding_home/GuildOnboardingHomeSettingsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() {
        _fun39709: for (var _fun39709_ip = 0;;) switch (_fun39709_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun39709_ip = 74;
                continue _fun39709;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        _fun39712: for (var _fun39712_ip = 0;;) switch (_fun39712_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot7;
                var3 = var0[var2];
                var0 = null;
                var5 = var0 == var3;
                var4 = undefined;
                if (var5) {
                    _fun39712_ip = 31;
                    continue _fun39712
                }
            case 25:
                var4 = var3.newMemberActions;
            case 31:
                var3 = var0 == var4;
                var0 = null;
                if (var3) {
                    _fun39712_ip = 56;
                    continue _fun39712
                }
            case 40:
                var3 = _closure1_slot9;
                var3[var2] = var4;
                var1 = _closure1_slot9;
                var0 = var1[var2];
            case 56:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var8 = function arg0() {
        _fun39713: for (var _fun39713_ip = 0;;) switch (_fun39713_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.homeSettings;
                var2 = var0.guildId;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun39713_ip = 75;
                    continue _fun39713
                }
            case 20:
                if (!(var0 == var3)) {
                    _fun39713_ip = 39;
                    continue _fun39713
                }
            case 24:
                var1 = _closure1_slot7;
                var0 = _closure1_slot5;
                var1[var2] = var0;
            case 39:
                var1 = _closure1_slot7;
                var1[var2] = var3;
                var3 = _closure1_slot11;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = _closure1_slot8;
                var0 = var1.delete;
                var0 = var0.bind(var1)(var2);
            case 75:
                var0 = undefined;
                return var0;
        }
    };
    var3 = global;
    var9 = var3.Object;
    var7 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = {};
    var7 = false;
    var1.enabled = var7;
    var _closure1_slot5 = var1;
    var7 = new Array(0);
    var _closure1_slot6 = var7;
    var7 = {};
    var _closure1_slot7 = var7;
    var3 = var3.Set;
    var7 = var3.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var3
        }
    });
    var13 = var7;
    var3 = new var13[var3](var12);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot8 = var3;
    var3 = {};
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var7 = var3.Store;
    var3 = function(arg0) { // Environment: var4
        var3 = function() {
            _fun39715: for (var _fun39715_ip = 0;;) switch (_fun39715_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun39715_ip = 69;
                        continue _fun39715
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun39715_ip = 105;
                    continue _fun39715;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'getSettings';
        var4.key = var0;
        var0 = function arg0() {
            _fun39716: for (var _fun39716_ip = 0;;) switch (_fun39716_ip) {
                case 0:
                    var4 = arg0;
                    var3 = null;
                    var1 = var3 == var4;
                    var0 = null;
                    if (var1) {
                        _fun39716_ip = 36;
                        continue _fun39716
                    }
                case 14:
                    var1 = _closure1_slot7;
                    var1 = var1[var4];
                    if (!(var3 == var1)) {
                        _fun39716_ip = 33;
                        continue _fun39716
                    }
                case 29:
                    var1 = _closure1_slot5;
                case 33:
                    var0 = var1;
                case 36:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(11);
        var0[0] = var4;
        var4 = {};
        var6 = 'getNewMemberActions';
        var4.key = var6;
        var6 = function arg0() {
            _fun39717: for (var _fun39717_ip = 0;;) switch (_fun39717_ip) {
                case 0:
                    var4 = arg0;
                    var2 = this;
                    var5 = null;
                    var1 = var5 == var4;
                    var0 = null;
                    if (var1) {
                        _fun39717_ip = 91;
                        continue _fun39717
                    }
                case 17:
                    var1 = var2.getSettings;
                    var2 = var1.bind(var2)(var4);
                    var6 = var5 == var2;
                    var3 = undefined;
                    var1 = undefined;
                    if (var6) {
                        _fun39717_ip = 45;
                        continue _fun39717
                    }
                case 39:
                    var1 = var2.newMemberActions;
                case 45:
                    var1 = var5 == var1;
                    var0 = null;
                    if (var1) {
                        _fun39717_ip = 91;
                        continue _fun39717
                    }
                case 54:
                    var1 = _closure1_slot9;
                    var1 = var1[var4];
                    if (!(var5 != var1)) {
                        _fun39717_ip = 79;
                        continue _fun39717
                    }
                case 69:
                    var1 = _closure1_slot9;
                    var1 = var1[var4];
                    _fun39717_ip = 88;
                    continue _fun39717;
                case 79:
                    var2 = _closure1_slot11;
                    var1 = var2.bind(var3)(var4);
                case 88:
                    var0 = var1;
                case 91:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getActionForChannel';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun39718: for (var _fun39718_ip = 0;;) switch (_fun39718_ip) {
                case 0:
                    var3 = this;
                    var0 = arg1;
                    var _closure3_slot0 = var0;
                    var2 = var3.getSettings;
                    var0 = arg0;
                    var3 = var2.bind(var3)(var0);
                    var2 = null;
                    var4 = var2 == var3;
                    var0 = null;
                    if (var4) {
                        _fun39718_ip = 66;
                        continue _fun39718
                    }
                case 37:
                    var3 = var3.newMemberActions;
                    if (!(var2 == var3)) {
                        _fun39718_ip = 51;
                        continue _fun39718
                    }
                case 47:
                    var3 = new Array(0);
                case 51:
                    var2 = var3.find;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.channelId;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1);
                case 66:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'hasMemberAction';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var3 = this;
            var2 = var3.getActionForChannel;
            var1 = arg0;
            var0 = arg1;
            var1 = var2.bind(var3)(var1, var0);
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getResourceChannels';
        var4.key = var6;
        var6 = function arg0() {
            _fun39721: for (var _fun39721_ip = 0;;) switch (_fun39721_ip) {
                case 0:
                    var2 = _closure1_slot7;
                    var0 = arg0;
                    var3 = var2[var0];
                    var2 = null;
                    var4 = var2 == var3;
                    var0 = undefined;
                    if (var4) {
                        _fun39721_ip = 31;
                        continue _fun39721
                    }
                case 25:
                    var0 = var3.resourceChannels;
                case 31:
                    if (!(var2 == var0)) {
                        _fun39721_ip = 39;
                        continue _fun39721
                    }
                case 35:
                    var0 = _closure1_slot6;
                case 39:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getResourceForChannel';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun39722: for (var _fun39722_ip = 0;;) switch (_fun39722_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = arg1;
                    var _closure3_slot0 = var0;
                    var0 = null;
                    if (!(var0 != var4)) {
                        _fun39722_ip = 62;
                        continue _fun39722
                    }
                case 21:
                    var1 = var3.getResourceChannels;
                    var4 = var1.bind(var3)(var4);
                    var3 = _closure1_slot6;
                    var1 = null;
                    if (!(var4 !== var3)) {
                        _fun39722_ip = 60;
                        continue _fun39722
                    }
                case 45:
                    var3 = var4.find;
                    var2 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var1 = var0.channelId;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var1 = var3.bind(var4)(var2);
                case 60:
                    return var1;
                case 62:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getIsLoading';
        var4.key = var6;
        var6 = function arg0() {
            _fun39724: for (var _fun39724_ip = 0;;) switch (_fun39724_ip) {
                case 0:
                    var3 = arg0;
                    var0 = null;
                    var0 = var0 != var3;
                    if (!var0) {
                        _fun39724_ip = 29;
                        continue _fun39724
                    }
                case 12:
                    var2 = _closure1_slot8;
                    var1 = var2.has;
                    var0 = var1.bind(var2)(var3);
                case 29:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getWelcomeMessage';
        var4.key = var6;
        var6 = function arg0() {
            _fun39725: for (var _fun39725_ip = 0;;) switch (_fun39725_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun39725_ip = 13;
                        continue _fun39725
                    }
                case 9:
                    var1 = undefined;
                    return var1;
                case 13:
                    var1 = _closure1_slot7;
                    var1 = var1[var2];
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun39725_ip = 39;
                        continue _fun39725
                    }
                case 33:
                    var0 = var1.welcomeMessage;
                case 39:
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'hasSettings';
        var4.key = var6;
        var6 = function arg0() {
            _fun39726: for (var _fun39726_ip = 0;;) switch (_fun39726_ip) {
                case 0:
                    var3 = arg0;
                    var2 = null;
                    var0 = var2 != var3;
                    if (!var0) {
                        _fun39726_ip = 27;
                        continue _fun39726
                    }
                case 12:
                    var1 = _closure1_slot7;
                    var1 = var1[var3];
                    var0 = var2 != var1;
                case 27:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getEnabled';
        var4.key = var6;
        var6 = function arg0() {
            _fun39727: for (var _fun39727_ip = 0;;) switch (_fun39727_ip) {
                case 0:
                    var3 = arg0;
                    var1 = null;
                    var0 = var1 != var3;
                    if (!var0) {
                        _fun39727_ip = 50;
                        continue _fun39727
                    }
                case 12:
                    var2 = _closure1_slot7;
                    var3 = var2[var3];
                    var4 = var1 == var3;
                    var2 = undefined;
                    if (var4) {
                        _fun39727_ip = 37;
                        continue _fun39727
                    }
                case 32:
                    var2 = var3.enabled;
                case 37:
                    var1 = var1 != var2;
                    if (!var1) {
                        _fun39727_ip = 47;
                        continue _fun39727
                    }
                case 44:
                    var1 = var2;
                case 47:
                    var0 = var1;
                case 50:
                    return var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getNewMemberAction';
        var4.key = var6;
        var5 = function arg0, arg1() {
            _fun39728: for (var _fun39728_ip = 0;;) switch (_fun39728_ip) {
                case 0:
                    var4 = arg0;
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var1 = null;
                    var5 = var1 == var4;
                    var0 = null;
                    if (var5) {
                        _fun39728_ip = 97;
                        continue _fun39728
                    }
                case 23:
                    var2 = var1 == var2;
                    var0 = null;
                    if (var2) {
                        _fun39728_ip = 97;
                        continue _fun39728
                    }
                case 32:
                    var2 = _closure1_slot7;
                    var4 = var2[var4];
                    var5 = var1 == var4;
                    var2 = undefined;
                    if (var5) {
                        _fun39728_ip = 82;
                        continue _fun39728
                    }
                case 52:
                    var5 = var4.newMemberActions;
                    var4 = var1 == var5;
                    var2 = undefined;
                    if (var4) {
                        _fun39728_ip = 82;
                        continue _fun39728
                    }
                case 67:
                    var4 = var5.find;
                    var3 = function(arg0) { // Environment: var3
                        var0 = arg0;
                        var1 = var0.channelId;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var2 = var4.bind(var5)(var3);
                case 82:
                    var3 = var1 != var2;
                    var1 = null;
                    if (!var3) {
                        _fun39728_ip = 94;
                        continue _fun39728
                    }
                case 91:
                    var1 = var2;
                case 94:
                    var0 = var1;
                case 97:
                    return var0;
            }
        };
        var4.value = var5;
        var0[10] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var3.bind(var0)(var7);
    var3 = 'GuildOnboardingHomeSettingsStore';
    var7.displayName = var3;
    var3 = 6;
    var3 = var5[var3];
    var12 = var6.bind(var0)(var3);
    var3 = {};
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.guildId;
        var1 = _closure1_slot8;
        var0 = var1.add;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var3.GUILD_HOME_SETTINGS_FETCH_START = var9;
    var3.GUILD_HOME_SETTINGS_FETCH_SUCCESS = var8;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.guildId;
        var1 = _closure1_slot8;
        var0 = var1.delete;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var3.GUILD_HOME_SETTINGS_FETCH_FAIL = var9;
    var3.GUILD_HOME_SETTINGS_UPDATE_SUCCESS = var8;
    var8 = function arg0() {
        _fun39732: for (var _fun39732_ip = 0;;) switch (_fun39732_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var1 = var0.enabled;
                var0 = _closure1_slot7;
                var0 = var0[var2];
                var2 = null;
                if (!(var2 != var0)) {
                    _fun39732_ip = 40;
                    continue _fun39732
                }
            case 30:
                var0.enabled = var1;
                var0 = undefined;
                return var0;
            case 40:
                var0 = false;
                return var0;
        }
    };
    var3.GUILD_HOME_SETTINGS_TOGGLE_ENABLED = var8;
    var8 = function arg0() {
        _fun39733: for (var _fun39733_ip = 0;;) switch (_fun39733_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.guildId;
                var4 = var1.resourceChannel;
                var _closure2_slot0 = var4;
                var1 = _closure1_slot7;
                var1 = var1[var2];
                var3 = null;
                if (!(var3 != var1)) {
                    _fun39733_ip = 120;
                    continue _fun39733
                }
            case 39:
                var2 = var1.resourceChannels;
                if (!(var3 == var2)) {
                    _fun39733_ip = 53;
                    continue _fun39733
                }
            case 49:
                var2 = new Array(0);
            case 53:
                var1.resourceChannels = var2;
                var3 = var1.resourceChannels;
                var2 = var3.findIndex;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.channelId;
                    var0 = _closure2_slot0;
                    var0 = var0.channelId;
                    var0 = var1 === var0;
                    return var0;
                };
                var3 = var2.bind(var3)(var0);
                var0 = -1;
                var0 = var0 !== var3;
                if (!var0) {
                    _fun39733_ip = 118;
                    continue _fun39733
                }
            case 94:
                var2 = var1.resourceChannels;
                var1 = {};
                var6 = var1;
                var5 = var4;
                var4 = copyDataProperties(var6, var5);
                var2[var3] = var1;
                var0 = true;
            case 118:
                return var0;
            case 120:
                var0 = false;
                return var0;
        }
    };
    var3.GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS = var8;
    var8 = function arg0() {
        _fun39735: for (var _fun39735_ip = 0;;) switch (_fun39735_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.guildId;
                var4 = var1.action;
                var _closure2_slot0 = var4;
                var1 = _closure1_slot7;
                var1 = var1[var2];
                var3 = null;
                if (!(var3 != var1)) {
                    _fun39735_ip = 117;
                    continue _fun39735
                }
            case 36:
                var2 = var1.newMemberActions;
                if (!(var3 == var2)) {
                    _fun39735_ip = 50;
                    continue _fun39735
                }
            case 46:
                var2 = new Array(0);
            case 50:
                var1.newMemberActions = var2;
                var3 = var1.newMemberActions;
                var2 = var3.findIndex;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.channelId;
                    var0 = _closure2_slot0;
                    var0 = var0.channelId;
                    var0 = var1 === var0;
                    return var0;
                };
                var3 = var2.bind(var3)(var0);
                var0 = -1;
                var0 = var0 !== var3;
                if (!var0) {
                    _fun39735_ip = 115;
                    continue _fun39735
                }
            case 91:
                var2 = var1.newMemberActions;
                var1 = {};
                var6 = var1;
                var5 = var4;
                var4 = copyDataProperties(var6, var5);
                var2[var3] = var1;
                var0 = true;
            case 115:
                return var0;
            case 117:
                var0 = false;
                return var0;
        }
    };
    var3.GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS = var8;
    var4 = function arg0() {
        _fun39737: for (var _fun39737_ip = 0;;) switch (_fun39737_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guild;
                var3 = _closure1_slot7;
                var2 = var0.id;
                var3 = var3[var2];
                var2 = null;
                if (!(var2 != var3)) {
                    _fun39737_ip = 60;
                    continue _fun39737
                }
            case 30:
                var3 = _closure1_slot7;
                var2 = var0.id;
                var2 = delete var3[var2];
                var1 = _closure1_slot9;
                var0 = var0.id;
                var0 = delete var1[var0];
                var0 = undefined;
                return var0;
            case 60:
                var0 = false;
                return var0;
        }
    };
    var3.GUILD_DELETE = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var7
        }
    });
    var13 = var4;
    var11 = var3;
    var3 = new var13[var7](var12, var11, var10);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 7;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding_home/GuildOnboardingHomeSettingsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.NO_SETTINGS = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 566, 806, 2]);