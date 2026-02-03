package com.discord.ads;

import com.discord.codegen.NativeAdsModuleSpec;
import com.discord.logging.Log;
import com.discord.react.utilities.NativeMapExtensionsKt;
import com.facebook.react.bridge.BaseJavaModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.WritableNativeMap;
import com.google.android.gms.ads.identifier.AdvertisingIdClient;
import com.google.common.util.concurrent.ListenableFuture;
import com.google.common.util.concurrent.SettableFuture;
import com.google.common.util.concurrent.b;
import com.google.common.util.concurrent.c;
import java.util.concurrent.CancellationException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicReference;
import jr.v;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00006\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\u0018\u0000 \u00152\u00020\u0001:\u0001\u0015B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0010\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u0010H\u0016J\u000e\u0010\u0011\u001a\b\u0012\u0004\u0012\u00020\f0\u000bH\u0002J\u0010\u0010\u0012\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u0010H\u0002J\b\u0010\u0013\u001a\u00020\u000eH\u0002J\b\u0010\u0014\u001a\u00020\u000eH\u0016R\u0016\u0010\u0006\u001a\n \b*\u0004\u0018\u00010\u00070\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u001a\u0010\t\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\f0\u000b0\nX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0016"}, d2 = {"Lcom/discord/ads/AdsModule;", "Lcom/discord/codegen/NativeAdsModuleSpec;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "adExecutor", "Ljava/util/concurrent/ExecutorService;", "kotlin.jvm.PlatformType", "currentOperation", "Ljava/util/concurrent/atomic/AtomicReference;", "Lcom/google/common/util/concurrent/ListenableFuture;", "Lcom/google/android/gms/ads/identifier/AdvertisingIdClient$Info;", "getGoogleAdvertisingId", "", BaseJavaModule.METHOD_TYPE_PROMISE, "Lcom/facebook/react/bridge/Promise;", "getAdvertisingIdInfoAsync", "resolveWithNullId", "cleanupCurrentOperation", "invalidate", "Companion", "ads_androidRelease"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AdsModule extends NativeAdsModuleSpec {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final String TAG = "AdsModule";
    private final ExecutorService adExecutor;
    @NotNull
    private final AtomicReference<ListenableFuture> currentOperation;

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/discord/ads/AdsModule$Companion;", "", "<init>", "()V", "TAG", "", "ads_androidRelease"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public AdsModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.adExecutor = Executors.newSingleThreadExecutor();
        this.currentOperation = new AtomicReference<>(null);
    }

    private final void cleanupCurrentOperation() {
        ListenableFuture andSet = this.currentOperation.getAndSet(null);
        if (andSet != null && !andSet.isDone()) {
            Log.i$default(Log.INSTANCE, TAG, "Stopping current google advertising ID operation", (Throwable) null, 4, (Object) null);
            andSet.cancel(true);
        }
    }

    private final ListenableFuture getAdvertisingIdInfoAsync() {
        final SettableFuture z10 = SettableFuture.z();
        this.adExecutor.execute(new Runnable() { // from class: com.discord.ads.a
            @Override // java.lang.Runnable
            public final void run() {
                AdsModule.getAdvertisingIdInfoAsync$lambda$1$lambda$0(SettableFuture.this, this);
            }
        });
        Intrinsics.checkNotNullExpressionValue(z10, "also(...)");
        return z10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void getAdvertisingIdInfoAsync$lambda$1$lambda$0(SettableFuture settableFuture, AdsModule adsModule) {
        try {
            settableFuture.x(AdvertisingIdClient.a(adsModule.getReactApplicationContext()));
        } catch (Exception e10) {
            String message = e10.getMessage();
            settableFuture.y(new Exception("Error getting google advertising ID info: " + message, e10));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void resolveWithNullId(Promise promise) {
        promise.resolve(NativeMapExtensionsKt.nativeMapOf(v.a("googleAdvertisingId", null), v.a("isLimitAdTrackingEnabled", Boolean.TRUE)));
    }

    @Override // com.discord.codegen.NativeAdsModuleSpec
    public void getGoogleAdvertisingId(@NotNull final Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        cleanupCurrentOperation();
        ListenableFuture advertisingIdInfoAsync = getAdvertisingIdInfoAsync();
        this.currentOperation.set(advertisingIdInfoAsync);
        c.a(advertisingIdInfoAsync, new b() { // from class: com.discord.ads.AdsModule$getGoogleAdvertisingId$1
            @Override // com.google.common.util.concurrent.b
            public void onFailure(Throwable t10) {
                AtomicReference atomicReference;
                Intrinsics.checkNotNullParameter(t10, "t");
                atomicReference = AdsModule.this.currentOperation;
                atomicReference.set(null);
                if (t10 instanceof CancellationException) {
                    Log.i$default(Log.INSTANCE, "AdsModule", "Google advertising ID operation was cancelled", (Throwable) null, 4, (Object) null);
                    AdsModule.this.resolveWithNullId(promise);
                    return;
                }
                Log log = Log.INSTANCE;
                String message = t10.getMessage();
                log.e("AdsModule", "Error getting google advertising ID: " + message, t10);
                promise.reject("err", "Failed to get google advertising ID", t10);
            }

            @Override // com.google.common.util.concurrent.b
            public void onSuccess(AdvertisingIdClient.Info adInfo) {
                AtomicReference atomicReference;
                Intrinsics.checkNotNullParameter(adInfo, "adInfo");
                atomicReference = AdsModule.this.currentOperation;
                atomicReference.set(null);
                String a10 = adInfo.a();
                boolean b10 = adInfo.b();
                WritableNativeMap nativeMapOf = NativeMapExtensionsKt.nativeMapOf(v.a("googleAdvertisingId", b10 ? null : a10), v.a("isLimitAdTrackingEnabled", Boolean.valueOf(b10)));
                if (b10) {
                    Log.i$default(Log.INSTANCE, "AdsModule", "User has limited ad tracking, returning null ID", (Throwable) null, 4, (Object) null);
                } else {
                    Log.i$default(Log.INSTANCE, "AdsModule", "Successfully retrieved google advertising ID", (Throwable) null, 4, (Object) null);
                }
                promise.resolve(nativeMapOf);
            }
        }, this.adExecutor);
    }

    @Override // com.facebook.react.bridge.BaseJavaModule, com.facebook.react.bridge.NativeModule, com.facebook.react.turbomodule.core.interfaces.TurboModule
    public void invalidate() {
        cleanupCurrentOperation();
        this.adExecutor.shutdown();
        super.invalidate();
    }
}
