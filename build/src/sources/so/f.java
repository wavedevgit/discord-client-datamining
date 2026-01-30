package so;

import com.withpersona.sdk2.inquiry.internal.fallbackmode.FallbackModeService;
import iv.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f49131a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f49132b;

    public f(com.withpersona.sdk2.inquiry.internal.network.f fVar, tq.h hVar) {
        this.f49131a = fVar;
        this.f49132b = hVar;
    }

    public static f a(com.withpersona.sdk2.inquiry.internal.network.f fVar, tq.h hVar) {
        return new f(fVar, hVar);
    }

    public static FallbackModeService b(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (FallbackModeService) tq.g.d(fVar.b(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public FallbackModeService get() {
        return b(this.f49131a, (a0) this.f49132b.get());
    }
}
