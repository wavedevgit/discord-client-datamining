package lt;

import java.util.Locale;
import java.util.Set;
import net.time4j.i0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class z implements h {

    /* renamed from: d  reason: collision with root package name */
    private final c f37723d;

    /* renamed from: e  reason: collision with root package name */
    private final jt.y f37724e;

    /* renamed from: i  reason: collision with root package name */
    private final jt.y f37725i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(jt.y yVar, jt.y yVar2) {
        this(null, yVar, yVar2);
    }

    private static c b(jt.x xVar, jt.y yVar, jt.y yVar2, Locale locale, boolean z10, net.time4j.tz.l lVar) {
        String k10;
        if (xVar.equals(net.time4j.f0.r0())) {
            k10 = kt.b.r((kt.e) yVar, locale);
        } else if (xVar.equals(net.time4j.g0.i0())) {
            k10 = kt.b.t((kt.e) yVar2, locale);
        } else if (xVar.equals(i0.S())) {
            k10 = kt.b.u((kt.e) yVar, (kt.e) yVar2, locale);
        } else if (xVar.equals(net.time4j.a0.T())) {
            k10 = kt.b.s((kt.e) yVar, (kt.e) yVar2, locale);
        } else if (kt.h.class.isAssignableFrom(xVar.p())) {
            k10 = xVar.k(yVar, locale);
        } else {
            throw new UnsupportedOperationException("Localized format patterns not available: " + xVar);
        }
        if (z10 && k10.contains("yy") && !k10.contains("yyy")) {
            k10 = k10.replace("yy", "yyyy");
        }
        c C = c.C(k10, w.CLDR, locale, xVar);
        if (lVar != null) {
            return C.U(lVar);
        }
        return C;
    }

    @Override // lt.h
    public h a(c cVar, jt.d dVar, int i10) {
        net.time4j.tz.o oVar = (net.time4j.tz.o) dVar.b(kt.a.f36532e, net.time4j.tz.l.f40846o);
        net.time4j.tz.l lVar = null;
        net.time4j.tz.k kVar = (net.time4j.tz.k) dVar.b(kt.a.f36531d, null);
        Locale locale = (Locale) dVar.b(kt.a.f36530c, Locale.ROOT);
        jt.x q10 = cVar.q();
        jt.y yVar = this.f37724e;
        jt.y yVar2 = this.f37725i;
        boolean booleanValue = ((Boolean) dVar.b(kt.a.f36549v, Boolean.FALSE)).booleanValue();
        if (kVar != null) {
            lVar = net.time4j.tz.l.N(kVar).Q(oVar);
        }
        return new z(b(q10, yVar, yVar2, locale, booleanValue, lVar), this.f37724e, this.f37725i);
    }

    @Override // lt.h
    public int d(jt.o oVar, Appendable appendable, jt.d dVar, Set set, boolean z10) {
        boolean z11;
        c cVar = this.f37723d;
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

    @Override // lt.h
    public void e(CharSequence charSequence, s sVar, jt.d dVar, t tVar, boolean z10) {
        c b10;
        if (z10) {
            b10 = this.f37723d;
        } else {
            jt.d o10 = this.f37723d.o();
            jt.c cVar = kt.a.f36532e;
            net.time4j.tz.o oVar = (net.time4j.tz.o) dVar.b(cVar, o10.b(cVar, net.time4j.tz.l.f40846o));
            jt.c cVar2 = kt.a.f36531d;
            net.time4j.tz.l lVar = null;
            net.time4j.tz.k kVar = (net.time4j.tz.k) dVar.b(cVar2, o10.b(cVar2, null));
            if (kVar != null) {
                lVar = net.time4j.tz.l.N(kVar).Q(oVar);
            }
            b10 = b(this.f37723d.q(), this.f37724e, this.f37725i, (Locale) dVar.b(kt.a.f36530c, this.f37723d.u()), ((Boolean) dVar.b(kt.a.f36549v, Boolean.FALSE)).booleanValue(), lVar);
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
            if (this.f37724e.equals(zVar.f37724e) && this.f37725i.equals(zVar.f37725i)) {
                c cVar = this.f37723d;
                if (cVar == null) {
                    if (zVar.f37723d == null) {
                        return true;
                    }
                    return false;
                }
                return cVar.equals(zVar.f37723d);
            }
        }
        return false;
    }

    @Override // lt.h
    public boolean f() {
        return false;
    }

    @Override // lt.h
    public jt.p getElement() {
        return null;
    }

    public int hashCode() {
        c cVar = this.f37723d;
        if (cVar == null) {
            return 0;
        }
        return cVar.hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(z.class.getName());
        sb2.append("[date-style=");
        sb2.append(this.f37724e);
        sb2.append(",time-style=");
        sb2.append(this.f37725i);
        sb2.append(",delegate=");
        sb2.append(this.f37723d);
        sb2.append(']');
        return sb2.toString();
    }

    private z(c cVar, jt.y yVar, jt.y yVar2) {
        if (yVar != null && yVar2 != null) {
            this.f37724e = yVar;
            this.f37725i = yVar2;
            this.f37723d = cVar;
            return;
        }
        throw new NullPointerException("Missing display style.");
    }

    @Override // lt.h
    public h g(jt.p pVar) {
        return this;
    }
}
