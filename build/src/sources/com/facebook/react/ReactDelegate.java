package com.facebook.react;

import android.app.Activity;
import android.content.Intent;
import android.content.res.Configuration;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.ViewGroup;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.devsupport.DoubleTapReloadRecognizer;
import com.facebook.react.devsupport.ReleaseDevSupportManager;
import com.facebook.react.devsupport.interfaces.DevSupportManager;
import com.facebook.react.interfaces.fabric.ReactSurface;
import com.facebook.react.internal.featureflags.ReactNativeNewArchitectureFeatureFlags;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u008a\u0001\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\r\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0016\u0018\u00002\u00020\u0001B/\b\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\u0004\b\n\u0010\u000bB/\b\u0016\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\u0004\b\n\u0010\u000eB7\b\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t\u0012\u0006\u0010\u000f\u001a\u00020\u0010¢\u0006\u0004\b\n\u0010\u0011J\u0006\u0010$\u001a\u00020%J\u0006\u0010&\u001a\u00020%J\u0006\u0010'\u001a\u00020%J\u0006\u0010(\u001a\u00020%J\u0006\u0010)\u001a\u00020\u0010J\u000e\u0010*\u001a\u00020\u00102\u0006\u0010+\u001a\u00020,J(\u0010-\u001a\u00020%2\u0006\u0010.\u001a\u00020/2\u0006\u00100\u001a\u00020/2\b\u00101\u001a\u0004\u0018\u00010,2\u0006\u00102\u001a\u00020\u0010J\u000e\u00103\u001a\u00020%2\u0006\u00104\u001a\u00020\u0010J\u0010\u00105\u001a\u00020%2\b\u00106\u001a\u0004\u0018\u000107J\u0016\u00108\u001a\u00020\u00102\u0006\u00109\u001a\u00020/2\u0006\u0010:\u001a\u00020;J\u000e\u0010<\u001a\u00020\u00102\u0006\u00109\u001a\u00020/J\u0006\u0010=\u001a\u00020%J\u0006\u0010>\u001a\u00020%J\u000e\u0010>\u001a\u00020%2\u0006\u0010\u0006\u001a\u00020\u0007J\u0006\u0010?\u001a\u00020%J\u0010\u0010@\u001a\u00020%2\b\u0010\u001c\u001a\u0004\u0018\u00010\u001dJ\n\u0010F\u001a\u0004\u0018\u00010\u0013H\u0014J\u0018\u0010G\u001a\u00020\u00102\u0006\u00109\u001a\u00020/2\b\u0010:\u001a\u0004\u0018\u00010;J\b\u0010H\u001a\u00020IH\u0007R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u0012\u001a\u0004\u0018\u00010\u0013X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\u0014\u001a\u0004\u0018\u00010\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\b\u001a\u0004\u0018\u00010\tX\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\u0015\u001a\u0004\u0018\u00010\u0016X\u0082\u000e¢\u0006\u0002\n\u0000R\u001a\u0010\u0004\u001a\u0004\u0018\u00010\u00058\u0002@\u0002X\u0083\u000e¢\u0006\b\n\u0000\u0012\u0004\b\u0017\u0010\u0018R\"\u0010\f\u001a\u0004\u0018\u00010\r2\b\u0010\u0019\u001a\u0004\u0018\u00010\r@BX\u0086\u000e¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u001bR\u0010\u0010\u001c\u001a\u0004\u0018\u00010\u001dX\u0082\u000e¢\u0006\u0002\n\u0000R\u001e\u0010\u001e\u001a\u00020\u00102\u0006\u0010\u0019\u001a\u00020\u0010@BX\u0084\u000e¢\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u001fR\u0016\u0010 \u001a\u0004\u0018\u00010!8BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b\"\u0010#R(\u0010A\u001a\u0004\u0018\u00010\u00132\b\u0010A\u001a\u0004\u0018\u00010\u00138F@FX\u0086\u000e¢\u0006\f\u001a\u0004\bB\u0010C\"\u0004\bD\u0010ER\u0013\u0010J\u001a\u0004\u0018\u00010K8F¢\u0006\u0006\u001a\u0004\bL\u0010M¨\u0006N"}, d2 = {"Lcom/facebook/react/ReactDelegate;", "", "activity", "Landroid/app/Activity;", "reactNativeHost", "Lcom/facebook/react/ReactNativeHost;", "appKey", "", "launchOptions", "Landroid/os/Bundle;", "<init>", "(Landroid/app/Activity;Lcom/facebook/react/ReactNativeHost;Ljava/lang/String;Landroid/os/Bundle;)V", "reactHost", "Lcom/facebook/react/ReactHost;", "(Landroid/app/Activity;Lcom/facebook/react/ReactHost;Ljava/lang/String;Landroid/os/Bundle;)V", "fabricEnabled", "", "(Landroid/app/Activity;Lcom/facebook/react/ReactNativeHost;Ljava/lang/String;Landroid/os/Bundle;Z)V", "internalReactRootView", "Lcom/facebook/react/ReactRootView;", "mainComponentName", "doubleTapReloadRecognizer", "Lcom/facebook/react/devsupport/DoubleTapReloadRecognizer;", "getReactNativeHost$annotations", "()V", "value", "getReactHost", "()Lcom/facebook/react/ReactHost;", "reactSurface", "Lcom/facebook/react/interfaces/fabric/ReactSurface;", "isFabricEnabled", "()Z", "devSupportManager", "Lcom/facebook/react/devsupport/interfaces/DevSupportManager;", "getDevSupportManager", "()Lcom/facebook/react/devsupport/interfaces/DevSupportManager;", "onHostResume", "", "onUserLeaveHint", "onHostPause", "onHostDestroy", "onBackPressed", "onNewIntent", "intent", "Landroid/content/Intent;", "onActivityResult", "requestCode", "", "resultCode", "data", "shouldForwardToReactInstance", "onWindowFocusChanged", "hasFocus", "onConfigurationChanged", "newConfig", "Landroid/content/res/Configuration;", "onKeyDown", "keyCode", "event", "Landroid/view/KeyEvent;", "onKeyLongPress", "reload", "loadApp", "unloadApp", "setReactSurface", "reactRootView", "getReactRootView", "()Lcom/facebook/react/ReactRootView;", "setReactRootView", "(Lcom/facebook/react/ReactRootView;)V", "createRootView", "shouldShowDevMenuOrReload", "getReactInstanceManager", "Lcom/facebook/react/ReactInstanceManager;", "currentReactContext", "Lcom/facebook/react/bridge/ReactContext;", "getCurrentReactContext", "()Lcom/facebook/react/bridge/ReactContext;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nReactDelegate.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ReactDelegate.kt\ncom/facebook/react/ReactDelegate\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,416:1\n1#2:417\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class ReactDelegate {
    @NotNull
    private final Activity activity;
    private DoubleTapReloadRecognizer doubleTapReloadRecognizer;
    private ReactRootView internalReactRootView;
    private boolean isFabricEnabled;
    private Bundle launchOptions;
    private final String mainComponentName;
    private ReactHost reactHost;
    private ReactNativeHost reactNativeHost;
    private ReactSurface reactSurface;

    @jr.c
    public ReactDelegate(@NotNull Activity activity, ReactNativeHost reactNativeHost, String str, Bundle bundle) {
        Intrinsics.checkNotNullParameter(activity, "activity");
        this.isFabricEnabled = ReactNativeNewArchitectureFeatureFlags.enableFabricRenderer();
        this.activity = activity;
        this.mainComponentName = str;
        this.launchOptions = bundle;
        this.doubleTapReloadRecognizer = new DoubleTapReloadRecognizer();
        this.reactNativeHost = reactNativeHost;
    }

    private final DevSupportManager getDevSupportManager() {
        ReactInstanceManager reactInstanceManager;
        ReactNativeHost reactNativeHost;
        ReactInstanceManager reactInstanceManager2;
        DevSupportManager devSupportManager;
        if (ReactNativeNewArchitectureFeatureFlags.enableBridgelessArchitecture()) {
            ReactHost reactHost = this.reactHost;
            if (reactHost != null) {
                devSupportManager = reactHost.getDevSupportManager();
            } else {
                devSupportManager = null;
            }
            if (devSupportManager != null) {
                ReactHost reactHost2 = this.reactHost;
                if (reactHost2 == null) {
                    return null;
                }
                return reactHost2.getDevSupportManager();
            }
        }
        ReactNativeHost reactNativeHost2 = this.reactNativeHost;
        if (reactNativeHost2 != null && reactNativeHost2.hasInstance()) {
            ReactNativeHost reactNativeHost3 = this.reactNativeHost;
            if (reactNativeHost3 != null) {
                reactInstanceManager = reactNativeHost3.getReactInstanceManager();
            } else {
                reactInstanceManager = null;
            }
            if (reactInstanceManager != null && (reactNativeHost = this.reactNativeHost) != null && (reactInstanceManager2 = reactNativeHost.getReactInstanceManager()) != null) {
                return reactInstanceManager2.getDevSupportManager();
            }
        }
        return null;
    }

    @jr.c
    private static /* synthetic */ void getReactNativeHost$annotations() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void reload$lambda$0(ReactDelegate reactDelegate) {
        ReactInstanceManager reactInstanceManager;
        ReactNativeHost reactNativeHost;
        ReactInstanceManager reactInstanceManager2;
        ReactNativeHost reactNativeHost2 = reactDelegate.reactNativeHost;
        if (reactNativeHost2 != null && reactNativeHost2.hasInstance()) {
            ReactNativeHost reactNativeHost3 = reactDelegate.reactNativeHost;
            if (reactNativeHost3 != null) {
                reactInstanceManager = reactNativeHost3.getReactInstanceManager();
            } else {
                reactInstanceManager = null;
            }
            if (reactInstanceManager != null && (reactNativeHost = reactDelegate.reactNativeHost) != null && (reactInstanceManager2 = reactNativeHost.getReactInstanceManager()) != null) {
                reactInstanceManager2.recreateReactContextInBackground();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public ReactRootView createRootView() {
        ReactRootView reactRootView = new ReactRootView(this.activity);
        reactRootView.setIsFabric(this.isFabricEnabled);
        return reactRootView;
    }

    public final ReactContext getCurrentReactContext() {
        if (ReactNativeNewArchitectureFeatureFlags.enableBridgelessArchitecture()) {
            ReactHost reactHost = this.reactHost;
            if (reactHost == null || reactHost == null) {
                return null;
            }
            return reactHost.getCurrentReactContext();
        }
        return getReactInstanceManager().getCurrentReactContext();
    }

    public final ReactHost getReactHost() {
        return this.reactHost;
    }

    @jr.c
    @NotNull
    public final ReactInstanceManager getReactInstanceManager() {
        ReactNativeHost reactNativeHost = this.reactNativeHost;
        if (reactNativeHost != null) {
            ReactInstanceManager reactInstanceManager = reactNativeHost.getReactInstanceManager();
            Intrinsics.checkNotNullExpressionValue(reactInstanceManager, "getReactInstanceManager(...)");
            return reactInstanceManager;
        }
        throw new IllegalStateException("Cannot get ReactInstanceManager without a ReactNativeHost.");
    }

    public final ReactRootView getReactRootView() {
        if (ReactNativeNewArchitectureFeatureFlags.enableBridgelessArchitecture()) {
            ReactSurface reactSurface = this.reactSurface;
            ViewGroup viewGroup = null;
            if (reactSurface == null) {
                return null;
            }
            if (reactSurface != null) {
                viewGroup = reactSurface.getView();
            }
            return (ReactRootView) viewGroup;
        }
        return this.internalReactRootView;
    }

    protected final boolean isFabricEnabled() {
        return this.isFabricEnabled;
    }

    public final void loadApp() {
        String str = this.mainComponentName;
        if (str != null) {
            loadApp(str);
            return;
        }
        throw new IllegalArgumentException("Cannot loadApp without a main component name.");
    }

    public final void onActivityResult(int i10, int i11, Intent intent, boolean z10) {
        ReactNativeHost reactNativeHost;
        ReactInstanceManager reactInstanceManager;
        ReactHost reactHost;
        if (ReactNativeNewArchitectureFeatureFlags.enableBridgelessArchitecture() && (reactHost = this.reactHost) != null && z10) {
            if (reactHost != null) {
                reactHost.onActivityResult(this.activity, i10, i11, intent);
                return;
            }
            return;
        }
        ReactNativeHost reactNativeHost2 = this.reactNativeHost;
        if (reactNativeHost2 != null && reactNativeHost2.hasInstance() && z10 && (reactNativeHost = this.reactNativeHost) != null && (reactInstanceManager = reactNativeHost.getReactInstanceManager()) != null) {
            reactInstanceManager.onActivityResult(this.activity, i10, i11, intent);
        }
    }

    public final boolean onBackPressed() {
        ReactInstanceManager reactInstanceManager;
        ReactHost reactHost;
        if (ReactNativeNewArchitectureFeatureFlags.enableBridgelessArchitecture() && (reactHost = this.reactHost) != null) {
            if (reactHost != null) {
                reactHost.onBackPressed();
            }
            return true;
        }
        ReactNativeHost reactNativeHost = this.reactNativeHost;
        if (reactNativeHost != null && reactNativeHost.hasInstance()) {
            ReactNativeHost reactNativeHost2 = this.reactNativeHost;
            if (reactNativeHost2 != null && (reactInstanceManager = reactNativeHost2.getReactInstanceManager()) != null) {
                reactInstanceManager.onBackPressed();
            }
            return true;
        }
        return false;
    }

    public final void onConfigurationChanged(Configuration configuration) {
        ReactHost reactHost;
        if (ReactNativeNewArchitectureFeatureFlags.enableBridgelessArchitecture() && (reactHost = this.reactHost) != null) {
            if (reactHost != null) {
                Activity activity = this.activity;
                if (activity != null) {
                    reactHost.onConfigurationChanged(activity);
                    return;
                }
                throw new IllegalStateException("Required value was null.");
            }
            return;
        }
        ReactNativeHost reactNativeHost = this.reactNativeHost;
        if (reactNativeHost != null && reactNativeHost.hasInstance()) {
            ReactInstanceManager reactInstanceManager = getReactInstanceManager();
            Activity activity2 = this.activity;
            if (activity2 != null) {
                reactInstanceManager.onConfigurationChanged(activity2, configuration);
                return;
            }
            throw new IllegalStateException("Required value was null.");
        }
    }

    public final void onHostDestroy() {
        ReactNativeHost reactNativeHost;
        ReactInstanceManager reactInstanceManager;
        ReactHost reactHost;
        unloadApp();
        if (ReactNativeNewArchitectureFeatureFlags.enableBridgelessArchitecture() && (reactHost = this.reactHost) != null) {
            if (reactHost != null) {
                reactHost.onHostDestroy(this.activity);
                return;
            }
            return;
        }
        ReactNativeHost reactNativeHost2 = this.reactNativeHost;
        if (reactNativeHost2 != null && reactNativeHost2.hasInstance() && (reactNativeHost = this.reactNativeHost) != null && (reactInstanceManager = reactNativeHost.getReactInstanceManager()) != null) {
            reactInstanceManager.onHostDestroy(this.activity);
        }
    }

    public final void onHostPause() {
        ReactNativeHost reactNativeHost;
        ReactInstanceManager reactInstanceManager;
        ReactHost reactHost;
        if (ReactNativeNewArchitectureFeatureFlags.enableBridgelessArchitecture() && (reactHost = this.reactHost) != null) {
            if (reactHost != null) {
                reactHost.onHostPause(this.activity);
                return;
            }
            return;
        }
        ReactNativeHost reactNativeHost2 = this.reactNativeHost;
        if (reactNativeHost2 != null && reactNativeHost2.hasInstance() && (reactNativeHost = this.reactNativeHost) != null && (reactInstanceManager = reactNativeHost.getReactInstanceManager()) != null) {
            reactInstanceManager.onHostPause(this.activity);
        }
    }

    public final void onHostResume() {
        ReactNativeHost reactNativeHost;
        ReactInstanceManager reactInstanceManager;
        ReactHost reactHost;
        if (this.activity instanceof DefaultHardwareBackBtnHandler) {
            if (ReactNativeNewArchitectureFeatureFlags.enableBridgelessArchitecture() && (reactHost = this.reactHost) != null) {
                if (reactHost != null) {
                    Activity activity = this.activity;
                    Intrinsics.checkNotNull(activity, "null cannot be cast to non-null type com.facebook.react.modules.core.DefaultHardwareBackBtnHandler");
                    reactHost.onHostResume(activity, (DefaultHardwareBackBtnHandler) activity);
                    return;
                }
                return;
            }
            ReactNativeHost reactNativeHost2 = this.reactNativeHost;
            if (reactNativeHost2 != null && reactNativeHost2.hasInstance() && (reactNativeHost = this.reactNativeHost) != null && (reactInstanceManager = reactNativeHost.getReactInstanceManager()) != null) {
                Activity activity2 = this.activity;
                Intrinsics.checkNotNull(activity2, "null cannot be cast to non-null type com.facebook.react.modules.core.DefaultHardwareBackBtnHandler");
                reactInstanceManager.onHostResume(activity2, (DefaultHardwareBackBtnHandler) activity2);
                return;
            }
            return;
        }
        String simpleName = this.activity.getClass().getSimpleName();
        throw new ClassCastException("Host Activity `" + simpleName + "` does not implement DefaultHardwareBackBtnHandler");
    }

    /* JADX WARN: Code restructure failed: missing block: B:10:0x001a, code lost:
        if (r2 == null) goto L13;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final boolean onKeyDown(int r2, @org.jetbrains.annotations.NotNull android.view.KeyEvent r3) {
        /*
            r1 = this;
            java.lang.String r0 = "event"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r3, r0)
            r0 = 90
            if (r2 != r0) goto L34
            boolean r2 = com.facebook.react.internal.featureflags.ReactNativeNewArchitectureFeatureFlags.enableBridgelessArchitecture()
            r0 = 1
            if (r2 == 0) goto L1c
            com.facebook.react.ReactHost r2 = r1.reactHost
            if (r2 == 0) goto L19
            com.facebook.react.devsupport.interfaces.DevSupportManager r2 = r2.getDevSupportManager()
            goto L1a
        L19:
            r2 = 0
        L1a:
            if (r2 != 0) goto L30
        L1c:
            com.facebook.react.ReactNativeHost r2 = r1.reactNativeHost
            if (r2 == 0) goto L34
            boolean r2 = r2.hasInstance()
            if (r2 != r0) goto L34
            com.facebook.react.ReactNativeHost r2 = r1.reactNativeHost
            if (r2 == 0) goto L34
            boolean r2 = r2.getUseDeveloperSupport()
            if (r2 != r0) goto L34
        L30:
            r3.startTracking()
            return r0
        L34:
            r2 = 0
            return r2
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.ReactDelegate.onKeyDown(int, android.view.KeyEvent):boolean");
    }

    public final boolean onKeyLongPress(int i10) {
        ReactNativeHost reactNativeHost;
        ReactInstanceManager reactInstanceManager;
        ReactHost reactHost;
        DevSupportManager devSupportManager;
        if (i10 == 90) {
            if (ReactNativeNewArchitectureFeatureFlags.enableBridgelessArchitecture() && (reactHost = this.reactHost) != null) {
                if (reactHost != null) {
                    devSupportManager = reactHost.getDevSupportManager();
                } else {
                    devSupportManager = null;
                }
                if (devSupportManager != null && !(devSupportManager instanceof ReleaseDevSupportManager)) {
                    devSupportManager.showDevOptionsDialog();
                    return true;
                }
                return false;
            }
            ReactNativeHost reactNativeHost2 = this.reactNativeHost;
            if (reactNativeHost2 != null && reactNativeHost2.hasInstance() && (reactNativeHost = this.reactNativeHost) != null && reactNativeHost.getUseDeveloperSupport()) {
                ReactNativeHost reactNativeHost3 = this.reactNativeHost;
                if (reactNativeHost3 != null && (reactInstanceManager = reactNativeHost3.getReactInstanceManager()) != null) {
                    reactInstanceManager.showDevOptionsDialog();
                }
                return true;
            }
            return false;
        }
        return false;
    }

    public final boolean onNewIntent(@NotNull Intent intent) {
        ReactInstanceManager reactInstanceManager;
        ReactHost reactHost;
        Intrinsics.checkNotNullParameter(intent, "intent");
        if (ReactNativeNewArchitectureFeatureFlags.enableBridgelessArchitecture() && (reactHost = this.reactHost) != null) {
            if (reactHost != null) {
                reactHost.onNewIntent(intent);
            }
            return true;
        }
        ReactNativeHost reactNativeHost = this.reactNativeHost;
        if (reactNativeHost != null && reactNativeHost.hasInstance()) {
            ReactNativeHost reactNativeHost2 = this.reactNativeHost;
            if (reactNativeHost2 != null && (reactInstanceManager = reactNativeHost2.getReactInstanceManager()) != null) {
                reactInstanceManager.onNewIntent(intent);
            }
            return true;
        }
        return false;
    }

    public final void onUserLeaveHint() {
        ReactNativeHost reactNativeHost;
        ReactInstanceManager reactInstanceManager;
        ReactHost reactHost;
        if (ReactNativeNewArchitectureFeatureFlags.enableBridgelessArchitecture() && (reactHost = this.reactHost) != null) {
            if (reactHost != null) {
                reactHost.onHostLeaveHint(this.activity);
                return;
            }
            return;
        }
        ReactNativeHost reactNativeHost2 = this.reactNativeHost;
        if (reactNativeHost2 != null && reactNativeHost2.hasInstance() && (reactNativeHost = this.reactNativeHost) != null && (reactInstanceManager = reactNativeHost.getReactInstanceManager()) != null) {
            reactInstanceManager.onUserLeaveHint(this.activity);
        }
    }

    public final void onWindowFocusChanged(boolean z10) {
        ReactNativeHost reactNativeHost;
        ReactInstanceManager reactInstanceManager;
        ReactHost reactHost;
        if (ReactNativeNewArchitectureFeatureFlags.enableBridgelessArchitecture() && (reactHost = this.reactHost) != null) {
            if (reactHost != null) {
                reactHost.onWindowFocusChange(z10);
                return;
            }
            return;
        }
        ReactNativeHost reactNativeHost2 = this.reactNativeHost;
        if (reactNativeHost2 != null && reactNativeHost2.hasInstance() && (reactNativeHost = this.reactNativeHost) != null && (reactInstanceManager = reactNativeHost.getReactInstanceManager()) != null) {
            reactInstanceManager.onWindowFocusChange(z10);
        }
    }

    public final void reload() {
        DevSupportManager devSupportManager = getDevSupportManager();
        if (devSupportManager != null) {
            if (devSupportManager instanceof ReleaseDevSupportManager) {
                if (ReactNativeNewArchitectureFeatureFlags.enableBridgelessArchitecture()) {
                    ReactHost reactHost = this.reactHost;
                    if (reactHost != null) {
                        reactHost.reload("ReactDelegate.reload()");
                        return;
                    }
                    return;
                }
                UiThreadUtil.runOnUiThread(new Runnable() { // from class: com.facebook.react.h
                    @Override // java.lang.Runnable
                    public final void run() {
                        ReactDelegate.reload$lambda$0(ReactDelegate.this);
                    }
                });
                return;
            }
            devSupportManager.handleReloadJS();
        }
    }

    public final void setReactRootView(ReactRootView reactRootView) {
        this.internalReactRootView = reactRootView;
    }

    public final void setReactSurface(ReactSurface reactSurface) {
        this.reactSurface = reactSurface;
    }

    public final boolean shouldShowDevMenuOrReload(int i10, KeyEvent keyEvent) {
        Boolean bool;
        DevSupportManager devSupportManager = getDevSupportManager();
        if (devSupportManager != null && !(devSupportManager instanceof ReleaseDevSupportManager)) {
            if (i10 == 82) {
                devSupportManager.showDevOptionsDialog();
                return true;
            }
            DoubleTapReloadRecognizer doubleTapReloadRecognizer = this.doubleTapReloadRecognizer;
            if (doubleTapReloadRecognizer != null) {
                bool = Boolean.valueOf(doubleTapReloadRecognizer.didDoubleTapR(i10, this.activity.getCurrentFocus()));
            } else {
                bool = null;
            }
            if (Intrinsics.areEqual(bool, Boolean.TRUE)) {
                devSupportManager.handleReloadJS();
                return true;
            }
        }
        return false;
    }

    public final void unloadApp() {
        if (ReactNativeNewArchitectureFeatureFlags.enableBridgelessArchitecture()) {
            ReactSurface reactSurface = this.reactSurface;
            if (reactSurface != null) {
                reactSurface.stop();
            }
            this.reactSurface = null;
            return;
        }
        ReactRootView reactRootView = this.internalReactRootView;
        if (reactRootView != null) {
            if (reactRootView != null) {
                reactRootView.unmountReactApplication();
            }
            this.internalReactRootView = null;
        }
    }

    public final void loadApp(@NotNull String appKey) {
        Intrinsics.checkNotNullParameter(appKey, "appKey");
        if (ReactNativeNewArchitectureFeatureFlags.enableBridgelessArchitecture()) {
            ReactHost reactHost = this.reactHost;
            if (this.reactSurface == null && reactHost != null) {
                this.reactSurface = reactHost.createSurface(this.activity, appKey, this.launchOptions);
            }
            ReactSurface reactSurface = this.reactSurface;
            if (reactSurface != null) {
                reactSurface.start();
            }
        } else if (this.internalReactRootView == null) {
            ReactRootView createRootView = createRootView();
            this.internalReactRootView = createRootView;
            ReactNativeHost reactNativeHost = this.reactNativeHost;
            if (reactNativeHost == null || createRootView == null) {
                return;
            }
            createRootView.startReactApplication(reactNativeHost != null ? reactNativeHost.getReactInstanceManager() : null, appKey, this.launchOptions);
        } else {
            throw new IllegalStateException("Cannot loadApp while app is already running.");
        }
    }

    public ReactDelegate(@NotNull Activity activity, ReactHost reactHost, String str, Bundle bundle) {
        Intrinsics.checkNotNullParameter(activity, "activity");
        this.isFabricEnabled = ReactNativeNewArchitectureFeatureFlags.enableFabricRenderer();
        this.activity = activity;
        this.mainComponentName = str;
        this.launchOptions = bundle;
        this.doubleTapReloadRecognizer = new DoubleTapReloadRecognizer();
        this.reactHost = reactHost;
    }

    @jr.c
    public ReactDelegate(@NotNull Activity activity, ReactNativeHost reactNativeHost, String str, Bundle bundle, boolean z10) {
        Intrinsics.checkNotNullParameter(activity, "activity");
        ReactNativeNewArchitectureFeatureFlags.enableFabricRenderer();
        this.isFabricEnabled = z10;
        this.activity = activity;
        this.mainComponentName = str;
        this.launchOptions = bundle;
        this.doubleTapReloadRecognizer = new DoubleTapReloadRecognizer();
        this.reactNativeHost = reactNativeHost;
    }
}
