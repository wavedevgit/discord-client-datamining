package yo;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final zq.h f54868a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f54869b;

    /* renamed from: c  reason: collision with root package name */
    private final zq.h f54870c;

    /* renamed from: d  reason: collision with root package name */
    private final zq.h f54871d;

    /* renamed from: e  reason: collision with root package name */
    private final zq.h f54872e;

    /* renamed from: f  reason: collision with root package name */
    private final zq.h f54873f;

    public c(zq.h hVar, zq.h hVar2, zq.h hVar3, zq.h hVar4, zq.h hVar5, zq.h hVar6) {
        this.f54868a = hVar;
        this.f54869b = hVar2;
        this.f54870c = hVar3;
        this.f54871d = hVar4;
        this.f54872e = hVar5;
        this.f54873f = hVar6;
    }

    public static c a(zq.h hVar, zq.h hVar2, zq.h hVar3, zq.h hVar4, zq.h hVar5, zq.h hVar6) {
        return new c(hVar, hVar2, hVar3, hVar4, hVar5, hVar6);
    }

    public static com.withpersona.sdk2.inquiry.internal.network.e c(Context context, r rVar, wo.i iVar, ip.c cVar, ao.a aVar, xo.a aVar2) {
        return new com.withpersona.sdk2.inquiry.internal.network.e(context, rVar, iVar, cVar, aVar, aVar2);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public com.withpersona.sdk2.inquiry.internal.network.e get() {
        return c((Context) this.f54868a.get(), (r) this.f54869b.get(), (wo.i) this.f54870c.get(), (ip.c) this.f54871d.get(), (ao.a) this.f54872e.get(), (xo.a) this.f54873f.get());
    }
}
