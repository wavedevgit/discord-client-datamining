package so;

import java.util.Set;
import vm.e0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final tq.h f49130a;

    public p(tq.h hVar) {
        this.f49130a = hVar;
    }

    public static p a(tq.h hVar) {
        return new p(hVar);
    }

    public static e0 c(Set set) {
        return (e0) tq.g.d(com.withpersona.sdk2.inquiry.internal.network.f.l(set));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public e0 get() {
        return c((Set) this.f49130a.get());
    }
}
