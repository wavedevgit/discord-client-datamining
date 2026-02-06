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
    private Provider f56075d;

    /* renamed from: e  reason: collision with root package name */
    private Provider f56076e;

    /* renamed from: i  reason: collision with root package name */
    private Provider f56077i;

    /* renamed from: o  reason: collision with root package name */
    private Provider f56078o;

    /* renamed from: p  reason: collision with root package name */
    private Provider f56079p;

    /* renamed from: q  reason: collision with root package name */
    private Provider f56080q;

    /* renamed from: r  reason: collision with root package name */
    private Provider f56081r;

    /* renamed from: s  reason: collision with root package name */
    private Provider f56082s;

    /* renamed from: t  reason: collision with root package name */
    private Provider f56083t;

    /* renamed from: u  reason: collision with root package name */
    private Provider f56084u;

    /* renamed from: v  reason: collision with root package name */
    private Provider f56085v;

    /* renamed from: w  reason: collision with root package name */
    private Provider f56086w;

    /* renamed from: x  reason: collision with root package name */
    private Provider f56087x;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements u.a {

        /* renamed from: a  reason: collision with root package name */
        private Context f56088a;

        private b() {
        }

        @Override // zb.u.a
        /* renamed from: b */
        public b a(Context context) {
            this.f56088a = (Context) bc.d.b(context);
            return this;
        }

        @Override // zb.u.a
        public u build() {
            bc.d.a(this.f56088a, Context.class);
            return new e(this.f56088a);
        }
    }

    public static u.a k() {
        return new b();
    }

    private void m(Context context) {
        this.f56075d = bc.a.a(k.a());
        bc.b a10 = bc.c.a(context);
        this.f56076e = a10;
        ac.j a11 = ac.j.a(a10, jc.c.a(), jc.d.a());
        this.f56077i = a11;
        this.f56078o = bc.a.a(ac.l.a(this.f56076e, a11));
        this.f56079p = u0.a(this.f56076e, hc.g.a(), hc.i.a());
        this.f56080q = bc.a.a(hc.h.a(this.f56076e));
        this.f56081r = bc.a.a(n0.a(jc.c.a(), jc.d.a(), hc.j.a(), this.f56079p, this.f56080q));
        fc.g b10 = fc.g.b(jc.c.a());
        this.f56082s = b10;
        fc.i a12 = fc.i.a(this.f56076e, this.f56081r, b10, jc.d.a());
        this.f56083t = a12;
        Provider provider = this.f56075d;
        Provider provider2 = this.f56078o;
        Provider provider3 = this.f56081r;
        this.f56084u = fc.d.a(provider, provider2, a12, provider3, provider3);
        Provider provider4 = this.f56076e;
        Provider provider5 = this.f56078o;
        Provider provider6 = this.f56081r;
        this.f56085v = gc.s.a(provider4, provider5, provider6, this.f56083t, this.f56075d, provider6, jc.c.a(), jc.d.a(), this.f56081r);
        Provider provider7 = this.f56075d;
        Provider provider8 = this.f56081r;
        this.f56086w = w.a(provider7, provider8, this.f56083t, provider8);
        this.f56087x = bc.a.a(v.a(jc.c.a(), jc.d.a(), this.f56084u, this.f56085v, this.f56086w));
    }

    @Override // zb.u
    hc.d a() {
        return (hc.d) this.f56081r.get();
    }

    @Override // zb.u
    t g() {
        return (t) this.f56087x.get();
    }

    private e(Context context) {
        m(context);
    }
}
