package gf;

import android.os.Handler;
import android.util.Log;
import ff.a;
import hf.c;
import java.util.Map;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i0 implements c.InterfaceC0361c, t0 {

    /* renamed from: a  reason: collision with root package name */
    private final a.f f25629a;

    /* renamed from: b  reason: collision with root package name */
    private final b f25630b;

    /* renamed from: c  reason: collision with root package name */
    private hf.j f25631c = null;

    /* renamed from: d  reason: collision with root package name */
    private Set f25632d = null;

    /* renamed from: e  reason: collision with root package name */
    private boolean f25633e = false;

    /* renamed from: f  reason: collision with root package name */
    final /* synthetic */ e f25634f;

    public i0(e eVar, a.f fVar, b bVar) {
        this.f25634f = eVar;
        this.f25629a = fVar;
        this.f25630b = bVar;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void i() {
        hf.j jVar;
        if (this.f25633e && (jVar = this.f25631c) != null) {
            this.f25629a.m(jVar, this.f25632d);
        }
    }

    @Override // hf.c.InterfaceC0361c
    public final void a(com.google.android.gms.common.b bVar) {
        Handler handler;
        handler = this.f25634f.f25597y;
        handler.post(new h0(this, bVar));
    }

    @Override // gf.t0
    public final void b(hf.j jVar, Set set) {
        if (jVar != null && set != null) {
            this.f25631c = jVar;
            this.f25632d = set;
            i();
            return;
        }
        Log.wtf("GoogleApiManager", "Received null response from onSignInSuccess", new Exception());
        c(new com.google.android.gms.common.b(4));
    }

    @Override // gf.t0
    public final void c(com.google.android.gms.common.b bVar) {
        Map map;
        map = this.f25634f.f25593u;
        e0 e0Var = (e0) map.get(this.f25630b);
        if (e0Var != null) {
            e0Var.I(bVar);
        }
    }

    @Override // gf.t0
    public final void d(int i10) {
        Map map;
        boolean z10;
        map = this.f25634f.f25593u;
        e0 e0Var = (e0) map.get(this.f25630b);
        if (e0Var != null) {
            z10 = e0Var.f25607k;
            if (z10) {
                e0Var.I(new com.google.android.gms.common.b(17));
            } else {
                e0Var.f(i10);
            }
        }
    }
}
