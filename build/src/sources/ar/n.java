package ar;

import ar.l;
import dv.u;
import dv.v;
import dv.w;
import dv.x;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class n implements l {

    /* renamed from: a  reason: collision with root package name */
    private final g f6737a;

    /* renamed from: b  reason: collision with root package name */
    private final q f6738b;

    /* renamed from: c  reason: collision with root package name */
    private final t f6739c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f6740d;

    /* renamed from: e  reason: collision with root package name */
    private final l.a f6741e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class a implements l.b {

        /* renamed from: a  reason: collision with root package name */
        private final Map f6742a = new HashMap();

        /* renamed from: b  reason: collision with root package name */
        private l.a f6743b;

        @Override // ar.l.b
        public l a(g gVar, q qVar) {
            l.a aVar = this.f6743b;
            if (aVar == null) {
                aVar = new b();
            }
            return new n(gVar, qVar, new t(), Collections.unmodifiableMap(this.f6742a), aVar);
        }

        @Override // ar.l.b
        public l.b b(Class cls, l.c cVar) {
            if (cVar == null) {
                this.f6742a.remove(cls);
                return this;
            }
            this.f6742a.put(cls, cVar);
            return this;
        }
    }

    n(g gVar, q qVar, t tVar, Map map, l.a aVar) {
        this.f6737a = gVar;
        this.f6738b = qVar;
        this.f6739c = tVar;
        this.f6740d = map;
        this.f6741e = aVar;
    }

    private void G(dv.r rVar) {
        l.c cVar = (l.c) this.f6740d.get(rVar.getClass());
        if (cVar != null) {
            cVar.a(this, rVar);
        } else {
            g(rVar);
        }
    }

    @Override // dv.y
    public void A(dv.q qVar) {
        G(qVar);
    }

    @Override // ar.l
    public void B(dv.r rVar) {
        this.f6741e.b(this, rVar);
    }

    @Override // dv.y
    public void C(dv.b bVar) {
        G(bVar);
    }

    @Override // dv.y
    public void D(u uVar) {
        G(uVar);
    }

    @Override // dv.y
    public void E(dv.d dVar) {
        G(dVar);
    }

    public void F(Class cls, int i10) {
        s a10 = this.f6737a.c().a(cls);
        if (a10 != null) {
            b(i10, a10.a(this.f6737a, this.f6738b));
        }
    }

    @Override // dv.y
    public void a(dv.h hVar) {
        G(hVar);
    }

    @Override // ar.l
    public void b(int i10, Object obj) {
        t tVar = this.f6739c;
        t.j(tVar, obj, i10, tVar.length());
    }

    @Override // ar.l
    public t builder() {
        return this.f6739c;
    }

    @Override // dv.y
    public void c(dv.o oVar) {
        G(oVar);
    }

    @Override // dv.y
    public void d(dv.j jVar) {
        G(jVar);
    }

    @Override // dv.y
    public void e(dv.t tVar) {
        G(tVar);
    }

    @Override // dv.y
    public void f(dv.g gVar) {
        G(gVar);
    }

    @Override // ar.l
    public void g(dv.r rVar) {
        dv.r c10 = rVar.c();
        while (c10 != null) {
            dv.r e10 = c10.e();
            c10.a(this);
            c10 = e10;
        }
    }

    @Override // ar.l
    public boolean h(dv.r rVar) {
        if (rVar.e() != null) {
            return true;
        }
        return false;
    }

    @Override // ar.l
    public void i(dv.r rVar) {
        this.f6741e.a(this, rVar);
    }

    @Override // dv.y
    public void j(x xVar) {
        G(xVar);
    }

    @Override // dv.y
    public void k(dv.k kVar) {
        G(kVar);
    }

    @Override // dv.y
    public void l(w wVar) {
        G(wVar);
    }

    @Override // ar.l
    public int length() {
        return this.f6739c.length();
    }

    @Override // ar.l
    public q m() {
        return this.f6738b;
    }

    @Override // ar.l
    public void n(dv.r rVar, int i10) {
        F(rVar.getClass(), i10);
    }

    @Override // dv.y
    public void o(dv.s sVar) {
        G(sVar);
    }

    @Override // dv.y
    public void p(dv.m mVar) {
        G(mVar);
    }

    @Override // dv.y
    public void q(dv.i iVar) {
        G(iVar);
    }

    @Override // dv.y
    public void r(v vVar) {
        G(vVar);
    }

    @Override // dv.y
    public void s(dv.l lVar) {
        G(lVar);
    }

    @Override // ar.l
    public g t() {
        return this.f6737a;
    }

    @Override // ar.l
    public void u() {
        this.f6739c.append('\n');
    }

    @Override // dv.y
    public void v(dv.n nVar) {
        G(nVar);
    }

    @Override // dv.y
    public void w(dv.c cVar) {
        G(cVar);
    }

    @Override // dv.y
    public void x(dv.f fVar) {
        G(fVar);
    }

    @Override // dv.y
    public void y(dv.e eVar) {
        G(eVar);
    }

    @Override // ar.l
    public void z() {
        if (this.f6739c.length() > 0 && '\n' != this.f6739c.h()) {
            this.f6739c.append('\n');
        }
    }
}
