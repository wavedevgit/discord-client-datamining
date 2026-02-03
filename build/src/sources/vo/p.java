package vo;

import java.util.Set;
import ym.e0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final wq.h f51740a;

    public p(wq.h hVar) {
        this.f51740a = hVar;
    }

    public static p a(wq.h hVar) {
        return new p(hVar);
    }

    public static e0 c(Set set) {
        return (e0) wq.g.d(com.withpersona.sdk2.inquiry.internal.network.f.l(set));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public e0 get() {
        return c((Set) this.f51740a.get());
    }
}
