package com.discord.theme.utils;

import android.app.Activity;
import android.os.Build;
import android.view.View;
import android.view.WindowInsetsController;
import androidx.core.view.WindowInsetsControllerCompat;
import androidx.core.view.w0;
import com.discord.misc.utilities.activity.ActivityExtensionsKt;
import com.discord.theme.ThemeManager;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u001c\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\u001a\f\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\u0000\u001a\f\u0010\u0000\u001a\u00020\u0001*\u00020\u0003H\u0000\u001a\u0014\u0010\u0004\u001a\u00020\u0001*\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007H\u0002¨\u0006\b"}, d2 = {"updateSystemUi", "", "Landroid/view/View;", "Landroid/app/Activity;", "setLightTheme", "Landroidx/core/view/WindowInsetsControllerCompat;", "isLightTheme", "", "theme_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class UpdateSystemUiKt {
    private static final void setLightTheme(WindowInsetsControllerCompat windowInsetsControllerCompat, boolean z10) {
        windowInsetsControllerCompat.e(z10);
        windowInsetsControllerCompat.d(z10);
    }

    public static final void updateSystemUi(@NotNull View view) {
        WindowInsetsController windowInsetsController;
        Intrinsics.checkNotNullParameter(view, "<this>");
        ThemeManager themeManager = ThemeManager.INSTANCE;
        if (themeManager.isInitialized()) {
            boolean isThemeLight = themeManager.isThemeLight();
            if (Build.VERSION.SDK_INT < 30 || (windowInsetsController = view.getWindowInsetsController()) == null) {
                return;
            }
            WindowInsetsControllerCompat h10 = WindowInsetsControllerCompat.h(windowInsetsController);
            Intrinsics.checkNotNullExpressionValue(h10, "toWindowInsetsControllerCompat(...)");
            setLightTheme(h10, isThemeLight);
        }
    }

    public static final void updateSystemUi(@NotNull Activity activity) {
        Intrinsics.checkNotNullParameter(activity, "<this>");
        ThemeManager themeManager = ThemeManager.INSTANCE;
        if (themeManager.isInitialized()) {
            boolean isThemeLight = themeManager.isThemeLight();
            View rootView = ActivityExtensionsKt.getRootView(activity);
            if (rootView != null) {
                WindowInsetsControllerCompat b10 = w0.b(activity.getWindow(), rootView);
                Intrinsics.checkNotNullExpressionValue(b10, "getInsetsController(...)");
                setLightTheme(b10, isThemeLight);
            }
        }
    }
}
