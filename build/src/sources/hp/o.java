package hp;

import hp.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements m.a {

    /* renamed from: a  reason: collision with root package name */
    private final n f26428a;

    o(n nVar) {
        this.f26428a = nVar;
    }

    public static br.h a(n nVar) {
        return br.e.a(new o(nVar));
    }

    @Override // hp.m.a
    public m create() {
        return this.f26428a.b();
    }
}
