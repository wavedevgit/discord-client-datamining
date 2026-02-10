package androidx.constraintlayout.widget;

import android.content.Context;
import android.content.res.TypedArray;
import android.util.AttributeSet;
import androidx.constraintlayout.core.widgets.ConstraintWidget;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class Barrier extends b {

    /* renamed from: u  reason: collision with root package name */
    private int f2554u;

    /* renamed from: v  reason: collision with root package name */
    private int f2555v;

    /* renamed from: w  reason: collision with root package name */
    private androidx.constraintlayout.core.widgets.a f2556w;

    public Barrier(Context context) {
        super(context);
        super.setVisibility(8);
    }

    private void p(ConstraintWidget constraintWidget, int i10, boolean z10) {
        this.f2555v = i10;
        if (z10) {
            int i11 = this.f2554u;
            if (i11 == 5) {
                this.f2555v = 1;
            } else if (i11 == 6) {
                this.f2555v = 0;
            }
        } else {
            int i12 = this.f2554u;
            if (i12 == 5) {
                this.f2555v = 0;
            } else if (i12 == 6) {
                this.f2555v = 1;
            }
        }
        if (constraintWidget instanceof androidx.constraintlayout.core.widgets.a) {
            ((androidx.constraintlayout.core.widgets.a) constraintWidget).B1(this.f2555v);
        }
    }

    public boolean getAllowsGoneWidget() {
        return this.f2556w.v1();
    }

    public int getMargin() {
        return this.f2556w.x1();
    }

    public int getType() {
        return this.f2554u;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.constraintlayout.widget.b
    public void i(AttributeSet attributeSet) {
        super.i(attributeSet);
        this.f2556w = new androidx.constraintlayout.core.widgets.a();
        if (attributeSet != null) {
            TypedArray obtainStyledAttributes = getContext().obtainStyledAttributes(attributeSet, d.V0);
            int indexCount = obtainStyledAttributes.getIndexCount();
            for (int i10 = 0; i10 < indexCount; i10++) {
                int index = obtainStyledAttributes.getIndex(i10);
                if (index == d.f2862l1) {
                    setType(obtainStyledAttributes.getInt(index, 0));
                } else if (index == d.f2854k1) {
                    this.f2556w.A1(obtainStyledAttributes.getBoolean(index, true));
                } else if (index == d.f2870m1) {
                    this.f2556w.C1(obtainStyledAttributes.getDimensionPixelSize(index, 0));
                }
            }
            obtainStyledAttributes.recycle();
        }
        this.f2764o = this.f2556w;
        o();
    }

    @Override // androidx.constraintlayout.widget.b
    public void j(ConstraintWidget constraintWidget, boolean z10) {
        p(constraintWidget, this.f2554u, z10);
    }

    public void setAllowsGoneWidget(boolean z10) {
        this.f2556w.A1(z10);
    }

    public void setDpMargin(int i10) {
        androidx.constraintlayout.core.widgets.a aVar = this.f2556w;
        aVar.C1((int) ((i10 * getResources().getDisplayMetrics().density) + 0.5f));
    }

    public void setMargin(int i10) {
        this.f2556w.C1(i10);
    }

    public void setType(int i10) {
        this.f2554u = i10;
    }

    public Barrier(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        super.setVisibility(8);
    }
}
