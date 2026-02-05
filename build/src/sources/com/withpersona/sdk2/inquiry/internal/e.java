package com.withpersona.sdk2.inquiry.internal;

import androidx.activity.result.ActivityResultLauncher;
import ap.d0;
import bo.r2;
import bo.v2;
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
import eo.a;
import ep.o;
import fp.e0;
import fp.j1;
import fp.m;
import ho.e0;
import ho.f0;
import ho.g3;
import ho.j0;
import ho.v0;
import ho.w0;
import jo.m0;
import kp.b1;
import kp.c1;
import kp.d1;
import kp.g1;
import kp.o1;
import kp.q0;
import kp.x5;
import mp.c;
import no.a;
import nq.a1;
import nq.a5;
import nq.b5;
import nq.q1;
import nq.v4;
import nq.y0;
import nq.z0;
import nq.z4;
import oo.f;
import pq.a;
import qq.b;
import sn.b1;
import sn.g0;
import sn.x0;
import sn.z;
import so.d2;
import so.i2;
import so.k2;
import so.l2;
import so.m2;
import so.n2;
import un.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private NetworkCoreModule f18720a;

        /* renamed from: b  reason: collision with root package name */
        private com.withpersona.sdk2.inquiry.internal.network.f f18721b;

        /* renamed from: c  reason: collision with root package name */
        private ap.o f18722c;

        /* renamed from: d  reason: collision with root package name */
        private sn.n f18723d;

        /* renamed from: e  reason: collision with root package name */
        private ap.u f18724e;

        /* renamed from: f  reason: collision with root package name */
        private up.a f18725f;

        /* renamed from: g  reason: collision with root package name */
        private so.l f18726g;

        /* renamed from: h  reason: collision with root package name */
        private ap.b f18727h;

        /* renamed from: i  reason: collision with root package name */
        private ap.g f18728i;

        /* renamed from: j  reason: collision with root package name */
        private ip.f f18729j;

        /* renamed from: k  reason: collision with root package name */
        private ep.g f18730k;

        /* renamed from: l  reason: collision with root package name */
        private qp.b f18731l;

        /* renamed from: m  reason: collision with root package name */
        private wo.c f18732m;

        /* renamed from: n  reason: collision with root package name */
        private pp.v f18733n;

        /* renamed from: o  reason: collision with root package name */
        private sp.a f18734o;

        /* renamed from: p  reason: collision with root package name */
        private com.withpersona.sdk2.inquiry.internal.fallbackmode.a f18735p;

        /* renamed from: q  reason: collision with root package name */
        private tp.f f18736q;

        /* renamed from: r  reason: collision with root package name */
        private ap.a0 f18737r;

        /* renamed from: s  reason: collision with root package name */
        private ao.c f18738s;

        public a a(com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar) {
            this.f18735p = (com.withpersona.sdk2.inquiry.internal.fallbackmode.a) zq.g.b(aVar);
            return this;
        }

        public so.q b() {
            zq.g.a(this.f18720a, NetworkCoreModule.class);
            zq.g.a(this.f18721b, com.withpersona.sdk2.inquiry.internal.network.f.class);
            zq.g.a(this.f18722c, ap.o.class);
            if (this.f18723d == null) {
                this.f18723d = new sn.n();
            }
            zq.g.a(this.f18724e, ap.u.class);
            zq.g.a(this.f18725f, up.a.class);
            zq.g.a(this.f18726g, so.l.class);
            zq.g.a(this.f18727h, ap.b.class);
            zq.g.a(this.f18728i, ap.g.class);
            if (this.f18729j == null) {
                this.f18729j = new ip.f();
            }
            zq.g.a(this.f18730k, ep.g.class);
            zq.g.a(this.f18731l, qp.b.class);
            zq.g.a(this.f18732m, wo.c.class);
            if (this.f18733n == null) {
                this.f18733n = new pp.v();
            }
            if (this.f18734o == null) {
                this.f18734o = new sp.a();
            }
            zq.g.a(this.f18735p, com.withpersona.sdk2.inquiry.internal.fallbackmode.a.class);
            zq.g.a(this.f18736q, tp.f.class);
            zq.g.a(this.f18737r, ap.a0.class);
            if (this.f18738s == null) {
                this.f18738s = new ao.c();
            }
            return new b(this.f18720a, this.f18721b, this.f18722c, this.f18723d, this.f18724e, this.f18725f, this.f18726g, this.f18727h, this.f18728i, this.f18729j, this.f18730k, this.f18731l, this.f18732m, this.f18733n, this.f18734o, this.f18735p, this.f18736q, this.f18737r, this.f18738s);
        }

        public a c(ap.b bVar) {
            this.f18727h = (ap.b) zq.g.b(bVar);
            return this;
        }

        public a d(qp.b bVar) {
            this.f18731l = (qp.b) zq.g.b(bVar);
            return this;
        }

        public a e(ap.g gVar) {
            this.f18728i = (ap.g) zq.g.b(gVar);
            return this;
        }

        public a f(ap.o oVar) {
            this.f18722c = (ap.o) zq.g.b(oVar);
            return this;
        }

        public a g(tp.f fVar) {
            this.f18736q = (tp.f) zq.g.b(fVar);
            return this;
        }

        public a h(wo.c cVar) {
            this.f18732m = (wo.c) zq.g.b(cVar);
            return this;
        }

        public a i(up.a aVar) {
            this.f18725f = (up.a) zq.g.b(aVar);
            return this;
        }

        public a j(so.l lVar) {
            this.f18726g = (so.l) zq.g.b(lVar);
            return this;
        }

        public a k(com.withpersona.sdk2.inquiry.internal.network.f fVar) {
            this.f18721b = (com.withpersona.sdk2.inquiry.internal.network.f) zq.g.b(fVar);
            return this;
        }

        public a l(NetworkCoreModule networkCoreModule) {
            this.f18720a = (NetworkCoreModule) zq.g.b(networkCoreModule);
            return this;
        }

        public a m(ep.g gVar) {
            this.f18730k = (ep.g) zq.g.b(gVar);
            return this;
        }

        public a n(ap.u uVar) {
            this.f18724e = (ap.u) zq.g.b(uVar);
            return this;
        }

        public a o(ap.a0 a0Var) {
            this.f18737r = (ap.a0) zq.g.b(a0Var);
            return this;
        }

        public a p(pp.v vVar) {
            this.f18733n = (pp.v) zq.g.b(vVar);
            return this;
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements so.q {
        private zq.h A;
        private zq.h A0;
        private zq.h B;
        private zq.h B0;
        private zq.h C;
        private zq.h C0;
        private zq.h D;
        private zq.h D0;
        private zq.h E;
        private zq.h E0;
        private wo.k F;
        private fp.n F0;
        private zq.h G;
        private zq.h G0;
        private zq.h H;
        private zq.h H0;
        private com.withpersona.sdk2.inquiry.internal.fallbackmode.g I;
        private zq.h I0;
        private zq.h J;
        private f0 J0;
        private zq.h K;
        private zq.h K0;
        private zq.h L;
        private no.b L0;
        private zq.h M;
        private zq.h M0;
        private zq.h N;
        private zq.h N0;
        private zq.h O;
        private zq.h O0;
        private bp.f P;
        private zq.h P0;
        private zq.h Q;
        private mp.d Q0;
        private zq.h R;
        private zq.h R0;
        private zq.h S;
        private zq.h S0;
        private zq.h T;
        private zq.h T0;
        private zq.h U;
        private c1 U0;
        private so.d V;
        private zq.h V0;
        private zq.h W;
        private zq.h W0;
        private so.c X;
        private ep.p X0;
        private zq.h Y;
        private zq.h Y0;
        private zq.h Z;
        private zq.h Z0;

        /* renamed from: a  reason: collision with root package name */
        private final so.l f18739a;

        /* renamed from: a0  reason: collision with root package name */
        private zq.h f18740a0;

        /* renamed from: a1  reason: collision with root package name */
        private zq.h f18741a1;

        /* renamed from: b  reason: collision with root package name */
        private final up.a f18742b;

        /* renamed from: b0  reason: collision with root package name */
        private d2 f18743b0;

        /* renamed from: b1  reason: collision with root package name */
        private z0 f18744b1;

        /* renamed from: c  reason: collision with root package name */
        private final sn.n f18745c;

        /* renamed from: c0  reason: collision with root package name */
        private zq.h f18746c0;

        /* renamed from: c1  reason: collision with root package name */
        private zq.h f18747c1;

        /* renamed from: d  reason: collision with root package name */
        private final qp.b f18748d;

        /* renamed from: d0  reason: collision with root package name */
        private k2 f18749d0;

        /* renamed from: d1  reason: collision with root package name */
        private a5 f18750d1;

        /* renamed from: e  reason: collision with root package name */
        private final tp.f f18751e;

        /* renamed from: e0  reason: collision with root package name */
        private zq.h f18752e0;

        /* renamed from: e1  reason: collision with root package name */
        private zq.h f18753e1;

        /* renamed from: f  reason: collision with root package name */
        private final b f18754f;

        /* renamed from: f0  reason: collision with root package name */
        private zq.h f18755f0;

        /* renamed from: f1  reason: collision with root package name */
        private zq.h f18756f1;

        /* renamed from: g  reason: collision with root package name */
        private zq.h f18757g;

        /* renamed from: g0  reason: collision with root package name */
        private zq.h f18758g0;

        /* renamed from: g1  reason: collision with root package name */
        private zq.h f18759g1;

        /* renamed from: h  reason: collision with root package name */
        private zq.h f18760h;

        /* renamed from: h0  reason: collision with root package name */
        private y f18761h0;

        /* renamed from: h1  reason: collision with root package name */
        private zq.h f18762h1;

        /* renamed from: i  reason: collision with root package name */
        private zq.h f18763i;

        /* renamed from: i0  reason: collision with root package name */
        private zq.h f18764i0;

        /* renamed from: i1  reason: collision with root package name */
        private zq.h f18765i1;

        /* renamed from: j  reason: collision with root package name */
        private zq.h f18766j;

        /* renamed from: j0  reason: collision with root package name */
        private n2 f18767j0;

        /* renamed from: j1  reason: collision with root package name */
        private zq.h f18768j1;

        /* renamed from: k  reason: collision with root package name */
        private zq.h f18769k;

        /* renamed from: k0  reason: collision with root package name */
        private zq.h f18770k0;

        /* renamed from: k1  reason: collision with root package name */
        private i2 f18771k1;

        /* renamed from: l  reason: collision with root package name */
        private zq.h f18772l;

        /* renamed from: l0  reason: collision with root package name */
        private so.i f18773l0;

        /* renamed from: l1  reason: collision with root package name */
        private zq.h f18774l1;

        /* renamed from: m  reason: collision with root package name */
        private zq.h f18775m;

        /* renamed from: m0  reason: collision with root package name */
        private zq.h f18776m0;

        /* renamed from: m1  reason: collision with root package name */
        private zq.h f18777m1;

        /* renamed from: n  reason: collision with root package name */
        private zq.h f18778n;

        /* renamed from: n0  reason: collision with root package name */
        private zq.h f18779n0;

        /* renamed from: n1  reason: collision with root package name */
        private zq.h f18780n1;

        /* renamed from: o  reason: collision with root package name */
        private zq.h f18781o;

        /* renamed from: o0  reason: collision with root package name */
        private zq.h f18782o0;

        /* renamed from: o1  reason: collision with root package name */
        private zq.h f18783o1;

        /* renamed from: p  reason: collision with root package name */
        private zq.h f18784p;

        /* renamed from: p0  reason: collision with root package name */
        private zq.h f18785p0;

        /* renamed from: p1  reason: collision with root package name */
        private zq.h f18786p1;

        /* renamed from: q  reason: collision with root package name */
        private zq.h f18787q;

        /* renamed from: q0  reason: collision with root package name */
        private zq.h f18788q0;

        /* renamed from: q1  reason: collision with root package name */
        private zq.h f18789q1;

        /* renamed from: r  reason: collision with root package name */
        private zq.h f18790r;

        /* renamed from: r0  reason: collision with root package name */
        private zq.h f18791r0;

        /* renamed from: r1  reason: collision with root package name */
        private zq.h f18792r1;

        /* renamed from: s  reason: collision with root package name */
        private zq.h f18793s;

        /* renamed from: s0  reason: collision with root package name */
        private zq.h f18794s0;

        /* renamed from: s1  reason: collision with root package name */
        private zq.h f18795s1;

        /* renamed from: t  reason: collision with root package name */
        private zq.h f18796t;

        /* renamed from: t0  reason: collision with root package name */
        private oo.g f18797t0;

        /* renamed from: t1  reason: collision with root package name */
        private zq.h f18798t1;

        /* renamed from: u  reason: collision with root package name */
        private zq.h f18799u;

        /* renamed from: u0  reason: collision with root package name */
        private zq.h f18800u0;

        /* renamed from: u1  reason: collision with root package name */
        private zq.h f18801u1;

        /* renamed from: v  reason: collision with root package name */
        private zq.h f18802v;

        /* renamed from: v0  reason: collision with root package name */
        private zq.h f18803v0;

        /* renamed from: v1  reason: collision with root package name */
        private zq.h f18804v1;

        /* renamed from: w  reason: collision with root package name */
        private zq.h f18805w;

        /* renamed from: w0  reason: collision with root package name */
        private zq.h f18806w0;

        /* renamed from: x  reason: collision with root package name */
        private zq.h f18807x;

        /* renamed from: x0  reason: collision with root package name */
        private sn.a0 f18808x0;

        /* renamed from: y  reason: collision with root package name */
        private zq.h f18809y;

        /* renamed from: y0  reason: collision with root package name */
        private zq.h f18810y0;

        /* renamed from: z  reason: collision with root package name */
        private zq.h f18811z;

        /* renamed from: z0  reason: collision with root package name */
        private un.h f18812z0;

        private void A(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, ap.o oVar, sn.n nVar, ap.u uVar, up.a aVar, so.l lVar, ap.b bVar, ap.g gVar, ip.f fVar2, ep.g gVar2, qp.b bVar2, wo.c cVar, pp.v vVar, sp.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, tp.f fVar3, ap.a0 a0Var, ao.c cVar2) {
            this.D0 = zq.c.c(ap.x.a(uVar));
            zq.h c10 = zq.c.c(d0.a(a0Var));
            this.E0 = c10;
            fp.n a10 = fp.n.a(c10, this.f18757g);
            this.F0 = a10;
            this.G0 = fp.o.a(a10);
            zq.h c11 = zq.c.c(sn.p.a(nVar));
            this.H0 = c11;
            g0 a11 = g0.a(c11);
            this.I0 = a11;
            f0 a12 = f0.a(this.f18757g, a11, this.f18806w0);
            this.J0 = a12;
            this.K0 = ho.g0.b(a12);
            no.b a13 = no.b.a(this.f18757g, this.I0);
            this.L0 = a13;
            this.M0 = no.c.b(a13);
            this.N0 = zq.c.c(yo.q.a(fVar, this.A));
            this.O0 = zq.c.c(tp.d.a(this.B0));
            zq.h c12 = zq.c.c(yo.m.a(fVar, this.A));
            this.P0 = c12;
            mp.d a14 = mp.d.a(this.f18757g, c12, this.f18785p0, this.f18755f0, this.f18788q0, this.f18794s0);
            this.Q0 = a14;
            this.R0 = mp.e.b(a14);
            this.S0 = zq.c.c(sn.q.a(nVar));
            x0 a15 = x0.a(b1.a(), this.S0);
            this.T0 = a15;
            c1 a16 = c1.a(a15, this.f18806w0);
            this.U0 = a16;
            this.V0 = d1.b(a16);
            zq.h c13 = zq.c.c(ep.j.a(gVar2));
            this.W0 = c13;
            ep.p a17 = ep.p.a(c13, this.f18757g, this.f18781o);
            this.X0 = a17;
            this.Y0 = ep.q.b(a17);
            this.Z0 = zq.c.c(yo.o.a(fVar, this.A));
            zq.h c14 = zq.c.c(ap.e.a(bVar));
            this.f18741a1 = c14;
            this.f18744b1 = z0.a(this.Z0, this.O, c14);
        }

        private void B(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, ap.o oVar, sn.n nVar, ap.u uVar, up.a aVar, so.l lVar, ap.b bVar, ap.g gVar, ip.f fVar2, ep.g gVar2, qp.b bVar2, wo.c cVar, pp.v vVar, sp.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, tp.f fVar3, ap.a0 a0Var, ao.c cVar2) {
            this.f18747c1 = a1.b(this.f18744b1);
            a5 a10 = a5.a(this.f18741a1, this.Z0, this.f18775m);
            this.f18750d1 = a10;
            this.f18753e1 = b5.b(a10);
            this.f18756f1 = zq.c.c(ap.n.a(gVar));
            this.f18759g1 = zq.c.c(ap.l.a(gVar));
            this.f18762h1 = zq.c.c(ap.m.a(gVar));
            this.f18765i1 = zq.c.c(yo.e.a(fVar, this.A));
            this.f18768j1 = zq.c.c(pp.w.a(vVar, pp.r.a()));
            i2 a11 = i2.a(this.f18758g0);
            this.f18771k1 = a11;
            this.f18774l1 = t.b(a11);
            j0 a12 = j0.a(this.I0, sn.u.a());
            this.f18777m1 = a12;
            this.f18780n1 = w0.a(a12);
            this.f18783o1 = q0.a(sn.u.a(), this.T0);
            g1 a13 = g1.a(sn.u.a(), this.T0);
            this.f18786p1 = a13;
            this.f18789q1 = o1.a(this.f18783o1, a13);
            zq.j c10 = zq.j.a(0, 8).a(yo.l.a()).a(this.f18780n1).a(q1.a()).a(this.f18789q1).a(bo.k.a()).a(ip.h.a()).a(cp.f.a()).a(j1.a()).c();
            this.f18792r1 = c10;
            this.f18795s1 = zq.c.c(yo.p.a(c10));
            this.f18798t1 = zq.c.c(so.h.a(this.B, this.f18775m, this.f18809y));
            so.p a14 = so.p.a(lVar);
            this.f18801u1 = a14;
            this.f18804v1 = zq.c.c(pp.y.a(vVar, a14));
        }

        private po.j C() {
            return new po.j(so.n.a(this.f18739a), (z.a) this.f18810y0.get(), (g.a) this.A0.get(), (xp.b) this.C0.get());
        }

        private np.j D() {
            return new np.j(so.n.a(this.f18739a), (z.a) this.f18810y0.get(), (g.a) this.A0.get(), (xp.b) this.C0.get());
        }

        private e0.a E() {
            return new e0.a(so.n.a(this.f18739a), (ActivityResultLauncher) this.D0.get());
        }

        private fp.c1 F() {
            return new fp.c1(so.n.a(this.f18739a), E(), m());
        }

        private x5 G() {
            return new x5(so.n.a(this.f18739a), (c.a) this.R0.get(), L(), (b1.b) this.V0.get(), F(), D(), (z.a) this.f18810y0.get(), (g.a) this.A0.get(), j(), (xp.b) this.C0.get(), (tp.c) this.O0.get());
        }

        private b.a H() {
            return new b.a((pq.b) this.Z0.get());
        }

        private a.C0568a I() {
            return new a.C0568a((pq.b) this.Z0.get());
        }

        private v4 J() {
            return new v4(so.n.a(this.f18739a), (o.a) this.Y0.get(), (y0.a) this.f18747c1.get(), (z4.a) this.f18753e1.get(), (xp.b) this.C0.get(), F(), l(), (tp.c) this.O0.get());
        }

        private po.s K() {
            return new po.s(so.n.a(this.f18739a), (z.a) this.f18810y0.get(), (g.a) this.A0.get(), (xp.b) this.C0.get());
        }

        private b.a L() {
            return new b.a((qq.a) this.N0.get());
        }

        private io.o h() {
            return new io.o((xp.b) this.C0.get());
        }

        private AutoClassifyWorker.b i() {
            return new AutoClassifyWorker.b((com.withpersona.sdk2.inquiry.governmentid.network.a) this.f18782o0.get(), (vp.a) this.f18788q0.get());
        }

        private xn.a j() {
            return sn.o.a(this.f18745c, zq.c.b(this.f18791r0));
        }

        private m0 k() {
            return new m0(so.n.a(this.f18739a), F(), (e0.a) this.K0.get(), (a.b) this.M0.get(), L(), (z.a) this.f18810y0.get(), (g.a) this.A0.get(), (xp.b) this.C0.get());
        }

        private nq.x0 l() {
            return new nq.x0(H(), I());
        }

        private fp.x m() {
            return new fp.x(so.n.a(this.f18739a), (m.a) this.G0.get());
        }

        private bo.c n() {
            return new bo.c((ActivityResultLauncher) this.f18756f1.get(), so.n.a(this.f18739a), up.b.c(this.f18742b));
        }

        private a.C0230a o() {
            return new a.C0230a((eo.b) this.f18765i1.get());
        }

        private a.C0298a p() {
            return new a.C0298a((eo.b) this.f18765i1.get());
        }

        private b.a q() {
            return new b.a((eo.b) this.f18765i1.get(), (pp.i) this.f18768j1.get());
        }

        private c.a r() {
            return new c.a((eo.b) this.f18765i1.get());
        }

        private ho.a0 s() {
            return new ho.a0((ActivityResultLauncher) this.f18803v0.get(), so.n.a(this.f18739a), up.b.c(this.f18742b));
        }

        private d.a t() {
            return new d.a((eo.b) this.f18765i1.get(), (go.a) this.f18755f0.get(), qp.c.b(this.f18748d));
        }

        private r2 u() {
            return new r2((v4.h) this.f18779n0.get(), so.n.a(this.f18739a), F(), n(), v(), o(), r(), q(), p(), t(), (xp.b) this.C0.get(), (tp.c) this.O0.get());
        }

        private v2.b v() {
            return new v2.b((ActivityResultLauncher) this.f18759g1.get(), (ActivityResultLauncher) this.f18762h1.get(), so.n.a(this.f18739a), up.b.c(this.f18742b));
        }

        private g3 w() {
            return new g3(so.n.a(this.f18739a), (v4.h) this.f18779n0.get(), (f.a) this.f18800u0.get(), s(), C(), K(), k(), i(), h(), j(), (xp.b) this.C0.get(), (tp.c) this.O0.get());
        }

        private void x(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, ap.o oVar, sn.n nVar, ap.u uVar, up.a aVar, so.l lVar, ap.b bVar, ap.g gVar, ip.f fVar2, ep.g gVar2, qp.b bVar2, wo.c cVar, pp.v vVar, sp.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, tp.f fVar3, ap.a0 a0Var, ao.c cVar2) {
            this.f18757g = so.n.b(lVar);
            this.f18760h = yo.n.a(fVar);
            this.f18763i = NetworkCoreModule_ResponseInterceptorFactory.create(networkCoreModule);
            this.f18766j = zq.j.a(0, 1).a(yo.j.a()).c();
            this.f18769k = zq.j.a(0, 1).a(yo.i.a()).c();
            zq.j c10 = zq.j.a(0, 4).a(NetworkInquiryModule_ProvideMoshiJsonAdapterFactoryFactory.create()).a(NetworkCoreModule_ProvideMoshiJsonAdapterFactoryFactory.create()).a(yo.k.a()).a(v0.a()).c();
            this.f18772l = c10;
            zq.h c11 = zq.c.c(NetworkCoreModule_MoshiFactory.create(networkCoreModule, this.f18766j, this.f18769k, (zq.h) c10));
            this.f18775m = c11;
            this.f18778n = NetworkCoreModule_InterceptorFactory.create(networkCoreModule, c11);
            zq.h c12 = zq.c.c(ip.d.a());
            this.f18781o = c12;
            this.f18784p = ip.g.a(fVar2, c12);
            this.f18787q = zq.j.a(3, 0).b(this.f18763i).b(this.f18778n).b(this.f18784p).c();
            this.f18790r = NetworkCoreModule_KeyInflectionFactory.create(networkCoreModule);
            this.f18793s = NetworkCoreModule_UseServerStylesFactory.create(networkCoreModule);
            this.f18796t = zq.f.b(3).c("Key-Inflection", this.f18790r).c("Persona-Use-Mobile-Server-Styles", this.f18793s).c("User-Agent", com.withpersona.sdk2.inquiry.internal.network.g.a()).b();
            ao.s a10 = ao.s.a(this.f18757g);
            this.f18799u = a10;
            this.f18802v = zq.c.c(ao.d.b(cVar2, a10));
            ao.m a11 = ao.m.a(this.f18757g);
            this.f18805w = a11;
            this.f18807x = zq.c.c(ao.f.a(cVar2, a11));
            bp.d a12 = bp.d.a(this.f18757g);
            this.f18809y = a12;
            NetworkCoreModule_OkhttpClientFactory create = NetworkCoreModule_OkhttpClientFactory.create(networkCoreModule, this.f18787q, this.f18796t, this.f18757g, this.f18802v, this.f18807x, (zq.h) a12);
            this.f18811z = create;
            zq.h c13 = zq.c.c(NetworkCoreModule_RetrofitFactory.create(networkCoreModule, this.f18760h, (zq.h) create, this.f18775m));
            this.A = c13;
            this.B = zq.c.c(yo.h.a(fVar, c13));
            this.C = wo.e.a(cVar);
            this.D = zq.c.c(yo.f.a(fVar, this.A));
            this.E = wo.g.a(cVar);
        }

        private void y(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, ap.o oVar, sn.n nVar, ap.u uVar, up.a aVar, so.l lVar, ap.b bVar, ap.g gVar, ip.f fVar2, ep.g gVar2, qp.b bVar2, wo.c cVar, pp.v vVar, sp.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, tp.f fVar3, ap.a0 a0Var, ao.c cVar2) {
            wo.k a10 = wo.k.a(this.E);
            this.F = a10;
            zq.h b10 = com.withpersona.sdk2.inquiry.internal.fallbackmode.j.b(a10);
            this.G = b10;
            this.H = com.withpersona.sdk2.inquiry.internal.fallbackmode.e.a(this.D, this.f18775m, b10);
            com.withpersona.sdk2.inquiry.internal.fallbackmode.g a11 = com.withpersona.sdk2.inquiry.internal.fallbackmode.g.a(this.f18775m, this.f18757g, this.G);
            this.I = a11;
            zq.h a12 = com.withpersona.sdk2.inquiry.internal.fallbackmode.h.a(a11);
            this.J = a12;
            this.K = com.withpersona.sdk2.inquiry.internal.fallbackmode.b.b(aVar3, this.H, a12);
            wo.d a13 = wo.d.a(cVar);
            this.L = a13;
            this.M = zq.c.c(wo.j.a(this.C, this.K, a13, this.f18775m));
            ao.k a14 = ao.k.a(this.f18757g);
            this.N = a14;
            this.O = zq.c.c(ao.e.a(cVar2, a14));
            bp.f a15 = bp.f.a(this.f18809y);
            this.P = a15;
            this.Q = bp.g.b(a15);
            this.R = zq.c.c(xo.e.a());
            sp.b a16 = sp.b.a(aVar2);
            this.S = a16;
            zq.h c10 = zq.c.c(xo.c.a(this.f18757g, this.Q, this.R, a16));
            this.T = c10;
            zq.h c11 = zq.c.c(yo.c.a(this.f18757g, this.B, this.M, this.f18781o, this.O, c10));
            this.U = c11;
            so.d a17 = so.d.a(c11);
            this.V = a17;
            this.W = d.b(a17);
            so.c a18 = so.c.a(this.U);
            this.X = a18;
            this.Y = com.withpersona.sdk2.inquiry.internal.b.b(a18);
            so.m b11 = so.m.b(lVar);
            this.Z = b11;
            zq.h c12 = zq.c.c(jq.f.a(this.f18811z, b11));
            this.f18740a0 = c12;
            d2 a19 = d2.a(this.f18757g, this.B, this.O, this.f18781o, this.M, c12);
            this.f18743b0 = a19;
            this.f18746c0 = r.b(a19);
            this.f18749d0 = k2.a(this.U);
        }

        private void z(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, ap.o oVar, sn.n nVar, ap.u uVar, up.a aVar, so.l lVar, ap.b bVar, ap.g gVar, ip.f fVar2, ep.g gVar2, qp.b bVar2, wo.c cVar, pp.v vVar, sp.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, tp.f fVar3, ap.a0 a0Var, ao.c cVar2) {
            this.f18752e0 = v.b(this.f18749d0);
            this.f18755f0 = zq.c.c(wo.f.a(cVar, this.M));
            zq.h c10 = zq.c.c(m2.a(this.f18757g));
            this.f18758g0 = c10;
            y a10 = y.a(this.B, this.f18755f0, c10);
            this.f18761h0 = a10;
            this.f18764i0 = z.b(a10);
            n2 a11 = n2.a(this.U);
            this.f18767j0 = a11;
            this.f18770k0 = b0.b(a11);
            so.i a12 = so.i.a(this.U);
            this.f18773l0 = a12;
            this.f18776m0 = g.b(a12);
            this.f18779n0 = zq.c.c(so.o.a(lVar, this.f18757g));
            this.f18782o0 = zq.c.c(yo.g.a(fVar, this.A));
            this.f18785p0 = qp.c.a(bVar2);
            this.f18788q0 = zq.c.c(pp.x.a(vVar, vp.c.a()));
            zq.h c11 = zq.c.c(xn.c.a(this.f18757g));
            this.f18791r0 = c11;
            sn.o b10 = sn.o.b(nVar, c11);
            this.f18794s0 = b10;
            oo.g a13 = oo.g.a(this.f18757g, this.f18782o0, this.f18785p0, this.f18755f0, this.f18788q0, b10);
            this.f18797t0 = a13;
            this.f18800u0 = oo.h.b(a13);
            this.f18803v0 = zq.c.c(ap.r.a(oVar));
            up.b a14 = up.b.a(aVar);
            this.f18806w0 = a14;
            sn.a0 a15 = sn.a0.a(this.f18794s0, a14);
            this.f18808x0 = a15;
            this.f18810y0 = sn.b0.b(a15);
            un.h a16 = un.h.a(this.f18757g, this.f18794s0, this.f18806w0);
            this.f18812z0 = a16;
            this.A0 = un.i.b(a16);
            tp.g a17 = tp.g.a(fVar3);
            this.B0 = a17;
            this.C0 = zq.c.c(xp.c.a(a17));
        }

        @Override // so.q
        public bn.e0 a() {
            return (bn.e0) this.f18795s1.get();
        }

        @Override // so.q
        public n b() {
            return new n(so.n.a(this.f18739a), (c.a) this.W.get(), (a.InterfaceC0243a) this.Y.get(), (q.b) this.f18746c0.get(), (u.a) this.f18752e0.get(), (x.a) this.f18764i0.get(), (a0.a) this.f18770k0.get(), (f.a) this.f18776m0.get(), w(), G(), J(), u(), (ip.c) this.f18781o.get(), tp.g.b(this.f18751e), (xp.b) this.C0.get(), (tp.c) this.O0.get(), (l2) this.f18758g0.get(), (s.a) this.f18774l1.get());
        }

        @Override // so.q
        public ao.g c() {
            return (ao.g) this.f18802v.get();
        }

        @Override // so.q
        public so.g d() {
            return (so.g) this.f18798t1.get();
        }

        @Override // so.q
        public v4.h e() {
            return (v4.h) this.f18779n0.get();
        }

        @Override // so.q
        public yp.a f() {
            return (yp.a) this.f18804v1.get();
        }

        @Override // so.q
        public jq.a g() {
            return (jq.a) this.f18740a0.get();
        }

        private b(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, ap.o oVar, sn.n nVar, ap.u uVar, up.a aVar, so.l lVar, ap.b bVar, ap.g gVar, ip.f fVar2, ep.g gVar2, qp.b bVar2, wo.c cVar, pp.v vVar, sp.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, tp.f fVar3, ap.a0 a0Var, ao.c cVar2) {
            this.f18754f = this;
            this.f18739a = lVar;
            this.f18742b = aVar;
            this.f18745c = nVar;
            this.f18748d = bVar2;
            this.f18751e = fVar3;
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
