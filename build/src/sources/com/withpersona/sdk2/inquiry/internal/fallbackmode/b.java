package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import com.withpersona.sdk2.inquiry.internal.fallbackmode.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final a f19831a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f19832b;

    /* renamed from: c  reason: collision with root package name */
    private final tq.h f19833c;

    public b(a aVar, tq.h hVar, tq.h hVar2) {
        this.f19831a = aVar;
        this.f19832b = hVar;
        this.f19833c = hVar2;
    }

    public static qo.a a(a aVar, d dVar, f.a aVar2) {
        return (qo.a) tq.g.d(aVar.a(dVar, aVar2));
    }

    public static b b(a aVar, tq.h hVar, tq.h hVar2) {
        return new b(aVar, hVar, hVar2);
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public qo.a get() {
        return a(this.f19831a, (d) this.f19832b.get(), (f.a) this.f19833c.get());
    }
}
