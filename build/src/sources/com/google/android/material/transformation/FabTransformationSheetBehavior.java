package com.google.android.material.transformation;

import android.content.Context;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewParent;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.core.view.h0;
import com.google.android.material.transformation.FabTransformationBehavior;
import java.util.HashMap;
import java.util.Map;
import yg.a;
import zg.g;
import zg.i;
@Deprecated
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class FabTransformationSheetBehavior extends FabTransformationBehavior {

    /* renamed from: t  reason: collision with root package name */
    private Map f16670t;

    public FabTransformationSheetBehavior() {
    }

    private void f0(View view, boolean z10) {
        boolean z11;
        ViewParent parent = view.getParent();
        if (parent instanceof CoordinatorLayout) {
            CoordinatorLayout coordinatorLayout = (CoordinatorLayout) parent;
            int childCount = coordinatorLayout.getChildCount();
            if (z10) {
                this.f16670t = new HashMap(childCount);
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
                        Map map = this.f16670t;
                        if (map != null && map.containsKey(childAt)) {
                            h0.x0(childAt, ((Integer) this.f16670t.get(childAt)).intValue());
                        }
                    } else {
                        this.f16670t.put(childAt, Integer.valueOf(childAt.getImportantForAccessibility()));
                        h0.x0(childAt, 4);
                    }
                }
            }
            if (!z10) {
                this.f16670t = null;
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
            i10 = a.f54329d;
        } else {
            i10 = a.f54328c;
        }
        FabTransformationBehavior.b bVar = new FabTransformationBehavior.b();
        bVar.f16663a = g.c(context, i10);
        bVar.f16664b = new i(17, 0.0f, 0.0f);
        return bVar;
    }

    public FabTransformationSheetBehavior(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
    }
}
