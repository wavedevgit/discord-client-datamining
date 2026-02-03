package hp;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o1 implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final wq.h f27434a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f27435b;

    public o1(wq.h hVar, wq.h hVar2) {
        this.f27434a = hVar;
        this.f27435b = hVar2;
    }

    public static o1 a(wq.h hVar, wq.h hVar2) {
        return new o1(hVar, hVar2);
    }

    public static Set c(o0 o0Var, f1 f1Var) {
        return (Set) wq.g.d(n1.a(o0Var, f1Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Set get() {
        return c((o0) this.f27434a.get(), (f1) this.f27435b.get());
    }
}
