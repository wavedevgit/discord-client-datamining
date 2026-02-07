package tt;

import java.util.Locale;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a0 implements h {

    /* renamed from: d  reason: collision with root package name */
    private final st.t f50920d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f50921e;

    /* renamed from: i  reason: collision with root package name */
    private final ut.e f50922i;

    /* renamed from: o  reason: collision with root package name */
    private final Locale f50923o;

    /* renamed from: p  reason: collision with root package name */
    private final st.v f50924p;

    /* renamed from: q  reason: collision with root package name */
    private final st.m f50925q;

    /* renamed from: r  reason: collision with root package name */
    private final st.g f50926r;

    /* renamed from: s  reason: collision with root package name */
    private final int f50927s;

    private a0(st.t tVar, boolean z10, Locale locale, st.v vVar, st.m mVar, st.g gVar, int i10) {
        ut.e eVar;
        if (tVar != null) {
            this.f50920d = tVar;
            this.f50921e = z10;
            if (tVar instanceof ut.e) {
                eVar = (ut.e) tVar;
            } else {
                eVar = null;
            }
            this.f50922i = eVar;
            this.f50923o = locale;
            this.f50924p = vVar;
            this.f50925q = mVar;
            this.f50926r = gVar;
            this.f50927s = i10;
            return;
        }
        throw new NullPointerException("Missing element.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static a0 b(st.t tVar) {
        return new a0(tVar, false, Locale.ROOT, st.v.WIDE, st.m.FORMAT, st.g.SMART, 0);
    }

    private boolean c(rt.o oVar, Appendable appendable, rt.d dVar, boolean z10) {
        ut.e eVar = this.f50922i;
        if (eVar != null && z10) {
            eVar.h(oVar, appendable, this.f50923o, this.f50924p, this.f50925q);
            return true;
        } else if (oVar.n(this.f50920d)) {
            this.f50920d.v(oVar, appendable, dVar);
            return true;
        } else {
            return false;
        }
    }

    @Override // tt.h
    public void a(CharSequence charSequence, s sVar, rt.d dVar, t tVar, boolean z10) {
        int intValue;
        Object r10;
        ut.e eVar;
        int f10 = sVar.f();
        int length = charSequence.length();
        if (z10) {
            intValue = this.f50927s;
        } else {
            intValue = ((Integer) dVar.b(st.a.f50176s, 0)).intValue();
        }
        if (intValue > 0) {
            length -= intValue;
        }
        if (f10 >= length) {
            sVar.k(f10, "Missing chars for: " + this.f50920d.name());
            sVar.n();
            return;
        }
        if (z10 && (eVar = this.f50922i) != null && this.f50926r != null) {
            r10 = eVar.q(charSequence, sVar.e(), this.f50923o, this.f50924p, this.f50925q, this.f50926r);
        } else {
            st.t tVar2 = this.f50920d;
            if (tVar2 instanceof ut.a) {
                r10 = ((ut.a) tVar2).w(charSequence, sVar.e(), dVar, tVar);
            } else {
                r10 = tVar2.r(charSequence, sVar.e(), dVar);
            }
        }
        if (sVar.i()) {
            Class type = this.f50920d.getType();
            if (type.isEnum()) {
                int c10 = sVar.c();
                sVar.k(c10, "No suitable enum found: " + type.getName());
                return;
            }
            int c11 = sVar.c();
            sVar.k(c11, "Unparseable element: " + this.f50920d.name());
        } else if (r10 == null) {
            sVar.k(f10, "No interpretable value.");
        } else {
            st.t tVar3 = this.f50920d;
            if (tVar3 == net.time4j.f0.D) {
                tVar.H(net.time4j.f0.E, ((net.time4j.b0) net.time4j.b0.class.cast(r10)).d());
            } else {
                tVar.I(tVar3, r10);
            }
        }
    }

    @Override // tt.h
    public h d(rt.p pVar) {
        if (!this.f50921e && this.f50920d != pVar) {
            if (pVar instanceof st.t) {
                return b((st.t) pVar);
            }
            throw new IllegalArgumentException("Text element required: " + pVar.getClass().getName());
        }
        return this;
    }

    @Override // tt.h
    public h e(c cVar, rt.d dVar, int i10) {
        st.g gVar;
        rt.c cVar2 = st.a.f50163f;
        st.g gVar2 = st.g.SMART;
        st.g gVar3 = (st.g) dVar.b(cVar2, gVar2);
        rt.c cVar3 = st.a.f50168k;
        Boolean bool = Boolean.TRUE;
        boolean booleanValue = ((Boolean) dVar.b(cVar3, bool)).booleanValue();
        boolean booleanValue2 = ((Boolean) dVar.b(st.a.f50166i, bool)).booleanValue();
        boolean booleanValue3 = ((Boolean) dVar.b(st.a.f50167j, Boolean.FALSE)).booleanValue();
        if ((gVar3 == st.g.STRICT && (booleanValue || booleanValue2 || booleanValue3)) || ((gVar3 == gVar2 && (!booleanValue || !booleanValue2 || booleanValue3)) || !booleanValue || !booleanValue2 || !booleanValue3)) {
            gVar = null;
        } else {
            gVar = gVar3;
        }
        return new a0(this.f50920d, this.f50921e, (Locale) dVar.b(st.a.f50160c, Locale.ROOT), (st.v) dVar.b(st.a.f50164g, st.v.WIDE), (st.m) dVar.b(st.a.f50165h, st.m.FORMAT), gVar, ((Integer) dVar.b(st.a.f50176s, 0)).intValue());
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a0) {
            a0 a0Var = (a0) obj;
            if (this.f50920d.equals(a0Var.f50920d) && this.f50921e == a0Var.f50921e) {
                return true;
            }
        }
        return false;
    }

    @Override // tt.h
    public int f(rt.o oVar, Appendable appendable, rt.d dVar, Set set, boolean z10) {
        if (appendable instanceof CharSequence) {
            CharSequence charSequence = (CharSequence) appendable;
            int length = charSequence.length();
            if (c(oVar, appendable, dVar, z10)) {
                if (set != null) {
                    set.add(new g(this.f50920d, length, charSequence.length()));
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

    @Override // tt.h
    public boolean g() {
        return false;
    }

    @Override // tt.h
    public rt.p getElement() {
        return this.f50920d;
    }

    public int hashCode() {
        return this.f50920d.hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(a0.class.getName());
        sb2.append("[element=");
        sb2.append(this.f50920d.name());
        sb2.append(",protected-mode=");
        sb2.append(this.f50921e);
        sb2.append(']');
        return sb2.toString();
    }
}
