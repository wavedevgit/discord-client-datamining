package gr;

import gr.l;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import jv.u;
import jv.v;
import jv.w;
import jv.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class n implements l {

    /* renamed from: a  reason: collision with root package name */
    private final g f25191a;

    /* renamed from: b  reason: collision with root package name */
    private final q f25192b;

    /* renamed from: c  reason: collision with root package name */
    private final t f25193c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f25194d;

    /* renamed from: e  reason: collision with root package name */
    private final l.a f25195e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class a implements l.b {

        /* renamed from: a  reason: collision with root package name */
        private final Map f25196a = new HashMap();

        /* renamed from: b  reason: collision with root package name */
        private l.a f25197b;

        @Override // gr.l.b
        public l.b a(Class cls, l.c cVar) {
            if (cVar == null) {
                this.f25196a.remove(cls);
                return this;
            }
            this.f25196a.put(cls, cVar);
            return this;
        }

        @Override // gr.l.b
        public l b(g gVar, q qVar) {
            l.a aVar = this.f25197b;
            if (aVar == null) {
                aVar = new b();
            }
            return new n(gVar, qVar, new t(), Collections.unmodifiableMap(this.f25196a), aVar);
        }
    }

    n(g gVar, q qVar, t tVar, Map map, l.a aVar) {
        this.f25191a = gVar;
        this.f25192b = qVar;
        this.f25193c = tVar;
        this.f25194d = map;
        this.f25195e = aVar;
    }

    private void G(jv.r rVar) {
        l.c cVar = (l.c) this.f25194d.get(rVar.getClass());
        if (cVar != null) {
            cVar.a(this, rVar);
        } else {
            s(rVar);
        }
    }

    @Override // jv.y
    public void A(jv.g gVar) {
        G(gVar);
    }

    @Override // gr.l
    public void B() {
        if (this.f25193c.length() > 0 && '\n' != this.f25193c.h()) {
            this.f25193c.append('\n');
        }
    }

    @Override // jv.y
    public void C(jv.h hVar) {
        G(hVar);
    }

    @Override // gr.l
    public void D(jv.r rVar) {
        this.f25195e.b(this, rVar);
    }

    @Override // gr.l
    public void E(jv.r rVar, int i10) {
        F(rVar.getClass(), i10);
    }

    public void F(Class cls, int i10) {
        s a10 = this.f25191a.c().a(cls);
        if (a10 != null) {
            b(i10, a10.a(this.f25191a, this.f25192b));
        }
    }

    @Override // jv.y
    public void a(jv.b bVar) {
        G(bVar);
    }

    @Override // gr.l
    public void b(int i10, Object obj) {
        t tVar = this.f25193c;
        t.j(tVar, obj, i10, tVar.length());
    }

    @Override // gr.l
    public t builder() {
        return this.f25193c;
    }

    @Override // jv.y
    public void c(jv.f fVar) {
        G(fVar);
    }

    @Override // gr.l
    public void d(jv.r rVar) {
        this.f25195e.a(this, rVar);
    }

    @Override // jv.y
    public void e(jv.l lVar) {
        G(lVar);
    }

    @Override // jv.y
    public void f(jv.n nVar) {
        G(nVar);
    }

    @Override // jv.y
    public void g(jv.t tVar) {
        G(tVar);
    }

    @Override // jv.y
    public void h(u uVar) {
        G(uVar);
    }

    @Override // jv.y
    public void i(jv.d dVar) {
        G(dVar);
    }

    @Override // jv.y
    public void j(jv.i iVar) {
        G(iVar);
    }

    @Override // gr.l
    public boolean k(jv.r rVar) {
        if (rVar.e() != null) {
            return true;
        }
        return false;
    }

    @Override // jv.y
    public void l(v vVar) {
        G(vVar);
    }

    @Override // gr.l
    public int length() {
        return this.f25193c.length();
    }

    @Override // jv.y
    public void m(jv.o oVar) {
        G(oVar);
    }

    @Override // gr.l
    public q n() {
        return this.f25192b;
    }

    @Override // jv.y
    public void o(jv.c cVar) {
        G(cVar);
    }

    @Override // jv.y
    public void p(jv.j jVar) {
        G(jVar);
    }

    @Override // jv.y
    public void q(jv.s sVar) {
        G(sVar);
    }

    @Override // jv.y
    public void r(x xVar) {
        G(xVar);
    }

    @Override // gr.l
    public void s(jv.r rVar) {
        jv.r c10 = rVar.c();
        while (c10 != null) {
            jv.r e10 = c10.e();
            c10.a(this);
            c10 = e10;
        }
    }

    @Override // jv.y
    public void t(jv.q qVar) {
        G(qVar);
    }

    @Override // jv.y
    public void u(jv.e eVar) {
        G(eVar);
    }

    @Override // jv.y
    public void v(w wVar) {
        G(wVar);
    }

    @Override // jv.y
    public void w(jv.m mVar) {
        G(mVar);
    }

    @Override // gr.l
    public g x() {
        return this.f25191a;
    }

    @Override // gr.l
    public void y() {
        this.f25193c.append('\n');
    }

    @Override // jv.y
    public void z(jv.k kVar) {
        G(kVar);
    }
}
