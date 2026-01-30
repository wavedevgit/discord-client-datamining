package androidx.constraintlayout.core.widgets;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import java.util.HashSet;
import l1.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class h extends k1.b {
    private int N0 = 0;
    private int O0 = 0;
    private int P0 = 0;
    private int Q0 = 0;
    private int R0 = 0;
    private int S0 = 0;
    private int T0 = 0;
    private int U0 = 0;
    private boolean V0 = false;
    private int W0 = 0;
    private int X0 = 0;
    protected b.a Y0 = new b.a();
    b.InterfaceC0474b Z0 = null;

    public int A1() {
        return this.T0;
    }

    public int B1() {
        return this.U0;
    }

    public int C1() {
        return this.N0;
    }

    public abstract void D1(int i10, int i11, int i12, int i13);

    /* JADX INFO: Access modifiers changed from: protected */
    public void E1(ConstraintWidget constraintWidget, ConstraintWidget.b bVar, int i10, ConstraintWidget.b bVar2, int i11) {
        while (this.Z0 == null && K() != null) {
            this.Z0 = ((ConstraintWidgetContainer) K()).K1();
        }
        b.a aVar = this.Y0;
        aVar.f36729a = bVar;
        aVar.f36730b = bVar2;
        aVar.f36731c = i10;
        aVar.f36732d = i11;
        this.Z0.b(constraintWidget, aVar);
        constraintWidget.l1(this.Y0.f36733e);
        constraintWidget.M0(this.Y0.f36734f);
        constraintWidget.L0(this.Y0.f36736h);
        constraintWidget.B0(this.Y0.f36735g);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public boolean F1() {
        b.InterfaceC0474b interfaceC0474b;
        ConstraintWidget constraintWidget = this.f2242a0;
        if (constraintWidget != null) {
            interfaceC0474b = ((ConstraintWidgetContainer) constraintWidget).K1();
        } else {
            interfaceC0474b = null;
        }
        if (interfaceC0474b == null) {
            return false;
        }
        for (int i10 = 0; i10 < this.M0; i10++) {
            ConstraintWidget constraintWidget2 = this.L0[i10];
            if (constraintWidget2 != null && !(constraintWidget2 instanceof f)) {
                ConstraintWidget.b u10 = constraintWidget2.u(0);
                ConstraintWidget.b u11 = constraintWidget2.u(1);
                ConstraintWidget.b bVar = ConstraintWidget.b.MATCH_CONSTRAINT;
                if (u10 != bVar || constraintWidget2.f2285w == 1 || u11 != bVar || constraintWidget2.f2287x == 1) {
                    if (u10 == bVar) {
                        u10 = ConstraintWidget.b.WRAP_CONTENT;
                    }
                    if (u11 == bVar) {
                        u11 = ConstraintWidget.b.WRAP_CONTENT;
                    }
                    b.a aVar = this.Y0;
                    aVar.f36729a = u10;
                    aVar.f36730b = u11;
                    aVar.f36731c = constraintWidget2.W();
                    this.Y0.f36732d = constraintWidget2.x();
                    interfaceC0474b.b(constraintWidget2, this.Y0);
                    constraintWidget2.l1(this.Y0.f36733e);
                    constraintWidget2.M0(this.Y0.f36734f);
                    constraintWidget2.B0(this.Y0.f36735g);
                }
            }
        }
        return true;
    }

    public boolean G1() {
        return this.V0;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void H1(boolean z10) {
        this.V0 = z10;
    }

    public void I1(int i10, int i11) {
        this.W0 = i10;
        this.X0 = i11;
    }

    public void J1(int i10) {
        this.P0 = i10;
        this.N0 = i10;
        this.Q0 = i10;
        this.O0 = i10;
        this.R0 = i10;
        this.S0 = i10;
    }

    public void K1(int i10) {
        this.O0 = i10;
    }

    public void L1(int i10) {
        this.S0 = i10;
    }

    public void M1(int i10) {
        this.P0 = i10;
        this.T0 = i10;
    }

    public void N1(int i10) {
        this.Q0 = i10;
        this.U0 = i10;
    }

    public void O1(int i10) {
        this.R0 = i10;
        this.T0 = i10;
        this.U0 = i10;
    }

    public void P1(int i10) {
        this.N0 = i10;
    }

    @Override // k1.b, k1.a
    public void c(ConstraintWidgetContainer constraintWidgetContainer) {
        v1();
    }

    public void u1(boolean z10) {
        int i10 = this.R0;
        if (i10 <= 0 && this.S0 <= 0) {
            return;
        }
        if (z10) {
            this.T0 = this.S0;
            this.U0 = i10;
            return;
        }
        this.T0 = i10;
        this.U0 = this.S0;
    }

    public void v1() {
        for (int i10 = 0; i10 < this.M0; i10++) {
            ConstraintWidget constraintWidget = this.L0[i10];
            if (constraintWidget != null) {
                constraintWidget.V0(true);
            }
        }
    }

    public boolean w1(HashSet hashSet) {
        for (int i10 = 0; i10 < this.M0; i10++) {
            if (hashSet.contains(this.L0[i10])) {
                return true;
            }
        }
        return false;
    }

    public int x1() {
        return this.X0;
    }

    public int y1() {
        return this.W0;
    }

    public int z1() {
        return this.O0;
    }
}
