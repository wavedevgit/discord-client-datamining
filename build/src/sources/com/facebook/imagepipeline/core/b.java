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
    private static final Class f11207p = b.class;

    /* renamed from: q  reason: collision with root package name */
    private static b f11208q;

    /* renamed from: r  reason: collision with root package name */
    private static ImagePipeline f11209r;

    /* renamed from: s  reason: collision with root package name */
    private static boolean f11210s;

    /* renamed from: a  reason: collision with root package name */
    private final h1 f11211a;

    /* renamed from: b  reason: collision with root package name */
    private final r f11212b;

    /* renamed from: c  reason: collision with root package name */
    private final oa.a f11213c;

    /* renamed from: d  reason: collision with root package name */
    private final Supplier f11214d;

    /* renamed from: e  reason: collision with root package name */
    private n f11215e;

    /* renamed from: f  reason: collision with root package name */
    private t f11216f;

    /* renamed from: g  reason: collision with root package name */
    private n f11217g;

    /* renamed from: h  reason: collision with root package name */
    private t f11218h;

    /* renamed from: i  reason: collision with root package name */
    private c f11219i;

    /* renamed from: j  reason: collision with root package name */
    private d f11220j;

    /* renamed from: k  reason: collision with root package name */
    private x f11221k;

    /* renamed from: l  reason: collision with root package name */
    private q0 f11222l;

    /* renamed from: m  reason: collision with root package name */
    private PlatformBitmapFactory f11223m;

    /* renamed from: n  reason: collision with root package name */
    private xa.d f11224n;

    /* renamed from: o  reason: collision with root package name */
    private ia.a f11225o;

    public b(r rVar) {
        h1 i1Var;
        if (za.b.d()) {
            za.b.a("ImagePipelineConfig()");
        }
        r rVar2 = (r) j.g(rVar);
        this.f11212b = rVar2;
        if (rVar2.G().G()) {
            i1Var = new a0(rVar.H().a());
        } else {
            i1Var = new i1(rVar.H().a());
        }
        this.f11211a = i1Var;
        this.f11213c = new oa.a(rVar.w());
        if (za.b.d()) {
            za.b.b();
        }
        this.f11214d = rVar2.v();
        if (rVar2.G().A()) {
            e.e().g(true);
        }
    }

    private ImagePipeline a() {
        q0 p10 = p();
        Set e10 = this.f11212b.e();
        Set a10 = this.f11212b.a();
        Supplier C = this.f11212b.C();
        t e11 = e();
        t h10 = h();
        Supplier supplier = this.f11214d;
        k y10 = this.f11212b.y();
        h1 h1Var = this.f11211a;
        Supplier t10 = this.f11212b.G().t();
        Supplier I = this.f11212b.G().I();
        this.f11212b.F();
        return new ImagePipeline(p10, e10, a10, C, e11, h10, supplier, y10, h1Var, t10, I, null, this.f11212b);
    }

    private ia.a c() {
        if (this.f11225o == null) {
            this.f11225o = ia.b.a(m(), this.f11212b.H(), d(), this.f11212b.G().j(), this.f11212b.G().v(), this.f11212b.G().c(), this.f11212b.G().d(), this.f11212b.l());
        }
        return this.f11225o;
    }

    private c i() {
        c cVar;
        c cVar2;
        if (this.f11219i == null) {
            if (this.f11212b.r() != null) {
                this.f11219i = this.f11212b.r();
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
                this.f11212b.o();
                this.f11219i = new ra.b(cVar, cVar2, r10, n());
            }
        }
        return this.f11219i;
    }

    private d k() {
        if (this.f11220j == null) {
            if (this.f11212b.n() == null && this.f11212b.m() == null && this.f11212b.G().J()) {
                this.f11220j = new h(this.f11212b.G().m());
            } else {
                this.f11220j = new f(this.f11212b.G().m(), this.f11212b.G().x(), this.f11212b.n(), this.f11212b.m(), this.f11212b.G().F());
            }
        }
        return this.f11220j;
    }

    public static b l() {
        return (b) j.h(f11208q, "ImagePipelineFactory was not initialized!");
    }

    private x o() {
        if (this.f11221k == null) {
            this.f11221k = this.f11212b.G().p().a(this.f11212b.getContext(), this.f11212b.t().k(), i(), this.f11212b.h(), this.f11212b.E(), this.f11212b.z(), this.f11212b.G().B(), this.f11212b.H(), this.f11212b.t().i(this.f11212b.u()), this.f11212b.t().j(), e(), h(), this.f11214d, this.f11212b.y(), m(), this.f11212b.G().g(), this.f11212b.G().f(), this.f11212b.G().e(), this.f11212b.G().m(), f(), this.f11212b.G().l(), this.f11212b.G().u());
        }
        return this.f11221k;
    }

    private q0 p() {
        boolean w10 = this.f11212b.G().w();
        if (this.f11222l == null) {
            this.f11222l = new q0(this.f11212b.getContext().getApplicationContext().getContentResolver(), o(), this.f11212b.b(), this.f11212b.z(), this.f11212b.G().L(), this.f11211a, this.f11212b.E(), w10, this.f11212b.G().K(), this.f11212b.p(), k(), this.f11212b.G().E(), this.f11212b.G().C(), this.f11212b.G().a(), this.f11212b.A());
        }
        return this.f11222l;
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
            if (f11208q != null) {
                q8.a.F(f11207p, "ImagePipelineFactory has already been initialized! `ImagePipelineFactory.initialize(...)` should only be called once to avoid unexpected behavior.");
                if (f11210s) {
                    return;
                }
            }
            f11208q = new b(rVar);
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
        if (this.f11215e == null) {
            this.f11215e = this.f11212b.x().a(this.f11212b.q(), this.f11212b.D(), this.f11212b.g(), this.f11212b.G().r(), this.f11212b.G().q(), this.f11212b.k());
        }
        return this.f11215e;
    }

    public t e() {
        if (this.f11216f == null) {
            this.f11216f = u.a(d(), this.f11212b.B());
        }
        return this.f11216f;
    }

    public oa.a f() {
        return this.f11213c;
    }

    public n g() {
        if (this.f11217g == null) {
            this.f11217g = q.a(this.f11212b.s(), this.f11212b.D(), this.f11212b.f());
        }
        return this.f11217g;
    }

    public t h() {
        w g10;
        if (this.f11218h == null) {
            if (this.f11212b.c() != null) {
                g10 = this.f11212b.c();
            } else {
                g10 = g();
            }
            this.f11218h = ma.r.a(g10, this.f11212b.B());
        }
        return this.f11218h;
    }

    public ImagePipeline j() {
        if (f11209r == null) {
            f11209r = a();
        }
        return f11209r;
    }

    public PlatformBitmapFactory m() {
        if (this.f11223m == null) {
            this.f11223m = la.d.a(this.f11212b.t(), n(), f());
        }
        return this.f11223m;
    }

    public xa.d n() {
        if (this.f11224n == null) {
            this.f11224n = xa.e.a(this.f11212b.t(), this.f11212b.G().H(), this.f11212b.G().s(), this.f11212b.G().o());
        }
        return this.f11224n;
    }

    public sa.a q() {
        if (this.f11212b.G().A()) {
            return new cb.a();
        }
        return null;
    }

    public c r() {
        if (this.f11212b.G().A()) {
            return new cb.b(this.f11212b.getContext().getApplicationContext().getResources());
        }
        return null;
    }
}
