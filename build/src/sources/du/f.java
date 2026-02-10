package du;

import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;
import net.time4j.c1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f implements h {

    /* renamed from: s  reason: collision with root package name */
    private static final bu.t f22015s = new a();

    /* renamed from: d  reason: collision with root package name */
    private final bu.p f22016d;

    /* renamed from: e  reason: collision with root package name */
    private final e f22017e;

    /* renamed from: i  reason: collision with root package name */
    private final d f22018i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f22019o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f22020p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f22021q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f22022r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static class a implements bu.t {
        a() {
        }

        @Override // bu.t
        /* renamed from: a */
        public Void apply(bu.o oVar) {
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(bu.p pVar, e eVar, d dVar) {
        this(pVar, eVar, dVar, false, false, false);
    }

    private static Map b(Map map, c cVar) {
        bu.x q10 = cVar.q();
        HashMap hashMap = new HashMap();
        for (bu.p pVar : map.keySet()) {
            if (q10.F(pVar)) {
                hashMap.put(pVar, map.get(pVar));
            }
        }
        return hashMap;
    }

    private static Set h(c cVar, Object obj, StringBuilder sb2, bu.d dVar) {
        return cVar.K(cVar.q().q().cast(obj), sb2, dVar);
    }

    @Override // du.h
    public h a(c cVar, bu.d dVar, int i10) {
        boolean z10;
        boolean z11;
        boolean z12;
        if (cVar.z() && this.f22016d.getType().equals(cVar.q().q())) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (dVar instanceof b) {
            e eVar = this.f22017e;
            d dVar2 = this.f22018i;
            Map r10 = cVar.r();
            b bVar = (b) dVar;
            e eVar2 = this.f22017e;
            if (eVar2 instanceof c) {
                c cVar2 = (c) c.class.cast(eVar2);
                eVar = cVar2.T(b(r10, cVar2), bVar);
                z11 = true;
            } else {
                z11 = false;
            }
            e eVar3 = eVar;
            d dVar3 = this.f22018i;
            if (dVar3 instanceof c) {
                c cVar3 = (c) c.class.cast(dVar3);
                dVar2 = cVar3.T(b(r10, cVar3), bVar);
                z12 = true;
            } else {
                z12 = false;
            }
            return new f(this.f22016d, eVar3, dVar2, z11, z12, z10);
        } else if (!this.f22020p && !this.f22021q) {
            return this;
        } else {
            return new f(this.f22016d, this.f22017e, this.f22018i);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean c() {
        return this.f22022r;
    }

    @Override // du.h
    public void d(CharSequence charSequence, s sVar, bu.d dVar, t tVar, boolean z10) {
        int f10 = sVar.f();
        if (z10) {
            try {
                if (this.f22021q) {
                    dVar = ((c) c.class.cast(this.f22018i)).o();
                }
            } catch (IndexOutOfBoundsException e10) {
                sVar.k(f10, e10.getMessage());
                return;
            }
        }
        Object a10 = this.f22018i.a(charSequence, sVar, dVar);
        if (a10 == null) {
            sVar.k(f10, sVar.d());
        } else if (this.f22022r && (tVar instanceof u)) {
            tVar.J(a10);
        } else {
            bu.q g10 = sVar.g();
            for (bu.p pVar : g10.y()) {
                if (pVar.getType() == Integer.class) {
                    tVar.H(pVar, g10.m(pVar));
                } else {
                    tVar.I(pVar, g10.k(pVar));
                }
            }
            tVar.I(this.f22016d, a10);
        }
    }

    @Override // du.h
    public h e(bu.p pVar) {
        if (this.f22016d == pVar) {
            return this;
        }
        return new f(pVar, this.f22017e, this.f22018i);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f22016d.equals(fVar.f22016d) && this.f22017e.equals(fVar.f22017e) && this.f22018i.equals(fVar.f22018i)) {
                return true;
            }
        }
        return false;
    }

    @Override // du.h
    public boolean f() {
        return false;
    }

    @Override // du.h
    public int g(bu.o oVar, Appendable appendable, bu.d dVar, Set set, boolean z10) {
        if (z10 && this.f22020p) {
            dVar = ((c) c.class.cast(this.f22017e)).o();
        }
        if (this.f22019o && (oVar instanceof c1) && set == null) {
            ((c) this.f22017e).J(oVar, appendable, dVar, false);
            return Integer.MAX_VALUE;
        }
        Object k10 = oVar.k(this.f22016d);
        StringBuilder sb2 = new StringBuilder();
        if ((appendable instanceof CharSequence) && set != null) {
            int length = ((CharSequence) appendable).length();
            e eVar = this.f22017e;
            if (eVar instanceof c) {
                Set<g> h10 = h((c) c.class.cast(eVar), k10, sb2, dVar);
                LinkedHashSet linkedHashSet = new LinkedHashSet();
                for (g gVar : h10) {
                    linkedHashSet.add(new g(gVar.a(), gVar.c() + length, gVar.b() + length));
                }
                set.addAll(linkedHashSet);
            } else {
                eVar.b(k10, sb2, dVar, f22015s);
            }
            set.add(new g(this.f22016d, length, sb2.length() + length));
        } else {
            this.f22017e.b(k10, sb2, dVar, f22015s);
        }
        appendable.append(sb2);
        return sb2.length();
    }

    @Override // du.h
    public bu.p getElement() {
        return this.f22016d;
    }

    public int hashCode() {
        return (this.f22016d.hashCode() * 7) + (this.f22017e.hashCode() * 31) + (this.f22018i.hashCode() * 37);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(f.class.getName());
        sb2.append("[element=");
        sb2.append(this.f22016d.name());
        sb2.append(", printer=");
        sb2.append(this.f22017e);
        sb2.append(", parser=");
        sb2.append(this.f22018i);
        sb2.append(']');
        return sb2.toString();
    }

    private f(bu.p pVar, e eVar, d dVar, boolean z10, boolean z11, boolean z12) {
        if (pVar == null) {
            throw new NullPointerException("Missing element.");
        }
        if (eVar == null) {
            throw new NullPointerException("Missing printer.");
        }
        if (dVar != null) {
            this.f22016d = pVar;
            this.f22017e = eVar;
            this.f22018i = dVar;
            this.f22019o = (eVar instanceof c) && pVar.getType() == net.time4j.a0.class;
            this.f22020p = z10;
            this.f22021q = z11;
            this.f22022r = z12;
            return;
        }
        throw new NullPointerException("Missing parser.");
    }
}
