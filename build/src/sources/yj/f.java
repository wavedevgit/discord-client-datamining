package yj;

import android.content.Context;
import og.be;
import og.qd;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f extends pj.e {

    /* renamed from: b  reason: collision with root package name */
    private final pj.i f54798b;

    public f(pj.i iVar) {
        this.f54798b = iVar;
    }

    @Override // pj.e
    protected final /* bridge */ /* synthetic */ Object a(Object obj) {
        c bVar;
        xj.e eVar = (xj.e) obj;
        Context b10 = this.f54798b.b();
        qd b11 = be.b(k.b());
        if (!b.a(b10) && com.google.android.gms.common.g.f().a(b10) < 204500000) {
            bVar = new n(b10, eVar, b11);
        } else {
            bVar = new b(b10, eVar, b11);
        }
        return new i(be.b(k.b()), eVar, bVar);
    }
}
