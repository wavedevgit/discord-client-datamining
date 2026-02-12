package fk;

import android.content.Context;
import qg.be;
import qg.qd;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f extends wj.e {

    /* renamed from: b  reason: collision with root package name */
    private final wj.i f23772b;

    public f(wj.i iVar) {
        this.f23772b = iVar;
    }

    @Override // wj.e
    protected final /* bridge */ /* synthetic */ Object a(Object obj) {
        c bVar;
        ek.e eVar = (ek.e) obj;
        Context b10 = this.f23772b.b();
        qd b11 = be.b(k.b());
        if (!b.a(b10) && com.google.android.gms.common.g.f().a(b10) < 204500000) {
            bVar = new n(b10, eVar, b11);
        } else {
            bVar = new b(b10, eVar, b11);
        }
        return new i(be.b(k.b()), eVar, bVar);
    }
}
