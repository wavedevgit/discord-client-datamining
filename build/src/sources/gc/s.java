package gc;

import android.content.Context;
import java.util.concurrent.Executor;
import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class s implements bc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f24656a;

    /* renamed from: b  reason: collision with root package name */
    private final Provider f24657b;

    /* renamed from: c  reason: collision with root package name */
    private final Provider f24658c;

    /* renamed from: d  reason: collision with root package name */
    private final Provider f24659d;

    /* renamed from: e  reason: collision with root package name */
    private final Provider f24660e;

    /* renamed from: f  reason: collision with root package name */
    private final Provider f24661f;

    /* renamed from: g  reason: collision with root package name */
    private final Provider f24662g;

    /* renamed from: h  reason: collision with root package name */
    private final Provider f24663h;

    /* renamed from: i  reason: collision with root package name */
    private final Provider f24664i;

    public s(Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5, Provider provider6, Provider provider7, Provider provider8, Provider provider9) {
        this.f24656a = provider;
        this.f24657b = provider2;
        this.f24658c = provider3;
        this.f24659d = provider4;
        this.f24660e = provider5;
        this.f24661f = provider6;
        this.f24662g = provider7;
        this.f24663h = provider8;
        this.f24664i = provider9;
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
        return c((Context) this.f24656a.get(), (ac.e) this.f24657b.get(), (hc.d) this.f24658c.get(), (x) this.f24659d.get(), (Executor) this.f24660e.get(), (ic.b) this.f24661f.get(), (jc.a) this.f24662g.get(), (jc.a) this.f24663h.get(), (hc.c) this.f24664i.get());
    }
}
