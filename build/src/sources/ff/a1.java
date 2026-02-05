package ff;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a1 extends x0 {

    /* renamed from: c  reason: collision with root package name */
    public final i f22878c;

    public a1(i iVar, xg.k kVar) {
        super(4, kVar);
        this.f22878c = iVar;
    }

    @Override // ff.m0
    public final boolean f(e0 e0Var) {
        q0 q0Var = (q0) e0Var.x().get(this.f22878c);
        return false;
    }

    @Override // ff.m0
    public final com.google.android.gms.common.d[] g(e0 e0Var) {
        q0 q0Var = (q0) e0Var.x().get(this.f22878c);
        return null;
    }

    @Override // ff.x0
    public final void h(e0 e0Var) {
        q0 q0Var = (q0) e0Var.x().remove(this.f22878c);
        this.f22999b.e(Boolean.FALSE);
    }

    @Override // ff.b1
    public final /* bridge */ /* synthetic */ void d(v vVar, boolean z10) {
    }
}
