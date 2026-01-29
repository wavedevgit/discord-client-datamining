package uj;

import android.content.Context;
import mg.nk;
import mg.zk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h extends pj.e {

    /* renamed from: b  reason: collision with root package name */
    private final pj.i f50298b;

    public h(pj.i iVar) {
        this.f50298b = iVar;
    }

    @Override // pj.e
    protected final /* bridge */ /* synthetic */ Object a(Object obj) {
        l nVar;
        rj.b bVar = (rj.b) obj;
        Context b10 = this.f50298b.b();
        nk b11 = zk.b(b.d());
        if (!n.b(b10) && com.google.android.gms.common.g.f().a(b10) < 204500000) {
            nVar = new p(b10, bVar, b11);
        } else {
            nVar = new n(b10, bVar, b11);
        }
        return new k(this.f50298b, bVar, nVar, b11);
    }
}
