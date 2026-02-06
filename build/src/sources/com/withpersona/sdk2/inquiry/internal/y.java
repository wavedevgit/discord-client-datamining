package com.withpersona.sdk2.inquiry.internal;

import com.withpersona.sdk2.inquiry.internal.x;
import uo.l2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y {

    /* renamed from: a  reason: collision with root package name */
    private final br.h f19394a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f19395b;

    /* renamed from: c  reason: collision with root package name */
    private final br.h f19396c;

    public y(br.h hVar, br.h hVar2, br.h hVar3) {
        this.f19394a = hVar;
        this.f19395b = hVar2;
        this.f19396c = hVar3;
    }

    public static y a(br.h hVar, br.h hVar2, br.h hVar3) {
        return new y(hVar, hVar2, hVar3);
    }

    public static x c(String str, String str2, yp.g gVar, x.c cVar, ap.r rVar, io.a aVar, l2 l2Var) {
        return new x(str, str2, gVar, cVar, rVar, aVar, l2Var);
    }

    public x b(String str, String str2, yp.g gVar, x.c cVar) {
        return c(str, str2, gVar, cVar, (ap.r) this.f19394a.get(), (io.a) this.f19395b.get(), (l2) this.f19396c.get());
    }
}
