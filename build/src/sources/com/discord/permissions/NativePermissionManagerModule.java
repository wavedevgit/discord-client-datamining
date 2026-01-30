package com.discord.permissions;

import android.os.Build;
import androidx.core.app.NotificationManagerCompat;
import com.discord.crash_reporting.CrashReporting;
import com.discord.lifecycle.AppLifecycle;
import com.discord.react.utilities.NativeArrayExtensionsKt;
import com.discord.react.utilities.PromiseWrapper;
import com.facebook.react.bridge.BaseJavaModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.modules.permissions.PermissionsModule;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@ReactModule(name = "NativePermissionManager")
@Metadata(d1 = {"\u0000R\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010 \n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0019\n\u0002\u0010%\n\u0002\u0010!\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\b\u0007\u0018\u0000 :2\u00020\u0001:\u0001:B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005J\u0017\u0010\t\u001a\u00020\b2\u0006\u0010\u0007\u001a\u00020\u0006H\u0002¢\u0006\u0004\b\t\u0010\nJ+\u0010\r\u001a\u00020\b2\u0006\u0010\u0007\u001a\u00020\u00062\u0012\u0010\f\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\b0\u000bH\u0002¢\u0006\u0004\b\r\u0010\u000eJ\u001f\u0010\u0011\u001a\u00020\b2\u0006\u0010\u0010\u001a\u00020\u000f2\u0006\u0010\u0007\u001a\u00020\u0006H\u0002¢\u0006\u0004\b\u0011\u0010\u0012J%\u0010\u0015\u001a\u00020\b2\f\u0010\u0014\u001a\b\u0012\u0004\u0012\u00020\u000f0\u00132\u0006\u0010\u0007\u001a\u00020\u0006H\u0002¢\u0006\u0004\b\u0015\u0010\u0016J9\u0010\u001a\u001a\u00020\b2\u0006\u0010\u0017\u001a\u00020\u000f2\u0006\u0010\u0007\u001a\u00020\u00062\u0018\u0010\u0019\u001a\u0014\u0012\u0004\u0012\u00020\u000f\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\b0\u0018H\u0002¢\u0006\u0004\b\u001a\u0010\u001bJ\u0017\u0010\u001d\u001a\u00020\u00062\u0006\u0010\u001c\u001a\u00020\u000fH\u0002¢\u0006\u0004\b\u001d\u0010\u001eJ\u000f\u0010\u001f\u001a\u00020\u000fH\u0016¢\u0006\u0004\b\u001f\u0010 J\u0017\u0010!\u001a\u00020\b2\u0006\u0010\u0007\u001a\u00020\u0006H\u0007¢\u0006\u0004\b!\u0010\nJ\u0017\u0010\"\u001a\u00020\b2\u0006\u0010\u0007\u001a\u00020\u0006H\u0007¢\u0006\u0004\b\"\u0010\nJ\u0017\u0010#\u001a\u00020\b2\u0006\u0010\u0007\u001a\u00020\u0006H\u0007¢\u0006\u0004\b#\u0010\nJ\u0017\u0010$\u001a\u00020\b2\u0006\u0010\u0007\u001a\u00020\u0006H\u0007¢\u0006\u0004\b$\u0010\nJ\u0017\u0010%\u001a\u00020\b2\u0006\u0010\u0007\u001a\u00020\u0006H\u0007¢\u0006\u0004\b%\u0010\nJ\u0017\u0010&\u001a\u00020\b2\u0006\u0010\u0007\u001a\u00020\u0006H\u0007¢\u0006\u0004\b&\u0010\nJ\u0017\u0010'\u001a\u00020\b2\u0006\u0010\u0007\u001a\u00020\u0006H\u0007¢\u0006\u0004\b'\u0010\nJ\u0017\u0010(\u001a\u00020\b2\u0006\u0010\u0007\u001a\u00020\u0006H\u0007¢\u0006\u0004\b(\u0010\nJ\u0017\u0010)\u001a\u00020\b2\u0006\u0010\u0007\u001a\u00020\u0006H\u0007¢\u0006\u0004\b)\u0010\nJ\u0017\u0010*\u001a\u00020\b2\u0006\u0010\u0007\u001a\u00020\u0006H\u0007¢\u0006\u0004\b*\u0010\nJ\u0017\u0010+\u001a\u00020\b2\u0006\u0010\u0007\u001a\u00020\u0006H\u0007¢\u0006\u0004\b+\u0010\nJ\u0017\u0010,\u001a\u00020\b2\u0006\u0010\u0007\u001a\u00020\u0006H\u0007¢\u0006\u0004\b,\u0010\nJ\u0017\u0010-\u001a\u00020\b2\u0006\u0010\u0007\u001a\u00020\u0006H\u0007¢\u0006\u0004\b-\u0010\nJ\u0017\u0010.\u001a\u00020\b2\u0006\u0010\u0007\u001a\u00020\u0006H\u0007¢\u0006\u0004\b.\u0010\nJ\u0015\u0010/\u001a\u00020\b2\u0006\u0010\u0007\u001a\u00020\u0006¢\u0006\u0004\b/\u0010\nJ\u0015\u00100\u001a\u00020\b2\u0006\u0010\u0007\u001a\u00020\u0006¢\u0006\u0004\b0\u0010\nJ\u0015\u00101\u001a\u00020\b2\u0006\u0010\u0007\u001a\u00020\u0006¢\u0006\u0004\b1\u0010\nR&\u00104\u001a\u0014\u0012\u0004\u0012\u00020\u000f\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u000603028\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b4\u00105R\u0014\u00109\u001a\u0002068BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b7\u00108¨\u0006;"}, d2 = {"Lcom/discord/permissions/NativePermissionManagerModule;", "Lcom/facebook/react/bridge/ReactContextBaseJavaModule;", "Lcom/facebook/react/bridge/ReactApplicationContext;", "reactContext", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "Lcom/facebook/react/bridge/Promise;", BaseJavaModule.METHOD_TYPE_PROMISE, "", "requestForegroundServicePermissionPreU", "(Lcom/facebook/react/bridge/Promise;)V", "Lkotlin/Function1;", "withForegroundApp", "requireAppInForeground", "(Lcom/facebook/react/bridge/Promise;Lkotlin/jvm/functions/Function1;)V", "", "permission", "requestPermissionWithDeduplication", "(Ljava/lang/String;Lcom/facebook/react/bridge/Promise;)V", "", "permissions", "requestMultiplePermissionsWithDeduplication", "(Ljava/util/List;Lcom/facebook/react/bridge/Promise;)V", "key", "Lkotlin/Function2;", "makeRequest", "requestWithDeduplication", "(Ljava/lang/String;Lcom/facebook/react/bridge/Promise;Lkotlin/jvm/functions/Function2;)V", "permissionKey", "createMultiPromiseResolver", "(Ljava/lang/String;)Lcom/facebook/react/bridge/Promise;", "getName", "()Ljava/lang/String;", "requestCameraAuthorization", "requestMicrophoneAuthorization", "hasCameraAuthorization", "hasMicrophoneAuthorization", "hasPhotoAuthorization", "requestPhotoAuthorization", "hasContactAuthorization", "requestContactsAuthorization", "getNotificationAuthorizationStatus", "requestModifyAudioAuthorization", "hasModifyAudioAuthorization", "requestExternalStorageAuthorization", "hasExternalStorageAuthorization", "requestNotificationAuthorization", "requestForegroundServicePermissionVoiceCall", "requestForegroundServicePermissionFileUpload", "requestForegroundServicePermissionScreenShareWithMic", "", "", "pendingPermissionRequests", "Ljava/util/Map;", "Lcom/facebook/react/modules/permissions/PermissionsModule;", "getPermissionsModule", "()Lcom/facebook/react/modules/permissions/PermissionsModule;", "permissionsModule", "Companion", "permissions_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nNativePermissionManagerModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 NativePermissionManagerModule.kt\ncom/discord/permissions/NativePermissionManagerModule\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,384:1\n1869#2,2:385\n*S KotlinDebug\n*F\n+ 1 NativePermissionManagerModule.kt\ncom/discord/permissions/NativePermissionManagerModule\n*L\n285#1:385,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class NativePermissionManagerModule extends ReactContextBaseJavaModule {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final Map<String, List<Promise>> pendingPermissionRequests;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\u00020\u0005*\u00020\u0006H\u0002¨\u0006\u0007"}, d2 = {"Lcom/discord/permissions/NativePermissionManagerModule$Companion;", "", "<init>", "()V", "transformHasAuthorizationResult", "Lcom/discord/react/utilities/PromiseWrapper;", "Lcom/facebook/react/bridge/Promise;", "permissions_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final PromiseWrapper transformHasAuthorizationResult(Promise promise) {
            return new PromiseWrapper(promise, new NativePermissionManagerModule$Companion$transformHasAuthorizationResult$1(NativePermissionStatus.Companion), null, 4, null);
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public NativePermissionManagerModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.pendingPermissionRequests = new LinkedHashMap();
    }

    private final Promise createMultiPromiseResolver(String str) {
        return new NativePermissionManagerModule$createMultiPromiseResolver$1(this, str);
    }

    private final PermissionsModule getPermissionsModule() {
        NativeModule nativeModule = getReactApplicationContext().getNativeModule(PermissionsModule.class);
        Intrinsics.checkNotNull(nativeModule);
        return (PermissionsModule) nativeModule;
    }

    private final void requestForegroundServicePermissionPreU(Promise promise) {
        String lowerCase = "AUTHORIZED".toLowerCase(Locale.ROOT);
        Intrinsics.checkNotNullExpressionValue(lowerCase, "toLowerCase(...)");
        promise.resolve(lowerCase);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit requestForegroundServicePermissionScreenShareWithMic$lambda$4(NativePermissionManagerModule nativePermissionManagerModule, Promise promise, Promise it) {
        Intrinsics.checkNotNullParameter(it, "it");
        ArrayList arrayList = new ArrayList();
        if (androidx.core.content.a.a(nativePermissionManagerModule.getReactApplicationContext(), "android.permission.RECORD_AUDIO") != 0) {
            arrayList.add("android.permission.RECORD_AUDIO");
        }
        if (androidx.core.content.a.a(nativePermissionManagerModule.getReactApplicationContext(), "android.permission.FOREGROUND_SERVICE_MICROPHONE") != 0) {
            arrayList.add("android.permission.FOREGROUND_SERVICE_MICROPHONE");
        }
        if (androidx.core.content.a.a(nativePermissionManagerModule.getReactApplicationContext(), "android.permission.FOREGROUND_SERVICE_MEDIA_PROJECTION") != 0) {
            arrayList.add("android.permission.FOREGROUND_SERVICE_MEDIA_PROJECTION");
        }
        if (arrayList.isEmpty()) {
            String lowerCase = "AUTHORIZED".toLowerCase(Locale.ROOT);
            Intrinsics.checkNotNullExpressionValue(lowerCase, "toLowerCase(...)");
            promise.resolve(lowerCase);
        } else {
            nativePermissionManagerModule.requestMultiplePermissionsWithDeduplication(arrayList, promise);
        }
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit requestForegroundServicePermissionVoiceCall$lambda$3(final NativePermissionManagerModule nativePermissionManagerModule, final Promise promise, Promise it) {
        Intrinsics.checkNotNullParameter(it, "it");
        nativePermissionManagerModule.requestMicrophoneAuthorization(NativePermissionPromise.INSTANCE.generate(new Function0() { // from class: com.discord.permissions.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit requestForegroundServicePermissionVoiceCall$lambda$3$lambda$1;
                requestForegroundServicePermissionVoiceCall$lambda$3$lambda$1 = NativePermissionManagerModule.requestForegroundServicePermissionVoiceCall$lambda$3$lambda$1(NativePermissionManagerModule.this, promise);
                return requestForegroundServicePermissionVoiceCall$lambda$3$lambda$1;
            }
        }, new Function0() { // from class: com.discord.permissions.c
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit requestForegroundServicePermissionVoiceCall$lambda$3$lambda$2;
                requestForegroundServicePermissionVoiceCall$lambda$3$lambda$2 = NativePermissionManagerModule.requestForegroundServicePermissionVoiceCall$lambda$3$lambda$2(Promise.this);
                return requestForegroundServicePermissionVoiceCall$lambda$3$lambda$2;
            }
        }));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit requestForegroundServicePermissionVoiceCall$lambda$3$lambda$1(final NativePermissionManagerModule nativePermissionManagerModule, final Promise promise) {
        nativePermissionManagerModule.requireAppInForeground(promise, new Function1() { // from class: com.discord.permissions.g
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit requestForegroundServicePermissionVoiceCall$lambda$3$lambda$1$lambda$0;
                requestForegroundServicePermissionVoiceCall$lambda$3$lambda$1$lambda$0 = NativePermissionManagerModule.requestForegroundServicePermissionVoiceCall$lambda$3$lambda$1$lambda$0(NativePermissionManagerModule.this, promise, (Promise) obj);
                return requestForegroundServicePermissionVoiceCall$lambda$3$lambda$1$lambda$0;
            }
        });
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit requestForegroundServicePermissionVoiceCall$lambda$3$lambda$1$lambda$0(NativePermissionManagerModule nativePermissionManagerModule, Promise promise, Promise it) {
        Intrinsics.checkNotNullParameter(it, "it");
        nativePermissionManagerModule.requestPermissionWithDeduplication("android.permission.FOREGROUND_SERVICE_MICROPHONE", promise);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit requestForegroundServicePermissionVoiceCall$lambda$3$lambda$2(Promise promise) {
        CrashReporting.addBreadcrumb$default(CrashReporting.INSTANCE, "requestForegroundServicePermissionVoiceCall: Permission Rejected", null, null, null, false, 30, null);
        String lowerCase = "DENIED".toLowerCase(Locale.ROOT);
        Intrinsics.checkNotNullExpressionValue(lowerCase, "toLowerCase(...)");
        promise.resolve(lowerCase);
        return Unit.f33298a;
    }

    private final void requestMultiplePermissionsWithDeduplication(final List<String> list, Promise promise) {
        requestWithDeduplication(CollectionsKt.x0(CollectionsKt.U0(list), ",", null, null, 0, null, null, 62, null), promise, new Function2() { // from class: com.discord.permissions.a
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit requestMultiplePermissionsWithDeduplication$lambda$6;
                requestMultiplePermissionsWithDeduplication$lambda$6 = NativePermissionManagerModule.requestMultiplePermissionsWithDeduplication$lambda$6(NativePermissionManagerModule.this, list, (String) obj, (Promise) obj2);
                return requestMultiplePermissionsWithDeduplication$lambda$6;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit requestMultiplePermissionsWithDeduplication$lambda$6(NativePermissionManagerModule nativePermissionManagerModule, List list, String str, Promise wrappedPromise) {
        Intrinsics.checkNotNullParameter(str, "<unused var>");
        Intrinsics.checkNotNullParameter(wrappedPromise, "wrappedPromise");
        nativePermissionManagerModule.getPermissionsModule().requestMultiplePermissions(NativeArrayExtensionsKt.toNativeArray$default(list, null, 1, null), wrappedPromise);
        return Unit.f33298a;
    }

    private final void requestPermissionWithDeduplication(String str, Promise promise) {
        requestWithDeduplication(str, promise, new Function2() { // from class: com.discord.permissions.d
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit requestPermissionWithDeduplication$lambda$5;
                requestPermissionWithDeduplication$lambda$5 = NativePermissionManagerModule.requestPermissionWithDeduplication$lambda$5(NativePermissionManagerModule.this, (String) obj, (Promise) obj2);
                return requestPermissionWithDeduplication$lambda$5;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit requestPermissionWithDeduplication$lambda$5(NativePermissionManagerModule nativePermissionManagerModule, String key, Promise wrappedPromise) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(wrappedPromise, "wrappedPromise");
        nativePermissionManagerModule.getPermissionsModule().requestPermission(key, wrappedPromise);
        return Unit.f33298a;
    }

    private final void requestWithDeduplication(String str, Promise promise, Function2<? super String, ? super Promise, Unit> function2) {
        synchronized (this.pendingPermissionRequests) {
            List<Promise> list = this.pendingPermissionRequests.get(str);
            if (list != null) {
                list.add(promise);
                return;
            }
            this.pendingPermissionRequests.put(str, CollectionsKt.r(promise));
            try {
                function2.invoke(str, new PromiseWrapper(createMultiPromiseResolver(str), new NativePermissionManagerModule$requestWithDeduplication$1$wrapperPromise$1(NativePermissionStatus.Companion), null, 4, null));
                Unit unit = Unit.f33298a;
            } catch (Exception e10) {
                List<Promise> remove = this.pendingPermissionRequests.remove(str);
                if (remove != null) {
                    for (Promise promise2 : remove) {
                        String message = e10.getMessage();
                        promise2.reject("PERMISSION_REQUEST_ERROR", "Failed to request permission: " + message, e10);
                    }
                }
                throw e10;
            }
        }
    }

    private final void requireAppInForeground(Promise promise, Function1<? super Promise, Unit> function1) {
        if (!AppLifecycle.INSTANCE.isForegrounded()) {
            String lowerCase = "DENIED".toLowerCase(Locale.ROOT);
            Intrinsics.checkNotNullExpressionValue(lowerCase, "toLowerCase(...)");
            promise.resolve(lowerCase);
            return;
        }
        function1.invoke(promise);
    }

    @Override // com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return "NativePermissionManager";
    }

    @ReactMethod
    public final void getNotificationAuthorizationStatus(@NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        if (NotificationManagerCompat.g(getReactApplicationContext()).a()) {
            promise.resolve(2);
        } else {
            promise.resolve(1);
        }
    }

    @ReactMethod
    public final void hasCameraAuthorization(@NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        getPermissionsModule().checkPermission("android.permission.CAMERA", Companion.transformHasAuthorizationResult(promise));
    }

    @ReactMethod
    public final void hasContactAuthorization(@NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        getPermissionsModule().checkPermission("android.permission.READ_CONTACTS", Companion.transformHasAuthorizationResult(promise));
    }

    @ReactMethod
    public final void hasExternalStorageAuthorization(@NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        getPermissionsModule().checkPermission("android.permission.WRITE_EXTERNAL_STORAGE", Companion.transformHasAuthorizationResult(promise));
    }

    @ReactMethod
    public final void hasMicrophoneAuthorization(@NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        getPermissionsModule().checkPermission("android.permission.RECORD_AUDIO", Companion.transformHasAuthorizationResult(promise));
    }

    @ReactMethod
    public final void hasModifyAudioAuthorization(@NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        getPermissionsModule().checkPermission("android.permission.MODIFY_AUDIO_SETTINGS", Companion.transformHasAuthorizationResult(promise));
    }

    @ReactMethod
    public final void hasPhotoAuthorization(@NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        if (Build.VERSION.SDK_INT >= 33) {
            getPermissionsModule().checkPermission("android.permission.READ_MEDIA_IMAGES", Companion.transformHasAuthorizationResult(promise));
        } else {
            getPermissionsModule().checkPermission("android.permission.READ_EXTERNAL_STORAGE", Companion.transformHasAuthorizationResult(promise));
        }
    }

    @ReactMethod
    public final void requestCameraAuthorization(@NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        requestPermissionWithDeduplication("android.permission.CAMERA", promise);
    }

    @ReactMethod
    public final void requestContactsAuthorization(@NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        requestPermissionWithDeduplication("android.permission.READ_CONTACTS", promise);
    }

    @ReactMethod
    public final void requestExternalStorageAuthorization(@NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        requestPermissionWithDeduplication("android.permission.WRITE_EXTERNAL_STORAGE", promise);
    }

    public final void requestForegroundServicePermissionFileUpload(@NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        if (Build.VERSION.SDK_INT >= 34) {
            requestPermissionWithDeduplication("android.permission.FOREGROUND_SERVICE_DATA_SYNC", promise);
        } else {
            requestForegroundServicePermissionPreU(promise);
        }
    }

    public final void requestForegroundServicePermissionScreenShareWithMic(@NotNull final Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        if (Build.VERSION.SDK_INT >= 34) {
            requireAppInForeground(promise, new Function1() { // from class: com.discord.permissions.e
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit requestForegroundServicePermissionScreenShareWithMic$lambda$4;
                    requestForegroundServicePermissionScreenShareWithMic$lambda$4 = NativePermissionManagerModule.requestForegroundServicePermissionScreenShareWithMic$lambda$4(NativePermissionManagerModule.this, promise, (Promise) obj);
                    return requestForegroundServicePermissionScreenShareWithMic$lambda$4;
                }
            });
        } else {
            requestForegroundServicePermissionVoiceCall(promise);
        }
    }

    public final void requestForegroundServicePermissionVoiceCall(@NotNull final Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        if (Build.VERSION.SDK_INT >= 34) {
            requireAppInForeground(promise, new Function1() { // from class: com.discord.permissions.f
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit requestForegroundServicePermissionVoiceCall$lambda$3;
                    requestForegroundServicePermissionVoiceCall$lambda$3 = NativePermissionManagerModule.requestForegroundServicePermissionVoiceCall$lambda$3(NativePermissionManagerModule.this, promise, (Promise) obj);
                    return requestForegroundServicePermissionVoiceCall$lambda$3;
                }
            });
        } else {
            requestForegroundServicePermissionPreU(promise);
        }
    }

    @ReactMethod
    public final void requestMicrophoneAuthorization(@NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        requestPermissionWithDeduplication("android.permission.RECORD_AUDIO", promise);
    }

    @ReactMethod
    public final void requestModifyAudioAuthorization(@NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        requestPermissionWithDeduplication("android.permission.MODIFY_AUDIO_SETTINGS", promise);
    }

    @ReactMethod
    public final void requestNotificationAuthorization(@NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        if (Build.VERSION.SDK_INT >= 33) {
            requestPermissionWithDeduplication("android.permission.POST_NOTIFICATIONS", promise);
            return;
        }
        String lowerCase = "AUTHORIZED".toLowerCase(Locale.ROOT);
        Intrinsics.checkNotNullExpressionValue(lowerCase, "toLowerCase(...)");
        promise.resolve(lowerCase);
    }

    @ReactMethod
    public final void requestPhotoAuthorization(@NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        int i10 = Build.VERSION.SDK_INT;
        if (i10 >= 34) {
            requestMultiplePermissionsWithDeduplication(CollectionsKt.o("android.permission.READ_MEDIA_IMAGES", "android.permission.READ_MEDIA_VIDEO", "android.permission.READ_MEDIA_AUDIO", "android.permission.READ_MEDIA_VISUAL_USER_SELECTED"), promise);
        } else if (i10 >= 33) {
            requestMultiplePermissionsWithDeduplication(CollectionsKt.o("android.permission.READ_MEDIA_IMAGES", "android.permission.READ_MEDIA_VIDEO", "android.permission.READ_MEDIA_AUDIO"), promise);
        } else {
            requestPermissionWithDeduplication("android.permission.READ_EXTERNAL_STORAGE", promise);
        }
    }
}
