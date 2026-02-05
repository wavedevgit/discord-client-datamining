package rt;

import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;
import net.time4j.c1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f implements h {

    /* renamed from: s  reason: collision with root package name */
    private static final pt.t f49097s = new a();

    /* renamed from: d  reason: collision with root package name */
    private final pt.p f49098d;

    /* renamed from: e  reason: collision with root package name */
    private final e f49099e;

    /* renamed from: i  reason: collision with root package name */
    private final d f49100i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f49101o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f49102p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f49103q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f49104r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static class a implements pt.t {
        a() {
        }

        @Override // pt.t
        /* renamed from: a */
        public Void apply(pt.o oVar) {
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(pt.p pVar, e eVar, d dVar) {
        this(pVar, eVar, dVar, false, false, false);
    }

    private static Map b(Map map, c cVar) {
        pt.x q10 = cVar.q();
        HashMap hashMap = new HashMap();
        for (pt.p pVar : map.keySet()) {
            if (q10.F(pVar)) {
                hashMap.put(pVar, map.get(pVar));
            }
        }
        return hashMap;
    }

    private static Set h(c cVar, Object obj, StringBuilder sb2, pt.d dVar) {
        return cVar.J(cVar.q().r().cast(obj), sb2, dVar);
    }

    @Override // rt.h
    public h a(pt.p pVar) {
        if (this.f49098d == pVar) {
            return this;
        }
        return new f(pVar, this.f49099e, this.f49100i);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean c() {
        return this.f49104r;
    }

    @Override // rt.h
    public void d(CharSequence charSequence, s sVar, pt.d dVar, t tVar, boolean z10) {
        int f10 = sVar.f();
        if (z10) {
            try {
                if (this.f49103q) {
                    dVar = ((c) c.class.cast(this.f49100i)).o();
                }
            } catch (IndexOutOfBoundsException e10) {
                sVar.k(f10, e10.getMessage());
                return;
            }
        }
        Object b10 = this.f49100i.b(charSequence, sVar, dVar);
        if (b10 == null) {
            sVar.k(f10, sVar.d());
        } else if (this.f49104r && (tVar instanceof u)) {
            tVar.J(b10);
        } else {
            pt.q g10 = sVar.g();
            for (pt.p pVar : g10.y()) {
                if (pVar.getType() == Integer.class) {
                    tVar.H(pVar, g10.r(pVar));
                } else {
                    tVar.I(pVar, g10.v(pVar));
                }
            }
            tVar.I(this.f49098d, b10);
        }
    }

    @Override // rt.h
    public h e(c cVar, pt.d dVar, int i10) {
        boolean z10;
        boolean z11;
        boolean z12;
        if (cVar.z() && this.f49098d.getType().equals(cVar.q().r())) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (dVar instanceof b) {
            e eVar = this.f49099e;
            d dVar2 = this.f49100i;
            Map r10 = cVar.r();
            b bVar = (b) dVar;
            e eVar2 = this.f49099e;
            if (eVar2 instanceof c) {
                c cVar2 = (c) c.class.cast(eVar2);
                eVar = cVar2.R(b(r10, cVar2), bVar);
                z11 = true;
            } else {
                z11 = false;
            }
            e eVar3 = eVar;
            d dVar3 = this.f49100i;
            if (dVar3 instanceof c) {
                c cVar3 = (c) c.class.cast(dVar3);
                dVar2 = cVar3.R(b(r10, cVar3), bVar);
                z12 = true;
            } else {
                z12 = false;
            }
            return new f(this.f49098d, eVar3, dVar2, z11, z12, z10);
        } else if (!this.f49102p && !this.f49103q) {
            return this;
        } else {
            return new f(this.f49098d, this.f49099e, this.f49100i);
        }
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f49098d.equals(fVar.f49098d) && this.f49099e.equals(fVar.f49099e) && this.f49100i.equals(fVar.f49100i)) {
                return true;
            }
        }
        return false;
    }

    @Override // rt.h
    public int f(pt.o oVar, Appendable appendable, pt.d dVar, Set set, boolean z10) {
        if (z10 && this.f49102p) {
            dVar = ((c) c.class.cast(this.f49099e)).o();
        }
        if (this.f49101o && (oVar instanceof c1) && set == null) {
            ((c) this.f49099e).K(oVar, appendable, dVar, false);
            return Integer.MAX_VALUE;
        }
        Object v10 = oVar.v(this.f49098d);
        StringBuilder sb2 = new StringBuilder();
        if ((appendable instanceof CharSequence) && set != null) {
            int length = ((CharSequence) appendable).length();
            e eVar = this.f49099e;
            if (eVar instanceof c) {
                Set<g> h10 = h((c) c.class.cast(eVar), v10, sb2, dVar);
                LinkedHashSet linkedHashSet = new LinkedHashSet();
                for (g gVar : h10) {
                    linkedHashSet.add(new g(gVar.a(), gVar.c() + length, gVar.b() + length));
                }
                set.addAll(linkedHashSet);
            } else {
                eVar.a(v10, sb2, dVar, f49097s);
            }
            set.add(new g(this.f49098d, length, sb2.length() + length));
        } else {
            this.f49099e.a(v10, sb2, dVar, f49097s);
        }
        appendable.append(sb2);
        return sb2.length();
    }

    @Override // rt.h
    public boolean g() {
        return false;
    }

    @Override // rt.h
    public pt.p getElement() {
        return this.f49098d;
    }

    public int hashCode() {
        return (this.f49098d.hashCode() * 7) + (this.f49099e.hashCode() * 31) + (this.f49100i.hashCode() * 37);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(f.class.getName());
        sb2.append("[element=");
        sb2.append(this.f49098d.name());
        sb2.append(", printer=");
        sb2.append(this.f49099e);
        sb2.append(", parser=");
        sb2.append(this.f49100i);
        sb2.append(']');
        return sb2.toString();
    }

    private f(pt.p pVar, e eVar, d dVar, boolean z10, boolean z11, boolean z12) {
        if (pVar == null) {
            throw new NullPointerException("Missing element.");
        }
        if (eVar == null) {
            throw new NullPointerException("Missing printer.");
        }
        if (dVar != null) {
            this.f49098d = pVar;
            this.f49099e = eVar;
            this.f49100i = dVar;
            this.f49101o = (eVar instanceof c) && pVar.getType() == net.time4j.a0.class;
            this.f49102p = z10;
            this.f49103q = z11;
            this.f49104r = z12;
            return;
        }
        throw new NullPointerException("Missing parser.");
    }
}
