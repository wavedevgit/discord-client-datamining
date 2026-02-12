package ip;

import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.FallbackMode;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final lr.h f30384a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f30385b;

    /* renamed from: c  reason: collision with root package name */
    private final lr.h f30386c;

    /* renamed from: d  reason: collision with root package name */
    private final lr.h f30387d;

    public j(lr.h hVar, lr.h hVar2, lr.h hVar3, lr.h hVar4) {
        this.f30384a = hVar;
        this.f30385b = hVar2;
        this.f30386c = hVar3;
        this.f30387d = hVar4;
    }

    public static j a(lr.h hVar, lr.h hVar2, lr.h hVar3, lr.h hVar4) {
        return new j(hVar, hVar2, hVar3, hVar4);
    }

    public static i c(FallbackMode fallbackMode, a aVar, ep.f fVar, w wVar) {
        return new i(fallbackMode, aVar, fVar, wVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public i get() {
        return c((FallbackMode) this.f30384a.get(), (a) this.f30385b.get(), (ep.f) this.f30386c.get(), (w) this.f30387d.get());
    }
}
