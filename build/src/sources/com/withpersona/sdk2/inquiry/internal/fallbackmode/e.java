package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.internal.fallbackmode.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final wq.h f18495a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f18496b;

    /* renamed from: c  reason: collision with root package name */
    private final wq.h f18497c;

    public e(wq.h hVar, wq.h hVar2, wq.h hVar3) {
        this.f18495a = hVar;
        this.f18496b = hVar2;
        this.f18497c = hVar3;
    }

    public static e a(wq.h hVar, wq.h hVar2, wq.h hVar3) {
        return new e(hVar, hVar2, hVar3);
    }

    public static d c(FallbackModeService fallbackModeService, w wVar, i.a aVar) {
        return new d(fallbackModeService, wVar, aVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public d get() {
        return c((FallbackModeService) this.f18495a.get(), (w) this.f18496b.get(), (i.a) this.f18497c.get());
    }
}
