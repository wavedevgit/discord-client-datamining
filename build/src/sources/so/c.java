package so;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final tq.h f49096a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f49097b;

    /* renamed from: c  reason: collision with root package name */
    private final tq.h f49098c;

    /* renamed from: d  reason: collision with root package name */
    private final tq.h f49099d;

    /* renamed from: e  reason: collision with root package name */
    private final tq.h f49100e;

    /* renamed from: f  reason: collision with root package name */
    private final tq.h f49101f;

    public c(tq.h hVar, tq.h hVar2, tq.h hVar3, tq.h hVar4, tq.h hVar5, tq.h hVar6) {
        this.f49096a = hVar;
        this.f49097b = hVar2;
        this.f49098c = hVar3;
        this.f49099d = hVar4;
        this.f49100e = hVar5;
        this.f49101f = hVar6;
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
        return c((Context) this.f49096a.get(), (r) this.f49097b.get(), (qo.i) this.f49098c.get(), (cp.c) this.f49099d.get(), (un.a) this.f49100e.get(), (ro.a) this.f49101f.get());
    }
}
