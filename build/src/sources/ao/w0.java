package ao;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w0 implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final tq.h f6526a;

    public w0(tq.h hVar) {
        this.f6526a = hVar;
    }

    public static w0 a(tq.h hVar) {
        return new w0(hVar);
    }

    public static Set c(i0 i0Var) {
        return (Set) tq.g.d(u0.b(i0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Set get() {
        return c((i0) this.f6526a.get());
    }
}
