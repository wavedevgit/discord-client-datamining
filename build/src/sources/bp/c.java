package bp;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final cr.h f7167a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f7168b;

    /* renamed from: c  reason: collision with root package name */
    private final cr.h f7169c;

    /* renamed from: d  reason: collision with root package name */
    private final cr.h f7170d;

    /* renamed from: e  reason: collision with root package name */
    private final cr.h f7171e;

    /* renamed from: f  reason: collision with root package name */
    private final cr.h f7172f;

    public c(cr.h hVar, cr.h hVar2, cr.h hVar3, cr.h hVar4, cr.h hVar5, cr.h hVar6) {
        this.f7167a = hVar;
        this.f7168b = hVar2;
        this.f7169c = hVar3;
        this.f7170d = hVar4;
        this.f7171e = hVar5;
        this.f7172f = hVar6;
    }

    public static c a(cr.h hVar, cr.h hVar2, cr.h hVar3, cr.h hVar4, cr.h hVar5, cr.h hVar6) {
        return new c(hVar, hVar2, hVar3, hVar4, hVar5, hVar6);
    }

    public static com.withpersona.sdk2.inquiry.internal.network.e c(Context context, r rVar, zo.i iVar, lp.c cVar, eo.a aVar, ap.a aVar2) {
        return new com.withpersona.sdk2.inquiry.internal.network.e(context, rVar, iVar, cVar, aVar, aVar2);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public com.withpersona.sdk2.inquiry.internal.network.e get() {
        return c((Context) this.f7167a.get(), (r) this.f7168b.get(), (zo.i) this.f7169c.get(), (lp.c) this.f7170d.get(), (eo.a) this.f7171e.get(), (ap.a) this.f7172f.get());
    }
}
