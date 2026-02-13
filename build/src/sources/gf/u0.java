package gf;

import android.content.Context;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import ff.a;
import ff.e;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class u0 extends xg.d implements e.a, e.b {

    /* renamed from: j  reason: collision with root package name */
    private static final a.AbstractC0316a f25672j = wg.d.f53334c;

    /* renamed from: c  reason: collision with root package name */
    private final Context f25673c;

    /* renamed from: d  reason: collision with root package name */
    private final Handler f25674d;

    /* renamed from: e  reason: collision with root package name */
    private final a.AbstractC0316a f25675e;

    /* renamed from: f  reason: collision with root package name */
    private final Set f25676f;

    /* renamed from: g  reason: collision with root package name */
    private final hf.d f25677g;

    /* renamed from: h  reason: collision with root package name */
    private wg.e f25678h;

    /* renamed from: i  reason: collision with root package name */
    private t0 f25679i;

    public u0(Context context, Handler handler, hf.d dVar) {
        a.AbstractC0316a abstractC0316a = f25672j;
        this.f25673c = context;
        this.f25674d = handler;
        this.f25677g = (hf.d) hf.q.m(dVar, "ClientSettings must not be null");
        this.f25676f = dVar.g();
        this.f25675e = abstractC0316a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ void Y0(u0 u0Var, xg.l lVar) {
        com.google.android.gms.common.b b10 = lVar.b();
        if (b10.g()) {
            hf.p0 p0Var = (hf.p0) hf.q.l(lVar.c());
            com.google.android.gms.common.b b11 = p0Var.b();
            if (!b11.g()) {
                String valueOf = String.valueOf(b11);
                Log.wtf("SignInCoordinator", "Sign-in succeeded with resolve account failure: ".concat(valueOf), new Exception());
                u0Var.f25679i.c(b11);
                u0Var.f25678h.l();
                return;
            }
            u0Var.f25679i.b(p0Var.c(), u0Var.f25676f);
        } else {
            u0Var.f25679i.c(b10);
        }
        u0Var.f25678h.l();
    }

    @Override // xg.f
    public final void P(xg.l lVar) {
        this.f25674d.post(new s0(this, lVar));
    }

    /* JADX WARN: Type inference failed for: r0v3, types: [wg.e, ff.a$f] */
    public final void Z0(t0 t0Var) {
        wg.e eVar = this.f25678h;
        if (eVar != null) {
            eVar.l();
        }
        this.f25677g.k(Integer.valueOf(System.identityHashCode(this)));
        a.AbstractC0316a abstractC0316a = this.f25675e;
        Context context = this.f25673c;
        Handler handler = this.f25674d;
        hf.d dVar = this.f25677g;
        this.f25678h = abstractC0316a.a(context, handler.getLooper(), dVar, dVar.h(), this, this);
        this.f25679i = t0Var;
        Set set = this.f25676f;
        if (set != null && !set.isEmpty()) {
            this.f25678h.i();
        } else {
            this.f25674d.post(new r0(this));
        }
    }

    public final void a1() {
        wg.e eVar = this.f25678h;
        if (eVar != null) {
            eVar.l();
        }
    }

    @Override // gf.d
    public final void e(Bundle bundle) {
        this.f25678h.k(this);
    }

    @Override // gf.d
    public final void f(int i10) {
        this.f25679i.d(i10);
    }

    @Override // gf.k
    public final void i(com.google.android.gms.common.b bVar) {
        this.f25679i.c(bVar);
    }
}
