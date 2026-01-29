package zo;

import zo.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements m.a {

    /* renamed from: a  reason: collision with root package name */
    private final n f55993a;

    o(n nVar) {
        this.f55993a = nVar;
    }

    public static tq.h a(n nVar) {
        return tq.e.a(new o(nVar));
    }

    @Override // zo.m.a
    public m create() {
        return this.f55993a.b();
    }
}
