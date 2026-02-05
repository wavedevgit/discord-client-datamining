package rt;

import java.util.Locale;
import java.util.Set;
import net.time4j.i0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class z implements h {

    /* renamed from: d  reason: collision with root package name */
    private final c f49243d;

    /* renamed from: e  reason: collision with root package name */
    private final pt.y f49244e;

    /* renamed from: i  reason: collision with root package name */
    private final pt.y f49245i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(pt.y yVar, pt.y yVar2) {
        this(null, yVar, yVar2);
    }

    private static c b(pt.x xVar, pt.y yVar, pt.y yVar2, Locale locale, boolean z10, net.time4j.tz.l lVar) {
        String c10;
        if (xVar.equals(net.time4j.f0.r0())) {
            c10 = qt.b.r((qt.e) yVar, locale);
        } else if (xVar.equals(net.time4j.g0.i0())) {
            c10 = qt.b.t((qt.e) yVar2, locale);
        } else if (xVar.equals(i0.S())) {
            c10 = qt.b.u((qt.e) yVar, (qt.e) yVar2, locale);
        } else if (xVar.equals(net.time4j.a0.T())) {
            c10 = qt.b.s((qt.e) yVar, (qt.e) yVar2, locale);
        } else if (qt.h.class.isAssignableFrom(xVar.r())) {
            c10 = xVar.c(yVar, locale);
        } else {
            throw new UnsupportedOperationException("Localized format patterns not available: " + xVar);
        }
        if (z10 && c10.contains("yy") && !c10.contains("yyy")) {
            c10 = c10.replace("yy", "yyyy");
        }
        c C = c.C(c10, w.CLDR, locale, xVar);
        if (lVar != null) {
            return C.S(lVar);
        }
        return C;
    }

    @Override // rt.h
    public void d(CharSequence charSequence, s sVar, pt.d dVar, t tVar, boolean z10) {
        c b10;
        if (z10) {
            b10 = this.f49243d;
        } else {
            pt.d o10 = this.f49243d.o();
            pt.c cVar = qt.a.f48090e;
            net.time4j.tz.o oVar = (net.time4j.tz.o) dVar.a(cVar, o10.a(cVar, net.time4j.tz.l.f40224o));
            pt.c cVar2 = qt.a.f48089d;
            net.time4j.tz.l lVar = null;
            net.time4j.tz.k kVar = (net.time4j.tz.k) dVar.a(cVar2, o10.a(cVar2, null));
            if (kVar != null) {
                lVar = net.time4j.tz.l.N(kVar).Q(oVar);
            }
            b10 = b(this.f49243d.q(), this.f49244e, this.f49245i, (Locale) dVar.a(qt.a.f48088c, this.f49243d.u()), ((Boolean) dVar.a(qt.a.f48107v, Boolean.FALSE)).booleanValue(), lVar);
        }
        Object b11 = b10.b(charSequence, sVar, dVar);
        if (!sVar.i() && b11 != null) {
            tVar.J(b11);
        }
    }

    @Override // rt.h
    public h e(c cVar, pt.d dVar, int i10) {
        net.time4j.tz.o oVar = (net.time4j.tz.o) dVar.a(qt.a.f48090e, net.time4j.tz.l.f40224o);
        net.time4j.tz.l lVar = null;
        net.time4j.tz.k kVar = (net.time4j.tz.k) dVar.a(qt.a.f48089d, null);
        Locale locale = (Locale) dVar.a(qt.a.f48088c, Locale.ROOT);
        pt.x q10 = cVar.q();
        pt.y yVar = this.f49244e;
        pt.y yVar2 = this.f49245i;
        boolean booleanValue = ((Boolean) dVar.a(qt.a.f48107v, Boolean.FALSE)).booleanValue();
        if (kVar != null) {
            lVar = net.time4j.tz.l.N(kVar).Q(oVar);
        }
        return new z(b(q10, yVar, yVar2, locale, booleanValue, lVar), this.f49244e, this.f49245i);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof z) {
            z zVar = (z) obj;
            if (this.f49244e.equals(zVar.f49244e) && this.f49245i.equals(zVar.f49245i)) {
                c cVar = this.f49243d;
                if (cVar == null) {
                    if (zVar.f49243d == null) {
                        return true;
                    }
                    return false;
                }
                return cVar.equals(zVar.f49243d);
            }
        }
        return false;
    }

    @Override // rt.h
    public int f(pt.o oVar, Appendable appendable, pt.d dVar, Set set, boolean z10) {
        boolean z11;
        c cVar = this.f49243d;
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

    @Override // rt.h
    public boolean g() {
        return false;
    }

    @Override // rt.h
    public pt.p getElement() {
        return null;
    }

    public int hashCode() {
        c cVar = this.f49243d;
        if (cVar == null) {
            return 0;
        }
        return cVar.hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(z.class.getName());
        sb2.append("[date-style=");
        sb2.append(this.f49244e);
        sb2.append(",time-style=");
        sb2.append(this.f49245i);
        sb2.append(",delegate=");
        sb2.append(this.f49243d);
        sb2.append(']');
        return sb2.toString();
    }

    private z(c cVar, pt.y yVar, pt.y yVar2) {
        if (yVar != null && yVar2 != null) {
            this.f49244e = yVar;
            this.f49245i = yVar2;
            this.f49243d = cVar;
            return;
        }
        throw new NullPointerException("Missing display style.");
    }

    @Override // rt.h
    public h a(pt.p pVar) {
        return this;
    }
}
