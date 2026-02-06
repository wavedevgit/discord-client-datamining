package tt;

import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;
import net.time4j.c1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f implements h {

    /* renamed from: s  reason: collision with root package name */
    private static final rt.t f50960s = new a();

    /* renamed from: d  reason: collision with root package name */
    private final rt.p f50961d;

    /* renamed from: e  reason: collision with root package name */
    private final e f50962e;

    /* renamed from: i  reason: collision with root package name */
    private final d f50963i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f50964o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f50965p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f50966q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f50967r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static class a implements rt.t {
        a() {
        }

        @Override // rt.t
        /* renamed from: a */
        public Void apply(rt.o oVar) {
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(rt.p pVar, e eVar, d dVar) {
        this(pVar, eVar, dVar, false, false, false);
    }

    private static Map b(Map map, c cVar) {
        rt.x q10 = cVar.q();
        HashMap hashMap = new HashMap();
        for (rt.p pVar : map.keySet()) {
            if (q10.F(pVar)) {
                hashMap.put(pVar, map.get(pVar));
            }
        }
        return hashMap;
    }

    private static Set h(c cVar, Object obj, StringBuilder sb2, rt.d dVar) {
        return cVar.J(cVar.q().p().cast(obj), sb2, dVar);
    }

    @Override // tt.h
    public void a(CharSequence charSequence, s sVar, rt.d dVar, t tVar, boolean z10) {
        int f10 = sVar.f();
        if (z10) {
            try {
                if (this.f50966q) {
                    dVar = ((c) c.class.cast(this.f50963i)).o();
                }
            } catch (IndexOutOfBoundsException e10) {
                sVar.k(f10, e10.getMessage());
                return;
            }
        }
        Object a10 = this.f50963i.a(charSequence, sVar, dVar);
        if (a10 == null) {
            sVar.k(f10, sVar.d());
        } else if (this.f50967r && (tVar instanceof u)) {
            tVar.J(a10);
        } else {
            rt.q g10 = sVar.g();
            for (rt.p pVar : g10.y()) {
                if (pVar.getType() == Integer.class) {
                    tVar.H(pVar, g10.q(pVar));
                } else {
                    tVar.I(pVar, g10.s(pVar));
                }
            }
            tVar.I(this.f50961d, a10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean c() {
        return this.f50967r;
    }

    @Override // tt.h
    public h d(rt.p pVar) {
        if (this.f50961d == pVar) {
            return this;
        }
        return new f(pVar, this.f50962e, this.f50963i);
    }

    @Override // tt.h
    public h e(c cVar, rt.d dVar, int i10) {
        boolean z10;
        boolean z11;
        boolean z12;
        if (cVar.z() && this.f50961d.getType().equals(cVar.q().p())) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (dVar instanceof b) {
            e eVar = this.f50962e;
            d dVar2 = this.f50963i;
            Map r10 = cVar.r();
            b bVar = (b) dVar;
            e eVar2 = this.f50962e;
            if (eVar2 instanceof c) {
                c cVar2 = (c) c.class.cast(eVar2);
                eVar = cVar2.R(b(r10, cVar2), bVar);
                z11 = true;
            } else {
                z11 = false;
            }
            e eVar3 = eVar;
            d dVar3 = this.f50963i;
            if (dVar3 instanceof c) {
                c cVar3 = (c) c.class.cast(dVar3);
                dVar2 = cVar3.R(b(r10, cVar3), bVar);
                z12 = true;
            } else {
                z12 = false;
            }
            return new f(this.f50961d, eVar3, dVar2, z11, z12, z10);
        } else if (!this.f50965p && !this.f50966q) {
            return this;
        } else {
            return new f(this.f50961d, this.f50962e, this.f50963i);
        }
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f50961d.equals(fVar.f50961d) && this.f50962e.equals(fVar.f50962e) && this.f50963i.equals(fVar.f50963i)) {
                return true;
            }
        }
        return false;
    }

    @Override // tt.h
    public int f(rt.o oVar, Appendable appendable, rt.d dVar, Set set, boolean z10) {
        if (z10 && this.f50965p) {
            dVar = ((c) c.class.cast(this.f50962e)).o();
        }
        if (this.f50964o && (oVar instanceof c1) && set == null) {
            ((c) this.f50962e).K(oVar, appendable, dVar, false);
            return Integer.MAX_VALUE;
        }
        Object s10 = oVar.s(this.f50961d);
        StringBuilder sb2 = new StringBuilder();
        if ((appendable instanceof CharSequence) && set != null) {
            int length = ((CharSequence) appendable).length();
            e eVar = this.f50962e;
            if (eVar instanceof c) {
                Set<g> h10 = h((c) c.class.cast(eVar), s10, sb2, dVar);
                LinkedHashSet linkedHashSet = new LinkedHashSet();
                for (g gVar : h10) {
                    linkedHashSet.add(new g(gVar.a(), gVar.c() + length, gVar.b() + length));
                }
                set.addAll(linkedHashSet);
            } else {
                eVar.b(s10, sb2, dVar, f50960s);
            }
            set.add(new g(this.f50961d, length, sb2.length() + length));
        } else {
            this.f50962e.b(s10, sb2, dVar, f50960s);
        }
        appendable.append(sb2);
        return sb2.length();
    }

    @Override // tt.h
    public boolean g() {
        return false;
    }

    @Override // tt.h
    public rt.p getElement() {
        return this.f50961d;
    }

    public int hashCode() {
        return (this.f50961d.hashCode() * 7) + (this.f50962e.hashCode() * 31) + (this.f50963i.hashCode() * 37);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(f.class.getName());
        sb2.append("[element=");
        sb2.append(this.f50961d.name());
        sb2.append(", printer=");
        sb2.append(this.f50962e);
        sb2.append(", parser=");
        sb2.append(this.f50963i);
        sb2.append(']');
        return sb2.toString();
    }

    private f(rt.p pVar, e eVar, d dVar, boolean z10, boolean z11, boolean z12) {
        if (pVar == null) {
            throw new NullPointerException("Missing element.");
        }
        if (eVar == null) {
            throw new NullPointerException("Missing printer.");
        }
        if (dVar != null) {
            this.f50961d = pVar;
            this.f50962e = eVar;
            this.f50963i = dVar;
            this.f50964o = (eVar instanceof c) && pVar.getType() == net.time4j.a0.class;
            this.f50965p = z10;
            this.f50966q = z11;
            this.f50967r = z12;
            return;
        }
        throw new NullPointerException("Missing parser.");
    }
}
