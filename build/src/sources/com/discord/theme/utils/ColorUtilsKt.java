package com.discord.theme.utils;

import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.Resources;
import android.graphics.Color;
import android.graphics.PorterDuff;
import android.view.View;
import android.widget.ImageView;
import androidx.core.widget.f;
import com.discord.theme.DiscordThemeObject;
import com.discord.theme.ThemeManager;
import com.discord.theme.ThemeManagerKt;
import com.facebook.drawee.view.SimpleDraweeView;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.ranges.d;
import kotlin.text.MatchResult;
import kotlin.text.Regex;
import org.jetbrains.annotations.NotNull;
import xr.a;
@Metadata(d1 = {"\u0000V\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0014\n\u0000\n\u0002\u0010\b\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\u0007\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0007\u001a\u0016\u0010\u0004\u001a\u00020\u0005*\u00020\u00062\b\b\u0001\u0010\u0007\u001a\u00020\u0005H\u0007\u001a\"\u0010\u0004\u001a\u00020\u0005*\u00020\b2\b\b\u0001\u0010\u0007\u001a\u00020\u00052\n\u0010\t\u001a\u00060\nR\u00020\bH\u0007\u001a\u0016\u0010\u0004\u001a\u00020\u0005*\u00020\u000b2\b\b\u0001\u0010\f\u001a\u00020\u0005H\u0007\u001a\u001b\u0010\r\u001a\u00020\u000e*\u00020\u000f2\n\b\u0001\u0010\u0010\u001a\u0004\u0018\u00010\u0005¢\u0006\u0002\u0010\u0011\u001a\u001b\u0010\r\u001a\u00020\u000e*\u00020\u00122\n\b\u0001\u0010\u0010\u001a\u0004\u0018\u00010\u0005¢\u0006\u0002\u0010\u0013\u001a\u0010\u0010\u0014\u001a\u00020\u00052\u0006\u0010\u0015\u001a\u00020\u0005H\u0002\u001a\u0012\u0010\u0016\u001a\u00020\u00052\b\u0010\u0017\u001a\u0004\u0018\u00010\u0018H\u0007\u001a\u001a\u0010\u0019\u001a\u00020\u00052\b\b\u0001\u0010\u0015\u001a\u00020\u00052\u0006\u0010\u001a\u001a\u00020\u001bH\u0007\u001a \u0010\u001c\u001a\u00020\u0005*\u00020\u00062\b\b\u0001\u0010\u001d\u001a\u00020\u00052\b\b\u0001\u0010\u001e\u001a\u00020\u0005H\u0007\u001a(\u0010\u001c\u001a\u00020\u0005*\u00020\u00062\b\b\u0001\u0010\u001d\u001a\u00020\u00052\b\b\u0001\u0010\u001e\u001a\u00020\u00052\u0006\u0010\t\u001a\u00020\u001fH\u0007\u001a8\u0010 \u001a\u00020\u00052\b\b\u0001\u0010!\u001a\u00020\u00052\b\b\u0001\u0010\"\u001a\u00020\u00052\u0006\u0010#\u001a\u00020\u001b2\b\b\u0002\u0010$\u001a\u00020\u001b2\b\b\u0002\u0010%\u001a\u00020\u001bH\u0007\"\u000e\u0010\u0000\u001a\u00020\u0001X\u0082\u0004¢\u0006\u0002\n\u0000\"\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006&"}, d2 = {"rgbaPattern", "Lkotlin/text/Regex;", "hsv", "", "getColorCompat", "", "Landroid/content/Context;", StackTraceHelper.ID_KEY, "Landroid/content/res/Resources;", "theme", "Landroid/content/res/Resources$Theme;", "Landroid/view/View;", "colorRes", "setTintColor", "", "Landroid/widget/ImageView;", "colorInt", "(Landroid/widget/ImageView;Ljava/lang/Integer;)V", "Lcom/facebook/drawee/view/SimpleDraweeView;", "(Lcom/facebook/drawee/view/SimpleDraweeView;Ljava/lang/Integer;)V", "applySaturationFactor", ViewProps.COLOR, "rgbaToArgb", "rgbaString", "", "argbWithAdjustedAlpha", "alpha", "", "getThemeColor", "lightColorRes", "darkColorRes", "Lcom/discord/theme/DiscordThemeObject;", "interpolateColors", "colorA", "colorB", "t", "minT", "maxT", "theme_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nColorUtils.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ColorUtils.kt\ncom/discord/theme/utils/ColorUtilsKt\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,150:1\n1#2:151\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ColorUtilsKt {
    @NotNull
    private static final Regex rgbaPattern = new Regex("rgba\\((\\d+),\\s*(\\d+),\\s*(\\d+),\\s*(\\d+(?:\\.\\d*)?|\\.\\d+)\\)");
    @NotNull
    private static final float[] hsv = new float[3];

    private static final int applySaturationFactor(int i10) {
        float saturationFactor = ThemeManager.INSTANCE.getSaturationFactor();
        if (saturationFactor == 1.0f) {
            return i10;
        }
        float[] fArr = hsv;
        Color.colorToHSV(i10, fArr);
        float f10 = fArr[1];
        float f11 = fArr[2];
        float f12 = f11 * f10;
        float f13 = 2;
        float f14 = f11 - (f12 / f13);
        float f15 = 0.0f;
        if (f14 != 0.0f && f14 != 1.0f) {
            f10 = f12 / (1 - Math.abs((2.0f * f14) - 1.0f));
        }
        float min = (f10 * saturationFactor * Math.min(1.0f, 1.0f - f14)) + f14;
        if (min != 0.0f) {
            f15 = f13 * (1.0f - (f14 / min));
        }
        fArr[1] = f15;
        fArr[2] = min;
        return Color.HSVToColor(fArr);
    }

    public static final int argbWithAdjustedAlpha(int i10, float f10) {
        return Color.argb(a.c(Color.alpha(i10) * f10), Color.red(i10), Color.green(i10), Color.blue(i10));
    }

    public static final int getColorCompat(@NotNull Context context, int i10) {
        Intrinsics.checkNotNullParameter(context, "<this>");
        return applySaturationFactor(context.getColor(i10));
    }

    public static final int getThemeColor(@NotNull Context context, int i10, int i11) {
        Intrinsics.checkNotNullParameter(context, "<this>");
        return getThemeColor(context, i10, i11, ThemeManagerKt.getTheme());
    }

    public static final int interpolateColors(int i10, int i11, float f10, float f11, float f12) {
        if (f10 <= f11) {
            return i10;
        }
        if (f10 >= f12) {
            return i11;
        }
        int red = Color.red(i10);
        int green = Color.green(i10);
        int blue = Color.blue(i10);
        int alpha = Color.alpha(i10);
        int red2 = Color.red(i11);
        int green2 = Color.green(i11);
        int blue2 = Color.blue(i11);
        int alpha2 = Color.alpha(i11);
        float f13 = (f10 - f11) / (f12 - f11);
        return Color.argb(d.m((int) (alpha + ((alpha2 - alpha) * f13)), 0, SetSpanOperation.SPAN_MAX_PRIORITY), d.m((int) (red + ((red2 - red) * f13)), 0, SetSpanOperation.SPAN_MAX_PRIORITY), d.m((int) (green + ((green2 - green) * f13)), 0, SetSpanOperation.SPAN_MAX_PRIORITY), d.m((int) (blue + ((blue2 - blue) * f13)), 0, SetSpanOperation.SPAN_MAX_PRIORITY));
    }

    public static /* synthetic */ int interpolateColors$default(int i10, int i11, float f10, float f11, float f12, int i12, Object obj) {
        if ((i12 & 8) != 0) {
            f11 = 0.0f;
        }
        if ((i12 & 16) != 0) {
            f12 = 1.0f;
        }
        return interpolateColors(i10, i11, f10, f11, f12);
    }

    public static final int rgbaToArgb(String str) {
        if (str != null) {
            MatchResult h10 = rgbaPattern.h(str);
            if (h10 != null) {
                MatchResult.b a10 = h10.a();
                return Color.argb((int) (Double.parseDouble((String) a10.a().b().get(4)) * ((double) SetSpanOperation.SPAN_MAX_PRIORITY)), Integer.parseInt((String) a10.a().b().get(1)), Integer.parseInt((String) a10.a().b().get(2)), Integer.parseInt((String) a10.a().b().get(3)));
            }
            return -16777216;
        }
        return 0;
    }

    public static final void setTintColor(@NotNull ImageView imageView, Integer num) {
        Intrinsics.checkNotNullParameter(imageView, "<this>");
        f.c(imageView, num != null ? ColorStateList.valueOf(num.intValue()) : null);
    }

    public static final int getColorCompat(@NotNull Resources resources, int i10, @NotNull Resources.Theme theme) {
        Intrinsics.checkNotNullParameter(resources, "<this>");
        Intrinsics.checkNotNullParameter(theme, "theme");
        return applySaturationFactor(resources.getColor(i10, theme));
    }

    public static final int getThemeColor(@NotNull Context context, int i10, int i11, @NotNull DiscordThemeObject theme) {
        Intrinsics.checkNotNullParameter(context, "<this>");
        Intrinsics.checkNotNullParameter(theme, "theme");
        return getColorCompat(context, theme.getColorRes(i10, i11));
    }

    public static final void setTintColor(@NotNull SimpleDraweeView simpleDraweeView, Integer num) {
        Intrinsics.checkNotNullParameter(simpleDraweeView, "<this>");
        if (num == null) {
            simpleDraweeView.clearColorFilter();
        } else {
            simpleDraweeView.setColorFilter(num.intValue(), PorterDuff.Mode.SRC_IN);
        }
    }

    public static final int getColorCompat(@NotNull View view, int i10) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        Context context = view.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        return getColorCompat(context, i10);
    }
}
