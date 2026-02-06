package mp;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o1 implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final br.h f37583a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f37584b;

    public o1(br.h hVar, br.h hVar2) {
        this.f37583a = hVar;
        this.f37584b = hVar2;
    }

    public static o1 a(br.h hVar, br.h hVar2) {
        return new o1(hVar, hVar2);
    }

    public static Set c(o0 o0Var, f1 f1Var) {
        return (Set) br.g.d(n1.a(o0Var, f1Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Set get() {
        return c((o0) this.f37583a.get(), (f1) this.f37584b.get());
    }
}
