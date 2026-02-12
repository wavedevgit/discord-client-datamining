package hc;

import android.content.Context;
import java.util.concurrent.Executor;
import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class s implements cc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f27087a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f27088b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f27089c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f27090d;

    /* renamed from: e  reason: collision with root package name */
    private final Provider f27091e;

    /* renamed from: f  reason: collision with root package name */
    private final Provider f27092f;

    /* renamed from: g  reason: collision with root package name */
    private final Provider f27093g;

    /* renamed from: h  reason: collision with root package name */
    private final Provider f27094h;

    /* renamed from: i  reason: collision with root package name */
    private final Provider f27095i;

    public s(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5, Provider provider6, Provider provider7, Provider provider8, Provider provider9) {
        this.f27087a = provider;
        this.f27088b = provider2;
        this.f27089c = provider3;
        this.f27090d = provider4;
        this.f27091e = provider5;
        this.f27092f = provider6;
        this.f27093g = provider7;
        this.f27094h = provider8;
        this.f27095i = provider9;
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
        return c((Context) this.f27087a.get(), (bc.e) this.f27088b.get(), (ic.d) this.f27089c.get(), (x) this.f27090d.get(), (Executor) this.f27091e.get(), (jc.b) this.f27092f.get(), (kc.a) this.f27093g.get(), (kc.a) this.f27094h.get(), (ic.c) this.f27095i.get());
    }
}
