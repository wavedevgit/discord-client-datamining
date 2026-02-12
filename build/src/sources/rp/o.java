package rp;

import rp.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements m.a {

    /* renamed from: a  reason: collision with root package name */
    private final n f47675a;

    o(n nVar) {
        this.f47675a = nVar;
    }

    public static lr.h a(n nVar) {
        return lr.e.a(new o(nVar));
    }

    @Override // rp.m.a
    public m create() {
        return this.f47675a.b();
    }
}
