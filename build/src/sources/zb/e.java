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
    private Provider f55344d;

    /* renamed from: e  reason: collision with root package name */
    private Provider f55345e;

    /* renamed from: i  reason: collision with root package name */
    private Provider f55346i;

    /* renamed from: o  reason: collision with root package name */
    private Provider f55347o;

    /* renamed from: p  reason: collision with root package name */
    private Provider f55348p;

    /* renamed from: q  reason: collision with root package name */
    private Provider f55349q;

    /* renamed from: r  reason: collision with root package name */
    private Provider f55350r;

    /* renamed from: s  reason: collision with root package name */
    private Provider f55351s;

    /* renamed from: t  reason: collision with root package name */
    private Provider f55352t;

    /* renamed from: u  reason: collision with root package name */
    private Provider f55353u;

    /* renamed from: v  reason: collision with root package name */
    private Provider f55354v;

    /* renamed from: w  reason: collision with root package name */
    private Provider f55355w;

    /* renamed from: x  reason: collision with root package name */
    private Provider f55356x;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements u.a {

        /* renamed from: a  reason: collision with root package name */
        private Context f55357a;

        private b() {
        }

        @Override // zb.u.a
        /* renamed from: b */
        public b a(Context context) {
            this.f55357a = (Context) bc.d.b(context);
            return this;
        }

        @Override // zb.u.a
        public u build() {
            bc.d.a(this.f55357a, Context.class);
            return new e(this.f55357a);
        }
    }

    public static u.a k() {
        return new b();
    }

    private void m(Context context) {
        this.f55344d = bc.a.a(k.a());
        bc.b a10 = bc.c.a(context);
        this.f55345e = a10;
        ac.j a11 = ac.j.a(a10, jc.c.a(), jc.d.a());
        this.f55346i = a11;
        this.f55347o = bc.a.a(ac.l.a(this.f55345e, a11));
        this.f55348p = u0.a(this.f55345e, hc.g.a(), hc.i.a());
        this.f55349q = bc.a.a(hc.h.a(this.f55345e));
        this.f55350r = bc.a.a(n0.a(jc.c.a(), jc.d.a(), hc.j.a(), this.f55348p, this.f55349q));
        fc.g b10 = fc.g.b(jc.c.a());
        this.f55351s = b10;
        fc.i a12 = fc.i.a(this.f55345e, this.f55350r, b10, jc.d.a());
        this.f55352t = a12;
        Provider provider = this.f55344d;
        Provider provider2 = this.f55347o;
        Provider provider3 = this.f55350r;
        this.f55353u = fc.d.a(provider, provider2, a12, provider3, provider3);
        Provider provider4 = this.f55345e;
        Provider provider5 = this.f55347o;
        Provider provider6 = this.f55350r;
        this.f55354v = gc.s.a(provider4, provider5, provider6, this.f55352t, this.f55344d, provider6, jc.c.a(), jc.d.a(), this.f55350r);
        Provider provider7 = this.f55344d;
        Provider provider8 = this.f55350r;
        this.f55355w = w.a(provider7, provider8, this.f55352t, provider8);
        this.f55356x = bc.a.a(v.a(jc.c.a(), jc.d.a(), this.f55353u, this.f55354v, this.f55355w));
    }

    @Override // zb.u
    hc.d a() {
        return (hc.d) this.f55350r.get();
    }

    @Override // zb.u
    t h() {
        return (t) this.f55356x.get();
    }

    private e(Context context) {
        m(context);
    }
}
