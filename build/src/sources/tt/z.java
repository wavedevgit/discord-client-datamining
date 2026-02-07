package tt;

import java.util.Locale;
import java.util.Set;
import net.time4j.i0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class z implements h {

    /* renamed from: d  reason: collision with root package name */
    private final c f51154d;

    /* renamed from: e  reason: collision with root package name */
    private final rt.y f51155e;

    /* renamed from: i  reason: collision with root package name */
    private final rt.y f51156i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(rt.y yVar, rt.y yVar2) {
        this(null, yVar, yVar2);
    }

    private static c b(rt.x xVar, rt.y yVar, rt.y yVar2, Locale locale, boolean z10, net.time4j.tz.l lVar) {
        String b10;
        if (xVar.equals(net.time4j.f0.r0())) {
            b10 = st.b.r((st.e) yVar, locale);
        } else if (xVar.equals(net.time4j.g0.i0())) {
            b10 = st.b.t((st.e) yVar2, locale);
        } else if (xVar.equals(i0.S())) {
            b10 = st.b.u((st.e) yVar, (st.e) yVar2, locale);
        } else if (xVar.equals(net.time4j.a0.T())) {
            b10 = st.b.s((st.e) yVar, (st.e) yVar2, locale);
        } else if (st.h.class.isAssignableFrom(xVar.p())) {
            b10 = xVar.b(yVar, locale);
        } else {
            throw new UnsupportedOperationException("Localized format patterns not available: " + xVar);
        }
        if (z10 && b10.contains("yy") && !b10.contains("yyy")) {
            b10 = b10.replace("yy", "yyyy");
        }
        c C = c.C(b10, w.CLDR, locale, xVar);
        if (lVar != null) {
            return C.S(lVar);
        }
        return C;
    }

    @Override // tt.h
    public void a(CharSequence charSequence, s sVar, rt.d dVar, t tVar, boolean z10) {
        c b10;
        if (z10) {
            b10 = this.f51154d;
        } else {
            rt.d o10 = this.f51154d.o();
            rt.c cVar = st.a.f50162e;
            net.time4j.tz.o oVar = (net.time4j.tz.o) dVar.b(cVar, o10.b(cVar, net.time4j.tz.l.f39627o));
            rt.c cVar2 = st.a.f50161d;
            net.time4j.tz.l lVar = null;
            net.time4j.tz.k kVar = (net.time4j.tz.k) dVar.b(cVar2, o10.b(cVar2, null));
            if (kVar != null) {
                lVar = net.time4j.tz.l.N(kVar).Q(oVar);
            }
            b10 = b(this.f51154d.q(), this.f51155e, this.f51156i, (Locale) dVar.b(st.a.f50160c, this.f51154d.u()), ((Boolean) dVar.b(st.a.f50179v, Boolean.FALSE)).booleanValue(), lVar);
        }
        Object a10 = b10.a(charSequence, sVar, dVar);
        if (!sVar.i() && a10 != null) {
            tVar.J(a10);
        }
    }

    @Override // tt.h
    public h e(c cVar, rt.d dVar, int i10) {
        net.time4j.tz.o oVar = (net.time4j.tz.o) dVar.b(st.a.f50162e, net.time4j.tz.l.f39627o);
        net.time4j.tz.l lVar = null;
        net.time4j.tz.k kVar = (net.time4j.tz.k) dVar.b(st.a.f50161d, null);
        Locale locale = (Locale) dVar.b(st.a.f50160c, Locale.ROOT);
        rt.x q10 = cVar.q();
        rt.y yVar = this.f51155e;
        rt.y yVar2 = this.f51156i;
        boolean booleanValue = ((Boolean) dVar.b(st.a.f50179v, Boolean.FALSE)).booleanValue();
        if (kVar != null) {
            lVar = net.time4j.tz.l.N(kVar).Q(oVar);
        }
        return new z(b(q10, yVar, yVar2, locale, booleanValue, lVar), this.f51155e, this.f51156i);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof z) {
            z zVar = (z) obj;
            if (this.f51155e.equals(zVar.f51155e) && this.f51156i.equals(zVar.f51156i)) {
                c cVar = this.f51154d;
                if (cVar == null) {
                    if (zVar.f51154d == null) {
                        return true;
                    }
                    return false;
                }
                return cVar.equals(zVar.f51154d);
            }
        }
        return false;
    }

    @Override // tt.h
    public int f(rt.o oVar, Appendable appendable, rt.d dVar, Set set, boolean z10) {
        boolean z11;
        c cVar = this.f51154d;
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

    @Override // tt.h
    public boolean g() {
        return false;
    }

    @Override // tt.h
    public rt.p getElement() {
        return null;
    }

    public int hashCode() {
        c cVar = this.f51154d;
        if (cVar == null) {
            return 0;
        }
        return cVar.hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(z.class.getName());
        sb2.append("[date-style=");
        sb2.append(this.f51155e);
        sb2.append(",time-style=");
        sb2.append(this.f51156i);
        sb2.append(",delegate=");
        sb2.append(this.f51154d);
        sb2.append(']');
        return sb2.toString();
    }

    private z(c cVar, rt.y yVar, rt.y yVar2) {
        if (yVar != null && yVar2 != null) {
            this.f51155e = yVar;
            this.f51156i = yVar2;
            this.f51154d = cVar;
            return;
        }
        throw new NullPointerException("Missing display style.");
    }

    @Override // tt.h
    public h d(rt.p pVar) {
        return this;
    }
}
