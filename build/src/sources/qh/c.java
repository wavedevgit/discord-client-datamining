package qh;

import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.TypedArray;
import android.graphics.drawable.Drawable;
import android.util.TypedValue;
import androidx.appcompat.widget.v0;
import bh.l;
import f.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {
    public static ColorStateList a(Context context, TypedArray typedArray, int i10) {
        int resourceId;
        ColorStateList a10;
        if (typedArray.hasValue(i10) && (resourceId = typedArray.getResourceId(i10, 0)) != 0 && (a10 = g.a.a(context, resourceId)) != null) {
            return a10;
        }
        return typedArray.getColorStateList(i10);
    }

    public static ColorStateList b(Context context, v0 v0Var, int i10) {
        int n10;
        ColorStateList a10;
        if (v0Var.s(i10) && (n10 = v0Var.n(i10, 0)) != 0 && (a10 = g.a.a(context, n10)) != null) {
            return a10;
        }
        return v0Var.c(i10);
    }

    private static int c(TypedValue typedValue) {
        return typedValue.getComplexUnit();
    }

    public static int d(Context context, TypedArray typedArray, int i10, int i11) {
        TypedValue typedValue = new TypedValue();
        if (typedArray.getValue(i10, typedValue) && typedValue.type == 2) {
            TypedArray obtainStyledAttributes = context.getTheme().obtainStyledAttributes(new int[]{typedValue.data});
            int dimensionPixelSize = obtainStyledAttributes.getDimensionPixelSize(0, i11);
            obtainStyledAttributes.recycle();
            return dimensionPixelSize;
        }
        return typedArray.getDimensionPixelSize(i10, i11);
    }

    public static Drawable e(Context context, TypedArray typedArray, int i10) {
        int resourceId;
        Drawable b10;
        if (typedArray.hasValue(i10) && (resourceId = typedArray.getResourceId(i10, 0)) != 0 && (b10 = g.a.b(context, resourceId)) != null) {
            return b10;
        }
        return typedArray.getDrawable(i10);
    }

    public static float f(Context context) {
        return context.getResources().getConfiguration().fontScale;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int g(TypedArray typedArray, int i10, int i11) {
        if (typedArray.hasValue(i10)) {
            return i10;
        }
        return i11;
    }

    public static d h(Context context, TypedArray typedArray, int i10) {
        int resourceId;
        if (typedArray.hasValue(i10) && (resourceId = typedArray.getResourceId(i10, 0)) != 0) {
            return new d(context, resourceId);
        }
        return null;
    }

    public static int i(Context context, int i10, int i11) {
        if (i10 != 0) {
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(i10, l.G4);
            TypedValue typedValue = new TypedValue();
            boolean value = obtainStyledAttributes.getValue(l.L4, typedValue);
            if (!value) {
                value = obtainStyledAttributes.getValue(l.J4, typedValue);
            }
            obtainStyledAttributes.recycle();
            if (value) {
                if (c(typedValue) == 2) {
                    return Math.round(TypedValue.complexToFloat(typedValue.data) * context.getResources().getDisplayMetrics().density);
                }
                return TypedValue.complexToDimensionPixelSize(typedValue.data, context.getResources().getDisplayMetrics());
            }
        }
        return i11;
    }

    public static int j(Context context, int i10, int i11) {
        if (i10 != 0) {
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(i10, j.S2);
            TypedValue typedValue = new TypedValue();
            boolean value = obtainStyledAttributes.getValue(j.T2, typedValue);
            obtainStyledAttributes.recycle();
            if (value) {
                if (c(typedValue) == 2) {
                    return Math.round(TypedValue.complexToFloat(typedValue.data) * context.getResources().getDisplayMetrics().density);
                }
                return TypedValue.complexToDimensionPixelSize(typedValue.data, context.getResources().getDisplayMetrics());
            }
        }
        return i11;
    }

    public static boolean k(Context context) {
        if (context.getResources().getConfiguration().fontScale >= 1.3f) {
            return true;
        }
        return false;
    }

    public static boolean l(Context context) {
        if (context.getResources().getConfiguration().fontScale >= 2.0f) {
            return true;
        }
        return false;
    }
}
