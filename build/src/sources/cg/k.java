package cg;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import com.google.android.gms.common.api.Status;
import com.google.android.gms.tasks.Task;
import ef.a;
import ef.d;
import ve.a;
import ve.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k extends ef.d implements ve.h {

    /* renamed from: l  reason: collision with root package name */
    private static final a.g f7449l;

    /* renamed from: m  reason: collision with root package name */
    private static final a.AbstractC0286a f7450m;

    /* renamed from: n  reason: collision with root package name */
    private static final ef.a f7451n;

    /* renamed from: k  reason: collision with root package name */
    private final String f7452k;

    static {
        a.g gVar = new a.g();
        f7449l = gVar;
        h hVar = new h();
        f7450m = hVar;
        f7451n = new ef.a("Auth.Api.Identity.SignIn.API", hVar, gVar);
    }

    public k(Activity activity, ve.v vVar) {
        super(activity, f7451n, (a.d) vVar, d.a.f21502c);
        this.f7452k = n.a();
    }

    @Override // ve.h
    public final Task b(ve.d dVar) {
        gf.q.l(dVar);
        d.a h10 = ve.d.h(dVar);
        h10.f(this.f7452k);
        final ve.d a10 = h10.a();
        return p(ff.q.a().d(m.f7458f).b(new ff.m() { // from class: cg.g
            @Override // ff.m
            public final void accept(Object obj, Object obj2) {
                ((b0) ((l) obj).C()).W0(new j(k.this, (yg.k) obj2), (ve.d) gf.q.l(a10));
            }
        }).e(1555).a());
    }

    @Override // ve.h
    public final Task c(ve.a aVar) {
        gf.q.l(aVar);
        a.C0690a j10 = ve.a.j(aVar);
        j10.h(this.f7452k);
        final ve.a a10 = j10.a();
        return p(ff.q.a().d(new com.google.android.gms.common.d("auth_api_credentials_begin_sign_in", 8L)).b(new ff.m() { // from class: cg.f
            @Override // ff.m
            public final void accept(Object obj, Object obj2) {
                ((b0) ((l) obj).C()).h(new i(k.this, (yg.k) obj2), (ve.a) gf.q.l(a10));
            }
        }).c(false).e(1553).a());
    }

    @Override // ve.h
    public final ve.i e(Intent intent) {
        if (intent != null) {
            Status status = (Status) hf.e.b(intent, "status", Status.CREATOR);
            if (status != null) {
                if (status.h()) {
                    ve.i iVar = (ve.i) hf.e.b(intent, "sign_in_credential", ve.i.CREATOR);
                    if (iVar != null) {
                        return iVar;
                    }
                    throw new ef.b(Status.f13736s);
                }
                throw new ef.b(status);
            }
            throw new ef.b(Status.f13738u);
        }
        throw new ef.b(Status.f13736s);
    }

    public k(Context context, ve.v vVar) {
        super(context, f7451n, vVar, d.a.f21502c);
        this.f7452k = n.a();
    }
}
