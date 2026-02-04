package vo;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final wq.h f51703a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f51704b;

    /* renamed from: c  reason: collision with root package name */
    private final wq.h f51705c;

    /* renamed from: d  reason: collision with root package name */
    private final wq.h f51706d;

    /* renamed from: e  reason: collision with root package name */
    private final wq.h f51707e;

    /* renamed from: f  reason: collision with root package name */
    private final wq.h f51708f;

    public c(wq.h hVar, wq.h hVar2, wq.h hVar3, wq.h hVar4, wq.h hVar5, wq.h hVar6) {
        this.f51703a = hVar;
        this.f51704b = hVar2;
        this.f51705c = hVar3;
        this.f51706d = hVar4;
        this.f51707e = hVar5;
        this.f51708f = hVar6;
    }

    public static c a(wq.h hVar, wq.h hVar2, wq.h hVar3, wq.h hVar4, wq.h hVar5, wq.h hVar6) {
        return new c(hVar, hVar2, hVar3, hVar4, hVar5, hVar6);
    }

    public static com.withpersona.sdk2.inquiry.internal.network.e c(Context context, r rVar, to.i iVar, fp.c cVar, xn.a aVar, uo.a aVar2) {
        return new com.withpersona.sdk2.inquiry.internal.network.e(context, rVar, iVar, cVar, aVar, aVar2);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public com.withpersona.sdk2.inquiry.internal.network.e get() {
        return c((Context) this.f51703a.get(), (r) this.f51704b.get(), (to.i) this.f51705c.get(), (fp.c) this.f51706d.get(), (xn.a) this.f51707e.get(), (uo.a) this.f51708f.get());
    }
}
