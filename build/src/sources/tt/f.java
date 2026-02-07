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
    private static final rt.t f51008s = new a();

    /* renamed from: d  reason: collision with root package name */
    private final rt.p f51009d;

    /* renamed from: e  reason: collision with root package name */
    private final e f51010e;

    /* renamed from: i  reason: collision with root package name */
    private final d f51011i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f51012o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f51013p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f51014q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f51015r;

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
                if (this.f51014q) {
                    dVar = ((c) c.class.cast(this.f51011i)).o();
                }
            } catch (IndexOutOfBoundsException e10) {
                sVar.k(f10, e10.getMessage());
                return;
            }
        }
        Object a10 = this.f51011i.a(charSequence, sVar, dVar);
        if (a10 == null) {
            sVar.k(f10, sVar.d());
        } else if (this.f51015r && (tVar instanceof u)) {
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
            tVar.I(this.f51009d, a10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean c() {
        return this.f51015r;
    }

    @Override // tt.h
    public h d(rt.p pVar) {
        if (this.f51009d == pVar) {
            return this;
        }
        return new f(pVar, this.f51010e, this.f51011i);
    }

    @Override // tt.h
    public h e(c cVar, rt.d dVar, int i10) {
        boolean z10;
        boolean z11;
        boolean z12;
        if (cVar.z() && this.f51009d.getType().equals(cVar.q().p())) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (dVar instanceof b) {
            e eVar = this.f51010e;
            d dVar2 = this.f51011i;
            Map r10 = cVar.r();
            b bVar = (b) dVar;
            e eVar2 = this.f51010e;
            if (eVar2 instanceof c) {
                c cVar2 = (c) c.class.cast(eVar2);
                eVar = cVar2.R(b(r10, cVar2), bVar);
                z11 = true;
            } else {
                z11 = false;
            }
            e eVar3 = eVar;
            d dVar3 = this.f51011i;
            if (dVar3 instanceof c) {
                c cVar3 = (c) c.class.cast(dVar3);
                dVar2 = cVar3.R(b(r10, cVar3), bVar);
                z12 = true;
            } else {
                z12 = false;
            }
            return new f(this.f51009d, eVar3, dVar2, z11, z12, z10);
        } else if (!this.f51013p && !this.f51014q) {
            return this;
        } else {
            return new f(this.f51009d, this.f51010e, this.f51011i);
        }
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f51009d.equals(fVar.f51009d) && this.f51010e.equals(fVar.f51010e) && this.f51011i.equals(fVar.f51011i)) {
                return true;
            }
        }
        return false;
    }

    @Override // tt.h
    public int f(rt.o oVar, Appendable appendable, rt.d dVar, Set set, boolean z10) {
        if (z10 && this.f51013p) {
            dVar = ((c) c.class.cast(this.f51010e)).o();
        }
        if (this.f51012o && (oVar instanceof c1) && set == null) {
            ((c) this.f51010e).K(oVar, appendable, dVar, false);
            return Integer.MAX_VALUE;
        }
        Object s10 = oVar.s(this.f51009d);
        StringBuilder sb2 = new StringBuilder();
        if ((appendable instanceof CharSequence) && set != null) {
            int length = ((CharSequence) appendable).length();
            e eVar = this.f51010e;
            if (eVar instanceof c) {
                Set<g> h10 = h((c) c.class.cast(eVar), s10, sb2, dVar);
                LinkedHashSet linkedHashSet = new LinkedHashSet();
                for (g gVar : h10) {
                    linkedHashSet.add(new g(gVar.a(), gVar.c() + length, gVar.b() + length));
                }
                set.addAll(linkedHashSet);
            } else {
                eVar.b(s10, sb2, dVar, f51008s);
            }
            set.add(new g(this.f51009d, length, sb2.length() + length));
        } else {
            this.f51010e.b(s10, sb2, dVar, f51008s);
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
        return this.f51009d;
    }

    public int hashCode() {
        return (this.f51009d.hashCode() * 7) + (this.f51010e.hashCode() * 31) + (this.f51011i.hashCode() * 37);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(f.class.getName());
        sb2.append("[element=");
        sb2.append(this.f51009d.name());
        sb2.append(", printer=");
        sb2.append(this.f51010e);
        sb2.append(", parser=");
        sb2.append(this.f51011i);
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
            this.f51009d = pVar;
            this.f51010e = eVar;
            this.f51011i = dVar;
            this.f51012o = (eVar instanceof c) && pVar.getType() == net.time4j.a0.class;
            this.f51013p = z10;
            this.f51014q = z11;
            this.f51015r = z12;
            return;
        }
        throw new NullPointerException("Missing parser.");
    }
}
