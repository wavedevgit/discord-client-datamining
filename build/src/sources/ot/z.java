package ot;

import java.util.Locale;
import java.util.Set;
import net.time4j.i0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class z implements h {

    /* renamed from: d  reason: collision with root package name */
    private final c f44794d;

    /* renamed from: e  reason: collision with root package name */
    private final mt.y f44795e;

    /* renamed from: i  reason: collision with root package name */
    private final mt.y f44796i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(mt.y yVar, mt.y yVar2) {
        this(null, yVar, yVar2);
    }

    private static c b(mt.x xVar, mt.y yVar, mt.y yVar2, Locale locale, boolean z10, net.time4j.tz.l lVar) {
        String l10;
        if (xVar.equals(net.time4j.f0.r0())) {
            l10 = nt.b.r((nt.e) yVar, locale);
        } else if (xVar.equals(net.time4j.g0.i0())) {
            l10 = nt.b.t((nt.e) yVar2, locale);
        } else if (xVar.equals(i0.S())) {
            l10 = nt.b.u((nt.e) yVar, (nt.e) yVar2, locale);
        } else if (xVar.equals(net.time4j.a0.T())) {
            l10 = nt.b.s((nt.e) yVar, (nt.e) yVar2, locale);
        } else if (nt.h.class.isAssignableFrom(xVar.r())) {
            l10 = xVar.l(yVar, locale);
        } else {
            throw new UnsupportedOperationException("Localized format patterns not available: " + xVar);
        }
        if (z10 && l10.contains("yy") && !l10.contains("yyy")) {
            l10 = l10.replace("yy", "yyyy");
        }
        c C = c.C(l10, w.CLDR, locale, xVar);
        if (lVar != null) {
            return C.T(lVar);
        }
        return C;
    }

    @Override // ot.h
    public int a(mt.o oVar, Appendable appendable, mt.d dVar, Set set, boolean z10) {
        boolean z11;
        c cVar = this.f44794d;
        if (set != null) {
            z11 = true;
        } else {
            z11 = false;
        }
        Set K = cVar.K(oVar, appendable, dVar, z11);
        if (set != null) {
            set.addAll(K);
            return Integer.MAX_VALUE;
        }
        return Integer.MAX_VALUE;
    }

    @Override // ot.h
    public h d(c cVar, mt.d dVar, int i10) {
        net.time4j.tz.o oVar = (net.time4j.tz.o) dVar.b(nt.a.f42030e, net.time4j.tz.l.f40764o);
        net.time4j.tz.l lVar = null;
        net.time4j.tz.k kVar = (net.time4j.tz.k) dVar.b(nt.a.f42029d, null);
        Locale locale = (Locale) dVar.b(nt.a.f42028c, Locale.ROOT);
        mt.x q10 = cVar.q();
        mt.y yVar = this.f44795e;
        mt.y yVar2 = this.f44796i;
        boolean booleanValue = ((Boolean) dVar.b(nt.a.f42047v, Boolean.FALSE)).booleanValue();
        if (kVar != null) {
            lVar = net.time4j.tz.l.N(kVar).Q(oVar);
        }
        return new z(b(q10, yVar, yVar2, locale, booleanValue, lVar), this.f44795e, this.f44796i);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof z) {
            z zVar = (z) obj;
            if (this.f44795e.equals(zVar.f44795e) && this.f44796i.equals(zVar.f44796i)) {
                c cVar = this.f44794d;
                if (cVar == null) {
                    if (zVar.f44794d == null) {
                        return true;
                    }
                    return false;
                }
                return cVar.equals(zVar.f44794d);
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
        c b10;
        if (z10) {
            b10 = this.f44794d;
        } else {
            mt.d o10 = this.f44794d.o();
            mt.c cVar = nt.a.f42030e;
            net.time4j.tz.o oVar = (net.time4j.tz.o) dVar.b(cVar, o10.b(cVar, net.time4j.tz.l.f40764o));
            mt.c cVar2 = nt.a.f42029d;
            net.time4j.tz.l lVar = null;
            net.time4j.tz.k kVar = (net.time4j.tz.k) dVar.b(cVar2, o10.b(cVar2, null));
            if (kVar != null) {
                lVar = net.time4j.tz.l.N(kVar).Q(oVar);
            }
            b10 = b(this.f44794d.q(), this.f44795e, this.f44796i, (Locale) dVar.b(nt.a.f42028c, this.f44794d.u()), ((Boolean) dVar.b(nt.a.f42047v, Boolean.FALSE)).booleanValue(), lVar);
        }
        Object b11 = b10.b(charSequence, sVar, dVar);
        if (!sVar.i() && b11 != null) {
            tVar.J(b11);
        }
    }

    @Override // ot.h
    public mt.p getElement() {
        return null;
    }

    public int hashCode() {
        c cVar = this.f44794d;
        if (cVar == null) {
            return 0;
        }
        return cVar.hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(z.class.getName());
        sb2.append("[date-style=");
        sb2.append(this.f44795e);
        sb2.append(",time-style=");
        sb2.append(this.f44796i);
        sb2.append(",delegate=");
        sb2.append(this.f44794d);
        sb2.append(']');
        return sb2.toString();
    }

    private z(c cVar, mt.y yVar, mt.y yVar2) {
        if (yVar != null && yVar2 != null) {
            this.f44795e = yVar;
            this.f44796i = yVar2;
            this.f44794d = cVar;
            return;
        }
        throw new NullPointerException("Missing display style.");
    }

    @Override // ot.h
    public h e(mt.p pVar) {
        return this;
    }
}
