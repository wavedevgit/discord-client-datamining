package ut;

import java.util.Locale;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a0 implements h {

    /* renamed from: d  reason: collision with root package name */
    private final tt.t f51825d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f51826e;

    /* renamed from: i  reason: collision with root package name */
    private final vt.e f51827i;

    /* renamed from: o  reason: collision with root package name */
    private final Locale f51828o;

    /* renamed from: p  reason: collision with root package name */
    private final tt.v f51829p;

    /* renamed from: q  reason: collision with root package name */
    private final tt.m f51830q;

    /* renamed from: r  reason: collision with root package name */
    private final tt.g f51831r;

    /* renamed from: s  reason: collision with root package name */
    private final int f51832s;

    private a0(tt.t tVar, boolean z10, Locale locale, tt.v vVar, tt.m mVar, tt.g gVar, int i10) {
        vt.e eVar;
        if (tVar != null) {
            this.f51825d = tVar;
            this.f51826e = z10;
            if (tVar instanceof vt.e) {
                eVar = (vt.e) tVar;
            } else {
                eVar = null;
            }
            this.f51827i = eVar;
            this.f51828o = locale;
            this.f51829p = vVar;
            this.f51830q = mVar;
            this.f51831r = gVar;
            this.f51832s = i10;
            return;
        }
        throw new NullPointerException("Missing element.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static a0 b(tt.t tVar) {
        return new a0(tVar, false, Locale.ROOT, tt.v.WIDE, tt.m.FORMAT, tt.g.SMART, 0);
    }

    private boolean c(st.o oVar, Appendable appendable, st.d dVar, boolean z10) {
        vt.e eVar = this.f51827i;
        if (eVar != null && z10) {
            eVar.q(oVar, appendable, this.f51828o, this.f51829p, this.f51830q);
            return true;
        } else if (oVar.s(this.f51825d)) {
            this.f51825d.o(oVar, appendable, dVar);
            return true;
        } else {
            return false;
        }
    }

    @Override // ut.h
    public void a(CharSequence charSequence, s sVar, st.d dVar, t tVar, boolean z10) {
        int intValue;
        Object l10;
        vt.e eVar;
        int f10 = sVar.f();
        int length = charSequence.length();
        if (z10) {
            intValue = this.f51832s;
        } else {
            intValue = ((Integer) dVar.b(tt.a.f51020s, 0)).intValue();
        }
        if (intValue > 0) {
            length -= intValue;
        }
        if (f10 >= length) {
            sVar.k(f10, "Missing chars for: " + this.f51825d.name());
            sVar.n();
            return;
        }
        if (z10 && (eVar = this.f51827i) != null && this.f51831r != null) {
            l10 = eVar.w(charSequence, sVar.e(), this.f51828o, this.f51829p, this.f51830q, this.f51831r);
        } else {
            tt.t tVar2 = this.f51825d;
            if (tVar2 instanceof vt.a) {
                l10 = ((vt.a) tVar2).r(charSequence, sVar.e(), dVar, tVar);
            } else {
                l10 = tVar2.l(charSequence, sVar.e(), dVar);
            }
        }
        if (sVar.i()) {
            Class type = this.f51825d.getType();
            if (type.isEnum()) {
                int c10 = sVar.c();
                sVar.k(c10, "No suitable enum found: " + type.getName());
                return;
            }
            int c11 = sVar.c();
            sVar.k(c11, "Unparseable element: " + this.f51825d.name());
        } else if (l10 == null) {
            sVar.k(f10, "No interpretable value.");
        } else {
            tt.t tVar3 = this.f51825d;
            if (tVar3 == net.time4j.f0.D) {
                tVar.H(net.time4j.f0.E, ((net.time4j.b0) net.time4j.b0.class.cast(l10)).d());
            } else {
                tVar.I(tVar3, l10);
            }
        }
    }

    @Override // ut.h
    public h d(c cVar, st.d dVar, int i10) {
        tt.g gVar;
        st.c cVar2 = tt.a.f51007f;
        tt.g gVar2 = tt.g.SMART;
        tt.g gVar3 = (tt.g) dVar.b(cVar2, gVar2);
        st.c cVar3 = tt.a.f51012k;
        Boolean bool = Boolean.TRUE;
        boolean booleanValue = ((Boolean) dVar.b(cVar3, bool)).booleanValue();
        boolean booleanValue2 = ((Boolean) dVar.b(tt.a.f51010i, bool)).booleanValue();
        boolean booleanValue3 = ((Boolean) dVar.b(tt.a.f51011j, Boolean.FALSE)).booleanValue();
        if ((gVar3 == tt.g.STRICT && (booleanValue || booleanValue2 || booleanValue3)) || ((gVar3 == gVar2 && (!booleanValue || !booleanValue2 || booleanValue3)) || !booleanValue || !booleanValue2 || !booleanValue3)) {
            gVar = null;
        } else {
            gVar = gVar3;
        }
        return new a0(this.f51825d, this.f51826e, (Locale) dVar.b(tt.a.f51004c, Locale.ROOT), (tt.v) dVar.b(tt.a.f51008g, tt.v.WIDE), (tt.m) dVar.b(tt.a.f51009h, tt.m.FORMAT), gVar, ((Integer) dVar.b(tt.a.f51020s, 0)).intValue());
    }

    @Override // ut.h
    public h e(st.p pVar) {
        if (!this.f51826e && this.f51825d != pVar) {
            if (pVar instanceof tt.t) {
                return b((tt.t) pVar);
            }
            throw new IllegalArgumentException("Text element required: " + pVar.getClass().getName());
        }
        return this;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a0) {
            a0 a0Var = (a0) obj;
            if (this.f51825d.equals(a0Var.f51825d) && this.f51826e == a0Var.f51826e) {
                return true;
            }
        }
        return false;
    }

    @Override // ut.h
    public int f(st.o oVar, Appendable appendable, st.d dVar, Set set, boolean z10) {
        if (appendable instanceof CharSequence) {
            CharSequence charSequence = (CharSequence) appendable;
            int length = charSequence.length();
            if (c(oVar, appendable, dVar, z10)) {
                if (set != null) {
                    set.add(new g(this.f51825d, length, charSequence.length()));
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

    @Override // ut.h
    public boolean g() {
        return false;
    }

    @Override // ut.h
    public st.p getElement() {
        return this.f51825d;
    }

    public int hashCode() {
        return this.f51825d.hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(a0.class.getName());
        sb2.append("[element=");
        sb2.append(this.f51825d.name());
        sb2.append(",protected-mode=");
        sb2.append(this.f51826e);
        sb2.append(']');
        return sb2.toString();
    }
}
