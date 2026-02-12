package com.google.android.gms.internal.play_billing;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class o1 extends y {

    /* renamed from: d  reason: collision with root package name */
    private final q1 f15023d;

    /* renamed from: e  reason: collision with root package name */
    protected q1 f15024e;

    /* JADX INFO: Access modifiers changed from: protected */
    public o1(q1 q1Var) {
        this.f15023d = q1Var;
        if (!q1Var.x()) {
            this.f15024e = q1Var.k();
            return;
        }
        throw new IllegalArgumentException("Default instance must be immutable.");
    }

    private static void k(Object obj, Object obj2) {
        d3.a().b(obj.getClass()).e(obj, obj2);
    }

    /* renamed from: d */
    public final o1 clone() {
        o1 o1Var = (o1) this.f15023d.y(5, null, null);
        o1Var.f15024e = p();
        return o1Var;
    }

    public final o1 e(q1 q1Var) {
        if (!this.f15023d.equals(q1Var)) {
            if (!this.f15024e.x()) {
                j();
            }
            k(this.f15024e, q1Var);
        }
        return this;
    }

    public final q1 f() {
        q1 p10 = p();
        if (p10.j()) {
            return p10;
        }
        throw new v3(p10);
    }

    @Override // com.google.android.gms.internal.play_billing.u2
    /* renamed from: g */
    public q1 p() {
        if (!this.f15024e.x()) {
            return this.f15024e;
        }
        this.f15024e.s();
        return this.f15024e;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void h() {
        if (!this.f15024e.x()) {
            j();
        }
    }

    protected void j() {
        q1 k10 = this.f15023d.k();
        k(k10, this.f15024e);
        this.f15024e = k10;
    }
}
