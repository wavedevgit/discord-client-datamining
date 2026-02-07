package ff;

import android.content.Context;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import ef.a;
import ef.e;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class u0 extends wg.d implements e.a, e.b {

    /* renamed from: j  reason: collision with root package name */
    private static final a.AbstractC0286a f23286j = vg.d.f52709c;

    /* renamed from: c  reason: collision with root package name */
    private final Context f23287c;

    /* renamed from: d  reason: collision with root package name */
    private final Handler f23288d;

    /* renamed from: e  reason: collision with root package name */
    private final a.AbstractC0286a f23289e;

    /* renamed from: f  reason: collision with root package name */
    private final Set f23290f;

    /* renamed from: g  reason: collision with root package name */
    private final gf.d f23291g;

    /* renamed from: h  reason: collision with root package name */
    private vg.e f23292h;

    /* renamed from: i  reason: collision with root package name */
    private t0 f23293i;

    public u0(Context context, Handler handler, gf.d dVar) {
        a.AbstractC0286a abstractC0286a = f23286j;
        this.f23287c = context;
        this.f23288d = handler;
        this.f23291g = (gf.d) gf.q.m(dVar, "ClientSettings must not be null");
        this.f23290f = dVar.g();
        this.f23289e = abstractC0286a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ void Y0(u0 u0Var, wg.l lVar) {
        com.google.android.gms.common.b b10 = lVar.b();
        if (b10.h()) {
            gf.p0 p0Var = (gf.p0) gf.q.l(lVar.c());
            com.google.android.gms.common.b b11 = p0Var.b();
            if (!b11.h()) {
                String valueOf = String.valueOf(b11);
                Log.wtf("SignInCoordinator", "Sign-in succeeded with resolve account failure: ".concat(valueOf), new Exception());
                u0Var.f23293i.c(b11);
                u0Var.f23292h.l();
                return;
            }
            u0Var.f23293i.b(p0Var.c(), u0Var.f23290f);
        } else {
            u0Var.f23293i.c(b10);
        }
        u0Var.f23292h.l();
    }

    @Override // wg.f
    public final void B0(wg.l lVar) {
        this.f23288d.post(new s0(this, lVar));
    }

    /* JADX WARN: Type inference failed for: r0v3, types: [ef.a$f, vg.e] */
    public final void Z0(t0 t0Var) {
        vg.e eVar = this.f23292h;
        if (eVar != null) {
            eVar.l();
        }
        this.f23291g.k(Integer.valueOf(System.identityHashCode(this)));
        a.AbstractC0286a abstractC0286a = this.f23289e;
        Context context = this.f23287c;
        Handler handler = this.f23288d;
        gf.d dVar = this.f23291g;
        this.f23292h = abstractC0286a.a(context, handler.getLooper(), dVar, dVar.h(), this, this);
        this.f23293i = t0Var;
        Set set = this.f23290f;
        if (set != null && !set.isEmpty()) {
            this.f23292h.h();
        } else {
            this.f23288d.post(new r0(this));
        }
    }

    public final void a1() {
        vg.e eVar = this.f23292h;
        if (eVar != null) {
            eVar.l();
        }
    }

    @Override // ff.d
    public final void e(Bundle bundle) {
        this.f23292h.j(this);
    }

    @Override // ff.d
    public final void f(int i10) {
        this.f23293i.d(i10);
    }

    @Override // ff.k
    public final void h(com.google.android.gms.common.b bVar) {
        this.f23293i.c(bVar);
    }
}
