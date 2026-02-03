package zb;

import android.content.Context;
import gc.w;
import hc.n0;
import hc.u0;
import javax.inject.Provider;
import zb.u;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e extends u {

    /* renamed from: d  reason: collision with root package name */
    private Provider f55620d;

    /* renamed from: e  reason: collision with root package name */
    private Provider f55621e;

    /* renamed from: i  reason: collision with root package name */
    private Provider f55622i;

    /* renamed from: o  reason: collision with root package name */
    private Provider f55623o;

    /* renamed from: p  reason: collision with root package name */
    private Provider f55624p;

    /* renamed from: q  reason: collision with root package name */
    private Provider f55625q;

    /* renamed from: r  reason: collision with root package name */
    private Provider f55626r;

    /* renamed from: s  reason: collision with root package name */
    private Provider f55627s;

    /* renamed from: t  reason: collision with root package name */
    private Provider f55628t;

    /* renamed from: u  reason: collision with root package name */
    private Provider f55629u;

    /* renamed from: v  reason: collision with root package name */
    private Provider f55630v;

    /* renamed from: w  reason: collision with root package name */
    private Provider f55631w;

    /* renamed from: x  reason: collision with root package name */
    private Provider f55632x;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements u.a {

        /* renamed from: a  reason: collision with root package name */
        private Context f55633a;

        private b() {
        }

        @Override // zb.u.a
        /* renamed from: b */
        public b a(Context context) {
            this.f55633a = (Context) bc.d.b(context);
            return this;
        }

        @Override // zb.u.a
        public u build() {
            bc.d.a(this.f55633a, Context.class);
            return new e(this.f55633a);
        }
    }

    public static u.a l() {
        return new b();
    }

    private void n(Context context) {
        this.f55620d = bc.a.a(k.a());
        bc.b a10 = bc.c.a(context);
        this.f55621e = a10;
        ac.j a11 = ac.j.a(a10, jc.c.a(), jc.d.a());
        this.f55622i = a11;
        this.f55623o = bc.a.a(ac.l.a(this.f55621e, a11));
        this.f55624p = u0.a(this.f55621e, hc.g.a(), hc.i.a());
        this.f55625q = bc.a.a(hc.h.a(this.f55621e));
        this.f55626r = bc.a.a(n0.a(jc.c.a(), jc.d.a(), hc.j.a(), this.f55624p, this.f55625q));
        fc.g b10 = fc.g.b(jc.c.a());
        this.f55627s = b10;
        fc.i a12 = fc.i.a(this.f55621e, this.f55626r, b10, jc.d.a());
        this.f55628t = a12;
        Provider provider = this.f55620d;
        Provider provider2 = this.f55623o;
        Provider provider3 = this.f55626r;
        this.f55629u = fc.d.a(provider, provider2, a12, provider3, provider3);
        Provider provider4 = this.f55621e;
        Provider provider5 = this.f55623o;
        Provider provider6 = this.f55626r;
        this.f55630v = gc.s.a(provider4, provider5, provider6, this.f55628t, this.f55620d, provider6, jc.c.a(), jc.d.a(), this.f55626r);
        Provider provider7 = this.f55620d;
        Provider provider8 = this.f55626r;
        this.f55631w = w.a(provider7, provider8, this.f55628t, provider8);
        this.f55632x = bc.a.a(v.a(jc.c.a(), jc.d.a(), this.f55629u, this.f55630v, this.f55631w));
    }

    @Override // zb.u
    hc.d a() {
        return (hc.d) this.f55626r.get();
    }

    @Override // zb.u
    t h() {
        return (t) this.f55632x.get();
    }

    private e(Context context) {
        n(context);
    }
}
