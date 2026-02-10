package wh;

import android.content.Context;
import android.content.res.TypedArray;
import android.util.AttributeSet;
import androidx.appcompat.view.ContextThemeWrapper;
import bh.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static final int[] f52771a = {16842752, f.a.M};

    /* renamed from: b  reason: collision with root package name */
    private static final int[] f52772b = {b.H};

    private static int a(Context context, AttributeSet attributeSet) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, f52771a);
        int resourceId = obtainStyledAttributes.getResourceId(0, 0);
        int resourceId2 = obtainStyledAttributes.getResourceId(1, 0);
        obtainStyledAttributes.recycle();
        if (resourceId != 0) {
            return resourceId;
        }
        return resourceId2;
    }

    private static int[] b(Context context, AttributeSet attributeSet, int[] iArr, int i10, int i11) {
        int[] iArr2 = new int[iArr.length];
        if (iArr.length > 0) {
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, iArr, i10, i11);
            for (int i12 = 0; i12 < iArr.length; i12++) {
                iArr2[i12] = obtainStyledAttributes.getResourceId(i12, 0);
            }
            obtainStyledAttributes.recycle();
        }
        return iArr2;
    }

    private static int c(Context context, AttributeSet attributeSet, int i10, int i11) {
        return b(context, attributeSet, f52772b, i10, i11)[0];
    }

    public static Context d(Context context, AttributeSet attributeSet, int i10, int i11) {
        return e(context, attributeSet, i10, i11, new int[0]);
    }

    public static Context e(Context context, AttributeSet attributeSet, int i10, int i11, int[] iArr) {
        boolean z10;
        int[] b10;
        int c10 = c(context, attributeSet, i10, i11);
        if ((context instanceof ContextThemeWrapper) && ((ContextThemeWrapper) context).c() == c10) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (c10 != 0 && !z10) {
            ContextThemeWrapper contextThemeWrapper = new ContextThemeWrapper(context, c10);
            for (int i12 : b(context, attributeSet, iArr, i10, i11)) {
                if (i12 != 0) {
                    contextThemeWrapper.getTheme().applyStyle(i12, true);
                }
            }
            int a10 = a(context, attributeSet);
            if (a10 != 0) {
                contextThemeWrapper.getTheme().applyStyle(a10, true);
            }
            return contextThemeWrapper;
        }
        return context;
    }
}
