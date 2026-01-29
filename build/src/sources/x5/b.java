package x5;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {
    private static float a(float f10) {
        if (f10 <= 0.04045f) {
            return f10 / 12.92f;
        }
        return (float) Math.pow((f10 + 0.055f) / 1.055f, 2.4000000953674316d);
    }

    private static float b(float f10) {
        if (f10 <= 0.0031308f) {
            return f10 * 12.92f;
        }
        return (float) ((Math.pow(f10, 0.4166666567325592d) * 1.0549999475479126d) - 0.054999999701976776d);
    }

    public static int c(float f10, int i10, int i11) {
        if (i10 == i11 || f10 <= 0.0f) {
            return i10;
        }
        if (f10 >= 1.0f) {
            return i11;
        }
        float f11 = ((i10 >> 24) & SetSpanOperation.SPAN_MAX_PRIORITY) / 255.0f;
        float a10 = a(((i10 >> 16) & SetSpanOperation.SPAN_MAX_PRIORITY) / 255.0f);
        float a11 = a(((i10 >> 8) & SetSpanOperation.SPAN_MAX_PRIORITY) / 255.0f);
        float a12 = a((i10 & SetSpanOperation.SPAN_MAX_PRIORITY) / 255.0f);
        float a13 = a(((i11 >> 16) & SetSpanOperation.SPAN_MAX_PRIORITY) / 255.0f);
        float a14 = a(((i11 >> 8) & SetSpanOperation.SPAN_MAX_PRIORITY) / 255.0f);
        float a15 = a12 + (f10 * (a((i11 & SetSpanOperation.SPAN_MAX_PRIORITY) / 255.0f) - a12));
        return (Math.round(b(a10 + ((a13 - a10) * f10)) * 255.0f) << 16) | (Math.round((f11 + (((((i11 >> 24) & SetSpanOperation.SPAN_MAX_PRIORITY) / 255.0f) - f11) * f10)) * 255.0f) << 24) | (Math.round(b(a11 + ((a14 - a11) * f10)) * 255.0f) << 8) | Math.round(b(a15) * 255.0f);
    }
}
