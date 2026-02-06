package com.google.android.material.transformation;

import ah.a;
import android.content.Context;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewParent;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.core.view.h0;
import bh.g;
import bh.i;
import com.google.android.material.transformation.FabTransformationBehavior;
import java.util.HashMap;
import java.util.Map;
@Deprecated
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class FabTransformationSheetBehavior extends FabTransformationBehavior {

    /* renamed from: t  reason: collision with root package name */
    private Map f15641t;

    public FabTransformationSheetBehavior() {
    }

    private void f0(View view, boolean z10) {
        boolean z11;
        ViewParent parent = view.getParent();
        if (parent instanceof CoordinatorLayout) {
            CoordinatorLayout coordinatorLayout = (CoordinatorLayout) parent;
            int childCount = coordinatorLayout.getChildCount();
            if (z10) {
                this.f15641t = new HashMap(childCount);
            }
            for (int i10 = 0; i10 < childCount; i10++) {
                View childAt = coordinatorLayout.getChildAt(i10);
                if ((childAt.getLayoutParams() instanceof CoordinatorLayout.f) && (((CoordinatorLayout.f) childAt.getLayoutParams()).f() instanceof FabTransformationScrimBehavior)) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                if (childAt != view && !z11) {
                    if (!z10) {
                        Map map = this.f15641t;
                        if (map != null && map.containsKey(childAt)) {
                            h0.x0(childAt, ((Integer) this.f15641t.get(childAt)).intValue());
                        }
                    } else {
                        this.f15641t.put(childAt, Integer.valueOf(childAt.getImportantForAccessibility()));
                        h0.x0(childAt, 4);
                    }
                }
            }
            if (!z10) {
                this.f15641t = null;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.google.android.material.transformation.ExpandableTransformationBehavior, com.google.android.material.transformation.ExpandableBehavior
    public boolean L(View view, View view2, boolean z10, boolean z11) {
        f0(view2, z10);
        return super.L(view, view2, z10, z11);
    }

    @Override // com.google.android.material.transformation.FabTransformationBehavior
    protected FabTransformationBehavior.b d0(Context context, boolean z10) {
        int i10;
        if (z10) {
            i10 = a.f628d;
        } else {
            i10 = a.f627c;
        }
        FabTransformationBehavior.b bVar = new FabTransformationBehavior.b();
        bVar.f15634a = g.c(context, i10);
        bVar.f15635b = new i(17, 0.0f, 0.0f);
        return bVar;
    }

    public FabTransformationSheetBehavior(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
    }
}
