package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import com.withpersona.sdk2.inquiry.internal.fallbackmode.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final a f18852a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f18853b;

    /* renamed from: c  reason: collision with root package name */
    private final zq.h f18854c;

    public b(a aVar, zq.h hVar, zq.h hVar2) {
        this.f18852a = aVar;
        this.f18853b = hVar;
        this.f18854c = hVar2;
    }

    public static wo.a a(a aVar, d dVar, f.a aVar2) {
        return (wo.a) zq.g.d(aVar.a(dVar, aVar2));
    }

    public static b b(a aVar, zq.h hVar, zq.h hVar2) {
        return new b(aVar, hVar, hVar2);
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public wo.a get() {
        return a(this.f18852a, (d) this.f18853b.get(), (f.a) this.f18854c.get());
    }
}
