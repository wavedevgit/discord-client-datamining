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
    private static final a.AbstractC0331a f24371j = wg.d.f53736c;

    /* renamed from: c  reason: collision with root package name */
    private final Context f24372c;

    /* renamed from: d  reason: collision with root package name */
    private final Handler f24373d;

    /* renamed from: e  reason: collision with root package name */
    private final a.AbstractC0331a f24374e;

    /* renamed from: f  reason: collision with root package name */
    private final Set f24375f;

    /* renamed from: g  reason: collision with root package name */
    private final hf.d f24376g;

    /* renamed from: h  reason: collision with root package name */
    private wg.e f24377h;

    /* renamed from: i  reason: collision with root package name */
    private t0 f24378i;

    public u0(Context context, Handler handler, hf.d dVar) {
        a.AbstractC0331a abstractC0331a = f24371j;
        this.f24372c = context;
        this.f24373d = handler;
        this.f24376g = (hf.d) hf.q.m(dVar, "ClientSettings must not be null");
        this.f24375f = dVar.g();
        this.f24374e = abstractC0331a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ void Y0(u0 u0Var, xg.l lVar) {
        com.google.android.gms.common.b b10 = lVar.b();
        if (b10.h()) {
            hf.p0 p0Var = (hf.p0) hf.q.l(lVar.c());
            com.google.android.gms.common.b b11 = p0Var.b();
            if (!b11.h()) {
                String valueOf = String.valueOf(b11);
                Log.wtf("SignInCoordinator", "Sign-in succeeded with resolve account failure: ".concat(valueOf), new Exception());
                u0Var.f24378i.c(b11);
                u0Var.f24377h.l();
                return;
            }
            u0Var.f24378i.b(p0Var.c(), u0Var.f24375f);
        } else {
            u0Var.f24378i.c(b10);
        }
        u0Var.f24377h.l();
    }

    @Override // xg.f
    public final void Q(xg.l lVar) {
        this.f24373d.post(new s0(this, lVar));
    }

    /* JADX WARN: Type inference failed for: r0v3, types: [wg.e, ff.a$f] */
    public final void Z0(t0 t0Var) {
        wg.e eVar = this.f24377h;
        if (eVar != null) {
            eVar.l();
        }
        this.f24376g.k(Integer.valueOf(System.identityHashCode(this)));
        a.AbstractC0331a abstractC0331a = this.f24374e;
        Context context = this.f24372c;
        Handler handler = this.f24373d;
        hf.d dVar = this.f24376g;
        this.f24377h = abstractC0331a.a(context, handler.getLooper(), dVar, dVar.h(), this, this);
        this.f24378i = t0Var;
        Set set = this.f24375f;
        if (set != null && !set.isEmpty()) {
            this.f24377h.i();
        } else {
            this.f24373d.post(new r0(this));
        }
    }

    public final void a1() {
        wg.e eVar = this.f24377h;
        if (eVar != null) {
            eVar.l();
        }
    }

    @Override // gf.d
    public final void e(Bundle bundle) {
        this.f24377h.k(this);
    }

    @Override // gf.d
    public final void f(int i10) {
        this.f24378i.d(i10);
    }

    @Override // gf.k
    public final void h(com.google.android.gms.common.b bVar) {
        this.f24378i.c(bVar);
    }
}
