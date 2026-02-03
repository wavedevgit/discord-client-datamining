package br;

import br.l;
import ev.u;
import ev.v;
import ev.w;
import ev.x;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class n implements l {

    /* renamed from: a  reason: collision with root package name */
    private final g f7551a;

    /* renamed from: b  reason: collision with root package name */
    private final q f7552b;

    /* renamed from: c  reason: collision with root package name */
    private final t f7553c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f7554d;

    /* renamed from: e  reason: collision with root package name */
    private final l.a f7555e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class a implements l.b {

        /* renamed from: a  reason: collision with root package name */
        private final Map f7556a = new HashMap();

        /* renamed from: b  reason: collision with root package name */
        private l.a f7557b;

        @Override // br.l.b
        public l a(g gVar, q qVar) {
            l.a aVar = this.f7557b;
            if (aVar == null) {
                aVar = new b();
            }
            return new n(gVar, qVar, new t(), Collections.unmodifiableMap(this.f7556a), aVar);
        }

        @Override // br.l.b
        public l.b b(Class cls, l.c cVar) {
            if (cVar == null) {
                this.f7556a.remove(cls);
                return this;
            }
            this.f7556a.put(cls, cVar);
            return this;
        }
    }

    n(g gVar, q qVar, t tVar, Map map, l.a aVar) {
        this.f7551a = gVar;
        this.f7552b = qVar;
        this.f7553c = tVar;
        this.f7554d = map;
        this.f7555e = aVar;
    }

    private void G(ev.r rVar) {
        l.c cVar = (l.c) this.f7554d.get(rVar.getClass());
        if (cVar != null) {
            cVar.a(this, rVar);
        } else {
            r(rVar);
        }
    }

    @Override // ev.y
    public void A(ev.o oVar) {
        G(oVar);
    }

    @Override // ev.y
    public void B(ev.n nVar) {
        G(nVar);
    }

    @Override // ev.y
    public void C(ev.d dVar) {
        G(dVar);
    }

    @Override // ev.y
    public void D(ev.b bVar) {
        G(bVar);
    }

    @Override // ev.y
    public void E(ev.e eVar) {
        G(eVar);
    }

    public void F(Class cls, int i10) {
        s a10 = this.f7551a.c().a(cls);
        if (a10 != null) {
            d(i10, a10.a(this.f7551a, this.f7552b));
        }
    }

    @Override // ev.y
    public void a(ev.c cVar) {
        G(cVar);
    }

    @Override // br.l
    public void b(ev.r rVar) {
        this.f7555e.b(this, rVar);
    }

    @Override // br.l
    public t builder() {
        return this.f7553c;
    }

    @Override // ev.y
    public void c(ev.k kVar) {
        G(kVar);
    }

    @Override // br.l
    public void d(int i10, Object obj) {
        t tVar = this.f7553c;
        t.j(tVar, obj, i10, tVar.length());
    }

    @Override // ev.y
    public void e(ev.i iVar) {
        G(iVar);
    }

    @Override // ev.y
    public void f(u uVar) {
        G(uVar);
    }

    @Override // ev.y
    public void g(x xVar) {
        G(xVar);
    }

    @Override // br.l
    public void h(ev.r rVar) {
        this.f7555e.a(this, rVar);
    }

    @Override // ev.y
    public void i(w wVar) {
        G(wVar);
    }

    @Override // br.l
    public boolean j(ev.r rVar) {
        if (rVar.e() != null) {
            return true;
        }
        return false;
    }

    @Override // ev.y
    public void k(ev.m mVar) {
        G(mVar);
    }

    @Override // br.l
    public q l() {
        return this.f7552b;
    }

    @Override // br.l
    public int length() {
        return this.f7553c.length();
    }

    @Override // ev.y
    public void m(ev.s sVar) {
        G(sVar);
    }

    @Override // ev.y
    public void n(ev.h hVar) {
        G(hVar);
    }

    @Override // ev.y
    public void o(ev.j jVar) {
        G(jVar);
    }

    @Override // ev.y
    public void p(ev.g gVar) {
        G(gVar);
    }

    @Override // ev.y
    public void q(ev.l lVar) {
        G(lVar);
    }

    @Override // br.l
    public void r(ev.r rVar) {
        ev.r c10 = rVar.c();
        while (c10 != null) {
            ev.r e10 = c10.e();
            c10.a(this);
            c10 = e10;
        }
    }

    @Override // br.l
    public g s() {
        return this.f7551a;
    }

    @Override // ev.y
    public void t(ev.t tVar) {
        G(tVar);
    }

    @Override // br.l
    public void u() {
        this.f7553c.append('\n');
    }

    @Override // ev.y
    public void v(ev.q qVar) {
        G(qVar);
    }

    @Override // br.l
    public void w() {
        if (this.f7553c.length() > 0 && '\n' != this.f7553c.h()) {
            this.f7553c.append('\n');
        }
    }

    @Override // ev.y
    public void x(v vVar) {
        G(vVar);
    }

    @Override // ev.y
    public void y(ev.f fVar) {
        G(fVar);
    }

    @Override // br.l
    public void z(ev.r rVar, int i10) {
        F(rVar.getClass(), i10);
    }
}
