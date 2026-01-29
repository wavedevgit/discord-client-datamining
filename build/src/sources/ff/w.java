package ff;

import android.app.Activity;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w extends f1 {

    /* renamed from: q  reason: collision with root package name */
    private final u0.b f25168q;

    /* renamed from: r  reason: collision with root package name */
    private final e f25169r;

    w(h hVar, e eVar, com.google.android.gms.common.f fVar) {
        super(hVar, fVar);
        this.f25168q = new u0.b();
        this.f25169r = eVar;
        this.f25104d.e("ConnectionlessLifecycleHelper", this);
    }

    public static void u(Activity activity, e eVar, b bVar) {
        h c10 = g.c(activity);
        w wVar = (w) c10.b("ConnectionlessLifecycleHelper", w.class);
        if (wVar == null) {
            wVar = new w(c10, eVar, com.google.android.gms.common.f.m());
        }
        gf.q.m(bVar, "ApiKey cannot be null");
        wVar.f25168q.add(bVar);
        eVar.b(wVar);
    }

    private final void v() {
        if (!this.f25168q.isEmpty()) {
            this.f25169r.b(this);
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
        this.f25169r.c(this);
    }

    @Override // ff.f1
    protected final void m(com.google.android.gms.common.b bVar, int i10) {
        this.f25169r.D(bVar, i10);
    }

    @Override // ff.f1
    protected final void n() {
        this.f25169r.E();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final u0.b t() {
        return this.f25168q;
    }
}
