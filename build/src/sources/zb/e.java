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
    private Provider f55755d;

    /* renamed from: e  reason: collision with root package name */
    private Provider f55756e;

    /* renamed from: i  reason: collision with root package name */
    private Provider f55757i;

    /* renamed from: o  reason: collision with root package name */
    private Provider f55758o;

    /* renamed from: p  reason: collision with root package name */
    private Provider f55759p;

    /* renamed from: q  reason: collision with root package name */
    private Provider f55760q;

    /* renamed from: r  reason: collision with root package name */
    private Provider f55761r;

    /* renamed from: s  reason: collision with root package name */
    private Provider f55762s;

    /* renamed from: t  reason: collision with root package name */
    private Provider f55763t;

    /* renamed from: u  reason: collision with root package name */
    private Provider f55764u;

    /* renamed from: v  reason: collision with root package name */
    private Provider f55765v;

    /* renamed from: w  reason: collision with root package name */
    private Provider f55766w;

    /* renamed from: x  reason: collision with root package name */
    private Provider f55767x;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements u.a {

        /* renamed from: a  reason: collision with root package name */
        private Context f55768a;

        private b() {
        }

        @Override // zb.u.a
        /* renamed from: b */
        public b a(Context context) {
            this.f55768a = (Context) bc.d.b(context);
            return this;
        }

        @Override // zb.u.a
        public u build() {
            bc.d.a(this.f55768a, Context.class);
            return new e(this.f55768a);
        }
    }

    public static u.a l() {
        return new b();
    }

    private void n(Context context) {
        this.f55755d = bc.a.a(k.a());
        bc.b a10 = bc.c.a(context);
        this.f55756e = a10;
        ac.j a11 = ac.j.a(a10, jc.c.a(), jc.d.a());
        this.f55757i = a11;
        this.f55758o = bc.a.a(ac.l.a(this.f55756e, a11));
        this.f55759p = u0.a(this.f55756e, hc.g.a(), hc.i.a());
        this.f55760q = bc.a.a(hc.h.a(this.f55756e));
        this.f55761r = bc.a.a(n0.a(jc.c.a(), jc.d.a(), hc.j.a(), this.f55759p, this.f55760q));
        fc.g b10 = fc.g.b(jc.c.a());
        this.f55762s = b10;
        fc.i a12 = fc.i.a(this.f55756e, this.f55761r, b10, jc.d.a());
        this.f55763t = a12;
        Provider provider = this.f55755d;
        Provider provider2 = this.f55758o;
        Provider provider3 = this.f55761r;
        this.f55764u = fc.d.a(provider, provider2, a12, provider3, provider3);
        Provider provider4 = this.f55756e;
        Provider provider5 = this.f55758o;
        Provider provider6 = this.f55761r;
        this.f55765v = gc.s.a(provider4, provider5, provider6, this.f55763t, this.f55755d, provider6, jc.c.a(), jc.d.a(), this.f55761r);
        Provider provider7 = this.f55755d;
        Provider provider8 = this.f55761r;
        this.f55766w = w.a(provider7, provider8, this.f55763t, provider8);
        this.f55767x = bc.a.a(v.a(jc.c.a(), jc.d.a(), this.f55764u, this.f55765v, this.f55766w));
    }

    @Override // zb.u
    hc.d a() {
        return (hc.d) this.f55761r.get();
    }

    @Override // zb.u
    t h() {
        return (t) this.f55767x.get();
    }

    private e(Context context) {
        n(context);
    }
}
