package jo;

import android.content.Context;
import nn.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final uq.h f32092a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f32093b;

    /* renamed from: c  reason: collision with root package name */
    private final uq.h f32094c;

    /* renamed from: d  reason: collision with root package name */
    private final uq.h f32095d;

    /* renamed from: e  reason: collision with root package name */
    private final uq.h f32096e;

    /* renamed from: f  reason: collision with root package name */
    private final uq.h f32097f;

    public g(uq.h hVar, uq.h hVar2, uq.h hVar3, uq.h hVar4, uq.h hVar5, uq.h hVar6) {
        this.f32092a = hVar;
        this.f32093b = hVar2;
        this.f32094c = hVar3;
        this.f32095d = hVar4;
        this.f32096e = hVar5;
        this.f32097f = hVar6;
    }

    public static g a(uq.h hVar, uq.h hVar2, uq.h hVar3, uq.h hVar4, uq.h hVar5, uq.h hVar6) {
        return new g(hVar, hVar2, hVar3, hVar4, hVar5, hVar6);
    }

    public static f c(Context context, String str, String str2, String str3, String str4, com.withpersona.sdk2.inquiry.governmentid.network.a aVar, c cVar, lp.a aVar2, ao.a aVar3, qp.a aVar4, String str5, v vVar, sn.a aVar5) {
        return new f(context, str, str2, str3, str4, aVar, cVar, aVar2, aVar3, aVar4, str5, vVar, aVar5);
    }

    public f b(String str, String str2, String str3, String str4, c cVar, String str5, v vVar) {
        return c((Context) this.f32092a.get(), str, str2, str3, str4, (com.withpersona.sdk2.inquiry.governmentid.network.a) this.f32093b.get(), cVar, (lp.a) this.f32094c.get(), (ao.a) this.f32095d.get(), (qp.a) this.f32096e.get(), str5, vVar, (sn.a) this.f32097f.get());
    }
}
