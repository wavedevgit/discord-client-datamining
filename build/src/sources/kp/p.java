package kp;

import gn.e0;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final lr.h f35159a;

    public p(lr.h hVar) {
        this.f35159a = hVar;
    }

    public static p a(lr.h hVar) {
        return new p(hVar);
    }

    public static e0 c(Set set) {
        return (e0) lr.g.d(com.withpersona.sdk2.inquiry.internal.network.f.l(set));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public e0 get() {
        return c((Set) this.f35159a.get());
    }
}
