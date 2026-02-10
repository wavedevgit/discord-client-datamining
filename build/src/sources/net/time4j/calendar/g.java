package net.time4j.calendar;

import java.io.Serializable;
import java.util.Locale;
import net.time4j.b0;
import tt.t;
import tt.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class g implements t, Serializable {

    /* renamed from: d  reason: collision with root package name */
    static final g f38327d = new g();
    private static final long serialVersionUID = -5874268477318061153L;

    g() {
    }

    @Override // st.p
    public boolean A() {
        return true;
    }

    @Override // st.p
    public boolean D() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(st.o oVar, st.o oVar2) {
        return ((h) oVar.t(this)).compareTo((h) oVar2.t(this));
    }

    @Override // st.p
    /* renamed from: b */
    public h e() {
        return h.f(12);
    }

    @Override // st.p
    /* renamed from: c */
    public h B() {
        return h.f(1);
    }

    @Override // st.p
    public char d() {
        return 'M';
    }

    @Override // st.p
    public boolean f() {
        return false;
    }

    /* JADX WARN: Removed duplicated region for block: B:53:0x014a  */
    /* JADX WARN: Removed duplicated region for block: B:55:0x014e  */
    @Override // tt.t
    /* renamed from: g */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public net.time4j.calendar.h l(java.lang.CharSequence r20, java.text.ParsePosition r21, st.d r22) {
        /*
            Method dump skipped, instructions count: 351
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: net.time4j.calendar.g.l(java.lang.CharSequence, java.text.ParsePosition, st.d):net.time4j.calendar.h");
    }

    @Override // st.p
    public Class getType() {
        return h.class;
    }

    @Override // st.p
    public String name() {
        return "MONTH_OF_YEAR";
    }

    @Override // tt.t
    public void o(st.o oVar, Appendable appendable, st.d dVar) {
        tt.s l10;
        Locale locale = (Locale) dVar.b(tt.a.f51004c, Locale.ROOT);
        h hVar = (h) oVar.t(this);
        if (dVar.c(vt.a.f52995m)) {
            appendable.append(hVar.d(locale, (tt.j) dVar.b(tt.a.f51013l, tt.j.f51062d), dVar));
            return;
        }
        v vVar = (v) dVar.b(tt.a.f51008g, v.WIDE);
        tt.m mVar = (tt.m) dVar.b(tt.a.f51009h, tt.m.FORMAT);
        if (hVar.e()) {
            l10 = tt.b.c("chinese", locale).g(vVar, mVar);
        } else {
            l10 = tt.b.c("chinese", locale).l(vVar, mVar);
        }
        appendable.append(l10.f(b0.f(hVar.getNumber())));
    }

    protected Object readResolve() {
        return f38327d;
    }
}
