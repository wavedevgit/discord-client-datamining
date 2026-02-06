package yo;

import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.FallbackMode;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final br.h f55530a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f55531b;

    /* renamed from: c  reason: collision with root package name */
    private final br.h f55532c;

    /* renamed from: d  reason: collision with root package name */
    private final br.h f55533d;

    public j(br.h hVar, br.h hVar2, br.h hVar3, br.h hVar4) {
        this.f55530a = hVar;
        this.f55531b = hVar2;
        this.f55532c = hVar3;
        this.f55533d = hVar4;
    }

    public static j a(br.h hVar, br.h hVar2, br.h hVar3, br.h hVar4) {
        return new j(hVar, hVar2, hVar3, hVar4);
    }

    public static i c(FallbackMode fallbackMode, a aVar, uo.f fVar, w wVar) {
        return new i(fallbackMode, aVar, fVar, wVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public i get() {
        return c((FallbackMode) this.f55530a.get(), (a) this.f55531b.get(), (uo.f) this.f55532c.get(), (w) this.f55533d.get());
    }
}
