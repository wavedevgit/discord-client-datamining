package gc;

import android.content.Context;
import java.util.concurrent.Executor;
import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class s implements bc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f25957a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f25958b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f25959c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f25960d;

    /* renamed from: e  reason: collision with root package name */
    private final Provider f25961e;

    /* renamed from: f  reason: collision with root package name */
    private final Provider f25962f;

    /* renamed from: g  reason: collision with root package name */
    private final Provider f25963g;

    /* renamed from: h  reason: collision with root package name */
    private final Provider f25964h;

    /* renamed from: i  reason: collision with root package name */
    private final Provider f25965i;

    public s(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5, Provider provider6, Provider provider7, Provider provider8, Provider provider9) {
        this.f25957a = provider;
        this.f25958b = provider2;
        this.f25959c = provider3;
        this.f25960d = provider4;
        this.f25961e = provider5;
        this.f25962f = provider6;
        this.f25963g = provider7;
        this.f25964h = provider8;
        this.f25965i = provider9;
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
        return c((Context) this.f25957a.get(), (ac.e) this.f25958b.get(), (hc.d) this.f25959c.get(), (x) this.f25960d.get(), (Executor) this.f25961e.get(), (ic.b) this.f25962f.get(), (jc.a) this.f25963g.get(), (jc.a) this.f25964h.get(), (hc.c) this.f25965i.get());
    }
}
