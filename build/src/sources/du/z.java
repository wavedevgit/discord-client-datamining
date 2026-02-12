package du;

import java.util.Locale;
import java.util.Set;
import net.time4j.i0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class z implements h {

    /* renamed from: d  reason: collision with root package name */
    private final c f22162d;

    /* renamed from: e  reason: collision with root package name */
    private final bu.y f22163e;

    /* renamed from: i  reason: collision with root package name */
    private final bu.y f22164i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(bu.y yVar, bu.y yVar2) {
        this(null, yVar, yVar2);
    }

    private static c b(bu.x xVar, bu.y yVar, bu.y yVar2, Locale locale, boolean z10, net.time4j.tz.l lVar) {
        String j10;
        if (xVar.equals(net.time4j.f0.r0())) {
            j10 = cu.b.r((cu.e) yVar, locale);
        } else if (xVar.equals(net.time4j.g0.i0())) {
            j10 = cu.b.t((cu.e) yVar2, locale);
        } else if (xVar.equals(i0.S())) {
            j10 = cu.b.u((cu.e) yVar, (cu.e) yVar2, locale);
        } else if (xVar.equals(net.time4j.a0.T())) {
            j10 = cu.b.s((cu.e) yVar, (cu.e) yVar2, locale);
        } else if (cu.h.class.isAssignableFrom(xVar.q())) {
            j10 = xVar.j(yVar, locale);
        } else {
            throw new UnsupportedOperationException("Localized format patterns not available: " + xVar);
        }
        if (z10 && j10.contains("yy") && !j10.contains("yyy")) {
            j10 = j10.replace("yy", "yyyy");
        }
        c C = c.C(j10, w.CLDR, locale, xVar);
        if (lVar != null) {
            return C.U(lVar);
        }
        return C;
    }

    @Override // du.h
    public h a(c cVar, bu.d dVar, int i10) {
        net.time4j.tz.o oVar = (net.time4j.tz.o) dVar.b(cu.a.f21113e, net.time4j.tz.l.f37724o);
        net.time4j.tz.l lVar = null;
        net.time4j.tz.k kVar = (net.time4j.tz.k) dVar.b(cu.a.f21112d, null);
        Locale locale = (Locale) dVar.b(cu.a.f21111c, Locale.ROOT);
        bu.x q10 = cVar.q();
        bu.y yVar = this.f22163e;
        bu.y yVar2 = this.f22164i;
        boolean booleanValue = ((Boolean) dVar.b(cu.a.f21130v, Boolean.FALSE)).booleanValue();
        if (kVar != null) {
            lVar = net.time4j.tz.l.N(kVar).Q(oVar);
        }
        return new z(b(q10, yVar, yVar2, locale, booleanValue, lVar), this.f22163e, this.f22164i);
    }

    @Override // du.h
    public void d(CharSequence charSequence, s sVar, bu.d dVar, t tVar, boolean z10) {
        c b10;
        if (z10) {
            b10 = this.f22162d;
        } else {
            bu.d o10 = this.f22162d.o();
            bu.c cVar = cu.a.f21113e;
            net.time4j.tz.o oVar = (net.time4j.tz.o) dVar.b(cVar, o10.b(cVar, net.time4j.tz.l.f37724o));
            bu.c cVar2 = cu.a.f21112d;
            net.time4j.tz.l lVar = null;
            net.time4j.tz.k kVar = (net.time4j.tz.k) dVar.b(cVar2, o10.b(cVar2, null));
            if (kVar != null) {
                lVar = net.time4j.tz.l.N(kVar).Q(oVar);
            }
            b10 = b(this.f22162d.q(), this.f22163e, this.f22164i, (Locale) dVar.b(cu.a.f21111c, this.f22162d.u()), ((Boolean) dVar.b(cu.a.f21130v, Boolean.FALSE)).booleanValue(), lVar);
        }
        Object a10 = b10.a(charSequence, sVar, dVar);
        if (!sVar.i() && a10 != null) {
            tVar.J(a10);
        }
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof z) {
            z zVar = (z) obj;
            if (this.f22163e.equals(zVar.f22163e) && this.f22164i.equals(zVar.f22164i)) {
                c cVar = this.f22162d;
                if (cVar == null) {
                    if (zVar.f22162d == null) {
                        return true;
                    }
                    return false;
                }
                return cVar.equals(zVar.f22162d);
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
        boolean z11;
        c cVar = this.f22162d;
        if (set != null) {
            z11 = true;
        } else {
            z11 = false;
        }
        Set J = cVar.J(oVar, appendable, dVar, z11);
        if (set != null) {
            set.addAll(J);
            return Integer.MAX_VALUE;
        }
        return Integer.MAX_VALUE;
    }

    @Override // du.h
    public bu.p getElement() {
        return null;
    }

    public int hashCode() {
        c cVar = this.f22162d;
        if (cVar == null) {
            return 0;
        }
        return cVar.hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(z.class.getName());
        sb2.append("[date-style=");
        sb2.append(this.f22163e);
        sb2.append(",time-style=");
        sb2.append(this.f22164i);
        sb2.append(",delegate=");
        sb2.append(this.f22162d);
        sb2.append(']');
        return sb2.toString();
    }

    private z(c cVar, bu.y yVar, bu.y yVar2) {
        if (yVar != null && yVar2 != null) {
            this.f22163e = yVar;
            this.f22164i = yVar2;
            this.f22162d = cVar;
            return;
        }
        throw new NullPointerException("Missing display style.");
    }

    @Override // du.h
    public h e(bu.p pVar) {
        return this;
    }
}
