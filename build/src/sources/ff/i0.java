package ff;

import android.os.Handler;
import android.util.Log;
import ef.a;
import gf.c;
import java.util.Map;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i0 implements c.InterfaceC0337c, t0 {

    /* renamed from: a  reason: collision with root package name */
    private final a.f f23243a;

    /* renamed from: b  reason: collision with root package name */
    private final b f23244b;

    /* renamed from: c  reason: collision with root package name */
    private gf.j f23245c = null;

    /* renamed from: d  reason: collision with root package name */
    private Set f23246d = null;

    /* renamed from: e  reason: collision with root package name */
    private boolean f23247e = false;

    /* renamed from: f  reason: collision with root package name */
    final /* synthetic */ e f23248f;

    public i0(e eVar, a.f fVar, b bVar) {
        this.f23248f = eVar;
        this.f23243a = fVar;
        this.f23244b = bVar;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void i() {
        gf.j jVar;
        if (this.f23247e && (jVar = this.f23245c) != null) {
            this.f23243a.k(jVar, this.f23246d);
        }
    }

    @Override // gf.c.InterfaceC0337c
    public final void a(com.google.android.gms.common.b bVar) {
        Handler handler;
        handler = this.f23248f.f23211y;
        handler.post(new h0(this, bVar));
    }

    @Override // ff.t0
    public final void b(gf.j jVar, Set set) {
        if (jVar != null && set != null) {
            this.f23245c = jVar;
            this.f23246d = set;
            i();
            return;
        }
        Log.wtf("GoogleApiManager", "Received null response from onSignInSuccess", new Exception());
        c(new com.google.android.gms.common.b(4));
    }

    @Override // ff.t0
    public final void c(com.google.android.gms.common.b bVar) {
        Map map;
        map = this.f23248f.f23207u;
        e0 e0Var = (e0) map.get(this.f23244b);
        if (e0Var != null) {
            e0Var.I(bVar);
        }
    }

    @Override // ff.t0
    public final void d(int i10) {
        Map map;
        boolean z10;
        map = this.f23248f.f23207u;
        e0 e0Var = (e0) map.get(this.f23244b);
        if (e0Var != null) {
            z10 = e0Var.f23221k;
            if (z10) {
                e0Var.I(new com.google.android.gms.common.b(17));
            } else {
                e0Var.f(i10);
            }
        }
    }
}
