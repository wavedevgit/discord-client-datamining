// modules/guild_tag/native/useGuildTagCoachmark.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1, arg2() {
        var0 = arg1;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot9;
        var0 = undefined;
        var3 = var3.bind(var0)();
        var _closure2_slot1 = var3;
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 8;
        var2 = var4[var2];
        var4 = var3.bind(var0)(var2);
        var3 = var4.useCoachmark;
        var2 = {};
        var1 = function() {
            _fun104476: for (var _fun104476_ip = 0;;) switch (_fun104476_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var10 = null;
                    var0 = var10 == var0;
                    var4 = undefined;
                    var8 = undefined;
                    if (var0) {
                        _fun104476_ip = 30;
                        continue _fun104476
                    }
                case 20:
                    var0 = _closure2_slot0;
                    var8 = var0.profile;
                case 30:
                    var1 = var10 == var8;
                    var0 = undefined;
                    if (var1) {
                        _fun104476_ip = 44;
                        continue _fun104476
                    }
                case 39:
                    var0 = var8.tag;
                case 44:
                    var1 = var10 == var0;
                    var0 = null;
                    if (var1) {
                        _fun104476_ip = 320;
                        continue _fun104476
                    }
                case 56:
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 9;
                    var1 = var7[var1];
                    var1 = var2.bind(var4)(var1);
                    var2 = var1.BaseGuildTagChiplet;
                    var1 = {};
                    var7 = _closure2_slot0;
                    var7 = var10 == var7;
                    var9 = undefined;
                    if (var7) {
                        _fun104476_ip = 128;
                        continue _fun104476
                    }
                case 104:
                    var7 = _closure2_slot0;
                    var7 = var7.profile;
                    var11 = var10 == var7;
                    var9 = undefined;
                    if (var11) {
                        _fun104476_ip = 128;
                        continue _fun104476
                    }
                case 123:
                    var9 = var7.tag;
                case 128:
                    var11 = var10 != var9;
                    var7 = undefined;
                    if (!var11) {
                        _fun104476_ip = 140;
                        continue _fun104476
                    }
                case 137:
                    var7 = var9;
                case 140:
                    var1.guildTag = var7;
                    var7 = _closure2_slot0;
                    var9 = var10 == var7;
                    var7 = undefined;
                    if (var9) {
                        _fun104476_ip = 167;
                        continue _fun104476
                    }
                case 158:
                    var9 = _closure2_slot0;
                    var7 = var9.id;
                case 167:
                    var9 = var10 != var7;
                    var7 = undefined;
                    if (!var9) {
                        _fun104476_ip = 258;
                        continue _fun104476
                    }
                case 176:
                    var11 = var10 == var8;
                    var9 = undefined;
                    if (var11) {
                        _fun104476_ip = 191;
                        continue _fun104476
                    }
                case 185:
                    var9 = var8.badge;
                case 191:
                    var9 = var10 != var9;
                    var7 = undefined;
                    if (!var9) {
                        _fun104476_ip = 258;
                        continue _fun104476
                    }
                case 200:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 10;
                    var9 = var11[var9];
                    var12 = var10.bind(var4)(var9);
                    var11 = var12.getGuildTagBadgeUrl;
                    var9 = _closure2_slot0;
                    var10 = var9.id;
                    var9 = var8.badge;
                    var8 = _closure1_slot6;
                    var8 = var8.SIZE_36;
                    var7 = var11.bind(var12)(var10, var9, var8);
                case 258:
                    var1.guildBadge = var7;
                    var6 = _closure2_slot1;
                    var7 = var6.tagContainer;
                    var1.containerStyles = var7;
                    var6 = var6.tag;
                    var1.textStyle = var6;
                    var6 = 'heading-xxl/semibold';
                    var1.textVariant = var6;
                    var5 = _closure1_slot6;
                    var5 = var5.SIZE_36;
                    var1.badgeSize = var5;
                    var0 = var3.bind(var4)(var2, var1);
                case 320:
                    return var0;
            }
        };
        var2.renderImgComponent = var1;
        var1 = 'top';
        var2.position = var1;
        var5 = arg2;
        var6 = var2;
        var1 = copyDataProperties(var6, var5);
        var1 = arg0;
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var _closure1_slot10 = var0;
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
    var7 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildTagBadgeSize;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 16;
    var8.marginTop = var9;
    var3.tagContainer = var8;
    var8 = {};
    var9 = 40;
    var8.lineHeight = var9;
    var3.tag = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_tag/native/useGuildTagCoachmark.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        _fun104477: for (var _fun104477_ip = 0;;) switch (_fun104477_ip) {
            case 0:
                var9 = arg1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 11;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.useIsMobileQuestDockVisible;
                var10 = var2.bind(var3)();
                var11 = null;
                var2 = var11 == var9;
                var3 = undefined;
                if (var2) {
                    _fun104477_ip = 72;
                    continue _fun104477
                }
            case 51:
                var2 = var9.primaryGuild;
                var4 = var11 == var2;
                var3 = undefined;
                if (var4) {
                    _fun104477_ip = 72;
                    continue _fun104477
                }
            case 66:
                var3 = var2.identityGuildId;
            case 72:
                var4 = var11 != var3;
                var2 = null;
                if (!var4) {
                    _fun104477_ip = 84;
                    continue _fun104477
                }
            case 81:
                var2 = var3;
            case 84:
                var _closure2_slot1 = var2;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 12;
                var3 = var6[var3];
                var12 = var7.bind(var0)(var3);
                var8 = var12.useStateFromStores;
                var3 = _closure1_slot5;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var1
                    var2 = _closure1_slot5;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var8.bind(var12)(var4, var2, var3);
                var _closure2_slot2 = var4;
                var2 = 13;
                var2 = var6[var2];
                var8 = var7.bind(var0)(var2);
                var3 = var8.useGuildTagUpdatedDismissibleContent;
                var2 = {};
                var10 = !var10;
                var2.shouldShow = var10;
                var8 = var3.bind(var8)(var9, var2);
                var3 = _closure1_slot4;
                var2 = 2;
                var3 = var3.bind(var0)(var8, var2);
                var2 = 0;
                var9 = var3[var2];
                var2 = 1;
                var2 = var3[var2];
                var _closure2_slot3 = var2;
                var2 = function arg0() {
                    _fun104479: for (var _fun104479_ip = 0;;) switch (_fun104479_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var3 = null;
                            var4 = var3 == var0;
                            var0 = undefined;
                            var2 = undefined;
                            if (var4) {
                                _fun104479_ip = 44;
                                continue _fun104479
                            }
                        case 20:
                            var4 = _closure2_slot2;
                            var4 = var4.profile;
                            var5 = var3 == var4;
                            var2 = undefined;
                            if (var5) {
                                _fun104479_ip = 44;
                                continue _fun104479
                            }
                        case 39:
                            var2 = var4.tag;
                        case 44:
                            if (!(var3 != var2)) {
                                _fun104479_ip = 132;
                                continue _fun104479
                            }
                        case 48:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 14;
                            var2 = var4[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.dispatch;
                            var2 = {};
                            var5 = 'GUILD_TAG_CHANGED_COACHMARK_SEEN';
                            var2.type = var5;
                            var5 = _closure2_slot2;
                            var5 = var5.id;
                            var2.guildId = var5;
                            var5 = {};
                            var6 = _closure2_slot2;
                            var6 = var6.profile;
                            var6 = var6.tag;
                            var5.tag = var6;
                            var2.lastSeenInfo = var5;
                            var2 = var3.bind(var4)(var2);
                        case 132:
                            var2 = _closure2_slot3;
                            var1 = arg0;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var _closure2_slot4 = var2;
                var3 = _closure1_slot10;
                var2 = {};
                var8 = 15;
                var8 = var6[var8];
                var8 = var7.bind(var0)(var8);
                var8 = var8.DismissibleContent;
                var8 = var8.GUILD_TAG_UPDATED_COACHMARK;
                var8 = var9 === var8;
                var2.visible = var8;
                var10 = 16;
                var8 = var6[var10];
                var8 = var7.bind(var0)(var8);
                var9 = var8.intl;
                var8 = var9.formatToPlainString;
                var6 = var6[var10];
                var6 = var7.bind(var0)(var6);
                var6 = var6.t;
                var7 = var6["m/Tc3n"];
                var6 = {};
                var12 = var11 == var4;
                var11 = undefined;
                if (var12) {
                    _fun104477_ip = 325;
                    continue _fun104477
                }
            case 320:
                var11 = var4.name;
            case 325:
                var6.guildName = var11;
                var6 = var8.bind(var9)(var7, var6);
                var2.title = var6;
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var7 = var6[var10];
                var7 = var9.bind(var0)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var6[var10];
                var7 = var9.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.DrAXIr;
                var7 = var8.bind(var11)(var7);
                var2.description = var7;
                var7 = var6[var10];
                var7 = var9.bind(var0)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var6[var10];
                var6 = var9.bind(var0)(var6);
                var6 = var6.t;
                var6 = var6.jwEaiX;
                var6 = var7.bind(var8)(var6);
                var2.buttonLabel = var6;
                var6 = 'primary';
                var2.buttonVariant = var6;
                var6 = _closure1_slot3;
                var5 = function*() { // Environment: var1
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun104481: for (var _fun104481_ip = 0;;) switch (_fun104481_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun104481_ip = 88;
                                    continue _fun104481
                                }
                            case 7:
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 17;
                                var1 = var2[var1];
                                var2 = undefined;
                                var7 = var4.bind(var2)(var1);
                                var6 = var7.adoptGuildIdentity;
                                var5 = _closure2_slot1;
                                var1 = true;
                                var1 = var6.bind(var7)(var5, var1);
                                SaveGenerator(address = 57);
                            case 55:
                                return var1;
                            case 57:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                if (var5) {
                                    _fun104481_ip = 85;
                                    continue _fun104481
                                }
                            case 63:
                                var4 = _closure2_slot4;
                                var3 = _closure1_slot7;
                                var3 = var3.TAKE_ACTION;
                                var3 = var4.bind(var2)(var3);
                                return var2;
                            case 85:
                                return var1;
                            case 88:
                                return var0;
                        }
                    };
                    return var0;
                };
                var5 = var6.bind(var0)(var5);
                var _closure2_slot0 = var5;
                var5 = function() { // Environment: var1
                    var0 = undefined;
                    var3 = _closure2_slot0;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var2.onButtonPress = var5;
                var1 = function() {
                    var2 = _closure2_slot4;
                    var0 = _closure1_slot7;
                    var1 = var0.DISMISS;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var2.onDismiss = var1;
                var1 = arg0;
                var1 = var3.bind(var0)(var1, var4, var2);
                return var0;
        }
    };
    var2.useGuildTagUpdatedCoachmark = var3;
    var1 = function arg0, arg1() {
        _fun104484: for (var _fun104484_ip = 0;;) switch (_fun104484_ip) {
            case 0:
                var9 = arg1;
                var _closure2_slot0 = var9;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 11;
                var2 = var6[var0];
                var0 = undefined;
                var3 = var7.bind(var0)(var2);
                var2 = var3.useIsMobileQuestDockVisible;
                var10 = var2.bind(var3)();
                var2 = 12;
                var2 = var6[var2];
                var11 = var7.bind(var0)(var2);
                var8 = var11.useStateFromStores;
                var2 = _closure1_slot5;
                var4 = new Array(1);
                var4[0] = var2;
                var3 = new Array(1);
                var3[0] = var9;
                var2 = function() { // Environment: var1
                    var2 = _closure1_slot5;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var8.bind(var11)(var4, var2, var3);
                var2 = 13;
                var2 = var6[var2];
                var8 = var7.bind(var0)(var2);
                var3 = var8.useGuildTagAvailableDismissibleContent;
                var2 = {};
                var10 = !var10;
                var2.shouldShow = var10;
                var8 = var3.bind(var8)(var9, var2);
                var3 = _closure1_slot4;
                var2 = 2;
                var3 = var3.bind(var0)(var8, var2);
                var2 = 0;
                var9 = var3[var2];
                var2 = 1;
                var2 = var3[var2];
                var _closure2_slot2 = var2;
                var3 = _closure1_slot10;
                var2 = {};
                var8 = 15;
                var8 = var6[var8];
                var8 = var7.bind(var0)(var8);
                var8 = var8.DismissibleContent;
                var8 = var8.GUILD_TAG_AVAILABLE_COACHMARK_V2;
                var8 = var9 === var8;
                var2.visible = var8;
                var10 = 16;
                var8 = var6[var10];
                var8 = var7.bind(var0)(var8);
                var9 = var8.intl;
                var8 = var9.formatToPlainString;
                var6 = var6[var10];
                var6 = var7.bind(var0)(var6);
                var6 = var6.t;
                var7 = var6.VFqnyU;
                var6 = {};
                var11 = null;
                var12 = var11 == var4;
                var11 = undefined;
                if (var12) {
                    _fun104484_ip = 260;
                    continue _fun104484
                }
            case 255:
                var11 = var4.name;
            case 260:
                var6.guildName = var11;
                var6 = var8.bind(var9)(var7, var6);
                var2.title = var6;
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var7 = var6[var10];
                var7 = var9.bind(var0)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var6[var10];
                var7 = var9.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.DrAXIr;
                var7 = var8.bind(var11)(var7);
                var2.description = var7;
                var7 = var6[var10];
                var7 = var9.bind(var0)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var6[var10];
                var6 = var9.bind(var0)(var6);
                var6 = var6.t;
                var6 = var6.jwEaiX;
                var6 = var7.bind(var8)(var6);
                var2.buttonLabel = var6;
                var6 = 'primary';
                var2.buttonVariant = var6;
                var6 = _closure1_slot3;
                var5 = function*() { // Environment: var1
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun104487: for (var _fun104487_ip = 0;;) switch (_fun104487_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun104487_ip = 88;
                                    continue _fun104487
                                }
                            case 7:
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 17;
                                var1 = var2[var1];
                                var2 = undefined;
                                var7 = var4.bind(var2)(var1);
                                var6 = var7.adoptGuildIdentity;
                                var5 = _closure2_slot0;
                                var1 = true;
                                var1 = var6.bind(var7)(var5, var1);
                                SaveGenerator(address = 57);
                            case 55:
                                return var1;
                            case 57:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                if (var5) {
                                    _fun104487_ip = 85;
                                    continue _fun104487
                                }
                            case 63:
                                var4 = _closure2_slot2;
                                var3 = _closure1_slot7;
                                var3 = var3.TAKE_ACTION;
                                var3 = var4.bind(var2)(var3);
                                return var2;
                            case 85:
                                return var1;
                            case 88:
                                return var0;
                        }
                    };
                    return var0;
                };
                var5 = var6.bind(var0)(var5);
                var _closure2_slot1 = var5;
                var5 = function() { // Environment: var1
                    var0 = undefined;
                    var3 = _closure2_slot1;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var2.onButtonPress = var5;
                var1 = function() {
                    var2 = _closure2_slot2;
                    var0 = _closure1_slot7;
                    var1 = var0.DISMISS;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var2.onDismiss = var1;
                var1 = arg0;
                var1 = var3.bind(var0)(var1, var4, var2);
                return var0;
        }
    };
    var2.useGuildTagAvailableCoachmark = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 1410, 6634, 1369, 33, 1297, 7011, 7371, 6804, 5220, 566, 13612, 806, 1358, 1234, 6943, 2]);