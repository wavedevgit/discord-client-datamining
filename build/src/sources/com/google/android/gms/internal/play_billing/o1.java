package com.google.android.gms.internal.play_billing;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class o1 extends y {

    /* renamed from: d  reason: collision with root package name */
    private final q1 f14980d;

    /* renamed from: e  reason: collision with root package name */
    protected q1 f14981e;

    /* JADX INFO: Access modifiers changed from: protected */
    public o1(q1 q1Var) {
        this.f14980d = q1Var;
        if (!q1Var.x()) {
            this.f14981e = q1Var.k();
            return;
        }
        throw new IllegalArgumentException("Default instance must be immutable.");
    }

    private static void k(Object obj, Object obj2) {
        d3.a().b(obj.getClass()).e(obj, obj2);
    }

    /* renamed from: d */
    public final o1 clone() {
        o1 o1Var = (o1) this.f14980d.y(5, null, null);
        o1Var.f14981e = n();
        return o1Var;
    }

    public final o1 e(q1 q1Var) {
        if (!this.f14980d.equals(q1Var)) {
            if (!this.f14981e.x()) {
                j();
            }
            k(this.f14981e, q1Var);
        }
        return this;
    }

    public final q1 f() {
        q1 n10 = n();
        if (n10.j()) {
            return n10;
        }
        throw new v3(n10);
    }

    @Override // com.google.android.gms.internal.play_billing.u2
    /* renamed from: g */
    public q1 n() {
        if (!this.f14981e.x()) {
            return this.f14981e;
        }
        this.f14981e.s();
        return this.f14981e;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void i() {
        if (!this.f14981e.x()) {
            j();
        }
    }

    protected void j() {
        q1 k10 = this.f14980d.k();
        k(k10, this.f14981e);
        this.f14981e = k10;
    }
}
