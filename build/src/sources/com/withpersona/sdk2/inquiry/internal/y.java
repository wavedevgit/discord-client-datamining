package com.withpersona.sdk2.inquiry.internal;

import com.withpersona.sdk2.inquiry.internal.x;
import vo.l2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y {

    /* renamed from: a  reason: collision with root package name */
    private final cr.h f19534a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f19535b;

    /* renamed from: c  reason: collision with root package name */
    private final cr.h f19536c;

    public y(cr.h hVar, cr.h hVar2, cr.h hVar3) {
        this.f19534a = hVar;
        this.f19535b = hVar2;
        this.f19536c = hVar3;
    }

    public static y a(cr.h hVar, cr.h hVar2, cr.h hVar3) {
        return new y(hVar, hVar2, hVar3);
    }

    public static x c(String str, String str2, zp.g gVar, x.c cVar, bp.r rVar, jo.a aVar, l2 l2Var) {
        return new x(str, str2, gVar, cVar, rVar, aVar, l2Var);
    }

    public x b(String str, String str2, zp.g gVar, x.c cVar) {
        return c(str, str2, gVar, cVar, (bp.r) this.f19534a.get(), (jo.a) this.f19535b.get(), (l2) this.f19536c.get());
    }
}
