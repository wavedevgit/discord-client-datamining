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
    private Provider f56123d;

    /* renamed from: e  reason: collision with root package name */
    private Provider f56124e;

    /* renamed from: i  reason: collision with root package name */
    private Provider f56125i;

    /* renamed from: o  reason: collision with root package name */
    private Provider f56126o;

    /* renamed from: p  reason: collision with root package name */
    private Provider f56127p;

    /* renamed from: q  reason: collision with root package name */
    private Provider f56128q;

    /* renamed from: r  reason: collision with root package name */
    private Provider f56129r;

    /* renamed from: s  reason: collision with root package name */
    private Provider f56130s;

    /* renamed from: t  reason: collision with root package name */
    private Provider f56131t;

    /* renamed from: u  reason: collision with root package name */
    private Provider f56132u;

    /* renamed from: v  reason: collision with root package name */
    private Provider f56133v;

    /* renamed from: w  reason: collision with root package name */
    private Provider f56134w;

    /* renamed from: x  reason: collision with root package name */
    private Provider f56135x;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements u.a {

        /* renamed from: a  reason: collision with root package name */
        private Context f56136a;

        private b() {
        }

        @Override // zb.u.a
        /* renamed from: b */
        public b a(Context context) {
            this.f56136a = (Context) bc.d.b(context);
            return this;
        }

        @Override // zb.u.a
        public u build() {
            bc.d.a(this.f56136a, Context.class);
            return new e(this.f56136a);
        }
    }

    public static u.a k() {
        return new b();
    }

    private void m(Context context) {
        this.f56123d = bc.a.a(k.a());
        bc.b a10 = bc.c.a(context);
        this.f56124e = a10;
        ac.j a11 = ac.j.a(a10, jc.c.a(), jc.d.a());
        this.f56125i = a11;
        this.f56126o = bc.a.a(ac.l.a(this.f56124e, a11));
        this.f56127p = u0.a(this.f56124e, hc.g.a(), hc.i.a());
        this.f56128q = bc.a.a(hc.h.a(this.f56124e));
        this.f56129r = bc.a.a(n0.a(jc.c.a(), jc.d.a(), hc.j.a(), this.f56127p, this.f56128q));
        fc.g b10 = fc.g.b(jc.c.a());
        this.f56130s = b10;
        fc.i a12 = fc.i.a(this.f56124e, this.f56129r, b10, jc.d.a());
        this.f56131t = a12;
        Provider provider = this.f56123d;
        Provider provider2 = this.f56126o;
        Provider provider3 = this.f56129r;
        this.f56132u = fc.d.a(provider, provider2, a12, provider3, provider3);
        Provider provider4 = this.f56124e;
        Provider provider5 = this.f56126o;
        Provider provider6 = this.f56129r;
        this.f56133v = gc.s.a(provider4, provider5, provider6, this.f56131t, this.f56123d, provider6, jc.c.a(), jc.d.a(), this.f56129r);
        Provider provider7 = this.f56123d;
        Provider provider8 = this.f56129r;
        this.f56134w = w.a(provider7, provider8, this.f56131t, provider8);
        this.f56135x = bc.a.a(v.a(jc.c.a(), jc.d.a(), this.f56132u, this.f56133v, this.f56134w));
    }

    @Override // zb.u
    hc.d a() {
        return (hc.d) this.f56129r.get();
    }

    @Override // zb.u
    t g() {
        return (t) this.f56135x.get();
    }

    private e(Context context) {
        m(context);
    }
}
