package com.discord.notifications.react;

import android.content.Context;
import com.discord.cache.Cache;
import com.discord.notifications.client.NotificationClient;
import com.discord.notifications.react.PushNotificationModule;
import com.discord.notifications.react.events.LocalNotificationEvent;
import com.discord.notifications.react.events.NotificationEvent;
import com.discord.notifications.react.events.RegisterEvent;
import com.discord.notifications.renderer.NotificationRenderer;
import com.discord.notifications.service.NotificationService;
import com.discord.react.utilities.NativeMapExtensionsKt;
import com.discord.reactevents.ReactEvents;
import com.facebook.react.bridge.BaseJavaModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.uimanager.ViewProps;
import ir.v;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\n\n\u0002\u0010\b\n\u0002\b\u0003\u0018\u0000 ,2\u00020\u0001:\u0001,B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010\b\u001a\u00020\tH\u0016J\b\u0010\n\u001a\u00020\u000bH\u0007J\u0010\u0010\f\u001a\u00020\u000b2\u0006\u0010\r\u001a\u00020\tH\u0007J\u0010\u0010\u000e\u001a\u00020\u000b2\u0006\u0010\u000f\u001a\u00020\tH\u0007J\u0010\u0010\u0010\u001a\u00020\u000b2\u0006\u0010\u0011\u001a\u00020\tH\u0007J\u0010\u0010\u0012\u001a\u00020\u000b2\u0006\u0010\u0013\u001a\u00020\u0014H\u0007J\u001c\u0010\u0015\u001a\u00020\u000b2\b\u0010\u0016\u001a\u0004\u0018\u00010\t2\b\u0010\u0017\u001a\u0004\u0018\u00010\tH\u0007J\b\u0010\u0018\u001a\u00020\u000bH\u0007J\u0010\u0010\u0019\u001a\u00020\u000b2\u0006\u0010\u001a\u001a\u00020\u001bH\u0007J\u0010\u0010\u001c\u001a\u00020\u000b2\u0006\u0010\u0013\u001a\u00020\u0014H\u0007J\u0010\u0010\u001d\u001a\u00020\u000b2\u0006\u0010\u001e\u001a\u00020\u001fH\u0007J\u0010\u0010 \u001a\u00020\u000b2\u0006\u0010\u0013\u001a\u00020\u0014H\u0007J\u0010\u0010!\u001a\u00020\u000b2\u0006\u0010\u001e\u001a\u00020\u001fH\u0007J\u0010\u0010\"\u001a\u00020\u000b2\u0006\u0010\u0013\u001a\u00020\u0014H\u0007J\u0010\u0010#\u001a\u00020\u000b2\u0006\u0010\u001e\u001a\u00020\u001fH\u0007J\u0010\u0010$\u001a\u00020\u000b2\u0006\u0010%\u001a\u00020\u001fH\u0007J\u0010\u0010&\u001a\u00020\u000b2\u0006\u0010\u0013\u001a\u00020\u0014H\u0007J\u0010\u0010'\u001a\u00020\u000b2\u0006\u0010\u0011\u001a\u00020\tH\u0007J\u0010\u0010(\u001a\u00020\u000b2\u0006\u0010)\u001a\u00020*H\u0007J\b\u0010+\u001a\u00020\u000bH\u0002R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006-"}, d2 = {"Lcom/discord/notifications/react/PushNotificationModule;", "Lcom/facebook/react/bridge/ReactContextBaseJavaModule;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "reactEvents", "Lcom/discord/reactevents/ReactEvents;", "getName", "", "onRegisterNotificationToken", "", "handleDirectReplySuccess", "notificationString", "markNotificationAsDirectReply", "channelId", "registerEventListener", "type", "getInitialNotification", BaseJavaModule.METHOD_TYPE_PROMISE, "Lcom/facebook/react/bridge/Promise;", "setCurrentUser", NotificationRenderer.USERNAME, "userId", "clearAllNotifications", "presentLocalNotification", "details", "Lcom/facebook/react/bridge/ReadableMap;", "getSoundsEnabled", "setSoundsEnabled", ViewProps.ENABLED, "", "getVibrationsEnabled", "setVibrationsEnabled", "getLightsEnabled", "setLightsEnabled", "setNotifyEveryTime", "notifyEveryTime", "shouldNotifyEveryTime", "addListener", "removeListeners", "count", "", "updateAuthState", "Companion", "notification_react_androidRelease"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nPushNotificationModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 PushNotificationModule.kt\ncom/discord/notifications/react/PushNotificationModule\n+ 2 Maps.kt\nkotlin/collections/MapsKt__MapsKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,180:1\n506#2,7:181\n465#2:188\n415#2:189\n1252#3,4:190\n*S KotlinDebug\n*F\n+ 1 PushNotificationModule.kt\ncom/discord/notifications/react/PushNotificationModule\n*L\n112#1:181,7\n113#1:188\n113#1:189\n113#1:190,4\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class PushNotificationModule extends ReactContextBaseJavaModule {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final String EVENT_TYPE_NOTIFICATION = "notification";
    @NotNull
    private static final String EVENT_TYPE_NOTIFICATION_LOCAL = "localNotification";
    @NotNull
    private static final String EVENT_TYPE_REGISTER = "register";
    @NotNull
    private final ReactApplicationContext reactContext;
    @NotNull
    private final ReactEvents reactEvents;

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\b"}, d2 = {"Lcom/discord/notifications/react/PushNotificationModule$Companion;", "", "<init>", "()V", "EVENT_TYPE_REGISTER", "", "EVENT_TYPE_NOTIFICATION", "EVENT_TYPE_NOTIFICATION_LOCAL", "notification_react_androidRelease"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public PushNotificationModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.reactContext = reactContext;
        this.reactEvents = new ReactEvents(v.a(EVENT_TYPE_REGISTER, Reflection.getOrCreateKotlinClass(RegisterEvent.class)), v.a(EVENT_TYPE_NOTIFICATION, Reflection.getOrCreateKotlinClass(NotificationEvent.class)), v.a(EVENT_TYPE_NOTIFICATION_LOCAL, Reflection.getOrCreateKotlinClass(LocalNotificationEvent.class)));
        Context applicationContext = reactContext.getApplicationContext();
        NotificationService.Companion companion = NotificationService.Companion;
        Intrinsics.checkNotNull(applicationContext);
        companion.init(applicationContext);
        NotificationClient.Companion.getInstance().setShouldDisplayNotification(new Function0() { // from class: r7.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                boolean _init_$lambda$0;
                _init_$lambda$0 = PushNotificationModule._init_$lambda$0(PushNotificationModule.this);
                return Boolean.valueOf(_init_$lambda$0);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean _init_$lambda$0(PushNotificationModule pushNotificationModule) {
        if (pushNotificationModule.reactContext.getLifecycleState() != LifecycleState.RESUMED) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit registerEventListener$lambda$2(PushNotificationModule pushNotificationModule, String token) {
        Intrinsics.checkNotNullParameter(token, "token");
        pushNotificationModule.reactEvents.emitModuleEvent(pushNotificationModule.reactContext, new RegisterEvent(token));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit registerEventListener$lambda$3(PushNotificationModule pushNotificationModule, Map notification) {
        Intrinsics.checkNotNullParameter(notification, "notification");
        pushNotificationModule.reactEvents.emitModuleEvent(pushNotificationModule.reactContext, new NotificationEvent(notification));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit registerEventListener$lambda$4(PushNotificationModule pushNotificationModule, Map notification) {
        Intrinsics.checkNotNullParameter(notification, "notification");
        pushNotificationModule.reactEvents.emitModuleEvent(pushNotificationModule.reactContext, new LocalNotificationEvent(notification));
        return Unit.f33298a;
    }

    private final void updateAuthState() {
        boolean z10 = false;
        if (Cache.getToken$default(Cache.Companion.get(), false, 1, null) != null) {
            z10 = true;
        }
        NotificationClient companion = NotificationClient.Companion.getInstance();
        ReactApplicationContext reactApplicationContext = getReactApplicationContext();
        Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
        companion.setIsAuthed(reactApplicationContext, z10);
    }

    @ReactMethod
    public final void addListener(@NotNull String type) {
        Intrinsics.checkNotNullParameter(type, "type");
    }

    @ReactMethod
    public final void clearAllNotifications() {
        NotificationClient companion = NotificationClient.Companion.getInstance();
        ReactApplicationContext reactApplicationContext = getReactApplicationContext();
        Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
        companion.clearAllNotifications(reactApplicationContext);
    }

    @ReactMethod
    public final void getInitialNotification(@NotNull Promise promise) {
        WritableNativeMap writableNativeMap;
        Intrinsics.checkNotNullParameter(promise, "promise");
        Map<String, String> pendingNotification = NotificationClient.Companion.getInstance().getPendingNotification();
        if (pendingNotification != null) {
            writableNativeMap = NativeMapExtensionsKt.toNativeMap(pendingNotification);
        } else {
            writableNativeMap = null;
        }
        promise.resolve(writableNativeMap);
    }

    @ReactMethod
    public final void getLightsEnabled(@NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        NotificationClient companion = NotificationClient.Companion.getInstance();
        ReactApplicationContext reactApplicationContext = getReactApplicationContext();
        Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
        promise.resolve(Boolean.valueOf(companion.isLightsEnabled(reactApplicationContext)));
    }

    @Override // com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return "PushNotificationAndroid";
    }

    @ReactMethod
    public final void getSoundsEnabled(@NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        NotificationClient companion = NotificationClient.Companion.getInstance();
        ReactApplicationContext reactApplicationContext = getReactApplicationContext();
        Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
        promise.resolve(Boolean.valueOf(companion.isSoundsEnabled(reactApplicationContext)));
    }

    @ReactMethod
    public final void getVibrationsEnabled(@NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        NotificationClient companion = NotificationClient.Companion.getInstance();
        ReactApplicationContext reactApplicationContext = getReactApplicationContext();
        Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
        promise.resolve(Boolean.valueOf(companion.isVibrationsEnabled(reactApplicationContext)));
    }

    @ReactMethod
    public final void handleDirectReplySuccess(@NotNull String notificationString) {
        Intrinsics.checkNotNullParameter(notificationString, "notificationString");
        NotificationClient companion = NotificationClient.Companion.getInstance();
        ReactApplicationContext reactApplicationContext = getReactApplicationContext();
        Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
        companion.onDirectReplySuccess(reactApplicationContext, notificationString);
    }

    @ReactMethod
    public final void markNotificationAsDirectReply(@NotNull String channelId) {
        Intrinsics.checkNotNullParameter(channelId, "channelId");
        Long t10 = StringsKt.t(channelId);
        if (t10 != null) {
            long longValue = t10.longValue();
            NotificationClient companion = NotificationClient.Companion.getInstance();
            ReactApplicationContext reactApplicationContext = getReactApplicationContext();
            Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
            companion.markNotificationAsDirectReply(reactApplicationContext, longValue);
        }
    }

    @ReactMethod
    public final void onRegisterNotificationToken() {
        updateAuthState();
    }

    @ReactMethod
    public final void presentLocalNotification(@NotNull ReadableMap details) {
        Intrinsics.checkNotNullParameter(details, "details");
        HashMap<String, Object> hashMap = details.toHashMap();
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        for (Map.Entry<String, Object> entry : hashMap.entrySet()) {
            if (entry.getValue() != null) {
                linkedHashMap.put(entry.getKey(), entry.getValue());
            }
        }
        LinkedHashMap linkedHashMap2 = new LinkedHashMap(o0.e(linkedHashMap.size()));
        for (Map.Entry entry2 : linkedHashMap.entrySet()) {
            Object key = entry2.getKey();
            Object value = entry2.getValue();
            Intrinsics.checkNotNull(value);
            linkedHashMap2.put(key, value);
        }
        NotificationClient.Companion.getInstance().showLocalNotification(this.reactContext, linkedHashMap2);
    }

    @ReactMethod
    public final void registerEventListener(@NotNull String type) {
        Intrinsics.checkNotNullParameter(type, "type");
        int hashCode = type.hashCode();
        if (hashCode != -690213213) {
            if (hashCode != -145165322) {
                if (hashCode == 595233003 && type.equals(EVENT_TYPE_NOTIFICATION)) {
                    NotificationClient.Companion.getInstance().setNotificationListener(new Function1() { // from class: r7.c
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj) {
                            Unit registerEventListener$lambda$3;
                            registerEventListener$lambda$3 = PushNotificationModule.registerEventListener$lambda$3(PushNotificationModule.this, (Map) obj);
                            return registerEventListener$lambda$3;
                        }
                    });
                    return;
                }
            } else if (type.equals(EVENT_TYPE_NOTIFICATION_LOCAL)) {
                NotificationClient.Companion.getInstance().setLocalNotificationListener(new Function1() { // from class: r7.d
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit registerEventListener$lambda$4;
                        registerEventListener$lambda$4 = PushNotificationModule.registerEventListener$lambda$4(PushNotificationModule.this, (Map) obj);
                        return registerEventListener$lambda$4;
                    }
                });
                return;
            }
        } else if (type.equals(EVENT_TYPE_REGISTER)) {
            NotificationClient.Companion.getInstance().setTokenListener(new Function1() { // from class: r7.b
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit registerEventListener$lambda$2;
                    registerEventListener$lambda$2 = PushNotificationModule.registerEventListener$lambda$2(PushNotificationModule.this, (String) obj);
                    return registerEventListener$lambda$2;
                }
            });
            return;
        }
        throw new IllegalArgumentException("Unknown event type: " + type);
    }

    @ReactMethod
    public final void removeListeners(int i10) {
    }

    @ReactMethod
    public final void setCurrentUser(String str, String str2) {
        NotificationClient companion = NotificationClient.Companion.getInstance();
        ReactApplicationContext reactApplicationContext = getReactApplicationContext();
        Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
        companion.setCurrentUser(reactApplicationContext, str, str2);
    }

    @ReactMethod
    public final void setLightsEnabled(boolean z10) {
        NotificationClient companion = NotificationClient.Companion.getInstance();
        ReactApplicationContext reactApplicationContext = getReactApplicationContext();
        Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
        companion.setLightsEnabled(reactApplicationContext, z10);
    }

    @ReactMethod
    public final void setNotifyEveryTime(boolean z10) {
        NotificationClient companion = NotificationClient.Companion.getInstance();
        ReactApplicationContext reactApplicationContext = getReactApplicationContext();
        Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
        companion.setNotifyEveryTime(reactApplicationContext, z10);
    }

    @ReactMethod
    public final void setSoundsEnabled(boolean z10) {
        NotificationClient companion = NotificationClient.Companion.getInstance();
        ReactApplicationContext reactApplicationContext = getReactApplicationContext();
        Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
        companion.setSoundsEnabled(reactApplicationContext, z10);
    }

    @ReactMethod
    public final void setVibrationsEnabled(boolean z10) {
        NotificationClient companion = NotificationClient.Companion.getInstance();
        ReactApplicationContext reactApplicationContext = getReactApplicationContext();
        Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
        companion.setVibrationsEnabled(reactApplicationContext, z10);
    }

    @ReactMethod
    public final void shouldNotifyEveryTime(@NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        NotificationClient companion = NotificationClient.Companion.getInstance();
        ReactApplicationContext reactApplicationContext = getReactApplicationContext();
        Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
        promise.resolve(Boolean.valueOf(companion.shouldNotifyEveryTime(reactApplicationContext)));
    }
}
