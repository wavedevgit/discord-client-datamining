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
    private static final Class f10591p = b.class;

    /* renamed from: q  reason: collision with root package name */
    private static b f10592q;

    /* renamed from: r  reason: collision with root package name */
    private static ImagePipeline f10593r;

    /* renamed from: s  reason: collision with root package name */
    private static boolean f10594s;

    /* renamed from: a  reason: collision with root package name */
    private final h1 f10595a;

    /* renamed from: b  reason: collision with root package name */
    private final r f10596b;

    /* renamed from: c  reason: collision with root package name */
    private final na.a f10597c;

    /* renamed from: d  reason: collision with root package name */
    private final Supplier f10598d;

    /* renamed from: e  reason: collision with root package name */
    private n f10599e;

    /* renamed from: f  reason: collision with root package name */
    private t f10600f;

    /* renamed from: g  reason: collision with root package name */
    private n f10601g;

    /* renamed from: h  reason: collision with root package name */
    private t f10602h;

    /* renamed from: i  reason: collision with root package name */
    private c f10603i;

    /* renamed from: j  reason: collision with root package name */
    private d f10604j;

    /* renamed from: k  reason: collision with root package name */
    private x f10605k;

    /* renamed from: l  reason: collision with root package name */
    private q0 f10606l;

    /* renamed from: m  reason: collision with root package name */
    private PlatformBitmapFactory f10607m;

    /* renamed from: n  reason: collision with root package name */
    private wa.d f10608n;

    /* renamed from: o  reason: collision with root package name */
    private ha.a f10609o;

    public b(r rVar) {
        h1 i1Var;
        if (ya.b.d()) {
            ya.b.a("ImagePipelineConfig()");
        }
        r rVar2 = (r) j.g(rVar);
        this.f10596b = rVar2;
        if (rVar2.G().G()) {
            i1Var = new a0(rVar.H().a());
        } else {
            i1Var = new i1(rVar.H().a());
        }
        this.f10595a = i1Var;
        this.f10597c = new na.a(rVar.w());
        if (ya.b.d()) {
            ya.b.b();
        }
        this.f10598d = rVar2.v();
        if (rVar2.G().A()) {
            e.e().g(true);
        }
    }

    private ImagePipeline a() {
        q0 p10 = p();
        Set e10 = this.f10596b.e();
        Set a10 = this.f10596b.a();
        Supplier C = this.f10596b.C();
        t e11 = e();
        t h10 = h();
        Supplier supplier = this.f10598d;
        k y10 = this.f10596b.y();
        h1 h1Var = this.f10595a;
        Supplier t10 = this.f10596b.G().t();
        Supplier I = this.f10596b.G().I();
        this.f10596b.F();
        return new ImagePipeline(p10, e10, a10, C, e11, h10, supplier, y10, h1Var, t10, I, null, this.f10596b);
    }

    private ha.a c() {
        if (this.f10609o == null) {
            this.f10609o = ha.b.a(m(), this.f10596b.H(), d(), this.f10596b.G().j(), this.f10596b.G().v(), this.f10596b.G().c(), this.f10596b.G().d(), this.f10596b.l());
        }
        return this.f10609o;
    }

    private c i() {
        c cVar;
        c cVar2;
        if (this.f10603i == null) {
            if (this.f10596b.r() != null) {
                this.f10603i = this.f10596b.r();
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
                this.f10596b.o();
                this.f10603i = new qa.b(cVar, cVar2, r10, n());
            }
        }
        return this.f10603i;
    }

    private d k() {
        if (this.f10604j == null) {
            if (this.f10596b.n() == null && this.f10596b.m() == null && this.f10596b.G().J()) {
                this.f10604j = new h(this.f10596b.G().m());
            } else {
                this.f10604j = new f(this.f10596b.G().m(), this.f10596b.G().x(), this.f10596b.n(), this.f10596b.m(), this.f10596b.G().F());
            }
        }
        return this.f10604j;
    }

    public static b l() {
        return (b) j.h(f10592q, "ImagePipelineFactory was not initialized!");
    }

    private x o() {
        if (this.f10605k == null) {
            this.f10605k = this.f10596b.G().p().a(this.f10596b.getContext(), this.f10596b.t().k(), i(), this.f10596b.h(), this.f10596b.E(), this.f10596b.z(), this.f10596b.G().B(), this.f10596b.H(), this.f10596b.t().i(this.f10596b.u()), this.f10596b.t().j(), e(), h(), this.f10598d, this.f10596b.y(), m(), this.f10596b.G().g(), this.f10596b.G().f(), this.f10596b.G().e(), this.f10596b.G().m(), f(), this.f10596b.G().l(), this.f10596b.G().u());
        }
        return this.f10605k;
    }

    private q0 p() {
        boolean w10 = this.f10596b.G().w();
        if (this.f10606l == null) {
            this.f10606l = new q0(this.f10596b.getContext().getApplicationContext().getContentResolver(), o(), this.f10596b.b(), this.f10596b.z(), this.f10596b.G().L(), this.f10595a, this.f10596b.E(), w10, this.f10596b.G().K(), this.f10596b.p(), k(), this.f10596b.G().E(), this.f10596b.G().C(), this.f10596b.G().a(), this.f10596b.A());
        }
        return this.f10606l;
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
            if (f10592q != null) {
                p8.a.F(f10591p, "ImagePipelineFactory has already been initialized! `ImagePipelineFactory.initialize(...)` should only be called once to avoid unexpected behavior.");
                if (f10594s) {
                    return;
                }
            }
            f10592q = new b(rVar);
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
        if (this.f10599e == null) {
            this.f10599e = this.f10596b.x().a(this.f10596b.q(), this.f10596b.D(), this.f10596b.g(), this.f10596b.G().r(), this.f10596b.G().q(), this.f10596b.k());
        }
        return this.f10599e;
    }

    public t e() {
        if (this.f10600f == null) {
            this.f10600f = u.a(d(), this.f10596b.B());
        }
        return this.f10600f;
    }

    public na.a f() {
        return this.f10597c;
    }

    public n g() {
        if (this.f10601g == null) {
            this.f10601g = q.a(this.f10596b.s(), this.f10596b.D(), this.f10596b.f());
        }
        return this.f10601g;
    }

    public t h() {
        w g10;
        if (this.f10602h == null) {
            if (this.f10596b.c() != null) {
                g10 = this.f10596b.c();
            } else {
                g10 = g();
            }
            this.f10602h = la.r.a(g10, this.f10596b.B());
        }
        return this.f10602h;
    }

    public ImagePipeline j() {
        if (f10593r == null) {
            f10593r = a();
        }
        return f10593r;
    }

    public PlatformBitmapFactory m() {
        if (this.f10607m == null) {
            this.f10607m = ka.d.a(this.f10596b.t(), n(), f());
        }
        return this.f10607m;
    }

    public wa.d n() {
        if (this.f10608n == null) {
            this.f10608n = wa.e.a(this.f10596b.t(), this.f10596b.G().H(), this.f10596b.G().s(), this.f10596b.G().o());
        }
        return this.f10608n;
    }

    public ra.a q() {
        if (this.f10596b.G().A()) {
            return new bb.a();
        }
        return null;
    }

    public c r() {
        if (this.f10596b.G().A()) {
            return new bb.b(this.f10596b.getContext().getApplicationContext().getResources());
        }
        return null;
    }
}
