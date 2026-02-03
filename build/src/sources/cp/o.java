package cp;

import cp.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements m.a {

    /* renamed from: a  reason: collision with root package name */
    private final n f19744a;

    o(n nVar) {
        this.f19744a = nVar;
    }

    public static wq.h a(n nVar) {
        return wq.e.a(new o(nVar));
    }

    @Override // cp.m.a
    public m create() {
        return this.f19744a.b();
    }
}
