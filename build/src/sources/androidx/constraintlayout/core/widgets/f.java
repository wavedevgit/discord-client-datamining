package androidx.constraintlayout.core.widgets;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import androidx.constraintlayout.core.widgets.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f extends ConstraintWidget {
    protected float L0 = -1.0f;
    protected int M0 = -1;
    protected int N0 = -1;
    protected boolean O0 = true;
    private d P0 = this.P;
    private int Q0 = 0;
    private int R0 = 0;
    private boolean S0;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f2525a;

        static {
            int[] iArr = new int[d.a.values().length];
            f2525a = iArr;
            try {
                iArr[d.a.LEFT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f2525a[d.a.RIGHT.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f2525a[d.a.TOP.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f2525a[d.a.BOTTOM.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f2525a[d.a.BASELINE.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f2525a[d.a.CENTER.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f2525a[d.a.CENTER_X.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f2525a[d.a.CENTER_Y.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f2525a[d.a.NONE.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
        }
    }

    public f() {
        this.X.clear();
        this.X.add(this.P0);
        int length = this.W.length;
        for (int i10 = 0; i10 < length; i10++) {
            this.W[i10] = this.P0;
        }
    }

    public void A1(float f10) {
        if (f10 > -1.0f) {
            this.L0 = f10;
            this.M0 = -1;
            this.N0 = -1;
        }
    }

    public void B1(int i10) {
        if (this.Q0 != i10) {
            this.Q0 = i10;
            this.X.clear();
            if (this.Q0 == 1) {
                this.P0 = this.O;
            } else {
                this.P0 = this.P;
            }
            this.X.add(this.P0);
            int length = this.W.length;
            for (int i11 = 0; i11 < length; i11++) {
                this.W[i11] = this.P0;
            }
        }
    }

    @Override // androidx.constraintlayout.core.widgets.ConstraintWidget
    public void g(h1.d dVar, boolean z10) {
        boolean z11;
        ConstraintWidgetContainer constraintWidgetContainer = (ConstraintWidgetContainer) K();
        if (constraintWidgetContainer != null) {
            d o10 = constraintWidgetContainer.o(d.a.LEFT);
            d o11 = constraintWidgetContainer.o(d.a.RIGHT);
            ConstraintWidget constraintWidget = this.f2367a0;
            boolean z12 = true;
            if (constraintWidget != null && constraintWidget.Z[0] == ConstraintWidget.b.WRAP_CONTENT) {
                z11 = true;
            } else {
                z11 = false;
            }
            if (this.Q0 == 0) {
                o10 = constraintWidgetContainer.o(d.a.TOP);
                o11 = constraintWidgetContainer.o(d.a.BOTTOM);
                ConstraintWidget constraintWidget2 = this.f2367a0;
                if (constraintWidget2 == null || constraintWidget2.Z[1] != ConstraintWidget.b.WRAP_CONTENT) {
                    z12 = false;
                }
                z11 = z12;
            }
            if (this.S0 && this.P0.n()) {
                h1.h q10 = dVar.q(this.P0);
                dVar.f(q10, this.P0.e());
                if (this.M0 != -1) {
                    if (z11) {
                        dVar.h(dVar.q(o11), q10, 0, 5);
                    }
                } else if (this.N0 != -1 && z11) {
                    h1.h q11 = dVar.q(o11);
                    dVar.h(q10, dVar.q(o10), 0, 5);
                    dVar.h(q11, q10, 0, 5);
                }
                this.S0 = false;
            } else if (this.M0 != -1) {
                h1.h q12 = dVar.q(this.P0);
                dVar.e(q12, dVar.q(o10), this.M0, 8);
                if (z11) {
                    dVar.h(dVar.q(o11), q12, 0, 5);
                }
            } else if (this.N0 != -1) {
                h1.h q13 = dVar.q(this.P0);
                h1.h q14 = dVar.q(o11);
                dVar.e(q13, q14, -this.N0, 8);
                if (z11) {
                    dVar.h(q13, dVar.q(o10), 0, 5);
                    dVar.h(q14, q13, 0, 5);
                }
            } else if (this.L0 != -1.0f) {
                dVar.d(h1.d.s(dVar, dVar.q(this.P0), dVar.q(o11), this.L0));
            }
        }
    }

    @Override // androidx.constraintlayout.core.widgets.ConstraintWidget
    public boolean h() {
        return true;
    }

    @Override // androidx.constraintlayout.core.widgets.ConstraintWidget
    public boolean n0() {
        return this.S0;
    }

    @Override // androidx.constraintlayout.core.widgets.ConstraintWidget
    public d o(d.a aVar) {
        int i10 = a.f2525a[aVar.ordinal()];
        if (i10 != 1 && i10 != 2) {
            if ((i10 == 3 || i10 == 4) && this.Q0 == 0) {
                return this.P0;
            }
            return null;
        } else if (this.Q0 == 1) {
            return this.P0;
        } else {
            return null;
        }
    }

    @Override // androidx.constraintlayout.core.widgets.ConstraintWidget
    public boolean o0() {
        return this.S0;
    }

    @Override // androidx.constraintlayout.core.widgets.ConstraintWidget
    public void r1(h1.d dVar, boolean z10) {
        if (K() == null) {
            return;
        }
        int A = dVar.A(this.P0);
        if (this.Q0 == 1) {
            n1(A);
            o1(0);
            M0(K().x());
            l1(0);
            return;
        }
        n1(0);
        o1(A);
        l1(K().W());
        M0(0);
    }

    public d s1() {
        return this.P0;
    }

    public int t1() {
        return this.Q0;
    }

    public int u1() {
        return this.M0;
    }

    public int v1() {
        return this.N0;
    }

    public float w1() {
        return this.L0;
    }

    public void x1(int i10) {
        this.P0.t(i10);
        this.S0 = true;
    }

    public void y1(int i10) {
        if (i10 > -1) {
            this.L0 = -1.0f;
            this.M0 = i10;
            this.N0 = -1;
        }
    }

    public void z1(int i10) {
        if (i10 > -1) {
            this.L0 = -1.0f;
            this.M0 = -1;
            this.N0 = i10;
        }
    }
}
