package com.withpersona.sdk2.inquiry.internal;

import com.withpersona.sdk2.inquiry.internal.x;
import mo.l2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y {

    /* renamed from: a  reason: collision with root package name */
    private final tq.h f20393a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f20394b;

    /* renamed from: c  reason: collision with root package name */
    private final tq.h f20395c;

    public y(tq.h hVar, tq.h hVar2, tq.h hVar3) {
        this.f20393a = hVar;
        this.f20394b = hVar2;
        this.f20395c = hVar3;
    }

    public static y a(tq.h hVar, tq.h hVar2, tq.h hVar3) {
        return new y(hVar, hVar2, hVar3);
    }

    public static x c(String str, String str2, qp.g gVar, x.c cVar, so.r rVar, zn.a aVar, l2 l2Var) {
        return new x(str, str2, gVar, cVar, rVar, aVar, l2Var);
    }

    public x b(String str, String str2, qp.g gVar, x.c cVar) {
        return c(str, str2, gVar, cVar, (so.r) this.f20393a.get(), (zn.a) this.f20394b.get(), (l2) this.f20395c.get());
    }
}
