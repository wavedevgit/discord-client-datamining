package zo;

import zo.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements m.a {

    /* renamed from: a  reason: collision with root package name */
    private final n f56009a;

    o(n nVar) {
        this.f56009a = nVar;
    }

    public static tq.h a(n nVar) {
        return tq.e.a(new o(nVar));
    }

    @Override // zo.m.a
    public m create() {
        return this.f56009a.b();
    }
}
