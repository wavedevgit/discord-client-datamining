package com.discord.safearea;

import android.app.Activity;
import android.os.Build;
import android.view.Window;
import androidx.core.graphics.Insets;
import androidx.core.view.WindowInsetsCompat;
import com.discord.codegen.NativeSafeAreaInsetsModuleSpec;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.react.utilities.NativeMapExtensionsKt;
import com.discord.safearea.SafeAreaInsetsModule;
import com.discord.safearea.extensions.WindowInsetsCompatExtensionsKt;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.uimanager.ViewProps;
import jr.v;
import kotlin.Metadata;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u0006\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0005\b\u0000\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0010\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000bH\u0016J\n\u0010\f\u001a\u0004\u0018\u00010\rH\u0016J\u0010\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u000bH\u0016J\u0010\u0010\u0011\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u000bH\u0016J\u0010\u0010\u0012\u001a\u00020\u000f2\u0006\u0010\u0013\u001a\u00020\u000bH\u0016R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\u0014"}, d2 = {"Lcom/discord/safearea/SafeAreaInsetsModule;", "Lcom/discord/codegen/NativeSafeAreaInsetsModuleSpec;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "getReactContext", "()Lcom/facebook/react/bridge/ReactApplicationContext;", "getImeInsets", "", "exludeSytemBars", "", "getStableSafeAreaInsets", "Lcom/facebook/react/bridge/WritableMap;", "setStatusBarVisible", "", ViewProps.VISIBLE, "setNavigationBarVisible", "setNavigationBarContrastEnforced", "enforced", "safe_area_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nSafeAreaInsetsModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 SafeAreaInsetsModule.kt\ncom/discord/safearea/SafeAreaInsetsModule\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,112:1\n1#2:113\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class SafeAreaInsetsModule extends NativeSafeAreaInsetsModuleSpec {
    @NotNull
    private final ReactApplicationContext reactContext;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public SafeAreaInsetsModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.reactContext = reactContext;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final WritableNativeMap getStableSafeAreaInsets$lambda$1(int i10, int i11, int i12, int i13) {
        return NativeMapExtensionsKt.nativeMapOf(v.a(ViewProps.LEFT, Float.valueOf(SizeUtilsKt.getPxToDp(i10))), v.a(ViewProps.TOP, Float.valueOf(SizeUtilsKt.getPxToDp(i11))), v.a(ViewProps.RIGHT, Float.valueOf(SizeUtilsKt.getPxToDp(i12))), v.a(ViewProps.BOTTOM, Float.valueOf(SizeUtilsKt.getPxToDp(i13))));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void setNavigationBarContrastEnforced$lambda$4(SafeAreaInsetsModule safeAreaInsetsModule, boolean z10) {
        Activity currentActivity;
        Window window;
        Window window2;
        Window window3;
        int i10 = Build.VERSION.SDK_INT;
        if (i10 < 35) {
            Activity currentActivity2 = safeAreaInsetsModule.reactContext.getCurrentActivity();
            if (currentActivity2 != null && (window3 = currentActivity2.getWindow()) != null) {
                window3.setStatusBarColor(0);
            }
            Activity currentActivity3 = safeAreaInsetsModule.reactContext.getCurrentActivity();
            if (currentActivity3 != null && (window2 = currentActivity3.getWindow()) != null) {
                window2.setNavigationBarColor(0);
            }
        }
        if (i10 >= 29 && (currentActivity = safeAreaInsetsModule.reactContext.getCurrentActivity()) != null && (window = currentActivity.getWindow()) != null) {
            window.setNavigationBarContrastEnforced(z10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void setNavigationBarVisible$lambda$3(SafeAreaInsetsModule safeAreaInsetsModule, boolean z10) {
        Window window;
        Activity currentActivity = safeAreaInsetsModule.getReactApplicationContext().getCurrentActivity();
        if (currentActivity != null && (window = currentActivity.getWindow()) != null) {
            WindowInsetsCompatExtensionsKt.setInsetsType(window, WindowInsetsCompat.p.f(), z10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void setStatusBarVisible$lambda$2(SafeAreaInsetsModule safeAreaInsetsModule, boolean z10) {
        Window window;
        Activity currentActivity = safeAreaInsetsModule.getReactApplicationContext().getCurrentActivity();
        if (currentActivity != null && (window = currentActivity.getWindow()) != null) {
            WindowInsetsCompatExtensionsKt.setInsetsType(window, WindowInsetsCompat.p.g(), z10);
        }
    }

    @Override // com.discord.codegen.NativeSafeAreaInsetsModuleSpec
    public double getImeInsets(boolean z10) {
        WindowInsetsCompat windowInsetsCompat;
        int i10;
        float pxToDp;
        Insets imeInsets$default;
        Activity currentActivity = this.reactContext.getCurrentActivity();
        Insets insets = null;
        if (currentActivity != null) {
            windowInsetsCompat = WindowInsetsCompatExtensionsKt.getWindowInsetsCompat(currentActivity);
        } else {
            windowInsetsCompat = null;
        }
        int i11 = 0;
        if (windowInsetsCompat != null && (imeInsets$default = WindowInsetsCompatExtensionsKt.getImeInsets$default(windowInsetsCompat, false, 1, null)) != null) {
            i10 = imeInsets$default.f3197d;
        } else {
            i10 = 0;
        }
        if (i10 <= 0) {
            return 0.0d;
        }
        Activity currentActivity2 = this.reactContext.getCurrentActivity();
        if (currentActivity2 != null) {
            if (windowInsetsCompat != null) {
                insets = WindowInsetsCompatExtensionsKt.getSystemBarInsets$default(windowInsetsCompat, currentActivity2, false, 2, null);
            }
            if (insets != null) {
                i11 = insets.f3197d;
            }
        }
        if (i11 == i10 && Build.VERSION.SDK_INT <= 29) {
            return 0.0d;
        }
        if (z10) {
            pxToDp = SizeUtilsKt.getPxToDp(i10 - i11);
        } else {
            pxToDp = SizeUtilsKt.getPxToDp(i10);
        }
        return pxToDp;
    }

    @NotNull
    public final ReactApplicationContext getReactContext() {
        return this.reactContext;
    }

    @Override // com.discord.codegen.NativeSafeAreaInsetsModuleSpec
    public WritableMap getStableSafeAreaInsets() {
        WindowInsetsCompat windowInsetsCompat;
        Function4 function4 = new Function4() { // from class: b8.c
            @Override // kotlin.jvm.functions.Function4
            public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
                WritableNativeMap stableSafeAreaInsets$lambda$1;
                stableSafeAreaInsets$lambda$1 = SafeAreaInsetsModule.getStableSafeAreaInsets$lambda$1(((Integer) obj).intValue(), ((Integer) obj2).intValue(), ((Integer) obj3).intValue(), ((Integer) obj4).intValue());
                return stableSafeAreaInsets$lambda$1;
            }
        };
        Activity currentActivity = this.reactContext.getCurrentActivity();
        if (currentActivity == null || (windowInsetsCompat = WindowInsetsCompatExtensionsKt.getWindowInsetsCompat(currentActivity)) == null) {
            return null;
        }
        Insets displayCutoutInsets = WindowInsetsCompatExtensionsKt.getDisplayCutoutInsets(windowInsetsCompat, true);
        Insets systemBarInsets = WindowInsetsCompatExtensionsKt.getSystemBarInsets(windowInsetsCompat, currentActivity, true);
        return (WritableMap) function4.invoke(Integer.valueOf(Math.max(displayCutoutInsets.f3194a, systemBarInsets.f3194a)), Integer.valueOf(Math.max(displayCutoutInsets.f3195b, systemBarInsets.f3195b)), Integer.valueOf(Math.max(displayCutoutInsets.f3196c, systemBarInsets.f3196c)), Integer.valueOf(Math.max(displayCutoutInsets.f3197d, systemBarInsets.f3197d)));
    }

    @Override // com.discord.codegen.NativeSafeAreaInsetsModuleSpec
    public void setNavigationBarContrastEnforced(final boolean z10) {
        UiThreadUtil.runOnUiThread(new Runnable() { // from class: b8.a
            @Override // java.lang.Runnable
            public final void run() {
                SafeAreaInsetsModule.setNavigationBarContrastEnforced$lambda$4(SafeAreaInsetsModule.this, z10);
            }
        });
    }

    @Override // com.discord.codegen.NativeSafeAreaInsetsModuleSpec
    public void setNavigationBarVisible(final boolean z10) {
        UiThreadUtil.runOnUiThread(new Runnable() { // from class: b8.d
            @Override // java.lang.Runnable
            public final void run() {
                SafeAreaInsetsModule.setNavigationBarVisible$lambda$3(SafeAreaInsetsModule.this, z10);
            }
        });
    }

    @Override // com.discord.codegen.NativeSafeAreaInsetsModuleSpec
    public void setStatusBarVisible(final boolean z10) {
        UiThreadUtil.runOnUiThread(new Runnable() { // from class: b8.b
            @Override // java.lang.Runnable
            public final void run() {
                SafeAreaInsetsModule.setStatusBarVisible$lambda$2(SafeAreaInsetsModule.this, z10);
            }
        });
    }
}
