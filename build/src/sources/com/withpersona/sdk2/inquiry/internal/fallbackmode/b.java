package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import com.withpersona.sdk2.inquiry.internal.fallbackmode.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final a f18446a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f18447b;

    /* renamed from: c  reason: collision with root package name */
    private final wq.h f18448c;

    public b(a aVar, wq.h hVar, wq.h hVar2) {
        this.f18446a = aVar;
        this.f18447b = hVar;
        this.f18448c = hVar2;
    }

    public static to.a a(a aVar, d dVar, f.a aVar2) {
        return (to.a) wq.g.d(aVar.a(dVar, aVar2));
    }

    public static b b(a aVar, wq.h hVar, wq.h hVar2) {
        return new b(aVar, hVar, hVar2);
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public to.a get() {
        return a(this.f18446a, (d) this.f18447b.get(), (f.a) this.f18448c.get());
    }
}
