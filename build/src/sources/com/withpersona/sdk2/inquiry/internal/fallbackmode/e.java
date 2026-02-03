package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.internal.fallbackmode.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final uq.h f19513a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f19514b;

    /* renamed from: c  reason: collision with root package name */
    private final uq.h f19515c;

    public e(uq.h hVar, uq.h hVar2, uq.h hVar3) {
        this.f19513a = hVar;
        this.f19514b = hVar2;
        this.f19515c = hVar3;
    }

    public static e a(uq.h hVar, uq.h hVar2, uq.h hVar3) {
        return new e(hVar, hVar2, hVar3);
    }

    public static d c(FallbackModeService fallbackModeService, w wVar, i.a aVar) {
        return new d(fallbackModeService, wVar, aVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public d get() {
        return c((FallbackModeService) this.f19513a.get(), (w) this.f19514b.get(), (i.a) this.f19515c.get());
    }
}
