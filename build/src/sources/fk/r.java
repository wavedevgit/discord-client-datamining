package fk;

import android.content.Context;
import rg.ik;
import rg.xj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r extends uj.e {

    /* renamed from: b  reason: collision with root package name */
    private final uj.i f22691b;

    public r(uj.i iVar) {
        this.f22691b = iVar;
    }

    @Override // uj.e
    protected final /* bridge */ /* synthetic */ Object a(Object obj) {
        o fVar;
        ek.d dVar = (ek.d) obj;
        xj b10 = ik.b(dVar.b());
        Context b11 = this.f22691b.b();
        if (com.google.android.gms.common.g.f().a(b11) < 204700000 && !dVar.d()) {
            fVar = new g(b11);
        } else {
            fVar = new f(b11, dVar, b10);
        }
        return new d(b10, fVar, dVar);
    }
}
