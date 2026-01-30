package qo;

import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.FallbackMode;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final tq.h f47591a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f47592b;

    /* renamed from: c  reason: collision with root package name */
    private final tq.h f47593c;

    /* renamed from: d  reason: collision with root package name */
    private final tq.h f47594d;

    public j(tq.h hVar, tq.h hVar2, tq.h hVar3, tq.h hVar4) {
        this.f47591a = hVar;
        this.f47592b = hVar2;
        this.f47593c = hVar3;
        this.f47594d = hVar4;
    }

    public static j a(tq.h hVar, tq.h hVar2, tq.h hVar3, tq.h hVar4) {
        return new j(hVar, hVar2, hVar3, hVar4);
    }

    public static i c(FallbackMode fallbackMode, a aVar, mo.f fVar, w wVar) {
        return new i(fallbackMode, aVar, fVar, wVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public i get() {
        return c((FallbackMode) this.f47591a.get(), (a) this.f47592b.get(), (mo.f) this.f47593c.get(), (w) this.f47594d.get());
    }
}
