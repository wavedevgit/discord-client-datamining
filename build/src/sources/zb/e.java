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
    private Provider f55472d;

    /* renamed from: e  reason: collision with root package name */
    private Provider f55473e;

    /* renamed from: i  reason: collision with root package name */
    private Provider f55474i;

    /* renamed from: o  reason: collision with root package name */
    private Provider f55475o;

    /* renamed from: p  reason: collision with root package name */
    private Provider f55476p;

    /* renamed from: q  reason: collision with root package name */
    private Provider f55477q;

    /* renamed from: r  reason: collision with root package name */
    private Provider f55478r;

    /* renamed from: s  reason: collision with root package name */
    private Provider f55479s;

    /* renamed from: t  reason: collision with root package name */
    private Provider f55480t;

    /* renamed from: u  reason: collision with root package name */
    private Provider f55481u;

    /* renamed from: v  reason: collision with root package name */
    private Provider f55482v;

    /* renamed from: w  reason: collision with root package name */
    private Provider f55483w;

    /* renamed from: x  reason: collision with root package name */
    private Provider f55484x;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements u.a {

        /* renamed from: a  reason: collision with root package name */
        private Context f55485a;

        private b() {
        }

        @Override // zb.u.a
        /* renamed from: b */
        public b a(Context context) {
            this.f55485a = (Context) bc.d.b(context);
            return this;
        }

        @Override // zb.u.a
        public u build() {
            bc.d.a(this.f55485a, Context.class);
            return new e(this.f55485a);
        }
    }

    public static u.a l() {
        return new b();
    }

    private void n(Context context) {
        this.f55472d = bc.a.a(k.a());
        bc.b a10 = bc.c.a(context);
        this.f55473e = a10;
        ac.j a11 = ac.j.a(a10, jc.c.a(), jc.d.a());
        this.f55474i = a11;
        this.f55475o = bc.a.a(ac.l.a(this.f55473e, a11));
        this.f55476p = u0.a(this.f55473e, hc.g.a(), hc.i.a());
        this.f55477q = bc.a.a(hc.h.a(this.f55473e));
        this.f55478r = bc.a.a(n0.a(jc.c.a(), jc.d.a(), hc.j.a(), this.f55476p, this.f55477q));
        fc.g b10 = fc.g.b(jc.c.a());
        this.f55479s = b10;
        fc.i a12 = fc.i.a(this.f55473e, this.f55478r, b10, jc.d.a());
        this.f55480t = a12;
        Provider provider = this.f55472d;
        Provider provider2 = this.f55475o;
        Provider provider3 = this.f55478r;
        this.f55481u = fc.d.a(provider, provider2, a12, provider3, provider3);
        Provider provider4 = this.f55473e;
        Provider provider5 = this.f55475o;
        Provider provider6 = this.f55478r;
        this.f55482v = gc.s.a(provider4, provider5, provider6, this.f55480t, this.f55472d, provider6, jc.c.a(), jc.d.a(), this.f55478r);
        Provider provider7 = this.f55472d;
        Provider provider8 = this.f55478r;
        this.f55483w = w.a(provider7, provider8, this.f55480t, provider8);
        this.f55484x = bc.a.a(v.a(jc.c.a(), jc.d.a(), this.f55481u, this.f55482v, this.f55483w));
    }

    @Override // zb.u
    hc.d a() {
        return (hc.d) this.f55478r.get();
    }

    @Override // zb.u
    t h() {
        return (t) this.f55484x.get();
    }

    private e(Context context) {
        n(context);
    }
}
