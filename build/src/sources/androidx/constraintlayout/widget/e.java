package androidx.constraintlayout.widget;

import android.content.Context;
import android.content.res.TypedArray;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewParent;
import androidx.constraintlayout.core.widgets.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class e extends b {

    /* renamed from: u  reason: collision with root package name */
    private boolean f2842u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f2843v;

    public e(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.constraintlayout.widget.b
    public void f(ConstraintLayout constraintLayout) {
        e(constraintLayout);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.constraintlayout.widget.b
    public void i(AttributeSet attributeSet) {
        super.i(attributeSet);
        if (attributeSet != null) {
            TypedArray obtainStyledAttributes = getContext().obtainStyledAttributes(attributeSet, d.V0);
            int indexCount = obtainStyledAttributes.getIndexCount();
            for (int i10 = 0; i10 < indexCount; i10++) {
                int index = obtainStyledAttributes.getIndex(i10);
                if (index == d.f2652c1) {
                    this.f2842u = true;
                } else if (index == d.f2708j1) {
                    this.f2843v = true;
                }
            }
            obtainStyledAttributes.recycle();
        }
    }

    @Override // androidx.constraintlayout.widget.b, android.view.View
    public void onAttachedToWindow() {
        super.onAttachedToWindow();
        if (this.f2842u || this.f2843v) {
            ViewParent parent = getParent();
            if (parent instanceof ConstraintLayout) {
                ConstraintLayout constraintLayout = (ConstraintLayout) parent;
                int visibility = getVisibility();
                float elevation = getElevation();
                for (int i10 = 0; i10 < this.f2624e; i10++) {
                    View viewById = constraintLayout.getViewById(this.f2623d[i10]);
                    if (viewById != null) {
                        if (this.f2842u) {
                            viewById.setVisibility(visibility);
                        }
                        if (this.f2843v && elevation > 0.0f) {
                            viewById.setTranslationZ(viewById.getTranslationZ() + elevation);
                        }
                    }
                }
            }
        }
    }

    public abstract void p(h hVar, int i10, int i11);

    @Override // android.view.View
    public void setElevation(float f10) {
        super.setElevation(f10);
        d();
    }

    @Override // android.view.View
    public void setVisibility(int i10) {
        super.setVisibility(i10);
        d();
    }
}
