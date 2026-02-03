package bo;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w0 implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final uq.h f7349a;

    public w0(uq.h hVar) {
        this.f7349a = hVar;
    }

    public static w0 a(uq.h hVar) {
        return new w0(hVar);
    }

    public static Set c(i0 i0Var) {
        return (Set) uq.g.d(u0.b(i0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Set get() {
        return c((i0) this.f7349a.get());
    }
}
