package com.discord.image.color_quantizer;

import android.graphics.Color;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u0014\n\u0002\b\u0002\bÀ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J(\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\u00072\u0006\u0010\t\u001a\u00020\u00072\u0006\u0010\n\u001a\u00020\u000bH\u0007J\u0010\u0010\f\u001a\u00020\u00072\u0006\u0010\n\u001a\u00020\u000bH\u0007¨\u0006\r"}, d2 = {"Lcom/discord/image/color_quantizer/ColorUtils;", "", "<init>", "()V", "RGBtoHSL", "", "r", "", "g", "b", "hsl", "", "HSLtoRGB", "color_quantizer_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ColorUtils {
    @NotNull
    public static final ColorUtils INSTANCE = new ColorUtils();

    private ColorUtils() {
    }

    public static final int HSLtoRGB(@NotNull float[] hsl) {
        int c10;
        int c11;
        int c12;
        int c13;
        Intrinsics.checkNotNullParameter(hsl, "hsl");
        float f10 = hsl[0];
        float f11 = hsl[1];
        float f12 = hsl[2];
        float abs = (1.0f - Math.abs((2 * f12) - 1.0f)) * f11;
        float f13 = f12 - (0.5f * abs);
        float abs2 = (1.0f - Math.abs(((f10 / 60.0f) % 2.0f) - 1.0f)) * abs;
        switch (((int) f10) / 60) {
            case 0:
                c10 = ds.a.c((abs + f13) * 255.0f);
                c11 = ds.a.c((abs2 + f13) * 255.0f);
                c12 = ds.a.c(f13 * 255.0f);
                break;
            case 1:
                c10 = ds.a.c((abs2 + f13) * 255.0f);
                c11 = ds.a.c((abs + f13) * 255.0f);
                c12 = ds.a.c(f13 * 255.0f);
                break;
            case 2:
                c10 = ds.a.c(f13 * 255.0f);
                c11 = ds.a.c((abs + f13) * 255.0f);
                c12 = ds.a.c((abs2 + f13) * 255.0f);
                break;
            case 3:
                c10 = ds.a.c(f13 * 255.0f);
                c13 = ds.a.c((abs2 + f13) * 255.0f);
                c12 = ds.a.c((abs + f13) * 255.0f);
                c11 = c13;
                break;
            case 4:
                c10 = ds.a.c((abs2 + f13) * 255.0f);
                c13 = ds.a.c(f13 * 255.0f);
                c12 = ds.a.c((abs + f13) * 255.0f);
                c11 = c13;
                break;
            case 5:
            case 6:
                c10 = ds.a.c((abs + f13) * 255.0f);
                c11 = ds.a.c(f13 * 255.0f);
                c12 = ds.a.c((abs2 + f13) * 255.0f);
                break;
            default:
                c12 = 0;
                c10 = 0;
                c11 = 0;
                break;
        }
        return Color.rgb(Math.max(0, Math.min((int) SetSpanOperation.SPAN_MAX_PRIORITY, c10)), Math.max(0, Math.min((int) SetSpanOperation.SPAN_MAX_PRIORITY, c11)), Math.max(0, Math.min((int) SetSpanOperation.SPAN_MAX_PRIORITY, c12)));
    }

    public static final void RGBtoHSL(int i10, int i11, int i12, @NotNull float[] hsl) {
        float f10;
        float abs;
        Intrinsics.checkNotNullParameter(hsl, "hsl");
        float f11 = i10 / 255.0f;
        float f12 = i11 / 255.0f;
        float f13 = i12 / 255.0f;
        float max = Math.max(f11, Math.max(f12, f13));
        float min = Math.min(f11, Math.min(f12, f13));
        float f14 = max - min;
        float f15 = (max + min) / 2.0f;
        if (max == min) {
            f10 = 0.0f;
            abs = 0.0f;
        } else {
            if (max == f11) {
                f10 = ((f12 - f13) / f14) % 6.0f;
            } else if (max == f12) {
                f10 = ((f13 - f11) / f14) + 2.0f;
            } else {
                f10 = ((f11 - f12) / f14) + 4.0f;
            }
            abs = f14 / (1.0f - Math.abs((2.0f * f15) - 1.0f));
        }
        hsl[0] = (f10 * 60.0f) % 360.0f;
        hsl[1] = abs;
        hsl[2] = f15;
    }
}
