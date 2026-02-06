package uo;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d2 {

    /* renamed from: a  reason: collision with root package name */
    private final br.h f51893a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f51894b;

    /* renamed from: c  reason: collision with root package name */
    private final br.h f51895c;

    /* renamed from: d  reason: collision with root package name */
    private final br.h f51896d;

    /* renamed from: e  reason: collision with root package name */
    private final br.h f51897e;

    /* renamed from: f  reason: collision with root package name */
    private final br.h f51898f;

    public d2(br.h hVar, br.h hVar2, br.h hVar3, br.h hVar4, br.h hVar5, br.h hVar6) {
        this.f51893a = hVar;
        this.f51894b = hVar2;
        this.f51895c = hVar3;
        this.f51896d = hVar4;
        this.f51897e = hVar5;
        this.f51898f = hVar6;
    }

    public static d2 a(br.h hVar, br.h hVar2, br.h hVar3, br.h hVar4, br.h hVar5, br.h hVar6) {
        return new d2(hVar, hVar2, hVar3, hVar4, hVar5, hVar6);
    }

    public static com.withpersona.sdk2.inquiry.internal.q c(String str, String str2, b2 b2Var, yp.g gVar, Context context, ap.r rVar, co.a aVar, kp.c cVar, yo.i iVar, lq.a aVar2) {
        return new com.withpersona.sdk2.inquiry.internal.q(str, str2, b2Var, gVar, context, rVar, aVar, cVar, iVar, aVar2);
    }

    public com.withpersona.sdk2.inquiry.internal.q b(String str, String str2, b2 b2Var, yp.g gVar) {
        return c(str, str2, b2Var, gVar, (Context) this.f51893a.get(), (ap.r) this.f51894b.get(), (co.a) this.f51895c.get(), (kp.c) this.f51896d.get(), (yo.i) this.f51897e.get(), (lq.a) this.f51898f.get());
    }
}
