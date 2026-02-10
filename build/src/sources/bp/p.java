package bp;

import en.e0;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final cr.h f7201a;

    public p(cr.h hVar) {
        this.f7201a = hVar;
    }

    public static p a(cr.h hVar) {
        return new p(hVar);
    }

    public static e0 c(Set set) {
        return (e0) cr.g.d(com.withpersona.sdk2.inquiry.internal.network.f.l(set));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public e0 get() {
        return c((Set) this.f7201a.get());
    }
}
