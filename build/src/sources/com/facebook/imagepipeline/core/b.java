package com.facebook.imagepipeline.core;

import ab.d;
import ab.f;
import ab.h;
import android.content.Context;
import com.facebook.common.internal.Supplier;
import com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
import com.facebook.imagepipeline.producers.a0;
import com.facebook.imagepipeline.producers.h1;
import com.facebook.imagepipeline.producers.i1;
import ga.e;
import java.util.Set;
import ma.k;
import ma.n;
import ma.q;
import ma.t;
import ma.u;
import ma.w;
import oa.q0;
import oa.r;
import oa.x;
import p8.j;
import ra.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b {

    /* renamed from: p  reason: collision with root package name */
    private static final Class f11208p = b.class;

    /* renamed from: q  reason: collision with root package name */
    private static b f11209q;

    /* renamed from: r  reason: collision with root package name */
    private static ImagePipeline f11210r;

    /* renamed from: s  reason: collision with root package name */
    private static boolean f11211s;

    /* renamed from: a  reason: collision with root package name */
    private final h1 f11212a;

    /* renamed from: b  reason: collision with root package name */
    private final r f11213b;

    /* renamed from: c  reason: collision with root package name */
    private final oa.a f11214c;

    /* renamed from: d  reason: collision with root package name */
    private final Supplier f11215d;

    /* renamed from: e  reason: collision with root package name */
    private n f11216e;

    /* renamed from: f  reason: collision with root package name */
    private t f11217f;

    /* renamed from: g  reason: collision with root package name */
    private n f11218g;

    /* renamed from: h  reason: collision with root package name */
    private t f11219h;

    /* renamed from: i  reason: collision with root package name */
    private c f11220i;

    /* renamed from: j  reason: collision with root package name */
    private d f11221j;

    /* renamed from: k  reason: collision with root package name */
    private x f11222k;

    /* renamed from: l  reason: collision with root package name */
    private q0 f11223l;

    /* renamed from: m  reason: collision with root package name */
    private PlatformBitmapFactory f11224m;

    /* renamed from: n  reason: collision with root package name */
    private xa.d f11225n;

    /* renamed from: o  reason: collision with root package name */
    private ia.a f11226o;

    public b(r rVar) {
        h1 i1Var;
        if (za.b.d()) {
            za.b.a("ImagePipelineConfig()");
        }
        r rVar2 = (r) j.g(rVar);
        this.f11213b = rVar2;
        if (rVar2.G().G()) {
            i1Var = new a0(rVar.H().a());
        } else {
            i1Var = new i1(rVar.H().a());
        }
        this.f11212a = i1Var;
        this.f11214c = new oa.a(rVar.w());
        if (za.b.d()) {
            za.b.b();
        }
        this.f11215d = rVar2.v();
        if (rVar2.G().A()) {
            e.e().g(true);
        }
    }

    private ImagePipeline a() {
        q0 p10 = p();
        Set e10 = this.f11213b.e();
        Set a10 = this.f11213b.a();
        Supplier C = this.f11213b.C();
        t e11 = e();
        t h10 = h();
        Supplier supplier = this.f11215d;
        k y10 = this.f11213b.y();
        h1 h1Var = this.f11212a;
        Supplier t10 = this.f11213b.G().t();
        Supplier I = this.f11213b.G().I();
        this.f11213b.F();
        return new ImagePipeline(p10, e10, a10, C, e11, h10, supplier, y10, h1Var, t10, I, null, this.f11213b);
    }

    private ia.a c() {
        if (this.f11226o == null) {
            this.f11226o = ia.b.a(m(), this.f11213b.H(), d(), this.f11213b.G().j(), this.f11213b.G().v(), this.f11213b.G().c(), this.f11213b.G().d(), this.f11213b.l());
        }
        return this.f11226o;
    }

    private c i() {
        c cVar;
        c cVar2;
        if (this.f11220i == null) {
            if (this.f11213b.r() != null) {
                this.f11220i = this.f11213b.r();
            } else {
                ia.a c10 = c();
                if (c10 != null) {
                    cVar = c10.c();
                    cVar2 = c10.b();
                } else {
                    cVar = null;
                    cVar2 = null;
                }
                c r10 = r();
                this.f11213b.o();
                this.f11220i = new ra.b(cVar, cVar2, r10, n());
            }
        }
        return this.f11220i;
    }

    private d k() {
        if (this.f11221j == null) {
            if (this.f11213b.n() == null && this.f11213b.m() == null && this.f11213b.G().J()) {
                this.f11221j = new h(this.f11213b.G().m());
            } else {
                this.f11221j = new f(this.f11213b.G().m(), this.f11213b.G().x(), this.f11213b.n(), this.f11213b.m(), this.f11213b.G().F());
            }
        }
        return this.f11221j;
    }

    public static b l() {
        return (b) j.h(f11209q, "ImagePipelineFactory was not initialized!");
    }

    private x o() {
        if (this.f11222k == null) {
            this.f11222k = this.f11213b.G().p().a(this.f11213b.getContext(), this.f11213b.t().k(), i(), this.f11213b.h(), this.f11213b.E(), this.f11213b.z(), this.f11213b.G().B(), this.f11213b.H(), this.f11213b.t().i(this.f11213b.u()), this.f11213b.t().j(), e(), h(), this.f11215d, this.f11213b.y(), m(), this.f11213b.G().g(), this.f11213b.G().f(), this.f11213b.G().e(), this.f11213b.G().m(), f(), this.f11213b.G().l(), this.f11213b.G().u());
        }
        return this.f11222k;
    }

    private q0 p() {
        boolean w10 = this.f11213b.G().w();
        if (this.f11223l == null) {
            this.f11223l = new q0(this.f11213b.getContext().getApplicationContext().getContentResolver(), o(), this.f11213b.b(), this.f11213b.z(), this.f11213b.G().L(), this.f11212a, this.f11213b.E(), w10, this.f11213b.G().K(), this.f11213b.p(), k(), this.f11213b.G().E(), this.f11213b.G().C(), this.f11213b.G().a(), this.f11213b.A());
        }
        return this.f11223l;
    }

    public static synchronized void s(Context context) {
        synchronized (b.class) {
            try {
                if (za.b.d()) {
                    za.b.a("ImagePipelineFactory#initialize");
                }
                t(ImagePipelineConfig.K(context).a());
                if (za.b.d()) {
                    za.b.b();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public static synchronized void t(r rVar) {
        synchronized (b.class) {
            if (f11209q != null) {
                q8.a.F(f11208p, "ImagePipelineFactory has already been initialized! `ImagePipelineFactory.initialize(...)` should only be called once to avoid unexpected behavior.");
                if (f11211s) {
                    return;
                }
            }
            f11209q = new b(rVar);
        }
    }

    public sa.a b(Context context) {
        ia.a c10 = c();
        if (c10 == null) {
            return null;
        }
        return c10.a(context);
    }

    public n d() {
        if (this.f11216e == null) {
            this.f11216e = this.f11213b.x().a(this.f11213b.q(), this.f11213b.D(), this.f11213b.g(), this.f11213b.G().r(), this.f11213b.G().q(), this.f11213b.k());
        }
        return this.f11216e;
    }

    public t e() {
        if (this.f11217f == null) {
            this.f11217f = u.a(d(), this.f11213b.B());
        }
        return this.f11217f;
    }

    public oa.a f() {
        return this.f11214c;
    }

    public n g() {
        if (this.f11218g == null) {
            this.f11218g = q.a(this.f11213b.s(), this.f11213b.D(), this.f11213b.f());
        }
        return this.f11218g;
    }

    public t h() {
        w g10;
        if (this.f11219h == null) {
            if (this.f11213b.c() != null) {
                g10 = this.f11213b.c();
            } else {
                g10 = g();
            }
            this.f11219h = ma.r.a(g10, this.f11213b.B());
        }
        return this.f11219h;
    }

    public ImagePipeline j() {
        if (f11210r == null) {
            f11210r = a();
        }
        return f11210r;
    }

    public PlatformBitmapFactory m() {
        if (this.f11224m == null) {
            this.f11224m = la.d.a(this.f11213b.t(), n(), f());
        }
        return this.f11224m;
    }

    public xa.d n() {
        if (this.f11225n == null) {
            this.f11225n = xa.e.a(this.f11213b.t(), this.f11213b.G().H(), this.f11213b.G().s(), this.f11213b.G().o());
        }
        return this.f11225n;
    }

    public sa.a q() {
        if (this.f11213b.G().A()) {
            return new cb.a();
        }
        return null;
    }

    public c r() {
        if (this.f11213b.G().A()) {
            return new cb.b(this.f11213b.getContext().getApplicationContext().getResources());
        }
        return null;
    }
}
