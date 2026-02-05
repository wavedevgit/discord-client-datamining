package ff;

import android.os.Handler;
import android.util.Log;
import ef.a;
import gf.c;
import java.util.Map;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i0 implements c.InterfaceC0340c, t0 {

    /* renamed from: a  reason: collision with root package name */
    private final a.f f22942a;

    /* renamed from: b  reason: collision with root package name */
    private final b f22943b;

    /* renamed from: c  reason: collision with root package name */
    private gf.j f22944c = null;

    /* renamed from: d  reason: collision with root package name */
    private Set f22945d = null;

    /* renamed from: e  reason: collision with root package name */
    private boolean f22946e = false;

    /* renamed from: f  reason: collision with root package name */
    final /* synthetic */ e f22947f;

    public i0(e eVar, a.f fVar, b bVar) {
        this.f22947f = eVar;
        this.f22942a = fVar;
        this.f22943b = bVar;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void i() {
        gf.j jVar;
        if (this.f22946e && (jVar = this.f22944c) != null) {
            this.f22942a.k(jVar, this.f22945d);
        }
    }

    @Override // gf.c.InterfaceC0340c
    public final void a(com.google.android.gms.common.b bVar) {
        Handler handler;
        handler = this.f22947f.f22910y;
        handler.post(new h0(this, bVar));
    }

    @Override // ff.t0
    public final void b(gf.j jVar, Set set) {
        if (jVar != null && set != null) {
            this.f22944c = jVar;
            this.f22945d = set;
            i();
            return;
        }
        Log.wtf("GoogleApiManager", "Received null response from onSignInSuccess", new Exception());
        c(new com.google.android.gms.common.b(4));
    }

    @Override // ff.t0
    public final void c(com.google.android.gms.common.b bVar) {
        Map map;
        map = this.f22947f.f22906u;
        e0 e0Var = (e0) map.get(this.f22943b);
        if (e0Var != null) {
            e0Var.I(bVar);
        }
    }

    @Override // ff.t0
    public final void d(int i10) {
        Map map;
        boolean z10;
        map = this.f22947f.f22906u;
        e0 e0Var = (e0) map.get(this.f22943b);
        if (e0Var != null) {
            z10 = e0Var.f22920k;
            if (z10) {
                e0Var.I(new com.google.android.gms.common.b(17));
            } else {
                e0Var.f(i10);
            }
        }
    }
}
