package oh;

import android.animation.TimeInterpolator;
import android.content.Context;
import android.content.res.TypedArray;
import android.util.TypedValue;
import android.view.animation.AnimationUtils;
import android.view.animation.PathInterpolator;
import bh.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g {
    private static float a(String[] strArr, int i10) {
        float parseFloat = Float.parseFloat(strArr[i10]);
        if (parseFloat >= 0.0f && parseFloat <= 1.0f) {
            return parseFloat;
        }
        throw new IllegalArgumentException("Motion easing control point value must be between 0 and 1; instead got: " + parseFloat);
    }

    private static String b(String str, String str2) {
        return str.substring(str2.length() + 1, str.length() - 1);
    }

    private static TimeInterpolator c(String str) {
        if (e(str, "cubic-bezier")) {
            String[] split = b(str, "cubic-bezier").split(",");
            if (split.length == 4) {
                return new PathInterpolator(a(split, 0), a(split, 1), a(split, 2), a(split, 3));
            }
            throw new IllegalArgumentException("Motion easing theme attribute must have 4 control points if using bezier curve format; instead got: " + split.length);
        } else if (e(str, "path")) {
            return new PathInterpolator(r1.e.e(b(str, "path")));
        } else {
            throw new IllegalArgumentException("Invalid motion easing type: " + str);
        }
    }

    private static boolean d(String str) {
        if (!e(str, "cubic-bezier") && !e(str, "path")) {
            return false;
        }
        return true;
    }

    private static boolean e(String str, String str2) {
        if (str.startsWith(str2 + "(") && str.endsWith(")")) {
            return true;
        }
        return false;
    }

    public static int f(Context context, int i10, int i11) {
        return qh.b.d(context, i10, i11);
    }

    public static TimeInterpolator g(Context context, int i10, TimeInterpolator timeInterpolator) {
        TypedValue typedValue = new TypedValue();
        if (!context.getTheme().resolveAttribute(i10, typedValue, true)) {
            return timeInterpolator;
        }
        if (typedValue.type == 3) {
            String valueOf = String.valueOf(typedValue.string);
            if (d(valueOf)) {
                return c(valueOf);
            }
            return AnimationUtils.loadInterpolator(context, typedValue.resourceId);
        }
        throw new IllegalArgumentException("Motion easing theme attribute must be an @interpolator resource for ?attr/motionEasing*Interpolator attributes or a string for ?attr/motionEasing* attributes.");
    }

    public static androidx.dynamicanimation.animation.d h(Context context, int i10, int i11) {
        TypedArray obtainStyledAttributes;
        TypedValue a10 = qh.b.a(context, i10);
        if (a10 == null) {
            obtainStyledAttributes = context.obtainStyledAttributes(null, l.f7161v4, 0, i11);
        } else {
            obtainStyledAttributes = context.obtainStyledAttributes(a10.resourceId, l.f7161v4);
        }
        androidx.dynamicanimation.animation.d dVar = new androidx.dynamicanimation.animation.d();
        try {
            float f10 = obtainStyledAttributes.getFloat(l.f7179x4, Float.MIN_VALUE);
            if (f10 != Float.MIN_VALUE) {
                float f11 = obtainStyledAttributes.getFloat(l.f7170w4, Float.MIN_VALUE);
                if (f11 != Float.MIN_VALUE) {
                    dVar.h(f10);
                    dVar.f(f11);
                    return dVar;
                }
                throw new IllegalArgumentException("A MaterialSpring style must have a damping value.");
            }
            throw new IllegalArgumentException("A MaterialSpring style must have stiffness value.");
        } finally {
            obtainStyledAttributes.recycle();
        }
    }
}
