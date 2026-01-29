package lt;

import java.util.Locale;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a0 implements h {

    /* renamed from: d  reason: collision with root package name */
    private final kt.t f37489d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f37490e;

    /* renamed from: i  reason: collision with root package name */
    private final mt.e f37491i;

    /* renamed from: o  reason: collision with root package name */
    private final Locale f37492o;

    /* renamed from: p  reason: collision with root package name */
    private final kt.v f37493p;

    /* renamed from: q  reason: collision with root package name */
    private final kt.m f37494q;

    /* renamed from: r  reason: collision with root package name */
    private final kt.g f37495r;

    /* renamed from: s  reason: collision with root package name */
    private final int f37496s;

    private a0(kt.t tVar, boolean z10, Locale locale, kt.v vVar, kt.m mVar, kt.g gVar, int i10) {
        mt.e eVar;
        if (tVar != null) {
            this.f37489d = tVar;
            this.f37490e = z10;
            if (tVar instanceof mt.e) {
                eVar = (mt.e) tVar;
            } else {
                eVar = null;
            }
            this.f37491i = eVar;
            this.f37492o = locale;
            this.f37493p = vVar;
            this.f37494q = mVar;
            this.f37495r = gVar;
            this.f37496s = i10;
            return;
        }
        throw new NullPointerException("Missing element.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static a0 b(kt.t tVar) {
        return new a0(tVar, false, Locale.ROOT, kt.v.WIDE, kt.m.FORMAT, kt.g.SMART, 0);
    }

    private boolean c(jt.o oVar, Appendable appendable, jt.d dVar, boolean z10) {
        mt.e eVar = this.f37491i;
        if (eVar != null && z10) {
            eVar.g(oVar, appendable, this.f37492o, this.f37493p, this.f37494q);
            return true;
        } else if (oVar.o(this.f37489d)) {
            this.f37489d.u(oVar, appendable, dVar);
            return true;
        } else {
            return false;
        }
    }

    @Override // lt.h
    public h a(c cVar, jt.d dVar, int i10) {
        kt.g gVar;
        jt.c cVar2 = kt.a.f36533f;
        kt.g gVar2 = kt.g.SMART;
        kt.g gVar3 = (kt.g) dVar.b(cVar2, gVar2);
        jt.c cVar3 = kt.a.f36538k;
        Boolean bool = Boolean.TRUE;
        boolean booleanValue = ((Boolean) dVar.b(cVar3, bool)).booleanValue();
        boolean booleanValue2 = ((Boolean) dVar.b(kt.a.f36536i, bool)).booleanValue();
        boolean booleanValue3 = ((Boolean) dVar.b(kt.a.f36537j, Boolean.FALSE)).booleanValue();
        if ((gVar3 == kt.g.STRICT && (booleanValue || booleanValue2 || booleanValue3)) || ((gVar3 == gVar2 && (!booleanValue || !booleanValue2 || booleanValue3)) || !booleanValue || !booleanValue2 || !booleanValue3)) {
            gVar = null;
        } else {
            gVar = gVar3;
        }
        return new a0(this.f37489d, this.f37490e, (Locale) dVar.b(kt.a.f36530c, Locale.ROOT), (kt.v) dVar.b(kt.a.f36534g, kt.v.WIDE), (kt.m) dVar.b(kt.a.f36535h, kt.m.FORMAT), gVar, ((Integer) dVar.b(kt.a.f36546s, 0)).intValue());
    }

    @Override // lt.h
    public int d(jt.o oVar, Appendable appendable, jt.d dVar, Set set, boolean z10) {
        if (appendable instanceof CharSequence) {
            CharSequence charSequence = (CharSequence) appendable;
            int length = charSequence.length();
            if (c(oVar, appendable, dVar, z10)) {
                if (set != null) {
                    set.add(new g(this.f37489d, length, charSequence.length()));
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

    @Override // lt.h
    public void e(CharSequence charSequence, s sVar, jt.d dVar, t tVar, boolean z10) {
        int intValue;
        Object z11;
        mt.e eVar;
        int f10 = sVar.f();
        int length = charSequence.length();
        if (z10) {
            intValue = this.f37496s;
        } else {
            intValue = ((Integer) dVar.b(kt.a.f36546s, 0)).intValue();
        }
        if (intValue > 0) {
            length -= intValue;
        }
        if (f10 >= length) {
            sVar.k(f10, "Missing chars for: " + this.f37489d.name());
            sVar.n();
            return;
        }
        if (z10 && (eVar = this.f37491i) != null && this.f37495r != null) {
            z11 = eVar.f(charSequence, sVar.e(), this.f37492o, this.f37493p, this.f37494q, this.f37495r);
        } else {
            kt.t tVar2 = this.f37489d;
            if (tVar2 instanceof mt.a) {
                z11 = ((mt.a) tVar2).t(charSequence, sVar.e(), dVar, tVar);
            } else {
                z11 = tVar2.z(charSequence, sVar.e(), dVar);
            }
        }
        if (sVar.i()) {
            Class type = this.f37489d.getType();
            if (type.isEnum()) {
                int c10 = sVar.c();
                sVar.k(c10, "No suitable enum found: " + type.getName());
                return;
            }
            int c11 = sVar.c();
            sVar.k(c11, "Unparseable element: " + this.f37489d.name());
        } else if (z11 == null) {
            sVar.k(f10, "No interpretable value.");
        } else {
            kt.t tVar3 = this.f37489d;
            if (tVar3 == net.time4j.f0.D) {
                tVar.H(net.time4j.f0.E, ((net.time4j.b0) net.time4j.b0.class.cast(z11)).d());
            } else {
                tVar.I(tVar3, z11);
            }
        }
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a0) {
            a0 a0Var = (a0) obj;
            if (this.f37489d.equals(a0Var.f37489d) && this.f37490e == a0Var.f37490e) {
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
        if (!this.f37490e && this.f37489d != pVar) {
            if (pVar instanceof kt.t) {
                return b((kt.t) pVar);
            }
            throw new IllegalArgumentException("Text element required: " + pVar.getClass().getName());
        }
        return this;
    }

    @Override // lt.h
    public jt.p getElement() {
        return this.f37489d;
    }

    public int hashCode() {
        return this.f37489d.hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(a0.class.getName());
        sb2.append("[element=");
        sb2.append(this.f37489d.name());
        sb2.append(",protected-mode=");
        sb2.append(this.f37490e);
        sb2.append(']');
        return sb2.toString();
    }
}
