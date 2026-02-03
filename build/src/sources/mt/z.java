package mt;

import java.util.Locale;
import java.util.Set;
import net.time4j.i0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class z implements h {

    /* renamed from: d  reason: collision with root package name */
    private final c f39439d;

    /* renamed from: e  reason: collision with root package name */
    private final kt.y f39440e;

    /* renamed from: i  reason: collision with root package name */
    private final kt.y f39441i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(kt.y yVar, kt.y yVar2) {
        this(null, yVar, yVar2);
    }

    private static c b(kt.x xVar, kt.y yVar, kt.y yVar2, Locale locale, boolean z10, net.time4j.tz.l lVar) {
        String g10;
        if (xVar.equals(net.time4j.f0.r0())) {
            g10 = lt.b.r((lt.e) yVar, locale);
        } else if (xVar.equals(net.time4j.g0.i0())) {
            g10 = lt.b.t((lt.e) yVar2, locale);
        } else if (xVar.equals(i0.S())) {
            g10 = lt.b.u((lt.e) yVar, (lt.e) yVar2, locale);
        } else if (xVar.equals(net.time4j.a0.T())) {
            g10 = lt.b.s((lt.e) yVar, (lt.e) yVar2, locale);
        } else if (lt.h.class.isAssignableFrom(xVar.o())) {
            g10 = xVar.g(yVar, locale);
        } else {
            throw new UnsupportedOperationException("Localized format patterns not available: " + xVar);
        }
        if (z10 && g10.contains("yy") && !g10.contains("yyy")) {
            g10 = g10.replace("yy", "yyyy");
        }
        c C = c.C(g10, w.CLDR, locale, xVar);
        if (lVar != null) {
            return C.U(lVar);
        }
        return C;
    }

    @Override // mt.h
    public int d(kt.o oVar, Appendable appendable, kt.d dVar, Set set, boolean z10) {
        boolean z11;
        c cVar = this.f39439d;
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

    @Override // mt.h
    public h e(c cVar, kt.d dVar, int i10) {
        net.time4j.tz.o oVar = (net.time4j.tz.o) dVar.a(lt.a.f37630e, net.time4j.tz.l.f40725o);
        net.time4j.tz.l lVar = null;
        net.time4j.tz.k kVar = (net.time4j.tz.k) dVar.a(lt.a.f37629d, null);
        Locale locale = (Locale) dVar.a(lt.a.f37628c, Locale.ROOT);
        kt.x q10 = cVar.q();
        kt.y yVar = this.f39440e;
        kt.y yVar2 = this.f39441i;
        boolean booleanValue = ((Boolean) dVar.a(lt.a.f37647v, Boolean.FALSE)).booleanValue();
        if (kVar != null) {
            lVar = net.time4j.tz.l.N(kVar).Q(oVar);
        }
        return new z(b(q10, yVar, yVar2, locale, booleanValue, lVar), this.f39440e, this.f39441i);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof z) {
            z zVar = (z) obj;
            if (this.f39440e.equals(zVar.f39440e) && this.f39441i.equals(zVar.f39441i)) {
                c cVar = this.f39439d;
                if (cVar == null) {
                    if (zVar.f39439d == null) {
                        return true;
                    }
                    return false;
                }
                return cVar.equals(zVar.f39439d);
            }
        }
        return false;
    }

    @Override // mt.h
    public void f(CharSequence charSequence, s sVar, kt.d dVar, t tVar, boolean z10) {
        c b10;
        if (z10) {
            b10 = this.f39439d;
        } else {
            kt.d o10 = this.f39439d.o();
            kt.c cVar = lt.a.f37630e;
            net.time4j.tz.o oVar = (net.time4j.tz.o) dVar.a(cVar, o10.a(cVar, net.time4j.tz.l.f40725o));
            kt.c cVar2 = lt.a.f37629d;
            net.time4j.tz.l lVar = null;
            net.time4j.tz.k kVar = (net.time4j.tz.k) dVar.a(cVar2, o10.a(cVar2, null));
            if (kVar != null) {
                lVar = net.time4j.tz.l.N(kVar).Q(oVar);
            }
            b10 = b(this.f39439d.q(), this.f39440e, this.f39441i, (Locale) dVar.a(lt.a.f37628c, this.f39439d.u()), ((Boolean) dVar.a(lt.a.f37647v, Boolean.FALSE)).booleanValue(), lVar);
        }
        Object a10 = b10.a(charSequence, sVar, dVar);
        if (!sVar.i() && a10 != null) {
            tVar.J(a10);
        }
    }

    @Override // mt.h
    public boolean g() {
        return false;
    }

    @Override // mt.h
    public kt.p getElement() {
        return null;
    }

    public int hashCode() {
        c cVar = this.f39439d;
        if (cVar == null) {
            return 0;
        }
        return cVar.hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(z.class.getName());
        sb2.append("[date-style=");
        sb2.append(this.f39440e);
        sb2.append(",time-style=");
        sb2.append(this.f39441i);
        sb2.append(",delegate=");
        sb2.append(this.f39439d);
        sb2.append(']');
        return sb2.toString();
    }

    private z(c cVar, kt.y yVar, kt.y yVar2) {
        if (yVar != null && yVar2 != null) {
            this.f39440e = yVar;
            this.f39441i = yVar2;
            this.f39439d = cVar;
            return;
        }
        throw new NullPointerException("Missing display style.");
    }

    @Override // mt.h
    public h a(kt.p pVar) {
        return this;
    }
}
