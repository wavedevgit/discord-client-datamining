package com.withpersona.sdk2.inquiry.internal;

import androidx.activity.result.ActivityResultLauncher;
import ap.f;
import br.a;
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
import cr.b;
import ep.d2;
import ep.i2;
import ep.k2;
import ep.l2;
import ep.m2;
import ep.n2;
import fo.b1;
import fo.g0;
import fo.x0;
import fo.z;
import ho.g;
import mp.d0;
import oo.r2;
import oo.v2;
import qo.a;
import qp.o;
import rp.e0;
import rp.j1;
import rp.m;
import to.e0;
import to.f0;
import to.g3;
import to.j0;
import to.v0;
import to.w0;
import vo.m0;
import wp.b1;
import wp.c1;
import wp.d1;
import wp.g1;
import wp.o1;
import wp.q0;
import wp.x5;
import yp.c;
import zo.a;
import zq.a1;
import zq.a5;
import zq.b5;
import zq.q1;
import zq.v4;
import zq.y0;
import zq.z0;
import zq.z4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private NetworkCoreModule f19721a;

        /* renamed from: b  reason: collision with root package name */
        private com.withpersona.sdk2.inquiry.internal.network.f f19722b;

        /* renamed from: c  reason: collision with root package name */
        private mp.o f19723c;

        /* renamed from: d  reason: collision with root package name */
        private fo.n f19724d;

        /* renamed from: e  reason: collision with root package name */
        private mp.u f19725e;

        /* renamed from: f  reason: collision with root package name */
        private gq.a f19726f;

        /* renamed from: g  reason: collision with root package name */
        private ep.l f19727g;

        /* renamed from: h  reason: collision with root package name */
        private mp.b f19728h;

        /* renamed from: i  reason: collision with root package name */
        private mp.g f19729i;

        /* renamed from: j  reason: collision with root package name */
        private up.f f19730j;

        /* renamed from: k  reason: collision with root package name */
        private qp.g f19731k;

        /* renamed from: l  reason: collision with root package name */
        private cq.b f19732l;

        /* renamed from: m  reason: collision with root package name */
        private ip.c f19733m;

        /* renamed from: n  reason: collision with root package name */
        private bq.v f19734n;

        /* renamed from: o  reason: collision with root package name */
        private eq.a f19735o;

        /* renamed from: p  reason: collision with root package name */
        private com.withpersona.sdk2.inquiry.internal.fallbackmode.a f19736p;

        /* renamed from: q  reason: collision with root package name */
        private fq.f f19737q;

        /* renamed from: r  reason: collision with root package name */
        private mp.a0 f19738r;

        /* renamed from: s  reason: collision with root package name */
        private no.c f19739s;

        public a a(com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar) {
            this.f19736p = (com.withpersona.sdk2.inquiry.internal.fallbackmode.a) lr.g.b(aVar);
            return this;
        }

        public ep.q b() {
            lr.g.a(this.f19721a, NetworkCoreModule.class);
            lr.g.a(this.f19722b, com.withpersona.sdk2.inquiry.internal.network.f.class);
            lr.g.a(this.f19723c, mp.o.class);
            if (this.f19724d == null) {
                this.f19724d = new fo.n();
            }
            lr.g.a(this.f19725e, mp.u.class);
            lr.g.a(this.f19726f, gq.a.class);
            lr.g.a(this.f19727g, ep.l.class);
            lr.g.a(this.f19728h, mp.b.class);
            lr.g.a(this.f19729i, mp.g.class);
            if (this.f19730j == null) {
                this.f19730j = new up.f();
            }
            lr.g.a(this.f19731k, qp.g.class);
            lr.g.a(this.f19732l, cq.b.class);
            lr.g.a(this.f19733m, ip.c.class);
            if (this.f19734n == null) {
                this.f19734n = new bq.v();
            }
            if (this.f19735o == null) {
                this.f19735o = new eq.a();
            }
            lr.g.a(this.f19736p, com.withpersona.sdk2.inquiry.internal.fallbackmode.a.class);
            lr.g.a(this.f19737q, fq.f.class);
            lr.g.a(this.f19738r, mp.a0.class);
            if (this.f19739s == null) {
                this.f19739s = new no.c();
            }
            return new b(this.f19721a, this.f19722b, this.f19723c, this.f19724d, this.f19725e, this.f19726f, this.f19727g, this.f19728h, this.f19729i, this.f19730j, this.f19731k, this.f19732l, this.f19733m, this.f19734n, this.f19735o, this.f19736p, this.f19737q, this.f19738r, this.f19739s);
        }

        public a c(mp.b bVar) {
            this.f19728h = (mp.b) lr.g.b(bVar);
            return this;
        }

        public a d(cq.b bVar) {
            this.f19732l = (cq.b) lr.g.b(bVar);
            return this;
        }

        public a e(mp.g gVar) {
            this.f19729i = (mp.g) lr.g.b(gVar);
            return this;
        }

        public a f(mp.o oVar) {
            this.f19723c = (mp.o) lr.g.b(oVar);
            return this;
        }

        public a g(fq.f fVar) {
            this.f19737q = (fq.f) lr.g.b(fVar);
            return this;
        }

        public a h(ip.c cVar) {
            this.f19733m = (ip.c) lr.g.b(cVar);
            return this;
        }

        public a i(gq.a aVar) {
            this.f19726f = (gq.a) lr.g.b(aVar);
            return this;
        }

        public a j(ep.l lVar) {
            this.f19727g = (ep.l) lr.g.b(lVar);
            return this;
        }

        public a k(com.withpersona.sdk2.inquiry.internal.network.f fVar) {
            this.f19722b = (com.withpersona.sdk2.inquiry.internal.network.f) lr.g.b(fVar);
            return this;
        }

        public a l(NetworkCoreModule networkCoreModule) {
            this.f19721a = (NetworkCoreModule) lr.g.b(networkCoreModule);
            return this;
        }

        public a m(qp.g gVar) {
            this.f19731k = (qp.g) lr.g.b(gVar);
            return this;
        }

        public a n(mp.u uVar) {
            this.f19725e = (mp.u) lr.g.b(uVar);
            return this;
        }

        public a o(mp.a0 a0Var) {
            this.f19738r = (mp.a0) lr.g.b(a0Var);
            return this;
        }

        public a p(bq.v vVar) {
            this.f19734n = (bq.v) lr.g.b(vVar);
            return this;
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements ep.q {
        private lr.h A;
        private lr.h A0;
        private lr.h B;
        private lr.h B0;
        private lr.h C;
        private lr.h C0;
        private lr.h D;
        private lr.h D0;
        private lr.h E;
        private lr.h E0;
        private ip.k F;
        private rp.n F0;
        private lr.h G;
        private lr.h G0;
        private lr.h H;
        private lr.h H0;
        private com.withpersona.sdk2.inquiry.internal.fallbackmode.g I;
        private lr.h I0;
        private lr.h J;
        private f0 J0;
        private lr.h K;
        private lr.h K0;
        private lr.h L;
        private zo.b L0;
        private lr.h M;
        private lr.h M0;
        private lr.h N;
        private lr.h N0;
        private lr.h O;
        private lr.h O0;
        private np.f P;
        private lr.h P0;
        private lr.h Q;
        private yp.d Q0;
        private lr.h R;
        private lr.h R0;
        private lr.h S;
        private lr.h S0;
        private lr.h T;
        private lr.h T0;
        private lr.h U;
        private c1 U0;
        private ep.d V;
        private lr.h V0;
        private lr.h W;
        private lr.h W0;
        private ep.c X;
        private qp.p X0;
        private lr.h Y;
        private lr.h Y0;
        private lr.h Z;
        private lr.h Z0;

        /* renamed from: a  reason: collision with root package name */
        private final ep.l f19740a;

        /* renamed from: a0  reason: collision with root package name */
        private lr.h f19741a0;

        /* renamed from: a1  reason: collision with root package name */
        private lr.h f19742a1;

        /* renamed from: b  reason: collision with root package name */
        private final gq.a f19743b;

        /* renamed from: b0  reason: collision with root package name */
        private d2 f19744b0;

        /* renamed from: b1  reason: collision with root package name */
        private z0 f19745b1;

        /* renamed from: c  reason: collision with root package name */
        private final fo.n f19746c;

        /* renamed from: c0  reason: collision with root package name */
        private lr.h f19747c0;

        /* renamed from: c1  reason: collision with root package name */
        private lr.h f19748c1;

        /* renamed from: d  reason: collision with root package name */
        private final cq.b f19749d;

        /* renamed from: d0  reason: collision with root package name */
        private k2 f19750d0;

        /* renamed from: d1  reason: collision with root package name */
        private a5 f19751d1;

        /* renamed from: e  reason: collision with root package name */
        private final fq.f f19752e;

        /* renamed from: e0  reason: collision with root package name */
        private lr.h f19753e0;

        /* renamed from: e1  reason: collision with root package name */
        private lr.h f19754e1;

        /* renamed from: f  reason: collision with root package name */
        private final b f19755f;

        /* renamed from: f0  reason: collision with root package name */
        private lr.h f19756f0;

        /* renamed from: f1  reason: collision with root package name */
        private lr.h f19757f1;

        /* renamed from: g  reason: collision with root package name */
        private lr.h f19758g;

        /* renamed from: g0  reason: collision with root package name */
        private lr.h f19759g0;

        /* renamed from: g1  reason: collision with root package name */
        private lr.h f19760g1;

        /* renamed from: h  reason: collision with root package name */
        private lr.h f19761h;

        /* renamed from: h0  reason: collision with root package name */
        private y f19762h0;

        /* renamed from: h1  reason: collision with root package name */
        private lr.h f19763h1;

        /* renamed from: i  reason: collision with root package name */
        private lr.h f19764i;

        /* renamed from: i0  reason: collision with root package name */
        private lr.h f19765i0;

        /* renamed from: i1  reason: collision with root package name */
        private lr.h f19766i1;

        /* renamed from: j  reason: collision with root package name */
        private lr.h f19767j;

        /* renamed from: j0  reason: collision with root package name */
        private n2 f19768j0;

        /* renamed from: j1  reason: collision with root package name */
        private lr.h f19769j1;

        /* renamed from: k  reason: collision with root package name */
        private lr.h f19770k;

        /* renamed from: k0  reason: collision with root package name */
        private lr.h f19771k0;

        /* renamed from: k1  reason: collision with root package name */
        private i2 f19772k1;

        /* renamed from: l  reason: collision with root package name */
        private lr.h f19773l;

        /* renamed from: l0  reason: collision with root package name */
        private ep.i f19774l0;

        /* renamed from: l1  reason: collision with root package name */
        private lr.h f19775l1;

        /* renamed from: m  reason: collision with root package name */
        private lr.h f19776m;

        /* renamed from: m0  reason: collision with root package name */
        private lr.h f19777m0;

        /* renamed from: m1  reason: collision with root package name */
        private lr.h f19778m1;

        /* renamed from: n  reason: collision with root package name */
        private lr.h f19779n;

        /* renamed from: n0  reason: collision with root package name */
        private lr.h f19780n0;

        /* renamed from: n1  reason: collision with root package name */
        private lr.h f19781n1;

        /* renamed from: o  reason: collision with root package name */
        private lr.h f19782o;

        /* renamed from: o0  reason: collision with root package name */
        private lr.h f19783o0;

        /* renamed from: o1  reason: collision with root package name */
        private lr.h f19784o1;

        /* renamed from: p  reason: collision with root package name */
        private lr.h f19785p;

        /* renamed from: p0  reason: collision with root package name */
        private lr.h f19786p0;

        /* renamed from: p1  reason: collision with root package name */
        private lr.h f19787p1;

        /* renamed from: q  reason: collision with root package name */
        private lr.h f19788q;

        /* renamed from: q0  reason: collision with root package name */
        private lr.h f19789q0;

        /* renamed from: q1  reason: collision with root package name */
        private lr.h f19790q1;

        /* renamed from: r  reason: collision with root package name */
        private lr.h f19791r;

        /* renamed from: r0  reason: collision with root package name */
        private lr.h f19792r0;

        /* renamed from: r1  reason: collision with root package name */
        private lr.h f19793r1;

        /* renamed from: s  reason: collision with root package name */
        private lr.h f19794s;

        /* renamed from: s0  reason: collision with root package name */
        private lr.h f19795s0;

        /* renamed from: s1  reason: collision with root package name */
        private lr.h f19796s1;

        /* renamed from: t  reason: collision with root package name */
        private lr.h f19797t;

        /* renamed from: t0  reason: collision with root package name */
        private ap.g f19798t0;

        /* renamed from: t1  reason: collision with root package name */
        private lr.h f19799t1;

        /* renamed from: u  reason: collision with root package name */
        private lr.h f19800u;

        /* renamed from: u0  reason: collision with root package name */
        private lr.h f19801u0;

        /* renamed from: u1  reason: collision with root package name */
        private lr.h f19802u1;

        /* renamed from: v  reason: collision with root package name */
        private lr.h f19803v;

        /* renamed from: v0  reason: collision with root package name */
        private lr.h f19804v0;

        /* renamed from: v1  reason: collision with root package name */
        private lr.h f19805v1;

        /* renamed from: w  reason: collision with root package name */
        private lr.h f19806w;

        /* renamed from: w0  reason: collision with root package name */
        private lr.h f19807w0;

        /* renamed from: x  reason: collision with root package name */
        private lr.h f19808x;

        /* renamed from: x0  reason: collision with root package name */
        private fo.a0 f19809x0;

        /* renamed from: y  reason: collision with root package name */
        private lr.h f19810y;

        /* renamed from: y0  reason: collision with root package name */
        private lr.h f19811y0;

        /* renamed from: z  reason: collision with root package name */
        private lr.h f19812z;

        /* renamed from: z0  reason: collision with root package name */
        private ho.h f19813z0;

        private void A(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, mp.o oVar, fo.n nVar, mp.u uVar, gq.a aVar, ep.l lVar, mp.b bVar, mp.g gVar, up.f fVar2, qp.g gVar2, cq.b bVar2, ip.c cVar, bq.v vVar, eq.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, fq.f fVar3, mp.a0 a0Var, no.c cVar2) {
            this.D0 = lr.c.c(mp.x.a(uVar));
            lr.h c10 = lr.c.c(d0.a(a0Var));
            this.E0 = c10;
            rp.n a10 = rp.n.a(c10, this.f19758g);
            this.F0 = a10;
            this.G0 = rp.o.a(a10);
            lr.h c11 = lr.c.c(fo.p.a(nVar));
            this.H0 = c11;
            g0 a11 = g0.a(c11);
            this.I0 = a11;
            f0 a12 = f0.a(this.f19758g, a11, this.f19807w0);
            this.J0 = a12;
            this.K0 = to.g0.b(a12);
            zo.b a13 = zo.b.a(this.f19758g, this.I0);
            this.L0 = a13;
            this.M0 = zo.c.b(a13);
            this.N0 = lr.c.c(kp.q.a(fVar, this.A));
            this.O0 = lr.c.c(fq.d.a(this.B0));
            lr.h c12 = lr.c.c(kp.m.a(fVar, this.A));
            this.P0 = c12;
            yp.d a14 = yp.d.a(this.f19758g, c12, this.f19786p0, this.f19756f0, this.f19789q0, this.f19795s0);
            this.Q0 = a14;
            this.R0 = yp.e.b(a14);
            this.S0 = lr.c.c(fo.q.a(nVar));
            x0 a15 = x0.a(b1.a(), this.S0);
            this.T0 = a15;
            c1 a16 = c1.a(a15, this.f19807w0);
            this.U0 = a16;
            this.V0 = d1.b(a16);
            lr.h c13 = lr.c.c(qp.j.a(gVar2));
            this.W0 = c13;
            qp.p a17 = qp.p.a(c13, this.f19758g, this.f19782o);
            this.X0 = a17;
            this.Y0 = qp.q.b(a17);
            this.Z0 = lr.c.c(kp.o.a(fVar, this.A));
            lr.h c14 = lr.c.c(mp.e.a(bVar));
            this.f19742a1 = c14;
            this.f19745b1 = z0.a(this.Z0, this.O, c14);
        }

        private void B(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, mp.o oVar, fo.n nVar, mp.u uVar, gq.a aVar, ep.l lVar, mp.b bVar, mp.g gVar, up.f fVar2, qp.g gVar2, cq.b bVar2, ip.c cVar, bq.v vVar, eq.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, fq.f fVar3, mp.a0 a0Var, no.c cVar2) {
            this.f19748c1 = a1.b(this.f19745b1);
            a5 a10 = a5.a(this.f19742a1, this.Z0, this.f19776m);
            this.f19751d1 = a10;
            this.f19754e1 = b5.b(a10);
            this.f19757f1 = lr.c.c(mp.n.a(gVar));
            this.f19760g1 = lr.c.c(mp.l.a(gVar));
            this.f19763h1 = lr.c.c(mp.m.a(gVar));
            this.f19766i1 = lr.c.c(kp.e.a(fVar, this.A));
            this.f19769j1 = lr.c.c(bq.w.a(vVar, bq.r.a()));
            i2 a11 = i2.a(this.f19759g0);
            this.f19772k1 = a11;
            this.f19775l1 = t.b(a11);
            j0 a12 = j0.a(this.I0, fo.u.a());
            this.f19778m1 = a12;
            this.f19781n1 = w0.a(a12);
            this.f19784o1 = q0.a(fo.u.a(), this.T0);
            g1 a13 = g1.a(fo.u.a(), this.T0);
            this.f19787p1 = a13;
            this.f19790q1 = o1.a(this.f19784o1, a13);
            lr.j c10 = lr.j.a(0, 8).a(kp.l.a()).a(this.f19781n1).a(q1.a()).a(this.f19790q1).a(oo.k.a()).a(up.h.a()).a(op.f.a()).a(j1.a()).c();
            this.f19793r1 = c10;
            this.f19796s1 = lr.c.c(kp.p.a(c10));
            this.f19799t1 = lr.c.c(ep.h.a(this.B, this.f19776m, this.f19810y));
            ep.p a14 = ep.p.a(lVar);
            this.f19802u1 = a14;
            this.f19805v1 = lr.c.c(bq.y.a(vVar, a14));
        }

        private bp.j C() {
            return new bp.j(ep.n.a(this.f19740a), (z.a) this.f19811y0.get(), (g.a) this.A0.get(), (jq.b) this.C0.get());
        }

        private zp.j D() {
            return new zp.j(ep.n.a(this.f19740a), (z.a) this.f19811y0.get(), (g.a) this.A0.get(), (jq.b) this.C0.get());
        }

        private e0.a E() {
            return new e0.a(ep.n.a(this.f19740a), (ActivityResultLauncher) this.D0.get());
        }

        private rp.c1 F() {
            return new rp.c1(ep.n.a(this.f19740a), E(), m());
        }

        private x5 G() {
            return new x5(ep.n.a(this.f19740a), (c.a) this.R0.get(), L(), (b1.b) this.V0.get(), F(), D(), (z.a) this.f19811y0.get(), (g.a) this.A0.get(), j(), (jq.b) this.C0.get(), (fq.c) this.O0.get());
        }

        private b.a H() {
            return new b.a((br.b) this.Z0.get());
        }

        private a.C0101a I() {
            return new a.C0101a((br.b) this.Z0.get());
        }

        private v4 J() {
            return new v4(ep.n.a(this.f19740a), (o.a) this.Y0.get(), (y0.a) this.f19748c1.get(), (z4.a) this.f19754e1.get(), (jq.b) this.C0.get(), F(), l(), (fq.c) this.O0.get());
        }

        private bp.s K() {
            return new bp.s(ep.n.a(this.f19740a), (z.a) this.f19811y0.get(), (g.a) this.A0.get(), (jq.b) this.C0.get());
        }

        private b.a L() {
            return new b.a((cr.a) this.N0.get());
        }

        private uo.o h() {
            return new uo.o((jq.b) this.C0.get());
        }

        private AutoClassifyWorker.b i() {
            return new AutoClassifyWorker.b((com.withpersona.sdk2.inquiry.governmentid.network.a) this.f19783o0.get(), (hq.a) this.f19789q0.get());
        }

        private ko.a j() {
            return fo.o.a(this.f19746c, lr.c.b(this.f19792r0));
        }

        private m0 k() {
            return new m0(ep.n.a(this.f19740a), F(), (e0.a) this.K0.get(), (a.b) this.M0.get(), L(), (z.a) this.f19811y0.get(), (g.a) this.A0.get(), (jq.b) this.C0.get());
        }

        private zq.x0 l() {
            return new zq.x0(H(), I());
        }

        private rp.x m() {
            return new rp.x(ep.n.a(this.f19740a), (m.a) this.G0.get());
        }

        private oo.c n() {
            return new oo.c((ActivityResultLauncher) this.f19757f1.get(), ep.n.a(this.f19740a), gq.b.c(this.f19743b));
        }

        private a.C0234a o() {
            return new a.C0234a((qo.b) this.f19766i1.get());
        }

        private a.C0612a p() {
            return new a.C0612a((qo.b) this.f19766i1.get());
        }

        private b.a q() {
            return new b.a((qo.b) this.f19766i1.get(), (bq.i) this.f19769j1.get());
        }

        private c.a r() {
            return new c.a((qo.b) this.f19766i1.get());
        }

        private to.a0 s() {
            return new to.a0((ActivityResultLauncher) this.f19804v0.get(), ep.n.a(this.f19740a), gq.b.c(this.f19743b));
        }

        private d.a t() {
            return new d.a((qo.b) this.f19766i1.get(), (so.a) this.f19756f0.get(), cq.c.b(this.f19749d));
        }

        private r2 u() {
            return new r2((v4.h) this.f19780n0.get(), ep.n.a(this.f19740a), F(), n(), v(), o(), r(), q(), p(), t(), (jq.b) this.C0.get(), (fq.c) this.O0.get());
        }

        private v2.b v() {
            return new v2.b((ActivityResultLauncher) this.f19760g1.get(), (ActivityResultLauncher) this.f19763h1.get(), ep.n.a(this.f19740a), gq.b.c(this.f19743b));
        }

        private g3 w() {
            return new g3(ep.n.a(this.f19740a), (v4.h) this.f19780n0.get(), (f.a) this.f19801u0.get(), s(), C(), K(), k(), i(), h(), j(), (jq.b) this.C0.get(), (fq.c) this.O0.get());
        }

        private void x(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, mp.o oVar, fo.n nVar, mp.u uVar, gq.a aVar, ep.l lVar, mp.b bVar, mp.g gVar, up.f fVar2, qp.g gVar2, cq.b bVar2, ip.c cVar, bq.v vVar, eq.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, fq.f fVar3, mp.a0 a0Var, no.c cVar2) {
            this.f19758g = ep.n.b(lVar);
            this.f19761h = kp.n.a(fVar);
            this.f19764i = NetworkCoreModule_ResponseInterceptorFactory.create(networkCoreModule);
            this.f19767j = lr.j.a(0, 1).a(kp.j.a()).c();
            this.f19770k = lr.j.a(0, 1).a(kp.i.a()).c();
            lr.j c10 = lr.j.a(0, 4).a(NetworkInquiryModule_ProvideMoshiJsonAdapterFactoryFactory.create()).a(NetworkCoreModule_ProvideMoshiJsonAdapterFactoryFactory.create()).a(kp.k.a()).a(v0.a()).c();
            this.f19773l = c10;
            lr.h c11 = lr.c.c(NetworkCoreModule_MoshiFactory.create(networkCoreModule, this.f19767j, this.f19770k, (lr.h) c10));
            this.f19776m = c11;
            this.f19779n = NetworkCoreModule_InterceptorFactory.create(networkCoreModule, c11);
            lr.h c12 = lr.c.c(up.d.a());
            this.f19782o = c12;
            this.f19785p = up.g.a(fVar2, c12);
            this.f19788q = lr.j.a(3, 0).b(this.f19764i).b(this.f19779n).b(this.f19785p).c();
            this.f19791r = NetworkCoreModule_KeyInflectionFactory.create(networkCoreModule);
            this.f19794s = NetworkCoreModule_UseServerStylesFactory.create(networkCoreModule);
            this.f19797t = lr.f.b(3).c("Key-Inflection", this.f19791r).c("Persona-Use-Mobile-Server-Styles", this.f19794s).c("User-Agent", com.withpersona.sdk2.inquiry.internal.network.g.a()).b();
            no.s a10 = no.s.a(this.f19758g);
            this.f19800u = a10;
            this.f19803v = lr.c.c(no.d.b(cVar2, a10));
            no.m a11 = no.m.a(this.f19758g);
            this.f19806w = a11;
            this.f19808x = lr.c.c(no.f.a(cVar2, a11));
            np.d a12 = np.d.a(this.f19758g);
            this.f19810y = a12;
            NetworkCoreModule_OkhttpClientFactory create = NetworkCoreModule_OkhttpClientFactory.create(networkCoreModule, this.f19788q, this.f19797t, this.f19758g, this.f19803v, this.f19808x, (lr.h) a12);
            this.f19812z = create;
            lr.h c13 = lr.c.c(NetworkCoreModule_RetrofitFactory.create(networkCoreModule, this.f19761h, (lr.h) create, this.f19776m));
            this.A = c13;
            this.B = lr.c.c(kp.h.a(fVar, c13));
            this.C = ip.e.a(cVar);
            this.D = lr.c.c(kp.f.a(fVar, this.A));
            this.E = ip.g.a(cVar);
        }

        private void y(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, mp.o oVar, fo.n nVar, mp.u uVar, gq.a aVar, ep.l lVar, mp.b bVar, mp.g gVar, up.f fVar2, qp.g gVar2, cq.b bVar2, ip.c cVar, bq.v vVar, eq.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, fq.f fVar3, mp.a0 a0Var, no.c cVar2) {
            ip.k a10 = ip.k.a(this.E);
            this.F = a10;
            lr.h b10 = com.withpersona.sdk2.inquiry.internal.fallbackmode.j.b(a10);
            this.G = b10;
            this.H = com.withpersona.sdk2.inquiry.internal.fallbackmode.e.a(this.D, this.f19776m, b10);
            com.withpersona.sdk2.inquiry.internal.fallbackmode.g a11 = com.withpersona.sdk2.inquiry.internal.fallbackmode.g.a(this.f19776m, this.f19758g, this.G);
            this.I = a11;
            lr.h a12 = com.withpersona.sdk2.inquiry.internal.fallbackmode.h.a(a11);
            this.J = a12;
            this.K = com.withpersona.sdk2.inquiry.internal.fallbackmode.b.b(aVar3, this.H, a12);
            ip.d a13 = ip.d.a(cVar);
            this.L = a13;
            this.M = lr.c.c(ip.j.a(this.C, this.K, a13, this.f19776m));
            no.k a14 = no.k.a(this.f19758g);
            this.N = a14;
            this.O = lr.c.c(no.e.a(cVar2, a14));
            np.f a15 = np.f.a(this.f19810y);
            this.P = a15;
            this.Q = np.g.b(a15);
            this.R = lr.c.c(jp.e.a());
            eq.b a16 = eq.b.a(aVar2);
            this.S = a16;
            lr.h c10 = lr.c.c(jp.c.a(this.f19758g, this.Q, this.R, a16));
            this.T = c10;
            lr.h c11 = lr.c.c(kp.c.a(this.f19758g, this.B, this.M, this.f19782o, this.O, c10));
            this.U = c11;
            ep.d a17 = ep.d.a(c11);
            this.V = a17;
            this.W = d.b(a17);
            ep.c a18 = ep.c.a(this.U);
            this.X = a18;
            this.Y = com.withpersona.sdk2.inquiry.internal.b.b(a18);
            ep.m b11 = ep.m.b(lVar);
            this.Z = b11;
            lr.h c12 = lr.c.c(vq.f.a(this.f19812z, b11));
            this.f19741a0 = c12;
            d2 a19 = d2.a(this.f19758g, this.B, this.O, this.f19782o, this.M, c12);
            this.f19744b0 = a19;
            this.f19747c0 = r.b(a19);
            this.f19750d0 = k2.a(this.U);
        }

        private void z(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, mp.o oVar, fo.n nVar, mp.u uVar, gq.a aVar, ep.l lVar, mp.b bVar, mp.g gVar, up.f fVar2, qp.g gVar2, cq.b bVar2, ip.c cVar, bq.v vVar, eq.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, fq.f fVar3, mp.a0 a0Var, no.c cVar2) {
            this.f19753e0 = v.b(this.f19750d0);
            this.f19756f0 = lr.c.c(ip.f.a(cVar, this.M));
            lr.h c10 = lr.c.c(m2.a(this.f19758g));
            this.f19759g0 = c10;
            y a10 = y.a(this.B, this.f19756f0, c10);
            this.f19762h0 = a10;
            this.f19765i0 = z.b(a10);
            n2 a11 = n2.a(this.U);
            this.f19768j0 = a11;
            this.f19771k0 = b0.b(a11);
            ep.i a12 = ep.i.a(this.U);
            this.f19774l0 = a12;
            this.f19777m0 = g.b(a12);
            this.f19780n0 = lr.c.c(ep.o.a(lVar, this.f19758g));
            this.f19783o0 = lr.c.c(kp.g.a(fVar, this.A));
            this.f19786p0 = cq.c.a(bVar2);
            this.f19789q0 = lr.c.c(bq.x.a(vVar, hq.c.a()));
            lr.h c11 = lr.c.c(ko.c.a(this.f19758g));
            this.f19792r0 = c11;
            fo.o b10 = fo.o.b(nVar, c11);
            this.f19795s0 = b10;
            ap.g a13 = ap.g.a(this.f19758g, this.f19783o0, this.f19786p0, this.f19756f0, this.f19789q0, b10);
            this.f19798t0 = a13;
            this.f19801u0 = ap.h.b(a13);
            this.f19804v0 = lr.c.c(mp.r.a(oVar));
            gq.b a14 = gq.b.a(aVar);
            this.f19807w0 = a14;
            fo.a0 a15 = fo.a0.a(this.f19795s0, a14);
            this.f19809x0 = a15;
            this.f19811y0 = fo.b0.b(a15);
            ho.h a16 = ho.h.a(this.f19758g, this.f19795s0, this.f19807w0);
            this.f19813z0 = a16;
            this.A0 = ho.i.b(a16);
            fq.g a17 = fq.g.a(fVar3);
            this.B0 = a17;
            this.C0 = lr.c.c(jq.c.a(a17));
        }

        @Override // ep.q
        public gn.e0 a() {
            return (gn.e0) this.f19796s1.get();
        }

        @Override // ep.q
        public n b() {
            return new n(ep.n.a(this.f19740a), (c.a) this.W.get(), (a.InterfaceC0247a) this.Y.get(), (q.b) this.f19747c0.get(), (u.a) this.f19753e0.get(), (x.a) this.f19765i0.get(), (a0.a) this.f19771k0.get(), (f.a) this.f19777m0.get(), w(), G(), J(), u(), (up.c) this.f19782o.get(), fq.g.b(this.f19752e), (jq.b) this.C0.get(), (fq.c) this.O0.get(), (l2) this.f19759g0.get(), (s.a) this.f19775l1.get());
        }

        @Override // ep.q
        public no.g c() {
            return (no.g) this.f19803v.get();
        }

        @Override // ep.q
        public ep.g d() {
            return (ep.g) this.f19799t1.get();
        }

        @Override // ep.q
        public v4.h e() {
            return (v4.h) this.f19780n0.get();
        }

        @Override // ep.q
        public kq.a f() {
            return (kq.a) this.f19805v1.get();
        }

        @Override // ep.q
        public vq.a g() {
            return (vq.a) this.f19741a0.get();
        }

        private b(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, mp.o oVar, fo.n nVar, mp.u uVar, gq.a aVar, ep.l lVar, mp.b bVar, mp.g gVar, up.f fVar2, qp.g gVar2, cq.b bVar2, ip.c cVar, bq.v vVar, eq.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, fq.f fVar3, mp.a0 a0Var, no.c cVar2) {
            this.f19755f = this;
            this.f19740a = lVar;
            this.f19743b = aVar;
            this.f19746c = nVar;
            this.f19749d = bVar2;
            this.f19752e = fVar3;
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
