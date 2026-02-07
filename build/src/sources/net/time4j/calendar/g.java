package net.time4j.calendar;

import java.io.Serializable;
import java.util.Locale;
import net.time4j.b0;
import st.t;
import st.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class g implements t, Serializable {

    /* renamed from: d  reason: collision with root package name */
    static final g f39235d = new g();
    private static final long serialVersionUID = -5874268477318061153L;

    g() {
    }

    @Override // rt.p
    public boolean A() {
        return true;
    }

    @Override // rt.p
    public boolean D() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(rt.o oVar, rt.o oVar2) {
        return ((h) oVar.s(this)).compareTo((h) oVar2.s(this));
    }

    @Override // rt.p
    /* renamed from: b */
    public h e() {
        return h.f(12);
    }

    @Override // rt.p
    /* renamed from: c */
    public h B() {
        return h.f(1);
    }

    @Override // rt.p
    public char d() {
        return 'M';
    }

    /* JADX WARN: Removed duplicated region for block: B:53:0x014a  */
    /* JADX WARN: Removed duplicated region for block: B:55:0x014e  */
    @Override // st.t
    /* renamed from: g */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public net.time4j.calendar.h r(java.lang.CharSequence r20, java.text.ParsePosition r21, rt.d r22) {
        /*
            Method dump skipped, instructions count: 351
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: net.time4j.calendar.g.r(java.lang.CharSequence, java.text.ParsePosition, rt.d):net.time4j.calendar.h");
    }

    @Override // rt.p
    public Class getType() {
        return h.class;
    }

    @Override // rt.p
    public boolean i() {
        return false;
    }

    @Override // rt.p
    public String name() {
        return "MONTH_OF_YEAR";
    }

    protected Object readResolve() {
        return f39235d;
    }

    @Override // st.t
    public void v(rt.o oVar, Appendable appendable, rt.d dVar) {
        st.s l10;
        Locale locale = (Locale) dVar.b(st.a.f50160c, Locale.ROOT);
        h hVar = (h) oVar.s(this);
        if (dVar.c(ut.a.f52135m)) {
            appendable.append(hVar.d(locale, (st.j) dVar.b(st.a.f50169l, st.j.f50218d), dVar));
            return;
        }
        v vVar = (v) dVar.b(st.a.f50164g, v.WIDE);
        st.m mVar = (st.m) dVar.b(st.a.f50165h, st.m.FORMAT);
        if (hVar.e()) {
            l10 = st.b.c("chinese", locale).g(vVar, mVar);
        } else {
            l10 = st.b.c("chinese", locale).l(vVar, mVar);
        }
        appendable.append(l10.f(b0.f(hVar.getNumber())));
    }
}
