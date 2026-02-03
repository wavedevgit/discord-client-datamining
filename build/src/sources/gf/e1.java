package gf;

import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e1 extends r0 {

    /* renamed from: g  reason: collision with root package name */
    final /* synthetic */ c f26890g;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public e1(c cVar, int i10, Bundle bundle) {
        super(cVar, i10, bundle);
        this.f26890g = cVar;
    }

    @Override // gf.r0
    protected final void f(com.google.android.gms.common.b bVar) {
        if (this.f26890g.s() && c.f0(this.f26890g)) {
            c.b0(this.f26890g, 16);
            return;
        }
        this.f26890g.A.a(bVar);
        this.f26890g.K(bVar);
    }

    @Override // gf.r0
    protected final boolean g() {
        this.f26890g.A.a(com.google.android.gms.common.b.f14431p);
        return true;
    }
}
