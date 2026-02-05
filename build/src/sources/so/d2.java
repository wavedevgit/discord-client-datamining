package so;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d2 {

    /* renamed from: a  reason: collision with root package name */
    private final zq.h f50047a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f50048b;

    /* renamed from: c  reason: collision with root package name */
    private final zq.h f50049c;

    /* renamed from: d  reason: collision with root package name */
    private final zq.h f50050d;

    /* renamed from: e  reason: collision with root package name */
    private final zq.h f50051e;

    /* renamed from: f  reason: collision with root package name */
    private final zq.h f50052f;

    public d2(zq.h hVar, zq.h hVar2, zq.h hVar3, zq.h hVar4, zq.h hVar5, zq.h hVar6) {
        this.f50047a = hVar;
        this.f50048b = hVar2;
        this.f50049c = hVar3;
        this.f50050d = hVar4;
        this.f50051e = hVar5;
        this.f50052f = hVar6;
    }

    public static d2 a(zq.h hVar, zq.h hVar2, zq.h hVar3, zq.h hVar4, zq.h hVar5, zq.h hVar6) {
        return new d2(hVar, hVar2, hVar3, hVar4, hVar5, hVar6);
    }

    public static com.withpersona.sdk2.inquiry.internal.q c(String str, String str2, b2 b2Var, wp.g gVar, Context context, yo.r rVar, ao.a aVar, ip.c cVar, wo.i iVar, jq.a aVar2) {
        return new com.withpersona.sdk2.inquiry.internal.q(str, str2, b2Var, gVar, context, rVar, aVar, cVar, iVar, aVar2);
    }

    public com.withpersona.sdk2.inquiry.internal.q b(String str, String str2, b2 b2Var, wp.g gVar) {
        return c(str, str2, b2Var, gVar, (Context) this.f50047a.get(), (yo.r) this.f50048b.get(), (ao.a) this.f50049c.get(), (ip.c) this.f50050d.get(), (wo.i) this.f50051e.get(), (jq.a) this.f50052f.get());
    }
}
