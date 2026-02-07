package com.discord.bundle_updater;

import android.app.Activity;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.ProgressBar;
import com.discord.bundle_updater.BundleUpdater;
import com.discord.bundle_updater.react.events.BundleDownloadedEvent;
import com.discord.bundle_updater.react.events.OtaCheckAttemptEvent;
import com.discord.main.MainActivity;
import com.discord.misc.utilities.activity.ActivityExtensionsKt;
import com.discord.reactevents.ReactEvents;
import com.discord.theme.ThemeManagerKt;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactDelegate;
import com.facebook.react.ReactHost;
import com.facebook.react.bridge.BaseJavaModule;
import com.facebook.react.bridge.JSBundleLoader;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.runtime.ReactHostImpl;
import com.facebook.react.runtime.internal.bolts.Task;
import com.jakewharton.processphoenix.ProcessPhoenix;
import java.io.File;
import java.lang.reflect.Method;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineScope;
import org.jetbrains.annotations.NotNull;
import os.j1;
import os.m0;
import qr.v;
@Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u000e\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\u0018\u0000 /2\u00020\u0001:\u0001/B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005J\u000f\u0010\u0007\u001a\u00020\u0006H\u0002¢\u0006\u0004\b\u0007\u0010\bJ\u000f\u0010\t\u001a\u00020\u0006H\u0002¢\u0006\u0004\b\t\u0010\bJ\u000f\u0010\n\u001a\u00020\u0006H\u0002¢\u0006\u0004\b\n\u0010\bJ#\u0010\u000e\u001a\u00020\u00062\u0012\u0010\r\u001a\u000e\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\u00060\u000bH\u0002¢\u0006\u0004\b\u000e\u0010\u000fJ\u000f\u0010\u0011\u001a\u00020\u0010H\u0016¢\u0006\u0004\b\u0011\u0010\u0012J\u0017\u0010\u0015\u001a\u00020\u00062\u0006\u0010\u0014\u001a\u00020\u0013H\u0007¢\u0006\u0004\b\u0015\u0010\u0016J\u0017\u0010\u0017\u001a\u00020\u00062\u0006\u0010\u0014\u001a\u00020\u0013H\u0007¢\u0006\u0004\b\u0017\u0010\u0016J\u000f\u0010\u0018\u001a\u00020\u0006H\u0007¢\u0006\u0004\b\u0018\u0010\bJ\u000f\u0010\u0019\u001a\u00020\u0006H\u0007¢\u0006\u0004\b\u0019\u0010\bJ\u0017\u0010\u001b\u001a\u00020\u00062\u0006\u0010\u001a\u001a\u00020\u0010H\u0007¢\u0006\u0004\b\u001b\u0010\u001cJ\u0017\u0010\u001d\u001a\u00020\u00062\u0006\u0010\u0014\u001a\u00020\u0013H\u0007¢\u0006\u0004\b\u001d\u0010\u0016J\u0017\u0010\u001e\u001a\u00020\u00062\u0006\u0010\u0014\u001a\u00020\u0013H\u0007¢\u0006\u0004\b\u001e\u0010\u0016J\u0017\u0010\u001f\u001a\u00020\u00062\u0006\u0010\u0014\u001a\u00020\u0013H\u0007¢\u0006\u0004\b\u001f\u0010\u0016J\u0017\u0010!\u001a\u00020\u00062\u0006\u0010 \u001a\u00020\u0010H\u0007¢\u0006\u0004\b!\u0010\u001cJ\u0017\u0010$\u001a\u00020\u00062\u0006\u0010#\u001a\u00020\"H\u0007¢\u0006\u0004\b$\u0010%R\u0014\u0010\u0003\u001a\u00020\u00028\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0003\u0010&R\u0014\u0010(\u001a\u00020'8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b(\u0010)R\u0014\u0010+\u001a\u00020*8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b+\u0010,R\u0018\u0010-\u001a\u0004\u0018\u00010\f8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b-\u0010.¨\u00060"}, d2 = {"Lcom/discord/bundle_updater/BundleUpdaterManager;", "Lcom/facebook/react/bridge/ReactContextBaseJavaModule;", "Lcom/facebook/react/bridge/ReactApplicationContext;", "reactContext", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "", "update", "()V", "showSpinnerView", "removeSpinnerView", "Lkotlin/Function1;", "Landroid/view/ViewGroup;", "callback", "runOnActivity", "(Lkotlin/jvm/functions/Function1;)V", "", "getName", "()Ljava/lang/String;", "Lcom/facebook/react/bridge/Promise;", BaseJavaModule.METHOD_TYPE_PROMISE, "getInitialBundleDownloaded", "(Lcom/facebook/react/bridge/Promise;)V", "getInitialOtaUpdateChecked", "checkForUpdateAndReload", "reload", "type", "addListener", "(Ljava/lang/String;)V", "getOtaRootPath", "getManifestInfo", "getBuildOverrideCookieContents", "cookieHeader", "setBuildOverrideCookieHeader", "", "count", "removeListeners", "(I)V", "Lcom/facebook/react/bridge/ReactApplicationContext;", "Lcom/discord/reactevents/ReactEvents;", "reactEvents", "Lcom/discord/reactevents/ReactEvents;", "Lkotlinx/coroutines/CoroutineScope;", "coroutineScope", "Lkotlinx/coroutines/CoroutineScope;", "progressLayout", "Landroid/view/ViewGroup;", "Companion", "bundle_updater_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nBundleUpdaterManager.kt\nKotlin\n*S Kotlin\n*F\n+ 1 BundleUpdaterManager.kt\ncom/discord/bundle_updater/BundleUpdaterManager\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 CastUtils.kt\ncom/discord/misc/utilities/kotlin/CastUtilsKt\n*L\n1#1,202:1\n1#2:203\n8#3:204\n*S KotlinDebug\n*F\n+ 1 BundleUpdaterManager.kt\ncom/discord/bundle_updater/BundleUpdaterManager\n*L\n192#1:204\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BundleUpdaterManager extends ReactContextBaseJavaModule {
    @NotNull
    private static final String BUNDLE_DOWNLOADED = "BundleDownloaded";
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final String OTA_UPDATE_CHECKED = "OtaUpdateChecked";
    @NotNull
    private final CoroutineScope coroutineScope;
    private ViewGroup progressLayout;
    @NotNull
    private final ReactApplicationContext reactContext;
    @NotNull
    private final ReactEvents reactEvents;

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0007"}, d2 = {"Lcom/discord/bundle_updater/BundleUpdaterManager$Companion;", "", "<init>", "()V", "BUNDLE_DOWNLOADED", "", "OTA_UPDATE_CHECKED", "bundle_updater_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public BundleUpdaterManager(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.reactContext = reactContext;
        this.reactEvents = new ReactEvents(v.a(BUNDLE_DOWNLOADED, Reflection.getOrCreateKotlinClass(BundleDownloadedEvent.class)), v.a(OTA_UPDATE_CHECKED, Reflection.getOrCreateKotlinClass(OtaCheckAttemptEvent.class)));
        this.coroutineScope = kotlinx.coroutines.i.a(m0.c().Y0(j1.b(null, 1, null)));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit addListener$lambda$3(BundleUpdaterManager bundleUpdaterManager, boolean z10) {
        bundleUpdaterManager.reactEvents.emitModuleEvent(bundleUpdaterManager.reactContext, new BundleDownloadedEvent(z10));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit addListener$lambda$4(BundleUpdaterManager bundleUpdaterManager, List metrics) {
        Intrinsics.checkNotNullParameter(metrics, "metrics");
        bundleUpdaterManager.reactEvents.emitModuleEvent(bundleUpdaterManager.reactContext, new OtaCheckAttemptEvent(metrics));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit checkForUpdateAndReload$lambda$1(final BundleUpdaterManager bundleUpdaterManager) {
        bundleUpdaterManager.removeSpinnerView();
        bundleUpdaterManager.runOnActivity(new Function1() { // from class: com.discord.bundle_updater.n
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit checkForUpdateAndReload$lambda$1$lambda$0;
                checkForUpdateAndReload$lambda$1$lambda$0 = BundleUpdaterManager.checkForUpdateAndReload$lambda$1$lambda$0(BundleUpdaterManager.this, (ViewGroup) obj);
                return checkForUpdateAndReload$lambda$1$lambda$0;
            }
        });
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit checkForUpdateAndReload$lambda$1$lambda$0(BundleUpdaterManager bundleUpdaterManager, ViewGroup runOnActivity) {
        Intrinsics.checkNotNullParameter(runOnActivity, "$this$runOnActivity");
        bundleUpdaterManager.update();
        return Unit.f32056a;
    }

    private final void removeSpinnerView() {
        runOnActivity(new Function1() { // from class: com.discord.bundle_updater.k
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit removeSpinnerView$lambda$9;
                removeSpinnerView$lambda$9 = BundleUpdaterManager.removeSpinnerView$lambda$9(BundleUpdaterManager.this, (ViewGroup) obj);
                return removeSpinnerView$lambda$9;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit removeSpinnerView$lambda$9(BundleUpdaterManager bundleUpdaterManager, ViewGroup runOnActivity) {
        Intrinsics.checkNotNullParameter(runOnActivity, "$this$runOnActivity");
        ViewGroup viewGroup = bundleUpdaterManager.progressLayout;
        if (viewGroup != null) {
            runOnActivity.removeView(viewGroup);
        }
        bundleUpdaterManager.progressLayout = null;
        return Unit.f32056a;
    }

    private final void runOnActivity(final Function1<? super ViewGroup, Unit> function1) {
        final Activity currentActivity = this.reactContext.getCurrentActivity();
        if (currentActivity != null) {
            currentActivity.runOnUiThread(new Runnable() { // from class: com.discord.bundle_updater.m
                @Override // java.lang.Runnable
                public final void run() {
                    BundleUpdaterManager.runOnActivity$lambda$11$lambda$10(currentActivity, function1);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void runOnActivity$lambda$11$lambda$10(Activity activity, Function1 function1) {
        View rootView = ActivityExtensionsKt.getRootView(activity);
        if (rootView != null) {
            if (!(rootView instanceof ViewGroup)) {
                rootView = null;
            }
            ViewGroup viewGroup = (ViewGroup) rootView;
            if (viewGroup != null) {
                function1.invoke(viewGroup);
            }
        }
    }

    private final void showSpinnerView() {
        ProgressBar progressBar = new ProgressBar(this.reactContext);
        progressBar.setLayoutParams(new FrameLayout.LayoutParams(-2, -2, 17));
        progressBar.setIndeterminate(true);
        FrameLayout frameLayout = new FrameLayout(this.reactContext);
        frameLayout.setLayoutParams(new FrameLayout.LayoutParams(-1, -1));
        frameLayout.addView(progressBar);
        frameLayout.setBackgroundColor(ThemeManagerKt.getTheme().getInteractiveBackgroundSelected());
        frameLayout.setClickable(true);
        this.progressLayout = frameLayout;
        runOnActivity(new Function1() { // from class: com.discord.bundle_updater.q
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit showSpinnerView$lambda$7;
                showSpinnerView$lambda$7 = BundleUpdaterManager.showSpinnerView$lambda$7(BundleUpdaterManager.this, (ViewGroup) obj);
                return showSpinnerView$lambda$7;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit showSpinnerView$lambda$7(BundleUpdaterManager bundleUpdaterManager, ViewGroup runOnActivity) {
        Intrinsics.checkNotNullParameter(runOnActivity, "$this$runOnActivity");
        runOnActivity.addView(bundleUpdaterManager.progressLayout);
        return Unit.f32056a;
    }

    private final void update() {
        ReactActivity reactActivity;
        ReactHost reactHost;
        ReactHostImpl reactHostImpl;
        String str;
        JSBundleLoader createAssetLoader;
        Method method;
        Object obj;
        Task task;
        File location;
        ReactDelegate reactDelegate;
        Activity currentActivity = this.reactContext.getCurrentActivity();
        if (currentActivity instanceof ReactActivity) {
            reactActivity = (ReactActivity) currentActivity;
        } else {
            reactActivity = null;
        }
        if (reactActivity != null && (reactDelegate = reactActivity.getReactDelegate()) != null) {
            reactHost = reactDelegate.getReactHost();
        } else {
            reactHost = null;
        }
        if (reactHost instanceof ReactHostImpl) {
            reactHostImpl = (ReactHostImpl) reactHost;
        } else {
            reactHostImpl = null;
        }
        BundleUpdater.OtaBundle bundle = BundleUpdater.Companion.instance().getBundle();
        if (bundle != null && (location = bundle.getLocation()) != null) {
            str = location.getAbsolutePath();
        } else {
            str = null;
        }
        if (str == null || (createAssetLoader = JSBundleLoader.Companion.createFileLoader(str)) == null) {
            JSBundleLoader.Companion companion = JSBundleLoader.Companion;
            ReactApplicationContext reactApplicationContext = getReactApplicationContext();
            Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
            createAssetLoader = companion.createAssetLoader(reactApplicationContext, "assets://index.android.bundle", false);
        }
        if (reactHostImpl != null) {
            method = ReactHostImpl.class.getDeclaredMethod("loadBundle", JSBundleLoader.class);
        } else {
            method = null;
        }
        if (method != null) {
            method.setAccessible(true);
        }
        if (method != null) {
            obj = method.invoke(reactHostImpl, createAssetLoader);
        } else {
            obj = null;
        }
        if (obj instanceof Task) {
            task = (Task) obj;
        } else {
            task = null;
        }
        if (task != null) {
            task.waitForCompletion();
        }
        os.i.d(this.coroutineScope, null, null, new BundleUpdaterManager$update$1(this, null), 3, null);
    }

    @ReactMethod
    public final void addListener(@NotNull String type) {
        Intrinsics.checkNotNullParameter(type, "type");
        if (Intrinsics.areEqual(type, BUNDLE_DOWNLOADED)) {
            BundleUpdater.Companion.instance().setOnBundleDownloadedListener(new Function1() { // from class: com.discord.bundle_updater.o
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit addListener$lambda$3;
                    addListener$lambda$3 = BundleUpdaterManager.addListener$lambda$3(BundleUpdaterManager.this, ((Boolean) obj).booleanValue());
                    return addListener$lambda$3;
                }
            });
        } else if (Intrinsics.areEqual(type, OTA_UPDATE_CHECKED)) {
            BundleUpdater.Companion.instance().setOnOtaUpdateCheckedListener(new Function1() { // from class: com.discord.bundle_updater.p
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit addListener$lambda$4;
                    addListener$lambda$4 = BundleUpdaterManager.addListener$lambda$4(BundleUpdaterManager.this, (List) obj);
                    return addListener$lambda$4;
                }
            });
        }
    }

    @ReactMethod
    public final void checkForUpdateAndReload() {
        showSpinnerView();
        BundleUpdater.Companion companion = BundleUpdater.Companion;
        BundleUpdater.checkForUpdate$default(companion.instance(), 0, new Function0() { // from class: com.discord.bundle_updater.l
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit checkForUpdateAndReload$lambda$1;
                checkForUpdateAndReload$lambda$1 = BundleUpdaterManager.checkForUpdateAndReload$lambda$1(BundleUpdaterManager.this);
                return checkForUpdateAndReload$lambda$1;
            }
        }, 1, null);
        ReactApplicationContext reactApplicationContext = this.reactContext;
        int i10 = MainActivity.f9348d;
        Intrinsics.checkNotNullExpressionValue(MainActivity.class, "forName(...)");
        companion.addClearBuildOverrideShortcut(reactApplicationContext, MainActivity.class);
    }

    @ReactMethod
    public final void getBuildOverrideCookieContents(@NotNull Promise promise) {
        WritableNativeMap writableNativeMap;
        Intrinsics.checkNotNullParameter(promise, "promise");
        BuildOverrideCookieContents parseBuildOverrideCookie = CookieValidator.INSTANCE.parseBuildOverrideCookie(BundleUpdater.Companion.instance().getBuildOverrideCookie());
        if (parseBuildOverrideCookie != null) {
            writableNativeMap = parseBuildOverrideCookie.toNativeMap();
        } else {
            writableNativeMap = null;
        }
        promise.resolve(writableNativeMap);
    }

    @ReactMethod
    public final void getInitialBundleDownloaded(@NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        promise.resolve(new BundleDownloadedEvent(BundleUpdater.Companion.instance().isVersionRequired()).serialize());
    }

    @ReactMethod
    public final void getInitialOtaUpdateChecked(@NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        promise.resolve(new OtaCheckAttemptEvent(BundleUpdater.Companion.instance().getOtaMetrics()).serialize());
    }

    @ReactMethod
    public final void getManifestInfo(@NotNull Promise promise) {
        WritableNativeMap writableNativeMap;
        Intrinsics.checkNotNullParameter(promise, "promise");
        BundleUpdater.ManifestInfo manifestInfo = BundleUpdater.Companion.instance().manifestInfo();
        if (manifestInfo != null) {
            writableNativeMap = manifestInfo.toNativeMap();
        } else {
            writableNativeMap = null;
        }
        promise.resolve(writableNativeMap);
    }

    @Override // com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return "BundleUpdaterManager";
    }

    @ReactMethod
    public final void getOtaRootPath(@NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        promise.resolve(BundleUpdater.Companion.instance().getOtasRootDirectory().getAbsolutePath());
    }

    @ReactMethod
    public final void reload() {
        ProcessPhoenix.b(this.reactContext);
    }

    @ReactMethod
    public final void removeListeners(int i10) {
    }

    @ReactMethod
    public final void setBuildOverrideCookieHeader(@NotNull String cookieHeader) {
        Intrinsics.checkNotNullParameter(cookieHeader, "cookieHeader");
        BundleUpdater.Companion.instance().setBuildOverrideCookieHeader(cookieHeader);
    }
}
