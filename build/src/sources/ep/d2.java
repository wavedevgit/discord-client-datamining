package ep;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d2 {

    /* renamed from: a  reason: collision with root package name */
    private final lr.h f23074a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f23075b;

    /* renamed from: c  reason: collision with root package name */
    private final lr.h f23076c;

    /* renamed from: d  reason: collision with root package name */
    private final lr.h f23077d;

    /* renamed from: e  reason: collision with root package name */
    private final lr.h f23078e;

    /* renamed from: f  reason: collision with root package name */
    private final lr.h f23079f;

    public d2(lr.h hVar, lr.h hVar2, lr.h hVar3, lr.h hVar4, lr.h hVar5, lr.h hVar6) {
        this.f23074a = hVar;
        this.f23075b = hVar2;
        this.f23076c = hVar3;
        this.f23077d = hVar4;
        this.f23078e = hVar5;
        this.f23079f = hVar6;
    }

    public static d2 a(lr.h hVar, lr.h hVar2, lr.h hVar3, lr.h hVar4, lr.h hVar5, lr.h hVar6) {
        return new d2(hVar, hVar2, hVar3, hVar4, hVar5, hVar6);
    }

    public static com.withpersona.sdk2.inquiry.internal.q c(String str, String str2, b2 b2Var, iq.g gVar, Context context, kp.r rVar, no.a aVar, up.c cVar, ip.i iVar, vq.a aVar2) {
        return new com.withpersona.sdk2.inquiry.internal.q(str, str2, b2Var, gVar, context, rVar, aVar, cVar, iVar, aVar2);
    }

    public com.withpersona.sdk2.inquiry.internal.q b(String str, String str2, b2 b2Var, iq.g gVar) {
        return c(str, str2, b2Var, gVar, (Context) this.f23074a.get(), (kp.r) this.f23075b.get(), (no.a) this.f23076c.get(), (up.c) this.f23077d.get(), (ip.i) this.f23078e.get(), (vq.a) this.f23079f.get());
    }
}
