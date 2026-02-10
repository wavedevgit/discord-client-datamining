package rh;

import android.content.res.ColorStateList;
import android.graphics.Color;
import android.os.Build;
import android.util.Log;
import android.util.StateSet;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import r1.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static final int[] f47400a = {16842919};

    /* renamed from: b  reason: collision with root package name */
    private static final int[] f47401b = {16842908};

    /* renamed from: c  reason: collision with root package name */
    private static final int[] f47402c = {16842913, 16842919};

    /* renamed from: d  reason: collision with root package name */
    private static final int[] f47403d = {16842913};

    /* renamed from: e  reason: collision with root package name */
    private static final int[] f47404e = {16842910, 16842919};

    /* renamed from: f  reason: collision with root package name */
    static final String f47405f = a.class.getSimpleName();

    public static ColorStateList a(ColorStateList colorStateList) {
        int[] iArr = f47401b;
        return new ColorStateList(new int[][]{f47403d, iArr, StateSet.NOTHING}, new int[]{c(colorStateList, f47402c), c(colorStateList, iArr), c(colorStateList, f47400a)});
    }

    private static int b(int i10) {
        return c.l(i10, Math.min(Color.alpha(i10) * 2, (int) SetSpanOperation.SPAN_MAX_PRIORITY));
    }

    private static int c(ColorStateList colorStateList, int[] iArr) {
        int i10;
        if (colorStateList != null) {
            i10 = colorStateList.getColorForState(iArr, colorStateList.getDefaultColor());
        } else {
            i10 = 0;
        }
        return b(i10);
    }

    public static ColorStateList d(ColorStateList colorStateList) {
        if (colorStateList != null) {
            if (Build.VERSION.SDK_INT <= 27 && Color.alpha(colorStateList.getDefaultColor()) == 0 && Color.alpha(colorStateList.getColorForState(f47404e, 0)) != 0) {
                Log.w(f47405f, "Use a non-transparent color for the default color as it will be used to finish ripple animations.");
            }
            return colorStateList;
        }
        return ColorStateList.valueOf(0);
    }

    public static boolean e(int[] iArr) {
        boolean z10 = false;
        boolean z11 = false;
        for (int i10 : iArr) {
            if (i10 == 16842910) {
                z10 = true;
            } else if (i10 == 16842908 || i10 == 16842919 || i10 == 16843623) {
                z11 = true;
            }
        }
        if (!z10 || !z11) {
            return false;
        }
        return true;
    }
}
