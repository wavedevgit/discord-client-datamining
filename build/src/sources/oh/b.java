package oh;

import android.content.res.ColorStateList;
import android.graphics.Color;
import android.os.Build;
import android.util.Log;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    public static final boolean f42806a = true;

    /* renamed from: b  reason: collision with root package name */
    private static final int[] f42807b = {16842919};

    /* renamed from: c  reason: collision with root package name */
    private static final int[] f42808c = {16843623, 16842908};

    /* renamed from: d  reason: collision with root package name */
    private static final int[] f42809d = {16842908};

    /* renamed from: e  reason: collision with root package name */
    private static final int[] f42810e = {16843623};

    /* renamed from: f  reason: collision with root package name */
    private static final int[] f42811f = {16842913, 16842919};

    /* renamed from: g  reason: collision with root package name */
    private static final int[] f42812g = {16842913, 16843623, 16842908};

    /* renamed from: h  reason: collision with root package name */
    private static final int[] f42813h = {16842913, 16842908};

    /* renamed from: i  reason: collision with root package name */
    private static final int[] f42814i = {16842913, 16843623};

    /* renamed from: j  reason: collision with root package name */
    private static final int[] f42815j = {16842913};

    /* renamed from: k  reason: collision with root package name */
    private static final int[] f42816k = {16842910, 16842919};

    /* renamed from: l  reason: collision with root package name */
    static final String f42817l = b.class.getSimpleName();

    public static ColorStateList a(ColorStateList colorStateList) {
        if (colorStateList != null) {
            if (Build.VERSION.SDK_INT <= 27 && Color.alpha(colorStateList.getDefaultColor()) == 0 && Color.alpha(colorStateList.getColorForState(f42816k, 0)) != 0) {
                Log.w(f42817l, "Use a non-transparent color for the default color as it will be used to finish ripple animations.");
            }
            return colorStateList;
        }
        return ColorStateList.valueOf(0);
    }

    public static boolean b(int[] iArr) {
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
