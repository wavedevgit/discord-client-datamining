package np;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o1 implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final cr.h f39316a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f39317b;

    public o1(cr.h hVar, cr.h hVar2) {
        this.f39316a = hVar;
        this.f39317b = hVar2;
    }

    public static o1 a(cr.h hVar, cr.h hVar2) {
        return new o1(hVar, hVar2);
    }

    public static Set c(o0 o0Var, f1 f1Var) {
        return (Set) cr.g.d(n1.a(o0Var, f1Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Set get() {
        return c((o0) this.f39316a.get(), (f1) this.f39317b.get());
    }
}
