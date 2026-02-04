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
    private static final a.AbstractC0279a f23960j = tg.d.f50033c;

    /* renamed from: c  reason: collision with root package name */
    private final Context f23961c;

    /* renamed from: d  reason: collision with root package name */
    private final Handler f23962d;

    /* renamed from: e  reason: collision with root package name */
    private final a.AbstractC0279a f23963e;

    /* renamed from: f  reason: collision with root package name */
    private final Set f23964f;

    /* renamed from: g  reason: collision with root package name */
    private final gf.d f23965g;

    /* renamed from: h  reason: collision with root package name */
    private tg.e f23966h;

    /* renamed from: i  reason: collision with root package name */
    private t0 f23967i;

    public u0(Context context, Handler handler, gf.d dVar) {
        a.AbstractC0279a abstractC0279a = f23960j;
        this.f23961c = context;
        this.f23962d = handler;
        this.f23965g = (gf.d) gf.q.m(dVar, "ClientSettings must not be null");
        this.f23964f = dVar.g();
        this.f23963e = abstractC0279a;
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
                u0Var.f23967i.c(b11);
                u0Var.f23966h.k();
                return;
            }
            u0Var.f23967i.b(p0Var.c(), u0Var.f23964f);
        } else {
            u0Var.f23967i.c(b10);
        }
        u0Var.f23966h.k();
    }

    /* JADX WARN: Type inference failed for: r0v3, types: [ef.a$f, tg.e] */
    public final void V0(t0 t0Var) {
        tg.e eVar = this.f23966h;
        if (eVar != null) {
            eVar.k();
        }
        this.f23965g.k(Integer.valueOf(System.identityHashCode(this)));
        a.AbstractC0279a abstractC0279a = this.f23963e;
        Context context = this.f23961c;
        Handler handler = this.f23962d;
        gf.d dVar = this.f23965g;
        this.f23966h = abstractC0279a.a(context, handler.getLooper(), dVar, dVar.h(), this, this);
        this.f23967i = t0Var;
        Set set = this.f23964f;
        if (set != null && !set.isEmpty()) {
            this.f23966h.h();
        } else {
            this.f23962d.post(new r0(this));
        }
    }

    public final void W0() {
        tg.e eVar = this.f23966h;
        if (eVar != null) {
            eVar.k();
        }
    }

    @Override // ug.f
    public final void Z(ug.l lVar) {
        this.f23962d.post(new s0(this, lVar));
    }

    @Override // ff.d
    public final void e(Bundle bundle) {
        this.f23966h.m(this);
    }

    @Override // ff.d
    public final void f(int i10) {
        this.f23967i.d(i10);
    }

    @Override // ff.k
    public final void h(com.google.android.gms.common.b bVar) {
        this.f23967i.c(bVar);
    }
}
