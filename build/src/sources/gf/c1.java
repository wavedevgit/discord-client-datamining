package gf;

import android.os.Bundle;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c1 extends r0 {

    /* renamed from: g  reason: collision with root package name */
    final /* synthetic */ c f25075g;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c1(c cVar, int i10, Bundle bundle) {
        super(cVar, i10, bundle);
        Objects.requireNonNull(cVar);
        this.f25075g = cVar;
    }

    @Override // gf.r0
    protected final boolean e() {
        this.f25075g.A.a(com.google.android.gms.common.b.f13747q);
        return true;
    }

    @Override // gf.r0
    protected final void f(com.google.android.gms.common.b bVar) {
        c cVar = this.f25075g;
        if (cVar.s() && cVar.X()) {
            cVar.W(16);
            return;
        }
        cVar.A.a(bVar);
        cVar.K(bVar);
    }
}
