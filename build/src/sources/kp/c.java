package kp;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final lr.h f35124a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f35125b;

    /* renamed from: c  reason: collision with root package name */
    private final lr.h f35126c;

    /* renamed from: d  reason: collision with root package name */
    private final lr.h f35127d;

    /* renamed from: e  reason: collision with root package name */
    private final lr.h f35128e;

    /* renamed from: f  reason: collision with root package name */
    private final lr.h f35129f;

    public c(lr.h hVar, lr.h hVar2, lr.h hVar3, lr.h hVar4, lr.h hVar5, lr.h hVar6) {
        this.f35124a = hVar;
        this.f35125b = hVar2;
        this.f35126c = hVar3;
        this.f35127d = hVar4;
        this.f35128e = hVar5;
        this.f35129f = hVar6;
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
        return c((Context) this.f35124a.get(), (r) this.f35125b.get(), (ip.i) this.f35126c.get(), (up.c) this.f35127d.get(), (no.a) this.f35128e.get(), (jp.a) this.f35129f.get());
    }
}
