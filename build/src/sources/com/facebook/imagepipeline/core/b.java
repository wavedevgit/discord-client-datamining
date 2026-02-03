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
    private static final Class f11238p = b.class;

    /* renamed from: q  reason: collision with root package name */
    private static b f11239q;

    /* renamed from: r  reason: collision with root package name */
    private static ImagePipeline f11240r;

    /* renamed from: s  reason: collision with root package name */
    private static boolean f11241s;

    /* renamed from: a  reason: collision with root package name */
    private final h1 f11242a;

    /* renamed from: b  reason: collision with root package name */
    private final r f11243b;

    /* renamed from: c  reason: collision with root package name */
    private final na.a f11244c;

    /* renamed from: d  reason: collision with root package name */
    private final Supplier f11245d;

    /* renamed from: e  reason: collision with root package name */
    private n f11246e;

    /* renamed from: f  reason: collision with root package name */
    private t f11247f;

    /* renamed from: g  reason: collision with root package name */
    private n f11248g;

    /* renamed from: h  reason: collision with root package name */
    private t f11249h;

    /* renamed from: i  reason: collision with root package name */
    private c f11250i;

    /* renamed from: j  reason: collision with root package name */
    private d f11251j;

    /* renamed from: k  reason: collision with root package name */
    private x f11252k;

    /* renamed from: l  reason: collision with root package name */
    private q0 f11253l;

    /* renamed from: m  reason: collision with root package name */
    private PlatformBitmapFactory f11254m;

    /* renamed from: n  reason: collision with root package name */
    private wa.d f11255n;

    /* renamed from: o  reason: collision with root package name */
    private ha.a f11256o;

    public b(r rVar) {
        h1 i1Var;
        if (ya.b.d()) {
            ya.b.a("ImagePipelineConfig()");
        }
        r rVar2 = (r) j.g(rVar);
        this.f11243b = rVar2;
        if (rVar2.G().G()) {
            i1Var = new a0(rVar.H().a());
        } else {
            i1Var = new i1(rVar.H().a());
        }
        this.f11242a = i1Var;
        this.f11244c = new na.a(rVar.w());
        if (ya.b.d()) {
            ya.b.b();
        }
        this.f11245d = rVar2.v();
        if (rVar2.G().A()) {
            e.e().g(true);
        }
    }

    private ImagePipeline a() {
        q0 p10 = p();
        Set e10 = this.f11243b.e();
        Set a10 = this.f11243b.a();
        Supplier C = this.f11243b.C();
        t e11 = e();
        t h10 = h();
        Supplier supplier = this.f11245d;
        k y10 = this.f11243b.y();
        h1 h1Var = this.f11242a;
        Supplier t10 = this.f11243b.G().t();
        Supplier I = this.f11243b.G().I();
        this.f11243b.F();
        return new ImagePipeline(p10, e10, a10, C, e11, h10, supplier, y10, h1Var, t10, I, null, this.f11243b);
    }

    private ha.a c() {
        if (this.f11256o == null) {
            this.f11256o = ha.b.a(m(), this.f11243b.H(), d(), this.f11243b.G().j(), this.f11243b.G().v(), this.f11243b.G().c(), this.f11243b.G().d(), this.f11243b.l());
        }
        return this.f11256o;
    }

    private c i() {
        c cVar;
        c cVar2;
        if (this.f11250i == null) {
            if (this.f11243b.r() != null) {
                this.f11250i = this.f11243b.r();
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
                this.f11243b.o();
                this.f11250i = new qa.b(cVar, cVar2, r10, n());
            }
        }
        return this.f11250i;
    }

    private d k() {
        if (this.f11251j == null) {
            if (this.f11243b.n() == null && this.f11243b.m() == null && this.f11243b.G().J()) {
                this.f11251j = new h(this.f11243b.G().m());
            } else {
                this.f11251j = new f(this.f11243b.G().m(), this.f11243b.G().x(), this.f11243b.n(), this.f11243b.m(), this.f11243b.G().F());
            }
        }
        return this.f11251j;
    }

    public static b l() {
        return (b) j.h(f11239q, "ImagePipelineFactory was not initialized!");
    }

    private x o() {
        if (this.f11252k == null) {
            this.f11252k = this.f11243b.G().p().a(this.f11243b.getContext(), this.f11243b.t().k(), i(), this.f11243b.h(), this.f11243b.E(), this.f11243b.z(), this.f11243b.G().B(), this.f11243b.H(), this.f11243b.t().i(this.f11243b.u()), this.f11243b.t().j(), e(), h(), this.f11245d, this.f11243b.y(), m(), this.f11243b.G().g(), this.f11243b.G().f(), this.f11243b.G().e(), this.f11243b.G().m(), f(), this.f11243b.G().l(), this.f11243b.G().u());
        }
        return this.f11252k;
    }

    private q0 p() {
        boolean w10 = this.f11243b.G().w();
        if (this.f11253l == null) {
            this.f11253l = new q0(this.f11243b.getContext().getApplicationContext().getContentResolver(), o(), this.f11243b.b(), this.f11243b.z(), this.f11243b.G().L(), this.f11242a, this.f11243b.E(), w10, this.f11243b.G().K(), this.f11243b.p(), k(), this.f11243b.G().E(), this.f11243b.G().C(), this.f11243b.G().a(), this.f11243b.A());
        }
        return this.f11253l;
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
            if (f11239q != null) {
                p8.a.F(f11238p, "ImagePipelineFactory has already been initialized! `ImagePipelineFactory.initialize(...)` should only be called once to avoid unexpected behavior.");
                if (f11241s) {
                    return;
                }
            }
            f11239q = new b(rVar);
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
        if (this.f11246e == null) {
            this.f11246e = this.f11243b.x().a(this.f11243b.q(), this.f11243b.D(), this.f11243b.g(), this.f11243b.G().r(), this.f11243b.G().q(), this.f11243b.k());
        }
        return this.f11246e;
    }

    public t e() {
        if (this.f11247f == null) {
            this.f11247f = u.a(d(), this.f11243b.B());
        }
        return this.f11247f;
    }

    public na.a f() {
        return this.f11244c;
    }

    public n g() {
        if (this.f11248g == null) {
            this.f11248g = q.a(this.f11243b.s(), this.f11243b.D(), this.f11243b.f());
        }
        return this.f11248g;
    }

    public t h() {
        w g10;
        if (this.f11249h == null) {
            if (this.f11243b.c() != null) {
                g10 = this.f11243b.c();
            } else {
                g10 = g();
            }
            this.f11249h = la.r.a(g10, this.f11243b.B());
        }
        return this.f11249h;
    }

    public ImagePipeline j() {
        if (f11240r == null) {
            f11240r = a();
        }
        return f11240r;
    }

    public PlatformBitmapFactory m() {
        if (this.f11254m == null) {
            this.f11254m = ka.d.a(this.f11243b.t(), n(), f());
        }
        return this.f11254m;
    }

    public wa.d n() {
        if (this.f11255n == null) {
            this.f11255n = wa.e.a(this.f11243b.t(), this.f11243b.G().H(), this.f11243b.G().s(), this.f11243b.G().o());
        }
        return this.f11255n;
    }

    public ra.a q() {
        if (this.f11243b.G().A()) {
            return new bb.a();
        }
        return null;
    }

    public c r() {
        if (this.f11243b.G().A()) {
            return new bb.b(this.f11243b.getContext().getApplicationContext().getResources());
        }
        return null;
    }
}
