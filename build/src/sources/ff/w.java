package ff;

import android.app.Activity;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w extends f1 {

    /* renamed from: q  reason: collision with root package name */
    private final u0.b f23971q;

    /* renamed from: r  reason: collision with root package name */
    private final e f23972r;

    w(h hVar, e eVar, com.google.android.gms.common.f fVar) {
        super(hVar, fVar);
        this.f23971q = new u0.b();
        this.f23972r = eVar;
        this.f23907d.k("ConnectionlessLifecycleHelper", this);
    }

    public static void u(Activity activity, e eVar, b bVar) {
        h c10 = g.c(activity);
        w wVar = (w) c10.d("ConnectionlessLifecycleHelper", w.class);
        if (wVar == null) {
            wVar = new w(c10, eVar, com.google.android.gms.common.f.m());
        }
        gf.q.m(bVar, "ApiKey cannot be null");
        wVar.f23971q.add(bVar);
        eVar.b(wVar);
    }

    private final void v() {
        if (!this.f23971q.isEmpty()) {
            this.f23972r.b(this);
        }
    }

    @Override // ff.g
    public final void h() {
        super.h();
        v();
    }

    @Override // ff.f1, ff.g
    public final void j() {
        super.j();
        v();
    }

    @Override // ff.f1, ff.g
    public final void k() {
        super.k();
        this.f23972r.c(this);
    }

    @Override // ff.f1
    protected final void m(com.google.android.gms.common.b bVar, int i10) {
        this.f23972r.D(bVar, i10);
    }

    @Override // ff.f1
    protected final void n() {
        this.f23972r.E();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final u0.b t() {
        return this.f23971q;
    }
}
