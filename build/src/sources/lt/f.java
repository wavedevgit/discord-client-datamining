package lt;

import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;
import net.time4j.c1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f implements h {

    /* renamed from: s  reason: collision with root package name */
    private static final jt.t f37593s = new a();

    /* renamed from: d  reason: collision with root package name */
    private final jt.p f37594d;

    /* renamed from: e  reason: collision with root package name */
    private final e f37595e;

    /* renamed from: i  reason: collision with root package name */
    private final d f37596i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f37597o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f37598p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f37599q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f37600r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static class a implements jt.t {
        a() {
        }

        @Override // jt.t
        /* renamed from: a */
        public Void apply(jt.o oVar) {
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(jt.p pVar, e eVar, d dVar) {
        this(pVar, eVar, dVar, false, false, false);
    }

    private static Map b(Map map, c cVar) {
        jt.x q10 = cVar.q();
        HashMap hashMap = new HashMap();
        for (jt.p pVar : map.keySet()) {
            if (q10.F(pVar)) {
                hashMap.put(pVar, map.get(pVar));
            }
        }
        return hashMap;
    }

    private static Set h(c cVar, Object obj, StringBuilder sb2, jt.d dVar) {
        return cVar.J(cVar.q().p().cast(obj), sb2, dVar);
    }

    @Override // lt.h
    public h a(c cVar, jt.d dVar, int i10) {
        boolean z10;
        boolean z11;
        boolean z12;
        if (cVar.z() && this.f37594d.getType().equals(cVar.q().p())) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (dVar instanceof b) {
            e eVar = this.f37595e;
            d dVar2 = this.f37596i;
            Map r10 = cVar.r();
            b bVar = (b) dVar;
            e eVar2 = this.f37595e;
            if (eVar2 instanceof c) {
                c cVar2 = (c) c.class.cast(eVar2);
                eVar = cVar2.R(b(r10, cVar2), bVar);
                z11 = true;
            } else {
                z11 = false;
            }
            e eVar3 = eVar;
            d dVar3 = this.f37596i;
            if (dVar3 instanceof c) {
                c cVar3 = (c) c.class.cast(dVar3);
                dVar2 = cVar3.R(b(r10, cVar3), bVar);
                z12 = true;
            } else {
                z12 = false;
            }
            return new f(this.f37594d, eVar3, dVar2, z11, z12, z10);
        } else if (!this.f37598p && !this.f37599q) {
            return this;
        } else {
            return new f(this.f37594d, this.f37595e, this.f37596i);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean c() {
        return this.f37600r;
    }

    @Override // lt.h
    public int d(jt.o oVar, Appendable appendable, jt.d dVar, Set set, boolean z10) {
        if (z10 && this.f37598p) {
            dVar = ((c) c.class.cast(this.f37595e)).o();
        }
        if (this.f37597o && (oVar instanceof c1) && set == null) {
            ((c) this.f37595e).K(oVar, appendable, dVar, false);
            return Integer.MAX_VALUE;
        }
        Object p10 = oVar.p(this.f37594d);
        StringBuilder sb2 = new StringBuilder();
        if ((appendable instanceof CharSequence) && set != null) {
            int length = ((CharSequence) appendable).length();
            e eVar = this.f37595e;
            if (eVar instanceof c) {
                Set<g> h10 = h((c) c.class.cast(eVar), p10, sb2, dVar);
                LinkedHashSet linkedHashSet = new LinkedHashSet();
                for (g gVar : h10) {
                    linkedHashSet.add(new g(gVar.a(), gVar.c() + length, gVar.b() + length));
                }
                set.addAll(linkedHashSet);
            } else {
                eVar.b(p10, sb2, dVar, f37593s);
            }
            set.add(new g(this.f37594d, length, sb2.length() + length));
        } else {
            this.f37595e.b(p10, sb2, dVar, f37593s);
        }
        appendable.append(sb2);
        return sb2.length();
    }

    @Override // lt.h
    public void e(CharSequence charSequence, s sVar, jt.d dVar, t tVar, boolean z10) {
        int f10 = sVar.f();
        if (z10) {
            try {
                if (this.f37599q) {
                    dVar = ((c) c.class.cast(this.f37596i)).o();
                }
            } catch (IndexOutOfBoundsException e10) {
                sVar.k(f10, e10.getMessage());
                return;
            }
        }
        Object a10 = this.f37596i.a(charSequence, sVar, dVar);
        if (a10 == null) {
            sVar.k(f10, sVar.d());
        } else if (this.f37600r && (tVar instanceof u)) {
            tVar.J(a10);
        } else {
            jt.q g10 = sVar.g();
            for (jt.p pVar : g10.y()) {
                if (pVar.getType() == Integer.class) {
                    tVar.H(pVar, g10.q(pVar));
                } else {
                    tVar.I(pVar, g10.p(pVar));
                }
            }
            tVar.I(this.f37594d, a10);
        }
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f37594d.equals(fVar.f37594d) && this.f37595e.equals(fVar.f37595e) && this.f37596i.equals(fVar.f37596i)) {
                return true;
            }
        }
        return false;
    }

    @Override // lt.h
    public boolean f() {
        return false;
    }

    @Override // lt.h
    public h g(jt.p pVar) {
        if (this.f37594d == pVar) {
            return this;
        }
        return new f(pVar, this.f37595e, this.f37596i);
    }

    @Override // lt.h
    public jt.p getElement() {
        return this.f37594d;
    }

    public int hashCode() {
        return (this.f37594d.hashCode() * 7) + (this.f37595e.hashCode() * 31) + (this.f37596i.hashCode() * 37);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(f.class.getName());
        sb2.append("[element=");
        sb2.append(this.f37594d.name());
        sb2.append(", printer=");
        sb2.append(this.f37595e);
        sb2.append(", parser=");
        sb2.append(this.f37596i);
        sb2.append(']');
        return sb2.toString();
    }

    private f(jt.p pVar, e eVar, d dVar, boolean z10, boolean z11, boolean z12) {
        if (pVar == null) {
            throw new NullPointerException("Missing element.");
        }
        if (eVar == null) {
            throw new NullPointerException("Missing printer.");
        }
        if (dVar != null) {
            this.f37594d = pVar;
            this.f37595e = eVar;
            this.f37596i = dVar;
            this.f37597o = (eVar instanceof c) && pVar.getType() == net.time4j.a0.class;
            this.f37598p = z10;
            this.f37599q = z11;
            this.f37600r = z12;
            return;
        }
        throw new NullPointerException("Missing parser.");
    }
}
