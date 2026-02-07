package jo;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w0 implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final br.h f30760a;

    public w0(br.h hVar) {
        this.f30760a = hVar;
    }

    public static w0 a(br.h hVar) {
        return new w0(hVar);
    }

    public static Set c(i0 i0Var) {
        return (Set) br.g.d(u0.b(i0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Set get() {
        return c((i0) this.f30760a.get());
    }
}
