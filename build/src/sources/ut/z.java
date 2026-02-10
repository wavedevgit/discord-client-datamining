package ut;

import java.util.Locale;
import java.util.Set;
import net.time4j.i0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class z implements h {

    /* renamed from: d  reason: collision with root package name */
    private final c f52059d;

    /* renamed from: e  reason: collision with root package name */
    private final st.y f52060e;

    /* renamed from: i  reason: collision with root package name */
    private final st.y f52061i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(st.y yVar, st.y yVar2) {
        this(null, yVar, yVar2);
    }

    private static c b(st.x xVar, st.y yVar, st.y yVar2, Locale locale, boolean z10, net.time4j.tz.l lVar) {
        String g10;
        if (xVar.equals(net.time4j.f0.r0())) {
            g10 = tt.b.r((tt.e) yVar, locale);
        } else if (xVar.equals(net.time4j.g0.i0())) {
            g10 = tt.b.t((tt.e) yVar2, locale);
        } else if (xVar.equals(i0.S())) {
            g10 = tt.b.u((tt.e) yVar, (tt.e) yVar2, locale);
        } else if (xVar.equals(net.time4j.a0.T())) {
            g10 = tt.b.s((tt.e) yVar, (tt.e) yVar2, locale);
        } else if (tt.h.class.isAssignableFrom(xVar.n())) {
            g10 = xVar.g(yVar, locale);
        } else {
            throw new UnsupportedOperationException("Localized format patterns not available: " + xVar);
        }
        if (z10 && g10.contains("yy") && !g10.contains("yyy")) {
            g10 = g10.replace("yy", "yyyy");
        }
        c C = c.C(g10, w.CLDR, locale, xVar);
        if (lVar != null) {
            return C.S(lVar);
        }
        return C;
    }

    @Override // ut.h
    public void a(CharSequence charSequence, s sVar, st.d dVar, t tVar, boolean z10) {
        c b10;
        if (z10) {
            b10 = this.f52059d;
        } else {
            st.d o10 = this.f52059d.o();
            st.c cVar = tt.a.f51006e;
            net.time4j.tz.o oVar = (net.time4j.tz.o) dVar.b(cVar, o10.b(cVar, net.time4j.tz.l.f38719o));
            st.c cVar2 = tt.a.f51005d;
            net.time4j.tz.l lVar = null;
            net.time4j.tz.k kVar = (net.time4j.tz.k) dVar.b(cVar2, o10.b(cVar2, null));
            if (kVar != null) {
                lVar = net.time4j.tz.l.N(kVar).Q(oVar);
            }
            b10 = b(this.f52059d.q(), this.f52060e, this.f52061i, (Locale) dVar.b(tt.a.f51004c, this.f52059d.u()), ((Boolean) dVar.b(tt.a.f51023v, Boolean.FALSE)).booleanValue(), lVar);
        }
        Object b11 = b10.b(charSequence, sVar, dVar);
        if (!sVar.i() && b11 != null) {
            tVar.J(b11);
        }
    }

    @Override // ut.h
    public h d(c cVar, st.d dVar, int i10) {
        net.time4j.tz.o oVar = (net.time4j.tz.o) dVar.b(tt.a.f51006e, net.time4j.tz.l.f38719o);
        net.time4j.tz.l lVar = null;
        net.time4j.tz.k kVar = (net.time4j.tz.k) dVar.b(tt.a.f51005d, null);
        Locale locale = (Locale) dVar.b(tt.a.f51004c, Locale.ROOT);
        st.x q10 = cVar.q();
        st.y yVar = this.f52060e;
        st.y yVar2 = this.f52061i;
        boolean booleanValue = ((Boolean) dVar.b(tt.a.f51023v, Boolean.FALSE)).booleanValue();
        if (kVar != null) {
            lVar = net.time4j.tz.l.N(kVar).Q(oVar);
        }
        return new z(b(q10, yVar, yVar2, locale, booleanValue, lVar), this.f52060e, this.f52061i);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof z) {
            z zVar = (z) obj;
            if (this.f52060e.equals(zVar.f52060e) && this.f52061i.equals(zVar.f52061i)) {
                c cVar = this.f52059d;
                if (cVar == null) {
                    if (zVar.f52059d == null) {
                        return true;
                    }
                    return false;
                }
                return cVar.equals(zVar.f52059d);
            }
        }
        return false;
    }

    @Override // ut.h
    public int f(st.o oVar, Appendable appendable, st.d dVar, Set set, boolean z10) {
        boolean z11;
        c cVar = this.f52059d;
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

    @Override // ut.h
    public boolean g() {
        return false;
    }

    @Override // ut.h
    public st.p getElement() {
        return null;
    }

    public int hashCode() {
        c cVar = this.f52059d;
        if (cVar == null) {
            return 0;
        }
        return cVar.hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(z.class.getName());
        sb2.append("[date-style=");
        sb2.append(this.f52060e);
        sb2.append(",time-style=");
        sb2.append(this.f52061i);
        sb2.append(",delegate=");
        sb2.append(this.f52059d);
        sb2.append(']');
        return sb2.toString();
    }

    private z(c cVar, st.y yVar, st.y yVar2) {
        if (yVar != null && yVar2 != null) {
            this.f52060e = yVar;
            this.f52061i = yVar2;
            this.f52059d = cVar;
            return;
        }
        throw new NullPointerException("Missing display style.");
    }

    @Override // ut.h
    public h e(st.p pVar) {
        return this;
    }
}
