package com.discord.theme.utils;

import android.app.Activity;
import android.content.Context;
import android.graphics.drawable.ColorDrawable;
import android.view.Window;
import com.discord.theme.R;
import com.discord.theme.ThemeManager;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\bÀ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0011\u0010\u0004\u001a\u00020\u0005*\u00020\u0006H\u0000¢\u0006\u0002\b\u0007J\u0011\u0010\b\u001a\u00020\u0005*\u00020\u0006H\u0000¢\u0006\u0002\b\t¨\u0006\n"}, d2 = {"Lcom/discord/theme/utils/ActivityThemeUtils;", "", "<init>", "()V", "updateActivityTheming", "", "Landroid/app/Activity;", "updateActivityTheming$theme_release", "updateWindowBackground", "updateWindowBackground$theme_release", "theme_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nActivityThemeUtils.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ActivityThemeUtils.kt\ncom/discord/theme/utils/ActivityThemeUtils\n+ 2 ColorDrawable.kt\nandroidx/core/graphics/drawable/ColorDrawableKt\n*L\n1#1,46:1\n27#2:47\n*S KotlinDebug\n*F\n+ 1 ActivityThemeUtils.kt\ncom/discord/theme/utils/ActivityThemeUtils\n*L\n33#1:47\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ActivityThemeUtils {
    @NotNull
    public static final ActivityThemeUtils INSTANCE = new ActivityThemeUtils();

    private ActivityThemeUtils() {
    }

    public final void updateActivityTheming$theme_release(@NotNull Activity activity) {
        Intrinsics.checkNotNullParameter(activity, "<this>");
        UpdateSystemUiKt.updateSystemUi(activity);
        updateWindowBackground$theme_release(activity);
    }

    public final void updateWindowBackground$theme_release(@NotNull Activity activity) {
        int i10;
        int i11;
        Intrinsics.checkNotNullParameter(activity, "<this>");
        ThemeManager themeManager = ThemeManager.INSTANCE;
        if (!themeManager.isInitialized()) {
            return;
        }
        if (!themeManager.shouldShowSplashImage$theme_release()) {
            Window window = activity.getWindow();
            Context applicationContext = activity.getApplicationContext();
            Intrinsics.checkNotNullExpressionValue(applicationContext, "getApplicationContext(...)");
            if (themeManager.isThemeDark()) {
                i11 = R.color.primary_660;
            } else {
                i11 = R.color.primary_160;
            }
            window.setBackgroundDrawable(new ColorDrawable(ColorUtilsKt.getColorCompat(applicationContext, i11)));
            return;
        }
        Window window2 = activity.getWindow();
        if (themeManager.isThemeDark()) {
            i10 = R.drawable.background_splash_dark;
        } else {
            i10 = R.drawable.background_splash_light;
        }
        window2.setBackgroundDrawableResource(i10);
    }
}
