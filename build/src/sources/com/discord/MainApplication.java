package com.discord;

import android.content.Context;
import android.os.Build;
import com.discord.app_database.AppDatabase;
import com.discord.bridge.DCDReactNativeHost;
import com.discord.bundle_updater.BundleUpdater;
import com.discord.cache.Cache;
import com.discord.chat.presentation.message.view.voicemessages.AudioPlayerManager;
import com.discord.client_info.ClientInfo;
import com.discord.crash_reporting.CrashReporting;
import com.discord.crash_reporting.PerformanceTracing;
import com.discord.crash_reporting.TelemetryRing;
import com.discord.deep_link.DeepLinks;
import com.discord.image.fresco.FrescoModuleDiscord;
import com.discord.libdiscore.LibdiscoreModule;
import com.discord.lifecycle.ActivityResumedTracker;
import com.discord.lifecycle.AppLifecycle;
import com.discord.lifecycle.ForegroundServiceStartGuard;
import com.discord.media_player.CacheDataSourceFactory;
import com.discord.networking.ReactNetworking;
import com.discord.play_delivery.PlayAssetDelivery;
import com.discord.react.FontManager;
import com.discord.react_activities.ReactActivitySharedData;
import com.discord.react_fork_overrides.ReactForkOverrides;
import com.discord.sticker.sticker_types.RLottieUtils;
import com.discord.theme.ThemeManager;
import com.discord.tti_manager.TTILoggingApplication;
import com.discord.tti_manager.TTIMetrics;
import com.discord.tti_manager.TTIModule;
import com.discord.tti_manager.react.ReactMarkerListener;
import com.discord.utils.SoLoaderUtils;
import com.facebook.hermes.reactexecutor.HermesExecutor;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactHost;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.defaults.DefaultReactHost;
import com.facebook.react.defaults.DefaultSoLoader;
import com.facebook.react.internal.featureflags.ReactNativeFeatureFlags;
import com.facebook.react.internal.featureflags.ReactNativeNewArchitectureFeatureFlagsDefaults;
import com.facebook.react.modules.i18nmanager.I18nUtil;
import com.facebook.react.uimanager.UIManagerConstantsCache;
import java.util.Map;
import java.util.concurrent.CountDownLatch;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import lr.l;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000<\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\u0018\u00002\u00020\u00012\u00020\u0002B\u0007¢\u0006\u0004\b\u0003\u0010\u0004J\u0010\u0010\u0017\u001a\u00020\u00182\u0006\u0010\u0019\u001a\u00020\u001aH\u0014J\b\u0010\u001b\u001a\u00020\u0018H\u0016J\b\u0010\u001c\u001a\u00020\u0018H\u0016J\b\u0010\u001d\u001a\u00020\u0018H\u0002R\u000e\u0010\u0005\u001a\u00020\u0006X\u0082\u000e¢\u0006\u0002\n\u0000R\u0014\u0010\u0007\u001a\u00020\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\nR\u001b\u0010\u000b\u001a\u00020\f8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b\u000f\u0010\u0010\u001a\u0004\b\r\u0010\u000eR\u000e\u0010\u0011\u001a\u00020\u0006X\u0082\u000e¢\u0006\u0002\n\u0000R\u001b\u0010\u0012\u001a\u00020\u00138BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b\u0016\u0010\u0010\u001a\u0004\b\u0014\u0010\u0015¨\u0006\u001e"}, d2 = {"Lcom/discord/MainApplication;", "Lcom/discord/tti_manager/TTILoggingApplication;", "Lcom/facebook/react/ReactApplication;", "<init>", "()V", "initializeReactNativeLatch", "Ljava/util/concurrent/CountDownLatch;", "reactNativeHost", "Lcom/facebook/react/ReactNativeHost;", "getReactNativeHost", "()Lcom/facebook/react/ReactNativeHost;", "reactHost", "Lcom/facebook/react/ReactHost;", "getReactHost", "()Lcom/facebook/react/ReactHost;", "reactHost$delegate", "Lkotlin/Lazy;", "soloaderLoaded", "mountingModeExperiment", "", "getMountingModeExperiment", "()I", "mountingModeExperiment$delegate", "attachBaseContext", "", "base", "Landroid/content/Context;", "onCreate", "initialize", "performInitialization", "app_canaryRelease"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MainApplication extends TTILoggingApplication implements ReactApplication {
    @NotNull
    private CountDownLatch initializeReactNativeLatch = new CountDownLatch(1);
    @NotNull
    private final ReactNativeHost reactNativeHost = new DCDReactNativeHost(this);
    @NotNull
    private final Lazy reactHost$delegate = l.a(new Function0() { // from class: com.discord.b
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            ReactHost reactHost_delegate$lambda$0;
            reactHost_delegate$lambda$0 = MainApplication.reactHost_delegate$lambda$0(MainApplication.this);
            return reactHost_delegate$lambda$0;
        }
    });
    @NotNull
    private CountDownLatch soloaderLoaded = new CountDownLatch(1);
    @NotNull
    private final Lazy mountingModeExperiment$delegate = l.a(new Function0() { // from class: com.discord.c
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            int mountingModeExperiment_delegate$lambda$1;
            mountingModeExperiment_delegate$lambda$1 = MainApplication.mountingModeExperiment_delegate$lambda$1();
            return Integer.valueOf(mountingModeExperiment_delegate$lambda$1);
        }
    });

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit attachBaseContext$lambda$2(Context context, final MainApplication mainApplication) {
        SoLoaderUtils.INSTANCE.init(context);
        ReactNativeFeatureFlags.override(new ReactNativeNewArchitectureFeatureFlagsDefaults() { // from class: com.discord.MainApplication$attachBaseContext$1$1
            /* JADX INFO: Access modifiers changed from: package-private */
            {
                super(true);
            }

            @Override // com.facebook.react.internal.featureflags.ReactNativeFeatureFlagsDefaults, com.facebook.react.internal.featureflags.ReactNativeFeatureFlagsProvider
            public boolean enableAccumulatedUpdatesInRawPropsAndroid() {
                int mountingModeExperiment;
                mountingModeExperiment = MainApplication.this.getMountingModeExperiment();
                if (mountingModeExperiment >= 2) {
                    return true;
                }
                return false;
            }

            @Override // com.facebook.react.internal.featureflags.ReactNativeFeatureFlagsDefaults, com.facebook.react.internal.featureflags.ReactNativeFeatureFlagsProvider
            public boolean enablePropsUpdateReconciliationAndroid() {
                int mountingModeExperiment;
                mountingModeExperiment = MainApplication.this.getMountingModeExperiment();
                if (mountingModeExperiment >= 2) {
                    return true;
                }
                return false;
            }

            @Override // com.facebook.react.internal.featureflags.ReactNativeFeatureFlagsDefaults, com.facebook.react.internal.featureflags.ReactNativeFeatureFlagsProvider
            public boolean useFabricInterop() {
                return true;
            }

            @Override // com.facebook.react.internal.featureflags.ReactNativeFeatureFlagsDefaults, com.facebook.react.internal.featureflags.ReactNativeFeatureFlagsProvider
            public boolean usePullModelOnAndroid() {
                int mountingModeExperiment;
                mountingModeExperiment = MainApplication.this.getMountingModeExperiment();
                if (mountingModeExperiment == 3) {
                    return true;
                }
                return false;
            }

            @Override // com.facebook.react.internal.featureflags.ReactNativeFeatureFlagsDefaults, com.facebook.react.internal.featureflags.ReactNativeFeatureFlagsProvider
            public boolean useShadowNodeStateOnClone() {
                return true;
            }

            @Override // com.facebook.react.internal.featureflags.ReactNativeFeatureFlagsDefaults, com.facebook.react.internal.featureflags.ReactNativeFeatureFlagsProvider
            public boolean useSilenceErrorSMMViewNotFound() {
                int mountingModeExperiment;
                mountingModeExperiment = MainApplication.this.getMountingModeExperiment();
                if (mountingModeExperiment == 1) {
                    return true;
                }
                return false;
            }

            @Override // com.facebook.react.internal.featureflags.ReactNativeNewArchitectureFeatureFlagsDefaults, com.facebook.react.internal.featureflags.ReactNativeFeatureFlagsDefaults, com.facebook.react.internal.featureflags.ReactNativeFeatureFlagsProvider
            public boolean useTurboModules() {
                return true;
            }
        });
        mainApplication.soloaderLoaded.countDown();
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int getMountingModeExperiment() {
        return ((Number) this.mountingModeExperiment$delegate.getValue()).intValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit initialize$lambda$4(MainApplication mainApplication) {
        mainApplication.performInitialization();
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int mountingModeExperiment_delegate$lambda$1() {
        return LibdiscoreModule.INSTANCE.getConfigTreatmentId("2026-01-android-rmle");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onCreate$lambda$3(MainApplication mainApplication) {
        DeepLinks.INSTANCE.init(mainApplication);
        return Unit.f32464a;
    }

    private final void performInitialization() {
        ForegroundServiceStartGuard.INSTANCE.init(this);
        pr.a.b(false, false, null, "ReactNativeLoader", 10, new Function0() { // from class: com.discord.d
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit performInitialization$lambda$5;
                performInitialization$lambda$5 = MainApplication.performInitialization$lambda$5(MainApplication.this);
                return performInitialization$lambda$5;
            }
        }, 7, null);
        TTIMetrics tTIMetrics = TTIMetrics.INSTANCE;
        TTIMetrics.record$default(tTIMetrics, "Start MainApplication.initialize()", 0L, null, false, 14, null);
        try {
            ReactMarkerListener.INSTANCE.start();
            Cache.Companion.quickInitCache(this);
            TTIMetrics.record$default(tTIMetrics, "quickInitCache()", 0L, null, false, 14, null);
            BundleUpdater.Companion companion = BundleUpdater.Companion;
            companion.init(this);
            TTIMetrics.record$default(tTIMetrics, "BundlerUpdater.init()", 0L, null, false, 14, null);
            ClientInfo.INSTANCE.init(this, BuildConfig.VERSION_NAME_RNA, BuildConfig.VERSION_CODE, BuildConfig.FLAVOR, "release", companion.instance().getManifestETag(), companion.instance().getOtaVersion());
            TTIMetrics.record$default(tTIMetrics, "ClientInfo.init()", 0L, null, false, 14, null);
            TelemetryRing.init$default(TelemetryRing.INSTANCE, this, null, 2, null);
            CacheDataSourceFactory.Companion.init(this);
            TTIMetrics.record$default(tTIMetrics, "CacheDataSourceFactory.init()", 0L, null, false, 14, null);
            Thread b10 = pr.a.b(false, false, null, null, 0, new Function0() { // from class: com.discord.e
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit performInitialization$lambda$7;
                    performInitialization$lambda$7 = MainApplication.performInitialization$lambda$7(MainApplication.this);
                    return performInitialization$lambda$7;
                }
            }, 31, null);
            pr.a.b(false, false, null, "PreInitReactHost", 0, new Function0() { // from class: com.discord.f
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit performInitialization$lambda$8;
                    performInitialization$lambda$8 = MainApplication.performInitialization$lambda$8(MainApplication.this);
                    return performInitialization$lambda$8;
                }
            }, 23, null);
            PerformanceTracing.Companion.get().start();
            ReactNetworking.INSTANCE.patchReactNetworking();
            RLottieUtils.INSTANCE.init();
            FontManager.INSTANCE.init(this);
            ThemeManager.INSTANCE.init(this);
            ReactForkOverrides.INSTANCE.init();
            AudioPlayerManager.INSTANCE.init(this);
            TTIMetrics.record$default(tTIMetrics, "AudioPlayerManager.init()", 0L, null, false, 14, null);
            PlayAssetDelivery.INSTANCE.initialize(this);
            this.initializeReactNativeLatch.await();
            b10.join();
            ReactActivitySharedData.INSTANCE.getPrepareEverythingForActivity().countDown();
            TTIModule.Companion.markApplicationInitializeComplete();
            TTIMetrics.record$default(tTIMetrics, "Finish MainApplication.initialize()", 0L, null, false, 14, null);
        } catch (Throwable th2) {
            ReactActivitySharedData.INSTANCE.getPrepareEverythingForActivity().countDown();
            TTIModule.Companion.markApplicationInitializeComplete();
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit performInitialization$lambda$5(MainApplication mainApplication) {
        try {
            mainApplication.soloaderLoaded.await();
            FrescoModuleDiscord.Companion.startFrescoInitializationAsync(mainApplication);
            DefaultSoLoader.maybeLoadSoLibrary();
            UIManagerConstantsCache.getInstance().init(mainApplication);
            HermesExecutor.f10017a.b();
            mainApplication.initializeReactNativeLatch.countDown();
            LibdiscoreModule.INSTANCE.init(mainApplication);
            CrashReporting.INSTANCE.setTag("experiment_mounting_mode", String.valueOf(mainApplication.getMountingModeExperiment()));
            return Unit.f32464a;
        } catch (Throwable th2) {
            mainApplication.initializeReactNativeLatch.countDown();
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit performInitialization$lambda$7(MainApplication mainApplication) {
        AppDatabase.INSTANCE.initializeAppDatabase(mainApplication);
        TTIMetrics tTIMetrics = TTIMetrics.INSTANCE;
        TTIMetrics.record$default(tTIMetrics, "initializeAppDatabase()", 0L, null, false, 14, null);
        I18nUtil.Companion.getInstance().allowRTL(mainApplication, false);
        TTIMetrics.record$default(tTIMetrics, "I18nUtil.allowRtl()", 0L, null, false, 14, null);
        BundleUpdater.OtaBundle bundle = BundleUpdater.Companion.instance().getBundle();
        CrashReporting.INSTANCE.init(mainApplication, (bundle == null || (r0 = bundle.getReleaseName()) == null) ? "discord_android@316.4.0-2+316204" : "discord_android@316.4.0-2+316204");
        TTIMetrics.record$default(tTIMetrics, "CrashReporting.init()", 0L, null, false, 14, null);
        ForegroundServiceStartGuard.INSTANCE.setLogger(new Function2() { // from class: com.discord.a
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit performInitialization$lambda$7$lambda$6;
                performInitialization$lambda$7$lambda$6 = MainApplication.performInitialization$lambda$7$lambda$6((String) obj, (Map) obj2);
                return performInitialization$lambda$7$lambda$6;
            }
        });
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit performInitialization$lambda$7$lambda$6(String message, Map data) {
        Intrinsics.checkNotNullParameter(message, "message");
        Intrinsics.checkNotNullParameter(data, "data");
        CrashReporting.addBreadcrumb$default(CrashReporting.INSTANCE, message, data, "fgs_guard", null, false, 24, null);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit performInitialization$lambda$8(MainApplication mainApplication) {
        mainApplication.getReactHost();
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ReactHost reactHost_delegate$lambda$0(MainApplication mainApplication) {
        mainApplication.initializeReactNativeLatch.await();
        Context applicationContext = mainApplication.getApplicationContext();
        Intrinsics.checkNotNullExpressionValue(applicationContext, "getApplicationContext(...)");
        return DefaultReactHost.getDefaultReactHost$default(applicationContext, mainApplication.getReactNativeHost(), null, 4, null);
    }

    @Override // android.content.ContextWrapper
    protected void attachBaseContext(@NotNull final Context base) {
        Intrinsics.checkNotNullParameter(base, "base");
        super.attachBaseContext(base);
        pr.a.b(false, false, null, "helperReactNativeLoader", 10, new Function0() { // from class: com.discord.h
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit attachBaseContext$lambda$2;
                attachBaseContext$lambda$2 = MainApplication.attachBaseContext$lambda$2(base, this);
                return attachBaseContext$lambda$2;
            }
        }, 7, null);
    }

    @Override // com.facebook.react.ReactApplication
    @NotNull
    public ReactHost getReactHost() {
        return (ReactHost) this.reactHost$delegate.getValue();
    }

    @Override // com.facebook.react.ReactApplication
    @NotNull
    public ReactNativeHost getReactNativeHost() {
        return this.reactNativeHost;
    }

    @Override // com.discord.tti_manager.TTILoggingApplication
    public void initialize() {
        ActivityResumedTracker.INSTANCE.init(this);
        if (Build.VERSION.SDK_INT < 28) {
            performInitialization();
        } else {
            pr.a.b(false, false, null, "ReactNativeInitThread", 10, new Function0() { // from class: com.discord.i
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit initialize$lambda$4;
                    initialize$lambda$4 = MainApplication.initialize$lambda$4(MainApplication.this);
                    return initialize$lambda$4;
                }
            }, 7, null);
        }
        AppLifecycle.INSTANCE.init();
    }

    @Override // com.discord.tti_manager.TTILoggingApplication, android.app.Application
    public void onCreate() {
        super.onCreate();
        pr.a.b(false, false, null, null, 0, new Function0() { // from class: com.discord.g
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit onCreate$lambda$3;
                onCreate$lambda$3 = MainApplication.onCreate$lambda$3(MainApplication.this);
                return onCreate$lambda$3;
            }
        }, 31, null);
    }
}
