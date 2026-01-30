package com.google.android.material.internal;

import android.content.Context;
import android.content.res.TypedArray;
import android.util.AttributeSet;
import android.util.TypedValue;
import androidx.appcompat.widget.v0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class l {

    /* renamed from: a  reason: collision with root package name */
    private static final int[] f16205a = {yg.b.f54367l};

    /* renamed from: b  reason: collision with root package name */
    private static final int[] f16206b = {yg.b.f54368m};

    public static void a(Context context) {
        e(context, f16205a, "Theme.AppCompat");
    }

    private static void b(Context context, AttributeSet attributeSet, int i10, int i11) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, yg.k.Z7, i10, i11);
        boolean z10 = obtainStyledAttributes.getBoolean(yg.k.f54559b8, false);
        obtainStyledAttributes.recycle();
        if (z10) {
            TypedValue typedValue = new TypedValue();
            if (!context.getTheme().resolveAttribute(yg.b.f54378w, typedValue, true) || (typedValue.type == 18 && typedValue.data == 0)) {
                c(context);
            }
        }
        a(context);
    }

    public static void c(Context context) {
        e(context, f16206b, "Theme.MaterialComponents");
    }

    private static void d(Context context, AttributeSet attributeSet, int[] iArr, int i10, int i11, int... iArr2) {
        boolean z10;
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, yg.k.Z7, i10, i11);
        boolean z11 = false;
        if (!obtainStyledAttributes.getBoolean(yg.k.f54569c8, false)) {
            obtainStyledAttributes.recycle();
            return;
        }
        if (iArr2 != null && iArr2.length != 0) {
            z10 = f(context, attributeSet, iArr, i10, i11, iArr2);
        } else {
            if (obtainStyledAttributes.getResourceId(yg.k.f54549a8, -1) != -1) {
                z11 = true;
            }
            z10 = z11;
        }
        obtainStyledAttributes.recycle();
        if (z10) {
            return;
        }
        throw new IllegalArgumentException("This component requires that you specify a valid TextAppearance attribute. Update your app theme to inherit from Theme.MaterialComponents (or a descendant).");
    }

    private static void e(Context context, int[] iArr, String str) {
        if (h(context, iArr)) {
            return;
        }
        throw new IllegalArgumentException("The style on this component requires your app theme to be " + str + " (or a descendant).");
    }

    private static boolean f(Context context, AttributeSet attributeSet, int[] iArr, int i10, int i11, int... iArr2) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, iArr, i10, i11);
        for (int i12 : iArr2) {
            if (obtainStyledAttributes.getResourceId(i12, -1) == -1) {
                obtainStyledAttributes.recycle();
                return false;
            }
        }
        obtainStyledAttributes.recycle();
        return true;
    }

    public static boolean g(Context context) {
        return lh.b.b(context, yg.b.f54377v, false);
    }

    private static boolean h(Context context, int[] iArr) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(iArr);
        for (int i10 = 0; i10 < iArr.length; i10++) {
            if (!obtainStyledAttributes.hasValue(i10)) {
                obtainStyledAttributes.recycle();
                return false;
            }
        }
        obtainStyledAttributes.recycle();
        return true;
    }

    public static TypedArray i(Context context, AttributeSet attributeSet, int[] iArr, int i10, int i11, int... iArr2) {
        b(context, attributeSet, i10, i11);
        d(context, attributeSet, iArr, i10, i11, iArr2);
        return context.obtainStyledAttributes(attributeSet, iArr, i10, i11);
    }

    public static v0 j(Context context, AttributeSet attributeSet, int[] iArr, int i10, int i11, int... iArr2) {
        b(context, attributeSet, i10, i11);
        d(context, attributeSet, iArr, i10, i11, iArr2);
        return v0.v(context, attributeSet, iArr, i10, i11);
    }
}
