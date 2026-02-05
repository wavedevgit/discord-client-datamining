package com.discord.samsung;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import androidx.lifecycle.LifecycleOwner;
import com.discord.misc.utilities.activity.ActivityUtilities;
import com.discord.react.utilities.NativeArrayExtensionsKt;
import com.discord.samsung.SamsungConnectActivity;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.BaseJavaModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.function.Function;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import ms.i;
import okhttp3.Response;
import or.p;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000S\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\n\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u0003\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002*\u0001\u000b\u0018\u0000 (2\u00020\u0001:\u0001(B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010\r\u001a\u00020\u000eH\u0016J\u0018\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u000e2\u0006\u0010\u0012\u001a\u00020\tH\u0007J\u0010\u0010\u0013\u001a\u00020\u00102\u0006\u0010\u0012\u001a\u00020\tH\u0007J\u0010\u0010\u0014\u001a\u00020\u00102\u0006\u0010\u0012\u001a\u00020\tH\u0007J,\u0010\u0015\u001a\u00020\u00102\u0006\u0010\u0016\u001a\u00020\u000e2\b\u0010\u0017\u001a\u0004\u0018\u00010\u000e2\b\u0010\u0018\u001a\u0004\u0018\u00010\u000e2\u0006\u0010\u0012\u001a\u00020\tH\u0007J\u0014\u0010\u0019\u001a\u00020\u00102\n\b\u0002\u0010\u001a\u001a\u0004\u0018\u00010\u001bH\u0002J\u0010\u0010\u001c\u001a\u00020\u00102\u0006\u0010\u001d\u001a\u00020\u001eH\u0002J\u0010\u0010\u001f\u001a\u00020\u00102\u0006\u0010 \u001a\u00020!H\u0002J\u0010\u0010\"\u001a\u00020\u000e2\u0006\u0010#\u001a\u00020\u000eH\u0002J\u0012\u0010$\u001a\u0004\u0018\u00010%2\u0006\u0010&\u001a\u00020'H\u0002R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007R\u0010\u0010\b\u001a\u0004\u0018\u00010\tX\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\n\u001a\u00020\u000bX\u0082\u0004¢\u0006\u0004\n\u0002\u0010\f¨\u0006)"}, d2 = {"Lcom/discord/samsung/SamsungModule;", "Lcom/facebook/react/bridge/ReactContextBaseJavaModule;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "getReactContext", "()Lcom/facebook/react/bridge/ReactApplicationContext;", "connectionPromise", "Lcom/facebook/react/bridge/Promise;", "samsungActivityEventListener", "com/discord/samsung/SamsungModule$samsungActivityEventListener$1", "Lcom/discord/samsung/SamsungModule$samsungActivityEventListener$1;", "getName", "", "checkIfOAuthRequest", "", "clientId", BaseJavaModule.METHOD_TYPE_PROMISE, "showConnectionDisclaimer", "getAccountUrlAndAuthCode", "finishSamsungAuthorization", "authCode", "location", "state", "resolveConnection", "what", "", "rejectConnection", "throwable", "", "handleAuthResult", "result", "Lcom/discord/samsung/SamsungConnectActivity$Result;", "getAccountUrlFromAuthServerUrl", "authServerUrl", "handleSamsungCallback", "Landroid/net/Uri;", "response", "Lokhttp3/Response;", "Companion", "samsung_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nSamsungModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 SamsungModule.kt\ncom/discord/samsung/SamsungModule\n+ 2 Uri.kt\nandroidx/core/net/UriKt\n*L\n1#1,303:1\n29#2:304\n*S KotlinDebug\n*F\n+ 1 SamsungModule.kt\ncom/discord/samsung/SamsungModule\n*L\n273#1:304\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class SamsungModule extends ReactContextBaseJavaModule {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Intent disclaimerIntent;
    private Promise connectionPromise;
    @NotNull
    private final ReactApplicationContext reactContext;
    @NotNull
    private final SamsungModule$samsungActivityEventListener$1 samsungActivityEventListener;

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001:\u0002\u0006\u0007B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\b"}, d2 = {"Lcom/discord/samsung/SamsungModule$Companion;", "", "<init>", "()V", "disclaimerIntent", "Landroid/content/Intent;", "RequestCode", "SamsungCallbackException", "samsung_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {

        @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0002\bÂ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0007"}, d2 = {"Lcom/discord/samsung/SamsungModule$Companion$RequestCode;", "", "<init>", "()V", "CONNECTION_DISCLAIMER", "", "AUTH", "samsung_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        private static final class RequestCode {
            public static final int AUTH = 101;
            public static final int CONNECTION_DISCLAIMER = 100;
            @NotNull
            public static final RequestCode INSTANCE = new RequestCode();

            private RequestCode() {
            }
        }

        @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0004\u0018\u00002\u00060\u0001j\u0002`\u0002B\u0019\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0004¢\u0006\u0004\b\u0006\u0010\u0007¨\u0006\b"}, d2 = {"Lcom/discord/samsung/SamsungModule$Companion$SamsungCallbackException;", "Ljava/lang/IllegalStateException;", "Lkotlin/IllegalStateException;", "errorCode", "", "errorMsg", "<init>", "(Ljava/lang/String;Ljava/lang/String;)V", "samsung_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class SamsungCallbackException extends IllegalStateException {
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public SamsungCallbackException(@NotNull String errorCode, String str) {
                super("[" + errorCode + "] " + str);
                Intrinsics.checkNotNullParameter(errorCode, "errorCode");
            }
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    static {
        Intent putExtra = new Intent("com.msc.action.samsungaccount.REQUEST_NEW_THIRD_PARTY_INTEGRATION_WITH_SAMSUNG_ACCOUNT").putExtra("client_id", BuildConfig.SAMSUNGxDISCORD_CLIENT_ID).putExtra("progress_theme", "dark");
        Intrinsics.checkNotNullExpressionValue(putExtra, "putExtra(...)");
        disclaimerIntent = putExtra;
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* JADX WARN: Type inference failed for: r2v1, types: [com.discord.samsung.SamsungModule$samsungActivityEventListener$1, com.facebook.react.bridge.ActivityEventListener] */
    public SamsungModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.reactContext = reactContext;
        ?? r22 = new BaseActivityEventListener() { // from class: com.discord.samsung.SamsungModule$samsungActivityEventListener$1
            @Override // com.facebook.react.bridge.BaseActivityEventListener, com.facebook.react.bridge.ActivityEventListener
            public void onActivityResult(Activity activity, int i10, int i11, Intent intent) {
                String str;
                Bundle extras;
                Bundle extras2;
                Intrinsics.checkNotNullParameter(activity, "activity");
                String str2 = null;
                if (i10 != 100) {
                    if (i10 != 101) {
                        super.onActivityResult(activity, i10, i11, intent);
                        return;
                    }
                    int i12 = 0;
                    if (i11 == 500) {
                        SamsungModule samsungModule = SamsungModule.this;
                        if (intent != null) {
                            i12 = intent.getIntExtra(SamsungConnectActivity.EXTRA_ATTEMPT_COUNT, 0);
                        }
                        samsungModule.handleAuthResult(new SamsungConnectActivity.Result.Failure(true, i12));
                    } else if (intent == null) {
                        SamsungModule.this.handleAuthResult(new SamsungConnectActivity.Result.Failure(false, 0, 2, null));
                    } else {
                        String stringExtra = intent.getStringExtra(SamsungConnectActivity.EXTRA_REQ_AUTH_PARAM_AUTH_CODE);
                        String str3 = "";
                        if (stringExtra == null) {
                            stringExtra = "";
                        }
                        String stringExtra2 = intent.getStringExtra(SamsungConnectActivity.EXTRA_REQ_AUTH_PARAM_AUTH_SERVER_URL);
                        if (stringExtra2 != null) {
                            str3 = stringExtra2;
                        }
                        SamsungModule.this.handleAuthResult(new SamsungConnectActivity.Result.Success(stringExtra, str3));
                    }
                } else if (i11 == -1) {
                    SamsungModule.resolveConnection$default(SamsungModule.this, null, 1, null);
                } else {
                    if (intent != null && (extras2 = intent.getExtras()) != null) {
                        str = extras2.getString("error_message");
                    } else {
                        str = null;
                    }
                    if (intent != null && (extras = intent.getExtras()) != null) {
                        str2 = extras.getString("error_code");
                    }
                    SamsungModule.this.rejectConnection(new Throwable("Connection requires disclaimer acceptance. [" + str2 + "] " + str));
                }
            }
        };
        this.samsungActivityEventListener = r22;
        getReactApplicationContext().addActivityEventListener(r22);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getAccountUrlAndAuthCode$lambda$1(SamsungModule samsungModule, Throwable th2) {
        Intrinsics.checkNotNull(th2);
        samsungModule.rejectConnection(th2);
        return Unit.f31988a;
    }

    private final String getAccountUrlFromAuthServerUrl(String str) {
        String x12 = StringsKt.x1(str, 2);
        int hashCode = x12.hashCode();
        if (hashCode != 3179) {
            if (hashCode != 3248) {
                if (hashCode == 3742 && x12.equals("us")) {
                    return "https://us.account.samsung.com";
                }
                return "https://account.samsung.com";
            }
            x12.equals("eu");
            return "https://account.samsung.com";
        } else if (!x12.equals("cn")) {
            return "https://account.samsung.com";
        } else {
            return "https://account.samsung.cn";
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void handleAuthResult(SamsungConnectActivity.Result result) {
        if (result instanceof SamsungConnectActivity.Result.Success) {
            SamsungConnectActivity.Result.Success success = (SamsungConnectActivity.Result.Success) result;
            resolveConnection(NativeArrayExtensionsKt.nativeArrayOf(getAccountUrlFromAuthServerUrl(success.getServerUrl()), success.getAuthCode()));
        } else if (result instanceof SamsungConnectActivity.Result.Failure) {
            SamsungConnectActivity.Result.Failure failure = (SamsungConnectActivity.Result.Failure) result;
            if (failure.isRetryAllowed() && failure.getAttemptCount() < 2) {
                Activity currentActivity = this.reactContext.getCurrentActivity();
                if (currentActivity == null) {
                    rejectConnection(new Throwable("No current activity to retry Samsung auth"));
                    return;
                } else {
                    ActivityUtilities.startActivityForResultAsyncWithFuture$default(ActivityUtilities.INSTANCE, currentActivity, SamsungConnectActivity.Companion.getIntent(currentActivity, failure.getAttemptCount()), 101, null, 8, null).exceptionally(new Function() { // from class: com.discord.samsung.b
                        @Override // java.util.function.Function
                        public final Object apply(Object obj) {
                            Unit handleAuthResult$lambda$2;
                            handleAuthResult$lambda$2 = SamsungModule.handleAuthResult$lambda$2(SamsungModule.this, (Throwable) obj);
                            return handleAuthResult$lambda$2;
                        }
                    });
                    return;
                }
            }
            int attemptCount = failure.getAttemptCount();
            boolean isRetryAllowed = failure.isRetryAllowed();
            rejectConnection(new Throwable("Attempts: " + attemptCount + ", Retry: " + isRetryAllowed));
        } else {
            throw new p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit handleAuthResult$lambda$2(SamsungModule samsungModule, Throwable th2) {
        Intrinsics.checkNotNull(th2);
        samsungModule.rejectConnection(th2);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Uri handleSamsungCallback(Response response) {
        Uri uri;
        String query;
        String str = null;
        String D0 = Response.D0(response, "Location", null, 2, null);
        if (D0 != null) {
            uri = Uri.parse(D0);
        } else {
            uri = null;
        }
        boolean z10 = false;
        if (uri != null && (query = uri.getQuery()) != null) {
            z10 = StringsKt.V(query, "error", false, 2, null);
        }
        if (!z10 && (response.isSuccessful() || response.F0())) {
            return uri;
        }
        String str2 = (uri == null || (str2 = uri.getQueryParameter("error")) == null) ? "unknown" : "unknown";
        if (uri != null) {
            str = uri.getQueryParameter("error_description");
        }
        throw new Companion.SamsungCallbackException(str2, str);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void rejectConnection(Throwable th2) {
        Promise promise = this.connectionPromise;
        if (promise != null) {
            promise.reject(th2);
        }
        this.connectionPromise = null;
    }

    private final void resolveConnection(Object obj) {
        Promise promise = this.connectionPromise;
        if (promise != null) {
            promise.resolve(obj);
        }
        this.connectionPromise = null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ void resolveConnection$default(SamsungModule samsungModule, Object obj, int i10, Object obj2) {
        if ((i10 & 1) != 0) {
            obj = null;
        }
        samsungModule.resolveConnection(obj);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit showConnectionDisclaimer$lambda$0(SamsungModule samsungModule, Throwable th2) {
        Intrinsics.checkNotNull(th2);
        samsungModule.rejectConnection(th2);
        return Unit.f31988a;
    }

    /* JADX WARN: Code restructure failed: missing block: B:7:0x0021, code lost:
        if (kotlin.text.StringsKt.A(android.os.Build.MANUFACTURER, "samsung", true) != false) goto L7;
     */
    @com.facebook.react.bridge.ReactMethod
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final void checkIfOAuthRequest(@org.jetbrains.annotations.NotNull java.lang.String r3, @org.jetbrains.annotations.NotNull com.facebook.react.bridge.Promise r4) {
        /*
            r2 = this;
            java.lang.String r0 = "clientId"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r3, r0)
            java.lang.String r0 = "promise"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r0)
            java.lang.String r0 = "591317049637339146"
            boolean r3 = kotlin.jvm.internal.Intrinsics.areEqual(r3, r0)
            if (r3 == 0) goto L24
            int r3 = android.os.Build.VERSION.SDK_INT
            r0 = 28
            if (r3 < r0) goto L24
            java.lang.String r3 = android.os.Build.MANUFACTURER
            java.lang.String r0 = "samsung"
            r1 = 1
            boolean r3 = kotlin.text.StringsKt.A(r3, r0, r1)
            if (r3 == 0) goto L24
            goto L25
        L24:
            r1 = 0
        L25:
            java.lang.Boolean r3 = java.lang.Boolean.valueOf(r1)
            r4.resolve(r3)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.samsung.SamsungModule.checkIfOAuthRequest(java.lang.String, com.facebook.react.bridge.Promise):void");
    }

    @ReactMethod
    public final void finishSamsungAuthorization(@NotNull String authCode, String str, String str2, @NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(authCode, "authCode");
        Intrinsics.checkNotNullParameter(promise, "promise");
        this.connectionPromise = promise;
        Activity currentActivity = this.reactContext.getCurrentActivity();
        Intrinsics.checkNotNull(currentActivity, "null cannot be cast to non-null type androidx.lifecycle.LifecycleOwner");
        i.d(androidx.lifecycle.p.a((LifecycleOwner) currentActivity), null, null, new SamsungModule$finishSamsungAuthorization$1(str, this, str2, authCode, null), 3, null);
    }

    @ReactMethod
    public final void getAccountUrlAndAuthCode(@NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        this.connectionPromise = promise;
        Activity currentActivity = getReactApplicationContext().getCurrentActivity();
        if (currentActivity == null) {
            rejectConnection(new IllegalStateException("No current activity to start Samsung auth"));
        } else {
            ActivityUtilities.INSTANCE.startActivityForResultAsyncWithFuture(currentActivity, SamsungConnectActivity.Companion.getIntent$default(SamsungConnectActivity.Companion, currentActivity, 0, 2, null), 101, Bundle.EMPTY).exceptionally(new Function() { // from class: com.discord.samsung.a
                @Override // java.util.function.Function
                public final Object apply(Object obj) {
                    Unit accountUrlAndAuthCode$lambda$1;
                    accountUrlAndAuthCode$lambda$1 = SamsungModule.getAccountUrlAndAuthCode$lambda$1(SamsungModule.this, (Throwable) obj);
                    return accountUrlAndAuthCode$lambda$1;
                }
            });
        }
    }

    @Override // com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return "Samsung";
    }

    @NotNull
    public final ReactApplicationContext getReactContext() {
        return this.reactContext;
    }

    @ReactMethod
    public final void showConnectionDisclaimer(@NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        this.connectionPromise = promise;
        Activity currentActivity = getReactApplicationContext().getCurrentActivity();
        if (currentActivity == null) {
            rejectConnection(new IllegalStateException("No current activity to start Samsung disclaimer"));
        } else {
            ActivityUtilities.INSTANCE.startActivityForResultAsyncWithFuture(currentActivity, disclaimerIntent, 100, Bundle.EMPTY).exceptionally(new Function() { // from class: com.discord.samsung.c
                @Override // java.util.function.Function
                public final Object apply(Object obj) {
                    Unit showConnectionDisclaimer$lambda$0;
                    showConnectionDisclaimer$lambda$0 = SamsungModule.showConnectionDisclaimer$lambda$0(SamsungModule.this, (Throwable) obj);
                    return showConnectionDisclaimer$lambda$0;
                }
            });
        }
    }
}
