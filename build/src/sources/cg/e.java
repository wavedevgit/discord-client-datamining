package cg;

import android.app.Activity;
import com.google.android.gms.tasks.Task;
import ef.a;
import ef.d;
import ve.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e extends ef.d implements ve.c {

    /* renamed from: l  reason: collision with root package name */
    private static final a.g f7439l;

    /* renamed from: m  reason: collision with root package name */
    private static final a.AbstractC0286a f7440m;

    /* renamed from: n  reason: collision with root package name */
    private static final ef.a f7441n;

    /* renamed from: k  reason: collision with root package name */
    private final String f7442k;

    static {
        a.g gVar = new a.g();
        f7439l = gVar;
        c cVar = new c();
        f7440m = cVar;
        f7441n = new ef.a("Auth.Api.Identity.CredentialSaving.API", cVar, gVar);
    }

    public e(Activity activity, ve.m mVar) {
        super(activity, f7441n, (a.d) mVar, d.a.f21502c);
        this.f7442k = n.a();
    }

    @Override // ve.c
    public final Task f(ve.f fVar) {
        gf.q.l(fVar);
        f.a d10 = ve.f.d(fVar);
        d10.c(this.f7442k);
        final ve.f a10 = d10.a();
        return p(ff.q.a().d(m.f7457e).b(new ff.m() { // from class: cg.b
            @Override // ff.m
            public final void accept(Object obj, Object obj2) {
                ((w) ((t) obj).C()).h(new d(e.this, (yg.k) obj2), (ve.f) gf.q.l(a10));
            }
        }).c(false).e(1536).a());
    }
}
