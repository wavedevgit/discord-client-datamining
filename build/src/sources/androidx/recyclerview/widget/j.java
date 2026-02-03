package androidx.recyclerview.widget;

import android.graphics.Canvas;
import android.view.View;
import androidx.core.view.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class j implements ItemTouchUIUtil {

    /* renamed from: a  reason: collision with root package name */
    static final ItemTouchUIUtil f5033a = new j();

    j() {
    }

    private static float e(RecyclerView recyclerView, View view) {
        int childCount = recyclerView.getChildCount();
        float f10 = 0.0f;
        for (int i10 = 0; i10 < childCount; i10++) {
            View childAt = recyclerView.getChildAt(i10);
            if (childAt != view) {
                float u10 = h0.u(childAt);
                if (u10 > f10) {
                    f10 = u10;
                }
            }
        }
        return f10;
    }

    @Override // androidx.recyclerview.widget.ItemTouchUIUtil
    public void a(View view) {
        Object tag = view.getTag(q3.c.f47316a);
        if (tag instanceof Float) {
            h0.v0(view, ((Float) tag).floatValue());
        }
        view.setTag(q3.c.f47316a, null);
        view.setTranslationX(0.0f);
        view.setTranslationY(0.0f);
    }

    @Override // androidx.recyclerview.widget.ItemTouchUIUtil
    public void b(View view) {
    }

    @Override // androidx.recyclerview.widget.ItemTouchUIUtil
    public void c(Canvas canvas, RecyclerView recyclerView, View view, float f10, float f11, int i10, boolean z10) {
        if (z10 && view.getTag(q3.c.f47316a) == null) {
            Float valueOf = Float.valueOf(h0.u(view));
            h0.v0(view, e(recyclerView, view) + 1.0f);
            view.setTag(q3.c.f47316a, valueOf);
        }
        view.setTranslationX(f10);
        view.setTranslationY(f11);
    }

    @Override // androidx.recyclerview.widget.ItemTouchUIUtil
    public void d(Canvas canvas, RecyclerView recyclerView, View view, float f10, float f11, int i10, boolean z10) {
    }
}
