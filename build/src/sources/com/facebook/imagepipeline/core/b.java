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
    private static final Class f10630p = b.class;

    /* renamed from: q  reason: collision with root package name */
    private static b f10631q;

    /* renamed from: r  reason: collision with root package name */
    private static ImagePipeline f10632r;

    /* renamed from: s  reason: collision with root package name */
    private static boolean f10633s;

    /* renamed from: a  reason: collision with root package name */
    private final h1 f10634a;

    /* renamed from: b  reason: collision with root package name */
    private final r f10635b;

    /* renamed from: c  reason: collision with root package name */
    private final oa.a f10636c;

    /* renamed from: d  reason: collision with root package name */
    private final Supplier f10637d;

    /* renamed from: e  reason: collision with root package name */
    private n f10638e;

    /* renamed from: f  reason: collision with root package name */
    private t f10639f;

    /* renamed from: g  reason: collision with root package name */
    private n f10640g;

    /* renamed from: h  reason: collision with root package name */
    private t f10641h;

    /* renamed from: i  reason: collision with root package name */
    private c f10642i;

    /* renamed from: j  reason: collision with root package name */
    private d f10643j;

    /* renamed from: k  reason: collision with root package name */
    private x f10644k;

    /* renamed from: l  reason: collision with root package name */
    private q0 f10645l;

    /* renamed from: m  reason: collision with root package name */
    private PlatformBitmapFactory f10646m;

    /* renamed from: n  reason: collision with root package name */
    private xa.d f10647n;

    /* renamed from: o  reason: collision with root package name */
    private ia.a f10648o;

    public b(r rVar) {
        h1 i1Var;
        if (za.b.d()) {
            za.b.a("ImagePipelineConfig()");
        }
        r rVar2 = (r) j.g(rVar);
        this.f10635b = rVar2;
        if (rVar2.G().G()) {
            i1Var = new a0(rVar.H().a());
        } else {
            i1Var = new i1(rVar.H().a());
        }
        this.f10634a = i1Var;
        this.f10636c = new oa.a(rVar.w());
        if (za.b.d()) {
            za.b.b();
        }
        this.f10637d = rVar2.v();
        if (rVar2.G().A()) {
            e.e().g(true);
        }
    }

    private ImagePipeline a() {
        q0 p10 = p();
        Set e10 = this.f10635b.e();
        Set a10 = this.f10635b.a();
        Supplier C = this.f10635b.C();
        t e11 = e();
        t h10 = h();
        Supplier supplier = this.f10637d;
        k y10 = this.f10635b.y();
        h1 h1Var = this.f10634a;
        Supplier t10 = this.f10635b.G().t();
        Supplier I = this.f10635b.G().I();
        this.f10635b.F();
        return new ImagePipeline(p10, e10, a10, C, e11, h10, supplier, y10, h1Var, t10, I, null, this.f10635b);
    }

    private ia.a c() {
        if (this.f10648o == null) {
            this.f10648o = ia.b.a(m(), this.f10635b.H(), d(), this.f10635b.G().j(), this.f10635b.G().v(), this.f10635b.G().c(), this.f10635b.G().d(), this.f10635b.l());
        }
        return this.f10648o;
    }

    private c i() {
        c cVar;
        c cVar2;
        if (this.f10642i == null) {
            if (this.f10635b.r() != null) {
                this.f10642i = this.f10635b.r();
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
                this.f10635b.o();
                this.f10642i = new ra.b(cVar, cVar2, r10, n());
            }
        }
        return this.f10642i;
    }

    private d k() {
        if (this.f10643j == null) {
            if (this.f10635b.n() == null && this.f10635b.m() == null && this.f10635b.G().J()) {
                this.f10643j = new h(this.f10635b.G().m());
            } else {
                this.f10643j = new f(this.f10635b.G().m(), this.f10635b.G().x(), this.f10635b.n(), this.f10635b.m(), this.f10635b.G().F());
            }
        }
        return this.f10643j;
    }

    public static b l() {
        return (b) j.h(f10631q, "ImagePipelineFactory was not initialized!");
    }

    private x o() {
        if (this.f10644k == null) {
            this.f10644k = this.f10635b.G().p().a(this.f10635b.getContext(), this.f10635b.t().k(), i(), this.f10635b.h(), this.f10635b.E(), this.f10635b.z(), this.f10635b.G().B(), this.f10635b.H(), this.f10635b.t().i(this.f10635b.u()), this.f10635b.t().j(), e(), h(), this.f10637d, this.f10635b.y(), m(), this.f10635b.G().g(), this.f10635b.G().f(), this.f10635b.G().e(), this.f10635b.G().m(), f(), this.f10635b.G().l(), this.f10635b.G().u());
        }
        return this.f10644k;
    }

    private q0 p() {
        boolean w10 = this.f10635b.G().w();
        if (this.f10645l == null) {
            this.f10645l = new q0(this.f10635b.getContext().getApplicationContext().getContentResolver(), o(), this.f10635b.b(), this.f10635b.z(), this.f10635b.G().L(), this.f10634a, this.f10635b.E(), w10, this.f10635b.G().K(), this.f10635b.p(), k(), this.f10635b.G().E(), this.f10635b.G().C(), this.f10635b.G().a(), this.f10635b.A());
        }
        return this.f10645l;
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
            if (f10631q != null) {
                q8.a.F(f10630p, "ImagePipelineFactory has already been initialized! `ImagePipelineFactory.initialize(...)` should only be called once to avoid unexpected behavior.");
                if (f10633s) {
                    return;
                }
            }
            f10631q = new b(rVar);
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
        if (this.f10638e == null) {
            this.f10638e = this.f10635b.x().a(this.f10635b.q(), this.f10635b.D(), this.f10635b.g(), this.f10635b.G().r(), this.f10635b.G().q(), this.f10635b.k());
        }
        return this.f10638e;
    }

    public t e() {
        if (this.f10639f == null) {
            this.f10639f = u.a(d(), this.f10635b.B());
        }
        return this.f10639f;
    }

    public oa.a f() {
        return this.f10636c;
    }

    public n g() {
        if (this.f10640g == null) {
            this.f10640g = q.a(this.f10635b.s(), this.f10635b.D(), this.f10635b.f());
        }
        return this.f10640g;
    }

    public t h() {
        w g10;
        if (this.f10641h == null) {
            if (this.f10635b.c() != null) {
                g10 = this.f10635b.c();
            } else {
                g10 = g();
            }
            this.f10641h = ma.r.a(g10, this.f10635b.B());
        }
        return this.f10641h;
    }

    public ImagePipeline j() {
        if (f10632r == null) {
            f10632r = a();
        }
        return f10632r;
    }

    public PlatformBitmapFactory m() {
        if (this.f10646m == null) {
            this.f10646m = la.d.a(this.f10635b.t(), n(), f());
        }
        return this.f10646m;
    }

    public xa.d n() {
        if (this.f10647n == null) {
            this.f10647n = xa.e.a(this.f10635b.t(), this.f10635b.G().H(), this.f10635b.G().s(), this.f10635b.G().o());
        }
        return this.f10647n;
    }

    public sa.a q() {
        if (this.f10635b.G().A()) {
            return new cb.a();
        }
        return null;
    }

    public c r() {
        if (this.f10635b.G().A()) {
            return new cb.b(this.f10635b.getContext().getApplicationContext().getResources());
        }
        return null;
    }
}
