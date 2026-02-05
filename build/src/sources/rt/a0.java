package rt;

import java.util.Locale;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a0 implements h {

    /* renamed from: d  reason: collision with root package name */
    private final qt.t f49009d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f49010e;

    /* renamed from: i  reason: collision with root package name */
    private final st.e f49011i;

    /* renamed from: o  reason: collision with root package name */
    private final Locale f49012o;

    /* renamed from: p  reason: collision with root package name */
    private final qt.v f49013p;

    /* renamed from: q  reason: collision with root package name */
    private final qt.m f49014q;

    /* renamed from: r  reason: collision with root package name */
    private final qt.g f49015r;

    /* renamed from: s  reason: collision with root package name */
    private final int f49016s;

    private a0(qt.t tVar, boolean z10, Locale locale, qt.v vVar, qt.m mVar, qt.g gVar, int i10) {
        st.e eVar;
        if (tVar != null) {
            this.f49009d = tVar;
            this.f49010e = z10;
            if (tVar instanceof st.e) {
                eVar = (st.e) tVar;
            } else {
                eVar = null;
            }
            this.f49011i = eVar;
            this.f49012o = locale;
            this.f49013p = vVar;
            this.f49014q = mVar;
            this.f49015r = gVar;
            this.f49016s = i10;
            return;
        }
        throw new NullPointerException("Missing element.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static a0 b(qt.t tVar) {
        return new a0(tVar, false, Locale.ROOT, qt.v.WIDE, qt.m.FORMAT, qt.g.SMART, 0);
    }

    private boolean c(pt.o oVar, Appendable appendable, pt.d dVar, boolean z10) {
        st.e eVar = this.f49011i;
        if (eVar != null && z10) {
            eVar.f(oVar, appendable, this.f49012o, this.f49013p, this.f49014q);
            return true;
        } else if (oVar.m(this.f49009d)) {
            this.f49009d.s(oVar, appendable, dVar);
            return true;
        } else {
            return false;
        }
    }

    @Override // rt.h
    public h a(pt.p pVar) {
        if (!this.f49010e && this.f49009d != pVar) {
            if (pVar instanceof qt.t) {
                return b((qt.t) pVar);
            }
            throw new IllegalArgumentException("Text element required: " + pVar.getClass().getName());
        }
        return this;
    }

    @Override // rt.h
    public void d(CharSequence charSequence, s sVar, pt.d dVar, t tVar, boolean z10) {
        int intValue;
        Object t10;
        st.e eVar;
        int f10 = sVar.f();
        int length = charSequence.length();
        if (z10) {
            intValue = this.f49016s;
        } else {
            intValue = ((Integer) dVar.a(qt.a.f48104s, 0)).intValue();
        }
        if (intValue > 0) {
            length -= intValue;
        }
        if (f10 >= length) {
            sVar.k(f10, "Missing chars for: " + this.f49009d.name());
            sVar.n();
            return;
        }
        if (z10 && (eVar = this.f49011i) != null && this.f49015r != null) {
            t10 = eVar.i(charSequence, sVar.e(), this.f49012o, this.f49013p, this.f49014q, this.f49015r);
        } else {
            qt.t tVar2 = this.f49009d;
            if (tVar2 instanceof st.a) {
                t10 = ((st.a) tVar2).n(charSequence, sVar.e(), dVar, tVar);
            } else {
                t10 = tVar2.t(charSequence, sVar.e(), dVar);
            }
        }
        if (sVar.i()) {
            Class type = this.f49009d.getType();
            if (type.isEnum()) {
                int c10 = sVar.c();
                sVar.k(c10, "No suitable enum found: " + type.getName());
                return;
            }
            int c11 = sVar.c();
            sVar.k(c11, "Unparseable element: " + this.f49009d.name());
        } else if (t10 == null) {
            sVar.k(f10, "No interpretable value.");
        } else {
            qt.t tVar3 = this.f49009d;
            if (tVar3 == net.time4j.f0.D) {
                tVar.H(net.time4j.f0.E, ((net.time4j.b0) net.time4j.b0.class.cast(t10)).d());
            } else {
                tVar.I(tVar3, t10);
            }
        }
    }

    @Override // rt.h
    public h e(c cVar, pt.d dVar, int i10) {
        qt.g gVar;
        pt.c cVar2 = qt.a.f48091f;
        qt.g gVar2 = qt.g.SMART;
        qt.g gVar3 = (qt.g) dVar.a(cVar2, gVar2);
        pt.c cVar3 = qt.a.f48096k;
        Boolean bool = Boolean.TRUE;
        boolean booleanValue = ((Boolean) dVar.a(cVar3, bool)).booleanValue();
        boolean booleanValue2 = ((Boolean) dVar.a(qt.a.f48094i, bool)).booleanValue();
        boolean booleanValue3 = ((Boolean) dVar.a(qt.a.f48095j, Boolean.FALSE)).booleanValue();
        if ((gVar3 == qt.g.STRICT && (booleanValue || booleanValue2 || booleanValue3)) || ((gVar3 == gVar2 && (!booleanValue || !booleanValue2 || booleanValue3)) || !booleanValue || !booleanValue2 || !booleanValue3)) {
            gVar = null;
        } else {
            gVar = gVar3;
        }
        return new a0(this.f49009d, this.f49010e, (Locale) dVar.a(qt.a.f48088c, Locale.ROOT), (qt.v) dVar.a(qt.a.f48092g, qt.v.WIDE), (qt.m) dVar.a(qt.a.f48093h, qt.m.FORMAT), gVar, ((Integer) dVar.a(qt.a.f48104s, 0)).intValue());
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a0) {
            a0 a0Var = (a0) obj;
            if (this.f49009d.equals(a0Var.f49009d) && this.f49010e == a0Var.f49010e) {
                return true;
            }
        }
        return false;
    }

    @Override // rt.h
    public int f(pt.o oVar, Appendable appendable, pt.d dVar, Set set, boolean z10) {
        if (appendable instanceof CharSequence) {
            CharSequence charSequence = (CharSequence) appendable;
            int length = charSequence.length();
            if (c(oVar, appendable, dVar, z10)) {
                if (set != null) {
                    set.add(new g(this.f49009d, length, charSequence.length()));
                }
                return charSequence.length() - length;
            }
            return -1;
        } else if (c(oVar, appendable, dVar, z10)) {
            return Integer.MAX_VALUE;
        } else {
            return -1;
        }
    }

    @Override // rt.h
    public boolean g() {
        return false;
    }

    @Override // rt.h
    public pt.p getElement() {
        return this.f49009d;
    }

    public int hashCode() {
        return this.f49009d.hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(a0.class.getName());
        sb2.append("[element=");
        sb2.append(this.f49009d.name());
        sb2.append(",protected-mode=");
        sb2.append(this.f49010e);
        sb2.append(']');
        return sb2.toString();
    }
}
