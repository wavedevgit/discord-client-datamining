package com.withpersona.sdk2.inquiry.internal;

import com.withpersona.sdk2.inquiry.internal.x;
import so.l2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y {

    /* renamed from: a  reason: collision with root package name */
    private final zq.h f19414a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f19415b;

    /* renamed from: c  reason: collision with root package name */
    private final zq.h f19416c;

    public y(zq.h hVar, zq.h hVar2, zq.h hVar3) {
        this.f19414a = hVar;
        this.f19415b = hVar2;
        this.f19416c = hVar3;
    }

    public static y a(zq.h hVar, zq.h hVar2, zq.h hVar3) {
        return new y(hVar, hVar2, hVar3);
    }

    public static x c(String str, String str2, wp.g gVar, x.c cVar, yo.r rVar, go.a aVar, l2 l2Var) {
        return new x(str, str2, gVar, cVar, rVar, aVar, l2Var);
    }

    public x b(String str, String str2, wp.g gVar, x.c cVar) {
        return c(str, str2, gVar, cVar, (yo.r) this.f19414a.get(), (go.a) this.f19415b.get(), (l2) this.f19416c.get());
    }
}
