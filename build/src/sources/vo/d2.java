package vo;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d2 {

    /* renamed from: a  reason: collision with root package name */
    private final cr.h f52801a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f52802b;

    /* renamed from: c  reason: collision with root package name */
    private final cr.h f52803c;

    /* renamed from: d  reason: collision with root package name */
    private final cr.h f52804d;

    /* renamed from: e  reason: collision with root package name */
    private final cr.h f52805e;

    /* renamed from: f  reason: collision with root package name */
    private final cr.h f52806f;

    public d2(cr.h hVar, cr.h hVar2, cr.h hVar3, cr.h hVar4, cr.h hVar5, cr.h hVar6) {
        this.f52801a = hVar;
        this.f52802b = hVar2;
        this.f52803c = hVar3;
        this.f52804d = hVar4;
        this.f52805e = hVar5;
        this.f52806f = hVar6;
    }

    public static d2 a(cr.h hVar, cr.h hVar2, cr.h hVar3, cr.h hVar4, cr.h hVar5, cr.h hVar6) {
        return new d2(hVar, hVar2, hVar3, hVar4, hVar5, hVar6);
    }

    public static com.withpersona.sdk2.inquiry.internal.q c(String str, String str2, b2 b2Var, zp.g gVar, Context context, bp.r rVar, eo.a aVar, lp.c cVar, zo.i iVar, mq.a aVar2) {
        return new com.withpersona.sdk2.inquiry.internal.q(str, str2, b2Var, gVar, context, rVar, aVar, cVar, iVar, aVar2);
    }

    public com.withpersona.sdk2.inquiry.internal.q b(String str, String str2, b2 b2Var, zp.g gVar) {
        return c(str, str2, b2Var, gVar, (Context) this.f52801a.get(), (bp.r) this.f52802b.get(), (eo.a) this.f52803c.get(), (lp.c) this.f52804d.get(), (zo.i) this.f52805e.get(), (mq.a) this.f52806f.get());
    }
}
