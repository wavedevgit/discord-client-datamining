package hc;

import android.content.Context;
import java.util.concurrent.Executor;
import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class s implements cc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f25868a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f25869b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f25870c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f25871d;

    /* renamed from: e  reason: collision with root package name */
    private final Provider f25872e;

    /* renamed from: f  reason: collision with root package name */
    private final Provider f25873f;

    /* renamed from: g  reason: collision with root package name */
    private final Provider f25874g;

    /* renamed from: h  reason: collision with root package name */
    private final Provider f25875h;

    /* renamed from: i  reason: collision with root package name */
    private final Provider f25876i;

    public s(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5, Provider provider6, Provider provider7, Provider provider8, Provider provider9) {
        this.f25868a = provider;
        this.f25869b = provider2;
        this.f25870c = provider3;
        this.f25871d = provider4;
        this.f25872e = provider5;
        this.f25873f = provider6;
        this.f25874g = provider7;
        this.f25875h = provider8;
        this.f25876i = provider9;
    }

    public static s a(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5, Provider provider6, Provider provider7, Provider provider8, Provider provider9) {
        return new s(provider, provider2, provider3, provider4, provider5, provider6, provider7, provider8, provider9);
    }

    public static r c(Context context, bc.e eVar, ic.d dVar, x xVar, Executor executor, jc.b bVar, kc.a aVar, kc.a aVar2, ic.c cVar) {
        return new r(context, eVar, dVar, xVar, executor, bVar, aVar, aVar2, cVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public r get() {
        return c((Context) this.f25868a.get(), (bc.e) this.f25869b.get(), (ic.d) this.f25870c.get(), (x) this.f25871d.get(), (Executor) this.f25872e.get(), (jc.b) this.f25873f.get(), (kc.a) this.f25874g.get(), (kc.a) this.f25875h.get(), (ic.c) this.f25876i.get());
    }
}
