package qo;

import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.FallbackMode;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final tq.h f47575a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f47576b;

    /* renamed from: c  reason: collision with root package name */
    private final tq.h f47577c;

    /* renamed from: d  reason: collision with root package name */
    private final tq.h f47578d;

    public j(tq.h hVar, tq.h hVar2, tq.h hVar3, tq.h hVar4) {
        this.f47575a = hVar;
        this.f47576b = hVar2;
        this.f47577c = hVar3;
        this.f47578d = hVar4;
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
        return c((FallbackMode) this.f47575a.get(), (a) this.f47576b.get(), (mo.f) this.f47577c.get(), (w) this.f47578d.get());
    }
}
