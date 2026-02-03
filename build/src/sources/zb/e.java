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
    private Provider f55758d;

    /* renamed from: e  reason: collision with root package name */
    private Provider f55759e;

    /* renamed from: i  reason: collision with root package name */
    private Provider f55760i;

    /* renamed from: o  reason: collision with root package name */
    private Provider f55761o;

    /* renamed from: p  reason: collision with root package name */
    private Provider f55762p;

    /* renamed from: q  reason: collision with root package name */
    private Provider f55763q;

    /* renamed from: r  reason: collision with root package name */
    private Provider f55764r;

    /* renamed from: s  reason: collision with root package name */
    private Provider f55765s;

    /* renamed from: t  reason: collision with root package name */
    private Provider f55766t;

    /* renamed from: u  reason: collision with root package name */
    private Provider f55767u;

    /* renamed from: v  reason: collision with root package name */
    private Provider f55768v;

    /* renamed from: w  reason: collision with root package name */
    private Provider f55769w;

    /* renamed from: x  reason: collision with root package name */
    private Provider f55770x;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements u.a {

        /* renamed from: a  reason: collision with root package name */
        private Context f55771a;

        private b() {
        }

        @Override // zb.u.a
        /* renamed from: b */
        public b a(Context context) {
            this.f55771a = (Context) bc.d.b(context);
            return this;
        }

        @Override // zb.u.a
        public u build() {
            bc.d.a(this.f55771a, Context.class);
            return new e(this.f55771a);
        }
    }

    public static u.a l() {
        return new b();
    }

    private void n(Context context) {
        this.f55758d = bc.a.a(k.a());
        bc.b a10 = bc.c.a(context);
        this.f55759e = a10;
        ac.j a11 = ac.j.a(a10, jc.c.a(), jc.d.a());
        this.f55760i = a11;
        this.f55761o = bc.a.a(ac.l.a(this.f55759e, a11));
        this.f55762p = u0.a(this.f55759e, hc.g.a(), hc.i.a());
        this.f55763q = bc.a.a(hc.h.a(this.f55759e));
        this.f55764r = bc.a.a(n0.a(jc.c.a(), jc.d.a(), hc.j.a(), this.f55762p, this.f55763q));
        fc.g b10 = fc.g.b(jc.c.a());
        this.f55765s = b10;
        fc.i a12 = fc.i.a(this.f55759e, this.f55764r, b10, jc.d.a());
        this.f55766t = a12;
        Provider provider = this.f55758d;
        Provider provider2 = this.f55761o;
        Provider provider3 = this.f55764r;
        this.f55767u = fc.d.a(provider, provider2, a12, provider3, provider3);
        Provider provider4 = this.f55759e;
        Provider provider5 = this.f55761o;
        Provider provider6 = this.f55764r;
        this.f55768v = gc.s.a(provider4, provider5, provider6, this.f55766t, this.f55758d, provider6, jc.c.a(), jc.d.a(), this.f55764r);
        Provider provider7 = this.f55758d;
        Provider provider8 = this.f55764r;
        this.f55769w = w.a(provider7, provider8, this.f55766t, provider8);
        this.f55770x = bc.a.a(v.a(jc.c.a(), jc.d.a(), this.f55767u, this.f55768v, this.f55769w));
    }

    @Override // zb.u
    hc.d a() {
        return (hc.d) this.f55764r.get();
    }

    @Override // zb.u
    t h() {
        return (t) this.f55770x.get();
    }

    private e(Context context) {
        n(context);
    }
}
