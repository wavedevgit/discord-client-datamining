package ut;

import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;
import net.time4j.c1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f implements h {

    /* renamed from: s  reason: collision with root package name */
    private static final st.t f51913s = new a();

    /* renamed from: d  reason: collision with root package name */
    private final st.p f51914d;

    /* renamed from: e  reason: collision with root package name */
    private final e f51915e;

    /* renamed from: i  reason: collision with root package name */
    private final d f51916i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f51917o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f51918p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f51919q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f51920r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static class a implements st.t {
        a() {
        }

        @Override // st.t
        /* renamed from: a */
        public Void apply(st.o oVar) {
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(st.p pVar, e eVar, d dVar) {
        this(pVar, eVar, dVar, false, false, false);
    }

    private static Map b(Map map, c cVar) {
        st.x q10 = cVar.q();
        HashMap hashMap = new HashMap();
        for (st.p pVar : map.keySet()) {
            if (q10.F(pVar)) {
                hashMap.put(pVar, map.get(pVar));
            }
        }
        return hashMap;
    }

    private static Set h(c cVar, Object obj, StringBuilder sb2, st.d dVar) {
        return cVar.J(cVar.q().n().cast(obj), sb2, dVar);
    }

    @Override // ut.h
    public void a(CharSequence charSequence, s sVar, st.d dVar, t tVar, boolean z10) {
        int f10 = sVar.f();
        if (z10) {
            try {
                if (this.f51919q) {
                    dVar = ((c) c.class.cast(this.f51916i)).o();
                }
            } catch (IndexOutOfBoundsException e10) {
                sVar.k(f10, e10.getMessage());
                return;
            }
        }
        Object b10 = this.f51916i.b(charSequence, sVar, dVar);
        if (b10 == null) {
            sVar.k(f10, sVar.d());
        } else if (this.f51920r && (tVar instanceof u)) {
            tVar.J(b10);
        } else {
            st.q g10 = sVar.g();
            for (st.p pVar : g10.y()) {
                if (pVar.getType() == Integer.class) {
                    tVar.H(pVar, g10.v(pVar));
                } else {
                    tVar.I(pVar, g10.t(pVar));
                }
            }
            tVar.I(this.f51914d, b10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean c() {
        return this.f51920r;
    }

    @Override // ut.h
    public h d(c cVar, st.d dVar, int i10) {
        boolean z10;
        boolean z11;
        boolean z12;
        if (cVar.z() && this.f51914d.getType().equals(cVar.q().n())) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (dVar instanceof b) {
            e eVar = this.f51915e;
            d dVar2 = this.f51916i;
            Map r10 = cVar.r();
            b bVar = (b) dVar;
            e eVar2 = this.f51915e;
            if (eVar2 instanceof c) {
                c cVar2 = (c) c.class.cast(eVar2);
                eVar = cVar2.R(b(r10, cVar2), bVar);
                z11 = true;
            } else {
                z11 = false;
            }
            e eVar3 = eVar;
            d dVar3 = this.f51916i;
            if (dVar3 instanceof c) {
                c cVar3 = (c) c.class.cast(dVar3);
                dVar2 = cVar3.R(b(r10, cVar3), bVar);
                z12 = true;
            } else {
                z12 = false;
            }
            return new f(this.f51914d, eVar3, dVar2, z11, z12, z10);
        } else if (!this.f51918p && !this.f51919q) {
            return this;
        } else {
            return new f(this.f51914d, this.f51915e, this.f51916i);
        }
    }

    @Override // ut.h
    public h e(st.p pVar) {
        if (this.f51914d == pVar) {
            return this;
        }
        return new f(pVar, this.f51915e, this.f51916i);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f51914d.equals(fVar.f51914d) && this.f51915e.equals(fVar.f51915e) && this.f51916i.equals(fVar.f51916i)) {
                return true;
            }
        }
        return false;
    }

    @Override // ut.h
    public int f(st.o oVar, Appendable appendable, st.d dVar, Set set, boolean z10) {
        if (z10 && this.f51918p) {
            dVar = ((c) c.class.cast(this.f51915e)).o();
        }
        if (this.f51917o && (oVar instanceof c1) && set == null) {
            ((c) this.f51915e).K(oVar, appendable, dVar, false);
            return Integer.MAX_VALUE;
        }
        Object t10 = oVar.t(this.f51914d);
        StringBuilder sb2 = new StringBuilder();
        if ((appendable instanceof CharSequence) && set != null) {
            int length = ((CharSequence) appendable).length();
            e eVar = this.f51915e;
            if (eVar instanceof c) {
                Set<g> h10 = h((c) c.class.cast(eVar), t10, sb2, dVar);
                LinkedHashSet linkedHashSet = new LinkedHashSet();
                for (g gVar : h10) {
                    linkedHashSet.add(new g(gVar.a(), gVar.c() + length, gVar.b() + length));
                }
                set.addAll(linkedHashSet);
            } else {
                eVar.a(t10, sb2, dVar, f51913s);
            }
            set.add(new g(this.f51914d, length, sb2.length() + length));
        } else {
            this.f51915e.a(t10, sb2, dVar, f51913s);
        }
        appendable.append(sb2);
        return sb2.length();
    }

    @Override // ut.h
    public boolean g() {
        return false;
    }

    @Override // ut.h
    public st.p getElement() {
        return this.f51914d;
    }

    public int hashCode() {
        return (this.f51914d.hashCode() * 7) + (this.f51915e.hashCode() * 31) + (this.f51916i.hashCode() * 37);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(f.class.getName());
        sb2.append("[element=");
        sb2.append(this.f51914d.name());
        sb2.append(", printer=");
        sb2.append(this.f51915e);
        sb2.append(", parser=");
        sb2.append(this.f51916i);
        sb2.append(']');
        return sb2.toString();
    }

    private f(st.p pVar, e eVar, d dVar, boolean z10, boolean z11, boolean z12) {
        if (pVar == null) {
            throw new NullPointerException("Missing element.");
        }
        if (eVar == null) {
            throw new NullPointerException("Missing printer.");
        }
        if (dVar != null) {
            this.f51914d = pVar;
            this.f51915e = eVar;
            this.f51916i = dVar;
            this.f51917o = (eVar instanceof c) && pVar.getType() == net.time4j.a0.class;
            this.f51918p = z10;
            this.f51919q = z11;
            this.f51920r = z12;
            return;
        }
        throw new NullPointerException("Missing parser.");
    }
}
