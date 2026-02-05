package xj;

import android.content.Context;
import mg.nk;
import mg.zk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h extends sj.e {

    /* renamed from: b  reason: collision with root package name */
    private final sj.i f53893b;

    public h(sj.i iVar) {
        this.f53893b = iVar;
    }

    @Override // sj.e
    protected final /* bridge */ /* synthetic */ Object a(Object obj) {
        l nVar;
        uj.b bVar = (uj.b) obj;
        Context b10 = this.f53893b.b();
        nk b11 = zk.b(b.d());
        if (!n.b(b10) && com.google.android.gms.common.g.f().a(b10) < 204500000) {
            nVar = new p(b10, bVar, b11);
        } else {
            nVar = new n(b10, bVar, b11);
        }
        return new k(this.f53893b, bVar, nVar, b11);
    }
}
