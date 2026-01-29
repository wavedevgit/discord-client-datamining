package com.withpersona.sdk2.inquiry.internal;

import androidx.activity.result.ActivityResultLauncher;
import ao.e0;
import ao.f0;
import ao.g3;
import ao.j0;
import ao.v0;
import ao.w0;
import co.m0;
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
import ep.b1;
import ep.c1;
import ep.d1;
import ep.g1;
import ep.o1;
import ep.q0;
import ep.x5;
import gp.c;
import ho.a;
import hq.a1;
import hq.a5;
import hq.b5;
import hq.q1;
import hq.v4;
import hq.y0;
import hq.z0;
import hq.z4;
import io.f;
import jq.a;
import kq.b;
import mn.b1;
import mn.g0;
import mn.x0;
import mn.z;
import mo.d2;
import mo.i2;
import mo.k2;
import mo.l2;
import mo.m2;
import mo.n2;
import on.g;
import uo.d0;
import vn.r2;
import vn.v2;
import xn.a;
import yo.o;
import zo.e0;
import zo.j1;
import zo.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private NetworkCoreModule f19699a;

        /* renamed from: b  reason: collision with root package name */
        private com.withpersona.sdk2.inquiry.internal.network.f f19700b;

        /* renamed from: c  reason: collision with root package name */
        private uo.o f19701c;

        /* renamed from: d  reason: collision with root package name */
        private mn.n f19702d;

        /* renamed from: e  reason: collision with root package name */
        private uo.u f19703e;

        /* renamed from: f  reason: collision with root package name */
        private op.a f19704f;

        /* renamed from: g  reason: collision with root package name */
        private mo.l f19705g;

        /* renamed from: h  reason: collision with root package name */
        private uo.b f19706h;

        /* renamed from: i  reason: collision with root package name */
        private uo.g f19707i;

        /* renamed from: j  reason: collision with root package name */
        private cp.f f19708j;

        /* renamed from: k  reason: collision with root package name */
        private yo.g f19709k;

        /* renamed from: l  reason: collision with root package name */
        private kp.b f19710l;

        /* renamed from: m  reason: collision with root package name */
        private qo.c f19711m;

        /* renamed from: n  reason: collision with root package name */
        private jp.v f19712n;

        /* renamed from: o  reason: collision with root package name */
        private mp.a f19713o;

        /* renamed from: p  reason: collision with root package name */
        private com.withpersona.sdk2.inquiry.internal.fallbackmode.a f19714p;

        /* renamed from: q  reason: collision with root package name */
        private np.f f19715q;

        /* renamed from: r  reason: collision with root package name */
        private uo.a0 f19716r;

        /* renamed from: s  reason: collision with root package name */
        private un.c f19717s;

        public a a(com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar) {
            this.f19714p = (com.withpersona.sdk2.inquiry.internal.fallbackmode.a) tq.g.b(aVar);
            return this;
        }

        public mo.q b() {
            tq.g.a(this.f19699a, NetworkCoreModule.class);
            tq.g.a(this.f19700b, com.withpersona.sdk2.inquiry.internal.network.f.class);
            tq.g.a(this.f19701c, uo.o.class);
            if (this.f19702d == null) {
                this.f19702d = new mn.n();
            }
            tq.g.a(this.f19703e, uo.u.class);
            tq.g.a(this.f19704f, op.a.class);
            tq.g.a(this.f19705g, mo.l.class);
            tq.g.a(this.f19706h, uo.b.class);
            tq.g.a(this.f19707i, uo.g.class);
            if (this.f19708j == null) {
                this.f19708j = new cp.f();
            }
            tq.g.a(this.f19709k, yo.g.class);
            tq.g.a(this.f19710l, kp.b.class);
            tq.g.a(this.f19711m, qo.c.class);
            if (this.f19712n == null) {
                this.f19712n = new jp.v();
            }
            if (this.f19713o == null) {
                this.f19713o = new mp.a();
            }
            tq.g.a(this.f19714p, com.withpersona.sdk2.inquiry.internal.fallbackmode.a.class);
            tq.g.a(this.f19715q, np.f.class);
            tq.g.a(this.f19716r, uo.a0.class);
            if (this.f19717s == null) {
                this.f19717s = new un.c();
            }
            return new b(this.f19699a, this.f19700b, this.f19701c, this.f19702d, this.f19703e, this.f19704f, this.f19705g, this.f19706h, this.f19707i, this.f19708j, this.f19709k, this.f19710l, this.f19711m, this.f19712n, this.f19713o, this.f19714p, this.f19715q, this.f19716r, this.f19717s);
        }

        public a c(uo.b bVar) {
            this.f19706h = (uo.b) tq.g.b(bVar);
            return this;
        }

        public a d(kp.b bVar) {
            this.f19710l = (kp.b) tq.g.b(bVar);
            return this;
        }

        public a e(uo.g gVar) {
            this.f19707i = (uo.g) tq.g.b(gVar);
            return this;
        }

        public a f(uo.o oVar) {
            this.f19701c = (uo.o) tq.g.b(oVar);
            return this;
        }

        public a g(np.f fVar) {
            this.f19715q = (np.f) tq.g.b(fVar);
            return this;
        }

        public a h(qo.c cVar) {
            this.f19711m = (qo.c) tq.g.b(cVar);
            return this;
        }

        public a i(op.a aVar) {
            this.f19704f = (op.a) tq.g.b(aVar);
            return this;
        }

        public a j(mo.l lVar) {
            this.f19705g = (mo.l) tq.g.b(lVar);
            return this;
        }

        public a k(com.withpersona.sdk2.inquiry.internal.network.f fVar) {
            this.f19700b = (com.withpersona.sdk2.inquiry.internal.network.f) tq.g.b(fVar);
            return this;
        }

        public a l(NetworkCoreModule networkCoreModule) {
            this.f19699a = (NetworkCoreModule) tq.g.b(networkCoreModule);
            return this;
        }

        public a m(yo.g gVar) {
            this.f19709k = (yo.g) tq.g.b(gVar);
            return this;
        }

        public a n(uo.u uVar) {
            this.f19703e = (uo.u) tq.g.b(uVar);
            return this;
        }

        public a o(uo.a0 a0Var) {
            this.f19716r = (uo.a0) tq.g.b(a0Var);
            return this;
        }

        public a p(jp.v vVar) {
            this.f19712n = (jp.v) tq.g.b(vVar);
            return this;
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements mo.q {
        private tq.h A;
        private tq.h A0;
        private tq.h B;
        private tq.h B0;
        private tq.h C;
        private tq.h C0;
        private tq.h D;
        private tq.h D0;
        private tq.h E;
        private tq.h E0;
        private qo.k F;
        private zo.n F0;
        private tq.h G;
        private tq.h G0;
        private tq.h H;
        private tq.h H0;
        private com.withpersona.sdk2.inquiry.internal.fallbackmode.g I;
        private tq.h I0;
        private tq.h J;
        private f0 J0;
        private tq.h K;
        private tq.h K0;
        private tq.h L;
        private ho.b L0;
        private tq.h M;
        private tq.h M0;
        private tq.h N;
        private tq.h N0;
        private tq.h O;
        private tq.h O0;
        private vo.f P;
        private tq.h P0;
        private tq.h Q;
        private gp.d Q0;
        private tq.h R;
        private tq.h R0;
        private tq.h S;
        private tq.h S0;
        private tq.h T;
        private tq.h T0;
        private tq.h U;
        private c1 U0;
        private mo.d V;
        private tq.h V0;
        private tq.h W;
        private tq.h W0;
        private mo.c X;
        private yo.p X0;
        private tq.h Y;
        private tq.h Y0;
        private tq.h Z;
        private tq.h Z0;

        /* renamed from: a  reason: collision with root package name */
        private final mo.l f19718a;

        /* renamed from: a0  reason: collision with root package name */
        private tq.h f19719a0;

        /* renamed from: a1  reason: collision with root package name */
        private tq.h f19720a1;

        /* renamed from: b  reason: collision with root package name */
        private final op.a f19721b;

        /* renamed from: b0  reason: collision with root package name */
        private d2 f19722b0;

        /* renamed from: b1  reason: collision with root package name */
        private z0 f19723b1;

        /* renamed from: c  reason: collision with root package name */
        private final mn.n f19724c;

        /* renamed from: c0  reason: collision with root package name */
        private tq.h f19725c0;

        /* renamed from: c1  reason: collision with root package name */
        private tq.h f19726c1;

        /* renamed from: d  reason: collision with root package name */
        private final kp.b f19727d;

        /* renamed from: d0  reason: collision with root package name */
        private k2 f19728d0;

        /* renamed from: d1  reason: collision with root package name */
        private a5 f19729d1;

        /* renamed from: e  reason: collision with root package name */
        private final np.f f19730e;

        /* renamed from: e0  reason: collision with root package name */
        private tq.h f19731e0;

        /* renamed from: e1  reason: collision with root package name */
        private tq.h f19732e1;

        /* renamed from: f  reason: collision with root package name */
        private final b f19733f;

        /* renamed from: f0  reason: collision with root package name */
        private tq.h f19734f0;

        /* renamed from: f1  reason: collision with root package name */
        private tq.h f19735f1;

        /* renamed from: g  reason: collision with root package name */
        private tq.h f19736g;

        /* renamed from: g0  reason: collision with root package name */
        private tq.h f19737g0;

        /* renamed from: g1  reason: collision with root package name */
        private tq.h f19738g1;

        /* renamed from: h  reason: collision with root package name */
        private tq.h f19739h;

        /* renamed from: h0  reason: collision with root package name */
        private y f19740h0;

        /* renamed from: h1  reason: collision with root package name */
        private tq.h f19741h1;

        /* renamed from: i  reason: collision with root package name */
        private tq.h f19742i;

        /* renamed from: i0  reason: collision with root package name */
        private tq.h f19743i0;

        /* renamed from: i1  reason: collision with root package name */
        private tq.h f19744i1;

        /* renamed from: j  reason: collision with root package name */
        private tq.h f19745j;

        /* renamed from: j0  reason: collision with root package name */
        private n2 f19746j0;

        /* renamed from: j1  reason: collision with root package name */
        private tq.h f19747j1;

        /* renamed from: k  reason: collision with root package name */
        private tq.h f19748k;

        /* renamed from: k0  reason: collision with root package name */
        private tq.h f19749k0;

        /* renamed from: k1  reason: collision with root package name */
        private i2 f19750k1;

        /* renamed from: l  reason: collision with root package name */
        private tq.h f19751l;

        /* renamed from: l0  reason: collision with root package name */
        private mo.i f19752l0;

        /* renamed from: l1  reason: collision with root package name */
        private tq.h f19753l1;

        /* renamed from: m  reason: collision with root package name */
        private tq.h f19754m;

        /* renamed from: m0  reason: collision with root package name */
        private tq.h f19755m0;

        /* renamed from: m1  reason: collision with root package name */
        private tq.h f19756m1;

        /* renamed from: n  reason: collision with root package name */
        private tq.h f19757n;

        /* renamed from: n0  reason: collision with root package name */
        private tq.h f19758n0;

        /* renamed from: n1  reason: collision with root package name */
        private tq.h f19759n1;

        /* renamed from: o  reason: collision with root package name */
        private tq.h f19760o;

        /* renamed from: o0  reason: collision with root package name */
        private tq.h f19761o0;

        /* renamed from: o1  reason: collision with root package name */
        private tq.h f19762o1;

        /* renamed from: p  reason: collision with root package name */
        private tq.h f19763p;

        /* renamed from: p0  reason: collision with root package name */
        private tq.h f19764p0;

        /* renamed from: p1  reason: collision with root package name */
        private tq.h f19765p1;

        /* renamed from: q  reason: collision with root package name */
        private tq.h f19766q;

        /* renamed from: q0  reason: collision with root package name */
        private tq.h f19767q0;

        /* renamed from: q1  reason: collision with root package name */
        private tq.h f19768q1;

        /* renamed from: r  reason: collision with root package name */
        private tq.h f19769r;

        /* renamed from: r0  reason: collision with root package name */
        private tq.h f19770r0;

        /* renamed from: r1  reason: collision with root package name */
        private tq.h f19771r1;

        /* renamed from: s  reason: collision with root package name */
        private tq.h f19772s;

        /* renamed from: s0  reason: collision with root package name */
        private tq.h f19773s0;

        /* renamed from: s1  reason: collision with root package name */
        private tq.h f19774s1;

        /* renamed from: t  reason: collision with root package name */
        private tq.h f19775t;

        /* renamed from: t0  reason: collision with root package name */
        private io.g f19776t0;

        /* renamed from: t1  reason: collision with root package name */
        private tq.h f19777t1;

        /* renamed from: u  reason: collision with root package name */
        private tq.h f19778u;

        /* renamed from: u0  reason: collision with root package name */
        private tq.h f19779u0;

        /* renamed from: u1  reason: collision with root package name */
        private tq.h f19780u1;

        /* renamed from: v  reason: collision with root package name */
        private tq.h f19781v;

        /* renamed from: v0  reason: collision with root package name */
        private tq.h f19782v0;

        /* renamed from: v1  reason: collision with root package name */
        private tq.h f19783v1;

        /* renamed from: w  reason: collision with root package name */
        private tq.h f19784w;

        /* renamed from: w0  reason: collision with root package name */
        private tq.h f19785w0;

        /* renamed from: x  reason: collision with root package name */
        private tq.h f19786x;

        /* renamed from: x0  reason: collision with root package name */
        private mn.a0 f19787x0;

        /* renamed from: y  reason: collision with root package name */
        private tq.h f19788y;

        /* renamed from: y0  reason: collision with root package name */
        private tq.h f19789y0;

        /* renamed from: z  reason: collision with root package name */
        private tq.h f19790z;

        /* renamed from: z0  reason: collision with root package name */
        private on.h f19791z0;

        private void A(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, uo.o oVar, mn.n nVar, uo.u uVar, op.a aVar, mo.l lVar, uo.b bVar, uo.g gVar, cp.f fVar2, yo.g gVar2, kp.b bVar2, qo.c cVar, jp.v vVar, mp.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, np.f fVar3, uo.a0 a0Var, un.c cVar2) {
            this.D0 = tq.c.c(uo.x.a(uVar));
            tq.h c10 = tq.c.c(d0.a(a0Var));
            this.E0 = c10;
            zo.n a10 = zo.n.a(c10, this.f19736g);
            this.F0 = a10;
            this.G0 = zo.o.a(a10);
            tq.h c11 = tq.c.c(mn.p.a(nVar));
            this.H0 = c11;
            g0 a11 = g0.a(c11);
            this.I0 = a11;
            f0 a12 = f0.a(this.f19736g, a11, this.f19785w0);
            this.J0 = a12;
            this.K0 = ao.g0.b(a12);
            ho.b a13 = ho.b.a(this.f19736g, this.I0);
            this.L0 = a13;
            this.M0 = ho.c.b(a13);
            this.N0 = tq.c.c(so.q.a(fVar, this.A));
            this.O0 = tq.c.c(np.d.a(this.B0));
            tq.h c12 = tq.c.c(so.m.a(fVar, this.A));
            this.P0 = c12;
            gp.d a14 = gp.d.a(this.f19736g, c12, this.f19764p0, this.f19734f0, this.f19767q0, this.f19773s0);
            this.Q0 = a14;
            this.R0 = gp.e.b(a14);
            this.S0 = tq.c.c(mn.q.a(nVar));
            x0 a15 = x0.a(b1.a(), this.S0);
            this.T0 = a15;
            c1 a16 = c1.a(a15, this.f19785w0);
            this.U0 = a16;
            this.V0 = d1.b(a16);
            tq.h c13 = tq.c.c(yo.j.a(gVar2));
            this.W0 = c13;
            yo.p a17 = yo.p.a(c13, this.f19736g, this.f19760o);
            this.X0 = a17;
            this.Y0 = yo.q.b(a17);
            this.Z0 = tq.c.c(so.o.a(fVar, this.A));
            tq.h c14 = tq.c.c(uo.e.a(bVar));
            this.f19720a1 = c14;
            this.f19723b1 = z0.a(this.Z0, this.O, c14);
        }

        private void B(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, uo.o oVar, mn.n nVar, uo.u uVar, op.a aVar, mo.l lVar, uo.b bVar, uo.g gVar, cp.f fVar2, yo.g gVar2, kp.b bVar2, qo.c cVar, jp.v vVar, mp.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, np.f fVar3, uo.a0 a0Var, un.c cVar2) {
            this.f19726c1 = a1.b(this.f19723b1);
            a5 a10 = a5.a(this.f19720a1, this.Z0, this.f19754m);
            this.f19729d1 = a10;
            this.f19732e1 = b5.b(a10);
            this.f19735f1 = tq.c.c(uo.n.a(gVar));
            this.f19738g1 = tq.c.c(uo.l.a(gVar));
            this.f19741h1 = tq.c.c(uo.m.a(gVar));
            this.f19744i1 = tq.c.c(so.e.a(fVar, this.A));
            this.f19747j1 = tq.c.c(jp.w.a(vVar, jp.r.a()));
            i2 a11 = i2.a(this.f19737g0);
            this.f19750k1 = a11;
            this.f19753l1 = t.b(a11);
            j0 a12 = j0.a(this.I0, mn.u.a());
            this.f19756m1 = a12;
            this.f19759n1 = w0.a(a12);
            this.f19762o1 = q0.a(mn.u.a(), this.T0);
            g1 a13 = g1.a(mn.u.a(), this.T0);
            this.f19765p1 = a13;
            this.f19768q1 = o1.a(this.f19762o1, a13);
            tq.j c10 = tq.j.a(0, 8).a(so.l.a()).a(this.f19759n1).a(q1.a()).a(this.f19768q1).a(vn.k.a()).a(cp.h.a()).a(wo.f.a()).a(j1.a()).c();
            this.f19771r1 = c10;
            this.f19774s1 = tq.c.c(so.p.a(c10));
            this.f19777t1 = tq.c.c(mo.h.a(this.B, this.f19754m, this.f19788y));
            mo.p a14 = mo.p.a(lVar);
            this.f19780u1 = a14;
            this.f19783v1 = tq.c.c(jp.y.a(vVar, a14));
        }

        private jo.j C() {
            return new jo.j(mo.n.a(this.f19718a), (z.a) this.f19789y0.get(), (g.a) this.A0.get(), (rp.b) this.C0.get());
        }

        private hp.j D() {
            return new hp.j(mo.n.a(this.f19718a), (z.a) this.f19789y0.get(), (g.a) this.A0.get(), (rp.b) this.C0.get());
        }

        private e0.a E() {
            return new e0.a(mo.n.a(this.f19718a), (ActivityResultLauncher) this.D0.get());
        }

        private zo.c1 F() {
            return new zo.c1(mo.n.a(this.f19718a), E(), m());
        }

        private x5 G() {
            return new x5(mo.n.a(this.f19718a), (c.a) this.R0.get(), L(), (b1.b) this.V0.get(), F(), D(), (z.a) this.f19789y0.get(), (g.a) this.A0.get(), j(), (rp.b) this.C0.get(), (np.c) this.O0.get());
        }

        private b.a H() {
            return new b.a((jq.b) this.Z0.get());
        }

        private a.C0423a I() {
            return new a.C0423a((jq.b) this.Z0.get());
        }

        private v4 J() {
            return new v4(mo.n.a(this.f19718a), (o.a) this.Y0.get(), (y0.a) this.f19726c1.get(), (z4.a) this.f19732e1.get(), (rp.b) this.C0.get(), F(), l(), (np.c) this.O0.get());
        }

        private jo.s K() {
            return new jo.s(mo.n.a(this.f19718a), (z.a) this.f19789y0.get(), (g.a) this.A0.get(), (rp.b) this.C0.get());
        }

        private b.a L() {
            return new b.a((kq.a) this.N0.get());
        }

        private bo.o h() {
            return new bo.o((rp.b) this.C0.get());
        }

        private AutoClassifyWorker.b i() {
            return new AutoClassifyWorker.b((com.withpersona.sdk2.inquiry.governmentid.network.a) this.f19761o0.get(), (pp.a) this.f19767q0.get());
        }

        private rn.a j() {
            return mn.o.a(this.f19724c, tq.c.b(this.f19770r0));
        }

        private m0 k() {
            return new m0(mo.n.a(this.f19718a), F(), (e0.a) this.K0.get(), (a.b) this.M0.get(), L(), (z.a) this.f19789y0.get(), (g.a) this.A0.get(), (rp.b) this.C0.get());
        }

        private hq.x0 l() {
            return new hq.x0(H(), I());
        }

        private zo.x m() {
            return new zo.x(mo.n.a(this.f19718a), (m.a) this.G0.get());
        }

        private vn.c n() {
            return new vn.c((ActivityResultLauncher) this.f19735f1.get(), mo.n.a(this.f19718a), op.b.c(this.f19721b));
        }

        private a.C0226a o() {
            return new a.C0226a((xn.b) this.f19744i1.get());
        }

        private a.C0741a p() {
            return new a.C0741a((xn.b) this.f19744i1.get());
        }

        private b.a q() {
            return new b.a((xn.b) this.f19744i1.get(), (jp.i) this.f19747j1.get());
        }

        private c.a r() {
            return new c.a((xn.b) this.f19744i1.get());
        }

        private ao.a0 s() {
            return new ao.a0((ActivityResultLauncher) this.f19782v0.get(), mo.n.a(this.f19718a), op.b.c(this.f19721b));
        }

        private d.a t() {
            return new d.a((xn.b) this.f19744i1.get(), (zn.a) this.f19734f0.get(), kp.c.b(this.f19727d));
        }

        private r2 u() {
            return new r2((v4.h) this.f19758n0.get(), mo.n.a(this.f19718a), F(), n(), v(), o(), r(), q(), p(), t(), (rp.b) this.C0.get(), (np.c) this.O0.get());
        }

        private v2.b v() {
            return new v2.b((ActivityResultLauncher) this.f19738g1.get(), (ActivityResultLauncher) this.f19741h1.get(), mo.n.a(this.f19718a), op.b.c(this.f19721b));
        }

        private g3 w() {
            return new g3(mo.n.a(this.f19718a), (v4.h) this.f19758n0.get(), (f.a) this.f19779u0.get(), s(), C(), K(), k(), i(), h(), j(), (rp.b) this.C0.get(), (np.c) this.O0.get());
        }

        private void x(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, uo.o oVar, mn.n nVar, uo.u uVar, op.a aVar, mo.l lVar, uo.b bVar, uo.g gVar, cp.f fVar2, yo.g gVar2, kp.b bVar2, qo.c cVar, jp.v vVar, mp.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, np.f fVar3, uo.a0 a0Var, un.c cVar2) {
            this.f19736g = mo.n.b(lVar);
            this.f19739h = so.n.a(fVar);
            this.f19742i = NetworkCoreModule_ResponseInterceptorFactory.create(networkCoreModule);
            this.f19745j = tq.j.a(0, 1).a(so.j.a()).c();
            this.f19748k = tq.j.a(0, 1).a(so.i.a()).c();
            tq.j c10 = tq.j.a(0, 4).a(NetworkInquiryModule_ProvideMoshiJsonAdapterFactoryFactory.create()).a(NetworkCoreModule_ProvideMoshiJsonAdapterFactoryFactory.create()).a(so.k.a()).a(v0.a()).c();
            this.f19751l = c10;
            tq.h c11 = tq.c.c(NetworkCoreModule_MoshiFactory.create(networkCoreModule, this.f19745j, this.f19748k, (tq.h) c10));
            this.f19754m = c11;
            this.f19757n = NetworkCoreModule_InterceptorFactory.create(networkCoreModule, c11);
            tq.h c12 = tq.c.c(cp.d.a());
            this.f19760o = c12;
            this.f19763p = cp.g.a(fVar2, c12);
            this.f19766q = tq.j.a(3, 0).b(this.f19742i).b(this.f19757n).b(this.f19763p).c();
            this.f19769r = NetworkCoreModule_KeyInflectionFactory.create(networkCoreModule);
            this.f19772s = NetworkCoreModule_UseServerStylesFactory.create(networkCoreModule);
            this.f19775t = tq.f.b(3).c("Key-Inflection", this.f19769r).c("Persona-Use-Mobile-Server-Styles", this.f19772s).c("User-Agent", com.withpersona.sdk2.inquiry.internal.network.g.a()).b();
            un.s a10 = un.s.a(this.f19736g);
            this.f19778u = a10;
            this.f19781v = tq.c.c(un.d.b(cVar2, a10));
            un.m a11 = un.m.a(this.f19736g);
            this.f19784w = a11;
            this.f19786x = tq.c.c(un.f.a(cVar2, a11));
            vo.d a12 = vo.d.a(this.f19736g);
            this.f19788y = a12;
            NetworkCoreModule_OkhttpClientFactory create = NetworkCoreModule_OkhttpClientFactory.create(networkCoreModule, this.f19766q, this.f19775t, this.f19736g, this.f19781v, this.f19786x, (tq.h) a12);
            this.f19790z = create;
            tq.h c13 = tq.c.c(NetworkCoreModule_RetrofitFactory.create(networkCoreModule, this.f19739h, (tq.h) create, this.f19754m));
            this.A = c13;
            this.B = tq.c.c(so.h.a(fVar, c13));
            this.C = qo.e.a(cVar);
            this.D = tq.c.c(so.f.a(fVar, this.A));
            this.E = qo.g.a(cVar);
        }

        private void y(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, uo.o oVar, mn.n nVar, uo.u uVar, op.a aVar, mo.l lVar, uo.b bVar, uo.g gVar, cp.f fVar2, yo.g gVar2, kp.b bVar2, qo.c cVar, jp.v vVar, mp.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, np.f fVar3, uo.a0 a0Var, un.c cVar2) {
            qo.k a10 = qo.k.a(this.E);
            this.F = a10;
            tq.h b10 = com.withpersona.sdk2.inquiry.internal.fallbackmode.j.b(a10);
            this.G = b10;
            this.H = com.withpersona.sdk2.inquiry.internal.fallbackmode.e.a(this.D, this.f19754m, b10);
            com.withpersona.sdk2.inquiry.internal.fallbackmode.g a11 = com.withpersona.sdk2.inquiry.internal.fallbackmode.g.a(this.f19754m, this.f19736g, this.G);
            this.I = a11;
            tq.h a12 = com.withpersona.sdk2.inquiry.internal.fallbackmode.h.a(a11);
            this.J = a12;
            this.K = com.withpersona.sdk2.inquiry.internal.fallbackmode.b.b(aVar3, this.H, a12);
            qo.d a13 = qo.d.a(cVar);
            this.L = a13;
            this.M = tq.c.c(qo.j.a(this.C, this.K, a13, this.f19754m));
            un.k a14 = un.k.a(this.f19736g);
            this.N = a14;
            this.O = tq.c.c(un.e.a(cVar2, a14));
            vo.f a15 = vo.f.a(this.f19788y);
            this.P = a15;
            this.Q = vo.g.b(a15);
            this.R = tq.c.c(ro.e.a());
            mp.b a16 = mp.b.a(aVar2);
            this.S = a16;
            tq.h c10 = tq.c.c(ro.c.a(this.f19736g, this.Q, this.R, a16));
            this.T = c10;
            tq.h c11 = tq.c.c(so.c.a(this.f19736g, this.B, this.M, this.f19760o, this.O, c10));
            this.U = c11;
            mo.d a17 = mo.d.a(c11);
            this.V = a17;
            this.W = d.b(a17);
            mo.c a18 = mo.c.a(this.U);
            this.X = a18;
            this.Y = com.withpersona.sdk2.inquiry.internal.b.b(a18);
            mo.m b11 = mo.m.b(lVar);
            this.Z = b11;
            tq.h c12 = tq.c.c(dq.f.a(this.f19790z, b11));
            this.f19719a0 = c12;
            d2 a19 = d2.a(this.f19736g, this.B, this.O, this.f19760o, this.M, c12);
            this.f19722b0 = a19;
            this.f19725c0 = r.b(a19);
            this.f19728d0 = k2.a(this.U);
        }

        private void z(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, uo.o oVar, mn.n nVar, uo.u uVar, op.a aVar, mo.l lVar, uo.b bVar, uo.g gVar, cp.f fVar2, yo.g gVar2, kp.b bVar2, qo.c cVar, jp.v vVar, mp.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, np.f fVar3, uo.a0 a0Var, un.c cVar2) {
            this.f19731e0 = v.b(this.f19728d0);
            this.f19734f0 = tq.c.c(qo.f.a(cVar, this.M));
            tq.h c10 = tq.c.c(m2.a(this.f19736g));
            this.f19737g0 = c10;
            y a10 = y.a(this.B, this.f19734f0, c10);
            this.f19740h0 = a10;
            this.f19743i0 = z.b(a10);
            n2 a11 = n2.a(this.U);
            this.f19746j0 = a11;
            this.f19749k0 = b0.b(a11);
            mo.i a12 = mo.i.a(this.U);
            this.f19752l0 = a12;
            this.f19755m0 = g.b(a12);
            this.f19758n0 = tq.c.c(mo.o.a(lVar, this.f19736g));
            this.f19761o0 = tq.c.c(so.g.a(fVar, this.A));
            this.f19764p0 = kp.c.a(bVar2);
            this.f19767q0 = tq.c.c(jp.x.a(vVar, pp.c.a()));
            tq.h c11 = tq.c.c(rn.c.a(this.f19736g));
            this.f19770r0 = c11;
            mn.o b10 = mn.o.b(nVar, c11);
            this.f19773s0 = b10;
            io.g a13 = io.g.a(this.f19736g, this.f19761o0, this.f19764p0, this.f19734f0, this.f19767q0, b10);
            this.f19776t0 = a13;
            this.f19779u0 = io.h.b(a13);
            this.f19782v0 = tq.c.c(uo.r.a(oVar));
            op.b a14 = op.b.a(aVar);
            this.f19785w0 = a14;
            mn.a0 a15 = mn.a0.a(this.f19773s0, a14);
            this.f19787x0 = a15;
            this.f19789y0 = mn.b0.b(a15);
            on.h a16 = on.h.a(this.f19736g, this.f19773s0, this.f19785w0);
            this.f19791z0 = a16;
            this.A0 = on.i.b(a16);
            np.g a17 = np.g.a(fVar3);
            this.B0 = a17;
            this.C0 = tq.c.c(rp.c.a(a17));
        }

        @Override // mo.q
        public vm.e0 a() {
            return (vm.e0) this.f19774s1.get();
        }

        @Override // mo.q
        public n b() {
            return new n(mo.n.a(this.f19718a), (c.a) this.W.get(), (a.InterfaceC0239a) this.Y.get(), (q.b) this.f19725c0.get(), (u.a) this.f19731e0.get(), (x.a) this.f19743i0.get(), (a0.a) this.f19749k0.get(), (f.a) this.f19755m0.get(), w(), G(), J(), u(), (cp.c) this.f19760o.get(), np.g.b(this.f19730e), (rp.b) this.C0.get(), (np.c) this.O0.get(), (l2) this.f19737g0.get(), (s.a) this.f19753l1.get());
        }

        @Override // mo.q
        public un.g c() {
            return (un.g) this.f19781v.get();
        }

        @Override // mo.q
        public mo.g d() {
            return (mo.g) this.f19777t1.get();
        }

        @Override // mo.q
        public v4.h e() {
            return (v4.h) this.f19758n0.get();
        }

        @Override // mo.q
        public sp.a f() {
            return (sp.a) this.f19783v1.get();
        }

        @Override // mo.q
        public dq.a g() {
            return (dq.a) this.f19719a0.get();
        }

        private b(NetworkCoreModule networkCoreModule, com.withpersona.sdk2.inquiry.internal.network.f fVar, uo.o oVar, mn.n nVar, uo.u uVar, op.a aVar, mo.l lVar, uo.b bVar, uo.g gVar, cp.f fVar2, yo.g gVar2, kp.b bVar2, qo.c cVar, jp.v vVar, mp.a aVar2, com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar3, np.f fVar3, uo.a0 a0Var, un.c cVar2) {
            this.f19733f = this;
            this.f19718a = lVar;
            this.f19721b = aVar;
            this.f19724c = nVar;
            this.f19727d = bVar2;
            this.f19730e = fVar3;
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
