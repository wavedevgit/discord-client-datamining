package to;

import java.util.Set;
import wm.e0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final uq.h f49984a;

    public p(uq.h hVar) {
        this.f49984a = hVar;
    }

    public static p a(uq.h hVar) {
        return new p(hVar);
    }

    public static e0 c(Set set) {
        return (e0) uq.g.d(com.withpersona.sdk2.inquiry.internal.network.f.l(set));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public e0 get() {
        return c((Set) this.f49984a.get());
    }
}
