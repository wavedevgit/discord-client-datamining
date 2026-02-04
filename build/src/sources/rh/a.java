package rh;

import android.content.Context;
import android.content.res.TypedArray;
import android.util.AttributeSet;
import androidx.appcompat.view.ContextThemeWrapper;
import yg.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static final int[] f48807a = {16842752, b.f54093i0};

    /* renamed from: b  reason: collision with root package name */
    private static final int[] f48808b = {b.E};

    private static int a(Context context, AttributeSet attributeSet) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, f48807a);
        int resourceId = obtainStyledAttributes.getResourceId(0, 0);
        int resourceId2 = obtainStyledAttributes.getResourceId(1, 0);
        obtainStyledAttributes.recycle();
        if (resourceId != 0) {
            return resourceId;
        }
        return resourceId2;
    }

    private static int b(Context context, AttributeSet attributeSet, int i10, int i11) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, f48808b, i10, i11);
        int resourceId = obtainStyledAttributes.getResourceId(0, 0);
        obtainStyledAttributes.recycle();
        return resourceId;
    }

    public static Context c(Context context, AttributeSet attributeSet, int i10, int i11) {
        boolean z10;
        int b10 = b(context, attributeSet, i10, i11);
        if ((context instanceof ContextThemeWrapper) && ((ContextThemeWrapper) context).c() == b10) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (b10 != 0 && !z10) {
            ContextThemeWrapper contextThemeWrapper = new ContextThemeWrapper(context, b10);
            int a10 = a(context, attributeSet);
            if (a10 != 0) {
                contextThemeWrapper.getTheme().applyStyle(a10, true);
            }
            return contextThemeWrapper;
        }
        return context;
    }
}
