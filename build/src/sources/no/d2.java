package no;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d2 {

    /* renamed from: a  reason: collision with root package name */
    private final uq.h f42139a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f42140b;

    /* renamed from: c  reason: collision with root package name */
    private final uq.h f42141c;

    /* renamed from: d  reason: collision with root package name */
    private final uq.h f42142d;

    /* renamed from: e  reason: collision with root package name */
    private final uq.h f42143e;

    /* renamed from: f  reason: collision with root package name */
    private final uq.h f42144f;

    public d2(uq.h hVar, uq.h hVar2, uq.h hVar3, uq.h hVar4, uq.h hVar5, uq.h hVar6) {
        this.f42139a = hVar;
        this.f42140b = hVar2;
        this.f42141c = hVar3;
        this.f42142d = hVar4;
        this.f42143e = hVar5;
        this.f42144f = hVar6;
    }

    public static d2 a(uq.h hVar, uq.h hVar2, uq.h hVar3, uq.h hVar4, uq.h hVar5, uq.h hVar6) {
        return new d2(hVar, hVar2, hVar3, hVar4, hVar5, hVar6);
    }

    public static com.withpersona.sdk2.inquiry.internal.q c(String str, String str2, b2 b2Var, rp.g gVar, Context context, to.r rVar, vn.a aVar, dp.c cVar, ro.i iVar, eq.a aVar2) {
        return new com.withpersona.sdk2.inquiry.internal.q(str, str2, b2Var, gVar, context, rVar, aVar, cVar, iVar, aVar2);
    }

    public com.withpersona.sdk2.inquiry.internal.q b(String str, String str2, b2 b2Var, rp.g gVar) {
        return c(str, str2, b2Var, gVar, (Context) this.f42139a.get(), (to.r) this.f42140b.get(), (vn.a) this.f42141c.get(), (dp.c) this.f42142d.get(), (ro.i) this.f42143e.get(), (eq.a) this.f42144f.get());
    }
}
