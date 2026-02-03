package gf;

import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e1 extends r0 {

    /* renamed from: g  reason: collision with root package name */
    final /* synthetic */ c f26103g;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public e1(c cVar, int i10, Bundle bundle) {
        super(cVar, i10, bundle);
        this.f26103g = cVar;
    }

    @Override // gf.r0
    protected final void f(com.google.android.gms.common.b bVar) {
        if (this.f26103g.s() && c.f0(this.f26103g)) {
            c.b0(this.f26103g, 16);
            return;
        }
        this.f26103g.A.a(bVar);
        this.f26103g.K(bVar);
    }

    @Override // gf.r0
    protected final boolean g() {
        this.f26103g.A.a(com.google.android.gms.common.b.f13399p);
        return true;
    }
}
