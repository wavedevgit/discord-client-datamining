package yj;

import android.content.Context;
import ng.nk;
import ng.zk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h extends tj.e {

    /* renamed from: b  reason: collision with root package name */
    private final tj.i f55397b;

    public h(tj.i iVar) {
        this.f55397b = iVar;
    }

    @Override // tj.e
    protected final /* bridge */ /* synthetic */ Object a(Object obj) {
        l nVar;
        vj.b bVar = (vj.b) obj;
        Context b10 = this.f55397b.b();
        nk b11 = zk.b(b.d());
        if (!n.b(b10) && com.google.android.gms.common.g.f().a(b10) < 204500000) {
            nVar = new p(b10, bVar, b11);
        } else {
            nVar = new n(b10, bVar, b11);
        }
        return new k(this.f55397b, bVar, nVar, b11);
    }
}
