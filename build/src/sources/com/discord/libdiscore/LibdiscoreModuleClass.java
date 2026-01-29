package com.discord.libdiscore;

import android.content.Context;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.turbomodule.core.interfaces.CallInvokerHolder;
import java.io.File;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0016\u0018\u00002\u00020\u0001B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u0011\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007H\u0082 J!\u0010\b\u001a\u00020\u00052\u0006\u0010\t\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000eH\u0082 J\u0011\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u0007H\u0082 J\b\u0010\u0014\u001a\u00020\u0005H\u0002J\u000e\u0010\u0015\u001a\u00020\u00052\u0006\u0010\t\u001a\u00020\u0016J\u000e\u0010\u0017\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u0007J\u001e\u0010\u0018\u001a\u00020\u00052\u0006\u0010\t\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000eR\u000e\u0010\u0012\u001a\u00020\u0013X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u0019"}, d2 = {"Lcom/discord/libdiscore/LibdiscoreModuleClass;", "", "<init>", "()V", "jniInitLibDiscore", "", "cacheBasePath", "", "jniBridgeJSIFunctions", "context", "Lcom/facebook/react/bridge/ReactApplicationContext;", "jsiPtr", "", "callInvokerHolder", "Lcom/facebook/react/turbomodule/core/interfaces/CallInvokerHolder;", "jniGetConfigTreatmentId", "", "experimentName", "loaded", "Ljava/util/concurrent/CountDownLatch;", "waitOrFail", "init", "Landroid/content/Context;", "getConfigTreatmentId", "bridgeJSIFunctions", "discordapp_libdiscore-mobile_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class LibdiscoreModuleClass {
    @NotNull
    private CountDownLatch loaded = new CountDownLatch(1);

    private final native void jniBridgeJSIFunctions(ReactApplicationContext reactApplicationContext, long j10, CallInvokerHolder callInvokerHolder);

    private final native int jniGetConfigTreatmentId(String str);

    private final native void jniInitLibDiscore(String str);

    private final void waitOrFail() {
        if (this.loaded.await(15000L, TimeUnit.MILLISECONDS)) {
            return;
        }
        throw new IllegalStateException("LibdiscoreModule failed to initialize within timeout. Did you forgot to call init() earlier?");
    }

    public final void bridgeJSIFunctions(@NotNull ReactApplicationContext context, long j10, @NotNull CallInvokerHolder callInvokerHolder) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(callInvokerHolder, "callInvokerHolder");
        waitOrFail();
        jniBridgeJSIFunctions(context, j10, callInvokerHolder);
    }

    public final int getConfigTreatmentId(@NotNull String experimentName) {
        Intrinsics.checkNotNullParameter(experimentName, "experimentName");
        waitOrFail();
        return jniGetConfigTreatmentId(experimentName);
    }

    public final void init(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        if (this.loaded.getCount() == 0) {
            return;
        }
        try {
            System.loadLibrary("libdiscore-rn-jsi-module");
            File file = new File(context.getCacheDir(), "libdiscore");
            if (!file.exists()) {
                file.mkdirs();
            }
            String absolutePath = file.getAbsolutePath();
            Intrinsics.checkNotNullExpressionValue(absolutePath, "getAbsolutePath(...)");
            jniInitLibDiscore(absolutePath);
            this.loaded.countDown();
        } catch (Exception e10) {
            e10.printStackTrace();
        }
    }
}
