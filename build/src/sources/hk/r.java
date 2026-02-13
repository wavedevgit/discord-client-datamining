package hk;

import android.content.Context;
import rg.ik;
import rg.xj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r extends wj.e {

    /* renamed from: b  reason: collision with root package name */
    private final wj.i f27972b;

    public r(wj.i iVar) {
        this.f27972b = iVar;
    }

    @Override // wj.e
    protected final /* bridge */ /* synthetic */ Object a(Object obj) {
        o fVar;
        gk.d dVar = (gk.d) obj;
        xj b10 = ik.b(dVar.b());
        Context b11 = this.f27972b.b();
        if (com.google.android.gms.common.g.f().a(b11) < 204700000 && !dVar.d()) {
            fVar = new g(b11);
        } else {
            fVar = new f(b11, dVar, b10);
        }
        return new d(b10, fVar, dVar);
    }
}
