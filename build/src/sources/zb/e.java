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
    private Provider f55488d;

    /* renamed from: e  reason: collision with root package name */
    private Provider f55489e;

    /* renamed from: i  reason: collision with root package name */
    private Provider f55490i;

    /* renamed from: o  reason: collision with root package name */
    private Provider f55491o;

    /* renamed from: p  reason: collision with root package name */
    private Provider f55492p;

    /* renamed from: q  reason: collision with root package name */
    private Provider f55493q;

    /* renamed from: r  reason: collision with root package name */
    private Provider f55494r;

    /* renamed from: s  reason: collision with root package name */
    private Provider f55495s;

    /* renamed from: t  reason: collision with root package name */
    private Provider f55496t;

    /* renamed from: u  reason: collision with root package name */
    private Provider f55497u;

    /* renamed from: v  reason: collision with root package name */
    private Provider f55498v;

    /* renamed from: w  reason: collision with root package name */
    private Provider f55499w;

    /* renamed from: x  reason: collision with root package name */
    private Provider f55500x;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements u.a {

        /* renamed from: a  reason: collision with root package name */
        private Context f55501a;

        private b() {
        }

        @Override // zb.u.a
        /* renamed from: b */
        public b a(Context context) {
            this.f55501a = (Context) bc.d.b(context);
            return this;
        }

        @Override // zb.u.a
        public u build() {
            bc.d.a(this.f55501a, Context.class);
            return new e(this.f55501a);
        }
    }

    public static u.a l() {
        return new b();
    }

    private void n(Context context) {
        this.f55488d = bc.a.a(k.a());
        bc.b a10 = bc.c.a(context);
        this.f55489e = a10;
        ac.j a11 = ac.j.a(a10, jc.c.a(), jc.d.a());
        this.f55490i = a11;
        this.f55491o = bc.a.a(ac.l.a(this.f55489e, a11));
        this.f55492p = u0.a(this.f55489e, hc.g.a(), hc.i.a());
        this.f55493q = bc.a.a(hc.h.a(this.f55489e));
        this.f55494r = bc.a.a(n0.a(jc.c.a(), jc.d.a(), hc.j.a(), this.f55492p, this.f55493q));
        fc.g b10 = fc.g.b(jc.c.a());
        this.f55495s = b10;
        fc.i a12 = fc.i.a(this.f55489e, this.f55494r, b10, jc.d.a());
        this.f55496t = a12;
        Provider provider = this.f55488d;
        Provider provider2 = this.f55491o;
        Provider provider3 = this.f55494r;
        this.f55497u = fc.d.a(provider, provider2, a12, provider3, provider3);
        Provider provider4 = this.f55489e;
        Provider provider5 = this.f55491o;
        Provider provider6 = this.f55494r;
        this.f55498v = gc.s.a(provider4, provider5, provider6, this.f55496t, this.f55488d, provider6, jc.c.a(), jc.d.a(), this.f55494r);
        Provider provider7 = this.f55488d;
        Provider provider8 = this.f55494r;
        this.f55499w = w.a(provider7, provider8, this.f55496t, provider8);
        this.f55500x = bc.a.a(v.a(jc.c.a(), jc.d.a(), this.f55497u, this.f55498v, this.f55499w));
    }

    @Override // zb.u
    hc.d a() {
        return (hc.d) this.f55494r.get();
    }

    @Override // zb.u
    t h() {
        return (t) this.f55500x.get();
    }

    private e(Context context) {
        n(context);
    }
}
