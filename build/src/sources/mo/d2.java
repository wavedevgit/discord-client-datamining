package mo;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d2 {

    /* renamed from: a  reason: collision with root package name */
    private final tq.h f39380a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f39381b;

    /* renamed from: c  reason: collision with root package name */
    private final tq.h f39382c;

    /* renamed from: d  reason: collision with root package name */
    private final tq.h f39383d;

    /* renamed from: e  reason: collision with root package name */
    private final tq.h f39384e;

    /* renamed from: f  reason: collision with root package name */
    private final tq.h f39385f;

    public d2(tq.h hVar, tq.h hVar2, tq.h hVar3, tq.h hVar4, tq.h hVar5, tq.h hVar6) {
        this.f39380a = hVar;
        this.f39381b = hVar2;
        this.f39382c = hVar3;
        this.f39383d = hVar4;
        this.f39384e = hVar5;
        this.f39385f = hVar6;
    }

    public static d2 a(tq.h hVar, tq.h hVar2, tq.h hVar3, tq.h hVar4, tq.h hVar5, tq.h hVar6) {
        return new d2(hVar, hVar2, hVar3, hVar4, hVar5, hVar6);
    }

    public static com.withpersona.sdk2.inquiry.internal.q c(String str, String str2, b2 b2Var, qp.g gVar, Context context, so.r rVar, un.a aVar, cp.c cVar, qo.i iVar, dq.a aVar2) {
        return new com.withpersona.sdk2.inquiry.internal.q(str, str2, b2Var, gVar, context, rVar, aVar, cVar, iVar, aVar2);
    }

    public com.withpersona.sdk2.inquiry.internal.q b(String str, String str2, b2 b2Var, qp.g gVar) {
        return c(str, str2, b2Var, gVar, (Context) this.f39380a.get(), (so.r) this.f39381b.get(), (un.a) this.f39382c.get(), (cp.c) this.f39383d.get(), (qo.i) this.f39384e.get(), (dq.a) this.f39385f.get());
    }
}
