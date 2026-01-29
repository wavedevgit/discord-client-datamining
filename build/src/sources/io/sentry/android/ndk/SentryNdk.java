package io.sentry.android.ndk;

import io.sentry.android.core.SentryAndroidOptions;
import io.sentry.android.core.c2;
import io.sentry.ndk.NativeModuleListLoader;
import io.sentry.ndk.NdkOptions;
import io.sentry.util.y;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class SentryNdk {
    @NotNull
    private static final CountDownLatch loadLibraryLatch = new CountDownLatch(1);

    static {
        new Thread(new Runnable() { // from class: io.sentry.android.ndk.j
            @Override // java.lang.Runnable
            public final void run() {
                SentryNdk.a();
            }
        }, "SentryNdkLoadLibs").start();
    }

    private SentryNdk() {
    }

    public static /* synthetic */ void a() {
        try {
            io.sentry.ndk.SentryNdk.loadNativeLibraries();
        } catch (Throwable unused) {
        }
        loadLibraryLatch.countDown();
    }

    public static void close() {
        try {
            if (loadLibraryLatch.await(2000L, TimeUnit.MILLISECONDS)) {
                io.sentry.ndk.SentryNdk.close();
                return;
            }
            throw new IllegalStateException("Timeout waiting for Sentry NDK library to load");
        } catch (InterruptedException e10) {
            throw new IllegalStateException("Thread interrupted while waiting for NDK libs to be loaded", e10);
        }
    }

    public static void init(@NotNull SentryAndroidOptions sentryAndroidOptions) {
        k.a(sentryAndroidOptions.getSdkVersion());
        try {
            if (loadLibraryLatch.await(2000L, TimeUnit.MILLISECONDS)) {
                NdkOptions ndkOptions = new NdkOptions((String) y.c(sentryAndroidOptions.getDsn(), "DSN is required for sentry-ndk"), sentryAndroidOptions.isDebug(), (String) y.c(sentryAndroidOptions.getOutboxPath(), "outbox path is required for sentry-ndk"), sentryAndroidOptions.getRelease(), sentryAndroidOptions.getEnvironment(), sentryAndroidOptions.getDist(), sentryAndroidOptions.getMaxBreadcrumbs(), sentryAndroidOptions.getNativeSdkName());
                int ndkHandlerStrategy = sentryAndroidOptions.getNdkHandlerStrategy();
                if (ndkHandlerStrategy == c2.SENTRY_HANDLER_STRATEGY_DEFAULT.getValue()) {
                    ndkOptions.setNdkHandlerStrategy(io.sentry.ndk.b.SENTRY_HANDLER_STRATEGY_DEFAULT);
                } else if (ndkHandlerStrategy == c2.SENTRY_HANDLER_STRATEGY_CHAIN_AT_START.getValue()) {
                    ndkOptions.setNdkHandlerStrategy(io.sentry.ndk.b.SENTRY_HANDLER_STRATEGY_CHAIN_AT_START);
                }
                Double tracesSampleRate = sentryAndroidOptions.getTracesSampleRate();
                if (tracesSampleRate == null) {
                    ndkOptions.setTracesSampleRate(0.0f);
                } else {
                    ndkOptions.setTracesSampleRate(tracesSampleRate.floatValue());
                }
                io.sentry.ndk.SentryNdk.init(ndkOptions);
                if (sentryAndroidOptions.isEnableScopeSync()) {
                    sentryAndroidOptions.addScopeObserver(new i(sentryAndroidOptions));
                }
                sentryAndroidOptions.setDebugImagesLoader(new a(sentryAndroidOptions, new NativeModuleListLoader()));
                return;
            }
            throw new IllegalStateException("Timeout waiting for Sentry NDK library to load");
        } catch (InterruptedException e10) {
            throw new IllegalStateException("Thread interrupted while waiting for NDK libs to be loaded", e10);
        }
    }
}
