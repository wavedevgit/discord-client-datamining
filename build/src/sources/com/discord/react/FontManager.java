package com.discord.react;

import android.content.Context;
import android.content.SharedPreferences;
import com.discord.misc.utilities.size.SizeUtilsKt;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.MutablePropertyReference1Impl;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.properties.ReadWriteProperty;
import kotlin.properties.a;
import kotlin.reflect.KProperty;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000B\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0007\n\u0002\b\b\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0003\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u0010J\"\u0010\u0011\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00102\b\b\u0002\u0010\u0012\u001a\u00020\u00052\b\b\u0002\u0010\u0013\u001a\u00020\u0014J\u000e\u0010\u0015\u001a\u00020\u00052\u0006\u0010\u000f\u001a\u00020\u0010J\u000e\u0010\u0016\u001a\u00020\u00052\u0006\u0010\u000f\u001a\u00020\u0010J\u0016\u0010\u0017\u001a\u00020\u00182\u0006\u0010\u0019\u001a\u00020\u00182\u0006\u0010\u000f\u001a\u00020\u0010J\u0016\u0010\u001a\u001a\u00020\u00182\u0006\u0010\u001b\u001a\u00020\u00182\u0006\u0010\u000f\u001a\u00020\u0010J\u0016\u0010\u001c\u001a\u00020\u00182\u0006\u0010\u001d\u001a\u00020\u00182\u0006\u0010\u000f\u001a\u00020\u0010J\u000e\u0010\u001e\u001a\u00020\u00142\u0006\u0010\u000f\u001a\u00020\u0010J\u0014\u0010\u001f\u001a\n !*\u0004\u0018\u00010 0 *\u00020\u0010H\u0002R+\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0004\u001a\u00020\u00058B@BX\u0082\u008e\u0002¢\u0006\u0012\n\u0004\b\u000b\u0010\f\u001a\u0004\b\u0007\u0010\b\"\u0004\b\t\u0010\nR\u000e\u0010\"\u001a\u00020#X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010$\u001a\u00020#X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010%\u001a\u00020\u0014X\u0082T¢\u0006\u0002\n\u0000¨\u0006&"}, d2 = {"Lcom/discord/react/FontManager;", "", "<init>", "()V", "<set-?>", "", "initialFontSize", "getInitialFontSize", "()F", "setInitialFontSize", "(F)V", "initialFontSize$delegate", "Lkotlin/properties/ReadWriteProperty;", "init", "", "context", "Landroid/content/Context;", "setFontSize", "fontScale", "isClassicChatFontScaleEnabled", "", "getFontScale", "getScaledFontSize", "getScaledPx", "", "px", "getScaledDpToPx", "dp", "getScaledSpToPx", "sp", "getIsClassicChatFontScaleEnabled", "getCache", "Landroid/content/SharedPreferences;", "kotlin.jvm.PlatformType", FontManager.FONT_SCALE_KEY, "", FontManager.FONT_SCALE_CHAT_CLASSIC_KEY, "FONT_SCALE_CHAT_CLASSIC_DEFAULT", "fonts_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nFontManager.kt\nKotlin\n*S Kotlin\n*F\n+ 1 FontManager.kt\ncom/discord/react/FontManager\n+ 2 SharedPreferences.kt\nandroidx/core/content/SharedPreferencesKt\n*L\n1#1,89:1\n45#2,8:90\n40#2,13:98\n*S KotlinDebug\n*F\n+ 1 FontManager.kt\ncom/discord/react/FontManager\n*L\n22#1:90,8\n74#1:98,13\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class FontManager {
    private static final boolean FONT_SCALE_CHAT_CLASSIC_DEFAULT = false;
    @NotNull
    private static final String FONT_SCALE_CHAT_CLASSIC_KEY = "FONT_SCALE_CHAT_CLASSIC_KEY";
    @NotNull
    private static final String FONT_SCALE_KEY = "FONT_SCALE_KEY";
    static final /* synthetic */ KProperty[] $$delegatedProperties = {Reflection.mutableProperty1(new MutablePropertyReference1Impl(FontManager.class, "initialFontSize", "getInitialFontSize()F", 0))};
    @NotNull
    public static final FontManager INSTANCE = new FontManager();
    @NotNull
    private static final ReadWriteProperty initialFontSize$delegate = a.f32095a.a();

    private FontManager() {
    }

    private final SharedPreferences getCache(Context context) {
        return context.getSharedPreferences("FontScaleManager", 0);
    }

    private final float getInitialFontSize() {
        return ((Number) initialFontSize$delegate.getValue(this, $$delegatedProperties[0])).floatValue();
    }

    public static /* synthetic */ void setFontSize$default(FontManager fontManager, Context context, float f10, boolean z10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            f10 = fontManager.getFontScale(context);
        }
        if ((i10 & 4) != 0) {
            z10 = fontManager.getIsClassicChatFontScaleEnabled(context);
        }
        fontManager.setFontSize(context, f10, z10);
    }

    private final void setInitialFontSize(float f10) {
        initialFontSize$delegate.setValue(this, $$delegatedProperties[0], Float.valueOf(f10));
    }

    public final synchronized float getFontScale(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        return getCache(context).getFloat(FONT_SCALE_KEY, 1.0f);
    }

    public final synchronized boolean getIsClassicChatFontScaleEnabled(@NotNull Context context) {
        try {
            Intrinsics.checkNotNullParameter(context, "context");
            if (!getCache(context).contains(FONT_SCALE_CHAT_CLASSIC_KEY)) {
                SharedPreferences cache = getCache(context);
                Intrinsics.checkNotNullExpressionValue(cache, "getCache(...)");
                SharedPreferences.Editor edit = cache.edit();
                edit.putBoolean(FONT_SCALE_CHAT_CLASSIC_KEY, false);
                edit.apply();
            }
        } catch (Throwable th2) {
            throw th2;
        }
        return getCache(context).getBoolean(FONT_SCALE_CHAT_CLASSIC_KEY, false);
    }

    public final synchronized int getScaledDpToPx(int i10, @NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        return getScaledPx(SizeUtilsKt.getDpToPx(i10), context);
    }

    public final synchronized float getScaledFontSize(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        return getInitialFontSize() * getFontScale(context);
    }

    public final synchronized int getScaledPx(int i10, @NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        return (int) (i10 * getFontScale(context));
    }

    public final synchronized int getScaledSpToPx(int i10, @NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        return getScaledPx(SizeUtilsKt.getSpToPx(i10), context);
    }

    public final void init(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        setInitialFontSize(context.getResources().getConfiguration().fontScale);
    }

    public final synchronized void setFontSize(@NotNull Context context, float f10, boolean z10) {
        Intrinsics.checkNotNullParameter(context, "context");
        SharedPreferences cache = getCache(context);
        Intrinsics.checkNotNullExpressionValue(cache, "getCache(...)");
        SharedPreferences.Editor edit = cache.edit();
        edit.putFloat(FONT_SCALE_KEY, f10);
        edit.putBoolean(FONT_SCALE_CHAT_CLASSIC_KEY, z10);
        edit.commit();
    }
}
