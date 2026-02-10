package gf;

import android.app.Activity;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w extends f1 {

    /* renamed from: q  reason: collision with root package name */
    private final u0.b f24382q;

    /* renamed from: r  reason: collision with root package name */
    private final e f24383r;

    w(h hVar, e eVar, com.google.android.gms.common.f fVar) {
        super(hVar, fVar);
        this.f24382q = new u0.b();
        this.f24383r = eVar;
        this.f24318d.d("ConnectionlessLifecycleHelper", this);
    }

    public static void u(Activity activity, e eVar, b bVar) {
        h c10 = g.c(activity);
        w wVar = (w) c10.b("ConnectionlessLifecycleHelper", w.class);
        if (wVar == null) {
            wVar = new w(c10, eVar, com.google.android.gms.common.f.n());
        }
        hf.q.m(bVar, "ApiKey cannot be null");
        wVar.f24382q.add(bVar);
        eVar.b(wVar);
    }

    private final void v() {
        if (!this.f24382q.isEmpty()) {
            this.f24383r.b(this);
        }
    }

    @Override // gf.g
    public final void h() {
        super.h();
        v();
    }

    @Override // gf.f1, gf.g
    public final void j() {
        super.j();
        v();
    }

    @Override // gf.f1, gf.g
    public final void k() {
        super.k();
        this.f24383r.c(this);
    }

    @Override // gf.f1
    protected final void m(com.google.android.gms.common.b bVar, int i10) {
        this.f24383r.D(bVar, i10);
    }

    @Override // gf.f1
    protected final void n() {
        this.f24383r.E();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final u0.b t() {
        return this.f24382q;
    }
}
