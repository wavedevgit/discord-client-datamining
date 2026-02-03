package com.withpersona.sdk2.inquiry.internal;

import androidx.activity.result.ActivityResultLauncher;
import ap.e0;
import ap.j1;
import ap.m;
import bo.e0;
import bo.f0;
import bo.g3;
import bo.j0;
import bo.v0;
import bo.w0;
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
import eo.m0;
import fp.b1;
import fp.c1;
import fp.d1;
import fp.g1;
import fp.o1;
import fp.q0;
import fp.x5;
import hp.c;
import io.a;
import iq.a1;
import iq.a5;
import iq.b5;
import iq.q1;
import iq.v4;
import iq.y0;
import iq.z0;
import iq.z4;
import jo.f;
import kq.a;
import lq.b;
import nn.b1;
import nn.g0;
import nn.x0;
import nn.z;
import no.d2;
import no.i2;
import no.k2;
import no.l2;
import no.m2;
import no.n2;
import pn.g;
import vo.d0;
import wn.r2;
import wn.v2;
import yn.a;
import zo.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private NetworkCoreModule f19332a;

        /* renamed from: b  reason: collision with root package name */
        private com.withpersona.sdk2.inquiry.internal.network.f f19333b;

        /* renamed from: c  reason: collision with root package name */
        private vo.o f19334c;

        /* renamed from: d  reason: collision with root package name */
        private nn.n f19335d;

        /* renamed from: e  reason: collision with root package name */
        private vo.u f19336e;

        /* renamed from: f  reason: collision with root package name */
        private pp.a f19337f;

        /* renamed from: g  reason: collision with root package name */
        private no.l f19338g;

        /* renamed from: h  reason: collision with root package name */
        private vo.b f19339h;

        /* renamed from: i  reason: collision with root package name */
        private vo.g f19340i;

        /* renamed from: j  reason: collision with root package name */
        private dp.f f19341j;

        /* renamed from: k  reason: collision with root package name */
        private zo.g f19342k;

        /* renamed from: l  reason: collision with root package name */
        private lp.b f19343l;

        /* renamed from: m  reason: collision with root package name */
        private ro.c f19344m;

        /* renamed from: n  reason: collision with root package name */
        private kp.v f19345n;

        /* renamed from: o  reason: collision with root package name */
        private np.a f19346o;

        /* renamed from: p  reason: collision with root package name */
        private com.withpersona.sdk2.inquiry.internal.fallbackmode.a f19347p;

        /* renamed from: q  reason: collision with root package name */
        private op.f f19348q;

        /* renamed from: r  reason: collision with root package name */
        private vo.a0 f19349r;

        /* renamed from: s  reason: collision with root package name */
        private vn.c f19350s;

        public a a(com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar) {
            this.f19347p = (com.withpersona.sdk2.inquiry.internal.fallbackmode.a) uq.g.b(aVar);
            return this;
        }

        public no.q b() {
            uq.g.a(this.f19332a, NetworkCoreModule.class);
            uq.g.a(this.f19333b, com.withpersona.sdk2.inquiry.internal.network.f.class);
            uq.g.a(this.f19334c, vo.o.class);
            if (this.f19335d == null) {
                this.f19335d = new nn.n();
            }
            uq.g.a(this.f19336e, vo.u.class);
            uq.g.a(this.f19337f, pp.a.class);
            uq.g.a(this.f19338g, no.l.class);
            uq.g.a(this.f19339h, vo.b.class);
            uq.g.a(this.f19340i, vo.g.class);
            if (this.f19341j == null) {
                this.f19341j = new dp.f();
            }
            uq.g.a(this.f19342k, zo.g.class);
            uq.g.a(this.f19343l, lp.b.class);
            uq.g.a(this.f19344m, ro.c.class);
            if (this.f19345n == null) {
                this.f19345n = new kp.v();
            }
            if (this.f19346o == null) {
                this.f19346o = new np.a();
            }
            uq.g.a(this.f19347p, com.withpersona.sdk2.inquiry.internal.fallbackmode.a.class);
            uq.g.a(this.f19348q, op.f.class);
            uq.g.a(this.f19349r, vo.a0.class);
            if (this.f19350s == null) {
                this.f19350s = new vn.c();
            }
            return new b(this.f19332a, this.f19333b, this.f19334c, this.f19335d, this.f19336e, this.f19337f, this.f19338g, this.f19339h, this.f19340i, this.f19341j, this.f19342k, this.f19343l, this.f19344m, this.f19345n, this.f19346o, this.f19347p, this.f19348q, this.f19349r, this.f19350s);
        }

        public a c(vo.b bVar) {
            this.f19339h = (vo.b) uq.g.b(bVar);
            return this;
        }

        public a d(lp.b bVar) {
            this.f19343l = (lp.b) uq.g.b(bVar);
            return this;
        }

        public a e(vo.g gVar) {
            this.f19340i = (vo.g) uq.g.b(gVar);
            return this;
        }

        public a f(vo.o oVar) {
            this.f19334c = (vo.o) uq.g.b(oVar);
            return this;
        }

        public a g(op.f fVar) {
            this.f19348q = (op.f) uq.g.b(fVar);
            return this;
        }

        public a h(ro.c cVar) {
            this.f19344m = (ro.c) uq.g.b(cVar);
            return this;
        }

        public a i(pp.a aVar) {
            this.f19337f = (pp.a) uq.g.b(aVar);
            return this;
        }

        public a j(no.l lVar) {
            this.f19338g = (no.l) uq.g.b(lVar);
            return this;
        }

        public a k(com.withpersona.sdk2.inquiry.internal.network.f fVar) {
            this.f19333b = (com.withpersona.sdk2.inquiry.internal.network.f) uq.g.b(fVar);
            return this;
        }

        public a l(NetworkCoreModule networkCoreModule) {
            this.f19332a = (NetworkCoreModule) uq.g.b(networkCoreModule);
            return this;
        }

        public a m(zo.g gVar) {
            this.f19342k = (zo.g) uq.g.b(gVar);
            return this;
        }

        public a n(vo.u uVar) {
            this.f19336e = (vo.u) uq.g.b(uVar);
            return this;
        }

        public a o(vo.a0 a0Var) {
            this.f19349r = (vo.a0) uq.g.b(a0Var);
            return this;
        }

        public a p(kp.v vVar) {
            this.f19345n = (kp.v) uq.g.b(vVar);
            return this;
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements no.q {
        private uq.h A;
        private uq.h A0;
        private uq.h B;
        private uq.h B0;
        private uq.h C;
        private uq.h C0;
        private uq.h D;
        private uq.h D0;
        private uq.h E;
        private uq.h E0;
        private ro.k F;
        private ap.n F0;
        private uq.h G;
        private uq.h G0;
        private uq.h H;
        private uq.h H0;
        private com.withpersona.sdk2.inquiry.internal.fallbackmode.g I;
        private uq.h I0;
        private uq.h J;
        private f0 J0;
        private uq.h K;
        private uq.h K0;
        private uq.h L;
        private io.b L0;
        private uq.h M;
        private uq.h M0;
        private uq.h N;
        private uq.h N0;
        private uq.h O;
        private uq.h O0;
        private wo.f P;
        private uq.h P0;
        private uq.h Q;
        private hp.d Q0;
        private uq.h R;
        private uq.h R0;
        private uq.h S;
        private uq.h S0;
        private uq.h T;
        private uq.h T0;
        private uq.h U;
        private c1 U0;
        private no.d V;
        private uq.h V0;
        private uq.h W;
        private uq.h W0;
        private no.c X;
        private zo.p X0;
        private uq.h Y;
        private uq.h Y0;
        private uq.h Z;
        private uq.h Z0;

        /* renamed from: a  reason: collision with root package name */
        private final no.l f19351a;

        /* renamed from: a0  reason: collision with root package name */
        private uq.h f19352a0;

        /* renamed from: a1  reason: collision with root package name */
        private uq.h f19353a1;

        /* renamed from: b  reason: collision with root package name */
        private final pp.a f19354b;

        /* renamed from: b0  reason: collision with root package name */
        private d2 f19355b0;

        /* renamed from: b1  reason: collision with root package name */
        private z0 f19356b1;

        /* renamed from: c  reason: collision with root package name */
        private final nn.n f19357c;

        /* renamed from: c0  reason: collision with root package name */
        private uq.h f19358c0;

        /* renamed from: c1  reason: collision with root package name */
        private uq.h f19359c1;

        /* renamed from: d  reason: collision with root package name */
        private final lp.b f19360d;

        /* renamed from: d0  reason: collision with root package name */
        private k2 f19361d0;

        /* renamed from: d1  reason: collision with root package name */
        private a5 f19362d1;

        /* renamed from: e  reason: collision with root package name */
        private final op.f f19363e;

        /* renamed from: e0  reason: collision with root package name */
        private uq.h f19364e0;

        /* renamed from: e1  reason: collision with root package name */
        private uq.h f19365e1;

        /* renamed from: f  reason: collision with root package name */
        private final b f19366f;

        /* renamed from: f0  reason: collision with root package name */
        private uq.h f19367f0;

        /* renamed from: f1  reason: collision with root package name */
        private uq.h f19368f1;

        /* renamed from: g  reason: collision with root package name */
        private uq.h f19369g;

        /* renamed from: g0  reason: collision with root package name */
        private uq.h f19370g0;

        /* renamed from: g1  reason: collision with root package name */
        private uq.h f19371g1;

        /* renamed from: h  reason: collision with root package name */
        private uq.h f19372h;

        /* renamed from: h0  reason: collision with root package name */
        private y f19373h0;

        /* renamed from: h1  reason: collision with root package name */
        private uq.h f19374h1;

        /* renamed from: i  reason: collision with root package name */
        private uq.h f19375i;

        /* renamed from: i0  reason: collision with root package name */
        private uq.h f19376i0;

        /* renamed from: i1  reason: collision with root package name */
        private uq.h f19377i1;

        /* renamed from: j  reason: collision with root package name */
        private uq.h f19378j;

        /* renamed from: j0  reason: collision with root package name */
        private n2 f19379j0;

        /* renamed from: j1  reason: collision with root package name */
        private uq.h f19380j1;

        /* renamed from: k  reason: collision with root package name */
        private uq.h f19381k;

        /* renamed from: k0  reason: collision with root package name */
        private uq.h f19382k0;

        /* renamed from: k1  reason: collision with root package name */
        private i2 f19383k1;

        /* renamed from: l  reason: collision with root package name */
        private uq.h f19384l;

        /* renamed from: l0  reason: collision with root package name */
        private no.i f19385l0;

        /* renamed from: l1  reason: collision with root package name */
        private uq.h f19386l1;

        /* renamed from: m  reason: collision with root package name */
        private uq.h f19387m;

        /* renamed from: m0  reason: collision with root package name */
        private uq.h f19388m0;

        /* renamed from: m1  reason: collision with root package name */
        private uq.h f19389m1;

        /* renamed from: n  reason: collision with root package name */
        private uq.h f19390n;

        /* renamed from: n0  reason: collision with root package name */
        private uq.h f19391n0;

        /* renamed from: n1  reason: collision with root package name */
        private uq.h f19392n1;

        /* renamed from: o  reason: collision with root package name */
        private uq.h f19393o;

        /* renamed from: o0  reason: collision with root package name */
        private uq.h f19394o0;

        /* renamed from: o1  reason: collision with root package name */
        private uq.h f19395o1;

        /* renamed from: p  reason: collision with root package name */
        private uq.h f19396p;

        /* renamed from: p0  reason: collision with root package name */
        private uq.h f19397p0;

        /* renamed from: p1  reason: collision with root package name */
        private uq.h f19398p1;

        /* renamed from: q  reason: collision with root package name */
        private uq.h f19399q;

        /* renamed from: q0  reason: collision with root package name */
        private uq.h f19400q0;

        /* renamed from: q1  reason: collision with root package name */
        private uq.h f19401q1;

        /* renamed from: r  reason: collision with root package name */
        private uq.h f19402r;

        /* renamed from: r0  reason: collision with root package name */
        private uq.h f19403r0;

        /* renamed from: r1  reason: collision with root package name */
        private uq.h f19404r1;

        /* renamed from: s  reason: collision with root package name */
        private uq.h f19405s;

        /* renamed from: s0  reason: collision with root package name */
        private uq.h f19406s0;

        /* renamed from: s1  reason: collision with root package name */
        private uq.h f19407s1;

        /* renamed from: t  reason: collision with root package name */
        private uq.h f19408t;

        /* renamed from: t0  reason: collision with root package name */
        private jo.g f19409t0;

        /* renamed from: t1  reason: collision with root package name */
        private uq.h f19410t1;

        /* renamed from: u  reason: collision with root package name */
        private uq.h f19411u;

        /* renamed from: u0  reason: collision with root package name */
        private uq.h f19412u0;

        /* renamed from: u1  reason: collision with root package name */
        private uq.h f19413u1;

        /* renamed from: v  reason: collision with root package name */
        private uq.h f19414v;

        /* renamed from: v0  reason: collision with root package name */
        private uq.h f19415v0;

        /* renamed from: v1  reason: collision with root package name */
        private uq.h f19416v1;

        /* renamed from: w  reason: collision with root package name */
        private uq.h f19417w;

        /* renamed from: w0  reason: collision with root package name */
        private uq.h f19418w0;

        /* renamed from: x  reason: collision with root package name */
        private uq.h f19419x;

        /* renamed from: x0  reason: collision with root package name */
        private nn.a0 f19420x0;

        /* renamed from: y  reason: collision with root package name */
        private uq.h f19421y;

        /* renamed from: y0  reason: collision with root package name */
        private uq.h f19422y0;

        /* renamed from: z  reason: collision with root package name */
        private uq.h f19423z;

        /* renamed from: z0  reason: collision with root package name */
        private pn.h f19424z0;

        private void A(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, vo.o oVar, nn.n nVar, vo.u uVar, pp.a aVar, no.l lVar, vo.b bVar, vo.g gVar, dp.f fVar2, zo.g gVar2, lp.b bVar2, ro.c cVar, kp.v vVar, np.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, op.f fVar3, vo.a0 a0Var, vn.c cVar2) {
            this.D0 = uq.c.c(vo.x.a(uVar));
            uq.h c10 = uq.c.c(d0.a(a0Var));
            this.E0 = c10;
            ap.n a10 = ap.n.a(c10, this.f19369g);
            this.F0 = a10;
            this.G0 = ap.o.a(a10);
            uq.h c11 = uq.c.c(nn.p.a(nVar));
            this.H0 = c11;
            g0 a11 = g0.a(c11);
            this.I0 = a11;
            f0 a12 = f0.a(this.f19369g, a11, this.f19418w0);
            this.J0 = a12;
            this.K0 = bo.g0.b(a12);
            io.b a13 = io.b.a(this.f19369g, this.I0);
            this.L0 = a13;
            this.M0 = io.c.b(a13);
            this.N0 = uq.c.c(to.q.a(fVar, this.A));
            this.O0 = uq.c.c(op.d.a(this.B0));
            uq.h c12 = uq.c.c(to.m.a(fVar, this.A));
            this.P0 = c12;
            hp.d a14 = hp.d.a(this.f19369g, c12, this.f19397p0, this.f19367f0, this.f19400q0, this.f19406s0);
            this.Q0 = a14;
            this.R0 = hp.e.b(a14);
            this.S0 = uq.c.c(nn.q.a(nVar));
            x0 a15 = x0.a(b1.a(), this.S0);
            this.T0 = a15;
            c1 a16 = c1.a(a15, this.f19418w0);
            this.U0 = a16;
            this.V0 = d1.b(a16);
            uq.h c13 = uq.c.c(zo.j.a(gVar2));
            this.W0 = c13;
            zo.p a17 = zo.p.a(c13, this.f19369g, this.f19393o);
            this.X0 = a17;
            this.Y0 = zo.q.b(a17);
            this.Z0 = uq.c.c(to.o.a(fVar, this.A));
            uq.h c14 = uq.c.c(vo.e.a(bVar));
            this.f19353a1 = c14;
            this.f19356b1 = z0.a(this.Z0, this.O, c14);
        }

        private void B(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, vo.o oVar, nn.n nVar, vo.u uVar, pp.a aVar, no.l lVar, vo.b bVar, vo.g gVar, dp.f fVar2, zo.g gVar2, lp.b bVar2, ro.c cVar, kp.v vVar, np.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, op.f fVar3, vo.a0 a0Var, vn.c cVar2) {
            this.f19359c1 = a1.b(this.f19356b1);
            a5 a10 = a5.a(this.f19353a1, this.Z0, this.f19387m);
            this.f19362d1 = a10;
            this.f19365e1 = b5.b(a10);
            this.f19368f1 = uq.c.c(vo.n.a(gVar));
            this.f19371g1 = uq.c.c(vo.l.a(gVar));
            this.f19374h1 = uq.c.c(vo.m.a(gVar));
            this.f19377i1 = uq.c.c(to.e.a(fVar, this.A));
            this.f19380j1 = uq.c.c(kp.w.a(vVar, kp.r.a()));
            i2 a11 = i2.a(this.f19370g0);
            this.f19383k1 = a11;
            this.f19386l1 = t.b(a11);
            j0 a12 = j0.a(this.I0, nn.u.a());
            this.f19389m1 = a12;
            this.f19392n1 = w0.a(a12);
            this.f19395o1 = q0.a(nn.u.a(), this.T0);
            g1 a13 = g1.a(nn.u.a(), this.T0);
            this.f19398p1 = a13;
            this.f19401q1 = o1.a(this.f19395o1, a13);
            uq.j c10 = uq.j.a(0, 8).a(to.l.a()).a(this.f19392n1).a(q1.a()).a(this.f19401q1).a(wn.k.a()).a(dp.h.a()).a(xo.f.a()).a(j1.a()).c();
            this.f19404r1 = c10;
            this.f19407s1 = uq.c.c(to.p.a(c10));
            this.f19410t1 = uq.c.c(no.h.a(this.B, this.f19387m, this.f19421y));
            no.p a14 = no.p.a(lVar);
            this.f19413u1 = a14;
            this.f19416v1 = uq.c.c(kp.y.a(vVar, a14));
        }

        private ko.j C() {
            return new ko.j(no.n.a(this.f19351a), (z.a) this.f19422y0.get(), (g.a) this.A0.get(), (sp.b) this.C0.get());
        }

        private ip.j D() {
            return new ip.j(no.n.a(this.f19351a), (z.a) this.f19422y0.get(), (g.a) this.A0.get(), (sp.b) this.C0.get());
        }

        private e0.a E() {
            return new e0.a(no.n.a(this.f19351a), (ActivityResultLauncher) this.D0.get());
        }

        private ap.c1 F() {
            return new ap.c1(no.n.a(this.f19351a), E(), m());
        }

        private x5 G() {
            return new x5(no.n.a(this.f19351a), (c.a) this.R0.get(), L(), (b1.b) this.V0.get(), F(), D(), (z.a) this.f19422y0.get(), (g.a) this.A0.get(), j(), (sp.b) this.C0.get(), (op.c) this.O0.get());
        }

        private b.a H() {
            return new b.a((kq.b) this.Z0.get());
        }

        private a.C0454a I() {
            return new a.C0454a((kq.b) this.Z0.get());
        }

        private v4 J() {
            return new v4(no.n.a(this.f19351a), (o.a) this.Y0.get(), (y0.a) this.f19359c1.get(), (z4.a) this.f19365e1.get(), (sp.b) this.C0.get(), F(), l(), (op.c) this.O0.get());
        }

        private ko.s K() {
            return new ko.s(no.n.a(this.f19351a), (z.a) this.f19422y0.get(), (g.a) this.A0.get(), (sp.b) this.C0.get());
        }

        private b.a L() {
            return new b.a((lq.a) this.N0.get());
        }

        private co.o h() {
            return new co.o((sp.b) this.C0.get());
        }

        private AutoClassifyWorker.b i() {
            return new AutoClassifyWorker.b((com.withpersona.sdk2.inquiry.governmentid.network.a) this.f19394o0.get(), (qp.a) this.f19400q0.get());
        }

        private sn.a j() {
            return nn.o.a(this.f19357c, uq.c.b(this.f19403r0));
        }

        private m0 k() {
            return new m0(no.n.a(this.f19351a), F(), (e0.a) this.K0.get(), (a.b) this.M0.get(), L(), (z.a) this.f19422y0.get(), (g.a) this.A0.get(), (sp.b) this.C0.get());
        }

        private iq.x0 l() {
            return new iq.x0(H(), I());
        }

        private ap.x m() {
            return new ap.x(no.n.a(this.f19351a), (m.a) this.G0.get());
        }

        private wn.c n() {
            return new wn.c((ActivityResultLauncher) this.f19368f1.get(), no.n.a(this.f19351a), pp.b.c(this.f19354b));
        }

        private a.C0231a o() {
            return new a.C0231a((yn.b) this.f19377i1.get());
        }

        private a.C0774a p() {
            return new a.C0774a((yn.b) this.f19377i1.get());
        }

        private b.a q() {
            return new b.a((yn.b) this.f19377i1.get(), (kp.i) this.f19380j1.get());
        }

        private c.a r() {
            return new c.a((yn.b) this.f19377i1.get());
        }

        private bo.a0 s() {
            return new bo.a0((ActivityResultLauncher) this.f19415v0.get(), no.n.a(this.f19351a), pp.b.c(this.f19354b));
        }

        private d.a t() {
            return new d.a((yn.b) this.f19377i1.get(), (ao.a) this.f19367f0.get(), lp.c.b(this.f19360d));
        }

        private r2 u() {
            return new r2((v4.h) this.f19391n0.get(), no.n.a(this.f19351a), F(), n(), v(), o(), r(), q(), p(), t(), (sp.b) this.C0.get(), (op.c) this.O0.get());
        }

        private v2.b v() {
            return new v2.b((ActivityResultLauncher) this.f19371g1.get(), (ActivityResultLauncher) this.f19374h1.get(), no.n.a(this.f19351a), pp.b.c(this.f19354b));
        }

        private g3 w() {
            return new g3(no.n.a(this.f19351a), (v4.h) this.f19391n0.get(), (f.a) this.f19412u0.get(), s(), C(), K(), k(), i(), h(), j(), (sp.b) this.C0.get(), (op.c) this.O0.get());
        }

        private void x(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, vo.o oVar, nn.n nVar, vo.u uVar, pp.a aVar, no.l lVar, vo.b bVar, vo.g gVar, dp.f fVar2, zo.g gVar2, lp.b bVar2, ro.c cVar, kp.v vVar, np.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, op.f fVar3, vo.a0 a0Var, vn.c cVar2) {
            this.f19369g = no.n.b(lVar);
            this.f19372h = to.n.a(fVar);
            this.f19375i = NetworkCoreModule_ResponseInterceptorFactory.create(networkCoreModule);
            this.f19378j = uq.j.a(0, 1).a(to.j.a()).c();
            this.f19381k = uq.j.a(0, 1).a(to.i.a()).c();
            uq.j c10 = uq.j.a(0, 4).a(NetworkInquiryModule_ProvideMoshiJsonAdapterFactoryFactory.create()).a(NetworkCoreModule_ProvideMoshiJsonAdapterFactoryFactory.create()).a(to.k.a()).a(v0.a()).c();
            this.f19384l = c10;
            uq.h c11 = uq.c.c(NetworkCoreModule_MoshiFactory.create(networkCoreModule, this.f19378j, this.f19381k, (uq.h) c10));
            this.f19387m = c11;
            this.f19390n = NetworkCoreModule_InterceptorFactory.create(networkCoreModule, c11);
            uq.h c12 = uq.c.c(dp.d.a());
            this.f19393o = c12;
            this.f19396p = dp.g.a(fVar2, c12);
            this.f19399q = uq.j.a(3, 0).b(this.f19375i).b(this.f19390n).b(this.f19396p).c();
            this.f19402r = NetworkCoreModule_KeyInflectionFactory.create(networkCoreModule);
            this.f19405s = NetworkCoreModule_UseServerStylesFactory.create(networkCoreModule);
            this.f19408t = uq.f.b(3).c("Key-Inflection", this.f19402r).c("Persona-Use-Mobile-Server-Styles", this.f19405s).c("User-Agent", com.withpersona.sdk2.inquiry.internal.network.g.a()).b();
            vn.s a10 = vn.s.a(this.f19369g);
            this.f19411u = a10;
            this.f19414v = uq.c.c(vn.d.b(cVar2, a10));
            vn.m a11 = vn.m.a(this.f19369g);
            this.f19417w = a11;
            this.f19419x = uq.c.c(vn.f.a(cVar2, a11));
            wo.d a12 = wo.d.a(this.f19369g);
            this.f19421y = a12;
            NetworkCoreModule_OkhttpClientFactory create = NetworkCoreModule_OkhttpClientFactory.create(networkCoreModule, this.f19399q, this.f19408t, this.f19369g, this.f19414v, this.f19419x, (uq.h) a12);
            this.f19423z = create;
            uq.h c13 = uq.c.c(NetworkCoreModule_RetrofitFactory.create(networkCoreModule, this.f19372h, (uq.h) create, this.f19387m));
            this.A = c13;
            this.B = uq.c.c(to.h.a(fVar, c13));
            this.C = ro.e.a(cVar);
            this.D = uq.c.c(to.f.a(fVar, this.A));
            this.E = ro.g.a(cVar);
        }

        private void y(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, vo.o oVar, nn.n nVar, vo.u uVar, pp.a aVar, no.l lVar, vo.b bVar, vo.g gVar, dp.f fVar2, zo.g gVar2, lp.b bVar2, ro.c cVar, kp.v vVar, np.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, op.f fVar3, vo.a0 a0Var, vn.c cVar2) {
            ro.k a10 = ro.k.a(this.E);
            this.F = a10;
            uq.h b10 = com.withpersona.sdk2.inquiry.internal.fallbackmode.j.b(a10);
            this.G = b10;
            this.H = com.withpersona.sdk2.inquiry.internal.fallbackmode.e.a(this.D, this.f19387m, b10);
            com.withpersona.sdk2.inquiry.internal.fallbackmode.g a11 = com.withpersona.sdk2.inquiry.internal.fallbackmode.g.a(this.f19387m, this.f19369g, this.G);
            this.I = a11;
            uq.h a12 = com.withpersona.sdk2.inquiry.internal.fallbackmode.h.a(a11);
            this.J = a12;
            this.K = com.withpersona.sdk2.inquiry.internal.fallbackmode.b.b(aVar3, this.H, a12);
            ro.d a13 = ro.d.a(cVar);
            this.L = a13;
            this.M = uq.c.c(ro.j.a(this.C, this.K, a13, this.f19387m));
            vn.k a14 = vn.k.a(this.f19369g);
            this.N = a14;
            this.O = uq.c.c(vn.e.a(cVar2, a14));
            wo.f a15 = wo.f.a(this.f19421y);
            this.P = a15;
            this.Q = wo.g.b(a15);
            this.R = uq.c.c(so.e.a());
            np.b a16 = np.b.a(aVar2);
            this.S = a16;
            uq.h c10 = uq.c.c(so.c.a(this.f19369g, this.Q, this.R, a16));
            this.T = c10;
            uq.h c11 = uq.c.c(to.c.a(this.f19369g, this.B, this.M, this.f19393o, this.O, c10));
            this.U = c11;
            no.d a17 = no.d.a(c11);
            this.V = a17;
            this.W = d.b(a17);
            no.c a18 = no.c.a(this.U);
            this.X = a18;
            this.Y = com.withpersona.sdk2.inquiry.internal.b.b(a18);
            no.m b11 = no.m.b(lVar);
            this.Z = b11;
            uq.h c12 = uq.c.c(eq.f.a(this.f19423z, b11));
            this.f19352a0 = c12;
            d2 a19 = d2.a(this.f19369g, this.B, this.O, this.f19393o, this.M, c12);
            this.f19355b0 = a19;
            this.f19358c0 = r.b(a19);
            this.f19361d0 = k2.a(this.U);
        }

        private void z(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, vo.o oVar, nn.n nVar, vo.u uVar, pp.a aVar, no.l lVar, vo.b bVar, vo.g gVar, dp.f fVar2, zo.g gVar2, lp.b bVar2, ro.c cVar, kp.v vVar, np.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, op.f fVar3, vo.a0 a0Var, vn.c cVar2) {
            this.f19364e0 = v.b(this.f19361d0);
            this.f19367f0 = uq.c.c(ro.f.a(cVar, this.M));
            uq.h c10 = uq.c.c(m2.a(this.f19369g));
            this.f19370g0 = c10;
            y a10 = y.a(this.B, this.f19367f0, c10);
            this.f19373h0 = a10;
            this.f19376i0 = z.b(a10);
            n2 a11 = n2.a(this.U);
            this.f19379j0 = a11;
            this.f19382k0 = b0.b(a11);
            no.i a12 = no.i.a(this.U);
            this.f19385l0 = a12;
            this.f19388m0 = g.b(a12);
            this.f19391n0 = uq.c.c(no.o.a(lVar, this.f19369g));
            this.f19394o0 = uq.c.c(to.g.a(fVar, this.A));
            this.f19397p0 = lp.c.a(bVar2);
            this.f19400q0 = uq.c.c(kp.x.a(vVar, qp.c.a()));
            uq.h c11 = uq.c.c(sn.c.a(this.f19369g));
            this.f19403r0 = c11;
            nn.o b10 = nn.o.b(nVar, c11);
            this.f19406s0 = b10;
            jo.g a13 = jo.g.a(this.f19369g, this.f19394o0, this.f19397p0, this.f19367f0, this.f19400q0, b10);
            this.f19409t0 = a13;
            this.f19412u0 = jo.h.b(a13);
            this.f19415v0 = uq.c.c(vo.r.a(oVar));
            pp.b a14 = pp.b.a(aVar);
            this.f19418w0 = a14;
            nn.a0 a15 = nn.a0.a(this.f19406s0, a14);
            this.f19420x0 = a15;
            this.f19422y0 = nn.b0.b(a15);
            pn.h a16 = pn.h.a(this.f19369g, this.f19406s0, this.f19418w0);
            this.f19424z0 = a16;
            this.A0 = pn.i.b(a16);
            op.g a17 = op.g.a(fVar3);
            this.B0 = a17;
            this.C0 = uq.c.c(sp.c.a(a17));
        }

        @Override // no.q
        public wm.e0 a() {
            return (wm.e0) this.f19407s1.get();
        }

        @Override // no.q
        public n b() {
            return new n(no.n.a(this.f19351a), (c.a) this.W.get(), (a.InterfaceC0244a) this.Y.get(), (q.b) this.f19358c0.get(), (u.a) this.f19364e0.get(), (x.a) this.f19376i0.get(), (a0.a) this.f19382k0.get(), (f.a) this.f19388m0.get(), w(), G(), J(), u(), (dp.c) this.f19393o.get(), op.g.b(this.f19363e), (sp.b) this.C0.get(), (op.c) this.O0.get(), (l2) this.f19370g0.get(), (s.a) this.f19386l1.get());
        }

        @Override // no.q
        public vn.g c() {
            return (vn.g) this.f19414v.get();
        }

        @Override // no.q
        public no.g d() {
            return (no.g) this.f19410t1.get();
        }

        @Override // no.q
        public v4.h e() {
            return (v4.h) this.f19391n0.get();
        }

        @Override // no.q
        public tp.a f() {
            return (tp.a) this.f19416v1.get();
        }

        @Override // no.q
        public eq.a g() {
            return (eq.a) this.f19352a0.get();
        }

        private b(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, vo.o oVar, nn.n nVar, vo.u uVar, pp.a aVar, no.l lVar, vo.b bVar, vo.g gVar, dp.f fVar2, zo.g gVar2, lp.b bVar2, ro.c cVar, kp.v vVar, np.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, op.f fVar3, vo.a0 a0Var, vn.c cVar2) {
            this.f19366f = this;
            this.f19351a = lVar;
            this.f19354b = aVar;
            this.f19357c = nVar;
            this.f19360d = bVar2;
            this.f19363e = fVar3;
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
