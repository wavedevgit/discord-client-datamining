package sr;

import aw.u;
import aw.v;
import aw.w;
import aw.x;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import sr.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class n implements l {

    /* renamed from: a  reason: collision with root package name */
    private final g f48898a;

    /* renamed from: b  reason: collision with root package name */
    private final q f48899b;

    /* renamed from: c  reason: collision with root package name */
    private final t f48900c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f48901d;

    /* renamed from: e  reason: collision with root package name */
    private final l.a f48902e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class a implements l.b {

        /* renamed from: a  reason: collision with root package name */
        private final Map f48903a = new HashMap();

        /* renamed from: b  reason: collision with root package name */
        private l.a f48904b;

        @Override // sr.l.b
        public l a(g gVar, q qVar) {
            l.a aVar = this.f48904b;
            if (aVar == null) {
                aVar = new b();
            }
            return new n(gVar, qVar, new t(), Collections.unmodifiableMap(this.f48903a), aVar);
        }

        @Override // sr.l.b
        public l.b b(Class cls, l.c cVar) {
            if (cVar == null) {
                this.f48903a.remove(cls);
                return this;
            }
            this.f48903a.put(cls, cVar);
            return this;
        }
    }

    n(g gVar, q qVar, t tVar, Map map, l.a aVar) {
        this.f48898a = gVar;
        this.f48899b = qVar;
        this.f48900c = tVar;
        this.f48901d = map;
        this.f48902e = aVar;
    }

    private void G(aw.r rVar) {
        l.c cVar = (l.c) this.f48901d.get(rVar.getClass());
        if (cVar != null) {
            cVar.a(this, rVar);
        } else {
            i(rVar);
        }
    }

    @Override // sr.l
    public void A() {
        this.f48900c.append('\n');
    }

    @Override // sr.l
    public void B(aw.r rVar, int i10) {
        F(rVar.getClass(), i10);
    }

    @Override // aw.y
    public void C(u uVar) {
        G(uVar);
    }

    @Override // sr.l
    public void D() {
        if (this.f48900c.length() > 0 && '\n' != this.f48900c.h()) {
            this.f48900c.append('\n');
        }
    }

    @Override // aw.y
    public void E(aw.l lVar) {
        G(lVar);
    }

    public void F(Class cls, int i10) {
        s a10 = this.f48898a.c().a(cls);
        if (a10 != null) {
            c(i10, a10.a(this.f48898a, this.f48899b));
        }
    }

    @Override // aw.y
    public void a(aw.d dVar) {
        G(dVar);
    }

    @Override // aw.y
    public void b(aw.g gVar) {
        G(gVar);
    }

    @Override // sr.l
    public t builder() {
        return this.f48900c;
    }

    @Override // sr.l
    public void c(int i10, Object obj) {
        t tVar = this.f48900c;
        t.j(tVar, obj, i10, tVar.length());
    }

    @Override // aw.y
    public void d(aw.s sVar) {
        G(sVar);
    }

    @Override // aw.y
    public void e(aw.f fVar) {
        G(fVar);
    }

    @Override // aw.y
    public void f(aw.b bVar) {
        G(bVar);
    }

    @Override // aw.y
    public void g(aw.m mVar) {
        G(mVar);
    }

    @Override // aw.y
    public void h(aw.h hVar) {
        G(hVar);
    }

    @Override // sr.l
    public void i(aw.r rVar) {
        aw.r c10 = rVar.c();
        while (c10 != null) {
            aw.r e10 = c10.e();
            c10.a(this);
            c10 = e10;
        }
    }

    @Override // aw.y
    public void j(aw.i iVar) {
        G(iVar);
    }

    @Override // aw.y
    public void k(aw.c cVar) {
        G(cVar);
    }

    @Override // sr.l
    public q l() {
        return this.f48899b;
    }

    @Override // sr.l
    public int length() {
        return this.f48900c.length();
    }

    @Override // aw.y
    public void m(v vVar) {
        G(vVar);
    }

    @Override // sr.l
    public boolean n(aw.r rVar) {
        if (rVar.e() != null) {
            return true;
        }
        return false;
    }

    @Override // aw.y
    public void o(aw.j jVar) {
        G(jVar);
    }

    @Override // aw.y
    public void p(x xVar) {
        G(xVar);
    }

    @Override // aw.y
    public void q(aw.k kVar) {
        G(kVar);
    }

    @Override // sr.l
    public void r(aw.r rVar) {
        this.f48902e.a(this, rVar);
    }

    @Override // aw.y
    public void s(aw.e eVar) {
        G(eVar);
    }

    @Override // aw.y
    public void t(aw.t tVar) {
        G(tVar);
    }

    @Override // aw.y
    public void u(aw.q qVar) {
        G(qVar);
    }

    @Override // aw.y
    public void v(aw.n nVar) {
        G(nVar);
    }

    @Override // aw.y
    public void w(w wVar) {
        G(wVar);
    }

    @Override // aw.y
    public void x(aw.o oVar) {
        G(oVar);
    }

    @Override // sr.l
    public g y() {
        return this.f48898a;
    }

    @Override // sr.l
    public void z(aw.r rVar) {
        this.f48902e.b(this, rVar);
    }
}
