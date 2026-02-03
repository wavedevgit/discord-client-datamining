package mt;

import java.util.Locale;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a0 implements h {

    /* renamed from: d  reason: collision with root package name */
    private final lt.t f39205d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f39206e;

    /* renamed from: i  reason: collision with root package name */
    private final nt.e f39207i;

    /* renamed from: o  reason: collision with root package name */
    private final Locale f39208o;

    /* renamed from: p  reason: collision with root package name */
    private final lt.v f39209p;

    /* renamed from: q  reason: collision with root package name */
    private final lt.m f39210q;

    /* renamed from: r  reason: collision with root package name */
    private final lt.g f39211r;

    /* renamed from: s  reason: collision with root package name */
    private final int f39212s;

    private a0(lt.t tVar, boolean z10, Locale locale, lt.v vVar, lt.m mVar, lt.g gVar, int i10) {
        nt.e eVar;
        if (tVar != null) {
            this.f39205d = tVar;
            this.f39206e = z10;
            if (tVar instanceof nt.e) {
                eVar = (nt.e) tVar;
            } else {
                eVar = null;
            }
            this.f39207i = eVar;
            this.f39208o = locale;
            this.f39209p = vVar;
            this.f39210q = mVar;
            this.f39211r = gVar;
            this.f39212s = i10;
            return;
        }
        throw new NullPointerException("Missing element.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static a0 b(lt.t tVar) {
        return new a0(tVar, false, Locale.ROOT, lt.v.WIDE, lt.m.FORMAT, lt.g.SMART, 0);
    }

    private boolean c(kt.o oVar, Appendable appendable, kt.d dVar, boolean z10) {
        nt.e eVar = this.f39207i;
        if (eVar != null && z10) {
            eVar.w(oVar, appendable, this.f39208o, this.f39209p, this.f39210q);
            return true;
        } else if (oVar.s(this.f39205d)) {
            this.f39205d.s(oVar, appendable, dVar);
            return true;
        } else {
            return false;
        }
    }

    @Override // mt.h
    public h a(kt.p pVar) {
        if (!this.f39206e && this.f39205d != pVar) {
            if (pVar instanceof lt.t) {
                return b((lt.t) pVar);
            }
            throw new IllegalArgumentException("Text element required: " + pVar.getClass().getName());
        }
        return this;
    }

    @Override // mt.h
    public int d(kt.o oVar, Appendable appendable, kt.d dVar, Set set, boolean z10) {
        if (appendable instanceof CharSequence) {
            CharSequence charSequence = (CharSequence) appendable;
            int length = charSequence.length();
            if (c(oVar, appendable, dVar, z10)) {
                if (set != null) {
                    set.add(new g(this.f39205d, length, charSequence.length()));
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

    @Override // mt.h
    public h e(c cVar, kt.d dVar, int i10) {
        lt.g gVar;
        kt.c cVar2 = lt.a.f37631f;
        lt.g gVar2 = lt.g.SMART;
        lt.g gVar3 = (lt.g) dVar.a(cVar2, gVar2);
        kt.c cVar3 = lt.a.f37636k;
        Boolean bool = Boolean.TRUE;
        boolean booleanValue = ((Boolean) dVar.a(cVar3, bool)).booleanValue();
        boolean booleanValue2 = ((Boolean) dVar.a(lt.a.f37634i, bool)).booleanValue();
        boolean booleanValue3 = ((Boolean) dVar.a(lt.a.f37635j, Boolean.FALSE)).booleanValue();
        if ((gVar3 == lt.g.STRICT && (booleanValue || booleanValue2 || booleanValue3)) || ((gVar3 == gVar2 && (!booleanValue || !booleanValue2 || booleanValue3)) || !booleanValue || !booleanValue2 || !booleanValue3)) {
            gVar = null;
        } else {
            gVar = gVar3;
        }
        return new a0(this.f39205d, this.f39206e, (Locale) dVar.a(lt.a.f37628c, Locale.ROOT), (lt.v) dVar.a(lt.a.f37632g, lt.v.WIDE), (lt.m) dVar.a(lt.a.f37633h, lt.m.FORMAT), gVar, ((Integer) dVar.a(lt.a.f37644s, 0)).intValue());
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a0) {
            a0 a0Var = (a0) obj;
            if (this.f39205d.equals(a0Var.f39205d) && this.f39206e == a0Var.f39206e) {
                return true;
            }
        }
        return false;
    }

    @Override // mt.h
    public void f(CharSequence charSequence, s sVar, kt.d dVar, t tVar, boolean z10) {
        int intValue;
        Object k10;
        nt.e eVar;
        int f10 = sVar.f();
        int length = charSequence.length();
        if (z10) {
            intValue = this.f39212s;
        } else {
            intValue = ((Integer) dVar.a(lt.a.f37644s, 0)).intValue();
        }
        if (intValue > 0) {
            length -= intValue;
        }
        if (f10 >= length) {
            sVar.k(f10, "Missing chars for: " + this.f39205d.name());
            sVar.n();
            return;
        }
        if (z10 && (eVar = this.f39207i) != null && this.f39211r != null) {
            k10 = eVar.p(charSequence, sVar.e(), this.f39208o, this.f39209p, this.f39210q, this.f39211r);
        } else {
            lt.t tVar2 = this.f39205d;
            if (tVar2 instanceof nt.a) {
                k10 = ((nt.a) tVar2).z(charSequence, sVar.e(), dVar, tVar);
            } else {
                k10 = tVar2.k(charSequence, sVar.e(), dVar);
            }
        }
        if (sVar.i()) {
            Class type = this.f39205d.getType();
            if (type.isEnum()) {
                int c10 = sVar.c();
                sVar.k(c10, "No suitable enum found: " + type.getName());
                return;
            }
            int c11 = sVar.c();
            sVar.k(c11, "Unparseable element: " + this.f39205d.name());
        } else if (k10 == null) {
            sVar.k(f10, "No interpretable value.");
        } else {
            lt.t tVar3 = this.f39205d;
            if (tVar3 == net.time4j.f0.D) {
                tVar.H(net.time4j.f0.E, ((net.time4j.b0) net.time4j.b0.class.cast(k10)).d());
            } else {
                tVar.I(tVar3, k10);
            }
        }
    }

    @Override // mt.h
    public boolean g() {
        return false;
    }

    @Override // mt.h
    public kt.p getElement() {
        return this.f39205d;
    }

    public int hashCode() {
        return this.f39205d.hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(a0.class.getName());
        sb2.append("[element=");
        sb2.append(this.f39205d.name());
        sb2.append(",protected-mode=");
        sb2.append(this.f39206e);
        sb2.append(']');
        return sb2.toString();
    }
}
