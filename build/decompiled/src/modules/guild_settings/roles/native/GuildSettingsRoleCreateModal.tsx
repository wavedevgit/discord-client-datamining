// modules/guild_settings/roles/native/GuildSettingsRoleCreateModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function arg0, arg1, arg2, arg3() {
        var2 = _closure1_slot1;
        var7 = _closure1_slot3;
        var0 = 14;
        var1 = var7[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot18;
        var2 = var1.USER_FLOW_TRANSITION;
        var1 = {};
        var6 = _closure1_slot19;
        var6 = var6.GUILD_ROLE_CREATION_MODAL;
        var1.flow_type = var6;
        var6 = arg0;
        var1.from_step = var6;
        var6 = arg1;
        var1.to_step = var6;
        var6 = arg2;
        var1.skip = var6;
        var6 = _closure1_slot0;
        var5 = 15;
        var5 = var7[var5];
        var7 = var6.bind(var0)(var5);
        var6 = var7.collectGuildAnalyticsMetadata;
        var5 = arg3;
        var8 = var6.bind(var7)(var5);
        var9 = var1;
        var5 = copyDataProperties(var9, var8);
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot30 = var0;
    var0 = function() {
        var2 = _closure1_slot0;
        var3 = _closure1_slot3;
        var0 = 19;
        var0 = var3[var0];
        var4 = undefined;
        var6 = var2.bind(var4)(var0);
        var5 = var6.useStateFromStores;
        var0 = _closure1_slot12;
        var2 = new Array(1);
        var2[0] = var0;
        var0 = function() { // Environment: var0
            var1 = _closure1_slot12;
            var0 = var1.getProps;
            var0 = var0.bind(var1)();
            var0 = var0.guild;
            return var0;
        };
        var0 = var5.bind(var6)(var2, var0);
        var2 = _closure1_slot1;
        var1 = 20;
        var1 = var3[var1];
        var3 = var2.bind(var4)(var1);
        var1 = null;
        var2 = var1 != var0;
        var1 = 'useGuildSettingsStoreGuild: Guild cannot be null';
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot31 = var0;
    var0 = function() {
        var9 = _closure1_slot0;
        var6 = _closure1_slot3;
        var8 = 19;
        var0 = var6[var8];
        var5 = undefined;
        var4 = var9.bind(var5)(var0);
        var3 = var4.useStateFromStoresObject;
        var0 = _closure1_slot12;
        var2 = new Array(1);
        var2[0] = var0;
        var0 = function() { // Environment: var1
            var1 = _closure1_slot12;
            var0 = var1.getProps;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0);
        var2 = var0.guild;
        var _closure2_slot0 = var2;
        var0 = var0.selectedRoleId;
        var _closure2_slot1 = var0;
        var4 = _closure1_slot1;
        var3 = 20;
        var0 = var6[var3];
        var12 = var4.bind(var5)(var0);
        var0 = null;
        var11 = var0 != var2;
        var10 = 'useGuildSettingsStoreGuildWithRole: Guild cannot be null';
        var10 = var12.bind(var5)(var11, var10);
        var8 = var6[var8];
        var9 = var9.bind(var5)(var8);
        var8 = var9.useStateFromStores;
        var10 = _closure1_slot10;
        var7 = new Array(1);
        var7[0] = var10;
        var1 = function() { // Environment: var1
            _fun115870: for (var _fun115870_ip = 0;;) switch (_fun115870_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var0 = null;
                    var2 = var0 != var2;
                    var0 = undefined;
                    if (!var2) {
                        _fun115870_ip = 50;
                        continue _fun115870
                    }
                case 18:
                    var4 = _closure1_slot10;
                    var3 = var4.getRole;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = _closure2_slot1;
                    var0 = var3.bind(var4)(var2, var1);
                case 50:
                    return var0;
            }
        };
        var1 = var8.bind(var9)(var7, var1);
        var3 = var6[var3];
        var4 = var4.bind(var5)(var3);
        var3 = var0 != var1;
        var0 = 'useGuildSettingsStoreGuildWithRole: Role cannot be null';
        var0 = var4.bind(var5)(var3, var0);
        var0 = {};
        var0.guild = var2;
        var0.role = var1;
        return var0;
    };
    var _closure1_slot32 = var0;
    var0 = function() {
        _fun115871: for (var _fun115871_ip = 0;;) switch (_fun115871_ip) {
            case 0:
                var1 = _closure1_slot12;
                var0 = var1.getProps;
                var0 = var0.bind(var1)();
                var4 = var0.guild;
                var1 = _closure1_slot1;
                var7 = _closure1_slot3;
                var0 = 20;
                var0 = var7[var0];
                var3 = undefined;
                var2 = var1.bind(var3)(var0);
                var0 = null;
                var1 = var0 != var4;
                var0 = 'shouldSkipPermissions: Guild cannot be null';
                var0 = var2.bind(var3)(var1, var0);
                var1 = _closure1_slot11;
                var0 = var1.getCurrentUser;
                var5 = var0.bind(var1)();
                var0 = _closure1_slot9;
                var0 = var0.bind(var3)(var4, var5);
                var2 = _closure1_slot2;
                var1 = 21;
                var1 = var7[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.can;
                var1 = {};
                var6 = _closure1_slot20;
                var6 = var6.ADMINISTRATOR;
                var1.permission = var6;
                var1.user = var5;
                var1.context = var4;
                var1 = var2.bind(var3)(var1);
                var0 = !var0;
                if (!var0) {
                    _fun115871_ip = 146;
                    continue _fun115871
                }
            case 143:
                var0 = !var1;
            case 146:
                return var0;
        }
    };
    var _closure1_slot33 = var0;
    var0 = function() {
        _fun115872: for (var _fun115872_ip = 0;;) switch (_fun115872_ip) {
            case 0:
                var1 = _closure1_slot24;
                var3 = undefined;
                var12 = var1.bind(var3)();
                var20 = _closure1_slot0;
                var17 = _closure1_slot3;
                var1 = 22;
                var1 = var17[var1];
                var2 = var20.bind(var3)(var1);
                var1 = var2.useNavigation;
                var7 = var1.bind(var2)();
                var _closure2_slot0 = var7;
                var1 = _closure1_slot31;
                var9 = var1.bind(var3)();
                var _closure2_slot1 = var9;
                var4 = _closure1_slot6;
                var2 = var4.useState;
                var16 = 17;
                var1 = var17[var16];
                var1 = var20.bind(var3)(var1);
                var6 = var1.intl;
                var5 = var6.string;
                var1 = var17[var16];
                var1 = var20.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.QBMHvB;
                var1 = var5.bind(var6)(var1);
                var2 = var2.bind(var4)(var1);
                var1 = _closure1_slot5;
                var6 = 2;
                var1 = var1.bind(var3)(var2, var6);
                var4 = 0;
                var24 = var1[var4];
                var _closure2_slot2 = var24;
                var2 = 1;
                var23 = var1[var2];
                var10 = _closure1_slot6;
                var5 = var10.useState;
                var1 = _closure1_slot17;
                var5 = var5.bind(var10)(var1);
                var1 = _closure1_slot5;
                var1 = var1.bind(var3)(var5, var6);
                var33 = var1[var4];
                var _closure2_slot3 = var33;
                var1 = var1[var2];
                var _closure2_slot4 = var1;
                var10 = _closure1_slot6;
                var5 = var10.useState;
                var1 = false;
                var5 = var5.bind(var10)(var1);
                var1 = _closure1_slot5;
                var1 = var1.bind(var3)(var5, var6);
                var13 = var1[var4];
                var1 = var1[var2];
                var _closure2_slot5 = var1;
                var29 = _closure1_slot1;
                var1 = 23;
                var1 = var17[var1];
                var1 = var29.bind(var3)(var1);
                var10 = var1.bind(var3)();
                var5 = _closure1_slot6;
                var4 = var5.useLayoutEffect;
                var2 = new Array(2);
                var2[0] = var7;
                var2[1] = var9;
                var1 = function() { // Environment: var0
                    var3 = _closure2_slot0;
                    var2 = var3.setOptions;
                    var1 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var0 = 24;
                    var5 = var5[var0];
                    var0 = undefined;
                    var7 = var6.bind(var0)(var5);
                    var6 = var7.getHeaderCloseButton;
                    var5 = function() { // Environment: var4
                        var3 = _closure1_slot28;
                        var1 = _closure1_slot26;
                        var0 = _closure1_slot25;
                        var0 = var0.STEP_DISPLAY;
                        var2 = var1[var0];
                        var0 = _closure2_slot1;
                        var1 = var0.id;
                        var0 = undefined;
                        var0 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    var5 = var6.bind(var7)(var5);
                    var1.headerLeft = var5;
                    var4 = function() {
                        var3 = _closure1_slot21;
                        var2 = _closure1_slot27;
                        var1 = {};
                        var0 = _closure1_slot25;
                        var0 = var0.STEP_DISPLAY;
                        var1.step = var0;
                        var0 = undefined;
                        var0 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    var1.headerTitle = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = var4.bind(var5)(var1, var2);
                var5 = _closure1_slot6;
                var4 = var5.useCallback;
                var2 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot4;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = new Array(0);
                var5 = var4.bind(var5)(var2, var1);
                var _closure2_slot6 = var5;
                var6 = _closure1_slot6;
                var4 = var6.useCallback;
                var2 = _closure1_slot4;
                var1 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun115878: for (var _fun115878_ip = 0;;) switch (_fun115878_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun115878_ip = 188;
                                    continue _fun115878
                                }
                            case 10: // try_start_0
                                var3 = _closure2_slot5;
                                var5 = undefined;
                                var2 = true;
                                var2 = var3.bind(var5)(var2);
                                var4 = _closure2_slot3;
                                var3 = _closure1_slot17;
                                var6 = 0;
                                if (!(var4 !== var3)) {
                                    _fun115878_ip = 47;
                                    continue _fun115878
                                }
                            case 43:
                                var6 = _closure2_slot3;
                            case 47:
                                var4 = _closure1_slot1;
                                var7 = _closure1_slot3;
                                var3 = 25;
                                var3 = var7[var3];
                                var5 = var4.bind(var5)(var3);
                                var4 = var5.createRole;
                                var3 = _closure2_slot1;
                                var3 = var3.id;
                                var1 = _closure2_slot2;
                                var1 = var4.bind(var5)(var3, var1, var6);
                                SaveGenerator(address = 97);
                            case 95:
                                return var1;
                            case 97:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun115878_ip = 129;
                                    continue _fun115878
                                }
                            case 103:
                                var4 = _closure1_slot12;
                                var3 = var4.addConditionalChangeListener;
                                var2 = function() { // Environment: var2
                                    _fun115879: for (var _fun115879_ip = 0;;) switch (_fun115879_ip) {
                                        case 0:
                                            var2 = _closure1_slot12;
                                            var0 = var2.getProps;
                                            var2 = var0.bind(var2)();
                                            var0 = var2.guild;
                                            var4 = var2.selectedRoleId;
                                            var2 = null;
                                            var6 = var2 != var0;
                                            var5 = undefined;
                                            var3 = undefined;
                                            if (!var6) {
                                                _fun115879_ip = 71;
                                                continue _fun115879
                                            }
                                        case 41:
                                            var6 = var2 != var4;
                                            var3 = undefined;
                                            if (!var6) {
                                                _fun115879_ip = 71;
                                                continue _fun115879
                                            }
                                        case 50:
                                            var8 = _closure1_slot10;
                                            var7 = var8.getRole;
                                            var6 = var0.id;
                                            var3 = var7.bind(var8)(var6, var4);
                                        case 71:
                                            if (!(var2 != var4)) {
                                                _fun115879_ip = 242;
                                                continue _fun115879
                                            }
                                        case 78:
                                            if (!(var2 != var3)) {
                                                _fun115879_ip = 242;
                                                continue _fun115879
                                            }
                                        case 85:
                                            if (!(var2 != var0)) {
                                                _fun115879_ip = 242;
                                                continue _fun115879
                                            }
                                        case 92:
                                            var3 = _closure1_slot0;
                                            var4 = _closure1_slot3;
                                            var2 = 26;
                                            var2 = var4[var2];
                                            var6 = var3.bind(var5)(var2);
                                            var2 = var6.roleCreatedToast;
                                            var2 = var2.bind(var6)();
                                            var2 = 27;
                                            var2 = var4[var2];
                                            var4 = var3.bind(var5)(var2);
                                            var3 = var4.setRoleJustCreated;
                                            var2 = true;
                                            var2 = var3.bind(var4)(var2);
                                            var2 = _closure1_slot25;
                                            var2 = var2.STEP_PERMISSIONS;
                                            var3 = _closure1_slot33;
                                            var3 = var3.bind(var5)();
                                            if (!var3) {
                                                _fun115879_ip = 178;
                                                continue _fun115879
                                            }
                                        case 168:
                                            var3 = _closure1_slot25;
                                            var2 = var3.STEP_MEMBERS;
                                        case 178:
                                            var4 = _closure2_slot0;
                                            var3 = var4.push;
                                            var3 = var3.bind(var4)(var2);
                                            var4 = _closure1_slot30;
                                            var6 = _closure1_slot26;
                                            var3 = _closure1_slot25;
                                            var3 = var3.STEP_DISPLAY;
                                            var12 = var6[var3];
                                            var1 = _closure1_slot26;
                                            var11 = var1[var2];
                                            var9 = var0.id;
                                            var0 = false;
                                            var13 = undefined;
                                            var10 = false;
                                            var1 = var13[var4](var12, var11, var10, var9, var8);
                                            return var0;
                                        case 242:
                                            var0 = true;
                                            return var0;
                                    }
                                };
                                var2 = var3.bind(var4)(var2);
                            case 127: // try_end0
                                _fun115878_ip = 183;
                                continue _fun115878;
                            case 129:
                                return var1;
                            case 132: // catch_target0
                                CatchBlockStart(arg_register = 1);
                                var2 = _closure2_slot5;
                                var3 = undefined;
                                var1 = false;
                                var1 = var2.bind(var3)(var1);
                                var2 = _closure1_slot0;
                                var4 = _closure1_slot3;
                                var1 = 26;
                                var1 = var4[var1];
                                var2 = var2.bind(var3)(var1);
                                var1 = var2.roleCreateFailedToast;
                                var1 = var1.bind(var2)();
                            case 183:
                                var1 = undefined;
                                return var1;
                            case 188:
                                return var0;
                        }
                    };
                    return var0;
                };
                var2 = var2.bind(var3)(var1);
                var1 = new Array(4);
                var1[0] = var33;
                var9 = var9.id;
                var1[1] = var9;
                var1[2] = var24;
                var1[3] = var7;
                var11 = var4.bind(var6)(var2, var1);
                var4 = _closure1_slot6;
                var2 = var4.useCallback;
                var1 = new Array(2);
                var1[0] = var33;
                var1[1] = var5;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot8;
                    var0 = var1.dismiss;
                    var0 = var0.bind(var1)();
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 28;
                    var3 = var1[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 30;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 29;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var2 = {};
                    var6 = _closure2_slot3;
                    var2.color = var6;
                    var1 = _closure2_slot6;
                    var2.onSelect = var1;
                    var1 = 'RoleColorPicker';
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var0;
                };
                var31 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot22;
                var1 = _closure1_slot37;
                var0 = {};
                var4 = var17[var16];
                var4 = var20.bind(var3)(var4);
                var6 = var4.intl;
                var5 = var6.string;
                var4 = var17[var16];
                var4 = var20.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4["8pxAPp"];
                var4 = var5.bind(var6)(var4);
                var0.title = var4;
                var4 = var17[var16];
                var4 = var20.bind(var3)(var4);
                var6 = var4.intl;
                var5 = var6.string;
                var4 = var17[var16];
                var4 = var20.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4["JubQz/"];
                var4 = var5.bind(var6)(var4);
                var0.subtitle = var4;
                var6 = _closure1_slot22;
                var5 = _closure1_slot7;
                var4 = {};
                var7 = var12.sceneInner;
                var4.style = var7;
                var15 = _closure1_slot21;
                var9 = 31;
                var7 = var17[var9];
                var7 = var20.bind(var3)(var7);
                var14 = var7.FormSection;
                var7 = {};
                var18 = var17[var16];
                var18 = var20.bind(var3)(var18);
                var21 = var18.intl;
                var19 = var21.string;
                var18 = var17[var16];
                var18 = var20.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18.dLbkBk;
                var18 = var19.bind(var21)(var18);
                var7.title = var18;
                var19 = true;
                var7.thinTitle = var19;
                var22 = _closure1_slot21;
                var18 = var17[var9];
                var18 = var20.bind(var3)(var18);
                var21 = var18.FormInput;
                var18 = {
                    'value': null,
                    'onChange': null,
                    'showTopContainer': false,
                    'maxLength': null,
                    'autoFocus': true,
                    'autoComplete': 'off'
                };
                var18.value = var24;
                var18.onChange = var23;
                var23 = _closure1_slot16;
                var18.maxLength = var23;
                var18 = var22.bind(var3)(var21, var18);
                var7.children = var18;
                var14 = var15.bind(var3)(var14, var7);
                var7 = new Array(5);
                var7[0] = var14;
                var18 = _closure1_slot21;
                var14 = var17[var9];
                var14 = var20.bind(var3)(var14);
                var15 = var14.FormHint;
                var14 = {};
                var21 = var17[var16];
                var21 = var20.bind(var3)(var21);
                var23 = var21.intl;
                var22 = var23.string;
                var21 = var17[var16];
                var21 = var20.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21.m4j44b;
                var21 = var22.bind(var23)(var21);
                var14.children = var21;
                var14 = var18.bind(var3)(var15, var14);
                var7[1] = var14;
                var18 = _closure1_slot21;
                var14 = var17[var9];
                var14 = var20.bind(var3)(var14);
                var15 = var14.FormDivider;
                var14 = {};
                var14.outer = var19;
                var19 = var12.formDivider;
                var14.style = var19;
                var14 = var18.bind(var3)(var15, var14);
                var7[2] = var14;
                var18 = _closure1_slot21;
                var14 = var17[var9];
                var14 = var20.bind(var3)(var14);
                var15 = var14.FormRow;
                var14 = {};
                var19 = var12.formRow;
                var14.DEPRECATED_style = var19;
                var14.onPress = var31;
                var22 = _closure1_slot22;
                var21 = _closure1_slot7;
                var19 = {};
                var23 = var12.colorRow;
                var19.style = var23;
                var25 = _closure1_slot21;
                var28 = 16;
                var23 = var17[var28];
                var23 = var20.bind(var3)(var23);
                var24 = var23.Text;
                var23 = {};
                var26 = 'text-md/semibold';
                var23.variant = var26;
                var26 = var17[var16];
                var26 = var20.bind(var3)(var26);
                var30 = var26.intl;
                var27 = var30.string;
                var26 = var17[var16];
                var26 = var20.bind(var3)(var26);
                var26 = var26.t;
                var26 = var26["5NC5YW"];
                var26 = var27.bind(var30)(var26);
                var23.children = var26;
                var24 = var25.bind(var3)(var24, var23);
                var23 = new Array(2);
                var23[0] = var24;
                var26 = _closure1_slot22;
                var25 = _closure1_slot7;
                var24 = {};
                var27 = var12.colorValue;
                var24.style = var27;
                var30 = _closure1_slot21;
                var27 = 32;
                var27 = var17[var27];
                var29 = var29.bind(var3)(var27);
                var27 = {};
                var27.color = var33;
                var32 = var12.colorBlock;
                var27.style = var32;
                var27.onSelect = var31;
                var29 = var30.bind(var3)(var29, var27);
                var27 = new Array(2);
                var27[0] = var29;
                var30 = _closure1_slot21;
                var28 = var17[var28];
                var28 = var20.bind(var3)(var28);
                var29 = var28.Text;
                var28 = {};
                var31 = 'text-sm/medium';
                var28.variant = var31;
                var31 = 33;
                var31 = var17[var31];
                var32 = var20.bind(var3)(var31);
                var31 = var32.int2hex;
                var31 = var31.bind(var32)(var33);
                var28.children = var31;
                var28 = var30.bind(var3)(var29, var28);
                var27[1] = var28;
                var24.children = var27;
                var24 = var26.bind(var3)(var25, var24);
                var23[1] = var24;
                var19.children = var23;
                var19 = var22.bind(var3)(var21, var19);
                var14.label = var19;
                var19 = var17[var9];
                var19 = var20.bind(var3)(var19);
                var19 = var19.FormRow;
                var19 = var19.Arrow;
                var14.trailing = var19;
                var14 = var18.bind(var3)(var15, var14);
                var7[3] = var14;
                var15 = _closure1_slot21;
                var9 = var17[var9];
                var9 = var20.bind(var3)(var9);
                var14 = var9.FormHint;
                var9 = {};
                var18 = var17[var16];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var17[var16];
                var17 = var20.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17["9TMIgc"];
                var17 = var18.bind(var19)(var17);
                var9.children = var17;
                var9 = var15.bind(var3)(var14, var9);
                var7[4] = var9;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot21;
                var6 = _closure1_slot7;
                var5 = {};
                var14 = var12.nextButton;
                var9 = new Array(2);
                var9[0] = var14;
                if (!var10) {
                    _fun115872_ip = 1306;
                    continue _fun115872
                }
            case 1300:
                var10 = var12.nextButtonFloating;
            case 1306:
                var9[1] = var10;
                var5.style = var9;
                var10 = _closure1_slot21;
                var15 = _closure1_slot0;
                var12 = _closure1_slot3;
                var8 = 34;
                var8 = var12[var8];
                var8 = var15.bind(var3)(var8);
                var9 = var8.Button;
                var8 = {};
                var8.loading = var13;
                var8.disabled = var13;
                var13 = var12[var16];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var12[var16];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.CumH4u;
                var12 = var13.bind(var14)(var12);
                var8.text = var12;
                var8.onPress = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var0 = function() {
        var1 = _closure1_slot24;
        var3 = undefined;
        var9 = var1.bind(var3)();
        var15 = _closure1_slot0;
        var16 = _closure1_slot3;
        var1 = 22;
        var1 = var16[var1];
        var2 = var15.bind(var3)(var1);
        var1 = var2.useNavigation;
        var6 = var1.bind(var2)();
        var _closure2_slot0 = var6;
        var1 = _closure1_slot32;
        var2 = var1.bind(var3)();
        var1 = var2.role;
        var _closure2_slot1 = var1;
        var7 = var2.guild;
        var _closure2_slot2 = var7;
        var10 = _closure1_slot6;
        var5 = var10.useLayoutEffect;
        var4 = new Array(2);
        var4[0] = var6;
        var2 = var7.id;
        var4[1] = var2;
        var2 = function() { // Environment: var0
            var3 = _closure2_slot0;
            var2 = var3.setOptions;
            var1 = {};
            var6 = _closure1_slot0;
            var5 = _closure1_slot3;
            var0 = 24;
            var5 = var5[var0];
            var0 = undefined;
            var7 = var6.bind(var0)(var5);
            var6 = var7.getHeaderCloseButton;
            var5 = function() { // Environment: var4
                var3 = _closure1_slot28;
                var1 = _closure1_slot26;
                var0 = _closure1_slot25;
                var0 = var0.STEP_PERMISSIONS;
                var2 = var1[var0];
                var0 = _closure2_slot2;
                var1 = var0.id;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var5 = var6.bind(var7)(var5);
            var1.headerLeft = var5;
            var4 = function() {
                var3 = _closure1_slot21;
                var2 = _closure1_slot27;
                var1 = {};
                var0 = _closure1_slot25;
                var0 = var0.STEP_PERMISSIONS;
                var1.step = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var1.headerTitle = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var2 = var5.bind(var10)(var2, var4);
        var5 = _closure1_slot6;
        var4 = var5.useCallback;
        var10 = var7.id;
        var2 = new Array(3);
        var2[0] = var10;
        var2[1] = var6;
        var1 = var1.id;
        var2[2] = var1;
        var1 = function(arg0) { // Environment: var0
            var3 = _closure1_slot1;
            var1 = _closure1_slot3;
            var0 = 25;
            var1 = var1[var0];
            var0 = undefined;
            var8 = var3.bind(var0)(var1);
            var7 = var8.updateRolePermissions;
            var1 = _closure2_slot2;
            var6 = var1.id;
            var4 = _closure2_slot1;
            var5 = var4.id;
            var4 = arg0;
            var4 = var7.bind(var8)(var6, var5, var4);
            var5 = _closure2_slot0;
            var4 = var5.push;
            var3 = _closure1_slot25;
            var3 = var3.STEP_MEMBERS;
            var3 = var4.bind(var5)(var3);
            var5 = _closure1_slot30;
            var4 = _closure1_slot26;
            var3 = _closure1_slot25;
            var3 = var3.STEP_PERMISSIONS;
            var12 = var4[var3];
            var3 = _closure1_slot26;
            var2 = _closure1_slot25;
            var2 = var2.STEP_MEMBERS;
            var11 = var3[var2];
            var9 = var1.id;
            var10 = false;
            var13 = undefined;
            var1 = var13[var5](var12, var11, var10, var9, var8);
            return var0;
        };
        var10 = var4.bind(var5)(var1, var2);
        var _closure2_slot3 = var10;
        var4 = _closure1_slot6;
        var2 = var4.useCallback;
        var1 = new Array(1);
        var1[0] = var10;
        var0 = function() { // Environment: var0
            var2 = _closure2_slot3;
            var1 = _closure1_slot13;
            var0 = _closure1_slot14;
            var0 = var1[var0];
            var1 = var0.permissions;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var11 = var2.bind(var4)(var0, var1);
        var2 = _closure1_slot22;
        var1 = _closure1_slot37;
        var0 = {};
        var4 = false;
        var0.hasSkipButton = var4;
        var12 = 17;
        var4 = var16[var12];
        var4 = var15.bind(var3)(var4);
        var6 = var4.intl;
        var5 = var6.string;
        var4 = var16[var12];
        var4 = var15.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.p0IwNA;
        var4 = var5.bind(var6)(var4);
        var0.title = var4;
        var4 = var16[var12];
        var4 = var15.bind(var3)(var4);
        var6 = var4.intl;
        var5 = var6.string;
        var4 = var16[var12];
        var4 = var15.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.G529Hk;
        var4 = var5.bind(var6)(var4);
        var0.subtitle = var4;
        var6 = _closure1_slot21;
        var5 = _closure1_slot1;
        var4 = 35;
        var4 = var16[var4];
        var5 = var5.bind(var3)(var4);
        var4 = {};
        var4.onSelect = var10;
        var10 = _closure1_slot19;
        var10 = var10.GUILD_ROLE_CREATION_MODAL;
        var4.location = var10;
        var7 = var7.id;
        var4.guildId = var7;
        var5 = var6.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var7 = _closure1_slot21;
        var6 = _closure1_slot7;
        var5 = {};
        var9 = var9.sceneFooter;
        var5.style = var9;
        var10 = _closure1_slot21;
        var8 = 34;
        var8 = var16[var8];
        var8 = var15.bind(var3)(var8);
        var9 = var8.Button;
        var8 = {};
        var13 = var16[var12];
        var13 = var15.bind(var3)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var12 = var16[var12];
        var12 = var15.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.CJm5V5;
        var12 = var13.bind(var14)(var12);
        var8.text = var12;
        var8.onPress = var11;
        var8 = var10.bind(var3)(var9, var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot35 = var0;
    var0 = function() {
        _fun115887: for (var _fun115887_ip = 0;;) switch (_fun115887_ip) {
            case 0:
                var1 = _closure1_slot24;
                var3 = undefined;
                var10 = var1.bind(var3)();
                var5 = _closure1_slot0;
                var21 = _closure1_slot3;
                var1 = 22;
                var1 = var21[var1];
                var2 = var5.bind(var3)(var1);
                var1 = var2.useNavigation;
                var1 = var1.bind(var2)();
                var _closure2_slot0 = var1;
                var2 = _closure1_slot32;
                var2 = var2.bind(var3)();
                var8 = var2.role;
                var _closure2_slot1 = var8;
                var18 = var2.guild;
                var _closure2_slot2 = var18;
                var2 = _closure1_slot1;
                var4 = 20;
                var4 = var21[var4];
                var7 = var2.bind(var3)(var4);
                var4 = null;
                var6 = var4 != var8;
                var4 = 'Role cannot be null';
                var4 = var7.bind(var3)(var6, var4);
                var7 = _closure1_slot6;
                var6 = var7.useLayoutEffect;
                var4 = new Array(2);
                var4[0] = var1;
                var1 = var18.id;
                var4[1] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.setOptions;
                    var0 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var4 = 24;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.getHeaderCloseButton;
                    var4 = function() { // Environment: var3
                        var3 = _closure1_slot28;
                        var1 = _closure1_slot26;
                        var0 = _closure1_slot25;
                        var0 = var0.STEP_MEMBERS;
                        var2 = var1[var0];
                        var0 = _closure2_slot2;
                        var1 = var0.id;
                        var0 = undefined;
                        var0 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    var4 = var5.bind(var6)(var4);
                    var0.headerLeft = var4;
                    var3 = function() {
                        var3 = _closure1_slot21;
                        var2 = _closure1_slot27;
                        var1 = {};
                        var0 = _closure1_slot25;
                        var0 = var0.STEP_MEMBERS;
                        var1.step = var0;
                        var0 = undefined;
                        var0 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    var0.headerTitle = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var6.bind(var7)(var1, var4);
                var1 = 23;
                var1 = var21[var1];
                var1 = var2.bind(var3)(var1);
                var9 = var1.bind(var3)();
                var6 = _closure1_slot6;
                var4 = var6.useCallback;
                var1 = var8.id;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var2 = var0.roles;
                    var1 = var2.includes;
                    var0 = _closure2_slot1;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var6 = var4.bind(var6)(var1, var2);
                var1 = 36;
                var1 = var21[var1];
                var4 = var5.bind(var3)(var1);
                var2 = var4.useGuildMembers;
                var1 = var18.id;
                var17 = var2.bind(var4)(var1, var6);
                var4 = _closure1_slot6;
                var2 = var4.useState;
                var1 = {};
                var2 = var2.bind(var4)(var1);
                var1 = _closure1_slot5;
                var6 = 2;
                var1 = var1.bind(var3)(var2, var6);
                var11 = 0;
                var15 = var1[var11];
                var _closure2_slot3 = var15;
                var2 = 1;
                var7 = var1[var2];
                var4 = _closure1_slot6;
                var1 = var4.useState;
                var20 = false;
                var4 = var1.bind(var4)(var20);
                var1 = _closure1_slot5;
                var1 = var1.bind(var3)(var4, var6);
                var16 = var1[var11];
                var1 = var1[var2];
                var _closure2_slot4 = var1;
                var6 = _closure1_slot6;
                var4 = var6.useCallback;
                var2 = new Array(4);
                var2[0] = var1;
                var1 = var18.id;
                var2[1] = var1;
                var1 = var8.id;
                var2[2] = var1;
                var2[3] = var15;
                var1 = function() { // Environment: var0
                    _fun115892: for (var _fun115892_ip = 0;;) switch (_fun115892_ip) {
                        case 0:
                            var0 = global;
                            var3 = var0.Object;
                            var2 = var3.keys;
                            var1 = _closure2_slot3;
                            var7 = var2.bind(var3)(var1);
                            var2 = var7.length;
                            var1 = 0;
                            if (!(var2 > var1)) {
                                _fun115892_ip = 110;
                                continue _fun115892
                            }
                        case 36:
                            var3 = _closure2_slot4;
                            var2 = undefined;
                            var1 = true;
                            var1 = var3.bind(var2)(var1);
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var1 = 37;
                            var1 = var5[var1];
                            var6 = var4.bind(var2)(var1);
                            var5 = var6.bulkAddMemberRoles;
                            var1 = _closure2_slot2;
                            var4 = var1.id;
                            var1 = _closure2_slot1;
                            var1 = var1.id;
                            var1 = var5.bind(var6)(var4, var1, var7);
                            var1 = false;
                            var1 = var3.bind(var2)(var1);
                        case 110:
                            var6 = _closure1_slot30;
                            var3 = _closure1_slot26;
                            var2 = _closure1_slot25;
                            var2 = var2.STEP_MEMBERS;
                            var11 = var3[var2];
                            var2 = _closure1_slot26;
                            var10 = var2.FLOW_COMPLETED;
                            var0 = _closure2_slot2;
                            var8 = var0.id;
                            var0 = undefined;
                            var9 = false;
                            var12 = undefined;
                            var2 = var12[var6](var11, var10, var9, var8, var7);
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var1 = 18;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.close;
                            var1 = var1.bind(var2)();
                            return var0;
                    }
                };
                var14 = var4.bind(var6)(var1, var2);
                var4 = _closure1_slot6;
                var2 = var4.useMemo;
                var1 = new Array(1);
                var1[0] = var15;
                var0 = function() { // Environment: var0
                    var0 = global;
                    var2 = var0.Object;
                    var1 = var2.keys;
                    var0 = _closure2_slot3;
                    var0 = var1.bind(var2)(var0);
                    var0 = var0.length;
                    return var0;
                };
                var13 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot22;
                var1 = _closure1_slot37;
                var0 = {};
                var4 = !var9;
                var0.hasSkipButton = var4;
                var19 = 17;
                var4 = var21[var19];
                var4 = var5.bind(var3)(var4);
                var22 = var4.intl;
                var6 = var22.string;
                var4 = var21[var19];
                var4 = var5.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4["+gWHtA"];
                var4 = var6.bind(var22)(var4);
                var0.title = var4;
                var4 = var21[var19];
                var4 = var5.bind(var3)(var4);
                var23 = var4.intl;
                var22 = var23.formatToPlainString;
                var4 = var21[var19];
                var4 = var5.bind(var3)(var4);
                var4 = var4.t;
                var6 = var4.yZW3oh;
                var4 = {};
                var24 = _closure1_slot15;
                var4.numMembers = var24;
                var4 = var22.bind(var23)(var6, var4);
                var0.subtitle = var4;
                var6 = _closure1_slot21;
                var4 = 38;
                var4 = var21[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.AddMembersBody;
                var4 = {};
                var4.autoFocusSearch = var20;
                var4.guild = var18;
                var4.members = var17;
                var4.pendingAdditions = var15;
                var4.role = var8;
                var4.setPendingAdditions = var7;
                var7 = _closure1_slot15;
                var4.maxCount = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot21;
                var6 = _closure1_slot7;
                var5 = {};
                var15 = var10.nextButton;
                var8 = new Array(2);
                var8[0] = var15;
                if (!var9) {
                    _fun115887_ip = 639;
                    continue _fun115887
                }
            case 633:
                var9 = var10.nextButtonFloating;
            case 639:
                var8[1] = var9;
                var5.style = var8;
                var10 = _closure1_slot21;
                var18 = _closure1_slot0;
                var15 = _closure1_slot3;
                var8 = 34;
                var8 = var15[var8];
                var8 = var18.bind(var3)(var8);
                var9 = var8.Button;
                var8 = {};
                var8.loading = var16;
                var16 = var15[var19];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var15[var19];
                var15 = var18.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.XcPHfw;
                var15 = var16.bind(var17)(var15);
                var8.text = var15;
                var8.onPress = var14;
                var11 = var11 === var13;
                if (var11) {
                    _fun115887_ip = 753;
                    continue _fun115887
                }
            case 745:
                var12 = _closure1_slot15;
                var11 = var13 > var12;
            case 753:
                var8.disabled = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot36 = var0;
    var0 = function arg0() {
        _fun115894: for (var _fun115894_ip = 0;;) switch (_fun115894_ip) {
            case 0:
                var1 = arg0;
                var11 = var1.children;
                var6 = var1.hasSkipButton;
                var19 = var1.title;
                var16 = var1.subtitle;
                var2 = _closure1_slot24;
                var4 = undefined;
                var10 = var2.bind(var4)();
                var3 = _closure1_slot1;
                var5 = _closure1_slot3;
                var2 = 39;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.bind(var4)();
                var7 = var2.insets;
                var3 = _closure1_slot0;
                var2 = 22;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useNavigation;
                var9 = var2.bind(var3)();
                var _closure2_slot0 = var9;
                var2 = _closure1_slot31;
                var8 = var2.bind(var4)();
                var _closure2_slot1 = var8;
                var5 = _closure1_slot6;
                var3 = var5.useCallback;
                var2 = new Array(2);
                var2[0] = var9;
                var8 = var8.id;
                var2[1] = var8;
                var0 = function() { // Environment: var0
                    _fun115895: for (var _fun115895_ip = 0;;) switch (_fun115895_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = var2.getState;
                            var1 = var1.bind(var2)();
                            var2 = var1.routes;
                            var3 = var2.length;
                            var1 = 1;
                            var1 = var3 - var1;
                            var1 = var2[var1];
                            var3 = var1.key;
                            var2 = _closure1_slot25;
                            var2 = var2.STEP_DISPLAY;
                            if (!(var3 !== var2)) {
                                _fun115895_ip = 254;
                                continue _fun115895
                            }
                        case 64:
                            var2 = _closure1_slot25;
                            var2 = var2.STEP_PERMISSIONS;
                            if (!(var3 !== var2)) {
                                _fun115895_ip = 192;
                                continue _fun115895
                            }
                        case 78:
                            var3 = _closure1_slot26;
                            var2 = _closure1_slot25;
                            var2 = var2.STEP_MEMBERS;
                            var5 = var3[var2];
                            var2 = _closure1_slot26;
                            var4 = var2.FLOW_DISMISSED;
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot3;
                            var2 = 14;
                            var2 = var7[var2];
                            var3 = undefined;
                            var10 = var6.bind(var3)(var2);
                            var9 = var10.track;
                            var2 = _closure1_slot18;
                            var8 = var2.MODAL_DISMISSED;
                            var2 = {};
                            var11 = _closure1_slot19;
                            var11 = var11.GUILD_ROLE_CREATION_MODAL;
                            var2.type = var11;
                            var2 = var9.bind(var10)(var8, var2);
                            var2 = 18;
                            var2 = var7[var2];
                            var3 = var6.bind(var3)(var2);
                            var2 = var3.close;
                            var2 = var2.bind(var3)();
                            _fun115895_ip = 369;
                            continue _fun115895;
                        case 192:
                            var3 = _closure1_slot26;
                            var2 = _closure1_slot25;
                            var2 = var2.STEP_PERMISSIONS;
                            var5 = var3[var2];
                            var6 = _closure1_slot26;
                            var2 = _closure1_slot25;
                            var2 = var2.STEP_MEMBERS;
                            var4 = var6[var2];
                            var8 = _closure2_slot0;
                            var7 = var8.push;
                            var6 = _closure1_slot25;
                            var6 = var6.STEP_MEMBERS;
                            var6 = var7.bind(var8)(var6);
                            _fun115895_ip = 369;
                            continue _fun115895;
                        case 254:
                            var3 = _closure1_slot26;
                            var2 = _closure1_slot25;
                            var2 = var2.STEP_DISPLAY;
                            var3 = var3[var2];
                            var6 = _closure1_slot33;
                            var2 = undefined;
                            var7 = var6.bind(var2)();
                            var6 = _closure1_slot26;
                            var2 = _closure1_slot25;
                            if (var7) {
                                _fun115895_ip = 332;
                                continue _fun115895
                            }
                        case 293:
                            var7 = var2.STEP_PERMISSIONS;
                            var4 = var6[var7];
                            var10 = _closure2_slot0;
                            var9 = var10.push;
                            var8 = _closure1_slot25;
                            var8 = var8.STEP_PERMISSIONS;
                            var8 = var9.bind(var10)(var8);
                            var5 = var3;
                            _fun115895_ip = 369;
                            continue _fun115895;
                        case 332:
                            var2 = var2.STEP_MEMBERS;
                            var4 = var6[var2];
                            var8 = _closure2_slot0;
                            var7 = var8.push;
                            var6 = _closure1_slot25;
                            var6 = var6.STEP_MEMBERS;
                            var6 = var7.bind(var8)(var6);
                            var5 = var3;
                        case 369:
                            var3 = _closure1_slot30;
                            var0 = _closure2_slot1;
                            var12 = var0.id;
                            var0 = undefined;
                            var13 = true;
                            var16 = undefined;
                            var15 = var5;
                            var14 = var4;
                            var1 = var16[var3](var15, var14, var13, var12, var11);
                            return var0;
                    }
                };
                var13 = var3.bind(var5)(var0, var2);
                var0 = global;
                var2 = var0.navigator;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun115894_ip = 575;
                    continue _fun115894
                }
            case 168:
                var3 = _closure1_slot22;
                var2 = _closure1_slot7;
                var0 = {};
                var5 = {};
                var20 = var10.container;
                var21 = var5;
                var8 = copyDataProperties(var21, var20);
                var9 = var7.top;
                var8 = 'paddingTop';
                var5[var8] = var9;
                var8 = var10.container;
                var8 = var8.paddingBottom;
                var7 = var7.bottom;
                var8 = var8 + var7;
                var7 = 'paddingBottom';
                var5[var7] = var8;
                var0.style = var5;
                var8 = _closure1_slot22;
                var7 = _closure1_slot7;
                var5 = {};
                var9 = var10.sceneHeader;
                var5.style = var9;
                var18 = _closure1_slot21;
                var14 = _closure1_slot0;
                var17 = _closure1_slot3;
                var12 = 16;
                var9 = var17[var12];
                var9 = var14.bind(var4)(var9);
                var15 = var9.Text;
                var9 = {
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var9.children = var19;
                var15 = var18.bind(var4)(var15, var9);
                var9 = new Array(2);
                var9[0] = var15;
                var15 = _closure1_slot21;
                var12 = var17[var12];
                var12 = var14.bind(var4)(var12);
                var14 = var12.Text;
                var12 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var17 = var10.sceneSubtitle;
                var12.style = var17;
                var12.children = var16;
                var12 = var15.bind(var4)(var14, var12);
                var9[1] = var12;
                var5.children = var9;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(3);
                var5[0] = var7;
                var9 = _closure1_slot21;
                var8 = _closure1_slot7;
                var7 = {};
                var12 = var10.sceneContent;
                var7.style = var12;
                var7.children = var11;
                var7 = var9.bind(var4)(var8, var7);
                var5[1] = var7;
                if (!var6) {
                    _fun115894_ip = 559;
                    continue _fun115894
                }
            case 436:
                var9 = _closure1_slot21;
                var8 = _closure1_slot7;
                var7 = {};
                var10 = var10.sceneFooter;
                var7.style = var10;
                var12 = _closure1_slot21;
                var17 = _closure1_slot0;
                var18 = _closure1_slot3;
                var10 = 34;
                var10 = var18[var10];
                var10 = var17.bind(var4)(var10);
                var11 = var10.Button;
                var10 = {};
                var14 = 17;
                var15 = var18[var14];
                var15 = var17.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var18[var14];
                var14 = var17.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14.CJm5V5;
                var14 = var15.bind(var16)(var14);
                var10.text = var14;
                var10.onPress = var13;
                var10 = var12.bind(var4)(var11, var10);
                var7.children = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 559:
                var5[2] = var6;
                var0.children = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun115894_ip = 613;
                continue _fun115894;
            case 575:
                var3 = _closure1_slot21;
                var2 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 40;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.SceneLoadingIndicator;
                var1 = {};
                var0 = var3.bind(var4)(var2, var1);
            case 613:
                return var0;
        }
    };
    var _closure1_slot37 = var0;
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var3 = {};
    var8 = true;
    var3.value = var8;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var14 = 1;
    var3 = var5[var14];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var9 = var6.bind(var0)(var3);
    var _closure1_slot6 = var9;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot7 = var6;
    var6 = var3.Keyboard;
    var _closure1_slot8 = var6;
    var3 = var3.Platform;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isGuildOwner;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var13 = 8;
    var3 = var5[var13];
    var3 = var4.bind(var0)(var3);
    var6 = var3.PermissionTemplates;
    var _closure1_slot13 = var6;
    var6 = var3.DEFAULT_TEMPLATE_TYPE;
    var _closure1_slot14 = var6;
    var3 = var3.MAX_BULK_ROLE_MEMBERS_ADD;
    var _closure1_slot15 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.MAX_ROLE_LENGTH;
    var _closure1_slot16 = var6;
    var6 = var3.DEFAULT_ROLE_COLOR;
    var _closure1_slot17 = var6;
    var6 = var3.AnalyticEvents;
    var _closure1_slot18 = var6;
    var6 = var3.AnalyticsSections;
    var _closure1_slot19 = var6;
    var3 = var3.Permissions;
    var _closure1_slot20 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot21 = var6;
    var3 = var3.jsxs;
    var _closure1_slot22 = var3;
    var3 = {};
    var6 = {
        'flexDirection': 'row',
        'justifyContent': 'center',
        'alignContent': 'center',
        'width': '100%'
    };
    var3.titleContainer = var6;
    var6 = {
        'textAlign': 'center',
        'flex': 1
    };
    var3.title = var6;
    var _closure1_slot23 = var3;
    var3 = 11;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var10 = {};
    var11 = 12;
    var11 = var5[var11];
    var11 = var4.bind(var0)(var11);
    var11 = var11.NAV_BAR_HEIGHT;
    var10.marginTop = var11;
    var10.flexGrow = var14;
    var11 = 13;
    var15 = var5[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var10.paddingBottom = var15;
    var3.container = var10;
    var10 = {
        'alignItems': 'center',
        'marginBottom': 8,
        'marginHorizontal': 16
    };
    var3.sceneHeader = var10;
    var10 = {
        'textAlign': 'center',
        'paddingTop': 8,
        'maxWidth': 400
    };
    var3.sceneSubtitle = var10;
    var10 = {};
    var10.flex = var14;
    var3.sceneContent = var10;
    var10 = {};
    var10.flex = var14;
    var3.sceneInner = var10;
    var10 = {
        'marginBottom': 8,
        'paddingVertical': 12
    };
    var3.formRow = var10;
    var10 = {};
    var14 = 24;
    var10.marginTop = var14;
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.TRANSPARENT;
    var10.backgroundColor = var14;
    var3.formDivider = var10;
    var10 = {
        'flexDirection': 'row',
        'flexGrow': 1,
        'justifyContent': 'space-between',
        'alignItems': 'center'
    };
    var3.colorRow = var10;
    var10 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.colorValue = var10;
    var10 = {
        'marginHorizontal': 0,
        'marginVertical': 0,
        'marginRight': 8,
        'minWidth': 24,
        'height': 24,
        'borderRadius': 3
    };
    var3.colorBlock = var10;
    var10 = {};
    var10.paddingBottom = var13;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10.paddingHorizontal = var13;
    var3.sceneFooter = var10;
    var10 = {
        'width': '100%',
        'paddingHorizontal': 16,
        'paddingVertical': 16
    };
    var3.nextButton = var10;
    var10 = {
        'paddingVertical': 0,
        'paddingTop': 16
    };
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWER;
    var10.backgroundColor = var11;
    var3.nextButtonFloating = var10;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot24 = var3;
    var6 = {};
    var3 = 'STEP_DISPLAY';
    var6.STEP_DISPLAY = var3;
    var3 = 'STEP_PERMISSIONS';
    var6.STEP_PERMISSIONS = var3;
    var3 = 'STEP_MEMBERS';
    var6.STEP_MEMBERS = var3;
    var _closure1_slot25 = var6;
    var3 = {};
    var10 = var6.STEP_DISPLAY;
    var7 = 'Role Display';
    var3[var10] = var7;
    var10 = var6.STEP_PERMISSIONS;
    var7 = 'Role Permissions';
    var3[var10] = var7;
    var10 = var6.STEP_MEMBERS;
    var7 = 'Role Members';
    var3[var10] = var7;
    var10 = 'Flow Initialized';
    var7 = 'FLOW_INITIALIZED';
    var3[var7] = var10;
    var10 = 'Flow Dismissed';
    var7 = 'FLOW_DISMISSED';
    var3[var7] = var10;
    var10 = 'Flow Completed';
    var7 = 'FLOW_COMPLETED';
    var3[var7] = var10;
    var _closure1_slot26 = var3;
    var7 = var9.memo;
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var3 = var0.step;
        var0 = global;
        var4 = var0.Object;
        var2 = var4.keys;
        var1 = _closure1_slot25;
        var2 = var2.bind(var4)(var1);
        var11 = var2.length;
        var1 = var2.indexOf;
        var2 = var1.bind(var2)(var3);
        var1 = 1;
        var12 = var2 + var1;
        var3 = _closure1_slot21;
        var2 = _closure1_slot7;
        var1 = {};
        var7 = _closure1_slot23;
        var4 = var7.titleContainer;
        var1.style = var4;
        var6 = _closure1_slot21;
        var8 = _closure1_slot0;
        var13 = _closure1_slot3;
        var0 = 16;
        var4 = var13[var0];
        var0 = undefined;
        var4 = var8.bind(var0)(var4);
        var5 = var4.Text;
        var4 = {
            'style': null,
            'accessibilityRole': 'header',
            'variant': 'heading-md/extrabold',
            'color': 'mobile-text-heading-primary'
        };
        var7 = var7.title;
        var4.style = var7;
        var7 = 17;
        var9 = var13[var7];
        var9 = var8.bind(var0)(var9);
        var10 = var9.intl;
        var9 = var10.format;
        var7 = var13[var7];
        var7 = var8.bind(var0)(var7);
        var7 = var7.t;
        var8 = var7["8v/u0i"];
        var7 = {};
        var7.number = var12;
        var7.total = var11;
        var7 = var9.bind(var10)(var8, var7);
        var4.children = var7;
        var4 = var6.bind(var0)(var5, var4);
        var1.children = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var7.bind(var9)(var3);
    var _closure1_slot27 = var3;
    var3 = function arg0, arg1() {
        var6 = _closure1_slot30;
        var0 = _closure1_slot26;
        var9 = var0.FLOW_DISMISSED;
        var0 = undefined;
        var10 = arg0;
        var8 = false;
        var7 = arg1;
        var11 = undefined;
        var2 = var11[var6](var10, var9, var8, var7, var6);
        var2 = _closure1_slot1;
        var3 = _closure1_slot3;
        var1 = 18;
        var1 = var3[var1];
        var2 = var2.bind(var0)(var1);
        var1 = var2.close;
        var1 = var1.bind(var2)();
        return var0;
    };
    var _closure1_slot28 = var3;
    var3 = {};
    var9 = var6.STEP_DISPLAY;
    var7 = {};
    var7.fullscreen = var8;
    var10 = function() {
        var3 = _closure1_slot21;
        var2 = _closure1_slot34;
        var1 = undefined;
        var0 = {};
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var7.render = var10;
    var3[var9] = var7;
    var9 = var6.STEP_PERMISSIONS;
    var7 = {};
    var7.fullscreen = var8;
    var10 = function() {
        var3 = _closure1_slot21;
        var2 = _closure1_slot35;
        var1 = undefined;
        var0 = {};
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var7.render = var10;
    var3[var9] = var7;
    var7 = var6.STEP_MEMBERS;
    var6 = {};
    var6.fullscreen = var8;
    var8 = function() {
        var3 = _closure1_slot21;
        var2 = _closure1_slot36;
        var1 = undefined;
        var0 = {};
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var6.render = var8;
    var3[var7] = var6;
    var _closure1_slot29 = var3;
    var3 = 43;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/roles/native/GuildSettingsRoleCreateModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var1 = _closure1_slot31;
        var3 = undefined;
        var1 = var1.bind(var3)();
        var _closure2_slot0 = var1;
        var2 = _closure1_slot1;
        var5 = _closure1_slot3;
        var1 = 41;
        var1 = var5[var1];
        var1 = var2.bind(var3)(var1);
        var0 = function() { // Environment: var0
            var5 = _closure1_slot30;
            var1 = _closure1_slot26;
            var9 = var1.FLOW_INITIALIZED;
            var1 = _closure1_slot26;
            var0 = _closure1_slot25;
            var0 = var0.STEP_DISPLAY;
            var8 = var1[var0];
            var0 = _closure2_slot0;
            var6 = var0.id;
            var0 = undefined;
            var7 = false;
            var10 = undefined;
            var1 = var10[var5](var9, var8, var7, var6, var5);
            return var0;
        };
        var0 = var1.bind(var3)(var0);
        var2 = _closure1_slot21;
        var1 = _closure1_slot0;
        var0 = 42;
        var0 = var5[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.Navigator;
        var0 = {};
        var5 = _closure1_slot29;
        var0.screens = var5;
        var4 = _closure1_slot25;
        var4 = var4.STEP_DISPLAY;
        var0.initialRouteName = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1416, 1674, 1621, 8175, 14801, 660, 33, 1297, 4703, 671, 795, 4302, 3941, 1234, 14799, 566, 44, 3096, 1469, 5403, 4705, 4679, 3147, 14797, 3278, 13158, 1307, 5382, 10225, 668, 4084, 14805, 14806, 8174, 14807, 4895, 5856, 4103, 5790, 2]);