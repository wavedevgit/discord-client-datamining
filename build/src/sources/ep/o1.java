package ep;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o1 implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final tq.h f23308a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f23309b;

    public o1(tq.h hVar, tq.h hVar2) {
        this.f23308a = hVar;
        this.f23309b = hVar2;
    }

    public static o1 a(tq.h hVar, tq.h hVar2) {
        return new o1(hVar, hVar2);
    }

    public static Set c(o0 o0Var, f1 f1Var) {
        return (Set) tq.g.d(n1.a(o0Var, f1Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Set get() {
        return c((o0) this.f23308a.get(), (f1) this.f23309b.get());
    }
}
