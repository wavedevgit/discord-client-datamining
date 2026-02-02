// modules/in_app_notifications/native/InAppNotificationContainer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var7 = var0.guildId;
        var6 = var0.channelId;
        var8 = var0.type;
        var5 = var0.dismissReason;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 28;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.trackWithMetadata;
        var1 = _closure1_slot9;
        var2 = var1.IN_APP_NOTIFICATION_DISMISSED;
        var1 = {};
        var1.type = var8;
        var1.guild_id = var7;
        var1.channel_id = var6;
        var1.dismiss_reason = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot28 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var6 = 0;
    var3 = var5[var6];
    var0 = undefined;
    var3 = var8.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.StyleSheet;
    var3 = 3;
    var3 = var5[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.InAppNotificationTypes;
    var _closure1_slot7 = var8;
    var8 = var3.UserSettingsSections;
    var _closure1_slot8 = var8;
    var3 = var3.AnalyticEvents;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot10 = var3;
    var3 = {
        'mass': 1,
        'overshootClamping': true,
        'damping': 27,
        'stiffness': 300
    };
    var _closure1_slot11 = var3;
    var3 = new Array(3);
    var8 = -100;
    var3[0] = var8;
    var3[1] = var6;
    var6 = 100;
    var3[2] = var6;
    var _closure1_slot12 = var3;
    var3 = {};
    var6 = 200;
    var3.duration = var6;
    var6 = 7;
    var8 = var5[var6];
    var8 = var4.bind(var0)(var8);
    var9 = var8.Easing;
    var8 = var9.in;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.Easing;
    var6 = var6.ease;
    var6 = var8.bind(var9)(var6);
    var3.easing = var6;
    var _closure1_slot13 = var3;
    var3 = {
        'extrapolateRight': 'clamp',
        'extrapolateLeft': 'clamp'
    };
    var _closure1_slot14 = var3;
    var6 = var7.create;
    var3 = {};
    var8 = {
        'marginLeft': 16,
        'marginRight': 16
    };
    var3.animatedContainer = var8;
    var8 = {
        'position': 'absolute',
        'left': 0,
        'right': 0,
        'backgroundColor': 'transparent',
        'marginTop': 8
    };
    var3.safeAreaContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot15 = var3;
    var3 = {};
    var6 = 'function InAppNotificationContainerTsx1(){const{runOnJS,setInitialized}=this.__closure;return runOnJS(setInitialized)(true);}';
    var3.code = var6;
    var _closure1_slot16 = var3;
    var3 = {};
    var6 = "function InAppNotificationContainerTsx2(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)('timeout');}}";
    var3.code = var6;
    var _closure1_slot17 = var3;
    var3 = {};
    var6 = 'function InAppNotificationContainerTsx3(){const{pressed,withSpring,ON_PRESS_SPRING_CONFIG}=this.__closure;pressed.set(withSpring(0,ON_PRESS_SPRING_CONFIG));}';
    var3.code = var6;
    var _closure1_slot18 = var3;
    var3 = {};
    var6 = 'function InAppNotificationContainerTsx4(_,success){const{runOnJS,handlePress}=this.__closure;if(success){runOnJS(handlePress)();}}';
    var3.code = var6;
    var _closure1_slot19 = var3;
    var3 = {};
    var6 = 'function InAppNotificationContainerTsx5(){const{pressed,withSpring,ON_PRESS_SPRING_CONFIG}=this.__closure;pressed.set(withSpring(1,ON_PRESS_SPRING_CONFIG));}';
    var3.code = var6;
    var _closure1_slot20 = var3;
    var3 = {};
    var6 = 'function InAppNotificationContainerTsx6(){const{runOnJS,setProgressPaused}=this.__closure;runOnJS(setProgressPaused)(false);}';
    var3.code = var6;
    var _closure1_slot21 = var3;
    var3 = {};
    var6 = "function InAppNotificationContainerTsx7(event){const{velocityY,MIN_SWIPE_VELOCITY,MIN_SWIPE_DISTANCE,notificationGestureY,withTiming,PAN_INPUT_RANGE,Easing,runOnJS,handleDismissNotification,setProgressPaused,withSpring}=this.__closure;const shouldDismiss=Math.abs(velocityY.get())>=MIN_SWIPE_VELOCITY||Math.abs(event.translationY)>=MIN_SWIPE_DISTANCE;if(shouldDismiss){notificationGestureY.set(withTiming(event.translationY>0?PAN_INPUT_RANGE[2]:PAN_INPUT_RANGE[0],{duration:200,easing:Easing.out(Easing.ease)},'animate-always',function(finished){if(finished){runOnJS(handleDismissNotification)('swipe');}}));}else{runOnJS(setProgressPaused)(false);notificationGestureY.set(withSpring(0,{damping:10,mass:1,stiffness:100,velocity:velocityY.get()},'animate-always'));}}";
    var3.code = var6;
    var _closure1_slot22 = var3;
    var3 = {};
    var6 = 'function InAppNotificationContainerTsx8(event){const{notificationGestureY,startY,velocityY}=this.__closure;notificationGestureY.set(startY.get()+event.translationY);velocityY.set(event.velocityY);}';
    var3.code = var6;
    var _closure1_slot23 = var3;
    var3 = {};
    var6 = 'function InAppNotificationContainerTsx9(){const{startY,notificationGestureY,velocityY,runOnJS,setProgressPaused}=this.__closure;startY.set(notificationGestureY.get());velocityY.set(0);runOnJS(setProgressPaused)(true);}';
    var3.code = var6;
    var _closure1_slot24 = var3;
    var3 = {};
    var6 = "function InAppNotificationContainerTsx10(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)('swipe');}}";
    var3.code = var6;
    var _closure1_slot25 = var3;
    var3 = {};
    var6 = 'function InAppNotificationContainerTsx11(){const{initialized,interpolate,notificationGestureY,PAN_INPUT_RANGE,extrapolateConfig,scale}=this.__closure;const scaleTransform=initialized?interpolate(notificationGestureY.get(),PAN_INPUT_RANGE,[0.3,1,0.3],extrapolateConfig):scale.get();const opacityTransform=initialized?interpolate(notificationGestureY.get(),PAN_INPUT_RANGE,[0,1,0],extrapolateConfig):scale.get();return{transform:[{translateY:notificationGestureY.get()},{scale:scaleTransform}],opacity:opacityTransform};}';
    var3.code = var6;
    var _closure1_slot26 = var3;
    var3 = {};
    var6 = 'function InAppNotificationContainerTsx12(){const{interpolate,pressed}=this.__closure;const tapScale=interpolate(pressed.get(),[0,1],[1,0.95]);return{transform:[{scale:tapScale}]};}';
    var3.code = var6;
    var _closure1_slot27 = var3;
    var3 = 38;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/in_app_notifications/native/InAppNotificationContainer.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun69709: for (var _fun69709_ip = 0;;) switch (_fun69709_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.notification;
                var _closure2_slot0 = var4;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot7 = var3;
                var27 = function() {
                    _fun69710: for (var _fun69710_ip = 0;;) switch (_fun69710_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 28;
                            var2 = var2[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.trackWithMetadata;
                            var1 = _closure1_slot9;
                            var3 = var1.IN_APP_NOTIFICATION_CLICKED;
                            var2 = {};
                            var6 = _closure2_slot0;
                            var6 = var6.type;
                            var2.type = var6;
                            var6 = _closure2_slot3;
                            var2.notif_guild_id = var6;
                            var6 = _closure2_slot4;
                            var2.notif_channel_id = var6;
                            var6 = global;
                            var8 = var6.Math;
                            var7 = var8.floor;
                            var6 = _closure2_slot7;
                            var9 = 'number';
                            var6 = typeof var6;
                            if (!(var9 !== var6)) {
                                _fun69710_ip = 125;
                                continue _fun69710
                            }
                        case 110:
                            var9 = _closure2_slot7;
                            var6 = var9.get;
                            var6 = var6.bind(var9)();
                            _fun69710_ip = 129;
                            continue _fun69710;
                        case 125:
                            var6 = _closure2_slot7;
                        case 129:
                            var6 = var7.bind(var8)(var6);
                            var2.percent = var6;
                            var2 = var4.bind(var5)(var3, var2);
                            var3 = _closure2_slot2;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun69710_ip = 163;
                                continue _fun69710
                            }
                        case 155:
                            var1 = _closure2_slot2;
                            var1 = var1.bind(var0)();
                        case 163:
                            return var0;
                    }
                };
                var _closure2_slot17 = var27;
                var1 = function arg0() {
                    _fun69711: for (var _fun69711_ip = 0;;) switch (_fun69711_ip) {
                        case 0:
                            var11 = arg0;
                            var _closure3_slot0 = var11;
                            var1 = var11.type;
                            var0 = _closure1_slot7;
                            var0 = var0.MESSAGE;
                            if (!(var0 !== var1)) {
                                _fun69711_ip = 616;
                                continue _fun69711
                            }
                        case 34:
                            var0 = _closure1_slot7;
                            var0 = var0.MESSAGE_FAILED_TO_SEND;
                            if (!(var0 !== var1)) {
                                _fun69711_ip = 536;
                                continue _fun69711
                            }
                        case 51:
                            var0 = _closure1_slot7;
                            var0 = var0.FORUM_THREAD_CREATED;
                            if (!(var0 !== var1)) {
                                _fun69711_ip = 438;
                                continue _fun69711
                            }
                        case 68:
                            var0 = _closure1_slot7;
                            var0 = var0.BUG_REPORTER;
                            if (!(var0 !== var1)) {
                                _fun69711_ip = 362;
                                continue _fun69711
                            }
                        case 85:
                            var0 = _closure1_slot7;
                            var0 = var0.ALERT;
                            if (!(var0 !== var1)) {
                                _fun69711_ip = 295;
                                continue _fun69711
                            }
                        case 102:
                            var0 = _closure1_slot7;
                            var0 = var0.REACTION;
                            if (!(var0 !== var1)) {
                                _fun69711_ip = 198;
                                continue _fun69711
                            }
                        case 116:
                            var0 = _closure1_slot7;
                            var0 = var0.MESSAGE_REMINDER;
                            if (!(var0 !== var1)) {
                                _fun69711_ip = 140;
                                continue _fun69711
                            }
                        case 130:
                            var0 = {};
                            var1 = null;
                            var0.content = var1;
                            return var0;
                        case 140:
                            var0 = {};
                            var1 = function() {
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 9;
                                var5 = var4[var2];
                                var0 = undefined;
                                var6 = var3.bind(var0)(var5);
                                var5 = var6.popAll;
                                var5 = var5.bind(var6)();
                                var2 = var4[var2];
                                var9 = var3.bind(var0)(var2);
                                var8 = var9.pushLazy;
                                var5 = _closure1_slot0;
                                var2 = 13;
                                var2 = var4[var2];
                                var6 = var5.bind(var0)(var2);
                                var2 = 25;
                                var5 = var4[var2];
                                var2 = var4.paths;
                                var13 = var6.bind(var0)(var5, var2);
                                var6 = {};
                                var2 = 'modal';
                                var6.presentation = var2;
                                var12 = {};
                                var11 = 'for-later-modal';
                                var14 = var9;
                                var10 = var6;
                                var2 = var14[var8](var13, var12, var11, var10, var9);
                                var2 = _closure3_slot0;
                                var6 = var2.savedMessage;
                                var7 = var2.channel;
                                var5 = var2.author;
                                var2 = 26;
                                var2 = var4[var2];
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.track;
                                var1 = _closure1_slot9;
                                var2 = var1.FOR_LATER_REMINDER_NOTIFICATION_CLICKED;
                                var1 = {};
                                var8 = var7.guild_id;
                                var1.guild_id = var8;
                                var7 = var7.id;
                                var1.channel_id = var7;
                                var6 = var6.saveData;
                                var6 = var6.messageId;
                                var1.message_id = var6;
                                var5 = var5.id;
                                var1.message_author_id = var5;
                                var5 = 'IN_APP';
                                var1.notification_type = var5;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var0.onPress = var1;
                            var6 = _closure1_slot10;
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var1 = 27;
                            var1 = var5[var1];
                            var5 = undefined;
                            var4 = var4.bind(var5)(var1);
                            var1 = {};
                            var1.notification = var11;
                            var1 = var6.bind(var5)(var4, var1);
                            var0.content = var1;
                            return var0;
                        case 198:
                            var0 = var11.channel;
                            var _closure3_slot7 = var0;
                            var0 = var11.guild;
                            var _closure3_slot8 = var0;
                            var0 = var11.message;
                            var _closure3_slot9 = var0;
                            var0 = {};
                            var1 = function() {
                                _fun69720: for (var _fun69720_ip = 0;;) switch (_fun69720_ip) {
                                    case 0:
                                        var3 = _closure1_slot28;
                                        var2 = {};
                                        var0 = _closure3_slot0;
                                        var0 = var0.type;
                                        var2.type = var0;
                                        var0 = 'notification_clicked';
                                        var2.dismissReason = var0;
                                        var0 = _closure3_slot8;
                                        var6 = null;
                                        var7 = var6 == var0;
                                        var0 = undefined;
                                        var5 = undefined;
                                        if (var7) {
                                            _fun69720_ip = 62;
                                            continue _fun69720
                                        }
                                    case 53:
                                        var7 = _closure3_slot8;
                                        var5 = var7.id;
                                    case 62:
                                        if (!(var6 == var5)) {
                                            _fun69720_ip = 75;
                                            continue _fun69720
                                        }
                                    case 66:
                                        var6 = _closure3_slot7;
                                        var5 = var6.guild_id;
                                    case 75:
                                        var2.guildId = var5;
                                        var5 = _closure3_slot7;
                                        var5 = var5.id;
                                        var2.channelId = var5;
                                        var2 = var3.bind(var0)(var2);
                                        var2 = _closure1_slot1;
                                        var3 = _closure1_slot2;
                                        var5 = 9;
                                        var5 = var3[var5];
                                        var6 = var2.bind(var0)(var5);
                                        var5 = var6.popAll;
                                        var5 = var5.bind(var6)();
                                        var5 = _closure1_slot0;
                                        var4 = 10;
                                        var4 = var3[var4];
                                        var4 = var5.bind(var0)(var4);
                                        var7 = var4.InAppNotificationNavigationExperiment;
                                        var6 = var7.getConfig;
                                        var4 = {};
                                        var8 = 'in-app-notification';
                                        var4.location = var8;
                                        var4 = var6.bind(var7)(var4);
                                        var8 = var4.enableStackNavigation;
                                        var4 = 11;
                                        var4 = var3[var4];
                                        var7 = var5.bind(var0)(var4);
                                        var6 = var7.transitionToMessage;
                                        var4 = _closure3_slot7;
                                        var5 = var4.id;
                                        var1 = _closure3_slot9;
                                        var4 = var1.id;
                                        var1 = {};
                                        var8 = !var8;
                                        var1.navigationReplace = var8;
                                        var1 = var6.bind(var7)(var5, var4, var1);
                                        var1 = 19;
                                        var1 = var3[var1];
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.clearNotification;
                                        var1 = var1.bind(var2)();
                                        return var0;
                                }
                            };
                            var0.onPress = var1;
                            var1 = function() {
                                var3 = _closure1_slot1;
                                var0 = _closure1_slot2;
                                var2 = 9;
                                var2 = var0[var2];
                                var5 = undefined;
                                var3 = var3.bind(var5)(var2);
                                var2 = var3.pushLazy;
                                var4 = _closure1_slot0;
                                var1 = 13;
                                var1 = var0[var1];
                                var4 = var4.bind(var5)(var1);
                                var1 = 12;
                                var1 = var0[var1];
                                var0 = var0.paths;
                                var1 = var4.bind(var5)(var1, var0);
                                var0 = {};
                                var4 = _closure3_slot7;
                                var4 = var4.id;
                                var0.channelId = var4;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var0.onSettingsPress = var1;
                            var6 = _closure1_slot10;
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var1 = 24;
                            var1 = var5[var1];
                            var5 = undefined;
                            var4 = var4.bind(var5)(var1);
                            var1 = {};
                            var1.notification = var11;
                            var1 = var6.bind(var5)(var4, var1);
                            var0.content = var1;
                            return var0;
                        case 295:
                            var0 = var11.channel;
                            var _closure3_slot6 = var0;
                            var0 = {};
                            var6 = _closure1_slot10;
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var1 = 23;
                            var1 = var5[var1];
                            var5 = undefined;
                            var4 = var4.bind(var5)(var1);
                            var1 = {};
                            var1.notification = var11;
                            var1 = var6.bind(var5)(var4, var1);
                            var0.content = var1;
                            var1 = function() {
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 11;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.transitionToChannel;
                                var1 = _closure3_slot6;
                                var2 = var1.id;
                                var1 = {};
                                var5 = true;
                                var1.navigationReplace = var5;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var0.onPress = var1;
                            return var0;
                        case 362:
                            var0 = {};
                            var6 = _closure1_slot10;
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 22;
                            var1 = var5[var1];
                            var5 = undefined;
                            var1 = var4.bind(var5)(var1);
                            var4 = var1.BugReporterNotification;
                            var1 = {};
                            var1.notification = var11;
                            var1 = var6.bind(var5)(var4, var1);
                            var0.content = var1;
                            var1 = function() {
                                _fun69717: for (var _fun69717_ip = 0;;) switch (_fun69717_ip) {
                                    case 0:
                                        var3 = _closure1_slot5;
                                        var2 = var3.getField;
                                        var0 = 'isReportOpen';
                                        var0 = var2.bind(var3)(var0);
                                        if (var0) {
                                            _fun69717_ip = 223;
                                            continue _fun69717
                                        }
                                    case 28:
                                        var2 = _closure1_slot28;
                                        var0 = {};
                                        var4 = _closure3_slot0;
                                        var3 = var4.type;
                                        var0.type = var3;
                                        var3 = 'notification_clicked';
                                        var0.dismissReason = var3;
                                        var6 = undefined;
                                        var0 = var2.bind(var6)(var0);
                                        var3 = _closure1_slot1;
                                        var0 = _closure1_slot2;
                                        var2 = 9;
                                        var5 = var0[var2];
                                        var7 = var3.bind(var6)(var5);
                                        var5 = var7.popAll;
                                        var5 = var5.bind(var7)();
                                        var5 = 19;
                                        var5 = var0[var5];
                                        var7 = var3.bind(var6)(var5);
                                        var5 = var7.clearNotification;
                                        var5 = var5.bind(var7)();
                                        var8 = _closure1_slot5;
                                        var7 = var8.setState;
                                        var5 = {};
                                        var9 = true;
                                        var5.isReportOpen = var9;
                                        var5 = var7.bind(var8)(var5);
                                        var2 = var0[var2];
                                        var3 = var3.bind(var6)(var2);
                                        var2 = var3.pushLazy;
                                        var5 = _closure1_slot0;
                                        var1 = 13;
                                        var1 = var0[var1];
                                        var5 = var5.bind(var6)(var1);
                                        var1 = 20;
                                        var1 = var0[var1];
                                        var0 = var0.paths;
                                        var1 = var5.bind(var6)(var1, var0);
                                        var0 = {};
                                        var5 = var4.imageUri;
                                        var0.screenshotUri = var5;
                                        var4 = var4.image;
                                        var0.screenshot = var4;
                                        var0 = var2.bind(var3)(var1, var0);
                                    case 223:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0.onPress = var1;
                            var1 = function() {
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 21;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.openUserSettings;
                                var1 = {};
                                var4 = _closure1_slot8;
                                var4 = var4.OVERVIEW;
                                var1.screen = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var0.onSettingsPress = var1;
                            return var0;
                        case 438:
                            var1 = var11.thread;
                            var _closure3_slot5 = var1;
                            var0 = {};
                            var7 = _closure1_slot10;
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var4 = 18;
                            var4 = var6[var4];
                            var6 = undefined;
                            var5 = var5.bind(var6)(var4);
                            var4 = {};
                            var4.notification = var11;
                            var4 = var7.bind(var6)(var5, var4);
                            var0.content = var4;
                            var4 = function() {
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 11;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.transitionToThread;
                                var1 = _closure3_slot5;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var0.onPress = var4;
                            var4 = function() {
                                var3 = _closure1_slot1;
                                var0 = _closure1_slot2;
                                var2 = 9;
                                var2 = var0[var2];
                                var5 = undefined;
                                var3 = var3.bind(var5)(var2);
                                var2 = var3.pushLazy;
                                var4 = _closure1_slot0;
                                var1 = 13;
                                var1 = var0[var1];
                                var4 = var4.bind(var5)(var1);
                                var1 = 12;
                                var1 = var0[var1];
                                var0 = var0.paths;
                                var1 = var4.bind(var5)(var1, var0);
                                var0 = {};
                                var4 = _closure3_slot0;
                                var4 = var4.parentChannel;
                                var4 = var4.id;
                                var0.channelId = var4;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var0.onSettingsPress = var4;
                            var4 = var1.guild_id;
                            var0.guildId = var4;
                            var1 = var1.id;
                            var0.channelId = var1;
                            return var0;
                        case 536:
                            var1 = var11.channelId;
                            var _closure3_slot3 = var1;
                            var0 = var11.messageId;
                            var _closure3_slot4 = var0;
                            var0 = {};
                            var7 = _closure1_slot10;
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var4 = 17;
                            var4 = var6[var4];
                            var6 = undefined;
                            var5 = var5.bind(var6)(var4);
                            var4 = {};
                            var4.notification = var11;
                            var4 = var7.bind(var6)(var5, var4);
                            var0.content = var4;
                            var4 = function() {
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var0 = 11;
                                var1 = var8[var0];
                                var0 = undefined;
                                var5 = var7.bind(var0)(var1);
                                var4 = var5.transitionToMessage;
                                var3 = _closure3_slot3;
                                var2 = _closure3_slot4;
                                var1 = {};
                                var6 = 16;
                                var6 = var8[var6];
                                var6 = var7.bind(var0)(var6);
                                var6 = var6.JumpTypes;
                                var6 = var6.INSTANT;
                                var1.jumpType = var6;
                                var1 = var4.bind(var5)(var3, var2, var1);
                                return var0;
                            };
                            var0.onPress = var4;
                            var0.channelId = var1;
                            return var0;
                        case 616:
                            var1 = var11.channel;
                            var _closure3_slot1 = var1;
                            var7 = var11.message;
                            var _closure3_slot2 = var7;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var0 = 8;
                            var0 = var10[var0];
                            var4 = undefined;
                            var5 = var9.bind(var4)(var0);
                            var0 = var5.getMessageAuthor;
                            var8 = var0.bind(var5)(var7);
                            var0 = {};
                            var6 = _closure1_slot10;
                            var5 = _closure1_slot1;
                            var3 = 14;
                            var3 = var10[var3];
                            var5 = var5.bind(var4)(var3);
                            var3 = {};
                            var3.notification = var11;
                            var3 = var6.bind(var4)(var5, var3);
                            var0.content = var3;
                            var3 = 15;
                            var5 = var10[var3];
                            var5 = var9.bind(var4)(var5);
                            var6 = var5.intl;
                            var5 = var6.formatToPlainString;
                            var3 = var10[var3];
                            var3 = var9.bind(var4)(var3);
                            var3 = var3.t;
                            var4 = var3.Hjp1LH;
                            var3 = {};
                            var8 = var8.nick;
                            var3.userName = var8;
                            var7 = var7.content;
                            var3.message = var7;
                            var3 = var5.bind(var6)(var4, var3);
                            var0.screenReaderAnnouncement = var3;
                            var3 = function() {
                                var4 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var0 = 9;
                                var2 = var3[var0];
                                var0 = undefined;
                                var4 = var4.bind(var0)(var2);
                                var2 = var4.popAll;
                                var2 = var2.bind(var4)();
                                var2 = _closure1_slot0;
                                var1 = 10;
                                var1 = var3[var1];
                                var1 = var2.bind(var0)(var1);
                                var5 = var1.InAppNotificationNavigationExperiment;
                                var4 = var5.getConfig;
                                var1 = {};
                                var6 = 'in-app-notification';
                                var1.location = var6;
                                var1 = var4.bind(var5)(var1);
                                var6 = var1.enableStackNavigation;
                                var1 = 11;
                                var1 = var3[var1];
                                var5 = var2.bind(var0)(var1);
                                var4 = var5.transitionToMessage;
                                var2 = _closure3_slot1;
                                var3 = var2.id;
                                var1 = _closure3_slot2;
                                var2 = var1.id;
                                var1 = {};
                                var6 = !var6;
                                var1.navigationReplace = var6;
                                var1 = var4.bind(var5)(var3, var2, var1);
                                return var0;
                            };
                            var0.onPress = var3;
                            var2 = function() {
                                var3 = _closure1_slot1;
                                var0 = _closure1_slot2;
                                var2 = 9;
                                var2 = var0[var2];
                                var5 = undefined;
                                var3 = var3.bind(var5)(var2);
                                var2 = var3.pushLazy;
                                var4 = _closure1_slot0;
                                var1 = 13;
                                var1 = var0[var1];
                                var4 = var4.bind(var5)(var1);
                                var1 = 12;
                                var1 = var0[var1];
                                var0 = var0.paths;
                                var1 = var4.bind(var5)(var1, var0);
                                var0 = {};
                                var4 = _closure3_slot1;
                                var4 = var4.id;
                                var0.channelId = var4;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var0.onSettingsPress = var2;
                            var2 = var1.guild_id;
                            var0.guildId = var2;
                            var1 = var1.id;
                            var0.channelId = var1;
                            return var0;
                    }
                };
                var1 = var1.bind(var3)(var4);
                var15 = var1.content;
                var2 = var1.screenReaderAnnouncement;
                var _closure2_slot1 = var2;
                var5 = var1.onPress;
                _closure2_slot2 = var5;
                var17 = var1.onSettingsPress;
                var14 = var1.guildId;
                _closure2_slot3 = var14;
                var6 = var1.channelId;
                _closure2_slot4 = var6;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var11 = 7;
                var1 = var7[var11];
                var9 = var5.bind(var3)(var1);
                var1 = var9.useSharedValue;
                var8 = 0;
                var21 = var1.bind(var9)(var8);
                var _closure2_slot5 = var21;
                var1 = var7[var11];
                var9 = var5.bind(var3)(var1);
                var1 = var9.useSharedValue;
                var18 = var1.bind(var9)(var8);
                var _closure2_slot6 = var18;
                var1 = var7[var11];
                var10 = var5.bind(var3)(var1);
                var9 = var10.useSharedValue;
                var1 = 100;
                var16 = var9.bind(var10)(var1);
                _closure2_slot7 = var16;
                var10 = _closure1_slot4;
                var9 = var10.useRef;
                var1 = var4.duration;
                var1 = var9.bind(var10)(var1);
                var _closure2_slot8 = var1;
                var1 = var10.useState;
                var20 = false;
                var1 = var1.bind(var10)(var20);
                var13 = _closure1_slot3;
                var12 = 2;
                var1 = var13.bind(var3)(var1, var12);
                var22 = var1[var8];
                var _closure2_slot9 = var22;
                var9 = 1;
                var1 = var1[var9];
                var _closure2_slot10 = var1;
                var1 = var10.useState;
                var1 = var1.bind(var10)(var20);
                var1 = var13.bind(var3)(var1, var12);
                var12 = var1[var8];
                var _closure2_slot11 = var12;
                var23 = var1[var9];
                var _closure2_slot12 = var23;
                var13 = var10.useCallback;
                var9 = new Array(3);
                var9[0] = var4;
                var9[1] = var14;
                var9[2] = var6;
                var1 = function(arg0) { // Environment: var0
                    _fun69723: for (var _fun69723_ip = 0;;) switch (_fun69723_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = null;
                            if (!(var2 != var0)) {
                                _fun69723_ip = 62;
                                continue _fun69723
                            }
                        case 9:
                            var3 = _closure1_slot28;
                            var1 = {};
                            var5 = _closure2_slot0;
                            var5 = var5.type;
                            var1.type = var5;
                            var5 = _closure2_slot3;
                            var1.guildId = var5;
                            var4 = _closure2_slot4;
                            var1.channelId = var4;
                            var1.dismissReason = var0;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var1);
                        case 62:
                            var1 = _closure2_slot0;
                            var1 = var1.onDismiss;
                            if (!(var2 != var1)) {
                                _fun69723_ip = 93;
                                continue _fun69723
                            }
                        case 79:
                            var1 = _closure2_slot0;
                            var0 = var1.onDismiss;
                            var0 = var0.bind(var1)();
                        case 93:
                            var0 = undefined;
                            return var0;
                    }
                };
                var25 = var13.bind(var10)(var1, var9);
                var _closure2_slot13 = var25;
                var1 = _closure1_slot1;
                var9 = 29;
                var9 = var7[var9];
                var13 = var1.bind(var3)(var9);
                var9 = function() { // Environment: var0
                    var3 = _closure2_slot6;
                    var2 = var3.set;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var4 = 30;
                    var4 = var13[var4];
                    var11 = undefined;
                    var8 = var12.bind(var11)(var4);
                    var7 = var8.withTiming;
                    var16 = _closure1_slot13;
                    var5 = function() {
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 7;
                        var0 = var2[var0];
                        var2 = undefined;
                        var3 = var1.bind(var2)(var0);
                        var1 = var3.runOnJS;
                        var0 = _closure2_slot10;
                        var1 = var1.bind(var3)(var0);
                        var0 = true;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var4 = {};
                    var10 = 7;
                    var10 = var13[var10];
                    var10 = var12.bind(var11)(var10);
                    var10 = var10.runOnJS;
                    var4.runOnJS = var10;
                    var9 = _closure2_slot10;
                    var4.setInitialized = var9;
                    var5.__closure = var4;
                    var4 = 16158991995287.0;
                    var5.__workletHash = var4;
                    var1 = _closure1_slot16;
                    var5.__initData = var1;
                    var17 = 1;
                    var15 = 'respect-motion-settings';
                    var18 = var8;
                    var14 = var5;
                    var1 = var18[var7](var17, var16, var15, var14, var13);
                    var1 = var2.bind(var3)(var1);
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 7;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.cancelAnimation;
                        var0 = _closure2_slot6;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    return var0;
                };
                var9 = var13.bind(var3)(var9);
                var13 = var10.useEffect;
                var9 = new Array(4);
                var9[0] = var22;
                var20 = var4.type;
                var9[1] = var20;
                var9[2] = var14;
                var9[3] = var6;
                var6 = function() { // Environment: var0
                    _fun69727: for (var _fun69727_ip = 0;;) switch (_fun69727_ip) {
                        case 0:
                            var0 = _closure2_slot9;
                            if (!var0) {
                                _fun69727_ip = 87;
                                continue _fun69727
                            }
                        case 10:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 26;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.track;
                            var0 = _closure1_slot9;
                            var1 = var0.IN_APP_NOTIFICATION_SHOWN;
                            var0 = {};
                            var5 = _closure2_slot0;
                            var5 = var5.type;
                            var0.type = var5;
                            var5 = _closure2_slot3;
                            var0.guild_id = var5;
                            var4 = _closure2_slot4;
                            var0.channel_id = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 87:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var13.bind(var10)(var6, var9);
                var9 = var10.useEffect;
                var6 = new Array(5);
                var6[0] = var22;
                var6[1] = var12;
                var6[2] = var4;
                var6[3] = var16;
                var6[4] = var25;
                var4 = function() { // Environment: var0
                    _fun69728: for (var _fun69728_ip = 0;;) switch (_fun69728_ip) {
                        case 0:
                            var1 = _closure2_slot9;
                            if (!var1) {
                                _fun69728_ip = 241;
                                continue _fun69728
                            }
                        case 15:
                            var1 = _closure2_slot11;
                            if (var1) {
                                _fun69728_ip = 241;
                                continue _fun69728
                            }
                        case 25:
                            var1 = global;
                            var2 = var1.Date;
                            var1 = var2.now;
                            var2 = var1.bind(var2)();
                            var4 = _closure2_slot8;
                            var1 = var4.current;
                            var1 = var2 + var1;
                            var _closure3_slot0 = var1;
                            var3 = _closure2_slot7;
                            var2 = var3.set;
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var5 = 30;
                            var5 = var13[var5];
                            var11 = undefined;
                            var8 = var12.bind(var11)(var5);
                            var7 = var8.withTiming;
                            var6 = {};
                            var4 = var4.current;
                            var6.duration = var4;
                            var10 = 7;
                            var4 = var13[var10];
                            var4 = var12.bind(var11)(var4);
                            var4 = var4.Easing;
                            var4 = var4.linear;
                            var6.easing = var4;
                            var5 = function arg0() {
                                _fun69729: for (var _fun69729_ip = 0;;) switch (_fun69729_ip) {
                                    case 0:
                                        var0 = arg0;
                                        if (!var0) {
                                            _fun69729_ip = 57;
                                            continue _fun69729
                                        }
                                    case 6:
                                        var1 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var0 = 7;
                                        var0 = var2[var0];
                                        var2 = undefined;
                                        var3 = var1.bind(var2)(var0);
                                        var1 = var3.runOnJS;
                                        var0 = _closure2_slot13;
                                        var1 = var1.bind(var3)(var0);
                                        var0 = 'timeout';
                                        var0 = var1.bind(var2)(var0);
                                    case 57:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var4 = {};
                            var10 = var13[var10];
                            var10 = var12.bind(var11)(var10);
                            var10 = var10.runOnJS;
                            var4.runOnJS = var10;
                            var9 = _closure2_slot13;
                            var4.handleDismissNotification = var9;
                            var5.__closure = var4;
                            var4 = 14095957860155.0;
                            var5.__workletHash = var4;
                            var1 = _closure1_slot17;
                            var5.__initData = var1;
                            var17 = 0;
                            var15 = 'animate-always';
                            var18 = var8;
                            var16 = var6;
                            var14 = var5;
                            var1 = var18[var7](var17, var16, var15, var14, var13);
                            var1 = var2.bind(var3)(var1);
                            var0 = function() { // Environment: var0
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 7;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.cancelAnimation;
                                var2 = _closure2_slot7;
                                var2 = var3.bind(var4)(var2);
                                var2 = _closure2_slot8;
                                var3 = _closure3_slot0;
                                var1 = global;
                                var4 = var1.Date;
                                var1 = var4.now;
                                var1 = var1.bind(var4)();
                                var1 = var3 - var1;
                                var2.current = var1;
                                return var0;
                            };
                            return var0;
                        case 241:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var9.bind(var10)(var4, var6);
                var4 = var7[var11];
                var6 = var5.bind(var3)(var4);
                var4 = var6.useSharedValue;
                var26 = var4.bind(var6)(var8);
                var _closure2_slot14 = var26;
                var4 = var7[var11];
                var6 = var5.bind(var3)(var4);
                var4 = var6.useSharedValue;
                var20 = var4.bind(var6)(var8);
                var _closure2_slot15 = var20;
                var4 = var7[var11];
                var6 = var5.bind(var3)(var4);
                var4 = var6.useSharedValue;
                var14 = var4.bind(var6)(var8);
                var _closure2_slot16 = var14;
                var6 = 31;
                var4 = var7[var6];
                var4 = var5.bind(var3)(var4);
                var8 = var4.Gesture;
                var4 = var8.Tap;
                var9 = var4.bind(var8)();
                var8 = var9.onBegin;
                var4 = function() {
                    var3 = _closure2_slot16;
                    var2 = var3.set;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 32;
                    var4 = var4[var0];
                    var0 = undefined;
                    var6 = var5.bind(var0)(var4);
                    var5 = var6.withSpring;
                    var4 = _closure1_slot11;
                    var1 = 1;
                    var1 = var5.bind(var6)(var1, var4);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var12 = {};
                var12.pressed = var14;
                var24 = 32;
                var13 = var7[var24];
                var13 = var5.bind(var3)(var13);
                var13 = var13.withSpring;
                var12.withSpring = var13;
                var13 = _closure1_slot11;
                var12.ON_PRESS_SPRING_CONFIG = var13;
                var4.__closure = var12;
                var12 = 10267808590994.0;
                var4.__workletHash = var12;
                var12 = _closure1_slot20;
                var4.__initData = var12;
                var9 = var8.bind(var9)(var4);
                var8 = var9.onEnd;
                var4 = function arg0, arg1() {
                    _fun69732: for (var _fun69732_ip = 0;;) switch (_fun69732_ip) {
                        case 0:
                            var0 = arg1;
                            if (!var0) {
                                _fun69732_ip = 52;
                                continue _fun69732
                            }
                        case 6:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 7;
                            var0 = var1[var0];
                            var1 = undefined;
                            var3 = var2.bind(var1)(var0);
                            var2 = var3.runOnJS;
                            var0 = _closure2_slot17;
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.bind(var1)();
                        case 52:
                            var0 = undefined;
                            return var0;
                    }
                };
                var12 = {};
                var28 = var7[var11];
                var28 = var5.bind(var3)(var28);
                var28 = var28.runOnJS;
                var12.runOnJS = var28;
                var12.handlePress = var27;
                var4.__closure = var12;
                var12 = 7061648361077.0;
                var4.__workletHash = var12;
                var12 = _closure1_slot19;
                var4.__initData = var12;
                var9 = var8.bind(var9)(var4);
                var8 = var9.onFinalize;
                var4 = function() {
                    var3 = _closure2_slot16;
                    var2 = var3.set;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 32;
                    var4 = var4[var0];
                    var0 = undefined;
                    var6 = var5.bind(var0)(var4);
                    var5 = var6.withSpring;
                    var4 = _closure1_slot11;
                    var1 = 0;
                    var1 = var5.bind(var6)(var1, var4);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var12 = {};
                var12.pressed = var14;
                var27 = var7[var24];
                var27 = var5.bind(var3)(var27);
                var27 = var27.withSpring;
                var12.withSpring = var27;
                var12.ON_PRESS_SPRING_CONFIG = var13;
                var4.__closure = var12;
                var12 = 2076622441525.0;
                var4.__workletHash = var12;
                var12 = _closure1_slot18;
                var4.__initData = var12;
                var12 = var8.bind(var9)(var4);
                var4 = var7[var6];
                var4 = var5.bind(var3)(var4);
                var8 = var4.Gesture;
                var4 = var8.Pan;
                var9 = var4.bind(var8)();
                var8 = var9.onBegin;
                var4 = function() {
                    var3 = _closure2_slot14;
                    var2 = var3.set;
                    var4 = _closure2_slot5;
                    var0 = var4.get;
                    var0 = var0.bind(var4)();
                    var0 = var2.bind(var3)(var0);
                    var3 = _closure2_slot15;
                    var2 = var3.set;
                    var0 = 0;
                    var0 = var2.bind(var3)(var0);
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 7;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.runOnJS;
                    var1 = _closure2_slot12;
                    var2 = var2.bind(var3)(var1);
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var13 = {};
                var13.startY = var26;
                var13.notificationGestureY = var21;
                var13.velocityY = var20;
                var27 = var7[var11];
                var27 = var5.bind(var3)(var27);
                var27 = var27.runOnJS;
                var13.runOnJS = var27;
                var13.setProgressPaused = var23;
                var4.__closure = var13;
                var13 = 8648800814448.0;
                var4.__workletHash = var13;
                var13 = _closure1_slot24;
                var4.__initData = var13;
                var9 = var8.bind(var9)(var4);
                var8 = var9.onUpdate;
                var4 = function arg0() {
                    var0 = arg0;
                    var4 = _closure2_slot5;
                    var3 = var4.set;
                    var5 = _closure2_slot14;
                    var2 = var5.get;
                    var5 = var2.bind(var5)();
                    var2 = var0.translationY;
                    var2 = var5 + var2;
                    var2 = var3.bind(var4)(var2);
                    var2 = _closure2_slot15;
                    var1 = var2.set;
                    var0 = var0.velocityY;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var13 = {};
                var13.notificationGestureY = var21;
                var13.startY = var26;
                var13.velocityY = var20;
                var4.__closure = var13;
                var13 = 12278427077719.0;
                var4.__workletHash = var13;
                var13 = _closure1_slot23;
                var4.__initData = var13;
                var9 = var8.bind(var9)(var4);
                var8 = var9.onEnd;
                var4 = function arg0() {
                    _fun69736: for (var _fun69736_ip = 0;;) switch (_fun69736_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = global;
                            var4 = var0.Math;
                            var2 = var4.abs;
                            var5 = _closure2_slot15;
                            var1 = var5.get;
                            var1 = var1.bind(var5)();
                            var2 = var2.bind(var4)(var1);
                            var1 = 100;
                            if (!(!(var2 >= var1))) {
                                _fun69736_ip = 210;
                                continue _fun69736
                            }
                        case 48:
                            var2 = var0.Math;
                            var1 = var2.abs;
                            var0 = var3.translationY;
                            var1 = var1.bind(var2)(var0);
                            var0 = 25;
                            if (!(!(var1 >= var0))) {
                                _fun69736_ip = 210;
                                continue _fun69736
                            }
                        case 81:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 7;
                            var0 = var6[var0];
                            var4 = undefined;
                            var2 = var5.bind(var4)(var0);
                            var1 = var2.runOnJS;
                            var0 = _closure2_slot12;
                            var1 = var1.bind(var2)(var0);
                            var0 = false;
                            var0 = var1.bind(var4)(var0);
                            var2 = _closure2_slot5;
                            var1 = var2.set;
                            var0 = 32;
                            var0 = var6[var0];
                            var7 = var5.bind(var4)(var0);
                            var6 = var7.withSpring;
                            var5 = {
                                'damping': 10,
                                'mass': 1,
                                'stiffness': 100
                            };
                            var4 = _closure2_slot15;
                            var0 = var4.get;
                            var0 = var0.bind(var4)();
                            var5.velocity = var0;
                            var4 = 0;
                            var0 = 'animate-always';
                            var0 = var6.bind(var7)(var4, var5, var0);
                            var0 = var1.bind(var2)(var0);
                            _fun69736_ip = 451;
                            continue _fun69736;
                        case 210:
                            var2 = _closure2_slot5;
                            var1 = var2.set;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 30;
                            var4 = var6[var4];
                            var12 = undefined;
                            var7 = var5.bind(var12)(var4);
                            var6 = var7.withTiming;
                            var3 = var3.translationY;
                            var4 = 0;
                            if (!(!(var3 > var4))) {
                                _fun69736_ip = 271;
                                continue _fun69736
                            }
                        case 261:
                            var3 = _closure1_slot12;
                            var5 = var3[var4];
                            _fun69736_ip = 282;
                            continue _fun69736;
                        case 271:
                            var4 = _closure1_slot12;
                            var3 = 2;
                            var5 = var4[var3];
                        case 282:
                            var4 = {};
                            var3 = 200;
                            var4.duration = var3;
                            var11 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var10 = 7;
                            var3 = var13[var10];
                            var3 = var11.bind(var12)(var3);
                            var14 = var3.Easing;
                            var8 = var14.out;
                            var3 = var13[var10];
                            var3 = var11.bind(var12)(var3);
                            var3 = var3.Easing;
                            var3 = var3.ease;
                            var3 = var8.bind(var14)(var3);
                            var4.easing = var3;
                            var3 = function arg0() {
                                _fun69737: for (var _fun69737_ip = 0;;) switch (_fun69737_ip) {
                                    case 0:
                                        var0 = arg0;
                                        if (!var0) {
                                            _fun69737_ip = 59;
                                            continue _fun69737
                                        }
                                    case 6:
                                        var1 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var0 = 7;
                                        var0 = var2[var0];
                                        var2 = undefined;
                                        var3 = var1.bind(var2)(var0);
                                        var1 = var3.runOnJS;
                                        var0 = _closure2_slot13;
                                        var1 = var1.bind(var3)(var0);
                                        var0 = 'swipe';
                                        var0 = var1.bind(var2)(var0);
                                    case 59:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var8 = {};
                            var10 = var13[var10];
                            var10 = var11.bind(var12)(var10);
                            var10 = var10.runOnJS;
                            var8.runOnJS = var10;
                            var9 = _closure2_slot13;
                            var8.handleDismissNotification = var9;
                            var3.__closure = var8;
                            var8 = 14854322883083.0;
                            var3.__workletHash = var8;
                            var0 = _closure1_slot25;
                            var3.__initData = var0;
                            var16 = 'animate-always';
                            var19 = var7;
                            var18 = var5;
                            var17 = var4;
                            var15 = var3;
                            var0 = var19[var6](var18, var17, var16, var15, var14);
                            var0 = var1.bind(var2)(var0);
                        case 451:
                            var0 = undefined;
                            return var0;
                    }
                };
                var13 = {
                    'velocityY': null,
                    'MIN_SWIPE_VELOCITY': 100,
                    'MIN_SWIPE_DISTANCE': 25
                };
                var13.velocityY = var20;
                var13.notificationGestureY = var21;
                var20 = 30;
                var20 = var7[var20];
                var20 = var5.bind(var3)(var20);
                var20 = var20.withTiming;
                var13.withTiming = var20;
                var20 = _closure1_slot12;
                var13.PAN_INPUT_RANGE = var20;
                var26 = var7[var11];
                var26 = var5.bind(var3)(var26);
                var26 = var26.Easing;
                var13.Easing = var26;
                var26 = var7[var11];
                var26 = var5.bind(var3)(var26);
                var26 = var26.runOnJS;
                var13.runOnJS = var26;
                var13.handleDismissNotification = var25;
                var13.setProgressPaused = var23;
                var24 = var7[var24];
                var24 = var5.bind(var3)(var24);
                var24 = var24.withSpring;
                var13.withSpring = var24;
                var4.__closure = var13;
                var13 = 15385734347253.0;
                var4.__workletHash = var13;
                var13 = _closure1_slot22;
                var4.__initData = var13;
                var9 = var8.bind(var9)(var4);
                var8 = var9.onFinalize;
                var4 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.runOnJS;
                    var1 = _closure2_slot12;
                    var2 = var2.bind(var3)(var1);
                    var1 = false;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var13 = {};
                var24 = var7[var11];
                var24 = var5.bind(var3)(var24);
                var24 = var24.runOnJS;
                var13.runOnJS = var24;
                var13.setProgressPaused = var23;
                var4.__closure = var13;
                var13 = 3053917690417.0;
                var4.__workletHash = var13;
                var13 = _closure1_slot21;
                var4.__initData = var13;
                var9 = var8.bind(var9)(var4);
                var4 = var7[var6];
                var4 = var5.bind(var3)(var4);
                var8 = var4.Gesture;
                var4 = var8.Race;
                var9 = var4.bind(var8)(var9, var12);
                var4 = var7[var11];
                var12 = var5.bind(var3)(var4);
                var8 = var12.useAnimatedStyle;
                var4 = function() {
                    _fun69739: for (var _fun69739_ip = 0;;) switch (_fun69739_ip) {
                        case 0:
                            var0 = _closure2_slot9;
                            if (var0) {
                                _fun69739_ip = 25;
                                continue _fun69739
                            }
                        case 10:
                            var1 = _closure2_slot6;
                            var0 = var1.get;
                            var4 = var0.bind(var1)();
                            _fun69739_ip = 94;
                            continue _fun69739;
                        case 25:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 7;
                            var3 = var3[var1];
                            var1 = undefined;
                            var7 = var5.bind(var1)(var3);
                            var6 = var7.interpolate;
                            var3 = _closure2_slot5;
                            var1 = var3.get;
                            var12 = var1.bind(var3)();
                            var11 = _closure1_slot12;
                            var9 = _closure1_slot14;
                            var10 = [0.3, 1, 0.3];
                            var13 = var7;
                            var4 = var13[var6](var12, var11, var10, var9, var8);
                        case 94:
                            var0 = _closure2_slot9;
                            if (var0) {
                                _fun69739_ip = 116;
                                continue _fun69739
                            }
                        case 101:
                            var1 = _closure2_slot6;
                            var0 = var1.get;
                            var1 = var0.bind(var1)();
                            _fun69739_ip = 185;
                            continue _fun69739;
                        case 116:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 7;
                            var5 = var5[var3];
                            var3 = undefined;
                            var8 = var6.bind(var3)(var5);
                            var7 = var8.interpolate;
                            var5 = _closure2_slot5;
                            var3 = var5.get;
                            var12 = var3.bind(var5)();
                            var11 = _closure1_slot12;
                            var9 = _closure1_slot14;
                            var10 = [0, 1, 0];
                            var13 = var8;
                            var1 = var13[var7](var12, var11, var10, var9, var8);
                        case 185:
                            var0 = {};
                            var3 = {};
                            var5 = _closure2_slot5;
                            var2 = var5.get;
                            var2 = var2.bind(var5)();
                            var3.translateY = var2;
                            var2 = new Array(2);
                            var2[0] = var3;
                            var3 = {};
                            var3.scale = var4;
                            var2[1] = var3;
                            var0.transform = var2;
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var13 = {};
                var13.initialized = var22;
                var22 = var7[var11];
                var22 = var5.bind(var3)(var22);
                var22 = var22.interpolate;
                var13.interpolate = var22;
                var13.notificationGestureY = var21;
                var13.PAN_INPUT_RANGE = var20;
                var20 = _closure1_slot14;
                var13.extrapolateConfig = var20;
                var13.scale = var18;
                var4.__closure = var13;
                var13 = 7615715012877.0;
                var4.__workletHash = var13;
                var13 = _closure1_slot26;
                var4.__initData = var13;
                var20 = var8.bind(var12)(var4);
                var4 = var7[var11];
                var12 = var5.bind(var3)(var4);
                var8 = var12.useAnimatedStyle;
                var4 = function() {
                    var0 = {};
                    var2 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 7;
                    var3 = var3[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.interpolate;
                    var3 = _closure2_slot16;
                    var1 = var3.get;
                    var4 = var1.bind(var3)();
                    var3 = [0, 1];
                    var1 = [1, 0.95];
                    var1 = var5.bind(var6)(var4, var3, var1);
                    var2.scale = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0.transform = var1;
                    return var0;
                };
                var13 = {};
                var18 = var7[var11];
                var18 = var5.bind(var3)(var18);
                var18 = var18.interpolate;
                var13.interpolate = var18;
                var13.pressed = var14;
                var4.__closure = var13;
                var13 = 17247148295128.0;
                var4.__workletHash = var13;
                var13 = _closure1_slot27;
                var4.__initData = var13;
                var13 = var8.bind(var12)(var4);
                var8 = var10.useEffect;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var0
                    _fun69741: for (var _fun69741_ip = 0;;) switch (_fun69741_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun69741_ip = 59;
                                continue _fun69741
                            }
                        case 13:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 33;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var2 = var1.AccessibilityAnnouncer;
                            var1 = var2.announce;
                            var0 = _closure2_slot1;
                            var0 = var1.bind(var2)(var0);
                        case 59:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var8.bind(var10)(var2, var4);
                var2 = 34;
                var2 = var7[var2];
                var8 = var5.bind(var3)(var2);
                var4 = var8.useStateFromStores;
                var10 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var10;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot6;
                    var0 = var1.isOpen;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var8 = var4.bind(var8)(var2, var0);
                var2 = _closure1_slot10;
                var0 = 35;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var4 = 36;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.SafeAreaPaddingView;
                var4 = {
                    'top': true,
                    'style': null,
                    'pointerEvents': 'box-none'
                };
                var7 = _closure1_slot15;
                var7 = var7.safeAreaContainer;
                var4.style = var7;
                var7 = undefined;
                if (!var8) {
                    _fun69709_ip = 1585;
                    continue _fun69709
                }
            case 1579:
                var7 = 'no-hide-descendants';
            case 1585:
                var4.importantForAccessibility = var7;
                var8 = _closure1_slot10;
                var14 = _closure1_slot0;
                var18 = _closure1_slot2;
                var6 = var18[var6];
                var6 = var14.bind(var3)(var6);
                var7 = var6.GestureDetector;
                var6 = {};
                var6.gesture = var9;
                var12 = _closure1_slot1;
                var9 = var18[var11];
                var9 = var12.bind(var3)(var9);
                var10 = var9.View;
                var9 = {};
                var19 = _closure1_slot15;
                var21 = var19.animatedContainer;
                var19 = new Array(2);
                var19[0] = var21;
                var19[1] = var20;
                var9.style = var19;
                var11 = var18[var11];
                var11 = var12.bind(var3)(var11);
                var12 = var11.View;
                var11 = {};
                var11.style = var13;
                var13 = 37;
                var13 = var18[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.NotificationPressable;
                var13 = {};
                var13.onLongPress = var17;
                var13.percent = var16;
                var13.children = var15;
                var13 = var8.bind(var3)(var14, var13);
                var11.children = var13;
                var11 = var8.bind(var3)(var12, var11);
                var9.children = var11;
                var9 = var8.bind(var3)(var10, var9);
                var6.children = var9;
                var6 = var8.bind(var3)(var7, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 8700, 8571, 660, 33, 3681, 3944, 4527, 8701, 3904, 8702, 1307, 8735, 1234, 4217, 8770, 8771, 8690, 8772, 5886, 9712, 9713, 9714, 9593, 795, 9727, 4268, 4064, 4058, 4926, 4042, 3121, 566, 3991, 4699, 8737, 2]);