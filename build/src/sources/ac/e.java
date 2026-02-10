package ac;

import ac.u;
import android.content.Context;
import hc.w;
import ic.n0;
import ic.u0;
import javax.inject.Provider;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e extends u {

    /* renamed from: d  reason: collision with root package name */
    private Provider f591d;

    /* renamed from: e  reason: collision with root package name */
    private Provider f592e;

    /* renamed from: i  reason: collision with root package name */
    private Provider f593i;

    /* renamed from: o  reason: collision with root package name */
    private Provider f594o;

    /* renamed from: p  reason: collision with root package name */
    private Provider f595p;

    /* renamed from: q  reason: collision with root package name */
    private Provider f596q;

    /* renamed from: r  reason: collision with root package name */
    private Provider f597r;

    /* renamed from: s  reason: collision with root package name */
    private Provider f598s;

    /* renamed from: t  reason: collision with root package name */
    private Provider f599t;

    /* renamed from: u  reason: collision with root package name */
    private Provider f600u;

    /* renamed from: v  reason: collision with root package name */
    private Provider f601v;

    /* renamed from: w  reason: collision with root package name */
    private Provider f602w;

    /* renamed from: x  reason: collision with root package name */
    private Provider f603x;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements u.a {

        /* renamed from: a  reason: collision with root package name */
        private Context f604a;

        private b() {
        }

        @Override // ac.u.a
        /* renamed from: b */
        public b a(Context context) {
            this.f604a = (Context) cc.d.b(context);
            return this;
        }

        @Override // ac.u.a
        public u build() {
            cc.d.a(this.f604a, Context.class);
            return new e(this.f604a);
        }
    }

    public static u.a k() {
        return new b();
    }

    private void m(Context context) {
        this.f591d = cc.a.a(k.a());
        cc.b a10 = cc.c.a(context);
        this.f592e = a10;
        bc.j a11 = bc.j.a(a10, kc.c.a(), kc.d.a());
        this.f593i = a11;
        this.f594o = cc.a.a(bc.l.a(this.f592e, a11));
        this.f595p = u0.a(this.f592e, ic.g.a(), ic.i.a());
        this.f596q = cc.a.a(ic.h.a(this.f592e));
        this.f597r = cc.a.a(n0.a(kc.c.a(), kc.d.a(), ic.j.a(), this.f595p, this.f596q));
        gc.g b10 = gc.g.b(kc.c.a());
        this.f598s = b10;
        gc.i a12 = gc.i.a(this.f592e, this.f597r, b10, kc.d.a());
        this.f599t = a12;
        Provider provider = this.f591d;
        Provider provider2 = this.f594o;
        Provider provider3 = this.f597r;
        this.f600u = gc.d.a(provider, provider2, a12, provider3, provider3);
        Provider provider4 = this.f592e;
        Provider provider5 = this.f594o;
        Provider provider6 = this.f597r;
        this.f601v = hc.s.a(provider4, provider5, provider6, this.f599t, this.f591d, provider6, kc.c.a(), kc.d.a(), this.f597r);
        Provider provider7 = this.f591d;
        Provider provider8 = this.f597r;
        this.f602w = w.a(provider7, provider8, this.f599t, provider8);
        this.f603x = cc.a.a(v.a(kc.c.a(), kc.d.a(), this.f600u, this.f601v, this.f602w));
    }

    @Override // ac.u
    ic.d a() {
        return (ic.d) this.f597r.get();
    }

    @Override // ac.u
    t g() {
        return (t) this.f603x.get();
    }

    private e(Context context) {
        m(context);
    }
}
