package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.internal.fallbackmode.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final zq.h f18901a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f18902b;

    /* renamed from: c  reason: collision with root package name */
    private final zq.h f18903c;

    public e(zq.h hVar, zq.h hVar2, zq.h hVar3) {
        this.f18901a = hVar;
        this.f18902b = hVar2;
        this.f18903c = hVar3;
    }

    public static e a(zq.h hVar, zq.h hVar2, zq.h hVar3) {
        return new e(hVar, hVar2, hVar3);
    }

    public static d c(FallbackModeService fallbackModeService, w wVar, i.a aVar) {
        return new d(fallbackModeService, wVar, aVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public d get() {
        return c((FallbackModeService) this.f18901a.get(), (w) this.f18902b.get(), (i.a) this.f18903c.get());
    }
}
