package ot;

import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;
import net.time4j.c1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f implements h {

    /* renamed from: s  reason: collision with root package name */
    private static final mt.t f44648s = new a();

    /* renamed from: d  reason: collision with root package name */
    private final mt.p f44649d;

    /* renamed from: e  reason: collision with root package name */
    private final e f44650e;

    /* renamed from: i  reason: collision with root package name */
    private final d f44651i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f44652o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f44653p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f44654q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f44655r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static class a implements mt.t {
        a() {
        }

        @Override // mt.t
        /* renamed from: a */
        public Void apply(mt.o oVar) {
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(mt.p pVar, e eVar, d dVar) {
        this(pVar, eVar, dVar, false, false, false);
    }

    private static Map b(Map map, c cVar) {
        mt.x q10 = cVar.q();
        HashMap hashMap = new HashMap();
        for (mt.p pVar : map.keySet()) {
            if (q10.F(pVar)) {
                hashMap.put(pVar, map.get(pVar));
            }
        }
        return hashMap;
    }

    private static Set h(c cVar, Object obj, StringBuilder sb2, mt.d dVar) {
        return cVar.J(cVar.q().r().cast(obj), sb2, dVar);
    }

    @Override // ot.h
    public int a(mt.o oVar, Appendable appendable, mt.d dVar, Set set, boolean z10) {
        if (z10 && this.f44653p) {
            dVar = ((c) c.class.cast(this.f44650e)).o();
        }
        if (this.f44652o && (oVar instanceof c1) && set == null) {
            ((c) this.f44650e).K(oVar, appendable, dVar, false);
            return Integer.MAX_VALUE;
        }
        Object o10 = oVar.o(this.f44649d);
        StringBuilder sb2 = new StringBuilder();
        if ((appendable instanceof CharSequence) && set != null) {
            int length = ((CharSequence) appendable).length();
            e eVar = this.f44650e;
            if (eVar instanceof c) {
                Set<g> h10 = h((c) c.class.cast(eVar), o10, sb2, dVar);
                LinkedHashSet linkedHashSet = new LinkedHashSet();
                for (g gVar : h10) {
                    linkedHashSet.add(new g(gVar.a(), gVar.c() + length, gVar.b() + length));
                }
                set.addAll(linkedHashSet);
            } else {
                eVar.a(o10, sb2, dVar, f44648s);
            }
            set.add(new g(this.f44649d, length, sb2.length() + length));
        } else {
            this.f44650e.a(o10, sb2, dVar, f44648s);
        }
        appendable.append(sb2);
        return sb2.length();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean c() {
        return this.f44655r;
    }

    @Override // ot.h
    public h d(c cVar, mt.d dVar, int i10) {
        boolean z10;
        boolean z11;
        boolean z12;
        if (cVar.z() && this.f44649d.getType().equals(cVar.q().r())) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (dVar instanceof b) {
            e eVar = this.f44650e;
            d dVar2 = this.f44651i;
            Map r10 = cVar.r();
            b bVar = (b) dVar;
            e eVar2 = this.f44650e;
            if (eVar2 instanceof c) {
                c cVar2 = (c) c.class.cast(eVar2);
                eVar = cVar2.R(b(r10, cVar2), bVar);
                z11 = true;
            } else {
                z11 = false;
            }
            e eVar3 = eVar;
            d dVar3 = this.f44651i;
            if (dVar3 instanceof c) {
                c cVar3 = (c) c.class.cast(dVar3);
                dVar2 = cVar3.R(b(r10, cVar3), bVar);
                z12 = true;
            } else {
                z12 = false;
            }
            return new f(this.f44649d, eVar3, dVar2, z11, z12, z10);
        } else if (!this.f44653p && !this.f44654q) {
            return this;
        } else {
            return new f(this.f44649d, this.f44650e, this.f44651i);
        }
    }

    @Override // ot.h
    public h e(mt.p pVar) {
        if (this.f44649d == pVar) {
            return this;
        }
        return new f(pVar, this.f44650e, this.f44651i);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f44649d.equals(fVar.f44649d) && this.f44650e.equals(fVar.f44650e) && this.f44651i.equals(fVar.f44651i)) {
                return true;
            }
        }
        return false;
    }

    @Override // ot.h
    public boolean f() {
        return false;
    }

    @Override // ot.h
    public void g(CharSequence charSequence, s sVar, mt.d dVar, t tVar, boolean z10) {
        int f10 = sVar.f();
        if (z10) {
            try {
                if (this.f44654q) {
                    dVar = ((c) c.class.cast(this.f44651i)).o();
                }
            } catch (IndexOutOfBoundsException e10) {
                sVar.k(f10, e10.getMessage());
                return;
            }
        }
        Object b10 = this.f44651i.b(charSequence, sVar, dVar);
        if (b10 == null) {
            sVar.k(f10, sVar.d());
        } else if (this.f44655r && (tVar instanceof u)) {
            tVar.J(b10);
        } else {
            mt.q g10 = sVar.g();
            for (mt.p pVar : g10.y()) {
                if (pVar.getType() == Integer.class) {
                    tVar.H(pVar, g10.j(pVar));
                } else {
                    tVar.I(pVar, g10.o(pVar));
                }
            }
            tVar.I(this.f44649d, b10);
        }
    }

    @Override // ot.h
    public mt.p getElement() {
        return this.f44649d;
    }

    public int hashCode() {
        return (this.f44649d.hashCode() * 7) + (this.f44650e.hashCode() * 31) + (this.f44651i.hashCode() * 37);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(f.class.getName());
        sb2.append("[element=");
        sb2.append(this.f44649d.name());
        sb2.append(", printer=");
        sb2.append(this.f44650e);
        sb2.append(", parser=");
        sb2.append(this.f44651i);
        sb2.append(']');
        return sb2.toString();
    }

    private f(mt.p pVar, e eVar, d dVar, boolean z10, boolean z11, boolean z12) {
        if (pVar == null) {
            throw new NullPointerException("Missing element.");
        }
        if (eVar == null) {
            throw new NullPointerException("Missing printer.");
        }
        if (dVar != null) {
            this.f44649d = pVar;
            this.f44650e = eVar;
            this.f44651i = dVar;
            this.f44652o = (eVar instanceof c) && pVar.getType() == net.time4j.a0.class;
            this.f44653p = z10;
            this.f44654q = z11;
            this.f44655r = z12;
            return;
        }
        throw new NullPointerException("Missing parser.");
    }
}
