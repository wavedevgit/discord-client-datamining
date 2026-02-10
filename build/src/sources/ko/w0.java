package ko;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w0 implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final cr.h f31711a;

    public w0(cr.h hVar) {
        this.f31711a = hVar;
    }

    public static w0 a(cr.h hVar) {
        return new w0(hVar);
    }

    public static Set c(i0 i0Var) {
        return (Set) cr.g.d(u0.b(i0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Set get() {
        return c((i0) this.f31711a.get());
    }
}
