package ek;

import android.content.Context;
import qg.ik;
import qg.xj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r extends tj.e {

    /* renamed from: b  reason: collision with root package name */
    private final tj.i f21615b;

    public r(tj.i iVar) {
        this.f21615b = iVar;
    }

    @Override // tj.e
    protected final /* bridge */ /* synthetic */ Object a(Object obj) {
        o fVar;
        dk.d dVar = (dk.d) obj;
        xj b10 = ik.b(dVar.b());
        Context b11 = this.f21615b.b();
        if (com.google.android.gms.common.g.f().a(b11) < 204700000 && !dVar.d()) {
            fVar = new g(b11);
        } else {
            fVar = new f(b11, dVar, b10);
        }
        return new d(b10, fVar, dVar);
    }
}
