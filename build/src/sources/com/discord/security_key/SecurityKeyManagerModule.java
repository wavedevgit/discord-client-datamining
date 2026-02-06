package com.discord.security_key;

import android.app.Activity;
import android.content.Intent;
import android.os.Build;
import androidx.credentials.CredentialManager;
import androidx.lifecycle.LifecycleOwner;
import androidx.lifecycle.p;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.BaseJavaModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import os.i;
@Metadata(d1 = {"\u0000?\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0004\n\u0002\u0010\u0003\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\b\u000e*\u0001\u0018\u0018\u0000 $2\u00020\u0001:\u0001$B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010\b\u001a\u00020\tH\u0016J\u0010\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\tH\u0002J\u0010\u0010\u000f\u001a\u00020\r2\u0006\u0010\u0010\u001a\u00020\tH\u0002J\u0010\u0010\u000f\u001a\u00020\r2\u0006\u0010\u0011\u001a\u00020\u0012H\u0002J\b\u0010\u001a\u001a\u00020\rH\u0016J\b\u0010\u001b\u001a\u00020\rH\u0016J\u0018\u0010\u001c\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\t2\u0006\u0010\u001d\u001a\u00020\u000bH\u0007J\u0018\u0010\u001e\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\t2\u0006\u0010\u001d\u001a\u00020\u000bH\u0007J\u0018\u0010\u001f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\t2\u0006\u0010\u001d\u001a\u00020\u000bH\u0007J\u0018\u0010 \u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\t2\u0006\u0010\u001d\u001a\u00020\u000bH\u0007J\u0018\u0010!\u001a\u00020\r2\u0006\u0010\"\u001a\u00020\t2\u0006\u0010\u001d\u001a\u00020\u000bH\u0007J\u0018\u0010#\u001a\u00020\r2\u0006\u0010\"\u001a\u00020\t2\u0006\u0010\u001d\u001a\u00020\u000bH\u0007R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007R\u0010\u0010\n\u001a\u0004\u0018\u00010\u000bX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0013\u001a\u00020\u0014X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0015\u001a\u00020\u0016X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u0017\u001a\u00020\u0018X\u0082\u0004¢\u0006\u0004\n\u0002\u0010\u0019¨\u0006%"}, d2 = {"Lcom/discord/security_key/SecurityKeyManagerModule;", "Lcom/facebook/react/bridge/ReactContextBaseJavaModule;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "getReactContext", "()Lcom/facebook/react/bridge/ReactApplicationContext;", "getName", "", "currentPromise", "Lcom/facebook/react/bridge/Promise;", "resolve", "", "data", "reject", "message", "e", "", "webauthn", "Lcom/discord/security_key/WebAuthn;", "credentialManager", "Landroidx/credentials/CredentialManager;", "activityEventListener", "com/discord/security_key/SecurityKeyManagerModule$activityEventListener$1", "Lcom/discord/security_key/SecurityKeyManagerModule$activityEventListener$1;", "initialize", "invalidate", "register", BaseJavaModule.METHOD_TYPE_PROMISE, "authenticate", "registerSecurityKey", "authenticateSecurityKey", "registerPasskey", "requestJson", "authenticatePasskey", "Companion", "security_key_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class SecurityKeyManagerModule extends ReactContextBaseJavaModule {
    @NotNull
    private static final Companion Companion = new Companion(null);
    @Deprecated
    @NotNull
    public static final String TAG = "DCDSecurityKeyManager";
    @NotNull
    private final SecurityKeyManagerModule$activityEventListener$1 activityEventListener;
    @NotNull
    private final CredentialManager credentialManager;
    private Promise currentPromise;
    @NotNull
    private final ReactApplicationContext reactContext;
    @NotNull
    private final WebAuthn webauthn;

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0082\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/discord/security_key/SecurityKeyManagerModule$Companion;", "", "<init>", "()V", "TAG", "", "security_key_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* JADX WARN: Type inference failed for: r3v4, types: [com.discord.security_key.SecurityKeyManagerModule$activityEventListener$1] */
    public SecurityKeyManagerModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.reactContext = reactContext;
        this.webauthn = new WebAuthn(new SecurityKeyManagerModule$webauthn$1(this), new SecurityKeyManagerModule$webauthn$2(this));
        CredentialManager.a aVar = CredentialManager.f3941a;
        ReactApplicationContext reactApplicationContext = getReactApplicationContext();
        Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
        this.credentialManager = aVar.a(reactApplicationContext);
        this.activityEventListener = new BaseActivityEventListener() { // from class: com.discord.security_key.SecurityKeyManagerModule$activityEventListener$1
            @Override // com.facebook.react.bridge.BaseActivityEventListener, com.facebook.react.bridge.ActivityEventListener
            public void onActivityResult(Activity activity, int i10, int i11, Intent intent) {
                WebAuthn webAuthn;
                Intrinsics.checkNotNullParameter(activity, "activity");
                webAuthn = SecurityKeyManagerModule.this.webauthn;
                webAuthn.onActivityResult(i10, i11, intent);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void reject(String str) {
        reject(new Throwable(str));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void resolve(String str) {
        Promise promise = this.currentPromise;
        if (promise != null) {
            promise.resolve(str);
        }
        this.currentPromise = null;
    }

    @ReactMethod
    public final void authenticate(@NotNull String data, @NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(data, "data");
        Intrinsics.checkNotNullParameter(promise, "promise");
        authenticateSecurityKey(data, promise);
    }

    @ReactMethod
    public final void authenticatePasskey(@NotNull String requestJson, @NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(requestJson, "requestJson");
        Intrinsics.checkNotNullParameter(promise, "promise");
        if (this.currentPromise != null) {
            promise.reject(new Throwable("already running"));
        } else if (Build.VERSION.SDK_INT < 28) {
            promise.reject(new Throwable("device does not support passkeys"));
        } else {
            this.currentPromise = promise;
            Activity currentActivity = this.reactContext.getCurrentActivity();
            Intrinsics.checkNotNull(currentActivity, "null cannot be cast to non-null type androidx.lifecycle.LifecycleOwner");
            i.d(p.a((LifecycleOwner) currentActivity), null, null, new SecurityKeyManagerModule$authenticatePasskey$1(requestJson, this, null), 3, null);
        }
    }

    @ReactMethod
    public final void authenticateSecurityKey(@NotNull String data, @NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(data, "data");
        Intrinsics.checkNotNullParameter(promise, "promise");
        if (this.currentPromise != null) {
            promise.reject(new Throwable("already running"));
            return;
        }
        this.currentPromise = promise;
        this.webauthn.authenticateSecurityKey(data, this.reactContext.getCurrentActivity());
    }

    @Override // com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return TAG;
    }

    @NotNull
    public final ReactApplicationContext getReactContext() {
        return this.reactContext;
    }

    @Override // com.facebook.react.bridge.BaseJavaModule, com.facebook.react.bridge.NativeModule, com.facebook.react.turbomodule.core.interfaces.TurboModule
    public void initialize() {
        super.initialize();
        getReactApplicationContext().addActivityEventListener(this.activityEventListener);
    }

    @Override // com.facebook.react.bridge.BaseJavaModule, com.facebook.react.bridge.NativeModule, com.facebook.react.turbomodule.core.interfaces.TurboModule
    public void invalidate() {
        super.invalidate();
        getReactApplicationContext().removeActivityEventListener(this.activityEventListener);
    }

    @ReactMethod
    public final void register(@NotNull String data, @NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(data, "data");
        Intrinsics.checkNotNullParameter(promise, "promise");
        registerSecurityKey(data, promise);
    }

    @ReactMethod
    public final void registerPasskey(@NotNull String requestJson, @NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(requestJson, "requestJson");
        Intrinsics.checkNotNullParameter(promise, "promise");
        if (this.currentPromise != null) {
            promise.reject(new Throwable("already running"));
        } else if (Build.VERSION.SDK_INT < 28) {
            promise.reject(new Throwable("device does not support passkeys"));
        } else {
            this.currentPromise = promise;
            Activity currentActivity = this.reactContext.getCurrentActivity();
            Intrinsics.checkNotNull(currentActivity, "null cannot be cast to non-null type androidx.lifecycle.LifecycleOwner");
            i.d(p.a((LifecycleOwner) currentActivity), null, null, new SecurityKeyManagerModule$registerPasskey$1(requestJson, this, null), 3, null);
        }
    }

    @ReactMethod
    public final void registerSecurityKey(@NotNull String data, @NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(data, "data");
        Intrinsics.checkNotNullParameter(promise, "promise");
        if (this.currentPromise != null) {
            promise.reject(new Throwable("already running"));
            return;
        }
        this.currentPromise = promise;
        this.webauthn.registerSecurityKey(data, this.reactContext.getCurrentActivity());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void reject(Throwable th2) {
        Promise promise = this.currentPromise;
        if (promise != null) {
            promise.reject(th2);
        }
        this.currentPromise = null;
    }
}
