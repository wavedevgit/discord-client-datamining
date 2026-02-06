package ap;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final br.h f6232a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f6233b;

    /* renamed from: c  reason: collision with root package name */
    private final br.h f6234c;

    /* renamed from: d  reason: collision with root package name */
    private final br.h f6235d;

    /* renamed from: e  reason: collision with root package name */
    private final br.h f6236e;

    /* renamed from: f  reason: collision with root package name */
    private final br.h f6237f;

    public c(br.h hVar, br.h hVar2, br.h hVar3, br.h hVar4, br.h hVar5, br.h hVar6) {
        this.f6232a = hVar;
        this.f6233b = hVar2;
        this.f6234c = hVar3;
        this.f6235d = hVar4;
        this.f6236e = hVar5;
        this.f6237f = hVar6;
    }

    public static c a(br.h hVar, br.h hVar2, br.h hVar3, br.h hVar4, br.h hVar5, br.h hVar6) {
        return new c(hVar, hVar2, hVar3, hVar4, hVar5, hVar6);
    }

    public static com.withpersona.sdk2.inquiry.internal.network.e c(Context context, r rVar, yo.i iVar, kp.c cVar, co.a aVar, zo.a aVar2) {
        return new com.withpersona.sdk2.inquiry.internal.network.e(context, rVar, iVar, cVar, aVar, aVar2);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public com.withpersona.sdk2.inquiry.internal.network.e get() {
        return c((Context) this.f6232a.get(), (r) this.f6233b.get(), (yo.i) this.f6234c.get(), (kp.c) this.f6235d.get(), (co.a) this.f6236e.get(), (zo.a) this.f6237f.get());
    }
}
