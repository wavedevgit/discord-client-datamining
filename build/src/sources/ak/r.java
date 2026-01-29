package ak;

import android.content.Context;
import pg.ik;
import pg.xj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r extends pj.e {

    /* renamed from: b  reason: collision with root package name */
    private final pj.i f682b;

    public r(pj.i iVar) {
        this.f682b = iVar;
    }

    @Override // pj.e
    protected final /* bridge */ /* synthetic */ Object a(Object obj) {
        o fVar;
        zj.d dVar = (zj.d) obj;
        xj b10 = ik.b(dVar.b());
        Context b11 = this.f682b.b();
        if (com.google.android.gms.common.g.f().a(b11) < 204700000 && !dVar.d()) {
            fVar = new g(b11);
        } else {
            fVar = new f(b11, dVar, b10);
        }
        return new d(b10, fVar, dVar);
    }
}
