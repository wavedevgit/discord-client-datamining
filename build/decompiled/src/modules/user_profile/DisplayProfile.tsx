// modules/user_profile/DisplayProfile.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1) { // Original name: _getStringFieldDefault, environment: var1
        _fun56857: for (var _fun56857_ip = 0;;) switch (_fun56857_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
                var2 = null;
                if (!(var2 != var0)) {
                    _fun56857_ip = 20;
                    continue _fun56857
                }
            case 12:
                var2 = '';
                if (!(var2 === var0)) {
                    _fun56857_ip = 23;
                    continue _fun56857
                }
            case 20:
                var0 = var1;
            case 23:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PremiumTypes;
    var _closure1_slot5 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function(arg0, arg1) { // Original name: DisplayProfile, environment: var4
            _fun56859: for (var _fun56859_ip = 0;;) switch (_fun56859_ip) {
                case 0:
                    var3 = arg0;
                    var2 = arg1;
                    var1 = this;
                    var6 = _closure1_slot3;
                    var5 = _closure2_slot0;
                    var0 = undefined;
                    var5 = var6.bind(var0)(var1, var5);
                    var5 = var3.userId;
                    var1.userId = var5;
                    var5 = null;
                    var7 = var5 == var2;
                    var6 = undefined;
                    if (var7) {
                        _fun56859_ip = 58;
                        continue _fun56859
                    }
                case 53:
                    var6 = var2.guildId;
                case 58:
                    var1.guildId = var6;
                    var7 = var5 == var2;
                    var6 = undefined;
                    if (var7) {
                        _fun56859_ip = 79;
                        continue _fun56859
                    }
                case 73:
                    var6 = var2.banner;
                case 79:
                    if (!(var5 == var6)) {
                        _fun56859_ip = 89;
                        continue _fun56859
                    }
                case 83:
                    var6 = var3.banner;
                case 89:
                    var1.banner = var6;
                    var8 = _closure1_slot6;
                    var7 = var3.bio;
                    var9 = var5 == var2;
                    var6 = undefined;
                    if (var9) {
                        _fun56859_ip = 120;
                        continue _fun56859
                    }
                case 114:
                    var6 = var2.bio;
                case 120:
                    var6 = var8.bind(var0)(var7, var6);
                    var1.bio = var6;
                    var7 = _closure1_slot6;
                    var6 = var3.pronouns;
                    var8 = var5 == var2;
                    var4 = undefined;
                    if (var8) {
                        _fun56859_ip = 157;
                        continue _fun56859
                    }
                case 151:
                    var4 = var2.pronouns;
                case 157:
                    var4 = var7.bind(var0)(var6, var4);
                    var1.pronouns = var4;
                    var4 = var3.accentColor;
                    var1.accentColor = var4;
                    var6 = var5 == var2;
                    var4 = undefined;
                    if (var6) {
                        _fun56859_ip = 196;
                        continue _fun56859
                    }
                case 190:
                    var4 = var2.themeColors;
                case 196:
                    if (!(var5 == var4)) {
                        _fun56859_ip = 206;
                        continue _fun56859
                    }
                case 200:
                    var4 = var3.themeColors;
                case 206:
                    var1.themeColors = var4;
                    var6 = var5 == var2;
                    var4 = undefined;
                    if (var6) {
                        _fun56859_ip = 227;
                        continue _fun56859
                    }
                case 221:
                    var4 = var2.profileEffect;
                case 227:
                    if (!(var5 == var4)) {
                        _fun56859_ip = 237;
                        continue _fun56859
                    }
                case 231:
                    var4 = var3.profileEffect;
                case 237:
                    var1.profileEffect = var4;
                    var6 = var5 == var2;
                    var4 = undefined;
                    if (var6) {
                        _fun56859_ip = 258;
                        continue _fun56859
                    }
                case 252:
                    var4 = var2.popoutAnimationParticleType;
                case 258:
                    if (!(var5 == var4)) {
                        _fun56859_ip = 268;
                        continue _fun56859
                    }
                case 262:
                    var4 = var3.popoutAnimationParticleType;
                case 268:
                    var1.popoutAnimationParticleType = var4;
                    var4 = var3.fetchStartedAt;
                    var1.fetchStartedAt = var4;
                    var4 = var3.fetchEndedAt;
                    var1.fetchEndedAt = var4;
                    var1._userProfile = var3;
                    var1._guildMemberProfile = var2;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'premiumSince';
        var0.key = var1;
        var1 = function() { // Original name: get, environment: var4
            var0 = this;
            var0 = var0._userProfile;
            var0 = var0.premiumSince;
            return var0;
        };
        var0.get = var1;
        var1 = new Array(21);
        var1[0] = var0;
        var0 = {};
        var5 = 'premiumGuildSince';
        var0.key = var5;
        var5 = function() { // Original name: get, environment: var4
            var0 = this;
            var0 = var0._userProfile;
            var0 = var0.premiumGuildSince;
            return var0;
        };
        var0.get = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'premiumType';
        var0.key = var5;
        var5 = function() { // Original name: get, environment: var4
            var0 = this;
            var0 = var0._userProfile;
            var0 = var0.premiumType;
            return var0;
        };
        var0.get = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'widgets';
        var0.key = var5;
        var5 = function() { // Original name: get, environment: var4
            var0 = this;
            var0 = var0._userProfile;
            var0 = var0.widgets;
            return var0;
        };
        var0.get = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'gameWidgets';
        var0.key = var5;
        var5 = function() { // Original name: get, environment: var4
            _fun56864: for (var _fun56864_ip = 0;;) switch (_fun56864_ip) {
                case 0:
                    var0 = this;
                    var0 = var0._userProfile;
                    var3 = var0.widgets;
                    var0 = null;
                    var1 = var0 == var3;
                    var5 = undefined;
                    var0 = undefined;
                    if (var1) {
                        _fun56864_ip = 67;
                        continue _fun56864
                    }
                case 28:
                    var2 = var3.filter;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 3;
                    var1 = var6[var1];
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.isGameWidget;
                    var0 = var2.bind(var3)(var1);
                case 67:
                    return var0;
            }
        };
        var0.get = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'primaryColor';
        var0.key = var5;
        var5 = function() { // Original name: get, environment: var4
            _fun56865: for (var _fun56865_ip = 0;;) switch (_fun56865_ip) {
                case 0:
                    var1 = this;
                    var4 = var1.themeColors;
                    var2 = null;
                    var3 = var2 == var4;
                    var0 = undefined;
                    if (var3) {
                        _fun56865_ip = 26;
                        continue _fun56865
                    }
                case 20:
                    var3 = 0;
                    var0 = var4[var3];
                case 26:
                    if (!(var2 == var0)) {
                        _fun56865_ip = 36;
                        continue _fun56865
                    }
                case 30:
                    var0 = var1.accentColor;
                case 36:
                    return var0;
            }
        };
        var0.get = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'canUsePremiumProfileCustomization';
        var0.key = var5;
        var5 = function() { // Original name: get, environment: var4
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.isPremiumAtLeast;
            var1 = this;
            var1 = var1.premiumType;
            var0 = _closure1_slot5;
            var0 = var0.TIER_2;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.get = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'canEditThemes';
        var0.key = var5;
        var5 = function() { // Original name: get, environment: var4
            var0 = this;
            var0 = var0.canUsePremiumProfileCustomization;
            return var0;
        };
        var0.get = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'application';
        var0.key = var5;
        var5 = function() { // Original name: get, environment: var4
            var0 = this;
            var0 = var0._userProfile;
            var0 = var0.application;
            return var0;
        };
        var0.get = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'isLoaded';
        var0.key = var5;
        var5 = function() { // Original name: get, environment: var4
            _fun56869: for (var _fun56869_ip = 0;;) switch (_fun56869_ip) {
                case 0:
                    var2 = this;
                    var0 = var2._userProfile;
                    var3 = undefined;
                    var0 = var3 !== var0;
                    if (!var0) {
                        _fun56869_ip = 45;
                        continue _fun56869
                    }
                case 18:
                    var4 = var2.guildId;
                    var1 = null;
                    var1 = var1 == var4;
                    if (var1) {
                        _fun56869_ip = 42;
                        continue _fun56869
                    }
                case 32:
                    var2 = var2._guildMemberProfile;
                    var1 = var3 !== var2;
                case 42:
                    var0 = var1;
                case 45:
                    return var0;
            }
        };
        var0.get = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'hasThemeColors';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun56870: for (var _fun56870_ip = 0;;) switch (_fun56870_ip) {
                case 0:
                    var3 = this;
                    var5 = var3.themeColors;
                    var2 = null;
                    var4 = var2 == var5;
                    var0 = undefined;
                    if (var4) {
                        _fun56870_ip = 26;
                        continue _fun56870
                    }
                case 20:
                    var4 = 0;
                    var0 = var5[var4];
                case 26:
                    var0 = var2 != var0;
                    if (var0) {
                        _fun56870_ip = 59;
                        continue _fun56870
                    }
                case 33:
                    var4 = var3.themeColors;
                    var3 = var2 == var4;
                    var1 = undefined;
                    if (var3) {
                        _fun56870_ip = 55;
                        continue _fun56870
                    }
                case 48:
                    var3 = 1;
                    var1 = var4[var3];
                case 55:
                    var0 = var2 != var1;
                case 59:
                    return var0;
            }
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'hasPremiumCustomization';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun56871: for (var _fun56871_ip = 0;;) switch (_fun56871_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isUsingGuildMemberBanner;
                    var0 = var0.bind(var1)();
                    if (var0) {
                        _fun56871_ip = 26;
                        continue _fun56871
                    }
                case 16:
                    var2 = var1.isUsingGuildMemberBio;
                    var0 = var2.bind(var1)();
                case 26:
                    if (var0) {
                        _fun56871_ip = 41;
                        continue _fun56871
                    }
                case 29:
                    var3 = var1.banner;
                    var2 = null;
                    var0 = var2 != var3;
                case 41:
                    if (var0) {
                        _fun56871_ip = 54;
                        continue _fun56871
                    }
                case 44:
                    var2 = var1.hasThemeColors;
                    var0 = var2.bind(var1)();
                case 54:
                    if (var0) {
                        _fun56871_ip = 69;
                        continue _fun56871
                    }
                case 57:
                    var2 = var1.popoutAnimationParticleType;
                    var1 = null;
                    var0 = var1 != var2;
                case 69:
                    return var0;
            }
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'isUsingGuildMemberBanner';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun56872: for (var _fun56872_ip = 0;;) switch (_fun56872_ip) {
                case 0:
                    var0 = this;
                    var2 = var0._guildMemberProfile;
                    var1 = null;
                    var3 = var1 == var2;
                    var0 = undefined;
                    if (var3) {
                        _fun56872_ip = 26;
                        continue _fun56872
                    }
                case 20:
                    var0 = var2.banner;
                case 26:
                    var0 = var1 != var0;
                    return var0;
            }
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'isUsingGuildMemberBio';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun56873: for (var _fun56873_ip = 0;;) switch (_fun56873_ip) {
                case 0:
                    var1 = this;
                    var4 = var1._guildMemberProfile;
                    var3 = null;
                    var5 = var3 == var4;
                    var0 = undefined;
                    if (var5) {
                        _fun56873_ip = 26;
                        continue _fun56873
                    }
                case 20:
                    var0 = var4.bio;
                case 26:
                    var0 = var3 != var0;
                    if (!var0) {
                        _fun56873_ip = 62;
                        continue _fun56873
                    }
                case 33:
                    var1 = var1._guildMemberProfile;
                    var3 = var3 == var1;
                    var2 = undefined;
                    if (var3) {
                        _fun56873_ip = 54;
                        continue _fun56873
                    }
                case 48:
                    var2 = var1.bio;
                case 54:
                    var1 = '';
                    var0 = var1 !== var2;
                case 62:
                    return var0;
            }
        };
        var0.value = var5;
        var1[13] = var0;
        var0 = {};
        var5 = 'isUsingGuildMemberPronouns';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun56874: for (var _fun56874_ip = 0;;) switch (_fun56874_ip) {
                case 0:
                    var1 = this;
                    var4 = var1._guildMemberProfile;
                    var3 = null;
                    var5 = var3 == var4;
                    var0 = undefined;
                    if (var5) {
                        _fun56874_ip = 26;
                        continue _fun56874
                    }
                case 20:
                    var0 = var4.pronouns;
                case 26:
                    var0 = var3 != var0;
                    if (!var0) {
                        _fun56874_ip = 62;
                        continue _fun56874
                    }
                case 33:
                    var1 = var1._guildMemberProfile;
                    var3 = var3 == var1;
                    var2 = undefined;
                    if (var3) {
                        _fun56874_ip = 54;
                        continue _fun56874
                    }
                case 48:
                    var2 = var1.pronouns;
                case 54:
                    var1 = '';
                    var0 = var1 !== var2;
                case 62:
                    return var0;
            }
        };
        var0.value = var5;
        var1[14] = var0;
        var0 = {};
        var5 = 'getBannerURL';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun56875: for (var _fun56875_ip = 0;;) switch (_fun56875_ip) {
                case 0:
                    var0 = arg0;
                    var6 = this;
                    var5 = var0.canAnimate;
                    var4 = var0.size;
                    var1 = var6.guildId;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun56875_ip = 41;
                        continue _fun56875
                    }
                case 28:
                    var0 = var6.isUsingGuildMemberBanner;
                    var0 = var0.bind(var6)();
                    if (var0) {
                        _fun56875_ip = 110;
                        continue _fun56875
                    }
                case 41:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getUserBannerURL;
                    var0 = {};
                    var3 = var6.userId;
                    var0.id = var3;
                    var3 = var6.banner;
                    var0.banner = var3;
                    var0.canAnimate = var5;
                    var0.size = var4;
                    var0 = var1.bind(var2)(var0);
                    _fun56875_ip = 186;
                    continue _fun56875;
                case 110:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getGuildMemberBannerURL;
                    var1 = {};
                    var7 = var6.userId;
                    var1.id = var7;
                    var7 = var6.guildId;
                    var1.guildId = var7;
                    var6 = var6.banner;
                    var1.banner = var6;
                    var1.canAnimate = var5;
                    var1.size = var4;
                    var0 = var2.bind(var3)(var1);
                case 186:
                    return var0;
            }
        };
        var0.value = var5;
        var1[15] = var0;
        var0 = {};
        var5 = 'getPreviewBanner';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun56876: for (var _fun56876_ip = 0;;) switch (_fun56876_ip) {
                case 0:
                    var1 = arg0;
                    var7 = arg1;
                    var6 = arguments[2];
                    var8 = this;
                    var5 = undefined;
                    if (!(var6 === var5)) {
                        _fun56876_ip = 24;
                        continue _fun56876
                    }
                case 18:
                    var6 = 480;
                case 24:
                    var2 = null;
                    var0 = var1;
                    if (!(var2 == var0)) {
                        _fun56876_ip = 153;
                        continue _fun56876
                    }
                case 33:
                    if (!(var2 !== var1)) {
                        _fun56876_ip = 61;
                        continue _fun56876
                    }
                case 37:
                    var3 = var8.getBannerURL;
                    var1 = {};
                    var1.canAnimate = var7;
                    var1.size = var6;
                    var1 = var3.bind(var8)(var1);
                    _fun56876_ip = 150;
                    continue _fun56876;
                case 61:
                    var3 = var8.isUsingGuildMemberBanner;
                    var3 = var3.bind(var8)();
                    var2 = null;
                    if (!var3) {
                        _fun56876_ip = 147;
                        continue _fun56876
                    }
                case 76:
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 5;
                    var3 = var9[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.getUserBannerURL;
                    var3 = {};
                    var9 = var8.userId;
                    var3.id = var9;
                    var8 = var8._userProfile;
                    var8 = var8.banner;
                    var3.banner = var8;
                    var3.canAnimate = var7;
                    var3.size = var6;
                    var2 = var4.bind(var5)(var3);
                case 147:
                    var1 = var2;
                case 150:
                    var0 = var1;
                case 153:
                    return var0;
            }
        };
        var0.value = var5;
        var1[16] = var0;
        var0 = {};
        var5 = 'getPreviewBio';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun56877: for (var _fun56877_ip = 0;;) switch (_fun56877_ip) {
                case 0:
                    var3 = this;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 6;
                    var0 = var2[var0];
                    var4 = undefined;
                    var2 = var1.bind(var4)(var0);
                    var1 = var2.getProfilePreviewValue;
                    var0 = {};
                    var5 = arg0;
                    var0.pendingValue = var5;
                    var5 = var3._userProfile;
                    var5 = var5.bio;
                    var0.userValue = var5;
                    var5 = var3._guildMemberProfile;
                    var6 = null;
                    var6 = var6 == var5;
                    if (var6) {
                        _fun56877_ip = 82;
                        continue _fun56877
                    }
                case 76:
                    var4 = var5.bio;
                case 82:
                    var0.guildValue = var4;
                    var3 = var3.guildId;
                    var0.guildId = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[17] = var0;
        var0 = {};
        var5 = 'getPreviewThemeColors';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun56878: for (var _fun56878_ip = 0;;) switch (_fun56878_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var5 = null;
                    var4 = var5 == var3;
                    var1 = undefined;
                    var0 = undefined;
                    if (var4) {
                        _fun56878_ip = 25;
                        continue _fun56878
                    }
                case 19:
                    var4 = 0;
                    var0 = var3[var4];
                case 25:
                    if (!(var5 != var0)) {
                        _fun56878_ip = 52;
                        continue _fun56878
                    }
                case 29:
                    var0 = var5 == var3;
                    var4 = undefined;
                    if (var0) {
                        _fun56878_ip = 45;
                        continue _fun56878
                    }
                case 38:
                    var0 = 1;
                    var4 = var3[var0];
                case 45:
                    var0 = var3;
                    if (!(var5 == var4)) {
                        _fun56878_ip = 79;
                        continue _fun56878
                    }
                case 52:
                    if (!(var1 === var3)) {
                        _fun56878_ip = 64;
                        continue _fun56878
                    }
                case 56:
                    var1 = var2.themeColors;
                    _fun56878_ip = 76;
                    continue _fun56878;
                case 64:
                    var2 = var2._userProfile;
                    var1 = var2.themeColors;
                case 76:
                    var0 = var1;
                case 79:
                    return var0;
            }
        };
        var0.value = var5;
        var1[18] = var0;
        var0 = {};
        var5 = 'getBadges';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun56879: for (var _fun56879_ip = 0;;) switch (_fun56879_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._userProfile;
                    var4 = var0.badges;
                    var3 = null;
                    if (!(var3 == var4)) {
                        _fun56879_ip = 25;
                        continue _fun56879
                    }
                case 21:
                    var4 = new Array(0);
                case 25:
                    var0 = new Array(0);
                    var6 = 0;
                    var8 = var0;
                    var7 = var4;
                    var2 = arraySpread(var8, var7, var6);
                    var4 = var1._guildMemberProfile;
                    var5 = var3 == var4;
                    var1 = undefined;
                    if (var5) {
                        _fun56879_ip = 62;
                        continue _fun56879
                    }
                case 56:
                    var1 = var4.badges;
                case 62:
                    if (!(var3 == var1)) {
                        _fun56879_ip = 70;
                        continue _fun56879
                    }
                case 66:
                    var1 = new Array(0);
                case 70:
                    var8 = var0;
                    var7 = var1;
                    var6 = var2;
                    var1 = arraySpread(var8, var7, var6);
                    return var0;
            }
        };
        var0.value = var5;
        var1[19] = var0;
        var0 = {};
        var5 = 'getLegacyUsername';
        var0.key = var5;
        var4 = function() { // Original name: value, environment: var4
            var0 = this;
            var0 = var0._userProfile;
            var0 = var0.legacyUsername;
            return var0;
        };
        var0.value = var4;
        var1[20] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/DisplayProfile.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 1615, 4618, 3068, 1417, 5542, 2]);