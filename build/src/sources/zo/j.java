package zo;

import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.FallbackMode;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final cr.h f56603a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f56604b;

    /* renamed from: c  reason: collision with root package name */
    private final cr.h f56605c;

    /* renamed from: d  reason: collision with root package name */
    private final cr.h f56606d;

    public j(cr.h hVar, cr.h hVar2, cr.h hVar3, cr.h hVar4) {
        this.f56603a = hVar;
        this.f56604b = hVar2;
        this.f56605c = hVar3;
        this.f56606d = hVar4;
    }

    public static j a(cr.h hVar, cr.h hVar2, cr.h hVar3, cr.h hVar4) {
        return new j(hVar, hVar2, hVar3, hVar4);
    }

    public static i c(FallbackMode fallbackMode, a aVar, vo.f fVar, w wVar) {
        return new i(fallbackMode, aVar, fVar, wVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public i get() {
        return c((FallbackMode) this.f56603a.get(), (a) this.f56604b.get(), (vo.f) this.f56605c.get(), (w) this.f56606d.get());
    }
}
