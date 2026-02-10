package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.internal.fallbackmode.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final lr.h f19901a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f19902b;

    /* renamed from: c  reason: collision with root package name */
    private final lr.h f19903c;

    public e(lr.h hVar, lr.h hVar2, lr.h hVar3) {
        this.f19901a = hVar;
        this.f19902b = hVar2;
        this.f19903c = hVar3;
    }

    public static e a(lr.h hVar, lr.h hVar2, lr.h hVar3) {
        return new e(hVar, hVar2, hVar3);
    }

    public static d c(FallbackModeService fallbackModeService, w wVar, i.a aVar) {
        return new d(fallbackModeService, wVar, aVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public d get() {
        return c((FallbackModeService) this.f19901a.get(), (w) this.f19902b.get(), (i.a) this.f19903c.get());
    }
}
