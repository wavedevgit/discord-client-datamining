package androidx.constraintlayout.core.widgets;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import androidx.constraintlayout.core.widgets.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a extends k1.b {
    private int N0 = 0;
    private boolean O0 = true;
    private int P0 = 0;
    boolean Q0 = false;

    public void A1(boolean z10) {
        this.O0 = z10;
    }

    public void B1(int i10) {
        this.N0 = i10;
    }

    public void C1(int i10) {
        this.P0 = i10;
    }

    @Override // androidx.constraintlayout.core.widgets.ConstraintWidget
    public void g(h1.d dVar, boolean z10) {
        d[] dVarArr;
        boolean z11;
        boolean z12;
        boolean z13;
        boolean z14;
        int i10;
        int i11;
        int i12;
        int i13;
        int i14;
        d[] dVarArr2 = this.W;
        dVarArr2[0] = this.O;
        dVarArr2[2] = this.P;
        dVarArr2[1] = this.Q;
        dVarArr2[3] = this.R;
        int i15 = 0;
        while (true) {
            dVarArr = this.W;
            if (i15 >= dVarArr.length) {
                break;
            }
            d dVar2 = dVarArr[i15];
            dVar2.f2390i = dVar.q(dVar2);
            i15++;
        }
        int i16 = this.N0;
        if (i16 >= 0 && i16 < 4) {
            d dVar3 = dVarArr[i16];
            if (!this.Q0) {
                u1();
            }
            if (this.Q0) {
                this.Q0 = false;
                int i17 = this.N0;
                if (i17 != 0 && i17 != 1) {
                    if (i17 == 2 || i17 == 3) {
                        dVar.f(this.P.f2390i, this.f2298g0);
                        dVar.f(this.R.f2390i, this.f2298g0);
                        return;
                    }
                    return;
                }
                dVar.f(this.O.f2390i, this.f2296f0);
                dVar.f(this.Q.f2390i, this.f2296f0);
                return;
            }
            for (int i18 = 0; i18 < this.M0; i18++) {
                ConstraintWidget constraintWidget = this.L0[i18];
                if ((this.O0 || constraintWidget.h()) && ((((i13 = this.N0) == 0 || i13 == 1) && constraintWidget.A() == ConstraintWidget.b.MATCH_CONSTRAINT && constraintWidget.O.f2387f != null && constraintWidget.Q.f2387f != null) || (((i14 = this.N0) == 2 || i14 == 3) && constraintWidget.T() == ConstraintWidget.b.MATCH_CONSTRAINT && constraintWidget.P.f2387f != null && constraintWidget.R.f2387f != null))) {
                    z11 = true;
                    break;
                }
            }
            z11 = false;
            if (!this.O.l() && !this.Q.l()) {
                z12 = false;
            } else {
                z12 = true;
            }
            if (!this.P.l() && !this.R.l()) {
                z13 = false;
            } else {
                z13 = true;
            }
            if (!z11 && (((i12 = this.N0) == 0 && z12) || ((i12 == 2 && z13) || ((i12 == 1 && z12) || (i12 == 3 && z13))))) {
                z14 = true;
            } else {
                z14 = false;
            }
            if (!z14) {
                i10 = 4;
            } else {
                i10 = 5;
            }
            for (int i19 = 0; i19 < this.M0; i19++) {
                ConstraintWidget constraintWidget2 = this.L0[i19];
                if (this.O0 || constraintWidget2.h()) {
                    h1.h q10 = dVar.q(constraintWidget2.W[this.N0]);
                    d[] dVarArr3 = constraintWidget2.W;
                    int i20 = this.N0;
                    d dVar4 = dVarArr3[i20];
                    dVar4.f2390i = q10;
                    d dVar5 = dVar4.f2387f;
                    if (dVar5 != null && dVar5.f2385d == this) {
                        i11 = dVar4.f2388g;
                    } else {
                        i11 = 0;
                    }
                    if (i20 != 0 && i20 != 2) {
                        dVar.g(dVar3.f2390i, q10, this.P0 + i11, z11);
                    } else {
                        dVar.i(dVar3.f2390i, q10, this.P0 - i11, z11);
                    }
                    dVar.e(dVar3.f2390i, q10, this.P0 + i11, i10);
                }
            }
            int i21 = this.N0;
            if (i21 == 0) {
                dVar.e(this.Q.f2390i, this.O.f2390i, 0, 8);
                dVar.e(this.O.f2390i, this.f2286a0.Q.f2390i, 0, 4);
                dVar.e(this.O.f2390i, this.f2286a0.O.f2390i, 0, 0);
            } else if (i21 == 1) {
                dVar.e(this.O.f2390i, this.Q.f2390i, 0, 8);
                dVar.e(this.O.f2390i, this.f2286a0.O.f2390i, 0, 4);
                dVar.e(this.O.f2390i, this.f2286a0.Q.f2390i, 0, 0);
            } else if (i21 == 2) {
                dVar.e(this.R.f2390i, this.P.f2390i, 0, 8);
                dVar.e(this.P.f2390i, this.f2286a0.R.f2390i, 0, 4);
                dVar.e(this.P.f2390i, this.f2286a0.P.f2390i, 0, 0);
            } else if (i21 == 3) {
                dVar.e(this.P.f2390i, this.R.f2390i, 0, 8);
                dVar.e(this.P.f2390i, this.f2286a0.P.f2390i, 0, 4);
                dVar.e(this.P.f2390i, this.f2286a0.R.f2390i, 0, 0);
            }
        }
    }

    @Override // androidx.constraintlayout.core.widgets.ConstraintWidget
    public boolean h() {
        return true;
    }

    @Override // androidx.constraintlayout.core.widgets.ConstraintWidget
    public boolean n0() {
        return this.Q0;
    }

    @Override // androidx.constraintlayout.core.widgets.ConstraintWidget
    public boolean o0() {
        return this.Q0;
    }

    @Override // androidx.constraintlayout.core.widgets.ConstraintWidget
    public String toString() {
        String str = "[Barrier] " + t() + " {";
        for (int i10 = 0; i10 < this.M0; i10++) {
            ConstraintWidget constraintWidget = this.L0[i10];
            if (i10 > 0) {
                str = str + ", ";
            }
            str = str + constraintWidget.t();
        }
        return str + "}";
    }

    public boolean u1() {
        int i10;
        int i11;
        int i12;
        boolean z10 = true;
        int i13 = 0;
        while (true) {
            i10 = this.M0;
            if (i13 >= i10) {
                break;
            }
            ConstraintWidget constraintWidget = this.L0[i13];
            if ((this.O0 || constraintWidget.h()) && ((((i11 = this.N0) == 0 || i11 == 1) && !constraintWidget.n0()) || (((i12 = this.N0) == 2 || i12 == 3) && !constraintWidget.o0()))) {
                z10 = false;
            }
            i13++;
        }
        if (!z10 || i10 <= 0) {
            return false;
        }
        int i14 = 0;
        boolean z11 = false;
        for (int i15 = 0; i15 < this.M0; i15++) {
            ConstraintWidget constraintWidget2 = this.L0[i15];
            if (this.O0 || constraintWidget2.h()) {
                if (!z11) {
                    int i16 = this.N0;
                    if (i16 == 0) {
                        i14 = constraintWidget2.o(d.a.LEFT).e();
                    } else if (i16 == 1) {
                        i14 = constraintWidget2.o(d.a.RIGHT).e();
                    } else if (i16 == 2) {
                        i14 = constraintWidget2.o(d.a.TOP).e();
                    } else if (i16 == 3) {
                        i14 = constraintWidget2.o(d.a.BOTTOM).e();
                    }
                    z11 = true;
                }
                int i17 = this.N0;
                if (i17 == 0) {
                    i14 = Math.min(i14, constraintWidget2.o(d.a.LEFT).e());
                } else if (i17 == 1) {
                    i14 = Math.max(i14, constraintWidget2.o(d.a.RIGHT).e());
                } else if (i17 == 2) {
                    i14 = Math.min(i14, constraintWidget2.o(d.a.TOP).e());
                } else if (i17 == 3) {
                    i14 = Math.max(i14, constraintWidget2.o(d.a.BOTTOM).e());
                }
            }
        }
        int i18 = i14 + this.P0;
        int i19 = this.N0;
        if (i19 != 0 && i19 != 1) {
            J0(i18, i18);
        } else {
            G0(i18, i18);
        }
        this.Q0 = true;
        return true;
    }

    public boolean v1() {
        return this.O0;
    }

    public int w1() {
        return this.N0;
    }

    public int x1() {
        return this.P0;
    }

    public int y1() {
        int i10 = this.N0;
        if (i10 != 0 && i10 != 1) {
            if (i10 == 2 || i10 == 3) {
                return 1;
            }
            return -1;
        }
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void z1() {
        for (int i10 = 0; i10 < this.M0; i10++) {
            ConstraintWidget constraintWidget = this.L0[i10];
            if (this.O0 || constraintWidget.h()) {
                int i11 = this.N0;
                if (i11 != 0 && i11 != 1) {
                    if (i11 == 2 || i11 == 3) {
                        constraintWidget.T0(1, true);
                    }
                } else {
                    constraintWidget.T0(0, true);
                }
            }
        }
    }
}
