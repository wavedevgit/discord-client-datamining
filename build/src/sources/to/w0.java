package to;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w0 implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final lr.h f49703a;

    public w0(lr.h hVar) {
        this.f49703a = hVar;
    }

    public static w0 a(lr.h hVar) {
        return new w0(hVar);
    }

    public static Set c(i0 i0Var) {
        return (Set) lr.g.d(u0.b(i0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Set get() {
        return c((i0) this.f49703a.get());
    }
}
