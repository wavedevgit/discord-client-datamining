package yo;

import com.withpersona.sdk2.inquiry.internal.fallbackmode.FallbackModeService;
import ov.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f54887a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f54888b;

    public f(com.withpersona.sdk2.inquiry.internal.network.f fVar, zq.h hVar) {
        this.f54887a = fVar;
        this.f54888b = hVar;
    }

    public static f a(com.withpersona.sdk2.inquiry.internal.network.f fVar, zq.h hVar) {
        return new f(fVar, hVar);
    }

    public static FallbackModeService b(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (FallbackModeService) zq.g.d(fVar.b(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public FallbackModeService get() {
        return b(this.f54887a, (a0) this.f54888b.get());
    }
}
