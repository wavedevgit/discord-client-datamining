package ap;

import dn.e0;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final br.h f6266a;

    public p(br.h hVar) {
        this.f6266a = hVar;
    }

    public static p a(br.h hVar) {
        return new p(hVar);
    }

    public static e0 c(Set set) {
        return (e0) br.g.d(com.withpersona.sdk2.inquiry.internal.network.f.l(set));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public e0 get() {
        return c((Set) this.f6266a.get());
    }
}
