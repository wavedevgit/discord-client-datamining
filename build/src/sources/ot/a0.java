package ot;

import java.util.Locale;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a0 implements h {

    /* renamed from: d  reason: collision with root package name */
    private final nt.t f44560d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f44561e;

    /* renamed from: i  reason: collision with root package name */
    private final pt.e f44562i;

    /* renamed from: o  reason: collision with root package name */
    private final Locale f44563o;

    /* renamed from: p  reason: collision with root package name */
    private final nt.v f44564p;

    /* renamed from: q  reason: collision with root package name */
    private final nt.m f44565q;

    /* renamed from: r  reason: collision with root package name */
    private final nt.g f44566r;

    /* renamed from: s  reason: collision with root package name */
    private final int f44567s;

    private a0(nt.t tVar, boolean z10, Locale locale, nt.v vVar, nt.m mVar, nt.g gVar, int i10) {
        pt.e eVar;
        if (tVar != null) {
            this.f44560d = tVar;
            this.f44561e = z10;
            if (tVar instanceof pt.e) {
                eVar = (pt.e) tVar;
            } else {
                eVar = null;
            }
            this.f44562i = eVar;
            this.f44563o = locale;
            this.f44564p = vVar;
            this.f44565q = mVar;
            this.f44566r = gVar;
            this.f44567s = i10;
            return;
        }
        throw new NullPointerException("Missing element.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static a0 b(nt.t tVar) {
        return new a0(tVar, false, Locale.ROOT, nt.v.WIDE, nt.m.FORMAT, nt.g.SMART, 0);
    }

    private boolean c(mt.o oVar, Appendable appendable, mt.d dVar, boolean z10) {
        pt.e eVar = this.f44562i;
        if (eVar != null && z10) {
            eVar.v(oVar, appendable, this.f44563o, this.f44564p, this.f44565q);
            return true;
        } else if (oVar.q(this.f44560d)) {
            this.f44560d.s(oVar, appendable, dVar);
            return true;
        } else {
            return false;
        }
    }

    @Override // ot.h
    public int a(mt.o oVar, Appendable appendable, mt.d dVar, Set set, boolean z10) {
        if (appendable instanceof CharSequence) {
            CharSequence charSequence = (CharSequence) appendable;
            int length = charSequence.length();
            if (c(oVar, appendable, dVar, z10)) {
                if (set != null) {
                    set.add(new g(this.f44560d, length, charSequence.length()));
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

    @Override // ot.h
    public h d(c cVar, mt.d dVar, int i10) {
        nt.g gVar;
        mt.c cVar2 = nt.a.f42031f;
        nt.g gVar2 = nt.g.SMART;
        nt.g gVar3 = (nt.g) dVar.b(cVar2, gVar2);
        mt.c cVar3 = nt.a.f42036k;
        Boolean bool = Boolean.TRUE;
        boolean booleanValue = ((Boolean) dVar.b(cVar3, bool)).booleanValue();
        boolean booleanValue2 = ((Boolean) dVar.b(nt.a.f42034i, bool)).booleanValue();
        boolean booleanValue3 = ((Boolean) dVar.b(nt.a.f42035j, Boolean.FALSE)).booleanValue();
        if ((gVar3 == nt.g.STRICT && (booleanValue || booleanValue2 || booleanValue3)) || ((gVar3 == gVar2 && (!booleanValue || !booleanValue2 || booleanValue3)) || !booleanValue || !booleanValue2 || !booleanValue3)) {
            gVar = null;
        } else {
            gVar = gVar3;
        }
        return new a0(this.f44560d, this.f44561e, (Locale) dVar.b(nt.a.f42028c, Locale.ROOT), (nt.v) dVar.b(nt.a.f42032g, nt.v.WIDE), (nt.m) dVar.b(nt.a.f42033h, nt.m.FORMAT), gVar, ((Integer) dVar.b(nt.a.f42044s, 0)).intValue());
    }

    @Override // ot.h
    public h e(mt.p pVar) {
        if (!this.f44561e && this.f44560d != pVar) {
            if (pVar instanceof nt.t) {
                return b((nt.t) pVar);
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
            if (this.f44560d.equals(a0Var.f44560d) && this.f44561e == a0Var.f44561e) {
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
        int intValue;
        Object j10;
        pt.e eVar;
        int f10 = sVar.f();
        int length = charSequence.length();
        if (z10) {
            intValue = this.f44567s;
        } else {
            intValue = ((Integer) dVar.b(nt.a.f42044s, 0)).intValue();
        }
        if (intValue > 0) {
            length -= intValue;
        }
        if (f10 >= length) {
            sVar.k(f10, "Missing chars for: " + this.f44560d.name());
            sVar.n();
            return;
        }
        if (z10 && (eVar = this.f44562i) != null && this.f44566r != null) {
            j10 = eVar.g(charSequence, sVar.e(), this.f44563o, this.f44564p, this.f44565q, this.f44566r);
        } else {
            nt.t tVar2 = this.f44560d;
            if (tVar2 instanceof pt.a) {
                j10 = ((pt.a) tVar2).u(charSequence, sVar.e(), dVar, tVar);
            } else {
                j10 = tVar2.j(charSequence, sVar.e(), dVar);
            }
        }
        if (sVar.i()) {
            Class type = this.f44560d.getType();
            if (type.isEnum()) {
                int c10 = sVar.c();
                sVar.k(c10, "No suitable enum found: " + type.getName());
                return;
            }
            int c11 = sVar.c();
            sVar.k(c11, "Unparseable element: " + this.f44560d.name());
        } else if (j10 == null) {
            sVar.k(f10, "No interpretable value.");
        } else {
            nt.t tVar3 = this.f44560d;
            if (tVar3 == net.time4j.f0.D) {
                tVar.H(net.time4j.f0.E, ((net.time4j.b0) net.time4j.b0.class.cast(j10)).d());
            } else {
                tVar.I(tVar3, j10);
            }
        }
    }

    @Override // ot.h
    public mt.p getElement() {
        return this.f44560d;
    }

    public int hashCode() {
        return this.f44560d.hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(a0.class.getName());
        sb2.append("[element=");
        sb2.append(this.f44560d.name());
        sb2.append(",protected-mode=");
        sb2.append(this.f44561e);
        sb2.append(']');
        return sb2.toString();
    }
}
