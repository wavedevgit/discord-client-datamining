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
import cp.d0;
import eo.r2;
import eo.v2;
import go.a;
import gp.o;
import hp.e0;
import hp.j1;
import hp.m;
import jo.e0;
import jo.f0;
import jo.g3;
import jo.j0;
import jo.v0;
import jo.w0;
import lo.m0;
import mp.b1;
import mp.c1;
import mp.d1;
import mp.g1;
import mp.o1;
import mp.q0;
import mp.x5;
import op.c;
import po.a;
import pq.a1;
import pq.a5;
import pq.b5;
import pq.q1;
import pq.v4;
import pq.y0;
import pq.z0;
import pq.z4;
import qo.f;
import rq.a;
import sq.b;
import un.b1;
import un.g0;
import un.x0;
import un.z;
import uo.d2;
import uo.i2;
import uo.k2;
import uo.l2;
import uo.m2;
import uo.n2;
import wn.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private NetworkCoreModule f18700a;

        /* renamed from: b  reason: collision with root package name */
        private com.withpersona.sdk2.inquiry.internal.network.f f18701b;

        /* renamed from: c  reason: collision with root package name */
        private cp.o f18702c;

        /* renamed from: d  reason: collision with root package name */
        private un.n f18703d;

        /* renamed from: e  reason: collision with root package name */
        private cp.u f18704e;

        /* renamed from: f  reason: collision with root package name */
        private wp.a f18705f;

        /* renamed from: g  reason: collision with root package name */
        private uo.l f18706g;

        /* renamed from: h  reason: collision with root package name */
        private cp.b f18707h;

        /* renamed from: i  reason: collision with root package name */
        private cp.g f18708i;

        /* renamed from: j  reason: collision with root package name */
        private kp.f f18709j;

        /* renamed from: k  reason: collision with root package name */
        private gp.g f18710k;

        /* renamed from: l  reason: collision with root package name */
        private sp.b f18711l;

        /* renamed from: m  reason: collision with root package name */
        private yo.c f18712m;

        /* renamed from: n  reason: collision with root package name */
        private rp.v f18713n;

        /* renamed from: o  reason: collision with root package name */
        private up.a f18714o;

        /* renamed from: p  reason: collision with root package name */
        private com.withpersona.sdk2.inquiry.internal.fallbackmode.a f18715p;

        /* renamed from: q  reason: collision with root package name */
        private vp.f f18716q;

        /* renamed from: r  reason: collision with root package name */
        private cp.a0 f18717r;

        /* renamed from: s  reason: collision with root package name */
        private co.c f18718s;

        public a a(com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar) {
            this.f18715p = (com.withpersona.sdk2.inquiry.internal.fallbackmode.a) br.g.b(aVar);
            return this;
        }

        public uo.q b() {
            br.g.a(this.f18700a, NetworkCoreModule.class);
            br.g.a(this.f18701b, com.withpersona.sdk2.inquiry.internal.network.f.class);
            br.g.a(this.f18702c, cp.o.class);
            if (this.f18703d == null) {
                this.f18703d = new un.n();
            }
            br.g.a(this.f18704e, cp.u.class);
            br.g.a(this.f18705f, wp.a.class);
            br.g.a(this.f18706g, uo.l.class);
            br.g.a(this.f18707h, cp.b.class);
            br.g.a(this.f18708i, cp.g.class);
            if (this.f18709j == null) {
                this.f18709j = new kp.f();
            }
            br.g.a(this.f18710k, gp.g.class);
            br.g.a(this.f18711l, sp.b.class);
            br.g.a(this.f18712m, yo.c.class);
            if (this.f18713n == null) {
                this.f18713n = new rp.v();
            }
            if (this.f18714o == null) {
                this.f18714o = new up.a();
            }
            br.g.a(this.f18715p, com.withpersona.sdk2.inquiry.internal.fallbackmode.a.class);
            br.g.a(this.f18716q, vp.f.class);
            br.g.a(this.f18717r, cp.a0.class);
            if (this.f18718s == null) {
                this.f18718s = new co.c();
            }
            return new b(this.f18700a, this.f18701b, this.f18702c, this.f18703d, this.f18704e, this.f18705f, this.f18706g, this.f18707h, this.f18708i, this.f18709j, this.f18710k, this.f18711l, this.f18712m, this.f18713n, this.f18714o, this.f18715p, this.f18716q, this.f18717r, this.f18718s);
        }

        public a c(cp.b bVar) {
            this.f18707h = (cp.b) br.g.b(bVar);
            return this;
        }

        public a d(sp.b bVar) {
            this.f18711l = (sp.b) br.g.b(bVar);
            return this;
        }

        public a e(cp.g gVar) {
            this.f18708i = (cp.g) br.g.b(gVar);
            return this;
        }

        public a f(cp.o oVar) {
            this.f18702c = (cp.o) br.g.b(oVar);
            return this;
        }

        public a g(vp.f fVar) {
            this.f18716q = (vp.f) br.g.b(fVar);
            return this;
        }

        public a h(yo.c cVar) {
            this.f18712m = (yo.c) br.g.b(cVar);
            return this;
        }

        public a i(wp.a aVar) {
            this.f18705f = (wp.a) br.g.b(aVar);
            return this;
        }

        public a j(uo.l lVar) {
            this.f18706g = (uo.l) br.g.b(lVar);
            return this;
        }

        public a k(com.withpersona.sdk2.inquiry.internal.network.f fVar) {
            this.f18701b = (com.withpersona.sdk2.inquiry.internal.network.f) br.g.b(fVar);
            return this;
        }

        public a l(NetworkCoreModule networkCoreModule) {
            this.f18700a = (NetworkCoreModule) br.g.b(networkCoreModule);
            return this;
        }

        public a m(gp.g gVar) {
            this.f18710k = (gp.g) br.g.b(gVar);
            return this;
        }

        public a n(cp.u uVar) {
            this.f18704e = (cp.u) br.g.b(uVar);
            return this;
        }

        public a o(cp.a0 a0Var) {
            this.f18717r = (cp.a0) br.g.b(a0Var);
            return this;
        }

        public a p(rp.v vVar) {
            this.f18713n = (rp.v) br.g.b(vVar);
            return this;
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements uo.q {
        private br.h A;
        private br.h A0;
        private br.h B;
        private br.h B0;
        private br.h C;
        private br.h C0;
        private br.h D;
        private br.h D0;
        private br.h E;
        private br.h E0;
        private yo.k F;
        private hp.n F0;
        private br.h G;
        private br.h G0;
        private br.h H;
        private br.h H0;
        private com.withpersona.sdk2.inquiry.internal.fallbackmode.g I;
        private br.h I0;
        private br.h J;
        private f0 J0;
        private br.h K;
        private br.h K0;
        private br.h L;
        private po.b L0;
        private br.h M;
        private br.h M0;
        private br.h N;
        private br.h N0;
        private br.h O;
        private br.h O0;
        private dp.f P;
        private br.h P0;
        private br.h Q;
        private op.d Q0;
        private br.h R;
        private br.h R0;
        private br.h S;
        private br.h S0;
        private br.h T;
        private br.h T0;
        private br.h U;
        private c1 U0;
        private uo.d V;
        private br.h V0;
        private br.h W;
        private br.h W0;
        private uo.c X;
        private gp.p X0;
        private br.h Y;
        private br.h Y0;
        private br.h Z;
        private br.h Z0;

        /* renamed from: a  reason: collision with root package name */
        private final uo.l f18719a;

        /* renamed from: a0  reason: collision with root package name */
        private br.h f18720a0;

        /* renamed from: a1  reason: collision with root package name */
        private br.h f18721a1;

        /* renamed from: b  reason: collision with root package name */
        private final wp.a f18722b;

        /* renamed from: b0  reason: collision with root package name */
        private d2 f18723b0;

        /* renamed from: b1  reason: collision with root package name */
        private z0 f18724b1;

        /* renamed from: c  reason: collision with root package name */
        private final un.n f18725c;

        /* renamed from: c0  reason: collision with root package name */
        private br.h f18726c0;

        /* renamed from: c1  reason: collision with root package name */
        private br.h f18727c1;

        /* renamed from: d  reason: collision with root package name */
        private final sp.b f18728d;

        /* renamed from: d0  reason: collision with root package name */
        private k2 f18729d0;

        /* renamed from: d1  reason: collision with root package name */
        private a5 f18730d1;

        /* renamed from: e  reason: collision with root package name */
        private final vp.f f18731e;

        /* renamed from: e0  reason: collision with root package name */
        private br.h f18732e0;

        /* renamed from: e1  reason: collision with root package name */
        private br.h f18733e1;

        /* renamed from: f  reason: collision with root package name */
        private final b f18734f;

        /* renamed from: f0  reason: collision with root package name */
        private br.h f18735f0;

        /* renamed from: f1  reason: collision with root package name */
        private br.h f18736f1;

        /* renamed from: g  reason: collision with root package name */
        private br.h f18737g;

        /* renamed from: g0  reason: collision with root package name */
        private br.h f18738g0;

        /* renamed from: g1  reason: collision with root package name */
        private br.h f18739g1;

        /* renamed from: h  reason: collision with root package name */
        private br.h f18740h;

        /* renamed from: h0  reason: collision with root package name */
        private y f18741h0;

        /* renamed from: h1  reason: collision with root package name */
        private br.h f18742h1;

        /* renamed from: i  reason: collision with root package name */
        private br.h f18743i;

        /* renamed from: i0  reason: collision with root package name */
        private br.h f18744i0;

        /* renamed from: i1  reason: collision with root package name */
        private br.h f18745i1;

        /* renamed from: j  reason: collision with root package name */
        private br.h f18746j;

        /* renamed from: j0  reason: collision with root package name */
        private n2 f18747j0;

        /* renamed from: j1  reason: collision with root package name */
        private br.h f18748j1;

        /* renamed from: k  reason: collision with root package name */
        private br.h f18749k;

        /* renamed from: k0  reason: collision with root package name */
        private br.h f18750k0;

        /* renamed from: k1  reason: collision with root package name */
        private i2 f18751k1;

        /* renamed from: l  reason: collision with root package name */
        private br.h f18752l;

        /* renamed from: l0  reason: collision with root package name */
        private uo.i f18753l0;

        /* renamed from: l1  reason: collision with root package name */
        private br.h f18754l1;

        /* renamed from: m  reason: collision with root package name */
        private br.h f18755m;

        /* renamed from: m0  reason: collision with root package name */
        private br.h f18756m0;

        /* renamed from: m1  reason: collision with root package name */
        private br.h f18757m1;

        /* renamed from: n  reason: collision with root package name */
        private br.h f18758n;

        /* renamed from: n0  reason: collision with root package name */
        private br.h f18759n0;

        /* renamed from: n1  reason: collision with root package name */
        private br.h f18760n1;

        /* renamed from: o  reason: collision with root package name */
        private br.h f18761o;

        /* renamed from: o0  reason: collision with root package name */
        private br.h f18762o0;

        /* renamed from: o1  reason: collision with root package name */
        private br.h f18763o1;

        /* renamed from: p  reason: collision with root package name */
        private br.h f18764p;

        /* renamed from: p0  reason: collision with root package name */
        private br.h f18765p0;

        /* renamed from: p1  reason: collision with root package name */
        private br.h f18766p1;

        /* renamed from: q  reason: collision with root package name */
        private br.h f18767q;

        /* renamed from: q0  reason: collision with root package name */
        private br.h f18768q0;

        /* renamed from: q1  reason: collision with root package name */
        private br.h f18769q1;

        /* renamed from: r  reason: collision with root package name */
        private br.h f18770r;

        /* renamed from: r0  reason: collision with root package name */
        private br.h f18771r0;

        /* renamed from: r1  reason: collision with root package name */
        private br.h f18772r1;

        /* renamed from: s  reason: collision with root package name */
        private br.h f18773s;

        /* renamed from: s0  reason: collision with root package name */
        private br.h f18774s0;

        /* renamed from: s1  reason: collision with root package name */
        private br.h f18775s1;

        /* renamed from: t  reason: collision with root package name */
        private br.h f18776t;

        /* renamed from: t0  reason: collision with root package name */
        private qo.g f18777t0;

        /* renamed from: t1  reason: collision with root package name */
        private br.h f18778t1;

        /* renamed from: u  reason: collision with root package name */
        private br.h f18779u;

        /* renamed from: u0  reason: collision with root package name */
        private br.h f18780u0;

        /* renamed from: u1  reason: collision with root package name */
        private br.h f18781u1;

        /* renamed from: v  reason: collision with root package name */
        private br.h f18782v;

        /* renamed from: v0  reason: collision with root package name */
        private br.h f18783v0;

        /* renamed from: v1  reason: collision with root package name */
        private br.h f18784v1;

        /* renamed from: w  reason: collision with root package name */
        private br.h f18785w;

        /* renamed from: w0  reason: collision with root package name */
        private br.h f18786w0;

        /* renamed from: x  reason: collision with root package name */
        private br.h f18787x;

        /* renamed from: x0  reason: collision with root package name */
        private un.a0 f18788x0;

        /* renamed from: y  reason: collision with root package name */
        private br.h f18789y;

        /* renamed from: y0  reason: collision with root package name */
        private br.h f18790y0;

        /* renamed from: z  reason: collision with root package name */
        private br.h f18791z;

        /* renamed from: z0  reason: collision with root package name */
        private wn.h f18792z0;

        private void A(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, cp.o oVar, un.n nVar, cp.u uVar, wp.a aVar, uo.l lVar, cp.b bVar, cp.g gVar, kp.f fVar2, gp.g gVar2, sp.b bVar2, yo.c cVar, rp.v vVar, up.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, vp.f fVar3, cp.a0 a0Var, co.c cVar2) {
            this.D0 = br.c.c(cp.x.a(uVar));
            br.h c10 = br.c.c(d0.a(a0Var));
            this.E0 = c10;
            hp.n a10 = hp.n.a(c10, this.f18737g);
            this.F0 = a10;
            this.G0 = hp.o.a(a10);
            br.h c11 = br.c.c(un.p.a(nVar));
            this.H0 = c11;
            g0 a11 = g0.a(c11);
            this.I0 = a11;
            f0 a12 = f0.a(this.f18737g, a11, this.f18786w0);
            this.J0 = a12;
            this.K0 = jo.g0.b(a12);
            po.b a13 = po.b.a(this.f18737g, this.I0);
            this.L0 = a13;
            this.M0 = po.c.b(a13);
            this.N0 = br.c.c(ap.q.a(fVar, this.A));
            this.O0 = br.c.c(vp.d.a(this.B0));
            br.h c12 = br.c.c(ap.m.a(fVar, this.A));
            this.P0 = c12;
            op.d a14 = op.d.a(this.f18737g, c12, this.f18765p0, this.f18735f0, this.f18768q0, this.f18774s0);
            this.Q0 = a14;
            this.R0 = op.e.b(a14);
            this.S0 = br.c.c(un.q.a(nVar));
            x0 a15 = x0.a(b1.a(), this.S0);
            this.T0 = a15;
            c1 a16 = c1.a(a15, this.f18786w0);
            this.U0 = a16;
            this.V0 = d1.b(a16);
            br.h c13 = br.c.c(gp.j.a(gVar2));
            this.W0 = c13;
            gp.p a17 = gp.p.a(c13, this.f18737g, this.f18761o);
            this.X0 = a17;
            this.Y0 = gp.q.b(a17);
            this.Z0 = br.c.c(ap.o.a(fVar, this.A));
            br.h c14 = br.c.c(cp.e.a(bVar));
            this.f18721a1 = c14;
            this.f18724b1 = z0.a(this.Z0, this.O, c14);
        }

        private void B(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, cp.o oVar, un.n nVar, cp.u uVar, wp.a aVar, uo.l lVar, cp.b bVar, cp.g gVar, kp.f fVar2, gp.g gVar2, sp.b bVar2, yo.c cVar, rp.v vVar, up.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, vp.f fVar3, cp.a0 a0Var, co.c cVar2) {
            this.f18727c1 = a1.b(this.f18724b1);
            a5 a10 = a5.a(this.f18721a1, this.Z0, this.f18755m);
            this.f18730d1 = a10;
            this.f18733e1 = b5.b(a10);
            this.f18736f1 = br.c.c(cp.n.a(gVar));
            this.f18739g1 = br.c.c(cp.l.a(gVar));
            this.f18742h1 = br.c.c(cp.m.a(gVar));
            this.f18745i1 = br.c.c(ap.e.a(fVar, this.A));
            this.f18748j1 = br.c.c(rp.w.a(vVar, rp.r.a()));
            i2 a11 = i2.a(this.f18738g0);
            this.f18751k1 = a11;
            this.f18754l1 = t.b(a11);
            j0 a12 = j0.a(this.I0, un.u.a());
            this.f18757m1 = a12;
            this.f18760n1 = w0.a(a12);
            this.f18763o1 = q0.a(un.u.a(), this.T0);
            g1 a13 = g1.a(un.u.a(), this.T0);
            this.f18766p1 = a13;
            this.f18769q1 = o1.a(this.f18763o1, a13);
            br.j c10 = br.j.a(0, 8).a(ap.l.a()).a(this.f18760n1).a(q1.a()).a(this.f18769q1).a(eo.k.a()).a(kp.h.a()).a(ep.f.a()).a(j1.a()).c();
            this.f18772r1 = c10;
            this.f18775s1 = br.c.c(ap.p.a(c10));
            this.f18778t1 = br.c.c(uo.h.a(this.B, this.f18755m, this.f18789y));
            uo.p a14 = uo.p.a(lVar);
            this.f18781u1 = a14;
            this.f18784v1 = br.c.c(rp.y.a(vVar, a14));
        }

        private ro.j C() {
            return new ro.j(uo.n.a(this.f18719a), (z.a) this.f18790y0.get(), (g.a) this.A0.get(), (zp.b) this.C0.get());
        }

        private pp.j D() {
            return new pp.j(uo.n.a(this.f18719a), (z.a) this.f18790y0.get(), (g.a) this.A0.get(), (zp.b) this.C0.get());
        }

        private e0.a E() {
            return new e0.a(uo.n.a(this.f18719a), (ActivityResultLauncher) this.D0.get());
        }

        private hp.c1 F() {
            return new hp.c1(uo.n.a(this.f18719a), E(), m());
        }

        private x5 G() {
            return new x5(uo.n.a(this.f18719a), (c.a) this.R0.get(), L(), (b1.b) this.V0.get(), F(), D(), (z.a) this.f18790y0.get(), (g.a) this.A0.get(), j(), (zp.b) this.C0.get(), (vp.c) this.O0.get());
        }

        private b.a H() {
            return new b.a((rq.b) this.Z0.get());
        }

        private a.C0623a I() {
            return new a.C0623a((rq.b) this.Z0.get());
        }

        private v4 J() {
            return new v4(uo.n.a(this.f18719a), (o.a) this.Y0.get(), (y0.a) this.f18727c1.get(), (z4.a) this.f18733e1.get(), (zp.b) this.C0.get(), F(), l(), (vp.c) this.O0.get());
        }

        private ro.s K() {
            return new ro.s(uo.n.a(this.f18719a), (z.a) this.f18790y0.get(), (g.a) this.A0.get(), (zp.b) this.C0.get());
        }

        private b.a L() {
            return new b.a((sq.a) this.N0.get());
        }

        private ko.o h() {
            return new ko.o((zp.b) this.C0.get());
        }

        private AutoClassifyWorker.b i() {
            return new AutoClassifyWorker.b((com.withpersona.sdk2.inquiry.governmentid.network.a) this.f18762o0.get(), (xp.a) this.f18768q0.get());
        }

        private zn.a j() {
            return un.o.a(this.f18725c, br.c.b(this.f18771r0));
        }

        private m0 k() {
            return new m0(uo.n.a(this.f18719a), F(), (e0.a) this.K0.get(), (a.b) this.M0.get(), L(), (z.a) this.f18790y0.get(), (g.a) this.A0.get(), (zp.b) this.C0.get());
        }

        private pq.x0 l() {
            return new pq.x0(H(), I());
        }

        private hp.x m() {
            return new hp.x(uo.n.a(this.f18719a), (m.a) this.G0.get());
        }

        private eo.c n() {
            return new eo.c((ActivityResultLauncher) this.f18736f1.get(), uo.n.a(this.f18719a), wp.b.c(this.f18722b));
        }

        private a.C0222a o() {
            return new a.C0222a((go.b) this.f18745i1.get());
        }

        private a.C0342a p() {
            return new a.C0342a((go.b) this.f18745i1.get());
        }

        private b.a q() {
            return new b.a((go.b) this.f18745i1.get(), (rp.i) this.f18748j1.get());
        }

        private c.a r() {
            return new c.a((go.b) this.f18745i1.get());
        }

        private jo.a0 s() {
            return new jo.a0((ActivityResultLauncher) this.f18783v0.get(), uo.n.a(this.f18719a), wp.b.c(this.f18722b));
        }

        private d.a t() {
            return new d.a((go.b) this.f18745i1.get(), (io.a) this.f18735f0.get(), sp.c.b(this.f18728d));
        }

        private r2 u() {
            return new r2((v4.h) this.f18759n0.get(), uo.n.a(this.f18719a), F(), n(), v(), o(), r(), q(), p(), t(), (zp.b) this.C0.get(), (vp.c) this.O0.get());
        }

        private v2.b v() {
            return new v2.b((ActivityResultLauncher) this.f18739g1.get(), (ActivityResultLauncher) this.f18742h1.get(), uo.n.a(this.f18719a), wp.b.c(this.f18722b));
        }

        private g3 w() {
            return new g3(uo.n.a(this.f18719a), (v4.h) this.f18759n0.get(), (f.a) this.f18780u0.get(), s(), C(), K(), k(), i(), h(), j(), (zp.b) this.C0.get(), (vp.c) this.O0.get());
        }

        private void x(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, cp.o oVar, un.n nVar, cp.u uVar, wp.a aVar, uo.l lVar, cp.b bVar, cp.g gVar, kp.f fVar2, gp.g gVar2, sp.b bVar2, yo.c cVar, rp.v vVar, up.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, vp.f fVar3, cp.a0 a0Var, co.c cVar2) {
            this.f18737g = uo.n.b(lVar);
            this.f18740h = ap.n.a(fVar);
            this.f18743i = NetworkCoreModule_ResponseInterceptorFactory.create(networkCoreModule);
            this.f18746j = br.j.a(0, 1).a(ap.j.a()).c();
            this.f18749k = br.j.a(0, 1).a(ap.i.a()).c();
            br.j c10 = br.j.a(0, 4).a(NetworkInquiryModule_ProvideMoshiJsonAdapterFactoryFactory.create()).a(NetworkCoreModule_ProvideMoshiJsonAdapterFactoryFactory.create()).a(ap.k.a()).a(v0.a()).c();
            this.f18752l = c10;
            br.h c11 = br.c.c(NetworkCoreModule_MoshiFactory.create(networkCoreModule, this.f18746j, this.f18749k, (br.h) c10));
            this.f18755m = c11;
            this.f18758n = NetworkCoreModule_InterceptorFactory.create(networkCoreModule, c11);
            br.h c12 = br.c.c(kp.d.a());
            this.f18761o = c12;
            this.f18764p = kp.g.a(fVar2, c12);
            this.f18767q = br.j.a(3, 0).b(this.f18743i).b(this.f18758n).b(this.f18764p).c();
            this.f18770r = NetworkCoreModule_KeyInflectionFactory.create(networkCoreModule);
            this.f18773s = NetworkCoreModule_UseServerStylesFactory.create(networkCoreModule);
            this.f18776t = br.f.b(3).c("Key-Inflection", this.f18770r).c("Persona-Use-Mobile-Server-Styles", this.f18773s).c("User-Agent", com.withpersona.sdk2.inquiry.internal.network.g.a()).b();
            co.s a10 = co.s.a(this.f18737g);
            this.f18779u = a10;
            this.f18782v = br.c.c(co.d.b(cVar2, a10));
            co.m a11 = co.m.a(this.f18737g);
            this.f18785w = a11;
            this.f18787x = br.c.c(co.f.a(cVar2, a11));
            dp.d a12 = dp.d.a(this.f18737g);
            this.f18789y = a12;
            NetworkCoreModule_OkhttpClientFactory create = NetworkCoreModule_OkhttpClientFactory.create(networkCoreModule, this.f18767q, this.f18776t, this.f18737g, this.f18782v, this.f18787x, (br.h) a12);
            this.f18791z = create;
            br.h c13 = br.c.c(NetworkCoreModule_RetrofitFactory.create(networkCoreModule, this.f18740h, (br.h) create, this.f18755m));
            this.A = c13;
            this.B = br.c.c(ap.h.a(fVar, c13));
            this.C = yo.e.a(cVar);
            this.D = br.c.c(ap.f.a(fVar, this.A));
            this.E = yo.g.a(cVar);
        }

        private void y(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, cp.o oVar, un.n nVar, cp.u uVar, wp.a aVar, uo.l lVar, cp.b bVar, cp.g gVar, kp.f fVar2, gp.g gVar2, sp.b bVar2, yo.c cVar, rp.v vVar, up.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, vp.f fVar3, cp.a0 a0Var, co.c cVar2) {
            yo.k a10 = yo.k.a(this.E);
            this.F = a10;
            br.h b10 = com.withpersona.sdk2.inquiry.internal.fallbackmode.j.b(a10);
            this.G = b10;
            this.H = com.withpersona.sdk2.inquiry.internal.fallbackmode.e.a(this.D, this.f18755m, b10);
            com.withpersona.sdk2.inquiry.internal.fallbackmode.g a11 = com.withpersona.sdk2.inquiry.internal.fallbackmode.g.a(this.f18755m, this.f18737g, this.G);
            this.I = a11;
            br.h a12 = com.withpersona.sdk2.inquiry.internal.fallbackmode.h.a(a11);
            this.J = a12;
            this.K = com.withpersona.sdk2.inquiry.internal.fallbackmode.b.b(aVar3, this.H, a12);
            yo.d a13 = yo.d.a(cVar);
            this.L = a13;
            this.M = br.c.c(yo.j.a(this.C, this.K, a13, this.f18755m));
            co.k a14 = co.k.a(this.f18737g);
            this.N = a14;
            this.O = br.c.c(co.e.a(cVar2, a14));
            dp.f a15 = dp.f.a(this.f18789y);
            this.P = a15;
            this.Q = dp.g.b(a15);
            this.R = br.c.c(zo.e.a());
            up.b a16 = up.b.a(aVar2);
            this.S = a16;
            br.h c10 = br.c.c(zo.c.a(this.f18737g, this.Q, this.R, a16));
            this.T = c10;
            br.h c11 = br.c.c(ap.c.a(this.f18737g, this.B, this.M, this.f18761o, this.O, c10));
            this.U = c11;
            uo.d a17 = uo.d.a(c11);
            this.V = a17;
            this.W = d.b(a17);
            uo.c a18 = uo.c.a(this.U);
            this.X = a18;
            this.Y = com.withpersona.sdk2.inquiry.internal.b.b(a18);
            uo.m b11 = uo.m.b(lVar);
            this.Z = b11;
            br.h c12 = br.c.c(lq.f.a(this.f18791z, b11));
            this.f18720a0 = c12;
            d2 a19 = d2.a(this.f18737g, this.B, this.O, this.f18761o, this.M, c12);
            this.f18723b0 = a19;
            this.f18726c0 = r.b(a19);
            this.f18729d0 = k2.a(this.U);
        }

        private void z(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, cp.o oVar, un.n nVar, cp.u uVar, wp.a aVar, uo.l lVar, cp.b bVar, cp.g gVar, kp.f fVar2, gp.g gVar2, sp.b bVar2, yo.c cVar, rp.v vVar, up.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, vp.f fVar3, cp.a0 a0Var, co.c cVar2) {
            this.f18732e0 = v.b(this.f18729d0);
            this.f18735f0 = br.c.c(yo.f.a(cVar, this.M));
            br.h c10 = br.c.c(m2.a(this.f18737g));
            this.f18738g0 = c10;
            y a10 = y.a(this.B, this.f18735f0, c10);
            this.f18741h0 = a10;
            this.f18744i0 = z.b(a10);
            n2 a11 = n2.a(this.U);
            this.f18747j0 = a11;
            this.f18750k0 = b0.b(a11);
            uo.i a12 = uo.i.a(this.U);
            this.f18753l0 = a12;
            this.f18756m0 = g.b(a12);
            this.f18759n0 = br.c.c(uo.o.a(lVar, this.f18737g));
            this.f18762o0 = br.c.c(ap.g.a(fVar, this.A));
            this.f18765p0 = sp.c.a(bVar2);
            this.f18768q0 = br.c.c(rp.x.a(vVar, xp.c.a()));
            br.h c11 = br.c.c(zn.c.a(this.f18737g));
            this.f18771r0 = c11;
            un.o b10 = un.o.b(nVar, c11);
            this.f18774s0 = b10;
            qo.g a13 = qo.g.a(this.f18737g, this.f18762o0, this.f18765p0, this.f18735f0, this.f18768q0, b10);
            this.f18777t0 = a13;
            this.f18780u0 = qo.h.b(a13);
            this.f18783v0 = br.c.c(cp.r.a(oVar));
            wp.b a14 = wp.b.a(aVar);
            this.f18786w0 = a14;
            un.a0 a15 = un.a0.a(this.f18774s0, a14);
            this.f18788x0 = a15;
            this.f18790y0 = un.b0.b(a15);
            wn.h a16 = wn.h.a(this.f18737g, this.f18774s0, this.f18786w0);
            this.f18792z0 = a16;
            this.A0 = wn.i.b(a16);
            vp.g a17 = vp.g.a(fVar3);
            this.B0 = a17;
            this.C0 = br.c.c(zp.c.a(a17));
        }

        @Override // uo.q
        public dn.e0 a() {
            return (dn.e0) this.f18775s1.get();
        }

        @Override // uo.q
        public n b() {
            return new n(uo.n.a(this.f18719a), (c.a) this.W.get(), (a.InterfaceC0235a) this.Y.get(), (q.b) this.f18726c0.get(), (u.a) this.f18732e0.get(), (x.a) this.f18744i0.get(), (a0.a) this.f18750k0.get(), (f.a) this.f18756m0.get(), w(), G(), J(), u(), (kp.c) this.f18761o.get(), vp.g.b(this.f18731e), (zp.b) this.C0.get(), (vp.c) this.O0.get(), (l2) this.f18738g0.get(), (s.a) this.f18754l1.get());
        }

        @Override // uo.q
        public co.g c() {
            return (co.g) this.f18782v.get();
        }

        @Override // uo.q
        public uo.g d() {
            return (uo.g) this.f18778t1.get();
        }

        @Override // uo.q
        public v4.h e() {
            return (v4.h) this.f18759n0.get();
        }

        @Override // uo.q
        public aq.a f() {
            return (aq.a) this.f18784v1.get();
        }

        @Override // uo.q
        public lq.a g() {
            return (lq.a) this.f18720a0.get();
        }

        private b(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, cp.o oVar, un.n nVar, cp.u uVar, wp.a aVar, uo.l lVar, cp.b bVar, cp.g gVar, kp.f fVar2, gp.g gVar2, sp.b bVar2, yo.c cVar, rp.v vVar, up.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, vp.f fVar3, cp.a0 a0Var, co.c cVar2) {
            this.f18734f = this;
            this.f18719a = lVar;
            this.f18722b = aVar;
            this.f18725c = nVar;
            this.f18728d = bVar2;
            this.f18731e = fVar3;
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
