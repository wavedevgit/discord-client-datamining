package gc;

import android.content.Context;
import java.util.concurrent.Executor;
import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class s implements bc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f24957a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f24958b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f24959c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f24960d;

    /* renamed from: e  reason: collision with root package name */
    private final Provider f24961e;

    /* renamed from: f  reason: collision with root package name */
    private final Provider f24962f;

    /* renamed from: g  reason: collision with root package name */
    private final Provider f24963g;

    /* renamed from: h  reason: collision with root package name */
    private final Provider f24964h;

    /* renamed from: i  reason: collision with root package name */
    private final Provider f24965i;

    public s(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5, Provider provider6, Provider provider7, Provider provider8, Provider provider9) {
        this.f24957a = provider;
        this.f24958b = provider2;
        this.f24959c = provider3;
        this.f24960d = provider4;
        this.f24961e = provider5;
        this.f24962f = provider6;
        this.f24963g = provider7;
        this.f24964h = provider8;
        this.f24965i = provider9;
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
        return c((Context) this.f24957a.get(), (ac.e) this.f24958b.get(), (hc.d) this.f24959c.get(), (x) this.f24960d.get(), (Executor) this.f24961e.get(), (ic.b) this.f24962f.get(), (jc.a) this.f24963g.get(), (jc.a) this.f24964h.get(), (hc.c) this.f24965i.get());
    }
}
