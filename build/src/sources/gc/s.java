package gc;

import android.content.Context;
import java.util.concurrent.Executor;
import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class s implements bc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f26649a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f26650b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f26651c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f26652d;

    /* renamed from: e  reason: collision with root package name */
    private final Provider f26653e;

    /* renamed from: f  reason: collision with root package name */
    private final Provider f26654f;

    /* renamed from: g  reason: collision with root package name */
    private final Provider f26655g;

    /* renamed from: h  reason: collision with root package name */
    private final Provider f26656h;

    /* renamed from: i  reason: collision with root package name */
    private final Provider f26657i;

    public s(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5, Provider provider6, Provider provider7, Provider provider8, Provider provider9) {
        this.f26649a = provider;
        this.f26650b = provider2;
        this.f26651c = provider3;
        this.f26652d = provider4;
        this.f26653e = provider5;
        this.f26654f = provider6;
        this.f26655g = provider7;
        this.f26656h = provider8;
        this.f26657i = provider9;
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
        return c((Context) this.f26649a.get(), (ac.e) this.f26650b.get(), (hc.d) this.f26651c.get(), (x) this.f26652d.get(), (Executor) this.f26653e.get(), (ic.b) this.f26654f.get(), (jc.a) this.f26655g.get(), (jc.a) this.f26656h.get(), (hc.c) this.f26657i.get());
    }
}
