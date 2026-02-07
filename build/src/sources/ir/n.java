package ir;

import ir.l;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import qv.u;
import qv.v;
import qv.w;
import qv.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class n implements l {

    /* renamed from: a  reason: collision with root package name */
    private final g f29366a;

    /* renamed from: b  reason: collision with root package name */
    private final q f29367b;

    /* renamed from: c  reason: collision with root package name */
    private final t f29368c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f29369d;

    /* renamed from: e  reason: collision with root package name */
    private final l.a f29370e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class a implements l.b {

        /* renamed from: a  reason: collision with root package name */
        private final Map f29371a = new HashMap();

        /* renamed from: b  reason: collision with root package name */
        private l.a f29372b;

        @Override // ir.l.b
        public l.b a(Class cls, l.c cVar) {
            if (cVar == null) {
                this.f29371a.remove(cls);
                return this;
            }
            this.f29371a.put(cls, cVar);
            return this;
        }

        @Override // ir.l.b
        public l b(g gVar, q qVar) {
            l.a aVar = this.f29372b;
            if (aVar == null) {
                aVar = new b();
            }
            return new n(gVar, qVar, new t(), Collections.unmodifiableMap(this.f29371a), aVar);
        }
    }

    n(g gVar, q qVar, t tVar, Map map, l.a aVar) {
        this.f29366a = gVar;
        this.f29367b = qVar;
        this.f29368c = tVar;
        this.f29369d = map;
        this.f29370e = aVar;
    }

    private void G(qv.r rVar) {
        l.c cVar = (l.c) this.f29369d.get(rVar.getClass());
        if (cVar != null) {
            cVar.a(this, rVar);
        } else {
            t(rVar);
        }
    }

    @Override // qv.y
    public void A(qv.e eVar) {
        G(eVar);
    }

    @Override // qv.y
    public void B(qv.g gVar) {
        G(gVar);
    }

    @Override // qv.y
    public void C(qv.f fVar) {
        G(fVar);
    }

    @Override // qv.y
    public void D(qv.c cVar) {
        G(cVar);
    }

    @Override // ir.l
    public boolean E(qv.r rVar) {
        if (rVar.e() != null) {
            return true;
        }
        return false;
    }

    public void F(Class cls, int i10) {
        s a10 = this.f29366a.c().a(cls);
        if (a10 != null) {
            d(i10, a10.a(this.f29366a, this.f29367b));
        }
    }

    @Override // qv.y
    public void a(qv.h hVar) {
        G(hVar);
    }

    @Override // ir.l
    public void b(qv.r rVar, int i10) {
        F(rVar.getClass(), i10);
    }

    @Override // ir.l
    public t builder() {
        return this.f29368c;
    }

    @Override // ir.l
    public void c(qv.r rVar) {
        this.f29370e.a(this, rVar);
    }

    @Override // ir.l
    public void d(int i10, Object obj) {
        t tVar = this.f29368c;
        t.j(tVar, obj, i10, tVar.length());
    }

    @Override // qv.y
    public void e(qv.m mVar) {
        G(mVar);
    }

    @Override // qv.y
    public void f(qv.q qVar) {
        G(qVar);
    }

    @Override // qv.y
    public void g(qv.n nVar) {
        G(nVar);
    }

    @Override // qv.y
    public void h(qv.j jVar) {
        G(jVar);
    }

    @Override // ir.l
    public void i(qv.r rVar) {
        this.f29370e.b(this, rVar);
    }

    @Override // qv.y
    public void j(qv.k kVar) {
        G(kVar);
    }

    @Override // qv.y
    public void k(qv.l lVar) {
        G(lVar);
    }

    @Override // qv.y
    public void l(qv.s sVar) {
        G(sVar);
    }

    @Override // ir.l
    public int length() {
        return this.f29368c.length();
    }

    @Override // qv.y
    public void m(qv.i iVar) {
        G(iVar);
    }

    @Override // qv.y
    public void n(qv.t tVar) {
        G(tVar);
    }

    @Override // ir.l
    public q o() {
        return this.f29367b;
    }

    @Override // qv.y
    public void p(x xVar) {
        G(xVar);
    }

    @Override // qv.y
    public void q(v vVar) {
        G(vVar);
    }

    @Override // qv.y
    public void r(u uVar) {
        G(uVar);
    }

    @Override // qv.y
    public void s(qv.o oVar) {
        G(oVar);
    }

    @Override // ir.l
    public void t(qv.r rVar) {
        qv.r c10 = rVar.c();
        while (c10 != null) {
            qv.r e10 = c10.e();
            c10.a(this);
            c10 = e10;
        }
    }

    @Override // qv.y
    public void u(qv.d dVar) {
        G(dVar);
    }

    @Override // qv.y
    public void v(w wVar) {
        G(wVar);
    }

    @Override // ir.l
    public g w() {
        return this.f29366a;
    }

    @Override // ir.l
    public void x() {
        this.f29368c.append('\n');
    }

    @Override // qv.y
    public void y(qv.b bVar) {
        G(bVar);
    }

    @Override // ir.l
    public void z() {
        if (this.f29368c.length() > 0 && '\n' != this.f29368c.h()) {
            this.f29368c.append('\n');
        }
    }
}
