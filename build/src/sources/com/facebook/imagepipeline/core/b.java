package com.facebook.imagepipeline.core;

import android.content.Context;
import com.facebook.common.internal.Supplier;
import com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
import com.facebook.imagepipeline.producers.a0;
import com.facebook.imagepipeline.producers.h1;
import com.facebook.imagepipeline.producers.i1;
import fa.e;
import java.util.Set;
import la.k;
import la.n;
import la.q;
import la.t;
import la.u;
import la.w;
import na.q0;
import na.r;
import na.x;
import o8.j;
import qa.c;
import za.d;
import za.f;
import za.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b {

    /* renamed from: p  reason: collision with root package name */
    private static final Class f11609p = b.class;

    /* renamed from: q  reason: collision with root package name */
    private static b f11610q;

    /* renamed from: r  reason: collision with root package name */
    private static ImagePipeline f11611r;

    /* renamed from: s  reason: collision with root package name */
    private static boolean f11612s;

    /* renamed from: a  reason: collision with root package name */
    private final h1 f11613a;

    /* renamed from: b  reason: collision with root package name */
    private final r f11614b;

    /* renamed from: c  reason: collision with root package name */
    private final na.a f11615c;

    /* renamed from: d  reason: collision with root package name */
    private final Supplier f11616d;

    /* renamed from: e  reason: collision with root package name */
    private n f11617e;

    /* renamed from: f  reason: collision with root package name */
    private t f11618f;

    /* renamed from: g  reason: collision with root package name */
    private n f11619g;

    /* renamed from: h  reason: collision with root package name */
    private t f11620h;

    /* renamed from: i  reason: collision with root package name */
    private c f11621i;

    /* renamed from: j  reason: collision with root package name */
    private d f11622j;

    /* renamed from: k  reason: collision with root package name */
    private x f11623k;

    /* renamed from: l  reason: collision with root package name */
    private q0 f11624l;

    /* renamed from: m  reason: collision with root package name */
    private PlatformBitmapFactory f11625m;

    /* renamed from: n  reason: collision with root package name */
    private wa.d f11626n;

    /* renamed from: o  reason: collision with root package name */
    private ha.a f11627o;

    public b(r rVar) {
        h1 i1Var;
        if (ya.b.d()) {
            ya.b.a("ImagePipelineConfig()");
        }
        r rVar2 = (r) j.g(rVar);
        this.f11614b = rVar2;
        if (rVar2.G().G()) {
            i1Var = new a0(rVar.H().a());
        } else {
            i1Var = new i1(rVar.H().a());
        }
        this.f11613a = i1Var;
        this.f11615c = new na.a(rVar.w());
        if (ya.b.d()) {
            ya.b.b();
        }
        this.f11616d = rVar2.v();
        if (rVar2.G().A()) {
            e.e().g(true);
        }
    }

    private ImagePipeline a() {
        q0 p10 = p();
        Set e10 = this.f11614b.e();
        Set a10 = this.f11614b.a();
        Supplier C = this.f11614b.C();
        t e11 = e();
        t h10 = h();
        Supplier supplier = this.f11616d;
        k y10 = this.f11614b.y();
        h1 h1Var = this.f11613a;
        Supplier t10 = this.f11614b.G().t();
        Supplier I = this.f11614b.G().I();
        this.f11614b.F();
        return new ImagePipeline(p10, e10, a10, C, e11, h10, supplier, y10, h1Var, t10, I, null, this.f11614b);
    }

    private ha.a c() {
        if (this.f11627o == null) {
            this.f11627o = ha.b.a(m(), this.f11614b.H(), d(), this.f11614b.G().j(), this.f11614b.G().v(), this.f11614b.G().c(), this.f11614b.G().d(), this.f11614b.l());
        }
        return this.f11627o;
    }

    private c i() {
        c cVar;
        c cVar2;
        if (this.f11621i == null) {
            if (this.f11614b.r() != null) {
                this.f11621i = this.f11614b.r();
            } else {
                ha.a c10 = c();
                if (c10 != null) {
                    cVar = c10.c();
                    cVar2 = c10.b();
                } else {
                    cVar = null;
                    cVar2 = null;
                }
                c r10 = r();
                this.f11614b.o();
                this.f11621i = new qa.b(cVar, cVar2, r10, n());
            }
        }
        return this.f11621i;
    }

    private d k() {
        if (this.f11622j == null) {
            if (this.f11614b.n() == null && this.f11614b.m() == null && this.f11614b.G().J()) {
                this.f11622j = new h(this.f11614b.G().m());
            } else {
                this.f11622j = new f(this.f11614b.G().m(), this.f11614b.G().x(), this.f11614b.n(), this.f11614b.m(), this.f11614b.G().F());
            }
        }
        return this.f11622j;
    }

    public static b l() {
        return (b) j.h(f11610q, "ImagePipelineFactory was not initialized!");
    }

    private x o() {
        if (this.f11623k == null) {
            this.f11623k = this.f11614b.G().p().a(this.f11614b.getContext(), this.f11614b.t().k(), i(), this.f11614b.h(), this.f11614b.E(), this.f11614b.z(), this.f11614b.G().B(), this.f11614b.H(), this.f11614b.t().i(this.f11614b.u()), this.f11614b.t().j(), e(), h(), this.f11616d, this.f11614b.y(), m(), this.f11614b.G().g(), this.f11614b.G().f(), this.f11614b.G().e(), this.f11614b.G().m(), f(), this.f11614b.G().l(), this.f11614b.G().u());
        }
        return this.f11623k;
    }

    private q0 p() {
        boolean w10 = this.f11614b.G().w();
        if (this.f11624l == null) {
            this.f11624l = new q0(this.f11614b.getContext().getApplicationContext().getContentResolver(), o(), this.f11614b.b(), this.f11614b.z(), this.f11614b.G().L(), this.f11613a, this.f11614b.E(), w10, this.f11614b.G().K(), this.f11614b.p(), k(), this.f11614b.G().E(), this.f11614b.G().C(), this.f11614b.G().a(), this.f11614b.A());
        }
        return this.f11624l;
    }

    public static synchronized void s(Context context) {
        synchronized (b.class) {
            try {
                if (ya.b.d()) {
                    ya.b.a("ImagePipelineFactory#initialize");
                }
                t(ImagePipelineConfig.K(context).a());
                if (ya.b.d()) {
                    ya.b.b();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public static synchronized void t(r rVar) {
        synchronized (b.class) {
            if (f11610q != null) {
                p8.a.F(f11609p, "ImagePipelineFactory has already been initialized! `ImagePipelineFactory.initialize(...)` should only be called once to avoid unexpected behavior.");
                if (f11612s) {
                    return;
                }
            }
            f11610q = new b(rVar);
        }
    }

    public ra.a b(Context context) {
        ha.a c10 = c();
        if (c10 == null) {
            return null;
        }
        return c10.a(context);
    }

    public n d() {
        if (this.f11617e == null) {
            this.f11617e = this.f11614b.x().a(this.f11614b.q(), this.f11614b.D(), this.f11614b.g(), this.f11614b.G().r(), this.f11614b.G().q(), this.f11614b.k());
        }
        return this.f11617e;
    }

    public t e() {
        if (this.f11618f == null) {
            this.f11618f = u.a(d(), this.f11614b.B());
        }
        return this.f11618f;
    }

    public na.a f() {
        return this.f11615c;
    }

    public n g() {
        if (this.f11619g == null) {
            this.f11619g = q.a(this.f11614b.s(), this.f11614b.D(), this.f11614b.f());
        }
        return this.f11619g;
    }

    public t h() {
        w g10;
        if (this.f11620h == null) {
            if (this.f11614b.c() != null) {
                g10 = this.f11614b.c();
            } else {
                g10 = g();
            }
            this.f11620h = la.r.a(g10, this.f11614b.B());
        }
        return this.f11620h;
    }

    public ImagePipeline j() {
        if (f11611r == null) {
            f11611r = a();
        }
        return f11611r;
    }

    public PlatformBitmapFactory m() {
        if (this.f11625m == null) {
            this.f11625m = ka.d.a(this.f11614b.t(), n(), f());
        }
        return this.f11625m;
    }

    public wa.d n() {
        if (this.f11626n == null) {
            this.f11626n = wa.e.a(this.f11614b.t(), this.f11614b.G().H(), this.f11614b.G().s(), this.f11614b.G().o());
        }
        return this.f11626n;
    }

    public ra.a q() {
        if (this.f11614b.G().A()) {
            return new bb.a();
        }
        return null;
    }

    public c r() {
        if (this.f11614b.G().A()) {
            return new bb.b(this.f11614b.getContext().getApplicationContext().getResources());
        }
        return null;
    }
}
