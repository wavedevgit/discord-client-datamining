package bk;

import android.content.Context;
import og.nk;
import og.zk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h extends wj.e {

    /* renamed from: b  reason: collision with root package name */
    private final wj.i f7224b;

    public h(wj.i iVar) {
        this.f7224b = iVar;
    }

    @Override // wj.e
    protected final /* bridge */ /* synthetic */ Object a(Object obj) {
        l nVar;
        yj.b bVar = (yj.b) obj;
        Context b10 = this.f7224b.b();
        nk b11 = zk.b(b.d());
        if (!n.b(b10) && com.google.android.gms.common.g.f().a(b10) < 204500000) {
            nVar = new p(b10, bVar, b11);
        } else {
            nVar = new n(b10, bVar, b11);
        }
        return new k(this.f7224b, bVar, nVar, b11);
    }
}
