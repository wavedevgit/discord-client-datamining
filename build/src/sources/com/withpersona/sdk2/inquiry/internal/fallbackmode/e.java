package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.internal.fallbackmode.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final cr.h f19021a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f19022b;

    /* renamed from: c  reason: collision with root package name */
    private final cr.h f19023c;

    public e(cr.h hVar, cr.h hVar2, cr.h hVar3) {
        this.f19021a = hVar;
        this.f19022b = hVar2;
        this.f19023c = hVar3;
    }

    public static e a(cr.h hVar, cr.h hVar2, cr.h hVar3) {
        return new e(hVar, hVar2, hVar3);
    }

    public static d c(FallbackModeService fallbackModeService, w wVar, i.a aVar) {
        return new d(fallbackModeService, wVar, aVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public d get() {
        return c((FallbackModeService) this.f19021a.get(), (w) this.f19022b.get(), (i.a) this.f19023c.get());
    }
}
