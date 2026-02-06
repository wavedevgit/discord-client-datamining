package androidx.constraintlayout.helper.widget;

import android.content.Context;
import android.content.res.TypedArray;
import android.util.AttributeSet;
import android.view.View;
import androidx.constraintlayout.core.widgets.ConstraintWidget;
import androidx.constraintlayout.core.widgets.h;
import androidx.constraintlayout.widget.d;
import androidx.constraintlayout.widget.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class Flow extends e {

    /* renamed from: w  reason: collision with root package name */
    private androidx.constraintlayout.core.widgets.e f2856w;

    public Flow(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.constraintlayout.widget.e, androidx.constraintlayout.widget.b
    public void i(AttributeSet attributeSet) {
        super.i(attributeSet);
        this.f2856w = new androidx.constraintlayout.core.widgets.e();
        if (attributeSet != null) {
            TypedArray obtainStyledAttributes = getContext().obtainStyledAttributes(attributeSet, d.V0);
            int indexCount = obtainStyledAttributes.getIndexCount();
            for (int i10 = 0; i10 < indexCount; i10++) {
                int index = obtainStyledAttributes.getIndex(i10);
                if (index == d.W0) {
                    this.f2856w.E2(obtainStyledAttributes.getInt(index, 0));
                } else if (index == d.X0) {
                    this.f2856w.J1(obtainStyledAttributes.getDimensionPixelSize(index, 0));
                } else if (index == d.f3133h1) {
                    this.f2856w.O1(obtainStyledAttributes.getDimensionPixelSize(index, 0));
                } else if (index == d.f3141i1) {
                    this.f2856w.L1(obtainStyledAttributes.getDimensionPixelSize(index, 0));
                } else if (index == d.Y0) {
                    this.f2856w.M1(obtainStyledAttributes.getDimensionPixelSize(index, 0));
                } else if (index == d.Z0) {
                    this.f2856w.P1(obtainStyledAttributes.getDimensionPixelSize(index, 0));
                } else if (index == d.f3075a1) {
                    this.f2856w.N1(obtainStyledAttributes.getDimensionPixelSize(index, 0));
                } else if (index == d.f3084b1) {
                    this.f2856w.K1(obtainStyledAttributes.getDimensionPixelSize(index, 0));
                } else if (index == d.H1) {
                    this.f2856w.J2(obtainStyledAttributes.getInt(index, 0));
                } else if (index == d.f3261x1) {
                    this.f2856w.y2(obtainStyledAttributes.getInt(index, 0));
                } else if (index == d.G1) {
                    this.f2856w.I2(obtainStyledAttributes.getInt(index, 0));
                } else if (index == d.f3213r1) {
                    this.f2856w.s2(obtainStyledAttributes.getInt(index, 0));
                } else if (index == d.f3277z1) {
                    this.f2856w.A2(obtainStyledAttributes.getInt(index, 0));
                } else if (index == d.f3229t1) {
                    this.f2856w.u2(obtainStyledAttributes.getInt(index, 0));
                } else if (index == d.B1) {
                    this.f2856w.C2(obtainStyledAttributes.getInt(index, 0));
                } else if (index == d.f3245v1) {
                    this.f2856w.w2(obtainStyledAttributes.getFloat(index, 0.5f));
                } else if (index == d.f3205q1) {
                    this.f2856w.r2(obtainStyledAttributes.getFloat(index, 0.5f));
                } else if (index == d.f3269y1) {
                    this.f2856w.z2(obtainStyledAttributes.getFloat(index, 0.5f));
                } else if (index == d.f3221s1) {
                    this.f2856w.t2(obtainStyledAttributes.getFloat(index, 0.5f));
                } else if (index == d.A1) {
                    this.f2856w.B2(obtainStyledAttributes.getFloat(index, 0.5f));
                } else if (index == d.E1) {
                    this.f2856w.G2(obtainStyledAttributes.getFloat(index, 0.5f));
                } else if (index == d.f3237u1) {
                    this.f2856w.v2(obtainStyledAttributes.getInt(index, 2));
                } else if (index == d.D1) {
                    this.f2856w.F2(obtainStyledAttributes.getInt(index, 2));
                } else if (index == d.f3253w1) {
                    this.f2856w.x2(obtainStyledAttributes.getDimensionPixelSize(index, 0));
                } else if (index == d.F1) {
                    this.f2856w.H2(obtainStyledAttributes.getDimensionPixelSize(index, 0));
                } else if (index == d.C1) {
                    this.f2856w.D2(obtainStyledAttributes.getInt(index, -1));
                }
            }
            obtainStyledAttributes.recycle();
        }
        this.f3067o = this.f2856w;
        o();
    }

    @Override // androidx.constraintlayout.widget.b
    public void j(ConstraintWidget constraintWidget, boolean z10) {
        this.f2856w.u1(z10);
    }

    @Override // androidx.constraintlayout.widget.b, android.view.View
    protected void onMeasure(int i10, int i11) {
        p(this.f2856w, i10, i11);
    }

    @Override // androidx.constraintlayout.widget.e
    public void p(h hVar, int i10, int i11) {
        int mode = View.MeasureSpec.getMode(i10);
        int size = View.MeasureSpec.getSize(i10);
        int mode2 = View.MeasureSpec.getMode(i11);
        int size2 = View.MeasureSpec.getSize(i11);
        if (hVar != null) {
            hVar.D1(mode, size, mode2, size2);
            setMeasuredDimension(hVar.y1(), hVar.x1());
            return;
        }
        setMeasuredDimension(0, 0);
    }

    public void setFirstHorizontalBias(float f10) {
        this.f2856w.r2(f10);
        requestLayout();
    }

    public void setFirstHorizontalStyle(int i10) {
        this.f2856w.s2(i10);
        requestLayout();
    }

    public void setFirstVerticalBias(float f10) {
        this.f2856w.t2(f10);
        requestLayout();
    }

    public void setFirstVerticalStyle(int i10) {
        this.f2856w.u2(i10);
        requestLayout();
    }

    public void setHorizontalAlign(int i10) {
        this.f2856w.v2(i10);
        requestLayout();
    }

    public void setHorizontalBias(float f10) {
        this.f2856w.w2(f10);
        requestLayout();
    }

    public void setHorizontalGap(int i10) {
        this.f2856w.x2(i10);
        requestLayout();
    }

    public void setHorizontalStyle(int i10) {
        this.f2856w.y2(i10);
        requestLayout();
    }

    public void setLastHorizontalBias(float f10) {
        this.f2856w.z2(f10);
        requestLayout();
    }

    public void setLastHorizontalStyle(int i10) {
        this.f2856w.A2(i10);
        requestLayout();
    }

    public void setLastVerticalBias(float f10) {
        this.f2856w.B2(f10);
        requestLayout();
    }

    public void setLastVerticalStyle(int i10) {
        this.f2856w.C2(i10);
        requestLayout();
    }

    public void setMaxElementsWrap(int i10) {
        this.f2856w.D2(i10);
        requestLayout();
    }

    public void setOrientation(int i10) {
        this.f2856w.E2(i10);
        requestLayout();
    }

    public void setPadding(int i10) {
        this.f2856w.J1(i10);
        requestLayout();
    }

    public void setPaddingBottom(int i10) {
        this.f2856w.K1(i10);
        requestLayout();
    }

    public void setPaddingLeft(int i10) {
        this.f2856w.M1(i10);
        requestLayout();
    }

    public void setPaddingRight(int i10) {
        this.f2856w.N1(i10);
        requestLayout();
    }

    public void setPaddingTop(int i10) {
        this.f2856w.P1(i10);
        requestLayout();
    }

    public void setVerticalAlign(int i10) {
        this.f2856w.F2(i10);
        requestLayout();
    }

    public void setVerticalBias(float f10) {
        this.f2856w.G2(f10);
        requestLayout();
    }

    public void setVerticalGap(int i10) {
        this.f2856w.H2(i10);
        requestLayout();
    }

    public void setVerticalStyle(int i10) {
        this.f2856w.I2(i10);
        requestLayout();
    }

    public void setWrapMode(int i10) {
        this.f2856w.J2(i10);
        requestLayout();
    }
}
