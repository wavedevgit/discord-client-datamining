package gf;

import android.os.Handler;
import android.util.Log;
import ff.a;
import hf.c;
import java.util.Map;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i0 implements c.InterfaceC0382c, t0 {

    /* renamed from: a  reason: collision with root package name */
    private final a.f f24328a;

    /* renamed from: b  reason: collision with root package name */
    private final b f24329b;

    /* renamed from: c  reason: collision with root package name */
    private hf.j f24330c = null;

    /* renamed from: d  reason: collision with root package name */
    private Set f24331d = null;

    /* renamed from: e  reason: collision with root package name */
    private boolean f24332e = false;

    /* renamed from: f  reason: collision with root package name */
    final /* synthetic */ e f24333f;

    public i0(e eVar, a.f fVar, b bVar) {
        this.f24333f = eVar;
        this.f24328a = fVar;
        this.f24329b = bVar;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void i() {
        hf.j jVar;
        if (this.f24332e && (jVar = this.f24330c) != null) {
            this.f24328a.m(jVar, this.f24331d);
        }
    }

    @Override // hf.c.InterfaceC0382c
    public final void a(com.google.android.gms.common.b bVar) {
        Handler handler;
        handler = this.f24333f.f24296y;
        handler.post(new h0(this, bVar));
    }

    @Override // gf.t0
    public final void b(hf.j jVar, Set set) {
        if (jVar != null && set != null) {
            this.f24330c = jVar;
            this.f24331d = set;
            i();
            return;
        }
        Log.wtf("GoogleApiManager", "Received null response from onSignInSuccess", new Exception());
        c(new com.google.android.gms.common.b(4));
    }

    @Override // gf.t0
    public final void c(com.google.android.gms.common.b bVar) {
        Map map;
        map = this.f24333f.f24292u;
        e0 e0Var = (e0) map.get(this.f24329b);
        if (e0Var != null) {
            e0Var.I(bVar);
        }
    }

    @Override // gf.t0
    public final void d(int i10) {
        Map map;
        boolean z10;
        map = this.f24333f.f24292u;
        e0 e0Var = (e0) map.get(this.f24329b);
        if (e0Var != null) {
            z10 = e0Var.f24306k;
            if (z10) {
                e0Var.I(new com.google.android.gms.common.b(17));
            } else {
                e0Var.f(i10);
            }
        }
    }
}
