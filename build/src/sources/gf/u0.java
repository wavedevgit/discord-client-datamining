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
    private static final a.AbstractC0316a f25671j = wg.d.f52765c;

    /* renamed from: c  reason: collision with root package name */
    private final Context f25672c;

    /* renamed from: d  reason: collision with root package name */
    private final Handler f25673d;

    /* renamed from: e  reason: collision with root package name */
    private final a.AbstractC0316a f25674e;

    /* renamed from: f  reason: collision with root package name */
    private final Set f25675f;

    /* renamed from: g  reason: collision with root package name */
    private final hf.d f25676g;

    /* renamed from: h  reason: collision with root package name */
    private wg.e f25677h;

    /* renamed from: i  reason: collision with root package name */
    private t0 f25678i;

    public u0(Context context, Handler handler, hf.d dVar) {
        a.AbstractC0316a abstractC0316a = f25671j;
        this.f25672c = context;
        this.f25673d = handler;
        this.f25676g = (hf.d) hf.q.m(dVar, "ClientSettings must not be null");
        this.f25675f = dVar.g();
        this.f25674e = abstractC0316a;
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
                u0Var.f25678i.c(b11);
                u0Var.f25677h.l();
                return;
            }
            u0Var.f25678i.b(p0Var.c(), u0Var.f25675f);
        } else {
            u0Var.f25678i.c(b10);
        }
        u0Var.f25677h.l();
    }

    @Override // xg.f
    public final void P(xg.l lVar) {
        this.f25673d.post(new s0(this, lVar));
    }

    /* JADX WARN: Type inference failed for: r0v3, types: [wg.e, ff.a$f] */
    public final void Z0(t0 t0Var) {
        wg.e eVar = this.f25677h;
        if (eVar != null) {
            eVar.l();
        }
        this.f25676g.k(Integer.valueOf(System.identityHashCode(this)));
        a.AbstractC0316a abstractC0316a = this.f25674e;
        Context context = this.f25672c;
        Handler handler = this.f25673d;
        hf.d dVar = this.f25676g;
        this.f25677h = abstractC0316a.a(context, handler.getLooper(), dVar, dVar.h(), this, this);
        this.f25678i = t0Var;
        Set set = this.f25675f;
        if (set != null && !set.isEmpty()) {
            this.f25677h.i();
        } else {
            this.f25673d.post(new r0(this));
        }
    }

    public final void a1() {
        wg.e eVar = this.f25677h;
        if (eVar != null) {
            eVar.l();
        }
    }

    @Override // gf.d
    public final void e(Bundle bundle) {
        this.f25677h.k(this);
    }

    @Override // gf.d
    public final void f(int i10) {
        this.f25678i.d(i10);
    }

    @Override // gf.k
    public final void i(com.google.android.gms.common.b bVar) {
        this.f25678i.c(bVar);
    }
}
