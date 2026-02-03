package dr;

import dr.l;
import gv.u;
import gv.v;
import gv.w;
import gv.x;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class n implements l {

    /* renamed from: a  reason: collision with root package name */
    private final g f20867a;

    /* renamed from: b  reason: collision with root package name */
    private final q f20868b;

    /* renamed from: c  reason: collision with root package name */
    private final t f20869c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f20870d;

    /* renamed from: e  reason: collision with root package name */
    private final l.a f20871e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class a implements l.b {

        /* renamed from: a  reason: collision with root package name */
        private final Map f20872a = new HashMap();

        /* renamed from: b  reason: collision with root package name */
        private l.a f20873b;

        @Override // dr.l.b
        public l.b a(Class cls, l.c cVar) {
            if (cVar == null) {
                this.f20872a.remove(cls);
                return this;
            }
            this.f20872a.put(cls, cVar);
            return this;
        }

        @Override // dr.l.b
        public l b(g gVar, q qVar) {
            l.a aVar = this.f20873b;
            if (aVar == null) {
                aVar = new b();
            }
            return new n(gVar, qVar, new t(), Collections.unmodifiableMap(this.f20872a), aVar);
        }
    }

    n(g gVar, q qVar, t tVar, Map map, l.a aVar) {
        this.f20867a = gVar;
        this.f20868b = qVar;
        this.f20869c = tVar;
        this.f20870d = map;
        this.f20871e = aVar;
    }

    private void G(gv.r rVar) {
        l.c cVar = (l.c) this.f20870d.get(rVar.getClass());
        if (cVar != null) {
            cVar.a(this, rVar);
        } else {
            l(rVar);
        }
    }

    @Override // dr.l
    public void A() {
        this.f20869c.append('\n');
    }

    @Override // dr.l
    public void B() {
        if (this.f20869c.length() > 0 && '\n' != this.f20869c.h()) {
            this.f20869c.append('\n');
        }
    }

    @Override // gv.y
    public void C(u uVar) {
        G(uVar);
    }

    @Override // gv.y
    public void D(gv.b bVar) {
        G(bVar);
    }

    @Override // dr.l
    public void E(gv.r rVar) {
        this.f20871e.a(this, rVar);
    }

    public void F(Class cls, int i10) {
        s a10 = this.f20867a.c().a(cls);
        if (a10 != null) {
            c(i10, a10.a(this.f20867a, this.f20868b));
        }
    }

    @Override // gv.y
    public void a(gv.n nVar) {
        G(nVar);
    }

    @Override // dr.l
    public void b(gv.r rVar) {
        this.f20871e.b(this, rVar);
    }

    @Override // dr.l
    public t builder() {
        return this.f20869c;
    }

    @Override // dr.l
    public void c(int i10, Object obj) {
        t tVar = this.f20869c;
        t.j(tVar, obj, i10, tVar.length());
    }

    @Override // gv.y
    public void d(gv.o oVar) {
        G(oVar);
    }

    @Override // gv.y
    public void e(gv.t tVar) {
        G(tVar);
    }

    @Override // gv.y
    public void f(gv.m mVar) {
        G(mVar);
    }

    @Override // gv.y
    public void g(w wVar) {
        G(wVar);
    }

    @Override // gv.y
    public void h(gv.f fVar) {
        G(fVar);
    }

    @Override // gv.y
    public void i(gv.g gVar) {
        G(gVar);
    }

    @Override // gv.y
    public void j(gv.l lVar) {
        G(lVar);
    }

    @Override // gv.y
    public void k(v vVar) {
        G(vVar);
    }

    @Override // dr.l
    public void l(gv.r rVar) {
        gv.r c10 = rVar.c();
        while (c10 != null) {
            gv.r e10 = c10.e();
            c10.a(this);
            c10 = e10;
        }
    }

    @Override // dr.l
    public int length() {
        return this.f20869c.length();
    }

    @Override // gv.y
    public void m(x xVar) {
        G(xVar);
    }

    @Override // gv.y
    public void n(gv.s sVar) {
        G(sVar);
    }

    @Override // dr.l
    public q o() {
        return this.f20868b;
    }

    @Override // gv.y
    public void p(gv.i iVar) {
        G(iVar);
    }

    @Override // gv.y
    public void q(gv.j jVar) {
        G(jVar);
    }

    @Override // dr.l
    public boolean r(gv.r rVar) {
        if (rVar.e() != null) {
            return true;
        }
        return false;
    }

    @Override // gv.y
    public void s(gv.c cVar) {
        G(cVar);
    }

    @Override // gv.y
    public void t(gv.k kVar) {
        G(kVar);
    }

    @Override // gv.y
    public void u(gv.d dVar) {
        G(dVar);
    }

    @Override // gv.y
    public void v(gv.q qVar) {
        G(qVar);
    }

    @Override // gv.y
    public void w(gv.h hVar) {
        G(hVar);
    }

    @Override // gv.y
    public void x(gv.e eVar) {
        G(eVar);
    }

    @Override // dr.l
    public void y(gv.r rVar, int i10) {
        F(rVar.getClass(), i10);
    }

    @Override // dr.l
    public g z() {
        return this.f20867a;
    }
}
