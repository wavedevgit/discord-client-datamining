package com.withpersona.sdk2.inquiry.internal;

import com.withpersona.sdk2.inquiry.internal.x;
import ep.l2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y {

    /* renamed from: a  reason: collision with root package name */
    private final lr.h f20414a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f20415b;

    /* renamed from: c  reason: collision with root package name */
    private final lr.h f20416c;

    public y(lr.h hVar, lr.h hVar2, lr.h hVar3) {
        this.f20414a = hVar;
        this.f20415b = hVar2;
        this.f20416c = hVar3;
    }

    public static y a(lr.h hVar, lr.h hVar2, lr.h hVar3) {
        return new y(hVar, hVar2, hVar3);
    }

    public static x c(String str, String str2, iq.g gVar, x.c cVar, kp.r rVar, so.a aVar, l2 l2Var) {
        return new x(str, str2, gVar, cVar, rVar, aVar, l2Var);
    }

    public x b(String str, String str2, iq.g gVar, x.c cVar) {
        return c(str, str2, gVar, cVar, (kp.r) this.f20414a.get(), (so.a) this.f20415b.get(), (l2) this.f20416c.get());
    }
}
