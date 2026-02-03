package ap;

import ap.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements m.a {

    /* renamed from: a  reason: collision with root package name */
    private final n f5971a;

    o(n nVar) {
        this.f5971a = nVar;
    }

    public static uq.h a(n nVar) {
        return uq.e.a(new o(nVar));
    }

    @Override // ap.m.a
    public m create() {
        return this.f5971a.b();
    }
}
