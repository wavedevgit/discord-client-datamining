package gf;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a1 extends x0 {

    /* renamed from: c  reason: collision with root package name */
    public final i f25564c;

    public a1(i iVar, zg.k kVar) {
        super(4, kVar);
        this.f25564c = iVar;
    }

    @Override // gf.m0
    public final boolean f(e0 e0Var) {
        q0 q0Var = (q0) e0Var.x().get(this.f25564c);
        return false;
    }

    @Override // gf.m0
    public final com.google.android.gms.common.d[] g(e0 e0Var) {
        q0 q0Var = (q0) e0Var.x().get(this.f25564c);
        return null;
    }

    @Override // gf.x0
    public final void h(e0 e0Var) {
        q0 q0Var = (q0) e0Var.x().remove(this.f25564c);
        this.f25685b.e(Boolean.FALSE);
    }

    @Override // gf.b1
    public final /* bridge */ /* synthetic */ void d(v vVar, boolean z10) {
    }
}
