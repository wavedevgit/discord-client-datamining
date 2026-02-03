package com.withpersona.sdk2.inquiry.internal;

import com.withpersona.sdk2.inquiry.internal.x;
import po.l2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y {

    /* renamed from: a  reason: collision with root package name */
    private final wq.h f19008a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f19009b;

    /* renamed from: c  reason: collision with root package name */
    private final wq.h f19010c;

    public y(wq.h hVar, wq.h hVar2, wq.h hVar3) {
        this.f19008a = hVar;
        this.f19009b = hVar2;
        this.f19010c = hVar3;
    }

    public static y a(wq.h hVar, wq.h hVar2, wq.h hVar3) {
        return new y(hVar, hVar2, hVar3);
    }

    public static x c(String str, String str2, tp.g gVar, x.c cVar, vo.r rVar, co.a aVar, l2 l2Var) {
        return new x(str, str2, gVar, cVar, rVar, aVar, l2Var);
    }

    public x b(String str, String str2, tp.g gVar, x.c cVar) {
        return c(str, str2, gVar, cVar, (vo.r) this.f19008a.get(), (co.a) this.f19009b.get(), (l2) this.f19010c.get());
    }
}
