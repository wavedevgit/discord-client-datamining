package dk;

import android.content.Context;
import pg.ik;
import pg.xj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r extends sj.e {

    /* renamed from: b  reason: collision with root package name */
    private final sj.i f20868b;

    public r(sj.i iVar) {
        this.f20868b = iVar;
    }

    @Override // sj.e
    protected final /* bridge */ /* synthetic */ Object a(Object obj) {
        o fVar;
        ck.d dVar = (ck.d) obj;
        xj b10 = ik.b(dVar.b());
        Context b11 = this.f20868b.b();
        if (com.google.android.gms.common.g.f().a(b11) < 204700000 && !dVar.d()) {
            fVar = new g(b11);
        } else {
            fVar = new f(b11, dVar, b10);
        }
        return new d(b10, fVar, dVar);
    }
}
