package ff;

import android.content.Context;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import ef.a;
import ef.e;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class u0 extends ug.d implements e.a, e.b {

    /* renamed from: j  reason: collision with root package name */
    private static final a.AbstractC0301a f24368j = tg.d.f49825c;

    /* renamed from: c  reason: collision with root package name */
    private final Context f24369c;

    /* renamed from: d  reason: collision with root package name */
    private final Handler f24370d;

    /* renamed from: e  reason: collision with root package name */
    private final a.AbstractC0301a f24371e;

    /* renamed from: f  reason: collision with root package name */
    private final Set f24372f;

    /* renamed from: g  reason: collision with root package name */
    private final gf.d f24373g;

    /* renamed from: h  reason: collision with root package name */
    private tg.e f24374h;

    /* renamed from: i  reason: collision with root package name */
    private t0 f24375i;

    public u0(Context context, Handler handler, gf.d dVar) {
        a.AbstractC0301a abstractC0301a = f24368j;
        this.f24369c = context;
        this.f24370d = handler;
        this.f24373g = (gf.d) gf.q.m(dVar, "ClientSettings must not be null");
        this.f24372f = dVar.g();
        this.f24371e = abstractC0301a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ void U0(u0 u0Var, ug.l lVar) {
        com.google.android.gms.common.b b10 = lVar.b();
        if (b10.f()) {
            gf.p0 p0Var = (gf.p0) gf.q.l(lVar.c());
            com.google.android.gms.common.b b11 = p0Var.b();
            if (!b11.f()) {
                String valueOf = String.valueOf(b11);
                Log.wtf("SignInCoordinator", "Sign-in succeeded with resolve account failure: ".concat(valueOf), new Exception());
                u0Var.f24375i.c(b11);
                u0Var.f24374h.k();
                return;
            }
            u0Var.f24375i.b(p0Var.c(), u0Var.f24372f);
        } else {
            u0Var.f24375i.c(b10);
        }
        u0Var.f24374h.k();
    }

    /* JADX WARN: Type inference failed for: r0v3, types: [ef.a$f, tg.e] */
    public final void V0(t0 t0Var) {
        tg.e eVar = this.f24374h;
        if (eVar != null) {
            eVar.k();
        }
        this.f24373g.k(Integer.valueOf(System.identityHashCode(this)));
        a.AbstractC0301a abstractC0301a = this.f24371e;
        Context context = this.f24369c;
        Handler handler = this.f24370d;
        gf.d dVar = this.f24373g;
        this.f24374h = abstractC0301a.a(context, handler.getLooper(), dVar, dVar.h(), this, this);
        this.f24375i = t0Var;
        Set set = this.f24372f;
        if (set != null && !set.isEmpty()) {
            this.f24374h.h();
        } else {
            this.f24370d.post(new r0(this));
        }
    }

    public final void W0() {
        tg.e eVar = this.f24374h;
        if (eVar != null) {
            eVar.k();
        }
    }

    @Override // ug.f
    public final void Z(ug.l lVar) {
        this.f24370d.post(new s0(this, lVar));
    }

    @Override // ff.d
    public final void e(Bundle bundle) {
        this.f24374h.m(this);
    }

    @Override // ff.d
    public final void f(int i10) {
        this.f24375i.d(i10);
    }

    @Override // ff.k
    public final void h(com.google.android.gms.common.b bVar) {
        this.f24375i.c(bVar);
    }
}
