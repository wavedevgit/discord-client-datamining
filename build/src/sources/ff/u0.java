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
    private static final a.AbstractC0290a f25157j = tg.d.f49537c;

    /* renamed from: c  reason: collision with root package name */
    private final Context f25158c;

    /* renamed from: d  reason: collision with root package name */
    private final Handler f25159d;

    /* renamed from: e  reason: collision with root package name */
    private final a.AbstractC0290a f25160e;

    /* renamed from: f  reason: collision with root package name */
    private final Set f25161f;

    /* renamed from: g  reason: collision with root package name */
    private final gf.d f25162g;

    /* renamed from: h  reason: collision with root package name */
    private tg.e f25163h;

    /* renamed from: i  reason: collision with root package name */
    private t0 f25164i;

    public u0(Context context, Handler handler, gf.d dVar) {
        a.AbstractC0290a abstractC0290a = f25157j;
        this.f25158c = context;
        this.f25159d = handler;
        this.f25162g = (gf.d) gf.q.m(dVar, "ClientSettings must not be null");
        this.f25161f = dVar.g();
        this.f25160e = abstractC0290a;
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
                u0Var.f25164i.c(b11);
                u0Var.f25163h.k();
                return;
            }
            u0Var.f25164i.b(p0Var.c(), u0Var.f25161f);
        } else {
            u0Var.f25164i.c(b10);
        }
        u0Var.f25163h.k();
    }

    /* JADX WARN: Type inference failed for: r0v3, types: [ef.a$f, tg.e] */
    public final void V0(t0 t0Var) {
        tg.e eVar = this.f25163h;
        if (eVar != null) {
            eVar.k();
        }
        this.f25162g.k(Integer.valueOf(System.identityHashCode(this)));
        a.AbstractC0290a abstractC0290a = this.f25160e;
        Context context = this.f25158c;
        Handler handler = this.f25159d;
        gf.d dVar = this.f25162g;
        this.f25163h = abstractC0290a.a(context, handler.getLooper(), dVar, dVar.h(), this, this);
        this.f25164i = t0Var;
        Set set = this.f25161f;
        if (set != null && !set.isEmpty()) {
            this.f25163h.h();
        } else {
            this.f25159d.post(new r0(this));
        }
    }

    public final void W0() {
        tg.e eVar = this.f25163h;
        if (eVar != null) {
            eVar.k();
        }
    }

    @Override // ug.f
    public final void Z(ug.l lVar) {
        this.f25159d.post(new s0(this, lVar));
    }

    @Override // ff.d
    public final void e(Bundle bundle) {
        this.f25163h.m(this);
    }

    @Override // ff.d
    public final void f(int i10) {
        this.f25164i.d(i10);
    }

    @Override // ff.k
    public final void h(com.google.android.gms.common.b bVar) {
        this.f25164i.c(bVar);
    }
}
