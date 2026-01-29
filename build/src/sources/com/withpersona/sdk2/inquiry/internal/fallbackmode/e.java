package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.internal.fallbackmode.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final tq.h f19880a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f19881b;

    /* renamed from: c  reason: collision with root package name */
    private final tq.h f19882c;

    public e(tq.h hVar, tq.h hVar2, tq.h hVar3) {
        this.f19880a = hVar;
        this.f19881b = hVar2;
        this.f19882c = hVar3;
    }

    public static e a(tq.h hVar, tq.h hVar2, tq.h hVar3) {
        return new e(hVar, hVar2, hVar3);
    }

    public static d c(FallbackModeService fallbackModeService, w wVar, i.a aVar) {
        return new d(fallbackModeService, wVar, aVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public d get() {
        return c((FallbackModeService) this.f19880a.get(), (w) this.f19881b.get(), (i.a) this.f19882c.get());
    }
}
