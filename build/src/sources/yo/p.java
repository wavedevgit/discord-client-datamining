package yo;

import bn.e0;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final zq.h f54902a;

    public p(zq.h hVar) {
        this.f54902a = hVar;
    }

    public static p a(zq.h hVar) {
        return new p(hVar);
    }

    public static e0 c(Set set) {
        return (e0) zq.g.d(com.withpersona.sdk2.inquiry.internal.network.f.l(set));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public e0 get() {
        return c((Set) this.f54902a.get());
    }
}
