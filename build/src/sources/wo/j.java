package wo;

import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.FallbackMode;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final zq.h f53215a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f53216b;

    /* renamed from: c  reason: collision with root package name */
    private final zq.h f53217c;

    /* renamed from: d  reason: collision with root package name */
    private final zq.h f53218d;

    public j(zq.h hVar, zq.h hVar2, zq.h hVar3, zq.h hVar4) {
        this.f53215a = hVar;
        this.f53216b = hVar2;
        this.f53217c = hVar3;
        this.f53218d = hVar4;
    }

    public static j a(zq.h hVar, zq.h hVar2, zq.h hVar3, zq.h hVar4) {
        return new j(hVar, hVar2, hVar3, hVar4);
    }

    public static i c(FallbackMode fallbackMode, a aVar, so.f fVar, w wVar) {
        return new i(fallbackMode, aVar, fVar, wVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public i get() {
        return c((FallbackMode) this.f53215a.get(), (a) this.f53216b.get(), (so.f) this.f53217c.get(), (w) this.f53218d.get());
    }
}
