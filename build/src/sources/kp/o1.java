package kp;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o1 implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final zq.h f35427a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f35428b;

    public o1(zq.h hVar, zq.h hVar2) {
        this.f35427a = hVar;
        this.f35428b = hVar2;
    }

    public static o1 a(zq.h hVar, zq.h hVar2) {
        return new o1(hVar, hVar2);
    }

    public static Set c(o0 o0Var, f1 f1Var) {
        return (Set) zq.g.d(n1.a(o0Var, f1Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Set get() {
        return c((o0) this.f35427a.get(), (f1) this.f35428b.get());
    }
}
