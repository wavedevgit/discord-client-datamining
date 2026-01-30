package so;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final tq.h f49112a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f49113b;

    /* renamed from: c  reason: collision with root package name */
    private final tq.h f49114c;

    /* renamed from: d  reason: collision with root package name */
    private final tq.h f49115d;

    /* renamed from: e  reason: collision with root package name */
    private final tq.h f49116e;

    /* renamed from: f  reason: collision with root package name */
    private final tq.h f49117f;

    public c(tq.h hVar, tq.h hVar2, tq.h hVar3, tq.h hVar4, tq.h hVar5, tq.h hVar6) {
        this.f49112a = hVar;
        this.f49113b = hVar2;
        this.f49114c = hVar3;
        this.f49115d = hVar4;
        this.f49116e = hVar5;
        this.f49117f = hVar6;
    }

    public static c a(tq.h hVar, tq.h hVar2, tq.h hVar3, tq.h hVar4, tq.h hVar5, tq.h hVar6) {
        return new c(hVar, hVar2, hVar3, hVar4, hVar5, hVar6);
    }

    public static com.withpersona.sdk2.inquiry.internal.network.e c(Context context, r rVar, qo.i iVar, cp.c cVar, un.a aVar, ro.a aVar2) {
        return new com.withpersona.sdk2.inquiry.internal.network.e(context, rVar, iVar, cVar, aVar, aVar2);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public com.withpersona.sdk2.inquiry.internal.network.e get() {
        return c((Context) this.f49112a.get(), (r) this.f49113b.get(), (qo.i) this.f49114c.get(), (cp.c) this.f49115d.get(), (un.a) this.f49116e.get(), (ro.a) this.f49117f.get());
    }
}
