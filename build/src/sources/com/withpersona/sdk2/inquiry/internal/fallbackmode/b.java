package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import com.withpersona.sdk2.inquiry.internal.fallbackmode.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final a f18972a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f18973b;

    /* renamed from: c  reason: collision with root package name */
    private final cr.h f18974c;

    public b(a aVar, cr.h hVar, cr.h hVar2) {
        this.f18972a = aVar;
        this.f18973b = hVar;
        this.f18974c = hVar2;
    }

    public static zo.a a(a aVar, d dVar, f.a aVar2) {
        return (zo.a) cr.g.d(aVar.a(dVar, aVar2));
    }

    public static b b(a aVar, cr.h hVar, cr.h hVar2) {
        return new b(aVar, hVar, hVar2);
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public zo.a get() {
        return a(this.f18972a, (d) this.f18973b.get(), (f.a) this.f18974c.get());
    }
}
