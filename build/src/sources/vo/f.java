package vo;

import com.withpersona.sdk2.inquiry.internal.fallbackmode.FallbackModeService;
import lv.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f51725a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f51726b;

    public f(com.withpersona.sdk2.inquiry.internal.network.f fVar, wq.h hVar) {
        this.f51725a = fVar;
        this.f51726b = hVar;
    }

    public static f a(com.withpersona.sdk2.inquiry.internal.network.f fVar, wq.h hVar) {
        return new f(fVar, hVar);
    }

    public static FallbackModeService b(com.withpersona.sdk2.inquiry.internal.network.f fVar, a0 a0Var) {
        return (FallbackModeService) wq.g.d(fVar.b(a0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public FallbackModeService get() {
        return b(this.f51725a, (a0) this.f51726b.get());
    }
}
