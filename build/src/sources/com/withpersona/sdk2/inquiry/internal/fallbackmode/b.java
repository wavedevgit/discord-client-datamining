package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import com.withpersona.sdk2.inquiry.internal.fallbackmode.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final a f19464a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f19465b;

    /* renamed from: c  reason: collision with root package name */
    private final uq.h f19466c;

    public b(a aVar, uq.h hVar, uq.h hVar2) {
        this.f19464a = aVar;
        this.f19465b = hVar;
        this.f19466c = hVar2;
    }

    public static ro.a a(a aVar, d dVar, f.a aVar2) {
        return (ro.a) uq.g.d(aVar.a(dVar, aVar2));
    }

    public static b b(a aVar, uq.h hVar, uq.h hVar2) {
        return new b(aVar, hVar, hVar2);
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public ro.a get() {
        return a(this.f19464a, (d) this.f19465b.get(), (f.a) this.f19466c.get());
    }
}
