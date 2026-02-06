package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import com.withpersona.sdk2.inquiry.internal.fallbackmode.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final a f18832a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f18833b;

    /* renamed from: c  reason: collision with root package name */
    private final br.h f18834c;

    public b(a aVar, br.h hVar, br.h hVar2) {
        this.f18832a = aVar;
        this.f18833b = hVar;
        this.f18834c = hVar2;
    }

    public static yo.a a(a aVar, d dVar, f.a aVar2) {
        return (yo.a) br.g.d(aVar.a(dVar, aVar2));
    }

    public static b b(a aVar, br.h hVar, br.h hVar2) {
        return new b(aVar, hVar, hVar2);
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public yo.a get() {
        return a(this.f18832a, (d) this.f18833b.get(), (f.a) this.f18834c.get());
    }
}
