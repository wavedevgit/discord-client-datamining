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
    private static final Class f10490p = b.class;

    /* renamed from: q  reason: collision with root package name */
    private static b f10491q;

    /* renamed from: r  reason: collision with root package name */
    private static ImagePipeline f10492r;

    /* renamed from: s  reason: collision with root package name */
    private static boolean f10493s;

    /* renamed from: a  reason: collision with root package name */
    private final h1 f10494a;

    /* renamed from: b  reason: collision with root package name */
    private final r f10495b;

    /* renamed from: c  reason: collision with root package name */
    private final na.a f10496c;

    /* renamed from: d  reason: collision with root package name */
    private final Supplier f10497d;

    /* renamed from: e  reason: collision with root package name */
    private n f10498e;

    /* renamed from: f  reason: collision with root package name */
    private t f10499f;

    /* renamed from: g  reason: collision with root package name */
    private n f10500g;

    /* renamed from: h  reason: collision with root package name */
    private t f10501h;

    /* renamed from: i  reason: collision with root package name */
    private c f10502i;

    /* renamed from: j  reason: collision with root package name */
    private d f10503j;

    /* renamed from: k  reason: collision with root package name */
    private x f10504k;

    /* renamed from: l  reason: collision with root package name */
    private q0 f10505l;

    /* renamed from: m  reason: collision with root package name */
    private PlatformBitmapFactory f10506m;

    /* renamed from: n  reason: collision with root package name */
    private wa.d f10507n;

    /* renamed from: o  reason: collision with root package name */
    private ha.a f10508o;

    public b(r rVar) {
        h1 i1Var;
        if (ya.b.d()) {
            ya.b.a("ImagePipelineConfig()");
        }
        r rVar2 = (r) j.g(rVar);
        this.f10495b = rVar2;
        if (rVar2.G().G()) {
            i1Var = new a0(rVar.H().a());
        } else {
            i1Var = new i1(rVar.H().a());
        }
        this.f10494a = i1Var;
        this.f10496c = new na.a(rVar.w());
        if (ya.b.d()) {
            ya.b.b();
        }
        this.f10497d = rVar2.v();
        if (rVar2.G().A()) {
            e.e().g(true);
        }
    }

    private ImagePipeline a() {
        q0 p10 = p();
        Set e10 = this.f10495b.e();
        Set a10 = this.f10495b.a();
        Supplier C = this.f10495b.C();
        t e11 = e();
        t h10 = h();
        Supplier supplier = this.f10497d;
        k y10 = this.f10495b.y();
        h1 h1Var = this.f10494a;
        Supplier t10 = this.f10495b.G().t();
        Supplier I = this.f10495b.G().I();
        this.f10495b.F();
        return new ImagePipeline(p10, e10, a10, C, e11, h10, supplier, y10, h1Var, t10, I, null, this.f10495b);
    }

    private ha.a c() {
        if (this.f10508o == null) {
            this.f10508o = ha.b.a(m(), this.f10495b.H(), d(), this.f10495b.G().j(), this.f10495b.G().v(), this.f10495b.G().c(), this.f10495b.G().d(), this.f10495b.l());
        }
        return this.f10508o;
    }

    private c i() {
        c cVar;
        c cVar2;
        if (this.f10502i == null) {
            if (this.f10495b.r() != null) {
                this.f10502i = this.f10495b.r();
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
                this.f10495b.o();
                this.f10502i = new qa.b(cVar, cVar2, r10, n());
            }
        }
        return this.f10502i;
    }

    private d k() {
        if (this.f10503j == null) {
            if (this.f10495b.n() == null && this.f10495b.m() == null && this.f10495b.G().J()) {
                this.f10503j = new h(this.f10495b.G().m());
            } else {
                this.f10503j = new f(this.f10495b.G().m(), this.f10495b.G().x(), this.f10495b.n(), this.f10495b.m(), this.f10495b.G().F());
            }
        }
        return this.f10503j;
    }

    public static b l() {
        return (b) j.h(f10491q, "ImagePipelineFactory was not initialized!");
    }

    private x o() {
        if (this.f10504k == null) {
            this.f10504k = this.f10495b.G().p().a(this.f10495b.getContext(), this.f10495b.t().k(), i(), this.f10495b.h(), this.f10495b.E(), this.f10495b.z(), this.f10495b.G().B(), this.f10495b.H(), this.f10495b.t().i(this.f10495b.u()), this.f10495b.t().j(), e(), h(), this.f10497d, this.f10495b.y(), m(), this.f10495b.G().g(), this.f10495b.G().f(), this.f10495b.G().e(), this.f10495b.G().m(), f(), this.f10495b.G().l(), this.f10495b.G().u());
        }
        return this.f10504k;
    }

    private q0 p() {
        boolean w10 = this.f10495b.G().w();
        if (this.f10505l == null) {
            this.f10505l = new q0(this.f10495b.getContext().getApplicationContext().getContentResolver(), o(), this.f10495b.b(), this.f10495b.z(), this.f10495b.G().L(), this.f10494a, this.f10495b.E(), w10, this.f10495b.G().K(), this.f10495b.p(), k(), this.f10495b.G().E(), this.f10495b.G().C(), this.f10495b.G().a(), this.f10495b.A());
        }
        return this.f10505l;
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
            if (f10491q != null) {
                p8.a.F(f10490p, "ImagePipelineFactory has already been initialized! `ImagePipelineFactory.initialize(...)` should only be called once to avoid unexpected behavior.");
                if (f10493s) {
                    return;
                }
            }
            f10491q = new b(rVar);
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
        if (this.f10498e == null) {
            this.f10498e = this.f10495b.x().a(this.f10495b.q(), this.f10495b.D(), this.f10495b.g(), this.f10495b.G().r(), this.f10495b.G().q(), this.f10495b.k());
        }
        return this.f10498e;
    }

    public t e() {
        if (this.f10499f == null) {
            this.f10499f = u.a(d(), this.f10495b.B());
        }
        return this.f10499f;
    }

    public na.a f() {
        return this.f10496c;
    }

    public n g() {
        if (this.f10500g == null) {
            this.f10500g = q.a(this.f10495b.s(), this.f10495b.D(), this.f10495b.f());
        }
        return this.f10500g;
    }

    public t h() {
        w g10;
        if (this.f10501h == null) {
            if (this.f10495b.c() != null) {
                g10 = this.f10495b.c();
            } else {
                g10 = g();
            }
            this.f10501h = la.r.a(g10, this.f10495b.B());
        }
        return this.f10501h;
    }

    public ImagePipeline j() {
        if (f10492r == null) {
            f10492r = a();
        }
        return f10492r;
    }

    public PlatformBitmapFactory m() {
        if (this.f10506m == null) {
            this.f10506m = ka.d.a(this.f10495b.t(), n(), f());
        }
        return this.f10506m;
    }

    public wa.d n() {
        if (this.f10507n == null) {
            this.f10507n = wa.e.a(this.f10495b.t(), this.f10495b.G().H(), this.f10495b.G().s(), this.f10495b.G().o());
        }
        return this.f10507n;
    }

    public ra.a q() {
        if (this.f10495b.G().A()) {
            return new bb.a();
        }
        return null;
    }

    public c r() {
        if (this.f10495b.G().A()) {
            return new bb.b(this.f10495b.getContext().getApplicationContext().getResources());
        }
        return null;
    }
}
