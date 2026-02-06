package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.internal.fallbackmode.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final br.h f18881a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f18882b;

    /* renamed from: c  reason: collision with root package name */
    private final br.h f18883c;

    public e(br.h hVar, br.h hVar2, br.h hVar3) {
        this.f18881a = hVar;
        this.f18882b = hVar2;
        this.f18883c = hVar3;
    }

    public static e a(br.h hVar, br.h hVar2, br.h hVar3) {
        return new e(hVar, hVar2, hVar3);
    }

    public static d c(FallbackModeService fallbackModeService, w wVar, i.a aVar) {
        return new d(fallbackModeService, wVar, aVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public d get() {
        return c((FallbackModeService) this.f18881a.get(), (w) this.f18882b.get(), (i.a) this.f18883c.get());
    }
}
