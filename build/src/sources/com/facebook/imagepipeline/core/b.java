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
    private static final Class f10206p = b.class;

    /* renamed from: q  reason: collision with root package name */
    private static b f10207q;

    /* renamed from: r  reason: collision with root package name */
    private static ImagePipeline f10208r;

    /* renamed from: s  reason: collision with root package name */
    private static boolean f10209s;

    /* renamed from: a  reason: collision with root package name */
    private final h1 f10210a;

    /* renamed from: b  reason: collision with root package name */
    private final r f10211b;

    /* renamed from: c  reason: collision with root package name */
    private final na.a f10212c;

    /* renamed from: d  reason: collision with root package name */
    private final Supplier f10213d;

    /* renamed from: e  reason: collision with root package name */
    private n f10214e;

    /* renamed from: f  reason: collision with root package name */
    private t f10215f;

    /* renamed from: g  reason: collision with root package name */
    private n f10216g;

    /* renamed from: h  reason: collision with root package name */
    private t f10217h;

    /* renamed from: i  reason: collision with root package name */
    private c f10218i;

    /* renamed from: j  reason: collision with root package name */
    private d f10219j;

    /* renamed from: k  reason: collision with root package name */
    private x f10220k;

    /* renamed from: l  reason: collision with root package name */
    private q0 f10221l;

    /* renamed from: m  reason: collision with root package name */
    private PlatformBitmapFactory f10222m;

    /* renamed from: n  reason: collision with root package name */
    private wa.d f10223n;

    /* renamed from: o  reason: collision with root package name */
    private ha.a f10224o;

    public b(r rVar) {
        h1 i1Var;
        if (ya.b.d()) {
            ya.b.a("ImagePipelineConfig()");
        }
        r rVar2 = (r) j.g(rVar);
        this.f10211b = rVar2;
        if (rVar2.G().G()) {
            i1Var = new a0(rVar.H().a());
        } else {
            i1Var = new i1(rVar.H().a());
        }
        this.f10210a = i1Var;
        this.f10212c = new na.a(rVar.w());
        if (ya.b.d()) {
            ya.b.b();
        }
        this.f10213d = rVar2.v();
        if (rVar2.G().A()) {
            e.e().g(true);
        }
    }

    private ImagePipeline a() {
        q0 p10 = p();
        Set e10 = this.f10211b.e();
        Set a10 = this.f10211b.a();
        Supplier C = this.f10211b.C();
        t e11 = e();
        t h10 = h();
        Supplier supplier = this.f10213d;
        k y10 = this.f10211b.y();
        h1 h1Var = this.f10210a;
        Supplier t10 = this.f10211b.G().t();
        Supplier I = this.f10211b.G().I();
        this.f10211b.F();
        return new ImagePipeline(p10, e10, a10, C, e11, h10, supplier, y10, h1Var, t10, I, null, this.f10211b);
    }

    private ha.a c() {
        if (this.f10224o == null) {
            this.f10224o = ha.b.a(m(), this.f10211b.H(), d(), this.f10211b.G().j(), this.f10211b.G().v(), this.f10211b.G().c(), this.f10211b.G().d(), this.f10211b.l());
        }
        return this.f10224o;
    }

    private c i() {
        c cVar;
        c cVar2;
        if (this.f10218i == null) {
            if (this.f10211b.r() != null) {
                this.f10218i = this.f10211b.r();
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
                this.f10211b.o();
                this.f10218i = new qa.b(cVar, cVar2, r10, n());
            }
        }
        return this.f10218i;
    }

    private d k() {
        if (this.f10219j == null) {
            if (this.f10211b.n() == null && this.f10211b.m() == null && this.f10211b.G().J()) {
                this.f10219j = new h(this.f10211b.G().m());
            } else {
                this.f10219j = new f(this.f10211b.G().m(), this.f10211b.G().x(), this.f10211b.n(), this.f10211b.m(), this.f10211b.G().F());
            }
        }
        return this.f10219j;
    }

    public static b l() {
        return (b) j.h(f10207q, "ImagePipelineFactory was not initialized!");
    }

    private x o() {
        if (this.f10220k == null) {
            this.f10220k = this.f10211b.G().p().a(this.f10211b.getContext(), this.f10211b.t().k(), i(), this.f10211b.h(), this.f10211b.E(), this.f10211b.z(), this.f10211b.G().B(), this.f10211b.H(), this.f10211b.t().i(this.f10211b.u()), this.f10211b.t().j(), e(), h(), this.f10213d, this.f10211b.y(), m(), this.f10211b.G().g(), this.f10211b.G().f(), this.f10211b.G().e(), this.f10211b.G().m(), f(), this.f10211b.G().l(), this.f10211b.G().u());
        }
        return this.f10220k;
    }

    private q0 p() {
        boolean w10 = this.f10211b.G().w();
        if (this.f10221l == null) {
            this.f10221l = new q0(this.f10211b.getContext().getApplicationContext().getContentResolver(), o(), this.f10211b.b(), this.f10211b.z(), this.f10211b.G().L(), this.f10210a, this.f10211b.E(), w10, this.f10211b.G().K(), this.f10211b.p(), k(), this.f10211b.G().E(), this.f10211b.G().C(), this.f10211b.G().a(), this.f10211b.A());
        }
        return this.f10221l;
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
            if (f10207q != null) {
                p8.a.F(f10206p, "ImagePipelineFactory has already been initialized! `ImagePipelineFactory.initialize(...)` should only be called once to avoid unexpected behavior.");
                if (f10209s) {
                    return;
                }
            }
            f10207q = new b(rVar);
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
        if (this.f10214e == null) {
            this.f10214e = this.f10211b.x().a(this.f10211b.q(), this.f10211b.D(), this.f10211b.g(), this.f10211b.G().r(), this.f10211b.G().q(), this.f10211b.k());
        }
        return this.f10214e;
    }

    public t e() {
        if (this.f10215f == null) {
            this.f10215f = u.a(d(), this.f10211b.B());
        }
        return this.f10215f;
    }

    public na.a f() {
        return this.f10212c;
    }

    public n g() {
        if (this.f10216g == null) {
            this.f10216g = q.a(this.f10211b.s(), this.f10211b.D(), this.f10211b.f());
        }
        return this.f10216g;
    }

    public t h() {
        w g10;
        if (this.f10217h == null) {
            if (this.f10211b.c() != null) {
                g10 = this.f10211b.c();
            } else {
                g10 = g();
            }
            this.f10217h = la.r.a(g10, this.f10211b.B());
        }
        return this.f10217h;
    }

    public ImagePipeline j() {
        if (f10208r == null) {
            f10208r = a();
        }
        return f10208r;
    }

    public PlatformBitmapFactory m() {
        if (this.f10222m == null) {
            this.f10222m = ka.d.a(this.f10211b.t(), n(), f());
        }
        return this.f10222m;
    }

    public wa.d n() {
        if (this.f10223n == null) {
            this.f10223n = wa.e.a(this.f10211b.t(), this.f10211b.G().H(), this.f10211b.G().s(), this.f10211b.G().o());
        }
        return this.f10223n;
    }

    public ra.a q() {
        if (this.f10211b.G().A()) {
            return new bb.a();
        }
        return null;
    }

    public c r() {
        if (this.f10211b.G().A()) {
            return new bb.b(this.f10211b.getContext().getApplicationContext().getResources());
        }
        return null;
    }
}
