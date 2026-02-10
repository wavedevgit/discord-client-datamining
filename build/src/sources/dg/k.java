package dg;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import com.google.android.gms.common.api.Status;
import com.google.android.gms.tasks.Task;
import ff.a;
import ff.d;
import we.a;
import we.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k extends ff.d implements we.h {

    /* renamed from: l  reason: collision with root package name */
    private static final a.g f21675l;

    /* renamed from: m  reason: collision with root package name */
    private static final a.AbstractC0316a f21676m;

    /* renamed from: n  reason: collision with root package name */
    private static final ff.a f21677n;

    /* renamed from: k  reason: collision with root package name */
    private final String f21678k;

    static {
        a.g gVar = new a.g();
        f21675l = gVar;
        h hVar = new h();
        f21676m = hVar;
        f21677n = new ff.a("Auth.Api.Identity.SignIn.API", hVar, gVar);
    }

    public k(Activity activity, we.v vVar) {
        super(activity, f21677n, (a.d) vVar, d.a.f23735c);
        this.f21678k = n.a();
    }

    @Override // we.h
    public final we.i c(Intent intent) {
        if (intent != null) {
            Status status = (Status) jf.e.b(intent, "status", Status.CREATOR);
            if (status != null) {
                if (status.g()) {
                    we.i iVar = (we.i) jf.e.b(intent, "sign_in_credential", we.i.CREATOR);
                    if (iVar != null) {
                        return iVar;
                    }
                    throw new ff.b(Status.f14453s);
                }
                throw new ff.b(status);
            }
            throw new ff.b(Status.f14455u);
        }
        throw new ff.b(Status.f14453s);
    }

    @Override // we.h
    public final Task d(we.a aVar) {
        hf.q.l(aVar);
        a.C0732a j10 = we.a.j(aVar);
        j10.h(this.f21678k);
        final we.a a10 = j10.a();
        return p(gf.q.a().d(new com.google.android.gms.common.d("auth_api_credentials_begin_sign_in", 8L)).b(new gf.m() { // from class: dg.f
            @Override // gf.m
            public final void accept(Object obj, Object obj2) {
                ((b0) ((l) obj).C()).i(new i(k.this, (zg.k) obj2), (we.a) hf.q.l(a10));
            }
        }).c(false).e(1553).a());
    }

    @Override // we.h
    public final Task j(we.d dVar) {
        hf.q.l(dVar);
        d.a g10 = we.d.g(dVar);
        g10.f(this.f21678k);
        final we.d a10 = g10.a();
        return p(gf.q.a().d(m.f21684f).b(new gf.m() { // from class: dg.g
            @Override // gf.m
            public final void accept(Object obj, Object obj2) {
                ((b0) ((l) obj).C()).W0(new j(k.this, (zg.k) obj2), (we.d) hf.q.l(a10));
            }
        }).e(1555).a());
    }

    public k(Context context, we.v vVar) {
        super(context, f21677n, vVar, d.a.f23735c);
        this.f21678k = n.a();
    }
}
