package du;

import java.util.Locale;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a0 implements h {

    /* renamed from: d  reason: collision with root package name */
    private final cu.t f21927d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f21928e;

    /* renamed from: i  reason: collision with root package name */
    private final eu.e f21929i;

    /* renamed from: o  reason: collision with root package name */
    private final Locale f21930o;

    /* renamed from: p  reason: collision with root package name */
    private final cu.v f21931p;

    /* renamed from: q  reason: collision with root package name */
    private final cu.m f21932q;

    /* renamed from: r  reason: collision with root package name */
    private final cu.g f21933r;

    /* renamed from: s  reason: collision with root package name */
    private final int f21934s;

    private a0(cu.t tVar, boolean z10, Locale locale, cu.v vVar, cu.m mVar, cu.g gVar, int i10) {
        eu.e eVar;
        if (tVar != null) {
            this.f21927d = tVar;
            this.f21928e = z10;
            if (tVar instanceof eu.e) {
                eVar = (eu.e) tVar;
            } else {
                eVar = null;
            }
            this.f21929i = eVar;
            this.f21930o = locale;
            this.f21931p = vVar;
            this.f21932q = mVar;
            this.f21933r = gVar;
            this.f21934s = i10;
            return;
        }
        throw new NullPointerException("Missing element.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static a0 b(cu.t tVar) {
        return new a0(tVar, false, Locale.ROOT, cu.v.WIDE, cu.m.FORMAT, cu.g.SMART, 0);
    }

    private boolean c(bu.o oVar, Appendable appendable, bu.d dVar, boolean z10) {
        eu.e eVar = this.f21929i;
        if (eVar != null && z10) {
            eVar.g(oVar, appendable, this.f21930o, this.f21931p, this.f21932q);
            return true;
        } else if (oVar.n(this.f21927d)) {
            this.f21927d.w(oVar, appendable, dVar);
            return true;
        } else {
            return false;
        }
    }

    @Override // du.h
    public h a(c cVar, bu.d dVar, int i10) {
        cu.g gVar;
        bu.c cVar2 = cu.a.f21113f;
        cu.g gVar2 = cu.g.SMART;
        cu.g gVar3 = (cu.g) dVar.b(cVar2, gVar2);
        bu.c cVar3 = cu.a.f21118k;
        Boolean bool = Boolean.TRUE;
        boolean booleanValue = ((Boolean) dVar.b(cVar3, bool)).booleanValue();
        boolean booleanValue2 = ((Boolean) dVar.b(cu.a.f21116i, bool)).booleanValue();
        boolean booleanValue3 = ((Boolean) dVar.b(cu.a.f21117j, Boolean.FALSE)).booleanValue();
        if ((gVar3 == cu.g.STRICT && (booleanValue || booleanValue2 || booleanValue3)) || ((gVar3 == gVar2 && (!booleanValue || !booleanValue2 || booleanValue3)) || !booleanValue || !booleanValue2 || !booleanValue3)) {
            gVar = null;
        } else {
            gVar = gVar3;
        }
        return new a0(this.f21927d, this.f21928e, (Locale) dVar.b(cu.a.f21110c, Locale.ROOT), (cu.v) dVar.b(cu.a.f21114g, cu.v.WIDE), (cu.m) dVar.b(cu.a.f21115h, cu.m.FORMAT), gVar, ((Integer) dVar.b(cu.a.f21126s, 0)).intValue());
    }

    @Override // du.h
    public void d(CharSequence charSequence, s sVar, bu.d dVar, t tVar, boolean z10) {
        int intValue;
        Object l10;
        eu.e eVar;
        int f10 = sVar.f();
        int length = charSequence.length();
        if (z10) {
            intValue = this.f21934s;
        } else {
            intValue = ((Integer) dVar.b(cu.a.f21126s, 0)).intValue();
        }
        if (intValue > 0) {
            length -= intValue;
        }
        if (f10 >= length) {
            sVar.k(f10, "Missing chars for: " + this.f21927d.name());
            sVar.n();
            return;
        }
        if (z10 && (eVar = this.f21929i) != null && this.f21933r != null) {
            l10 = eVar.v(charSequence, sVar.e(), this.f21930o, this.f21931p, this.f21932q, this.f21933r);
        } else {
            cu.t tVar2 = this.f21927d;
            if (tVar2 instanceof eu.a) {
                l10 = ((eu.a) tVar2).r(charSequence, sVar.e(), dVar, tVar);
            } else {
                l10 = tVar2.l(charSequence, sVar.e(), dVar);
            }
        }
        if (sVar.i()) {
            Class type = this.f21927d.getType();
            if (type.isEnum()) {
                int c10 = sVar.c();
                sVar.k(c10, "No suitable enum found: " + type.getName());
                return;
            }
            int c11 = sVar.c();
            sVar.k(c11, "Unparseable element: " + this.f21927d.name());
        } else if (l10 == null) {
            sVar.k(f10, "No interpretable value.");
        } else {
            cu.t tVar3 = this.f21927d;
            if (tVar3 == net.time4j.f0.D) {
                tVar.H(net.time4j.f0.E, ((net.time4j.b0) net.time4j.b0.class.cast(l10)).d());
            } else {
                tVar.I(tVar3, l10);
            }
        }
    }

    @Override // du.h
    public h e(bu.p pVar) {
        if (!this.f21928e && this.f21927d != pVar) {
            if (pVar instanceof cu.t) {
                return b((cu.t) pVar);
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
            if (this.f21927d.equals(a0Var.f21927d) && this.f21928e == a0Var.f21928e) {
                return true;
            }
        }
        return false;
    }

    @Override // du.h
    public boolean f() {
        return false;
    }

    @Override // du.h
    public int g(bu.o oVar, Appendable appendable, bu.d dVar, Set set, boolean z10) {
        if (appendable instanceof CharSequence) {
            CharSequence charSequence = (CharSequence) appendable;
            int length = charSequence.length();
            if (c(oVar, appendable, dVar, z10)) {
                if (set != null) {
                    set.add(new g(this.f21927d, length, charSequence.length()));
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

    @Override // du.h
    public bu.p getElement() {
        return this.f21927d;
    }

    public int hashCode() {
        return this.f21927d.hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(a0.class.getName());
        sb2.append("[element=");
        sb2.append(this.f21927d.name());
        sb2.append(",protected-mode=");
        sb2.append(this.f21928e);
        sb2.append(']');
        return sb2.toString();
    }
}
