package com.withpersona.sdk2.inquiry.internal;

import com.withpersona.sdk2.inquiry.internal.x;
import no.l2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y {

    /* renamed from: a  reason: collision with root package name */
    private final uq.h f20026a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f20027b;

    /* renamed from: c  reason: collision with root package name */
    private final uq.h f20028c;

    public y(uq.h hVar, uq.h hVar2, uq.h hVar3) {
        this.f20026a = hVar;
        this.f20027b = hVar2;
        this.f20028c = hVar3;
    }

    public static y a(uq.h hVar, uq.h hVar2, uq.h hVar3) {
        return new y(hVar, hVar2, hVar3);
    }

    public static x c(String str, String str2, rp.g gVar, x.c cVar, to.r rVar, ao.a aVar, l2 l2Var) {
        return new x(str, str2, gVar, cVar, rVar, aVar, l2Var);
    }

    public x b(String str, String str2, rp.g gVar, x.c cVar) {
        return c(str, str2, gVar, cVar, (to.r) this.f20026a.get(), (ao.a) this.f20027b.get(), (l2) this.f20028c.get());
    }
}
