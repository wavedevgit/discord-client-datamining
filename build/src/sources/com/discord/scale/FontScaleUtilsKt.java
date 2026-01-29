package com.discord.scale;

import android.content.Context;
import android.content.res.Configuration;
import android.content.res.Resources;
import com.discord.react.FontManager;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0016\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u001a\n\u0010\u0000\u001a\u00020\u0001*\u00020\u0001\u001a\n\u0010\u0002\u001a\u00020\u0003*\u00020\u0001\u001a\u0014\u0010\u0004\u001a\u00020\u0005*\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0001H\u0002¨\u0006\u0007"}, d2 = {"getFontScaledContext", "Landroid/content/Context;", "setFontScaleDeprecated", "", "modifyFontScale", "Landroid/content/res/Configuration;", "context", "fonts_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class FontScaleUtilsKt {
    @NotNull
    public static final Context getFontScaledContext(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "<this>");
        Configuration configuration = context.getResources().getConfiguration();
        Intrinsics.checkNotNullExpressionValue(configuration, "getConfiguration(...)");
        Context createConfigurationContext = context.createConfigurationContext(modifyFontScale(configuration, context));
        Intrinsics.checkNotNullExpressionValue(createConfigurationContext, "createConfigurationContext(...)");
        return createConfigurationContext;
    }

    private static final Configuration modifyFontScale(Configuration configuration, Context context) {
        configuration.fontScale = FontManager.INSTANCE.getScaledFontSize(context);
        return configuration;
    }

    public static final void setFontScaleDeprecated(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "<this>");
        Resources resources = context.getResources();
        Configuration configuration = context.getResources().getConfiguration();
        Intrinsics.checkNotNullExpressionValue(configuration, "getConfiguration(...)");
        resources.updateConfiguration(modifyFontScale(configuration, context), context.getResources().getDisplayMetrics());
    }
}
