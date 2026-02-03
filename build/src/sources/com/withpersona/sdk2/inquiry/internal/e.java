package com.withpersona.sdk2.inquiry.internal;

import androidx.activity.result.ActivityResultLauncher;
import ao.a;
import bp.o;
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
import cp.e0;
import cp.j1;
import cp.m;
import eo.e0;
import eo.f0;
import eo.g3;
import eo.j0;
import eo.v0;
import eo.w0;
import go.m0;
import hp.b1;
import hp.c1;
import hp.d1;
import hp.g1;
import hp.o1;
import hp.q0;
import hp.x5;
import jp.c;
import ko.a;
import kq.a1;
import kq.a5;
import kq.b5;
import kq.q1;
import kq.v4;
import kq.y0;
import kq.z0;
import kq.z4;
import lo.f;
import mq.a;
import nq.b;
import pn.b1;
import pn.g0;
import pn.x0;
import pn.z;
import po.d2;
import po.i2;
import po.k2;
import po.l2;
import po.m2;
import po.n2;
import rn.g;
import xo.d0;
import yn.r2;
import yn.v2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private NetworkCoreModule f18314a;

        /* renamed from: b  reason: collision with root package name */
        private com.withpersona.sdk2.inquiry.internal.network.f f18315b;

        /* renamed from: c  reason: collision with root package name */
        private xo.o f18316c;

        /* renamed from: d  reason: collision with root package name */
        private pn.n f18317d;

        /* renamed from: e  reason: collision with root package name */
        private xo.u f18318e;

        /* renamed from: f  reason: collision with root package name */
        private rp.a f18319f;

        /* renamed from: g  reason: collision with root package name */
        private po.l f18320g;

        /* renamed from: h  reason: collision with root package name */
        private xo.b f18321h;

        /* renamed from: i  reason: collision with root package name */
        private xo.g f18322i;

        /* renamed from: j  reason: collision with root package name */
        private fp.f f18323j;

        /* renamed from: k  reason: collision with root package name */
        private bp.g f18324k;

        /* renamed from: l  reason: collision with root package name */
        private np.b f18325l;

        /* renamed from: m  reason: collision with root package name */
        private to.c f18326m;

        /* renamed from: n  reason: collision with root package name */
        private mp.v f18327n;

        /* renamed from: o  reason: collision with root package name */
        private pp.a f18328o;

        /* renamed from: p  reason: collision with root package name */
        private com.withpersona.sdk2.inquiry.internal.fallbackmode.a f18329p;

        /* renamed from: q  reason: collision with root package name */
        private qp.f f18330q;

        /* renamed from: r  reason: collision with root package name */
        private xo.a0 f18331r;

        /* renamed from: s  reason: collision with root package name */
        private xn.c f18332s;

        public a a(com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar) {
            this.f18329p = (com.withpersona.sdk2.inquiry.internal.fallbackmode.a) wq.g.b(aVar);
            return this;
        }

        public po.q b() {
            wq.g.a(this.f18314a, NetworkCoreModule.class);
            wq.g.a(this.f18315b, com.withpersona.sdk2.inquiry.internal.network.f.class);
            wq.g.a(this.f18316c, xo.o.class);
            if (this.f18317d == null) {
                this.f18317d = new pn.n();
            }
            wq.g.a(this.f18318e, xo.u.class);
            wq.g.a(this.f18319f, rp.a.class);
            wq.g.a(this.f18320g, po.l.class);
            wq.g.a(this.f18321h, xo.b.class);
            wq.g.a(this.f18322i, xo.g.class);
            if (this.f18323j == null) {
                this.f18323j = new fp.f();
            }
            wq.g.a(this.f18324k, bp.g.class);
            wq.g.a(this.f18325l, np.b.class);
            wq.g.a(this.f18326m, to.c.class);
            if (this.f18327n == null) {
                this.f18327n = new mp.v();
            }
            if (this.f18328o == null) {
                this.f18328o = new pp.a();
            }
            wq.g.a(this.f18329p, com.withpersona.sdk2.inquiry.internal.fallbackmode.a.class);
            wq.g.a(this.f18330q, qp.f.class);
            wq.g.a(this.f18331r, xo.a0.class);
            if (this.f18332s == null) {
                this.f18332s = new xn.c();
            }
            return new b(this.f18314a, this.f18315b, this.f18316c, this.f18317d, this.f18318e, this.f18319f, this.f18320g, this.f18321h, this.f18322i, this.f18323j, this.f18324k, this.f18325l, this.f18326m, this.f18327n, this.f18328o, this.f18329p, this.f18330q, this.f18331r, this.f18332s);
        }

        public a c(xo.b bVar) {
            this.f18321h = (xo.b) wq.g.b(bVar);
            return this;
        }

        public a d(np.b bVar) {
            this.f18325l = (np.b) wq.g.b(bVar);
            return this;
        }

        public a e(xo.g gVar) {
            this.f18322i = (xo.g) wq.g.b(gVar);
            return this;
        }

        public a f(xo.o oVar) {
            this.f18316c = (xo.o) wq.g.b(oVar);
            return this;
        }

        public a g(qp.f fVar) {
            this.f18330q = (qp.f) wq.g.b(fVar);
            return this;
        }

        public a h(to.c cVar) {
            this.f18326m = (to.c) wq.g.b(cVar);
            return this;
        }

        public a i(rp.a aVar) {
            this.f18319f = (rp.a) wq.g.b(aVar);
            return this;
        }

        public a j(po.l lVar) {
            this.f18320g = (po.l) wq.g.b(lVar);
            return this;
        }

        public a k(com.withpersona.sdk2.inquiry.internal.network.f fVar) {
            this.f18315b = (com.withpersona.sdk2.inquiry.internal.network.f) wq.g.b(fVar);
            return this;
        }

        public a l(NetworkCoreModule networkCoreModule) {
            this.f18314a = (NetworkCoreModule) wq.g.b(networkCoreModule);
            return this;
        }

        public a m(bp.g gVar) {
            this.f18324k = (bp.g) wq.g.b(gVar);
            return this;
        }

        public a n(xo.u uVar) {
            this.f18318e = (xo.u) wq.g.b(uVar);
            return this;
        }

        public a o(xo.a0 a0Var) {
            this.f18331r = (xo.a0) wq.g.b(a0Var);
            return this;
        }

        public a p(mp.v vVar) {
            this.f18327n = (mp.v) wq.g.b(vVar);
            return this;
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements po.q {
        private wq.h A;
        private wq.h A0;
        private wq.h B;
        private wq.h B0;
        private wq.h C;
        private wq.h C0;
        private wq.h D;
        private wq.h D0;
        private wq.h E;
        private wq.h E0;
        private to.k F;
        private cp.n F0;
        private wq.h G;
        private wq.h G0;
        private wq.h H;
        private wq.h H0;
        private com.withpersona.sdk2.inquiry.internal.fallbackmode.g I;
        private wq.h I0;
        private wq.h J;
        private f0 J0;
        private wq.h K;
        private wq.h K0;
        private wq.h L;
        private ko.b L0;
        private wq.h M;
        private wq.h M0;
        private wq.h N;
        private wq.h N0;
        private wq.h O;
        private wq.h O0;
        private yo.f P;
        private wq.h P0;
        private wq.h Q;
        private jp.d Q0;
        private wq.h R;
        private wq.h R0;
        private wq.h S;
        private wq.h S0;
        private wq.h T;
        private wq.h T0;
        private wq.h U;
        private c1 U0;
        private po.d V;
        private wq.h V0;
        private wq.h W;
        private wq.h W0;
        private po.c X;
        private bp.p X0;
        private wq.h Y;
        private wq.h Y0;
        private wq.h Z;
        private wq.h Z0;

        /* renamed from: a  reason: collision with root package name */
        private final po.l f18333a;

        /* renamed from: a0  reason: collision with root package name */
        private wq.h f18334a0;

        /* renamed from: a1  reason: collision with root package name */
        private wq.h f18335a1;

        /* renamed from: b  reason: collision with root package name */
        private final rp.a f18336b;

        /* renamed from: b0  reason: collision with root package name */
        private d2 f18337b0;

        /* renamed from: b1  reason: collision with root package name */
        private z0 f18338b1;

        /* renamed from: c  reason: collision with root package name */
        private final pn.n f18339c;

        /* renamed from: c0  reason: collision with root package name */
        private wq.h f18340c0;

        /* renamed from: c1  reason: collision with root package name */
        private wq.h f18341c1;

        /* renamed from: d  reason: collision with root package name */
        private final np.b f18342d;

        /* renamed from: d0  reason: collision with root package name */
        private k2 f18343d0;

        /* renamed from: d1  reason: collision with root package name */
        private a5 f18344d1;

        /* renamed from: e  reason: collision with root package name */
        private final qp.f f18345e;

        /* renamed from: e0  reason: collision with root package name */
        private wq.h f18346e0;

        /* renamed from: e1  reason: collision with root package name */
        private wq.h f18347e1;

        /* renamed from: f  reason: collision with root package name */
        private final b f18348f;

        /* renamed from: f0  reason: collision with root package name */
        private wq.h f18349f0;

        /* renamed from: f1  reason: collision with root package name */
        private wq.h f18350f1;

        /* renamed from: g  reason: collision with root package name */
        private wq.h f18351g;

        /* renamed from: g0  reason: collision with root package name */
        private wq.h f18352g0;

        /* renamed from: g1  reason: collision with root package name */
        private wq.h f18353g1;

        /* renamed from: h  reason: collision with root package name */
        private wq.h f18354h;

        /* renamed from: h0  reason: collision with root package name */
        private y f18355h0;

        /* renamed from: h1  reason: collision with root package name */
        private wq.h f18356h1;

        /* renamed from: i  reason: collision with root package name */
        private wq.h f18357i;

        /* renamed from: i0  reason: collision with root package name */
        private wq.h f18358i0;

        /* renamed from: i1  reason: collision with root package name */
        private wq.h f18359i1;

        /* renamed from: j  reason: collision with root package name */
        private wq.h f18360j;

        /* renamed from: j0  reason: collision with root package name */
        private n2 f18361j0;

        /* renamed from: j1  reason: collision with root package name */
        private wq.h f18362j1;

        /* renamed from: k  reason: collision with root package name */
        private wq.h f18363k;

        /* renamed from: k0  reason: collision with root package name */
        private wq.h f18364k0;

        /* renamed from: k1  reason: collision with root package name */
        private i2 f18365k1;

        /* renamed from: l  reason: collision with root package name */
        private wq.h f18366l;

        /* renamed from: l0  reason: collision with root package name */
        private po.i f18367l0;

        /* renamed from: l1  reason: collision with root package name */
        private wq.h f18368l1;

        /* renamed from: m  reason: collision with root package name */
        private wq.h f18369m;

        /* renamed from: m0  reason: collision with root package name */
        private wq.h f18370m0;

        /* renamed from: m1  reason: collision with root package name */
        private wq.h f18371m1;

        /* renamed from: n  reason: collision with root package name */
        private wq.h f18372n;

        /* renamed from: n0  reason: collision with root package name */
        private wq.h f18373n0;

        /* renamed from: n1  reason: collision with root package name */
        private wq.h f18374n1;

        /* renamed from: o  reason: collision with root package name */
        private wq.h f18375o;

        /* renamed from: o0  reason: collision with root package name */
        private wq.h f18376o0;

        /* renamed from: o1  reason: collision with root package name */
        private wq.h f18377o1;

        /* renamed from: p  reason: collision with root package name */
        private wq.h f18378p;

        /* renamed from: p0  reason: collision with root package name */
        private wq.h f18379p0;

        /* renamed from: p1  reason: collision with root package name */
        private wq.h f18380p1;

        /* renamed from: q  reason: collision with root package name */
        private wq.h f18381q;

        /* renamed from: q0  reason: collision with root package name */
        private wq.h f18382q0;

        /* renamed from: q1  reason: collision with root package name */
        private wq.h f18383q1;

        /* renamed from: r  reason: collision with root package name */
        private wq.h f18384r;

        /* renamed from: r0  reason: collision with root package name */
        private wq.h f18385r0;

        /* renamed from: r1  reason: collision with root package name */
        private wq.h f18386r1;

        /* renamed from: s  reason: collision with root package name */
        private wq.h f18387s;

        /* renamed from: s0  reason: collision with root package name */
        private wq.h f18388s0;

        /* renamed from: s1  reason: collision with root package name */
        private wq.h f18389s1;

        /* renamed from: t  reason: collision with root package name */
        private wq.h f18390t;

        /* renamed from: t0  reason: collision with root package name */
        private lo.g f18391t0;

        /* renamed from: t1  reason: collision with root package name */
        private wq.h f18392t1;

        /* renamed from: u  reason: collision with root package name */
        private wq.h f18393u;

        /* renamed from: u0  reason: collision with root package name */
        private wq.h f18394u0;

        /* renamed from: u1  reason: collision with root package name */
        private wq.h f18395u1;

        /* renamed from: v  reason: collision with root package name */
        private wq.h f18396v;

        /* renamed from: v0  reason: collision with root package name */
        private wq.h f18397v0;

        /* renamed from: v1  reason: collision with root package name */
        private wq.h f18398v1;

        /* renamed from: w  reason: collision with root package name */
        private wq.h f18399w;

        /* renamed from: w0  reason: collision with root package name */
        private wq.h f18400w0;

        /* renamed from: x  reason: collision with root package name */
        private wq.h f18401x;

        /* renamed from: x0  reason: collision with root package name */
        private pn.a0 f18402x0;

        /* renamed from: y  reason: collision with root package name */
        private wq.h f18403y;

        /* renamed from: y0  reason: collision with root package name */
        private wq.h f18404y0;

        /* renamed from: z  reason: collision with root package name */
        private wq.h f18405z;

        /* renamed from: z0  reason: collision with root package name */
        private rn.h f18406z0;

        private void A(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, xo.o oVar, pn.n nVar, xo.u uVar, rp.a aVar, po.l lVar, xo.b bVar, xo.g gVar, fp.f fVar2, bp.g gVar2, np.b bVar2, to.c cVar, mp.v vVar, pp.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, qp.f fVar3, xo.a0 a0Var, xn.c cVar2) {
            this.D0 = wq.c.c(xo.x.a(uVar));
            wq.h c10 = wq.c.c(d0.a(a0Var));
            this.E0 = c10;
            cp.n a10 = cp.n.a(c10, this.f18351g);
            this.F0 = a10;
            this.G0 = cp.o.a(a10);
            wq.h c11 = wq.c.c(pn.p.a(nVar));
            this.H0 = c11;
            g0 a11 = g0.a(c11);
            this.I0 = a11;
            f0 a12 = f0.a(this.f18351g, a11, this.f18400w0);
            this.J0 = a12;
            this.K0 = eo.g0.b(a12);
            ko.b a13 = ko.b.a(this.f18351g, this.I0);
            this.L0 = a13;
            this.M0 = ko.c.b(a13);
            this.N0 = wq.c.c(vo.q.a(fVar, this.A));
            this.O0 = wq.c.c(qp.d.a(this.B0));
            wq.h c12 = wq.c.c(vo.m.a(fVar, this.A));
            this.P0 = c12;
            jp.d a14 = jp.d.a(this.f18351g, c12, this.f18379p0, this.f18349f0, this.f18382q0, this.f18388s0);
            this.Q0 = a14;
            this.R0 = jp.e.b(a14);
            this.S0 = wq.c.c(pn.q.a(nVar));
            x0 a15 = x0.a(b1.a(), this.S0);
            this.T0 = a15;
            c1 a16 = c1.a(a15, this.f18400w0);
            this.U0 = a16;
            this.V0 = d1.b(a16);
            wq.h c13 = wq.c.c(bp.j.a(gVar2));
            this.W0 = c13;
            bp.p a17 = bp.p.a(c13, this.f18351g, this.f18375o);
            this.X0 = a17;
            this.Y0 = bp.q.b(a17);
            this.Z0 = wq.c.c(vo.o.a(fVar, this.A));
            wq.h c14 = wq.c.c(xo.e.a(bVar));
            this.f18335a1 = c14;
            this.f18338b1 = z0.a(this.Z0, this.O, c14);
        }

        private void B(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, xo.o oVar, pn.n nVar, xo.u uVar, rp.a aVar, po.l lVar, xo.b bVar, xo.g gVar, fp.f fVar2, bp.g gVar2, np.b bVar2, to.c cVar, mp.v vVar, pp.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, qp.f fVar3, xo.a0 a0Var, xn.c cVar2) {
            this.f18341c1 = a1.b(this.f18338b1);
            a5 a10 = a5.a(this.f18335a1, this.Z0, this.f18369m);
            this.f18344d1 = a10;
            this.f18347e1 = b5.b(a10);
            this.f18350f1 = wq.c.c(xo.n.a(gVar));
            this.f18353g1 = wq.c.c(xo.l.a(gVar));
            this.f18356h1 = wq.c.c(xo.m.a(gVar));
            this.f18359i1 = wq.c.c(vo.e.a(fVar, this.A));
            this.f18362j1 = wq.c.c(mp.w.a(vVar, mp.r.a()));
            i2 a11 = i2.a(this.f18352g0);
            this.f18365k1 = a11;
            this.f18368l1 = t.b(a11);
            j0 a12 = j0.a(this.I0, pn.u.a());
            this.f18371m1 = a12;
            this.f18374n1 = w0.a(a12);
            this.f18377o1 = q0.a(pn.u.a(), this.T0);
            g1 a13 = g1.a(pn.u.a(), this.T0);
            this.f18380p1 = a13;
            this.f18383q1 = o1.a(this.f18377o1, a13);
            wq.j c10 = wq.j.a(0, 8).a(vo.l.a()).a(this.f18374n1).a(q1.a()).a(this.f18383q1).a(yn.k.a()).a(fp.h.a()).a(zo.f.a()).a(j1.a()).c();
            this.f18386r1 = c10;
            this.f18389s1 = wq.c.c(vo.p.a(c10));
            this.f18392t1 = wq.c.c(po.h.a(this.B, this.f18369m, this.f18403y));
            po.p a14 = po.p.a(lVar);
            this.f18395u1 = a14;
            this.f18398v1 = wq.c.c(mp.y.a(vVar, a14));
        }

        private mo.j C() {
            return new mo.j(po.n.a(this.f18333a), (z.a) this.f18404y0.get(), (g.a) this.A0.get(), (up.b) this.C0.get());
        }

        private kp.j D() {
            return new kp.j(po.n.a(this.f18333a), (z.a) this.f18404y0.get(), (g.a) this.A0.get(), (up.b) this.C0.get());
        }

        private e0.a E() {
            return new e0.a(po.n.a(this.f18333a), (ActivityResultLauncher) this.D0.get());
        }

        private cp.c1 F() {
            return new cp.c1(po.n.a(this.f18333a), E(), m());
        }

        private x5 G() {
            return new x5(po.n.a(this.f18333a), (c.a) this.R0.get(), L(), (b1.b) this.V0.get(), F(), D(), (z.a) this.f18404y0.get(), (g.a) this.A0.get(), j(), (up.b) this.C0.get(), (qp.c) this.O0.get());
        }

        private b.a H() {
            return new b.a((mq.b) this.Z0.get());
        }

        private a.C0487a I() {
            return new a.C0487a((mq.b) this.Z0.get());
        }

        private v4 J() {
            return new v4(po.n.a(this.f18333a), (o.a) this.Y0.get(), (y0.a) this.f18341c1.get(), (z4.a) this.f18347e1.get(), (up.b) this.C0.get(), F(), l(), (qp.c) this.O0.get());
        }

        private mo.s K() {
            return new mo.s(po.n.a(this.f18333a), (z.a) this.f18404y0.get(), (g.a) this.A0.get(), (up.b) this.C0.get());
        }

        private b.a L() {
            return new b.a((nq.a) this.N0.get());
        }

        private fo.o h() {
            return new fo.o((up.b) this.C0.get());
        }

        private AutoClassifyWorker.b i() {
            return new AutoClassifyWorker.b((com.withpersona.sdk2.inquiry.governmentid.network.a) this.f18376o0.get(), (sp.a) this.f18382q0.get());
        }

        private un.a j() {
            return pn.o.a(this.f18339c, wq.c.b(this.f18385r0));
        }

        private m0 k() {
            return new m0(po.n.a(this.f18333a), F(), (e0.a) this.K0.get(), (a.b) this.M0.get(), L(), (z.a) this.f18404y0.get(), (g.a) this.A0.get(), (up.b) this.C0.get());
        }

        private kq.x0 l() {
            return new kq.x0(H(), I());
        }

        private cp.x m() {
            return new cp.x(po.n.a(this.f18333a), (m.a) this.G0.get());
        }

        private yn.c n() {
            return new yn.c((ActivityResultLauncher) this.f18350f1.get(), po.n.a(this.f18333a), rp.b.c(this.f18336b));
        }

        private a.C0212a o() {
            return new a.C0212a((ao.b) this.f18359i1.get());
        }

        private a.C0083a p() {
            return new a.C0083a((ao.b) this.f18359i1.get());
        }

        private b.a q() {
            return new b.a((ao.b) this.f18359i1.get(), (mp.i) this.f18362j1.get());
        }

        private c.a r() {
            return new c.a((ao.b) this.f18359i1.get());
        }

        private eo.a0 s() {
            return new eo.a0((ActivityResultLauncher) this.f18397v0.get(), po.n.a(this.f18333a), rp.b.c(this.f18336b));
        }

        private d.a t() {
            return new d.a((ao.b) this.f18359i1.get(), (co.a) this.f18349f0.get(), np.c.b(this.f18342d));
        }

        private r2 u() {
            return new r2((v4.h) this.f18373n0.get(), po.n.a(this.f18333a), F(), n(), v(), o(), r(), q(), p(), t(), (up.b) this.C0.get(), (qp.c) this.O0.get());
        }

        private v2.b v() {
            return new v2.b((ActivityResultLauncher) this.f18353g1.get(), (ActivityResultLauncher) this.f18356h1.get(), po.n.a(this.f18333a), rp.b.c(this.f18336b));
        }

        private g3 w() {
            return new g3(po.n.a(this.f18333a), (v4.h) this.f18373n0.get(), (f.a) this.f18394u0.get(), s(), C(), K(), k(), i(), h(), j(), (up.b) this.C0.get(), (qp.c) this.O0.get());
        }

        private void x(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, xo.o oVar, pn.n nVar, xo.u uVar, rp.a aVar, po.l lVar, xo.b bVar, xo.g gVar, fp.f fVar2, bp.g gVar2, np.b bVar2, to.c cVar, mp.v vVar, pp.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, qp.f fVar3, xo.a0 a0Var, xn.c cVar2) {
            this.f18351g = po.n.b(lVar);
            this.f18354h = vo.n.a(fVar);
            this.f18357i = NetworkCoreModule_ResponseInterceptorFactory.create(networkCoreModule);
            this.f18360j = wq.j.a(0, 1).a(vo.j.a()).c();
            this.f18363k = wq.j.a(0, 1).a(vo.i.a()).c();
            wq.j c10 = wq.j.a(0, 4).a(NetworkInquiryModule_ProvideMoshiJsonAdapterFactoryFactory.create()).a(NetworkCoreModule_ProvideMoshiJsonAdapterFactoryFactory.create()).a(vo.k.a()).a(v0.a()).c();
            this.f18366l = c10;
            wq.h c11 = wq.c.c(NetworkCoreModule_MoshiFactory.create(networkCoreModule, this.f18360j, this.f18363k, (wq.h) c10));
            this.f18369m = c11;
            this.f18372n = NetworkCoreModule_InterceptorFactory.create(networkCoreModule, c11);
            wq.h c12 = wq.c.c(fp.d.a());
            this.f18375o = c12;
            this.f18378p = fp.g.a(fVar2, c12);
            this.f18381q = wq.j.a(3, 0).b(this.f18357i).b(this.f18372n).b(this.f18378p).c();
            this.f18384r = NetworkCoreModule_KeyInflectionFactory.create(networkCoreModule);
            this.f18387s = NetworkCoreModule_UseServerStylesFactory.create(networkCoreModule);
            this.f18390t = wq.f.b(3).c("Key-Inflection", this.f18384r).c("Persona-Use-Mobile-Server-Styles", this.f18387s).c("User-Agent", com.withpersona.sdk2.inquiry.internal.network.g.a()).b();
            xn.s a10 = xn.s.a(this.f18351g);
            this.f18393u = a10;
            this.f18396v = wq.c.c(xn.d.b(cVar2, a10));
            xn.m a11 = xn.m.a(this.f18351g);
            this.f18399w = a11;
            this.f18401x = wq.c.c(xn.f.a(cVar2, a11));
            yo.d a12 = yo.d.a(this.f18351g);
            this.f18403y = a12;
            NetworkCoreModule_OkhttpClientFactory create = NetworkCoreModule_OkhttpClientFactory.create(networkCoreModule, this.f18381q, this.f18390t, this.f18351g, this.f18396v, this.f18401x, (wq.h) a12);
            this.f18405z = create;
            wq.h c13 = wq.c.c(NetworkCoreModule_RetrofitFactory.create(networkCoreModule, this.f18354h, (wq.h) create, this.f18369m));
            this.A = c13;
            this.B = wq.c.c(vo.h.a(fVar, c13));
            this.C = to.e.a(cVar);
            this.D = wq.c.c(vo.f.a(fVar, this.A));
            this.E = to.g.a(cVar);
        }

        private void y(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, xo.o oVar, pn.n nVar, xo.u uVar, rp.a aVar, po.l lVar, xo.b bVar, xo.g gVar, fp.f fVar2, bp.g gVar2, np.b bVar2, to.c cVar, mp.v vVar, pp.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, qp.f fVar3, xo.a0 a0Var, xn.c cVar2) {
            to.k a10 = to.k.a(this.E);
            this.F = a10;
            wq.h b10 = com.withpersona.sdk2.inquiry.internal.fallbackmode.j.b(a10);
            this.G = b10;
            this.H = com.withpersona.sdk2.inquiry.internal.fallbackmode.e.a(this.D, this.f18369m, b10);
            com.withpersona.sdk2.inquiry.internal.fallbackmode.g a11 = com.withpersona.sdk2.inquiry.internal.fallbackmode.g.a(this.f18369m, this.f18351g, this.G);
            this.I = a11;
            wq.h a12 = com.withpersona.sdk2.inquiry.internal.fallbackmode.h.a(a11);
            this.J = a12;
            this.K = com.withpersona.sdk2.inquiry.internal.fallbackmode.b.b(aVar3, this.H, a12);
            to.d a13 = to.d.a(cVar);
            this.L = a13;
            this.M = wq.c.c(to.j.a(this.C, this.K, a13, this.f18369m));
            xn.k a14 = xn.k.a(this.f18351g);
            this.N = a14;
            this.O = wq.c.c(xn.e.a(cVar2, a14));
            yo.f a15 = yo.f.a(this.f18403y);
            this.P = a15;
            this.Q = yo.g.b(a15);
            this.R = wq.c.c(uo.e.a());
            pp.b a16 = pp.b.a(aVar2);
            this.S = a16;
            wq.h c10 = wq.c.c(uo.c.a(this.f18351g, this.Q, this.R, a16));
            this.T = c10;
            wq.h c11 = wq.c.c(vo.c.a(this.f18351g, this.B, this.M, this.f18375o, this.O, c10));
            this.U = c11;
            po.d a17 = po.d.a(c11);
            this.V = a17;
            this.W = d.b(a17);
            po.c a18 = po.c.a(this.U);
            this.X = a18;
            this.Y = com.withpersona.sdk2.inquiry.internal.b.b(a18);
            po.m b11 = po.m.b(lVar);
            this.Z = b11;
            wq.h c12 = wq.c.c(gq.f.a(this.f18405z, b11));
            this.f18334a0 = c12;
            d2 a19 = d2.a(this.f18351g, this.B, this.O, this.f18375o, this.M, c12);
            this.f18337b0 = a19;
            this.f18340c0 = r.b(a19);
            this.f18343d0 = k2.a(this.U);
        }

        private void z(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, xo.o oVar, pn.n nVar, xo.u uVar, rp.a aVar, po.l lVar, xo.b bVar, xo.g gVar, fp.f fVar2, bp.g gVar2, np.b bVar2, to.c cVar, mp.v vVar, pp.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, qp.f fVar3, xo.a0 a0Var, xn.c cVar2) {
            this.f18346e0 = v.b(this.f18343d0);
            this.f18349f0 = wq.c.c(to.f.a(cVar, this.M));
            wq.h c10 = wq.c.c(m2.a(this.f18351g));
            this.f18352g0 = c10;
            y a10 = y.a(this.B, this.f18349f0, c10);
            this.f18355h0 = a10;
            this.f18358i0 = z.b(a10);
            n2 a11 = n2.a(this.U);
            this.f18361j0 = a11;
            this.f18364k0 = b0.b(a11);
            po.i a12 = po.i.a(this.U);
            this.f18367l0 = a12;
            this.f18370m0 = g.b(a12);
            this.f18373n0 = wq.c.c(po.o.a(lVar, this.f18351g));
            this.f18376o0 = wq.c.c(vo.g.a(fVar, this.A));
            this.f18379p0 = np.c.a(bVar2);
            this.f18382q0 = wq.c.c(mp.x.a(vVar, sp.c.a()));
            wq.h c11 = wq.c.c(un.c.a(this.f18351g));
            this.f18385r0 = c11;
            pn.o b10 = pn.o.b(nVar, c11);
            this.f18388s0 = b10;
            lo.g a13 = lo.g.a(this.f18351g, this.f18376o0, this.f18379p0, this.f18349f0, this.f18382q0, b10);
            this.f18391t0 = a13;
            this.f18394u0 = lo.h.b(a13);
            this.f18397v0 = wq.c.c(xo.r.a(oVar));
            rp.b a14 = rp.b.a(aVar);
            this.f18400w0 = a14;
            pn.a0 a15 = pn.a0.a(this.f18388s0, a14);
            this.f18402x0 = a15;
            this.f18404y0 = pn.b0.b(a15);
            rn.h a16 = rn.h.a(this.f18351g, this.f18388s0, this.f18400w0);
            this.f18406z0 = a16;
            this.A0 = rn.i.b(a16);
            qp.g a17 = qp.g.a(fVar3);
            this.B0 = a17;
            this.C0 = wq.c.c(up.c.a(a17));
        }

        @Override // po.q
        public ym.e0 a() {
            return (ym.e0) this.f18389s1.get();
        }

        @Override // po.q
        public n b() {
            return new n(po.n.a(this.f18333a), (c.a) this.W.get(), (a.InterfaceC0225a) this.Y.get(), (q.b) this.f18340c0.get(), (u.a) this.f18346e0.get(), (x.a) this.f18358i0.get(), (a0.a) this.f18364k0.get(), (f.a) this.f18370m0.get(), w(), G(), J(), u(), (fp.c) this.f18375o.get(), qp.g.b(this.f18345e), (up.b) this.C0.get(), (qp.c) this.O0.get(), (l2) this.f18352g0.get(), (s.a) this.f18368l1.get());
        }

        @Override // po.q
        public xn.g c() {
            return (xn.g) this.f18396v.get();
        }

        @Override // po.q
        public po.g d() {
            return (po.g) this.f18392t1.get();
        }

        @Override // po.q
        public v4.h e() {
            return (v4.h) this.f18373n0.get();
        }

        @Override // po.q
        public vp.a f() {
            return (vp.a) this.f18398v1.get();
        }

        @Override // po.q
        public gq.a g() {
            return (gq.a) this.f18334a0.get();
        }

        private b(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, xo.o oVar, pn.n nVar, xo.u uVar, rp.a aVar, po.l lVar, xo.b bVar, xo.g gVar, fp.f fVar2, bp.g gVar2, np.b bVar2, to.c cVar, mp.v vVar, pp.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, qp.f fVar3, xo.a0 a0Var, xn.c cVar2) {
            this.f18348f = this;
            this.f18333a = lVar;
            this.f18336b = aVar;
            this.f18339c = nVar;
            this.f18342d = bVar2;
            this.f18345e = fVar3;
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
