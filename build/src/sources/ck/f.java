package ck;

import android.content.Context;
import pg.be;
import pg.qd;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f extends tj.e {

    /* renamed from: b  reason: collision with root package name */
    private final tj.i f7476b;

    public f(tj.i iVar) {
        this.f7476b = iVar;
    }

    @Override // tj.e
    protected final /* bridge */ /* synthetic */ Object a(Object obj) {
        c bVar;
        bk.e eVar = (bk.e) obj;
        Context b10 = this.f7476b.b();
        qd b11 = be.b(k.b());
        if (!b.a(b10) && com.google.android.gms.common.g.f().a(b10) < 204500000) {
            bVar = new n(b10, eVar, b11);
        } else {
            bVar = new b(b10, eVar, b11);
        }
        return new i(be.b(k.b()), eVar, bVar);
    }
}
