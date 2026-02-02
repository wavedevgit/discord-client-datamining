// modules/activities/Constants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var36 = require;
    var2 = exports;
    var37 = dependencyMap;
    var5 = global;
    var4 = var5.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = 0;
    var3 = var37[var1];
    var0 = undefined;
    var3 = var36.bind(var0)(var3);
    var39 = var3.ChannelTypes;
    var16 = new Array(11);
    var28 = '1037680572660727838';
    var16[0] = var28;
    var27 = '235088799074484224';
    var16[1] = var27;
    var31 = '1007373802981822582';
    var16[2] = var31;
    var30 = '1067803140071620628';
    var16[3] = var30;
    var24 = '1194351737264406548';
    var16[4] = var24;
    var23 = '1245041113882955918';
    var16[5] = var23;
    var22 = '1245040907732910201';
    var16[6] = var22;
    var21 = '1245040436427489471';
    var16[7] = var21;
    var20 = '1208090049871351890';
    var16[8] = var20;
    var26 = '1235205910863806484';
    var16[9] = var26;
    var25 = '1227719606223765687';
    var16[10] = var25;
    var15 = new Array(3);
    var19 = '1247266306231898122';
    var15[0] = var19;
    var18 = '1257458870390099989';
    var15[1] = var18;
    var17 = '1276239071764680926';
    var15[2] = var17;
    var14 = {};
    var3 = 'ADS';
    var14.ADS = var3;
    var3 = 'FAILED_LOAD';
    var14.FAILED_LOAD = var3;
    var3 = 'LAGGING';
    var14.LAGGING = var3;
    var3 = 'CONFUSING';
    var14.CONFUSING = var3;
    var3 = 'NOT_FUN';
    var14.NOT_FUN = var3;
    var3 = 'OTHER';
    var14.OTHER = var3;
    var13 = {};
    var13.PLAY = var1;
    var3 = 'PLAY';
    var13[var1] = var3;
    var38 = 1;
    var13.SPECTATE = var38;
    var3 = 'SPECTATE';
    var13[var38] = var3;
    var12 = {};
    var3 = 'desktop';
    var12.DESKTOP = var3;
    var3 = 'mobile';
    var12.MOBILE = var3;
    var11 = {};
    var3 = 'BETRAYAL_MARKETING_TOOLTIP';
    var11.BETRAYAL_MARKETING_TOOLTIP = var3;
    var3 = 'FISHINGTON_MARKETING_TOOLTIP';
    var11.FISHINGTON_MARKETING_TOOLTIP = var3;
    var3 = 'POKER_MARKETING_TOOLTIP';
    var11.POKER_MARKETING_TOOLTIP = var3;
    var3 = 'YOUTUBE_MARKETING_TOOLTIP';
    var11.YOUTUBE_MARKETING_TOOLTIP = var3;
    var10 = {};
    var10.UNLOCKED = var38;
    var3 = 'UNLOCKED';
    var10[var38] = var3;
    var35 = 2;
    var10.PORTRAIT = var35;
    var4 = 'PORTRAIT';
    var10[var35] = var4;
    var6 = 3;
    var10.LANDSCAPE = var6;
    var3 = 'LANDSCAPE';
    var10[var6] = var3;
    var8 = var5.Set;
    var6 = new Array(4);
    var34 = '755600276941176913';
    var6[0] = var34;
    var33 = '880218832743055411';
    var6[1] = var33;
    var32 = '1050941315912835122';
    var6[2] = var32;
    var29 = '880218394199220334';
    var6[3] = var29;
    var7 = var8.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var8
        }
    });
    var45 = var7;
    var44 = var6;
    var6 = new var45[var8](var44, var43);
    var9 = var6 instanceof Object ? var6 : var7;
    var7 = var5.Set;
    var5 = new Array(3);
    var5[0] = var33;
    var5[1] = var32;
    var5[2] = var29;
    var6 = var7.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var7
        }
    });
    var45 = var6;
    var44 = var5;
    var5 = new var45[var7](var44, var43);
    var8 = var5 instanceof Object ? var5 : var6;
    var7 = {};
    var7.PORTRAIT = var1;
    var7[var1] = var4;
    var7.LANDSCAPE = var38;
    var7[var38] = var3;
    var6 = {};
    var6.FOCUSED = var1;
    var3 = 'FOCUSED';
    var6[var1] = var3;
    var6.PIP = var38;
    var3 = 'PIP';
    var6[var38] = var3;
    var6.GRID = var35;
    var3 = 'GRID';
    var6[var35] = var3;
    var41 = {
        'label_type': null,
        'release_phase': '',
        'label_from': null,
        'label_until': null
    };
    var3 = var37[var38];
    var3 = var36.bind(var0)(var3);
    var3 = var3.EmbeddedActivityLabelTypes;
    var3 = var3.NONE;
    var41.label_type = var3;
    var3 = new Array(0);
    var41.omit_badge_from_surfaces = var3;
    var5 = {
        'application_id': '',
        'requires_age_gate': false,
        'legacy_responsive_aspect_ratio': false
    };
    var3 = false;
    var4 = var10.UNLOCKED;
    var5.default_orientation_lock_state = var4;
    var4 = var10.UNLOCKED;
    var5.tablet_default_orientation_lock_state = var4;
    var4 = var37[var38];
    var4 = var36.bind(var0)(var4);
    var4 = var4.EmbeddedActivitySupportedPlatforms;
    var40 = var4.WEB;
    var4 = new Array(1);
    var4[0] = var40;
    var5.supported_platforms = var4;
    var4 = {};
    var40 = var37[var38];
    var40 = var36.bind(var0)(var40);
    var40 = var40.EmbeddedActivitySupportedPlatforms;
    var40 = var40.WEB;
    var4[var40] = var41;
    var40 = var37[var38];
    var40 = var36.bind(var0)(var40);
    var40 = var40.EmbeddedActivitySupportedPlatforms;
    var40 = var40.IOS;
    var4[var40] = var41;
    var40 = var37[var38];
    var40 = var36.bind(var0)(var40);
    var40 = var40.EmbeddedActivitySupportedPlatforms;
    var40 = var40.ANDROID;
    var4[var40] = var41;
    var5.client_platform_config = var4;
    var5.has_csp_exception = var3;
    var5.displays_advertisements = var3;
    var3 = new Array(0);
    var5.blocked_locales = var3;
    var3 = new Array(0);
    var5.supported_locales = var3;
    var3 = var39.GUILD_TEXT;
    var4 = new Array(3);
    var4[0] = var3;
    var3 = var39.DM;
    var4[1] = var3;
    var3 = var39.GROUP_DM;
    var4[2] = var3;
    var3 = new Array(1);
    var44 = var3;
    var43 = var4;
    var42 = 0;
    var1 = arraySpread(var44, var43, var42);
    var39 = var39.GUILD_VOICE;
    var3[var1] = var39;
    var1 = var1 + var38;
    var1 = {};
    var38 = 'normal';
    var1.NORMAL = var38;
    var38 = 'full-screen';
    var1.FULL_SCREEN = var38;
    var35 = var37[var35];
    var37 = var36.bind(var0)(var35);
    var36 = var37.fileFinishedImporting;
    var35 = 'modules/activities/Constants.tsx';
    var35 = var36.bind(var37)(var35);
    var35 = 160;
    var2.ACTIVITY_INVITE_COVER_IMAGE_SIZE = var35;
    var35 = /^https?:\\/\\ / ( ? : www\.) ? (twitch\.tv\\ / (. + ) | youtube.com\\ / watch\ ? v = ) / ;
    var2.validStreamURL = var35;
    var35 = '438122941302046720';
    var2.XBOX_ACTIVITY_APPLICATION_ID = var35;
    var35 = '1417273808645259344';
    var2.META_PRESENCE_APPLICATION_ID = var35;
    var35 = '773336526917861400';
    var2.END_GAME_APPLICATION_ID = var35;
    var35 = '814288819477020702';
    var2.FISHINGTON_APPLICATION_ID = var35;
    var2.YOUTUBE_APPLICATION_ID = var34;
    var2.WATCH_YOUTUBE_DEV_APP_ID = var33;
    var2.WATCH_YOUTUBE_QA_APP_ID = var32;
    var32 = '910224161476083792';
    var2.PUTT_PARTY_DEV_APP_ID = var32;
    var32 = '945748195256979606';
    var2.PUTT_PARTY_QA_APP_ID = var32;
    var32 = '1070087967294631976';
    var2.JAM_SPACE_APPLICATION_ID = var32;
    var2.GARTIC_PHONE_APPLICATION_ID = var31;
    var2.GARTIC_PHONE_DEV_APPLICATION_ID = var30;
    var30 = '1039835161136746497';
    var2.COLOR_TOGETHER_APPLICATION_ID = var30;
    var30 = '852509694341283871';
    var2.SPELL_CAST_APPLICATION_ID = var30;
    var30 = '903769130790969345';
    var2.LAND_IO_APPLICATION_ID = var30;
    var2.WATCH_YOUTUBE_PROD_APP_ID = var29;
    var29 = '1078728822972764312';
    var2.KWIM_APPLICATION_ID = var29;
    var29 = '947957217959759964';
    var2.BOBBLE_LEAGUE_APPLICATION_ID = var29;
    var29 = '832013003968348200';
    var2.CHECKERS_IN_THE_PARK_APP_ID = var29;
    var29 = '832012774040141894';
    var2.CHESS_IN_THE_PARK_APP_ID = var29;
    var29 = '832025144389533716';
    var2.BLAZIN_8S_APPLICATION_ID = var29;
    var29 = '755827207812677713';
    var2.POKER_NIGHT_APPLICATION_ID = var29;
    var29 = '879863686565621790';
    var2.LETTER_LEAGUE_APPLICATION_ID = var29;
    var29 = '902271654783242291';
    var2.SKETCH_HEADS_APPLICATION_ID = var29;
    var2.CHEF_SHOWDOWN_APPLICATION_ID = var28;
    var28 = '945737671223947305';
    var2.PUTT_PARTY_PROD_APPLICATION_ID = var28;
    var28 = '1010174316991762534';
    var2.KRUNKER_STAGING_APPLICATION_ID = var28;
    var28 = '1011683823555199066';
    var2.KRUNKER_STRIKE_APPLICATION_ID = var28;
    var28 = '1106787098452832296';
    var2.COLONIST_APPLICATION_ID = var28;
    var28 = '1234546995360694434';
    var2.AM_HARMONY_STG_APPLICATION_ID = var28;
    var28 = '1214629548377768066';
    var2.AM_HARMONY_PRD_APPLICATION_ID = var28;
    var2.RYTHM_APPLICATION_ID = var27;
    var2.PAPERY_MATCH_APPLICATION_ID = var26;
    var26 = '1220052815590723654';
    var2.EXORACER_APPLICATION_ID = var26;
    var26 = '1222080278672179220';
    var2.CLASH_GEM_CARD_PARTY_APPLICATION_ID = var26;
    var2.MAGIC_CIRCLE_APPLICATION_ID = var25;
    var2.DEATH_BY_AI_APPLICATION_ID = var24;
    var2.TINY_ROYALE_APP_1 = var23;
    var2.TINY_ROYALE_APP_2 = var22;
    var2.TINY_ROYALE_APP_3 = var21;
    var2.TINY_ROYALE_APP_4 = var20;
    var2.TWELVE_BULLETS_DEV = var19;
    var2.TWELVE_BULLETS_STG = var18;
    var2.TWELVE_BULLETS_PRD = var17;
    var17 = 'https://discord.sjc1.qualtrics.com/jfe/form/SV_6SvWAOxlcSRWiEu';
    var2.EMBEDDED_ACTIVITY_SURVEY_URL = var17;
    var17 = 'https://discord.com/blog/server-activities-games-voice-watch-together';
    var2.EMBEDDED_ACTIVITIES_BLOG_POST_URL = var17;
    var17 = {
        'SMALL': 64,
        'LARGE': 160
    };
    var2.ImageSizes = var17;
    var17 = ['in_development', 'activities_team', 'employee_release'];
    var2.STAFF_RELEASE_PHASES = var17;
    var2.EXCLUDE_FULL_SCREEN_APPS = var16;
    var2.SHARE_INTERACTION_APPS = var15;
    var2.ActivityFeedbackReasons = var14;
    var2.ActivityIntent = var13;
    var2.ActivityPlatform = var12;
    var2.ActivityTooltipName = var11;
    var2.OrientationLockState = var10;
    var2.APPLICATIONS_WITH_ALLOWED_POPUPS = var9;
    var2.APPLICATIONS_WITH_NO_REFFERER = var8;
    var2.ActivityScreenOrientation = var7;
    var2.ActivityLayoutMode = var6;
    var2.DEFAULT_EMBEDDED_ACTIVITY_CONFIG = var5;
    var2.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES = var4;
    var2.SUPPORTED_ACTIVITIES_CHANNEL_TYPES = var3;
    var3 = function arg0() {
        _fun29520: for (var _fun29520_ip = 0;;) switch (_fun29520_ip) {
            case 0:
                var1 = arg0;
                var0 = 'tiktok';
                if (!(var0 !== var1)) {
                    _fun29520_ip = 67;
                    continue _fun29520
                }
            case 11:
                var0 = 'photos';
                if (!(var0 !== var1)) {
                    _fun29520_ip = 59;
                    continue _fun29520
                }
            case 21:
                var0 = 'snapchat';
                if (!(var0 !== var1)) {
                    _fun29520_ip = 51;
                    continue _fun29520
                }
            case 31:
                var0 = 'instagram';
                if (!(var0 !== var1)) {
                    _fun29520_ip = 43;
                    continue _fun29520
                }
            case 39:
                var0 = undefined;
                return var0;
            case 43:
                var0 = 'instagram://';
                return var0;
            case 51:
                var0 = 'snapchat://';
                return var0;
            case 59:
                var0 = 'photos-redirect://';
                return var0;
            case 67:
                var0 = 'tiktok://';
                return var0;
        }
    };
    var2.getAppIntentScheme = var3;
    var3 = 'https://support-dev.discord.com/hc/en-us/articles/21692628851351-Private-Activity-Safety';
    var2.PRIVATE_APPS_HELP_ARTICLE = var3;
    var3 = 'disallowed_navigation_error_close_activity';
    var2.DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY = var3;
    var3 = 0.5625;
    var2.ACTIVITY_PORTRAIT_ASPECT_RATIO = var3;
    var3 = 1.7777777777777777;
    var2.ACTIVITY_LANDSCAPE_ASPECT_RATIO = var3;
    var2.ActivityPopoutWindowLayouts = var1;
    var1 = 21600000;
    var2.INVITE_EXPIRATION_MS = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 1636, 2]);