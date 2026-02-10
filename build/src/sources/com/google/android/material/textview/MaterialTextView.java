package com.google.android.material.textview;

import android.content.Context;
import android.content.res.Resources;
import android.content.res.TypedArray;
import android.util.AttributeSet;
import androidx.annotation.NonNull;
import androidx.appcompat.widget.AppCompatTextView;
import bh.l;
import qh.b;
import qh.c;
import wh.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class MaterialTextView extends AppCompatTextView {
    public MaterialTextView(Context context) {
        this(context, null);
    }

    private void f(Resources.Theme theme, int i10) {
        TypedArray obtainStyledAttributes = theme.obtainStyledAttributes(i10, l.G4);
        int j10 = j(getContext(), obtainStyledAttributes, l.J4, l.L4);
        obtainStyledAttributes.recycle();
        if (j10 >= 0) {
            setLineHeight(j10);
        }
    }

    private static boolean g(Context context) {
        return b.b(context, bh.b.f6748m0, true);
    }

    private static int h(Resources.Theme theme, AttributeSet attributeSet, int i10, int i11) {
        TypedArray obtainStyledAttributes = theme.obtainStyledAttributes(attributeSet, l.M4, i10, i11);
        int resourceId = obtainStyledAttributes.getResourceId(l.N4, -1);
        obtainStyledAttributes.recycle();
        return resourceId;
    }

    private void i(AttributeSet attributeSet, int i10, int i11) {
        int h10;
        Context context = getContext();
        if (g(context)) {
            Resources.Theme theme = context.getTheme();
            if (!k(context, theme, attributeSet, i10, i11) && (h10 = h(theme, attributeSet, i10, i11)) != -1) {
                f(theme, h10);
            }
        }
    }

    private static int j(Context context, TypedArray typedArray, int... iArr) {
        int i10 = -1;
        for (int i11 = 0; i11 < iArr.length && i10 < 0; i11++) {
            i10 = c.d(context, typedArray, iArr[i11], -1);
        }
        return i10;
    }

    private static boolean k(Context context, Resources.Theme theme, AttributeSet attributeSet, int i10, int i11) {
        TypedArray obtainStyledAttributes = theme.obtainStyledAttributes(attributeSet, l.M4, i10, i11);
        int j10 = j(context, obtainStyledAttributes, l.O4, l.P4);
        obtainStyledAttributes.recycle();
        if (j10 != -1) {
            return true;
        }
        return false;
    }

    @Override // androidx.appcompat.widget.AppCompatTextView, android.widget.TextView
    public void setTextAppearance(@NonNull Context context, int i10) {
        super.setTextAppearance(context, i10);
        if (g(context)) {
            f(context.getTheme(), i10);
        }
    }

    public MaterialTextView(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 16842884);
    }

    public MaterialTextView(Context context, AttributeSet attributeSet, int i10) {
        super(a.d(context, attributeSet, i10, 0), attributeSet, i10);
        i(attributeSet, i10, 0);
    }
}
