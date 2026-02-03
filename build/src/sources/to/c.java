package to;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final uq.h f49950a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f49951b;

    /* renamed from: c  reason: collision with root package name */
    private final uq.h f49952c;

    /* renamed from: d  reason: collision with root package name */
    private final uq.h f49953d;

    /* renamed from: e  reason: collision with root package name */
    private final uq.h f49954e;

    /* renamed from: f  reason: collision with root package name */
    private final uq.h f49955f;

    public c(uq.h hVar, uq.h hVar2, uq.h hVar3, uq.h hVar4, uq.h hVar5, uq.h hVar6) {
        this.f49950a = hVar;
        this.f49951b = hVar2;
        this.f49952c = hVar3;
        this.f49953d = hVar4;
        this.f49954e = hVar5;
        this.f49955f = hVar6;
    }

    public static c a(uq.h hVar, uq.h hVar2, uq.h hVar3, uq.h hVar4, uq.h hVar5, uq.h hVar6) {
        return new c(hVar, hVar2, hVar3, hVar4, hVar5, hVar6);
    }

    public static com.withpersona.sdk2.inquiry.internal.network.e c(Context context, r rVar, ro.i iVar, dp.c cVar, vn.a aVar, so.a aVar2) {
        return new com.withpersona.sdk2.inquiry.internal.network.e(context, rVar, iVar, cVar, aVar, aVar2);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public com.withpersona.sdk2.inquiry.internal.network.e get() {
        return c((Context) this.f49950a.get(), (r) this.f49951b.get(), (ro.i) this.f49952c.get(), (dp.c) this.f49953d.get(), (vn.a) this.f49954e.get(), (so.a) this.f49955f.get());
    }
}
