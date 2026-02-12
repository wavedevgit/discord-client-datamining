package kp;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final lr.h f35125a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f35126b;

    /* renamed from: c  reason: collision with root package name */
    private final lr.h f35127c;

    /* renamed from: d  reason: collision with root package name */
    private final lr.h f35128d;

    /* renamed from: e  reason: collision with root package name */
    private final lr.h f35129e;

    /* renamed from: f  reason: collision with root package name */
    private final lr.h f35130f;

    public c(lr.h hVar, lr.h hVar2, lr.h hVar3, lr.h hVar4, lr.h hVar5, lr.h hVar6) {
        this.f35125a = hVar;
        this.f35126b = hVar2;
        this.f35127c = hVar3;
        this.f35128d = hVar4;
        this.f35129e = hVar5;
        this.f35130f = hVar6;
    }

    public static c a(lr.h hVar, lr.h hVar2, lr.h hVar3, lr.h hVar4, lr.h hVar5, lr.h hVar6) {
        return new c(hVar, hVar2, hVar3, hVar4, hVar5, hVar6);
    }

    public static com.withpersona.sdk2.inquiry.internal.network.e c(Context context, r rVar, ip.i iVar, up.c cVar, no.a aVar, jp.a aVar2) {
        return new com.withpersona.sdk2.inquiry.internal.network.e(context, rVar, iVar, cVar, aVar, aVar2);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public com.withpersona.sdk2.inquiry.internal.network.e get() {
        return c((Context) this.f35125a.get(), (r) this.f35126b.get(), (ip.i) this.f35127c.get(), (up.c) this.f35128d.get(), (no.a) this.f35129e.get(), (jp.a) this.f35130f.get());
    }
}
