package jr;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import jr.l;
import rv.u;
import rv.v;
import rv.w;
import rv.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class n implements l {

    /* renamed from: a  reason: collision with root package name */
    private final g f30445a;

    /* renamed from: b  reason: collision with root package name */
    private final q f30446b;

    /* renamed from: c  reason: collision with root package name */
    private final t f30447c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f30448d;

    /* renamed from: e  reason: collision with root package name */
    private final l.a f30449e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class a implements l.b {

        /* renamed from: a  reason: collision with root package name */
        private final Map f30450a = new HashMap();

        /* renamed from: b  reason: collision with root package name */
        private l.a f30451b;

        @Override // jr.l.b
        public l.b a(Class cls, l.c cVar) {
            if (cVar == null) {
                this.f30450a.remove(cls);
                return this;
            }
            this.f30450a.put(cls, cVar);
            return this;
        }

        @Override // jr.l.b
        public l b(g gVar, q qVar) {
            l.a aVar = this.f30451b;
            if (aVar == null) {
                aVar = new b();
            }
            return new n(gVar, qVar, new t(), Collections.unmodifiableMap(this.f30450a), aVar);
        }
    }

    n(g gVar, q qVar, t tVar, Map map, l.a aVar) {
        this.f30445a = gVar;
        this.f30446b = qVar;
        this.f30447c = tVar;
        this.f30448d = map;
        this.f30449e = aVar;
    }

    private void G(rv.r rVar) {
        l.c cVar = (l.c) this.f30448d.get(rVar.getClass());
        if (cVar != null) {
            cVar.a(this, rVar);
        } else {
            A(rVar);
        }
    }

    @Override // jr.l
    public void A(rv.r rVar) {
        rv.r c10 = rVar.c();
        while (c10 != null) {
            rv.r e10 = c10.e();
            c10.a(this);
            c10 = e10;
        }
    }

    @Override // jr.l
    public boolean B(rv.r rVar) {
        if (rVar.e() != null) {
            return true;
        }
        return false;
    }

    @Override // rv.y
    public void C(rv.j jVar) {
        G(jVar);
    }

    @Override // rv.y
    public void D(rv.h hVar) {
        G(hVar);
    }

    @Override // rv.y
    public void E(rv.c cVar) {
        G(cVar);
    }

    public void F(Class cls, int i10) {
        s a10 = this.f30445a.c().a(cls);
        if (a10 != null) {
            d(i10, a10.a(this.f30445a, this.f30446b));
        }
    }

    @Override // rv.y
    public void a(rv.f fVar) {
        G(fVar);
    }

    @Override // jr.l
    public void b(rv.r rVar, int i10) {
        F(rVar.getClass(), i10);
    }

    @Override // jr.l
    public t builder() {
        return this.f30447c;
    }

    @Override // rv.y
    public void c(rv.b bVar) {
        G(bVar);
    }

    @Override // jr.l
    public void d(int i10, Object obj) {
        t tVar = this.f30447c;
        t.j(tVar, obj, i10, tVar.length());
    }

    @Override // rv.y
    public void e(rv.m mVar) {
        G(mVar);
    }

    @Override // rv.y
    public void f(rv.g gVar) {
        G(gVar);
    }

    @Override // rv.y
    public void g(rv.d dVar) {
        G(dVar);
    }

    @Override // rv.y
    public void h(rv.i iVar) {
        G(iVar);
    }

    @Override // rv.y
    public void i(rv.s sVar) {
        G(sVar);
    }

    @Override // rv.y
    public void j(v vVar) {
        G(vVar);
    }

    @Override // jr.l
    public q k() {
        return this.f30446b;
    }

    @Override // rv.y
    public void l(rv.o oVar) {
        G(oVar);
    }

    @Override // jr.l
    public int length() {
        return this.f30447c.length();
    }

    @Override // rv.y
    public void m(rv.q qVar) {
        G(qVar);
    }

    @Override // rv.y
    public void n(u uVar) {
        G(uVar);
    }

    @Override // jr.l
    public void o(rv.r rVar) {
        this.f30449e.a(this, rVar);
    }

    @Override // jr.l
    public void p(rv.r rVar) {
        this.f30449e.b(this, rVar);
    }

    @Override // rv.y
    public void q(w wVar) {
        G(wVar);
    }

    @Override // rv.y
    public void r(rv.k kVar) {
        G(kVar);
    }

    @Override // jr.l
    public g s() {
        return this.f30445a;
    }

    @Override // rv.y
    public void t(rv.e eVar) {
        G(eVar);
    }

    @Override // rv.y
    public void u(rv.n nVar) {
        G(nVar);
    }

    @Override // jr.l
    public void v() {
        this.f30447c.append('\n');
    }

    @Override // rv.y
    public void w(rv.t tVar) {
        G(tVar);
    }

    @Override // jr.l
    public void x() {
        if (this.f30447c.length() > 0 && '\n' != this.f30447c.h()) {
            this.f30447c.append('\n');
        }
    }

    @Override // rv.y
    public void y(x xVar) {
        G(xVar);
    }

    @Override // rv.y
    public void z(rv.l lVar) {
        G(lVar);
    }
}
