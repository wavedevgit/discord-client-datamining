package dg;

import android.app.Activity;
import com.google.android.gms.tasks.Task;
import ff.a;
import ff.d;
import we.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e extends ff.d implements we.c {

    /* renamed from: l  reason: collision with root package name */
    private static final a.g f21665l;

    /* renamed from: m  reason: collision with root package name */
    private static final a.AbstractC0316a f21666m;

    /* renamed from: n  reason: collision with root package name */
    private static final ff.a f21667n;

    /* renamed from: k  reason: collision with root package name */
    private final String f21668k;

    static {
        a.g gVar = new a.g();
        f21665l = gVar;
        c cVar = new c();
        f21666m = cVar;
        f21667n = new ff.a("Auth.Api.Identity.CredentialSaving.API", cVar, gVar);
    }

    public e(Activity activity, we.m mVar) {
        super(activity, f21667n, (a.d) mVar, d.a.f23735c);
        this.f21668k = n.a();
    }

    @Override // we.c
    public final Task f(we.f fVar) {
        hf.q.l(fVar);
        f.a d10 = we.f.d(fVar);
        d10.c(this.f21668k);
        final we.f a10 = d10.a();
        return p(gf.q.a().d(m.f21683e).b(new gf.m() { // from class: dg.b
            @Override // gf.m
            public final void accept(Object obj, Object obj2) {
                ((w) ((t) obj).C()).i(new d(e.this, (zg.k) obj2), (we.f) hf.q.l(a10));
            }
        }).c(false).e(1536).a());
    }
}
