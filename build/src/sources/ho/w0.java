package ho;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w0 implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final zq.h f26716a;

    public w0(zq.h hVar) {
        this.f26716a = hVar;
    }

    public static w0 a(zq.h hVar) {
        return new w0(hVar);
    }

    public static Set c(i0 i0Var) {
        return (Set) zq.g.d(u0.b(i0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Set get() {
        return c((i0) this.f26716a.get());
    }
}
