package com.withpersona.sdk2.inquiry.internal;

import androidx.activity.result.ActivityResultLauncher;
import com.withpersona.sdk2.inquiry.document.network.a;
import com.withpersona.sdk2.inquiry.document.network.b;
import com.withpersona.sdk2.inquiry.document.network.c;
import com.withpersona.sdk2.inquiry.document.network.d;
import com.withpersona.sdk2.inquiry.governmentid.network.AutoClassifyWorker;
import com.withpersona.sdk2.inquiry.internal.a;
import com.withpersona.sdk2.inquiry.internal.a0;
import com.withpersona.sdk2.inquiry.internal.c;
import com.withpersona.sdk2.inquiry.internal.f;
import com.withpersona.sdk2.inquiry.internal.q;
import com.withpersona.sdk2.inquiry.internal.s;
import com.withpersona.sdk2.inquiry.internal.u;
import com.withpersona.sdk2.inquiry.internal.x;
import com.withpersona.sdk2.inquiry.network.core.NetworkCoreModule;
import com.withpersona.sdk2.inquiry.network.core.NetworkCoreModule_InterceptorFactory;
import com.withpersona.sdk2.inquiry.network.core.NetworkCoreModule_KeyInflectionFactory;
import com.withpersona.sdk2.inquiry.network.core.NetworkCoreModule_MoshiFactory;
import com.withpersona.sdk2.inquiry.network.core.NetworkCoreModule_OkhttpClientFactory;
import com.withpersona.sdk2.inquiry.network.core.NetworkCoreModule_ProvideMoshiJsonAdapterFactoryFactory;
import com.withpersona.sdk2.inquiry.network.core.NetworkCoreModule_ResponseInterceptorFactory;
import com.withpersona.sdk2.inquiry.network.core.NetworkCoreModule_RetrofitFactory;
import com.withpersona.sdk2.inquiry.network.core.NetworkCoreModule_UseServerStylesFactory;
import com.withpersona.sdk2.inquiry.network.dto.NetworkInquiryModule_ProvideMoshiJsonAdapterFactoryFactory;
import com.withpersona.sdk2.inquiry.ui.network.b;
import dp.d0;
import fo.r2;
import fo.v2;
import ho.a;
import hp.o;
import ip.e0;
import ip.j1;
import ip.m;
import ko.e0;
import ko.f0;
import ko.g3;
import ko.j0;
import ko.v0;
import ko.w0;
import mo.m0;
import np.b1;
import np.c1;
import np.d1;
import np.g1;
import np.o1;
import np.q0;
import np.x5;
import pp.c;
import qo.a;
import qq.a1;
import qq.a5;
import qq.b5;
import qq.q1;
import qq.v4;
import qq.y0;
import qq.z0;
import qq.z4;
import ro.f;
import sq.a;
import tq.b;
import vn.b1;
import vn.g0;
import vn.x0;
import vn.z;
import vo.d2;
import vo.i2;
import vo.k2;
import vo.l2;
import vo.m2;
import vo.n2;
import xn.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private NetworkCoreModule f18840a;

        /* renamed from: b  reason: collision with root package name */
        private com.withpersona.sdk2.inquiry.internal.network.f f18841b;

        /* renamed from: c  reason: collision with root package name */
        private dp.o f18842c;

        /* renamed from: d  reason: collision with root package name */
        private vn.n f18843d;

        /* renamed from: e  reason: collision with root package name */
        private dp.u f18844e;

        /* renamed from: f  reason: collision with root package name */
        private xp.a f18845f;

        /* renamed from: g  reason: collision with root package name */
        private vo.l f18846g;

        /* renamed from: h  reason: collision with root package name */
        private dp.b f18847h;

        /* renamed from: i  reason: collision with root package name */
        private dp.g f18848i;

        /* renamed from: j  reason: collision with root package name */
        private lp.f f18849j;

        /* renamed from: k  reason: collision with root package name */
        private hp.g f18850k;

        /* renamed from: l  reason: collision with root package name */
        private tp.b f18851l;

        /* renamed from: m  reason: collision with root package name */
        private zo.c f18852m;

        /* renamed from: n  reason: collision with root package name */
        private sp.v f18853n;

        /* renamed from: o  reason: collision with root package name */
        private vp.a f18854o;

        /* renamed from: p  reason: collision with root package name */
        private com.withpersona.sdk2.inquiry.internal.fallbackmode.a f18855p;

        /* renamed from: q  reason: collision with root package name */
        private wp.f f18856q;

        /* renamed from: r  reason: collision with root package name */
        private dp.a0 f18857r;

        /* renamed from: s  reason: collision with root package name */
        private eo.c f18858s;

        public a a(com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar) {
            this.f18855p = (com.withpersona.sdk2.inquiry.internal.fallbackmode.a) cr.g.b(aVar);
            return this;
        }

        public vo.q b() {
            cr.g.a(this.f18840a, NetworkCoreModule.class);
            cr.g.a(this.f18841b, com.withpersona.sdk2.inquiry.internal.network.f.class);
            cr.g.a(this.f18842c, dp.o.class);
            if (this.f18843d == null) {
                this.f18843d = new vn.n();
            }
            cr.g.a(this.f18844e, dp.u.class);
            cr.g.a(this.f18845f, xp.a.class);
            cr.g.a(this.f18846g, vo.l.class);
            cr.g.a(this.f18847h, dp.b.class);
            cr.g.a(this.f18848i, dp.g.class);
            if (this.f18849j == null) {
                this.f18849j = new lp.f();
            }
            cr.g.a(this.f18850k, hp.g.class);
            cr.g.a(this.f18851l, tp.b.class);
            cr.g.a(this.f18852m, zo.c.class);
            if (this.f18853n == null) {
                this.f18853n = new sp.v();
            }
            if (this.f18854o == null) {
                this.f18854o = new vp.a();
            }
            cr.g.a(this.f18855p, com.withpersona.sdk2.inquiry.internal.fallbackmode.a.class);
            cr.g.a(this.f18856q, wp.f.class);
            cr.g.a(this.f18857r, dp.a0.class);
            if (this.f18858s == null) {
                this.f18858s = new eo.c();
            }
            return new b(this.f18840a, this.f18841b, this.f18842c, this.f18843d, this.f18844e, this.f18845f, this.f18846g, this.f18847h, this.f18848i, this.f18849j, this.f18850k, this.f18851l, this.f18852m, this.f18853n, this.f18854o, this.f18855p, this.f18856q, this.f18857r, this.f18858s);
        }

        public a c(dp.b bVar) {
            this.f18847h = (dp.b) cr.g.b(bVar);
            return this;
        }

        public a d(tp.b bVar) {
            this.f18851l = (tp.b) cr.g.b(bVar);
            return this;
        }

        public a e(dp.g gVar) {
            this.f18848i = (dp.g) cr.g.b(gVar);
            return this;
        }

        public a f(dp.o oVar) {
            this.f18842c = (dp.o) cr.g.b(oVar);
            return this;
        }

        public a g(wp.f fVar) {
            this.f18856q = (wp.f) cr.g.b(fVar);
            return this;
        }

        public a h(zo.c cVar) {
            this.f18852m = (zo.c) cr.g.b(cVar);
            return this;
        }

        public a i(xp.a aVar) {
            this.f18845f = (xp.a) cr.g.b(aVar);
            return this;
        }

        public a j(vo.l lVar) {
            this.f18846g = (vo.l) cr.g.b(lVar);
            return this;
        }

        public a k(com.withpersona.sdk2.inquiry.internal.network.f fVar) {
            this.f18841b = (com.withpersona.sdk2.inquiry.internal.network.f) cr.g.b(fVar);
            return this;
        }

        public a l(NetworkCoreModule networkCoreModule) {
            this.f18840a = (NetworkCoreModule) cr.g.b(networkCoreModule);
            return this;
        }

        public a m(hp.g gVar) {
            this.f18850k = (hp.g) cr.g.b(gVar);
            return this;
        }

        public a n(dp.u uVar) {
            this.f18844e = (dp.u) cr.g.b(uVar);
            return this;
        }

        public a o(dp.a0 a0Var) {
            this.f18857r = (dp.a0) cr.g.b(a0Var);
            return this;
        }

        public a p(sp.v vVar) {
            this.f18853n = (sp.v) cr.g.b(vVar);
            return this;
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements vo.q {
        private cr.h A;
        private cr.h A0;
        private cr.h B;
        private cr.h B0;
        private cr.h C;
        private cr.h C0;
        private cr.h D;
        private cr.h D0;
        private cr.h E;
        private cr.h E0;
        private zo.k F;
        private ip.n F0;
        private cr.h G;
        private cr.h G0;
        private cr.h H;
        private cr.h H0;
        private com.withpersona.sdk2.inquiry.internal.fallbackmode.g I;
        private cr.h I0;
        private cr.h J;
        private f0 J0;
        private cr.h K;
        private cr.h K0;
        private cr.h L;
        private qo.b L0;
        private cr.h M;
        private cr.h M0;
        private cr.h N;
        private cr.h N0;
        private cr.h O;
        private cr.h O0;
        private ep.f P;
        private cr.h P0;
        private cr.h Q;
        private pp.d Q0;
        private cr.h R;
        private cr.h R0;
        private cr.h S;
        private cr.h S0;
        private cr.h T;
        private cr.h T0;
        private cr.h U;
        private c1 U0;
        private vo.d V;
        private cr.h V0;
        private cr.h W;
        private cr.h W0;
        private vo.c X;
        private hp.p X0;
        private cr.h Y;
        private cr.h Y0;
        private cr.h Z;
        private cr.h Z0;

        /* renamed from: a  reason: collision with root package name */
        private final vo.l f18859a;

        /* renamed from: a0  reason: collision with root package name */
        private cr.h f18860a0;

        /* renamed from: a1  reason: collision with root package name */
        private cr.h f18861a1;

        /* renamed from: b  reason: collision with root package name */
        private final xp.a f18862b;

        /* renamed from: b0  reason: collision with root package name */
        private d2 f18863b0;

        /* renamed from: b1  reason: collision with root package name */
        private z0 f18864b1;

        /* renamed from: c  reason: collision with root package name */
        private final vn.n f18865c;

        /* renamed from: c0  reason: collision with root package name */
        private cr.h f18866c0;

        /* renamed from: c1  reason: collision with root package name */
        private cr.h f18867c1;

        /* renamed from: d  reason: collision with root package name */
        private final tp.b f18868d;

        /* renamed from: d0  reason: collision with root package name */
        private k2 f18869d0;

        /* renamed from: d1  reason: collision with root package name */
        private a5 f18870d1;

        /* renamed from: e  reason: collision with root package name */
        private final wp.f f18871e;

        /* renamed from: e0  reason: collision with root package name */
        private cr.h f18872e0;

        /* renamed from: e1  reason: collision with root package name */
        private cr.h f18873e1;

        /* renamed from: f  reason: collision with root package name */
        private final b f18874f;

        /* renamed from: f0  reason: collision with root package name */
        private cr.h f18875f0;

        /* renamed from: f1  reason: collision with root package name */
        private cr.h f18876f1;

        /* renamed from: g  reason: collision with root package name */
        private cr.h f18877g;

        /* renamed from: g0  reason: collision with root package name */
        private cr.h f18878g0;

        /* renamed from: g1  reason: collision with root package name */
        private cr.h f18879g1;

        /* renamed from: h  reason: collision with root package name */
        private cr.h f18880h;

        /* renamed from: h0  reason: collision with root package name */
        private y f18881h0;

        /* renamed from: h1  reason: collision with root package name */
        private cr.h f18882h1;

        /* renamed from: i  reason: collision with root package name */
        private cr.h f18883i;

        /* renamed from: i0  reason: collision with root package name */
        private cr.h f18884i0;

        /* renamed from: i1  reason: collision with root package name */
        private cr.h f18885i1;

        /* renamed from: j  reason: collision with root package name */
        private cr.h f18886j;

        /* renamed from: j0  reason: collision with root package name */
        private n2 f18887j0;

        /* renamed from: j1  reason: collision with root package name */
        private cr.h f18888j1;

        /* renamed from: k  reason: collision with root package name */
        private cr.h f18889k;

        /* renamed from: k0  reason: collision with root package name */
        private cr.h f18890k0;

        /* renamed from: k1  reason: collision with root package name */
        private i2 f18891k1;

        /* renamed from: l  reason: collision with root package name */
        private cr.h f18892l;

        /* renamed from: l0  reason: collision with root package name */
        private vo.i f18893l0;

        /* renamed from: l1  reason: collision with root package name */
        private cr.h f18894l1;

        /* renamed from: m  reason: collision with root package name */
        private cr.h f18895m;

        /* renamed from: m0  reason: collision with root package name */
        private cr.h f18896m0;

        /* renamed from: m1  reason: collision with root package name */
        private cr.h f18897m1;

        /* renamed from: n  reason: collision with root package name */
        private cr.h f18898n;

        /* renamed from: n0  reason: collision with root package name */
        private cr.h f18899n0;

        /* renamed from: n1  reason: collision with root package name */
        private cr.h f18900n1;

        /* renamed from: o  reason: collision with root package name */
        private cr.h f18901o;

        /* renamed from: o0  reason: collision with root package name */
        private cr.h f18902o0;

        /* renamed from: o1  reason: collision with root package name */
        private cr.h f18903o1;

        /* renamed from: p  reason: collision with root package name */
        private cr.h f18904p;

        /* renamed from: p0  reason: collision with root package name */
        private cr.h f18905p0;

        /* renamed from: p1  reason: collision with root package name */
        private cr.h f18906p1;

        /* renamed from: q  reason: collision with root package name */
        private cr.h f18907q;

        /* renamed from: q0  reason: collision with root package name */
        private cr.h f18908q0;

        /* renamed from: q1  reason: collision with root package name */
        private cr.h f18909q1;

        /* renamed from: r  reason: collision with root package name */
        private cr.h f18910r;

        /* renamed from: r0  reason: collision with root package name */
        private cr.h f18911r0;

        /* renamed from: r1  reason: collision with root package name */
        private cr.h f18912r1;

        /* renamed from: s  reason: collision with root package name */
        private cr.h f18913s;

        /* renamed from: s0  reason: collision with root package name */
        private cr.h f18914s0;

        /* renamed from: s1  reason: collision with root package name */
        private cr.h f18915s1;

        /* renamed from: t  reason: collision with root package name */
        private cr.h f18916t;

        /* renamed from: t0  reason: collision with root package name */
        private ro.g f18917t0;

        /* renamed from: t1  reason: collision with root package name */
        private cr.h f18918t1;

        /* renamed from: u  reason: collision with root package name */
        private cr.h f18919u;

        /* renamed from: u0  reason: collision with root package name */
        private cr.h f18920u0;

        /* renamed from: u1  reason: collision with root package name */
        private cr.h f18921u1;

        /* renamed from: v  reason: collision with root package name */
        private cr.h f18922v;

        /* renamed from: v0  reason: collision with root package name */
        private cr.h f18923v0;

        /* renamed from: v1  reason: collision with root package name */
        private cr.h f18924v1;

        /* renamed from: w  reason: collision with root package name */
        private cr.h f18925w;

        /* renamed from: w0  reason: collision with root package name */
        private cr.h f18926w0;

        /* renamed from: x  reason: collision with root package name */
        private cr.h f18927x;

        /* renamed from: x0  reason: collision with root package name */
        private vn.a0 f18928x0;

        /* renamed from: y  reason: collision with root package name */
        private cr.h f18929y;

        /* renamed from: y0  reason: collision with root package name */
        private cr.h f18930y0;

        /* renamed from: z  reason: collision with root package name */
        private cr.h f18931z;

        /* renamed from: z0  reason: collision with root package name */
        private xn.h f18932z0;

        private void A(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, dp.o oVar, vn.n nVar, dp.u uVar, xp.a aVar, vo.l lVar, dp.b bVar, dp.g gVar, lp.f fVar2, hp.g gVar2, tp.b bVar2, zo.c cVar, sp.v vVar, vp.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, wp.f fVar3, dp.a0 a0Var, eo.c cVar2) {
            this.D0 = cr.c.c(dp.x.a(uVar));
            cr.h c10 = cr.c.c(d0.a(a0Var));
            this.E0 = c10;
            ip.n a10 = ip.n.a(c10, this.f18877g);
            this.F0 = a10;
            this.G0 = ip.o.a(a10);
            cr.h c11 = cr.c.c(vn.p.a(nVar));
            this.H0 = c11;
            g0 a11 = g0.a(c11);
            this.I0 = a11;
            f0 a12 = f0.a(this.f18877g, a11, this.f18926w0);
            this.J0 = a12;
            this.K0 = ko.g0.b(a12);
            qo.b a13 = qo.b.a(this.f18877g, this.I0);
            this.L0 = a13;
            this.M0 = qo.c.b(a13);
            this.N0 = cr.c.c(bp.q.a(fVar, this.A));
            this.O0 = cr.c.c(wp.d.a(this.B0));
            cr.h c12 = cr.c.c(bp.m.a(fVar, this.A));
            this.P0 = c12;
            pp.d a14 = pp.d.a(this.f18877g, c12, this.f18905p0, this.f18875f0, this.f18908q0, this.f18914s0);
            this.Q0 = a14;
            this.R0 = pp.e.b(a14);
            this.S0 = cr.c.c(vn.q.a(nVar));
            x0 a15 = x0.a(b1.a(), this.S0);
            this.T0 = a15;
            c1 a16 = c1.a(a15, this.f18926w0);
            this.U0 = a16;
            this.V0 = d1.b(a16);
            cr.h c13 = cr.c.c(hp.j.a(gVar2));
            this.W0 = c13;
            hp.p a17 = hp.p.a(c13, this.f18877g, this.f18901o);
            this.X0 = a17;
            this.Y0 = hp.q.b(a17);
            this.Z0 = cr.c.c(bp.o.a(fVar, this.A));
            cr.h c14 = cr.c.c(dp.e.a(bVar));
            this.f18861a1 = c14;
            this.f18864b1 = z0.a(this.Z0, this.O, c14);
        }

        private void B(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, dp.o oVar, vn.n nVar, dp.u uVar, xp.a aVar, vo.l lVar, dp.b bVar, dp.g gVar, lp.f fVar2, hp.g gVar2, tp.b bVar2, zo.c cVar, sp.v vVar, vp.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, wp.f fVar3, dp.a0 a0Var, eo.c cVar2) {
            this.f18867c1 = a1.b(this.f18864b1);
            a5 a10 = a5.a(this.f18861a1, this.Z0, this.f18895m);
            this.f18870d1 = a10;
            this.f18873e1 = b5.b(a10);
            this.f18876f1 = cr.c.c(dp.n.a(gVar));
            this.f18879g1 = cr.c.c(dp.l.a(gVar));
            this.f18882h1 = cr.c.c(dp.m.a(gVar));
            this.f18885i1 = cr.c.c(bp.e.a(fVar, this.A));
            this.f18888j1 = cr.c.c(sp.w.a(vVar, sp.r.a()));
            i2 a11 = i2.a(this.f18878g0);
            this.f18891k1 = a11;
            this.f18894l1 = t.b(a11);
            j0 a12 = j0.a(this.I0, vn.u.a());
            this.f18897m1 = a12;
            this.f18900n1 = w0.a(a12);
            this.f18903o1 = q0.a(vn.u.a(), this.T0);
            g1 a13 = g1.a(vn.u.a(), this.T0);
            this.f18906p1 = a13;
            this.f18909q1 = o1.a(this.f18903o1, a13);
            cr.j c10 = cr.j.a(0, 8).a(bp.l.a()).a(this.f18900n1).a(q1.a()).a(this.f18909q1).a(fo.k.a()).a(lp.h.a()).a(fp.f.a()).a(j1.a()).c();
            this.f18912r1 = c10;
            this.f18915s1 = cr.c.c(bp.p.a(c10));
            this.f18918t1 = cr.c.c(vo.h.a(this.B, this.f18895m, this.f18929y));
            vo.p a14 = vo.p.a(lVar);
            this.f18921u1 = a14;
            this.f18924v1 = cr.c.c(sp.y.a(vVar, a14));
        }

        private so.j C() {
            return new so.j(vo.n.a(this.f18859a), (z.a) this.f18930y0.get(), (g.a) this.A0.get(), (aq.b) this.C0.get());
        }

        private qp.j D() {
            return new qp.j(vo.n.a(this.f18859a), (z.a) this.f18930y0.get(), (g.a) this.A0.get(), (aq.b) this.C0.get());
        }

        private e0.a E() {
            return new e0.a(vo.n.a(this.f18859a), (ActivityResultLauncher) this.D0.get());
        }

        private ip.c1 F() {
            return new ip.c1(vo.n.a(this.f18859a), E(), m());
        }

        private x5 G() {
            return new x5(vo.n.a(this.f18859a), (c.a) this.R0.get(), L(), (b1.b) this.V0.get(), F(), D(), (z.a) this.f18930y0.get(), (g.a) this.A0.get(), j(), (aq.b) this.C0.get(), (wp.c) this.O0.get());
        }

        private b.a H() {
            return new b.a((sq.b) this.Z0.get());
        }

        private a.C0669a I() {
            return new a.C0669a((sq.b) this.Z0.get());
        }

        private v4 J() {
            return new v4(vo.n.a(this.f18859a), (o.a) this.Y0.get(), (y0.a) this.f18867c1.get(), (z4.a) this.f18873e1.get(), (aq.b) this.C0.get(), F(), l(), (wp.c) this.O0.get());
        }

        private so.s K() {
            return new so.s(vo.n.a(this.f18859a), (z.a) this.f18930y0.get(), (g.a) this.A0.get(), (aq.b) this.C0.get());
        }

        private b.a L() {
            return new b.a((tq.a) this.N0.get());
        }

        private lo.o h() {
            return new lo.o((aq.b) this.C0.get());
        }

        private AutoClassifyWorker.b i() {
            return new AutoClassifyWorker.b((com.withpersona.sdk2.inquiry.governmentid.network.a) this.f18902o0.get(), (yp.a) this.f18908q0.get());
        }

        private ao.a j() {
            return vn.o.a(this.f18865c, cr.c.b(this.f18911r0));
        }

        private m0 k() {
            return new m0(vo.n.a(this.f18859a), F(), (e0.a) this.K0.get(), (a.b) this.M0.get(), L(), (z.a) this.f18930y0.get(), (g.a) this.A0.get(), (aq.b) this.C0.get());
        }

        private qq.x0 l() {
            return new qq.x0(H(), I());
        }

        private ip.x m() {
            return new ip.x(vo.n.a(this.f18859a), (m.a) this.G0.get());
        }

        private fo.c n() {
            return new fo.c((ActivityResultLauncher) this.f18876f1.get(), vo.n.a(this.f18859a), xp.b.c(this.f18862b));
        }

        private a.C0249a o() {
            return new a.C0249a((ho.b) this.f18885i1.get());
        }

        private a.C0387a p() {
            return new a.C0387a((ho.b) this.f18885i1.get());
        }

        private b.a q() {
            return new b.a((ho.b) this.f18885i1.get(), (sp.i) this.f18888j1.get());
        }

        private c.a r() {
            return new c.a((ho.b) this.f18885i1.get());
        }

        private ko.a0 s() {
            return new ko.a0((ActivityResultLauncher) this.f18923v0.get(), vo.n.a(this.f18859a), xp.b.c(this.f18862b));
        }

        private d.a t() {
            return new d.a((ho.b) this.f18885i1.get(), (jo.a) this.f18875f0.get(), tp.c.b(this.f18868d));
        }

        private r2 u() {
            return new r2((v4.h) this.f18899n0.get(), vo.n.a(this.f18859a), F(), n(), v(), o(), r(), q(), p(), t(), (aq.b) this.C0.get(), (wp.c) this.O0.get());
        }

        private v2.b v() {
            return new v2.b((ActivityResultLauncher) this.f18879g1.get(), (ActivityResultLauncher) this.f18882h1.get(), vo.n.a(this.f18859a), xp.b.c(this.f18862b));
        }

        private g3 w() {
            return new g3(vo.n.a(this.f18859a), (v4.h) this.f18899n0.get(), (f.a) this.f18920u0.get(), s(), C(), K(), k(), i(), h(), j(), (aq.b) this.C0.get(), (wp.c) this.O0.get());
        }

        private void x(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, dp.o oVar, vn.n nVar, dp.u uVar, xp.a aVar, vo.l lVar, dp.b bVar, dp.g gVar, lp.f fVar2, hp.g gVar2, tp.b bVar2, zo.c cVar, sp.v vVar, vp.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, wp.f fVar3, dp.a0 a0Var, eo.c cVar2) {
            this.f18877g = vo.n.b(lVar);
            this.f18880h = bp.n.a(fVar);
            this.f18883i = NetworkCoreModule_ResponseInterceptorFactory.create(networkCoreModule);
            this.f18886j = cr.j.a(0, 1).a(bp.j.a()).c();
            this.f18889k = cr.j.a(0, 1).a(bp.i.a()).c();
            cr.j c10 = cr.j.a(0, 4).a(NetworkInquiryModule_ProvideMoshiJsonAdapterFactoryFactory.create()).a(NetworkCoreModule_ProvideMoshiJsonAdapterFactoryFactory.create()).a(bp.k.a()).a(v0.a()).c();
            this.f18892l = c10;
            cr.h c11 = cr.c.c(NetworkCoreModule_MoshiFactory.create(networkCoreModule, this.f18886j, this.f18889k, (cr.h) c10));
            this.f18895m = c11;
            this.f18898n = NetworkCoreModule_InterceptorFactory.create(networkCoreModule, c11);
            cr.h c12 = cr.c.c(lp.d.a());
            this.f18901o = c12;
            this.f18904p = lp.g.a(fVar2, c12);
            this.f18907q = cr.j.a(3, 0).b(this.f18883i).b(this.f18898n).b(this.f18904p).c();
            this.f18910r = NetworkCoreModule_KeyInflectionFactory.create(networkCoreModule);
            this.f18913s = NetworkCoreModule_UseServerStylesFactory.create(networkCoreModule);
            this.f18916t = cr.f.b(3).c("Key-Inflection", this.f18910r).c("Persona-Use-Mobile-Server-Styles", this.f18913s).c("User-Agent", com.withpersona.sdk2.inquiry.internal.network.g.a()).b();
            eo.s a10 = eo.s.a(this.f18877g);
            this.f18919u = a10;
            this.f18922v = cr.c.c(eo.d.b(cVar2, a10));
            eo.m a11 = eo.m.a(this.f18877g);
            this.f18925w = a11;
            this.f18927x = cr.c.c(eo.f.a(cVar2, a11));
            ep.d a12 = ep.d.a(this.f18877g);
            this.f18929y = a12;
            NetworkCoreModule_OkhttpClientFactory create = NetworkCoreModule_OkhttpClientFactory.create(networkCoreModule, this.f18907q, this.f18916t, this.f18877g, this.f18922v, this.f18927x, (cr.h) a12);
            this.f18931z = create;
            cr.h c13 = cr.c.c(NetworkCoreModule_RetrofitFactory.create(networkCoreModule, this.f18880h, (cr.h) create, this.f18895m));
            this.A = c13;
            this.B = cr.c.c(bp.h.a(fVar, c13));
            this.C = zo.e.a(cVar);
            this.D = cr.c.c(bp.f.a(fVar, this.A));
            this.E = zo.g.a(cVar);
        }

        private void y(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, dp.o oVar, vn.n nVar, dp.u uVar, xp.a aVar, vo.l lVar, dp.b bVar, dp.g gVar, lp.f fVar2, hp.g gVar2, tp.b bVar2, zo.c cVar, sp.v vVar, vp.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, wp.f fVar3, dp.a0 a0Var, eo.c cVar2) {
            zo.k a10 = zo.k.a(this.E);
            this.F = a10;
            cr.h b10 = com.withpersona.sdk2.inquiry.internal.fallbackmode.j.b(a10);
            this.G = b10;
            this.H = com.withpersona.sdk2.inquiry.internal.fallbackmode.e.a(this.D, this.f18895m, b10);
            com.withpersona.sdk2.inquiry.internal.fallbackmode.g a11 = com.withpersona.sdk2.inquiry.internal.fallbackmode.g.a(this.f18895m, this.f18877g, this.G);
            this.I = a11;
            cr.h a12 = com.withpersona.sdk2.inquiry.internal.fallbackmode.h.a(a11);
            this.J = a12;
            this.K = com.withpersona.sdk2.inquiry.internal.fallbackmode.b.b(aVar3, this.H, a12);
            zo.d a13 = zo.d.a(cVar);
            this.L = a13;
            this.M = cr.c.c(zo.j.a(this.C, this.K, a13, this.f18895m));
            eo.k a14 = eo.k.a(this.f18877g);
            this.N = a14;
            this.O = cr.c.c(eo.e.a(cVar2, a14));
            ep.f a15 = ep.f.a(this.f18929y);
            this.P = a15;
            this.Q = ep.g.b(a15);
            this.R = cr.c.c(ap.e.a());
            vp.b a16 = vp.b.a(aVar2);
            this.S = a16;
            cr.h c10 = cr.c.c(ap.c.a(this.f18877g, this.Q, this.R, a16));
            this.T = c10;
            cr.h c11 = cr.c.c(bp.c.a(this.f18877g, this.B, this.M, this.f18901o, this.O, c10));
            this.U = c11;
            vo.d a17 = vo.d.a(c11);
            this.V = a17;
            this.W = d.b(a17);
            vo.c a18 = vo.c.a(this.U);
            this.X = a18;
            this.Y = com.withpersona.sdk2.inquiry.internal.b.b(a18);
            vo.m b11 = vo.m.b(lVar);
            this.Z = b11;
            cr.h c12 = cr.c.c(mq.f.a(this.f18931z, b11));
            this.f18860a0 = c12;
            d2 a19 = d2.a(this.f18877g, this.B, this.O, this.f18901o, this.M, c12);
            this.f18863b0 = a19;
            this.f18866c0 = r.b(a19);
            this.f18869d0 = k2.a(this.U);
        }

        private void z(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, dp.o oVar, vn.n nVar, dp.u uVar, xp.a aVar, vo.l lVar, dp.b bVar, dp.g gVar, lp.f fVar2, hp.g gVar2, tp.b bVar2, zo.c cVar, sp.v vVar, vp.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, wp.f fVar3, dp.a0 a0Var, eo.c cVar2) {
            this.f18872e0 = v.b(this.f18869d0);
            this.f18875f0 = cr.c.c(zo.f.a(cVar, this.M));
            cr.h c10 = cr.c.c(m2.a(this.f18877g));
            this.f18878g0 = c10;
            y a10 = y.a(this.B, this.f18875f0, c10);
            this.f18881h0 = a10;
            this.f18884i0 = z.b(a10);
            n2 a11 = n2.a(this.U);
            this.f18887j0 = a11;
            this.f18890k0 = b0.b(a11);
            vo.i a12 = vo.i.a(this.U);
            this.f18893l0 = a12;
            this.f18896m0 = g.b(a12);
            this.f18899n0 = cr.c.c(vo.o.a(lVar, this.f18877g));
            this.f18902o0 = cr.c.c(bp.g.a(fVar, this.A));
            this.f18905p0 = tp.c.a(bVar2);
            this.f18908q0 = cr.c.c(sp.x.a(vVar, yp.c.a()));
            cr.h c11 = cr.c.c(ao.c.a(this.f18877g));
            this.f18911r0 = c11;
            vn.o b10 = vn.o.b(nVar, c11);
            this.f18914s0 = b10;
            ro.g a13 = ro.g.a(this.f18877g, this.f18902o0, this.f18905p0, this.f18875f0, this.f18908q0, b10);
            this.f18917t0 = a13;
            this.f18920u0 = ro.h.b(a13);
            this.f18923v0 = cr.c.c(dp.r.a(oVar));
            xp.b a14 = xp.b.a(aVar);
            this.f18926w0 = a14;
            vn.a0 a15 = vn.a0.a(this.f18914s0, a14);
            this.f18928x0 = a15;
            this.f18930y0 = vn.b0.b(a15);
            xn.h a16 = xn.h.a(this.f18877g, this.f18914s0, this.f18926w0);
            this.f18932z0 = a16;
            this.A0 = xn.i.b(a16);
            wp.g a17 = wp.g.a(fVar3);
            this.B0 = a17;
            this.C0 = cr.c.c(aq.c.a(a17));
        }

        @Override // vo.q
        public en.e0 a() {
            return (en.e0) this.f18915s1.get();
        }

        @Override // vo.q
        public n b() {
            return new n(vo.n.a(this.f18859a), (c.a) this.W.get(), (a.InterfaceC0262a) this.Y.get(), (q.b) this.f18866c0.get(), (u.a) this.f18872e0.get(), (x.a) this.f18884i0.get(), (a0.a) this.f18890k0.get(), (f.a) this.f18896m0.get(), w(), G(), J(), u(), (lp.c) this.f18901o.get(), wp.g.b(this.f18871e), (aq.b) this.C0.get(), (wp.c) this.O0.get(), (l2) this.f18878g0.get(), (s.a) this.f18894l1.get());
        }

        @Override // vo.q
        public eo.g c() {
            return (eo.g) this.f18922v.get();
        }

        @Override // vo.q
        public vo.g d() {
            return (vo.g) this.f18918t1.get();
        }

        @Override // vo.q
        public v4.h e() {
            return (v4.h) this.f18899n0.get();
        }

        @Override // vo.q
        public bq.a f() {
            return (bq.a) this.f18924v1.get();
        }

        @Override // vo.q
        public mq.a g() {
            return (mq.a) this.f18860a0.get();
        }

        private b(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, dp.o oVar, vn.n nVar, dp.u uVar, xp.a aVar, vo.l lVar, dp.b bVar, dp.g gVar, lp.f fVar2, hp.g gVar2, tp.b bVar2, zo.c cVar, sp.v vVar, vp.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, wp.f fVar3, dp.a0 a0Var, eo.c cVar2) {
            this.f18874f = this;
            this.f18859a = lVar;
            this.f18862b = aVar;
            this.f18865c = nVar;
            this.f18868d = bVar2;
            this.f18871e = fVar3;
            x(networkCoreModule, fVar, oVar, nVar, uVar, aVar, lVar, bVar, gVar, fVar2, gVar2, bVar2, cVar, vVar, aVar2, aVar3, fVar3, a0Var, cVar2);
            y(networkCoreModule, fVar, oVar, nVar, uVar, aVar, lVar, bVar, gVar, fVar2, gVar2, bVar2, cVar, vVar, aVar2, aVar3, fVar3, a0Var, cVar2);
            z(networkCoreModule, fVar, oVar, nVar, uVar, aVar, lVar, bVar, gVar, fVar2, gVar2, bVar2, cVar, vVar, aVar2, aVar3, fVar3, a0Var, cVar2);
            A(networkCoreModule, fVar, oVar, nVar, uVar, aVar, lVar, bVar, gVar, fVar2, gVar2, bVar2, cVar, vVar, aVar2, aVar3, fVar3, a0Var, cVar2);
            B(networkCoreModule, fVar, oVar, nVar, uVar, aVar, lVar, bVar, gVar, fVar2, gVar2, bVar2, cVar, vVar, aVar2, aVar3, fVar3, a0Var, cVar2);
        }
    }

    public static a a() {
        return new a();
    }
}
