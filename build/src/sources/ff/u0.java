package ff;

import android.content.Context;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import ef.a;
import ef.e;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class u0 extends vg.d implements e.a, e.b {

    /* renamed from: j  reason: collision with root package name */
    private static final a.AbstractC0294a f22985j = ug.d.f51405c;

    /* renamed from: c  reason: collision with root package name */
    private final Context f22986c;

    /* renamed from: d  reason: collision with root package name */
    private final Handler f22987d;

    /* renamed from: e  reason: collision with root package name */
    private final a.AbstractC0294a f22988e;

    /* renamed from: f  reason: collision with root package name */
    private final Set f22989f;

    /* renamed from: g  reason: collision with root package name */
    private final gf.d f22990g;

    /* renamed from: h  reason: collision with root package name */
    private ug.e f22991h;

    /* renamed from: i  reason: collision with root package name */
    private t0 f22992i;

    public u0(Context context, Handler handler, gf.d dVar) {
        a.AbstractC0294a abstractC0294a = f22985j;
        this.f22986c = context;
        this.f22987d = handler;
        this.f22990g = (gf.d) gf.q.m(dVar, "ClientSettings must not be null");
        this.f22989f = dVar.g();
        this.f22988e = abstractC0294a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ void Y0(u0 u0Var, vg.l lVar) {
        com.google.android.gms.common.b b10 = lVar.b();
        if (b10.g()) {
            gf.p0 p0Var = (gf.p0) gf.q.l(lVar.c());
            com.google.android.gms.common.b b11 = p0Var.b();
            if (!b11.g()) {
                String valueOf = String.valueOf(b11);
                Log.wtf("SignInCoordinator", "Sign-in succeeded with resolve account failure: ".concat(valueOf), new Exception());
                u0Var.f22992i.c(b11);
                u0Var.f22991h.l();
                return;
            }
            u0Var.f22992i.b(p0Var.c(), u0Var.f22989f);
        } else {
            u0Var.f22992i.c(b10);
        }
        u0Var.f22991h.l();
    }

    /* JADX WARN: Type inference failed for: r0v3, types: [ef.a$f, ug.e] */
    public final void Z0(t0 t0Var) {
        ug.e eVar = this.f22991h;
        if (eVar != null) {
            eVar.l();
        }
        this.f22990g.k(Integer.valueOf(System.identityHashCode(this)));
        a.AbstractC0294a abstractC0294a = this.f22988e;
        Context context = this.f22986c;
        Handler handler = this.f22987d;
        gf.d dVar = this.f22990g;
        this.f22991h = abstractC0294a.a(context, handler.getLooper(), dVar, dVar.h(), this, this);
        this.f22992i = t0Var;
        Set set = this.f22989f;
        if (set != null && !set.isEmpty()) {
            this.f22991h.i();
        } else {
            this.f22987d.post(new r0(this));
        }
    }

    public final void a1() {
        ug.e eVar = this.f22991h;
        if (eVar != null) {
            eVar.l();
        }
    }

    @Override // ff.d
    public final void e(Bundle bundle) {
        this.f22991h.h(this);
    }

    @Override // ff.d
    public final void f(int i10) {
        this.f22992i.d(i10);
    }

    @Override // ff.k
    public final void h(com.google.android.gms.common.b bVar) {
        this.f22992i.c(bVar);
    }

    @Override // vg.f
    public final void q0(vg.l lVar) {
        this.f22987d.post(new s0(this, lVar));
    }
}
