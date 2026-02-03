package fp;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o1 implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final uq.h f24839a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f24840b;

    public o1(uq.h hVar, uq.h hVar2) {
        this.f24839a = hVar;
        this.f24840b = hVar2;
    }

    public static o1 a(uq.h hVar, uq.h hVar2) {
        return new o1(hVar, hVar2);
    }

    public static Set c(o0 o0Var, f1 f1Var) {
        return (Set) uq.g.d(n1.a(o0Var, f1Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Set get() {
        return c((o0) this.f24839a.get(), (f1) this.f24840b.get());
    }
}
