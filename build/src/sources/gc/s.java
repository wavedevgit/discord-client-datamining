package gc;

import android.content.Context;
import java.util.concurrent.Executor;
import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class s implements bc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f26744a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f26745b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f26746c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f26747d;

    /* renamed from: e  reason: collision with root package name */
    private final Provider f26748e;

    /* renamed from: f  reason: collision with root package name */
    private final Provider f26749f;

    /* renamed from: g  reason: collision with root package name */
    private final Provider f26750g;

    /* renamed from: h  reason: collision with root package name */
    private final Provider f26751h;

    /* renamed from: i  reason: collision with root package name */
    private final Provider f26752i;

    public s(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5, Provider provider6, Provider provider7, Provider provider8, Provider provider9) {
        this.f26744a = provider;
        this.f26745b = provider2;
        this.f26746c = provider3;
        this.f26747d = provider4;
        this.f26748e = provider5;
        this.f26749f = provider6;
        this.f26750g = provider7;
        this.f26751h = provider8;
        this.f26752i = provider9;
    }

    public static s a(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5, Provider provider6, Provider provider7, Provider provider8, Provider provider9) {
        return new s(provider, provider2, provider3, provider4, provider5, provider6, provider7, provider8, provider9);
    }

    public static r c(Context context, ac.e eVar, hc.d dVar, x xVar, Executor executor, ic.b bVar, jc.a aVar, jc.a aVar2, hc.c cVar) {
        return new r(context, eVar, dVar, xVar, executor, bVar, aVar, aVar2, cVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public r get() {
        return c((Context) this.f26744a.get(), (ac.e) this.f26745b.get(), (hc.d) this.f26746c.get(), (x) this.f26747d.get(), (Executor) this.f26748e.get(), (ic.b) this.f26749f.get(), (jc.a) this.f26750g.get(), (jc.a) this.f26751h.get(), (hc.c) this.f26752i.get());
    }
}
