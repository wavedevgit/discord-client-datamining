package wp;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o1 implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final lr.h f53266a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f53267b;

    public o1(lr.h hVar, lr.h hVar2) {
        this.f53266a = hVar;
        this.f53267b = hVar2;
    }

    public static o1 a(lr.h hVar, lr.h hVar2) {
        return new o1(hVar, hVar2);
    }

    public static Set c(o0 o0Var, f1 f1Var) {
        return (Set) lr.g.d(n1.a(o0Var, f1Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Set get() {
        return c((o0) this.f53266a.get(), (f1) this.f53267b.get());
    }
}
