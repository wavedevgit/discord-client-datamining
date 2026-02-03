package mt;

import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;
import net.time4j.c1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f implements h {

    /* renamed from: s  reason: collision with root package name */
    private static final kt.t f39293s = new a();

    /* renamed from: d  reason: collision with root package name */
    private final kt.p f39294d;

    /* renamed from: e  reason: collision with root package name */
    private final e f39295e;

    /* renamed from: i  reason: collision with root package name */
    private final d f39296i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f39297o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f39298p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f39299q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f39300r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static class a implements kt.t {
        a() {
        }

        @Override // kt.t
        /* renamed from: a */
        public Void apply(kt.o oVar) {
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(kt.p pVar, e eVar, d dVar) {
        this(pVar, eVar, dVar, false, false, false);
    }

    private static Map b(Map map, c cVar) {
        kt.x q10 = cVar.q();
        HashMap hashMap = new HashMap();
        for (kt.p pVar : map.keySet()) {
            if (q10.F(pVar)) {
                hashMap.put(pVar, map.get(pVar));
            }
        }
        return hashMap;
    }

    private static Set h(c cVar, Object obj, StringBuilder sb2, kt.d dVar) {
        return cVar.J(cVar.q().o().cast(obj), sb2, dVar);
    }

    @Override // mt.h
    public h a(kt.p pVar) {
        if (this.f39294d == pVar) {
            return this;
        }
        return new f(pVar, this.f39295e, this.f39296i);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean c() {
        return this.f39300r;
    }

    @Override // mt.h
    public int d(kt.o oVar, Appendable appendable, kt.d dVar, Set set, boolean z10) {
        if (z10 && this.f39298p) {
            dVar = ((c) c.class.cast(this.f39295e)).o();
        }
        if (this.f39297o && (oVar instanceof c1) && set == null) {
            ((c) this.f39295e).K(oVar, appendable, dVar, false);
            return Integer.MAX_VALUE;
        }
        Object v10 = oVar.v(this.f39294d);
        StringBuilder sb2 = new StringBuilder();
        if ((appendable instanceof CharSequence) && set != null) {
            int length = ((CharSequence) appendable).length();
            e eVar = this.f39295e;
            if (eVar instanceof c) {
                Set<g> h10 = h((c) c.class.cast(eVar), v10, sb2, dVar);
                LinkedHashSet linkedHashSet = new LinkedHashSet();
                for (g gVar : h10) {
                    linkedHashSet.add(new g(gVar.a(), gVar.c() + length, gVar.b() + length));
                }
                set.addAll(linkedHashSet);
            } else {
                eVar.b(v10, sb2, dVar, f39293s);
            }
            set.add(new g(this.f39294d, length, sb2.length() + length));
        } else {
            this.f39295e.b(v10, sb2, dVar, f39293s);
        }
        appendable.append(sb2);
        return sb2.length();
    }

    @Override // mt.h
    public h e(c cVar, kt.d dVar, int i10) {
        boolean z10;
        boolean z11;
        boolean z12;
        if (cVar.z() && this.f39294d.getType().equals(cVar.q().o())) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (dVar instanceof b) {
            e eVar = this.f39295e;
            d dVar2 = this.f39296i;
            Map r10 = cVar.r();
            b bVar = (b) dVar;
            e eVar2 = this.f39295e;
            if (eVar2 instanceof c) {
                c cVar2 = (c) c.class.cast(eVar2);
                eVar = cVar2.R(b(r10, cVar2), bVar);
                z11 = true;
            } else {
                z11 = false;
            }
            e eVar3 = eVar;
            d dVar3 = this.f39296i;
            if (dVar3 instanceof c) {
                c cVar3 = (c) c.class.cast(dVar3);
                dVar2 = cVar3.R(b(r10, cVar3), bVar);
                z12 = true;
            } else {
                z12 = false;
            }
            return new f(this.f39294d, eVar3, dVar2, z11, z12, z10);
        } else if (!this.f39298p && !this.f39299q) {
            return this;
        } else {
            return new f(this.f39294d, this.f39295e, this.f39296i);
        }
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f39294d.equals(fVar.f39294d) && this.f39295e.equals(fVar.f39295e) && this.f39296i.equals(fVar.f39296i)) {
                return true;
            }
        }
        return false;
    }

    @Override // mt.h
    public void f(CharSequence charSequence, s sVar, kt.d dVar, t tVar, boolean z10) {
        int f10 = sVar.f();
        if (z10) {
            try {
                if (this.f39299q) {
                    dVar = ((c) c.class.cast(this.f39296i)).o();
                }
            } catch (IndexOutOfBoundsException e10) {
                sVar.k(f10, e10.getMessage());
                return;
            }
        }
        Object a10 = this.f39296i.a(charSequence, sVar, dVar);
        if (a10 == null) {
            sVar.k(f10, sVar.d());
        } else if (this.f39300r && (tVar instanceof u)) {
            tVar.J(a10);
        } else {
            kt.q g10 = sVar.g();
            for (kt.p pVar : g10.y()) {
                if (pVar.getType() == Integer.class) {
                    tVar.H(pVar, g10.t(pVar));
                } else {
                    tVar.I(pVar, g10.v(pVar));
                }
            }
            tVar.I(this.f39294d, a10);
        }
    }

    @Override // mt.h
    public boolean g() {
        return false;
    }

    @Override // mt.h
    public kt.p getElement() {
        return this.f39294d;
    }

    public int hashCode() {
        return (this.f39294d.hashCode() * 7) + (this.f39295e.hashCode() * 31) + (this.f39296i.hashCode() * 37);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(f.class.getName());
        sb2.append("[element=");
        sb2.append(this.f39294d.name());
        sb2.append(", printer=");
        sb2.append(this.f39295e);
        sb2.append(", parser=");
        sb2.append(this.f39296i);
        sb2.append(']');
        return sb2.toString();
    }

    private f(kt.p pVar, e eVar, d dVar, boolean z10, boolean z11, boolean z12) {
        if (pVar == null) {
            throw new NullPointerException("Missing element.");
        }
        if (eVar == null) {
            throw new NullPointerException("Missing printer.");
        }
        if (dVar != null) {
            this.f39294d = pVar;
            this.f39295e = eVar;
            this.f39296i = dVar;
            this.f39297o = (eVar instanceof c) && pVar.getType() == net.time4j.a0.class;
            this.f39298p = z10;
            this.f39299q = z11;
            this.f39300r = z12;
            return;
        }
        throw new NullPointerException("Missing parser.");
    }
}
