package to;

import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.FallbackMode;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final wq.h f50194a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f50195b;

    /* renamed from: c  reason: collision with root package name */
    private final wq.h f50196c;

    /* renamed from: d  reason: collision with root package name */
    private final wq.h f50197d;

    public j(wq.h hVar, wq.h hVar2, wq.h hVar3, wq.h hVar4) {
        this.f50194a = hVar;
        this.f50195b = hVar2;
        this.f50196c = hVar3;
        this.f50197d = hVar4;
    }

    public static j a(wq.h hVar, wq.h hVar2, wq.h hVar3, wq.h hVar4) {
        return new j(hVar, hVar2, hVar3, hVar4);
    }

    public static i c(FallbackMode fallbackMode, a aVar, po.f fVar, w wVar) {
        return new i(fallbackMode, aVar, fVar, wVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public i get() {
        return c((FallbackMode) this.f50194a.get(), (a) this.f50195b.get(), (po.f) this.f50196c.get(), (w) this.f50197d.get());
    }
}
