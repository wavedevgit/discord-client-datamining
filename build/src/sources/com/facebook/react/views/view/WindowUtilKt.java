package com.facebook.react.views.view;

import android.content.Context;
import android.graphics.Color;
import android.os.Build;
import android.view.View;
import android.view.Window;
import android.view.WindowInsets;
import android.view.WindowManager;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsControllerCompat;
import androidx.core.view.h0;
import androidx.core.view.w0;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.common.UiModeUtils;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000 \n\u0000\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\b\u001a\u0006\u0010\n\u001a\u00020\u000b\u001a\u0014\u0010\f\u001a\u00020\u000b*\u00020\r2\u0006\u0010\u000e\u001a\u00020\u0007H\u0000\u001a\u0014\u0010\u000f\u001a\u00020\u000b*\u00020\r2\u0006\u0010\u0010\u001a\u00020\u0007H\u0000\u001a\f\u0010\u0011\u001a\u00020\u000b*\u00020\rH\u0002\u001a\f\u0010\u0012\u001a\u00020\u000b*\u00020\rH\u0002\u001a\f\u0010\u0013\u001a\u00020\u000b*\u00020\rH\u0000\u001a\f\u0010\u0014\u001a\u00020\u000b*\u00020\rH\u0000\"\u0014\u0010\u0000\u001a\u00020\u0001X\u0080\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0002\u0010\u0003\"\u0014\u0010\u0004\u001a\u00020\u0001X\u0080\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0005\u0010\u0003\"\u001e\u0010\b\u001a\u00020\u00072\u0006\u0010\u0006\u001a\u00020\u0007@BX\u0086\u000e¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\t¨\u0006\u0015"}, d2 = {"LightNavigationBarColor", "", "getLightNavigationBarColor", "()I", "DarkNavigationBarColor", "getDarkNavigationBarColor", "value", "", "isEdgeToEdgeFeatureFlagOn", "()Z", "setEdgeToEdgeFeatureFlagOn", "", "setStatusBarTranslucency", "Landroid/view/Window;", "isTranslucent", "setStatusBarVisibility", "isHidden", "statusBarHide", "statusBarShow", "enableEdgeToEdge", "disableEdgeToEdge", "ReactAndroid_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class WindowUtilKt {
    private static boolean isEdgeToEdgeFeatureFlagOn;
    private static final int LightNavigationBarColor = Color.argb(230, (int) SetSpanOperation.SPAN_MAX_PRIORITY, (int) SetSpanOperation.SPAN_MAX_PRIORITY, (int) SetSpanOperation.SPAN_MAX_PRIORITY);
    private static final int DarkNavigationBarColor = Color.argb((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT, 27, 27, 27);

    public static final void disableEdgeToEdge(@NotNull Window window) {
        Intrinsics.checkNotNullParameter(window, "<this>");
        w0.c(window, true);
    }

    public static final void enableEdgeToEdge(@NotNull Window window) {
        Intrinsics.checkNotNullParameter(window, "<this>");
        int i10 = 0;
        w0.c(window, false);
        Context context = window.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        boolean isDarkMode = UiModeUtils.isDarkMode(context);
        int i11 = Build.VERSION.SDK_INT;
        int i12 = 1;
        if (i11 >= 29) {
            window.setStatusBarContrastEnforced(false);
            window.setNavigationBarContrastEnforced(true);
        }
        window.setStatusBarColor(0);
        if (i11 < 29) {
            if (i11 >= 26 && !isDarkMode) {
                i10 = LightNavigationBarColor;
            } else {
                i10 = DarkNavigationBarColor;
            }
        }
        window.setNavigationBarColor(i10);
        new WindowInsetsControllerCompat(window, window.getDecorView()).d(!isDarkMode);
        if (i11 >= 28) {
            WindowManager.LayoutParams attributes = window.getAttributes();
            if (i11 >= 30) {
                i12 = 3;
            }
            attributes.layoutInDisplayCutoutMode = i12;
        }
    }

    public static final int getDarkNavigationBarColor() {
        return DarkNavigationBarColor;
    }

    public static final int getLightNavigationBarColor() {
        return LightNavigationBarColor;
    }

    public static final boolean isEdgeToEdgeFeatureFlagOn() {
        return isEdgeToEdgeFeatureFlagOn;
    }

    public static final void setEdgeToEdgeFeatureFlagOn() {
        isEdgeToEdgeFeatureFlagOn = true;
    }

    public static final void setStatusBarTranslucency(@NotNull Window window, boolean z10) {
        Intrinsics.checkNotNullParameter(window, "<this>");
        if (z10) {
            window.getDecorView().setOnApplyWindowInsetsListener(new View.OnApplyWindowInsetsListener() { // from class: com.facebook.react.views.view.e
                @Override // android.view.View.OnApplyWindowInsetsListener
                public final WindowInsets onApplyWindowInsets(View view, WindowInsets windowInsets) {
                    WindowInsets statusBarTranslucency$lambda$0;
                    statusBarTranslucency$lambda$0 = WindowUtilKt.setStatusBarTranslucency$lambda$0(view, windowInsets);
                    return statusBarTranslucency$lambda$0;
                }
            });
        } else {
            window.getDecorView().setOnApplyWindowInsetsListener(null);
        }
        h0.k0(window.getDecorView());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final WindowInsets setStatusBarTranslucency$lambda$0(View v10, WindowInsets insets) {
        Intrinsics.checkNotNullParameter(v10, "v");
        Intrinsics.checkNotNullParameter(insets, "insets");
        WindowInsets onApplyWindowInsets = v10.onApplyWindowInsets(insets);
        return onApplyWindowInsets.replaceSystemWindowInsets(onApplyWindowInsets.getSystemWindowInsetLeft(), 0, onApplyWindowInsets.getSystemWindowInsetRight(), onApplyWindowInsets.getSystemWindowInsetBottom());
    }

    public static final void setStatusBarVisibility(@NotNull Window window, boolean z10) {
        Intrinsics.checkNotNullParameter(window, "<this>");
        if (z10) {
            statusBarHide(window);
        } else {
            statusBarShow(window);
        }
    }

    private static final void statusBarHide(Window window) {
        if (isEdgeToEdgeFeatureFlagOn) {
            WindowInsetsControllerCompat windowInsetsControllerCompat = new WindowInsetsControllerCompat(window, window.getDecorView());
            windowInsetsControllerCompat.f(2);
            windowInsetsControllerCompat.b(WindowInsetsCompat.p.g());
            return;
        }
        if (Build.VERSION.SDK_INT >= 30) {
            window.getAttributes().layoutInDisplayCutoutMode = 1;
            window.setDecorFitsSystemWindows(false);
        }
        window.addFlags(IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET);
        window.clearFlags(RecyclerView.ItemAnimator.FLAG_MOVED);
    }

    private static final void statusBarShow(Window window) {
        if (isEdgeToEdgeFeatureFlagOn) {
            WindowInsetsControllerCompat windowInsetsControllerCompat = new WindowInsetsControllerCompat(window, window.getDecorView());
            windowInsetsControllerCompat.f(2);
            windowInsetsControllerCompat.g(WindowInsetsCompat.p.g());
            return;
        }
        if (Build.VERSION.SDK_INT >= 30) {
            window.getAttributes().layoutInDisplayCutoutMode = 0;
            window.setDecorFitsSystemWindows(true);
        }
        window.addFlags(RecyclerView.ItemAnimator.FLAG_MOVED);
        window.clearFlags(IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET);
    }
}
