package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import com.withpersona.sdk2.inquiry.internal.fallbackmode.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final a f19852a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f19853b;

    /* renamed from: c  reason: collision with root package name */
    private final lr.h f19854c;

    public b(a aVar, lr.h hVar, lr.h hVar2) {
        this.f19852a = aVar;
        this.f19853b = hVar;
        this.f19854c = hVar2;
    }

    public static ip.a a(a aVar, d dVar, f.a aVar2) {
        return (ip.a) lr.g.d(aVar.a(dVar, aVar2));
    }

    public static b b(a aVar, lr.h hVar, lr.h hVar2) {
        return new b(aVar, hVar, hVar2);
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public ip.a get() {
        return a(this.f19852a, (d) this.f19853b.get(), (f.a) this.f19854c.get());
    }
}
