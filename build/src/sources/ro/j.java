package ro;

import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.FallbackMode;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final uq.h f48617a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f48618b;

    /* renamed from: c  reason: collision with root package name */
    private final uq.h f48619c;

    /* renamed from: d  reason: collision with root package name */
    private final uq.h f48620d;

    public j(uq.h hVar, uq.h hVar2, uq.h hVar3, uq.h hVar4) {
        this.f48617a = hVar;
        this.f48618b = hVar2;
        this.f48619c = hVar3;
        this.f48620d = hVar4;
    }

    public static j a(uq.h hVar, uq.h hVar2, uq.h hVar3, uq.h hVar4) {
        return new j(hVar, hVar2, hVar3, hVar4);
    }

    public static i c(FallbackMode fallbackMode, a aVar, no.f fVar, w wVar) {
        return new i(fallbackMode, aVar, fVar, wVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public i get() {
        return c((FallbackMode) this.f48617a.get(), (a) this.f48618b.get(), (no.f) this.f48619c.get(), (w) this.f48620d.get());
    }
}
